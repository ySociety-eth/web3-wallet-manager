import{a as i}from"./chunk-DBQTNMCX.js";import{oa as v,pa as m,ta as f}from"./chunk-3VEWMGKM.js";import{b as p,e as h,j as g}from"./chunk-IYZIRKFV.js";var x=p`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var e=function(d,t,s,n){var a=arguments.length,r=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,s):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(d,t,s,n);else for(var l=d.length-1;l>=0;l--)(c=d[l])&&(r=(a<3?c(r):a>3?c(t,s,r):c(t,s))||r);return a>3&&r&&Object.defineProperty(t,s,r),r},o=class extends g{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t=this.iconSize||this.size,s=this.size==="lg",n=this.size==="xl",a=s?"12%":"16%",r=s?"xxs":n?"s":"3xl",c=this.background==="gray",l=this.background==="opaque",b=this.backgroundColor==="accent-100"&&l||this.backgroundColor==="success-100"&&l||this.backgroundColor==="error-100"&&l||this.backgroundColor==="inverse-100"&&l,u=`var(--wui-color-${this.backgroundColor})`;return b?u=`var(--wui-icon-box-bg-${this.backgroundColor})`:c&&(u=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${u};
       --local-bg-mix: ${b||c?"100%":a};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,h` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};o.styles=[v,m,x];e([i()],o.prototype,"size",void 0);e([i()],o.prototype,"backgroundColor",void 0);e([i()],o.prototype,"iconColor",void 0);e([i()],o.prototype,"iconSize",void 0);e([i()],o.prototype,"background",void 0);e([i({type:Boolean})],o.prototype,"border",void 0);e([i()],o.prototype,"borderColor",void 0);e([i()],o.prototype,"icon",void 0);o=e([f("wui-icon-box")],o);
