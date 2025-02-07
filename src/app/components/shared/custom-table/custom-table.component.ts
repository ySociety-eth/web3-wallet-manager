import { Component, input, OnChanges, OnInit, output, signal, SimpleChanges } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { DataTableColumn, TableListItem } from '../../../models/tables.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-table',
  imports: [DataTableComponent, CommonModule],
  templateUrl: './custom-table.component.html',
})
export class CustomTableComponent implements OnInit, OnChanges {
  // data-table variables
  public columns = input<DataTableColumn[]>();
  public rows = input<any[]>();
  public limit = input<number>();
  public sorted = output<DataTableColumn>();

  // custom-table variables
  public tableList = input<TableListItem[]>();
  public currentTable = signal<TableListItem | null>(null);

  
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
    const activeItem = this.tableList()?.find((item) => item.active) || null;
    this.currentTable.set(activeItem)
  }
}
