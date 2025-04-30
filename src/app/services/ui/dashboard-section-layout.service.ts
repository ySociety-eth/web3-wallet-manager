import { Injectable, Renderer2, RendererFactory2, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {
  private smallScreen = signal<boolean>(false);
  private sidebarCollapsed = signal<boolean>(true);
  private renderer: Renderer2;

  get isSmallScreen$(): Signal<boolean> {
    return this.smallScreen.asReadonly();
  }
  
  get isSidebarCollapsed$(): Signal<boolean> {
    return this.sidebarCollapsed.asReadonly();
  }
  
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null)

    if(typeof window !== 'undefined') {
      this.checkMobileScreenSize(); //checks mobile screen on starting application phase

      this.renderer.listen('window', 'resize', () => this.checkMobileScreenSize()) // checks mobile screen on resize event
    }
  }

  private checkMobileScreenSize(): void {
    this.smallScreen.set(window.innerWidth < 640); //turns true if window width < 640px
  }

  toggleSidebar() {
    this.sidebarCollapsed.update((val) => !val);
  }
  
  collapseSidebar() {
    this.sidebarCollapsed.set(true);
  }

  expandSidebar() {
    this.sidebarCollapsed.set(false);
  }
  

}
