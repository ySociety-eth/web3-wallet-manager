import"./chunk-TVBHZNTE.js";import"./chunk-HH32TN2Z.js";import"./chunk-QIKSDE4J.js";import"./chunk-N7JTYNLA.js";import"./chunk-NGATEFI2.js";import{a as en}from"./chunk-LV2TZM2Y.js";import"./chunk-Z7QBJRUP.js";import"./chunk-32TW5WE7.js";import"./chunk-C2SNM5XE.js";import"./chunk-BNX2NHWG.js";import"./chunk-WT2B6TIU.js";import"./chunk-KOOZDQDY.js";import"./chunk-CXLJC5ZB.js";import"./chunk-6SNP2N7S.js";import"./chunk-A2RFRGME.js";import"./chunk-G3EQR5YF.js";import"./chunk-BXL4PJXS.js";import"./chunk-QJMZMSVK.js";import"./chunk-4SKOPOWR.js";import"./chunk-3TBIBBG6.js";import"./chunk-HZ6PZNFK.js";import"./chunk-ETFSQUAY.js";import{a as Nt,b as jt}from"./chunk-G7TNHKYZ.js";import"./chunk-VYWHQZE2.js";import"./chunk-6IEGP7QZ.js";import{a as c,b as d,e as ii,f as m}from"./chunk-DBQTNMCX.js";import{a as tt,b as ti}from"./chunk-Y2DPZIF3.js";import{a as Wi,g as Oi}from"./chunk-VPQVVA4O.js";import{a as Ni}from"./chunk-5G5ROAPX.js";import"./chunk-DGDWXWRD.js";import{e as j}from"./chunk-GD7TJA3Q.js";import{G as E,H as g,I as Yt,J as b,L as $,M as T,N as Je,P as y,U as Ri,V as h,W as ge,Y as x,Z as _,_ as I,e as N,f as P,g as w,ga as S,h as L,ha as Ti,i as C,ka as ei,oa as v,pa as k,qa as ji,ra as R,ta as u}from"./chunk-3VEWMGKM.js";import"./chunk-77POFJ7J.js";import{b as f,e as l,f as Ot,j as p}from"./chunk-IYZIRKFV.js";import"./chunk-WXCPMYFQ.js";import"./chunk-6F6K4OU5.js";import{a as Ct,b as $t,k as A}from"./chunk-HIVZEDT5.js";var Di=f`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var et=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},G=class extends p{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${m(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?R.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return l` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let t=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,i=this.loading?l`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:l`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return l`${t} ${i}`}return null}};G.styles=[v,k,Di];et([c()],G.prototype,"networkSrc",void 0);et([c()],G.prototype,"avatarSrc",void 0);et([c()],G.prototype,"balance",void 0);et([c({type:Boolean})],G.prototype,"isUnsupportedChain",void 0);et([c({type:Boolean})],G.prototype,"disabled",void 0);et([c({type:Boolean})],G.prototype,"loading",void 0);et([c()],G.prototype,"address",void 0);et([c()],G.prototype,"profileName",void 0);et([c()],G.prototype,"charsStart",void 0);et([c()],G.prototype,"charsEnd",void 0);G=et([u("wui-account-button")],G);var B=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},D=class extends p{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=h.getAccountData(this.namespace)?.caipAddress,this.balanceVal=h.getAccountData(this.namespace)?.balance,this.balanceSymbol=h.getAccountData(this.namespace)?.balanceSymbol,this.profileName=h.getAccountData(this.namespace)?.profileName,this.profileImage=h.getAccountData(this.namespace)?.profileImage,this.network=h.getNetworkData(this.namespace)?.caipNetwork,this.networkImage=C.getNetworkImage(this.network),this.isSupported=E.state.allowUnsupportedChain?!0:h.state.activeChain?h.checkIfSupportedNetwork(h.state.activeChain):!0}firstUpdated(){let t=this.namespace;t?this.unsubscribe.push(h.subscribeChainProp("accountState",i=>{this.caipAddress=i?.caipAddress,this.balanceVal=i?.balance,this.balanceSymbol=i?.balanceSymbol,this.profileName=i?.profileName,this.profileImage=i?.profileImage},t),h.subscribeChainProp("networkState",i=>{this.network=i?.caipNetwork,this.isSupported=h.checkIfSupportedNetwork(t,i?.caipNetwork),this.networkImage=C.getNetworkImage(i?.caipNetwork)},t)):this.unsubscribe.push(L.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),h.subscribeKey("activeCaipAddress",i=>{this.caipAddress=i}),x.subscribeKey("balance",i=>this.balanceVal=i),x.subscribeKey("balanceSymbol",i=>this.balanceSymbol=i),x.subscribeKey("profileName",i=>this.profileName=i),x.subscribeKey("profileImage",i=>this.profileImage=i),h.subscribeKey("activeCaipNetwork",i=>{this.network=i,this.networkImage=C.getNetworkImage(i),this.isSupported=i?.chainNamespace?h.checkIfSupportedNetwork(i?.chainNamespace):!0,this.fetchNetworkImage(i)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!h.state.activeChain)return null;let t=this.balance==="show",i=typeof this.balanceVal!="string";return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${E.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${m(w.getPlainAddress(this.caipAddress))}
        profileName=${m(this.profileName)}
        networkSrc=${m(this.networkImage)}
        avatarSrc=${m(this.profileImage)}
        balance=${t?w.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `}onClick(){return A(this,null,function*(){yield h.switchActiveNamespace(this.namespace),this.isSupported||E.state.allowUnsupportedChain?I.open():I.open({view:"UnsupportedChain"})})}fetchNetworkImage(t){return A(this,null,function*(){t?.assets?.imageId&&(this.networkImage=yield C.fetchNetworkImage(t?.assets?.imageId))})}};B([c({type:Boolean})],D.prototype,"disabled",void 0);B([c()],D.prototype,"balance",void 0);B([c()],D.prototype,"charsStart",void 0);B([c()],D.prototype,"charsEnd",void 0);B([c()],D.prototype,"namespace",void 0);B([d()],D.prototype,"caipAddress",void 0);B([d()],D.prototype,"balanceVal",void 0);B([d()],D.prototype,"balanceSymbol",void 0);B([d()],D.prototype,"profileName",void 0);B([d()],D.prototype,"profileImage",void 0);B([d()],D.prototype,"network",void 0);B([d()],D.prototype,"networkImage",void 0);B([d()],D.prototype,"isSupported",void 0);var Ui=class extends D{};Ui=B([u("w3m-account-button")],Ui);var Pi=class extends D{};Pi=B([u("appkit-account-button")],Pi);var Li=f`
  :host {
    display: block;
    width: max-content;
  }
`;var it=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},V=class extends p{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=h.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(h.subscribeChainProp("accountState",t=>{this.caipAddress=t?.caipAddress},this.namespace)):this.unsubscribe.push(h.subscribeKey("activeCaipAddress",t=>this.caipAddress=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.caipAddress?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${m(this.balance)}
            .charsStart=${m(this.charsStart)}
            .charsEnd=${m(this.charsEnd)}
            namespace=${m(this.namespace)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${m(this.size)}
            label=${m(this.label)}
            loadingLabel=${m(this.loadingLabel)}
            namespace=${m(this.namespace)}
          ></appkit-connect-button>
        `}};V.styles=Li;it([c({type:Boolean})],V.prototype,"disabled",void 0);it([c()],V.prototype,"balance",void 0);it([c()],V.prototype,"size",void 0);it([c()],V.prototype,"label",void 0);it([c()],V.prototype,"loadingLabel",void 0);it([c()],V.prototype,"charsStart",void 0);it([c()],V.prototype,"charsEnd",void 0);it([c()],V.prototype,"namespace",void 0);it([d()],V.prototype,"caipAddress",void 0);var Bi=class extends V{};Bi=it([u("w3m-button")],Bi);var zi=class extends V{};zi=it([u("appkit-button")],zi);var Mi=f`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var oi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Qt=class extends p{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let t=this.size==="md"?"paragraph-600":"small-600";return l`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?l`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Qt.styles=[v,k,Mi];oi([c()],Qt.prototype,"size",void 0);oi([c({type:Boolean})],Qt.prototype,"loading",void 0);Qt=oi([u("wui-connect-button")],Qt);var ft=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},nt=class extends p{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=I.state.open,this.loading=this.namespace?I.state.loadingNamespaceMap.get(this.namespace):I.state.loading,this.unsubscribe.push(I.subscribe(t=>{this.open=t.open,this.loading=this.namespace?t.loadingNamespaceMap.get(this.namespace):t.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-connect-button
        size=${m(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?I.close():this.loading||I.open({view:"Connect",namespace:this.namespace})}};ft([c()],nt.prototype,"size",void 0);ft([c()],nt.prototype,"label",void 0);ft([c()],nt.prototype,"loadingLabel",void 0);ft([c()],nt.prototype,"namespace",void 0);ft([d()],nt.prototype,"open",void 0);ft([d()],nt.prototype,"loading",void 0);var Vi=class extends nt{};Vi=ft([u("w3m-connect-button")],Vi);var Hi=class extends nt{};Hi=ft([u("appkit-connect-button")],Hi);var Ki=f`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var be=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Dt=class extends p{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return l`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Dt.styles=[v,k,Ki];be([c()],Dt.prototype,"imageSrc",void 0);be([c({type:Boolean})],Dt.prototype,"isUnsupportedChain",void 0);be([c({type:Boolean})],Dt.prototype,"disabled",void 0);Dt=be([u("wui-network-button")],Dt);var Fi=f`
  :host {
    display: block;
    width: max-content;
  }
`;var pt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Y=class extends p{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=h.state.activeCaipNetwork,this.networkImage=C.getNetworkImage(this.network),this.caipAddress=h.state.activeCaipAddress,this.loading=I.state.loading,this.isSupported=E.state.allowUnsupportedChain?!0:h.state.activeChain?h.checkIfSupportedNetwork(h.state.activeChain):!0,this.unsubscribe.push(L.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),h.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),h.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=C.getNetworkImage(t),this.isSupported=t?.chainNamespace?h.checkIfSupportedNetwork(t.chainNamespace):!0,C.fetchNetworkImage(t?.assets?.imageId)}),I.subscribeKey("loading",t=>this.loading=t))}firstUpdated(){C.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.network?h.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${E.state.allowUnsupportedChain?!1:!t}
        imageSrc=${m(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!E.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||($.sendEvent({type:"track",event:"CLICK_NETWORKS"}),I.open({view:"Networks"}))}};Y.styles=Fi;pt([c({type:Boolean})],Y.prototype,"disabled",void 0);pt([c({type:String})],Y.prototype,"label",void 0);pt([d()],Y.prototype,"network",void 0);pt([d()],Y.prototype,"networkImage",void 0);pt([d()],Y.prototype,"caipAddress",void 0);pt([d()],Y.prototype,"loading",void 0);pt([d()],Y.prototype,"isSupported",void 0);var qi=class extends Y{};qi=pt([u("w3m-network-button")],qi);var Gi=class extends Y{};Gi=pt([u("appkit-network-button")],Gi);var Xi=f`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var xe=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ut=class extends p{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Ut.styles=[v,k,Xi];xe([c()],Ut.prototype,"label",void 0);xe([c()],Ut.prototype,"description",void 0);xe([c()],Ut.prototype,"icon",void 0);Ut=xe([u("wui-notice-card")],Ut);var Yi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ri=class extends p{constructor(){super(),this.unsubscribe=[],this.socialProvider=P.getConnectedSocialProvider(),this.socialUsername=P.getConnectedSocialUsername(),this.namespace=h.state.activeChain,this.unsubscribe.push(h.subscribeKey("activeChain",t=>{this.namespace=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=b.getConnectorId(this.namespace),i=b.getAuthConnector();if(!i||t!==S.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;let o=i.provider.getEmail()??"";return!o&&!this.socialUsername?(this.style.cssText="display: none",null):l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(t,i){i||g.push("UpdateEmailWallet",{email:t})}getAuthName(t){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:t.length>30?`${t.slice(0,-3)}...`:t}};Yi([d()],ri.prototype,"namespace",void 0);ri=Yi([u("w3m-account-auth-button")],ri);var st=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ot=class extends p{constructor(){super(),this.usubscribe=[],this.networkImages=L.state.networkImages,this.address=x.state.address,this.profileImage=x.state.profileImage,this.profileName=x.state.profileName,this.network=h.state.activeCaipNetwork,this.preferredAccountType=x.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(x.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.preferredAccountType=t.preferredAccountType):I.close()}),x.subscribeKey("preferredAccountType",t=>this.preferredAccountType=t),h.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");let t=this.networkImages[this.network?.assets?.imageId??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${m(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${R.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${t?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${m(t)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let t=this.network?.chainNamespace,i=b.getConnectorId(t),o=b.getAuthConnector();return!h.checkIfNamesSupported()||!o||i!==S.CONNECTOR_ID.AUTH||this.profileName?null:l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){let t=this.network?.chainNamespace,i=b.getConnectorId(t),o=b.getAuthConnector(),{origin:r}=location;return!o||i!==S.CONNECTOR_ID.AUTH||r.includes(N.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let t=h.getAllRequestedCaipNetworks(),i=t?t.length>1:!1,o=t?.find(({id:r})=>r===this.network?.id);return i||!o}onCopyAddress(){try{this.address&&(w.copyToClopboard(this.address),T.showSuccess("Address copied"))}catch{T.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let t=this.network?.chainNamespace,i=h.checkIfSmartAccountEnabled(),o=b.getConnectorId(t);return!b.getAuthConnector()||o!==S.CONNECTOR_ID.AUTH||!i?null:(this.switched||(this.text=this.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){g.push("ChooseAccountName")}changePreferredAccountType(){return A(this,null,function*(){let t=h.checkIfSmartAccountEnabled(),i=this.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT||!t?j.ACCOUNT_TYPES.EOA:j.ACCOUNT_TYPES.SMART_ACCOUNT;b.getAuthConnector()&&(this.loading=!0,yield y.setPreferredAccountType(i),this.text=i===j.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,Ri.resetSend(),this.loading=!1,this.requestUpdate())})}onNetworks(){this.isAllowedNetworkSwitch()&&g.push("Networks")}onDisconnect(){return A(this,null,function*(){try{this.disconnecting=!0,yield y.disconnect(),$.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),I.close()}catch{$.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),T.showError("Failed to disconnect")}finally{this.disconnecting=!1}})}onGoToUpgradeView(){$.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),g.push("UpgradeEmailWallet")}};st([d()],ot.prototype,"address",void 0);st([d()],ot.prototype,"profileImage",void 0);st([d()],ot.prototype,"profileName",void 0);st([d()],ot.prototype,"network",void 0);st([d()],ot.prototype,"preferredAccountType",void 0);st([d()],ot.prototype,"disconnecting",void 0);st([d()],ot.prototype,"loading",void 0);st([d()],ot.prototype,"switched",void 0);st([d()],ot.prototype,"text",void 0);ot=st([u("w3m-account-settings-view")],ot);var Qi=f`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Et=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},dt=class extends p{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){let t=h.state.activeChain,o=b.getConnectorId(t)===S.CONNECTOR_ID.AUTH;return l`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${o?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${R.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(t){if(t.target instanceof HTMLElement&&t.target.id==="copy-address"){this.onCopyClick?.(t);return}this.onProfileClick?.(t)}getIconTemplate(t){return l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${t||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};dt.styles=[v,k,Qi];Et([c()],dt.prototype,"avatarSrc",void 0);Et([c()],dt.prototype,"profileName",void 0);Et([c()],dt.prototype,"address",void 0);Et([c()],dt.prototype,"icon",void 0);Et([c()],dt.prototype,"onProfileClick",void 0);Et([c()],dt.prototype,"onCopyClick",void 0);dt=Et([u("wui-profile-button-v2")],dt);var Zi=f`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var wt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},at=class extends p{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,i)=>{let o=i===this.activeTab;return l`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(i)}
          data-active=${o}
          data-testid="tab-${t.label?.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?l`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,i){let o=this.buttons[this.activeTab],r=this.buttons[t],e=o?.querySelector("wui-text"),n=r?.querySelector("wui-text"),a=r?.getBoundingClientRect(),O=n?.getBoundingClientRect();o&&e&&!i&&t!==this.activeTab&&(e.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&a&&O&&n&&(t!==this.activeTab||i)&&(this.localTabWidth=`${Math.round(a.width+O.width)+6}px`,r.animate([{width:`${a.width+O.width}px`}],{duration:i?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:i?0:125,delay:i?0:200,fill:"forwards",easing:"ease"}))}};at.styles=[v,k,Zi];wt([c({type:Array})],at.prototype,"tabs",void 0);wt([c()],at.prototype,"onTabChange",void 0);wt([c({type:Array})],at.prototype,"buttons",void 0);wt([c({type:Boolean})],at.prototype,"disabled",void 0);wt([c()],at.prototype,"localTabWidth",void 0);wt([d()],at.prototype,"activeTab",void 0);wt([d()],at.prototype,"isDense",void 0);at=wt([u("wui-tabs")],at);var Ji=f`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Q=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},H=class extends p{constructor(){super(),this.unsubscribe=[],this.caipAddress=x.state.caipAddress,this.address=w.getPlainAddress(x.state.caipAddress),this.allAccounts=x.state.allAccounts,this.profileImage=x.state.profileImage,this.profileName=x.state.profileName,this.disconnecting=!1,this.balance=x.state.balance,this.balanceSymbol=x.state.balanceSymbol,this.features=E.state.features,this.namespace=h.state.activeChain,this.chainId=h.state.activeCaipNetwork?.id,this.unsubscribe.push(x.subscribeKey("caipAddress",t=>{this.address=w.getPlainAddress(t),this.caipAddress=t}),x.subscribeKey("balance",t=>this.balance=t),x.subscribeKey("balanceSymbol",t=>this.balanceSymbol=t),x.subscribeKey("profileName",t=>this.profileName=t),x.subscribeKey("profileImage",t=>this.profileImage=t),E.subscribeKey("features",t=>this.features=t),x.subscribeKey("allAccounts",t=>{this.allAccounts=t}),h.subscribeKey("activeChain",t=>this.namespace=t),h.subscribeKey("activeCaipNetwork",t=>{if(t){let[i,o]=t?.caipNetworkId?.split(":")||[];i&&o&&(this.namespace=i,this.chainId=o)}}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.caipAddress)return null;let t=h.state.activeChain!==S.CHAIN.SOLANA&&this.allAccounts.length>1;return l`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${t?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${w.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;let t=this.features?.onramp,i=N.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return!t||!i?null:l`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||N.DEFAULT_FEATURES.walletFeaturesOrder).map(i=>{switch(i){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){if(!this.namespace)return null;let t=h.state.activeChain===S.CHAIN.SOLANA;return this.features?.history&&N.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?l` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!t}
          ?disabled=${t}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100" ?disabled=${t}>
            Activity
          </wui-text>
          ${t?l`<wui-tag variant="main">Coming soon</wui-tag>`:""}
        </wui-list-item>`:null}swapsTemplate(){let t=this.features?.swaps,i=h.state.activeChain===S.CHAIN.EVM;return!t||!i?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){let t=this.features?.send,i=h.state.activeChain===S.CHAIN.EVM;return!t||!i?null:l`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){let t=h.state.activeChain,i=b.getConnectorId(t),o=b.getAuthConnector(),{origin:r}=location;return!o||i!==S.CONNECTOR_ID.AUTH||r.includes(N.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){g.push("SwitchAddress")}handleClickPay(){g.push("OnRampProviders")}handleClickSwap(){g.push("Swap")}handleClickSend(){g.push("WalletSend")}explorerBtnTemplate(){return x.state.addressExplorerUrl?l`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return l`
      <wui-avatar
        alt=${m(this.caipAddress)}
        address=${m(w.getPlainAddress(this.caipAddress))}
        imageSrc=${m(this.profileImage===null?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?R.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):R.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");let t=this.allAccounts.find(o=>o.address===this.address),i=x.state.addressLabels.get(this.address);return this.namespace==="bip122"?this.btcAccountsTemplate():l`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${m(this.address)}
        icon="${t?.type===j.ACCOUNT_TYPES.SMART_ACCOUNT&&h.state.activeChain===S.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${m(this.profileImage?this.profileImage:void 0)}
        profileName=${m(i||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return l`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${m(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${t=>x.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[t]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${R.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(w.copyToClopboard(this.address),T.showSuccess("Address copied"))}catch{T.showError("Failed to copy")}}onTransactions(){$.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:x.state.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("Transactions")}onDisconnect(){return A(this,null,function*(){try{this.disconnecting=!0,yield y.disconnect(),$.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),I.close()}catch{$.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),T.showError("Failed to disconnect")}finally{this.disconnecting=!1}})}onExplorer(){let t=x.state.addressExplorerUrl;t&&w.openHref(t,"_blank")}onGoToUpgradeView(){$.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),g.push("UpgradeEmailWallet")}};H.styles=Ji;Q([d()],H.prototype,"caipAddress",void 0);Q([d()],H.prototype,"address",void 0);Q([d()],H.prototype,"allAccounts",void 0);Q([d()],H.prototype,"profileImage",void 0);Q([d()],H.prototype,"profileName",void 0);Q([d()],H.prototype,"disconnecting",void 0);Q([d()],H.prototype,"balance",void 0);Q([d()],H.prototype,"balanceSymbol",void 0);Q([d()],H.prototype,"features",void 0);Q([d()],H.prototype,"namespace",void 0);Q([d()],H.prototype,"chainId",void 0);H=Q([u("w3m-account-default-widget")],H);var to=f`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var ni=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Zt=class extends p{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Zt.styles=[v,to];ni([c()],Zt.prototype,"dollars",void 0);ni([c()],Zt.prototype,"pennies",void 0);Zt=ni([u("wui-balance")],Zt);var eo=f`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var si=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Jt=class extends p{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return l`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};Jt.styles=[v,k,eo];si([c()],Jt.prototype,"text",void 0);si([c()],Jt.prototype,"icon",void 0);Jt=si([u("wui-icon-button")],Jt);var io=f`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Pt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},gt=class extends p{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return l`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${R.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};gt.styles=[v,k,io];Pt([c()],gt.prototype,"networkSrc",void 0);Pt([c()],gt.prototype,"avatarSrc",void 0);Pt([c()],gt.prototype,"profileName",void 0);Pt([c()],gt.prototype,"address",void 0);Pt([c()],gt.prototype,"icon",void 0);gt=Pt([u("wui-profile-button")],gt);var oo=f`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ve=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Lt=class extends p{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,l`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Lt.styles=[v,k,oo];ve([c()],Lt.prototype,"placement",void 0);ve([c()],Lt.prototype,"variant",void 0);ve([c()],Lt.prototype,"message",void 0);Lt=ve([u("wui-tooltip")],Lt);var ro=f`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Wr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ai=class extends p{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};ai.styles=ro;ai=Wr([u("w3m-account-activity-widget")],ai);var no=f`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Or=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},li=class extends p{render(){return l`${this.nftTemplate()}`}nftTemplate(){return l` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){g.push("WalletReceive")}};li.styles=no;li=Or([u("w3m-account-nfts-widget")],li);var so=f`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var bt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},lt=class extends p{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?l` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:l`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};lt.styles=[v,k,so];bt([c()],lt.prototype,"icon",void 0);bt([c()],lt.prototype,"text",void 0);bt([c()],lt.prototype,"description",void 0);bt([c()],lt.prototype,"tag",void 0);bt([c()],lt.prototype,"iconBackgroundColor",void 0);bt([c()],lt.prototype,"iconColor",void 0);bt([c({type:Boolean})],lt.prototype,"disabled",void 0);lt=bt([u("wui-list-description")],lt);var ao=f`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var lo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ye=class extends p{constructor(){super(),this.unsubscribe=[],this.tokenBalance=x.state.tokenBalance,this.unsubscribe.push(x.subscribe(t=>{this.tokenBalance=t.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(t=>l`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){g.push("WalletReceive")}onBuyClick(){$.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:x.state.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("OnRampProviders")}};ye.styles=ao;lo([d()],ye.prototype,"tokenBalance",void 0);ye=lo([u("w3m-account-tokens-widget")],ye);var co=f`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var ct=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Nr=3,jr=48,Dr=430,Z=class extends p{constructor(){super(),this.unsubscribe=[],this.address=x.state.address,this.profileImage=x.state.profileImage,this.profileName=x.state.profileName,this.network=h.state.activeCaipNetwork,this.currentTab=x.state.currentTab,this.tokenBalance=x.state.tokenBalance,this.features=E.state.features,this.networkImage=C.getNetworkImage(this.network),this.unsubscribe.push(L.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),x.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.currentTab=t.currentTab,this.tokenBalance=t.tokenBalance):I.close()}),h.subscribeKey("activeCaipNetwork",t=>this.network=t),E.subscribeKey("features",t=>this.features=t)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearInterval(this.watchTokenBalance)}firstUpdated(){x.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return l`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${m(this.address)}
        networkSrc=${m(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${m(this.profileImage?this.profileImage:void 0)}
        profileName=${m(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()}

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${w.isMobile()&&window.innerWidth<Dr?`${(window.innerWidth-jr)/Nr}px`:"104px"}
        .tabs=${Ni.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let t=this.features?.walletFeaturesOrder||N.DEFAULT_FEATURES.walletFeaturesOrder;return t.every(o=>!this.features?.[o])?null:l`<wui-flex gap="s">
      ${t.map(o=>{switch(o){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}onrampTemplate(){return this.features?.onramp?l`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){let t=this.features?.swaps,i=h.state.activeChain===S.CHAIN.EVM;return!t||!i?null:l`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `}receiveTemplate(){return this.features?.receive?l`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){let t=this.features?.send,i=h.state.activeChain===S.CHAIN.EVM;return!t||!i?null:l`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>x.fetchTokenBalance(t=>this.onTokenBalanceError(t)),1e4)}onTokenBalanceError(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===S.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let t=w.calculateBalance(this.tokenBalance),{dollars:i="0",pennies:o="00"}=w.formatTokenBalance(t);return l`<wui-balance dollars=${i} pennies=${o}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}onTabChange(t){x.setCurrentTab(t)}onProfileButtonClick(){let{allAccounts:t}=x.state;t.length>1?g.push("Profile"):g.push("AccountSettings")}onBuyClick(){g.push("OnRampProviders")}onSwapClick(){this.network?.caipNetworkId&&!N.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?g.push("UnsupportedChain",{swapUnsupportedChain:!0}):($.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:x.state.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("Swap"))}onReceiveClick(){g.push("WalletReceive")}onSendClick(){$.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:x.state.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("WalletSend")}};Z.styles=co;ct([d()],Z.prototype,"watchTokenBalance",void 0);ct([d()],Z.prototype,"address",void 0);ct([d()],Z.prototype,"profileImage",void 0);ct([d()],Z.prototype,"profileName",void 0);ct([d()],Z.prototype,"network",void 0);ct([d()],Z.prototype,"currentTab",void 0);ct([d()],Z.prototype,"tokenBalance",void 0);ct([d()],Z.prototype,"features",void 0);ct([d()],Z.prototype,"networkImage",void 0);Z=ct([u("w3m-account-wallet-features-widget")],Z);var uo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ci=class extends p{constructor(){super(),this.unsubscribe=[],this.namespace=h.state.activeChain,this.unsubscribe.push(h.subscribeKey("activeChain",t=>{this.namespace=t}))}render(){if(!this.namespace)return null;let t=b.getConnectorId(this.namespace),i=b.getAuthConnector();return l`
      ${i&&t===S.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};uo([d()],ci.prototype,"namespace",void 0);ci=uo([u("w3m-account-view")],ci);var po=f`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var te=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},St=class extends p{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=x.state.addressLabels,this.caipNetwork=h.state.activeCaipNetwork,this.socialProvider=P.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),ge.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then(t=>{let i=this.balance;t.balances.length>0&&(i=t.balances.reduce((o,r)=>o+(r?.value||0),0)),this.balance=i,this.fetchingBalance=!1,this.requestUpdate()}).catch(()=>{this.fetchingBalance=!1,this.requestUpdate()})}render(){let t=this.getLabel(),i=h.state.activeChain,o=b.getConnectorId(i);return this.shouldShowIcon=o===S.CONNECTOR_ID.AUTH,l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===j.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${R.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:l` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let t=this.labels?.get(this.accountAddress),i=h.state.activeChain,o=b.getConnectorId(i);return!t&&o===S.CONNECTOR_ID.AUTH?t=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:t||(t="EOA"),t}};St.styles=[v,k,po];te([c()],St.prototype,"accountAddress",void 0);te([c()],St.prototype,"accountType",void 0);te([c({type:Boolean})],St.prototype,"selected",void 0);te([c({type:Function})],St.prototype,"onSelect",void 0);St=te([u("wui-list-account")],St);var mo=f`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var Bt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},xt=class extends p{constructor(){super(),this.usubscribe=[],this.address=x.state.address,this.profileImage=x.state.profileImage,this.profileName=x.state.profileName,this.accounts=x.state.allAccounts,this.loading=!1,this.usubscribe.push(x.subscribeKey("address",t=>{t?this.address=t:I.close()})),this.usubscribe.push(x.subscribeKey("profileImage",t=>{this.profileImage=t})),this.usubscribe.push(x.subscribeKey("profileName",t=>{this.profileName=t}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return l`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${m(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?R.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):R.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>g.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return l`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(t=>this.accountTemplate(t))}
      </wui-flex>
    </wui-flex>`}onSwitchAccount(t){return A(this,null,function*(){if(this.loading=!0,b.getAuthConnector()){let o=t.type;yield y.setPreferredAccountType(o)}x.setShouldUpdateToAddress(t.address,h.state.activeChain),this.loading=!1})}accountTemplate(t){return l`<wui-list-account accountAddress=${t.address} accountType=${t.type}>
      ${t.address===this.address?"":l`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(t)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(w.copyToClopboard(this.address),T.showSuccess("Address copied"))}catch{T.showError("Failed to copy")}}};xt.styles=mo;Bt([d()],xt.prototype,"address",void 0);Bt([d()],xt.prototype,"profileImage",void 0);Bt([d()],xt.prototype,"profileName",void 0);Bt([d()],xt.prototype,"accounts",void 0);Bt([d()],xt.prototype,"loading",void 0);xt=Bt([u("w3m-profile-view")],xt);var ho=f`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Ce=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},zt=class extends p{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};zt.styles=[v,k,ho];Ce([c()],zt.prototype,"imageSrc",void 0);Ce([c()],zt.prototype,"text",void 0);Ce([c()],zt.prototype,"size",void 0);zt=Ce([u("wui-banner-img")],zt);var fo=f`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var ui=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ee=class extends p{constructor(){super(),this.metadata=E.state.metadata,this.allAccounts=x.state.allAccounts||[],this.balances={},this.labels=x.state.addressLabels,this.currentAddress=x.state.address||"",this.caipNetwork=h.state.activeCaipNetwork,x.subscribeKey("allAccounts",t=>{this.allAccounts=t})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(t=>{ge.getBalance(t.address,this.caipNetwork?.caipNetworkId).then(i=>{let o=this.balances[t.address]||0;i.balances.length>0&&(o=i.balances.reduce((r,e)=>r+(e?.value||0),0)),this.balances[t.address]=o,this.requestUpdate()})})}getAddressIcon(t){return t==="smartAccount"?"lightbulb":"mail"}render(){return l`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${m(this.metadata?.icons[0])}
          text=${m(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((t,i)=>this.getAddressTemplate(t,i))}
      </wui-flex>
    `}getAddressTemplate(t,i){let o=this.labels?.get(t.address),r=h.state.activeChain,n=b.getConnectorId(r)===S.CONNECTOR_ID.AUTH;return l`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${t.address}></wui-avatar>
          ${n?l`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(t.type)}"
                ?border=${!0}
              ></wui-icon-box>`:l`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${o||R.getTruncateString({string:t.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[t.address]=="number"?`$${this.balances[t.address]?.toFixed(2)}`:l`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${t.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":l`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${i}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(t.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(t){let i=h.state.activeCaipNetwork,o=i?.chainNamespace,r=`${o}:${i?.id}:${t}`;x.setCaipAddress(r,o),I.close()}};ee.styles=fo;ui([d()],ee.prototype,"allAccounts",void 0);ui([d()],ee.prototype,"balances",void 0);ee=ui([u("w3m-switch-address-view")],ee);var wo=f`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var go=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},$e=class extends p{constructor(){super(...arguments),this.inputElementRef=Nt(),this.checked=void 0}render(){return l`
      <label>
        <input
          ${jt(this.inputElementRef)}
          type="checkbox"
          ?checked=${m(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};$e.styles=[v,k,ji,wo];go([c({type:Boolean})],$e.prototype,"checked",void 0);$e=go([u("wui-switch")],$e);var bo=f`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var xo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ee=class extends p{constructor(){super(...arguments),this.checked=void 0}render(){return l`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${m(this.checked)}></wui-switch>
      </button>
    `}};Ee.styles=[v,k,bo];xo([c({type:Boolean})],Ee.prototype,"checked",void 0);Ee=xo([u("wui-certified-switch")],Ee);var vo=f`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var yo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Se=class extends p{constructor(){super(...arguments),this.icon="copy"}render(){return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Se.styles=[v,k,vo];yo([c()],Se.prototype,"icon",void 0);Se=yo([u("wui-input-element")],Se);var Co=f`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Ur=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},pi=class extends p{constructor(){super(...arguments),this.inputComponentRef=Nt()}render(){return l`
      <wui-input-text
        ${jt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let i=this.inputComponentRef.value?.inputElementRef.value;i&&(i.value="",i.focus(),i.dispatchEvent(new Event("input")))}};pi.styles=[v,Co];pi=Ur([u("wui-search-bar")],pi);var ke=Ot`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var $o=f`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Eo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ae=class extends p{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ke}`:l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ae.styles=[v,k,$o];Eo([c()],Ae.prototype,"type",void 0);Ae=Eo([u("wui-card-select-loader")],Ae);var So=f`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var J=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},K=class extends p{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&R.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&R.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&R.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&R.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&R.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&R.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&R.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&R.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};K.styles=[v,So];J([c()],K.prototype,"gridTemplateRows",void 0);J([c()],K.prototype,"gridTemplateColumns",void 0);J([c()],K.prototype,"justifyItems",void 0);J([c()],K.prototype,"alignItems",void 0);J([c()],K.prototype,"justifyContent",void 0);J([c()],K.prototype,"alignContent",void 0);J([c()],K.prototype,"columnGap",void 0);J([c()],K.prototype,"rowGap",void 0);J([c()],K.prototype,"gap",void 0);J([c()],K.prototype,"padding",void 0);J([c()],K.prototype,"margin",void 0);K=J([u("wui-grid")],K);var ko=f`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var kt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},mt=class extends p{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};mt.styles=[k,v,ko];kt([c()],mt.prototype,"size",void 0);kt([c()],mt.prototype,"name",void 0);kt([c()],mt.prototype,"imageSrc",void 0);kt([c()],mt.prototype,"walletIcon",void 0);kt([c({type:Boolean})],mt.prototype,"installed",void 0);kt([c()],mt.prototype,"badgeSize",void 0);mt=kt([u("wui-wallet-image")],mt);var Ao=f`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var ie=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},At=class extends p{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let t=this.wallet?.badge_type==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${m(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${m(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}fetchImageSrc(){return A(this,null,function*(){this.wallet&&(this.imageSrc=C.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=yield C.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))})}};At.styles=Ao;ie([d()],At.prototype,"visible",void 0);ie([d()],At.prototype,"imageSrc",void 0);ie([d()],At.prototype,"imageLoading",void 0);ie([c()],At.prototype,"wallet",void 0);At=ie([u("w3m-all-wallets-list-item")],At);var _o=f`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var oe=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Io="local-paginator",_t=class extends p{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!_.state.wallets.length,this.wallets=_.state.wallets,this.recommended=_.state.recommended,this.featured=_.state.featured,this.unsubscribe.push(_.subscribeKey("wallets",t=>this.wallets=t),_.subscribeKey("recommended",t=>this.recommended=t),_.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}initialFetch(){return A(this,null,function*(){this.loading=!0;let t=this.shadowRoot?.querySelector("wui-grid");t&&(yield _.fetchWallets({page:1}),yield t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})}shimmerTemplate(t,i){return[...Array(t)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${m(i)}></wui-card-select-loader>
      `)}walletsTemplate(){let t=w.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return tt.markWalletsAsInstalled(t).map(o=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(o)}
          .wallet=${o}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:t,recommended:i,featured:o,count:r}=_.state,e=window.innerWidth<352?3:4,n=t.length+i.length,O=Math.ceil(n/e)*e-n+e;return O-=t.length?o.length%e:0,r===0&&o.length>0?null:r===0||[...o,...t,...i].length<r?this.shimmerTemplate(O,Io):null}createPaginationObserver(){let t=this.shadowRoot?.querySelector(`#${Io}`);t&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i?.isIntersecting&&!this.loading){let{page:o,count:r,wallets:e}=_.state;e.length<r&&_.fetchWallets({page:o+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){b.selectWalletConnector(t)}};_t.styles=_o;oe([d()],_t.prototype,"loading",void 0);oe([d()],_t.prototype,"wallets",void 0);oe([d()],_t.prototype,"recommended",void 0);oe([d()],_t.prototype,"featured",void 0);_t=oe([u("w3m-all-wallets-list")],_t);var Ro=f`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var _e=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Mt=class extends p{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}onSearch(){return A(this,null,function*(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,yield _.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)})}walletsTemplate(){let{search:t}=_.state,i=tt.markWalletsAsInstalled(t);return t.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${i.map(o=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){b.selectWalletConnector(t)}};Mt.styles=Ro;_e([d()],Mt.prototype,"loading",void 0);_e([c()],Mt.prototype,"query",void 0);_e([c()],Mt.prototype,"badge",void 0);Mt=_e([u("w3m-all-wallets-search")],Mt);var di=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ie=class extends p{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=w.debounce(t=>{this.search=t})}render(){let t=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            badge=${m(this.badge)}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list badge=${m(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",T.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return w.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){g.push("ConnectingWalletConnect")}};di([d()],Ie.prototype,"search",void 0);di([d()],Ie.prototype,"badge",void 0);Ie=di([u("w3m-all-wallets-view")],Ie);var To=f`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Re=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Vt=class extends p{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${m(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Vt.styles=[v,k,To];Re([c()],Vt.prototype,"text",void 0);Re([c({type:Boolean})],Vt.prototype,"disabled",void 0);Re([c()],Vt.prototype,"tabIdx",void 0);Vt=Re([u("wui-list-button")],Vt);var Wo=f`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var re=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},It=class extends p{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=Nt(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.formRef.value?.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){return l`
      <form ${jt(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${m(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(t){this.email=t.detail.trim(),this.error=""}onSubmitEmail(t){return A(this,null,function*(){if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===h.state.activeChain)){let o=h.getFirstCaipNetworkSupportsAuthConnector();if(o){g.push("SwitchNetwork",{network:o});return}}try{if(this.loading)return;this.loading=!0,t.preventDefault();let o=b.getAuthConnector();if(!o)throw new Error("w3m-email-login-widget: Auth connector not found");let{action:r}=yield o.provider.connectEmail({email:this.email});$.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),r==="VERIFY_OTP"?($.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),g.push("EmailVerifyOtp",{email:this.email})):r==="VERIFY_DEVICE"?g.push("EmailVerifyDevice",{email:this.email}):r==="CONNECT"&&(yield y.connectExternal(o,h.state.activeChain),g.replace("Account"))}catch(o){w.parseError(o)?.includes("Invalid email")?this.error="Invalid email. Try again.":T.showError(o)}finally{this.loading=!1}})}onFocusEvent(){$.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};It.styles=Wo;re([c()],It.prototype,"tabIdx",void 0);re([d()],It.prototype,"email",void 0);re([d()],It.prototype,"loading",void 0);re([d()],It.prototype,"error",void 0);It=re([u("w3m-email-login-widget")],It);var Oo=f`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Te=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ht=class extends p{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${m(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ht.styles=[v,k,Oo];Te([c()],Ht.prototype,"logo",void 0);Te([c({type:Boolean})],Ht.prototype,"disabled",void 0);Te([c()],Ht.prototype,"tabIdx",void 0);Ht=Te([u("wui-logo-select")],Ht);var No=f`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Kt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},jo=2,Do=6,vt=class extends p{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=b.state.connectors,this.features=E.state.features,this.authConnector=this.connectors.find(t=>t.type==="AUTH"),this.unsubscribe.push(b.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),E.subscribeKey("features",t=>this.features=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let t=this.walletGuide==="explore",i=this.features?.socials;return!i&&t?(i=N.DEFAULT_FEATURES.socials,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(t){return t.length===2?l` <wui-flex gap="xs">
        ${t.slice(0,jo).map(i=>l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${m(this.tabIdx)}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-social
      data-testid=${`social-selector-${t[0]}`}
      @click=${()=>{this.onSocialClick(t[0])}}
      logo=${m(t[0])}
      align="center"
      name=${`Continue with ${t[0]}`}
      tabIdx=${m(this.tabIdx)}
    ></wui-list-social>`}bottomViewTemplate(){let t=this.features?.socials,i=this.walletGuide==="explore";return(!this.authConnector||!t||!t?.length)&&i&&(t=N.DEFAULT_FEATURES.socials),!t||t.length<=jo?null:t&&t.length>Do?l`<wui-flex gap="xs">
        ${t.slice(1,Do-1).map(r=>l`<wui-logo-select
              data-testid=${`social-selector-${r}`}
              @click=${()=>{this.onSocialClick(r)}}
              logo=${r}
              tabIdx=${m(this.tabIdx)}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${m(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`:t?l`<wui-flex gap="xs">
      ${t.slice(1,t.length).map(r=>l`<wui-logo-select
            data-testid=${`social-selector-${r}`}
            @click=${()=>{this.onSocialClick(r)}}
            logo=${r}
            tabIdx=${m(this.tabIdx)}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){g.push("ConnectSocials")}onSocialClick(t){return A(this,null,function*(){if(!S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===h.state.activeChain)){let o=h.getFirstCaipNetworkSupportsAuthConnector();if(o){g.push("SwitchNetwork",{network:o});return}}if(t&&(x.setSocialProvider(t,h.state.activeChain),$.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:t}})),t===Oi.Farcaster){g.push("ConnectingFarcaster");let o=b.getAuthConnector();if(o&&!x.state.farcasterUrl)try{let{url:r}=yield o.provider.getFarcasterUri();x.setFarcasterUrl(r,h.state.activeChain)}catch(r){g.goBack(),T.showError(r)}}else{g.push("ConnectingSocial");let o=b.getAuthConnector();try{if(o&&t){if(w.isTelegram()||(this.popupWindow=w.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes")),this.popupWindow)x.setSocialWindow(this.popupWindow,h.state.activeChain);else if(!w.isTelegram())throw new Error("Something went wrong");let{uri:r}=yield o.provider.getSocialRedirectUri({provider:t});if(!r)throw this.popupWindow?.close(),new Error("Something went wrong");if(this.popupWindow&&(this.popupWindow.location.href=r),w.isTelegram()){P.setTelegramSocialProvider(t);let e=w.formatTelegramSocialLoginUrl(r);return w.openHref(e,"_top")}}}catch{this.popupWindow?.close(),T.showError("Something went wrong")}}})}};vt.styles=No;Kt([c()],vt.prototype,"walletGuide",void 0);Kt([c()],vt.prototype,"tabIdx",void 0);Kt([d()],vt.prototype,"connectors",void 0);Kt([d()],vt.prototype,"features",void 0);Kt([d()],vt.prototype,"authConnector",void 0);vt=Kt([u("w3m-social-login-widget")],vt);var Uo=f`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var mi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ne=class extends p{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return this.walletGuide==="explore"?l`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:l`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${m(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){g.push("Create")}};ne.styles=Uo;mi([c()],ne.prototype,"tabIdx",void 0);mi([c()],ne.prototype,"walletGuide",void 0);ne=mi([u("w3m-wallet-guide")],ne);var Po=f`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Lo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},hi=4,We=class extends p{constructor(){super(...arguments),this.walletImages=[]}render(){let t=this.walletImages.length<hi;return l`${this.walletImages.slice(0,hi).map(({src:i,walletName:o})=>l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${i}
              name=${m(o)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(hi-this.walletImages.length)].map(()=>l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};We.styles=[v,Po];Lo([c({type:Array})],We.prototype,"walletImages",void 0);We=Lo([u("wui-all-wallets-image")],We);var Bo=f`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var F=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},U=class extends p{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${m(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?l`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};U.styles=[v,k,Bo];F([c({type:Array})],U.prototype,"walletImages",void 0);F([c()],U.prototype,"imageSrc",void 0);F([c()],U.prototype,"name",void 0);F([c()],U.prototype,"tagLabel",void 0);F([c()],U.prototype,"tagVariant",void 0);F([c()],U.prototype,"icon",void 0);F([c()],U.prototype,"walletIcon",void 0);F([c()],U.prototype,"tabIdx",void 0);F([c({type:Boolean})],U.prototype,"installed",void 0);F([c({type:Boolean})],U.prototype,"disabled",void 0);F([c({type:Boolean})],U.prototype,"showAllWallets",void 0);F([c({type:Boolean})],U.prototype,"loading",void 0);F([c({type:String})],U.prototype,"loadingSpinnerColor",void 0);U=F([u("wui-list-wallet")],U);var se=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ft=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.count=_.state.count,this.isFetchingRecommendedWallets=_.state.isFetchingRecommendedWallets,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t),_.subscribeKey("count",t=>this.count=t),_.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.find(a=>a.id==="walletConnect"),{allWallets:i}=E.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!w.isMobile())return null;let o=_.state.featured.length,r=this.count+o,e=r<10?r:Math.floor(r/10)*10,n=e<r?`${e}+`:`${e}`;return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${n}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${m(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){$.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),g.push("AllWallets")}};se([c()],Ft.prototype,"tabIdx",void 0);se([d()],Ft.prototype,"connectors",void 0);se([d()],Ft.prototype,"count",void 0);se([d()],Ft.prototype,"isFetchingRecommendedWallets",void 0);Ft=se([u("w3m-all-wallets-widget")],Ft);var fi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Oe=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.filter(i=>i.type==="ANNOUNCED");return t?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(i=>i.info?.rdns&&_.state.excludedRDNS&&_.state.excludedRDNS.includes(i?.info?.rdns)?null:l`
            <wui-list-wallet
              imageSrc=${m(C.getConnectorImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnector(i)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              .installed=${!0}
              tabIdx=${m(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?w.isMobile()?g.push("AllWallets"):g.push("ConnectingWalletConnect"):g.push("ConnectingExternal",{connector:t})}};fi([c()],Oe.prototype,"tabIdx",void 0);fi([d()],Oe.prototype,"connectors",void 0);Oe=fi([u("w3m-connect-announced-widget")],Oe);var Ne=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ae=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t)),w.isTelegram()&&w.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let{customWallets:t}=E.state;if(!t?.length)return this.style.cssText="display: none",null;let i=this.filterOutDuplicateWallets(t);return l`<wui-flex flexDirection="column" gap="xs">
      ${i.map(o=>l`
          <wui-list-wallet
            imageSrc=${m(C.getWalletImage(o))}
            name=${o.name??"Unknown"}
            @click=${()=>this.onConnectWallet(o)}
            data-testid=${`wallet-selector-${o.id}`}
            tabIdx=${m(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){let i=P.getRecentWallets(),o=this.connectors.map(a=>a.info?.rdns).filter(Boolean),r=i.map(a=>a.rdns).filter(Boolean),e=o.concat(r);if(e.includes("io.metamask.mobile")&&w.isMobile()){let a=e.indexOf("io.metamask.mobile");e[a]="io.metamask"}return t.filter(a=>!e.includes(String(a?.rdns)))}onConnectWallet(t){this.loading||g.push("ConnectingWalletConnect",{wallet:t})}};Ne([c()],ae.prototype,"tabIdx",void 0);Ne([d()],ae.prototype,"connectors",void 0);Ne([d()],ae.prototype,"loading",void 0);ae=Ne([u("w3m-connect-custom-widget")],ae);var wi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},je=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let i=this.connectors.filter(o=>o.type==="EXTERNAL").filter(o=>o.id!==S.CONNECTOR_ID.COINBASE_SDK);return i?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(o=>l`
            <wui-list-wallet
              imageSrc=${m(C.getConnectorImage(o))}
              .installed=${!0}
              name=${o.name??"Unknown"}
              data-testid=${`wallet-selector-external-${o.id}`}
              @click=${()=>this.onConnector(o)}
              tabIdx=${m(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){g.push("ConnectingExternal",{connector:t})}};wi([c()],je.prototype,"tabIdx",void 0);wi([d()],je.prototype,"connectors",void 0);je=wi([u("w3m-connect-external-widget")],je);var zo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},gi=class extends p{constructor(){super(...arguments),this.unsubscribe=[],this.tabIdx=void 0}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let{featured:t}=_.state;if(!t.length)return this.style.cssText="display: none",null;let i=tt.filterOutDuplicateWallets(t);return l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(o=>l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${o.id}`}
              imageSrc=${m(C.getWalletImage(o))}
              name=${o.name??"Unknown"}
              @click=${()=>this.onConnectWallet(o)}
              tabIdx=${m(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(t){b.selectWalletConnector(t)}};zo([c()],gi.prototype,"tabIdx",void 0);gi=zo([u("w3m-connect-featured-widget")],gi);var bi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},De=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.filter(i=>i.type==="INJECTED");return!t?.length||t.length===1&&t[0]?.name==="Browser Wallet"&&!w.isMobile()?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(i=>{if(!w.isMobile()&&i.name==="Browser Wallet")return null;let o=i.info?.rdns;return!o&&!y.checkInstalled(void 0)?(this.style.cssText="display: none",null):o&&_.state.excludedRDNS&&_.state.excludedRDNS.includes(o)?null:l`
            <wui-list-wallet
              imageSrc=${m(C.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${m(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(t){b.setActiveConnector(t),g.push("ConnectingExternal",{connector:t})}};bi([c()],De.prototype,"tabIdx",void 0);bi([d()],De.prototype,"connectors",void 0);De=bi([u("w3m-connect-injected-widget")],De);var xi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ue=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return t?.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(i=>l`
            <wui-list-wallet
              imageSrc=${m(C.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${m(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){b.setActiveConnector(t),g.push("ConnectingMultiChain")}};xi([c()],Ue.prototype,"tabIdx",void 0);xi([d()],Ue.prototype,"connectors",void 0);Ue=xi([u("w3m-connect-multi-chain-widget")],Ue);var Pe=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},le=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t)),w.isTelegram()&&w.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",t=>this.loading=!t)))}render(){let i=P.getRecentWallets().filter(o=>!this.connectors.some(r=>r.id===o.id||r.name===o.name));return i.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(o=>l`
            <wui-list-wallet
              imageSrc=${m(C.getWalletImage(o))}
              name=${o.name??"Unknown"}
              @click=${()=>this.onConnectWallet(o)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${m(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||b.selectWalletConnector(t)}};Pe([c()],le.prototype,"tabIdx",void 0);Pe([d()],le.prototype,"connectors",void 0);Pe([d()],le.prototype,"loading",void 0);le=Pe([u("w3m-connect-recent-widget")],le);var Le=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ce=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t)),w.isTelegram()&&w.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.connectors.find(M=>M.id==="walletConnect"))return null;let{recommended:i}=_.state,{customWallets:o,featuredWalletIds:r}=E.state,{connectors:e}=b.state,n=P.getRecentWallets(),O=e.filter(M=>M.type==="INJECTED"||M.type==="ANNOUNCED"||M.type==="MULTI_CHAIN").filter(M=>M.name!=="Browser Wallet");if(r||o||!i.length)return this.style.cssText="display: none",null;let q=O.length+n.length,z=Math.max(0,2-q),Wt=tt.filterOutDuplicateWallets(i).slice(0,z);return Wt.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${Wt.map(M=>l`
            <wui-list-wallet
              imageSrc=${m(C.getWalletImage(M))}
              name=${M?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(M)}
              tabIdx=${m(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;let i=b.getConnector(t.id,t.rdns);i?g.push("ConnectingExternal",{connector:i}):g.push("ConnectingWalletConnect",{wallet:t})}};Le([c()],ce.prototype,"tabIdx",void 0);Le([d()],ce.prototype,"connectors",void 0);Le([d()],ce.prototype,"loading",void 0);ce=Le([u("w3m-connect-recommended-widget")],ce);var Be=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ue=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.connectorImages=L.state.connectorImages,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t),L.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(w.isMobile())return this.style.cssText="display: none",null;let t=this.connectors.find(o=>o.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;let i=t.imageUrl||this.connectorImages[t?.imageId??""];return l`
      <wui-list-wallet
        imageSrc=${m(i)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${m(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){b.setActiveConnector(t),g.push("ConnectingWalletConnect")}};Be([c()],ue.prototype,"tabIdx",void 0);Be([d()],ue.prototype,"connectors",void 0);Be([d()],ue.prototype,"connectorImages",void 0);ue=Be([u("w3m-connect-walletconnect-widget")],ue);var Mo=f`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var vi=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},pe=class extends p{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let{custom:t,recent:i,announced:o,injected:r,multiChain:e,recommended:n,featured:a,external:O}=ti.getConnectorsByType(this.connectors),q=ti.getIsConnectedWithWC(),z=E.state.enableWalletConnect;return l`
      <wui-flex flexDirection="column" gap="xs">
        ${z&&!q?l`<w3m-connect-walletconnect-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-walletconnect-widget>`:null}
        ${i.length?l`<w3m-connect-recent-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-recent-widget>`:null}
        ${e.length?l`<w3m-connect-multi-chain-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-multi-chain-widget>`:null}
        ${o.length?l`<w3m-connect-announced-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-announced-widget>`:null}
        ${r.length?l`<w3m-connect-injected-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-injected-widget>`:null}
        ${a.length?l`<w3m-connect-featured-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-featured-widget>`:null}
        ${t?.length?l`<w3m-connect-custom-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-custom-widget>`:null}
        ${O.length?l`<w3m-connect-external-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-external-widget>`:null}
        ${n.length?l`<w3m-connect-recommended-widget
              tabIdx=${m(this.tabIdx)}
            ></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}};pe.styles=Mo;vi([c()],pe.prototype,"tabIdx",void 0);vi([d()],pe.prototype,"connectors",void 0);pe=vi([u("w3m-connector-list")],pe);var Vo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},yi=class extends p{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${m(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${m(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Vo([c()],yi.prototype,"tabIdx",void 0);yi=Vo([u("w3m-wallet-login-list")],yi);var Ho=f`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var rt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Pr=470,X=class extends p{constructor(){super(),this.unsubscribe=[],this.connectors=b.state.connectors,this.authConnector=this.connectors.find(t=>t.type==="AUTH"),this.features=E.state.features,this.enableWallets=E.state.enableWallets,this.noAdapters=h.state.noAdapters,this.walletGuide="get-started",this.checked=!1,this.isEmailEnabled=this.features?.email&&!h.state.noAdapters,this.isSocialEnabled=this.features?.socials&&this.features.socials.length>0&&!h.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(b.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(i=>i.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),E.subscribeKey("features",t=>this.setEmailAndSocialEnableCheck(t,this.noAdapters)),E.subscribeKey("enableWallets",t=>this.enableWallets=t),h.subscribeKey("noAdapters",t=>this.setEmailAndSocialEnableCheck(this.features,t)))}disconnectedCallback(){this.unsubscribe.forEach(i=>i()),this.resizeObserver?.disconnect(),this.shadowRoot?.querySelector(".connect")?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){let t=this.shadowRoot?.querySelector(".connect");t&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),t?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(t),this.handleConnectListScroll())}render(){let{termsConditionsUrl:t,privacyPolicyUrl:i}=E.state,o=E.state.features?.legalCheckbox,n=!!(t||i)&&!!o&&this.walletGuide==="get-started"&&!this.checked,a={connect:!0,disabled:n},O=E.state.enableWalletGuide,q=this.enableWallets,z=this.isSocialEnabled||this.authConnector,Wt=n?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${ii(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${z&&q&&O&&this.walletGuide==="get-started"?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(Wt)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(n)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(t,i){this.isEmailEnabled=t?.email&&!i,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!i,this.features=t,this.noAdapters=i}checkIfAuthEnabled(t){let i=t.filter(r=>r.type===Wi.CONNECTOR_TYPE_AUTH).map(r=>r.chain);return S.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(r=>i.includes(r))}renderConnectMethod(t){let i=tt.getConnectOrderMethod(this.features,this.connectors);return l`${i.map((o,r)=>{switch(o){case"email":return l`${this.emailTemplate(t)} ${this.separatorTemplate(r,"email")}`;case"social":return l`${this.socialListTemplate(t)}
          ${this.separatorTemplate(r,"social")}`;case"wallet":return l`${this.walletListTemplate(t)}
          ${this.separatorTemplate(r,"wallet")}`;default:return null}})}`}checkMethodEnabled(t){switch(t){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(t){let o=tt.getConnectOrderMethod(this.features,this.connectors)[t+1];return o?this.checkMethodEnabled(o)?o:this.checkIsThereNextMethod(t+1):void 0}separatorTemplate(t,i){let o=this.checkIsThereNextMethod(t),r=this.walletGuide==="explore";switch(i){case"wallet":return this.enableWallets&&o&&!r?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{let e=o==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!e&&o?l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{let e=o==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!e&&o?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(t){return!this.isEmailEnabled||!this.isAuthEnabled?null:l`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${m(t)}
    ></w3m-email-login-widget>`}socialListTemplate(t){return!this.isSocialEnabled||!this.isAuthEnabled?null:l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${m(t)}
    ></w3m-social-login-widget>`}walletListTemplate(t){let i=this.enableWallets,o=this.features?.emailShowWallets===!1,r=this.features?.collapseWallets,e=o||r;return!i||((w.isTelegram()||w.isSafari())&&w.isIos()&&y.connectWalletConnect().catch(a=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&e?l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${m(t)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${m(t)}></w3m-wallet-login-list>`}guideTemplate(t=!1){if(!E.state.enableWalletGuide)return null;let o={guide:!0,disabled:t},r=t?-1:void 0;return!this.authConnector&&!this.isSocialEnabled?null:l`
      ${this.walletGuide==="explore"&&!h.state.noAdapters?l`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`:null}
      <wui-flex flexDirection="column" .padding=${["l","0","0","0"]} class=${ii(o)}>
        <w3m-wallet-guide
          tabIdx=${m(r)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox
      @checkboxChange=${this.onCheckboxChange.bind(this)}
      data-testid="w3m-legal-checkbox"
    ></w3m-legal-checkbox>`}handleConnectListScroll(){let t=this.shadowRoot?.querySelector(".connect");if(!t)return;t.scrollHeight>Pr?(t.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--connect-scroll--top-opacity",ei.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",ei.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){g.push("ConnectWallets")}onCheckboxChange(t){this.checked=!!t.detail}};X.styles=Ho;rt([d()],X.prototype,"connectors",void 0);rt([d()],X.prototype,"authConnector",void 0);rt([d()],X.prototype,"features",void 0);rt([d()],X.prototype,"enableWallets",void 0);rt([d()],X.prototype,"noAdapters",void 0);rt([c()],X.prototype,"walletGuide",void 0);rt([d()],X.prototype,"checked",void 0);rt([d()],X.prototype,"isEmailEnabled",void 0);rt([d()],X.prototype,"isSocialEnabled",void 0);rt([d()],X.prototype,"isAuthEnabled",void 0);X=rt([u("w3m-connect-view")],X);var Ko=f`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ze=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},qt=class extends p{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};qt.styles=[v,k,Ko];ze([c({type:Boolean})],qt.prototype,"disabled",void 0);ze([c()],qt.prototype,"label",void 0);ze([c()],qt.prototype,"buttonLabel",void 0);qt=ze([u("wui-cta-button")],qt);var Fo=f`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var qo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Me=class extends p{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:t,app_store:i,play_store:o,chrome_store:r,homepage:e}=this.wallet,n=w.isMobile(),a=w.isIos(),O=w.isAndroid(),q=[i,o,e,r].filter(Boolean).length>1,z=R.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return q&&!n?l`
        <wui-cta-button
          label=${`Don't have ${z}?`}
          buttonLabel="Get"
          @click=${()=>g.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!q&&e?l`
        <wui-cta-button
          label=${`Don't have ${z}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?l`
        <wui-cta-button
          label=${`Don't have ${z}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&O?l`
        <wui-cta-button
          label=${`Don't have ${z}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&w.openHref(this.wallet.homepage,"_blank")}};Me.styles=[Fo];qo([c({type:Object})],Me.prototype,"wallet",void 0);Me=qo([u("w3m-mobile-download-links")],Me);var Go=f`
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
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ut=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},W=class extends p{constructor(){super(),this.wallet=g.state.data?.wallet,this.connector=g.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=C.getWalletImage(this.wallet)??C.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=y.state.wcUri,this.error=y.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(y.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),y.subscribeKey("wcError",t=>this.error=t),y.subscribeKey("buffering",t=>this.buffering=t)),(w.isTelegram()||w.isSafari())&&w.isIos()&&y.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,i=`Continue in ${this.name}`;return this.buffering&&(i="Connecting..."),this.error&&(i="Connection declined"),l`
      <wui-flex
        data-error=${m(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${m(this.imageSrc)}></wui-wallet-image>

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
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(y.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let t=Yt.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(w.copyToClopboard(this.uri),T.showSuccess("Link copied"))}catch{T.showError("Failed to copy")}}};W.styles=Go;ut([d()],W.prototype,"isRetrying",void 0);ut([d()],W.prototype,"uri",void 0);ut([d()],W.prototype,"error",void 0);ut([d()],W.prototype,"ready",void 0);ut([d()],W.prototype,"showRetry",void 0);ut([d()],W.prototype,"secondaryBtnLabel",void 0);ut([d()],W.prototype,"secondaryLabel",void 0);ut([d()],W.prototype,"buffering",void 0);ut([c({type:Boolean})],W.prototype,"isMobile",void 0);ut([c()],W.prototype,"onRetry",void 0);var Lr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Xo=class extends W{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");$.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(h.subscribeKey("activeCaipAddress",t=>{t&&I.close()}))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(t=>t())}onConnectProxy(){return A(this,null,function*(){try{this.error=!1,this.connector&&(this.connector.id!==S.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(yield y.connectExternal(this.connector,this.connector.chain),$.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(t){$.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}})}};Xo=Lr([u("w3m-connecting-external-view")],Xo);var Yo=f`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Qo=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ve=class extends p{constructor(){super(),this.unsubscribe=[],this.activeConnector=b.state.activeConnector,this.unsubscribe.push(b.subscribeKey("activeConnector",t=>this.activeConnector=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${m(C.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(t=>t.name?l`
            <wui-list-wallet
              imageSrc=${m(C.getChainImage(t.chain))}
              name=${S.CHAIN_NAME_MAP[t.chain]}
              @click=${()=>this.onConnector(t)}
              data-testid="wui-list-chain-${t.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(t){let i=this.activeConnector?.connectors?.find(o=>o.chain===t.chain);if(!i){T.showError("Failed to find connector");return}i.id==="walletConnect"?w.isMobile()?g.push("AllWallets"):g.push("ConnectingWalletConnect"):g.push("ConnectingExternal",{connector:i})}};Ve.styles=Yo;Qo([d()],Ve.prototype,"activeConnector",void 0);Ve=Qo([u("w3m-connecting-multi-chain-view")],Ve);var He=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},de=class extends p{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(y.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){let i=this.platformTabs[t];i&&this.onSelectPlatfrom?.(i)}};He([c({type:Array})],de.prototype,"platforms",void 0);He([c()],de.prototype,"onSelectPlatfrom",void 0);He([d()],de.prototype,"buffering",void 0);de=He([u("w3m-connecting-header")],de);var Br=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Zo=class extends W{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),$.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}onConnectProxy(){return A(this,null,function*(){try{this.error=!1;let{connectors:t}=b.state,i=t.find(o=>o.type==="ANNOUNCED"&&o.info?.rdns===this.wallet?.rdns||o.type==="INJECTED"||o.name===this.wallet?.name);if(i)yield y.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");I.close(),$.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(t){$.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}})}};Zo=Br([u("w3m-connecting-wc-browser")],Zo);var zr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Jo=class extends W{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),$.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:t,name:i}=this.wallet,{redirect:o,href:r}=w.formatNativeUrl(t,this.uri);y.setWcLinking({name:i,href:r}),y.setRecentWallet(this.wallet),w.openHref(o,"_blank")}catch{this.error=!0}}};Jo=zr([u("w3m-connecting-wc-desktop")],Jo);var Mr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},tr=class extends W{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())},this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:t,name:i}=this.wallet,{redirect:o,href:r}=w.formatNativeUrl(t,this.uri);y.setWcLinking({name:i,href:r}),y.setRecentWallet(this.wallet);let e=w.isIframe()?"_top":"_self";w.openHref(o,e),clearTimeout(this.labelTimeout),this.secondaryLabel=N.CONNECT_LABELS.MOBILE}catch(t){$.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=N.CONNECT_LABELS.MOBILE,document.addEventListener("visibilitychange",this.onBuffering.bind(this)),$.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=N.CONNECT_LABELS.MOBILE},N.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},N.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onBuffering(){let t=w.isIos();document?.visibilityState==="visible"&&!this.error&&t&&(y.setBuffering(!0),setTimeout(()=>{y.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(y.setWcError(!1),this.onConnect())}};tr=Mr([u("w3m-connecting-wc-mobile")],tr);var er=f`
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
`;var Vr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ci=class extends W{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),$.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
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
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let t=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return y.setWcLinking(void 0),y.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${t}
      theme=${Yt.state.themeMode}
      uri=${this.uri}
      imageSrc=${m(C.getWalletImage(this.wallet))}
      color=${m(Yt.state.themeVariables["--w3m-qr-color"])}
      alt=${m(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let t=!this.uri||!this.ready;return l`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Ci.styles=er;Ci=Vr([u("w3m-connecting-wc-qrcode")],Ci);var Hr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ir=class extends p{constructor(){if(super(),this.wallet=g.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");$.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${m(C.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ir=Hr([u("w3m-connecting-wc-unsupported")],ir);var Kr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},or=class extends W{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",$.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:t,name:i}=this.wallet,{redirect:o,href:r}=w.formatUniversalUrl(t,this.uri);y.setWcLinking({name:i,href:r}),y.setRecentWallet(this.wallet),w.openHref(o,"_blank")}catch{this.error=!0}}};or=Kr([u("w3m-connecting-wc-web")],or);var Ke=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},me=class extends p{constructor(){super(),this.wallet=g.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!E.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}initializeConnection(t=!1){return A(this,null,function*(){if(!(this.platform==="browser"||E.state.manualWCControl&&!t))try{let{wcPairingExpiry:i,status:o}=y.state;(t||w.isPairingExpired(i)||o==="connecting")&&(yield y.connectWalletConnect(),this.isSiwxEnabled||I.close())}catch(i){$.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:i?.message??"Unknown"}}),y.setWcError(!0),T.showError(i.message??"Connection error"),y.resetWcConnection(),g.goBack()}})}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:t,desktop_link:i,webapp_link:o,injected:r,rdns:e}=this.wallet,n=r?.map(({injected_id:Tr})=>Tr).filter(Boolean),a=[...e?[e]:n??[]],O=E.state.isUniversalProvider?!1:a.length,q=t,z=o,Wt=y.checkInstalled(a),M=O&&Wt,Rr=i&&!w.isMobile();M&&!h.state.noAdapters&&this.platforms.push("browser"),q&&this.platforms.push(w.isMobile()?"mobile":"qrcode"),z&&this.platforms.push("web"),Rr&&this.platforms.push("desktop"),!M&&O&&!h.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}onSelectPlatform(t){return A(this,null,function*(){let i=this.shadowRoot?.querySelector("div");i&&(yield i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))})}};Ke([d()],me.prototype,"platform",void 0);Ke([d()],me.prototype,"platforms",void 0);Ke([d()],me.prototype,"isSiwxEnabled",void 0);me=Ke([u("w3m-connecting-wc-view")],me);var rr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},$i=class extends p{constructor(){super(...arguments),this.isMobile=w.isMobile()}render(){if(this.isMobile){let{featured:t,recommended:i}=_.state,{customWallets:o}=E.state,r=P.getRecentWallets(),e=t.length||i.length||o?.length||r.length;return l`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${e?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};rr([d()],$i.prototype,"isMobile",void 0);$i=rr([u("w3m-connecting-wc-basic-view")],$i);var nr=f`
  .continue-button-container {
    width: 100%;
  }
`;var sr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Fe=class extends p{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{w.openHref(Ti.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){g.push("RegisterAccountName"),$.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:x.state.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Fe.styles=nr;sr([d()],Fe.prototype,"loading",void 0);Fe=sr([u("w3m-choose-account-name-view")],Fe);var Fr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ar=class extends p{constructor(){super(...arguments),this.wallet=g.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&w.openHref(this.wallet.homepage,"_blank")}};ar=Fr([u("w3m-downloads-view")],ar);var qr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Gr="https://walletconnect.com/explorer",lr=class extends p{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:t,featured:i}=_.state,{customWallets:o}=E.state;return[...i,...o??[],...t].slice(0,4).map(e=>l`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${m(C.getWalletImage(e))}
          @click=${()=>{w.openHref(e.homepage??Gr,"_blank")}}
        ></wui-list-wallet>
      `)}};lr=qr([u("w3m-get-wallet-view")],lr);var cr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ei=class extends p{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(i=>l`<wui-visual name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};cr([c({type:Array})],Ei.prototype,"data",void 0);Ei=cr([u("w3m-help-widget")],Ei);var Xr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Yr=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],ur=class extends p{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Yr}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){$.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),g.push("GetWallet")}};ur=Xr([u("w3m-what-is-a-wallet-view")],ur);var pr=f`
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
`;var dr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},qe=class extends p{constructor(){super(...arguments),this.checked=!1}render(){let{termsConditionsUrl:t,privacyPolicyUrl:i}=E.state,o=E.state.features?.legalCheckbox,e=!!(t||i)&&!!o,n=e&&!this.checked,a=n?-1:void 0;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${e?["0","s","s","s"]:"s"}
        gap="xs"
        class=${m(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${m(a)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(t){this.checked=!!t.detail}};qe.styles=pr;dr([d()],qe.prototype,"checked",void 0);qe=dr([u("w3m-connect-wallets-view")],qe);var mr=f`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Qr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Si=class extends p{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Si.styles=[v,mr];Si=Qr([u("wui-loading-hexagon")],Si);var hr=Ot`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var fr=Ot`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;var wr=f`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Rt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},ht=class extends p{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:fr,md:ke,lg:hr},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,l`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ht.styles=[v,wr];Rt([c()],ht.prototype,"size",void 0);Rt([c()],ht.prototype,"name",void 0);Rt([c({type:Object})],ht.prototype,"networkImagesBySize",void 0);Rt([c()],ht.prototype,"imageSrc",void 0);Rt([c({type:Boolean})],ht.prototype,"selected",void 0);Rt([c({type:Boolean})],ht.prototype,"round",void 0);ht=Rt([u("wui-network-image")],ht);var gr=f`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ki=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},he=class extends p{constructor(){super(),this.network=g.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();let t=this.getLabel(),i=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${m(C.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let t=h.state.activeChain,i=b.getConnectorId(t);return b.getAuthConnector()&&i===S.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let t=h.state.activeChain,i=b.getConnectorId(t);return b.getAuthConnector()&&i===S.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onSwitchNetwork(){return A(this,null,function*(){try{this.error=!1,this.network&&(yield h.switchActiveNetwork(this.network))}catch{this.error=!0}})}};he.styles=gr;ki([d()],he.prototype,"showRetry",void 0);ki([d()],he.prototype,"error",void 0);he=ki([u("w3m-network-switch-view")],he);var br=f`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Gt=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},yt=class extends p{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return l`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?l`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?l`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:l`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};yt.styles=[v,k,br];Gt([c()],yt.prototype,"imageSrc",void 0);Gt([c()],yt.prototype,"name",void 0);Gt([c({type:Boolean})],yt.prototype,"disabled",void 0);Gt([c({type:Boolean})],yt.prototype,"selected",void 0);Gt([c({type:Boolean})],yt.prototype,"transparent",void 0);yt=Gt([u("wui-list-network")],yt);var xr=f`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var fe=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Tt=class extends p{constructor(){super(),this.unsubscribe=[],this.network=h.state.activeCaipNetwork,this.requestedCaipNetworks=h.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=w.debounce(t=>{this.search=t},100),this.unsubscribe.push(L.subscribeNetworkImages(()=>this.requestUpdate()),h.subscribeKey("activeCaipNetwork",t=>this.network=t),h.subscribeKey("chains",()=>this.requestedCaipNetworks=h.getAllRequestedCaipNetworks()))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onNetworkHelp(){$.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),g.push("WhatIsANetwork")}networksTemplate(){let t=h.getAllRequestedCaipNetworks(),i=h.getAllApprovedCaipNetworkIds(),o=w.sortRequestedNetworks(i,t);return this.search?this.filteredNetworks=o?.filter(r=>r?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=o,this.filteredNetworks?.map(r=>l`
        <wui-list-network
          .selected=${this.network?.id===r.id}
          imageSrc=${m(C.getNetworkImage(r))}
          type="network"
          name=${r.name??r.id}
          @click=${()=>this.onSwitchNetwork(r)}
          .disabled=${this.getNetworkDisabled(r)}
          data-testid=${`w3m-network-switch-${r.name??r.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(t){let i=t.chainNamespace,o=x.getCaipAddress(i),r=h.getAllApprovedCaipNetworkIds(),e=h.getNetworkProp("supportsAllNetworks",i)!==!1,n=b.getConnectorId(i),a=b.getAuthConnector(),O=n===S.CONNECTOR_ID.AUTH&&a;return!o||e||O?!1:!r?.includes(t.caipNetworkId)}onSwitchNetwork(t){let i=g.state.data;if(t.id===this.network?.id)return;let r=t.chainNamespace!==h.state.activeChain,e=x.state.caipAddress,n=x.getCaipAddress(t.chainNamespace),O=b.getConnectorId(h.state.activeChain)===S.CONNECTOR_ID.AUTH,q=S.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(z=>z===t.chainNamespace);e?O&&q?g.push("SwitchNetwork",$t(Ct({},i),{network:t})):O&&!q||r&&!n?g.push("SwitchActiveChain",{switchToChain:t.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:t}):g.push("SwitchNetwork",$t(Ct({},i),{network:t})):g.push("SwitchNetwork",$t(Ct({},i),{network:t}))}};Tt.styles=xr;fe([d()],Tt.prototype,"network",void 0);fe([d()],Tt.prototype,"requestedCaipNetworks",void 0);fe([d()],Tt.prototype,"filteredNetworks",void 0);fe([d()],Tt.prototype,"search",void 0);Tt=fe([u("w3m-networks-view")],Tt);var vr=f`
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

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var yr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ge=class extends p{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=g.state.data?.switchToChain,this.navigateTo=g.state.data?.navigateTo,this.navigateWithReplace=g.state.data?.navigateWithReplace,this.caipNetwork=g.state.data?.network,this.activeChain=h.state.activeChain}firstUpdated(){this.unsubscribe.push(h.subscribeKey("activeChain",t=>this.activeChain=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.switchToChain?S.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;let i=this.switchToChain==="eip155"?"Ethereum":this.switchToChain;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual
            name=${this.switchToChain==="eip155"?"eth":this.switchToChain}
          ></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${i}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${i}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${t} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}switchActiveChain(){return A(this,null,function*(){this.switchToChain&&(h.setIsSwitchingNamespace(!0),b.setFilterByNamespace(this.switchToChain),this.caipNetwork?yield h.switchActiveNetwork(this.caipNetwork):h.setActiveNamespace(this.switchToChain),g.reset("Connect"))})}};Ge.styles=vr;yr([c()],Ge.prototype,"activeChain",void 0);Ge=yr([u("w3m-switch-active-chain-view")],Ge);var Zr=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Jr=[{images:["network","layers","system"],title:"The system\u2019s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],Cr=class extends p{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Jr}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Cr=Zr([u("w3m-what-is-a-network-view")],Cr);var $r=f`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Er=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Xe=class extends p{constructor(){super(),this.swapUnsupportedChain=g.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(L.subscribeNetworkImages(()=>this.requestUpdate()))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let t=h.getAllRequestedCaipNetworks(),i=h.getAllApprovedCaipNetworkIds(),o=w.sortRequestedNetworks(i,t);return(this.swapUnsupportedChain?o.filter(e=>N.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):o).map(e=>l`
        <wui-list-network
          imageSrc=${m(C.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}onDisconnect(){return A(this,null,function*(){try{this.disconecting=!0,yield y.disconnect(),$.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),I.close()}catch{$.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),T.showError("Failed to disconnect")}finally{this.disconecting=!1}})}onSwitchNetwork(t){return A(this,null,function*(){let i=x.state.caipAddress,o=h.getAllApprovedCaipNetworkIds(),r=h.getNetworkProp("supportsAllNetworks",t.chainNamespace),e=g.state.data;i?o?.includes(t.caipNetworkId)?yield h.switchActiveNetwork(t):r?g.push("SwitchNetwork",$t(Ct({},e),{network:t})):g.push("SwitchNetwork",$t(Ct({},e),{network:t})):i||(h.setActiveCaipNetwork(t),g.push("Connect"))})}};Xe.styles=$r;Er([d()],Xe.prototype,"disconecting",void 0);Xe=Er([u("w3m-unsupported-chain-view")],Xe);var Sr=f`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Ai=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},we=class extends p{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return l`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};we.styles=[v,k,Sr];Ai([c()],we.prototype,"icon",void 0);Ai([c()],we.prototype,"text",void 0);we=Ai([u("wui-banner")],we);var kr=f`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Ar=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ye=class extends p{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=x.state.preferredAccountType,this.unsubscribe.push(x.subscribeKey("preferredAccountType",t=>{this.preferredAccountType=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let t=h.getAllRequestedCaipNetworks(),i=h.getAllApprovedCaipNetworkIds(),o=h.state.activeCaipNetwork,r=h.checkIfSmartAccountEnabled(),e=w.sortRequestedNetworks(i,t);if(r&&this.preferredAccountType===j.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;e=[o]}return e.map(n=>l`
        <wui-list-network
          imageSrc=${m(C.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Ye.styles=kr;Ar([d()],Ye.prototype,"preferredAccountType",void 0);Ye=Ar([u("w3m-wallet-compatible-networks-view")],Ye);var _r=f`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Qe=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Xt=class extends p{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Xt.styles=[v,_r];Qe([c()],Xt.prototype,"imageSrc",void 0);Qe([c()],Xt.prototype,"alt",void 0);Qe([c({type:Boolean})],Xt.prototype,"borderRadiusFull",void 0);Xt=Qe([u("wui-visual-thumbnail")],Xt);var Ir=f`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var tn=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},_i=class extends p{constructor(){super(...arguments),this.dappImageUrl=E.state.metadata?.icons,this.walletImageUrl=x.state.connectedWalletInfo?.icon}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,i){t.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};_i.styles=Ir;_i=tn([u("w3m-siwx-sign-message-thumbnails")],_i);var Ii=function(s,t,i,o){var r=arguments.length,e=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(e=(r<3?n(e):r>3?n(t,i,e):n(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e},Ze=class extends p{constructor(){super(...arguments),this.dappName=E.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onSign(){return A(this,null,function*(){this.isSigning=!0,yield Je.requestSignMessage().finally(()=>this.isSigning=!1)})}onCancel(){return A(this,null,function*(){this.isCancelling=!0,yield Je.cancelSignMessage().finally(()=>this.isCancelling=!1)})}};Ii([d()],Ze.prototype,"isCancelling",void 0);Ii([d()],Ze.prototype,"isSigning",void 0);Ze=Ii([u("w3m-siwx-sign-message-view")],Ze);export{Pi as AppKitAccountButton,zi as AppKitButton,Hi as AppKitConnectButton,Gi as AppKitNetworkButton,Ui as W3mAccountButton,ot as W3mAccountSettingsView,ci as W3mAccountView,Ie as W3mAllWalletsView,Bi as W3mButton,Fe as W3mChooseAccountNameView,Vi as W3mConnectButton,X as W3mConnectView,qe as W3mConnectWalletsView,Xo as W3mConnectingExternalView,Ve as W3mConnectingMultiChainView,$i as W3mConnectingWcBasicView,me as W3mConnectingWcView,ar as W3mDownloadsView,lr as W3mGetWalletView,qi as W3mNetworkButton,he as W3mNetworkSwitchView,Tt as W3mNetworksView,xt as W3mProfileView,en as W3mRouter,Ze as W3mSIWXSignMessageView,Ge as W3mSwitchActiveChainView,ee as W3mSwitchAddressView,Xe as W3mUnsupportedChainView,Ye as W3mWalletCompatibleNetworksView,Cr as W3mWhatIsANetworkView,ur as W3mWhatIsAWalletView};
