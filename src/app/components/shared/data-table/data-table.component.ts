import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableColumn } from '../../../models/data-table.interface';

@Component({
  selector: 'data-table',
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  public columns = input<DataTableColumn[]>();
  public rows = input<any[]>();
}
