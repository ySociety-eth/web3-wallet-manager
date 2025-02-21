import { ChangeDetectionStrategy, Component, computed, ContentChildren, input, OnChanges, OnInit, output, QueryList, signal, SimpleChanges } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableColumn, TableListItem } from '../../../models/tables.interface';
import { CommonModule } from '@angular/common';
import PaginatorComponent from '../paginator/paginator.component';
import { DataTableTemplateComponent } from '../data-table/template/data-table-template.component';
import { DropdownListOptions, DropdownSelectionComponent } from "../dropdown-selection/dropdown-selection.component";

@Component({
  selector: 'custom-table',
  imports: [DataTableComponent, CommonModule, PaginatorComponent, DropdownSelectionComponent],
  templateUrl: './custom-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent implements OnInit, OnChanges {
  // data-table variables
  public sorted = output<DataTableColumn>();
  
  // custom-table variables
  public limit = signal<number>(10);
  public tableList = input.required<TableListItem[]>();
  public currentTable = signal<TableListItem>(null as any);
  protected loadingTable = computed(() => this.currentTable()?.dataTableRow.length === 0);
  protected dropdownItems = computed(() => [
    { name: '10 rows', isActive: this.limit() === 10, value: 10 },
    { name: '25 rows', isActive: this.limit() === 25, value: 25 },
    { name: '50 rows', isActive: this.limit() === 50, value: 50 },
    { name: '100 rows', isActive: this.limit() === 100, value: 100 }
  ])
  //content children
  @ContentChildren(DataTableTemplateComponent) templates!: QueryList<DataTableTemplateComponent>;
  
  
  
  ngOnInit(): void {
    this.setActiveItem()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tableList'] || changes['limit']) {
      this.setActiveItem()
    }
  }
  
  activateItem(item: TableListItem) {
    this.tableList()?.forEach((item) => item.active = false);
    item.active = true;
    this.setActiveItem();
  }

  setActiveItem() {
    let activeItem = this.tableList()?.find((item) => item.active);
    if(!activeItem) {
      this.tableList()[0].active = true; // if no active items found, set first element of tableList
      activeItem = this.tableList().find((item) => item.active);
    }
    const data$ = activeItem!.loadData;
    this.currentTable.set( {...activeItem!, dataTableRow: [] }) // it will sets an empty tableRow, displaying an empty table while api is requested
    data$.subscribe(
      {
        next: (data) => {
            const updatedItem = { ...activeItem!, dataTableRow: data } // creates a new object with updated data so signals can detect changes
            if(this.currentTable()?.key === updatedItem.key) { // avoid updating table if user has changed active item
              this.currentTable.set(updatedItem);
            }
        }
      }
    )
  }

  onPageSelected(page: number) {
    let activeItem = this.tableList()?.find((item) => item.active);
    if (activeItem && activeItem.page) {
      activeItem.page.currentPage = page; // update currentPage of active item
    }
  }

  onDropdownItemClicked(item: DropdownListOptions) {
    const limit = item.value;
    if(typeof limit === 'number') {
      this.limit.set(limit);
    }
  }

  
}
