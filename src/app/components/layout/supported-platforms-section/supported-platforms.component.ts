import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { SupportedPlatform } from "../../../models/supported-platforms.interface";
import { NgClass, NgStyle } from "@angular/common";

@Component({
    selector:'supported-platforms',
    host: {
        class: ''
    },
    styleUrl: './supported-platforms.component.scss',
    templateUrl: './supported-platforms.component.html',
    imports: [NgStyle],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportedPlatformsComponent {
    itemHover = signal<boolean[]>([]);
    platformList: SupportedPlatform[] = [
        { 
            iconUrl: 'https://raw.githubusercontent.com/Uniswap/brand-assets/refs/heads/main/Uniswap%20Brand%20Assets/Uniswap_icon_pink.svg',
            href: 'https://uniswap.org',
            alt: 'Uniswap',
            hslColor: '331, 100%, 50%'
        },
        { 
            iconUrl: '/logo/pendle.png',
            href: 'https://pendle.finance',
            alt: 'Pendle',
            hslColor: '230, 100%, 50%'
        },
        { 
            iconUrl: '/logo/pancakeswap-bunny.png',
            href: 'https://pancakeswap.finance',
            alt: 'PancakeSwap',
            hslColor: '39, 90%, 50%'
        },
        { 
            iconUrl: '/logo/balancer.png',
            href: 'https://balancer.fi',
            alt: 'Balancer',
            hslColor: '240, 100%, 60%'
        },
    ]
    constructor() {
        this.itemHover.set(this.platformList.map(() => false));
    }

    hover(index: number) {
        this.itemHover.update((item) => {
            item[index] = true;
            return item;
        });
    }
    leave(index: number) {
        this.itemHover.update((item) => {
            item[index] = false;
            return item;
        });
    }
}