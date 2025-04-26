import { AfterViewInit, Component, inject, OnInit, ViewContainerRef } from '@angular/core';
import { PageLayoutComponent } from "./components/layout/page-layout/page-layout.component";
import { SidebarSections } from './models/navbar-items.interface';
import { RouterOutlet } from '@angular/router';
import { RegisterModalComponent } from './components/dialogs/register-modal/register-modal.component';
import { RegisterModalService } from './services/ui/register-modal.service';
import { createQueryAnimations } from './animations/default-transitions.animations';
import { ToastComponent } from "./components/layout/toast/toast.component";
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageLayoutComponent, RegisterModalComponent, PortalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut') // necessary for animate modal when its removed from the DOM
  ]
})
export class AppComponent implements OnInit{
  protected registerModal = inject(RegisterModalService);
  toastPortal: ComponentPortal<ToastComponent> | undefined;
  title = 'wallet-manager';
  
  ngOnInit(): void {
    this.toastPortal = new ComponentPortal(ToastComponent);
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
