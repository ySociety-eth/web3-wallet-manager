import { inject, Injectable, Signal, signal } from '@angular/core';
import { UserService } from '../user.service';
import { catchError, delay, merge, of, switchMap, throwError, timer } from 'rxjs';
import { ModalService } from './modal.service';
import { RegisterFormComponent } from '../../components/dialogs/register-form/register-form.component';
import { ModalRef } from '../../models/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private userService = inject(UserService);
  private modalService = inject(ModalService);
  private error = signal<string | null>(null);
  private state = signal<'default' | 'loading' | 'success'>('default');
  private modalRef?: ModalRef<RegisterFormComponent>;
  

  // Public signals to be used in components
  public $error = this.error.asReadonly();
  public $state = this.state.asReadonly();
  

  public openModal() {
    this.modalRef = this.modalService.open(RegisterFormComponent, { role: 'dialog' })
    this.modalRef.componentRef.instance.skipped.subscribe(this.modalRef.close); // close modal when skip button is pressed
    this.modalRef.afterClosed$.subscribe(() => this.resetState());
  }

  private resetState() {
    this.state.set("default");
    this.clearError(); // clear error when closing the modal
  }

  public closeModal() {
    if(this.modalRef) {
      this.resetState();
      this.modalRef.close();
    }
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

  update(name?: string, email?: string) {
    this.state.set("loading");

    this.userService.update(name, email)
    .pipe(
      switchMap(res => of(res).pipe(delay(1000))), // create a delayed observable with the answer
      catchError(err => timer(1000).pipe(switchMap(() => throwError(() => err))))
    ).subscribe({
      next: () => {
        this.clearError();
        this.state.set("success");
        setTimeout(() => this.closeModal(), 1500);
      },
      error: (err) => {
        this.setError(err.error?.message || "An unexpected error occurred");
        this.state.set("default")
      }
    })
  }
}
