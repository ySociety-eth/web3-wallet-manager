import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, effect, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { createAnimation } from '../../../animations/default-transitions.animations';
type InputTypes = "text" | "email" | "password" | "date" | "search" | "tel" | "number";
// export interface CheckInput {
//   sourceElement: HTMLInputElement,
//   formControlName: string
// }


@Component({
  selector: 'custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, NgxMaskDirective],
  host: {
    class: 'input-wrapper',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  animations: [createAnimation('fadeInOut', { duration: '200ms', opacity: '0', animateY: true, transform: 'translateY(-100%)' })],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class CustomInputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  type = input<InputTypes>("text");
  title = input<string>("");
  placeholder = input<string>("");
  isInvalid = input<boolean>(false);
  rightInfo = input<boolean>(false);
  id = input.required<string>();
  disabled = input<boolean>(false);
  @ViewChild('input') inputElementRef: ElementRef<HTMLInputElement> | undefined;

  //accessibility
  ariaLabel = input<string>('');
  ariaLabelledby = input<string>('');
  ariaRequired = input<boolean>(false);
  

  //ngxmask inputs
  mask = input<string>('');
  prefix = input<string>('');
  suffix = input<string>('');
  //input control
  maxLength = input<number>(0);
  hideShowPassword = input<boolean>(false);
  initialValue = input('');

  passwordVisible = signal<boolean>(false);
  inputErrorId: string = '';
  value = signal('');

  ngOnInit(): void {
    this.inputErrorId = "input-error-" + this.id();
  }

  ngAfterViewInit(): void {
    setTimeout(() => { // setTimeout to avoid ngxmask override the value
      this.inputElementRef!.nativeElement.value = this.initialValue();
    });
  }

  constructor() {
    effect(() => {
      if(this.inputElementRef) this.inputElementRef.nativeElement.value = this.initialValue() // set the initial value if initialValue is setted after the component is initialized
      this.value.set(this.initialValue());
    })
  }

  showPassword() {
    this.passwordVisible.set(true);
  }

  hidePassword() {
    this.passwordVisible.set(false);
  }

  togglePasswordVisibility() {
    this.passwordVisible.update(visible => !visible);
  }

  //NGVALUEACCESSOR

  onChange: any = () => {};
  onTouched: any = () => {};

  
  onInput(event: Event): void {
    const inputElementValue = (event.target as HTMLInputElement).value // get value from
    this.onChange(inputElementValue);
    this.onTouched();
  }

  writeValue(value: any): void {
    setTimeout(() => { // settTimetout to avoid ngxmask override the value
      this.value.set(value);
    });
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

//NGVALUEACCESSOR end

  
}
