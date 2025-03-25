import { Component, inject, OnInit } from '@angular/core';
import { PageLayoutComponent } from "./components/layout/page-layout/page-layout.component";
import { SidebarSections } from './models/navbar-items.interface';
import { RouterOutlet } from '@angular/router';
import { RegisterModalComponent } from './components/dialogs/register-modal/register-modal.component';
import { RegisterModalService } from './services/register-modal.service';
import { createQueryAnimations } from './animations/default-transitions.animations';
import { WalletConnectService } from './services/wallet-connect.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageLayoutComponent, RegisterModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    createQueryAnimations('queryAnimationsModal', '@popUp, @fadeInOut') // necessary for animate modal when its removed from the DOM
  ]
})
export class AppComponent implements OnInit{
  protected registerModal = inject(RegisterModalService);
  private walletConnect = inject(WalletConnectService);

  title = 'wallet-manager';

  
  ngOnInit(): void {
    this.walletConnect.modal?.subscribeEvents(event => {
      if (event.data.event == "CONNECT_SUCCESS") {
        this.registerModal.openModal();
      }
    })
  }
  
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
