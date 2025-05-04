import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'footer[custom-footer]',
    templateUrl: './footer.component.html',
    host: {
        class: 'text-foreground',
    },
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    // This component is a placeholder for the footer in the landing page section.
    // It can be extended in the future if needed.
}