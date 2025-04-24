import { ChangeDetectionStrategy, Component, computed, inject, output, signal } from '@angular/core';
import { ModalComponent } from '../base/modal/modal.component';
import { createAnimation, createQueryAnimations } from '../../../animations/default-transitions.animations';
import { CustomInputComponent } from '../../base/input/custom-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm } from '../../../models/register-form.interface';
import { CustomizedButtonComponent } from '../../base/customized-button/customized-button.component';
import { WalletConnectService } from '../../../services/wallet-connect.service';
import { RegisterModalService } from '../../../services/register-modal.service';

@Component({
  selector: 'register-modal',
  imports: [ModalComponent, CustomInputComponent, ReactiveFormsModule, CustomizedButtonComponent],
  host: { '[@queryAnimationsModal]': '' },
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss',
  animations: [
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut'),
    createAnimation('popUpError', { duration: "200ms", animateY: true, transform: "scale(.5)" } )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterModalComponent{
  //injections
  protected walletConnectService = inject(WalletConnectService);
  private registerModalService = inject(RegisterModalService);
  //variables
  registerForm!: FormGroup<RegisterForm>;
  onCloseRegisterModal = output();
  isEmpty = signal(true);
  walletAddress = computed(() => this.walletConnectService.$walletAddress());
  get errorMessage(): string | null {
    return this.registerModalService.$error();
  }
  get status(): 'loading' | 'success' | 'default' {
    return this.registerModalService.$status();
  }

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: '',
      email: ['', Validators.email]
    });

    this.registerForm.valueChanges.subscribe(value => { // check if the form is empty
      !!value.name || !!value.email ? this.isEmpty.set(false) : this.isEmpty.set(true);
    })
  }

  updateUser() {
    if(!this.walletAddress()) {
      console.error("Invalid Wallet")
      return
    }
    if(this.registerForm.valid && this.registerModalService.$status() === "default") {
      this.registerModalService.update(this.registerForm.value.name, this.registerForm.value.email);
    }
  }

  close() {
    this.registerModalService.closeModal(); // close the modal
  }

}
