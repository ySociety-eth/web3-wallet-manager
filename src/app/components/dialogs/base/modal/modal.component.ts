import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, HostListener, inject, input, output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapDirective } from '../../../../directives/accessibility/focus-trap.directive';
import { DocumentListenerService } from '../../../../services/document-listener.service';
import { createAnimation, createQueryAnimations } from '../../../../animations/default-transitions.animations';

export type ModalSizeUnit = `${number}${'px' | 'em' | 'rem'}`;

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule, FocusTrapDirective],
  host: { '[@queryAnimationsModal]': '', class: 'modal' },
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    createAnimation('popUp', { duration: '200ms', transform: 'scale(.3)', opacity: '0' }),
    createAnimation('fadeInOut', { duration: '250ms', opacity: '0' }),
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ModalComponent implements AfterViewInit{
  documentListener = inject(DocumentListenerService);
  onCloseModal = output();
  minWidth = input<ModalSizeUnit>('350px');
  role = input.required<string>();
  ariaLabelledBy = input<string>();
  ariaDescribedBy = input<string>();
  ariaLabel = input<string>();

  constructor(){
    effect(() => {
      const event = this.documentListener.event$();
      if(event instanceof KeyboardEvent) {
        this.handleKeyDown(event);
      }
    })
  }

  @ViewChild('ModalCloseButton') modalCloseButton!: ElementRef;

  ngAfterViewInit(): void {
   // focus on the close button so the user get the focus on the modal and trapped inside it
     this.modalCloseButton.nativeElement.focus();
  }

  onKeydownClose(event: KeyboardEvent) {
     if(event.key === 'Enter' || event.key === ' ') {
       this.onCloseModal.emit();
     }
   } 

  handleKeyDown(event: KeyboardEvent) {
    if(event.key === 'Escape') {
      this.onCloseModal.emit();
    }
  }
    
  
}
