import { Component, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableColumn } from '../../../models/data-table.interface';

@Component({
  selector: 'data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {
  public columns = input<DataTableColumn[]>();
  public rows = input<any[]>();
  public limit = input<number>();
  
  protected displayedRows = signal<any[]>([]);

  ngOnInit(): void {
    this.handleDisplayedRows();
  }

  handleDisplayedRows() {
    if(this.limit()) {
      this.sliceDisplayedRows()
    } else {
      this.setDisplayedRows()
    }
  }

  sliceDisplayedRows(){
    if(this.rows()) {
      this.displayedRows.set(this.rows()!.slice(0, this.limit())); // slices rows array to the limit 
    }
  }
  
  setDisplayedRows(){
    if(this.rows()) {
      this.displayedRows.set(this.rows()!)
    }
  }
}
