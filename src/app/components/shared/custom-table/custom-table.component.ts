import { ChangeDetectionStrategy, Component, ContentChildren, input, OnChanges, OnInit, output, QueryList, signal, SimpleChanges } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableColumn, TableListItem } from '../../../models/tables.interface';
import { CommonModule } from '@angular/common';
import PaginatorComponent from '../paginator/paginator.component';
import { DataTableTemplateComponent } from '../data-table/template/data-table-template.component';

@Component({
  selector: 'custom-table',
  imports: [DataTableComponent, CommonModule, PaginatorComponent],
  templateUrl: './custom-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent implements OnInit, OnChanges {
  // data-table variables
  public limit = input<number>();
  public sorted = output<DataTableColumn>();

  // custom-table variables
  public tableList = input.required<TableListItem[]>();
  public currentTable = signal<TableListItem | null>(null);
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
    this.currentTable.set(activeItem!) // it will sets an empty tableRow, displaying an empty table while api is requested
    data$.subscribe(
      {
        next: (data) => {
            const updatedItem = { ...activeItem!, dataTableRow: data } // creates a new object with updated data so signals can detect changes
            this.currentTable.set(updatedItem);
        }
      }
    )
  }

  onPageSelected(page: number) {
    let activeItem = this.tableList()?.find((item) => item.active);
    if (activeItem && activeItem.page) {
      activeItem.page.currentPage = page;
    }
  }
  
}
