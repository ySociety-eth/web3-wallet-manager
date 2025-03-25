import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, of, switchMap } from "rxjs";
import { NonceResponse, ValidateSignatureResponse } from "../models/api/auth.interface";
import { EthersService } from "./ethers.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {
    private http = inject(HttpClient)
    private ethersService = inject(EthersService);
    private localStorageService = inject(LocalStorageService);
    private readonly url = "/api/auth"

    // This method is responsible for generating a nonce for a given wallet address.
    public generateNonce(wallet: string): Observable<NonceResponse>{
        const body = { wallet: wallet };
        return this.http.post<NonceResponse>(this.url + "/nonce", body);
    }
    
    // This method is responsible for validating the signature of a wallet address using a nonce.
    public validateSignature(wallet: string, signature: string, nonce: number): Observable<ValidateSignatureResponse> {
        const body = { wallet: wallet, signature: signature, nonce: nonce };
        return this.http.post<ValidateSignatureResponse>(this.url + "/validate", body);
    }

    // This method is responsible for generating a token using the wallet address and storing it in local storage.
    // It first generates a nonce using the wallet address, then signs the nonce using the EthersService,
    // and finally validates the signature with the server to obtain a token.
    // The token is then saved in local storage for future use.
    // It returns an observable that emits the token response or null in case of an error.
    public generateToken(wallet: string): Observable<ValidateSignatureResponse | null> {
        return this.generateNonce(wallet).pipe(
            switchMap(nonceResponse => { // generate nonce
                return this.ethersService.signMessage(nonceResponse.message).pipe( // sign message
                    switchMap(signature => {
                        return this.validateSignature(wallet, signature, nonceResponse.nonce).pipe(
                            switchMap(tokenResponse => {
                                this.localStorageService.saveToken(tokenResponse.token); // save token in local storage
                                return of(tokenResponse); // return token response
                            })
                        )
                    })
                );
            }),
            catchError(err => {
                console.error(err);
                return of(null); // Retorna null em caso de erro
            })
        );
    }


}