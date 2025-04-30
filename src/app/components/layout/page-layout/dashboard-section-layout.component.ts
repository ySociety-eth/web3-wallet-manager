import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PageLayoutService } from './dashboard-section-layout.service';
import { SidebarSections } from '../../../models/navbar-items.interface';
import { createAnimation, createQueryAnimations } from '../../../animations/default-transitions.animations';

@Component({
  selector: 'dashboard-section-layout',
  host: {
    class: 'h-screen bg-mutedDark text-foreground'
  },
  imports: [CommonModule, SidebarComponent, TopBarComponent],
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
  sidebarSections = input<SidebarSections[]>()
  
  get isCollapsed() {
    return this.pageLayoutService.isSidebarCollapsed$();
  }
  
  get smallScreen() {
    return this.pageLayoutService.isSmallScreen$();
  }
}

