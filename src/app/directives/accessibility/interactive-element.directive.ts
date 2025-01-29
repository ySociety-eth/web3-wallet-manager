import { Directive, ElementRef, Renderer2, OnInit, HostListener, input } from '@angular/core';

@Directive({
  selector: '[interactiveElement]'
})
export class InteractiveElementDirective implements OnInit {

  public interactiveElement = input<boolean>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if(!this.interactiveElement()) { //verify if the element is not interactive
      return;
    }
    this.setTabIndex();
  }

  private setTabIndex() {
    const element = this.el.nativeElement as HTMLElement;
    if(!element.hasAttribute('tabindex')) { //verify if the element has not the tabindex attribute
      this.renderer.setAttribute(element, 'tabindex', '0'); //add tabindex = 0 to the element
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(!this.interactiveElement()) { //verify if the element is not interactive
      return;
    }

    if(event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // avoid scroll when spacebar is hitted
      const element = this.el.nativeElement as HTMLElement
      element.click();
    }
  }



}
