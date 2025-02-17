import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, ElementRef, HostListener, input, OnChanges, output, signal, SimpleChanges, ViewChild } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { popIn } from '../../../animations/default-transitions.animations';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, FormsModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  animations: [popIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PaginatorComponent implements OnChanges {
  limit = input<number>(1);
  initialPageIndex = input<number>(1);
  getCurrentPage = output<number>();

  constructor(private elementRef: ElementRef) {
    effect(() => {
      this.firstButtonValue = this.getButtonValue(-1);
      this.secondButtonValue = this.getButtonValue(0);
      this.thirdButtonValue = this.getButtonValue(1);
    });
  }
  protected firstButtonValue = 0;
  protected secondButtonValue = 0;
  protected thirdButtonValue = 0;

  protected currentPage = signal<number>(this.initialPageIndex());
  protected secondToLastPage = this.limit() - 1;
  protected showPageSelector = false;
  protected pageSelectorInputValue = '';
  @ViewChild('pageSelector') pageSelectorElementRef!: ElementRef<HTMLInputElement>;
  @ViewChild('pageSelectorInput') pageSelectorInputElementRef!: ElementRef<HTMLInputElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['initialPageIndex']) {
      this.selectPage(this.initialPageIndex());
    }
  }

  selectPage(page: number) {
    this.currentPage.set(page);
    this.getCurrentPage.emit(this.currentPage());
  }

  onPageSelected(page: number){
    if(page < 1 || page > this.limit()){
      return
    }
    this.selectPage(page);
  }

  onPreviousPage(){
    if(this.currentPage() > 1){
      this.selectPage(this.currentPage() - 1);
    }
  }

  onNextPage(){
    if(this.currentPage() < this.limit()){
      this.selectPage(this.currentPage() + 1);
    }
  }
  

  getButtonValue(offset: number): number {
    if(this.currentPage() <= 2) {
      return 2 + offset;
    }

    if(this.limit() === 3 && this.currentPage() === 3) { // fix for when there are only 3 pages
     return  2 + offset;
    }

    if(this.currentPage() >= this.limit() - 1) { // if current page is the second to last page or last page
      return (this.limit() - 2) + offset;
    }

    return this.currentPage() + offset;
  }
  




  // Page Selector modal methods
  closePageSelector() {
    this.showPageSelector = false;
    this.pageSelectorInputValue = '';
  }

  openPageSelector() {
    if(this.limit() >= 3) {
      this.showPageSelector = true;

      setTimeout(() => { // timeout to wait for the element to be rendered before interacting with it
        const inputElement = this.pageSelectorInputElementRef.nativeElement
        inputElement.focus();
      }, 100);
    }
  }

  togglePageSelector() {
    this.showPageSelector ? this.closePageSelector() : this.openPageSelector();
  }


  onSelectSpecificPage(page: string) {
    const pageNumber = parseInt(page, 10);
    if(pageNumber > this.limit() || pageNumber < 1 || isNaN(pageNumber)) {
      return 
    }
    this.selectPage(pageNumber);
    this.closePageSelector();
  }
  
  // prevent user from entering numbers greater than the last page in the input
  onPageSelectorInputChange(value: string, inputElement: HTMLInputElement) {
    const inputValue = parseInt(value, 10);

    if (isNaN(inputValue)) {
      this.pageSelectorInputValue = value;
      return;
    }

    if(inputValue > this.limit()) {
      this.pageSelectorInputValue = this.limit().toString();
      inputElement.value = this.limit().toString(); // update input value to last page number

    } else if(inputValue < 1) {
      this.pageSelectorInputValue = '1';
      inputElement.value = '1'; // update input value to 1

    } else {
      this.pageSelectorInputValue = value; // update to allowed value
    }
  }


  //listeners

  // close page selector on click outside or pressing esc
  @HostListener('document:click', ['$event'])
  @HostListener('document:keydown', ['$event'])
  handleDocumentEvent(event: Event): void {
    if (this.showPageSelector) {
      const hostElement = this.elementRef.nativeElement as HTMLElement;
  
      // close on click outside
      if (event instanceof MouseEvent && !hostElement.contains(event.target as Node)) {
        this.closePageSelector();
        return;
      }
  
      // close on pressing esc
      if (event instanceof KeyboardEvent && event.key === 'Escape') {
        this.closePageSelector();
      }
    }
  }

}
