import"./chunk-QIKSDE4J.js";import"./chunk-NGATEFI2.js";import"./chunk-BNX2NHWG.js";import"./chunk-CXLJC5ZB.js";import"./chunk-6SNP2N7S.js";import"./chunk-G3EQR5YF.js";import"./chunk-QJMZMSVK.js";import"./chunk-3TBIBBG6.js";import"./chunk-HZ6PZNFK.js";import"./chunk-ETFSQUAY.js";import"./chunk-G7TNHKYZ.js";import"./chunk-VYWHQZE2.js";import"./chunk-6IEGP7QZ.js";import{a as p,b as u,f as h}from"./chunk-DBQTNMCX.js";import"./chunk-DGDWXWRD.js";import{e as F}from"./chunk-GD7TJA3Q.js";import{$ as c,G as T,H as A,I as X,L as Y,M as W,O as B,P as J,V as P,W as K,Y as R,Z,_ as v,ca as ee,e as V,g as U,h as b,i as Q,sa as te,ta as d}from"./chunk-3VEWMGKM.js";import"./chunk-77POFJ7J.js";import{b as f,e as l,j as m}from"./chunk-IYZIRKFV.js";import"./chunk-WXCPMYFQ.js";import"./chunk-6F6K4OU5.js";import{a as E,b as G,k as w}from"./chunk-HIVZEDT5.js";var re=f`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var y=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},g=class extends m{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return l`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}fetchTokenImage(){return w(this,null,function*(){yield Z._fetchTokenImage(this.purchaseCurrency)})}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){let e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return l`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return l`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};g.styles=[re];y([p({type:Boolean})],g.prototype,"disabled",void 0);y([p()],g.prototype,"color",void 0);y([p()],g.prototype,"label",void 0);y([p()],g.prototype,"purchaseValue",void 0);y([p()],g.prototype,"purchaseCurrency",void 0);y([p()],g.prototype,"date",void 0);y([p({type:Boolean})],g.prototype,"completed",void 0);y([p({type:Boolean})],g.prototype,"inProgress",void 0);y([p({type:Boolean})],g.prototype,"failed",void 0);y([p()],g.prototype,"onClick",void 0);y([p()],g.prototype,"symbol",void 0);y([p()],g.prototype,"icon",void 0);g=y([d("w3m-onramp-activity-item")],g);var ie=f`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var L=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},de=7,S=class extends m{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=c.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=B.state.coinbaseTransactions,this.tokenImages=b.state.tokenImages,this.unsubscribe.push(c.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),b.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},B.subscribe(e=>{this.coinbaseTransactions=E({},e.coinbaseTransactions)})),B.clearCursor(),this.fetchTransactions()}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(r=>{let i=ee.formatDate(r?.metadata?.minedAt),o=r.transfers[0],t=o?.fungible_info;if(!t)return null;let s=t?.icon?.url||this.tokenImages?.[t.symbol||""];return l`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${r.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${r.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${h(t.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${i}
          icon=${h(s)}
          symbol=${h(t.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(r=>{let i=parseInt(r,10);return new Array(12).fill(null).map((t,s)=>s).reverse().map(t=>{let s=te.getTransactionGroupTitle(i,t),a=this.coinbaseTransactions[i]?.[t];return a?l`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}fetchTransactions(){return w(this,null,function*(){"coinbase"==="coinbase"&&(yield this.fetchCoinbaseTransactions())})}fetchCoinbaseTransactions(){return w(this,null,function*(){let e=R.state.address,r=T.state.projectId;if(!e)throw new Error("No address found");if(!r)throw new Error("No projectId found");this.loading=!0,yield B.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()})}refetchLoadingTransactions(){let e=new Date;if((this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter(o=>o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(()=>w(this,null,function*(){let o=R.state.address;yield B.fetchTransactions(o,"coinbase"),this.refetchLoadingTransactions()}),3e3)}templateLoading(){return Array(de).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};S.styles=ie;L([u()],S.prototype,"selectedOnRampProvider",void 0);L([u()],S.prototype,"loading",void 0);L([u()],S.prototype,"coinbaseTransactions",void 0);L([u()],S.prototype,"tokenImages",void 0);S=L([d("w3m-onramp-activity-view")],S);var oe=f`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var z=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},j=class extends m{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=c.state.paymentCurrency,this.currencies=c.state.paymentCurrencies,this.currencyImages=b.state.currencyImages,this.checked=!1,this.unsubscribe.push(c.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),b.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:r}=T.state,i=T.state.features?.legalCheckbox,s=!!(e||r)&&!!i&&!this.checked;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${h(s?"disabled":void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(r=>l`
        <wui-list-item
          imageSrc=${h(this.currencyImages?.[r.id])}
          @click=${()=>this.selectCurrency(r)}
          variant="image"
          tabIdx=${h(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${r.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(c.setPaymentCurrency(e),v.close())}onCheckboxChange(e){this.checked=!!e.detail}};j.styles=oe;z([u()],j.prototype,"selectedCurrency",void 0);z([u()],j.prototype,"currencies",void 0);z([u()],j.prototype,"currencyImages",void 0);z([u()],j.prototype,"checked",void 0);j=z([d("w3m-onramp-fiat-select-view")],j);var se=f`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var _=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},I=class extends m{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return l`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${h(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?l`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:l`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let r=P.getAllRequestedCaipNetworks()?.filter(i=>i?.assets?.imageId)?.slice(0,5);return l`
      <wui-flex class="networks">
        ${r?.map(i=>l`
            <wui-flex class="network-icon">
              <wui-image src=${h(Q.getNetworkImage(i))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};I.styles=[se];_([p({type:Boolean})],I.prototype,"disabled",void 0);_([p()],I.prototype,"color",void 0);_([p()],I.prototype,"name",void 0);_([p()],I.prototype,"label",void 0);_([p()],I.prototype,"feeRange",void 0);_([p({type:Boolean})],I.prototype,"loading",void 0);_([p()],I.prototype,"onClick",void 0);I=_([d("w3m-onramp-provider-item")],I);var ne=f`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var he=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},q=class extends m{render(){let{termsConditionsUrl:e,privacyPolicyUrl:r}=T.state;return!e&&!r?null:l`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return l` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){Y.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:R.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),A.push("WhatIsABuy")}};q.styles=[ne];q=he([d("w3m-onramp-providers-footer")],q);var ae=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},H=class extends m{constructor(){super(),this.unsubscribe=[],this.providers=c.state.providers,this.unsubscribe.push(c.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){let e=this.providers.map(r=>w(this,null,function*(){return r.name==="coinbase"?yield this.getCoinbaseOnRampURL():Promise.resolve(r?.url)}));Promise.all(e).then(r=>{this.providers=this.providers.map((i,o)=>G(E({},i),{url:r[o]||""}))})}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(P.state.activeChain??"eip155")).map(e=>l`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){c.setSelectedProvider(e),A.push("BuyInProgress"),U.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),Y.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:R.state.preferredAccountType===F.ACCOUNT_TYPES.SMART_ACCOUNT}})}getCoinbaseOnRampURL(){return w(this,null,function*(){let e=R.state.address,r=P.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!r?.name)throw new Error("No network found");let i=V.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[r.name]??V.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=c.state.purchaseCurrency,t=o?[o.symbol]:c.state.purchaseCurrencies.map(s=>s.symbol);return yield K.generateOnRampURL({defaultNetwork:i,destinationWallets:[{address:e,blockchains:V.WC_COINBASE_PAY_SDK_CHAINS,assets:t}],partnerUserId:e,purchaseAmount:c.state.purchaseAmount})})}};ae([u()],H.prototype,"providers",void 0);H=ae([d("w3m-onramp-providers-view")],H);var le=f`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var M=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},D=class extends m{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=c.state.purchaseCurrencies,this.tokens=c.state.purchaseCurrencies,this.tokenImages=b.state.tokenImages,this.checked=!1,this.unsubscribe.push(c.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),b.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:r}=T.state,i=T.state.features?.legalCheckbox,s=!!(e||r)&&!!i&&!this.checked;return l`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${h(s?"disabled":void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(r=>l`
        <wui-list-item
          imageSrc=${h(this.tokenImages?.[r.symbol])}
          @click=${()=>this.selectToken(r)}
          variant="image"
          tabIdx=${h(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${r.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${r.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(c.setPurchaseCurrency(e),v.close())}onCheckboxChange(e){this.checked=!!e.detail}};D.styles=le;M([u()],D.prototype,"selectedCurrency",void 0);M([u()],D.prototype,"tokens",void 0);M([u()],D.prototype,"tokenImages",void 0);M([u()],D.prototype,"checked",void 0);D=M([d("w3m-onramp-token-select-view")],D);var ce=f`
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
`;var C=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},x=class extends m{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=c.state.selectedProvider,this.uri=J.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(c.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let r=this.error?"Buy can be declined from your side or due to and error on the provider app":"We\u2019ll notify you once your Buy is processed";return l`
      <wui-flex
        data-error=${h(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${h(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break;default:break}}initializeCoinbaseTransactions(){return w(this,null,function*(){yield this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)})}watchCoinbaseTransactions(){return w(this,null,function*(){try{let e=R.state.address;if(!e)throw new Error("No address found");(yield K.fetchTransactions({account:e,onramp:"coinbase"})).data.filter(o=>new Date(o.metadata.minedAt)>new Date(this.startTime)||o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),A.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){W.showError(e)}})}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,U.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?l`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=X.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){W.showError("No link found"),A.goBack();return}try{U.copyToClopboard(this.selectedOnRampProvider.url),W.showSuccess("Link copied")}catch{W.showError("Failed to copy")}}};x.styles=ce;C([u()],x.prototype,"intervalId",void 0);C([u()],x.prototype,"selectedOnRampProvider",void 0);C([u()],x.prototype,"uri",void 0);C([u()],x.prototype,"ready",void 0);C([u()],x.prototype,"showRetry",void 0);C([u()],x.prototype,"buffering",void 0);C([u()],x.prototype,"error",void 0);C([u()],x.prototype,"startTime",void 0);C([p({type:Boolean})],x.prototype,"isMobile",void 0);C([p()],x.prototype,"onRetry",void 0);x=C([d("w3m-buy-in-progress-view")],x);var fe=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},ue=class extends m{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${A.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};ue=fe([d("w3m-what-is-a-buy-view")],ue);var pe=f`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var N=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},k=class extends m{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=b.state.currencyImages,this.tokenImages=b.state.tokenImages,this.unsubscribe.push(c.subscribeKey("purchaseCurrency",e=>{!e||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(e))}),c.subscribeKey("paymentCurrency",e=>{!e||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(e))}),c.subscribe(e=>{this.type==="Fiat"?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),b.subscribe(e=>{this.currencyImages=E({},e.currencyImages),this.tokenImages=E({},e.tokenImages)}))}firstUpdated(){c.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",r=this.currencyImages[e]||this.tokenImages[e];return l`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?l` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>v.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${h(r)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:l`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};k.styles=pe;N([p({type:String})],k.prototype,"type",void 0);N([p({type:Number})],k.prototype,"value",void 0);N([u()],k.prototype,"currencies",void 0);N([u()],k.prototype,"selectedCurrency",void 0);N([u()],k.prototype,"currencyImages",void 0);N([u()],k.prototype,"tokenImages",void 0);k=N([d("w3m-onramp-input")],k);var me=f`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var $=function(n,e,r,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(s=n[a])&&(t=(o<3?s(t):o>3?s(e,r,t):s(e,r))||t);return o>3&&t&&Object.defineProperty(e,r,t),t},we={USD:"$",EUR:"\u20AC",GBP:"\xA3"},ge=[100,250,500,1e3],O=class extends m{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=P.state.activeCaipAddress,this.loading=v.state.loading,this.paymentCurrency=c.state.paymentCurrency,this.paymentAmount=c.state.paymentAmount,this.purchaseAmount=c.state.purchaseAmount,this.quoteLoading=c.state.quotesLoading,this.unsubscribe.push(P.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),v.subscribeKey("loading",e=>{this.loading=e}),c.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${ge.map(e=>l`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${we[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?l`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:l`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||v.open({view:"OnRampProviders"})}openModal(){v.open({view:"Connect"})}onPaymentAmountChange(e){return w(this,null,function*(){c.setPaymentAmount(Number(e.detail)),yield c.getQuote()})}selectPresetAmount(e){return w(this,null,function*(){c.setPaymentAmount(e),yield c.getQuote()})}};O.styles=me;$([p({type:Boolean})],O.prototype,"disabled",void 0);$([u()],O.prototype,"caipAddress",void 0);$([u()],O.prototype,"loading",void 0);$([u()],O.prototype,"paymentCurrency",void 0);$([u()],O.prototype,"paymentAmount",void 0);$([u()],O.prototype,"purchaseAmount",void 0);$([u()],O.prototype,"quoteLoading",void 0);O=$([d("w3m-onramp-widget")],O);export{x as W3mBuyInProgressView,S as W3mOnRampActivityView,H as W3mOnRampProvidersView,j as W3mOnrampFiatSelectView,D as W3mOnrampTokensView,O as W3mOnrampWidget,ue as W3mWhatIsABuyView};
