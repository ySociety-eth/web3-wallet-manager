import { Injectable, NgZone } from "@angular/core";
import { createAppKit } from '@reown/appkit'
import { berachain } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'


@Injectable({
    providedIn: 'root'
})
export class WalletConnectService {
    readonly projectId = 'ed4df6855affb067866326a536a6421e'
    
    
    constructor(private ngZone: NgZone){
        this.ngZone.runOutsideAngular(() => {
            const networks = [berachain]
            const adapter = new WagmiAdapter({
                projectId: this.projectId,
                networks: networks,
            })
    
            const metadata = {
                name: 'CryptoManager',
                description: 'Manage your crypto assets with ease',
                url: 'https://localhost:4200',
                icons: ['https://avatars.githubusercontent.com/u/179229932']
            }
            
            const modal = createAppKit({
                adapters: [adapter],
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
        
        });
    }


}