import { Component, ElementRef, HostListener, input, signal, ViewChild } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'button[copy-to-clipboard]',
  imports: [ClipboardModule, MatTooltipModule],
  template: `<i #tooltip="matTooltip" #copyIcon [matTooltip]="'Copy to Clipboard'" [cdkCopyToClipboard]="value() || ''"
   class='fi fi-rr-copy-alt flex text-mutedForeground hover:text-accentForeground cursor-pointer transition-colors'
   (click)="onCopyToClipboardClick(tooltip)">`,
})
export class CopyToClipboardComponent {
  value = input<string>();
  @ViewChild('copyIcon') copyIcon!: ElementRef;

  @HostListener('click', ['$event'])
  onButtonClick() {
    this.copyIcon.nativeElement.click(); // trigger click on <i> element when host is clicked.
    //that will active the [cdkCopyToClipboard] directive
  }

  onCopyToClipboardClick(tooltip: MatTooltip) {
    tooltip.show()
    if(tooltip.message !== 'Copied') { // avoid multiple executions of the tooltip handler
      tooltip.message = 'Copied' // change tooltip message to 'Copied'
      tooltip.hideDelay = 500;
  
      setTimeout(() => { // reset tooltip message to 'Copy' after 2.5 seconds
        tooltip.message = 'Copy to Clipboard'
        tooltip.hideDelay = 0;
      }, 2500);
    }
  }
  
}
