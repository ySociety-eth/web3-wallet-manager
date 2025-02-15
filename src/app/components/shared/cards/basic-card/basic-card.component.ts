import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { CardComponent } from '../card/card/card.component';

@Component({
  selector: 'card[basic-card]',
  imports: [],
  templateUrl: './basic-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicCardComponent extends CardComponent {
  @HostBinding('class') get classes(): string {
    return `${this.baseClasses()} flex gap-4 items-center`;
  }
  public icon = input<string>('fi-rr-comment');
  public title = input<string>('Title');
  public value = input<string>('Value');
  public valueFontSize = input<string>('2xl');
}
