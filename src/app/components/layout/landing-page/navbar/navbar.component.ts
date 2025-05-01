import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'navbar',
    host: {
        class: 'sticky top-0 z-10 bg-background/70 backdrop-blur flex items-center justify-between md:px-14 xl:px-16 px-8 py-4 gap-10 font-semibold'
    },
    templateUrl: './navbar.component.html',
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    // This component is a placeholder for the navbar in the landing page section.
    // It can be extended in the future if needed.
}