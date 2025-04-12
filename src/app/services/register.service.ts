import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterModalService } from "./register-modal.service";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private readonly url = "/api/auth"
    private http = inject(HttpClient);
    private registerModalService = inject(RegisterModalService);

    // public registerUser(wallet: string, name?: string, email?: string): boolean {
    //     let result = false;
    //     let isTokenValid: boolean | undefined = undefined;

    //     if(this.localstorageService.getToken() === null) { // replace it with with a validation endpoint on future
    //         this.authService.generateToken(wallet).subscribe({
    //             next: (res) => {
    //                 console.log(res);
    //                 isTokenValid = true;
    //                 this.registerRequest(wallet, name, email);
    //             },
    //             error: (err) => {
    //                 console.error(err);
    //                 isTokenValid = false;
    //             }
    //         })
    //     }
        
    //     if(isTokenValid === false) {
    //         console.error("Token not valid")
    //         return false;
    //     }
        
    //     this.registerRequest(wallet, name, email);
    //     result = true;

    //     return result;
    // }

    public register(wallet: string, name?: string, email?: string) {
        this.http.post(`${this.url}/register`, { wallet, name, email }).subscribe({
            next: (res) => {
                this.registerModalService.closeModal(); // Close the modal after successful registration
            },
            error: (err) => {
                console.error(err);
            }
        })
    }
}