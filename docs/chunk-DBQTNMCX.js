import{oa as y,qa as W,ra as h,ta as S}from"./chunk-3VEWMGKM.js";import{b as d,c as L,d as I,e as u,g as _,h as N,i as U,j as v}from"./chunk-IYZIRKFV.js";import{a as T,b as z,k as e}from"./chunk-HIVZEDT5.js";var rt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:I},ot=(i=rt,t,r)=>{let{kind:o,metadata:s}=r,a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(r.name,i),o==="accessor"){let{name:n}=r;return{set(c){let f=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,f,i)},init(c){return c!==void 0&&this.P(n,void 0,i),c}}}if(o==="setter"){let{name:n}=r;return function(c){let f=this[n];t.call(this,c),this.requestUpdate(n,f,i)}}throw Error("Unsupported decorator location: "+o)};function l(i){return(t,r)=>typeof r=="object"?ot(i,t,r):((o,s,a)=>{let n=s.hasOwnProperty(a);return s.constructor.createProperty(a,n?z(T({},o),{wrapped:!0}):o),n?Object.getOwnPropertyDescriptor(s,a):void 0})(i,t,r)}function ht(i){return l(z(T({},i),{state:!0,attribute:!1}))}var B={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},b=i=>(...t)=>({_$litDirective$:i,values:t}),$=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var G=b(class extends ${constructor(i){if(super(i),i.type!==B.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let r=i.element.classList;for(let o of this.st)o in t||(r.remove(o),this.st.delete(o));for(let o in t){let s=!!t[o];s===this.st.has(o)||this.nt?.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return _}});var V=d`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var m=function(i,t,r,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,t,r,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(a=(s<3?n(a):s>3?n(t,r,a):n(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},p=class extends v{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&h.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&h.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&h.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&h.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&h.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&h.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&h.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&h.getSpacingStyles(this.margin,3)};
    `,u`<slot></slot>`}};p.styles=[y,V];m([l()],p.prototype,"flexDirection",void 0);m([l()],p.prototype,"flexWrap",void 0);m([l()],p.prototype,"flexBasis",void 0);m([l()],p.prototype,"flexGrow",void 0);m([l()],p.prototype,"flexShrink",void 0);m([l()],p.prototype,"alignItems",void 0);m([l()],p.prototype,"justifyContent",void 0);m([l()],p.prototype,"columnGap",void 0);m([l()],p.prototype,"rowGap",void 0);m([l()],p.prototype,"gap",void 0);m([l()],p.prototype,"padding",void 0);m([l()],p.prototype,"margin",void 0);p=m([S("wui-flex")],p);var F=d`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var A=function(i,t,r,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,t,r,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(a=(s<3?n(a):s>3?n(t,r,a):n(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},g=class extends v{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,u`<slot class=${G(t)}></slot>`}};g.styles=[y,F];A([l()],g.prototype,"variant",void 0);A([l()],g.prototype,"color",void 0);A([l()],g.prototype,"align",void 0);A([l()],g.prototype,"lineClamp",void 0);g=A([S("wui-text")],g);var ve=i=>i??N;var{I:_e}=U,Y=i=>i===null||typeof i!="object"&&typeof i!="function";var K=i=>i.strings===void 0;var C=(i,t)=>{let r=i._$AN;if(r===void 0)return!1;for(let o of r)o._$AO?.(t,!1),C(o,t);return!0},k=i=>{let t,r;do{if((t=i._$AM)===void 0)break;r=t._$AN,r.delete(i),i=t}while(r?.size===0)},X=i=>{for(let t;t=i._$AM;i=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(i))break;r.add(i),nt(t)}};function at(i){this._$AN!==void 0?(k(this),this._$AM=i,X(this)):this._$AM=i}function st(i,t=!1,r=0){let o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let a=r;a<o.length;a++)C(o[a],!1),k(o[a]);else o!=null&&(C(o,!1),k(o));else C(this,i)}var nt=i=>{i.type==B.CHILD&&(i._$AP??=st,i._$AQ??=at)},E=class extends ${constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,o){super._$AT(t,r,o),X(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(C(this,t),k(this))}setValue(t){if(K(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var j=class{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}},D=class{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}};var Z=i=>!Y(i)&&typeof i.then=="function",Q=1073741823,H=class extends E{constructor(){super(...arguments),this._$Cwt=Q,this._$Cbt=[],this._$CK=new j(this),this._$CX=new D}render(...t){return t.find(r=>!Z(r))??_}update(t,r){let o=this._$Cbt,s=o.length;this._$Cbt=r;let a=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<r.length&&!(c>this._$Cwt);c++){let f=r[c];if(!Z(f))return this._$Cwt=c,f;c<s&&f===o[c]||(this._$Cwt=Q,s=0,Promise.resolve(f).then(it=>e(this,null,function*(){for(;n.get();)yield n.get();let x=a.deref();if(x!==void 0){let M=x._$Cbt.indexOf(f);M>-1&&M<x._$Cwt&&(x._$Cwt=M,x.setValue(it))}})))}return _}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},J=b(H);var q=class{constructor(){this.cache=new Map}set(t,r){this.cache.set(t,r)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}},O=new q;var tt=d`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var P=function(i,t,r,o){var s=arguments.length,a=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,t,r,o);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(a=(s<3?n(a):s>3?n(t,r,a):n(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},et={add:()=>e(void 0,null,function*(){return(yield import("./chunk-4CXP5PBP.js")).addSvg}),allWallets:()=>e(void 0,null,function*(){return(yield import("./chunk-RS7KYWS6.js")).allWalletsSvg}),arrowBottomCircle:()=>e(void 0,null,function*(){return(yield import("./chunk-6OJ5TS32.js")).arrowBottomCircleSvg}),appStore:()=>e(void 0,null,function*(){return(yield import("./chunk-26WWE6WZ.js")).appStoreSvg}),apple:()=>e(void 0,null,function*(){return(yield import("./chunk-VORWZBD7.js")).appleSvg}),arrowBottom:()=>e(void 0,null,function*(){return(yield import("./chunk-GI2HTVU6.js")).arrowBottomSvg}),arrowLeft:()=>e(void 0,null,function*(){return(yield import("./chunk-6ECDNGZJ.js")).arrowLeftSvg}),arrowRight:()=>e(void 0,null,function*(){return(yield import("./chunk-VAWMCBST.js")).arrowRightSvg}),arrowTop:()=>e(void 0,null,function*(){return(yield import("./chunk-ZLOGJLKS.js")).arrowTopSvg}),bank:()=>e(void 0,null,function*(){return(yield import("./chunk-GI2HMIZO.js")).bankSvg}),browser:()=>e(void 0,null,function*(){return(yield import("./chunk-TIL3DMYZ.js")).browserSvg}),card:()=>e(void 0,null,function*(){return(yield import("./chunk-L3C3GPD7.js")).cardSvg}),checkmark:()=>e(void 0,null,function*(){return(yield import("./chunk-SNWTQKIG.js")).checkmarkSvg}),checkmarkBold:()=>e(void 0,null,function*(){return(yield import("./chunk-MIBUKFNZ.js")).checkmarkBoldSvg}),chevronBottom:()=>e(void 0,null,function*(){return(yield import("./chunk-PWQBTZFZ.js")).chevronBottomSvg}),chevronLeft:()=>e(void 0,null,function*(){return(yield import("./chunk-TA76DLTX.js")).chevronLeftSvg}),chevronRight:()=>e(void 0,null,function*(){return(yield import("./chunk-PFU2CPCL.js")).chevronRightSvg}),chevronTop:()=>e(void 0,null,function*(){return(yield import("./chunk-JF622IOY.js")).chevronTopSvg}),chromeStore:()=>e(void 0,null,function*(){return(yield import("./chunk-DJVZIL4A.js")).chromeStoreSvg}),clock:()=>e(void 0,null,function*(){return(yield import("./chunk-T5DTKHZR.js")).clockSvg}),close:()=>e(void 0,null,function*(){return(yield import("./chunk-FLVRJWSR.js")).closeSvg}),compass:()=>e(void 0,null,function*(){return(yield import("./chunk-GCCLGBLS.js")).compassSvg}),coinPlaceholder:()=>e(void 0,null,function*(){return(yield import("./chunk-HTB33FLA.js")).coinPlaceholderSvg}),copy:()=>e(void 0,null,function*(){return(yield import("./chunk-DFHFZW4I.js")).copySvg}),cursor:()=>e(void 0,null,function*(){return(yield import("./chunk-NBJWLJLX.js")).cursorSvg}),cursorTransparent:()=>e(void 0,null,function*(){return(yield import("./chunk-E2OPVG47.js")).cursorTransparentSvg}),desktop:()=>e(void 0,null,function*(){return(yield import("./chunk-VZK63I5X.js")).desktopSvg}),disconnect:()=>e(void 0,null,function*(){return(yield import("./chunk-IGLMGC3B.js")).disconnectSvg}),discord:()=>e(void 0,null,function*(){return(yield import("./chunk-24FXZNMK.js")).discordSvg}),etherscan:()=>e(void 0,null,function*(){return(yield import("./chunk-H2A2CQGB.js")).etherscanSvg}),extension:()=>e(void 0,null,function*(){return(yield import("./chunk-5CJPEUBT.js")).extensionSvg}),externalLink:()=>e(void 0,null,function*(){return(yield import("./chunk-LITPPBTC.js")).externalLinkSvg}),facebook:()=>e(void 0,null,function*(){return(yield import("./chunk-EJXZR6YE.js")).facebookSvg}),farcaster:()=>e(void 0,null,function*(){return(yield import("./chunk-IRGZ2GNJ.js")).farcasterSvg}),filters:()=>e(void 0,null,function*(){return(yield import("./chunk-KHVDZIHI.js")).filtersSvg}),github:()=>e(void 0,null,function*(){return(yield import("./chunk-ATLGO677.js")).githubSvg}),google:()=>e(void 0,null,function*(){return(yield import("./chunk-KOODYUWV.js")).googleSvg}),helpCircle:()=>e(void 0,null,function*(){return(yield import("./chunk-GF45AFVI.js")).helpCircleSvg}),image:()=>e(void 0,null,function*(){return(yield import("./chunk-W4IA4JF7.js")).imageSvg}),id:()=>e(void 0,null,function*(){return(yield import("./chunk-KOBKIEHO.js")).idSvg}),infoCircle:()=>e(void 0,null,function*(){return(yield import("./chunk-4F3ZALMV.js")).infoCircleSvg}),lightbulb:()=>e(void 0,null,function*(){return(yield import("./chunk-LXNKYNH7.js")).lightbulbSvg}),mail:()=>e(void 0,null,function*(){return(yield import("./chunk-QDRRO7EY.js")).mailSvg}),mobile:()=>e(void 0,null,function*(){return(yield import("./chunk-RXNFWW6U.js")).mobileSvg}),more:()=>e(void 0,null,function*(){return(yield import("./chunk-QGTUF4XM.js")).moreSvg}),networkPlaceholder:()=>e(void 0,null,function*(){return(yield import("./chunk-U45SWTDM.js")).networkPlaceholderSvg}),nftPlaceholder:()=>e(void 0,null,function*(){return(yield import("./chunk-6JIYQUGP.js")).nftPlaceholderSvg}),off:()=>e(void 0,null,function*(){return(yield import("./chunk-ND3PWFES.js")).offSvg}),playStore:()=>e(void 0,null,function*(){return(yield import("./chunk-RYIYKAVL.js")).playStoreSvg}),plus:()=>e(void 0,null,function*(){return(yield import("./chunk-Y3WUG4NC.js")).plusSvg}),qrCode:()=>e(void 0,null,function*(){return(yield import("./chunk-5MPH3PEV.js")).qrCodeIcon}),recycleHorizontal:()=>e(void 0,null,function*(){return(yield import("./chunk-OCB23RC4.js")).recycleHorizontalSvg}),refresh:()=>e(void 0,null,function*(){return(yield import("./chunk-RHOIR6VF.js")).refreshSvg}),search:()=>e(void 0,null,function*(){return(yield import("./chunk-JOFEOU2E.js")).searchSvg}),send:()=>e(void 0,null,function*(){return(yield import("./chunk-LQBSIFTE.js")).sendSvg}),swapHorizontal:()=>e(void 0,null,function*(){return(yield import("./chunk-GFHDU6DA.js")).swapHorizontalSvg}),swapHorizontalMedium:()=>e(void 0,null,function*(){return(yield import("./chunk-JXAP5GMY.js")).swapHorizontalMediumSvg}),swapHorizontalBold:()=>e(void 0,null,function*(){return(yield import("./chunk-WRYXFHTS.js")).swapHorizontalBoldSvg}),swapHorizontalRoundedBold:()=>e(void 0,null,function*(){return(yield import("./chunk-6WUSIKYW.js")).swapHorizontalRoundedBoldSvg}),swapVertical:()=>e(void 0,null,function*(){return(yield import("./chunk-M2BWXROU.js")).swapVerticalSvg}),telegram:()=>e(void 0,null,function*(){return(yield import("./chunk-QRPN3KGT.js")).telegramSvg}),threeDots:()=>e(void 0,null,function*(){return(yield import("./chunk-HGFDESZJ.js")).threeDotsSvg}),twitch:()=>e(void 0,null,function*(){return(yield import("./chunk-LV6O3WSE.js")).twitchSvg}),twitter:()=>e(void 0,null,function*(){return(yield import("./chunk-3YIAQ346.js")).xSvg}),twitterIcon:()=>e(void 0,null,function*(){return(yield import("./chunk-D5RLEMH3.js")).twitterIconSvg}),verify:()=>e(void 0,null,function*(){return(yield import("./chunk-DANAWGV3.js")).verifySvg}),verifyFilled:()=>e(void 0,null,function*(){return(yield import("./chunk-G72WBL7T.js")).verifyFilledSvg}),wallet:()=>e(void 0,null,function*(){return(yield import("./chunk-23A5KWE6.js")).walletSvg}),walletConnect:()=>e(void 0,null,function*(){return(yield import("./chunk-QGYUVY6Y.js")).walletConnectSvg}),walletConnectLightBrown:()=>e(void 0,null,function*(){return(yield import("./chunk-QGYUVY6Y.js")).walletConnectLightBrownSvg}),walletConnectBrown:()=>e(void 0,null,function*(){return(yield import("./chunk-QGYUVY6Y.js")).walletConnectBrownSvg}),walletPlaceholder:()=>e(void 0,null,function*(){return(yield import("./chunk-6PXNXDLV.js")).walletPlaceholderSvg}),warningCircle:()=>e(void 0,null,function*(){return(yield import("./chunk-63FI6JTS.js")).warningCircleSvg}),x:()=>e(void 0,null,function*(){return(yield import("./chunk-3YIAQ346.js")).xSvg}),info:()=>e(void 0,null,function*(){return(yield import("./chunk-KB3Y2OKJ.js")).infoSvg}),exclamationTriangle:()=>e(void 0,null,function*(){return(yield import("./chunk-PWKROWN7.js")).exclamationTriangleSvg}),reown:()=>e(void 0,null,function*(){return(yield import("./chunk-TKHT4HM3.js")).reownSvg})};function ct(i){return e(this,null,function*(){if(O.has(i))return O.get(i);let r=(et[i]??et.copy)();return O.set(i,r),r})}var w=class extends v{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,u`${J(ct(this.name),u`<div class="fallback"></div>`)}`}};w.styles=[y,W,tt];P([l()],w.prototype,"size",void 0);P([l()],w.prototype,"name",void 0);P([l()],w.prototype,"color",void 0);P([l()],w.prototype,"aspectRatio",void 0);w=P([S("wui-icon")],w);export{l as a,ht as b,b as c,E as d,G as e,ve as f};
