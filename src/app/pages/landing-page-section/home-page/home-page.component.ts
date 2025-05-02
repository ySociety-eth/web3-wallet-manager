import { ChangeDetectionStrategy, Component, input, signal } from "@angular/core";
import { CustomizedButtonComponent } from "../../../components/base/customized-button/customized-button.component";
import { CardsSectionComponent } from "../../../components/shared/cards/cards-section/cards-section.component";
import { AccordionComponent } from "../../../components/shared/accordion/accordion.component";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page-component.scss',
    imports: [CustomizedButtonComponent, CardsSectionComponent, AccordionComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
    // This component is a placeholder for the home page in the landing page section.
    // It can be extended in the future if needed.
    accordions = signal([
        { active: false, title: "Accordion 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { active: false, title: "Accordion 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { active: false, title: "Accordion 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    ]);

    accordionClicked(index: number) {
        this.accordions.update((acc) => {
            return acc.map((accordion, i) => {
                if (i === index) {
                    accordion.active = !accordion.active;
                } else {
                    accordion.active = false;
                }
                return accordion;
            });
        });
    }
}