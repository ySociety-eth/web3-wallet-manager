import { AfterContentInit, Component, ContentChild, ContentChildren, Input, input, OnChanges, OnInit, output, QueryList, signal, SimpleChanges, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableColumn } from '../../../models/data-table.interface';
import { InteractiveElementDirective } from '../../../directives/accessibility/interactive-element.directive';
import { popIn } from '../../../animations/default-transitions.animations';
import { TruncatePipe } from '../../../pipes/formatting/truncate.pipe';
import { CopyToClipboardComponent } from '../copy-to-clipboard/copy-to-clipboard.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'data-table',
  imports: [CommonModule, InteractiveElementDirective, TruncatePipe, CopyToClipboardComponent, ClipboardModule, MatTooltipModule],
  templateUrl: './data-table.component.html',
  styles: `
    :host {
      display: block;
      max-width: 100%;
      overflow: auto;
    }`,
  animations: [popIn]
})
export class DataTableComponent implements OnInit, OnChanges, AfterContentInit {
  public columns = input<DataTableColumn[]>();
  public rows = input<any[]>();
  public limit = input<number>();
  public sorted = output<DataTableColumn>();
  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;
  templateMap: { [key: string]: TemplateRef<any> } = {};
  
  protected displayedRows = signal<any[]>([]);

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

  fillTemplates() {
    this.templates.forEach(template => {
      const templateName = (template as any)._declarationTContainer.localNames[0];
      if(templateName) {
        this.templateMap[templateName] = template;
      }
    })
  }
}
