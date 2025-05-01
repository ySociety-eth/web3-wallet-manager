import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'cards-section',
  standalone: true,
  // host: {
  //   class: 'grid md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] m-px rounded-3xl border border-stone-200 overflow-clip gap-px bg-stone-200'
  // },
  imports: [CommonModule],
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.scss'
})
export class CardsSectionComponent {
  cards: Card[] = [
    {
      icon: 'fi-br-chart-line-up',
      title: 'Real-time Analytics',
      description: 'Track your pool performance with detailed metrics and charts'
    },
    {
      icon: 'fi-sr-coins',
      title: 'Multi-pool Management',
      description: 'Manage multiple liquidity positions from a single dashboard'
    },
    {
      icon: 'fi-br-shield-check',
      title: 'Smart Security',
      description: 'Advanced security features to protect your valuable assets'
    },
  ];

}
