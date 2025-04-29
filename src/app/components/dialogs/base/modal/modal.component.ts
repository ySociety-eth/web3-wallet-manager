import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentRef, effect, ElementRef, EnvironmentInjector, HostListener, inject, input, output, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapDirective } from '../../../../directives/accessibility/focus-trap.directive';
import { DocumentListenerService } from '../../../../services/document-listener.service';
import { createAnimation, createQueryAnimations } from '../../../../animations/default-transitions.animations';
import { ModalSizeUnit } from '../../../../models/modal.interface';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule, FocusTrapDirective],
  host: { '[@queryAnimationsModal]': '', class: 'modal' },
  template: `
  <!-- <div class="modal"> host div-->
  <div class="modal__content" @popUp focusTrap
    [ngStyle]="{'width': 'min(' + minWidth() + ', 100%)'}"
    [attr.role]="role()" [attr.aria-labelledby]="ariaLabelledBy()" [attr.aria-describedby]="ariaDescribedBy()"
    [attr.aria-label]="ariaLabel()" aria-modal="true"> 
    <button #ModalCloseButton class="close-sr-only" aria-label="Close Modal" (keydown)="onKeydownClose($event)"></button>
        <ng-template #vc></ng-template>
    </div>
    <div class="modal__backdrop" @fadeInOut (click)="onCloseModal.emit()"></div>
  <!-- </div> -->`,
  styleUrl: './modal.component.scss',
  animations: [
    createAnimation('popUp', { duration: '200ms', transform: 'scale(.3)', opacity: '0' }),
    createAnimation('fadeInOut', { duration: '250ms', opacity: '0' }),
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ModalComponent<T> implements AfterViewInit {
  // injections
  private envInjector = inject(EnvironmentInjector);
  private documentListener = inject(DocumentListenerService);

  //content inputs
  public component = input.required<Type<T>>();
  public componentInputs = input<Partial<T>>({});

  // modal controls
  onCloseModal = output();
  minWidth = input<ModalSizeUnit>('350px');
  role = input.required<string>();
  ariaLabelledBy = input<string>();
  ariaDescribedBy = input<string>();
  ariaLabel = input<string>();

  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc!: ViewContainerRef;
  @ViewChild('ModalCloseButton') modalCloseButton!: ElementRef;

  public cmpRef?: ComponentRef<T>;

  constructor(){
    effect(() => {
      const event = this.documentListener.event$();
      if(event instanceof KeyboardEvent) {
        this.handleKeyDown(event);
      }
    })
  }


  ngAfterViewInit(): void {
    // focus on the close button so the user get the focus on the modal and trapped inside it
    this.modalCloseButton.nativeElement.focus();
    
    // create component()
    this.cmpRef = this.vc.createComponent(this.component(), { environmentInjector: this.envInjector });

    // set inputs
    for (const [key, value] of Object.entries(this.componentInputs())) {
      this.cmpRef.setInput(key, value);
    }
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
