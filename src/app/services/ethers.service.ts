import { Injectable } from "@angular/core";
import { WalletConnectService } from "./wallet-connect.service";
import { BrowserProvider, Eip1193Provider } from "ethers";
import { BehaviorSubject, filter, from, Observable, switchMap, take } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EthersService {
    private providerSubject = new BehaviorSubject<BrowserProvider | null>(null);
    public provider$ = this.providerSubject.asObservable();

    constructor(private walletConnectService: WalletConnectService) {
        walletConnectService.modal?.subscribeProviders( async wcProvider => {
            if (!wcProvider.eip155) {
                this.providerSubject.next(null); // if no provider, set provider$ to null
                console.error("No EIP-155 provider found in WalletConnect provider.");
                return;
            }
            const walletConnectProvider = wcProvider.eip155 as Eip1193Provider;

            const eip1193Provider: Eip1193Provider = { // EIP-1193 provider wrapper using WalletConnect provider
                request: walletConnectProvider.request.bind(walletConnectProvider)
            }
            const browserProvider = new BrowserProvider(eip1193Provider);
            this.providerSubject.next(browserProvider); // update the provider$ signal
        })
    }

    public signMessage(message: string): Observable<string> {
        return this.provider$.pipe(
            filter(provider => provider !== null),
            take(1), // take the first non-null provider
            switchMap(provider => (from(provider.getSigner()))),
            switchMap(signer => from(signer.signMessage(message)))
        );
    }
}