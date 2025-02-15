import { Component, HostBinding, input, ChangeDetectorRef, ChangeDetectionStrategy, computed } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  public background = input<'filled' | 'transparent'>('filled');
  protected baseClasses = computed(() => {
    return this.background() === 'filled' ? 'bg-card p-4 rounded-xl' : 'p-4 rounded-xl border border-border';
  })
  @HostBinding('class') get applyBaseClasses(): string {
    return this.baseClasses();
  }
}