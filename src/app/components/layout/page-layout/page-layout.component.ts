import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PageLayoutService } from './page-layout.service';
import { SidebarSections } from '../../../models/navbar-items.interface';
import { createAnimation, createQueryAnimations } from '../../../animations/default-transitions.animations';

@Component({
  selector: 'page-layout',
  host: {
    class: 'h-screen bg-mutedDark text-foreground'
  },
  imports: [CommonModule, SidebarComponent, TopBarComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss',
  animations: [
    createQueryAnimations('queryAnimationSidebar', '@navbarSlideInOut'),
    createAnimation('navbarSlideInOut', { duration: '250ms', animateX: true, opacity: '1' })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLayoutComponent{
  private pageLayoutService = inject(PageLayoutService);
  sidebarSections = input<SidebarSections[]>()
  
  get isCollapsed() {
    return this.pageLayoutService.isSidebarCollapsed$();
  }
  
  get smallScreen() {
    return this.pageLayoutService.isSmallScreen$();
  }
}

