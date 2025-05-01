import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'button[customized-button]',
  imports: [NgClass],
  host: {
    class: 'px-4 py-2 rounded-dft transition-all min-h-[2.5rem] min-w-fit',
  },
  template: `
   @if(status() === 'loading') {
      <span class="loader w-6 mx-auto my-auto"
      [ngClass]="{ 'loader--light': variant() === 'contained' }"
      ></span>
   } @else if (status() === 'success') {
      <i class="fi fi-br-check flex items-center justify-center"></i>
   } @else if (status() === 'default') {
      <ng-content/>
   }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizedButtonComponent {
  variant = input<"contained" | "outline">('contained');
  status = input<"default" | "loading" | "success">('default');

  
  contained = {
    default: 'bg-primary text-foreground border border-primary ' + //base
    'enabled:hover:bg-primary-600 enabled:hover:border-primary-600 ' + //hover
    'disabled:opacity-40 disabled:bg-primary-700 disabled:text-primary-300 disabled:border-primary-700 ' + //disabled
    'enabled:active:opacity-90', //active

    loading: 'bg-primary text-foreground border border-primary opacity-50 hover:cursor-default pointer-events-none',

    success: 'bg-success text-foreground border border-success hover:cursor-default pointer-events-none'
  }

  outline = {
    default: 'border border-primary text-primary ' + //base
    'enabled:hover:bg-primary-600 enabled:hover:text-foreground enabled:hover:border-primary-600 ' + //hover 
    'disabled:opacity-30 ' + //disabled
    'enabled:active:opacity-90', //active

    loading: 'border border-primary opacity-50 hover:cursor-default pointer-events-none',

    success: 'border border-success text-success hover:cursor-default pointer-events-none'
  }

  @HostBinding('class')
  get variantClasses() {
    return `${ this[this.variant()][this.status()] }`;
  }



}