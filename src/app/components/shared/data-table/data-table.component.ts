import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ContentChildren, effect, inject, input, NgZone, output, QueryList, signal, TemplateRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataTableColumn } from '../../../models/tables.interface';
import { InteractiveElementDirective } from '../../../directives/accessibility/interactive-element.directive';
import { createAnimation, createQueryAnimations } from '../../../animations/default-transitions.animations';
import { TruncatePipe } from '../../../pipes/formatting/truncate.pipe';
import { CopyToClipboardComponent } from '../copy-to-clipboard/copy-to-clipboard.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataTableTemplateComponent } from './template/data-table-template.component';
import { UpdatedTimeService } from '../../../services/updated-time.service';
import { TimeAgoPipe } from '../../../pipes/formatting/time-ago.pipe';
import { DateFormatPipe } from '../../../pipes/formatting/date-format.pipe';
import { TableSortService } from './table-sort.service';
import { TableSkeletonService } from './table-skeleton.service';

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
  animations: [
    createAnimation('slideXTableElement', { animateX: true, duration: '400ms', transform: 'scale(.4)' }),
    createAnimation('slideXSortIcon', { animateX: true, duration: '200ms', transform: 'scale(0) translateX(-30px)' }),
    createQueryAnimations('queryAnimationsDataTable', '@slideXTableElement, @slideXSortIcon')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements AfterViewInit {
  //injections
  protected updatedTimeService = inject(UpdatedTimeService);
  private tableSortService = inject(TableSortService);
  private tableSkeletonService = inject(TableSkeletonService)
  private zone = inject(NgZone);
  //inputs
  public columns = input.required<DataTableColumn[]>();
  public rows = input<any[]>();
  public limit = input.required<number>();
  public parentTemplates = input<QueryList<DataTableTemplateComponent>>();
  //outputs
  public sorted = output<DataTableColumn>();
  //signals
  protected firstLoad = signal(true);
  protected displayedRows = computed(()=> this.handleDisplayedRows())
  protected highlightedData = signal<string | null>(null);
  protected updatedTime = this.updatedTimeService.getTimeNow();
  protected loadingData = computed(()=> { if(this.rows()?.length === 0) { return true; } return false }) // return true if rows signal has empty value
  //content children
  @ContentChildren(DataTableTemplateComponent) templates?: QueryList<DataTableTemplateComponent>;
  templateMap: { [key: string]: TemplateRef<any> } = {}
  
  ngAfterViewInit(): void {
    if (this.firstLoad() === true) {
      this.zone.runOutsideAngular(() => { // avoid website from freezing when using setTimeout
        setTimeout(() => {
          this.fillTemplates() // fill the templates here to avoid duplicate table data on skeleton rows
          this.zone.run(() => this.firstLoad.set(false)); // 
        }, 1000);
      });
    }
  }


  sort(column: DataTableColumn) {
    this.tableSortService.handleSort(column, this.columns());
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

  handleDisplayedRows(){
    if(this.loadingData()) {
      return this.tableSkeletonService.skeletonRows(this.limit(), this.columns()); // set skeleton rows format
    } else {
      return this.rows()?.slice(0, this.limit()) || []; //set rows and slice it to limit size
    }
  }
  
}
