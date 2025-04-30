import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    // This component is a placeholder for the home page in the landing page section.
    // It can be extended in the future if needed.
}