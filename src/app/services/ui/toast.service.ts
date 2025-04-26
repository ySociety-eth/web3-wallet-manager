import { Injectable, signal } from '@angular/core';
import { Toast } from '../../models/toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts = signal<Toast[]>([]);
  private toastId = 0;
  public $toasts = this.toasts.asReadonly();

  public create(toast: Toast) {
    const newToast = toast;
    newToast.id = this.toastId++; // assigns a unique id to each toast
    newToast.isVisible = true;
    this.toasts.update(list => [...list, newToast]);
  }

  public removeToast(toast: Toast) {
    const newToastArray = this.toasts().filter(value => value.id !== toast.id); // creates a new toastArray excluding selected toasted parameter
    this.toasts.set(newToastArray);
  }

}
