import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ContentChildren, effect, inject, input, NgZone, output, QueryList, signal, TemplateRef } from '@angular/core';
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
export class DataTableComponent implements AfterViewInit {
  //injections
  updatedTimeService = inject(UpdatedTimeService);
  private zone = inject(NgZone);
  //inputs
  public columns = input<DataTableColumn[]>();
  public rows = input<any[]>();
  public limit = input.required<number>();
  public parentTemplates = input<QueryList<DataTableTemplateComponent>>();
  //outputs
  public sorted = output<DataTableColumn>();
  //signals
  protected loadingData = computed(()=> {
    if(this.rows()?.length === 0) {
      return true;
    }
    return false
  })
  protected displayedRows = computed(()=>{
    if(this.loadingData()) { // set 
      return this.createSkeletonRows();
    } else {
      return this.rows()?.slice(0, this.limit()) || []; //slice displayedRows to limit size
    }
  })
  protected highlightedData = signal<string | null>(null);
  protected updatedTime = this.updatedTimeService.getTimeNow();
  //content children
  @ContentChildren(DataTableTemplateComponent) templates?: QueryList<DataTableTemplateComponent>;
  templateMap: { [key: string]: TemplateRef<any> } = {}
  
  firstLoad = signal(true);
  ngAfterViewInit(): void {
    
    if (this.firstLoad()) {
      this.zone.runOutsideAngular(() => { // avoid website from freezing when using setTimeout
        setTimeout(() => {
          this.fillTemplates() // fill the templates here to avoid duplicate table data on skeleton rows
          this.zone.run(() => this.firstLoad.set(false)); // 
        }, 1000);
      });
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
    this.templates?.forEach(template => {
      this.templateMap[template.name()] = template.templateRef;
    })
  }

  createSkeletonRows() {
    var skeletonRow: any[] = [] 

    for(var i = 0; i < this.limit(); i++ ) {
      let row: any = {}
      this.columns()?.forEach(value => {
        row[value.property] = 'skeleton' // sets all properties of the rows to 'skeleton'
      })
      skeletonRow.push(row); // pushes the row to the skeletonRow array
    }

    return skeletonRow// sets the displayed rows to the skeleton rows
  }
  
}
