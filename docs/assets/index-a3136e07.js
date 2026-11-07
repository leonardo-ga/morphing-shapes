(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zs="153",bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ho=0,tr=1,uo=2,ya=1,fo=2,We=3,nn=0,pe=1,Xe=2,tn=0,Wn=1,er=2,nr=3,ir=4,po=5,kn=100,mo=101,go=102,sr=103,rr=104,_o=200,vo=201,xo=202,Mo=203,ba=204,Ta=205,So=206,Eo=207,yo=208,bo=209,To=210,Ao=0,wo=1,Ro=2,Rs=3,Co=4,Lo=5,Po=6,Do=7,Aa=0,Uo=1,Io=2,qe=0,No=1,Fo=2,Oo=3,Bo=4,zo=5,wa=300,Yn=301,qn=302,Cs=303,Ls=304,Gi=306,Ps=1e3,Le=1001,Ds=1002,de=1003,ar=1004,qi=1005,ye=1006,Go=1007,ai=1008,en=1009,Ho=1010,ko=1011,Gs=1012,Ra=1013,Je=1014,Qe=1015,oi=1016,Ca=1017,La=1018,mn=1020,Vo=1021,Pe=1023,Wo=1024,Xo=1025,gn=1026,$n=1027,Yo=1028,Pa=1029,qo=1030,Da=1031,Ua=1033,$i=33776,ji=33777,Ki=33778,Zi=33779,or=35840,lr=35841,cr=35842,hr=35843,$o=36196,ur=37492,dr=37496,fr=37808,pr=37809,mr=37810,gr=37811,_r=37812,vr=37813,xr=37814,Mr=37815,Sr=37816,Er=37817,yr=37818,br=37819,Tr=37820,Ar=37821,Ji=36492,jo=36283,wr=36284,Rr=36285,Cr=36286,Ia=3e3,_n=3001,Ko=3200,Zo=3201,Na=0,Jo=1,vn="",Lt="srgb",Fe="srgb-linear",Fa="display-p3",Qi=7680,Qo=519,tl=512,el=513,nl=514,il=515,sl=516,rl=517,al=518,ol=519,Lr=35044,ll=35048,Pr="300 es",Us=1035,Ye=2e3,Bi=2001;class yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ts=Math.PI/180,Is=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ae[i&255]+ae[i>>8&255]+ae[i>>16&255]+ae[i>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[n&255]+ae[n>>8&255]+ae[n>>16&255]+ae[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function cl(i,t){return(i%t+t)%t}function es(i,t,e){return(1-e)*i+e*t}function Dr(i){return(i&i-1)===0&&i!==0}function Ns(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,o,a,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],g=s[0],p=s[3],u=s[6],E=s[1],M=s[4],T=s[7],b=s[2],C=s[5],P=s[8];return r[0]=o*g+a*E+l*b,r[3]=o*p+a*M+l*C,r[6]=o*u+a*T+l*P,r[1]=c*g+h*E+d*b,r[4]=c*p+h*M+d*C,r[7]=c*u+h*T+d*P,r[2]=f*g+m*E+_*b,r[5]=f*p+m*M+_*C,r[8]=f*u+m*T+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,_=e*d+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ns.makeScale(t,e)),this}rotate(t){return this.premultiply(ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ns=new It;function Oa(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Ur={};function ri(i){i in Ur||(Ur[i]=!0,console.warn(i))}function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hl=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ul=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dl(i){return i.convertSRGBToLinear().applyMatrix3(ul)}function fl(i){return i.applyMatrix3(hl).convertLinearToSRGB()}const pl={[Fe]:i=>i,[Lt]:i=>i.convertSRGBToLinear(),[Fa]:dl},ml={[Fe]:i=>i,[Lt]:i=>i.convertLinearToSRGB(),[Fa]:fl},Te={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Fe},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=pl[t],s=ml[e];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let An;class Ba{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{An===void 0&&(An=zi("canvas")),An.width=t.width,An.height=t.height;const n=An.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=An}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gl=0;class za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=ci(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ss(s[o].image)):r.push(ss(s[o]))}else r=ss(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _l=0;class Me extends yn{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Le,s=Le,r=ye,o=ai,a=Pe,l=en,c=Me.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=ci(),this.name="",this.source=new za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===_n?Lt:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case Le:t.x=t.x<0?0:1;break;case Ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case Le:t.y=t.y<0?0:1;break;case Ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?_n:Ia}set encoding(t){ri("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===_n?Lt:vn}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=wa;Me.DEFAULT_ANISOTROPY=1;class Wt{constructor(t=0,e=0,n=0,s=1){Wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,T=(m+1)/2,b=(u+1)/2,C=(h+f)/4,P=(d+g)/4,B=(_+p)/4;return M>T&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=P/n):T>b?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=C/s,r=B/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=B/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(d-g)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mn extends yn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(ri("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_n?Lt:vn),this.texture=new Me(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ye,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ga extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==f||c!==m||h!==_){let p=1-a;const u=l*f+c*m+h*_+d*g,E=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const b=Math.sqrt(M),C=Math.atan2(b,u*E);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}const T=a*E;if(l=l*p+f*T,c=c*p+m*T,h=h*p+_*T,d=d*p+g*T,p===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*m-c*f,t[e+1]=l*_+h*f+c*d-a*m,t[e+2]=c*_+h*m+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d+f*m*_;break;case"YZX":this._x=f*h*d+c*m*_,this._y=c*m*d+f*h*_,this._z=c*h*_-f*m*d,this._w=c*h*d-f*m*_;break;case"XZY":this._x=f*h*d-c*m*_,this._y=c*m*d-f*h*_,this._z=c*h*_+f*m*d,this._w=c*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ir.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ir.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*s-a*n,h=l*n+a*e-r*s,d=l*s+r*n-o*e,f=-r*e-o*n-a*s;return this.x=c*l+f*-r+h*-a-d*-o,this.y=h*l+f*-o+d*-r-c*-a,this.z=d*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rs.copy(this).projectOnVector(t),this.sub(rs)}reflect(t){return this.sub(rs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new L,Ir=new Sn;class hi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),wn.copy(t.boundingBox),wn.applyMatrix4(t.matrixWorld),this.union(wn);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)ze.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ze)}else s.boundingBox===null&&s.computeBoundingBox(),wn.copy(s.boundingBox),wn.applyMatrix4(t.matrixWorld),this.union(wn)}const n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qn),gi.subVectors(this.max,Qn),Rn.subVectors(t.a,Qn),Cn.subVectors(t.b,Qn),Ln.subVectors(t.c,Qn),$e.subVectors(Cn,Rn),je.subVectors(Ln,Cn),ln.subVectors(Rn,Ln);let e=[0,-$e.z,$e.y,0,-je.z,je.y,0,-ln.z,ln.y,$e.z,0,-$e.x,je.z,0,-je.x,ln.z,0,-ln.x,-$e.y,$e.x,0,-je.y,je.x,0,-ln.y,ln.x,0];return!as(e,Rn,Cn,Ln,gi)||(e=[1,0,0,0,1,0,0,0,1],!as(e,Rn,Cn,Ln,gi))?!1:(_i.crossVectors($e,je),e=[_i.x,_i.y,_i.z],as(e,Rn,Cn,Ln,gi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Be[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Be[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Be[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Be[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Be[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Be[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Be[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Be[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Be),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Be=[new L,new L,new L,new L,new L,new L,new L,new L],ze=new L,wn=new hi,Rn=new L,Cn=new L,Ln=new L,$e=new L,je=new L,ln=new L,Qn=new L,gi=new L,_i=new L,cn=new L;function as(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cn.fromArray(i,r);const a=s.x*Math.abs(cn.x)+s.y*Math.abs(cn.y)+s.z*Math.abs(cn.z),l=t.dot(cn),c=e.dot(cn),h=n.dot(cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xl=new hi,ti=new L,os=new L;class Hs{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ti.subVectors(t,this.center);const e=ti.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ti,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(os.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ti.copy(t.center).add(os)),this.expandByPoint(ti.copy(t.center).sub(os))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ge=new L,ls=new L,vi=new L,Ke=new L,cs=new L,xi=new L,hs=new L;class Ml{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ge)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ge.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ge.copy(this.origin).addScaledVector(this.direction,e),Ge.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ls.copy(t).add(e).multiplyScalar(.5),vi.copy(e).sub(t).normalize(),Ke.copy(this.origin).sub(ls);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vi),a=Ke.dot(this.direction),l=-Ke.dot(vi),c=Ke.lengthSq(),h=Math.abs(1-o*o);let d,f,m,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ls).addScaledVector(vi,f),m}intersectSphere(t,e){Ge.subVectors(t.center,this.origin);const n=Ge.dot(this.direction),s=Ge.dot(Ge)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ge)!==null}intersectTriangle(t,e,n,s,r){cs.subVectors(e,t),xi.subVectors(n,t),hs.crossVectors(cs,xi);let o=this.direction.dot(hs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ke.subVectors(this.origin,t);const l=a*this.direction.dot(xi.crossVectors(Ke,xi));if(l<0)return null;const c=a*this.direction.dot(cs.cross(Ke));if(c<0||l+c>o)return null;const h=-a*Ke.dot(hs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,o,a,l,c,h,d,f,m,_,g,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,m,_,g,p)}set(t,e,n,s,r,o,a,l,c,h,d,f,m,_,g,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pn.setFromMatrixColumn(t,0).length(),r=1/Pn.setFromMatrixColumn(t,1).length(),o=1/Pn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,_=c*h,g=c*d;e[0]=f+g*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,_=c*h,g=c*d;e[0]=f-g*a,e[4]=-o*d,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*d,e[8]=_*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+_,e[10]=f-g*d}else if(t.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+g,e[5]=o*h,e[9]=m*d-_,e[2]=_*d-m,e[6]=a*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sl,t,El)}lookAt(t,e,n){const s=this.elements;return _e.subVectors(t,e),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),Ze.crossVectors(n,_e),Ze.lengthSq()===0&&(Math.abs(n.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),Ze.crossVectors(n,_e)),Ze.normalize(),Mi.crossVectors(_e,Ze),s[0]=Ze.x,s[4]=Mi.x,s[8]=_e.x,s[1]=Ze.y,s[5]=Mi.y,s[9]=_e.y,s[2]=Ze.z,s[6]=Mi.z,s[10]=_e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],u=n[14],E=n[3],M=n[7],T=n[11],b=n[15],C=s[0],P=s[4],B=s[8],x=s[12],w=s[1],q=s[5],tt=s[9],F=s[13],G=s[2],H=s[6],K=s[10],X=s[14],Y=s[3],et=s[7],j=s[11],mt=s[15];return r[0]=o*C+a*w+l*G+c*Y,r[4]=o*P+a*q+l*H+c*et,r[8]=o*B+a*tt+l*K+c*j,r[12]=o*x+a*F+l*X+c*mt,r[1]=h*C+d*w+f*G+m*Y,r[5]=h*P+d*q+f*H+m*et,r[9]=h*B+d*tt+f*K+m*j,r[13]=h*x+d*F+f*X+m*mt,r[2]=_*C+g*w+p*G+u*Y,r[6]=_*P+g*q+p*H+u*et,r[10]=_*B+g*tt+p*K+u*j,r[14]=_*x+g*F+p*X+u*mt,r[3]=E*C+M*w+T*G+b*Y,r[7]=E*P+M*q+T*H+b*et,r[11]=E*B+M*tt+T*K+b*j,r[15]=E*x+M*F+T*X+b*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],_=t[3],g=t[7],p=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+g*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],_=t[12],g=t[13],p=t[14],u=t[15],E=d*p*c-g*f*c+g*l*m-a*p*m-d*l*u+a*f*u,M=_*f*c-h*p*c-_*l*m+o*p*m+h*l*u-o*f*u,T=h*g*c-_*d*c+_*a*m-o*g*m-h*a*u+o*d*u,b=_*d*l-h*g*l-_*a*f+o*g*f+h*a*p-o*d*p,C=e*E+n*M+s*T+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=E*P,t[1]=(g*f*r-d*p*r-g*s*m+n*p*m+d*s*u-n*f*u)*P,t[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*u+n*l*u)*P,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*P,t[4]=M*P,t[5]=(h*p*r-_*f*r+_*s*m-e*p*m-h*s*u+e*f*u)*P,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*u-e*l*u)*P,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*P,t[8]=T*P,t[9]=(_*d*r-h*g*r-_*n*m+e*g*m+h*n*u-e*d*u)*P,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*u+e*a*u)*P,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*m-e*a*m)*P,t[12]=b*P,t[13]=(h*g*s-_*d*s+_*n*f-e*g*f-h*n*p+e*d*p)*P,t[14]=(_*a*s-o*g*s-_*n*l+e*g*l+o*n*p-e*a*p)*P,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,_=r*d,g=o*h,p=o*d,u=a*d,E=l*c,M=l*h,T=l*d,b=n.x,C=n.y,P=n.z;return s[0]=(1-(g+u))*b,s[1]=(m+T)*b,s[2]=(_-M)*b,s[3]=0,s[4]=(m-T)*C,s[5]=(1-(f+u))*C,s[6]=(p+E)*C,s[7]=0,s[8]=(_+M)*P,s[9]=(p-E)*P,s[10]=(1-(f+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pn.set(s[0],s[1],s[2]).length();const o=Pn.set(s[4],s[5],s[6]).length(),a=Pn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ae.copy(this);const c=1/r,h=1/o,d=1/a;return Ae.elements[0]*=c,Ae.elements[1]*=c,Ae.elements[2]*=c,Ae.elements[4]*=h,Ae.elements[5]*=h,Ae.elements[6]*=h,Ae.elements[8]*=d,Ae.elements[9]*=d,Ae.elements[10]*=d,e.setFromRotationMatrix(Ae),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ye){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(a===Ye)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Bi)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ye){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,m=(n+s)*h;let _,g;if(a===Ye)_=(o+r)*d,g=-2*d;else if(a===Bi)_=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pn=new L,Ae=new Jt,Sl=new L(0,0,0),El=new L(1,1,1),Ze=new L,Mi=new L,_e=new L,Nr=new Jt,Fr=new Sn;class Hi{constructor(t=0,e=0,n=0,s=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fr.setFromEuler(this),this.setFromQuaternion(Fr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Ha{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yl=0;const Or=new L,Dn=new Sn,He=new Jt,Si=new L,ei=new L,bl=new L,Tl=new Sn,Br=new L(1,0,0),zr=new L(0,1,0),Gr=new L(0,0,1),Al={type:"added"},Hr={type:"removed"};class le extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new L,e=new Hi,n=new Sn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new It}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(Br,t)}rotateY(t){return this.rotateOnAxis(zr,t)}rotateZ(t){return this.rotateOnAxis(Gr,t)}translateOnAxis(t,e){return Or.copy(t).applyQuaternion(this.quaternion),this.position.add(Or.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Br,t)}translateY(t){return this.translateOnAxis(zr,t)}translateZ(t){return this.translateOnAxis(Gr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(He.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Si.copy(t):Si.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?He.lookAt(ei,Si,this.up):He.lookAt(Si,ei,this.up),this.quaternion.setFromRotationMatrix(He),s&&(He.extractRotation(s.matrixWorld),Dn.setFromRotationMatrix(He),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Al)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hr)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Hr)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),He.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),He.multiply(t.parent.matrixWorld)),t.applyMatrix4(He),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,t,bl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,Tl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}le.DEFAULT_UP=new L(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const we=new L,ke=new L,us=new L,Ve=new L,Un=new L,In=new L,kr=new L,ds=new L,fs=new L,ps=new L;let Ei=!1;class Ce{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),we.subVectors(t,e),s.cross(we);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){we.subVectors(s,e),ke.subVectors(n,e),us.subVectors(t,e);const o=we.dot(we),a=we.dot(ke),l=we.dot(us),c=ke.dot(ke),h=ke.dot(us),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ve),Ve.x>=0&&Ve.y>=0&&Ve.x+Ve.y<=1}static getUV(t,e,n,s,r,o,a,l){return Ei===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ei=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ve),l.setScalar(0),l.addScaledVector(r,Ve.x),l.addScaledVector(o,Ve.y),l.addScaledVector(a,Ve.z),l}static isFrontFacing(t,e,n,s){return we.subVectors(n,e),ke.subVectors(t,e),we.cross(ke).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return we.subVectors(this.c,this.b),ke.subVectors(this.a,this.b),we.cross(ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ce.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ei===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ei=!0),Ce.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Ce.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Un.subVectors(s,n),In.subVectors(r,n),ds.subVectors(t,n);const l=Un.dot(ds),c=In.dot(ds);if(l<=0&&c<=0)return e.copy(n);fs.subVectors(t,s);const h=Un.dot(fs),d=In.dot(fs);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Un,o);ps.subVectors(t,r);const m=Un.dot(ps),_=In.dot(ps);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(In,a);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return kr.subVectors(r,s),a=(d-h)/(d-h+(m-_)),e.copy(s).addScaledVector(kr,a);const u=1/(p+g+f);return o=g*u,a=f*u,e.copy(n).addScaledVector(Un,o).addScaledVector(In,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let wl=0;class ui extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Wn,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ba,this.blendDst=Ta,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==nn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Re={h:0,s:0,l:0},yi={h:0,s:0,l:0};function ms(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Lt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=cl(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ms(o,r,t+1/3),this.g=ms(o,r,t),this.b=ms(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Lt){const n=ka[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Lt){return Te.fromWorkingColorSpace(oe.copy(this),t),Math.round(fe(oe.r*255,0,255))*65536+Math.round(fe(oe.g*255,0,255))*256+Math.round(fe(oe.b*255,0,255))}getHexString(t=Lt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(oe.copy(this),e);const n=oe.r,s=oe.g,r=oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(oe.copy(this),e),t.r=oe.r,t.g=oe.g,t.b=oe.b,t}getStyle(t=Lt){Te.fromWorkingColorSpace(oe.copy(this),t);const e=oe.r,n=oe.g,s=oe.b;return t!==Lt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Re),Re.h+=t,Re.s+=e,Re.l+=n,this.setHSL(Re.h,Re.s,Re.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Re),t.getHSL(yi);const n=es(Re.h,yi.h,e),s=es(Re.s,yi.s,e),r=es(Re.l,yi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oe=new Ht;Ht.NAMES=ka;class Va extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new L,bi=new Rt;class Se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lr,this.updateRange={offset:0,count:-1},this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bi.fromBufferAttribute(this,e),bi.applyMatrix3(t),this.setXY(e,bi.x,bi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wa extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xa extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xn extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rl=0;const Ee=new Jt,gs=new le,Nn=new L,ve=new hi,ni=new hi,re=new L;class sn extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oa(t)?Xa:Wa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ee.makeRotationFromQuaternion(t),this.applyMatrix4(Ee),this}rotateX(t){return Ee.makeRotationX(t),this.applyMatrix4(Ee),this}rotateY(t){return Ee.makeRotationY(t),this.applyMatrix4(Ee),this}rotateZ(t){return Ee.makeRotationZ(t),this.applyMatrix4(Ee),this}translate(t,e,n){return Ee.makeTranslation(t,e,n),this.applyMatrix4(Ee),this}scale(t,e,n){return Ee.makeScale(t,e,n),this.applyMatrix4(Ee),this}lookAt(t){return gs.lookAt(t),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ve.setFromBufferAttribute(r),this.morphTargetsRelative?(re.addVectors(this.boundingBox.min,ve.min),this.boundingBox.expandByPoint(re),re.addVectors(this.boundingBox.max,ve.max),this.boundingBox.expandByPoint(re)):(this.boundingBox.expandByPoint(ve.min),this.boundingBox.expandByPoint(ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ni.setFromBufferAttribute(a),this.morphTargetsRelative?(re.addVectors(ve.min,ni.min),ve.expandByPoint(re),re.addVectors(ve.max,ni.max),ve.expandByPoint(re)):(ve.expandByPoint(ni.min),ve.expandByPoint(ni.max))}ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)re.fromBufferAttribute(a,c),l&&(Nn.fromBufferAttribute(t,c),re.add(Nn)),s=Math.max(s,n.distanceToSquared(re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new L,h[w]=new L;const d=new L,f=new L,m=new L,_=new Rt,g=new Rt,p=new Rt,u=new L,E=new L;function M(w,q,tt){d.fromArray(s,w*3),f.fromArray(s,q*3),m.fromArray(s,tt*3),_.fromArray(o,w*2),g.fromArray(o,q*2),p.fromArray(o,tt*2),f.sub(d),m.sub(d),g.sub(_),p.sub(_);const F=1/(g.x*p.y-p.x*g.y);isFinite(F)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(F),E.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(F),c[w].add(u),c[q].add(u),c[tt].add(u),h[w].add(E),h[q].add(E),h[tt].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,q=T.length;w<q;++w){const tt=T[w],F=tt.start,G=tt.count;for(let H=F,K=F+G;H<K;H+=3)M(n[H+0],n[H+1],n[H+2])}const b=new L,C=new L,P=new L,B=new L;function x(w){P.fromArray(r,w*3),B.copy(P);const q=c[w];b.copy(q),b.sub(P.multiplyScalar(P.dot(q))).normalize(),C.crossVectors(B,q);const F=C.dot(h[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=F}for(let w=0,q=T.length;w<q;++w){const tt=T[w],F=tt.start,G=tt.count;for(let H=F,K=F+G;H<K;H+=3)x(n[H+0]),x(n[H+1]),x(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)re.fromBufferAttribute(t,e),re.normalize(),t.setXYZ(e,re.x,re.y,re.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new Se(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vr=new Jt,hn=new Ml,Ti=new Hs,Wr=new L,Fn=new L,On=new L,Bn=new L,_s=new L,Ai=new L,wi=new Rt,Ri=new Rt,Ci=new Rt,Xr=new L,Yr=new L,qr=new L,Li=new L,Pi=new L;class Ie extends le{constructor(t=new sn,e=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ai.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(_s.fromBufferAttribute(d,t),o?Ai.addScaledVector(_s,h):Ai.addScaledVector(_s.sub(e),h))}e.add(Ai)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ti.copy(n.boundingSphere),Ti.applyMatrix4(r),hn.copy(t.ray).recast(t.near),!(Ti.containsPoint(hn.origin)===!1&&(hn.intersectSphere(Ti,Wr)===null||hn.origin.distanceToSquared(Wr)>(t.far-t.near)**2))&&(Vr.copy(r).invert(),hn.copy(t.ray).applyMatrix4(Vr),!(n.boundingBox!==null&&hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,b=M;T<b;T+=3){const C=a.getX(T),P=a.getX(T+1),B=a.getX(T+2);s=Di(this,u,t,n,c,h,d,C,P,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const E=a.getX(p),M=a.getX(p+1),T=a.getX(p+2);s=Di(this,o,t,n,c,h,d,E,M,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,b=M;T<b;T+=3){const C=T,P=T+1,B=T+2;s=Di(this,u,t,n,c,h,d,C,P,B),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const E=p,M=p+1,T=p+2;s=Di(this,o,t,n,c,h,d,E,M,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Cl(i,t,e,n,s,r,o,a){let l;if(t.side===pe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===nn,a),l===null)return null;Pi.copy(a),Pi.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pi);return c<e.near||c>e.far?null:{distance:c,point:Pi.clone(),object:i}}function Di(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Fn),i.getVertexPosition(l,On),i.getVertexPosition(c,Bn);const h=Cl(i,t,e,n,Fn,On,Bn,Li);if(h){s&&(wi.fromBufferAttribute(s,a),Ri.fromBufferAttribute(s,l),Ci.fromBufferAttribute(s,c),h.uv=Ce.getInterpolation(Li,Fn,On,Bn,wi,Ri,Ci,new Rt)),r&&(wi.fromBufferAttribute(r,a),Ri.fromBufferAttribute(r,l),Ci.fromBufferAttribute(r,c),h.uv1=Ce.getInterpolation(Li,Fn,On,Bn,wi,Ri,Ci,new Rt),h.uv2=h.uv1),o&&(Xr.fromBufferAttribute(o,a),Yr.fromBufferAttribute(o,l),qr.fromBufferAttribute(o,c),h.normal=Ce.getInterpolation(Li,Fn,On,Bn,Xr,Yr,qr,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Ce.getNormal(Fn,On,Bn,d.normal),h.face=d}return h}class di extends sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(d,2));function _(g,p,u,E,M,T,b,C,P,B,x){const w=T/P,q=b/B,tt=T/2,F=b/2,G=C/2,H=P+1,K=B+1;let X=0,Y=0;const et=new L;for(let j=0;j<K;j++){const mt=j*q-F;for(let N=0;N<H;N++){const Z=N*w-tt;et[g]=Z*E,et[p]=mt*M,et[u]=G,c.push(et.x,et.y,et.z),et[g]=0,et[p]=0,et[u]=C>0?1:-1,h.push(et.x,et.y,et.z),d.push(N/P),d.push(1-j/B),X+=1}}for(let j=0;j<B;j++)for(let mt=0;mt<P;mt++){const N=f+mt+H*j,Z=f+mt+H*(j+1),J=f+(mt+1)+H*(j+1),lt=f+(mt+1)+H*j;l.push(N,Z,lt),l.push(Z,J,lt),Y+=6}a.addGroup(m,Y,x),m+=Y,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jn(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ue(i){const t={};for(let e=0;e<i.length;e++){const n=jn(i[e]);for(const s in n)t[s]=n[s]}return t}function Ll(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ya(i){return i.getRenderTarget()===null?i.outputColorSpace:Fe}const Pl={clone:jn,merge:ue};var Dl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ul=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dl,this.fragmentShader=Ul,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=Ll(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let qa=class extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ye}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class xe extends qa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zn=-90,Gn=1;class Il extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const s=new xe(zn,Gn,t,e);s.layers=this.layers,this.add(s);const r=new xe(zn,Gn,t,e);r.layers=this.layers,this.add(r);const o=new xe(zn,Gn,t,e);o.layers=this.layers,this.add(o);const a=new xe(zn,Gn,t,e);a.layers=this.layers,this.add(a);const l=new xe(zn,Gn,t,e);l.layers=this.layers,this.add(l);const c=new xe(zn,Gn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ye)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,a,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=qe,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class $a extends Me{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yn,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nl extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ri("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===_n?Lt:vn),this.texture=new $a(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new di(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pe,blending:tn});r.uniforms.tEquirect.value=e;const o=new Ie(s,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=ye),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const vs=new L,Fl=new L,Ol=new It;class dn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=vs.subVectors(n,e).cross(Fl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ol.getNormalMatrix(t),s=this.coplanarPoint(vs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const un=new Hs,Ui=new L;class ks{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,o=new dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ye){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],u=s[12],E=s[13],M=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,p-m,T-u).normalize(),n[1].setComponents(l+r,f+c,p+m,T+u).normalize(),n[2].setComponents(l+o,f+h,p+_,T+E).normalize(),n[3].setComponents(l-o,f-h,p-_,T-E).normalize(),n[4].setComponents(l-a,f-d,p-g,T-M).normalize(),e===Ye)n[5].setComponents(l+a,f+d,p+g,T+M).normalize();else if(e===Bi)n[5].setComponents(a,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){return un.center.set(0,0,0),un.radius=.7071067811865476,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ui.x=s.normal.x>0?t.max.x:t.min.x,Ui.y=s.normal.y>0?t.max.y:t.min.y,Ui.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ui)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ja(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bl(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,h){const d=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const f=h.array,m=h.updateRange;i.bindBuffer(d,c),m.count===-1?i.bufferSubData(d,0,f):(e?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,s(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Vs extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,m=[],_=[],g=[],p=[];for(let u=0;u<h;u++){const E=u*f-o;for(let M=0;M<c;M++){const T=M*d-r;_.push(T,-E,0),g.push(0,0,1),p.push(M/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){const M=E+c*u,T=E+c*(u+1),b=E+1+c*(u+1),C=E+1+c*u;m.push(M,T,C),m.push(T,b,C)}this.setIndex(m),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.width,t.height,t.widthSegments,t.heightSegments)}}var zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xl="vec3 transformed = vec3( position );",Yl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ql=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$l=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ec=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ic=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ac=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uc="gl_FragColor = linearToOutputTexel( gl_FragColor );",dc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_c=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ec=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ac=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ic=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Vc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$c=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Jc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Qc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ah=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Eh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ah=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ch=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ph=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dh=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,su=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ru=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,au=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ou=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,du=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dt={alphamap_fragment:zl,alphamap_pars_fragment:Gl,alphatest_fragment:Hl,alphatest_pars_fragment:kl,aomap_fragment:Vl,aomap_pars_fragment:Wl,begin_vertex:Xl,beginnormal_vertex:Yl,bsdfs:ql,iridescence_fragment:$l,bumpmap_pars_fragment:jl,clipping_planes_fragment:Kl,clipping_planes_pars_fragment:Zl,clipping_planes_pars_vertex:Jl,clipping_planes_vertex:Ql,color_fragment:tc,color_pars_fragment:ec,color_pars_vertex:nc,color_vertex:ic,common:sc,cube_uv_reflection_fragment:rc,defaultnormal_vertex:ac,displacementmap_pars_vertex:oc,displacementmap_vertex:lc,emissivemap_fragment:cc,emissivemap_pars_fragment:hc,encodings_fragment:uc,encodings_pars_fragment:dc,envmap_fragment:fc,envmap_common_pars_fragment:pc,envmap_pars_fragment:mc,envmap_pars_vertex:gc,envmap_physical_pars_fragment:Rc,envmap_vertex:_c,fog_vertex:vc,fog_pars_vertex:xc,fog_fragment:Mc,fog_pars_fragment:Sc,gradientmap_pars_fragment:Ec,lightmap_fragment:yc,lightmap_pars_fragment:bc,lights_lambert_fragment:Tc,lights_lambert_pars_fragment:Ac,lights_pars_begin:wc,lights_toon_fragment:Cc,lights_toon_pars_fragment:Lc,lights_phong_fragment:Pc,lights_phong_pars_fragment:Dc,lights_physical_fragment:Uc,lights_physical_pars_fragment:Ic,lights_fragment_begin:Nc,lights_fragment_maps:Fc,lights_fragment_end:Oc,logdepthbuf_fragment:Bc,logdepthbuf_pars_fragment:zc,logdepthbuf_pars_vertex:Gc,logdepthbuf_vertex:Hc,map_fragment:kc,map_pars_fragment:Vc,map_particle_fragment:Wc,map_particle_pars_fragment:Xc,metalnessmap_fragment:Yc,metalnessmap_pars_fragment:qc,morphcolor_vertex:$c,morphnormal_vertex:jc,morphtarget_pars_vertex:Kc,morphtarget_vertex:Zc,normal_fragment_begin:Jc,normal_fragment_maps:Qc,normal_pars_fragment:th,normal_pars_vertex:eh,normal_vertex:nh,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:sh,clearcoat_normal_fragment_maps:rh,clearcoat_pars_fragment:ah,iridescence_pars_fragment:oh,output_fragment:lh,packing:ch,premultiplied_alpha_fragment:hh,project_vertex:uh,dithering_fragment:dh,dithering_pars_fragment:fh,roughnessmap_fragment:ph,roughnessmap_pars_fragment:mh,shadowmap_pars_fragment:gh,shadowmap_pars_vertex:_h,shadowmap_vertex:vh,shadowmask_pars_fragment:xh,skinbase_vertex:Mh,skinning_pars_vertex:Sh,skinning_vertex:Eh,skinnormal_vertex:yh,specularmap_fragment:bh,specularmap_pars_fragment:Th,tonemapping_fragment:Ah,tonemapping_pars_fragment:wh,transmission_fragment:Rh,transmission_pars_fragment:Ch,uv_pars_fragment:Lh,uv_pars_vertex:Ph,uv_vertex:Dh,worldpos_vertex:Uh,background_vert:Ih,background_frag:Nh,backgroundCube_vert:Fh,backgroundCube_frag:Oh,cube_vert:Bh,cube_frag:zh,depth_vert:Gh,depth_frag:Hh,distanceRGBA_vert:kh,distanceRGBA_frag:Vh,equirect_vert:Wh,equirect_frag:Xh,linedashed_vert:Yh,linedashed_frag:qh,meshbasic_vert:$h,meshbasic_frag:jh,meshlambert_vert:Kh,meshlambert_frag:Zh,meshmatcap_vert:Jh,meshmatcap_frag:Qh,meshnormal_vert:tu,meshnormal_frag:eu,meshphong_vert:nu,meshphong_frag:iu,meshphysical_vert:su,meshphysical_frag:ru,meshtoon_vert:au,meshtoon_frag:ou,points_vert:lu,points_frag:cu,shadow_vert:hu,shadow_frag:uu,sprite_vert:du,sprite_frag:fu},rt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Ue={basic:{uniforms:ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ue([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ue([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ue([rt.points,rt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ue([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ue([rt.common,rt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ue([rt.sprite,rt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:ue([rt.common,rt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:ue([rt.lights,rt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Ue.physical={uniforms:ue([Ue.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Ii={r:0,b:0,g:0};function pu(i,t,e,n,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function _(p,u){let E=!1,M=u.isScene===!0?u.background:null;switch(M&&M.isTexture&&(M=(u.backgroundBlurriness>0?e:t).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),E=!0),i.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),E=!0;break}(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Gi)?(h===void 0&&(h=new Ie(new di(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:jn(Ue.backgroundCube.uniforms),vertexShader:Ue.backgroundCube.vertexShader,fragmentShader:Ue.backgroundCube.fragmentShader,side:pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=M.colorSpace!==Lt,(d!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ie(new Vs(2,2),new En({name:"BackgroundMaterial",uniforms:jn(Ue.background.uniforms),vertexShader:Ue.background.vertexShader,fragmentShader:Ue.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){p.getRGB(Ii,Ya(i)),n.buffers.color.setClear(Ii.r,Ii.g,Ii.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function mu(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function d(G,H,K,X,Y){let et=!1;if(o){const j=g(X,K,H);c!==j&&(c=j,m(c.object)),et=u(G,X,K,Y),et&&E(G,X,K,Y)}else{const j=H.wireframe===!0;(c.geometry!==X.id||c.program!==K.id||c.wireframe!==j)&&(c.geometry=X.id,c.program=K.id,c.wireframe=j,et=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(et||h)&&(h=!1,B(G,H,K,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(G){return n.isWebGL2?i.bindVertexArray(G):r.bindVertexArrayOES(G)}function _(G){return n.isWebGL2?i.deleteVertexArray(G):r.deleteVertexArrayOES(G)}function g(G,H,K){const X=K.wireframe===!0;let Y=a[G.id];Y===void 0&&(Y={},a[G.id]=Y);let et=Y[H.id];et===void 0&&(et={},Y[H.id]=et);let j=et[X];return j===void 0&&(j=p(f()),et[X]=j),j}function p(G){const H=[],K=[],X=[];for(let Y=0;Y<s;Y++)H[Y]=0,K[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:X,object:G,attributes:{},index:null}}function u(G,H,K,X){const Y=c.attributes,et=H.attributes;let j=0;const mt=K.getAttributes();for(const N in mt)if(mt[N].location>=0){const J=Y[N];let lt=et[N];if(lt===void 0&&(N==="instanceMatrix"&&G.instanceMatrix&&(lt=G.instanceMatrix),N==="instanceColor"&&G.instanceColor&&(lt=G.instanceColor)),J===void 0||J.attribute!==lt||lt&&J.data!==lt.data)return!0;j++}return c.attributesNum!==j||c.index!==X}function E(G,H,K,X){const Y={},et=H.attributes;let j=0;const mt=K.getAttributes();for(const N in mt)if(mt[N].location>=0){let J=et[N];J===void 0&&(N==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),N==="instanceColor"&&G.instanceColor&&(J=G.instanceColor));const lt={};lt.attribute=J,J&&J.data&&(lt.data=J.data),Y[N]=lt,j++}c.attributes=Y,c.attributesNum=j,c.index=X}function M(){const G=c.newAttributes;for(let H=0,K=G.length;H<K;H++)G[H]=0}function T(G){b(G,0)}function b(G,H){const K=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;K[G]=1,X[G]===0&&(i.enableVertexAttribArray(G),X[G]=1),Y[G]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,H),Y[G]=H)}function C(){const G=c.newAttributes,H=c.enabledAttributes;for(let K=0,X=H.length;K<X;K++)H[K]!==G[K]&&(i.disableVertexAttribArray(K),H[K]=0)}function P(G,H,K,X,Y,et,j){j===!0?i.vertexAttribIPointer(G,H,K,Y,et):i.vertexAttribPointer(G,H,K,X,Y,et)}function B(G,H,K,X){if(n.isWebGL2===!1&&(G.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const Y=X.attributes,et=K.getAttributes(),j=H.defaultAttributeValues;for(const mt in et){const N=et[mt];if(N.location>=0){let Z=Y[mt];if(Z===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),Z!==void 0){const J=Z.normalized,lt=Z.itemSize,ct=e.get(Z);if(ct===void 0)continue;const _t=ct.buffer,Pt=ct.type,St=ct.bytesPerElement,qt=n.isWebGL2===!0&&(Pt===i.INT||Pt===i.UNSIGNED_INT||Z.gpuType===Ra);if(Z.isInterleavedBufferAttribute){const Nt=Z.data,U=Nt.stride,Qt=Z.offset;if(Nt.isInstancedInterleavedBuffer){for(let vt=0;vt<N.locationSize;vt++)b(N.location+vt,Nt.meshPerAttribute);G.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let vt=0;vt<N.locationSize;vt++)T(N.location+vt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let vt=0;vt<N.locationSize;vt++)P(N.location+vt,lt/N.locationSize,Pt,J,U*St,(Qt+lt/N.locationSize*vt)*St,qt)}else{if(Z.isInstancedBufferAttribute){for(let Nt=0;Nt<N.locationSize;Nt++)b(N.location+Nt,Z.meshPerAttribute);G.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Nt=0;Nt<N.locationSize;Nt++)T(N.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Nt=0;Nt<N.locationSize;Nt++)P(N.location+Nt,lt/N.locationSize,Pt,J,lt*St,lt/N.locationSize*Nt*St,qt)}}else if(j!==void 0){const J=j[mt];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(N.location,J);break;case 3:i.vertexAttrib3fv(N.location,J);break;case 4:i.vertexAttrib4fv(N.location,J);break;default:i.vertexAttrib1fv(N.location,J)}}}}C()}function x(){tt();for(const G in a){const H=a[G];for(const K in H){const X=H[K];for(const Y in X)_(X[Y].object),delete X[Y];delete H[K]}delete a[G]}}function w(G){if(a[G.id]===void 0)return;const H=a[G.id];for(const K in H){const X=H[K];for(const Y in X)_(X[Y].object),delete X[Y];delete H[K]}delete a[G.id]}function q(G){for(const H in a){const K=a[H];if(K[G.id]===void 0)continue;const X=K[G.id];for(const Y in X)_(X[Y].object),delete X[Y];delete K[G.id]}}function tt(){F(),h=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:tt,resetDefaultState:F,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:M,enableAttribute:T,disableUnusedAttributes:C}}function gu(i,t,e,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,h){i.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,d){if(d===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,d),e.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function _u(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,T=o||t.has("OES_texture_float"),b=M&&T,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:b,maxSamples:C}}function vu(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new dn,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const E=r?0:n,M=E*4;let T=u.clippingState||null;l.value=T,T=h(_,f,M,m);for(let b=0;b!==M;++b)T[b]=e[b];u.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const u=m+g*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,T=m;M!==g;++M,T+=4)o.copy(d[M]).applyMatrix4(E,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function xu(i){let t=new WeakMap;function e(o,a){return a===Cs?o.mapping=Yn:a===Ls&&(o.mapping=qn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cs||a===Ls)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nl(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ka extends qa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vn=4,$r=[.125,.215,.35,.446,.526,.582],pn=20,xs=new Ka,jr=new Ht;let Ms=null;const fn=(1+Math.sqrt(5))/2,Hn=1/fn,Kr=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,fn,Hn),new L(0,fn,-Hn),new L(Hn,0,fn),new L(-Hn,0,fn),new L(fn,Hn,0),new L(-fn,Hn,0)];class Zr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ms=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ms),t.scissorTest=!1,Ni(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yn||t.mapping===qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ms=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ye,minFilter:ye,generateMipmaps:!1,type:oi,format:Pe,colorSpace:Fe,depthBuffer:!1},s=Jr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jr(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mu(r)),this._blurMaterial=Su(r,t,e)}return s}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,xs)}_sceneToCubeUV(t,e,n,s){const a=new xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(jr),h.toneMapping=qe,h.autoClear=!1;const m=new Va({name:"PMREM.Background",side:pe,depthWrite:!1,depthTest:!1}),_=new Ie(new di,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(jr),g=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const M=this._cubeSize;Ni(s,E*M,u>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Yn||t.mapping===qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qr());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ni(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kr[(s-1)%Kr.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ie(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):pn;p>pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pn}`);const u=[];let E=0;for(let P=0;P<pn;++P){const B=P/g,x=Math.exp(-B*B/2);u.push(x),P===0?E+=x:P<p&&(E+=2*x)}for(let P=0;P<u.length;P++)u[P]=u[P]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const T=this._sizeLods[s],b=3*T*(s>M-Vn?s-M+Vn:0),C=4*(this._cubeSize-T);Ni(e,b,C,3*T,2*T),l.setRenderTarget(e),l.render(d,xs)}}function Mu(i){const t=[],e=[],n=[];let s=i;const r=i-Vn+1+$r.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Vn?l=$r[o-i+Vn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,g=3,p=2,u=1,E=new Float32Array(g*_*m),M=new Float32Array(p*_*m),T=new Float32Array(u*_*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,B=C>2?0:-1,x=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];E.set(x,g*_*C),M.set(f,p*_*C);const w=[C,C,C,C,C,C];T.set(w,u*_*C)}const b=new sn;b.setAttribute("position",new Se(E,g)),b.setAttribute("uv",new Se(M,p)),b.setAttribute("faceIndex",new Se(T,u)),t.push(b),s>Vn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jr(i,t,e){const n=new Mn(i,t,e);return n.texture.mapping=Gi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Su(i,t,e){const n=new Float32Array(pn),s=new L(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Qr(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function ta(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Ws(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Eu(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cs||l===Ls,h=l===Yn||l===qn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Zr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Zr(i));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function yu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bu(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,u=g.length;p<u;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let M=0,T=E.length;M<T;M+=3){const b=E[M+0],C=E[M+1],P=E[M+2];f.push(b,C,C,P,P,b)}}else{const E=_.array;g=_.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const b=M+0,C=M+1,P=M+2;f.push(b,C,C,P,P,b)}}const p=new(Oa(f)?Xa:Wa)(f,1);p.version=g;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Tu(i,t,e,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){i.drawElements(r,m,a,f*l),e.update(m,r,1)}function d(f,m,_){if(_===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*l,_),e.update(m,r,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Au(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wu(i,t){return i[0]-t[0]}function Ru(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Cu(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new Wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let H=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let x=0;M===!0&&(x=1),T===!0&&(x=2),b===!0&&(x=3);let w=h.attributes.position.count*x,q=1;w>t.maxTextureSize&&(q=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const tt=new Float32Array(w*q*4*g),F=new Ga(tt,w,q,g);F.type=Qe,F.needsUpdate=!0;const G=x*4;for(let K=0;K<g;K++){const X=C[K],Y=P[K],et=B[K],j=w*q*4*K;for(let mt=0;mt<X.count;mt++){const N=mt*G;M===!0&&(o.fromBufferAttribute(X,mt),tt[j+N+0]=o.x,tt[j+N+1]=o.y,tt[j+N+2]=o.z,tt[j+N+3]=0),T===!0&&(o.fromBufferAttribute(Y,mt),tt[j+N+4]=o.x,tt[j+N+5]=o.y,tt[j+N+6]=o.z,tt[j+N+7]=0),b===!0&&(o.fromBufferAttribute(et,mt),tt[j+N+8]=o.x,tt[j+N+9]=o.y,tt[j+N+10]=o.z,tt[j+N+11]=et.itemSize===4?o.w:1)}}p={count:g,texture:F,size:new Rt(w,q)},r.set(h,p),h.addEventListener("dispose",H)}let u=0;for(let M=0;M<f.length;M++)u+=f[M];const E=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];n[h.id]=g}for(let T=0;T<_;T++){const b=g[T];b[0]=T,b[1]=f[T]}g.sort(Ru);for(let T=0;T<8;T++)T<_&&g[T][1]?(a[T][0]=g[T][0],a[T][1]=g[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(wu);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const b=a[T],C=b[0],P=b[1];C!==Number.MAX_SAFE_INTEGER&&P?(p&&h.getAttribute("morphTarget"+T)!==p[C]&&h.setAttribute("morphTarget"+T,p[C]),u&&h.getAttribute("morphNormal"+T)!==u[C]&&h.setAttribute("morphNormal"+T,u[C]),s[T]=P,E+=P):(p&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),u&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),s[T]=0)}const M=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Lu(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER)),d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Za=new Me,Ja=new Ga,Qa=new vl,to=new $a,ea=[],na=[],ia=new Float32Array(16),sa=new Float32Array(9),ra=new Float32Array(4);function Kn(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ea[s];if(r===void 0&&(r=new Float32Array(s),ea[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ki(i,t){let e=na[t];e===void 0&&(e=new Int32Array(t),na[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Du(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;i.uniform2fv(this.addr,t),ne(e,t)}}function Uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ee(e,t))return;i.uniform3fv(this.addr,t),ne(e,t)}}function Iu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;i.uniform4fv(this.addr,t),ne(e,t)}}function Nu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;ra.set(n),i.uniformMatrix2fv(this.addr,!1,ra),ne(e,n)}}function Fu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;sa.set(n),i.uniformMatrix3fv(this.addr,!1,sa),ne(e,n)}}function Ou(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;ia.set(n),i.uniformMatrix4fv(this.addr,!1,ia),ne(e,n)}}function Bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;i.uniform2iv(this.addr,t),ne(e,t)}}function Gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ee(e,t))return;i.uniform3iv(this.addr,t),ne(e,t)}}function Hu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;i.uniform4iv(this.addr,t),ne(e,t)}}function ku(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;i.uniform2uiv(this.addr,t),ne(e,t)}}function Wu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ee(e,t))return;i.uniform3uiv(this.addr,t),ne(e,t)}}function Xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;i.uniform4uiv(this.addr,t),ne(e,t)}}function Yu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||Za,s)}function qu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qa,s)}function $u(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||to,s)}function ju(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ja,s)}function Ku(i){switch(i){case 5126:return Pu;case 35664:return Du;case 35665:return Uu;case 35666:return Iu;case 35674:return Nu;case 35675:return Fu;case 35676:return Ou;case 5124:case 35670:return Bu;case 35667:case 35671:return zu;case 35668:case 35672:return Gu;case 35669:case 35673:return Hu;case 5125:return ku;case 36294:return Vu;case 36295:return Wu;case 36296:return Xu;case 35678:case 36198:case 36298:case 36306:case 35682:return Yu;case 35679:case 36299:case 36307:return qu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return ju}}function Zu(i,t){i.uniform1fv(this.addr,t)}function Ju(i,t){const e=Kn(t,this.size,2);i.uniform2fv(this.addr,e)}function Qu(i,t){const e=Kn(t,this.size,3);i.uniform3fv(this.addr,e)}function td(i,t){const e=Kn(t,this.size,4);i.uniform4fv(this.addr,e)}function ed(i,t){const e=Kn(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nd(i,t){const e=Kn(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function id(i,t){const e=Kn(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sd(i,t){i.uniform1iv(this.addr,t)}function rd(i,t){i.uniform2iv(this.addr,t)}function ad(i,t){i.uniform3iv(this.addr,t)}function od(i,t){i.uniform4iv(this.addr,t)}function ld(i,t){i.uniform1uiv(this.addr,t)}function cd(i,t){i.uniform2uiv(this.addr,t)}function hd(i,t){i.uniform3uiv(this.addr,t)}function ud(i,t){i.uniform4uiv(this.addr,t)}function dd(i,t,e){const n=this.cache,s=t.length,r=ki(e,s);ee(n,r)||(i.uniform1iv(this.addr,r),ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Za,r[o])}function fd(i,t,e){const n=this.cache,s=t.length,r=ki(e,s);ee(n,r)||(i.uniform1iv(this.addr,r),ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qa,r[o])}function pd(i,t,e){const n=this.cache,s=t.length,r=ki(e,s);ee(n,r)||(i.uniform1iv(this.addr,r),ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||to,r[o])}function md(i,t,e){const n=this.cache,s=t.length,r=ki(e,s);ee(n,r)||(i.uniform1iv(this.addr,r),ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ja,r[o])}function gd(i){switch(i){case 5126:return Zu;case 35664:return Ju;case 35665:return Qu;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return sd;case 35667:case 35671:return rd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return hd;case 36296:return ud;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}class _d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ku(e.type)}}class vd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=gd(e.type)}}class xd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function aa(i,t){i.seq.push(t),i.map[t.id]=t}function Md(i,t,e){const n=i.name,s=n.length;for(Ss.lastIndex=0;;){const r=Ss.exec(n),o=Ss.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){aa(e,c===void 0?new _d(a,i,t):new vd(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new xd(a),aa(e,d)),e=d}}}class Oi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Md(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function oa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Sd=0;function Ed(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function yd(i){switch(i){case Fe:return["Linear","( value )"];case Lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function la(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ed(i.getShaderSource(t),o)}else return s}function bd(i,t){const e=yd(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Td(i,t){let e;switch(t){case No:e="Linear";break;case Fo:e="Reinhard";break;case Oo:e="OptimizedCineon";break;case Bo:e="ACESFilmic";break;case zo:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ad(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function wd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function si(i){return i!==""}function ca(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ha(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fs(i){return i.replace(Cd,Ld)}function Ld(i,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Fs(e)}const Pd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ua(i){return i.replace(Pd,Dd)}function Dd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function da(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ud(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ya?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===We&&(t="SHADOWMAP_TYPE_VSM"),t}function Id(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yn:case qn:t="ENVMAP_TYPE_CUBE";break;case Gi:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qn:t="ENVMAP_MODE_REFRACTION";break}return t}function Fd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case Uo:t="ENVMAP_BLENDING_MIX";break;case Io:t="ENVMAP_BLENDING_ADD";break}return t}function Od(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bd(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ud(e),c=Id(e),h=Nd(e),d=Fd(e),f=Od(e),m=e.isWebGL2?"":Ad(e),_=wd(r),g=s.createProgram();let p,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(si).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(si).join(`
`),u.length>0&&(u+=`
`)):(p=[da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),u=[m,da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qe?"#define TONE_MAPPING":"",e.toneMapping!==qe?Dt.tonemapping_pars_fragment:"",e.toneMapping!==qe?Td("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,bd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(si).join(`
`)),o=Fs(o),o=ca(o,e),o=ha(o,e),a=Fs(a),a=ca(a,e),a=ha(a,e),o=ua(o),a=ua(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Pr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=E+p+o,T=E+u+a,b=oa(s,s.VERTEX_SHADER,M),C=oa(s,s.FRAGMENT_SHADER,T);if(s.attachShader(g,b),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g),i.debug.checkShaderErrors){const x=s.getProgramInfoLog(g).trim(),w=s.getShaderInfoLog(b).trim(),q=s.getShaderInfoLog(C).trim();let tt=!0,F=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,C);else{const G=la(s,b,"vertex"),H=la(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+G+`
`+H)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(w===""||q==="")&&(F=!1);F&&(this.diagnostics={runnable:tt,programLog:x,vertexShader:{log:w,prefix:p},fragmentShader:{log:q,prefix:u}})}s.deleteShader(b),s.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Oi(s,g)),P};let B;return this.getAttributes=function(){return B===void 0&&(B=Rd(s,g)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}let zd=0;class Gd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hd(t),e.set(t,n)),n}}class Hd{constructor(t){this.id=zd++,this.code=t,this.usedTimes=0}}function kd(i,t,e,n,s,r,o){const a=new Ha,l=new Gd,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function p(x,w,q,tt,F){const G=tt.fog,H=F.geometry,K=x.isMeshStandardMaterial?tt.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||K),Y=X&&X.mapping===Gi?X.image.height:null,et=_[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const j=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,mt=j!==void 0?j.length:0;let N=0;H.morphAttributes.position!==void 0&&(N=1),H.morphAttributes.normal!==void 0&&(N=2),H.morphAttributes.color!==void 0&&(N=3);let Z,J,lt,ct;if(et){const jt=Ue[et];Z=jt.vertexShader,J=jt.fragmentShader}else Z=x.vertexShader,J=x.fragmentShader,l.update(x),lt=l.getVertexShaderID(x),ct=l.getFragmentShaderID(x);const _t=i.getRenderTarget(),Pt=F.isInstancedMesh===!0,St=!!x.map,qt=!!x.matcap,Nt=!!X,U=!!x.aoMap,Qt=!!x.lightMap,vt=!!x.bumpMap,wt=!!x.normalMap,xt=!!x.displacementMap,kt=!!x.emissiveMap,Ut=!!x.metalnessMap,Tt=!!x.roughnessMap,Gt=x.anisotropy>0,te=x.clearcoat>0,ie=x.iridescence>0,y=x.sheen>0,v=x.transmission>0,k=Gt&&!!x.anisotropyMap,it=te&&!!x.clearcoatMap,nt=te&&!!x.clearcoatNormalMap,A=te&&!!x.clearcoatRoughnessMap,$=ie&&!!x.iridescenceMap,Q=ie&&!!x.iridescenceThicknessMap,z=y&&!!x.sheenColorMap,dt=y&&!!x.sheenRoughnessMap,gt=!!x.specularMap,pt=!!x.specularColorMap,ft=!!x.specularIntensityMap,ht=v&&!!x.transmissionMap,Et=v&&!!x.thicknessMap,Ot=!!x.gradientMap,R=!!x.alphaMap,at=x.alphaTest>0,O=!!x.extensions,st=!!H.attributes.uv1,ot=!!H.attributes.uv2,zt=!!H.attributes.uv3;return{isWebGL2:h,shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:J,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Pt,instancingColor:Pt&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Fe,map:St,matcap:qt,envMap:Nt,envMapMode:Nt&&X.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:Qt,bumpMap:vt,normalMap:wt,displacementMap:f&&xt,emissiveMap:kt,normalMapObjectSpace:wt&&x.normalMapType===Jo,normalMapTangentSpace:wt&&x.normalMapType===Na,metalnessMap:Ut,roughnessMap:Tt,anisotropy:Gt,anisotropyMap:k,clearcoat:te,clearcoatMap:it,clearcoatNormalMap:nt,clearcoatRoughnessMap:A,iridescence:ie,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:y,sheenColorMap:z,sheenRoughnessMap:dt,specularMap:gt,specularColorMap:pt,specularIntensityMap:ft,transmission:v,transmissionMap:ht,thicknessMap:Et,gradientMap:Ot,opaque:x.transparent===!1&&x.blending===Wn,alphaMap:R,alphaTest:at,combine:x.combine,mapUv:St&&g(x.map.channel),aoMapUv:U&&g(x.aoMap.channel),lightMapUv:Qt&&g(x.lightMap.channel),bumpMapUv:vt&&g(x.bumpMap.channel),normalMapUv:wt&&g(x.normalMap.channel),displacementMapUv:xt&&g(x.displacementMap.channel),emissiveMapUv:kt&&g(x.emissiveMap.channel),metalnessMapUv:Ut&&g(x.metalnessMap.channel),roughnessMapUv:Tt&&g(x.roughnessMap.channel),anisotropyMapUv:k&&g(x.anisotropyMap.channel),clearcoatMapUv:it&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:z&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(x.sheenRoughnessMap.channel),specularMapUv:gt&&g(x.specularMap.channel),specularColorMapUv:pt&&g(x.specularColorMap.channel),specularIntensityMapUv:ft&&g(x.specularIntensityMap.channel),transmissionMapUv:ht&&g(x.transmissionMap.channel),thicknessMapUv:Et&&g(x.thicknessMap.channel),alphaMapUv:R&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(wt||Gt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:ot,vertexUv3s:zt,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(St||R),fog:!!G,useFog:x.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:N,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:qe,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xe,flipSided:x.side===pe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:O&&x.extensions.derivatives===!0,extensionFragDepth:O&&x.extensions.fragDepth===!0,extensionDrawBuffers:O&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const q in x.defines)w.push(q),w.push(x.defines[q]);return x.isRawShaderMaterial===!1&&(E(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function E(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),x.push(a.mask)}function T(x){const w=_[x.type];let q;if(w){const tt=Ue[w];q=Pl.clone(tt.uniforms)}else q=x.uniforms;return q}function b(x,w){let q;for(let tt=0,F=c.length;tt<F;tt++){const G=c[tt];if(G.cacheKey===w){q=G,++q.usedTimes;break}}return q===void 0&&(q=new Bd(i,w,x,r),c.push(q)),q}function C(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:b,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:B}}function Vd(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,m,_,g,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=p),t++,u}function a(d,f,m,_,g,p){const u=o(d,f,m,_,g,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,_,g,p){const u=o(d,f,m,_,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Wd),n.length>1&&n.sort(f||fa),s.length>1&&s.sort(f||fa)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Xd(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new pa,i.set(n,[o])):s>=r.length?(o=new pa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function qd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $d=0;function jd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kd(i,t){const e=new Yd,n=qd(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new L);const r=new L,o=new Jt,a=new Jt;function l(h,d){let f=0,m=0,_=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let g=0,p=0,u=0,E=0,M=0,T=0,b=0,C=0,P=0,B=0;h.sort(jd);const x=d===!0?Math.PI:1;for(let q=0,tt=h.length;q<tt;q++){const F=h[q],G=F.color,H=F.intensity,K=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=G.r*H*x,m+=G.g*H*x,_+=G.b*H*x;else if(F.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(F.sh.coefficients[Y],H);else if(F.isDirectionalLight){const Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity*x),F.castShadow){const et=F.shadow,j=n.get(F);j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,s.directionalShadow[g]=j,s.directionalShadowMap[g]=X,s.directionalShadowMatrix[g]=F.shadow.matrix,T++}s.directional[g]=Y,g++}else if(F.isSpotLight){const Y=e.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(G).multiplyScalar(H*x),Y.distance=K,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,s.spot[u]=Y;const et=F.shadow;if(F.map&&(s.spotLightMap[P]=F.map,P++,et.updateMatrices(F),F.castShadow&&B++),s.spotLightMatrix[u]=et.matrix,F.castShadow){const j=n.get(F);j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,s.spotShadow[u]=j,s.spotShadowMap[u]=X,C++}u++}else if(F.isRectAreaLight){const Y=e.get(F);Y.color.copy(G).multiplyScalar(H),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),s.rectArea[E]=Y,E++}else if(F.isPointLight){const Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity*x),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){const et=F.shadow,j=n.get(F);j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,j.shadowCameraNear=et.camera.near,j.shadowCameraFar=et.camera.far,s.pointShadow[p]=j,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=F.shadow.matrix,b++}s.point[p]=Y,p++}else if(F.isHemisphereLight){const Y=e.get(F);Y.skyColor.copy(F.color).multiplyScalar(H*x),Y.groundColor.copy(F.groundColor).multiplyScalar(H*x),s.hemi[M]=Y,M++}}E>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_FLOAT_1,s.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_HALF_1,s.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const w=s.hash;(w.directionalLength!==g||w.pointLength!==p||w.spotLength!==u||w.rectAreaLength!==E||w.hemiLength!==M||w.numDirectionalShadows!==T||w.numPointShadows!==b||w.numSpotShadows!==C||w.numSpotMaps!==P)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=E,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=C+P-B,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=B,w.directionalLength=g,w.pointLength=p,w.spotLength=u,w.rectAreaLength=E,w.hemiLength=M,w.numDirectionalShadows=T,w.numPointShadows=b,w.numSpotShadows=C,w.numSpotMaps=P,s.version=$d++)}function c(h,d){let f=0,m=0,_=0,g=0,p=0;const u=d.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const T=h[E];if(T.isDirectionalLight){const b=s.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),f++}else if(T.isSpotLight){const b=s.spot[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),_++}else if(T.isRectAreaLight){const b=s.rectArea[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const b=s.point[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const b=s.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function ma(i,t){const e=new Kd(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zd(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new ma(i,t),e.set(r,[l])):o>=a.length?(l=new ma(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class Jd extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ko,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qd extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ef=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nf(i,t,e){let n=new ks;const s=new Rt,r=new Rt,o=new Wt,a=new Jd({depthPacking:Zo}),l=new Qd,c={},h=e.maxTextureSize,d={[nn]:pe,[pe]:nn,[Xe]:Xe},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:tf,fragmentShader:ef}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ie(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let u=this.type;this.render=function(b,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const B=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),q=i.state;q.setBlending(tn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const tt=u!==We&&this.type===We,F=u===We&&this.type!==We;for(let G=0,H=b.length;G<H;G++){const K=b[G],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const Y=X.getFrameExtents();if(s.multiply(Y),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||tt===!0||F===!0){const j=this.type!==We?{minFilter:de,magFilter:de}:{};X.map!==null&&X.map.dispose(),X.map=new Mn(s.x,s.y,j),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const et=X.getViewportCount();for(let j=0;j<et;j++){const mt=X.getViewport(j);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),q.viewport(o),X.updateMatrices(K,j),n=X.getFrustum(),T(C,P,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===We&&E(X,P),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(B,x,w)};function E(b,C){const P=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,P,m,g,null)}function M(b,C,P,B){let x=null;const w=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)x=w;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=x.uuid,tt=C.uuid;let F=c[q];F===void 0&&(F={},c[q]=F);let G=F[tt];G===void 0&&(G=x.clone(),F[tt]=G),x=G}if(x.visible=C.visible,x.wireframe=C.wireframe,B===We?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const q=i.properties.get(x);q.light=P}return x}function T(b,C,P,B,x){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===We)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const tt=t.update(b),F=b.material;if(Array.isArray(F)){const G=tt.groups;for(let H=0,K=G.length;H<K;H++){const X=G[H],Y=F[X.materialIndex];if(Y&&Y.visible){const et=M(b,Y,B,x);i.renderBufferDirect(P,null,tt,et,b,X)}}}else if(F.visible){const G=M(b,F,B,x);i.renderBufferDirect(P,null,tt,G,b,null)}}const q=b.children;for(let tt=0,F=q.length;tt<F;tt++)T(q[tt],C,P,B,x)}}function sf(i,t,e){const n=e.isWebGL2;function s(){let R=!1;const at=new Wt;let O=null;const st=new Wt(0,0,0,0);return{setMask:function(ot){O!==ot&&!R&&(i.colorMask(ot,ot,ot,ot),O=ot)},setLocked:function(ot){R=ot},setClear:function(ot,zt,Xt,jt,rn){rn===!0&&(ot*=jt,zt*=jt,Xt*=jt),at.set(ot,zt,Xt,jt),st.equals(at)===!1&&(i.clearColor(ot,zt,Xt,jt),st.copy(at))},reset:function(){R=!1,O=null,st.set(-1,0,0,0)}}}function r(){let R=!1,at=null,O=null,st=null;return{setTest:function(ot){ot?_t(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ot){at!==ot&&!R&&(i.depthMask(ot),at=ot)},setFunc:function(ot){if(O!==ot){switch(ot){case Ao:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=ot}},setLocked:function(ot){R=ot},setClear:function(ot){st!==ot&&(i.clearDepth(ot),st=ot)},reset:function(){R=!1,at=null,O=null,st=null}}}function o(){let R=!1,at=null,O=null,st=null,ot=null,zt=null,Xt=null,jt=null,rn=null;return{setTest:function(Yt){R||(Yt?_t(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Yt){at!==Yt&&!R&&(i.stencilMask(Yt),at=Yt)},setFunc:function(Yt,De,ce){(O!==Yt||st!==De||ot!==ce)&&(i.stencilFunc(Yt,De,ce),O=Yt,st=De,ot=ce)},setOp:function(Yt,De,ce){(zt!==Yt||Xt!==De||jt!==ce)&&(i.stencilOp(Yt,De,ce),zt=Yt,Xt=De,jt=ce)},setLocked:function(Yt){R=Yt},setClear:function(Yt){rn!==Yt&&(i.clearStencil(Yt),rn=Yt)},reset:function(){R=!1,at=null,O=null,st=null,ot=null,zt=null,Xt=null,jt=null,rn=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,u=!1,E=null,M=null,T=null,b=null,C=null,P=null,B=null,x=!1,w=null,q=null,tt=null,F=null,G=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=X>=2);let et=null,j={};const mt=i.getParameter(i.SCISSOR_BOX),N=i.getParameter(i.VIEWPORT),Z=new Wt().fromArray(mt),J=new Wt().fromArray(N);function lt(R,at,O,st){const ot=new Uint8Array(4),zt=i.createTexture();i.bindTexture(R,zt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<O;Xt++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(at,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(at+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return zt}const ct={};ct[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ct[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_t(i.DEPTH_TEST),l.setFunc(Rs),xt(!1),kt(tr),_t(i.CULL_FACE),vt(tn);function _t(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function Pt(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function St(R,at){return m[R]!==at?(i.bindFramebuffer(R,at),m[R]=at,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=at),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=at)),!0):!1}function qt(R,at){let O=g,st=!1;if(R)if(O=_.get(at),O===void 0&&(O=[],_.set(at,O)),R.isWebGLMultipleRenderTargets){const ot=R.texture;if(O.length!==ot.length||O[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,Xt=ot.length;zt<Xt;zt++)O[zt]=i.COLOR_ATTACHMENT0+zt;O.length=ot.length,st=!0}}else O[0]!==i.COLOR_ATTACHMENT0&&(O[0]=i.COLOR_ATTACHMENT0,st=!0);else O[0]!==i.BACK&&(O[0]=i.BACK,st=!0);st&&(e.isWebGL2?i.drawBuffers(O):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(O))}function Nt(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const U={[kn]:i.FUNC_ADD,[mo]:i.FUNC_SUBTRACT,[go]:i.FUNC_REVERSE_SUBTRACT};if(n)U[sr]=i.MIN,U[rr]=i.MAX;else{const R=t.get("EXT_blend_minmax");R!==null&&(U[sr]=R.MIN_EXT,U[rr]=R.MAX_EXT)}const Qt={[_o]:i.ZERO,[vo]:i.ONE,[xo]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[To]:i.SRC_ALPHA_SATURATE,[yo]:i.DST_COLOR,[So]:i.DST_ALPHA,[Mo]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[bo]:i.ONE_MINUS_DST_COLOR,[Eo]:i.ONE_MINUS_DST_ALPHA};function vt(R,at,O,st,ot,zt,Xt,jt){if(R===tn){u===!0&&(Pt(i.BLEND),u=!1);return}if(u===!1&&(_t(i.BLEND),u=!0),R!==po){if(R!==E||jt!==x){if((M!==kn||C!==kn)&&(i.blendEquation(i.FUNC_ADD),M=kn,C=kn),jt)switch(R){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.ONE,i.ONE);break;case nr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ir:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ir:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,b=null,P=null,B=null,E=R,x=jt}return}ot=ot||at,zt=zt||O,Xt=Xt||st,(at!==M||ot!==C)&&(i.blendEquationSeparate(U[at],U[ot]),M=at,C=ot),(O!==T||st!==b||zt!==P||Xt!==B)&&(i.blendFuncSeparate(Qt[O],Qt[st],Qt[zt],Qt[Xt]),T=O,b=st,P=zt,B=Xt),E=R,x=!1}function wt(R,at){R.side===Xe?Pt(i.CULL_FACE):_t(i.CULL_FACE);let O=R.side===pe;at&&(O=!O),xt(O),R.blending===Wn&&R.transparent===!1?vt(tn):vt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const st=R.stencilWrite;c.setTest(st),st&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Tt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(R){w!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),w=R)}function kt(R){R!==ho?(_t(i.CULL_FACE),R!==q&&(R===tr?i.cullFace(i.BACK):R===uo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),q=R}function Ut(R){R!==tt&&(K&&i.lineWidth(R),tt=R)}function Tt(R,at,O){R?(_t(i.POLYGON_OFFSET_FILL),(F!==at||G!==O)&&(i.polygonOffset(at,O),F=at,G=O)):Pt(i.POLYGON_OFFSET_FILL)}function Gt(R){R?_t(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function te(R){R===void 0&&(R=i.TEXTURE0+H-1),et!==R&&(i.activeTexture(R),et=R)}function ie(R,at,O){O===void 0&&(et===null?O=i.TEXTURE0+H-1:O=et);let st=j[O];st===void 0&&(st={type:void 0,texture:void 0},j[O]=st),(st.type!==R||st.texture!==at)&&(et!==O&&(i.activeTexture(O),et=O),i.bindTexture(R,at||ct[R]),st.type=R,st.texture=at)}function y(){const R=j[et];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function v(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function nt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function z(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(R){Z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ft(R){J.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),J.copy(R))}function ht(R,at){let O=d.get(at);O===void 0&&(O=new WeakMap,d.set(at,O));let st=O.get(R);st===void 0&&(st=i.getUniformBlockIndex(at,R.name),O.set(R,st))}function Et(R,at){const st=d.get(at).get(R);h.get(at)!==st&&(i.uniformBlockBinding(at,st,R.__bindingPointIndex),h.set(at,st))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},et=null,j={},m={},_=new WeakMap,g=[],p=null,u=!1,E=null,M=null,T=null,b=null,C=null,P=null,B=null,x=!1,w=null,q=null,tt=null,F=null,G=null,Z.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_t,disable:Pt,bindFramebuffer:St,drawBuffers:qt,useProgram:Nt,setBlending:vt,setMaterial:wt,setFlipSided:xt,setCullFace:kt,setLineWidth:Ut,setPolygonOffset:Tt,setScissorTest:Gt,activeTexture:te,bindTexture:ie,unbindTexture:y,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:dt,texImage3D:gt,updateUBOMapping:ht,uniformBlockBinding:Et,texStorage2D:Q,texStorage3D:z,texSubImage2D:it,texSubImage3D:nt,compressedTexSubImage2D:A,compressedTexSubImage3D:$,scissor:pt,viewport:ft,reset:Ot}}function rf(i,t,e,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,d=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(y,v){return u?new OffscreenCanvas(y,v):zi("canvas")}function M(y,v,k,it){let nt=1;if((y.width>it||y.height>it)&&(nt=it/Math.max(y.width,y.height)),nt<1||v===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const A=v?Ns:Math.floor,$=A(nt*y.width),Q=A(nt*y.height);g===void 0&&(g=E($,Q));const z=k?E($,Q):g;return z.width=$,z.height=Q,z.getContext("2d").drawImage(y,0,0,$,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+$+"x"+Q+")."),z}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function T(y){return Dr(y.width)&&Dr(y.height)}function b(y){return a?!1:y.wrapS!==Le||y.wrapT!==Le||y.minFilter!==de&&y.minFilter!==ye}function C(y,v){return y.generateMipmaps&&v&&y.minFilter!==de&&y.minFilter!==ye}function P(y){i.generateMipmap(y)}function B(y,v,k,it,nt=!1){if(a===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let A=v;return v===i.RED&&(k===i.FLOAT&&(A=i.R32F),k===i.HALF_FLOAT&&(A=i.R16F),k===i.UNSIGNED_BYTE&&(A=i.R8)),v===i.RG&&(k===i.FLOAT&&(A=i.RG32F),k===i.HALF_FLOAT&&(A=i.RG16F),k===i.UNSIGNED_BYTE&&(A=i.RG8)),v===i.RGBA&&(k===i.FLOAT&&(A=i.RGBA32F),k===i.HALF_FLOAT&&(A=i.RGBA16F),k===i.UNSIGNED_BYTE&&(A=it===Lt&&nt===!1?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(A=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(A=i.RGB5_A1)),(A===i.R16F||A===i.R32F||A===i.RG16F||A===i.RG32F||A===i.RGBA16F||A===i.RGBA32F)&&t.get("EXT_color_buffer_float"),A}function x(y,v,k){return C(y,k)===!0||y.isFramebufferTexture&&y.minFilter!==de&&y.minFilter!==ye?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function w(y){return y===de||y===ar||y===qi?i.NEAREST:i.LINEAR}function q(y){const v=y.target;v.removeEventListener("dispose",q),F(v),v.isVideoTexture&&_.delete(v)}function tt(y){const v=y.target;v.removeEventListener("dispose",tt),H(v)}function F(y){const v=n.get(y);if(v.__webglInit===void 0)return;const k=y.source,it=p.get(k);if(it){const nt=it[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&G(y),Object.keys(it).length===0&&p.delete(k)}n.remove(y)}function G(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const k=y.source,it=p.get(k);delete it[v.__cacheKey],o.memory.textures--}function H(y){const v=y.texture,k=n.get(y),it=n.get(v);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)i.deleteFramebuffer(k.__webglFramebuffer[nt]),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[nt]);else{if(i.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let nt=0;nt<k.__webglColorRenderbuffer.length;nt++)k.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[nt]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let nt=0,A=v.length;nt<A;nt++){const $=n.get(v[nt]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(v[nt])}n.remove(v),n.remove(y)}let K=0;function X(){K=0}function Y(){const y=K;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),K+=1,y}function et(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function j(y,v){const k=n.get(y);if(y.isVideoTexture&&te(y),y.isRenderTargetTexture===!1&&y.version>0&&k.__version!==y.version){const it=y.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(k,y,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function mt(y,v){const k=n.get(y);if(y.version>0&&k.__version!==y.version){St(k,y,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function N(y,v){const k=n.get(y);if(y.version>0&&k.__version!==y.version){St(k,y,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function Z(y,v){const k=n.get(y);if(y.version>0&&k.__version!==y.version){qt(k,y,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const J={[Ps]:i.REPEAT,[Le]:i.CLAMP_TO_EDGE,[Ds]:i.MIRRORED_REPEAT},lt={[de]:i.NEAREST,[ar]:i.NEAREST_MIPMAP_NEAREST,[qi]:i.NEAREST_MIPMAP_LINEAR,[ye]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ct={[tl]:i.NEVER,[ol]:i.ALWAYS,[el]:i.LESS,[il]:i.LEQUAL,[nl]:i.EQUAL,[al]:i.GEQUAL,[sl]:i.GREATER,[rl]:i.NOTEQUAL};function _t(y,v,k){if(k?(i.texParameteri(y,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,J[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,lt[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,lt[v.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Le||v.wrapT!==Le)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,w(v.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==de&&v.minFilter!==ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===de||v.minFilter!==qi&&v.minFilter!==ai||v.type===Qe&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===oi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(y,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Pt(y,v){let k=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",q));const it=v.source;let nt=p.get(it);nt===void 0&&(nt={},p.set(it,nt));const A=et(v);if(A!==y.__cacheKey){nt[A]===void 0&&(nt[A]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),nt[A].usedTimes++;const $=nt[y.__cacheKey];$!==void 0&&(nt[y.__cacheKey].usedTimes--,$.usedTimes===0&&G(v)),y.__cacheKey=A,y.__webglTexture=nt[A].texture}return k}function St(y,v,k){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);const nt=Pt(y,v),A=v.source;e.bindTexture(it,y.__webglTexture,i.TEXTURE0+k);const $=n.get(A);if(A.version!==$.__version||nt===!0){e.activeTexture(i.TEXTURE0+k),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Q=b(v)&&T(v.image)===!1;let z=M(v.image,Q,!1,h);z=ie(v,z);const dt=T(z)||a,gt=r.convert(v.format,v.colorSpace);let pt=r.convert(v.type),ft=B(v.internalFormat,gt,pt,v.colorSpace);_t(it,v,dt);let ht;const Et=v.mipmaps,Ot=a&&v.isVideoTexture!==!0,R=$.__version===void 0||nt===!0,at=x(v,z,dt);if(v.isDepthTexture)ft=i.DEPTH_COMPONENT,a?v.type===Qe?ft=i.DEPTH_COMPONENT32F:v.type===Je?ft=i.DEPTH_COMPONENT24:v.type===mn?ft=i.DEPTH24_STENCIL8:ft=i.DEPTH_COMPONENT16:v.type===Qe&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===gn&&ft===i.DEPTH_COMPONENT&&v.type!==Gs&&v.type!==Je&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Je,pt=r.convert(v.type)),v.format===$n&&ft===i.DEPTH_COMPONENT&&(ft=i.DEPTH_STENCIL,v.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=mn,pt=r.convert(v.type))),R&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,ft,z.width,z.height):e.texImage2D(i.TEXTURE_2D,0,ft,z.width,z.height,0,gt,pt,null));else if(v.isDataTexture)if(Et.length>0&&dt){Ot&&R&&e.texStorage2D(i.TEXTURE_2D,at,ft,Et[0].width,Et[0].height);for(let O=0,st=Et.length;O<st;O++)ht=Et[O],Ot?e.texSubImage2D(i.TEXTURE_2D,O,0,0,ht.width,ht.height,gt,pt,ht.data):e.texImage2D(i.TEXTURE_2D,O,ft,ht.width,ht.height,0,gt,pt,ht.data);v.generateMipmaps=!1}else Ot?(R&&e.texStorage2D(i.TEXTURE_2D,at,ft,z.width,z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,gt,pt,z.data)):e.texImage2D(i.TEXTURE_2D,0,ft,z.width,z.height,0,gt,pt,z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ot&&R&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,ft,Et[0].width,Et[0].height,z.depth);for(let O=0,st=Et.length;O<st;O++)ht=Et[O],v.format!==Pe?gt!==null?Ot?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ht.width,ht.height,z.depth,gt,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,ft,ht.width,ht.height,z.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,ht.width,ht.height,z.depth,gt,pt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,ft,ht.width,ht.height,z.depth,0,gt,pt,ht.data)}else{Ot&&R&&e.texStorage2D(i.TEXTURE_2D,at,ft,Et[0].width,Et[0].height);for(let O=0,st=Et.length;O<st;O++)ht=Et[O],v.format!==Pe?gt!==null?Ot?e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,ht.width,ht.height,gt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,O,ft,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?e.texSubImage2D(i.TEXTURE_2D,O,0,0,ht.width,ht.height,gt,pt,ht.data):e.texImage2D(i.TEXTURE_2D,O,ft,ht.width,ht.height,0,gt,pt,ht.data)}else if(v.isDataArrayTexture)Ot?(R&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,ft,z.width,z.height,z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,gt,pt,z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,z.width,z.height,z.depth,0,gt,pt,z.data);else if(v.isData3DTexture)Ot?(R&&e.texStorage3D(i.TEXTURE_3D,at,ft,z.width,z.height,z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,gt,pt,z.data)):e.texImage3D(i.TEXTURE_3D,0,ft,z.width,z.height,z.depth,0,gt,pt,z.data);else if(v.isFramebufferTexture){if(R)if(Ot)e.texStorage2D(i.TEXTURE_2D,at,ft,z.width,z.height);else{let O=z.width,st=z.height;for(let ot=0;ot<at;ot++)e.texImage2D(i.TEXTURE_2D,ot,ft,O,st,0,gt,pt,null),O>>=1,st>>=1}}else if(Et.length>0&&dt){Ot&&R&&e.texStorage2D(i.TEXTURE_2D,at,ft,Et[0].width,Et[0].height);for(let O=0,st=Et.length;O<st;O++)ht=Et[O],Ot?e.texSubImage2D(i.TEXTURE_2D,O,0,0,gt,pt,ht):e.texImage2D(i.TEXTURE_2D,O,ft,gt,pt,ht);v.generateMipmaps=!1}else Ot?(R&&e.texStorage2D(i.TEXTURE_2D,at,ft,z.width,z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,pt,z)):e.texImage2D(i.TEXTURE_2D,0,ft,gt,pt,z);C(v,dt)&&P(it),$.__version=A.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function qt(y,v,k){if(v.image.length!==6)return;const it=Pt(y,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+k);const A=n.get(nt);if(nt.version!==A.__version||it===!0){e.activeTexture(i.TEXTURE0+k),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const $=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,z=[];for(let O=0;O<6;O++)!$&&!Q?z[O]=M(v.image[O],!1,!0,c):z[O]=Q?v.image[O].image:v.image[O],z[O]=ie(v,z[O]);const dt=z[0],gt=T(dt)||a,pt=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),ht=B(v.internalFormat,pt,ft,v.colorSpace),Et=a&&v.isVideoTexture!==!0,Ot=A.__version===void 0||it===!0;let R=x(v,dt,gt);_t(i.TEXTURE_CUBE_MAP,v,gt);let at;if($){Et&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,R,ht,dt.width,dt.height);for(let O=0;O<6;O++){at=z[O].mipmaps;for(let st=0;st<at.length;st++){const ot=at[st];v.format!==Pe?pt!==null?Et?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,0,0,ot.width,ot.height,pt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,ht,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,0,0,ot.width,ot.height,pt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st,ht,ot.width,ot.height,0,pt,ft,ot.data)}}}else{at=v.mipmaps,Et&&Ot&&(at.length>0&&R++,e.texStorage2D(i.TEXTURE_CUBE_MAP,R,ht,z[0].width,z[0].height));for(let O=0;O<6;O++)if(Q){Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,z[O].width,z[O].height,pt,ft,z[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,ht,z[O].width,z[O].height,0,pt,ft,z[O].data);for(let st=0;st<at.length;st++){const zt=at[st].image[O].image;Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,0,0,zt.width,zt.height,pt,ft,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,ht,zt.width,zt.height,0,pt,ft,zt.data)}}else{Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,pt,ft,z[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,ht,pt,ft,z[O]);for(let st=0;st<at.length;st++){const ot=at[st];Et?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,0,0,pt,ft,ot.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,st+1,ht,pt,ft,ot.image[O])}}}C(v,gt)&&P(i.TEXTURE_CUBE_MAP),A.__version=nt.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Nt(y,v,k,it,nt){const A=r.convert(k.format,k.colorSpace),$=r.convert(k.type),Q=B(k.internalFormat,A,$,k.colorSpace);n.get(v).__hasExternalTextures||(nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,Q,v.width,v.height,v.depth,0,A,$,null):e.texImage2D(nt,0,Q,v.width,v.height,0,A,$,null)),e.bindFramebuffer(i.FRAMEBUFFER,y),Gt(v)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,nt,n.get(k).__webglTexture,0,Tt(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,nt,n.get(k).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(y,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer&&!v.stencilBuffer){let it=i.DEPTH_COMPONENT16;if(k||Gt(v)){const nt=v.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Qe?it=i.DEPTH_COMPONENT32F:nt.type===Je&&(it=i.DEPTH_COMPONENT24));const A=Tt(v);Gt(v)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,A,it,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,A,it,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(v.depthBuffer&&v.stencilBuffer){const it=Tt(v);k&&Gt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,v.width,v.height):Gt(v)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const it=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let nt=0;nt<it.length;nt++){const A=it[nt],$=r.convert(A.format,A.colorSpace),Q=r.convert(A.type),z=B(A.internalFormat,$,Q,A.colorSpace),dt=Tt(v);k&&Gt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,z,v.width,v.height):Gt(v)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const it=n.get(v.depthTexture).__webglTexture,nt=Tt(v);if(v.depthTexture.format===gn)Gt(v)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===$n)Gt(v)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function vt(y){const v=n.get(y),k=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Qt(v.__webglFramebuffer,y)}else if(k){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]=i.createRenderbuffer(),U(v.__webglDepthbuffer[it],y,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),U(v.__webglDepthbuffer,y,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(y,v,k){const it=n.get(y);v!==void 0&&Nt(it.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),k!==void 0&&vt(y)}function xt(y){const v=y.texture,k=n.get(y),it=n.get(v);y.addEventListener("dispose",tt),y.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,o.memory.textures++);const nt=y.isWebGLCubeRenderTarget===!0,A=y.isWebGLMultipleRenderTargets===!0,$=T(y)||a;if(nt){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)k.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(k.__webglFramebuffer=i.createFramebuffer(),A)if(s.drawBuffers){const Q=y.texture;for(let z=0,dt=Q.length;z<dt;z++){const gt=n.get(Q[z]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Gt(y)===!1){const Q=A?v:[v];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let z=0;z<Q.length;z++){const dt=Q[z];k.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[z]);const gt=r.convert(dt.format,dt.colorSpace),pt=r.convert(dt.type),ft=B(dt.internalFormat,gt,pt,dt.colorSpace,y.isXRRenderTarget===!0),ht=Tt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,ft,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,k.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),U(k.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),_t(i.TEXTURE_CUBE_MAP,v,$);for(let Q=0;Q<6;Q++)Nt(k.__webglFramebuffer[Q],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q);C(v,$)&&P(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(A){const Q=y.texture;for(let z=0,dt=Q.length;z<dt;z++){const gt=Q[z],pt=n.get(gt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),_t(i.TEXTURE_2D,gt,$),Nt(k.__webglFramebuffer,y,gt,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D),C(gt,$)&&P(i.TEXTURE_2D)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?Q=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Q,it.__webglTexture),_t(Q,v,$),Nt(k.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,Q),C(v,$)&&P(Q),e.unbindTexture()}y.depthBuffer&&vt(y)}function kt(y){const v=T(y)||a,k=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let it=0,nt=k.length;it<nt;it++){const A=k[it];if(C(A,v)){const $=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Q=n.get(A).__webglTexture;e.bindTexture($,Q),P($),e.unbindTexture()}}}function Ut(y){if(a&&y.samples>0&&Gt(y)===!1){const v=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],k=y.width,it=y.height;let nt=i.COLOR_BUFFER_BIT;const A=[],$=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(y),z=y.isWebGLMultipleRenderTargets===!0;if(z)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){A.push(i.COLOR_ATTACHMENT0+dt),y.depthBuffer&&A.push($);const gt=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(gt===!1&&(y.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[dt]),gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[$]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[$])),z){const pt=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,k,it,0,0,k,it,nt,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,A)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[dt]);const gt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}}function Tt(y){return Math.min(d,y.samples)}function Gt(y){const v=n.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(y){const v=o.render.frame;_.get(y)!==v&&(_.set(y,v),y.update())}function ie(y,v){const k=y.colorSpace,it=y.format,nt=y.type;return y.isCompressedTexture===!0||y.format===Us||k!==Fe&&k!==vn&&(k===Lt?a===!1?t.has("EXT_sRGB")===!0&&it===Pe?(y.format=Us,y.minFilter=ye,y.generateMipmaps=!1):v=Ba.sRGBToLinear(v):(it!==Pe||nt!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.setTexture2D=j,this.setTexture2DArray=mt,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=wt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Gt}function af(i,t,e){const n=e.isWebGL2;function s(r,o=vn){let a;if(r===en)return i.UNSIGNED_BYTE;if(r===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(r===La)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ho)return i.BYTE;if(r===ko)return i.SHORT;if(r===Gs)return i.UNSIGNED_SHORT;if(r===Ra)return i.INT;if(r===Je)return i.UNSIGNED_INT;if(r===Qe)return i.FLOAT;if(r===oi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vo)return i.ALPHA;if(r===Pe)return i.RGBA;if(r===Wo)return i.LUMINANCE;if(r===Xo)return i.LUMINANCE_ALPHA;if(r===gn)return i.DEPTH_COMPONENT;if(r===$n)return i.DEPTH_STENCIL;if(r===Us)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Yo)return i.RED;if(r===Pa)return i.RED_INTEGER;if(r===qo)return i.RG;if(r===Da)return i.RG_INTEGER;if(r===Ua)return i.RGBA_INTEGER;if(r===$i||r===ji||r===Ki||r===Zi)if(o===Lt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===$i)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ji)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ki)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===$i)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ji)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ki)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===or||r===lr||r===cr||r===hr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===or)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$o)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ur||r===dr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ur)return o===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===dr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fr||r===pr||r===mr||r===gr||r===_r||r===vr||r===xr||r===Mr||r===Sr||r===Er||r===yr||r===br||r===Tr||r===Ar)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_r)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Er)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===br)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tr)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ar)return o===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ji)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ji)return o===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===jo||r===wr||r===Rr||r===Cr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ji)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class of extends xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fi extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class cf extends Me{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:gn,h!==gn&&h!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gn&&(n=Je),n===void 0&&h===$n&&(n=mn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=l!==void 0?l:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hf extends yn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,_=null;const g=e.getContextAttributes();let p=null,u=null;const E=[],M=[];let T=null;const b=new xe;b.layers.enable(1),b.viewport=new Wt;const C=new xe;C.layers.enable(2),C.viewport=new Wt;const P=[b,C],B=new of;B.layers.enable(1),B.layers.enable(2);let x=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){T=N},this.getController=function(N){let Z=E[N];return Z===void 0&&(Z=new Es,E[N]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(N){let Z=E[N];return Z===void 0&&(Z=new Es,E[N]=Z),Z.getGripSpace()},this.getHand=function(N){let Z=E[N];return Z===void 0&&(Z=new Es,E[N]=Z),Z.getHandSpace()};function q(N){const Z=M.indexOf(N.inputSource);if(Z===-1)return;const J=E[Z];J!==void 0&&(J.update(N.inputSource,N.frame,c||o),J.dispatchEvent({type:N.type,data:N.inputSource}))}function tt(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",F);for(let N=0;N<E.length;N++){const Z=M[N];Z!==null&&(M[N]=null,E[N].disconnect(Z))}x=null,w=null,t.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,mt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:m}),u=new Mn(m.framebufferWidth,m.framebufferHeight,{format:Pe,type:en,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,J=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?$n:gn,J=g.stencil?mn:Je);const ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(ct),s.updateRenderState({layers:[f]}),u=new Mn(f.textureWidth,f.textureHeight,{format:Pe,type:en,depthTexture:new cf(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const _t=t.properties.get(u);_t.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(N){for(let Z=0;Z<N.removed.length;Z++){const J=N.removed[Z],lt=M.indexOf(J);lt>=0&&(M[lt]=null,E[lt].disconnect(J))}for(let Z=0;Z<N.added.length;Z++){const J=N.added[Z];let lt=M.indexOf(J);if(lt===-1){for(let _t=0;_t<E.length;_t++)if(_t>=M.length){M.push(J),lt=_t;break}else if(M[_t]===null){M[_t]=J,lt=_t;break}if(lt===-1)break}const ct=E[lt];ct&&ct.connect(J)}}const G=new L,H=new L;function K(N,Z,J){G.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(J.matrixWorld);const lt=G.distanceTo(H),ct=Z.projectionMatrix.elements,_t=J.projectionMatrix.elements,Pt=ct[14]/(ct[10]-1),St=ct[14]/(ct[10]+1),qt=(ct[9]+1)/ct[5],Nt=(ct[9]-1)/ct[5],U=(ct[8]-1)/ct[0],Qt=(_t[8]+1)/_t[0],vt=Pt*U,wt=Pt*Qt,xt=lt/(-U+Qt),kt=xt*-U;Z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(kt),N.translateZ(xt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ut=Pt+xt,Tt=St+xt,Gt=vt-kt,te=wt+(lt-kt),ie=qt*St/Tt*Ut,y=Nt*St/Tt*Ut;N.projectionMatrix.makePerspective(Gt,te,ie,y,Ut,Tt),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function X(N,Z){Z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(s===null)return N;T&&(N=T),B.near=C.near=b.near=N.near,B.far=C.far=b.far=N.far,(x!==B.near||w!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),x=B.near,w=B.far);const Z=N.parent,J=B.cameras;X(B,Z);for(let lt=0;lt<J.length;lt++)X(J[lt],Z);return J.length===2?K(B,b,C):B.projectionMatrix.copy(b.projectionMatrix),T&&Y(B,Z),B};function Y(N,Z){const J=T;Z===null?J.matrix.copy(N.matrixWorld):(J.matrix.copy(Z.matrixWorld),J.matrix.invert(),J.matrix.multiply(N.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const lt=J.children;for(let ct=0,_t=lt.length;ct<_t;ct++)lt[ct].updateMatrixWorld(!0);J.projectionMatrix.copy(N.projectionMatrix),J.projectionMatrixInverse.copy(N.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Is*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let et=null;function j(N,Z){if(h=Z.getViewerPose(c||o),_=Z,h!==null){const J=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let lt=!1;J.length!==B.cameras.length&&(B.cameras.length=0,lt=!0);for(let ct=0;ct<J.length;ct++){const _t=J[ct];let Pt=null;if(m!==null)Pt=m.getViewport(_t);else{const qt=d.getViewSubImage(f,_t);Pt=qt.viewport,ct===0&&(t.setRenderTargetTextures(u,qt.colorTexture,f.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(u))}let St=P[ct];St===void 0&&(St=new xe,St.layers.enable(ct),St.viewport=new Wt,P[ct]=St),St.matrix.fromArray(_t.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(_t.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ct===0&&(B.matrix.copy(St.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),lt===!0&&B.cameras.push(St)}}for(let J=0;J<E.length;J++){const lt=M[J],ct=E[J];lt!==null&&ct!==void 0&&ct.update(lt,Z,c||o)}et&&et(N,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const mt=new ja;mt.setAnimationLoop(j),this.setAnimationLoop=function(N){et=N},this.dispose=function(){}}}function uf(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Ya(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,M,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,E,M):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===pe&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===pe&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const E=t.get(u).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*M,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=M*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pe&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function df(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){const T=M.program;n.uniformBlockBinding(E,T)}function c(E,M){let T=s[E.id];T===void 0&&(_(E),T=h(E),s[E.id]=T,E.addEventListener("dispose",p));const b=M.program;n.updateUBOMapping(E,b);const C=t.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function h(E){const M=d();E.__bindingPointIndex=M;const T=i.createBuffer(),b=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,b,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=s[E.id],T=E.uniforms,b=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,P=T.length;C<P;C++){const B=T[C];if(m(B,C,b)===!0){const x=B.__offset,w=Array.isArray(B.value)?B.value:[B.value];let q=0;for(let tt=0;tt<w.length;tt++){const F=w[tt],G=g(F);typeof F=="number"?(B.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,x+q,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=F.elements[0],B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=F.elements[0],B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=F.elements[0]):(F.toArray(B.__data,q),q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,B.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,T){const b=E.value;if(T[M]===void 0){if(typeof b=="number")T[M]=b;else{const C=Array.isArray(b)?b:[b],P=[];for(let B=0;B<C.length;B++)P.push(C[B].clone());T[M]=P}return!0}else if(typeof b=="number"){if(T[M]!==b)return T[M]=b,!0}else{const C=Array.isArray(T[M])?T[M]:[T[M]],P=Array.isArray(b)?b:[b];for(let B=0;B<C.length;B++){const x=C[B];if(x.equals(P[B])===!1)return x.copy(P[B]),!0}}return!1}function _(E){const M=E.uniforms;let T=0;const b=16;let C=0;for(let P=0,B=M.length;P<B;P++){const x=M[P],w={boundary:0,storage:0},q=Array.isArray(x.value)?x.value:[x.value];for(let tt=0,F=q.length;tt<F;tt++){const G=q[tt],H=g(G);w.boundary+=H.boundary,w.storage+=H.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,P>0){C=T%b;const tt=b-C;C!==0&&tt-w.boundary<0&&(T+=b-C,x.__offset=T)}T+=w.storage}return C=T%b,C>0&&(T+=b-C),E.__size=T,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function ff(){const i=zi("canvas");return i.style.display="block",i}class eo{constructor(t={}){const{canvas:e=ff(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const u=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Lt,this.useLegacyLights=!0,this.toneMapping=qe,this.toneMappingExposure=1;const M=this;let T=!1,b=0,C=0,P=null,B=-1,x=null;const w=new Wt,q=new Wt;let tt=null;const F=new Ht(0);let G=0,H=e.width,K=e.height,X=1,Y=null,et=null;const j=new Wt(0,0,H,K),mt=new Wt(0,0,H,K);let N=!1;const Z=new ks;let J=!1,lt=!1,ct=null;const _t=new Jt,Pt=new Rt,St=new L,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return P===null?X:1}let U=n;function Qt(S,I){for(let V=0;V<S.length;V++){const D=S[V],W=e.getContext(D,I);if(W!==null)return W}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zs}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",st,!1),U===null){const I=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&I.shift(),U=Qt(I,S),U===null)throw Qt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let vt,wt,xt,kt,Ut,Tt,Gt,te,ie,y,v,k,it,nt,A,$,Q,z,dt,gt,pt,ft,ht,Et;function Ot(){vt=new yu(U),wt=new _u(U,vt,t),vt.init(wt),ft=new af(U,vt,wt),xt=new sf(U,vt,wt),kt=new Au(U),Ut=new Vd,Tt=new rf(U,vt,xt,Ut,wt,ft,kt),Gt=new xu(M),te=new Eu(M),ie=new Bl(U,wt),ht=new mu(U,vt,ie,wt),y=new bu(U,ie,kt,ht),v=new Lu(U,y,ie,kt),dt=new Cu(U,wt,Tt),$=new vu(Ut),k=new kd(M,Gt,te,vt,wt,ht,$),it=new uf(M,Ut),nt=new Xd,A=new Zd(vt,wt),z=new pu(M,Gt,te,xt,v,f,l),Q=new nf(M,v,wt),Et=new df(U,kt,wt,xt),gt=new gu(U,vt,kt,wt),pt=new Tu(U,vt,kt,wt),kt.programs=k.programs,M.capabilities=wt,M.extensions=vt,M.properties=Ut,M.renderLists=nt,M.shadowMap=Q,M.state=xt,M.info=kt}Ot();const R=new hf(M,U);this.xr=R,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(H,K,!1))},this.getSize=function(S){return S.set(H,K)},this.setSize=function(S,I,V=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,K=I,e.width=Math.floor(S*X),e.height=Math.floor(I*X),V===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(H*X,K*X).floor()},this.setDrawingBufferSize=function(S,I,V){H=S,K=I,X=V,e.width=Math.floor(S*V),e.height=Math.floor(I*V),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(j)},this.setViewport=function(S,I,V,D){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,I,V,D),xt.viewport(w.copy(j).multiplyScalar(X).floor())},this.getScissor=function(S){return S.copy(mt)},this.setScissor=function(S,I,V,D){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,I,V,D),xt.scissor(q.copy(mt).multiplyScalar(X).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(S){xt.setScissorTest(N=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){et=S},this.getClearColor=function(S){return S.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(S=!0,I=!0,V=!0){let D=0;if(S){let W=!1;if(P!==null){const ut=P.texture.format;W=ut===Ua||ut===Da||ut===Pa}if(W){const ut=P.texture.type,Mt=ut===en||ut===Je||ut===Gs||ut===mn||ut===Ca||ut===La,yt=z.getClearColor(),bt=z.getClearAlpha(),Ft=yt.r,At=yt.g,Ct=yt.b,Vt=Ut.get(P).__webglFramebuffer;Mt?(m[0]=Ft,m[1]=At,m[2]=Ct,m[3]=bt,U.clearBufferuiv(U.COLOR,Vt,m)):(_[0]=Ft,_[1]=At,_[2]=Ct,_[3]=bt,U.clearBufferiv(U.COLOR,Vt,_))}else D|=U.COLOR_BUFFER_BIT}I&&(D|=U.DEPTH_BUFFER_BIT),V&&(D|=U.STENCIL_BUFFER_BIT),U.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",st,!1),nt.dispose(),A.dispose(),Ut.dispose(),Gt.dispose(),te.dispose(),v.dispose(),ht.dispose(),Et.dispose(),k.dispose(),R.dispose(),R.removeEventListener("sessionstart",Yt),R.removeEventListener("sessionend",De),ct&&(ct.dispose(),ct=null),ce.stop()};function at(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=kt.autoReset,I=Q.enabled,V=Q.autoUpdate,D=Q.needsUpdate,W=Q.type;Ot(),kt.autoReset=S,Q.enabled=I,Q.autoUpdate=V,Q.needsUpdate=D,Q.type=W}function st(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ot(S){const I=S.target;I.removeEventListener("dispose",ot),zt(I)}function zt(S){Xt(S),Ut.remove(S)}function Xt(S){const I=Ut.get(S).programs;I!==void 0&&(I.forEach(function(V){k.releaseProgram(V)}),S.isShaderMaterial&&k.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,V,D,W,ut){I===null&&(I=qt);const Mt=W.isMesh&&W.matrixWorld.determinant()<0,yt=ao(S,I,V,D,W);xt.setMaterial(D,Mt);let bt=V.index,Ft=1;D.wireframe===!0&&(bt=y.getWireframeAttribute(V),Ft=2);const At=V.drawRange,Ct=V.attributes.position;let Vt=At.start*Ft,$t=(At.start+At.count)*Ft;ut!==null&&(Vt=Math.max(Vt,ut.start*Ft),$t=Math.min($t,(ut.start+ut.count)*Ft)),bt!==null?(Vt=Math.max(Vt,0),$t=Math.min($t,bt.count)):Ct!=null&&(Vt=Math.max(Vt,0),$t=Math.min($t,Ct.count));const be=$t-Vt;if(be<0||be===1/0)return;ht.setup(W,D,yt,V,bt);let Oe,Kt=gt;if(bt!==null&&(Oe=ie.get(bt),Kt=pt,Kt.setIndex(Oe)),W.isMesh)D.wireframe===!0?(xt.setLineWidth(D.wireframeLinewidth*Nt()),Kt.setMode(U.LINES)):Kt.setMode(U.TRIANGLES);else if(W.isLine){let Bt=D.linewidth;Bt===void 0&&(Bt=1),xt.setLineWidth(Bt*Nt()),W.isLineSegments?Kt.setMode(U.LINES):W.isLineLoop?Kt.setMode(U.LINE_LOOP):Kt.setMode(U.LINE_STRIP)}else W.isPoints?Kt.setMode(U.POINTS):W.isSprite&&Kt.setMode(U.TRIANGLES);if(W.isInstancedMesh)Kt.renderInstances(Vt,be,W.count);else if(V.isInstancedBufferGeometry){const Bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vi=Math.min(V.instanceCount,Bt);Kt.renderInstances(Vt,be,Vi)}else Kt.render(Vt,be)},this.compile=function(S,I){function V(D,W,ut){D.transparent===!0&&D.side===Xe&&D.forceSinglePass===!1?(D.side=pe,D.needsUpdate=!0,pi(D,W,ut),D.side=nn,D.needsUpdate=!0,pi(D,W,ut),D.side=Xe):pi(D,W,ut)}p=A.get(S),p.init(),E.push(p),S.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights(M.useLegacyLights),S.traverse(function(D){const W=D.material;if(W)if(Array.isArray(W))for(let ut=0;ut<W.length;ut++){const Mt=W[ut];V(Mt,S,D)}else V(W,S,D)}),E.pop(),p=null};let jt=null;function rn(S){jt&&jt(S)}function Yt(){ce.stop()}function De(){ce.start()}const ce=new ja;ce.setAnimationLoop(rn),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(S){jt=S,R.setAnimationLoop(S),S===null?ce.stop():ce.start()},R.addEventListener("sessionstart",Yt),R.addEventListener("sessionend",De),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(I=R.updateCameraXR(I)),S.isScene===!0&&S.onBeforeRender(M,S,I,P),p=A.get(S,E.length),p.init(),E.push(p),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Z.setFromProjectionMatrix(_t),lt=this.localClippingEnabled,J=$.init(this.clippingPlanes,lt),g=nt.get(S,u.length),g.init(),u.push(g),$s(S,I,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(Y,et),J===!0&&$.beginShadows();const V=p.state.shadowsArray;if(Q.render(V,S,I),J===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,z.render(g,S),p.setupLights(M.useLegacyLights),I.isArrayCamera){const D=I.cameras;for(let W=0,ut=D.length;W<ut;W++){const Mt=D[W];js(g,S,Mt,Mt.viewport)}}else js(g,S,I);P!==null&&(Tt.updateMultisampleRenderTarget(P),Tt.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,I),ht.resetDefaultState(),B=-1,x=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function $s(S,I,V,D){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){D&&St.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);const Mt=v.update(S),yt=S.material;yt.visible&&g.push(S,Mt,yt,V,St.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==kt.render.frame&&(S.skeleton.update(),S.skeleton.frame=kt.render.frame);const Mt=v.update(S),yt=S.material;if(D&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),St.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),St.copy(Mt.boundingSphere.center)),St.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(yt)){const bt=Mt.groups;for(let Ft=0,At=bt.length;Ft<At;Ft++){const Ct=bt[Ft],Vt=yt[Ct.materialIndex];Vt&&Vt.visible&&g.push(S,Mt,Vt,V,St.z,Ct)}}else yt.visible&&g.push(S,Mt,yt,V,St.z,null)}}const ut=S.children;for(let Mt=0,yt=ut.length;Mt<yt;Mt++)$s(ut[Mt],I,V,D)}function js(S,I,V,D){const W=S.opaque,ut=S.transmissive,Mt=S.transparent;p.setupLightsView(V),J===!0&&$.setGlobalState(M.clippingPlanes,V),ut.length>0&&ro(W,ut,I,V),D&&xt.viewport(w.copy(D)),W.length>0&&fi(W,I,V),ut.length>0&&fi(ut,I,V),Mt.length>0&&fi(Mt,I,V),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ro(S,I,V,D){const W=wt.isWebGL2;ct===null&&(ct=new Mn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?oi:en,minFilter:ai,samples:W&&a===!0?4:0})),M.getDrawingBufferSize(Pt),W?ct.setSize(Pt.x,Pt.y):ct.setSize(Ns(Pt.x),Ns(Pt.y));const ut=M.getRenderTarget();M.setRenderTarget(ct),M.getClearColor(F),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear();const Mt=M.toneMapping;M.toneMapping=qe,fi(S,V,D),Tt.updateMultisampleRenderTarget(ct),Tt.updateRenderTargetMipmap(ct);let yt=!1;for(let bt=0,Ft=I.length;bt<Ft;bt++){const At=I[bt],Ct=At.object,Vt=At.geometry,$t=At.material,be=At.group;if($t.side===Xe&&Ct.layers.test(D.layers)){const Oe=$t.side;$t.side=pe,$t.needsUpdate=!0,Ks(Ct,V,D,Vt,$t,be),$t.side=Oe,$t.needsUpdate=!0,yt=!0}}yt===!0&&(Tt.updateMultisampleRenderTarget(ct),Tt.updateRenderTargetMipmap(ct)),M.setRenderTarget(ut),M.setClearColor(F,G),M.toneMapping=Mt}function fi(S,I,V){const D=I.isScene===!0?I.overrideMaterial:null;for(let W=0,ut=S.length;W<ut;W++){const Mt=S[W],yt=Mt.object,bt=Mt.geometry,Ft=D===null?Mt.material:D,At=Mt.group;yt.layers.test(V.layers)&&Ks(yt,I,V,bt,Ft,At)}}function Ks(S,I,V,D,W,ut){S.onBeforeRender(M,I,V,D,W,ut),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(M,I,V,D,S,ut),W.transparent===!0&&W.side===Xe&&W.forceSinglePass===!1?(W.side=pe,W.needsUpdate=!0,M.renderBufferDirect(V,I,D,W,S,ut),W.side=nn,W.needsUpdate=!0,M.renderBufferDirect(V,I,D,W,S,ut),W.side=Xe):M.renderBufferDirect(V,I,D,W,S,ut),S.onAfterRender(M,I,V,D,W,ut)}function pi(S,I,V){I.isScene!==!0&&(I=qt);const D=Ut.get(S),W=p.state.lights,ut=p.state.shadowsArray,Mt=W.state.version,yt=k.getParameters(S,W.state,ut,I,V),bt=k.getProgramCacheKey(yt);let Ft=D.programs;D.environment=S.isMeshStandardMaterial?I.environment:null,D.fog=I.fog,D.envMap=(S.isMeshStandardMaterial?te:Gt).get(S.envMap||D.environment),Ft===void 0&&(S.addEventListener("dispose",ot),Ft=new Map,D.programs=Ft);let At=Ft.get(bt);if(At!==void 0){if(D.currentProgram===At&&D.lightsStateVersion===Mt)return Zs(S,yt),At}else yt.uniforms=k.getUniforms(S),S.onBuild(V,yt,M),S.onBeforeCompile(yt,M),At=k.acquireProgram(yt,bt),Ft.set(bt,At),D.uniforms=yt.uniforms;const Ct=D.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=$.uniform),Zs(S,yt),D.needsLights=lo(S),D.lightsStateVersion=Mt,D.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.directionalShadowMap.value=W.state.directionalShadowMap,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotShadowMap.value=W.state.spotShadowMap,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMap.value=W.state.pointShadowMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix);const Vt=At.getUniforms(),$t=Oi.seqWithValue(Vt.seq,Ct);return D.currentProgram=At,D.uniformsList=$t,At}function Zs(S,I){const V=Ut.get(S);V.outputColorSpace=I.outputColorSpace,V.instancing=I.instancing,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function ao(S,I,V,D,W){I.isScene!==!0&&(I=qt),Tt.resetTextureUnits();const ut=I.fog,Mt=D.isMeshStandardMaterial?I.environment:null,yt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fe,bt=(D.isMeshStandardMaterial?te:Gt).get(D.envMap||Mt),Ft=D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,At=!!V.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Ct=!!V.morphAttributes.position,Vt=!!V.morphAttributes.normal,$t=!!V.morphAttributes.color,be=D.toneMapped?M.toneMapping:qe,Oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Kt=Oe!==void 0?Oe.length:0,Bt=Ut.get(D),Vi=p.state.lights;if(J===!0&&(lt===!0||S!==x)){const me=S===x&&D.id===B;$.setState(D,S,me)}let se=!1;D.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Vi.state.version||Bt.outputColorSpace!==yt||W.isInstancedMesh&&Bt.instancing===!1||!W.isInstancedMesh&&Bt.instancing===!0||W.isSkinnedMesh&&Bt.skinning===!1||!W.isSkinnedMesh&&Bt.skinning===!0||Bt.envMap!==bt||D.fog===!0&&Bt.fog!==ut||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==$.numPlanes||Bt.numIntersection!==$.numIntersection)||Bt.vertexAlphas!==Ft||Bt.vertexTangents!==At||Bt.morphTargets!==Ct||Bt.morphNormals!==Vt||Bt.morphColors!==$t||Bt.toneMapping!==be||wt.isWebGL2===!0&&Bt.morphTargetsCount!==Kt)&&(se=!0):(se=!0,Bt.__version=D.version);let an=Bt.currentProgram;se===!0&&(an=pi(D,I,W));let Js=!1,Jn=!1,Wi=!1;const he=an.getUniforms(),on=Bt.uniforms;if(xt.useProgram(an.program)&&(Js=!0,Jn=!0,Wi=!0),D.id!==B&&(B=D.id,Jn=!0),Js||x!==S){if(he.setValue(U,"projectionMatrix",S.projectionMatrix),wt.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),x!==S&&(x=S,Jn=!0,Wi=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const me=he.map.cameraPosition;me!==void 0&&me.setValue(U,St.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&he.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||W.isSkinnedMesh)&&he.setValue(U,"viewMatrix",S.matrixWorldInverse)}if(W.isSkinnedMesh){he.setOptional(U,W,"bindMatrix"),he.setOptional(U,W,"bindMatrixInverse");const me=W.skeleton;me&&(wt.floatVertexTextures?(me.boneTexture===null&&me.computeBoneTexture(),he.setValue(U,"boneTexture",me.boneTexture,Tt),he.setValue(U,"boneTextureSize",me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xi=V.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0&&wt.isWebGL2===!0)&&dt.update(W,V,an),(Jn||Bt.receiveShadow!==W.receiveShadow)&&(Bt.receiveShadow=W.receiveShadow,he.setValue(U,"receiveShadow",W.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(on.envMap.value=bt,on.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),Jn&&(he.setValue(U,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&oo(on,Wi),ut&&D.fog===!0&&it.refreshFogUniforms(on,ut),it.refreshMaterialUniforms(on,D,X,K,ct),Oi.upload(U,Bt.uniformsList,on,Tt)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Oi.upload(U,Bt.uniformsList,on,Tt),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&he.setValue(U,"center",W.center),he.setValue(U,"modelViewMatrix",W.modelViewMatrix),he.setValue(U,"normalMatrix",W.normalMatrix),he.setValue(U,"modelMatrix",W.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const me=D.uniformsGroups;for(let Yi=0,co=me.length;Yi<co;Yi++)if(wt.isWebGL2){const Qs=me[Yi];Et.update(Qs,an),Et.bind(Qs,an)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return an}function oo(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function lo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,I,V){Ut.get(S.texture).__webglTexture=I,Ut.get(S.depthTexture).__webglTexture=V;const D=Ut.get(S);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=V===void 0,D.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const V=Ut.get(S);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,V=0){P=S,b=I,C=V;let D=!0,W=null,ut=!1,Mt=!1;if(S){const bt=Ut.get(S);bt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(U.FRAMEBUFFER,null),D=!1):bt.__webglFramebuffer===void 0?Tt.setupRenderTarget(S):bt.__hasExternalTextures&&Tt.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);const Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Mt=!0);const At=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(W=At[I],ut=!0):wt.isWebGL2&&S.samples>0&&Tt.useMultisampledRTT(S)===!1?W=Ut.get(S).__webglMultisampledFramebuffer:W=At,w.copy(S.viewport),q.copy(S.scissor),tt=S.scissorTest}else w.copy(j).multiplyScalar(X).floor(),q.copy(mt).multiplyScalar(X).floor(),tt=N;if(xt.bindFramebuffer(U.FRAMEBUFFER,W)&&wt.drawBuffers&&D&&xt.drawBuffers(S,W),xt.viewport(w),xt.scissor(q),xt.setScissorTest(tt),ut){const bt=Ut.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,bt.__webglTexture,V)}else if(Mt){const bt=Ut.get(S.texture),Ft=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,V||0,Ft)}B=-1},this.readRenderTargetPixels=function(S,I,V,D,W,ut,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(yt=yt[Mt]),yt){xt.bindFramebuffer(U.FRAMEBUFFER,yt);try{const bt=S.texture,Ft=bt.format,At=bt.type;if(Ft!==Pe&&ft.convert(Ft)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ct=At===oi&&(vt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(At!==en&&ft.convert(At)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===Qe&&(wt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-D&&V>=0&&V<=S.height-W&&U.readPixels(I,V,D,W,ft.convert(Ft),ft.convert(At),ut)}finally{const bt=P!==null?Ut.get(P).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(S,I,V=0){const D=Math.pow(2,-V),W=Math.floor(I.image.width*D),ut=Math.floor(I.image.height*D);Tt.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,S.x,S.y,W,ut),xt.unbindTexture()},this.copyTextureToTexture=function(S,I,V,D=0){const W=I.image.width,ut=I.image.height,Mt=ft.convert(V.format),yt=ft.convert(V.type);Tt.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,S.x,S.y,W,ut,Mt,yt,I.image.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,Mt,I.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,D,S.x,S.y,Mt,yt,I.image),D===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,V,D,W=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=S.max.x-S.min.x+1,Mt=S.max.y-S.min.y+1,yt=S.max.z-S.min.z+1,bt=ft.convert(D.format),Ft=ft.convert(D.type);let At;if(D.isData3DTexture)Tt.setTexture3D(D,0),At=U.TEXTURE_3D;else if(D.isDataArrayTexture)Tt.setTexture2DArray(D,0),At=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Ct=U.getParameter(U.UNPACK_ROW_LENGTH),Vt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=U.getParameter(U.UNPACK_SKIP_PIXELS),be=U.getParameter(U.UNPACK_SKIP_ROWS),Oe=U.getParameter(U.UNPACK_SKIP_IMAGES),Kt=V.isCompressedTexture?V.mipmaps[0]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Kt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(At,W,I.x,I.y,I.z,ut,Mt,yt,bt,Ft,Kt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(At,W,I.x,I.y,I.z,ut,Mt,yt,bt,Kt.data)):U.texSubImage3D(At,W,I.x,I.y,I.z,ut,Mt,yt,bt,Ft,Kt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Vt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),U.pixelStorei(U.UNPACK_SKIP_ROWS,be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe),W===0&&D.generateMipmaps&&U.generateMipmap(At),xt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Tt.setTextureCube(S,0):S.isData3DTexture?Tt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Tt.setTexture2DArray(S,0):Tt.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){b=0,C=0,P=null,xt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ye}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?_n:Ia}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===_n?Lt:Fe}}class pf extends eo{}pf.prototype.isWebGL1Renderer=!0;class mf extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class gf extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xs extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ys=new Jt,ga=new L,_a=new L;class no{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ga.setFromMatrixPosition(t.matrixWorld),e.position.copy(ga),_a.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_a),e.updateMatrixWorld(),ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ys)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const va=new Jt,ii=new L,bs=new L;class _f extends no{constructor(){super(new xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ii.setFromMatrixPosition(t.matrixWorld),n.position.copy(ii),bs.copy(n.position),bs.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bs),n.updateMatrixWorld(),s.makeTranslation(-ii.x,-ii.y,-ii.z),va.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va)}}class vf extends Xs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _f}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class xf extends no{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mf extends Xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new xf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sf extends Xs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);class Ys{constructor(){this.callbacks={}}on(t,e,n=1){return this.callbacks[t]instanceof Array||(this.callbacks[t]=[]),this.callbacks[t][n]instanceof Array||(this.callbacks[t][n]=[]),this.callbacks[t][n].push(e),this}off(t,e=null){if(typeof e=="function"){const n=this.callbacks[t];for(const s in this.callbacks){const r=n[s][t].indexOf(e);r!==-1&&n.splice(r,1)}}else this.callbacks[t]instanceof Array&&delete this.callbacks[t];return this}trigger(t,e=[]){if(this.callbacks[t]instanceof Array)for(const n in this.callbacks[t])for(const s of this.callbacks[t][n])s.apply(this,e);return this}}class Ef extends Ys{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class yf extends Ys{constructor(){super(),this.start=performance.now(),this.current=this.start,this.elapsed=0,this.delta=.016,this.isPaused=!1,this.loadEvents(),this._tickBound=this.tick.bind(this),requestAnimationFrame(this._tickBound)}tick(){const t=performance.now();this.delta=Math.min((t-this.current)/1e3,.1),this.current=t,this.elapsed=this.current-this.start,this.isPaused||this.trigger("tick"),requestAnimationFrame(this._tickBound)}loadEvents(){document.addEventListener("visibilitychange",()=>{document.hidden?this.isPaused=!0:(this.start=performance.now(),this.isPaused=!1)})}}class bf extends Ys{constructor(){super(),this.setActions(),this.setKeyboard()}setActions(){this.actions={},this.actions.up=!1,this.actions.right=!1,this.actions.down=!1,this.actions.left=!1,this.actions.brake=!1,this.actions.boost=!1,document.addEventListener("visibilitychange",()=>{document.hidden||(this.actions.up=!1,this.actions.right=!1,this.actions.down=!1,this.actions.left=!1,this.actions.brake=!1,this.actions.boost=!1)})}setKeyboard(){this.keyboard={},this.keyboard.events={},this.keyboard.events.keyDown=t=>{switch(t.repeat||this.trigger("!keydown",[t.code]),t.code){case"ArrowUp":case"KeyW":this.actions.up=!0;break;case"ArrowRight":case"KeyD":this.actions.right=!0;break;case"ArrowDown":case"KeyS":this.actions.down=!0;break;case"ArrowLeft":case"KeyA":this.actions.left=!0;break;case"ControlLeft":case"ControlRight":case"Space":this.actions.brake=!0;break;case"ShiftLeft":case"ShiftRight":this.actions.boost=!0;break}},this.keyboard.events.keyUp=t=>{switch(this.trigger("keyup",[t.code]),t.code){case"ArrowUp":case"KeyW":this.actions.up=!1;break;case"ArrowRight":case"KeyD":this.actions.right=!1;break;case"ArrowDown":case"KeyS":this.actions.down=!1;break;case"ArrowLeft":case"KeyA":this.actions.left=!1;break;case"ControlLeft":case"ControlRight":case"Space":this.actions.brake=!1;break;case"ShiftLeft":case"ShiftRight":this.actions.boost=!1;break}},document.addEventListener("keydown",this.keyboard.events.keyDown),document.addEventListener("keyup",this.keyboard.events.keyUp)}}class Tf{constructor(){this.base=new Zn,this.canvas=this.base.canvas,this.sizes=this.base.sizes,this.scene=this.base.scene,this.camera=this.base.camera,this.setInstance()}setInstance(){this.instance=new eo({canvas:this.canvas,alpha:!0,antialias:!0}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}const Ma={type:"change"},Ts={type:"start"},Sa={type:"end"};class Af extends yn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bn.ROTATE,MIDDLE:bn.DOLLY,RIGHT:bn.PAN},this.touches={ONE:Tn.ROTATE,TWO:Tn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Gt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Gt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ma),n.update(),r=s.NONE},this.update=function(){const A=new L,$=new Sn().setFromUnitVectors(t.up,new L(0,1,0)),Q=$.clone().invert(),z=new L,dt=new Sn,gt=new L,pt=2*Math.PI;return function(){const ht=n.object.position;A.copy(ht).sub(n.target),A.applyQuaternion($),a.setFromVector3(A),n.autoRotate&&r===s.NONE&&x(P()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Et=n.minAzimuthAngle,Ot=n.maxAzimuthAngle;return isFinite(Et)&&isFinite(Ot)&&(Et<-Math.PI?Et+=pt:Et>Math.PI&&(Et-=pt),Ot<-Math.PI?Ot+=pt:Ot>Math.PI&&(Ot-=pt),Et<=Ot?a.theta=Math.max(Et,Math.min(Ot,a.theta)):a.theta=a.theta>(Et+Ot)/2?Math.max(Et,a.theta):Math.min(Ot,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),A.setFromSpherical(a),A.applyQuaternion(Q),ht.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||z.distanceToSquared(n.object.position)>o||8*(1-dt.dot(n.object.quaternion))>o||gt.distanceToSquared(n.target)>0?(n.dispatchEvent(Ma),z.copy(n.object.position),dt.copy(n.object.quaternion),gt.copy(n.target),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",y),n.domElement.removeEventListener("pointerdown",vt),n.domElement.removeEventListener("pointercancel",xt),n.domElement.removeEventListener("wheel",Tt),n.domElement.removeEventListener("pointermove",wt),n.domElement.removeEventListener("pointerup",xt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Gt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new xa,l=new xa;let c=1;const h=new L;let d=!1;const f=new Rt,m=new Rt,_=new Rt,g=new Rt,p=new Rt,u=new Rt,E=new Rt,M=new Rt,T=new Rt,b=[],C={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function B(){return Math.pow(.95,n.zoomSpeed)}function x(A){l.theta-=A}function w(A){l.phi-=A}const q=function(){const A=new L;return function(Q,z){A.setFromMatrixColumn(z,0),A.multiplyScalar(-Q),h.add(A)}}(),tt=function(){const A=new L;return function(Q,z){n.screenSpacePanning===!0?A.setFromMatrixColumn(z,1):(A.setFromMatrixColumn(z,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Q),h.add(A)}}(),F=function(){const A=new L;return function(Q,z){const dt=n.domElement;if(n.object.isPerspectiveCamera){const gt=n.object.position;A.copy(gt).sub(n.target);let pt=A.length();pt*=Math.tan(n.object.fov/2*Math.PI/180),q(2*Q*pt/dt.clientHeight,n.object.matrix),tt(2*z*pt/dt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(Q*(n.object.right-n.object.left)/n.object.zoom/dt.clientWidth,n.object.matrix),tt(z*(n.object.top-n.object.bottom)/n.object.zoom/dt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(A){f.set(A.clientX,A.clientY)}function X(A){E.set(A.clientX,A.clientY)}function Y(A){g.set(A.clientX,A.clientY)}function et(A){m.set(A.clientX,A.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;x(2*Math.PI*_.x/$.clientHeight),w(2*Math.PI*_.y/$.clientHeight),f.copy(m),n.update()}function j(A){M.set(A.clientX,A.clientY),T.subVectors(M,E),T.y>0?G(B()):T.y<0&&H(B()),E.copy(M),n.update()}function mt(A){p.set(A.clientX,A.clientY),u.subVectors(p,g).multiplyScalar(n.panSpeed),F(u.x,u.y),g.copy(p),n.update()}function N(A){A.deltaY<0?H(B()):A.deltaY>0&&G(B()),n.update()}function Z(A){let $=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),$=!0;break}$&&(A.preventDefault(),n.update())}function J(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),$=.5*(b[0].pageY+b[1].pageY);f.set(A,$)}}function lt(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),$=.5*(b[0].pageY+b[1].pageY);g.set(A,$)}}function ct(){const A=b[0].pageX-b[1].pageX,$=b[0].pageY-b[1].pageY,Q=Math.sqrt(A*A+$*$);E.set(0,Q)}function _t(){n.enableZoom&&ct(),n.enablePan&&lt()}function Pt(){n.enableZoom&&ct(),n.enableRotate&&J()}function St(A){if(b.length==1)m.set(A.pageX,A.pageY);else{const Q=nt(A),z=.5*(A.pageX+Q.x),dt=.5*(A.pageY+Q.y);m.set(z,dt)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;x(2*Math.PI*_.x/$.clientHeight),w(2*Math.PI*_.y/$.clientHeight),f.copy(m)}function qt(A){if(b.length===1)p.set(A.pageX,A.pageY);else{const $=nt(A),Q=.5*(A.pageX+$.x),z=.5*(A.pageY+$.y);p.set(Q,z)}u.subVectors(p,g).multiplyScalar(n.panSpeed),F(u.x,u.y),g.copy(p)}function Nt(A){const $=nt(A),Q=A.pageX-$.x,z=A.pageY-$.y,dt=Math.sqrt(Q*Q+z*z);M.set(0,dt),T.set(0,Math.pow(M.y/E.y,n.zoomSpeed)),G(T.y),E.copy(M)}function U(A){n.enableZoom&&Nt(A),n.enablePan&&qt(A)}function Qt(A){n.enableZoom&&Nt(A),n.enableRotate&&St(A)}function vt(A){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",wt),n.domElement.addEventListener("pointerup",xt)),v(A),A.pointerType==="touch"?te(A):kt(A))}function wt(A){n.enabled!==!1&&(A.pointerType==="touch"?ie(A):Ut(A))}function xt(A){k(A),b.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",wt),n.domElement.removeEventListener("pointerup",xt)),n.dispatchEvent(Sa),r=s.NONE}function kt(A){let $;switch(A.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case bn.DOLLY:if(n.enableZoom===!1)return;X(A),r=s.DOLLY;break;case bn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;Y(A),r=s.PAN}else{if(n.enableRotate===!1)return;K(A),r=s.ROTATE}break;case bn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;K(A),r=s.ROTATE}else{if(n.enablePan===!1)return;Y(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ts)}function Ut(A){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;et(A);break;case s.DOLLY:if(n.enableZoom===!1)return;j(A);break;case s.PAN:if(n.enablePan===!1)return;mt(A);break}}function Tt(A){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(A.preventDefault(),n.dispatchEvent(Ts),N(A),n.dispatchEvent(Sa))}function Gt(A){n.enabled===!1||n.enablePan===!1||Z(A)}function te(A){switch(it(A),b.length){case 1:switch(n.touches.ONE){case Tn.ROTATE:if(n.enableRotate===!1)return;J(),r=s.TOUCH_ROTATE;break;case Tn.PAN:if(n.enablePan===!1)return;lt(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Tn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(),r=s.TOUCH_DOLLY_PAN;break;case Tn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pt(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ts)}function ie(A){switch(it(A),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(A),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;qt(A),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(A),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qt(A),n.update();break;default:r=s.NONE}}function y(A){n.enabled!==!1&&A.preventDefault()}function v(A){b.push(A)}function k(A){delete C[A.pointerId];for(let $=0;$<b.length;$++)if(b[$].pointerId==A.pointerId){b.splice($,1);return}}function it(A){let $=C[A.pointerId];$===void 0&&($=new Rt,C[A.pointerId]=$),$.set(A.pageX,A.pageY)}function nt(A){const $=A.pointerId===b[0].pointerId?b[1]:b[0];return C[$.pointerId]}n.domElement.addEventListener("contextmenu",y),n.domElement.addEventListener("pointerdown",vt),n.domElement.addEventListener("pointercancel",xt),n.domElement.addEventListener("wheel",Tt,{passive:!1}),this.update()}}class wf{constructor(){this.base=new Zn,this.scene=this.base.scene,this.world=this.base.world,this.sizes=this.base.sizes,this.inputs=this.base.inputs,this.loadCamera(),this.setOrbitControls()}loadCamera(){this.instance=new xe(75,this.sizes.width/this.sizes.height,.1,100),this.instance.position.copy(new L(0,0,5)),this.instance.lookAt(new L(0,0,0)),this.scene.add(this.instance)}setOrbitControls(){this.controls=new Af(this.instance,this.base.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.minDistance=5,this.controls.maxDistance=30}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}class Rf extends sn{constructor(t,e,n){super(),this.initialize(t,e,n),this.build()}initialize(t,e,n){this.radius=t,this.segments=e,this.morphFn=n,this.faceCount=6,this.halfSquareSide=this.radius*1/Math.sqrt(3),this.grid=this.segments+1,this.midGrid=this.grid+this.segments,this.vertsPerFace=this.grid*this.grid+this.segments*this.segments,this.vertsTotal=this.vertsPerFace*this.faceCount,this.trisTotal=this.segments*this.segments*4*this.faceCount,this.positions=new Float32Array(this.vertsTotal*3),this.cube=new Float32Array(this.vertsTotal*3),this.diff=new Float32Array(this.vertsTotal*3),this.uvs=new Float32Array(this.vertsTotal*2),this.indices=new Uint32Array(this.trisTotal*3),this.setAttribute("position",new Se(this.positions,3).setUsage(ll)),this.setAttribute("uv",new Se(this.uvs,2)),this.setIndex(new Se(this.indices,1)),this.faceData=[[0,1,2,1],[0,1,2,-1],[1,2,0,1],[1,2,0,-1],[2,0,1,1],[2,0,1,-1]],this.uvData=[[0,1,1,1],[0,1,-1,1],[1,0,1,-1],[1,0,1,1],[1,0,1,-1],[1,0,1,1]],this.faceOffset=0,this.indexPtr=0,this.ptr=0,this.uvPtr=0,this.morph=function(r){const o=this.morphFn(r);for(let a=0;a<this.positions.length;a++)this.positions[a]=this.cube[a]+this.diff[a]*o;this.attributes.position.needsUpdate=!0}}build(){for(let t=0;t<this.faceCount;t++){const[e,n,s,r]=this.faceData[t];this.buildIndices(e,n,s,r),this.buildPositions(e,n,s,r);const[o,a,l,c]=this.uvData[t];this.buildUVs(o,a,l,c),this.faceOffset+=this.vertsPerFace,this.addGroup(t*this.segments*this.segments*12,this.segments*this.segments*12,t)}}buildIndices(t,e,n,s){for(let r=0;r<this.segments;r++)for(let o=0;o<this.segments;o++){const a=this.faceOffset+this.midGrid*r+this.grid+o,l=this.faceOffset+this.midGrid*r+o,c=this.faceOffset+this.midGrid*(r+1)+o,h=this.faceOffset+this.midGrid*r+1+o,d=l,f=c,m=this.faceOffset+this.midGrid*(r+1)+1+o,_=m,g=h,p=s===1?[[a,l,c],[a,h,d],[a,f,m],[a,_,g]]:[[a,c,l],[a,d,h],[a,m,f],[a,g,_]];for(let u=0;u<4;u++){const E=p[u];this.indices[this.indexPtr++]=E[0],this.indices[this.indexPtr++]=E[1],this.indices[this.indexPtr++]=E[2]}}}buildPositions(t,e,n,s){const r=(o,a,l)=>{this.cube[this.ptr+t]=o,this.cube[this.ptr+e]=a,this.cube[this.ptr+n]=l;const c=Math.sqrt(o*o+a*a+l*l),h=this.radius*o/c,d=this.radius*a/c,f=this.radius*l/c;this.diff[this.ptr+t]=h-o,this.diff[this.ptr+e]=d-a,this.diff[this.ptr+n]=f-l,this.positions[this.ptr+t]=o,this.positions[this.ptr+e]=a,this.positions[this.ptr+n]=l,this.ptr+=3};for(let o=0;o<this.grid;o++){for(let a=0;a<this.grid;a++){const l=-this.halfSquareSide+2*this.halfSquareSide*o/this.segments,c=-this.halfSquareSide+2*this.halfSquareSide*a/this.segments,h=s*this.halfSquareSide;r(l,c,h)}if(o<this.segments)for(let a=0;a<this.segments;a++){const l=-this.halfSquareSide+2*this.halfSquareSide*(o+.5)/this.segments,c=-this.halfSquareSide+2*this.halfSquareSide*(a+.5)/this.segments,h=s*this.halfSquareSide;r(l,c,h)}}}buildUVs(t,e,n,s){const r=(o,a)=>{this.uvs[this.uvPtr+t]=o,this.uvs[this.uvPtr+e]=a,this.uvPtr+=2};for(let o=0;o<this.grid;o++){for(let a=0;a<this.grid;a++)r(n===1?o/this.segments:1-o/this.segments,s===1?a/this.segments:1-a/this.segments);if(o<this.segments)for(let a=0;a<this.segments;a++)r(n===1?(o+.5)/this.segments:1-(o+.5)/this.segments,s===1?(a+.5)/this.segments:1-(a+.5)/this.segments)}}}const io=["Cube","Sphere","Ellipsoid","House","Bottle","Pencil","Bloom","Spiral","Starburst","Lantern"];class Cf extends Rf{constructor(){super(1,16,t=>t),this.shapes=io.map((t,e)=>{const n=new Float32Array(this.cube.length);for(let s=0;s<n.length;s+=3){const[r,o,a]=this.cube.subarray(s,s+3),l=Math.hypot(r,o,a);let c=[r,o,a];if(e===1&&(c=[r/l,o/l,a/l]),e===2&&(c=[r/l*.7,o/l*1.3,a/l*.7]),e===3){const h=this.halfSquareSide,d=.3+.6*(1-Math.abs(r)/h),f=(o/h+1)/2;c=[r/h*.8,-.65+f*(d+.65),a/h*.65]}if(e===4){const h=r/this.halfSquareSide,d=a/this.halfSquareSide,f=(o/this.halfSquareSide+1)/2,_=.48-.29*Math.max(0,Math.min(1,(f-.625)/.25));c=[_*h*Math.sqrt(1-d*d/2),f*1.9-.95,_*d*Math.sqrt(1-h*h/2)]}if(e===5){const h=r/this.halfSquareSide,d=a/this.halfSquareSide,f=(o/this.halfSquareSide+1)/2,m=Math.max(Math.abs(h),Math.abs(d)),_=Math.atan2(d,h),g=1.2-.55*m;c=[.26*m*Math.cos(_),-1.05+f*(g+1.05),.26*m*Math.sin(_)]}if(e>=6){const h=r/l,d=o/l,f=a/l,m=Math.atan2(f,h),_=Math.max(0,1-d*d);if(e===6){const g=.78+.32*Math.cos(5*m)*_**2;c=[h*g,d*.43+.15*_,f*g]}if(e===7){const g=.72+.24*Math.cos(3*m+5*d)*_**1.5;c=[h*g,d*1.18,f*g]}if(e===8){const p=.57+.62*(h**8+d**8+f**8);c=[h*p,d*p,f*p]}if(e===9){const g=.83+.13*Math.cos(10*m)*_**2;c=[h*g,d*1.12,f*g]}}n.set(c,s)}return n}),this.morph=(t,e=0,n=1,s=2)=>{const r=h=>1+Math.exp(-10*h)*Math.sin((h-.15)*17),o=(1-Math.cos(t*Math.PI))/2,a=(r(t**2.5)-r(0))/(r(1)-r(0)),l=Math.max(0,Math.min(2,s)),c=l<=1?t+(o-t)*l:o+(a-o)*(l-1);for(let h=0;h<this.positions.length;h++)this.positions[h]=this.shapes[e][h]+(this.shapes[n][h]-this.shapes[e][h])*c;this.attributes.position.needsUpdate=!0,this.computeVertexNormals(),this.computeBoundingSphere()}}}class Lf{constructor(){this.base=new Zn,this.t=0,this.dir=1,this.playing=!0,this.geom=new Cf,this.mesh=new Ie(this.geom,new gf({color:16711680,wireframe:!0})),this.mesh.scale.setScalar(2),this.base.scene.add(this.mesh),this.ui=Object.fromEntries([...document.querySelectorAll("[id]")].map(t=>[t.id,t]));for(const t of["from","to"])io.forEach((e,n)=>this.ui[t].add(new Option(e,n))),this.ui[t].addEventListener("change",()=>{this.t=0,this.dir=1,this.render()});this.ui.to.value="1",this.ui.play.onclick=()=>{this.playing=!this.playing,this.playing&&this.t===1&&(this.t=0,this.dir=1),this.render()},this.ui.progress.oninput=()=>{this.playing=!1,this.t=Number(this.ui.progress.value),this.dir=1,this.render()},this.ui.motion.oninput=()=>this.render(),this.ui.speed.oninput=()=>this.render(),this.ui.wireframe.onchange=()=>{this.mesh.material.wireframe=this.ui.wireframe.checked},this.ui.color.oninput=()=>this.mesh.material.color.set(this.ui.color.value),this.ui.reset.onclick=()=>{this.ui.from.value="0",this.ui.to.value="1",this.ui.motion.value="2",this.ui.speed.value="1",this.ui.loop.checked=!0,this.ui.wireframe.checked=!0,this.ui.color.value="#ff0000",this.mesh.material.color.set("#ff0000"),this.mesh.material.wireframe=!0,this.t=0,this.dir=1,this.playing=!0,this.render()},this.render()}render(){const t=Number(this.ui.motion.value);this.geom.morph(this.t,Number(this.ui.from.value),Number(this.ui.to.value),t),this.ui.speedAmount.value=`${Number(this.ui.speed.value).toFixed(2).replace(/\.?0+$/,"")}×`;const e=t===0?"Linear":t===1?"Smooth":t===2?"Spring":t<1?`${Math.round(t*100)}% smooth`:`${Math.round((t-1)*100)}% spring`;this.ui.motionAmount.value=e,this.ui.motion.setAttribute("aria-valuetext",e),this.ui.progress.value=this.t,this.ui.amount.value=`${Math.round(this.t*100)}%`,this.ui.play.textContent=this.playing?"Pause":"Play"}update(){this.playing&&(this.t+=this.dir*this.base.time.delta*.5*Number(this.ui.speed.value),this.t>=1&&(this.t=1,this.ui.loop.checked?this.dir=-1:this.playing=!1),this.t<=0&&(this.t=0,this.dir=1,this.ui.loop.checked||(this.playing=!1)),this.render())}}class Pf{constructor(){this.base=new Zn,this.scene=this.base.scene,this.debug=this.base.debug,this.setAmbientLight(),this.loadDebugger()}setAmbientLight(){this.ambientLight=new Sf(16777215,.5),this.scene.add(this.ambientLight),this.pointLight=new vf(16777215,1),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight)}setSunLight(){this.sunLight=new Mf("#ffffff",4),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=15,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(3.5,2,-1.25),this.scene.add(this.sunLight)}loadDebugger(){this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("environment"),this.debugFolder.add(this.ambientLight,"intensity").name("ambient_light_intensity").min(0).max(10).step(.001))}}class Df{constructor(){this.base=new Zn,this.scene=this.base.scene,this.environment=new Pf,this.cubeSphereMesh=new Lf}update(){this.cubeSphereMesh.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class Ne{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ne.nextNameID=Ne.nextNameID||0,this.$name.id=`lil-gui-name-${++Ne.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Uf extends Ne{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Os(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const If={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Os,toHexString:Os},li={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Nf={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=li.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return li.toHexString(s)}},Ff={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=li.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return li.toHexString(s)}},Of=[If,li,Nf,Ff];function Bf(i){return Of.find(t=>t.match(i))}class zf extends Ne{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Bf(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Os(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class As extends Ne{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Gf extends Ne{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+E),this.$input.value=this.getValue())},s=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},r=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let o=!1,a,l,c,h,d;const f=5,m=E=>{a=E.clientX,l=c=E.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=E=>{if(o){const M=E.clientX-a,T=E.clientY-l;Math.abs(T)>f?(E.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>f&&g()}if(!o){const M=E.clientY-c;d-=M*this._step*this._arrowKeyMultiplier(E),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=E.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(u,E,M,T,b)=>(u-E)/(M-E)*(b-T)+T,e=u=>{const E=this.$slider.getBoundingClientRect();let M=t(u,E.left,E.right,this._min,this._max);this._snapClampSetValue(M)},n=u=>{this._setDraggingStyle(!0),e(u.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=u=>{e(u.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=u=>{u.preventDefault(),this._setDraggingStyle(!0),e(u.touches[0].clientX),o=!1},h=u=>{u.touches.length>1||(this._hasScrollBar?(a=u.touches[0].clientX,l=u.touches[0].clientY,o=!0):c(u),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=u=>{if(o){const E=u.touches[0].clientX-a,M=u.touches[0].clientY-l;Math.abs(E)>Math.abs(M)?c(u):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else u.preventDefault(),e(u.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),_=400;let g;const p=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const M=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Hf extends Ne{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class kf extends Ne{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Vf=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Wf(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Ea=!1;class qs{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Ea&&a&&(Wf(Vf),Ea=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new Hf(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Gf(this,t,e,n,s,r);case"boolean":return new Uf(this,t,e);case"string":return new kf(this,t,e);case"function":return new As(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new zf(this,t,e,n)}addFolder(t){const e=new qs({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof As||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof As)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class Xf{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new qs)}update(){this.active}}class Yf{constructor(){this.EPSILON=1e-10}sanitize(t,e=this.EPSILON,n=12){if(Math.abs(t)<e)return 0;const s=Math.pow(10,n);return Math.round(t*s)/s}sanitize_vec(t=new L(0,0,0),e=this.EPSILON,n=12){const s=new L(0,0,0);return s.x=this.sanitize(t.x),s.y=this.sanitize(t.y),s.z=this.sanitize(t.z),s}cos(t){return this.sanitize(Math.cos(t))}sin(t){return this.sanitize(Math.sin(t))}tan(t){return this.sanitize(Math.tan(t))}atan2(t,e){return this.sanitize(Math.atan2(t,e))}round(t){return this.sanitize(t)}clamp(t,e,n){return Math.min(Math.max(t,e),n)}}let ws=null;class Zn{constructor(t){if(ws)return ws;ws=this,window.experience=this,this.canvas=t,this.debug=new Xf,this.sizes=new Ef,this.time=new yf,this.inputs=new bf,this.SafeMath=new Yf,this.scene=new mf,this.world=new Df,this.camera=new wf,this.renderer=new Tf,this.loadEvents()}loadEvents(){this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.debug.update(),this.renderer.update()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.scene.traverse(t=>{if(t instanceof Ie){t.geometry.dispose();for(const e in t.material){const n=t.material[e];n&&typeof n.dispose=="function"&&n.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}const Bs=document.querySelector("#theme"),so=()=>{const i=document.documentElement.dataset.theme==="dark";Bs.setAttribute("aria-pressed",String(i)),Bs.title=i?"Switch to light mode":"Switch to dark mode"};Bs.addEventListener("click",()=>{const i=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=i;try{localStorage.setItem("shapes-theme",i)}catch{}so()});so();new Zn(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-a3136e07.js.map
