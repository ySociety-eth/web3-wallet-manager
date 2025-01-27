import { Component, input } from '@angular/core';

@Component({
  selector: 'basic-card',
  host: {
    class: 'flex gap-4 items-center bg-card p-4 rounded-xl'
  },
  imports: [],
  templateUrl: './basic-card.component.html'
})
export class BasicCardComponent {
  public icon = input<string>('fi-rr-comment');
  public title = input<string>('Title');
  public value = input<string>('Value');
  public valueFontSize = input<string>('2xl');
}
