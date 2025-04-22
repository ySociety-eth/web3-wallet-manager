import { Injectable } from "@angular/core";
import { WalletConnectService } from "./wallet-connect.service";
import { BrowserProvider, Eip1193Provider } from "ethers";
import { BehaviorSubject, filter, from, Observable, Subject, switchMap, take } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EthersService {
    private providerSubject = new BehaviorSubject<BrowserProvider | null>(null);
    public provider$ = this.providerSubject.asObservable();

    constructor(private walletConnectService: WalletConnectService) {
        var walletConnectProvider: Eip1193Provider;
        walletConnectService.modal?.subscribeProviders( async wcProvider => {
            walletConnectProvider = wcProvider.eip155 as Eip1193Provider
            const browserProvider = new BrowserProvider(walletConnectProvider);
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