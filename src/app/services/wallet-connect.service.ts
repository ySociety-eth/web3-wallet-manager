import { Injectable, NgZone, signal } from "@angular/core";
import { AppKit, createAppKit, EventsControllerState } from '@reown/appkit'
import { berachain } from '@reown/appkit/networks'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { getAddress } from "ethers"


@Injectable({
    providedIn: 'root'
})
export class WalletConnectService {
    readonly projectId = 'ed4df6855affb067866326a536a6421e'
    public modal: AppKit | undefined;
    private walletAddressSig = signal<string | undefined>(undefined);
    private walletConnectEventsSig = signal<EventsControllerState | undefined>(undefined);
    //
    public $walletAddress = this.walletAddressSig.asReadonly();
    public $walletConnectEvents = this.walletConnectEventsSig.asReadonly();
    
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
                features: { analytics: false },
                projectId: this.projectId,
            })
            this.modal?.subscribeAccount(account => {
                if (account.address) {
                    this.walletAddressSig.set(getAddress(account.address)); // use utils.getAddress to ensure the address is checksummed
                } else {
                    this.walletAddressSig.set(undefined); // set to undefined if no address is returned
                }
            })
            this.modal?.subscribeEvents(events => {
                this.walletConnectEventsSig.set({ ...events }); // spread operator to create a new object and update the signal
            })
        });
    }

    public disconnect() {
        this.modal?.disconnect();
    }


}