import { effect, inject, Injectable, Signal, signal } from '@angular/core';
import { WalletConnectService } from './wallet-connect.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterModalService {
  private walletConnectService = inject(WalletConnectService);
  private authService = inject(AuthService);
  private isModalOpen = signal(true);
  private error = signal<string | null>(null);
  public $error = this.error.asReadonly();

  constructor() { 
    effect(() => {
      const walletEvents = this.walletConnectService.$walletConnectEvents();
      if (walletEvents?.data.event == "CONNECT_SUCCESS") {
        const walletAddress = this.walletConnectService.$walletAddress(); // get the wallet address from the wallet connect service
        
        if(walletAddress) { // check if the address is not null
          this.authService.generateToken(walletAddress).subscribe({
            next: (res) => {
              if(res.registeredUser === false) {
                this.openModal(); // open the modal if the user is not registered 
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

  get isModalOpen$(): Signal<boolean> {
    return this.isModalOpen.asReadonly();
  }

  public openModal() {
    this.isModalOpen.set(true);
  }
  
  public closeModal() {
    this.isModalOpen.set(false);
  }

  public toggleModal() {
    this.isModalOpen.update((isOpen) => !isOpen);
  }

  public setError(error: string | null) {
    this.clearError(); // clear previous error so animation can be shown
    setTimeout(() => { // set a timeout to show loading animation
      this.error.set(error);
    }, 200);
  }

  public clearError() {
    this.error.set(null);
  }
}
