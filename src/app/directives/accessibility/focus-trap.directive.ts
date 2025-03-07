import { Directive, effect, ElementRef, HostListener } from '@angular/core';
import { DocumentListenerService } from '../../services/document-listener.service';

@Directive({
  selector: '[focusTrap]',
  standalone: true
})
export class FocusTrapDirective {
  private firstFocusableElement: HTMLElement | null = null;
  private lastFocusableElement: HTMLElement | null = null;

  constructor(private elementRef: ElementRef, documentListener: DocumentListenerService) {
    effect(() => {
      const event = documentListener.event$();
      if (event instanceof KeyboardEvent) {
        this.handleKeyDown(event);
      }
    });
  }

  ngAfterViewInit() {
    const focusableElements = this.elementRef.nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
      this.firstFocusableElement = focusableElements[0];
      this.lastFocusableElement = focusableElements[focusableElements.length - 1];
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === this.firstFocusableElement) {
          event.preventDefault();
          this.lastFocusableElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === this.lastFocusableElement) {
          event.preventDefault();
          this.firstFocusableElement?.focus();
        }
      }
    }
  }

}
