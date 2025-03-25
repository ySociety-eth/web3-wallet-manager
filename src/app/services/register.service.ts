import { inject, Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private readonly url = "/api/auth"
    private http = inject(HttpClient);
    private authService = inject(AuthService);
    private localstorageService = inject(LocalStorageService);

    public registerUser(wallet: string, name?: string, email?: string): boolean { //preciso criar um interceptor 
        let result = false;
        let isTokenValid: boolean | undefined = undefined;

        if(this.localstorageService.getToken() === null) { // replace it with with a validation endpoint on future
            this.authService.generateToken(wallet).subscribe({
                next: (res) => {
                    console.log(res);
                    isTokenValid = true;
                    this.registerRequest(wallet, name, email);
                },
                error: (err) => {
                    console.error(err);
                    isTokenValid = false;
                }
            })
        }
        
        if(isTokenValid === false) {
            console.error("Token not valid")
            return false;
        }
        
        this.registerRequest(wallet, name, email);
        result = true;

        return result;
    }

    registerRequest(wallet: string, name?: string, email?: string) {
        this.http.post(`${this.url}/register`, { wallet, name, email }).subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => {
                console.error(err);
            }
        })
    }
}