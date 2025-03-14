import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterModalService {
  private isModalOpen = signal(true);
  constructor() { }

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
}
