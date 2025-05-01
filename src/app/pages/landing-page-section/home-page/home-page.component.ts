import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CustomizedButtonComponent } from "../../../components/base/customized-button/customized-button.component";
import { CardsSectionComponent } from "../../../components/shared/cards/cards-section/cards-section.component";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page-component.scss',
    imports: [CustomizedButtonComponent, CardsSectionComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    // This component is a placeholder for the home page in the landing page section.
    // It can be extended in the future if needed.
}