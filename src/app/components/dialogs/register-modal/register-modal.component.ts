import { Component, output } from '@angular/core';
import { ModalComponent } from '../base/modal/modal.component';
import { createQueryAnimations } from '../../../animations/default-transitions.animations';
import { CustomInputComponent } from '../../base/input/custom-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm } from '../../../models/register-form.interface';

@Component({
  selector: 'register-modal',
  imports: [ModalComponent, CustomInputComponent, ReactiveFormsModule],
  host: { '[@queryAnimationsModal]': '' },
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss',
  animations: [
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut')
  ]
})
export class RegisterModalComponent{
  registerForm!: FormGroup<RegisterForm>;
  onCloseRegisterModal = output();

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }


}
