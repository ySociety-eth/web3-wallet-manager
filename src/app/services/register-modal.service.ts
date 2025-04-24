import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterModalService {
  private isModalOpen = signal(true);
  private error = signal<string | null>(null);
  public $error = this.error.asReadonly();

  get isModalOpen$(): Signal<boolean> {
    return this.isModalOpen.asReadonly();
  }

  public openModal() {
    this.isModalOpen.set(true);
  }
  
  public closeModal() {
    this.isModalOpen.set(false);
    this.clearError(); // clear error when closing the modal
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
