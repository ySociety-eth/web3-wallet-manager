import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  template: `<ng-content></ng-content>`
})
export class CardComponent {
  @HostBinding('class') baseClasses = 'bg-card p-4 rounded-xl';
}
