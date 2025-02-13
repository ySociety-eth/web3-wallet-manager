import { AfterViewInit, Component, ContentChild, Input, input, TemplateRef } from "@angular/core";

@Component({
    selector: "data-table-template",
    template: '',
}) export class DataTableTemplateComponent {
    public name = input.required<string>();
    @ContentChild(TemplateRef) templateRef!: TemplateRef<any>; //get the template reference from the parent component


    // this is a template component that will be used to render the data in the data-table.component.ts
    //it should be called as a child of the data-table component
    //like this:

    // <data-table
    // [columns]="columns"
    // [rows]="rows"
    // [limit]="10"
    // >

    //     <data-table-template name="blockNumber">
    //         <ng-template let-value>
    //             <span>{{value}}</span>
    //         </ng-template>
    //     </data-table-template>
    // </data-table>

                                // IMPORTANT
    // the column should have a property called useTemplate = true 
    // columns: DataTableColumn[] = [
    //   {
    //     label: 'Block Number',
    //     property: 'blockNumber',
    //     sort: 'none',
    //     useTemplate: true,
    //   },
}