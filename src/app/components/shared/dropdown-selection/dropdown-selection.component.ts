import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, ElementRef, input, output, signal, ViewChild } from '@angular/core';
import { DocumentListenerService } from '../../../services/document-listener.service';
// import { popUp, slideUpDown } from '../../../animations/transition-animations';

export interface DropdownListOptions{
  name: string,
  isActive: boolean
}

@Component({
  selector: 'dropdown-selection',
  host: {
    class: 'dropdown'
  },
  styles: [`:host { position: relative; }`],
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-selection.component.html',
  styleUrl: './dropdown-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  // animations: [slideUpDown, popUp]
})

export class DropdownSelectionComponent implements AfterViewInit{
  //inputs
  public label = input<string>('Dropdown Name');
  public labelAfterSelect = input<string>();
  public items = input<DropdownListOptions[]>();
  public dropdownId = input.required<string>();
  //output
  public clickedItem = output<DropdownListOptions>();
  //signals
  protected displayedLabel = signal(this.label())
  protected isExpanded = signal(false);
  //view child
  @ViewChild('DropdownButton') dropdown!: ElementRef;
  @ViewChild('DropdownMenu') dropdownMenu!: ElementRef;
  //variables
  private dropdownElement!: HTMLElement
  protected dropdownMenuId = computed(()=> `${this.dropdownId()}-menu`)
  
  constructor(private documentListener: DocumentListenerService){
    effect(()=> {
      const event = documentListener.event$();
      if(event instanceof MouseEvent ) {
        this.onClickOutside(event);
      }
    })
  }

  ngAfterViewInit(): void {
    this.displayedLabel.set(this.label())
    this.dropdownElement = this.dropdown.nativeElement; // set the dropdown native element after view init
  }

  toggleDropDown(){
    this.isExpanded() ? this.closeDropDown() : this.openDropDown();
  }

  openDropDown(){
    this.isExpanded.set(true);
    setTimeout(() => { // focus on the first item of the dropdown list
      const list = this.dropdownMenu.nativeElement as HTMLElement;
      const firstChild = list.querySelector('.dropdown__item') as HTMLElement;
      firstChild.focus();
    }, 100);
  }

  closeDropDown(){
    this.isExpanded.set(false);
    this.dropdownElement.focus();
  }

  onKeyDownItem(event: KeyboardEvent, item: DropdownListOptions) {
    if(event.key === 'Enter' || event.key === ' '){
      event.preventDefault(); // avoid spacebar to scroll the page
      this.onclickItem(item);
    }
  }

  onclickItem(item: DropdownListOptions){
    this.clickedItem.emit(item); // when item clicked, parent will receive it and set the active item
    setTimeout(() => { // this will wait for the item to be active before changing the displayed label
      if(item.isActive && this.labelAfterSelect()) {
        this.displayedLabel.set(this.labelAfterSelect()!);
      } else if(item.isActive) {
        this.displayedLabel.set(item.name);
      }
      this.closeDropDown();
    }, 100);
  }

  onClickOutside(event: MouseEvent){ // close dropdown when click outside the element
    if(this.isExpanded() == true){
      const element = event.target as HTMLElement;
      const clickInsideDropdown = ( element.classList.contains("dropdown__item") || element.classList.contains("dropdown__button") );
      if(!clickInsideDropdown){
        this.closeDropDown();
      }
    }
  }

}
