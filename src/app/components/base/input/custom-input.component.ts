import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { createAnimation } from '../../../animations/default-transitions.animations';
type InputTypes = "text" | "email" | "password" | "date" | "search" | "tel" | "number";
export interface CheckInput {
  sourceElement: HTMLInputElement,
  formControlName: string
}


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
  animations: [createAnimation('fadeInOut', { duration: '200ms', opacity: '0' })],
})


export class CustomInputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  @Input() type: InputTypes = "text";
  @Input() title: string = "";
  @Input() placeholder: string = "";
  @Input() formControlName: string = '';
  @Input() isInvalid: boolean = false;
  @Input() rightInfo: boolean = false;
  @Output() inputElement = new EventEmitter<CheckInput>;
  @Input({ required: true }) id = '';
  @Input() disabled: boolean = false;

  //accessibility
  @Input() ariaLabel: string = '';
  @Input() ariaLabelledby: string = '';
  @Input() ariaRequired: boolean = false;
  

  //ngxmask inputs
  @Input() dropSpecialCharacters: boolean = false;
  @Input() mask: string = '';
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  //input control
  @Input() maxLength: number = 0;


  hideShowPassword = input<boolean>(false);
  passwordVisible: boolean = false;
  inputErrorId: string = '';
  initialValue = input('');
  value: string = ''

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.inputErrorId = "input-error-" + this.id;
  }

  ngAfterViewInit(): void {
    this.value = this.initialValue();
  }

  get hasInvalidClass() { // REFACTOR THIS
    return this.element.nativeElement.classList.contains('ng-invalid') && this.element.nativeElement.classList.contains('ng-dirty');
  }

  showPassword() {
    this.passwordVisible = false;
  }

  hidePassword() {
    this.passwordVisible = true;
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  

  //NGVALUEACCESSOR

  onChange: any = () => {};
  onTouched: any = () => {};

  
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    setTimeout(() => { // settTimetout to avoid ngxmask override the value
      this.value = value;
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
