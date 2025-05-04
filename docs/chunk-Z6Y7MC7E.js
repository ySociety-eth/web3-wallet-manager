import"./chunk-Z7QBJRUP.js";import"./chunk-32TW5WE7.js";import"./chunk-BNX2NHWG.js";import"./chunk-6SNP2N7S.js";import"./chunk-QJMZMSVK.js";import"./chunk-HZ6PZNFK.js";import"./chunk-ETFSQUAY.js";import{a as M,b as P}from"./chunk-G7TNHKYZ.js";import"./chunk-VYWHQZE2.js";import"./chunk-6IEGP7QZ.js";import{a as g,b as f,f as k}from"./chunk-DBQTNMCX.js";import"./chunk-DGDWXWRD.js";import{e as R}from"./chunk-GD7TJA3Q.js";import{H as T,I as _,J as O,L as E,M as U,Y as b,_ as N,ba as p,e as A,g as S,ga as v,ha as W,ja as D,oa as j,ta as u}from"./chunk-3VEWMGKM.js";import"./chunk-77POFJ7J.js";import{b as h,e as a,j as m}from"./chunk-IYZIRKFV.js";import"./chunk-WXCPMYFQ.js";import"./chunk-6F6K4OU5.js";import{k as x}from"./chunk-HIVZEDT5.js";var z=h`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var L=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},$=600,H=360,Y=64,C=class extends m{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(N.subscribeKey("open",e=>{e||(this.onHideIframe(),T.popTransactionStack())}),N.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){return x(this,null,function*(){yield this.syncTheme(),this.iframe.style.display="block";let e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(i=>{let o=i?.[0]?.contentBoxSize?.[0]?.inlineSize;this.iframe.style.height=`${$}px`,e.style.height=`${$}px`,o&&o<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width=`${H}px`,this.iframe.style.left=`calc(50% - ${H/2}px)`,this.iframe.style.top=`calc(50% - ${$/2}px + ${Y/2}px)`,this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)})}render(){return a`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}syncTheme(){return x(this,null,function*(){let e=O.getAuthConnector();if(e){let i=_.getSnapshot().themeMode,r=_.getSnapshot().themeVariables;yield e.provider.syncTheme({themeVariables:r,w3mThemeVariables:D(r,i)})}})}};C.styles=z;L([f()],C.prototype,"ready",void 0);C=L([u("w3m-approve-transaction-view")],C);var K=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},V=class extends m{render(){return a`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${A.SECURE_SITE_DASHBOARD}
          imageSrc=${A.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};V=K([u("w3m-upgrade-wallet-view")],V);var F=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var y=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},w=class extends m{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return a`
      <wui-input-text
        value=${k(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return a`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${v.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?a`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?a`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};w.styles=[j,F];y([g()],w.prototype,"errorMessage",void 0);y([g({type:Boolean})],w.prototype,"disabled",void 0);y([g()],w.prototype,"value",void 0);y([g({type:Boolean})],w.prototype,"loading",void 0);w=y([u("wui-ens-input")],w);var B=h`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var d=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},c=class extends m{constructor(){super(),this.formRef=M(),this.usubscribe=[],this.name="",this.error="",this.loading=p.state.loading,this.suggestions=p.state.suggestions,this.registered=!1,this.profileName=b.state.profileName,this.onDebouncedNameInputChange=S.debounce(e=>{p.validateName(e)?(this.error="",this.name=e,p.getSuggestions(e),p.isNameRegistered(e).then(i=>{this.registered=i})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(p.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),b.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${P(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?a`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?a`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?a`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:a`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;let e=this.registered?this.suggestions.filter(i=>i.name!==this.name):[];return a`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(i=>this.availableNameTemplate(i.name))}
    </wui-flex>`}availableNameTemplate(e){return a` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&p.validateName(this.name)}onSubmitName(){return x(this,null,function*(){try{if(!this.isAllowedToSubmit())return;let e=`${this.name}${v.WC_NAME_SUFFIX}`;E.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:b.state.preferredAccountType===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),yield p.registerName(e),E.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:b.state.preferredAccountType===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(e){U.showError(e.message),E.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:b.state.preferredAccountType===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${v.WC_NAME_SUFFIX}`,error:e?.message||"Unknown error"}})}})}onEnterKey(e){e.key==="Enter"&&this.isAllowedToSubmit()&&this.onSubmitName()}};c.styles=B;d([g()],c.prototype,"errorMessage",void 0);d([f()],c.prototype,"name",void 0);d([f()],c.prototype,"error",void 0);d([f()],c.prototype,"loading",void 0);d([f()],c.prototype,"suggestions",void 0);d([f()],c.prototype,"registered",void 0);d([f()],c.prototype,"profileName",void 0);c=d([u("w3m-register-account-name-view")],c);var G=h`
  .continue-button-container {
    width: 100%;
  }
`;var q=function(n,e,i,r){var o=arguments.length,t=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(o<3?s(t):o>3?s(e,i,t):s(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t},I=class extends m{render(){return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{S.openHref(W.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return a` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return a`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){T.replace("Account")}};I.styles=G;I=q([u("w3m-register-account-name-success-view")],I);export{C as W3mApproveTransactionView,I as W3mRegisterAccountNameSuccess,c as W3mRegisterAccountNameView,V as W3mUpgradeWalletView};
