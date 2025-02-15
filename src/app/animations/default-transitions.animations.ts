import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const popIn = trigger('popIn', [
    state('void', style({
        padding: 0,
        margin: 0,
        width: '{{width}}',
        minWidth: '{{width}}',
        height: '{{height}}',
        minHeight: '{{height}}',
        transform: '{{transform}}',
        opacity: 0
    }),
        { params: { height: 'auto', width: 'auto', transform: 'scale(0)' } }),

    transition(':enter', [
        style({
            width: '{{width}}',
            minWidth: '{{width}}',
            height: '{{height}}',
            minHeight: '{{height}}',
            transform: '{{transform}}',
        }),
        animate('{{duration}} ease-in-out')
    ],
    { params: { duration: '200ms', height: 'auto', width: 'auto', transform: 'scale(0)' } }),
    
    transition(':leave', [
        animate('{{duration}} ease-in-out')
    ],
    { params: { duration: '200ms' } })
]);
//use this in the template like this:
//[@popIn]="{ value: '', params: { duration: '200ms', width: 0}}"
//width:0 will animate width, also for height: 0

export const queryAnimations = [
    trigger('queryAnimations', [
      transition(':leave', [
        group([
          query('@popIn, @navbarSidebarSlideInOutAnimation', animateChild(), { optional: true }),
        ])
      ])
    ])
  ];