import { Component } from '@angular/core';
import { PageLayoutComponent } from "./components/layout/page-layout/page-layout.component";
import { SidebarSections } from './models/navbar-items.interface';

@Component({
  selector: 'app-root',
  imports: [PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wallet-manager';
  sidebarSections: SidebarSections[] = [
    {
    label: 'Wallet',
    collapsed: false,
    items: [
      {
        name: 'Dashboard',
        icon: 'fi-sr-dashboard',
        route: '/dashboard'
      },
      {
        name: 'Smart Contracts',
        icon: 'fi-sr-document',
        route: '/smart-contract'
      },
      {
        name: 'NFTs View',
        icon: 'fi-sr-floor-layer',
        route: '/nfts'
      },
      {
        name: 'Logs',
        icon: 'fi-sr-receipt',
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
        icon: 'fi-sr-chart-simple',
        route: '/overview'
      },
      {
        name: 'Social Trends',
        icon: 'fi-sr-thumbs-up',
        route: '/trends'
      },
    ],
  },
  ]
}
