import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WalletConnectService } from "../../../../services/wallet-connect.service";

@Component({
    selector: 'navbar',
    host: {
        class: 'sticky top-0 z-10 bg-background/55 backdrop-blur flex items-center justify-between md:px-14 xl:px-16 px-8 py-3 gap-10 font-semibold'
    },
    templateUrl: './navbar.component.html',
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    private walletConnectService = inject(WalletConnectService);

    protected openWalletConnectModal() {
        this.walletConnectService.openModal();
    }
}