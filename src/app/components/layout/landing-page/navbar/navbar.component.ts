import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AppkitBtnComponent } from "../../../base/appkit-btn/appkit-btn.component";

@Component({
    selector: 'navbar',
    host: {
        class: 'sticky top-0 bg-background/5 backdrop-blur-sm flex items-center justify-between md:px-14 xl:px-16 px-8 py-4 gap-10 border-b border-b-border font-semibold'
    },
    templateUrl: './navbar.component.html',
    imports: [AppkitBtnComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    // This component is a placeholder for the navbar in the landing page section.
    // It can be extended in the future if needed.
}