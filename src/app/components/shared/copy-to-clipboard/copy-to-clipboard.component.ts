import { Component, ElementRef, HostListener, input, ViewChild } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
@Component({
  selector: 'button[copy-to-clipboard]',
  imports: [ClipboardModule],
  template: `<i #copyIcon [cdkCopyToClipboard]="value() || ''"  class='fi fi-rr-copy-alt flex text-mutedForeground hover:text-accentForeground cursor-pointer transition-colors'>`,
})
export class CopyToClipboardComponent {
  value = input<string>();
  @ViewChild('copyIcon') copyIcon!: ElementRef;

  @HostListener('click', ['$event'])
  onButtonClick() {
    this.copyIcon.nativeElement.click(); // trigger click on <i> element when host is clicked.
    //that will active the [cdkCopyToClipboard] directive
  }
}
