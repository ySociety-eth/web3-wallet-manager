import { Component, input } from "@angular/core";

@Component({
    selector: "ng-template[data-table-template]",
    template: `
        <ng-content></ng-content>
    `,
}) export class DataTableTemplateComponent {
    public name = input<string>();
}