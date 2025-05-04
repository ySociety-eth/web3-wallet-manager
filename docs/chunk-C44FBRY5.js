import"./chunk-TVBHZNTE.js";import"./chunk-6SNP2N7S.js";import"./chunk-63FFEMZH.js";import"./chunk-G3EQR5YF.js";import"./chunk-QJMZMSVK.js";import"./chunk-HZ6PZNFK.js";import"./chunk-ETFSQUAY.js";import{a as U,b as j}from"./chunk-G7TNHKYZ.js";import"./chunk-VYWHQZE2.js";import"./chunk-6IEGP7QZ.js";import{a as p,b as c,f as q}from"./chunk-DBQTNMCX.js";import{H as f,P as H,U as a,V as y,X as F,e as G,ea as D,g as S,i as M,oa as T,pa as A,ra as w,ta as h}from"./chunk-3VEWMGKM.js";import"./chunk-77POFJ7J.js";import{b as d,e as l,j as m}from"./chunk-IYZIRKFV.js";import"./chunk-WXCPMYFQ.js";import"./chunk-6F6K4OU5.js";import{k as v}from"./chunk-HIVZEDT5.js";var Y=d`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var z=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},R=class extends m{constructor(){super(...arguments),this.inputElementRef=U(),this.instructionElementRef=U(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=S.debounce(e=>v(this,null,function*(){let i=yield H.getEnsAddress(e);if(a.setLoading(!1),i){a.setReceiverProfileName(e),a.setReceiverAddress(i);let r=yield H.getEnsAvatar(e);a.setReceiverProfileImageUrl(r||void 0)}else a.setReceiverAddress(e),a.setReceiverProfileName(void 0),a.setReceiverProfileImageUrl(void 0)}))}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return l` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${j(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${j(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}focusInput(){return v(this,null,function*(){this.instructionElementRef.value&&(this.instructionHidden=!0,yield this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))})}focusInstruction(){return v(this,null,function*(){this.instructionElementRef.value&&(this.instructionHidden=!1,yield this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())})}toggleInstructionFocus(e){return v(this,null,function*(){this.instructionElementRef.value&&(yield this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished)})}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}onPasteClick(){return v(this,null,function*(){this.pasting=!0;let e=yield navigator.clipboard.readText();a.setReceiverAddress(e),this.focusInput()})}onInputChange(e){this.pasting=!1;let i=e.target;i.value&&!this.instructionHidden&&this.focusInput(),a.setLoading(!0),this.onDebouncedSearch(i.value)}};R.styles=Y;z([p()],R.prototype,"value",void 0);z([c()],R.prototype,"instructionHidden",void 0);z([c()],R.prototype,"pasting",void 0);R=z([h("w3m-input-address")],R);var K=/[.*+?^${}()|[\]\\]/gu,J=/[0-9,.]/u;var Q=d`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;var W=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},I=class extends m{constructor(){super(...arguments),this.inputElementRef=U(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),l`<input
      ${j(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){let i=e.data;if(i&&this.inputElementRef?.value)if(i===","){let r=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=r,this.value=`${this.value}${r}`}else J.test(i)||(this.inputElementRef.value.value=this.value.replace(new RegExp(i.replace(K,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};I.styles=[T,A,Q];W([p({type:Boolean})],I.prototype,"disabled",void 0);W([p({type:String})],I.prototype,"value",void 0);W([p({type:String})],I.prototype,"placeholder",void 0);I=W([h("wui-input-amount")],I);var X=d`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var _=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},$=class extends m{render(){return l` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?l`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:l`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){f.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let i=this.token.price*this.sendTokenAmount;return l`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${i?`$${w.formatNumberToLocalString(i,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l` <wui-text variant="small-400" color="error-100">
          ${w.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:l` <wui-text variant="small-400" color="fg-200">
        ${w.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?l`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:l`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){a.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&typeof this.gasPrice<"u"){let e=this.token.address===void 0||Object.values(G.NATIVE_TOKEN_ADDRESS).some(o=>this.token?.address===o),i=D.bigNumber(this.gasPrice).div(D.bigNumber(10).pow(Number(this.token.quantity.decimals))),r=e?D.bigNumber(this.token.quantity.numeric).minus(i):D.bigNumber(this.token.quantity.numeric);a.setTokenAmount(Number(r.toFixed(20)))}}onBuyClick(){f.push("OnRampProviders")}};$.styles=X;_([p({type:Object})],$.prototype,"token",void 0);_([p({type:Number})],$.prototype,"sendTokenAmount",void 0);_([p({type:Number})],$.prototype,"gasPriceInUSD",void 0);_([p({type:Number})],$.prototype,"gasPrice",void 0);$=_([h("w3m-input-token")],$);var Z=d`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var b=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},g=class extends m{constructor(){super(),this.unsubscribe=[],this.token=a.state.token,this.sendTokenAmount=a.state.sendTokenAmount,this.receiverAddress=a.state.receiverAddress,this.receiverProfileName=a.state.receiverProfileName,this.loading=a.state.loading,this.gasPriceInUSD=a.state.gasPriceInUSD,this.gasPrice=a.state.gasPrice,this.message="Preview Send",this.fetchNetworkPrice(),this.fetchBalances(),this.unsubscribe.push(a.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}fetchBalances(){return v(this,null,function*(){yield a.fetchTokenBalance(),a.fetchNetworkBalance()})}fetchNetworkPrice(){return v(this,null,function*(){yield F.getNetworkTokenPrice();let e=yield F.getInitialGasPrice();e?.gasPrice&&e?.gasPriceInUSD&&(a.setGasPrice(e.gasPrice),a.setGasPriceInUsd(e.gasPriceInUSD))})}onButtonClick(){f.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!S.isAddress(this.receiverAddress,y.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),a.hasInsufficientGasFunds()&&(this.message="Insufficient Gas Funds"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};g.styles=Z;b([c()],g.prototype,"token",void 0);b([c()],g.prototype,"sendTokenAmount",void 0);b([c()],g.prototype,"receiverAddress",void 0);b([c()],g.prototype,"receiverProfileName",void 0);b([c()],g.prototype,"loading",void 0);b([c()],g.prototype,"gasPriceInUSD",void 0);b([c()],g.prototype,"gasPrice",void 0);b([c()],g.prototype,"message",void 0);g=b([h("w3m-wallet-send-view")],g);var ee=d`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var B=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},C=class extends m{constructor(){super(),this.unsubscribe=[],this.tokenBalances=a.state.tokenBalances,this.search="",this.onDebouncedSearch=S.debounce(e=>{this.search=e}),this.unsubscribe.push(a.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(e=>e.chainId===y.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,l`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>l`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):l`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
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
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){f.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){a.setToken(e),a.setTokenAmount(void 0),f.goBack()}};C.styles=ee;B([c()],C.prototype,"tokenBalances",void 0);B([c()],C.prototype,"tokens",void 0);B([c()],C.prototype,"filteredTokens",void 0);B([c()],C.prototype,"search",void 0);C=B([h("w3m-wallet-send-select-token-view")],C);var te=d`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var O=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},P=class extends m{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return l`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?l`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};P.styles=[T,A,te];O([p()],P.prototype,"text",void 0);O([p()],P.prototype,"address",void 0);O([p()],P.prototype,"imageSrc",void 0);O([p({type:Boolean})],P.prototype,"isAddress",void 0);P=O([h("wui-preview-item")],P);var ie=d`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var V=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},N=class extends m{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?l` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:l`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};N.styles=[T,A,ie];V([p()],N.prototype,"imageSrc",void 0);V([p()],N.prototype,"textTitle",void 0);V([p()],N.prototype,"textValue",void 0);N=V([h("wui-list-content")],N);var re=d`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var L=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},E=class extends m{render(){return l` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${q(w.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${w.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?l` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${q(M.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&f.push("Networks",{network:e})}};E.styles=re;L([p()],E.prototype,"receiverAddress",void 0);L([p({type:Object})],E.prototype,"caipNetwork",void 0);L([p({type:Number})],E.prototype,"networkFee",void 0);E=L([h("w3m-wallet-send-details")],E);var oe=d`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var k=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var u=n.length-1;u>=0;u--)(s=n[u])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},x=class extends m{constructor(){super(),this.unsubscribe=[],this.token=a.state.token,this.sendTokenAmount=a.state.sendTokenAmount,this.receiverAddress=a.state.receiverAddress,this.receiverProfileName=a.state.receiverProfileName,this.receiverProfileImageUrl=a.state.receiverProfileImageUrl,this.gasPriceInUSD=a.state.gasPriceInUSD,this.caipNetwork=y.state.activeCaipNetwork,this.unsubscribe.push(a.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),y.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?w.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?w.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):w.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let i=this.token.price*this.sendTokenAmount;return l`<wui-text variant="paragraph-400" color="fg-100"
        >$${i.toFixed(2)}</wui-text
      >`}return null}onSendClick(){a.sendToken()}onCancelClick(){f.goBack()}};x.styles=oe;k([c()],x.prototype,"token",void 0);k([c()],x.prototype,"sendTokenAmount",void 0);k([c()],x.prototype,"receiverAddress",void 0);k([c()],x.prototype,"receiverProfileName",void 0);k([c()],x.prototype,"receiverProfileImageUrl",void 0);k([c()],x.prototype,"gasPriceInUSD",void 0);k([c()],x.prototype,"caipNetwork",void 0);x=k([h("w3m-wallet-send-preview-view")],x);export{C as W3mSendSelectTokenView,x as W3mWalletSendPreviewView,g as W3mWalletSendView};
