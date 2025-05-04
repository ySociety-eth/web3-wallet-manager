import"./chunk-63FFEMZH.js";import"./chunk-A2RFRGME.js";import"./chunk-G3EQR5YF.js";import"./chunk-BXL4PJXS.js";import"./chunk-QJMZMSVK.js";import"./chunk-4SKOPOWR.js";import"./chunk-3TBIBBG6.js";import"./chunk-HZ6PZNFK.js";import"./chunk-ETFSQUAY.js";import"./chunk-G7TNHKYZ.js";import"./chunk-VYWHQZE2.js";import"./chunk-6IEGP7QZ.js";import{a as p,b as r}from"./chunk-DBQTNMCX.js";import"./chunk-DGDWXWRD.js";import{e as V}from"./chunk-GD7TJA3Q.js";import{H as v,L as N,V as P,X as i,Y as C,_ as O,e as L,ea as S,fa as B,g as R,ka as E,oa as W,pa as z,ra as w,ta as k}from"./chunk-3VEWMGKM.js";import"./chunk-77POFJ7J.js";import{b as x,e as l,j as b}from"./chunk-IYZIRKFV.js";import"./chunk-WXCPMYFQ.js";import"./chunk-6F6K4OU5.js";import{k as j}from"./chunk-HIVZEDT5.js";var M=x`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var T=function(c,t,o,n){var s=arguments.length,e=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,n);else for(var u=c.length-1;u>=0;u--)(a=c[u])&&(e=(s<3?a(e):s>3?a(t,o,e):a(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},Z=L.CONVERT_SLIPPAGE_TOLERANCE,f=class extends b{constructor(){super(),this.unsubscribe=[],this.networkName=P.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=i.state.sourceToken,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount,this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.gasPriceInUSD=i.state.gasPriceInUSD,this.priceImpact=i.state.priceImpact,this.maxSlippage=i.state.maxSlippage,this.networkTokenSymbol=i.state.networkTokenSymbol,this.inputError=i.state.inputError,this.unsubscribe.push(i.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.gasPriceInUSD=t.gasPriceInUSD,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError}))}render(){let t=this.toTokenAmount&&this.maxSlippage?S.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let o=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${w.formatNumberToLocalString(o,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${w.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?l`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${w.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?l` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${w.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?l`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${w.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${w.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${Z}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};f.styles=[M];T([r()],f.prototype,"networkName",void 0);T([p()],f.prototype,"detailsOpen",void 0);T([r()],f.prototype,"sourceToken",void 0);T([r()],f.prototype,"toToken",void 0);T([r()],f.prototype,"toTokenAmount",void 0);T([r()],f.prototype,"sourceTokenPriceInUSD",void 0);T([r()],f.prototype,"toTokenPriceInUSD",void 0);T([r()],f.prototype,"gasPriceInUSD",void 0);T([r()],f.prototype,"priceImpact",void 0);T([r()],f.prototype,"maxSlippage",void 0);T([r()],f.prototype,"networkTokenSymbol",void 0);T([r()],f.prototype,"inputError",void 0);f=T([k("w3m-swap-details")],f);var F=x`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var Q=function(c,t,o,n){var s=arguments.length,e=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,n);else for(var u=c.length-1;u>=0;u--)(a=c[u])&&(e=(s<3?a(e):s>3?a(t,o,e):a(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},_=class extends b{constructor(){super(...arguments),this.target="sourceToken"}render(){return l`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};_.styles=[F];Q([p()],_.prototype,"target",void 0);_=Q([k("w3m-swap-input-skeleton")],_);var q=x`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
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

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var $=function(c,t,o,n){var s=arguments.length,e=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,n);else for(var u=c.length-1;u>=0;u--)(a=c[u])&&(e=(s<3?a(e):s>3?a(t,o,e):a(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},J=5e-5,y=class extends b{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){let t=this.marketValue||"0",o=S.bigNumber(t).gt("0");return l`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${o?`$${w.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return B.numericInputKeyDown(t,this.value,o=>this.onSetAmount?.(this.target,o))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;let o=t.target.value.replace(/[^0-9.]/gu,"");o===","||o==="."?this.onSetAmount(this.target,"0."):o.endsWith(",")?this.onSetAmount(this.target,o.replace(",",".")):this.onSetAmount(this.target,o)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?l`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:l` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let t=S.multiply(this.balance,this.price),o=t?t?.gt(J):!1;return l`
      ${o?l`<wui-text variant="small-400" color="fg-200">
            ${w.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(o):null}
    `}tokenActionButtonTemplate(t){return t?l` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:l` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){N.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),v.push("SwapSelectToken",{target:this.target})}onBuyToken(){v.push("OnRampProviders")}};y.styles=[q];$([p()],y.prototype,"focused",void 0);$([p()],y.prototype,"balance",void 0);$([p()],y.prototype,"value",void 0);$([p()],y.prototype,"price",void 0);$([p()],y.prototype,"marketValue",void 0);$([p()],y.prototype,"disabled",void 0);$([p()],y.prototype,"target",void 0);$([p()],y.prototype,"token",void 0);$([p()],y.prototype,"onSetAmount",void 0);$([p()],y.prototype,"onSetMaxValue",void 0);y=$([k("w3m-swap-input")],y);var K=x`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var g=function(c,t,o,n){var s=arguments.length,e=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,n);else for(var u=c.length-1;u>=0;u--)(a=c[u])&&(e=(s<3?a(e):s>3?a(t,o,e):a(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},h=class extends b{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=P.state.activeCaipNetwork?.caipNetworkId,this.initialized=i.state.initialized,this.loadingQuote=i.state.loadingQuote,this.loadingPrices=i.state.loadingPrices,this.loadingTransaction=i.state.loadingTransaction,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount,this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount,this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.inputError=i.state.inputError,this.gasPriceInUSD=i.state.gasPriceInUSD,this.fetchError=i.state.fetchError,this.onDebouncedGetSwapCalldata=R.debounce(()=>j(this,null,function*(){yield i.swapTokens()}),200),P.subscribeKey("activeCaipNetwork",t=>{this.caipNetworkId!==t?.caipNetworkId&&(this.caipNetworkId=t?.caipNetworkId,i.resetState(),i.initializeState())}),this.unsubscribe.push(O.subscribeKey("open",t=>{t||i.resetState()}),v.subscribeKey("view",t=>{t.includes("Swap")||i.resetValues()}),i.subscribe(t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.gasPriceInUSD=t.gasPriceInUSD,this.fetchError=t.fetchError}))}firstUpdated(){i.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{i.getNetworkTokenPrice(),i.getMyTokensWithBalance(),i.swapTokens()},1e4)}templateSwap(){return l`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount"}templateReplaceTokensButton(){return l`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return l`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,o){let n=i.state.myTokensWithBalance?.find(u=>u?.address===o?.address),s=t==="toToken"?this.toTokenAmount:this.sourceTokenAmount,e=t==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,a=S.parseLocalStringToNumber(s)*e;return l`<w3m-swap-input
      .value=${t==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${t==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${o}
      .balance=${n?.quantity?.numeric}
      .price=${n?.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,o){let s=(t==="sourceToken"?this.sourceToken:this.toToken)?.address===P.getActiveNetworkTokenAddress(),e="0";if(!o){e="0",this.handleChangeAmount(t,e);return}if(!this.gasPriceInUSD){e=o,this.handleChangeAmount(t,e);return}let a=S.bigNumber(this.gasPriceInUSD.toFixed(5)).div(this.sourceTokenPriceInUSD),u=s?S.bigNumber(o).minus(a):S.bigNumber(o);this.handleChangeAmount(t,u.gt(0)?u.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(t,o){i.clearError(),t==="sourceToken"?i.setSourceTokenAmount(o):i.setToTokenAmount(o),this.onDebouncedGetSwapCalldata()}templateActionButton(){let t=!this.toToken||!this.sourceToken,o=!this.sourceTokenAmount,n=this.loadingQuote||this.loadingPrices||this.loadingTransaction,s=n||t||o||this.inputError;return l` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${t?"neutral":"main"}
        .loading=${n}
        .disabled=${s}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){i.switchTokens()}onSwapPreview(){if(this.fetchError){i.swapTokens();return}N.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:C.state.preferredAccountType===V.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.push("SwapPreview")}};h.styles=K;g([r()],h.prototype,"interval",void 0);g([r()],h.prototype,"detailsOpen",void 0);g([r()],h.prototype,"caipNetworkId",void 0);g([r()],h.prototype,"initialized",void 0);g([r()],h.prototype,"loadingQuote",void 0);g([r()],h.prototype,"loadingPrices",void 0);g([r()],h.prototype,"loadingTransaction",void 0);g([r()],h.prototype,"sourceToken",void 0);g([r()],h.prototype,"sourceTokenAmount",void 0);g([r()],h.prototype,"sourceTokenPriceInUSD",void 0);g([r()],h.prototype,"toToken",void 0);g([r()],h.prototype,"toTokenAmount",void 0);g([r()],h.prototype,"toTokenPriceInUSD",void 0);g([r()],h.prototype,"inputError",void 0);g([r()],h.prototype,"gasPriceInUSD",void 0);g([r()],h.prototype,"fetchError",void 0);h=g([k("w3m-swap-view")],h);var H=x`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var m=function(c,t,o,n){var s=arguments.length,e=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,n);else for(var u=c.length-1;u>=0;u--)(a=c[u])&&(e=(s<3?a(e):s>3?a(t,o,e):a(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},d=class extends b{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=i.state.approvalTransaction,this.swapTransaction=i.state.swapTransaction,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=i.state.sourceTokenPriceInUSD,this.toToken=i.state.toToken,this.toTokenAmount=i.state.toTokenAmount??"",this.toTokenPriceInUSD=i.state.toTokenPriceInUSD,this.caipNetwork=P.state.activeCaipNetwork,this.balanceSymbol=C.state.balanceSymbol,this.gasPriceInUSD=i.state.gasPriceInUSD,this.inputError=i.state.inputError,this.loadingQuote=i.state.loadingQuote,this.loadingApprovalTransaction=i.state.loadingApprovalTransaction,this.loadingBuildTransaction=i.state.loadingBuildTransaction,this.loadingTransaction=i.state.loadingTransaction,this.unsubscribe.push(C.subscribeKey("balanceSymbol",t=>{this.balanceSymbol!==t&&v.goBack()}),P.subscribeKey("activeCaipNetwork",t=>{this.caipNetwork!==t&&(this.caipNetwork=t)}),i.subscribe(t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toToken=t.toToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&v.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction}))}firstUpdated(){i.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{i.getApprovalLoadingState()||i.getTransaction()},1e4)}templateSwap(){let t=`${w.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,o=`${w.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,n=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,s=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),e=w.formatNumberToLocalString(n),a=w.formatNumberToLocalString(s),u=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return l`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${e}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${o}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${u}
            ?disabled=${u}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:l`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){v.goBack()}onSendTransaction(){this.approvalTransaction?i.sendTransactionForApproval(this.approvalTransaction):i.sendTransactionForSwap(this.swapTransaction)}};d.styles=H;m([r()],d.prototype,"interval",void 0);m([r()],d.prototype,"detailsOpen",void 0);m([r()],d.prototype,"approvalTransaction",void 0);m([r()],d.prototype,"swapTransaction",void 0);m([r()],d.prototype,"sourceToken",void 0);m([r()],d.prototype,"sourceTokenAmount",void 0);m([r()],d.prototype,"sourceTokenPriceInUSD",void 0);m([r()],d.prototype,"toToken",void 0);m([r()],d.prototype,"toTokenAmount",void 0);m([r()],d.prototype,"toTokenPriceInUSD",void 0);m([r()],d.prototype,"caipNetwork",void 0);m([r()],d.prototype,"balanceSymbol",void 0);m([r()],d.prototype,"gasPriceInUSD",void 0);m([r()],d.prototype,"inputError",void 0);m([r()],d.prototype,"loadingQuote",void 0);m([r()],d.prototype,"loadingApprovalTransaction",void 0);m([r()],d.prototype,"loadingBuildTransaction",void 0);m([r()],d.prototype,"loadingTransaction",void 0);d=m([k("w3m-swap-preview-view")],d);var G=x`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var U=function(c,t,o,n){var s=arguments.length,e=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,n);else for(var u=c.length-1;u>=0;u--)(a=c[u])&&(e=(s<3?a(e):s>3?a(t,o,e):a(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},D=class extends b{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let t=this.amount&&this.price?S.multiply(this.price,this.amount)?.toFixed(3):null;return l`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?l`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${w.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?l`<wui-text variant="small-400" color="fg-200">
                  ${w.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?l`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?l`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};D.styles=[W,z,G];U([p()],D.prototype,"imageSrc",void 0);U([p()],D.prototype,"name",void 0);U([p()],D.prototype,"symbol",void 0);U([p()],D.prototype,"price",void 0);U([p()],D.prototype,"amount",void 0);U([r()],D.prototype,"visible",void 0);U([r()],D.prototype,"imageError",void 0);D=U([k("wui-token-list-item")],D);var Y=x`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var A=function(c,t,o,n){var s=arguments.length,e=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,n);else for(var u=c.length-1;u>=0;u--)(a=c[u])&&(e=(s<3?a(e):s>3?a(t,o,e):a(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},I=class extends b{constructor(){super(),this.unsubscribe=[],this.targetToken=v.state.data?.target,this.sourceToken=i.state.sourceToken,this.sourceTokenAmount=i.state.sourceTokenAmount,this.toToken=i.state.toToken,this.myTokensWithBalance=i.state.myTokensWithBalance,this.popularTokens=i.state.popularTokens,this.searchValue="",this.unsubscribe.push(i.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance}))}updated(){this.renderRoot?.querySelector(".suggested-tokens-container")?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),this.renderRoot?.querySelector(".tokens")?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let t=this.renderRoot?.querySelector(".suggested-tokens-container"),o=this.renderRoot?.querySelector(".tokens");t?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),o?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return l`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){this.targetToken==="sourceToken"?i.setSourceToken(t):(i.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&i.swapTokens()),v.goBack()}templateSearchInput(){return l`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],o=this.popularTokens?this.popularTokens:[],n=this.filterTokensWithText(t,this.searchValue),s=this.filterTokensWithText(o,this.searchValue);return l`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${n?.length>0?l`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${n.map(e=>{let a=e.symbol===this.sourceToken?.symbol||e.symbol===this.toToken?.symbol;return l`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${e.symbol}"
                      name=${e.name}
                      ?disabled=${a}
                      symbol=${e.symbol}
                      price=${e?.price}
                      amount=${e?.quantity?.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{a||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${s?.length>0?s.map(e=>l`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${e.symbol}"
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let t=i.state.suggestedTokens?i.state.suggestedTokens.slice(0,8):null;return t?l`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${t.map(o=>l`
            <wui-token-button
              text=${o.symbol}
              imageSrc=${o.logoUri}
              @click=${()=>this.onSelectToken(o)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){let t=this.renderRoot?.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",E.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",E.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){let t=this.renderRoot?.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",E.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",E.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,o){return t.filter(n=>`${n.symbol} ${n.name} ${n.address}`.toLowerCase().includes(o.toLowerCase()))}};I.styles=Y;A([r()],I.prototype,"interval",void 0);A([r()],I.prototype,"targetToken",void 0);A([r()],I.prototype,"sourceToken",void 0);A([r()],I.prototype,"sourceTokenAmount",void 0);A([r()],I.prototype,"toToken",void 0);A([r()],I.prototype,"myTokensWithBalance",void 0);A([r()],I.prototype,"popularTokens",void 0);A([r()],I.prototype,"searchValue",void 0);I=A([k("w3m-swap-select-token-view")],I);export{d as W3mSwapPreviewView,I as W3mSwapSelectTokenView,h as W3mSwapView};
