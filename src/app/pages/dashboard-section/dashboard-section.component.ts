import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DashboardSectionLayoutComponent } from "../../components/layout/page-layout/dashboard-section-layout.component";
import { SidebarSections } from "../../models/navbar-items.interface";

@Component({
    selector: 'dashboard-section',
    template: `
    <dashboard-section-layout [sidebarSections]="sidebarSections">
        <router-outlet></router-outlet>
    </dashboard-section-layout>
    `,
    imports: [RouterOutlet, DashboardSectionLayoutComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
}) 
export class DashboardSectionComponent {

    sidebarSections: SidebarSections[] = [
        {
          label: 'Wallet',
          collapsed: false,
          items: [
            {
              name: 'Dashboard',
              icon: {
                active: 'fi-sr-dashboard',
                inactive: 'fi-rr-dashboard'
              },
              route: '/dashboard'
            },
            {
              name: 'Smart Contracts',
              icon: {
                active: 'fi-sr-document',
                inactive: 'fi-rr-document'
              },
              route: '/smart-contract'
            },
            {
              name: 'NFTs View',
              icon: {
                active: 'fi-sr-floor-layer',
                inactive: 'fi-rr-floor-layer'
              },
              route: '/nfts'
            },
            {
              name: 'Logs',
              icon: {
                active: 'fi-sr-receipt',
                inactive: 'fi-rr-receipt'
              },
              route: '/logs'
            },
          ],
        },
        {
          label: 'Trends',
          collapsed: false,
          items: [
            {
              name: 'Market Overview',
              icon: {
                active: 'fi-sr-chart-simple',
                inactive: 'fi-rr-chart-simple'
              },
              route: '/overview'
            },
            {
              name: 'Social Trends',
              icon: {
                active: 'fi-sr-bookmark',
                inactive: 'fi-rr-bookmark'
              },
              route: '/trends'
            },
          ],
        },
      ];

} 