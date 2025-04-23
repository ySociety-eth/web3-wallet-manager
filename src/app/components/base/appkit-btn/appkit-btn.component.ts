import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { WalletConnectService } from '../../../services/wallet-connect.service';
@Component({
  selector: 'appkit-btn',
  imports: [],
  templateUrl: './appkit-btn.component.html',
  styleUrl: './appkit-btn.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppkitBtnComponent {

  constructor(private walletConnectService: WalletConnectService) {
  }

}
