import { ChangeDetectionStrategy, Component, computed, inject, Input, input, output, signal } from '@angular/core';
import { createAnimation, createQueryAnimations } from '../../../animations/default-transitions.animations';
import { CustomInputComponent } from '../../base/input/custom-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm } from '../../../models/register-form.interface';
import { CustomizedButtonComponent } from '../../base/customized-button/customized-button.component';
import { WalletConnectService } from '../../../services/wallet-connect.service';
import { RegisterModalService } from '../../../services/ui/register-modal.service';

@Component({
  selector: 'register-modal',
  imports: [CustomInputComponent, ReactiveFormsModule, CustomizedButtonComponent],
  host: { '[@queryAnimationsModal]': '' },
  templateUrl: './register-form.component.html',
  animations: [
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut'),
    createAnimation('popUpError', { duration: "200ms", animateY: true, transform: "scale(.5)" } )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent{
  //injections
  protected walletConnectService = inject(WalletConnectService);
  private registerModalService = inject(RegisterModalService);
  //variables
  registerForm!: FormGroup<RegisterForm>;
  onCloseRegisterModal = output();
  isEmpty = signal(true);
  walletAddress = computed(() => this.walletConnectService.$walletAddress());
  skip = output();
  submitted = output<RegisterForm>();

  get errorMessage(): string | null {
    return this.registerModalService.$error();
  }
  get status(): 'loading' | 'success' | 'default' {
    return this.registerModalService.$status();
  }

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: this.fb.control('', { nonNullable: true }),
      email: this.fb.control('', { nonNullable: true, validators: [Validators.email] })
    });
  
    this.registerForm.valueChanges.subscribe(value => { // check if the form is empty
      !!value.name || !!value.email ? this.isEmpty.set(false) : this.isEmpty.set(true);
    });
  }

  onFormSubmit() {
    if(!this.walletAddress()) {
      console.error("Invalid Wallet")
      return
    }
    if(this.registerForm.valid && this.registerModalService.$status() === "default") {
      this.submitted.emit(this.registerForm.controls);
    }
  }
}
