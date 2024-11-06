import{d as he,aA as et,b as B,c as G,J as w,X as fe,w as Z,g as N,aB as Kt,a1 as tt,E as Xt,p as rt,i as nt,e as T,k as be,t as ge,aC as Qt,aD as Pt,aE as er,V as ot,aF as pt,r as Le,o as Ot,aG as tr,f as K,F as jt,Y as rr,D as Pe,s as nr,I as we,m as or,ag as ar,a0 as $t,n as Ce,aH as ir}from"./entry.1b019181.js";import sr from"./ProseCodeInline.8bb7c25b.js";import cr from"./Alert.051a8c47.js";import ur from"./ProseA.aee4bfa3.js";import{_ as fr}from"./EditOnLink.vue.15297916.js";import lr from"./DocsPrevNext.681416b4.js";import pr from"./DocsToc.95469862.js";import"./slot.bc9114be.js";import"./node.676c5e99.js";import"./DocsTocLinks.646a0952.js";const yr={},dr=Object.freeze(Object.defineProperty({__proto__:null,default:yr},Symbol.toStringTag,{value:"Module"})),gr=t=>(rt("data-v-3d9a5d42"),t=t(),nt(),t),mr=gr(()=>T("span",{class:"text"},"Go back",-1)),hr=he({__name:"DocsAside",setup(t){const{tree:e}=et();return(r,o)=>{var p;const s=Kt,u=tt,f=Xt;return B(),G("nav",null,[((p=w(e))==null?void 0:p.length)>0?(B(),fe(s,{key:0,links:w(e).reverse()},null,8,["links"])):(B(),fe(f,{key:1,to:"/",class:"go-back-link"},{default:Z(()=>[N(u,{name:"heroicons-outline:arrow-left",class:"icon"}),mr]),_:1}))])}}});const br=be(hr,[["__scopeId","data-v-3d9a5d42"]]),vr=["href"],_r=["alt","src","srcset"],Ar={class:"inline-block px-2 leading-loose"},Sr=he({__name:"AppGithubLink",props:{contributor:{}},setup(t){return(e,r)=>(B(),G("a",{href:`https://github.com/${e.contributor}`,target:"_blank",class:"inline-flex mb-2 mr-2 overflow-hidden transition-colors ease-linear border rounded border-light-border"},[T("img",{alt:e.contributor,src:`https://github.com/${e.contributor}.png?size=32`,srcset:`https://github.com/${e.contributor}.png?size=32 1x, https://github.com/${e.contributor}.png?size=64 2x`,class:"h-8 github-icon",loading:"lazy"},null,8,_r),T("span",Ar,ge(e.contributor),1)],8,vr))}});const wr=be(Sr,[["__scopeId","data-v-9e61598b"]]);var Te={exports:{}};/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */function Et(t,e){return e.some(([r,o])=>r<=t&&t<=o)}function Me(t){if(typeof t!="string")return!1;const e=t.charCodeAt(0);return Et(e,[[12352,12447],[19968,40959],[44032,55203],[131072,191456]])}function Pr(t){return` 
\r	`.includes(t)}function Or(t){if(typeof t!="string")return!1;const e=t.charCodeAt(0);return Et(e,[[33,47],[58,64],[91,96],[123,126],[12288,12351],[65280,65519]])}function jr(t,e={}){let r=0,o=0,s=t.length-1;const u=e.wordsPerMinute||200,f=e.wordBound||Pr;for(;f(t[o]);)o++;for(;f(t[s]);)s--;const p=`${t}
`;for(let d=o;d<=s;d++)if((Me(p[d])||!f(p[d])&&(f(p[d+1])||Me(p[d+1])))&&r++,Me(p[d]))for(;d<=s&&(Or(p[d+1])||f(p[d+1]));)d++;const l=r/u,O=Math.round(l*60*1e3);return{text:Math.ceil(l.toFixed(2))+" min read",minutes:l,time:O,words:r}}var Tt=jr;const $r=Qt(dr);var It={},Bt={},Ft=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},r=Symbol("test"),o=Object(r);if(typeof r=="string"||Object.prototype.toString.call(r)!=="[object Symbol]"||Object.prototype.toString.call(o)!=="[object Symbol]")return!1;var s=42;e[r]=s;for(r in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var u=Object.getOwnPropertySymbols(e);if(u.length!==1||u[0]!==r||!Object.prototype.propertyIsEnumerable.call(e,r))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var f=Object.getOwnPropertyDescriptor(e,r);if(f.value!==s||f.enumerable!==!0)return!1}return!0},Er=Ft,at=function(){return Er()&&!!Symbol.toStringTag},yt=typeof Symbol<"u"&&Symbol,Tr=Ft,Ir=function(){return typeof yt!="function"||typeof Symbol!="function"||typeof yt("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Tr()},dt={foo:{}},Br=Object,Fr=function(){return{__proto__:dt}.foo===dt.foo&&!({__proto__:null}instanceof Br)},kr="Function.prototype.bind called on incompatible ",Dr=Object.prototype.toString,Ur=Math.max,Cr="[object Function]",gt=function(e,r){for(var o=[],s=0;s<e.length;s+=1)o[s]=e[s];for(var u=0;u<r.length;u+=1)o[u+e.length]=r[u];return o},Mr=function(e,r){for(var o=[],s=r||0,u=0;s<e.length;s+=1,u+=1)o[u]=e[s];return o},Rr=function(t,e){for(var r="",o=0;o<t.length;o+=1)r+=t[o],o+1<t.length&&(r+=e);return r},Nr=function(e){var r=this;if(typeof r!="function"||Dr.apply(r)!==Cr)throw new TypeError(kr+r);for(var o=Mr(arguments,1),s,u=function(){if(this instanceof s){var b=r.apply(this,gt(o,arguments));return Object(b)===b?b:this}return r.apply(e,gt(o,arguments))},f=Ur(0,r.length-o.length),p=[],l=0;l<f;l++)p[l]="$"+l;if(s=Function("binder","return function ("+Rr(p,",")+"){ return binder.apply(this,arguments); }")(u),r.prototype){var O=function(){};O.prototype=r.prototype,s.prototype=new O,O.prototype=null}return s},Gr=Nr,it=Function.prototype.bind||Gr,xr=Function.prototype.call,zr=Object.prototype.hasOwnProperty,Wr=it,Vr=Wr.call(xr,zr),m,le=SyntaxError,kt=Function,ue=TypeError,Re=function(t){try{return kt('"use strict"; return ('+t+").constructor;")()}catch{}},X=Object.getOwnPropertyDescriptor;if(X)try{X({},"")}catch{X=null}var Ne=function(){throw new ue},Lr=X?function(){try{return arguments.callee,Ne}catch{try{return X(arguments,"callee").get}catch{return Ne}}}():Ne,ae=Ir(),Jr=Fr(),E=Object.getPrototypeOf||(Jr?function(t){return t.__proto__}:null),se={},Hr=typeof Uint8Array>"u"||!E?m:E(Uint8Array),Q={"%AggregateError%":typeof AggregateError>"u"?m:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?m:ArrayBuffer,"%ArrayIteratorPrototype%":ae&&E?E([][Symbol.iterator]()):m,"%AsyncFromSyncIteratorPrototype%":m,"%AsyncFunction%":se,"%AsyncGenerator%":se,"%AsyncGeneratorFunction%":se,"%AsyncIteratorPrototype%":se,"%Atomics%":typeof Atomics>"u"?m:Atomics,"%BigInt%":typeof BigInt>"u"?m:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?m:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?m:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?m:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?m:Float32Array,"%Float64Array%":typeof Float64Array>"u"?m:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?m:FinalizationRegistry,"%Function%":kt,"%GeneratorFunction%":se,"%Int8Array%":typeof Int8Array>"u"?m:Int8Array,"%Int16Array%":typeof Int16Array>"u"?m:Int16Array,"%Int32Array%":typeof Int32Array>"u"?m:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":ae&&E?E(E([][Symbol.iterator]())):m,"%JSON%":typeof JSON=="object"?JSON:m,"%Map%":typeof Map>"u"?m:Map,"%MapIteratorPrototype%":typeof Map>"u"||!ae||!E?m:E(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?m:Promise,"%Proxy%":typeof Proxy>"u"?m:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?m:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?m:Set,"%SetIteratorPrototype%":typeof Set>"u"||!ae||!E?m:E(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?m:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":ae&&E?E(""[Symbol.iterator]()):m,"%Symbol%":ae?Symbol:m,"%SyntaxError%":le,"%ThrowTypeError%":Lr,"%TypedArray%":Hr,"%TypeError%":ue,"%Uint8Array%":typeof Uint8Array>"u"?m:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?m:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?m:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?m:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?m:WeakMap,"%WeakRef%":typeof WeakRef>"u"?m:WeakRef,"%WeakSet%":typeof WeakSet>"u"?m:WeakSet};if(E)try{null.error}catch(t){var qr=E(E(t));Q["%Error.prototype%"]=qr}var Yr=function t(e){var r;if(e==="%AsyncFunction%")r=Re("async function () {}");else if(e==="%GeneratorFunction%")r=Re("function* () {}");else if(e==="%AsyncGeneratorFunction%")r=Re("async function* () {}");else if(e==="%AsyncGenerator%"){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if(e==="%AsyncIteratorPrototype%"){var s=t("%AsyncGenerator%");s&&E&&(r=E(s.prototype))}return Q[e]=r,r},mt={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},ve=it,Ie=Vr,Zr=ve.call(Function.call,Array.prototype.concat),Kr=ve.call(Function.apply,Array.prototype.splice),ht=ve.call(Function.call,String.prototype.replace),Be=ve.call(Function.call,String.prototype.slice),Xr=ve.call(Function.call,RegExp.prototype.exec),Qr=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,en=/\\(\\)?/g,tn=function(e){var r=Be(e,0,1),o=Be(e,-1);if(r==="%"&&o!=="%")throw new le("invalid intrinsic syntax, expected closing `%`");if(o==="%"&&r!=="%")throw new le("invalid intrinsic syntax, expected opening `%`");var s=[];return ht(e,Qr,function(u,f,p,l){s[s.length]=p?ht(l,en,"$1"):f||u}),s},rn=function(e,r){var o=e,s;if(Ie(mt,o)&&(s=mt[o],o="%"+s[0]+"%"),Ie(Q,o)){var u=Q[o];if(u===se&&(u=Yr(o)),typeof u>"u"&&!r)throw new ue("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:s,name:o,value:u}}throw new le("intrinsic "+e+" does not exist!")},ye=function(e,r){if(typeof e!="string"||e.length===0)throw new ue("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof r!="boolean")throw new ue('"allowMissing" argument must be a boolean');if(Xr(/^%?[^%]*%?$/,e)===null)throw new le("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var o=tn(e),s=o.length>0?o[0]:"",u=rn("%"+s+"%",r),f=u.name,p=u.value,l=!1,O=u.alias;O&&(s=O[0],Kr(o,Zr([0,1],O)));for(var b=1,d=!0;b<o.length;b+=1){var S=o[b],F=Be(S,0,1),I=Be(S,-1);if((F==='"'||F==="'"||F==="`"||I==='"'||I==="'"||I==="`")&&F!==I)throw new le("property names with quotes must have matching quotes");if((S==="constructor"||!d)&&(l=!0),s+="."+S,f="%"+s+"%",Ie(Q,f))p=Q[f];else if(p!=null){if(!(S in p)){if(!r)throw new ue("base intrinsic for "+e+" exists, but the property is not available.");return}if(X&&b+1>=o.length){var P=X(p,S);d=!!P,d&&"get"in P&&!("originalValue"in P.get)?p=P.get:p=p[S]}else d=Ie(p,S),p=p[S];d&&!l&&(Q[f]=p)}}return p},Dt={exports:{}},nn=ye,Je=nn("%Object.defineProperty%",!0),He=function(){if(Je)try{return Je({},"a",{value:1}),!0}catch{return!1}return!1};He.hasArrayLengthDefineBug=function(){if(!He())return null;try{return Je([],"length",{value:1}).length!==1}catch{return!0}};var Ut=He,on=ye,Oe=on("%Object.getOwnPropertyDescriptor%",!0);if(Oe)try{Oe([],"length")}catch{Oe=null}var st=Oe,an=Ut(),ct=ye,me=an&&ct("%Object.defineProperty%",!0);if(me)try{me({},"a",{value:1})}catch{me=!1}var sn=ct("%SyntaxError%"),ie=ct("%TypeError%"),bt=st,cn=function(e,r,o){if(!e||typeof e!="object"&&typeof e!="function")throw new ie("`obj` must be an object or a function`");if(typeof r!="string"&&typeof r!="symbol")throw new ie("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new ie("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new ie("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new ie("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new ie("`loose`, if provided, must be a boolean");var s=arguments.length>3?arguments[3]:null,u=arguments.length>4?arguments[4]:null,f=arguments.length>5?arguments[5]:null,p=arguments.length>6?arguments[6]:!1,l=!!bt&&bt(e,r);if(me)me(e,r,{configurable:f===null&&l?l.configurable:!f,enumerable:s===null&&l?l.enumerable:!s,value:o,writable:u===null&&l?l.writable:!u});else if(p||!s&&!u&&!f)e[r]=o;else throw new sn("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Ct=ye,vt=cn,un=Ut(),_t=st,At=Ct("%TypeError%"),fn=Ct("%Math.floor%"),ln=function(e,r){if(typeof e!="function")throw new At("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||fn(r)!==r)throw new At("`length` must be a positive 32-bit integer");var o=arguments.length>2&&!!arguments[2],s=!0,u=!0;if("length"in e&&_t){var f=_t(e,"length");f&&!f.configurable&&(s=!1),f&&!f.writable&&(u=!1)}return(s||u||!o)&&(un?vt(e,"length",r,!0,!0):vt(e,"length",r)),e};(function(t){var e=it,r=ye,o=ln,s=r("%TypeError%"),u=r("%Function.prototype.apply%"),f=r("%Function.prototype.call%"),p=r("%Reflect.apply%",!0)||e.call(f,u),l=r("%Object.defineProperty%",!0),O=r("%Math.max%");if(l)try{l({},"a",{value:1})}catch{l=null}t.exports=function(S){if(typeof S!="function")throw new s("a function is required");var F=p(e,f,arguments);return o(F,1+O(0,S.length-(arguments.length-1)),!0)};var b=function(){return p(e,u,arguments)};l?l(t.exports,"apply",{value:b}):t.exports.apply=b})(Dt);var Mt=Dt.exports,Rt=ye,Nt=Mt,pn=Nt(Rt("String.prototype.indexOf")),Gt=function(e,r){var o=Rt(e,!!r);return typeof o=="function"&&pn(e,".prototype.")>-1?Nt(o):o},yn=at(),dn=Gt,qe=dn("Object.prototype.toString"),De=function(e){return yn&&e&&typeof e=="object"&&Symbol.toStringTag in e?!1:qe(e)==="[object Arguments]"},xt=function(e){return De(e)?!0:e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&qe(e)!=="[object Array]"&&qe(e.callee)==="[object Function]"},gn=function(){return De(arguments)}();De.isLegacyArguments=xt;var mn=gn?De:xt,hn=Object.prototype.toString,bn=Function.prototype.toString,vn=/^\s*(?:function)?\*/,zt=at(),Ge=Object.getPrototypeOf,_n=function(){if(!zt)return!1;try{return Function("return function*() {}")()}catch{}},xe,An=function(e){if(typeof e!="function")return!1;if(vn.test(bn.call(e)))return!0;if(!zt){var r=hn.call(e);return r==="[object GeneratorFunction]"}if(!Ge)return!1;if(typeof xe>"u"){var o=_n();xe=o?Ge(o):!1}return Ge(e)===xe},Wt=Function.prototype.toString,ce=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,Ye,je;if(typeof ce=="function"&&typeof Object.defineProperty=="function")try{Ye=Object.defineProperty({},"length",{get:function(){throw je}}),je={},ce(function(){throw 42},null,Ye)}catch(t){t!==je&&(ce=null)}else ce=null;var Sn=/^\s*class\b/,Ze=function(e){try{var r=Wt.call(e);return Sn.test(r)}catch{return!1}},ze=function(e){try{return Ze(e)?!1:(Wt.call(e),!0)}catch{return!1}},$e=Object.prototype.toString,wn="[object Object]",Pn="[object Function]",On="[object GeneratorFunction]",jn="[object HTMLAllCollection]",$n="[object HTML document.all class]",En="[object HTMLCollection]",Tn=typeof Symbol=="function"&&!!Symbol.toStringTag,In=!(0 in[,]),Ke=function(){return!1};if(typeof document=="object"){var Bn=document.all;$e.call(Bn)===$e.call(document.all)&&(Ke=function(e){if((In||!e)&&(typeof e>"u"||typeof e=="object"))try{var r=$e.call(e);return(r===jn||r===$n||r===En||r===wn)&&e("")==null}catch{}return!1})}var Fn=ce?function(e){if(Ke(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;try{ce(e,null,Ye)}catch(r){if(r!==je)return!1}return!Ze(e)&&ze(e)}:function(e){if(Ke(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(Tn)return ze(e);if(Ze(e))return!1;var r=$e.call(e);return r!==Pn&&r!==On&&!/^\[object HTML/.test(r)?!1:ze(e)},kn=Fn,Dn=Object.prototype.toString,Vt=Object.prototype.hasOwnProperty,Un=function(e,r,o){for(var s=0,u=e.length;s<u;s++)Vt.call(e,s)&&(o==null?r(e[s],s,e):r.call(o,e[s],s,e))},Cn=function(e,r,o){for(var s=0,u=e.length;s<u;s++)o==null?r(e.charAt(s),s,e):r.call(o,e.charAt(s),s,e)},Mn=function(e,r,o){for(var s in e)Vt.call(e,s)&&(o==null?r(e[s],s,e):r.call(o,e[s],s,e))},Rn=function(e,r,o){if(!kn(r))throw new TypeError("iterator must be a function");var s;arguments.length>=3&&(s=o),Dn.call(e)==="[object Array]"?Un(e,r,s):typeof e=="string"?Cn(e,r,s):Mn(e,r,s)},Nn=Rn,We=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],Gn=typeof globalThis>"u"?Pt:globalThis,xn=function(){for(var e=[],r=0;r<We.length;r++)typeof Gn[We[r]]=="function"&&(e[e.length]=We[r]);return e},Fe=Nn,zn=xn,St=Mt,ut=Gt,Ee=st,Wn=ut("Object.prototype.toString"),Lt=at(),wt=typeof globalThis>"u"?Pt:globalThis,Xe=zn(),ft=ut("String.prototype.slice"),Ve=Object.getPrototypeOf,Vn=ut("Array.prototype.indexOf",!0)||function(e,r){for(var o=0;o<e.length;o+=1)if(e[o]===r)return o;return-1},ke={__proto__:null};Lt&&Ee&&Ve?Fe(Xe,function(t){var e=new wt[t];if(Symbol.toStringTag in e){var r=Ve(e),o=Ee(r,Symbol.toStringTag);if(!o){var s=Ve(r);o=Ee(s,Symbol.toStringTag)}ke["$"+t]=St(o.get)}}):Fe(Xe,function(t){var e=new wt[t],r=e.slice||e.set;r&&(ke["$"+t]=St(r))});var Ln=function(e){var r=!1;return Fe(ke,function(o,s){if(!r)try{"$"+o(e)===s&&(r=ft(s,1))}catch{}}),r},Jn=function(e){var r=!1;return Fe(ke,function(o,s){if(!r)try{o(e),r=ft(s,1)}catch{}}),r},Jt=function(e){if(!e||typeof e!="object")return!1;if(!Lt){var r=ft(Wn(e),8,-1);return Vn(Xe,r)>-1?r:r!=="Object"?!1:Jn(e)}return Ee?Ln(e):null},Hn=Jt,qn=function(e){return!!Hn(e)};(function(t){var e=mn,r=An,o=Jt,s=qn;function u(i){return i.call.bind(i)}var f=typeof BigInt<"u",p=typeof Symbol<"u",l=u(Object.prototype.toString),O=u(Number.prototype.valueOf),b=u(String.prototype.valueOf),d=u(Boolean.prototype.valueOf);if(f)var S=u(BigInt.prototype.valueOf);if(p)var F=u(Symbol.prototype.valueOf);function I(i,Zt){if(typeof i!="object")return!1;try{return Zt(i),!0}catch{return!1}}t.isArgumentsObject=e,t.isGeneratorFunction=r,t.isTypedArray=s;function P(i){return typeof Promise<"u"&&i instanceof Promise||i!==null&&typeof i=="object"&&typeof i.then=="function"&&typeof i.catch=="function"}t.isPromise=P;function j(i){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(i):s(i)||a(i)}t.isArrayBufferView=j;function $(i){return o(i)==="Uint8Array"}t.isUint8Array=$;function k(i){return o(i)==="Uint8ClampedArray"}t.isUint8ClampedArray=k;function C(i){return o(i)==="Uint16Array"}t.isUint16Array=C;function ee(i){return o(i)==="Uint32Array"}t.isUint32Array=ee;function J(i){return o(i)==="Int8Array"}t.isInt8Array=J;function de(i){return o(i)==="Int16Array"}t.isInt16Array=de;function M(i){return o(i)==="Int32Array"}t.isInt32Array=M;function W(i){return o(i)==="Float32Array"}t.isFloat32Array=W;function x(i){return o(i)==="Float64Array"}t.isFloat64Array=x;function V(i){return o(i)==="BigInt64Array"}t.isBigInt64Array=V;function z(i){return o(i)==="BigUint64Array"}t.isBigUint64Array=z;function U(i){return l(i)==="[object Map]"}U.working=typeof Map<"u"&&U(new Map);function te(i){return typeof Map>"u"?!1:U.working?U(i):i instanceof Map}t.isMap=te;function R(i){return l(i)==="[object Set]"}R.working=typeof Set<"u"&&R(new Set);function H(i){return typeof Set>"u"?!1:R.working?R(i):i instanceof Set}t.isSet=H;function q(i){return l(i)==="[object WeakMap]"}q.working=typeof WeakMap<"u"&&q(new WeakMap);function Ue(i){return typeof WeakMap>"u"?!1:q.working?q(i):i instanceof WeakMap}t.isWeakMap=Ue;function re(i){return l(i)==="[object WeakSet]"}re.working=typeof WeakSet<"u"&&re(new WeakSet);function L(i){return re(i)}t.isWeakSet=L;function ne(i){return l(i)==="[object ArrayBuffer]"}ne.working=typeof ArrayBuffer<"u"&&ne(new ArrayBuffer);function _e(i){return typeof ArrayBuffer>"u"?!1:ne.working?ne(i):i instanceof ArrayBuffer}t.isArrayBuffer=_e;function n(i){return l(i)==="[object DataView]"}n.working=typeof ArrayBuffer<"u"&&typeof DataView<"u"&&n(new DataView(new ArrayBuffer(1),0,1));function a(i){return typeof DataView>"u"?!1:n.working?n(i):i instanceof DataView}t.isDataView=a;var c=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:void 0;function y(i){return l(i)==="[object SharedArrayBuffer]"}function v(i){return typeof c>"u"?!1:(typeof y.working>"u"&&(y.working=y(new c)),y.working?y(i):i instanceof c)}t.isSharedArrayBuffer=v;function _(i){return l(i)==="[object AsyncFunction]"}t.isAsyncFunction=_;function g(i){return l(i)==="[object Map Iterator]"}t.isMapIterator=g;function h(i){return l(i)==="[object Set Iterator]"}t.isSetIterator=h;function A(i){return l(i)==="[object Generator]"}t.isGeneratorObject=A;function D(i){return l(i)==="[object WebAssembly.Module]"}t.isWebAssemblyCompiledModule=D;function Y(i){return I(i,O)}t.isNumberObject=Y;function Ae(i){return I(i,b)}t.isStringObject=Ae;function oe(i){return I(i,d)}t.isBooleanObject=oe;function Se(i){return f&&I(i,S)}t.isBigIntObject=Se;function lt(i){return p&&I(i,F)}t.isSymbolObject=lt;function qt(i){return Y(i)||Ae(i)||oe(i)||Se(i)||lt(i)}t.isBoxedPrimitive=qt;function Yt(i){return typeof Uint8Array<"u"&&(_e(i)||v(i))}t.isAnyArrayBuffer=Yt,["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(i){Object.defineProperty(t,i,{enumerable:!1,value:function(){throw new Error(i+" is not supported in userland")}})})})(Bt);var Yn=function(e){return e&&typeof e=="object"&&typeof e.copy=="function"&&typeof e.fill=="function"&&typeof e.readUInt8=="function"},Qe={exports:{}};typeof Object.create=="function"?Qe.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Qe.exports=function(e,r){if(r){e.super_=r;var o=function(){};o.prototype=r.prototype,e.prototype=new o,e.prototype.constructor=e}};var Zn=Qe.exports;(function(t){var e=Object.getOwnPropertyDescriptors||function(a){for(var c=Object.keys(a),y={},v=0;v<c.length;v++)y[c[v]]=Object.getOwnPropertyDescriptor(a,c[v]);return y},r=/%[sdj%]/g;t.format=function(n){if(!J(n)){for(var a=[],c=0;c<arguments.length;c++)a.push(f(arguments[c]));return a.join(" ")}for(var c=1,y=arguments,v=y.length,_=String(n).replace(r,function(h){if(h==="%%")return"%";if(c>=v)return h;switch(h){case"%s":return String(y[c++]);case"%d":return Number(y[c++]);case"%j":try{return JSON.stringify(y[c++])}catch{return"[Circular]"}default:return h}}),g=y[c];c<v;g=y[++c])k(g)||!x(g)?_+=" "+g:_+=" "+f(g);return _},t.deprecate=function(n,a){if(typeof process<"u"&&process.noDeprecation===!0)return n;if(typeof process>"u")return function(){return t.deprecate(n,a).apply(this,arguments)};var c=!1;function y(){if(!c){if(process.throwDeprecation)throw new Error(a);process.traceDeprecation?console.trace(a):console.error(a),c=!0}return n.apply(this,arguments)}return y};var o={},s=/^$/;if({}.NODE_DEBUG){var u={}.NODE_DEBUG;u=u.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),s=new RegExp("^"+u+"$","i")}t.debuglog=function(n){if(n=n.toUpperCase(),!o[n])if(s.test(n)){var a=process.pid;o[n]=function(){var c=t.format.apply(t,arguments);console.error("%s %d: %s",n,a,c)}}else o[n]=function(){};return o[n]};function f(n,a){var c={seen:[],stylize:l};return arguments.length>=3&&(c.depth=arguments[2]),arguments.length>=4&&(c.colors=arguments[3]),$(a)?c.showHidden=a:a&&t._extend(c,a),M(c.showHidden)&&(c.showHidden=!1),M(c.depth)&&(c.depth=2),M(c.colors)&&(c.colors=!1),M(c.customInspect)&&(c.customInspect=!0),c.colors&&(c.stylize=p),b(c,n,c.depth)}t.inspect=f,f.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},f.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function p(n,a){var c=f.styles[a];return c?"\x1B["+f.colors[c][0]+"m"+n+"\x1B["+f.colors[c][1]+"m":n}function l(n,a){return n}function O(n){var a={};return n.forEach(function(c,y){a[c]=!0}),a}function b(n,a,c){if(n.customInspect&&a&&U(a.inspect)&&a.inspect!==t.inspect&&!(a.constructor&&a.constructor.prototype===a)){var y=a.inspect(c,n);return J(y)||(y=b(n,y,c)),y}var v=d(n,a);if(v)return v;var _=Object.keys(a),g=O(_);if(n.showHidden&&(_=Object.getOwnPropertyNames(a)),z(a)&&(_.indexOf("message")>=0||_.indexOf("description")>=0))return S(a);if(_.length===0){if(U(a)){var h=a.name?": "+a.name:"";return n.stylize("[Function"+h+"]","special")}if(W(a))return n.stylize(RegExp.prototype.toString.call(a),"regexp");if(V(a))return n.stylize(Date.prototype.toString.call(a),"date");if(z(a))return S(a)}var A="",D=!1,Y=["{","}"];if(j(a)&&(D=!0,Y=["[","]"]),U(a)){var Ae=a.name?": "+a.name:"";A=" [Function"+Ae+"]"}if(W(a)&&(A=" "+RegExp.prototype.toString.call(a)),V(a)&&(A=" "+Date.prototype.toUTCString.call(a)),z(a)&&(A=" "+S(a)),_.length===0&&(!D||a.length==0))return Y[0]+A+Y[1];if(c<0)return W(a)?n.stylize(RegExp.prototype.toString.call(a),"regexp"):n.stylize("[Object]","special");n.seen.push(a);var oe;return D?oe=F(n,a,c,g,_):oe=_.map(function(Se){return I(n,a,c,g,Se,D)}),n.seen.pop(),P(oe,A,Y)}function d(n,a){if(M(a))return n.stylize("undefined","undefined");if(J(a)){var c="'"+JSON.stringify(a).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return n.stylize(c,"string")}if(ee(a))return n.stylize(""+a,"number");if($(a))return n.stylize(""+a,"boolean");if(k(a))return n.stylize("null","null")}function S(n){return"["+Error.prototype.toString.call(n)+"]"}function F(n,a,c,y,v){for(var _=[],g=0,h=a.length;g<h;++g)re(a,String(g))?_.push(I(n,a,c,y,String(g),!0)):_.push("");return v.forEach(function(A){A.match(/^\d+$/)||_.push(I(n,a,c,y,A,!0))}),_}function I(n,a,c,y,v,_){var g,h,A;if(A=Object.getOwnPropertyDescriptor(a,v)||{value:a[v]},A.get?A.set?h=n.stylize("[Getter/Setter]","special"):h=n.stylize("[Getter]","special"):A.set&&(h=n.stylize("[Setter]","special")),re(y,v)||(g="["+v+"]"),h||(n.seen.indexOf(A.value)<0?(k(c)?h=b(n,A.value,null):h=b(n,A.value,c-1),h.indexOf(`
`)>-1&&(_?h=h.split(`
`).map(function(D){return"  "+D}).join(`
`).slice(2):h=`
`+h.split(`
`).map(function(D){return"   "+D}).join(`
`))):h=n.stylize("[Circular]","special")),M(g)){if(_&&v.match(/^\d+$/))return h;g=JSON.stringify(""+v),g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(g=g.slice(1,-1),g=n.stylize(g,"name")):(g=g.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),g=n.stylize(g,"string"))}return g+": "+h}function P(n,a,c){var y=n.reduce(function(v,_){return _.indexOf(`
`)>=0,v+_.replace(/\u001b\[\d\d?m/g,"").length+1},0);return y>60?c[0]+(a===""?"":a+`
 `)+" "+n.join(`,
  `)+" "+c[1]:c[0]+a+" "+n.join(", ")+" "+c[1]}t.types=Bt;function j(n){return Array.isArray(n)}t.isArray=j;function $(n){return typeof n=="boolean"}t.isBoolean=$;function k(n){return n===null}t.isNull=k;function C(n){return n==null}t.isNullOrUndefined=C;function ee(n){return typeof n=="number"}t.isNumber=ee;function J(n){return typeof n=="string"}t.isString=J;function de(n){return typeof n=="symbol"}t.isSymbol=de;function M(n){return n===void 0}t.isUndefined=M;function W(n){return x(n)&&R(n)==="[object RegExp]"}t.isRegExp=W,t.types.isRegExp=W;function x(n){return typeof n=="object"&&n!==null}t.isObject=x;function V(n){return x(n)&&R(n)==="[object Date]"}t.isDate=V,t.types.isDate=V;function z(n){return x(n)&&(R(n)==="[object Error]"||n instanceof Error)}t.isError=z,t.types.isNativeError=z;function U(n){return typeof n=="function"}t.isFunction=U;function te(n){return n===null||typeof n=="boolean"||typeof n=="number"||typeof n=="string"||typeof n=="symbol"||typeof n>"u"}t.isPrimitive=te,t.isBuffer=Yn;function R(n){return Object.prototype.toString.call(n)}function H(n){return n<10?"0"+n.toString(10):n.toString(10)}var q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Ue(){var n=new Date,a=[H(n.getHours()),H(n.getMinutes()),H(n.getSeconds())].join(":");return[n.getDate(),q[n.getMonth()],a].join(" ")}t.log=function(){console.log("%s - %s",Ue(),t.format.apply(t,arguments))},t.inherits=Zn,t._extend=function(n,a){if(!a||!x(a))return n;for(var c=Object.keys(a),y=c.length;y--;)n[c[y]]=a[c[y]];return n};function re(n,a){return Object.prototype.hasOwnProperty.call(n,a)}var L=typeof Symbol<"u"?Symbol("util.promisify.custom"):void 0;t.promisify=function(a){if(typeof a!="function")throw new TypeError('The "original" argument must be of type Function');if(L&&a[L]){var c=a[L];if(typeof c!="function")throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(c,L,{value:c,enumerable:!1,writable:!1,configurable:!0}),c}function c(){for(var y,v,_=new Promise(function(A,D){y=A,v=D}),g=[],h=0;h<arguments.length;h++)g.push(arguments[h]);g.push(function(A,D){A?v(A):y(D)});try{a.apply(this,g)}catch(A){v(A)}return _}return Object.setPrototypeOf(c,Object.getPrototypeOf(a)),L&&Object.defineProperty(c,L,{value:c,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(c,e(a))},t.promisify.custom=L;function ne(n,a){if(!n){var c=new Error("Promise was rejected with a falsy value");c.reason=n,n=c}return a(n)}function _e(n){if(typeof n!="function")throw new TypeError('The "original" argument must be of type Function');function a(){for(var c=[],y=0;y<arguments.length;y++)c.push(arguments[y]);var v=c.pop();if(typeof v!="function")throw new TypeError("The last argument must be of type Function");var _=this,g=function(){return v.apply(_,arguments)};n.apply(this,c).then(function(h){process.nextTick(g.bind(null,null,h))},function(h){process.nextTick(ne.bind(null,h,g))})}return Object.setPrototypeOf(a,Object.getPrototypeOf(n)),Object.defineProperties(a,e(n)),a}t.callbackify=_e})(It);/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */const Kn=Tt,Ht=$r.Transform,Xn=It;function pe(t){if(!(this instanceof pe))return new pe(t);Ht.call(this,{objectMode:!0}),this.options=t||{},this.stats={minutes:0,time:0,words:0}}Xn.inherits(pe,Ht);pe.prototype._transform=function(t,e,r){const o=Kn(t.toString(e),this.options);this.stats.minutes+=o.minutes,this.stats.time+=o.time,this.stats.words+=o.words,r()};pe.prototype._flush=function(t){this.stats.text=Math.ceil(this.stats.minutes.toFixed(2))+" min read",this.push(this.stats),t()};var Qn=pe;Te.exports.default=Te.exports=Tt;Te.exports.readingTimeStream=Qn;var eo=Te.exports;const to=er(eo),ro={class:"flex flex-col"},no={key:0,class:"mb-4"},oo={class:"my-1"},ao={class:"text-xs md:text-sm"},io=T("span",{class:"mx-1"},"|",-1),so={class:"text-xs md:text-sm"},co=T("span",{class:"mx-1"},"|",-1),uo=T("span",{class:"text-xs md:text-sm",id:"busuanzi_container_page_pv"},[T("span",null,"閱讀次數："),T("span",{id:"busuanzi_value_page_pv"}),Pe(" 次 ")],-1),fo={key:1,class:"mt-1 z-10"},lo=he({__name:"AppSubtitle",setup(t){const{page:e}=ot(),r=pt({time:0,words:0,minutes:0}),o=pt([]),s=Le("");return Ot(()=>{s.value=e.value&&e.value.pageTitle?e.value.pageTitle:"",Array.isArray(e.value.contributors)&&o.push(...e.value.contributors);const f=(Array.isArray(e.value.body.children)?e.value.body.children:[e.value.body.children]).reduce((b,d)=>(d.children&&d.children.length>0&&d.children.forEach(S=>{S.type==="text"&&S.value&&(b+=S.value)}),b),""),{time:p,words:l,minutes:O}=to(f);r.time=p,r.words=l,r.minutes=O,tr.fetch()}),(u,f)=>{const p=wr;return B(),G("div",ro,[w(s)?(B(),G("div",no,[T("h1",null,ge(w(s)),1)])):K("",!0),T("div",oo,[T("span",ao," 字數總計："+ge(w(r).words)+" 個 ",1),io,T("span",so," 閱讀時長："+ge(Math.ceil(w(r).minutes))+" 分鐘 ",1),co,uo]),w(o)?(B(),G("div",fo,[(B(!0),G(jt,null,rr(w(o),(l,O)=>(B(),fe(p,{key:O,contributor:l,class:"mr-2"},null,8,["contributor"]))),128))])):K("",!0)])}}}),po=t=>(rt("data-v-70e24a2d"),t=t(),nt(),t),yo={key:0,class:"docs-page-bottom"},go={key:0,class:"edit-link"},mo=po(()=>T("span",null," 在GitHub上在編輯此頁面 ",-1)),ho=he({__name:"DocsPageBottom",setup(t){const{page:e}=ot(),{config:r}=et();return(o,s)=>{var l,O;const u=tt,f=ur,p=fr;return w(e)?(B(),G("div",yo,[(O=(l=w(r))==null?void 0:l.github)!=null&&O.edit?(B(),G("div",go,[N(u,{name:"uil:edit"}),N(p,{page:w(e)},{default:Z(({url:b})=>[N(f,{to:b},{default:Z(()=>[mo]),_:2},1032,["to"])]),_:1},8,["page"])])):K("",!0)])):K("",!0)}}});const bo=be(ho,[["__scopeId","data-v-70e24a2d"]]),vo=t=>(rt("data-v-03c0998f"),t=t(),nt(),t),_o={class:"page-body"},Ao={key:1,class:"toc"},So={class:"toc-wrapper"},wo=vo(()=>T("span",{class:"title"},"Table of Contents",-1)),Po=he({__name:"DocsPageLayout",setup(t){const{page:e}=ot(),{config:r,tree:o}=et(),s=nr(),u=(P,j=!0)=>{var $;return typeof(($=e.value)==null?void 0:$[P])<"u"?e.value[P]:j},f=we(()=>{var P,j,$;return!e.value||(($=(j=(P=e.value)==null?void 0:P.body)==null?void 0:j.children)==null?void 0:$.length)>0}),p=we(()=>{var P,j,$,k,C;return((P=e.value)==null?void 0:P.toc)!==!1&&((C=(k=($=(j=e.value)==null?void 0:j.body)==null?void 0:$.toc)==null?void 0:k.links)==null?void 0:C.length)>=2}),l=we(()=>{var P,j,$,k,C;return((P=e.value)==null?void 0:P.aside)!==!1&&(((j=o.value)==null?void 0:j.length)>1||((C=(k=($=o.value)==null?void 0:$[0])==null?void 0:k.children)==null?void 0:C.length))}),O=we(()=>u("bottom",!0)),b=Le(!1),d=Le(null),S=()=>s.path.split("/").slice(0,2).join("/"),F=or("asideScroll",()=>{var P;return{parentPath:S(),scrollTop:((P=d.value)==null?void 0:P.scrollTop)||0}});function I(){d.value&&(d.value.scrollHeight===0&&setTimeout(I,0),d.value.scrollTop=F.value.scrollTop)}return Ot(()=>{F.value.parentPath!==S()?(F.value.parentPath=S(),F.value.scrollTop=0):I()}),ar(()=>{d.value&&(F.value.scrollTop=d.value.scrollTop)}),(P,j)=>{var V,z,U,te,R,H;const $=br,k=lo,C=sr,ee=cr,J=bo,de=lr,M=tt,W=pr,x=ir;return B(),fe(x,{fluid:(z=(V=w(r))==null?void 0:V.main)==null?void 0:z.fluid,padded:(te=(U=w(r))==null?void 0:U.main)==null?void 0:te.padded,class:Ce(["docs-page-content",{fluid:(H=(R=w(r))==null?void 0:R.main)==null?void 0:H.fluid,"has-toc":w(p),"has-aside":w(l)}])},{default:Z(()=>[w(l)?(B(),G("aside",{key:0,ref_key:"asideNav",ref:d,class:"aside-nav"},[N($,{class:"app-aside"})],512)):K("",!0),T("article",_o,[N(k),w(f)?$t(P.$slots,"default",{key:0},void 0,!0):(B(),fe(ee,{key:1,type:"info"},{default:Z(()=>[Pe(" Start writing in "),N(C,null,{default:Z(()=>[Pe("content/"+ge(w(e)._file),1)]),_:1}),Pe(" to see this page taking shape. ")]),_:1})),w(f)&&w(e)&&w(O)?(B(),G(jt,{key:2},[N(J),N(de)],64)):K("",!0)]),w(p)?(B(),G("div",Ao,[T("div",So,[T("button",{onClick:j[0]||(j[0]=q=>b.value=!w(b))},[wo,N(M,{name:"heroicons-outline:chevron-right",class:Ce(["icon",[w(b)&&"rotate"]])},null,8,["class"])]),T("div",{class:Ce(["docs-toc-wrapper",[w(b)&&"opened"]])},[N(W,{onMove:j[1]||(j[1]=q=>b.value=!1)})],2)])])):K("",!0)]),_:3},8,["fluid","padded","class"])}}});const Oo=be(Po,[["__scopeId","data-v-03c0998f"]]),jo={};function $o(t,e){const r=Oo;return B(),fe(r,null,{default:Z(()=>[$t(t.$slots,"default")]),_:3})}const No=be(jo,[["render",$o]]);export{No as default};
