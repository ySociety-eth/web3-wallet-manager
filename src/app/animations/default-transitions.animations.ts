import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

//================================================= SLIDE =======================================================
export function createAnimation(triggerName: string, 
  params: { duration?: string, animateY?:boolean, animateX?:boolean, transform?:string, opacity?:string }) {
  const animateY = params.animateY ? { height: 0, minHeight: 0, paddingTop: 0, marginTop: 0, paddingBottom: 0, marginBottom: 0 } : { }
  const animateX = params.animateX ? { width: 0, minWidth: 0, paddingRight: 0, marginRight: 0, paddingLeft: 0, marginLeft: 0 } : { }
  return trigger(triggerName, [
    state('void',
      style({
        ...animateY,
        ...animateX,
        transform: params.transform || 'none',
        opacity: params.opacity || '0'
      } as { [key: string]: string | number; }
      )
    ),
    transition(':enter, :leave', animate(params.duration ? `${params.duration} ease-in-out` : '200ms ease-in-out'))
  ])
}
//================================================= END SLIDE =======================================================
type queryAnimationTriggerFormat = `queryAnimations${string}` | `queryAnimation${string}` ;
export function createQueryAnimations(triggerName: queryAnimationTriggerFormat, triggersToAnimate: string) {
  return trigger(triggerName, [
    transition(':leave', [
      group([
        query(triggersToAnimate, animateChild(), { optional: true }),
      ])
    ])
  ])
}