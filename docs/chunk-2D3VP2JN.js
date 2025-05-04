import"./chunk-C2SNM5XE.js";import"./chunk-BNX2NHWG.js";import"./chunk-6SNP2N7S.js";import"./chunk-QJMZMSVK.js";import{a as N,b as j}from"./chunk-G7TNHKYZ.js";import"./chunk-VYWHQZE2.js";import"./chunk-6IEGP7QZ.js";import{a as b,b as f}from"./chunk-DBQTNMCX.js";import{a as I}from"./chunk-3SVHTJQ2.js";import"./chunk-GD7TJA3Q.js";import{G as P,H as s,J as E,L as u,M as g,P as W,V as T,_ as V,g as v,oa as O,pa as F,ra as A,ta as p}from"./chunk-3VEWMGKM.js";import"./chunk-77POFJ7J.js";import{b as d,e as m,j as w}from"./chunk-IYZIRKFV.js";import"./chunk-WXCPMYFQ.js";import"./chunk-6F6K4OU5.js";import{k as c}from"./chunk-HIVZEDT5.js";var k=d`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
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

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var D=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},y=class extends w{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return m`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};y.styles=[O,F,k];D([b({type:Boolean})],y.prototype,"disabled",void 0);D([b({type:String})],y.prototype,"value",void 0);y=D([p("wui-input-numeric")],y);var U=d`
  :host {
    position: relative;
    display: block;
  }
`;var _=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},x=class extends w{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(o=>o!==""),this.handleKeyDown=(t,e)=>{let o=t.target,r=this.getInputElement(o),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!r)return;i.includes(t.key)&&t.preventDefault();let n=r.selectionStart;switch(t.key){case"ArrowLeft":n&&r.setSelectionRange(n+1,n+1),this.focusInputField("prev",e);break;case"ArrowRight":this.focusInputField("next",e);break;case"Shift":this.focusInputField("next",e);break;case"Delete":r.value===""?this.focusInputField("prev",e):this.updateInput(r,e,"");break;case"Backspace":r.value===""?this.focusInputField("prev",e):this.updateInput(r,e,"");break;default:}},this.focusInputField=(t,e)=>{if(t==="next"){let o=e+1;if(!this.shouldInputBeEnabled(o))return;let r=this.numerics[o<this.length?o:e],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if(t==="prev"){let o=e-1,r=this.numerics[o>-1?o:e],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return m`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>m`
            <wui-input-numeric
              @input=${o=>this.handleInput(o,e)}
              @click=${o=>this.selectInput(o)}
              @keydown=${o=>this.handleKeyDown(o,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,o){let r=this.numerics[e],i=t||(r?this.getInputElement(r):void 0);i&&(i.value=o,this.values=this.values.map((n,l)=>l===e?o:n))}selectInput(t){let e=t.target;e&&this.getInputElement(e)?.select()}handleInput(t,e){let o=t.target,r=this.getInputElement(o);if(r){let i=r.value;t.inputType==="insertFromPaste"?this.handlePaste(r,i,e):A.isNumber(i)&&t.data?(this.updateInput(r,e,t.data),this.focusInputField("next",e)):this.updateInput(r,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,o){let r=e[0];if(r&&A.isNumber(r)){this.updateInput(t,o,r);let n=e.substring(1);if(o+1<this.length&&n.length){let l=this.numerics[o+1],$=l?this.getInputElement(l):void 0;$&&this.handlePaste($,n,o+1)}else this.focusInputField("next",o)}else this.updateInput(t,o,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};x.styles=[O,U];_([b({type:Number})],x.prototype,"length",void 0);_([b({type:String})],x.prototype,"otp",void 0);_([f()],x.prototype,"values",void 0);x=_([p("wui-otp")],x);var z=d`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var R=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},Y=6,h=class extends w{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=I.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=s.state.data?.email,this.authConnector=E.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");let t=!!this.timeoutTimeLeft,e=this.getFooterLabels(t);return m`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?m`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:m` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?m`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=I.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=I.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}onOtpInputChange(t){return c(this,null,function*(){try{this.loading||(this.otp=t.detail,this.authConnector&&this.otp.length===Y&&(this.loading=!0,yield this.onOtpSubmit?.(this.otp)))}catch(e){this.error=v.parseError(e),this.loading=!1}})}onResendCode(){return c(this,null,function*(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!E.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,yield this.onOtpResend(this.email),this.startOTPTimeout(),g.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){g.showError(t)}finally{this.loading=!1}})}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:`Try again ${t?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${t?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};h.styles=z;R([f()],h.prototype,"loading",void 0);R([f()],h.prototype,"timeoutTimeLeft",void 0);R([f()],h.prototype,"error",void 0);h=R([p("w3m-email-otp-widget")],h);var J=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},M=class extends h{constructor(){super(...arguments),this.onOtpSubmit=t=>c(this,null,function*(){try{if(this.authConnector){if(yield this.authConnector.provider.connectOtp({otp:t}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),T.state.activeChain)yield W.connectExternal(this.authConnector,T.state.activeChain);else throw new Error("Active chain is not set on ChainControll");u.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),P.state.siwx||V.close()}}catch(e){throw u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:v.parseError(e)}}),e}}),this.onOtpResend=t=>c(this,null,function*(){this.authConnector&&(yield this.authConnector.provider.connectEmail({email:t}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))})}};M=J([p("w3m-email-verify-otp-view")],M);var B=d`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var H=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},S=class extends w{constructor(){super(),this.email=s.state.data?.email,this.authConnector=E.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return m`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}listenForDeviceApproval(){return c(this,null,function*(){if(this.authConnector)try{yield this.authConnector.provider.connectDevice(),u.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.replace("EmailVerifyOtp",{email:this.email})}catch{s.goBack()}})}onResendCode(){return c(this,null,function*(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,yield this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),g.showSuccess("Code email resent")}}catch(t){g.showError(t)}finally{this.loading=!1}})}};S.styles=B;H([f()],S.prototype,"loading",void 0);S=H([p("w3m-email-verify-device-view")],S);var q=d`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var L=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},C=class extends w{constructor(){super(...arguments),this.formRef=N(),this.initialEmail=s.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){let t=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return m`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${j(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${s.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!t}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(t){this.email=t.detail}onSubmitEmail(t){return c(this,null,function*(){try{if(this.loading)return;this.loading=!0,t.preventDefault();let e=E.getAuthConnector();if(!e)throw new Error("w3m-update-email-wallet: Auth connector not found");let o=yield e.provider.updateEmail({email:this.email});u.sendEvent({type:"track",event:"EMAIL_EDIT"}),o.action==="VERIFY_SECONDARY_OTP"?s.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):s.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){g.showError(e),this.loading=!1}})}};C.styles=q;L([f()],C.prototype,"email",void 0);L([f()],C.prototype,"loading",void 0);C=L([p("w3m-update-email-wallet-view")],C);var Q=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},G=class extends h{constructor(){super(),this.email=s.state.data?.email,this.onOtpSubmit=t=>c(this,null,function*(){try{this.authConnector&&(yield this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.replace("UpdateEmailSecondaryOtp",s.state.data))}catch(e){throw u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:v.parseError(e)}}),e}}),this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};G=Q([p("w3m-update-email-primary-otp-view")],G);var X=function(a,t,e,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,e,o);else for(var l=a.length-1;l>=0;l--)(n=a[l])&&(i=(r<3?n(i):r>3?n(t,e,i):n(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i},K=class extends h{constructor(){super(),this.email=s.state.data?.newEmail,this.onOtpSubmit=t=>c(this,null,function*(){try{this.authConnector&&(yield this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.reset("Account"))}catch(e){throw u.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:v.parseError(e)}}),e}}),this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};K=X([p("w3m-update-email-secondary-otp-view")],K);export{S as W3mEmailVerifyDeviceView,M as W3mEmailVerifyOtpView,G as W3mUpdateEmailPrimaryOtpView,K as W3mUpdateEmailSecondaryOtpView,C as W3mUpdateEmailWalletView};
