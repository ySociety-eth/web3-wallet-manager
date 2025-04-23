import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, inject, input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PageLayoutService } from '../page-layout.service';
import { SidebarSections } from '../../../../models/navbar-items.interface';
import { createAnimation } from '../../../../animations/default-transitions.animations';

@Component({
  selector: 'sidebar',
  imports: [CommonModule, RouterLink],
  host: {
    '[@navbarSlideInOut]': '',
  },
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
    createAnimation('navbarItemCollapseExpand', { duration: '250ms', animateY: true, transform: 'scale(.9)' }),
    createAnimation('navbarSlideInOut', { duration: '250ms', animateX: true, opacity: '1' })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SidebarComponent implements OnInit {
  private pageLayoutService = inject(PageLayoutService);
  sidebarSections = input<SidebarSections[]>()
  isAutoExpanded = false;
  navbarTimeoutId: any;
  currentRoute = '';

  get smallScreen() {
    return this.pageLayoutService.isSmallScreen$();
  }

  get isCollapsed() {
    return this.pageLayoutService.isSidebarCollapsed$();
  }

  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    })
  }

  onMouseEnterSidebar(): void {
    this.navbarTimeoutId = setTimeout(() => {
      this.autoExpandSidebar();
    }, 700);
  }

  onMouseLeaveSidebar(): void {
    if(this.navbarTimeoutId) {
      clearTimeout(this.navbarTimeoutId);
      if(this.isAutoExpanded) {
        this.autoCollapseSidebar();
      }
    }
  }

  collapseSidebar() {
    this.pageLayoutService.collapseSidebar();
  }
  
  expandSidebar() {
    this.pageLayoutService.expandSidebar();
  }

  autoExpandSidebar() {
    this.expandSidebar();
    this.isAutoExpanded = true;
  }

  autoCollapseSidebar() {
    this.collapseSidebar();
    this.isAutoExpanded = false;
  }

  toggleSidebar() {
    this.isCollapsed ? this.expandSidebar() : this.collapseSidebar();
  }

  changeRoute(route:string){
    this.router.navigate([route]);
  }

  onKeyPressed(event:KeyboardEvent, route:string){
    if(event.code === 'Enter' || event.code === 'Space') {
      this.changeRoute(route);
      event.preventDefault();
    }
  }

  //host bindings

  @HostBinding('class')
  get hostClasses(): string {
    const base = 'fixed bottom-0 transition-all duration-300 overflow-hidden bg-mutedDark h-[calc(100%_-_4rem)]';
    const collapsed  = this.isCollapsed ? 'w-16' : 'w-64';
    return `${base} ${collapsed}`;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isCollapsed ? this.onMouseEnterSidebar() : null
  }
  
  @HostListener('mouseleave')
  onMouseLeave() {
    this.onMouseLeaveSidebar()
  }
}
