import{a as n}from"./chunk-DBQTNMCX.js";import{oa as f,pa as g,qa as w,ta as h}from"./chunk-3VEWMGKM.js";import{b as p,e as m,j as v}from"./chunk-IYZIRKFV.js";var x=p`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var u=function(i,o,r,e){var a=arguments.length,t=a<3?o:e===null?e=Object.getOwnPropertyDescriptor(o,r):e,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,o,r,e);else for(var c=i.length-1;c>=0;c--)(s=i[c])&&(t=(a<3?s(t):a>3?s(o,r,t):s(o,r))||t);return a>3&&t&&Object.defineProperty(o,r,t),t},l=class extends v{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){let o=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",r=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${o});
    --local-padding: var(${r});
`,m`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[f,g,w,x];u([n()],l.prototype,"size",void 0);u([n({type:Boolean})],l.prototype,"disabled",void 0);u([n()],l.prototype,"icon",void 0);u([n()],l.prototype,"iconColor",void 0);l=u([h("wui-icon-link")],l);var y=p`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var b=function(i,o,r,e){var a=arguments.length,t=a<3?o:e===null?e=Object.getOwnPropertyDescriptor(o,r):e,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,o,r,e);else for(var c=i.length-1;c>=0;c--)(s=i[c])&&(t=(a<3?s(t):a>3?s(o,r,t):s(o,r))||t);return a>3&&t&&Object.defineProperty(o,r,t),t},d=class extends v{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let o=this.size==="md"?"mini-700":"micro-700";return m`
      <wui-text data-variant=${this.variant} variant=${o} color="inherit">
        <slot></slot>
      </wui-text>
    `}};d.styles=[f,y];b([n()],d.prototype,"variant",void 0);b([n()],d.prototype,"size",void 0);d=b([h("wui-tag")],d);
