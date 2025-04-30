import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DashboardSectionLayoutComponent } from "../landing-page-section/dashboard-section-layout.component";
import { SidebarSections } from "../../models/navbar-items.interface";

@Component({
    selector: 'dashboard-section',
    template: `
    <dashboard-section-layout>
        <router-outlet></router-outlet>
    </dashboard-section-layout>
    `,
    imports: [RouterOutlet, DashboardSectionLayoutComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
}) 
export class DashboardSectionComponent {

} 