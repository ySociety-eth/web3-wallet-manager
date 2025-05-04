import"./chunk-WT2B6TIU.js";import"./chunk-KOOZDQDY.js";import"./chunk-CXLJC5ZB.js";import"./chunk-6SNP2N7S.js";import"./chunk-4SKOPOWR.js";import"./chunk-3TBIBBG6.js";import"./chunk-HZ6PZNFK.js";import"./chunk-ETFSQUAY.js";import"./chunk-G7TNHKYZ.js";import"./chunk-VYWHQZE2.js";import"./chunk-6IEGP7QZ.js";import{a as D,b as c,f as h}from"./chunk-DBQTNMCX.js";import{g as A}from"./chunk-VPQVVA4O.js";import{a as W}from"./chunk-5G5ROAPX.js";import{G as w,H as d,I as _,J as m,L as p,M as f,P as O,V as b,Y as u,_ as I,e as U,f as L,g as P,ta as v}from"./chunk-3VEWMGKM.js";import"./chunk-77POFJ7J.js";import{b as g,e as s,j as x}from"./chunk-IYZIRKFV.js";import"./chunk-WXCPMYFQ.js";import"./chunk-6F6K4OU5.js";import{k as E}from"./chunk-HIVZEDT5.js";var j=g`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var R=function(a,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},y=class extends x{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=m.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.features=w.state.features,this.unsubscribe.push(m.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(t=>t.type==="AUTH")}),w.subscribeKey("features",e=>this.features=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.features?.socials||[],t=!!this.authConnector,o=e?.length,r=d.state.view==="ConnectSocials";return(!t||!o)&&!r?null:(r&&!o&&(e=U.DEFAULT_FEATURES.socials),s` <wui-flex flexDirection="column" gap="xs">
      ${e.map(i=>s`<wui-list-social
            @click=${()=>{this.onSocialClick(i)}}
            name=${i}
            logo=${i}
            tabIdx=${h(this.tabIdx)}
          ></wui-list-social>`)}
    </wui-flex>`)}onSocialClick(e){return E(this,null,function*(){if(e&&(u.setSocialProvider(e,b.state.activeChain),p.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===A.Farcaster){d.push("ConnectingFarcaster");let t=m.getAuthConnector();if(t&&!u.state.farcasterUrl)try{let{url:o}=yield t.provider.getFarcasterUri();u.setFarcasterUrl(o,b.state.activeChain)}catch(o){d.goBack(),f.showError(o)}}else{d.push("ConnectingSocial");let t=m.getAuthConnector();this.popupWindow=P.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){let{uri:o}=yield t.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&o)u.setSocialWindow(this.popupWindow,b.state.activeChain),this.popupWindow.location.href=o;else throw this.popupWindow?.close(),new Error("Something went wrong")}}catch{this.popupWindow?.close(),f.showError("Something went wrong")}}})}};y.styles=j;R([D()],y.prototype,"tabIdx",void 0);R([c()],y.prototype,"connectors",void 0);R([c()],y.prototype,"authConnector",void 0);R([c()],y.prototype,"features",void 0);y=R([v("w3m-social-login-list")],y);var q=g`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var z=function(a,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},T=class extends x{constructor(){super(...arguments),this.checked=!1}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.state,o=w.state.features?.legalCheckbox,i=!!(e||t)&&!!o,n=i&&!this.checked,l=n?-1:void 0;return s`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${h(n?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${h(l)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=!!e.detail}};T.styles=q;z([c()],T.prototype,"checked",void 0);T=z([v("w3m-connect-socials-view")],T);var F=g`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var k=function(a,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},C=class extends x{constructor(){super(),this.unsubscribe=[],this.socialProvider=u.state.socialProvider,this.socialWindow=u.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=m.getAuthConnector(),this.handleSocialConnection=e=>E(this,null,function*(){if(e.data?.resultUri)if(e.origin===W.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),u.setSocialWindow(void 0,b.state.activeChain)),this.connecting=!0,this.updateMessage();let t=e.data.resultUri;this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),yield this.authConnector.provider.connectSocial(t),this.socialProvider&&(L.setConnectedSocialProvider(this.socialProvider),yield O.connectExternal(this.authConnector,this.authConnector.chain),p.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else d.goBack(),f.showError("Untrusted Origin"),this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}),this.unsubscribe.push(u.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&(I.state.open||w.state.enableEmbedded)&&I.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),u.setSocialWindow(void 0,b.state.activeChain)}render(){return s`
      <wui-flex
        data-error=${h(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${h(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=_.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return s`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(!this.connecting&&d.state.view==="ConnectingSocial"&&(this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),d.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};C.styles=F;k([c()],C.prototype,"socialProvider",void 0);k([c()],C.prototype,"socialWindow",void 0);k([c()],C.prototype,"error",void 0);k([c()],C.prototype,"connecting",void 0);k([c()],C.prototype,"message",void 0);C=k([v("w3m-connecting-social-view")],C);var N=g`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var $=function(a,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},S=class extends x{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=u.state.socialProvider,this.uri=u.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=m.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(u.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),u.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),s`${this.platformTemplate()}`}platformTemplate(){return P.isMobile()?s`${this.mobileTemplate()}`:s`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?s`${this.loadingTemplate()}`:s`${this.qrTemplate()}`}qrTemplate(){return s` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return s`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return s` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=_.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return s`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}connectFarcaster(){return E(this,null,function*(){if(this.authConnector)try{yield this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(L.setConnectedSocialProvider(this.socialProvider),p.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,yield O.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,I.close()}catch(e){this.socialProvider&&p.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),d.goBack(),f.showError(e)}})}mobileLinkTemplate(){return s`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&P.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40;return s` <wui-qr-code
      size=${e}
      theme=${_.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${h(_.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return s`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(P.copyToClopboard(this.uri),f.showSuccess("Link copied"))}catch{f.showError("Failed to copy")}}};S.styles=N;$([c()],S.prototype,"socialProvider",void 0);$([c()],S.prototype,"uri",void 0);$([c()],S.prototype,"ready",void 0);$([c()],S.prototype,"loading",void 0);S=$([v("w3m-connecting-farcaster-view")],S);export{T as W3mConnectSocialsView,S as W3mConnectingFarcasterView,C as W3mConnectingSocialView};
