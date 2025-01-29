import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[interactiveElement]'
})
export class InteractiveElementDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
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
    if(event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // avoid scroll when spacebar is hitted
      const element = this.el.nativeElement as HTMLElement
      element.click();
    }
  }



}
