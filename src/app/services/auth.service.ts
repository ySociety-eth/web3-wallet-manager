import { HttpClient } from "@angular/common/http";
import { effect, inject, Injectable } from "@angular/core";
import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { NonceResponse, ValidateSignatureResponse } from "../models/api/auth.interface";
import { EthersService } from "./ethers.service";
import { LocalStorageService } from "./local-storage.service";
import { WalletConnectService } from "./wallet-connect.service";
import { UserService } from "./user.service";
import { RegisterModalService } from "./ui/register-modal.service";
import { ModalService } from "./ui/modal.service";
import { RegisterFormComponent } from "../components/dialogs/register-form/register-form.component";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {
    private http = inject(HttpClient)
    private ethersService = inject(EthersService);
    private localStorageService = inject(LocalStorageService);
    private walletConnectService = inject(WalletConnectService);
    private userService = inject(UserService);
    private modalService = inject(ModalService);
    private registerModalService = inject(RegisterModalService);

    private readonly url = "/api/auth"

    constructor() {
        effect(() => {
            const walletEvents = this.walletConnectService.$walletConnectEvents();
            if (walletEvents?.data.event == "CONNECT_SUCCESS") {
                this.authenticate(); // authenticate after wallet connect success
            }
        })
    }

    // This method is responsible for generating a nonce for a given wallet address.
    private generateNonce(wallet: string): Observable<NonceResponse>{
        const body = { wallet: wallet };
        return this.http.post<NonceResponse>(this.url + "/nonce", body);
    }
    
    // This method is responsible for validating the signature of a wallet address using a nonce.
    private validateSignature(id: string, wallet: string, signature: string, nonce: number): Observable<ValidateSignatureResponse> {
        const body = { id, wallet, signature, nonce };
        return this.http.post<ValidateSignatureResponse>(this.url + "/validate", body);
    }

    // This method is responsible for generating a token using the wallet address and storing it in local storage.
    // It first generates a nonce using the wallet address, then signs the nonce using the EthersService,
    // and finally validates the signature with the server to obtain a token.
    // The token is then saved in local storage for future use.
    // It returns an observable that emits the token response or null in case of an error.
    public generateToken(wallet: string): Observable<ValidateSignatureResponse> {
        return this.generateNonce(wallet).pipe(
            switchMap(nonceResponse => { // generate nonce
                return this.ethersService.signMessage(nonceResponse.data.message).pipe( // sign message
                    switchMap(signature => {
                        return this.validateSignature(nonceResponse.data.id, wallet, signature, nonceResponse.data.nonce).pipe(
                            switchMap(tokenResponse => {
                                this.localStorageService.saveToken(tokenResponse.data.token); // save token in local storage
                                return of(tokenResponse); // return token response
                            })
                        )
                    })
                );
            }),
            catchError(err => {
                console.error(err);
                this.localStorageService.removeToken(); // remove token from local storage in case of error
                return throwError(() => new Error(err)); 
            })
        );
    }

    private authenticate() {
        const walletAddress = this.walletConnectService.$walletAddress(); // get the wallet address from the wallet connect service
        if(walletAddress) { // check if the address is not null
          this.generateToken(walletAddress).subscribe({
            next: (res) => {
                if(res.data.registeredUser === false) {
                    this.userService.register(res.data.id, walletAddress); // register the user if not registered
                    this.createFormModal();
                }
            },
            error: (err) => {
              this.walletConnectService.disconnect(); // disconnect the wallet if there is an error
            }
          })
        }
    }

    private createFormModal() {
        const modalRef = this.modalService.open(RegisterFormComponent, { role: 'dialog' }) // open the modal so user can fill the optional fields
        modalRef.componentRef.instance.submitted.subscribe(formControl => { 
            this.registerModalService.update(formControl.name.value, formControl.email.value);
        }) // send request
        modalRef.componentRef.instance.skip.subscribe(() => {
            modalRef.close() // close modal when skip button is pressed
        });

        modalRef.afterClosed$.subscribe(() => this.registerModalService.closeModal());
    }


}