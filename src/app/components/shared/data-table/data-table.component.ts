import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, inject, input, OnChanges, OnInit, output, QueryList, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataTableColumn } from '../../../models/tables.interface';
import { InteractiveElementDirective } from '../../../directives/accessibility/interactive-element.directive';
import { popIn } from '../../../animations/default-transitions.animations';
import { TruncatePipe } from '../../../pipes/formatting/truncate.pipe';
import { CopyToClipboardComponent } from '../copy-to-clipboard/copy-to-clipboard.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataTableTemplateComponent } from './template/data-table-template.component';
import { UpdatedTimeService } from '../../../services/updated-time.service';
import { TimeAgoPipe } from '../../../pipes/formatting/time-ago.pipe';
import { DateFormatPipe } from '../../../pipes/formatting/date-format.pipe';

@Component({
  selector: 'data-table',
  imports: [CommonModule, InteractiveElementDirective, TruncatePipe, CopyToClipboardComponent, ClipboardModule,
   MatTooltipModule, TimeAgoPipe, DateFormatPipe ],
  providers: [DatePipe],
  templateUrl: './data-table.component.html',
  styles: `
    :host {
      display: block;
      max-width: 100%;
      overflow: auto;
    }
    `,
  animations: [popIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit, OnChanges, AfterContentInit {
  //injections
  updatedTimeService = inject(UpdatedTimeService);
  //variables
  public columns = input<DataTableColumn[]>();
  public rows = input<any[]>();
  public limit = input<number>();
  public sorted = output<DataTableColumn>();
  public parentTemplates = input<QueryList<DataTableTemplateComponent>>();
  protected displayedRows = signal<any[]>([]);
  protected highlightedData = signal<string | null>(null);
  protected updatedTime = this.updatedTimeService.getTimeNow();
  @ContentChildren(DataTableTemplateComponent) templates!: QueryList<DataTableTemplateComponent>;
  templateMap: { [key: string]: TemplateRef<any> } = {}

  ngOnInit(): void {
    this.handleDisplayedRows();
  }

  ngAfterContentInit(): void {
    this.fillTemplates();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rows'] || changes['limit']) {
      this.handleDisplayedRows();
    }
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

  handleSort(column: DataTableColumn) {
    switch (column.sort) {
      case 'none': 
        column.sort = 'descending'; break;
      case 'descending':
        column.sort = 'ascending'; break;
      case 'ascending':
        column.sort = 'none'; break;
      default:
        column.sort = 'unavailable'; break
    }
  }

  sort(column: DataTableColumn) {
    this.columns()!.forEach(col => { // sets all other columns to none
      if(col !== column && col.sort !== 'unavailable') {
        col.sort = 'none';
      }
    });
    this.handleSort(column);
    this.sorted.emit(column);
  }

  setHighlightData(data: string) {
    this.highlightedData.set(data);
  }

  clearHighlightData() {
    this.highlightedData.set(null);
  }

  fillTemplates() {
    if(this.parentTemplates()) {
      this.parentTemplates()?.forEach(template => {
        this.templateMap[template.name()] = template.templateRef;
      })
    }
    this.templates.forEach(template => {
      this.templateMap[template.name()] = template.templateRef;
    })
  }
  
}
