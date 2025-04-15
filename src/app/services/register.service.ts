import { effect, inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterModalService } from "./register-modal.service";
import { WalletConnectService } from "./wallet-connect.service";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private readonly url = "/api/auth"
    private http = inject(HttpClient);
    private registerModalService = inject(RegisterModalService);
    private walletConnectService = inject(WalletConnectService);
    private authService = inject(AuthService);

      constructor() { 
        effect(() => {
          const walletEvents = this.walletConnectService.$walletConnectEvents();
          if (walletEvents?.data.event == "CONNECT_SUCCESS") {
            const walletAddress = this.walletConnectService.$walletAddress(); // get the wallet address from the wallet connect service
            
            if(walletAddress) { // check if the address is not null
              this.authService.generateToken(walletAddress).subscribe({
                next: (res) => {
                    if(res.data.registeredUser === false) {
                        this.register(walletAddress); // register the user if not registered
                        this.registerModalService.openModal(); // open the modal so user can fill the optional fields
                    }
                },
                error: (err) => {
                  this.walletConnectService.disconnect(); // disconnect the wallet if there is an error
                }
              })
            }
          }
        })
      }

    public register(wallet: string, name?: string, email?: string) {
      this.http.post(`${this.url}/register`, { wallet, name, email }).subscribe({
          next: (res) => {
          },
          error: (err) => {
              console.error(err);
          }
      })
    }

    public update(name?: string, email?: string) {
      const body: { name?: string, email?: string } = { };
      if (name !== "") {
        body.name = name;
      }
      if (email !== "") {
        body.email = email;
      }

      this.http.put(`${this.url}/user`, body).subscribe({
          next: (res) => {
              this.registerModalService.clearError();
              this.registerModalService.closeModal(); // Close the modal after successful update
          },
          error: (err) => {
              console.error(err);
              this.registerModalService.setError(err.error.message); // Set error message in the modal service
          }
      })
    }
}