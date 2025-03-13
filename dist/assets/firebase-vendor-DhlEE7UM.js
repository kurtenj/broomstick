const gf=()=>{};var vu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},_f=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,m=i>>2,p=(i&3)<<4|u>>4;let I=(u&15)<<2|d>>6,b=d&63;l||(b=64,a||(I=64)),n.push(e[m],e[p],e[I],e[b])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(nl(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):_f(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const p=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||p==null)throw new yf;const I=i<<2|u>>4;if(n.push(I),d!==64){const b=u<<4&240|d>>2;if(n.push(b),p!==64){const C=d<<6&192|p;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(r){const t=nl(r);return rl.encodeByteArray(t,!0)},Ts=function(r){return If(r).replace(/\./g,"")},Tf=function(r){try{return rl.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=()=>Ef().__FIREBASE_DEFAULTS__,wf=()=>{if(typeof process>"u"||typeof vu>"u")return;const r=vu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Af=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Tf(r[1]);return t&&JSON.parse(t)},Po=()=>{try{return gf()||vf()||wf()||Af()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Rf=r=>{var t,e;return(e=(t=Po())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},sl=r=>{const t=Rf(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},il=()=>{var r;return(r=Po())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ts(JSON.stringify(e)),Ts(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){var r;const t=(r=Po())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function al(){return!Pf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ul(){try{return typeof indexedDB=="object"}catch{return!1}}function Vf(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="FirebaseError";class Ye extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Sf,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cl.prototype.create)}}class cl{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Cf(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ye(s,u,n)}}function Cf(r,t){return r.replace(Df,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Df=/\{\$([^}]+)}/g;function vs(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(wu(i)&&wu(a)){if(!vs(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function wu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(r){return r&&r._delegate?r._delegate:r}class gn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new bf;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nf(t))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=De){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=De){return this.instances.has(t)}getOptions(t=De){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kf(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=De){return this.component?this.component.multipleInstances?t:De:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kf(r){return r===De?void 0:r}function Nf(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new xf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Q||(Q={}));const Mf={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Ff=Q.INFO,Lf={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Bf=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Lf[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ll{constructor(t){this.name=t,this._logLevel=Ff,this._logHandler=Bf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const Uf=(r,t)=>t.some(e=>r instanceof e);let Au,Ru;function qf(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jf(){return Ru||(Ru=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hl=new WeakMap,Xi=new WeakMap,dl=new WeakMap,Ui=new WeakMap,Vo=new WeakMap;function zf(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(me(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&hl.set(e,r)}).catch(()=>{}),Vo.set(t,r),t}function Kf(r){if(Xi.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Xi.set(r,t)}let Ji={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Xi.get(r);if(t==="objectStoreNames")return r.objectStoreNames||dl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return me(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function $f(r){Ji=r(Ji)}function Gf(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(qi(this),t,...e);return dl.set(n,t.sort?t.sort():[t]),me(n)}:jf().includes(r)?function(...t){return r.apply(qi(this),t),me(hl.get(this))}:function(...t){return me(r.apply(qi(this),t))}}function Hf(r){return typeof r=="function"?Gf(r):(r instanceof IDBTransaction&&Kf(r),Uf(r,qf())?new Proxy(r,Ji):r)}function me(r){if(r instanceof IDBRequest)return zf(r);if(Ui.has(r))return Ui.get(r);const t=Hf(r);return t!==r&&(Ui.set(r,t),Vo.set(t,r)),t}const qi=r=>Vo.get(r);function Wf(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=me(a);return n&&a.addEventListener("upgradeneeded",l=>{n(me(a.result),l.oldVersion,l.newVersion,me(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Qf=["get","getKey","getAll","getAllKeys","count"],Yf=["put","add","delete","clear"],ji=new Map;function bu(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(ji.get(t))return ji.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=Yf.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Qf.includes(e)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&l.done]))[0]};return ji.set(t,i),i}$f(r=>({...r,get:(t,e,n)=>bu(t,e)||r.get(t,e,n),has:(t,e)=>!!bu(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Jf(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Jf(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zi="@firebase/app",Pu="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new ll("@firebase/app"),Zf="@firebase/app-compat",tm="@firebase/analytics-compat",em="@firebase/analytics",nm="@firebase/app-check-compat",rm="@firebase/app-check",sm="@firebase/auth",im="@firebase/auth-compat",om="@firebase/database",am="@firebase/data-connect",um="@firebase/database-compat",cm="@firebase/functions",lm="@firebase/functions-compat",hm="@firebase/installations",dm="@firebase/installations-compat",fm="@firebase/messaging",mm="@firebase/messaging-compat",pm="@firebase/performance",gm="@firebase/performance-compat",_m="@firebase/remote-config",ym="@firebase/remote-config-compat",Im="@firebase/storage",Tm="@firebase/storage-compat",Em="@firebase/firestore",vm="@firebase/vertexai",wm="@firebase/firestore-compat",Am="firebase",Rm="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="[DEFAULT]",bm={[Zi]:"fire-core",[Zf]:"fire-core-compat",[em]:"fire-analytics",[tm]:"fire-analytics-compat",[rm]:"fire-app-check",[nm]:"fire-app-check-compat",[sm]:"fire-auth",[im]:"fire-auth-compat",[om]:"fire-rtdb",[am]:"fire-data-connect",[um]:"fire-rtdb-compat",[cm]:"fire-fn",[lm]:"fire-fn-compat",[hm]:"fire-iid",[dm]:"fire-iid-compat",[fm]:"fire-fcm",[mm]:"fire-fcm-compat",[pm]:"fire-perf",[gm]:"fire-perf-compat",[_m]:"fire-rc",[ym]:"fire-rc-compat",[Im]:"fire-gcs",[Tm]:"fire-gcs-compat",[Em]:"fire-fst",[wm]:"fire-fst-compat",[vm]:"fire-vertex","fire-js":"fire-js",[Am]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map,Pm=new Map,eo=new Map;function Vu(r,t){try{r.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function mr(r){const t=r.name;if(eo.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;eo.set(t,r);for(const e of ws.values())Vu(e,r);for(const e of Pm.values())Vu(e,r);return!0}function fl(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function ml(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new cl("app","Firebase",Vm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=Rm;function Cm(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:to,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw pe.create("bad-app-name",{appName:String(s)});if(e||(e=il()),!e)throw pe.create("no-options");const i=ws.get(s);if(i){if(vs(e,i.options)&&vs(n,i.config))return i;throw pe.create("duplicate-app",{appName:s})}const a=new Of(s);for(const l of eo.values())a.addComponent(l);const u=new Sm(e,n,a);return ws.set(s,u),u}function gl(r=to){const t=ws.get(r);if(!t&&r===to&&il())return Cm();if(!t)throw pe.create("no-app",{appName:r});return t}function ge(r,t,e){var n;let s=(n=bm[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${t}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(u.join(" "));return}mr(new gn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="firebase-heartbeat-database",xm=1,pr="firebase-heartbeat-store";let zi=null;function _l(){return zi||(zi=Wf(Dm,xm,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(pr)}catch(e){console.warn(e)}}}}).catch(r=>{throw pe.create("idb-open",{originalErrorMessage:r.message})})),zi}async function km(r){try{const e=(await _l()).transaction(pr),n=await e.objectStore(pr).get(yl(r));return await e.done,n}catch(t){if(t instanceof Ye)Zt.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(e.message)}}}async function Su(r,t){try{const n=(await _l()).transaction(pr,"readwrite");await n.objectStore(pr).put(t,yl(r)),await n.done}catch(e){if(e instanceof Ye)Zt.warn(e.message);else{const n=pe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}function yl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=1024,Om=30;class Mm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lm(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Om){const a=Bm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Zt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cu(),{heartbeatsToSend:n,unsentEntries:s}=Fm(this._heartbeatsCache.heartbeats),i=Ts(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Zt.warn(e),""}}}function Cu(){return new Date().toISOString().substring(0,10)}function Fm(r,t=Nm){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Du(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Du(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Lm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ul()?Vf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await km(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Su(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Su(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Du(r){return Ts(JSON.stringify({version:2,heartbeats:r})).length}function Bm(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(r){mr(new gn("platform-logger",t=>new Xf(t),"PRIVATE")),mr(new gn("heartbeat",t=>new Mm(t),"PRIVATE")),ge(Zi,Pu,r),ge(Zi,Pu,"esm2017"),ge("fire-js","")}Um("");var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _e,Il;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,g){function y(){}y.prototype=g.prototype,T.D=g.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,v,R){for(var _=Array(arguments.length-2),Qt=2;Qt<arguments.length;Qt++)_[Qt-2]=arguments[Qt];return g.prototype[v].apply(E,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)E[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;16>v;++v)E[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=T.g[0],y=T.g[1],v=T.g[2];var R=T.g[3],_=g+(R^y&(v^R))+E[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+E[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+E[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+E[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(R^y&(v^R))+E[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+E[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+E[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+E[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(R^y&(v^R))+E[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+E[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+E[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+E[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(R^y&(v^R))+E[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+E[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+E[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+E[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(v^R&(y^v))+E[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+E[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+E[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+E[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(y^v))+E[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+E[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+E[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+E[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(y^v))+E[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+E[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+E[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+E[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(y^v))+E[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+E[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+E[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+E[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(y^v^R)+E[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+E[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+E[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+E[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^R)+E[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+E[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+E[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+E[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^R)+E[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+E[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+E[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+E[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^R)+E[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+E[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+E[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+E[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(v^(y|~R))+E[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+E[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+E[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+E[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~R))+E[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+E[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+E[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+E[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~R))+E[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+E[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+E[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+E[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~R))+E[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+E[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+E[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var y=g-this.blockSize,E=this.B,v=this.h,R=0;R<g;){if(v==0)for(;R<=y;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<g;)if(E[v++]=T.charCodeAt(R++),v==this.blockSize){s(this,E),v=0;break}}else for(;R<g;)if(E[v++]=T[R++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=g},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var y=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=y&255,y/=256;for(this.u(T),T=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)T[y++]=this.g[g]>>>E&255;return T};function i(T,g){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=g(T)}function a(T,g){this.h=g;for(var y=[],E=!0,v=T.length-1;0<=v;v--){var R=T[v]|0;E&&R==g||(y[v]=R,E=!1)}this.g=y}var u={};function l(T){return-128<=T&&128>T?i(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return S(d(-T));for(var g=[],y=1,E=0;T>=y;E++)g[E]=T/y|0,y*=4294967296;return new a(g,0)}function m(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return S(m(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),E=p,v=0;v<T.length;v+=8){var R=Math.min(8,T.length-v),_=parseInt(T.substring(v,v+R),g);8>R?(R=d(Math.pow(g,R)),E=E.j(R).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var p=l(0),I=l(1),b=l(16777216);r=a.prototype,r.m=function(){if(x(this))return-S(this).m();for(var T=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(x(this))return"-"+S(this).toString(T);for(var g=d(Math.pow(T,6)),y=this,E="";;){var v=K(y,g).g;y=j(y,v.j(g));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=v,C(y))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function x(T){return T.h==-1}r.l=function(T){return T=j(this,T),x(T)?-1:C(T)?0:1};function S(T){for(var g=T.g.length,y=[],E=0;E<g;E++)y[E]=~T.g[E];return new a(y,~T.h).add(I)}r.abs=function(){return x(this)?S(this):this},r.add=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0,v=0;v<=g;v++){var R=E+(this.i(v)&65535)+(T.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=_>>>16,R&=65535,_&=65535,y[v]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(T,g){return T.add(S(g))}r.j=function(T){if(C(this)||C(T))return p;if(x(this))return x(T)?S(this).j(S(T)):S(S(this).j(T));if(x(T))return S(this.j(S(T)));if(0>this.l(b)&&0>T.l(b))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var R=this.i(E)>>>16,_=this.i(E)&65535,Qt=T.i(v)>>>16,On=T.i(v)&65535;y[2*E+2*v]+=_*On,U(y,2*E+2*v),y[2*E+2*v+1]+=R*On,U(y,2*E+2*v+1),y[2*E+2*v+1]+=_*Qt,U(y,2*E+2*v+1),y[2*E+2*v+2]+=R*Qt,U(y,2*E+2*v+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function U(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function F(T,g){this.g=T,this.h=g}function K(T,g){if(C(g))throw Error("division by zero");if(C(T))return new F(p,p);if(x(T))return g=K(S(T),g),new F(S(g.g),S(g.h));if(x(g))return g=K(T,S(g)),new F(S(g.g),g.h);if(30<T.g.length){if(x(T)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=I,E=g;0>=E.l(T);)y=X(y),E=X(E);var v=G(y,1),R=G(E,1);for(E=G(E,2),y=G(y,2);!C(E);){var _=R.add(E);0>=_.l(T)&&(v=v.add(y),R=_),E=G(E,1),y=G(y,1)}return g=j(T,v.j(g)),new F(v,g)}for(v=p;0<=T.l(g);){for(y=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(y),_=R.j(g);x(_)||0<_.l(T);)y-=E,R=d(y),_=R.j(g);C(R)&&(R=I),v=v.add(R),T=j(T,_)}return new F(v,T)}r.A=function(T){return K(this,T).h},r.and=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},r.or=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},r.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function X(T){for(var g=T.g.length+1,y=[],E=0;E<g;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function G(T,g){var y=g>>5;g%=32;for(var E=T.g.length-y,v=[],R=0;R<E;R++)v[R]=0<g?T.i(R+y)>>>g|T.i(R+y+1)<<32-g:T.i(R+y);return new a(v,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Il=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,_e=a}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tl,rr,El,cs,no,vl,wl,Al;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof es=="object"&&es];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function p(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,I.apply(null,arguments)}function b(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,P){for(var k=Array(arguments.length-2),et=2;et<arguments.length;et++)k[et-2]=arguments[et];return c.prototype[A].apply(f,k)}}function x(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function S(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const A=o.length||0,P=f.length||0;o.length=A+P;for(let k=0;k<P;k++)o[A+k]=f[k]}else o.push(f)}}class j{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var X=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function G(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function v(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=gi;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Qt{constructor(){this.h=this.g=null}add(c,h){const f=On.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var On=new j(()=>new Nd,o=>o.reset());class Nd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Mn,Fn=!1,gi=new Qt,va=()=>{const o=u.Promise.resolve(void 0);Mn=()=>{o.then(Od)}};var Od=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var c=On;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Fn=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Md=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Ln(o,c){if(gt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(X){t:{try{K(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Fd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ln.aa.h.call(this)}}C(Ln,gt);var Fd={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),Ld=0;function Bd(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Ld,this.da=this.fa=!1}function Fr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Lr(o){this.src=o,this.g={},this.h=0}Lr.prototype.add=function(o,c,h,f,A){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=yi(o,c,f,A);return-1<k?(c=o[k],h||(c.fa=!1)):(c=new Bd(c,this.src,P,!!f,A),c.fa=h,o.push(c)),c};function _i(o,c){var h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=A)&&Array.prototype.splice.call(f,A,1),P&&(Fr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function yi(o,c,h,f){for(var A=0;A<o.length;++A){var P=o[A];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==f)return A}return-1}var Ii="closure_lm_"+(1e6*Math.random()|0),Ti={};function wa(o,c,h,f,A){if(Array.isArray(c)){for(var P=0;P<c.length;P++)wa(o,c[P],h,f,A);return null}return h=ba(h),o&&o[Mr]?o.K(c,h,d(f)?!!f.capture:!1,A):Ud(o,c,h,!1,f,A)}function Ud(o,c,h,f,A,P){if(!c)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,et=vi(o);if(et||(o[Ii]=et=new Lr(o)),h=et.add(c,h,f,k,P),h.proxy)return h;if(f=qd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Md||(A=k),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(Ra(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function qd(){function o(h){return c.call(o.src,o.listener,h)}const c=jd;return o}function Aa(o,c,h,f,A){if(Array.isArray(c))for(var P=0;P<c.length;P++)Aa(o,c[P],h,f,A);else f=d(f)?!!f.capture:!!f,h=ba(h),o&&o[Mr]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=yi(P,h,f,A),-1<h&&(Fr(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=vi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=yi(c,h,f,A)),(h=-1<o?c[o]:null)&&Ei(h))}function Ei(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Mr])_i(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Ra(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=vi(c))?(_i(h,o),h.h==0&&(h.src=null,c[Ii]=null)):Fr(o)}}}function Ra(o){return o in Ti?Ti[o]:Ti[o]="on"+o}function jd(o,c){if(o.da)o=!0;else{c=new Ln(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ei(o),o=h.call(f,c)}return o}function vi(o){return o=o[Ii],o instanceof Lr?o:null}var wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ba(o){return typeof o=="function"?o:(o[wi]||(o[wi]=function(c){return o.handleEvent(c)}),o[wi])}function _t(){ie.call(this),this.i=new Lr(this),this.M=this,this.F=null}C(_t,ie),_t.prototype[Mr]=!0,_t.prototype.removeEventListener=function(o,c,h,f){Aa(this,o,c,h,f)};function At(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new gt(c,o);else if(c instanceof gt)c.target=c.target||o;else{var A=c;c=new gt(f,o),E(c,A)}if(A=!0,h)for(var P=h.length-1;0<=P;P--){var k=c.g=h[P];A=Br(k,f,!0,c)&&A}if(k=c.g=o,A=Br(k,f,!0,c)&&A,A=Br(k,f,!1,c)&&A,h)for(P=0;P<h.length;P++)k=c.g=h[P],A=Br(k,f,!1,c)&&A}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Fr(h[f]);delete o.g[c],o.h--}}this.F=null},_t.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},_t.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Br(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,P=0;P<c.length;++P){var k=c[P];if(k&&!k.da&&k.capture==h){var et=k.listener,ft=k.ha||k.src;k.fa&&_i(o.i,k),A=et.call(ft,f)!==!1&&A}}return A&&!f.defaultPrevented}function Pa(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Va(o){o.g=Pa(()=>{o.g=null,o.i&&(o.i=!1,Va(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class zd extends ie{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Va(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bn(o){ie.call(this),this.h=o,this.g={}}C(Bn,ie);var Sa=[];function Ca(o){G(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ei(c)},o),o.g={}}Bn.prototype.N=function(){Bn.aa.N.call(this),Ca(this)},Bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ai=u.JSON.stringify,Kd=u.JSON.parse,$d=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ri(){}Ri.prototype.h=null;function Da(o){return o.h||(o.h=o.i())}function xa(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bi(){gt.call(this,"d")}C(bi,gt);function Pi(){gt.call(this,"c")}C(Pi,gt);var be={},ka=null;function Ur(){return ka=ka||new _t}be.La="serverreachability";function Na(o){gt.call(this,be.La,o)}C(Na,gt);function qn(o){const c=Ur();At(c,new Na(c))}be.STAT_EVENT="statevent";function Oa(o,c){gt.call(this,be.STAT_EVENT,o),this.stat=c}C(Oa,gt);function Rt(o){const c=Ur();At(c,new Oa(c,o))}be.Ma="timingevent";function Ma(o,c){gt.call(this,be.Ma,o),this.size=c}C(Ma,gt);function jn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function Gd(o,c,h,f,A,P){o.info(function(){if(o.g)if(P)for(var k="",et=P.split("&"),ft=0;ft<et.length;ft++){var Y=et[ft].split("=");if(1<Y.length){var yt=Y[0];Y=Y[1];var It=yt.split("_");k=2<=It.length&&It[1]=="type"?k+(yt+"="+Y+"&"):k+(yt+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+k})}function Hd(o,c,h,f,A,P,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+P+" "+k})}function Ze(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Qd(o,h)+(f?" "+f:"")})}function Wd(o,c){o.info(function(){return"TIMEOUT: "+c})}zn.prototype.info=function(){};function Qd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Ai(h)}catch{return c}}var qr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vi;function jr(){}C(jr,Ri),jr.prototype.g=function(){return new XMLHttpRequest},jr.prototype.i=function(){return{}},Vi=new jr;function oe(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Bn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new La}function La(){this.i=null,this.g="",this.h=!1}var Ba={},Si={};function Ci(o,c,h){o.L=1,o.v=Gr(Yt(c)),o.m=h,o.P=!0,Ua(o,null)}function Ua(o,c){o.F=Date.now(),zr(o),o.A=Yt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),tu(h.i,"t",f),o.C=0,h=o.j.J,o.h=new La,o.g=yu(o.j,h?c:null,!o.m),0<o.O&&(o.M=new zd(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Sa[0]=A.toString()),A=Sa);for(var P=0;P<A.length;P++){var k=wa(h,A[P],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),qn(),Gd(o.i,o.u,o.A,o.l,o.R,o.m)}oe.prototype.ca=function(o){o=o.target;const c=this.M;c&&Xt(o)==3?c.j():this.Y(o)},oe.prototype.Y=function(o){try{if(o==this.g)t:{const It=Xt(this.g);var c=this.g.Ba();const nn=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||au(this.g)))){this.J||It!=4||c==7||(c==8||0>=nn?qn(3):qn(2)),Di(this);var h=this.g.Z();this.X=h;e:if(qa(this)){var f=au(this.g);o="";var A=f.length,P=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),Kn(this);var k="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(P&&c==A-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Hd(this.i,this.u,this.A,this.l,this.R,It,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,ft=this.g;if((et=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(et)){var Y=et;break e}}Y=null}if(h=Y)Ze(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xi(this,h);else{this.o=!1,this.s=3,Rt(12),Pe(this),Kn(this);break t}}if(this.P){h=!0;let Lt;for(;!this.J&&this.C<k.length;)if(Lt=Yd(this,k),Lt==Si){It==4&&(this.s=4,Rt(14),h=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Ba){this.s=4,Rt(15),Ze(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Ze(this.i,this.l,Lt,null),xi(this,Lt);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||k.length!=0||this.h.h||(this.s=1,Rt(16),h=!1),this.o=this.o&&h,!h)Ze(this.i,this.l,k,"[Invalid Chunked Response]"),Pe(this),Kn(this);else if(0<k.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Li(yt),yt.M=!0,Rt(11))}}else Ze(this.i,this.l,k,null),xi(this,k);It==4&&Pe(this),this.o&&!this.J&&(It==4?mu(this.j,this):(this.o=!1,zr(this)))}else mf(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Pe(this),Kn(this)}}}catch{}finally{}};function qa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Yd(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Si:(h=Number(c.substring(h,f)),isNaN(h)?Ba:(f+=1,f+h>c.length?Si:(c=c.slice(f,f+h),o.C=f+h,c)))}oe.prototype.cancel=function(){this.J=!0,Pe(this)};function zr(o){o.S=Date.now()+o.I,ja(o,o.I)}function ja(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=jn(I(o.ba,o),c)}function Di(o){o.B&&(u.clearTimeout(o.B),o.B=null)}oe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Wd(this.i,this.A),this.L!=2&&(qn(),Rt(17)),Pe(this),this.s=2,Kn(this)):ja(this,this.S-o)};function Kn(o){o.j.G==0||o.J||mu(o.j,o)}function Pe(o){Di(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ca(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function xi(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ki(h.h,o))){if(!o.K&&ki(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Jr(h),Yr(h);else break t;Fi(h),Rt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=jn(I(h.Za,h),6e3));if(1>=$a(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Se(h,11)}else if((o.K||h.g==o)&&Jr(h),!U(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let Y=A[c];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const yt=Y[3];yt!=null&&(h.la=yt,h.j.info("VER="+h.la));const It=Y[4];It!=null&&(h.Aa=It,h.j.info("SVER="+h.Aa));const nn=Y[5];nn!=null&&typeof nn=="number"&&0<nn&&(f=1.5*nn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Lt=o.g;if(Lt){const ts=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var P=f.h;P.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ni(P,P.h),P.h=null))}if(f.D){const Bi=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Bi&&(f.ya=Bi,nt(f.I,f.D,Bi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=_u(f,f.J?f.ia:null,f.W),k.K){Ga(f.h,k);var et=k,ft=f.L;ft&&(et.I=ft),et.B&&(Di(et),zr(et)),f.g=k}else du(f);0<h.i.length&&Xr(h)}else Y[0]!="stop"&&Y[0]!="close"||Se(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Se(h,7):Mi(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}qn(4)}catch{}}var Xd=class{constructor(o,c){this.g=o,this.map=c}};function za(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ka(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function $a(o){return o.h?1:o.g?o.g.size:0}function ki(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ni(o,c){o.g?o.g.add(c):o.h=c}function Ga(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}za.prototype.cancel=function(){if(this.i=Ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ha(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return x(o.i)}function Jd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Zd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function Wa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Zd(o),f=Jd(o),A=f.length,P=0;P<A;P++)c.call(void 0,f[P],h&&h[P],o)}var Qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var P=o[h].substring(0,f);A=o[h].substring(f+1)}else P=o[h];c(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ve(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ve){this.h=o.h,Kr(this,o.j),this.o=o.o,this.g=o.g,$r(this,o.s),this.l=o.l;var c=o.i,h=new Hn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Ya(this,h),this.m=o.m}else o&&(c=String(o).match(Qa))?(this.h=!1,Kr(this,c[1]||"",!0),this.o=$n(c[2]||""),this.g=$n(c[3]||"",!0),$r(this,c[4]),this.l=$n(c[5]||"",!0),Ya(this,c[6]||"",!0),this.m=$n(c[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}Ve.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Gn(c,Xa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Gn(c,Xa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Gn(h,h.charAt(0)=="/"?rf:nf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Gn(h,of)),o.join("")};function Yt(o){return new Ve(o)}function Kr(o,c,h){o.j=h?$n(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function $r(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ya(o,c,h){c instanceof Hn?(o.i=c,af(o.i,o.h)):(h||(c=Gn(c,sf)),o.i=new Hn(c,o.h))}function nt(o,c,h){o.i.set(c,h)}function Gr(o){return nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $n(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,ef),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ef(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xa=/[#\/\?@]/g,nf=/[#\?:]/g,rf=/[#\?]/g,sf=/[#\?@]/g,of=/#/g;function Hn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ae(o){o.g||(o.g=new Map,o.h=0,o.i&&tf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Hn.prototype,r.add=function(o,c){ae(this),this.i=null,o=tn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Ja(o,c){ae(o),c=tn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Za(o,c){return ae(o),c=tn(o,c),o.g.has(c)}r.forEach=function(o,c){ae(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)},r.na=function(){ae(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=o[f];for(let P=0;P<A.length;P++)h.push(c[f])}return h},r.V=function(o){ae(this);let c=[];if(typeof o=="string")Za(this,o)&&(c=c.concat(this.g.get(tn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return ae(this),this.i=null,o=tn(this,o),Za(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function tu(o,c,h){Ja(o,c),0<h.length&&(o.i=null,o.g.set(tn(o,c),x(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const P=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=P;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),o.push(A)}}return this.i=o.join("&")};function tn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function af(o,c){c&&!o.j&&(ae(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(Ja(this,f),tu(this,A,h))},o)),o.j=c}function uf(o,c){const h=new zn;if(u.Image){const f=new Image;f.onload=b(ue,h,"TestLoadImage: loaded",!0,c,f),f.onerror=b(ue,h,"TestLoadImage: error",!1,c,f),f.onabort=b(ue,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(ue,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function cf(o,c){const h=new zn,f=new AbortController,A=setTimeout(()=>{f.abort(),ue(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?ue(h,"TestPingServer: ok",!0,c):ue(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ue(h,"TestPingServer: error",!1,c)})}function ue(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function lf(){this.g=new $d}function hf(o,c,h){const f=h||"";try{Wa(o,function(A,P){let k=A;d(A)&&(k=Ai(A)),c.push(f+P+"="+encodeURIComponent(k))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function Hr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Hr,Ri),Hr.prototype.g=function(){return new Wr(this.l,this.j)},Hr.prototype.i=function(o){return function(){return o}}({});function Wr(o,c){_t.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Wr,_t),r=Wr.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Qn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;eu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function eu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Wn(this):Qn(this),this.readyState==3&&eu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Wn(this))},r.Qa=function(o){this.g&&(this.response=o,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Qn(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Qn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nu(o){let c="";return G(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Oi(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=nu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):nt(o,c,h))}function at(o){_t.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(at,_t);var df=/^https?$/i,ff=["POST","PUT"];r=at.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vi.g(),this.v=this.o?Da(this.o):Da(Vi),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){ru(this,P);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ff,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of h)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ou(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){ru(this,P)}};function ru(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,su(o),Qr(o)}function su(o){o.A||(o.A=!0,At(o,"complete"),At(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,At(this,"complete"),At(this,"abort"),Qr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qr(this,!0)),at.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?iu(this):this.bb())},r.bb=function(){iu(this)};function iu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xt(o)!=4||o.Z()!=2)){if(o.u&&Xt(o)==4)Pa(o.Ea,0,o);else if(At(o,"readystatechange"),Xt(o)==4){o.h=!1;try{const k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var A=String(o.D).match(Qa)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!df.test(A?A.toLowerCase():"")}h=f}if(h)At(o,"complete"),At(o,"success");else{o.m=6;try{var P=2<Xt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",su(o)}}finally{Qr(o)}}}}function Qr(o,c){if(o.g){ou(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||At(o,"ready");try{h.onreadystatechange=f}catch{}}}function ou(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Xt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Kd(c)}};function au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mf(o){const c={};o=(o.g&&2<=Xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(U(o[f]))continue;var h=v(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[A]||[];c[A]=P,P.push(h)}T(c,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function uu(o){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,o),this.cb=Yn("retryDelaySeedMs",1e4,o),this.Wa=Yn("forwardChannelMaxRetries",2,o),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new za(o&&o.concurrentRequestLimit),this.Da=new lf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=uu.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,f){Rt(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=_u(this,null,this.W),Xr(this)};function Mi(o){if(cu(o),o.G==3){var c=o.U++,h=Yt(o.I);if(nt(h,"SID",o.K),nt(h,"RID",c),nt(h,"TYPE","terminate"),Xn(o,h),c=new oe(o,o.j,c),c.L=2,c.v=Gr(Yt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=yu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),zr(c)}gu(o)}function Yr(o){o.g&&(Li(o),o.g.cancel(),o.g=null)}function cu(o){Yr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Jr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Xr(o){if(!Ka(o.h)&&!o.s){o.s=!0;var c=o.Ga;Mn||va(),Fn||(Mn(),Fn=!0),gi.add(c,o),o.B=0}}function pf(o,c){return $a(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=jn(I(o.Ga,o,c),pu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new oe(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=hu(this,A,c),h=Yt(this.I),nt(h,"RID",o),nt(h,"CVER",22),this.D&&nt(h,"X-HTTP-Session-Id",this.D),Xn(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(nu(P)))+"&"+c:this.m&&Oi(h,this.m,P)),Ni(this.h,A),this.Ua&&nt(h,"TYPE","init"),this.P?(nt(h,"$req",c),nt(h,"SID","null"),A.T=!0,Ci(A,h,null)):Ci(A,h,c),this.G=2}}else this.G==3&&(o?lu(this,o):this.i.length==0||Ka(this.h)||lu(this))};function lu(o,c){var h;c?h=c.l:h=o.U++;const f=Yt(o.I);nt(f,"SID",o.K),nt(f,"RID",h),nt(f,"AID",o.T),Xn(o,f),o.m&&o.o&&Oi(f,o.m,o.o),h=new oe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=hu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ni(o.h,h),Ci(h,f,c)}function Xn(o,c){o.H&&G(o.H,function(h,f){nt(c,f,h)}),o.l&&Wa({},function(h,f){nt(c,f,h)})}function hu(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;t:{var A=o.i;let P=-1;for(;;){const k=["count="+h];P==-1?0<h?(P=A[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let et=!0;for(let ft=0;ft<h;ft++){let Y=A[ft].g;const yt=A[ft].map;if(Y-=P,0>Y)P=Math.max(0,A[ft].g-100),et=!1;else try{hf(yt,k,"req"+Y+"_")}catch{f&&f(yt)}}if(et){f=k.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,f}function du(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Mn||va(),Fn||(Mn(),Fn=!0),gi.add(c,o),o.v=0}}function Fi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=jn(I(o.Fa,o),pu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=jn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Yr(this),fu(this))};function Li(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function fu(o){o.g=new oe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Yt(o.qa);nt(c,"RID","rpc"),nt(c,"SID",o.K),nt(c,"AID",o.T),nt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&nt(c,"TO",o.ja),nt(c,"TYPE","xmlhttp"),Xn(o,c),o.m&&o.o&&Oi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Gr(Yt(c)),h.m=null,h.P=!0,Ua(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Yr(this),Fi(this),Rt(19))};function Jr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function mu(o,c){var h=null;if(o.g==c){Jr(o),Li(o),o.g=null;var f=2}else if(ki(o.h,c))h=c.D,Ga(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;f=Ur(),At(f,new Ma(f,h)),Xr(o)}else du(o);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&pf(o,c)||f==2&&Fi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Se(o,5);break;case 4:Se(o,10);break;case 3:Se(o,6);break;default:Se(o,2)}}}function pu(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Se(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const A=!f;f=new Ve(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Kr(f,"https"),Gr(f),A?uf(f.toString(),h):cf(f.toString(),h)}else Rt(2);o.G=0,o.l&&o.l.sa(c),gu(o),cu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function gu(o){if(o.G=0,o.ka=[],o.l){const c=Ha(o.h);(c.length!=0||o.i.length!=0)&&(S(o.ka,c),S(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function _u(o,c,h){var f=h instanceof Ve?Yt(h):new Ve(h);if(f.g!="")c&&(f.g=c+"."+f.g),$r(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var P=new Ve(null);f&&Kr(P,f),c&&(P.g=c),A&&$r(P,A),h&&(P.l=h),f=P}return h=o.D,c=o.ya,h&&c&&nt(f,h,c),nt(f,"VER",o.la),Xn(o,f),f}function yu(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new at(new Hr({eb:h})):new at(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}r=Iu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Zr(){}Zr.prototype.g=function(o,c){return new xt(o,c)};function xt(o,c){_t.call(this),this.g=new uu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!U(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new en(this)}C(xt,_t),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Mi(this.g)},xt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ai(o),o=h);c.i.push(new Xd(c.Ya++,o)),c.G==3&&Xr(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,Mi(this.g),delete this.g,xt.aa.N.call(this)};function Tu(o){bi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Tu,bi);function Eu(){Pi.call(this),this.status=1}C(Eu,Pi);function en(o){this.g=o}C(en,Iu),en.prototype.ua=function(){At(this.g,"a")},en.prototype.ta=function(o){At(this.g,new Tu(o))},en.prototype.sa=function(o){At(this.g,new Eu)},en.prototype.ra=function(){At(this.g,"b")},Zr.prototype.createWebChannel=Zr.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Al=function(){return new Zr},wl=function(){return Ur()},vl=be,no={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,cs=qr,Fa.COMPLETE="complete",El=Fa,xa.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",_t.prototype.listen=_t.prototype.K,rr=xa,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,Tl=at}).apply(typeof es<"u"?es:typeof self<"u"?self:typeof window<"u"?window:{});const ku="@firebase/firestore",Nu="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new ll("@firebase/firestore");function ln(){return je.logLevel}function D(r,...t){if(je.logLevel<=Q.DEBUG){const e=t.map(So);je.debug(`Firestore (${xn}): ${r}`,...e)}}function bt(r,...t){if(je.logLevel<=Q.ERROR){const e=t.map(So);je.error(`Firestore (${xn}): ${r}`,...e)}}function ze(r,...t){if(je.logLevel<=Q.WARN){const e=t.map(So);je.warn(`Firestore (${xn}): ${r}`,...e)}}function So(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+r;throw bt(t),new Error(t)}function L(r,t){r||M()}function q(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class jm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class zm{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Rl(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new mt(t)}}class Km{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class $m{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Km(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ou{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gm{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ml(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){L(this.o===void 0);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ou(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string"),this.R=e.token,new Ou(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Hm(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function _n(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function Pl(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=-62135596800,Fu=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Fu);return new ot(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Mu)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fu}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Mu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(t){return new B(t)}static min(){return new B(new ot(0,0))}static max(){return new B(new ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="__name__";class qt{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return qt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=qt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return Math.sign(t.length-e.length)}static compareSegments(t,e){const n=qt.isNumericId(t),s=qt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?qt.extractNumericId(t).compare(qt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return _e.fromString(t.substring(4,t.length-2))}}class J extends qt{construct(t,e,n){return new J(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new O(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const Wm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends qt{construct(t,e,n){return new it(t,e,n)}static isValidIdentifier(t){return Wm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lu}static keyField(){return new it([Lu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new O(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new O(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new O(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(J.fromString(t))}static fromName(t){return new N(J.fromString(t).popFirst(5))}static empty(){return new N(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new J(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=-1;class As{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function ro(r){return r.fields.find(t=>t.kind===2)}function xe(r){return r.fields.filter(t=>t.kind!==2)}As.UNKNOWN_ID=-1;class ls{constructor(t,e){this.fieldPath=t,this.kind=e}}class _r{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new _r(0,Ot.min())}}function Qm(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ot(e+1,0):new ot(e,n));return new Ot(s,N.empty(),t)}function Vl(r){return new Ot(r.readTime,r.key,gr)}class Ot{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ot(B.min(),N.empty(),gr)}static max(){return new Ot(B.max(),N.empty(),gr)}}function Co(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Sl)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):w.reject(e)}static resolve(t){return new w((e,n)=>{e(t)})}static reject(t){return new w((e,n)=>{n(t)})}static waitFor(t){return new w((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next(s=>s?w.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new w((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(m=>{a[d]=m,++u,u===i&&n(a)},m=>s(m))}})}static doWhile(t,e){return new w((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="SimpleDb";class Gs{static open(t,e,n,s){try{return new Gs(e,t.transaction(s,n))}catch(i){throw new ur(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.m=new Kt,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{e.error?this.m.reject(new ur(t,e.error)):this.m.resolve()},this.transaction.onerror=n=>{const s=Do(n.target.error);this.m.reject(new ur(t,s))}}get p(){return this.m.promise}abort(t){t&&this.m.reject(t),this.aborted||(D(kt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Xm(e)}}class ye{static delete(t){return D(kt,"Removing database:",t),Ne(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!ul())return!1;if(ye.v())return!0;const t=Es(),e=ye.C(t),n=0<e&&e<10,s=Dl(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static C(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.O=n,ye.C(Es())===12.2&&bt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(t){return this.db||(D(kt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new ur(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new O(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new O(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new ur(t,a))},s.onupgradeneeded=i=>{D(kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.O.B(a,s.transaction,i.oldVersion,this.version).next(()=>{D(kt,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.N(t);const u=Gs.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.S(),d)).catch(d=>(u.abort(d),w.reject(d))).toPromise();return l.catch(()=>{}),await u.p,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(D(kt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Dl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Ym{constructor(t){this.q=t,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(t){this.q=t}done(){this.$=!0}W(t){this.K=t}delete(){return Ne(this.q.delete())}}class ur extends O{constructor(t,e){super(V.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ae(r){return r.name==="IndexedDbTransactionError"}class Xm{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(D(kt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(D(kt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ne(n)}add(t){return D(kt,"ADD",this.store.name,t,t),Ne(this.store.add(t))}get(t){return Ne(this.store.get(t)).next(e=>(e===void 0&&(e=null),D(kt,"GET",this.store.name,t,e),e))}delete(t){return D(kt,"DELETE",this.store.name,t),Ne(this.store.delete(t))}count(){return D(kt,"COUNT",this.store.name),Ne(this.store.count())}G(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.j(i,(u,l)=>{a.push(l)}).next(()=>a)}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}J(t,e){D(kt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Y=!1;const s=this.cursor(n);return this.j(s,(i,a,u)=>u.delete())}Z(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.j(s,e)}X(t){const e=this.cursor({});return new w((n,s)=>{e.onerror=i=>{const a=Do(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}j(t,e){const n=[];return new w((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Ym(u),d=e(u.primaryKey,u.value,l);if(d instanceof w){const m=d.catch(p=>(l.done(),w.reject(p)));n.push(m)}l.isDone?s():l.U===null?u.continue():u.continue(l.U)}}).next(()=>w.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Y?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ne(r){return new w((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=Do(n.target.error);e(s)}})}let Bu=!1;function Do(r){const t=ye.C(Es());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Bu||(Bu=!0,setTimeout(()=>{throw n},0)),n}}return r}const cr="IndexBackfiller";class Jm{constructor(t,e){this.asyncQueue=t,this.ee=e,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(t){D(cr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.ee.ne();D(cr,`Documents written: ${e}`)}catch(e){Ae(e)?D(cr,"Ignoring IndexedDB error during index backfill: ",e):await Xe(e)}await this.te(6e4)})}}class Zm{constructor(t,e){this.localStore=t,this.persistence=e}async ne(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.re(e,t))}re(t,e){const n=new Set;let s=e,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return D(cr,`Processing collection: ${a}`),this.ie(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}ie(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.se(s,i)).next(u=>(D(cr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}se(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Vl(i);Co(a,n)>0&&(n=a)}),new Ot(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Mt.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=-1;function Hs(r){return r==null}function yr(r){return r===0&&1/r==-1/0}function tp(r){return typeof r=="number"&&Number.isInteger(r)&&!yr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="";function wt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Uu(t)),t=ep(r.get(e),t);return Uu(t)}function ep(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Rs:e+="";break;default:e+=i}}return e}function Uu(r){return r+Rs+""}function jt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===Rs&&r.charAt(1)===""),J.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Rs,i);switch((a<0||a>e)&&M(),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:M()}i=a+2}return new J(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="remoteDocuments",Pr="owner",rn="owner",Ir="mutationQueues",np="userId",Bt="mutations",qu="batchId",Le="userMutationsIndex",ju=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(r,t){return[r,wt(t)]}function xl(r,t,e){return[r,wt(t),e]}const rp={},yn="documentMutations",bs="remoteDocumentsV14",sp=["prefixPath","collectionGroup","readTime","documentId"],ds="documentKeyIndex",ip=["prefixPath","collectionGroup","documentId"],kl="collectionGroupIndex",op=["collectionGroup","readTime","prefixPath","documentId"],Tr="remoteDocumentGlobal",so="remoteDocumentGlobalKey",In="targets",Nl="queryTargetsIndex",ap=["canonicalId","targetId"],Tn="targetDocuments",up=["targetId","path"],xo="documentTargetsIndex",cp=["path","targetId"],Ps="targetGlobalKey",Ue="targetGlobal",Er="collectionParents",lp=["collectionId","parent"],En="clientMetadata",hp="clientId",Ws="bundles",dp="bundleId",Qs="namedQueries",fp="name",ko="indexConfiguration",mp="indexId",io="collectionGroupIndex",pp="collectionGroup",Vs="indexState",gp=["indexId","uid"],Ol="sequenceNumberIndex",_p=["uid","sequenceNumber"],Ss="indexEntries",yp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ml="documentKeyIndex",Ip=["indexId","uid","orderedDocumentKey"],Ys="documentOverlays",Tp=["userId","collectionPath","documentId"],oo="collectionPathOverlayIndex",Ep=["userId","collectionPath","largestBatchId"],Fl="collectionGroupOverlayIndex",vp=["userId","collectionGroup","largestBatchId"],No="globals",wp="name",Ll=[Ir,Bt,yn,ke,In,Pr,Ue,Tn,En,Tr,Er,Ws,Qs],Ap=[...Ll,Ys],Bl=[Ir,Bt,yn,bs,In,Pr,Ue,Tn,En,Tr,Er,Ws,Qs,Ys],Ul=Bl,Oo=[...Ul,ko,Vs,Ss],Rp=Oo,bp=[...Oo,No];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Cl{constructor(t,e){super(),this.ue=t,this.currentSequenceNumber=e}}function ht(r,t){const e=q(r);return ye.M(e.ue,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Re(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function ql(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ns(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ns(this.root,t,this.comparator,!1)}getReverseIterator(){return new ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ns(this.root,t,this.comparator,!0)}}class ns{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new pt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ku(this.data.getIterator())}getIteratorFrom(t){return new Ku(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Z(this.comparator);return e.data=t,e}}class Ku{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function sn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new Z(it.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _n(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jl("Invalid base64 string: "+i):i}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Pp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(r){if(L(!!r),typeof r=="string"){let t=0;const e=Pp.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ee(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="server_timestamp",Kl="__type__",$l="__previous_value__",Gl="__local_write_time__";function Mo(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Kl])===null||e===void 0?void 0:e.stringValue)===zl}function Xs(r){const t=r.mapValue.fields[$l];return Mo(t)?Xs(t):t}function vr(r){const t=te(r.mapValue.fields[Gl].timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e,n,s,i,a,u,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}const Cs="(default)";class Ke{constructor(t,e){this.projectId=t,this.database=e||Cs}static empty(){return new Ke("","")}get isDefaultDatabase(){return this.database===Cs}isEqual(t){return t instanceof Ke&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="__type__",Hl="__max__",fe={mapValue:{fields:{__type__:{stringValue:Hl}}}},Lo="__vector__",vn="value",fs={nullValue:"NULL_VALUE"};function Te(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Mo(r)?4:Wl(r)?9007199254740991:Js(r)?10:11:M()}function Gt(r,t){if(r===t)return!0;const e=Te(r);if(e!==Te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return vr(r).isEqual(vr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=te(s.timestampValue),u=te(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ee(s.bytesValue).isEqual(ee(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=rt(s.doubleValue),u=rt(i.doubleValue);return a===u?yr(a)===yr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return _n(r.arrayValue.values||[],t.arrayValue.values||[],Gt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(zu(a)!==zu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Gt(a[l],u[l])))return!1;return!0}(r,t);default:return M()}}function wr(r,t){return(r.values||[]).find(e=>Gt(e,t))!==void 0}function Ee(r,t){if(r===t)return 0;const e=Te(r),n=Te(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=rt(i.integerValue||i.doubleValue),l=rt(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return $u(r.timestampValue,t.timestampValue);case 4:return $u(vr(r),vr(t));case 5:return z(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ee(i),l=ee(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=z(u[d],l[d]);if(m!==0)return m}return z(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=z(rt(i.latitude),rt(a.latitude));return u!==0?u:z(rt(i.longitude),rt(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Gu(r.arrayValue,t.arrayValue);case 10:return function(i,a){var u,l,d,m;const p=i.fields||{},I=a.fields||{},b=(u=p[vn])===null||u===void 0?void 0:u.arrayValue,C=(l=I[vn])===null||l===void 0?void 0:l.arrayValue,x=z(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:Gu(b,C)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===fe.mapValue&&a===fe.mapValue)return 0;if(i===fe.mapValue)return 1;if(a===fe.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let p=0;p<l.length&&p<m.length;++p){const I=z(l[p],m[p]);if(I!==0)return I;const b=Ee(u[l[p]],d[m[p]]);if(b!==0)return b}return z(l.length,m.length)}(r.mapValue,t.mapValue);default:throw M()}}function $u(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=te(r),n=te(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function Gu(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=Ee(e[s],n[s]);if(i)return i}return z(e.length,n.length)}function wn(r){return uo(r)}function uo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=te(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ee(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return N.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=uo(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${uo(e.fields[a])}`;return s+"}"}(r.mapValue):M()}function ms(r){switch(Te(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Xs(r);return t?16+ms(t):16;case 5:return 2*r.stringValue.length;case 6:return ee(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+ms(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Re(n.fields,(i,a)=>{s+=i.length+ms(a)}),s}(r.mapValue);default:throw M()}}function Bo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function co(r){return!!r&&"integerValue"in r}function Ar(r){return!!r&&"arrayValue"in r}function Hu(r){return!!r&&"nullValue"in r}function Wu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ps(r){return!!r&&"mapValue"in r}function Js(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Fo])===null||e===void 0?void 0:e.stringValue)===Lo}function lr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Re(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=lr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=lr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Wl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Hl}const Ql={mapValue:{fields:{[Fo]:{stringValue:Lo},[vn]:{arrayValue:{}}}}};function Sp(r){return"nullValue"in r?fs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Bo(Ke.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Js(r)?Ql:{mapValue:{}}:M()}function Cp(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Bo(Ke.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Ql:"mapValue"in r?Js(r)?{mapValue:{}}:fe:M()}function Qu(r,t){const e=Ee(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Yu(r,t){const e=Ee(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ps(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=lr(e)}setAll(t){let e=it.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=lr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());ps(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Re(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new vt(lr(this.value))}}function Yl(r){const t=[];return Re(r.fields,(e,n)=>{const s=new it([e]);if(ps(n)){const i=Yl(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ut(t,0,B.min(),B.min(),B.min(),vt.empty(),0)}static newFoundDocument(t,e,n,s){return new ut(t,1,e,B.min(),n,s,0)}static newNoDocument(t,e){return new ut(t,2,e,B.min(),B.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,B.min(),B.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e){this.position=t,this.inclusive=e}}function Xu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),e.key):n=Ee(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ju(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Gt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e="asc"){this.field=t,this.dir=e}}function Dp(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{}class H extends Xl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new xp(t,e,n):e==="array-contains"?new Op(t,n):e==="in"?new rh(t,n):e==="not-in"?new Mp(t,n):e==="array-contains-any"?new Fp(t,n):new H(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new kp(t,n):new Np(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ee(e,this.value)):e!==null&&Te(this.value)===Te(e)&&this.matchesComparison(Ee(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends Xl{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new tt(t,e)}matches(t){return Rn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Rn(r){return r.op==="and"}function lo(r){return r.op==="or"}function Uo(r){return Jl(r)&&Rn(r)}function Jl(r){for(const t of r.filters)if(t instanceof tt)return!1;return!0}function ho(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+wn(r.value);if(Uo(r))return r.filters.map(t=>ho(t)).join(",");{const t=r.filters.map(e=>ho(e)).join(",");return`${r.op}(${t})`}}function Zl(r,t){return r instanceof H?function(n,s){return s instanceof H&&n.op===s.op&&n.field.isEqual(s.field)&&Gt(n.value,s.value)}(r,t):r instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&Zl(a,s.filters[u]),!0):!1}(r,t):void M()}function th(r,t){const e=r.filters.concat(t);return tt.create(e,r.op)}function eh(r){return r instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${wn(e.value)}`}(r):r instanceof tt?function(e){return e.op.toString()+" {"+e.getFilters().map(eh).join(" ,")+"}"}(r):"Filter"}class xp extends H{constructor(t,e,n){super(t,e,n),this.key=N.fromName(n.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class kp extends H{constructor(t,e){super(t,"in",e),this.keys=nh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Np extends H{constructor(t,e){super(t,"not-in",e),this.keys=nh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function nh(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>N.fromName(n.referenceValue))}class Op extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ar(e)&&wr(e.arrayValue,this.value)}}class rh extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wr(this.value.arrayValue,e)}}class Mp extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!wr(this.value.arrayValue,e)}}class Fp extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ar(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>wr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.le=null}}function fo(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Lp(r,t,e,n,s,i,a)}function $e(r){const t=q(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ho(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Hs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>wn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>wn(n)).join(",")),t.le=e}return t.le}function Vr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Dp(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Zl(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ju(r.startAt,t.startAt)&&Ju(r.endAt,t.endAt)}function xs(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ks(r,t){return r.filters.filter(e=>e instanceof H&&e.field.isEqual(t))}function Zu(r,t,e){let n=fs,s=!0;for(const i of ks(r,t)){let a=fs,u=!0;switch(i.op){case"<":case"<=":a=Sp(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=fs}Qu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Qu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function tc(r,t,e){let n=fe,s=!0;for(const i of ks(r,t)){let a=fe,u=!0;switch(i.op){case">=":case">":a=Cp(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=fe}Yu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Yu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Bp(r,t,e,n,s,i,a,u){return new Zs(r,t,e,n,s,i,a,u)}function Sr(r){return new Zs(r)}function ec(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Up(r){return r.collectionGroup!==null}function hr(r){const t=q(r);if(t.he===null){t.he=[];const e=new Set;for(const i of t.explicitOrderBy)t.he.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Z(it.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.he.push(new Ds(i,n))}),e.has(it.keyField().canonicalString())||t.he.push(new Ds(it.keyField(),n))}return t.he}function Ft(r){const t=q(r);return t.Pe||(t.Pe=qp(t,hr(r))),t.Pe}function qp(r,t){if(r.limitType==="F")return fo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ds(s.field,i)});const e=r.endAt?new An(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new An(r.startAt.position,r.startAt.inclusive):null;return fo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function mo(r,t,e){return new Zs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ti(r,t){return Vr(Ft(r),Ft(t))&&r.limitType===t.limitType}function sh(r){return`${$e(Ft(r))}|lt:${r.limitType}`}function hn(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>eh(s)).join(", ")}]`),Hs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wn(s)).join(",")),`Target(${n})`}(Ft(r))}; limitType=${r.limitType})`}function Cr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):N.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of hr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=Xu(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,hr(n),s)||n.endAt&&!function(a,u,l){const d=Xu(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,hr(n),s))}(r,t)}function jp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ih(r){return(t,e)=>{let n=!1;for(const s of hr(r)){const i=zp(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function zp(r,t,e){const n=r.field.isKeyField()?N.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?Ee(l,d):M()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return ql(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new st(N.comparator);function Nt(){return Kp}const oh=new st(N.comparator);function sr(...r){let t=oh;for(const e of r)t=t.insert(e.key,e);return t}function ah(r){let t=oh;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function zt(){return dr()}function uh(){return dr()}function dr(){return new re(r=>r.toString(),(r,t)=>r.isEqual(t))}const $p=new st(N.comparator),Gp=new Z(N.comparator);function $(...r){let t=Gp;for(const e of r)t=t.add(e);return t}const Hp=new Z(z);function Wp(){return Hp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(t)?"-0":t}}function ch(r){return{integerValue:""+r}}function Qp(r,t){return tp(t)?ch(t):qo(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this._=void 0}}function Yp(r,t,e){return r instanceof bn?function(s,i){const a={fields:{[Kl]:{stringValue:zl},[Gl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mo(i)&&(i=Xs(i)),i&&(a.fields[$l]=i),{mapValue:a}}(e,t):r instanceof Pn?hh(r,t):r instanceof Vn?dh(r,t):function(s,i){const a=lh(s,i),u=nc(a)+nc(s.Ie);return co(a)&&co(s.Ie)?ch(u):qo(s.serializer,u)}(r,t)}function Xp(r,t,e){return r instanceof Pn?hh(r,t):r instanceof Vn?dh(r,t):e}function lh(r,t){return r instanceof Rr?function(n){return co(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class bn extends ei{}class Pn extends ei{constructor(t){super(),this.elements=t}}function hh(r,t){const e=fh(t);for(const n of r.elements)e.some(s=>Gt(s,n))||e.push(n);return{arrayValue:{values:e}}}class Vn extends ei{constructor(t){super(),this.elements=t}}function dh(r,t){let e=fh(t);for(const n of r.elements)e=e.filter(s=>!Gt(s,n));return{arrayValue:{values:e}}}class Rr extends ei{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function nc(r){return rt(r.integerValue||r.doubleValue)}function fh(r){return Ar(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e){this.field=t,this.transform=e}}function Jp(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Pn&&s instanceof Pn||n instanceof Vn&&s instanceof Vn?_n(n.elements,s.elements,Gt):n instanceof Rr&&s instanceof Rr?Gt(n.Ie,s.Ie):n instanceof bn&&s instanceof bn}(r.transform,t.transform)}class Zp{constructor(t,e){this.version=t,this.transformResults=e}}class Pt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ni{}function ph(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ri(r.key,Pt.none()):new kn(r.key,r.data,Pt.none());{const e=r.data,n=vt.empty();let s=new Z(it.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new se(r.key,n,new Ct(s.toArray()),Pt.none())}}function tg(r,t,e){r instanceof kn?function(s,i,a){const u=s.value.clone(),l=sc(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof se?function(s,i,a){if(!gs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=sc(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(gh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function fr(r,t,e,n){return r instanceof kn?function(i,a,u,l){if(!gs(i.precondition,a))return u;const d=i.value.clone(),m=ic(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(i,a,u,l){if(!gs(i.precondition,a))return u;const d=ic(i.fieldTransforms,l,a),m=a.data;return m.setAll(gh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,t,e,n):function(i,a,u){return gs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function eg(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=lh(n.transform,s||null);i!=null&&(e===null&&(e=vt.empty()),e.set(n.field,i))}return e||null}function rc(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&_n(n,s,(i,a)=>Jp(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class kn extends ni{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends ni{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function sc(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Xp(a,u,e[s]))}return n}function ic(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Yp(i,a,t))}return n}class ri extends ni{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _h extends ni{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&tg(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=uh();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=ph(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&_n(this.mutations,t.mutations,(e,n)=>rc(e,n))&&_n(this.baseMutations,t.baseMutations,(e,n)=>rc(e,n))}}class zo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=function(){return $p}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new zo(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,W;function rg(r){switch(r){case V.OK:return M();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return M()}}function yh(r){if(r===void 0)return bt("GRPC error has no .code"),V.UNKNOWN;switch(r){case ct.OK:return V.OK;case ct.CANCELLED:return V.CANCELLED;case ct.UNKNOWN:return V.UNKNOWN;case ct.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ct.INTERNAL:return V.INTERNAL;case ct.UNAVAILABLE:return V.UNAVAILABLE;case ct.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ct.NOT_FOUND:return V.NOT_FOUND;case ct.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ct.ABORTED:return V.ABORTED;case ct.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ct.DATA_LOSS:return V.DATA_LOSS;default:return M()}}(W=ct||(ct={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new _e([4294967295,4294967295],0);function oc(r){const t=sg().encode(r),e=new Il;return e.update(t),new Uint8Array(e.digest())}function ac(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new _e([e,n],0),new _e([s,i],0)]}class $o{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ir(`Invalid padding: ${e}`);if(n<0)throw new ir(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ir(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ir(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=_e.fromNumber(this.Ee)}Ae(t,e,n){let s=t.add(e.multiply(_e.fromNumber(n)));return s.compare(ig)===1&&(s=new _e([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=oc(t),[n,s]=ac(e);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);if(!this.Re(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new $o(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ee===0)return;const e=oc(t),[n,s]=ac(e);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Dr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new si(B.min(),s,new st(z),Nt(),$())}}class Dr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Dr(n,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e,n,s){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=s}}class Ih{constructor(t,e){this.targetId=t,this.ge=e}}class Th{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class uc{constructor(){this.pe=0,this.ye=cc(),this.we=lt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=$(),e=$(),n=$();return this.ye.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M()}}),new Dr(this.we,this.be,t,e,n)}Me(){this.Se=!1,this.ye=cc()}xe(t,e){this.Se=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,L(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class og{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Nt(),this.$e=rs(),this.Ke=rs(),this.Ue=new st(z)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,n=t.ge.count,s=this.Xe(e);if(s){const i=s.target;if(xs(i))if(n===0){const a=new N(i.path);this.ze(e,a,ut.newNoDocument(a,B.min()))}else L(n===1);else{const a=this.et(e);if(a!==n){const u=this.tt(t),l=u?this.nt(u,t,a):1;if(l!==0){this.Ye(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ee(n).toUint8Array()}catch(l){if(l instanceof jl)return ze("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new $o(a,s,i)}catch(l){return ze(l instanceof ir?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ee===0?null:u}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,i,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((i,a)=>{const u=this.Xe(a);if(u){if(i.current&&xs(u.target)){const l=new N(u.target.path);this._t(l).has(a)||this.ut(a,l)||this.ze(a,l,ut.newNoDocument(l,t))}i.ve&&(e.set(a,i.Fe()),i.Me())}});let n=$();this.Ke.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.Xe(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(t));const s=new si(t,e,this.Ue,this.Qe,n);return this.Qe=Nt(),this.$e=rs(),this.Ke=rs(),this.Ue=new st(z),s}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ke=this.Ke.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ke=this.Ke.insert(e,this.ct(e).delete(t)),this.Ke=this.Ke.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new uc,this.qe.set(t,e)),e}ct(t){let e=this.Ke.get(t);return e||(e=new Z(z),this.Ke=this.Ke.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new Z(z),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new uc),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function rs(){return new st(N.comparator)}function cc(){return new st(N.comparator)}const ag={asc:"ASCENDING",desc:"DESCENDING"},ug={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cg={and:"AND",or:"OR"};class lg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function po(r,t){return r.useProto3Json||Hs(t)?t:{value:t}}function Sn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function hg(r,t){return Sn(r,t.toTimestamp())}function Vt(r){return L(!!r),B.fromTimestamp(function(e){const n=te(e);return new ot(n.seconds,n.nanos)}(r))}function Go(r,t){return go(r,t).canonicalString()}function go(r,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function vh(r){const t=J.fromString(r);return L(Dh(t)),t}function Ns(r,t){return Go(r.databaseId,t.path)}function qe(r,t){const e=vh(t);if(e.get(1)!==r.databaseId.projectId)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new O(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new N(Rh(e))}function wh(r,t){return Go(r.databaseId,t)}function Ah(r){const t=vh(r);return t.length===4?J.emptyPath():Rh(t)}function _o(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Rh(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function lc(r,t,e){return{name:Ns(r,t),fields:e.value.mapValue.fields}}function dg(r,t,e){const n=qe(r,t.name),s=Vt(t.updateTime),i=t.createTime?Vt(t.createTime):B.min(),a=new vt({mapValue:{fields:t.fields}}),u=ut.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function fg(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string"),lt.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array),lt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?V.UNKNOWN:yh(d.code);return new O(m,d.message||"")}(a);e=new Th(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=qe(r,n.document.name),i=Vt(n.document.updateTime),a=n.document.createTime?Vt(n.document.createTime):B.min(),u=new vt({mapValue:{fields:n.document.fields}}),l=ut.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new _s(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=qe(r,n.document),i=n.readTime?Vt(n.readTime):B.min(),a=ut.newNoDocument(s,i),u=n.removedTargetIds||[];e=new _s([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=qe(r,n.document),i=n.removedTargetIds||[];e=new _s([],i,s,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new ng(s,i),u=n.targetId;e=new Ih(u,a)}}return e}function Os(r,t){let e;if(t instanceof kn)e={update:lc(r,t.key,t.value)};else if(t instanceof ri)e={delete:Ns(r,t.key)};else if(t instanceof se)e={update:lc(r,t.key,t.data),updateMask:Ig(t.fieldMask)};else{if(!(t instanceof _h))return M();e={verify:Ns(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof bn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Pn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw M()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(r,t.precondition)),e}function yo(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?Pt.updateTime(Vt(i.updateTime)):i.exists!==void 0?Pt.exists(i.exists):Pt.none()}(t.currentDocument):Pt.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),l=new bn;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new Pn(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new Vn(m)}else"increment"in u?l=new Rr(a,u.increment):M();const d=it.fromServerFormat(u.fieldPath);return new mh(d,l)}(r,s)):[];if(t.update){t.update.name;const s=qe(r,t.update.name),i=new vt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Ct(d.map(m=>it.fromServerFormat(m)))}(t.updateMask);return new se(s,i,a,e,n)}return new kn(s,i,e,n)}if(t.delete){const s=qe(r,t.delete);return new ri(s,e)}if(t.verify){const s=qe(r,t.verify);return new _h(s,e)}return M()}function mg(r,t){return r&&r.length>0?(L(t!==void 0),r.map(e=>function(s,i){let a=s.updateTime?Vt(s.updateTime):Vt(i);return a.isEqual(B.min())&&(a=Vt(i)),new Zp(a,s.transformResults||[])}(e,t))):[]}function bh(r,t){return{documents:[wh(r,t.path)]}}function Ph(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=wh(r,s);const i=function(d){if(d.length!==0)return Ch(tt.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:dn(I.field),direction:gg(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=po(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:s}}function Vh(r){let t=Ah(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=function(p){const I=Sh(p);return I instanceof tt&&Uo(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(I=>function(C){return new Ds(fn(C.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(e.orderBy));let u=null;e.limit&&(u=function(p){let I;return I=typeof p=="object"?p.value:p,Hs(I)?null:I}(e.limit));let l=null;e.startAt&&(l=function(p){const I=!!p.before,b=p.values||[];return new An(b,I)}(e.startAt));let d=null;return e.endAt&&(d=function(p){const I=!p.before,b=p.values||[];return new An(b,I)}(e.endAt)),Bp(t,s,a,i,u,"F",l,d)}function pg(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sh(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fn(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=fn(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fn(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=fn(e.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return H.create(fn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return tt.create(e.compositeFilter.filters.map(n=>Sh(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function gg(r){return ag[r]}function _g(r){return ug[r]}function yg(r){return cg[r]}function dn(r){return{fieldPath:r.canonicalString()}}function fn(r){return it.fromServerFormat(r.fieldPath)}function Ch(r){return r instanceof H?function(e){if(e.op==="=="){if(Wu(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NAN"}};if(Hu(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wu(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NAN"}};if(Hu(e.value))return{unaryFilter:{field:dn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dn(e.field),op:_g(e.op),value:e.value}}}(r):r instanceof tt?function(e){const n=e.getFilters().map(s=>Ch(s));return n.length===1?n[0]:{compositeFilter:{op:yg(e.op),filters:n}}}(r):M()}function Ig(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Dh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,n,s,i=B.min(),a=B.min(),u=lt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.Tt=t}}function Tg(r,t){let e;if(t.document)e=dg(r.Tt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=N.fromSegments(t.noDocument.path),s=He(t.noDocument.readTime);e=ut.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return M();{const n=N.fromSegments(t.unknownDocument.path),s=He(t.unknownDocument.version);e=ut.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new ot(s[0],s[1]);return B.fromTimestamp(i)}(t.readTime)),e}function hc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Ms(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Ns(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Sn(i,a.version.toTimestamp()),createTime:Sn(i,a.createTime.toTimestamp())}}(r.Tt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Ge(t.version)};else{if(!t.isUnknownDocument())return M();n.unknownDocument={path:e.path.toArray(),version:Ge(t.version)}}return n}function Ms(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Ge(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function He(r){const t=new ot(r.seconds,r.nanoseconds);return B.fromTimestamp(t)}function Oe(r,t){const e=(t.baseMutations||[]).map(i=>yo(r.Tt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>yo(r.Tt,i)),s=ot.fromMillis(t.localWriteTimeMs);return new jo(t.batchId,s,e,n)}function or(r){const t=He(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?He(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return L(i.documents.length===1),Ft(Sr(Ah(i.documents[0])))}(r.query):function(i){return Ft(Vh(i))}(r.query),new Jt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function kh(r,t){const e=Ge(t.snapshotVersion),n=Ge(t.lastLimboFreeSnapshotVersion);let s;s=xs(t.target)?bh(r.Tt,t.target):Ph(r.Tt,t.target).ht;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:$e(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Nh(r){const t=Vh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?mo(t,t.limit,"L"):t}function Ki(r,t){return new Ko(t.largestBatchId,yo(r.Tt,t.overlayMutation))}function dc(r,t){const e=t.path.lastSegment();return[r,wt(t.path.popLast()),e]}function fc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Ge(n.readTime),documentKey:wt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{getBundleMetadata(t,e){return mc(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:He(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return mc(t).put(function(s){return{bundleId:s.id,createTime:Ge(Vt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return pc(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Nh(i.bundledQuery),readTime:He(i.readTime)}}(n)})}saveNamedQuery(t,e){return pc(t).put(function(s){return{name:s.name,readTime:Ge(Vt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function mc(r){return ht(r,Ws)}function pc(r){return ht(r,Qs)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e){this.serializer=t,this.userId=e}static It(t,e){const n=e.uid||"";return new ii(t,n)}getOverlay(t,e){return Jn(t).get(dc(this.userId,e)).next(n=>n?Ki(this.serializer,n):null)}getOverlays(t,e){const n=zt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new Ko(e,a);s.push(this.Et(t,u))}),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(wt(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Jn(t).J(oo,u))}),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=zt(),i=wt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Jn(t).G(oo,a).next(u=>{for(const l of u){const d=Ki(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=zt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Jn(t).Z({index:Fl,range:u},(l,d,m)=>{const p=Ki(this.serializer,d);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):m.done()}).next(()=>i)}Et(t,e){return Jn(t).put(function(s,i,a){const[u,l,d]=dc(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Os(s.Tt,a.mutation)}}(this.serializer,this.userId,e))}}function Jn(r){return ht(r,Ys)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{dt(t){return ht(t,No)}getSessionToken(t){return this.dt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.dt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(){}At(t,e){this.Rt(t,e),e.Vt()}Rt(t,e){if("nullValue"in t)this.ft(e,5);else if("booleanValue"in t)this.ft(e,10),e.gt(t.booleanValue?1:0);else if("integerValue"in t)this.ft(e,15),e.gt(rt(t.integerValue));else if("doubleValue"in t){const n=rt(t.doubleValue);isNaN(n)?this.ft(e,13):(this.ft(e,15),yr(n)?e.gt(0):e.gt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ft(e,20),typeof n=="string"&&(n=te(n)),e.yt(`${n.seconds||""}`),e.gt(n.nanos||0)}else if("stringValue"in t)this.wt(t.stringValue,e),this.bt(e);else if("bytesValue"in t)this.ft(e,30),e.St(ee(t.bytesValue)),this.bt(e);else if("referenceValue"in t)this.Dt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ft(e,45),e.gt(n.latitude||0),e.gt(n.longitude||0)}else"mapValue"in t?Wl(t)?this.ft(e,Number.MAX_SAFE_INTEGER):Js(t)?this.vt(t.mapValue,e):(this.Ct(t.mapValue,e),this.bt(e)):"arrayValue"in t?(this.Ft(t.arrayValue,e),this.bt(e)):M()}wt(t,e){this.ft(e,25),this.Mt(t,e)}Mt(t,e){e.yt(t)}Ct(t,e){const n=t.fields||{};this.ft(e,55);for(const s of Object.keys(n))this.wt(s,e),this.Rt(n[s],e)}vt(t,e){var n,s;const i=t.fields||{};this.ft(e,53);const a=vn,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.ft(e,15),e.gt(rt(u)),this.wt(a,e),this.Rt(i[a],e)}Ft(t,e){const n=t.values||[];this.ft(e,50);for(const s of n)this.Rt(s,e)}Dt(t,e){this.ft(e,37),N.fromName(t).path.forEach(n=>{this.ft(e,60),this.Mt(n,e)})}ft(t,e){t.gt(e)}bt(t){t.gt(2)}}Me.xt=new Me;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=255;function wg(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function gc(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=wg(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class Ag{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Nt(n.value),n=e.next();this.Bt()}Lt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.kt(n.value),n=e.next();this.qt()}Qt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Nt(n);else if(n<2048)this.Nt(960|n>>>6),this.Nt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Nt(480|n>>>12),this.Nt(128|63&n>>>6),this.Nt(128|63&n);else{const s=e.codePointAt(0);this.Nt(240|s>>>18),this.Nt(128|63&s>>>12),this.Nt(128|63&s>>>6),this.Nt(128|63&s)}}this.Bt()}$t(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.kt(n);else if(n<2048)this.kt(960|n>>>6),this.kt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.kt(480|n>>>12),this.kt(128|63&n>>>6),this.kt(128|63&n);else{const s=e.codePointAt(0);this.kt(240|s>>>18),this.kt(128|63&s>>>12),this.kt(128|63&s>>>6),this.kt(128|63&s)}}this.qt()}Kt(t){const e=this.Ut(t),n=gc(e);this.Wt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}Gt(t){const e=this.Ut(t),n=gc(e);this.Wt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}zt(){this.jt(on),this.jt(255)}Ht(){this.Jt(on),this.Jt(255)}reset(){this.position=0}seed(t){this.Wt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Yt(){return this.buffer.slice(0,this.position)}Ut(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Nt(t){const e=255&t;e===0?(this.jt(0),this.jt(255)):e===on?(this.jt(on),this.jt(0)):this.jt(e)}kt(t){const e=255&t;e===0?(this.Jt(0),this.Jt(255)):e===on?(this.Jt(on),this.Jt(0)):this.Jt(t)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(t){this.Wt(1),this.buffer[this.position++]=t}Jt(t){this.Wt(1),this.buffer[this.position++]=~t}Wt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Rg{constructor(t){this.Zt=t}St(t){this.Zt.Ot(t)}yt(t){this.Zt.Qt(t)}gt(t){this.Zt.Kt(t)}Vt(){this.Zt.zt()}}class bg{constructor(t){this.Zt=t}St(t){this.Zt.Lt(t)}yt(t){this.Zt.$t(t)}gt(t){this.Zt.Gt(t)}Vt(){this.Zt.Ht()}}class Zn{constructor(){this.Zt=new Ag,this.Xt=new Rg(this.Zt),this.en=new bg(this.Zt)}seed(t){this.Zt.seed(t)}tn(t){return t===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}nn(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Fe(this.indexId,this.documentKey,this.arrayValue,n)}}function ce(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=_c(r.arrayValue,t.arrayValue),e!==0?e:(e=_c(r.directionalValue,t.directionalValue),e!==0?e:N.comparator(r.documentKey,t.documentKey)))}function _c(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.rn=new Z((e,n)=>it.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.sn=t.orderBy,this._n=[];for(const e of t.filters){const n=e;n.isInequality()?this.rn=this.rn.add(n):this._n.push(n)}}get an(){return this.rn.size>1}un(t){if(L(t.collectionGroup===this.collectionId),this.an)return!1;const e=ro(t);if(e!==void 0&&!this.cn(e))return!1;const n=xe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.cn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.rn.size>0){const u=this.rn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.ln(u,l)||!this.hn(this.sn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.sn.length||!this.hn(this.sn[a++],u))return!1}return!0}Pn(){if(this.an)return null;let t=new Z(it.comparator);const e=[];for(const n of this._n)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ls(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ls(n.field,0))}for(const n of this.sn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ls(n.field,n.dir==="asc"?0:1)));return new As(As.UNKNOWN_ID,this.collectionId,e,_r.empty())}cn(t){for(const e of this._n)if(this.ln(e,t))return!0;return!1}ln(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}hn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(r){var t,e;if(L(r instanceof H||r instanceof tt),r instanceof H){if(r instanceof rh){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>H.create(r.field,"==",i)))||[];return tt.create(s,"or")}return r}const n=r.filters.map(s=>Oh(s));return tt.create(n,r.op)}function Pg(r){if(r.getFilters().length===0)return[];const t=Eo(Oh(r));return L(Mh(t)),Io(t)||To(t)?[t]:t.getFilters()}function Io(r){return r instanceof H}function To(r){return r instanceof tt&&Uo(r)}function Mh(r){return Io(r)||To(r)||function(e){if(e instanceof tt&&lo(e)){for(const n of e.getFilters())if(!Io(n)&&!To(n))return!1;return!0}return!1}(r)}function Eo(r){if(L(r instanceof H||r instanceof tt),r instanceof H)return r;if(r.filters.length===1)return Eo(r.filters[0]);const t=r.filters.map(n=>Eo(n));let e=tt.create(t,r.op);return e=Fs(e),Mh(e)?e:(L(e instanceof tt),L(Rn(e)),L(e.filters.length>1),e.filters.reduce((n,s)=>Ho(n,s)))}function Ho(r,t){let e;return L(r instanceof H||r instanceof tt),L(t instanceof H||t instanceof tt),e=r instanceof H?t instanceof H?function(s,i){return tt.create([s,i],"and")}(r,t):Ic(r,t):t instanceof H?Ic(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0),Rn(s)&&Rn(i))return th(s,i.getFilters());const a=lo(s)?s:i,u=lo(s)?i:s,l=a.filters.map(d=>Ho(d,u));return tt.create(l,"or")}(r,t),Fs(e)}function Ic(r,t){if(Rn(t))return th(t,r.getFilters());{const e=t.filters.map(n=>Ho(r,n));return tt.create(e,"or")}}function Fs(r){if(L(r instanceof H||r instanceof tt),r instanceof H)return r;const t=r.getFilters();if(t.length===1)return Fs(t[0]);if(Jl(r))return r;const e=t.map(s=>Fs(s)),n=[];return e.forEach(s=>{s instanceof H?n.push(s):s instanceof tt&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:tt.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.Tn=new Wo}addToCollectionParentIndex(t,e){return this.Tn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Ot.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class Wo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Z(J.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Z(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="IndexedDbIndexManager",ss=new Uint8Array(0);class Sg{constructor(t,e){this.databaseId=e,this.In=new Wo,this.En=new re(n=>$e(n),(n,s)=>Vr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.In.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.In.add(e)});const i={collectionId:n,parent:wt(s)};return Ec(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Pl(e),""],!1,!0);return Ec(t).G(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(jt(a.parent))}return n})}addFieldIndex(t,e){const n=tr(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=un(t);return i.next(u=>{a.put(fc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=tr(t),s=un(t),i=an(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=tr(t),n=an(t),s=un(t);return e.J().next(()=>n.J()).next(()=>s.J())}createTargetIndexes(t,e){return w.forEach(this.dn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new yc(n).Pn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=an(t);let s=!0;const i=new Map;return w.forEach(this.dn(e),a=>this.An(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=$();const u=[];return w.forEach(i,(l,d)=>{D(Tc,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(K=>`${K.fieldPath}:${K.kind}`).join(",")}`}(l)} to execute ${$e(e)}`);const m=function(F,K){const X=ro(K);if(X===void 0)return null;for(const G of ks(F,X.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(d,l),p=function(F,K){const X=new Map;for(const G of xe(K))for(const T of ks(F,G.fieldPath))switch(T.op){case"==":case"in":X.set(G.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return X.set(G.fieldPath.canonicalString(),T.value),Array.from(X.values())}return null}(d,l),I=function(F,K){const X=[];let G=!0;for(const T of xe(K)){const g=T.kind===0?Zu(F,T.fieldPath,F.startAt):tc(F,T.fieldPath,F.startAt);X.push(g.value),G&&(G=g.inclusive)}return new An(X,G)}(d,l),b=function(F,K){const X=[];let G=!0;for(const T of xe(K)){const g=T.kind===0?tc(F,T.fieldPath,F.endAt):Zu(F,T.fieldPath,F.endAt);X.push(g.value),G&&(G=g.inclusive)}return new An(X,G)}(d,l),C=this.Rn(l,d,I),x=this.Rn(l,d,b),S=this.Vn(l,d,p),j=this.mn(l.indexId,m,C,I.inclusive,x,b.inclusive,S);return w.forEach(j,U=>n.H(U,e.limit).next(F=>{F.forEach(K=>{const X=N.fromSegments(K.documentKey);a.has(X)||(a=a.add(X),u.push(X))})}))}).next(()=>u)}return w.resolve(null)})}dn(t){let e=this.En.get(t);return e||(t.filters.length===0?e=[t]:e=Pg(tt.create(t.filters,"and")).map(n=>fo(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.En.set(t,e),e)}mn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let p=0;p<l;++p){const I=e?this.fn(e[p/d]):ss,b=this.gn(t,I,n[p%d],s),C=this.pn(t,I,i[p%d],a),x=u.map(S=>this.gn(t,I,S,!0));m.push(...this.createRange(b,C,x))}return m}gn(t,e,n,s){const i=new Fe(t,N.empty(),e,n);return s?i:i.nn()}pn(t,e,n,s){const i=new Fe(t,N.empty(),e,n);return s?i.nn():i}An(t,e){const n=new yc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.un(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.dn(e);return w.forEach(s,i=>this.An(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new Z(it.comparator),m=!1;for(const p of l.filters)for(const I of p.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?m=!0:d=d.add(I.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}yn(t,e){const n=new Zn;for(const s of xe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.tn(s.kind);Me.xt.At(i,a)}return n.Yt()}fn(t){const e=new Zn;return Me.xt.At(t,e.tn(0)),e.Yt()}wn(t,e){const n=new Zn;return Me.xt.At(Bo(this.databaseId,e),n.tn(function(i){const a=xe(i);return a.length===0?0:a[a.length-1].kind}(t))),n.Yt()}Vn(t,e,n){if(n===null)return[];let s=[];s.push(new Zn);let i=0;for(const a of xe(t)){const u=n[i++];for(const l of s)if(this.bn(e,a.fieldPath)&&Ar(u))s=this.Sn(s,a,u);else{const d=l.tn(a.kind);Me.xt.At(u,d)}}return this.Dn(s)}Rn(t,e,n){return this.Vn(t,e,n.position)}Dn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Yt();return e}Sn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new Zn;l.seed(u.Yt()),Me.xt.At(a,l.tn(e.kind)),i.push(l)}return i}bn(t,e){return!!t.filters.find(n=>n instanceof H&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=tr(t),s=un(t);return(e?n.G(io,IDBKeyRange.bound(e,e)):n.G()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(m,p){const I=p?new _r(p.sequenceNumber,new Ot(He(p.readTime),new N(jt(p.documentKey)),p.largestBatchId)):_r.empty(),b=m.fields.map(([C,x])=>new ls(it.fromServerFormat(C),x));return new As(m.indexId,m.collectionGroup,b,I)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=tr(t),i=un(t);return this.vn(t).next(a=>s.G(io,IDBKeyRange.bound(e,e)).next(u=>w.forEach(u,l=>i.put(fc(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,l=>this.Cn(t,s,l).next(d=>{const m=this.Fn(i,l);return d.isEqual(m)?w.resolve():this.Mn(t,i,l,d,m)}))))})}xn(t,e,n,s){return an(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.wn(n,e.key),documentKey:e.key.path.toArray()})}On(t,e,n,s){return an(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.wn(n,e.key),e.key.path.toArray()])}Cn(t,e,n){const s=an(t);let i=new Z(ce);return s.Z({index:Ml,range:IDBKeyRange.only([n.indexId,this.uid,this.wn(n,e)])},(a,u)=>{i=i.add(new Fe(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>i)}Fn(t,e){let n=new Z(ce);const s=this.yn(e,t);if(s==null)return n;const i=ro(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Ar(a))for(const u of a.arrayValue.values||[])n=n.add(new Fe(e.indexId,t.key,this.fn(u),s))}else n=n.add(new Fe(e.indexId,t.key,ss,s));return n}Mn(t,e,n,s,i){D(Tc,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,m,p,I){const b=l.getIterator(),C=d.getIterator();let x=sn(b),S=sn(C);for(;x||S;){let j=!1,U=!1;if(x&&S){const F=m(x,S);F<0?U=!0:F>0&&(j=!0)}else x!=null?U=!0:j=!0;j?(p(S),S=sn(C)):U?(I(x),x=sn(b)):(x=sn(b),S=sn(C))}}(s,i,ce,u=>{a.push(this.xn(t,e,n,u))},u=>{a.push(this.On(t,e,n,u))}),w.waitFor(a)}vn(t){let e=1;return un(t).Z({index:Ol,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>ce(a,u)).filter((a,u,l)=>!u||ce(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=ce(a,t),l=ce(a,e);if(u===0)s[0]=t.nn();else if(u>0&&l<0)s.push(a),s.push(a.nn());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Nn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,ss,[]],l=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,ss,[]];i.push(IDBKeyRange.bound(u,l))}return i}Nn(t,e){return ce(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(vc)}getMinOffset(t,e){return w.mapArray(this.dn(e),n=>this.An(t,n).next(s=>s||M())).next(vc)}}function Ec(r){return ht(r,Er)}function an(r){return ht(r,Ss)}function tr(r){return ht(r,ko)}function un(r){return ht(r,Vs)}function vc(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Co(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ot(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fh=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(r,t,e){const n=r.store(Bt),s=r.store(yn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.Z({range:a},(m,p,I)=>(u++,I.delete()));i.push(l.next(()=>{L(u===1)}));const d=[];for(const m of e.mutations){const p=xl(t,m.key.path,e.batchId);i.push(s.delete(p)),d.push(m.key)}return w.waitFor(i).next(()=>d)}function Ls(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw M();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Fh,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class oi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Bn={}}static It(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new oi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return le(t).Z({index:Le,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=mn(t),a=le(t);return a.add({}).next(u=>{L(typeof u=="number");const l=new jo(u,e,n,s),d=function(b,C,x){const S=x.baseMutations.map(U=>Os(b.Tt,U)),j=x.mutations.map(U=>Os(b.Tt,U));return{userId:C,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:S,mutations:j}}(this.serializer,this.userId,l),m=[];let p=new Z((I,b)=>z(I.canonicalString(),b.canonicalString()));for(const I of s){const b=xl(this.userId,I.key.path,u);p=p.add(I.key.path.popLast()),m.push(a.put(d)),m.push(i.put(b,rp))}return p.forEach(I=>{m.push(this.indexManager.addToCollectionParentIndex(t,I))}),t.addOnCommittedListener(()=>{this.Bn[u]=l.keys()}),w.waitFor(m).next(()=>l)})}lookupMutationBatch(t,e){return le(t).get(e).next(n=>n?(L(n.userId===this.userId),Oe(this.serializer,n)):null)}Ln(t,e){return this.Bn[e]?w.resolve(this.Bn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Bn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return le(t).Z({index:Le,range:s},(a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n),i=Oe(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Be;return le(t).Z({index:Le,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Be],[this.userId,Number.POSITIVE_INFINITY]);return le(t).G(Le,e).next(n=>n.map(s=>Oe(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=hs(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return mn(t).Z({range:s},(a,u,l)=>{const[d,m,p]=a,I=jt(m);if(d===this.userId&&e.path.isEqual(I))return le(t).get(p).next(b=>{if(!b)throw M();L(b.userId===this.userId),i.push(Oe(this.serializer,b))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(z);const s=[];return e.forEach(i=>{const a=hs(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=mn(t).Z({range:u},(d,m,p)=>{const[I,b,C]=d,x=jt(b);I===this.userId&&i.path.isEqual(x)?n=n.add(C):p.done()});s.push(l)}),w.waitFor(s).next(()=>this.kn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=hs(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new Z(z);return mn(t).Z({range:a},(l,d,m)=>{const[p,I,b]=l,C=jt(I);p===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(b)):m.done()}).next(()=>this.kn(t,u))}kn(t,e){const n=[],s=[];return e.forEach(i=>{s.push(le(t).get(i).next(a=>{if(a===null)throw M();L(a.userId===this.userId),n.push(Oe(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Lh(t.ue,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.qn(e.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}qn(t){delete this.Bn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return mn(t).Z({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=jt(i[1]);s.push(l)}else u.done()}).next(()=>{L(s.length===0)})})}containsKey(t,e){return Bh(t,this.userId,e)}Qn(t){return Uh(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Be,lastStreamToken:""})}}function Bh(r,t,e){const n=hs(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return mn(r).Z({range:i,Y:!0},(u,l,d)=>{const[m,p,I]=u;m===t&&p===s&&(a=!0),d.done()}).next(()=>a)}function le(r){return ht(r,Bt)}function mn(r){return ht(r,yn)}function Uh(r){return ht(r,Ir)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new We(0)}static Un(){return new We(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Wn(t).next(e=>{const n=new We(e.highestTargetId);return e.highestTargetId=n.next(),this.Gn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Wn(t).next(e=>B.fromTimestamp(new ot(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Wn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.Wn(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Gn(t,s)))}addTargetData(t,e){return this.zn(t,e).next(()=>this.Wn(t).next(n=>(n.targetCount+=1,this.jn(e,n),this.Gn(t,n))))}updateTargetData(t,e){return this.zn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>cn(t).delete(e.targetId)).next(()=>this.Wn(t)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.Gn(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return cn(t).Z((a,u)=>{const l=or(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(t,e){return cn(t).Z((n,s)=>{const i=or(s);e(i)})}Wn(t){return Ac(t).get(Ps).next(e=>(L(e!==null),e))}Gn(t,e){return Ac(t).put(Ps,e)}zn(t,e){return cn(t).put(kh(this.serializer,e))}jn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Wn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=$e(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return cn(t).Z({range:s,index:Nl},(a,u,l)=>{const d=or(u);Vr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=de(t);return e.forEach(a=>{const u=wt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=de(t);return w.forEach(e,i=>{const a=wt(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=de(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=de(t);let i=$();return s.Z({range:n,Y:!0},(a,u,l)=>{const d=jt(a[1]),m=new N(d);i=i.add(m)}).next(()=>i)}containsKey(t,e){const n=wt(e.path),s=IDBKeyRange.bound([n],[Pl(n)],!1,!0);let i=0;return de(t).Z({index:xo,Y:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}lt(t,e){return cn(t).get(e).next(n=>n?or(n):null)}}function cn(r){return ht(r,In)}function Ac(r){return ht(r,Ue)}function de(r){return ht(r,Tn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="LruGarbageCollector",Dg=1048576;function bc([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class xg{constructor(t){this.Hn=t,this.buffer=new Z(bc),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();bc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){D(Rc,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ae(e)?D(Rc,"Ignoring IndexedDB error during garbage collection: ",e):await Xe(e)}await this.er(3e5)})}}class kg{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Mt.ae);const n=new xg(e);return this.tr.forEachTarget(t,s=>n.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>n.Zn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(wc)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wc):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(n=p,u=Date.now(),this.removeTargets(t,n,e))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(p=>(d=Date.now(),ln()<=Q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function jh(r,t){return new kg(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,e){this.db=t,this.garbageCollector=jh(this,e)}nr(t){const e=this.sr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}rr(t,e){return this._r(t,(n,s)=>e(s))}addReference(t,e,n){return is(t,n)}removeReference(t,e,n){return is(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return is(t,e)}ar(t,e){return function(s,i){let a=!1;return Uh(s).X(u=>Bh(s,u,i).next(l=>(l&&(a=!0),w.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this._r(t,(a,u)=>{if(u<=e){const l=this.ar(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,B.min()),de(t).delete(function(p){return[0,wt(p.path)]}(a))))});s.push(l)}}).next(()=>w.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return is(t,e)}_r(t,e){const n=de(t);let s,i=Mt.ae;return n.Z({index:xo},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Mt.ae&&e(new N(jt(s)),i),i=d,s=l):i=Mt.ae}).next(()=>{i!==Mt.ae&&e(new N(jt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function is(r,t){return de(r).put(function(n,s){return{targetId:0,path:wt(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Ce(t).put(n)}removeEntry(t,e,n){return Ce(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Ms(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.ur(t,n)))}getEntry(t,e){let n=ut.newInvalidDocument(e);return Ce(t).Z({index:ds,range:IDBKeyRange.only(er(e))},(s,i)=>{n=this.cr(e,i)}).next(()=>n)}lr(t,e){let n={size:0,document:ut.newInvalidDocument(e)};return Ce(t).Z({index:ds,range:IDBKeyRange.only(er(e))},(s,i)=>{n={document:this.cr(e,i),size:Ls(i)}}).next(()=>n)}getEntries(t,e){let n=Nt();return this.hr(t,e,(s,i)=>{const a=this.cr(s,i);n=n.insert(s,a)}).next(()=>n)}Pr(t,e){let n=Nt(),s=new st(N.comparator);return this.hr(t,e,(i,a)=>{const u=this.cr(i,a);n=n.insert(i,u),s=s.insert(i,Ls(a))}).next(()=>({documents:n,Tr:s}))}hr(t,e,n){if(e.isEmpty())return w.resolve();let s=new Z(Sc);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(er(s.first()),er(s.last())),a=s.getIterator();let u=a.getNext();return Ce(t).Z({index:ds,range:i},(l,d,m)=>{const p=N.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Sc(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.W(er(u)):m.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Ms(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ce(t).G(IDBKeyRange.bound(u,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let m=Nt();for(const p of d){const I=this.cr(N.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);I.isFoundDocument()&&(Cr(e,I)||s.has(I.key))&&(m=m.insert(I.key,I))}return m})}getAllFromCollectionGroup(t,e,n,s){let i=Nt();const a=Vc(e,n),u=Vc(e,Ot.max());return Ce(t).Z({index:kl,range:IDBKeyRange.bound(a,u,!0)},(l,d,m)=>{const p=this.cr(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(t){return new Mg(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Pc(t).get(so).next(e=>(L(!!e),e))}ur(t,e){return Pc(t).put(so,e)}cr(t,e){if(e){const n=Tg(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ut.newInvalidDocument(t)}}function Kh(r){return new Og(r)}class Mg extends zh{constructor(t,e){super(),this.Ir=t,this.trackRemovals=e,this.Er=new re(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new Z((i,a)=>z(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Er.get(i);if(e.push(this.Ir.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=hc(this.Ir.serializer,a);s=s.add(i.path.popLast());const d=Ls(l);n+=d-u.size,e.push(this.Ir.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=hc(this.Ir.serializer,a.convertToNoDocument(B.min()));e.push(this.Ir.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.Ir.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.Ir.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.Ir.lr(t,e).next(n=>(this.Er.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.Ir.Pr(t,e).next(({documents:n,Tr:s})=>(s.forEach((i,a)=>{this.Er.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Pc(r){return ht(r,Tr)}function Ce(r){return ht(r,bs)}function er(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Vc(r,t){const e=t.documentKey.path.toArray();return[r,Ms(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Sc(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=z(e[i],n[i]),s)return s;return s=z(e.length,n.length),s||(s=z(e[e.length-2],n[n.length-2]),s||z(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&fr(n.mutation,s,Ct.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,$()).next(()=>n))}getLocalViewOfDocuments(t,e,n=$()){const s=zt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=sr();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=zt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,$()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Nt();const a=dr(),u=function(){return dr()}();return e.forEach((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof se)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),fr(m.mutation,d,m.mutation.getFieldMask(),ot.now())):a.set(d.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var p;return u.set(d,new Fg(m,(p=a.get(d))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(t,e){const n=dr();let s=new st((a,u)=>a-u),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||Ct.empty();m=u.applyToLocalView(d,m),n.set(l,m);const p=(s.get(u.batchId)||$()).add(l);s=s.insert(u.batchId,p)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,p=uh();m.forEach(I=>{if(!i.has(I)){const b=ph(e.get(I),n.get(I));b!==null&&p.set(I,b),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Up(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve(zt());let u=gr,l=i;return a.next(d=>w.forEach(d,(m,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{l=l.insert(m,I)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,$())).next(m=>({batchId:u,changes:ah(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(n=>{let s=sr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=sr();return this.indexManager.getCollectionParents(t,i).next(u=>w.forEach(u,l=>{const d=function(p,I){return new Zs(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((p,I)=>{a=a.insert(p,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))});let u=sr();return a.forEach((l,d)=>{const m=i.get(l);m!==void 0&&fr(m.mutation,d,Ct.empty(),ot.now()),Cr(e,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return w.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Vt(s.createTime)}}(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:Nh(s.bundledQuery),readTime:Vt(s.readTime)}}(e)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.overlays=new st(N.comparator),this.Rr=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=zt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.Et(t,e,i)}),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Rr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=zt(),i=e.length+1,a=new N(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new st((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=zt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=zt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return w.resolve(u)}Et(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(n.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Ko(e,n));let i=this.Rr.get(e);i===void 0&&(i=$(),this.Rr.set(e,i)),this.Rr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.Vr=new Z(dt.mr),this.gr=new Z(dt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new dt(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new dt(t,e))}br(t,e){t.forEach(n=>this.removeReference(n,e))}Sr(t){const e=new N(new J([])),n=new dt(e,t),s=new dt(e,t+1),i=[];return this.gr.forEachInRange([n,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new N(new J([])),n=new dt(e,t),s=new dt(e,t+1);let i=$();return this.gr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new dt(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class dt{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return N.comparator(t.key,e.key)||z(t.Cr,e.Cr)}static pr(t,e){return z(t.Cr,e.Cr)||N.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new Z(dt.mr)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jo(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new dt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Nr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Be:this.Fr-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new dt(e,0),s=new dt(e,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,s],a=>{const u=this.Or(a.Cr);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(z);return e.forEach(s=>{const i=new dt(s,0),a=new dt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],u=>{n=n.add(u.Cr)})}),w.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;N.isDocumentKey(i)||(i=i.child(""));const a=new dt(new N(i),0);let u=new Z(z);return this.Mr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Cr)),!0)},a),w.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(n=>{const s=this.Or(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return w.forEach(e.mutations,s=>{const i=new dt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new dt(e,0),s=this.Mr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t){this.kr=t,this.docs=function(){return new st(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let n=Nt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Nt();const a=e.path,u=new N(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Co(Vl(m),n)<=0||(s.has(m.key)||Cr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){M()}qr(t,e){return w.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new zg(this)}getSize(t){return w.resolve(this.size)}}class zg extends zh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(n)}),w.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(t){this.persistence=t,this.Qr=new re(e=>$e(e),Vr),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Qo,this.targetCount=0,this.Ur=We.Kn()}forEachTarget(t,e){return this.Qr.forEach((n,s)=>e(s)),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),w.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new We(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.zn(e),w.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.Sr(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.Kr.yr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.Kr.br(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Kr.Sr(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Kr.vr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.Kr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Mt(0),this.zr=!1,this.zr=!0,this.jr=new Ug,this.referenceDelegate=t(this),this.Hr=new Kg(this),this.indexManager=new Vg,this.remoteDocumentCache=function(s){return new jg(s)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new xh(e),this.Yr=new Lg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Bg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new qg(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const s=new $g(this.Gr.next());return this.referenceDelegate.Zr(),n(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(t,e){return w.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class $g extends Cl{constructor(t){super(),this.currentSequenceNumber=t}}class ai{constructor(t){this.persistence=t,this.ti=new Qo,this.ni=null}static ri(t){return new ai(t)}get ii(){if(this.ni)return this.ni;throw M()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),w.resolve()}removeTarget(t,e){this.ti.Sr(e.targetId).forEach(s=>this.ii.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.ii,n=>{const s=N.fromPath(n);return this.si(t,s).next(i=>{i||e.removeEntry(s,B.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return w.or([()=>w.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Bs{constructor(t,e){this.persistence=t,this.oi=new re(n=>wt(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=jh(this,e)}static ri(t,e){return new Bs(t,e)}Zr(){}Xr(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return w.forEach(this.oi,(n,s)=>this.ar(t,n,s).next(i=>i?w.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(u=>{u||(n++,i.removeEntry(a,B.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),w.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ms(t.data.value)),e}ar(t,e,n){return w.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t){this.serializer=t}B(t,e,n,s){const i=new Gs("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Pr)}(t),function(l){l.createObjectStore(Ir,{keyPath:np}),l.createObjectStore(Bt,{keyPath:qu,autoIncrement:!0}).createIndex(Le,ju,{unique:!0}),l.createObjectStore(yn)}(t),Cc(t),function(l){l.createObjectStore(ke)}(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(Tn),l.deleteObjectStore(In),l.deleteObjectStore(Ue)}(t),Cc(t)),a=a.next(()=>function(l){const d=l.store(Ue),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return d.put(Ps,m)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(Bt).G().next(p=>{l.deleteObjectStore(Bt),l.createObjectStore(Bt,{keyPath:qu,autoIncrement:!0}).createIndex(Le,ju,{unique:!0});const I=d.store(Bt),b=p.map(C=>I.put(C));return w.waitFor(b)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(En,{keyPath:hp})})(t)})),n<5&&s>=5&&(a=a.next(()=>this._i(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(Tr)}(t),this.ai(i)))),n<7&&s>=7&&(a=a.next(()=>this.ui(i))),n<8&&s>=8&&(a=a.next(()=>this.ci(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.li(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(Ws,{keyPath:dp})})(t),function(l){l.createObjectStore(Qs,{keyPath:fp})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(Ys,{keyPath:Tp});d.createIndex(oo,Ep,{unique:!1}),d.createIndex(Fl,vp,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(bs,{keyPath:sp});d.createIndex(ds,ip),d.createIndex(kl,op)}(t)).next(()=>this.hi(t,i)).next(()=>t.deleteObjectStore(ke))),n<14&&s>=14&&(a=a.next(()=>this.Pi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(ko,{keyPath:mp,autoIncrement:!0}).createIndex(io,pp,{unique:!1}),l.createObjectStore(Vs,{keyPath:gp}).createIndex(Ol,_p,{unique:!1}),l.createObjectStore(Ss,{keyPath:yp}).createIndex(Ml,Ip,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(Vs).clear()}).next(()=>{e.objectStore(Ss).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore(No,{keyPath:wp})})(t)})),a}ai(t){let e=0;return t.store(ke).Z((n,s)=>{e+=Ls(s)}).next(()=>{const n={byteSize:e};return t.store(Tr).put(so,n)})}_i(t){const e=t.store(Ir),n=t.store(Bt);return e.G().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Be],[i.userId,i.lastAcknowledgedBatchId]);return n.G(Le,a).next(u=>w.forEach(u,l=>{L(l.userId===i.userId);const d=Oe(this.serializer,l);return Lh(t,i.userId,d).next(()=>{})}))}))}ui(t){const e=t.store(Tn),n=t.store(ke);return t.store(Ue).get(Ps).next(s=>{const i=[];return n.Z((a,u)=>{const l=new J(a),d=function(p){return[0,wt(p)]}(l);i.push(e.get(d).next(m=>m?w.resolve():(p=>e.put({targetId:0,path:wt(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(i))})}ci(t,e){t.createObjectStore(Er,{keyPath:lp});const n=e.store(Er),s=new Wo,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:wt(l)})}};return e.store(ke).Z({Y:!0},(a,u)=>{const l=new J(a);return i(l.popLast())}).next(()=>e.store(yn).Z({Y:!0},([a,u,l],d)=>{const m=jt(u);return i(m.popLast())}))}li(t){const e=t.store(In);return e.Z((n,s)=>{const i=or(s),a=kh(this.serializer,i);return e.put(a)})}hi(t,e){const n=e.store(ke),s=[];return n.Z((i,a)=>{const u=e.store(bs),l=function(p){return p.document?new N(J.fromString(p.document.name).popFirst(5)):p.noDocument?N.fromSegments(p.noDocument.path):p.unknownDocument?N.fromSegments(p.unknownDocument.path):M()}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>w.waitFor(s))}Pi(t,e){const n=e.store(Bt),s=Kh(this.serializer),i=new Yo(ai.ri,this.serializer.Tt);return n.G().next(a=>{const u=new Map;return a.forEach(l=>{var d;let m=(d=u.get(l.userId))!==null&&d!==void 0?d:$();Oe(this.serializer,l).keys().forEach(p=>m=m.add(p)),u.set(l.userId,m)}),w.forEach(u,(l,d)=>{const m=new mt(d),p=ii.It(this.serializer,m),I=i.getIndexManager(m),b=oi.It(m,this.serializer,I,i.referenceDelegate);return new $h(s,b,p,I).recalculateAndSaveOverlaysForDocumentKeys(new ao(e,Mt.ae),l).next()})})}}function Cc(r){r.createObjectStore(Tn,{keyPath:up}).createIndex(xo,cp,{unique:!0}),r.createObjectStore(In,{keyPath:"targetId"}).createIndex(Nl,ap,{unique:!0}),r.createObjectStore(Ue)}const he="IndexedDbPersistence",$i=18e5,Gi=5e3,Hi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Hg="main";class Xo{constructor(t,e,n,s,i,a,u,l,d,m,p=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Ti=i,this.window=a,this.document=u,this.Ii=d,this.Ei=m,this.di=p,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=I=>Promise.resolve(),!Xo.D())throw new O(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ng(this,s),this.gi=e+Hg,this.serializer=new xh(l),this.pi=new ye(this.gi,this.di,new Gg(this.serializer)),this.jr=new vg,this.Hr=new Cg(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Kh(this.serializer),this.Yr=new Eg,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,m===!1&&bt(he,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(V.FAILED_PRECONDITION,Hi);return this.bi(),this.Si(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Hr.getHighestSequenceNumber(t))}).then(t=>{this.Gr=new Mt(t,this.Ii)}).then(()=>{this.zr=!0}).catch(t=>(this.pi&&this.pi.close(),Promise.reject(t)))}Ci(t){return this.fi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.pi.k(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>os(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(t).next(e=>{e||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(t)).next(e=>this.isPrimary&&!e?this.xi(t).next(()=>!1):!!e&&this.Oi(t).next(()=>!0))).catch(t=>{if(Ae(t))return D(he,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return D(he,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Ti.enqueueRetryable(()=>this.fi(t)),this.isPrimary=t})}Fi(t){return nr(t).get(rn).next(e=>w.resolve(this.Ni(e)))}Bi(t){return os(t).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,$i)){this.mi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=ht(e,En);return n.G().next(s=>{const i=this.qi(s,$i),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.yi)for(const e of t)this.yi.removeItem(this.Qi(e.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(t){return!!t&&t.ownerId===this.clientId}Mi(t){return this.Ei?w.resolve(!0):nr(t).get(rn).next(e=>{if(e!==null&&this.ki(e.leaseTimestampMs,Gi)&&!this.$i(e.ownerId)){if(this.Ni(e)&&this.networkEnabled)return!0;if(!this.Ni(e)){if(!e.allowTabSynchronization)throw new O(V.FAILED_PRECONDITION,Hi);return!1}}return!(!this.networkEnabled||!this.inForeground)||os(t).G().next(n=>this.qi(n,Gi).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&D(he,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[Pr,En],t=>{const e=new ao(t,Mt.ae);return this.xi(e).next(()=>this.Bi(e))}),this.pi.close(),this.Gi()}qi(t,e){return t.filter(n=>this.ki(n.updateTimeMs,e)&&!this.$i(n.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",t=>os(t).G().next(e=>this.qi(e,$i).map(n=>n.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(t,e){return oi.It(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Sg(t,this.serializer.Tt.databaseId)}getDocumentOverlayCache(t){return ii.It(this.serializer,t)}getBundleCache(){return this.Yr}runTransaction(t,e,n){D(he,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===17?bp:l===16?Rp:l===15?Oo:l===14?Ul:l===13?Bl:l===12?Ap:l===11?Ll:void M()}(this.di);let a;return this.pi.runTransaction(t,s,i,u=>(a=new ao(u,this.Gr?this.Gr.next():Mt.ae),e==="readwrite-primary"?this.Fi(a).next(l=>!!l||this.Mi(a)).next(l=>{if(!l)throw bt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new O(V.FAILED_PRECONDITION,Sl);return n(a)}).next(l=>this.Oi(a).next(()=>l)):this.ji(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}ji(t){return nr(t).get(rn).next(e=>{if(e!==null&&this.ki(e.leaseTimestampMs,Gi)&&!this.$i(e.ownerId)&&!this.Ni(e)&&!(this.Ei||this.allowTabSynchronization&&e.allowTabSynchronization))throw new O(V.FAILED_PRECONDITION,Hi)})}Oi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return nr(t).put(rn,e)}static D(){return ye.D()}xi(t){const e=nr(t);return e.get(rn).next(n=>this.Ni(n)?(D(he,"Releasing primary lease."),e.delete(rn)):w.resolve())}ki(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(bt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}bi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}Si(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ai=()=>{this.Ki();const e=/(?:Version|Mobile)\/1[456]/;al()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(t){var e;try{const n=((e=this.yi)===null||e===void 0?void 0:e.getItem(this.Qi(t)))!==null;return D(he,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return bt(he,"Failed to get zombied client id.",n),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(t){bt("Failed to set zombie client id.",t)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function nr(r){return ht(r,Pr)}function os(r){return ht(r,En)}function Wg(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=s}static Yi(t,e){let n=$(),s=$();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jo(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return al()?8:Dl(Es())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.rs(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Qg;return this._s(t,e,a).next(u=>{if(i.result=u,this.Xi)return this.us(t,e,a,u.size)})}).next(()=>i.result)}us(t,e,n,s){return n.documentReadCount<this.es?(ln()<=Q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",hn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),w.resolve()):(ln()<=Q.DEBUG&&D("QueryEngine","Query:",hn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ts*s?(ln()<=Q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",hn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):w.resolve())}rs(t,e){if(ec(e))return w.resolve(null);let n=Ft(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mo(e,null,"F"),n=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=$(...i);return this.ns.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.cs(e,u);return this.ls(e,d,a,l.readTime)?this.rs(t,mo(e,null,"F")):this.hs(t,d,e,l)}))})))}ss(t,e,n,s){return ec(e)||s.isEqual(B.min())?w.resolve(null):this.ns.getDocuments(t,n).next(i=>{const a=this.cs(e,i);return this.ls(e,a,n,s)?w.resolve(null):(ln()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hn(e)),this.hs(t,a,e,Qm(s,gr)).next(u=>u))})}cs(t,e){let n=new Z(ih(t));return e.forEach((s,i)=>{Cr(t,i)&&(n=n.add(i))}),n}ls(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,e,n){return ln()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",hn(e)),this.ns.getDocumentsMatchingQuery(t,e,Ot.min(),n)}hs(t,e,n,s){return this.ns.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="LocalStore",Yg=3e8;class Xg{constructor(t,e,n,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new st(z),this.Is=new re(i=>$e(i),Vr),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $h(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Hh(r,t,e,n){return new Xg(r,t,e,n)}async function Wh(r,t){const e=q(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=$();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Jg(r,t){const e=q(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,l,d,m){const p=d.batch,I=p.keys();let b=w.resolve();return I.forEach(C=>{b=b.next(()=>m.getEntry(l,C)).next(x=>{const S=d.docVersions.get(C);L(S!==null),x.version.compareTo(S)<0&&(p.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(l,p))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=$();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Qh(r){const t=q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Zg(r,t){const e=q(r),n=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach((m,p)=>{const I=s.get(p);if(!I)return;u.push(e.Hr.removeMatchingKeys(i,m.removedDocuments,p).next(()=>e.Hr.addMatchingKeys(i,m.addedDocuments,p)));let b=I.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?b=b.withResumeToken(lt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,n)),s=s.insert(p,b),function(x,S,j){return x.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Yg?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(I,b,m)&&u.push(e.Hr.updateTargetData(i,b))});let l=Nt(),d=$();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))}),u.push(t_(i,a,t.documentUpdates).next(m=>{l=m.Vs,d=m.fs})),!n.isEqual(B.min())){const m=e.Hr.getLastRemoteSnapshotVersion(i).next(p=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(m)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.Ts=s,i))}function t_(r,t,e){let n=$(),s=$();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Nt();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):D(Zo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Vs:a,fs:s}})}function e_(r,t){const e=q(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Be),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function n_(r,t){const e=q(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Hr.getTargetData(n,t).next(i=>i?(s=i,w.resolve(s)):e.Hr.allocateTargetId(n).next(a=>(s=new Jt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ts.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function vo(r,t,e){const n=q(r),s=n.Ts.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ae(a))throw a;D(Zo,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ts=n.Ts.remove(t),n.Is.delete(s.target)}function Dc(r,t,e){const n=q(r);let s=B.min(),i=$();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,m){const p=q(l),I=p.Is.get(m);return I!==void 0?w.resolve(p.Ts.get(I)):p.Hr.getTargetData(d,m)}(n,a,Ft(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.Ps.getDocumentsMatchingQuery(a,t,e?s:B.min(),e?i:$())).next(u=>(r_(n,jp(t),u),{documents:u,gs:i})))}function r_(r,t,e){let n=r.Es.get(t)||B.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Es.set(t,n)}class xc{constructor(){this.activeTargetIds=Wp()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yh{constructor(){this.ho=new xc,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new xc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="ConnectivityMonitor";class Nc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){D(kc,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){D(kc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as=null;function wo(){return as===null?as=function(){return 268435456+Math.round(2147483648*Math.random())}():as++,"0x"+as.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="RestConnection",i_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class o_{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${s}`,this.wo=this.databaseId.database===Cs?`project_id=${n}`:`project_id=${n}&database_id=${s}`}bo(t,e,n,s,i){const a=wo(),u=this.So(t,e.toUriEncodedString());D(Wi,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(t,u,l,n).then(d=>(D(Wi,`Received RPC '${t}' ${a}: `,d),d),d=>{throw ze(Wi,`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",n),d})}Co(t,e,n,s,i,a){return this.bo(t,e,n,s,i)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}So(t,e){const n=i_[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class u_ extends o_{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,s){const i=wo();return new Promise((a,u)=>{const l=new Tl;l.setWithCredentials(!0),l.listenOnce(El.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cs.NO_ERROR:const m=l.getResponseJson();D(Tt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(m)),a(m);break;case cs.TIMEOUT:D(Tt,`RPC '${t}' ${i} timed out`),u(new O(V.DEADLINE_EXCEEDED,"Request time out"));break;case cs.HTTP_ERROR:const p=l.getStatus();if(D(Tt,`RPC '${t}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const b=I==null?void 0:I.error;if(b&&b.status&&b.message){const C=function(S){const j=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(j)>=0?j:V.UNKNOWN}(b.status);u(new O(C,b.message))}else u(new O(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new O(V.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(Tt,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);D(Tt,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",d,n,15)})}Wo(t,e,n){const s=wo(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Al(),u=wl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const m=i.join("");D(Tt,`Creating RPC '${t}' stream ${s}: ${m}`,l);const p=a.createWebChannel(m,l);let I=!1,b=!1;const C=new a_({Fo:S=>{b?D(Tt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(I||(D(Tt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),I=!0),D(Tt,`RPC '${t}' stream ${s} sending:`,S),p.send(S))},Mo:()=>p.close()}),x=(S,j,U)=>{S.listen(j,F=>{try{U(F)}catch(K){setTimeout(()=>{throw K},0)}})};return x(p,rr.EventType.OPEN,()=>{b||(D(Tt,`RPC '${t}' stream ${s} transport opened.`),C.Qo())}),x(p,rr.EventType.CLOSE,()=>{b||(b=!0,D(Tt,`RPC '${t}' stream ${s} transport closed`),C.Ko())}),x(p,rr.EventType.ERROR,S=>{b||(b=!0,ze(Tt,`RPC '${t}' stream ${s} transport errored:`,S),C.Ko(new O(V.UNAVAILABLE,"The operation could not be completed")))}),x(p,rr.EventType.MESSAGE,S=>{var j;if(!b){const U=S.data[0];L(!!U);const F=U,K=(F==null?void 0:F.error)||((j=F[0])===null||j===void 0?void 0:j.error);if(K){D(Tt,`RPC '${t}' stream ${s} received error:`,K);const X=K.status;let G=function(y){const E=ct[y];if(E!==void 0)return yh(E)}(X),T=K.message;G===void 0&&(G=V.INTERNAL,T="Unknown error status: "+X+" with message "+K.message),b=!0,C.Ko(new O(G,T)),p.close()}else D(Tt,`RPC '${t}' stream ${s} received:`,U),C.Uo(U)}}),x(u,vl.STAT_EVENT,S=>{S.stat===no.PROXY?D(Tt,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===no.NOPROXY&&D(Tt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){return typeof window<"u"?window:null}function ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(r){return new lg(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="PersistentStream";class Jh{constructor(t,e,n,s,i,a,u,l){this.Ti=t,this.n_=n,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Xh(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(bt(e.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.i_===e&&this.V_(n,s)},n=>{t(()=>{const s=new O(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(s)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{n(()=>this.m_(s))}),this.stream.onMessage(s=>{n(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return D(Oc,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(D(Oc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l_ extends Jh{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=fg(this.serializer,t),n=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Vt(a.readTime):B.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=_o(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=xs(l)?{documents:bh(i,l)}:{query:Ph(i,l).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Eh(i,a.resumeToken);const d=po(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Sn(i,a.snapshotVersion.toTimestamp());const d=po(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=pg(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=_o(this.serializer),e.removeTarget=t,this.I_(e)}}class h_ extends Jh{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=mg(t.writeResults,t.commitTime),n=Vt(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=_o(this.serializer),this.I_(t)}S_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Os(this.serializer,n))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{}class f_ extends d_{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,n,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(t,go(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(V.UNKNOWN,i.toString())})}Co(t,e,n,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,go(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(V.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class m_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(bt(e),this.N_=!1):D("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="RemoteStore";class p_{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{n.enqueueAndForget(async()=>{Je(this)&&(D(Qe,"Restarting streams for network reachability change."),await async function(l){const d=q(l);d.W_.add(4),await xr(d),d.j_.set("Unknown"),d.W_.delete(4),await ci(d)}(this))})}),this.j_=new m_(n,s)}}async function ci(r){if(Je(r))for(const t of r.G_)await t(!0)}async function xr(r){for(const t of r.G_)await t(!1)}function Zh(r,t){const e=q(r);e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),ra(e)?na(e):Nn(e).c_()&&ea(e,t))}function ta(r,t){const e=q(r),n=Nn(e);e.U_.delete(t),n.c_()&&td(e,t),e.U_.size===0&&(n.c_()?n.P_():Je(e)&&e.j_.set("Unknown"))}function ea(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Nn(r).y_(t)}function td(r,t){r.H_.Ne(t),Nn(r).w_(t)}function na(r){r.H_=new og({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),Nn(r).start(),r.j_.B_()}function ra(r){return Je(r)&&!Nn(r).u_()&&r.U_.size>0}function Je(r){return q(r).W_.size===0}function ed(r){r.H_=void 0}async function g_(r){r.j_.set("Online")}async function __(r){r.U_.forEach((t,e)=>{ea(r,t)})}async function y_(r,t){ed(r),ra(r)?(r.j_.q_(t),na(r)):r.j_.set("Unknown")}async function I_(r,t,e){if(r.j_.set("Online"),t instanceof Th&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.U_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.U_.delete(u),s.H_.removeTarget(u))}(r,t)}catch(n){D(Qe,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Us(r,n)}else if(t instanceof _s?r.H_.We(t):t instanceof Ih?r.H_.Ze(t):r.H_.je(t),!e.isEqual(B.min()))try{const n=await Qh(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.H_.ot(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.U_.get(d);m&&i.U_.set(d,m.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const m=i.U_.get(l);if(!m)return;i.U_.set(l,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),td(i,l);const p=new Jt(m.target,l,d,m.sequenceNumber);ea(i,p)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){D(Qe,"Failed to raise snapshot:",n),await Us(r,n)}}async function Us(r,t,e){if(!Ae(t))throw t;r.W_.add(1),await xr(r),r.j_.set("Offline"),e||(e=()=>Qh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D(Qe,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await ci(r)})}function nd(r,t){return t().catch(e=>Us(r,e,t))}async function kr(r){const t=q(r),e=ve(t);let n=t.K_.length>0?t.K_[t.K_.length-1].batchId:Be;for(;T_(t);)try{const s=await e_(t.localStore,n);if(s===null){t.K_.length===0&&e.P_();break}n=s.batchId,E_(t,s)}catch(s){await Us(t,s)}rd(t)&&sd(t)}function T_(r){return Je(r)&&r.K_.length<10}function E_(r,t){r.K_.push(t);const e=ve(r);e.c_()&&e.b_&&e.S_(t.mutations)}function rd(r){return Je(r)&&!ve(r).u_()&&r.K_.length>0}function sd(r){ve(r).start()}async function v_(r){ve(r).C_()}async function w_(r){const t=ve(r);for(const e of r.K_)t.S_(e.mutations)}async function A_(r,t,e){const n=r.K_.shift(),s=zo.from(n,t,e);await nd(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await kr(r)}async function R_(r,t){t&&ve(r).b_&&await async function(n,s){if(function(a){return rg(a)&&a!==V.ABORTED}(s.code)){const i=n.K_.shift();ve(n).h_(),await nd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await kr(n)}}(r,t),rd(r)&&sd(r)}async function Mc(r,t){const e=q(r);e.asyncQueue.verifyOperationInProgress(),D(Qe,"RemoteStore received new credentials");const n=Je(e);e.W_.add(3),await xr(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await ci(e)}async function b_(r,t){const e=q(r);t?(e.W_.delete(2),await ci(e)):t||(e.W_.add(2),await xr(e),e.j_.set("Unknown"))}function Nn(r){return r.J_||(r.J_=function(e,n,s){const i=q(e);return i.M_(),new l_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{xo:g_.bind(null,r),No:__.bind(null,r),Lo:y_.bind(null,r),p_:I_.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),ra(r)?na(r):r.j_.set("Unknown")):(await r.J_.stop(),ed(r))})),r.J_}function ve(r){return r.Y_||(r.Y_=function(e,n,s){const i=q(e);return i.M_(),new h_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:v_.bind(null,r),Lo:R_.bind(null,r),D_:w_.bind(null,r),v_:A_.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await kr(r)):(await r.Y_.stop(),r.K_.length>0&&(D(Qe,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new sa(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ia(r,t){if(bt("AsyncQueue",`${t}: ${r}`),Ae(r))return new O(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{static emptySet(t){return new pn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||N.comparator(e.key,n.key):(e,n)=>N.comparator(e.key,n.key),this.keyedMap=sr(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new pn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.Z_=new st(N.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):M():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Cn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Cn(t,e,pn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ti(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class V_{constructor(){this.queries=Lc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const s=q(e),i=s.queries;s.queries=Lc(),i.forEach((a,u)=>{for(const l of u.ta)l.onError(n)})})(this,new O(V.ABORTED,"Firestore shutting down"))}}function Lc(){return new re(r=>sh(r),ti)}async function oa(r,t){const e=q(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.na()&&t.ra()&&(n=2):(i=new P_,n=t.ra()?0:1);try{switch(n){case 0:i.ea=await e.onListen(s,!0);break;case 1:i.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=ia(a,`Initialization of query '${hn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&ua(e)}async function aa(r,t){const e=q(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function S_(r,t){const e=q(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.ta)u.oa(s)&&(n=!0);a.ea=s}}n&&ua(e)}function C_(r,t,e){const n=q(r),s=n.queries.get(t);if(s)for(const i of s.ta)i.onError(e);n.queries.delete(t)}function ua(r){r.ia.forEach(t=>{t.next()})}var Ao,Bc;(Bc=Ao||(Ao={}))._a="default",Bc.Cache="cache";class ca{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Cn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Cn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Ao.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t){this.key=t}}class od{constructor(t){this.key=t}}class D_{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=$(),this.mutatedKeys=$(),this.ya=ih(t),this.wa=new pn(this.ya)}get ba(){return this.fa}Sa(t,e){const n=e?e.Da:new Fc,s=e?e.wa:this.wa;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,p)=>{const I=s.get(m),b=Cr(this.query,p)?p:null,C=!!I&&this.mutatedKeys.has(I.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let S=!1;I&&b?I.data.isEqual(b.data)?C!==x&&(n.track({type:3,doc:b}),S=!0):this.va(I,b)||(n.track({type:2,doc:b}),S=!0,(l&&this.ya(b,l)>0||d&&this.ya(b,d)<0)&&(u=!0)):!I&&b?(n.track({type:0,doc:b}),S=!0):I&&!b&&(n.track({type:1,doc:I}),S=!0,(l||d)&&(u=!0)),S&&(b?(a=a.add(b),i=x?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{wa:a,Da:n,ls:u,mutatedKeys:i}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((m,p)=>function(b,C){const x=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(b)-x(C)}(m.type,p.type)||this.ya(m.doc,p.doc)),this.Ca(n),s=s!=null&&s;const u=e&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,d=l!==this.ga;return this.ga=l,a.length!==0||d?{snapshot:new Cn(this.query,t.wa,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Fc,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=$(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new od(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new id(n))}),e}Oa(t){this.fa=t.gs,this.pa=$();const e=this.Sa(t.documents);return this.applyChanges(e,!0)}Na(){return Cn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const la="SyncEngine";class x_{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class k_{constructor(t){this.key=t,this.Ba=!1}}class N_{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new re(u=>sh(u),ti),this.qa=new Map,this.Qa=new Set,this.$a=new st(N.comparator),this.Ka=new Map,this.Ua=new Qo,this.Wa={},this.Ga=new Map,this.za=We.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function O_(r,t,e=!0){const n=dd(r);let s;const i=n.ka.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await ad(n,t,e,!0),s}async function M_(r,t){const e=dd(r);await ad(e,t,!0,!1)}async function ad(r,t,e,n){const s=await n_(r.localStore,Ft(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await F_(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Zh(r.remoteStore,s),u}async function F_(r,t,e,n,s){r.Ha=(p,I,b)=>async function(x,S,j,U){let F=S.view.Sa(j);F.ls&&(F=await Dc(x.localStore,S.query,!1).then(({documents:T})=>S.view.Sa(T,F)));const K=U&&U.targetChanges.get(S.targetId),X=U&&U.targetMismatches.get(S.targetId)!=null,G=S.view.applyChanges(F,x.isPrimaryClient,K,X);return qc(x,S.targetId,G.Ma),G.snapshot}(r,p,I,b);const i=await Dc(r.localStore,t,!0),a=new D_(t,i.gs),u=a.Sa(i.documents),l=Dr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);qc(r,e,d.Ma);const m=new x_(t,e,a);return r.ka.set(t,m),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function L_(r,t,e){const n=q(r),s=n.ka.get(t),i=n.qa.get(s.targetId);if(i.length>1)return n.qa.set(s.targetId,i.filter(a=>!ti(a,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&ta(n.remoteStore,s.targetId),Ro(n,s.targetId)}).catch(Xe)):(Ro(n,s.targetId),await vo(n.localStore,s.targetId,!0))}async function B_(r,t){const e=q(r),n=e.ka.get(t),s=e.qa.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ta(e.remoteStore,n.targetId))}async function U_(r,t,e){const n=fd(r);try{const s=await function(a,u){const l=q(a),d=ot.now(),m=u.reduce((b,C)=>b.add(C.key),$());let p,I;return l.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=Nt(),x=$();return l.ds.getEntries(b,m).next(S=>{C=S,C.forEach((j,U)=>{U.isValidDocument()||(x=x.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(b,C)).next(S=>{p=S;const j=[];for(const U of u){const F=eg(U,p.get(U.key).overlayedDocument);F!=null&&j.push(new se(U.key,F,Yl(F.value.mapValue),Pt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,d,j,u)}).next(S=>{I=S;const j=S.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(b,S.batchId,j)})}).then(()=>({batchId:I.batchId,changes:ah(p)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Wa[a.currentUser.toKey()];d||(d=new st(z)),d=d.insert(u,l),a.Wa[a.currentUser.toKey()]=d}(n,s.batchId,e),await Nr(n,s.changes),await kr(n.remoteStore)}catch(s){const i=ia(s,"Failed to persist write");e.reject(i)}}async function ud(r,t){const e=q(r);try{const n=await Zg(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Ka.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?L(a.Ba):s.removedDocuments.size>0&&(L(a.Ba),a.Ba=!1))}),await Nr(e,n,t)}catch(n){await Xe(n)}}function Uc(r,t,e){const n=q(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ka.forEach((i,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=q(a);l.onlineState=u;let d=!1;l.queries.forEach((m,p)=>{for(const I of p.ta)I.sa(u)&&(d=!0)}),d&&ua(l)}(n.eventManager,t),s.length&&n.La.p_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function q_(r,t,e){const n=q(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Ka.get(t),i=s&&s.key;if(i){let a=new st(N.comparator);a=a.insert(i,ut.newNoDocument(i,B.min()));const u=$().add(i),l=new si(B.min(),new Map,new st(z),a,u);await ud(n,l),n.$a=n.$a.remove(i),n.Ka.delete(t),ha(n)}else await vo(n.localStore,t,!1).then(()=>Ro(n,t,e)).catch(Xe)}async function j_(r,t){const e=q(r),n=t.batch.batchId;try{const s=await Jg(e.localStore,t);ld(e,n,null),cd(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Nr(e,s)}catch(s){await Xe(s)}}async function z_(r,t,e){const n=q(r);try{const s=await function(a,u){const l=q(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next(p=>(L(p!==null),m=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(n.localStore,t);ld(n,t,e),cd(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Nr(n,s)}catch(s){await Xe(s)}}function cd(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function ld(r,t,e){const n=q(r);let s=n.Wa[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Wa[n.currentUser.toKey()]=s}}function Ro(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(n=>{r.Ua.containsKey(n)||hd(r,n)})}function hd(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(ta(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ka.delete(e),ha(r))}function qc(r,t,e){for(const n of e)n instanceof id?(r.Ua.addReference(n.key,t),K_(r,n)):n instanceof od?(D(la,"Document no longer in limbo: "+n.key),r.Ua.removeReference(n.key,t),r.Ua.containsKey(n.key)||hd(r,n.key)):M()}function K_(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(D(la,"New document in limbo: "+e),r.Qa.add(n),ha(r))}function ha(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new N(J.fromString(t)),n=r.za.next();r.Ka.set(n,new k_(e)),r.$a=r.$a.insert(e,n),Zh(r.remoteStore,new Jt(Ft(Sr(e.path)),n,"TargetPurposeLimboResolution",Mt.ae))}}async function Nr(r,t,e){const n=q(r),s=[],i=[],a=[];n.ka.isEmpty()||(n.ka.forEach((u,l)=>{a.push(n.Ha(l,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Jo.Yi(l.targetId,d);i.push(p)}}))}),await Promise.all(a),n.La.p_(s),await async function(l,d){const m=q(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>w.forEach(d,I=>w.forEach(I.Hi,b=>m.persistence.referenceDelegate.addReference(p,I.targetId,b)).next(()=>w.forEach(I.Ji,b=>m.persistence.referenceDelegate.removeReference(p,I.targetId,b)))))}catch(p){if(!Ae(p))throw p;D(Zo,"Failed to update sequence numbers: "+p)}for(const p of d){const I=p.targetId;if(!p.fromCache){const b=m.Ts.get(I),C=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(C);m.Ts=m.Ts.insert(I,x)}}}(n.localStore,i))}async function $_(r,t){const e=q(r);if(!e.currentUser.isEqual(t)){D(la,"User change. New user:",t.toKey());const n=await Wh(e.localStore,t);e.currentUser=t,function(i,a){i.Ga.forEach(u=>{u.forEach(l=>{l.reject(new O(V.CANCELLED,a))})}),i.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Nr(e,n.Rs)}}function G_(r,t){const e=q(r),n=e.Ka.get(t);if(n&&n.Ba)return $().add(n.key);{let s=$();const i=e.qa.get(t);if(!i)return s;for(const a of i){const u=e.ka.get(a);s=s.unionWith(u.view.ba)}return s}}function dd(r){const t=q(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ud.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=G_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=q_.bind(null,t),t.La.p_=S_.bind(null,t.eventManager),t.La.Ja=C_.bind(null,t.eventManager),t}function fd(r){const t=q(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=j_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=z_.bind(null,t),t}class br{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ui(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Hh(this.persistence,new Gh,t.initialUser,this.serializer)}Xa(t){return new Yo(ai.ri,this.serializer)}Za(t){return new Yh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}br.provider={build:()=>new br};class H_ extends br{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){L(this.persistence.referenceDelegate instanceof Bs);const n=this.persistence.referenceDelegate.garbageCollector;return new qh(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Yo(n=>Bs.ri(n,e),this.serializer)}}class W_ extends br{constructor(t,e,n){super(),this.ru=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.ru.initialize(this,t),await fd(this.ru.syncEngine),await kr(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(t){return Hh(this.persistence,new Gh,t.initialUser,this.serializer)}tu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new qh(n,t.asyncQueue,e)}nu(t,e){const n=new Zm(e,this.persistence);return new Jm(t.asyncQueue,n)}Xa(t){const e=Wg(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Xo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,c_(),ys(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(t){return new Yh}}class qs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Uc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=$_.bind(null,this.syncEngine),await b_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new V_}()}createDatastore(t){const e=ui(t.databaseInfo.databaseId),n=function(i){return new u_(i)}(t.databaseInfo);return function(i,a,u,l){return new f_(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new p_(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Uc(this.syncEngine,e,0),function(){return Nc.D()?new Nc:new s_}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,m){const p=new N_(s,i,a,u,l,d);return m&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=q(s);D(Qe,"RemoteStore shutting down."),i.W_.add(5),await xr(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}qs.provider={build:()=>new qs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):bt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="FirestoreClient";class Q_{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=bl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{D(we,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(D(we,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ia(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Qi(r,t){r.asyncQueue.verifyOperationInProgress(),D(we,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Wh(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function jc(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Y_(r);D(we,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Mc(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Mc(t.remoteStore,s)),r._onlineComponents=t}async function Y_(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(we,"Using user provided OfflineComponentProvider");try{await Qi(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ze("Error using user provided cache. Falling back to memory cache: "+e),await Qi(r,new br)}}else D(we,"Using default OfflineComponentProvider"),await Qi(r,new H_(void 0));return r._offlineComponents}async function md(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(we,"Using user provided OnlineComponentProvider"),await jc(r,r._uninitializedComponentsProvider._online)):(D(we,"Using default OnlineComponentProvider"),await jc(r,new qs))),r._onlineComponents}function X_(r){return md(r).then(t=>t.syncEngine)}async function js(r){const t=await md(r),e=t.eventManager;return e.onListen=O_.bind(null,t.syncEngine),e.onUnlisten=L_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=M_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=B_.bind(null,t.syncEngine),e}function J_(r,t,e={}){const n=new Kt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new da({next:I=>{m.su(),a.enqueueAndForget(()=>aa(i,p));const b=I.docs.has(u);!b&&I.fromCache?d.reject(new O(V.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&l&&l.source==="server"?d.reject(new O(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new ca(Sr(u.path),m,{includeMetadataChanges:!0,Ta:!0});return oa(i,p)}(await js(r),r.asyncQueue,t,e,n)),n.promise}function Z_(r,t,e={}){const n=new Kt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new da({next:I=>{m.su(),a.enqueueAndForget(()=>aa(i,p)),I.fromCache&&l.source==="server"?d.reject(new O(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new ca(u,m,{includeMetadataChanges:!0,Ta:!0});return oa(i,p)}(await js(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(r,t,e){if(!e)throw new O(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function ty(r,t,e,n){if(t===!0&&n===!0)throw new O(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Kc(r){if(!N.isDocumentKey(r))throw new O(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $c(r){if(N.isDocumentKey(r))throw new O(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function fa(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function Dt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new O(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fa(r);throw new O(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="firestore.googleapis.com",Gc=!0;class Hc{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new O(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_d,this.ssl=Gc}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Gc;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Fh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Dg)throw new O(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ty("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pd((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class li{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qm;switch(n.type){case"firstParty":return new $m(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zc.get(e);n&&(D("ComponentProvider","Removing Datastore"),zc.delete(e),n.terminate())}(this),Promise.resolve()}}function ey(r,t,e,n={}){var s;const i=(r=Dt(r,li))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:r._getEmulatorOptions()}),u=`${t}:${e}`;i.host!==_d&&i.host!==u&&ze("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:u,ssl:!1,emulatorOptions:n});if(!vs(l,a)&&(r._setSettings(l),n.mockUserToken)){let d,m;if(typeof n.mockUserToken=="string")d=n.mockUserToken,m=mt.MOCK_USER;else{d=ol(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new O(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new mt(p)}r._authCredentials=new jm(new Rl(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Or(this.firestore,t,this._query)}}class St{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class Ie extends Or{constructor(t,e,n){super(t,e,Sr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new N(t))}withConverter(t){return new Ie(this.firestore,t,this._path)}}function $y(r,t,...e){if(r=$t(r),gd("collection","path",t),r instanceof li){const n=J.fromString(t,...e);return $c(n),new Ie(r,null,n)}{if(!(r instanceof St||r instanceof Ie))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return $c(n),new Ie(r.firestore,null,n)}}function Gy(r,t,...e){if(r=$t(r),arguments.length===1&&(t=bl.newId()),gd("doc","path",t),r instanceof li){const n=J.fromString(t,...e);return Kc(n),new St(r,null,new N(n))}{if(!(r instanceof St||r instanceof Ie))throw new O(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return Kc(n),new St(r.firestore,r instanceof Ie?r.converter:null,new N(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="AsyncQueue";class Qc{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Xh(this,"async_queue_retry"),this.bu=()=>{const n=ys();n&&D(Wc,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.Su=t;const e=ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ys();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Kt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ae(t))throw t;D(Wc,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.Su.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw bt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.pu=!1,n))));return this.Su=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=sa.createAndSchedule(this,t,e,n,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&M()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function Yc(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class ne extends li{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Qc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qc(t),this._firestoreClient=void 0,await t}}}function Hy(r,t){const e=typeof r=="object"?r:gl(),n=typeof r=="string"?r:Cs,s=fl(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=sl("firestore");i&&ey(s,...i)}return s}function hi(r){if(r._terminated)throw new O(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yd(r),r._firestoreClient}function yd(r){var t,e,n;const s=r._freezeSettings(),i=function(u,l,d,m){return new Vp(u,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,pd(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Q_(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(r._componentsProvider))}function Wy(r,t){ze("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return ny(r,qs.provider,{build:n=>new W_(n,e.cacheSizeBytes,void 0)}),Promise.resolve()}function ny(r,t,e){if((r=Dt(r,ne))._firestoreClient||r._terminated)throw new O(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new O(V.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},yd(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dn(lt.fromBase64String(t))}catch(e){throw new O(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Dn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=/^__.*__$/;class sy{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new kn(t,this.data,e,this.fieldTransforms)}}class Id{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Td(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ga{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new ga(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.$u(t),s}Ku(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.Bu(),s}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return zs(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Td(this.Lu)&&ry.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class iy{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ui(t)}ju(t,e,n,s=!1){return new ga({Lu:t,methodName:e,zu:n,path:it.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ed(r){const t=r._freezeSettings(),e=ui(r._databaseId);return new iy(r._databaseId,!!t.ignoreUndefinedProperties,e)}function oy(r,t,e,n,s,i={}){const a=r.ju(i.merge||i.mergeFields?2:0,t,e,s);ya("Data must be an object, but it was:",a,n);const u=vd(n,a);let l,d;if(i.merge)l=new Ct(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const I=bo(t,p,e);if(!a.contains(I))throw new O(V.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ad(m,I)||m.push(I)}l=new Ct(m),d=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=a.fieldTransforms;return new sy(new vt(u),l,d)}class mi extends fi{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof mi}}class _a extends fi{_toFieldTransform(t){return new mh(t.path,new bn)}isEqual(t){return t instanceof _a}}function ay(r,t,e,n){const s=r.ju(1,t,e);ya("Data must be an object, but it was:",s,n);const i=[],a=vt.empty();Re(n,(l,d)=>{const m=Ia(t,l,e);d=$t(d);const p=s.Ku(m);if(d instanceof mi)i.push(m);else{const I=pi(d,p);I!=null&&(i.push(m),a.set(m,I))}});const u=new Ct(i);return new Id(a,u,s.fieldTransforms)}function uy(r,t,e,n,s,i){const a=r.ju(1,t,e),u=[bo(t,n,e)],l=[s];if(i.length%2!=0)throw new O(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)u.push(bo(t,i[I])),l.push(i[I+1]);const d=[],m=vt.empty();for(let I=u.length-1;I>=0;--I)if(!Ad(d,u[I])){const b=u[I];let C=l[I];C=$t(C);const x=a.Ku(b);if(C instanceof mi)d.push(b);else{const S=pi(C,x);S!=null&&(d.push(b),m.set(b,S))}}const p=new Ct(d);return new Id(m,p,a.fieldTransforms)}function pi(r,t){if(wd(r=$t(r)))return ya("Unsupported field value:",t,r),vd(r,t);if(r instanceof fi)return function(n,s){if(!Td(s.Lu))throw s.Wu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=pi(u,s.Uu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=$t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ot.fromDate(n);return{timestampValue:Sn(s.serializer,i)}}if(n instanceof ot){const i=new ot(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sn(s.serializer,i)}}if(n instanceof ma)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dn)return{bytesValue:Eh(s.serializer,n._byteString)};if(n instanceof St){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Go(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof pa)return function(a,u){return{mapValue:{fields:{[Fo]:{stringValue:Lo},[vn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Wu("VectorValues must only contain numeric values.");return qo(u.serializer,d)})}}}}}}(n,s);throw s.Wu(`Unsupported field value: ${fa(n)}`)}(r,t)}function vd(r,t){const e={};return ql(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(r,(n,s)=>{const i=pi(s,t.qu(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function wd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ot||r instanceof ma||r instanceof Dn||r instanceof St||r instanceof fi||r instanceof pa)}function ya(r,t,e){if(!wd(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=fa(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function bo(r,t,e){if((t=$t(t))instanceof di)return t._internalPath;if(typeof t=="string")return Ia(r,t);throw zs("Field path arguments must be of type string or ",r,!1,void 0,e)}const cy=new RegExp("[~\\*/\\[\\]]");function Ia(r,t,e){if(t.search(cy)>=0)throw zs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new di(...t.split("."))._internalPath}catch{throw zs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function zs(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new O(V.INVALID_ARGUMENT,u+r+l)}function Ad(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ly(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ly extends Rd{data(){return super.data()}}function bd(r,t){return typeof t=="string"?Ia(r,t):t instanceof di?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hy{convertValue(t,e="none"){switch(Te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Re(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[vn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>rt(a.doubleValue));return new pa(i)}convertGeoPoint(t){return new ma(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Xs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(vr(t));default:return null}}convertTimestamp(t){const e=te(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=J.fromString(t);L(Dh(n));const s=new Ke(n.get(1),n.get(3)),i=new N(n.popFirst(5));return s.isEqual(e)||bt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vd extends Rd{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Is(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(bd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Is extends Vd{data(t={}){return super.data(t)}}class Sd{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ar(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Is(this._firestore,this._userDataWriter,n.key,n,new ar(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new Is(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ar(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new Is(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ar(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:fy(u.type),doc:l,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fy(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(r){r=Dt(r,St);const t=Dt(r.firestore,ne);return J_(hi(t),r._key).then(e=>Cd(t,r,e))}class Ta extends hy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new St(this.firestore,null,e)}}function Yy(r){r=Dt(r,Or);const t=Dt(r.firestore,ne),e=hi(t),n=new Ta(t);return Pd(r._query),Z_(e,r._query).then(s=>new Sd(t,n,r,s))}function Xy(r,t,e){r=Dt(r,St);const n=Dt(r.firestore,ne),s=dy(r.converter,t);return Ea(n,[oy(Ed(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,Pt.none())])}function Jy(r,t,e,...n){r=Dt(r,St);const s=Dt(r.firestore,ne),i=Ed(s);let a;return a=typeof(t=$t(t))=="string"||t instanceof di?uy(i,"updateDoc",r._key,t,e,n):ay(i,"updateDoc",r._key,t),Ea(s,[a.toMutation(r._key,Pt.exists(!0))])}function Zy(r){return Ea(Dt(r.firestore,ne),[new ri(r._key,Pt.none())])}function tI(r,...t){var e,n,s;r=$t(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Yc(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Yc(t[a])){const p=t[a];t[a]=(e=p.next)===null||e===void 0?void 0:e.bind(p),t[a+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),t[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,d,m;if(r instanceof St)d=Dt(r.firestore,ne),m=Sr(r._key.path),l={next:p=>{t[a]&&t[a](Cd(d,r,p))},error:t[a+1],complete:t[a+2]};else{const p=Dt(r,Or);d=Dt(p.firestore,ne),m=p._query;const I=new Ta(d);l={next:b=>{t[a]&&t[a](new Sd(d,I,p,b))},error:t[a+1],complete:t[a+2]},Pd(r._query)}return function(I,b,C,x){const S=new da(x),j=new ca(b,S,C);return I.asyncQueue.enqueueAndForget(async()=>oa(await js(I),j)),()=>{S.su(),I.asyncQueue.enqueueAndForget(async()=>aa(await js(I),j))}}(hi(d),m,u,l)}function Ea(r,t){return function(n,s){const i=new Kt;return n.asyncQueue.enqueueAndForget(async()=>U_(await X_(n),s,i)),i.promise}(hi(r),t)}function Cd(r,t,e){const n=e.docs.get(t._key),s=new Ta(r);return new Vd(r,s,t._key,n,new ar(e.hasPendingWrites,e.fromCache),t.converter)}function eI(){return new _a("serverTimestamp")}(function(t,e=!0){(function(s){xn=s})(pl),mr(new gn("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new ne(new zm(n.getProvider("auth-internal")),new Gm(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ke(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),ge(ku,Nu,t),ge(ku,Nu,"esm2017")})();var my="firebase",py="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge(my,py,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="firebasestorage.googleapis.com",gy="storageBucket",_y=2*60*1e3,yy=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ye{constructor(t,e,n=0){super(Yi(t),`Firebase Storage: ${e} (${Yi(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Yi(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ht;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ht||(Ht={}));function Yi(r){return"storage/"+r}function Iy(){const r="An unknown error occurred, please check the error payload for server response.";return new Wt(Ht.UNKNOWN,r)}function Ty(){return new Wt(Ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ey(){return new Wt(Ht.CANCELED,"User canceled the upload/download.")}function vy(r){return new Wt(Ht.INVALID_URL,"Invalid URL '"+r+"'.")}function wy(r){return new Wt(Ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Xc(r){return new Wt(Ht.INVALID_ARGUMENT,r)}function xd(){return new Wt(Ht.APP_DELETED,"The Firebase app was deleted.")}function Ay(r){return new Wt(Ht.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Ut.makeFromUrl(t,e)}catch{return new Ut(t,"")}if(n.path==="")return n;throw wy(t)}static makeFromUrl(t,e){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(K){K.path_=decodeURIComponent(K.path)}const m="v[A-Za-z0-9_]+",p=e.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${m}/b/${s}/o${I}`,"i"),C={bucket:1,path:3},x=e===Dd?"(?:storage.googleapis.com|storage.cloud.google.com)":e,S="([^?#]*)",j=new RegExp(`^https?://${x}/${s}/${S}`,"i"),F=[{regex:u,indices:l,postModify:i},{regex:b,indices:C,postModify:d},{regex:j,indices:{bucket:1,path:2},postModify:d}];for(let K=0;K<F.length;K++){const X=F[K],G=X.regex.exec(t);if(G){const T=G[X.indices.bucket];let g=G[X.indices.path];g||(g=""),n=new Ut(T,g),X.postModify(n);break}}if(n==null)throw vy(t);return n}}class Ry{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(r,t,e){let n=1,s=null,i=null,a=!1,u=0;function l(){return u===2}let d=!1;function m(...S){d||(d=!0,t.apply(null,S))}function p(S){s=setTimeout(()=>{s=null,r(b,l())},S)}function I(){i&&clearTimeout(i)}function b(S,...j){if(d){I();return}if(S){I(),m.call(null,S,...j);return}if(l()||a){I(),m.call(null,S,...j);return}n<64&&(n*=2);let F;u===1?(u=2,F=0):F=(n+Math.random())*1e3,p(F)}let C=!1;function x(S){C||(C=!0,I(),!d&&(s!==null?(S||(u=2),clearTimeout(s),p(0)):S||(u=1)))}return p(0),i=setTimeout(()=>{a=!0,x(!0)},e),x}function Py(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(r){return r!==void 0}function Jc(r,t,e,n){if(n<t)throw Xc(`Invalid value for '${r}'. Expected ${t} or greater.`);if(n>e)throw Xc(`Invalid value for '${r}'. Expected ${e} or less.`)}function Sy(r){const t=encodeURIComponent;let e="?";for(const n in r)if(r.hasOwnProperty(n)){const s=t(n)+"="+t(r[n]);e=e+s+"&"}return e=e.slice(0,-1),e}var Ks;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ks||(Ks={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(r,t){const e=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=t.indexOf(r)!==-1;return e||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t,e,n,s,i,a,u,l,d,m,p,I=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=p,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,C)=>{this.resolve_=b,this.reject_=C,this.start_()})}start_(){const t=(n,s)=>{if(s){n(!1,new us(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const l=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===Ks.NO_ERROR,l=i.getStatus();if(!u||Cy(l,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===Ks.ABORT;n(!1,new us(!1,null,m));return}const d=this.successCodes_.indexOf(l)!==-1;n(!0,new us(d,i))})},e=(n,s)=>{const i=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());Vy(l)?i(l):i()}catch(l){a(l)}else if(u!==null){const l=Iy();l.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,l)):a(l)}else if(s.canceled){const l=this.appDelete_?xd():Ey();a(l)}else{const l=Ty();a(l)}};this.canceled_?e(!1,new us(!1,null,!0)):this.backoffId_=by(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Py(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class us{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function xy(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function ky(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ny(r,t){t&&(r["X-Firebase-GMPID"]=t)}function Oy(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function My(r,t,e,n,s,i,a=!0){const u=Sy(r.urlParams),l=r.url+u,d=Object.assign({},r.headers);return Ny(d,t),xy(d,e),ky(d,i),Oy(d,n),new Dy(l,r.method,d,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function Ly(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){this._service=t,e instanceof Ut?this._location=e:this._location=Ut.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new $s(t,e)}get root(){const t=new Ut(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ly(this._location.path)}get storage(){return this._service}get parent(){const t=Fy(this._location.path);if(t===null)return null;const e=new Ut(this._location.bucket,t);return new $s(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Ay(t)}}function Zc(r,t){const e=t==null?void 0:t[gy];return e==null?null:Ut.makeFromBucketSpec(e,r)}function By(r,t,e,n={}){r.host=`${t}:${e}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:ol(s,r.app.options.projectId))}class Uy{constructor(t,e,n,s,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Dd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_y,this._maxUploadRetryTime=yy,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=Zc(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,t):this._bucket=Zc(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Jc("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Jc("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(ml(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $s(this,t)}_makeRequest(t,e,n,s,i=!0){if(this._deleted)return new Ry(xd());{const a=My(t,this._appId,n,s,e,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,s).getPromise()}}const tl="@firebase/storage",el="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="storage";function nI(r=gl(),t){r=$t(r);const n=fl(r,kd).getImmediate({identifier:t}),s=sl("storage");return s&&qy(n,...s),n}function qy(r,t,e,n={}){By(r,t,e,n)}function jy(r,{instanceIdentifier:t}){const e=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new Uy(e,n,s,t,pl)}function zy(){mr(new gn(kd,jy,"PUBLIC").setMultipleInstances(!0)),ge(tl,el,""),ge(tl,el,"esm2017")}zy();export{ot as T,eI as a,Zy as b,$y as c,Gy as d,Yy as e,Hy as f,Qy as g,nI as h,Cm as i,Wy as j,tI as o,Xy as s,Jy as u};
