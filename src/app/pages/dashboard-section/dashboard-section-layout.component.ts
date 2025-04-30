import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/layout/dashboard/sidebar/sidebar.component';
import { TopBarComponent } from "../../components/layout/dashboard/top-bar/top-bar.component";
import { PageLayoutService } from '../../services/ui/dashboard-section-layout.service';
import { SidebarSections } from '../../models/navbar-items.interface';
import { createAnimation, createQueryAnimations } from '../../animations/default-transitions.animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard-section-layout',
  host: {
    class: 'h-screen bg-mutedDark text-foreground'
  },
  imports: [CommonModule, SidebarComponent, TopBarComponent, RouterOutlet],
  templateUrl: './dashboard-section-layout.component.html',
  styleUrl: './dashboard-section-layout.component.scss',
  animations: [
    createQueryAnimations('queryAnimationSidebar', '@navbarSlideInOut'),
    createAnimation('navbarSlideInOut', { duration: '250ms', animateX: true, opacity: '1' })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSectionLayoutComponent{
  private pageLayoutService = inject(PageLayoutService);
  
  get isCollapsed() {
    return this.pageLayoutService.isSidebarCollapsed$();
  }
  
  get smallScreen() {
    return this.pageLayoutService.isSmallScreen$();
  }

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

