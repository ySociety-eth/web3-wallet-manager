import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'button[customized-button]',
  imports: [],
  host: {
    class: 'px-4 py-2 rounded-dft transition-all',
  },
  template: `
  <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizedButtonComponent {
  variant = input<"contained" | "outline">('contained');

  
  contained = 
    'bg-primary text-foreground border border-primary ' + //base
    'enabled:hover:bg-primary-600 enabled:hover:border-primary-600 ' + //hover
    'disabled:opacity-40 disabled:bg-primary-700 disabled:text-primary-300 disabled:border-primary-700 ' + //disabled
    'enabled:active:opacity-90'; //active
    
  outline = 'border border-primary text-primary ' + //base
    'enabled:hover:bg-primary-600 enabled:hover:text-foreground enabled:hover:border-primary-600 ' + //hover 
    'disabled:opacity-30 ' + //disabled
    'enabled:active:opacity-90'; //active

  @HostBinding('class')
  get variantClasses() {
    return `${this[this.variant()]}`;
  }



}