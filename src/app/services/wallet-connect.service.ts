import { Injectable, NgZone, signal } from "@angular/core";
import { AppKit, createAppKit } from '@reown/appkit'
import { berachain } from '@reown/appkit/networks'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'


@Injectable({
    providedIn: 'root'
})
export class WalletConnectService {
    readonly projectId = 'ed4df6855affb067866326a536a6421e'
    modal: AppKit | undefined;
    private walletAddressSig = signal<string | undefined>(undefined);
    public walletAddress = this.walletAddressSig.asReadonly();
    
    constructor(private ngZone: NgZone){
        this.ngZone.runOutsideAngular(() => {
            const metadata = {
                name: 'CryptoManager',
                description: 'Manage your crypto assets with ease',
                url: 'https://localhost:4200',
                icons: ['https://avatars.githubusercontent.com/u/179229932']
            }
            
            this.modal = createAppKit({
                adapters: [new EthersAdapter()],
                networks: [berachain],
                metadata,
                themeMode: 'dark',
                themeVariables: {
                    '--w3m-accent': '#9145de',
                    '--w3m-color-mix': '#9145de',
                    '--w3m-color-mix-strength': 3,
                    '--w3m-border-radius-master': '3px'
                },
                features: { analytics: true },
                projectId: this.projectId,
            })
            this.modal?.subscribeAccount(account => {
                this.walletAddressSig.set(account.address)
            })
        });
    }


}