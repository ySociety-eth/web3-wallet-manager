import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, HostListener, input, output, signal, ViewChild } from '@angular/core';
// import { fadeInOut, parentAnimations, popUp, slideUpDown } from '../../../animations/transition-animations';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, FormsModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  // animations: [popUp, fadeInOut, parentAnimations, slideUpDown]
})
export default class PaginatorComponent {
  limit = input<number>(1);
  startsAt = input<number>(1);
  getCurrentPage = output<number>();

  constructor() {
    effect(() => {
      this.firstButtonValue = this.getButtonValue(-1);
      this.secondButtonValue = this.getButtonValue(0);
      this.thirdButtonValue = this.getButtonValue(1);
    });
  }
  protected firstButtonValue = 0;
  protected secondButtonValue = 0;
  protected thirdButtonValue = 0;

  protected currentPage = signal<number>(this.startsAt());
  protected secondToLastPage = this.limit() - 1;
  protected showPageSelector = false;
  protected pageSelectorInputValue = '';
  @ViewChild('pageSelector') pageSelectorInputElementRef!: ElementRef<HTMLInputElement>;

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

  @HostListener('window:keydown', ['$event']) // close page selector on esc key press
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      if (this.showPageSelector) { // close page selector if open
        this.closePageSelector();
      }
    }
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

}
