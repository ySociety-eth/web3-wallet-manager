import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NavbarComponent } from "../../components/layout/landing-page/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../components/layout/footer/footer.component";

@Component({
    selector: 'landing-page-section',
    imports: [NavbarComponent, RouterOutlet, FooterComponent],
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
    <footer custom-footer></footer>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageSectionLayoutComponent {
    
}
