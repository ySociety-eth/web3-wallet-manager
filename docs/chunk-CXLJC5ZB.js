import{a as v,b as k}from"./chunk-G7TNHKYZ.js";import{a as h,f as C}from"./chunk-DBQTNMCX.js";import{G as c,oa as f,pa as y,ta as m}from"./chunk-3VEWMGKM.js";import{b as u,e as a,j as p}from"./chunk-IYZIRKFV.js";var _=u`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var R=function(l,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var s=l.length-1;s>=0;s--)(n=l[s])&&(t=(i<3?n(t):i>3?n(e,r,t):n(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t},d=class extends p{constructor(){super(...arguments),this.inputElementRef=v(),this.checked=void 0}render(){return a`
      <label>
        <input
          ${k(this.inputElementRef)}
          ?checked=${C(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};d.styles=[f,_];R([h({type:Boolean})],d.prototype,"checked",void 0);d=R([m("wui-checkbox")],d);var j=u`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var T=function(l,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var s=l.length-1;s>=0;s--)(n=l[s])&&(t=(i<3?n(t):i>3?n(e,r,t):n(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t},x=class extends p{render(){let{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state,o=c.state.features?.legalCheckbox;return!e&&!r||!o?null:a`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return e&&r?"and":""}termsTemplate(){let{termsConditionsUrl:e}=c.state;return e?a`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=c.state;return e?a`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}};x.styles=[j];x=T([m("w3m-legal-checkbox")],x);var $=u`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var U=function(l,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var s=l.length-1;s>=0;s--)(n=l[s])&&(t=(i<3?n(t):i>3?n(e,r,t):n(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t},b=class extends p{render(){return a`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};b.styles=[f,y,$];b=U([m("wui-ux-by-reown")],b);var E=u`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var L=function(l,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var s=l.length-1;s>=0;s--)(n=l[s])&&(t=(i<3?n(t):i>3?n(e,r,t):n(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t},g=class extends p{render(){let{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state,o=c.state.features?.legalCheckbox;return!e&&!r||o?null:a`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return e&&r?"and":""}termsTemplate(){let{termsConditionsUrl:e}=c.state;return e?a`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=c.state;return e?a`<a href=${e}>Privacy Policy</a>`:null}};g.styles=[E];g=L([m("w3m-legal-footer")],g);var O=u`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var P=function(l,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(l,e,r,o);else for(var s=l.length-1;s>=0;s--)(n=l[s])&&(t=(i<3?n(t):i>3?n(e,r,t):n(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t},w=class extends p{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,o=36-e,i=116+o,t=245+o,n=360+o*1.75;return a`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${t}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};w.styles=[f,O];P([h({type:Number})],w.prototype,"radius",void 0);w=P([m("wui-loading-thumbnail")],w);
