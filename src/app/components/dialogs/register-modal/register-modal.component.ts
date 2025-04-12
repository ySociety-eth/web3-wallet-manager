import { ChangeDetectionStrategy, Component, computed, effect, inject, output, signal } from '@angular/core';
import { ModalComponent } from '../base/modal/modal.component';
import { createQueryAnimations } from '../../../animations/default-transitions.animations';
import { CustomInputComponent } from '../../base/input/custom-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm } from '../../../models/register-form.interface';
import { CustomizedButtonComponent } from '../../base/customized-button/customized-button.component';
import { WalletConnectService } from '../../../services/wallet-connect.service';
import { EthersService } from '../../../services/ethers.service';
import { AuthService } from '../../../services/auth.service';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'register-modal',
  imports: [ModalComponent, CustomInputComponent, ReactiveFormsModule, CustomizedButtonComponent],
  host: { '[@queryAnimationsModal]': '' },
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss',
  animations: [
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterModalComponent{
  //injections
  private authService = inject(AuthService);
  protected walletConnectService = inject(WalletConnectService);
  private ethersService = inject(EthersService);
  private registerService = inject(RegisterService);
  //variables
  registerForm!: FormGroup<RegisterForm>;
  onCloseRegisterModal = output();
  isEmpty = signal(true);
  walletAddress = computed(() => this.walletConnectService.$walletAddress());

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: '',
      email: ['', Validators.email]
    });

    this.registerForm.valueChanges.subscribe(value => { // check if the form is empty
      !!value.name || !!value.email ? this.isEmpty.set(false) : this.isEmpty.set(true);
    })
  }

  register() {
    if(!this.walletAddress()) {
      console.error("Invalid Wallet")
      return
    }
    if(this.registerForm.valid) {
      this.registerService.register(this.walletAddress()!, this.registerForm.value.name, this.registerForm.value.email);
    }
  }

}
