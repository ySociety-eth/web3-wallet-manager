import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { PageLayoutService } from './page-layout.service';
import { SidebarSections } from '../../../models/navbar-items.interface';

@Component({
  selector: 'app-page-layout',
  imports: [CommonModule, SidebarComponent, TopBarComponent],
  templateUrl: './page-layout.component.html'
})
export class PageLayoutComponent{
  private pageLayoutService = inject(PageLayoutService);
  sidebarSections = input<SidebarSections[]>()
  
  get isCollapsed() {
    return this.pageLayoutService.isSidebarCollapsed
  }
  
  get smallScreen() {
    return this.pageLayoutService.isSmallScreen;
  }
}

