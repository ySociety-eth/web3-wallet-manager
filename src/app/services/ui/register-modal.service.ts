import { inject, Injectable, Signal, signal } from '@angular/core';
import { UserService } from '../user.service';
import { catchError, delay, of, switchMap, throwError, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterModalService {
  private userService = inject(UserService);
  private error = signal<string | null>(null);
  private status = signal<'default' | 'loading' | 'success'>('default');

  // Public signals to be used in components
  public $error = this.error.asReadonly();
  public $status = this.status.asReadonly();
  
  public closeModal() {
    this.status.set("default");
    this.clearError(); // clear error when closing the modal
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
    this.status.set("loading");

    this.userService.update(name, email)
    .pipe(
      switchMap(res => of(res).pipe(delay(1000))), // create a delayed observable with the answer
      catchError(err => timer(1000).pipe(switchMap(() => throwError(() => err))))
    ).subscribe({
      next: () => {
        this.clearError()
        this.status.set("success")
      },
      error: (err) => {
        this.setError(err.error?.message || "An unexpected error occurred");
        this.status.set("default")
      }
    })
  }
}
