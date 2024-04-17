(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="163",Ic=0,Go=1,Nc=2,Ol=1,Dc=2,Ln=3,Dn=0,$e=1,gn=2,jn=0,Di=1,Wo=2,Xo=3,qo=4,Uc=5,hi=100,Fc=101,Bc=102,Oc=103,zc=104,Vc=200,Hc=201,kc=202,Gc=203,so=204,oo=205,Wc=206,Xc=207,qc=208,Yc=209,Kc=210,jc=211,Zc=212,Jc=213,$c=214,Qc=0,th=1,eh=2,es=3,nh=4,ih=5,rh=6,sh=7,xo=0,oh=1,ah=2,Zn=0,lh=1,ch=2,hh=3,uh=4,dh=5,fh=6,ph=7,Yo="attached",mh="detached",zl=300,Oi=301,zi=302,ao=303,lo=304,ds=306,Vi=1e3,qn=1001,ns=1002,Ze=1003,Vl=1004,cr=1005,en=1006,Qr=1007,In=1008,Jn=1009,vh=1010,gh=1011,Hl=1012,kl=1013,Hi=1014,yn=1015,is=1016,Gl=1017,Wl=1018,yr=1020,_h=35902,yh=1021,xh=1022,dn=1023,Mh=1024,Sh=1025,Ui=1026,vr=1027,Xl=1028,ql=1029,Eh=1030,Yl=1031,Kl=1033,gs=33776,_s=33777,ys=33778,xs=33779,Ko=35840,jo=35841,Zo=35842,Jo=35843,jl=36196,$o=37492,Qo=37496,ta=37808,ea=37809,na=37810,ia=37811,ra=37812,sa=37813,oa=37814,aa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,Ms=36492,pa=36494,ma=36495,wh=36283,va=36284,ga=36285,_a=36286,gr=2300,ki=2301,Ss=2302,ya=2400,xa=2401,Ma=2402,Ah=2500,Th=0,Zl=1,co=2,bh=3200,Rh=3201,Mo=0,Ch=1,Xn="",Ke="srgb",ke="srgb-linear",So="display-p3",fs="display-p3-linear",rs="linear",Ee="srgb",ss="rec709",os="p3",mi=7680,Sa=519,Ph=512,Lh=513,Ih=514,Jl=515,Nh=516,Dh=517,Uh=518,Fh=519,ho=35044,Ea="300 es",Nn=2e3,as=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const ur=Math.PI/180,Gi=180/Math.PI;function fn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[o&255]+We[o>>8&255]+We[o>>16&255]+We[o>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Ne(o,t,e){return Math.max(t,Math.min(e,o))}function Eo(o,t){return(o%t+t)%t}function Bh(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Oh(o,t,e){return o!==t?(e-o)/(t-o):0}function dr(o,t,e){return(1-e)*o+e*t}function zh(o,t,e,n){return dr(o,t,1-Math.exp(-e*n))}function Vh(o,t=1){return t-Math.abs(Eo(o,t*2)-t)}function Hh(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function kh(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Gh(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Wh(o,t){return o+Math.random()*(t-o)}function Xh(o){return o*(.5-Math.random())}function qh(o){o!==void 0&&(wa=o);let t=wa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yh(o){return o*ur}function Kh(o){return o*Gi}function jh(o){return(o&o-1)===0&&o!==0}function Zh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Jh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function $h(o,t,e,n,i){const r=Math.cos,s=Math.sin,a=r(e/2),l=s(e/2),h=r((t+n)/2),u=s((t+n)/2),c=r((t-n)/2),d=s((t-n)/2),f=r((n-t)/2),v=s((n-t)/2);switch(i){case"XYX":o.set(a*u,l*c,l*d,a*h);break;case"YZY":o.set(l*d,a*u,l*c,a*h);break;case"ZXZ":o.set(l*c,l*d,a*u,a*h);break;case"XZX":o.set(a*u,l*v,l*f,a*h);break;case"YXY":o.set(l*f,a*u,l*v,a*h);break;case"ZYZ":o.set(l*v,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Qh={DEG2RAD:ur,RAD2DEG:Gi,generateUUID:fn,clamp:Ne,euclideanModulo:Eo,mapLinear:Bh,inverseLerp:Oh,lerp:dr,damp:zh,pingpong:Vh,smoothstep:Hh,smootherstep:kh,randInt:Gh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:Yh,radToDeg:Kh,isPowerOfTwo:jh,ceilPowerOfTwo:Zh,floorPowerOfTwo:Jh,setQuaternionFromProperEuler:$h,normalize:ve,denormalize:un};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,i,r,s,a,l,h){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,l,h)}set(t,e,n,i,r,s,a,l,h){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=i[0],p=i[3],m=i[6],y=i[1],_=i[4],x=i[7],A=i[2],C=i[5],L=i[8];return r[0]=s*g+a*y+l*A,r[3]=s*p+a*_+l*C,r[6]=s*m+a*x+l*L,r[1]=h*g+u*y+c*A,r[4]=h*p+u*_+c*C,r[7]=h*m+u*x+c*L,r[2]=d*g+f*y+v*A,r[5]=d*p+f*_+v*C,r[8]=d*m+f*x+v*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*s*u-e*a*h-n*r*u+n*a*l+i*r*h-i*s*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=u*s-a*h,d=a*l-u*r,f=h*r-s*l,v=e*c+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=c*g,t[1]=(i*h-u*n)*g,t[2]=(a*n-i*s)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*l-h*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*s+h*a)+s+t,-i*h,i*l,-i*(-h*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new ie;function $l(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function _r(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tu(){const o=_r("canvas");return o.style.display="block",o}const Aa={};function Ql(o){o in Aa||(Aa[o]=!0,console.warn(o))}const Ta=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[ke]:{transfer:rs,primaries:ss,toReference:o=>o,fromReference:o=>o},[Ke]:{transfer:Ee,primaries:ss,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[fs]:{transfer:rs,primaries:os,toReference:o=>o.applyMatrix3(ba),fromReference:o=>o.applyMatrix3(Ta)},[So]:{transfer:Ee,primaries:os,toReference:o=>o.convertSRGBToLinear().applyMatrix3(ba),fromReference:o=>o.applyMatrix3(Ta).convertLinearToSRGB()}},eu=new Set([ke,fs]),pe={enabled:!0,_workingColorSpace:ke,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!eu.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=wr[t].toReference,i=wr[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return wr[o].primaries},getTransfer:function(o){return o===Xn?rs:wr[o].transfer}};function Fi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vi;class nu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=_r("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Fi(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iu=0;class tc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(As(i[s].image)):r.push(As(i[s]))}else r=As(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function As(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?nu.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ru=0;class Be extends Yi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=qn,i=qn,r=en,s=In,a=dn,l=Jn,h=Be.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=fn(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=zl;Be.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,x=(f+1)/2,A=(m+1)/2,C=(u+d)/4,L=(c+g)/4,I=(v+p)/4;return _>x&&_>A?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=C/n,r=L/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=C/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=L/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-v)*(p-v)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-v)/y,this.y=(c-g)/y,this.z=(d-u)/y,this.w=Math.acos((h+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class su extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends su{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ec extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=r[s+0],f=r[s+1],v=r[s+2],g=r[s+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(c!==g||l!==d||h!==f||u!==v){let p=1-a;const m=l*d+h*f+u*v+c*g,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const A=Math.sqrt(_),C=Math.atan2(A,m*y);p=Math.sin(p*C)/A,a=Math.sin(a*C)/A}const x=a*y;if(l=l*p+d*x,h=h*p+f*x,u=u*p+v*x,c=c*p+g*x,p===1-a){const A=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=A,h*=A,u*=A,c*=A}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=r[s],d=r[s+1],f=r[s+2],v=r[s+3];return t[e]=a*v+u*c+l*f-h*d,t[e+1]=l*v+u*d+h*c-a*f,t[e+2]=h*v+u*f+a*d-l*c,t[e+3]=u*v-a*c-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(r/2),d=l(n/2),f=l(i/2),v=l(r/2);switch(s){case"XYZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"YXZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"ZXY":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"ZYX":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"YZX":this._x=d*u*c+h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c-d*f*v;break;case"XZY":this._x=d*u*c-h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(s-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(r-h)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(s-i)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+s*a+i*h-r*l,this._y=i*u+s*l+r*a-n*h,this._z=r*u+s*h+n*l-i*a,this._w=s*u-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*s+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ra.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ra.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,l=t.w,h=2*(s*i-a*n),u=2*(a*e-r*i),c=2*(r*n-s*e);return this.x=e+l*h+s*c-a*u,this.y=n+l*u+a*h-r*c,this.z=i+l*c+r*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new W,Ra=new ti;class Un{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,ln):ln.fromBufferAttribute(r,s),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Tr.subVectors(this.max,er),gi.subVectors(t.a,er),_i.subVectors(t.b,er),yi.subVectors(t.c,er),Bn.subVectors(_i,gi),On.subVectors(yi,_i),ei.subVectors(gi,yi);let e=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!bs(e,gi,_i,yi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!bs(e,gi,_i,yi,Tr))?!1:(br.crossVectors(Bn,On),e=[br.x,br.y,br.z],bs(e,gi,_i,yi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new W,new W,new W,new W,new W,new W,new W,new W],ln=new W,Ar=new Un,gi=new W,_i=new W,yi=new W,Bn=new W,On=new W,ei=new W,er=new W,Tr=new W,br=new W,ni=new W;function bs(o,t,e,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){ni.fromArray(o,r);const a=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=t.dot(ni),h=e.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const au=new Un,nr=new W,Rs=new W;class xn{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):au.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Rs)),this.expandByPoint(nr.copy(t.center).sub(Rs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new W,Cs=new W,Rr=new W,zn=new W,Ps=new W,Cr=new W,Ls=new W;class ps{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Cs.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Cs);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Rr),a=zn.dot(this.direction),l=-zn.dot(Rr),h=zn.lengthSq(),u=Math.abs(1-s*s);let c,d,f,v;if(u>0)if(c=s*l-a,d=s*a-l,v=r*u,c>=0)if(d>=-v)if(d<=v){const g=1/u;c*=g,d*=g,f=c*(c+s*d+2*a)+d*(s*c+d+2*l)+h}else d=r,c=Math.max(0,-(s*d+a)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(s*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-v?(c=Math.max(0,-(-s*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=v?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(s*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=s>0?-r:r,c=Math.max(0,-(s*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Cs).addScaledVector(Rr,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,s=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,s=(t.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){Ps.subVectors(e,t),Cr.subVectors(n,t),Ls.crossVectors(Ps,Cr);let s=this.direction.dot(Ls),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Cr.crossVectors(zn,Cr));if(l<0)return null;const h=a*this.direction.dot(Ps.cross(zn));if(h<0||l+h>s)return null;const u=-a*zn.dot(Ls);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,s,a,l,h,u,c,d,f,v,g,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,l,h,u,c,d,f,v,g,p)}set(t,e,n,i,r,s,a,l,h,u,c,d,f,v,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=s,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=c,m[14]=d,m[3]=f,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),s=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const d=s*u,f=s*c,v=a*u,g=a*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=f+v*h,e[5]=d-g*h,e[9]=-a*l,e[2]=g-d*h,e[6]=v+f*h,e[10]=s*l}else if(t.order==="YXZ"){const d=l*u,f=l*c,v=h*u,g=h*c;e[0]=d+g*a,e[4]=v*a-f,e[8]=s*h,e[1]=s*c,e[5]=s*u,e[9]=-a,e[2]=f*a-v,e[6]=g+d*a,e[10]=s*l}else if(t.order==="ZXY"){const d=l*u,f=l*c,v=h*u,g=h*c;e[0]=d-g*a,e[4]=-s*c,e[8]=v+f*a,e[1]=f+v*a,e[5]=s*u,e[9]=g-d*a,e[2]=-s*h,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const d=s*u,f=s*c,v=a*u,g=a*c;e[0]=l*u,e[4]=v*h-f,e[8]=d*h+g,e[1]=l*c,e[5]=g*h+d,e[9]=f*h-v,e[2]=-h,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const d=s*l,f=s*h,v=a*l,g=a*h;e[0]=l*u,e[4]=g-d*c,e[8]=v*c+f,e[1]=c,e[5]=s*u,e[9]=-a*u,e[2]=-h*u,e[6]=f*c+v,e[10]=d-g*c}else if(t.order==="XZY"){const d=s*l,f=s*h,v=a*l,g=a*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+g,e[5]=s*u,e[9]=f*c-v,e[2]=v*c-f,e[6]=a*u,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lu,t,cu)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Vn.crossVectors(n,Qe),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Vn.crossVectors(n,Qe)),Vn.normalize(),Pr.crossVectors(Qe,Vn),i[0]=Vn.x,i[4]=Pr.x,i[8]=Qe.x,i[1]=Vn.y,i[5]=Pr.y,i[9]=Qe.y,i[2]=Vn.z,i[6]=Pr.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],p=n[10],m=n[14],y=n[3],_=n[7],x=n[11],A=n[15],C=i[0],L=i[4],I=i[8],S=i[12],M=i[1],b=i[5],U=i[9],P=i[13],X=i[2],q=i[6],ot=i[10],k=i[14],N=i[3],J=i[7],K=i[11],V=i[15];return r[0]=s*C+a*M+l*X+h*N,r[4]=s*L+a*b+l*q+h*J,r[8]=s*I+a*U+l*ot+h*K,r[12]=s*S+a*P+l*k+h*V,r[1]=u*C+c*M+d*X+f*N,r[5]=u*L+c*b+d*q+f*J,r[9]=u*I+c*U+d*ot+f*K,r[13]=u*S+c*P+d*k+f*V,r[2]=v*C+g*M+p*X+m*N,r[6]=v*L+g*b+p*q+m*J,r[10]=v*I+g*U+p*ot+m*K,r[14]=v*S+g*P+p*k+m*V,r[3]=y*C+_*M+x*X+A*N,r[7]=y*L+_*b+x*q+A*J,r[11]=y*I+_*U+x*ot+A*K,r[15]=y*S+_*P+x*k+A*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],f=t[14],v=t[3],g=t[7],p=t[11],m=t[15];return v*(+r*l*c-i*h*c-r*a*d+n*h*d+i*a*f-n*l*f)+g*(+e*l*f-e*h*d+r*s*d-i*s*f+i*h*u-r*l*u)+p*(+e*h*c-e*a*f-r*s*c+n*s*f+r*a*u-n*h*u)+m*(-i*a*u-e*l*c+e*a*d+i*s*c-n*s*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],v=t[12],g=t[13],p=t[14],m=t[15],y=c*p*h-g*d*h+g*l*f-a*p*f-c*l*m+a*d*m,_=v*d*h-u*p*h-v*l*f+s*p*f+u*l*m-s*d*m,x=u*g*h-v*c*h+v*a*f-s*g*f-u*a*m+s*c*m,A=v*c*l-u*g*l-v*a*d+s*g*d+u*a*p-s*c*p,C=e*y+n*_+i*x+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=y*L,t[1]=(g*d*r-c*p*r-g*i*f+n*p*f+c*i*m-n*d*m)*L,t[2]=(a*p*r-g*l*r+g*i*h-n*p*h-a*i*m+n*l*m)*L,t[3]=(c*l*r-a*d*r-c*i*h+n*d*h+a*i*f-n*l*f)*L,t[4]=_*L,t[5]=(u*p*r-v*d*r+v*i*f-e*p*f-u*i*m+e*d*m)*L,t[6]=(v*l*r-s*p*r-v*i*h+e*p*h+s*i*m-e*l*m)*L,t[7]=(s*d*r-u*l*r+u*i*h-e*d*h-s*i*f+e*l*f)*L,t[8]=x*L,t[9]=(v*c*r-u*g*r-v*n*f+e*g*f+u*n*m-e*c*m)*L,t[10]=(s*g*r-v*a*r+v*n*h-e*g*h-s*n*m+e*a*m)*L,t[11]=(u*a*r-s*c*r-u*n*h+e*c*h+s*n*f-e*a*f)*L,t[12]=A*L,t[13]=(u*g*i-v*c*i+v*n*d-e*g*d-u*n*p+e*c*p)*L,t[14]=(v*a*i-s*g*i-v*n*l+e*g*l+s*n*p-e*a*p)*L,t[15]=(s*c*i-u*a*i+u*n*l-e*c*l-s*n*d+e*a*d)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,l=t.z,h=r*s,u=r*a;return this.set(h*s+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*s,0,h*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,l=e._w,h=r+r,u=s+s,c=a+a,d=r*h,f=r*u,v=r*c,g=s*u,p=s*c,m=a*c,y=l*h,_=l*u,x=l*c,A=n.x,C=n.y,L=n.z;return i[0]=(1-(g+m))*A,i[1]=(f+x)*A,i[2]=(v-_)*A,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+m))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(v+_)*L,i[9]=(p-y)*L,i[10]=(1-(d+g))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=xi.set(i[0],i[1],i[2]).length();const s=xi.set(i[4],i[5],i[6]).length(),a=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);const h=1/r,u=1/s,c=1/a;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=c,cn.elements[9]*=c,cn.elements[10]*=c,e.setFromRotationMatrix(cn),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=Nn){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),c=(e+t)/(e-t),d=(n+i)/(n-i);let f,v;if(a===Nn)f=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(a===as)f=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=Nn){const l=this.elements,h=1/(e-t),u=1/(n-i),c=1/(s-r),d=(e+t)*h,f=(n+i)*u;let v,g;if(a===Nn)v=(s+r)*c,g=-2*c;else if(a===as)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xi=new W,cn=new ee,lu=new W(0,0,0),cu=new W(1,1,1),Vn=new W,Pr=new W,Qe=new W,Ca=new ee,Pa=new ti;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ca.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ca,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pa.setFromEuler(this),this.setFromQuaternion(Pa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hu=0;const La=new W,Mi=new ti,bn=new ee,Lr=new W,ir=new W,uu=new W,du=new ti,Ia=new W(1,0,0),Na=new W(0,1,0),Da=new W(0,0,1),Ua={type:"added"},fu={type:"removed"},Si={type:"childadded",child:null},Is={type:"childremoved",child:null};class Re extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new W,e=new mn,n=new ti,i=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new ie}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(Ia,t)}rotateY(t){return this.rotateOnAxis(Na,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return La.copy(t).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ia,t)}translateY(t){return this.translateOnAxis(Na,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ir,Lr,this.up):bn.lookAt(Lr,ir,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Mi.setFromRotationMatrix(bn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ua),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fu),Is.child=t,this.dispatchEvent(Is),Is.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ua),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,uu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,du,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),c=s(t.shapes),d=s(t.skeletons),f=s(t.animations),v=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function s(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DEFAULT_UP=new W(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new W,Rn=new W,Ns=new W,Cn=new W,Ei=new W,wi=new W,Fa=new W,Ds=new W,Us=new W,Fs=new W;class _n{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){hn.subVectors(i,e),Rn.subVectors(n,e),Ns.subVectors(t,e);const s=hn.dot(hn),a=hn.dot(Rn),l=hn.dot(Ns),h=Rn.dot(Rn),u=Rn.dot(Ns),c=s*h-a*a;if(c===0)return r.set(0,0,0),null;const d=1/c,f=(h*l-a*u)*d,v=(s*u-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,r,s,a,l){return this.getBarycoord(t,e,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(s,Cn.y),l.addScaledVector(a,Cn.z),l)}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),Rn.subVectors(t,e),hn.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;Ei.subVectors(i,n),wi.subVectors(r,n),Ds.subVectors(t,n);const l=Ei.dot(Ds),h=wi.dot(Ds);if(l<=0&&h<=0)return e.copy(n);Us.subVectors(t,i);const u=Ei.dot(Us),c=wi.dot(Us);if(u>=0&&c<=u)return e.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),e.copy(n).addScaledVector(Ei,s);Fs.subVectors(t,r);const f=Ei.dot(Fs),v=wi.dot(Fs);if(v>=0&&f<=v)return e.copy(r);const g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return a=h/(h-v),e.copy(n).addScaledVector(wi,a);const p=u*v-f*c;if(p<=0&&c-u>=0&&f-v>=0)return Fa.subVectors(r,i),a=(c-u)/(c-u+(f-v)),e.copy(i).addScaledVector(Fa,a);const m=1/(p+g+d);return s=g*m,a=d*m,e.copy(n).addScaledVector(Ei,s).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Bs(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Eo(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Bs(s,r,t+1/3),this.g=Bs(s,r,t),this.b=Bs(s,r,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return pe.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Ne(Xe.r*255,0,255))*65536+Math.round(Ne(Xe.g*255,0,255))*256+Math.round(Ne(Xe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,i=Xe.g,r=Xe.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,h;const u=(a+s)/2;if(a===s)l=0,h=0;else{const c=s-a;switch(h=u<=.5?c/(s+a):c/(2-s-a),s){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ke){pe.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,i=Xe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Ir);const n=dr(Hn.h,Ir.h,e),i=dr(Hn.s,Ir.s,e),r=dr(Hn.l,Ir.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Jt;Jt.NAMES=ic;let pu=0;class pn extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=Di,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=oo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class di extends pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new W,Nr=new zt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ql("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ho&&(t.usage=this.usage),t}}class rc extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mu=0;const sn=new ee,Os=new Re,Ai=new W,tn=new Un,rr=new Un,Fe=new W;class rn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($l(t)?sc:rc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Os.lookAt(t),Os.updateMatrix(),this.applyMatrix4(Os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(tn.min,rr.min),tn.expandByPoint(Fe),Fe.addVectors(tn.max,rr.max),tn.expandByPoint(Fe)):(tn.expandByPoint(rr.min),tn.expandByPoint(rr.max))}tn.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Fe.fromBufferAttribute(a,h),l&&(Ai.fromBufferAttribute(t,h),Fe.add(Ai)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new W,l[I]=new W;const h=new W,u=new W,c=new W,d=new zt,f=new zt,v=new zt,g=new W,p=new W;function m(I,S,M){h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),c.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),v.fromBufferAttribute(r,M),u.sub(h),c.sub(h),f.sub(d),v.sub(d);const b=1/(f.x*v.y-v.x*f.y);isFinite(b)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(c,-f.y).multiplyScalar(b),p.copy(c).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(b),a[I].add(g),a[S].add(g),a[M].add(g),l[I].add(p),l[S].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,S=y.length;I<S;++I){const M=y[I],b=M.start,U=M.count;for(let P=b,X=b+U;P<X;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const _=new W,x=new W,A=new W,C=new W;function L(I){A.fromBufferAttribute(i,I),C.copy(A);const S=a[I];_.copy(S),_.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(C,S);const b=x.dot(l[I])<0?-1:1;s.setXYZW(I,_.x,_.y,_.z,b)}for(let I=0,S=y.length;I<S;++I){const M=y[I],b=M.start,U=M.count;for(let P=b,X=b+U;P<X;P+=3)L(t.getX(P+0)),L(t.getX(P+1)),L(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new W,r=new W,s=new W,a=new W,l=new W,h=new W,u=new W,c=new W;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),u.subVectors(s,r),c.subVectors(i,r),u.cross(c),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,p),a.add(u),l.add(u),h.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),u.subVectors(s,r),c.subVectors(i,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u);let f=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)d[v++]=h[f++]}return new Je(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const h=s[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let h=0,u=s.length;h<u;h++){const c=s[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new ee,ii=new ps,Dr=new xn,Oa=new W,Ti=new W,bi=new W,Ri=new W,zs=new W,Ur=new W,Fr=new zt,Br=new zt,Or=new zt,za=new W,Va=new W,Ha=new W,zr=new W,Vr=new W;class Ve extends Re{constructor(t=new rn,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ur.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],c=r[l];u!==0&&(zs.fromBufferAttribute(c,t),s?Ur.addScaledVector(zs,u):Ur.addScaledVector(zs.sub(e),u))}e.add(Ur)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Dr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Dr,Oa)===null||ii.origin.distanceToSquared(Oa)>(t.far-t.near)**2))&&(Ba.copy(r).invert(),ii.copy(t.ray).applyMatrix4(Ba),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=s[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,A=_;x<A;x+=3){const C=a.getX(x),L=a.getX(x+1),I=a.getX(x+2);i=Hr(this,m,t,n,h,u,c,C,L,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);i=Hr(this,s,t,n,h,u,c,y,_,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=s[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=y,A=_;x<A;x+=3){const C=x,L=x+1,I=x+2;i=Hr(this,m,t,n,h,u,c,C,L,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const y=p,_=p+1,x=p+2;i=Hr(this,s,t,n,h,u,c,y,_,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function vu(o,t,e,n,i,r,s,a){let l;if(t.side===$e?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,t.side===Dn,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Vr);return h<e.near||h>e.far?null:{distance:h,point:Vr.clone(),object:o}}function Hr(o,t,e,n,i,r,s,a,l,h){o.getVertexPosition(a,Ti),o.getVertexPosition(l,bi),o.getVertexPosition(h,Ri);const u=vu(o,t,e,n,Ti,bi,Ri,zr);if(u){i&&(Fr.fromBufferAttribute(i,a),Br.fromBufferAttribute(i,l),Or.fromBufferAttribute(i,h),u.uv=_n.getInterpolation(zr,Ti,bi,Ri,Fr,Br,Or,new zt)),r&&(Fr.fromBufferAttribute(r,a),Br.fromBufferAttribute(r,l),Or.fromBufferAttribute(r,h),u.uv1=_n.getInterpolation(zr,Ti,bi,Ri,Fr,Br,Or,new zt)),s&&(za.fromBufferAttribute(s,a),Va.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,h),u.normal=_n.getInterpolation(zr,Ti,bi,Ri,za,Va,Ha,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a,b:l,c:h,normal:new W,materialIndex:0};_n.getNormal(Ti,bi,Ri,c.normal),u.face=c}return u}class xr extends rn{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],h=[],u=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,i,s,2),v("x","z","y",1,-1,t,n,-e,i,s,3),v("x","y","z",1,-1,t,e,n,i,r,4),v("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(c,2));function v(g,p,m,y,_,x,A,C,L,I,S){const M=x/L,b=A/I,U=x/2,P=A/2,X=C/2,q=L+1,ot=I+1;let k=0,N=0;const J=new W;for(let K=0;K<ot;K++){const V=K*b-P;for(let tt=0;tt<q;tt++){const H=tt*M-U;J[g]=H*y,J[p]=V*_,J[m]=X,h.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[m]=C>0?1:-1,u.push(J.x,J.y,J.z),c.push(tt/L),c.push(1-K/I),k+=1}}for(let K=0;K<I;K++)for(let V=0;V<L;V++){const tt=d+V+q*K,H=d+V+q*(K+1),T=d+(V+1)+q*(K+1),R=d+(V+1)+q*K;l.push(tt,H,R),l.push(H,T,R),N+=6}a.addGroup(f,N,S),f+=N,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(o){const t={};for(let e=0;e<o.length;e++){const n=Wi(o[e]);for(const i in n)t[i]=n[i]}return t}function gu(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function oc(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const _u={clone:Wi,merge:Ye};var yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ac extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new W,ka=new zt,Ga=new zt;class je extends ac{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,ka,Ga),e.subVectors(Ga,ka)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,h=s.fullHeight;r+=s.offsetX*i/l,e-=s.offsetY*n/h,i*=s.width/l,n*=s.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Pi=1;class Mu extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(Ci,Pi,t,e);i.layers=this.layers,this.add(i);const r=new je(Ci,Pi,t,e);r.layers=this.layers,this.add(r);const s=new je(Ci,Pi,t,e);s.layers=this.layers,this.add(s);const a=new je(Ci,Pi,t,e);a.layers=this.layers,this.add(a);const l=new je(Ci,Pi,t,e);l.layers=this.layers,this.add(l);const h=new je(Ci,Pi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,l]=e;for(const h of e)this.remove(h);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,l,h,u]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(c,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class lc extends Be{constructor(t,e,n,i,r,s,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,i,r,s,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Su extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xr(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:jn});r.uniforms.tEquirect.value=e;const s=new Ve(i,r),a=e.minFilter;return e.minFilter===In&&(e.minFilter=en),new Mu(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}const Vs=new W,Eu=new W,wu=new ie;class li{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vs.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wu.getNormalMatrix(t),i=this.coplanarPoint(Vs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new xn,kr=new W;class wo{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,s=new li){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,i=t.elements,r=i[0],s=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],v=i[9],g=i[10],p=i[11],m=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(l-r,d-h,p-f,x-m).normalize(),n[1].setComponents(l+r,d+h,p+f,x+m).normalize(),n[2].setComponents(l+s,d+u,p+v,x+y).normalize(),n[3].setComponents(l-s,d-u,p-v,x-y).normalize(),n[4].setComponents(l-a,d-c,p-g,x-_).normalize(),e===Nn)n[5].setComponents(l+a,d+c,p+g,x+_).normalize();else if(e===as)n[5].setComponents(a,c,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(kr.x=i.normal.x>0?t.max.x:t.min.x,kr.y=i.normal.y>0?t.max.y:t.min.y,kr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let o=null,t=!1,e=null,n=null;function i(r,s){e(r,s),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function Au(o){const t=new WeakMap;function e(a,l){const h=a.array,u=a.usage,c=h.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=o.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=o.SHORT;else if(h instanceof Uint32Array)f=o.UNSIGNED_INT;else if(h instanceof Int32Array)f=o.INT;else if(h instanceof Int8Array)f=o.BYTE;else if(h instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){const u=l.array,c=l._updateRange,d=l.updateRanges;if(o.bindBuffer(h,a),c.count===-1&&d.length===0&&o.bufferSubData(h,0,u),d.length!==0){for(let f=0,v=d.length;f<v;f++){const g=d[f];o.bufferSubData(h,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}c.count!==-1&&(o.bufferSubData(h,c.offset*u.BYTES_PER_ELEMENT,u,c.offset,c.count),c.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:s}}class Mr extends rn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=t/a,d=e/l,f=[],v=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*d-s;for(let _=0;_<h;_++){const x=_*c-r;v.push(x,-y,0),g.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const _=y+h*m,x=y+h*(m+1),A=y+1+h*(m+1),C=y+1+h*m;f.push(_,x,C),f.push(x,A,C)}this.setIndex(f),this.setAttribute("position",new He(v,3)),this.setAttribute("normal",new He(g,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fd=`#ifdef USE_GRADIENTMAP
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
}`,pd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Td=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
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
#endif`,kd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,df=`float getShadowMask() {
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
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Df=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ff=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kf=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Wf=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qf=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Kf=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Zf=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$f=`#define STANDARD
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tp=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,rp=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sp=`uniform float rotation;
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
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:Tu,alphahash_pars_fragment:bu,alphamap_fragment:Ru,alphamap_pars_fragment:Cu,alphatest_fragment:Pu,alphatest_pars_fragment:Lu,aomap_fragment:Iu,aomap_pars_fragment:Nu,batching_pars_vertex:Du,batching_vertex:Uu,begin_vertex:Fu,beginnormal_vertex:Bu,bsdfs:Ou,iridescence_fragment:zu,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Zu,defaultnormal_vertex:Ju,displacementmap_pars_vertex:$u,displacementmap_vertex:Qu,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:rd,envmap_common_pars_fragment:sd,envmap_pars_fragment:od,envmap_pars_vertex:ad,envmap_physical_pars_fragment:yd,envmap_vertex:ld,fog_vertex:cd,fog_pars_vertex:hd,fog_fragment:ud,fog_pars_fragment:dd,gradientmap_pars_fragment:fd,lightmap_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:vd,lights_lambert_pars_fragment:gd,lights_pars_begin:_d,lights_toon_fragment:xd,lights_toon_pars_fragment:Md,lights_phong_fragment:Sd,lights_phong_pars_fragment:Ed,lights_physical_fragment:wd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Td,lights_fragment_maps:bd,lights_fragment_end:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Id,map_fragment:Nd,map_pars_fragment:Dd,map_particle_fragment:Ud,map_particle_pars_fragment:Fd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:Od,morphinstance_vertex:zd,morphcolor_vertex:Vd,morphnormal_vertex:Hd,morphtarget_pars_vertex:kd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Kd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:Qd,opaque_fragment:tf,packing:ef,premultiplied_alpha_fragment:nf,project_vertex:rf,dithering_fragment:sf,dithering_pars_fragment:of,roughnessmap_fragment:af,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:df,skinbase_vertex:ff,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:vf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:yf,tonemapping_pars_fragment:xf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:Ef,uv_pars_vertex:wf,uv_vertex:Af,worldpos_vertex:Tf,background_vert:bf,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:Lf,cube_frag:If,depth_vert:Nf,depth_frag:Df,distanceRGBA_vert:Uf,distanceRGBA_frag:Ff,equirect_vert:Bf,equirect_frag:Of,linedashed_vert:zf,linedashed_frag:Vf,meshbasic_vert:Hf,meshbasic_frag:kf,meshlambert_vert:Gf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Kf,meshphong_vert:jf,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:$f,meshtoon_vert:Qf,meshtoon_frag:tp,points_vert:ep,points_frag:np,shadow_vert:ip,shadow_frag:rp,sprite_vert:sp,sprite_frag:op},Ut={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},vn={basic:{uniforms:Ye([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Ye([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Ye([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Ye([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Ye([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Ye([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Ye([Ut.points,Ut.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Ye([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Ye([Ut.common,Ut.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Ye([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Ye([Ut.sprite,Ut.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Ye([Ut.common,Ut.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Ye([Ut.lights,Ut.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};vn.physical={uniforms:Ye([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Gr={r:0,b:0,g:0},si=new mn,ap=new ee;function lp(o,t,e,n,i,r,s){const a=new Jt(0);let l=r===!0?0:1,h,u,c=null,d=0,f=null;function v(p,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),y=!0);const x=o.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ds)?(u===void 0&&(u=new Ve(new xr(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Wi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),si.copy(m.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(si)),u.material.toneMapped=pe.getTransfer(_.colorSpace)!==Ee,(c!==_||d!==_.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,c=_,d=_.version,f=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Ve(new Mr(2,2),new Qn({name:"BackgroundMaterial",uniforms:Wi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=pe.getTransfer(_.colorSpace)!==Ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,c=_,d=_.version,f=o.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function g(p,m){p.getRGB(Gr,oc(o)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,m,s)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:v}}function cp(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,s=!1;function a(M,b,U,P,X){let q=!1;const ot=c(P,U,b);r!==ot&&(r=ot,h(r.object)),q=f(M,P,U,X),q&&v(M,P,U,X),X!==null&&t.update(X,o.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,x(M,b,U,P),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return o.createVertexArray()}function h(M){return o.bindVertexArray(M)}function u(M){return o.deleteVertexArray(M)}function c(M,b,U){const P=U.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let q=X[b.id];q===void 0&&(q={},X[b.id]=q);let ot=q[P];return ot===void 0&&(ot=d(l()),q[P]=ot),ot}function d(M){const b=[],U=[],P=[];for(let X=0;X<e;X++)b[X]=0,U[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,b,U,P){const X=r.attributes,q=b.attributes;let ot=0;const k=U.getAttributes();for(const N in k)if(k[N].location>=0){const K=X[N];let V=q[N];if(V===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),K===void 0||K.attribute!==V||V&&K.data!==V.data)return!0;ot++}return r.attributesNum!==ot||r.index!==P}function v(M,b,U,P){const X={},q=b.attributes;let ot=0;const k=U.getAttributes();for(const N in k)if(k[N].location>=0){let K=q[N];K===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const V={};V.attribute=K,K&&K.data&&(V.data=K.data),X[N]=V,ot++}r.attributes=X,r.attributesNum=ot,r.index=P}function g(){const M=r.newAttributes;for(let b=0,U=M.length;b<U;b++)M[b]=0}function p(M){m(M,0)}function m(M,b){const U=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;U[M]=1,P[M]===0&&(o.enableVertexAttribArray(M),P[M]=1),X[M]!==b&&(o.vertexAttribDivisor(M,b),X[M]=b)}function y(){const M=r.newAttributes,b=r.enabledAttributes;for(let U=0,P=b.length;U<P;U++)b[U]!==M[U]&&(o.disableVertexAttribArray(U),b[U]=0)}function _(M,b,U,P,X,q,ot){ot===!0?o.vertexAttribIPointer(M,b,U,X,q):o.vertexAttribPointer(M,b,U,P,X,q)}function x(M,b,U,P){g();const X=P.attributes,q=U.getAttributes(),ot=b.defaultAttributeValues;for(const k in q){const N=q[k];if(N.location>=0){let J=X[k];if(J===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const K=J.normalized,V=J.itemSize,tt=t.get(J);if(tt===void 0)continue;const H=tt.buffer,T=tt.type,R=tt.bytesPerElement,G=T===o.INT||T===o.UNSIGNED_INT||J.gpuType===kl;if(J.isInterleavedBufferAttribute){const $=J.data,nt=$.stride,j=J.offset;if($.isInstancedInterleavedBuffer){for(let st=0;st<N.locationSize;st++)m(N.location+st,$.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let st=0;st<N.locationSize;st++)p(N.location+st);o.bindBuffer(o.ARRAY_BUFFER,H);for(let st=0;st<N.locationSize;st++)_(N.location+st,V/N.locationSize,T,K,nt*R,(j+V/N.locationSize*st)*R,G)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<N.locationSize;$++)m(N.location+$,J.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<N.locationSize;$++)p(N.location+$);o.bindBuffer(o.ARRAY_BUFFER,H);for(let $=0;$<N.locationSize;$++)_(N.location+$,V/N.locationSize,T,K,V*R,V/N.locationSize*$*R,G)}}else if(ot!==void 0){const K=ot[k];if(K!==void 0)switch(K.length){case 2:o.vertexAttrib2fv(N.location,K);break;case 3:o.vertexAttrib3fv(N.location,K);break;case 4:o.vertexAttrib4fv(N.location,K);break;default:o.vertexAttrib1fv(N.location,K)}}}}y()}function A(){I();for(const M in n){const b=n[M];for(const U in b){const P=b[U];for(const X in P)u(P[X].object),delete P[X];delete b[U]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const U in b){const P=b[U];for(const X in P)u(P[X].object),delete P[X];delete b[U]}delete n[M.id]}function L(M){for(const b in n){const U=n[b];if(U[M.id]===void 0)continue;const P=U[M.id];for(const X in P)u(P[X].object),delete P[X];delete U[M.id]}}function I(){S(),s=!0,r!==i&&(r=i,h(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function hp(o,t,e){let n;function i(l){n=l}function r(l,h){o.drawArrays(n,l,h),e.update(h,n,1)}function s(l,h,u){u!==0&&(o.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let d=0;d<u;d++)this.render(l[d],h[d]);else{c.multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let f=0;f<u;f++)d+=h[f];e.update(d,n,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a}function up(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=e.precision!==void 0?e.precision:"highp";const a=r(s);a!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",a,"instead."),s=a);const l=e.logarithmicDepthBuffer===!0,h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),u=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=o.getParameter(o.MAX_TEXTURE_SIZE),d=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),f=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),g=o.getParameter(o.MAX_VARYING_VECTORS),p=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,y=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:c,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:m,maxSamples:y}}function dp(o){const t=this;let e=null,n=0,i=!1,r=!1;const s=new li,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=u(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,p=c.clipShadows,m=o.get(c);if(!i||v===null||v.length===0||r&&!p)r?u(null):h();else{const y=r?0:n,_=y*4;let x=m.clippingState||null;l.value=x,x=u(v,d,_,f);for(let A=0;A!==_;++A)x[A]=e[A];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,d,f,v){const g=c!==null?c.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=f+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,x=f;_!==g;++_,x+=4)s.copy(c[_]).applyMatrix4(y,a),s.normal.toArray(p,x),p[x+3]=s.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function fp(o){let t=new WeakMap;function e(s,a){return a===ao?s.mapping=Oi:a===lo&&(s.mapping=zi),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===ao||a===lo)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const h=new Su(l.height);return h.fromEquirectangularTexture(o,s),t.set(s,h),s.addEventListener("dispose",i),e(h.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ao extends ac{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,s=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ni=4,Wa=[.125,.215,.35,.446,.526,.582],ui=20,Hs=new Ao,Xa=new Jt;let ks=null,Gs=0,Ws=0,Xs=!1;const ci=(1+Math.sqrt(5))/2,Li=1/ci,qa=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,ci,Li),new W(0,ci,-Li),new W(Li,0,ci),new W(-Li,0,ci),new W(ci,Li,0),new W(-ci,Li,0)];class Ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ks=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ks,Gs,Ws),this._renderer.xr.enabled=Xs,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ks=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:is,format:dn,colorSpace:ke,depthBuffer:!1},i=Ka(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,t,e)}return i}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Xa),u.toneMapping=Zn,u.autoClear=!1;const f=new di({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),v=new Ve(new xr,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Xa),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));const _=this._cubeSize;Wr(i,y*_,m>2?_:0,_,_),u.setRenderTarget(i),g&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=c,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Oi||t.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Hs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=qa[(i-1)%qa.length];this._blur(t,i-1,i,r,s)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const l=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Ve(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),g=r/v,p=isFinite(r)?1+Math.floor(u*g):ui;p>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const m=[];let y=0;for(let L=0;L<ui;++L){const I=L/g,S=Math.exp(-I*I/2);m.push(S),L===0?y+=S:L<p&&(y+=2*S)}for(let L=0;L<m.length;L++)m[L]=m[L]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-n;const x=this._sizeLods[i],A=3*x*(i>_-Ni?i-_+Ni:0),C=4*(this._cubeSize-x);Wr(e,A,C,3*x,2*x),l.setRenderTarget(e),l.render(c,Hs)}}function pp(o){const t=[],e=[],n=[];let i=o;const r=o-Ni+1+Wa.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let l=1/a;s>o-Ni?l=Wa[s-o+Ni-1]:s===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,v=6,g=3,p=2,m=1,y=new Float32Array(g*v*f),_=new Float32Array(p*v*f),x=new Float32Array(m*v*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,I=C>2?0:-1,S=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];y.set(S,g*v*C),_.set(d,p*v*C);const M=[C,C,C,C,C,C];x.set(M,m*v*C)}const A=new rn;A.setAttribute("position",new Je(y,g)),A.setAttribute("uv",new Je(_,p)),A.setAttribute("faceIndex",new Je(x,m)),t.push(A),i>Ni&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ka(o,t,e){const n=new fi(o,t,e);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function mp(o,t,e){const n=new Float32Array(ui),i=new W(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:To(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ja(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Za(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function To(){return`

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
	`}function vp(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===ao||l===lo,u=l===Oi||l===zi;if(h||u){let c=t.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ya(o)),c=h?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Ya(o)),c=h?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function gp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _p(o,t,e,n){const i={},r=new WeakMap;function s(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)t.update(d[v],o.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let p=0,m=g.length;p<m;p++)t.update(g[p],o.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let _=0,x=y.length;_<x;_+=3){const A=y[_+0],C=y[_+1],L=y[_+2];d.push(A,C,C,L,L,A)}}else if(v!==void 0){const y=v.array;g=v.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const A=_+0,C=_+1,L=_+2;d.push(A,C,C,L,L,A)}}else return;const p=new($l(d)?sc:rc)(d,1);p.version=g;const m=r.get(c);m&&t.remove(m),r.set(c,p)}function u(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function yp(o,t,e){let n;function i(c){n=c}let r,s;function a(c){r=c.type,s=c.bytesPerElement}function l(c,d){o.drawElements(n,d,r,c*s),e.update(d,n,1)}function h(c,d,f){f!==0&&(o.drawElementsInstanced(n,d,r,c*s,f),e.update(d,n,f))}function u(c,d,f){if(f===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<f;g++)this.render(c[g]/s,d[g]);else{v.multiDrawElementsWEBGL(n,d,0,r,c,0,f);let g=0;for(let p=0;p<f;p++)g+=d[p];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function xp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(e.calls++,s){case o.TRIANGLES:e.triangles+=a*(r/3);break;case o.LINES:e.lines+=a*(r/2);break;case o.LINE_STRIP:e.lines+=a*(r-1);break;case o.LINE_LOOP:e.lines+=a*r;break;case o.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Mp(o,t,e){const n=new WeakMap,i=new Me;function r(s,a,l){const h=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==c){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let A=a.attributes.position.count*x,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const L=new Float32Array(A*C*4*c),I=new ec(L,A,C,c);I.type=yn,I.needsUpdate=!0;const S=x*4;for(let b=0;b<c;b++){const U=m[b],P=y[b],X=_[b],q=A*C*4*b;for(let ot=0;ot<U.count;ot++){const k=ot*S;v===!0&&(i.fromBufferAttribute(U,ot),L[q+k+0]=i.x,L[q+k+1]=i.y,L[q+k+2]=i.z,L[q+k+3]=0),g===!0&&(i.fromBufferAttribute(P,ot),L[q+k+4]=i.x,L[q+k+5]=i.y,L[q+k+6]=i.z,L[q+k+7]=0),p===!0&&(i.fromBufferAttribute(X,ot),L[q+k+8]=i.x,L[q+k+9]=i.y,L[q+k+10]=i.z,L[q+k+11]=X.itemSize===4?i.w:1)}}d={count:c,texture:I,size:new zt(A,C)},n.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",s.morphTexture,e);else{let v=0;for(let p=0;p<h.length;p++)v+=h[p];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(o,"morphTargetBaseInfluence",g),l.getUniforms().setValue(o,"morphTargetInfluences",h)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:r}}function Sp(o,t,e,n){let i=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,c=t.get(l,u);if(i.get(c)!==h&&(t.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function s(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:s}}class hc extends Be{constructor(t,e,n,i,r,s,a,l,h,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=Hi),n===void 0&&u===vr&&(n=yr),super(null,i,r,s,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uc=new Be,dc=new hc(1,1);dc.compareFunction=Jl;const fc=new ec,pc=new ou,mc=new lc,Ja=[],$a=[],Qa=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function Ki(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Ja[i];if(r===void 0&&(r=new Float32Array(i),Ja[i]=r),t!==0){n.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,o[s].toArray(r,a)}return r}function De(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ue(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function ms(o,t){let e=$a[t];e===void 0&&(e=new Int32Array(t),$a[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Ep(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function wp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;o.uniform2fv(this.addr,t),Ue(e,t)}}function Ap(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;o.uniform3fv(this.addr,t),Ue(e,t)}}function Tp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;o.uniform4fv(this.addr,t),Ue(e,t)}}function bp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;el.set(n),o.uniformMatrix2fv(this.addr,!1,el),Ue(e,n)}}function Rp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;tl.set(n),o.uniformMatrix3fv(this.addr,!1,tl),Ue(e,n)}}function Cp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Qa.set(n),o.uniformMatrix4fv(this.addr,!1,Qa),Ue(e,n)}}function Pp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Lp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;o.uniform2iv(this.addr,t),Ue(e,t)}}function Ip(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;o.uniform3iv(this.addr,t),Ue(e,t)}}function Np(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;o.uniform4iv(this.addr,t),Ue(e,t)}}function Dp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Up(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;o.uniform2uiv(this.addr,t),Ue(e,t)}}function Fp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;o.uniform3uiv(this.addr,t),Ue(e,t)}}function Bp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;o.uniform4uiv(this.addr,t),Ue(e,t)}}function Op(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const r=this.type===o.SAMPLER_2D_SHADOW?dc:uc;e.setTexture2D(t||r,i)}function zp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pc,i)}function Vp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mc,i)}function Hp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fc,i)}function kp(o){switch(o){case 5126:return Ep;case 35664:return wp;case 35665:return Ap;case 35666:return Tp;case 35674:return bp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Np;case 5125:return Dp;case 36294:return Up;case 36295:return Fp;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Gp(o,t){o.uniform1fv(this.addr,t)}function Wp(o,t){const e=Ki(t,this.size,2);o.uniform2fv(this.addr,e)}function Xp(o,t){const e=Ki(t,this.size,3);o.uniform3fv(this.addr,e)}function qp(o,t){const e=Ki(t,this.size,4);o.uniform4fv(this.addr,e)}function Yp(o,t){const e=Ki(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Kp(o,t){const e=Ki(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function jp(o,t){const e=Ki(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Zp(o,t){o.uniform1iv(this.addr,t)}function Jp(o,t){o.uniform2iv(this.addr,t)}function $p(o,t){o.uniform3iv(this.addr,t)}function Qp(o,t){o.uniform4iv(this.addr,t)}function tm(o,t){o.uniform1uiv(this.addr,t)}function em(o,t){o.uniform2uiv(this.addr,t)}function nm(o,t){o.uniform3uiv(this.addr,t)}function im(o,t){o.uniform4uiv(this.addr,t)}function rm(o,t,e){const n=this.cache,i=t.length,r=ms(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||uc,r[s])}function sm(o,t,e){const n=this.cache,i=t.length,r=ms(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||pc,r[s])}function om(o,t,e){const n=this.cache,i=t.length,r=ms(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||mc,r[s])}function am(o,t,e){const n=this.cache,i=t.length,r=ms(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||fc,r[s])}function lm(o){switch(o){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Zp;case 35667:case 35671:return Jp;case 35668:case 35672:return $p;case 35669:case 35673:return Qp;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kp(e.type)}}class hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}}class um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function nl(o,t){o.seq.push(t),o.map[t.id]=t}function dm(o,t,e){const n=o.name,i=n.length;for(qs.lastIndex=0;;){const r=qs.exec(n),s=qs.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&s+2===i){nl(e,h===void 0?new cm(a,o,t):new hm(a,o,t));break}else{let c=e.map[a];c===void 0&&(c=new um(a),nl(e,c)),e=c}}}class ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);dm(r,s,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}}function il(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const fm=37297;let pm=0;function mm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}function vm(o){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(o);let n;switch(t===e?n="":t===os&&e===ss?n="LinearDisplayP3ToLinearSRGB":t===ss&&e===os&&(n="LinearSRGBToLinearDisplayP3"),o){case ke:case fs:return[n,"LinearTransferOETF"];case Ke:case So:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function rl(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+mm(o.getShaderSource(t),s)}else return i}function gm(o,t){const e=vm(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _m(o,t){let e;switch(t){case lh:e="Linear";break;case ch:e="Reinhard";break;case hh:e="OptimizedCineon";break;case uh:e="ACESFilmic";break;case fh:e="AgX";break;case ph:e="Neutral";break;case dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ym(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function xm(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mm(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),s=r.name;let a=1;r.type===o.FLOAT_MAT2&&(a=2),r.type===o.FLOAT_MAT3&&(a=3),r.type===o.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:o.getAttribLocation(t,s),locationSize:a}}return e}function hr(o){return o!==""}function sl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(o){return o.replace(Sm,wm)}const Em=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wm(o,t){let e=ne[t];if(e===void 0){const n=Em.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uo(e)}const Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(o){return o.replace(Am,Tm)}function Tm(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ll(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Oi:case zi:t="ENVMAP_TYPE_CUBE";break;case ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xo:t="ENVMAP_BLENDING_MULTIPLY";break;case oh:t="ENVMAP_BLENDING_MIX";break;case ah:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Im(o,t,e,n){const i=o.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=bm(e),h=Rm(e),u=Cm(e),c=Pm(e),d=Lm(e),f=ym(e),v=xm(r),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(hr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(hr).join(`
`),m.length>0&&(m+=`
`)):(p=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),m=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Zn?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,gm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),s=uo(s),s=sl(s,e),s=ol(s,e),a=uo(a),a=sl(a,e),a=ol(a,e),s=al(s),a=al(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+s,x=y+m+a,A=il(i,i.VERTEX_SHADER,_),C=il(i,i.FRAGMENT_SHADER,x);i.attachShader(g,A),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(b){if(o.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(C).trim();let q=!0,ot=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,A,C);else{const k=rl(i,A,"vertex"),N=rl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+k+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||X==="")&&(ot=!1);ot&&(b.diagnostics={runnable:q,programLog:U,vertexShader:{log:P,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(A),i.deleteShader(C),I=new ts(i,g),S=Mm(i,g)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,fm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let Nm=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Um(t),e.set(t,n)),n}}class Um{constructor(t){this.id=Nm++,this.code=t,this.usedTimes=0}}function Fm(o,t,e,n,i,r,s){const a=new nc,l=new Dm,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return h.add(S),S===0?"uv":`uv${S}`}function p(S,M,b,U,P){const X=U.fog,q=P.geometry,ot=S.isMeshStandardMaterial?U.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||ot),N=k&&k.mapping===ds?k.image.height:null,J=v[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const K=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,V=K!==void 0?K.length:0;let tt=0;q.morphAttributes.position!==void 0&&(tt=1),q.morphAttributes.normal!==void 0&&(tt=2),q.morphAttributes.color!==void 0&&(tt=3);let H,T,R,G;if(J){const Te=vn[J];H=Te.vertexShader,T=Te.fragmentShader}else H=S.vertexShader,T=S.fragmentShader,l.update(S),R=l.getVertexShaderID(S),G=l.getFragmentShaderID(S);const $=o.getRenderTarget(),nt=P.isInstancedMesh===!0,j=P.isBatchedMesh===!0,st=!!S.map,F=!!S.matcap,_t=!!k,dt=!!S.aoMap,xt=!!S.lightMap,rt=!!S.bumpMap,ut=!!S.normalMap,D=!!S.displacementMap,E=!!S.emissiveMap,et=!!S.metalnessMap,Q=!!S.roughnessMap,lt=S.anisotropy>0,ht=S.clearcoat>0,Lt=S.iridescence>0,ft=S.sheen>0,Tt=S.transmission>0,Ft=lt&&!!S.anisotropyMap,mt=ht&&!!S.clearcoatMap,Ct=ht&&!!S.clearcoatNormalMap,Xt=ht&&!!S.clearcoatRoughnessMap,Vt=Lt&&!!S.iridescenceMap,kt=Lt&&!!S.iridescenceThicknessMap,Qt=ft&&!!S.sheenColorMap,$t=ft&&!!S.sheenRoughnessMap,te=!!S.specularMap,re=!!S.specularColorMap,ce=!!S.specularIntensityMap,Gt=Tt&&!!S.transmissionMap,O=Tt&&!!S.thicknessMap,St=!!S.gradientMap,Et=!!S.alphaMap,Wt=S.alphaTest>0,Ht=!!S.alphaHash,oe=!!S.extensions;let he=Zn;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(he=o.toneMapping);const de={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:T,defines:S.defines,customVertexShaderID:R,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:j,instancing:nt,instancingColor:nt&&P.instanceColor!==null,instancingMorph:nt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?o.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ke,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:F,envMap:_t,envMapMode:_t&&k.mapping,envMapCubeUVHeight:N,aoMap:dt,lightMap:xt,bumpMap:rt,normalMap:ut,displacementMap:d&&D,emissiveMap:E,normalMapObjectSpace:ut&&S.normalMapType===Ch,normalMapTangentSpace:ut&&S.normalMapType===Mo,metalnessMap:et,roughnessMap:Q,anisotropy:lt,anisotropyMap:Ft,clearcoat:ht,clearcoatMap:mt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Xt,iridescence:Lt,iridescenceMap:Vt,iridescenceThicknessMap:kt,sheen:ft,sheenColorMap:Qt,sheenRoughnessMap:$t,specularMap:te,specularColorMap:re,specularIntensityMap:ce,transmission:Tt,transmissionMap:Gt,thicknessMap:O,gradientMap:St,opaque:S.transparent===!1&&S.blending===Di&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:Wt,alphaHash:Ht,combine:S.combine,mapUv:st&&g(S.map.channel),aoMapUv:dt&&g(S.aoMap.channel),lightMapUv:xt&&g(S.lightMap.channel),bumpMapUv:rt&&g(S.bumpMap.channel),normalMapUv:ut&&g(S.normalMap.channel),displacementMapUv:D&&g(S.displacementMap.channel),emissiveMapUv:E&&g(S.emissiveMap.channel),metalnessMapUv:et&&g(S.metalnessMap.channel),roughnessMapUv:Q&&g(S.roughnessMap.channel),anisotropyMapUv:Ft&&g(S.anisotropyMap.channel),clearcoatMapUv:mt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:$t&&g(S.sheenRoughnessMap.channel),specularMapUv:te&&g(S.specularMap.channel),specularColorMapUv:re&&g(S.specularColorMap.channel),specularIntensityMapUv:ce&&g(S.specularIntensityMap.channel),transmissionMapUv:Gt&&g(S.transmissionMap.channel),thicknessMapUv:O&&g(S.thicknessMap.channel),alphaMapUv:Et&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ut||lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(st||Et),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&b.length>0,shadowMapType:o.shadowMap.type,toneMapping:he,useLegacyLights:o._useLegacyLights,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&pe.getTransfer(S.map.colorSpace)===Ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===gn,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:oe&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return de.vertexUv1s=h.has(1),de.vertexUv2s=h.has(2),de.vertexUv3s=h.has(3),h.clear(),de}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)M.push(b),M.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(o.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function x(S){const M=v[S.type];let b;if(M){const U=vn[M];b=_u.clone(U.uniforms)}else b=S.uniforms;return b}function A(S,M){let b;for(let U=0,P=u.length;U<P;U++){const X=u[U];if(X.cacheKey===M){b=X,++b.usedTimes;break}}return b===void 0&&(b=new Im(o,M,S,r),u.push(b)),b}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:I}}function Bm(){let o=new WeakMap;function t(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function e(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Om(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function cl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function hl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function s(c,d,f,v,g,p){let m=o[t];return m===void 0?(m={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:p},o[t]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=c.renderOrder,m.z=g,m.group=p),t++,m}function a(c,d,f,v,g,p){const m=s(c,d,f,v,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(c,d,f,v,g,p){const m=s(c,d,f,v,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function h(c,d){e.length>1&&e.sort(c||Om),n.length>1&&n.sort(d||cl),i.length>1&&i.sort(d||cl)}function u(){for(let c=t,d=o.length;c<d;c++){const f=o[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:h}}function zm(){let o=new WeakMap;function t(n,i){const r=o.get(n);let s;return r===void 0?(s=new hl,o.set(n,[s])):i>=r.length?(s=new hl,r.push(s)):s=r[i],s}function e(){o=new WeakMap}return{get:t,dispose:e}}function Vm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Jt};break;case"SpotLight":e={position:new W,direction:new W,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new W,halfWidth:new W,halfHeight:new W};break}return o[t.id]=e,e}}}function Hm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let km=0;function Gm(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Wm(o){const t=new Vm,e=Hm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new W);const i=new W,r=new ee,s=new ee;function a(h,u){let c=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let v=0,g=0,p=0,m=0,y=0,_=0,x=0,A=0,C=0,L=0,I=0;h.sort(Gm);const S=u===!0?Math.PI:1;for(let b=0,U=h.length;b<U;b++){const P=h[b],X=P.color,q=P.intensity,ot=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=X.r*q*S,d+=X.g*q*S,f+=X.b*q*S;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],q);I++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const J=P.shadow,K=e.get(P);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.directionalShadow[v]=K,n.directionalShadowMap[v]=k,n.directionalShadowMatrix[v]=P.shadow.matrix,_++}n.directional[v]=N,v++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(X).multiplyScalar(q*S),N.distance=ot,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[p]=N;const J=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,J.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[p]=J.matrix,P.castShadow){const K=e.get(P);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.spotShadow[p]=K,n.spotShadowMap[p]=k,A++}p++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(X).multiplyScalar(q),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=N,m++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*S),N.distance=P.distance,N.decay=P.decay,P.castShadow){const J=P.shadow,K=e.get(P);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=N,g++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(q*S),N.groundColor.copy(P.groundColor).multiplyScalar(q*S),n.hemi[y]=N,y++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==v||M.pointLength!==g||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==y||M.numDirectionalShadows!==_||M.numPointShadows!==x||M.numSpotShadows!==A||M.numSpotMaps!==C||M.numLightProbes!==I)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=y,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=A+C-L,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,M.directionalLength=v,M.pointLength=g,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=y,M.numDirectionalShadows=_,M.numPointShadows=x,M.numSpotShadows=A,M.numSpotMaps=C,M.numLightProbes=I,n.version=km++)}function l(h,u){let c=0,d=0,f=0,v=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){const _=h[m];if(_.isDirectionalLight){const x=n.directional[c];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),c++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),s.identity(),r.copy(_.matrixWorld),r.premultiply(p),s.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),v++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function ul(o){const t=new Wm(o),e=[],n=[];function i(){e.length=0,n.length=0}function r(u){e.push(u)}function s(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:i,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:s}}function Xm(o){let t=new WeakMap;function e(i,r=0){const s=t.get(i);let a;return s===void 0?(a=new ul(o),t.set(i,[a])):r>=s.length?(a=new ul(o),s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class qm extends pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ym extends pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function Zm(o,t,e){let n=new wo;const i=new zt,r=new zt,s=new Me,a=new qm({depthPacking:Rh}),l=new Ym,h={},u=e.maxTextureSize,c={[Dn]:$e,[$e]:Dn,[gn]:gn},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Km,fragmentShader:jm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new rn;v.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ve(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let m=this.type;this.render=function(C,L,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=o.getRenderTarget(),M=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),U=o.state;U.setBlending(jn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const P=m!==Ln&&this.type===Ln,X=m===Ln&&this.type!==Ln;for(let q=0,ot=C.length;q<ot;q++){const k=C[q],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const J=N.getFrameExtents();if(i.multiply(J),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,N.mapSize.y=r.y)),N.map===null||P===!0||X===!0){const V=this.type!==Ln?{minFilter:Ze,magFilter:Ze}:{};N.map!==null&&N.map.dispose(),N.map=new fi(i.x,i.y,V),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}o.setRenderTarget(N.map),o.clear();const K=N.getViewportCount();for(let V=0;V<K;V++){const tt=N.getViewport(V);s.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),U.viewport(s),N.updateMatrices(k,V),n=N.getFrustum(),x(L,I,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===Ln&&y(N,I),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(S,M,b)};function y(C,L){const I=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new fi(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(L,null,I,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(L,null,I,f,g,null)}function _(C,L,I,S){let M=null;const b=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)M=b;else if(M=I.isPointLight===!0?l:a,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const U=M.uuid,P=L.uuid;let X=h[U];X===void 0&&(X={},h[U]=X);let q=X[P];q===void 0&&(q=M.clone(),X[P]=q,L.addEventListener("dispose",A)),M=q}if(M.visible=L.visible,M.wireframe=L.wireframe,S===Ln?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:c[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=o.properties.get(M);U.light=I}return M}function x(C,L,I,S,M){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ln)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const P=t.update(C),X=C.material;if(Array.isArray(X)){const q=P.groups;for(let ot=0,k=q.length;ot<k;ot++){const N=q[ot],J=X[N.materialIndex];if(J&&J.visible){const K=_(C,J,S,M);C.onBeforeShadow(o,C,L,I,P,K,N),o.renderBufferDirect(I,null,P,K,C,N),C.onAfterShadow(o,C,L,I,P,K,N)}}}else if(X.visible){const q=_(C,X,S,M);C.onBeforeShadow(o,C,L,I,P,q,null),o.renderBufferDirect(I,null,P,q,C,null),C.onAfterShadow(o,C,L,I,P,q,null)}}const U=C.children;for(let P=0,X=U.length;P<X;P++)x(U[P],L,I,S,M)}function A(C){C.target.removeEventListener("dispose",A);for(const I in h){const S=h[I],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function Jm(o){function t(){let O=!1;const St=new Me;let Et=null;const Wt=new Me(0,0,0,0);return{setMask:function(Ht){Et!==Ht&&!O&&(o.colorMask(Ht,Ht,Ht,Ht),Et=Ht)},setLocked:function(Ht){O=Ht},setClear:function(Ht,oe,he,de,Te){Te===!0&&(Ht*=de,oe*=de,he*=de),St.set(Ht,oe,he,de),Wt.equals(St)===!1&&(o.clearColor(Ht,oe,he,de),Wt.copy(St))},reset:function(){O=!1,Et=null,Wt.set(-1,0,0,0)}}}function e(){let O=!1,St=null,Et=null,Wt=null;return{setTest:function(Ht){Ht?G(o.DEPTH_TEST):$(o.DEPTH_TEST)},setMask:function(Ht){St!==Ht&&!O&&(o.depthMask(Ht),St=Ht)},setFunc:function(Ht){if(Et!==Ht){switch(Ht){case Qc:o.depthFunc(o.NEVER);break;case th:o.depthFunc(o.ALWAYS);break;case eh:o.depthFunc(o.LESS);break;case es:o.depthFunc(o.LEQUAL);break;case nh:o.depthFunc(o.EQUAL);break;case ih:o.depthFunc(o.GEQUAL);break;case rh:o.depthFunc(o.GREATER);break;case sh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Et=Ht}},setLocked:function(Ht){O=Ht},setClear:function(Ht){Wt!==Ht&&(o.clearDepth(Ht),Wt=Ht)},reset:function(){O=!1,St=null,Et=null,Wt=null}}}function n(){let O=!1,St=null,Et=null,Wt=null,Ht=null,oe=null,he=null,de=null,Te=null;return{setTest:function(ue){O||(ue?G(o.STENCIL_TEST):$(o.STENCIL_TEST))},setMask:function(ue){St!==ue&&!O&&(o.stencilMask(ue),St=ue)},setFunc:function(ue,me,at){(Et!==ue||Wt!==me||Ht!==at)&&(o.stencilFunc(ue,me,at),Et=ue,Wt=me,Ht=at)},setOp:function(ue,me,at){(oe!==ue||he!==me||de!==at)&&(o.stencilOp(ue,me,at),oe=ue,he=me,de=at)},setLocked:function(ue){O=ue},setClear:function(ue){Te!==ue&&(o.clearStencil(ue),Te=ue)},reset:function(){O=!1,St=null,Et=null,Wt=null,Ht=null,oe=null,he=null,de=null,Te=null}}}const i=new t,r=new e,s=new n,a=new WeakMap,l=new WeakMap;let h={},u={},c=new WeakMap,d=[],f=null,v=!1,g=null,p=null,m=null,y=null,_=null,x=null,A=null,C=new Jt(0,0,0),L=0,I=!1,S=null,M=null,b=null,U=null,P=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ot=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=ot>=1):k.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=ot>=2);let N=null,J={};const K=o.getParameter(o.SCISSOR_BOX),V=o.getParameter(o.VIEWPORT),tt=new Me().fromArray(K),H=new Me().fromArray(V);function T(O,St,Et,Wt){const Ht=new Uint8Array(4),oe=o.createTexture();o.bindTexture(O,oe),o.texParameteri(O,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(O,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let he=0;he<Et;he++)O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY?o.texImage3D(St,0,o.RGBA,1,1,Wt,0,o.RGBA,o.UNSIGNED_BYTE,Ht):o.texImage2D(St+he,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ht);return oe}const R={};R[o.TEXTURE_2D]=T(o.TEXTURE_2D,o.TEXTURE_2D,1),R[o.TEXTURE_CUBE_MAP]=T(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[o.TEXTURE_2D_ARRAY]=T(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),R[o.TEXTURE_3D]=T(o.TEXTURE_3D,o.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),s.setClear(0),G(o.DEPTH_TEST),r.setFunc(es),rt(!1),ut(Go),G(o.CULL_FACE),dt(jn);function G(O){h[O]!==!0&&(o.enable(O),h[O]=!0)}function $(O){h[O]!==!1&&(o.disable(O),h[O]=!1)}function nt(O,St){return u[O]!==St?(o.bindFramebuffer(O,St),u[O]=St,O===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=St),O===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=St),!0):!1}function j(O,St){let Et=d,Wt=!1;if(O){Et=c.get(St),Et===void 0&&(Et=[],c.set(St,Et));const Ht=O.textures;if(Et.length!==Ht.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let oe=0,he=Ht.length;oe<he;oe++)Et[oe]=o.COLOR_ATTACHMENT0+oe;Et.length=Ht.length,Wt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Wt=!0);Wt&&o.drawBuffers(Et)}function st(O){return f!==O?(o.useProgram(O),f=O,!0):!1}const F={[hi]:o.FUNC_ADD,[Fc]:o.FUNC_SUBTRACT,[Bc]:o.FUNC_REVERSE_SUBTRACT};F[Oc]=o.MIN,F[zc]=o.MAX;const _t={[Vc]:o.ZERO,[Hc]:o.ONE,[kc]:o.SRC_COLOR,[so]:o.SRC_ALPHA,[Kc]:o.SRC_ALPHA_SATURATE,[qc]:o.DST_COLOR,[Wc]:o.DST_ALPHA,[Gc]:o.ONE_MINUS_SRC_COLOR,[oo]:o.ONE_MINUS_SRC_ALPHA,[Yc]:o.ONE_MINUS_DST_COLOR,[Xc]:o.ONE_MINUS_DST_ALPHA,[jc]:o.CONSTANT_COLOR,[Zc]:o.ONE_MINUS_CONSTANT_COLOR,[Jc]:o.CONSTANT_ALPHA,[$c]:o.ONE_MINUS_CONSTANT_ALPHA};function dt(O,St,Et,Wt,Ht,oe,he,de,Te,ue){if(O===jn){v===!0&&($(o.BLEND),v=!1);return}if(v===!1&&(G(o.BLEND),v=!0),O!==Uc){if(O!==g||ue!==I){if((p!==hi||_!==hi)&&(o.blendEquation(o.FUNC_ADD),p=hi,_=hi),ue)switch(O){case Di:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wo:o.blendFunc(o.ONE,o.ONE);break;case Xo:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qo:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Di:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wo:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Xo:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qo:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,y=null,x=null,A=null,C.set(0,0,0),L=0,g=O,I=ue}return}Ht=Ht||St,oe=oe||Et,he=he||Wt,(St!==p||Ht!==_)&&(o.blendEquationSeparate(F[St],F[Ht]),p=St,_=Ht),(Et!==m||Wt!==y||oe!==x||he!==A)&&(o.blendFuncSeparate(_t[Et],_t[Wt],_t[oe],_t[he]),m=Et,y=Wt,x=oe,A=he),(de.equals(C)===!1||Te!==L)&&(o.blendColor(de.r,de.g,de.b,Te),C.copy(de),L=Te),g=O,I=!1}function xt(O,St){O.side===gn?$(o.CULL_FACE):G(o.CULL_FACE);let Et=O.side===$e;St&&(Et=!Et),rt(Et),O.blending===Di&&O.transparent===!1?dt(jn):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),i.setMask(O.colorWrite);const Wt=O.stencilWrite;s.setTest(Wt),Wt&&(s.setMask(O.stencilWriteMask),s.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),s.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),E(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?G(o.SAMPLE_ALPHA_TO_COVERAGE):$(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){S!==O&&(O?o.frontFace(o.CW):o.frontFace(o.CCW),S=O)}function ut(O){O!==Ic?(G(o.CULL_FACE),O!==M&&(O===Go?o.cullFace(o.BACK):O===Nc?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):$(o.CULL_FACE),M=O}function D(O){O!==b&&(q&&o.lineWidth(O),b=O)}function E(O,St,Et){O?(G(o.POLYGON_OFFSET_FILL),(U!==St||P!==Et)&&(o.polygonOffset(St,Et),U=St,P=Et)):$(o.POLYGON_OFFSET_FILL)}function et(O){O?G(o.SCISSOR_TEST):$(o.SCISSOR_TEST)}function Q(O){O===void 0&&(O=o.TEXTURE0+X-1),N!==O&&(o.activeTexture(O),N=O)}function lt(O,St,Et){Et===void 0&&(N===null?Et=o.TEXTURE0+X-1:Et=N);let Wt=J[Et];Wt===void 0&&(Wt={type:void 0,texture:void 0},J[Et]=Wt),(Wt.type!==O||Wt.texture!==St)&&(N!==Et&&(o.activeTexture(Et),N=Et),o.bindTexture(O,St||R[O]),Wt.type=O,Wt.texture=St)}function ht(){const O=J[N];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Lt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{o.compressedTexImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{o.texSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{o.texSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xt(){try{o.texStorage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{o.texStorage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{o.texImage2D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qt(){try{o.texImage3D.apply(o,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(O){tt.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function te(O){H.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),H.copy(O))}function re(O,St){let Et=l.get(St);Et===void 0&&(Et=new WeakMap,l.set(St,Et));let Wt=Et.get(O);Wt===void 0&&(Wt=o.getUniformBlockIndex(St,O.name),Et.set(O,Wt))}function ce(O,St){const Wt=l.get(St).get(O);a.get(St)!==Wt&&(o.uniformBlockBinding(St,Wt,O.__bindingPointIndex),a.set(St,Wt))}function Gt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},N=null,J={},u={},c=new WeakMap,d=[],f=null,v=!1,g=null,p=null,m=null,y=null,_=null,x=null,A=null,C=new Jt(0,0,0),L=0,I=!1,S=null,M=null,b=null,U=null,P=null,tt.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),i.reset(),r.reset(),s.reset()}return{buffers:{color:i,depth:r,stencil:s},enable:G,disable:$,bindFramebuffer:nt,drawBuffers:j,useProgram:st,setBlending:dt,setMaterial:xt,setFlipSided:rt,setCullFace:ut,setLineWidth:D,setPolygonOffset:E,setScissorTest:et,activeTexture:Q,bindTexture:lt,unbindTexture:ht,compressedTexImage2D:Lt,compressedTexImage3D:ft,texImage2D:kt,texImage3D:Qt,updateUBOMapping:re,uniformBlockBinding:ce,texStorage2D:Xt,texStorage3D:Vt,texSubImage2D:Tt,texSubImage3D:Ft,compressedTexSubImage2D:mt,compressedTexSubImage3D:Ct,scissor:$t,viewport:te,reset:Gt}}function $m(o,t,e,n,i,r,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,E){return f?new OffscreenCanvas(D,E):_r("canvas")}function g(D,E,et){let Q=1;const lt=ut(D);if((lt.width>et||lt.height>et)&&(Q=et/Math.max(lt.width,lt.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ht=Math.floor(Q*lt.width),Lt=Math.floor(Q*lt.height);c===void 0&&(c=v(ht,Lt));const ft=E?v(ht,Lt):c;return ft.width=ht,ft.height=Lt,ft.getContext("2d").drawImage(D,0,0,ht,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+ht+"x"+Lt+")."),ft}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),D;return D}function p(D){return D.generateMipmaps&&D.minFilter!==Ze&&D.minFilter!==en}function m(D){o.generateMipmap(D)}function y(D,E,et,Q,lt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ht=E;if(E===o.RED&&(et===o.FLOAT&&(ht=o.R32F),et===o.HALF_FLOAT&&(ht=o.R16F),et===o.UNSIGNED_BYTE&&(ht=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.R8UI),et===o.UNSIGNED_SHORT&&(ht=o.R16UI),et===o.UNSIGNED_INT&&(ht=o.R32UI),et===o.BYTE&&(ht=o.R8I),et===o.SHORT&&(ht=o.R16I),et===o.INT&&(ht=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ht=o.RG32F),et===o.HALF_FLOAT&&(ht=o.RG16F),et===o.UNSIGNED_BYTE&&(ht=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ht=o.RG8UI),et===o.UNSIGNED_SHORT&&(ht=o.RG16UI),et===o.UNSIGNED_INT&&(ht=o.RG32UI),et===o.BYTE&&(ht=o.RG8I),et===o.SHORT&&(ht=o.RG16I),et===o.INT&&(ht=o.RG32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),E===o.RGBA){const Lt=lt?rs:pe.getTransfer(Q);et===o.FLOAT&&(ht=o.RGBA32F),et===o.HALF_FLOAT&&(ht=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ht=Lt===Ee?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function _(D,E){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ze&&D.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function x(D){const E=D.target;E.removeEventListener("dispose",x),C(E),E.isVideoTexture&&u.delete(E)}function A(D){const E=D.target;E.removeEventListener("dispose",A),I(E)}function C(D){const E=n.get(D);if(E.__webglInit===void 0)return;const et=D.source,Q=d.get(et);if(Q){const lt=Q[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&L(D),Object.keys(Q).length===0&&d.delete(et)}n.remove(D)}function L(D){const E=n.get(D);o.deleteTexture(E.__webglTexture);const et=D.source,Q=d.get(et);delete Q[E.__cacheKey],s.memory.textures--}function I(D){const E=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let lt=0;lt<E.__webglFramebuffer[Q].length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[Q][lt]);else o.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)o.deleteFramebuffer(E.__webglFramebuffer[Q]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=D.textures;for(let Q=0,lt=et.length;Q<lt;Q++){const ht=n.get(et[Q]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),s.memory.textures--),n.remove(et[Q])}n.remove(D)}let S=0;function M(){S=0}function b(){const D=S;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),S+=1,D}function U(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function P(D,E){const et=n.get(D);if(D.isVideoTexture&&xt(D),D.isRenderTargetTexture===!1&&D.version>0&&et.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(et,D,E);return}}e.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function X(D,E){const et=n.get(D);if(D.version>0&&et.__version!==D.version){tt(et,D,E);return}e.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function q(D,E){const et=n.get(D);if(D.version>0&&et.__version!==D.version){tt(et,D,E);return}e.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function ot(D,E){const et=n.get(D);if(D.version>0&&et.__version!==D.version){H(et,D,E);return}e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const k={[Vi]:o.REPEAT,[qn]:o.CLAMP_TO_EDGE,[ns]:o.MIRRORED_REPEAT},N={[Ze]:o.NEAREST,[Vl]:o.NEAREST_MIPMAP_NEAREST,[cr]:o.NEAREST_MIPMAP_LINEAR,[en]:o.LINEAR,[Qr]:o.LINEAR_MIPMAP_NEAREST,[In]:o.LINEAR_MIPMAP_LINEAR},J={[Ph]:o.NEVER,[Fh]:o.ALWAYS,[Lh]:o.LESS,[Jl]:o.LEQUAL,[Ih]:o.EQUAL,[Uh]:o.GEQUAL,[Nh]:o.GREATER,[Dh]:o.NOTEQUAL};function K(D,E){if(E.type===yn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===en||E.magFilter===Qr||E.magFilter===cr||E.magFilter===In||E.minFilter===en||E.minFilter===Qr||E.minFilter===cr||E.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,k[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,k[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,k[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,N[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ze||E.minFilter!==cr&&E.minFilter!==In||E.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function V(D,E){let et=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",x));const Q=E.source;let lt=d.get(Q);lt===void 0&&(lt={},d.set(Q,lt));const ht=U(E);if(ht!==D.__cacheKey){lt[ht]===void 0&&(lt[ht]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,et=!0),lt[ht].usedTimes++;const Lt=lt[D.__cacheKey];Lt!==void 0&&(lt[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&L(E)),D.__cacheKey=ht,D.__webglTexture=lt[ht].texture}return et}function tt(D,E,et){let Q=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=o.TEXTURE_3D);const lt=V(D,E),ht=E.source;e.bindTexture(Q,D.__webglTexture,o.TEXTURE0+et);const Lt=n.get(ht);if(ht.version!==Lt.__version||lt===!0){e.activeTexture(o.TEXTURE0+et);const ft=pe.getPrimaries(pe.workingColorSpace),Tt=E.colorSpace===Xn?null:pe.getPrimaries(E.colorSpace),Ft=E.colorSpace===Xn||ft===Tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let mt=g(E.image,!1,i.maxTextureSize);mt=rt(E,mt);const Ct=r.convert(E.format,E.colorSpace),Xt=r.convert(E.type);let Vt=y(E.internalFormat,Ct,Xt,E.colorSpace,E.isVideoTexture);K(Q,E);let kt;const Qt=E.mipmaps,$t=E.isVideoTexture!==!0&&Vt!==jl,te=Lt.__version===void 0||lt===!0,re=ht.dataReady,ce=_(E,mt);if(E.isDepthTexture)Vt=o.DEPTH_COMPONENT16,E.type===yn?Vt=o.DEPTH_COMPONENT32F:E.type===Hi?Vt=o.DEPTH_COMPONENT24:E.type===yr&&(Vt=o.DEPTH24_STENCIL8),te&&($t?e.texStorage2D(o.TEXTURE_2D,1,Vt,mt.width,mt.height):e.texImage2D(o.TEXTURE_2D,0,Vt,mt.width,mt.height,0,Ct,Xt,null));else if(E.isDataTexture)if(Qt.length>0){$t&&te&&e.texStorage2D(o.TEXTURE_2D,ce,Vt,Qt[0].width,Qt[0].height);for(let Gt=0,O=Qt.length;Gt<O;Gt++)kt=Qt[Gt],$t?re&&e.texSubImage2D(o.TEXTURE_2D,Gt,0,0,kt.width,kt.height,Ct,Xt,kt.data):e.texImage2D(o.TEXTURE_2D,Gt,Vt,kt.width,kt.height,0,Ct,Xt,kt.data);E.generateMipmaps=!1}else $t?(te&&e.texStorage2D(o.TEXTURE_2D,ce,Vt,mt.width,mt.height),re&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,mt.width,mt.height,Ct,Xt,mt.data)):e.texImage2D(o.TEXTURE_2D,0,Vt,mt.width,mt.height,0,Ct,Xt,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$t&&te&&e.texStorage3D(o.TEXTURE_2D_ARRAY,ce,Vt,Qt[0].width,Qt[0].height,mt.depth);for(let Gt=0,O=Qt.length;Gt<O;Gt++)kt=Qt[Gt],E.format!==dn?Ct!==null?$t?re&&e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Gt,0,0,0,kt.width,kt.height,mt.depth,Ct,kt.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Gt,Vt,kt.width,kt.height,mt.depth,0,kt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?re&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Gt,0,0,0,kt.width,kt.height,mt.depth,Ct,Xt,kt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Gt,Vt,kt.width,kt.height,mt.depth,0,Ct,Xt,kt.data)}else{$t&&te&&e.texStorage2D(o.TEXTURE_2D,ce,Vt,Qt[0].width,Qt[0].height);for(let Gt=0,O=Qt.length;Gt<O;Gt++)kt=Qt[Gt],E.format!==dn?Ct!==null?$t?re&&e.compressedTexSubImage2D(o.TEXTURE_2D,Gt,0,0,kt.width,kt.height,Ct,kt.data):e.compressedTexImage2D(o.TEXTURE_2D,Gt,Vt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?re&&e.texSubImage2D(o.TEXTURE_2D,Gt,0,0,kt.width,kt.height,Ct,Xt,kt.data):e.texImage2D(o.TEXTURE_2D,Gt,Vt,kt.width,kt.height,0,Ct,Xt,kt.data)}else if(E.isDataArrayTexture)$t?(te&&e.texStorage3D(o.TEXTURE_2D_ARRAY,ce,Vt,mt.width,mt.height,mt.depth),re&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Xt,mt.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,mt.width,mt.height,mt.depth,0,Ct,Xt,mt.data);else if(E.isData3DTexture)$t?(te&&e.texStorage3D(o.TEXTURE_3D,ce,Vt,mt.width,mt.height,mt.depth),re&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ct,Xt,mt.data)):e.texImage3D(o.TEXTURE_3D,0,Vt,mt.width,mt.height,mt.depth,0,Ct,Xt,mt.data);else if(E.isFramebufferTexture){if(te)if($t)e.texStorage2D(o.TEXTURE_2D,ce,Vt,mt.width,mt.height);else{let Gt=mt.width,O=mt.height;for(let St=0;St<ce;St++)e.texImage2D(o.TEXTURE_2D,St,Vt,Gt,O,0,Ct,Xt,null),Gt>>=1,O>>=1}}else if(Qt.length>0){if($t&&te){const Gt=ut(Qt[0]);e.texStorage2D(o.TEXTURE_2D,ce,Vt,Gt.width,Gt.height)}for(let Gt=0,O=Qt.length;Gt<O;Gt++)kt=Qt[Gt],$t?re&&e.texSubImage2D(o.TEXTURE_2D,Gt,0,0,Ct,Xt,kt):e.texImage2D(o.TEXTURE_2D,Gt,Vt,Ct,Xt,kt);E.generateMipmaps=!1}else if($t){if(te){const Gt=ut(mt);e.texStorage2D(o.TEXTURE_2D,ce,Vt,Gt.width,Gt.height)}re&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Xt,mt)}else e.texImage2D(o.TEXTURE_2D,0,Vt,Ct,Xt,mt);p(E)&&m(Q),Lt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function H(D,E,et){if(E.image.length!==6)return;const Q=V(D,E),lt=E.source;e.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+et);const ht=n.get(lt);if(lt.version!==ht.__version||Q===!0){e.activeTexture(o.TEXTURE0+et);const Lt=pe.getPrimaries(pe.workingColorSpace),ft=E.colorSpace===Xn?null:pe.getPrimaries(E.colorSpace),Tt=E.colorSpace===Xn||Lt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ft=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let O=0;O<6;O++)!Ft&&!mt?Ct[O]=g(E.image[O],!0,i.maxCubemapSize):Ct[O]=mt?E.image[O].image:E.image[O],Ct[O]=rt(E,Ct[O]);const Xt=Ct[0],Vt=r.convert(E.format,E.colorSpace),kt=r.convert(E.type),Qt=y(E.internalFormat,Vt,kt,E.colorSpace),$t=E.isVideoTexture!==!0,te=ht.__version===void 0||Q===!0,re=lt.dataReady;let ce=_(E,Xt);K(o.TEXTURE_CUBE_MAP,E);let Gt;if(Ft){$t&&te&&e.texStorage2D(o.TEXTURE_CUBE_MAP,ce,Qt,Xt.width,Xt.height);for(let O=0;O<6;O++){Gt=Ct[O].mipmaps;for(let St=0;St<Gt.length;St++){const Et=Gt[St];E.format!==dn?Vt!==null?$t?re&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St,0,0,Et.width,Et.height,Vt,Et.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St,Qt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?re&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St,0,0,Et.width,Et.height,Vt,kt,Et.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St,Qt,Et.width,Et.height,0,Vt,kt,Et.data)}}}else{if(Gt=E.mipmaps,$t&&te){Gt.length>0&&ce++;const O=ut(Ct[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,ce,Qt,O.width,O.height)}for(let O=0;O<6;O++)if(mt){$t?re&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Ct[O].width,Ct[O].height,Vt,kt,Ct[O].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Qt,Ct[O].width,Ct[O].height,0,Vt,kt,Ct[O].data);for(let St=0;St<Gt.length;St++){const Wt=Gt[St].image[O].image;$t?re&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St+1,0,0,Wt.width,Wt.height,Vt,kt,Wt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St+1,Qt,Wt.width,Wt.height,0,Vt,kt,Wt.data)}}else{$t?re&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Vt,kt,Ct[O]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Qt,Vt,kt,Ct[O]);for(let St=0;St<Gt.length;St++){const Et=Gt[St];$t?re&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St+1,0,0,Vt,kt,Et.image[O]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+O,St+1,Qt,Vt,kt,Et.image[O])}}}p(E)&&m(o.TEXTURE_CUBE_MAP),ht.__version=lt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function T(D,E,et,Q,lt,ht){const Lt=r.convert(et.format,et.colorSpace),ft=r.convert(et.type),Tt=y(et.internalFormat,Lt,ft,et.colorSpace);if(!n.get(E).__hasExternalTextures){const mt=Math.max(1,E.width>>ht),Ct=Math.max(1,E.height>>ht);lt===o.TEXTURE_3D||lt===o.TEXTURE_2D_ARRAY?e.texImage3D(lt,ht,Tt,mt,Ct,E.depth,0,Lt,ft,null):e.texImage2D(lt,ht,Tt,mt,Ct,0,Lt,ft,null)}e.bindFramebuffer(o.FRAMEBUFFER,D),dt(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Q,lt,n.get(et).__webglTexture,0,_t(E)):(lt===o.TEXTURE_2D||lt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Q,lt,n.get(et).__webglTexture,ht),e.bindFramebuffer(o.FRAMEBUFFER,null)}function R(D,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer&&!E.stencilBuffer){let Q=o.DEPTH_COMPONENT24;if(et||dt(E)){const lt=E.depthTexture;lt&&lt.isDepthTexture&&(lt.type===yn?Q=o.DEPTH_COMPONENT32F:lt.type===Hi&&(Q=o.DEPTH_COMPONENT24));const ht=_t(E);dt(E)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ht,Q,E.width,E.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ht,Q,E.width,E.height)}else o.renderbufferStorage(o.RENDERBUFFER,Q,E.width,E.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,D)}else if(E.depthBuffer&&E.stencilBuffer){const Q=_t(E);et&&dt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Q,o.DEPTH24_STENCIL8,E.width,E.height):dt(E)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Q,o.DEPTH24_STENCIL8,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,D)}else{const Q=E.textures;for(let lt=0;lt<Q.length;lt++){const ht=Q[lt],Lt=r.convert(ht.format,ht.colorSpace),ft=r.convert(ht.type),Tt=y(ht.internalFormat,Lt,ft,ht.colorSpace),Ft=_t(E);et&&dt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,Tt,E.width,E.height):dt(E)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ft,Tt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function G(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),P(E.depthTexture,0);const Q=n.get(E.depthTexture).__webglTexture,lt=_t(E);if(E.depthTexture.format===Ui)dt(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Q,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Q,0);else if(E.depthTexture.format===vr)dt(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Q,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function $(D){const E=n.get(D),et=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");G(E.__webglFramebuffer,D)}else if(et){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=o.createRenderbuffer(),R(E.__webglDepthbuffer[Q],D,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=o.createRenderbuffer(),R(E.__webglDepthbuffer,D,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(D,E,et){const Q=n.get(D);E!==void 0&&T(Q.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&$(D)}function j(D){const E=D.texture,et=n.get(D),Q=n.get(E);D.addEventListener("dispose",A);const lt=D.textures,ht=D.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=E.version,s.memory.textures++),ht){et.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[ft]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)et.__webglFramebuffer[ft][Tt]=o.createFramebuffer()}else et.__webglFramebuffer[ft]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)et.__webglFramebuffer[ft]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let ft=0,Tt=lt.length;ft<Tt;ft++){const Ft=n.get(lt[ft]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=o.createTexture(),s.memory.textures++)}if(D.samples>0&&dt(D)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ft=0;ft<lt.length;ft++){const Tt=lt[ft];et.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[ft]);const Ft=r.convert(Tt.format,Tt.colorSpace),mt=r.convert(Tt.type),Ct=y(Tt.internalFormat,Ft,mt,Tt.colorSpace,D.isXRRenderTarget===!0),Xt=_t(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt,Ct,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,et.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),R(et.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){e.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture),K(o.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)T(et.__webglFramebuffer[ft][Tt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Tt);else T(et.__webglFramebuffer[ft],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(E)&&m(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ft=0,Tt=lt.length;ft<Tt;ft++){const Ft=lt[ft],mt=n.get(Ft);e.bindTexture(o.TEXTURE_2D,mt.__webglTexture),K(o.TEXTURE_2D,Ft),T(et.__webglFramebuffer,D,Ft,o.COLOR_ATTACHMENT0+ft,o.TEXTURE_2D,0),p(Ft)&&m(o.TEXTURE_2D)}e.unbindTexture()}else{let ft=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),K(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)T(et.__webglFramebuffer[Tt],D,E,o.COLOR_ATTACHMENT0,ft,Tt);else T(et.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,ft,0);p(E)&&m(ft),e.unbindTexture()}D.depthBuffer&&$(D)}function st(D){const E=D.textures;for(let et=0,Q=E.length;et<Q;et++){const lt=E[et];if(p(lt)){const ht=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Lt=n.get(lt).__webglTexture;e.bindTexture(ht,Lt),m(ht),e.unbindTexture()}}}function F(D){if(D.samples>0&&dt(D)===!1){const E=D.textures,et=D.width,Q=D.height;let lt=o.COLOR_BUFFER_BIT;const ht=[],Lt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=n.get(D),Tt=E.length>1;if(Tt)for(let Ft=0;Ft<E.length;Ft++)e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Ft=0;Ft<E.length;Ft++){ht.push(o.COLOR_ATTACHMENT0+Ft),D.depthBuffer&&ht.push(Lt);const mt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(mt===!1&&(D.depthBuffer&&(lt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&ft.__isTransmissionRenderTarget!==!0&&(lt|=o.STENCIL_BUFFER_BIT)),Tt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ft.__webglColorRenderbuffer[Ft]),mt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Lt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Lt])),Tt){const Ct=n.get(E[Ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,et,Q,0,0,et,Q,lt,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ht)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Tt)for(let Ft=0;Ft<E.length;Ft++){e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,ft.__webglColorRenderbuffer[Ft]);const mt=n.get(E[Ft]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,mt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function _t(D){return Math.min(i.maxSamples,D.samples)}function dt(D){const E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(D){const E=s.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function rt(D,E){const et=D.colorSpace,Q=D.format,lt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||et!==ke&&et!==Xn&&(pe.getTransfer(et)===Ee?(Q!==dn||lt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=b,this.resetTextureUnits=M,this.setTexture2D=P,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=ot,this.rebindTextures=nt,this.setupRenderTarget=j,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=T,this.useMultisampledRTT=dt}function Qm(o,t){function e(n,i=Xn){let r;const s=pe.getTransfer(i);if(n===Jn)return o.UNSIGNED_BYTE;if(n===Gl)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return o.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return o.BYTE;if(n===gh)return o.SHORT;if(n===Hl)return o.UNSIGNED_SHORT;if(n===kl)return o.INT;if(n===Hi)return o.UNSIGNED_INT;if(n===yn)return o.FLOAT;if(n===is)return o.HALF_FLOAT;if(n===yh)return o.ALPHA;if(n===xh)return o.RGB;if(n===dn)return o.RGBA;if(n===Mh)return o.LUMINANCE;if(n===Sh)return o.LUMINANCE_ALPHA;if(n===Ui)return o.DEPTH_COMPONENT;if(n===vr)return o.DEPTH_STENCIL;if(n===Xl)return o.RED;if(n===ql)return o.RED_INTEGER;if(n===Eh)return o.RG;if(n===Yl)return o.RG_INTEGER;if(n===Kl)return o.RGBA_INTEGER;if(n===gs||n===_s||n===ys||n===xs)if(s===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===jo||n===Zo||n===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===$o||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o)return s===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sa)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return s===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ms||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ms)return s===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wh||n===va||n===ga||n===_a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ms)return r.COMPRESSED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}class tv extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Yn extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ev={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){s=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(h,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,v=.005;h.inputState.pinching&&d>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ve(new Mr(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class sv extends Yi{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,v=null;const g=new rv,p=e.getContextAttributes();let m=null,y=null;const _=[],x=[],A=new zt;let C=null;const L=new je;L.layers.enable(1),L.viewport=new Me;const I=new je;I.layers.enable(2),I.viewport=new Me;const S=[L,I],M=new tv;M.layers.enable(1),M.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let R=_[T];return R===void 0&&(R=new Ys,_[T]=R),R.getTargetRaySpace()},this.getControllerGrip=function(T){let R=_[T];return R===void 0&&(R=new Ys,_[T]=R),R.getGripSpace()},this.getHand=function(T){let R=_[T];return R===void 0&&(R=new Ys,_[T]=R),R.getHandSpace()};function P(T){const R=x.indexOf(T.inputSource);if(R===-1)return;const G=_[R];G!==void 0&&(G.update(T.inputSource,T.frame,h||s),G.dispatchEvent({type:T.type,data:T.inputSource}))}function X(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",q);for(let T=0;T<_.length;T++){const R=x[T];R!==null&&(x[T]=null,_[T].disconnect(R))}b=null,U=null,g.reset(),t.setRenderTarget(m),f=null,d=null,c=null,i=null,y=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(T){h=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(T){if(i=T,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",X),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const R={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,R),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fi(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let R=null,G=null,$=null;p.depth&&($=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,R=p.stencil?vr:Ui,G=p.stencil?yr:Hi);const nt={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};c=new XRWebGLBinding(i,e),d=c.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new fi(d.textureWidth,d.textureHeight,{format:dn,type:Jn,depthTexture:new hc(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const j=t.properties.get(y);j.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,s=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(T){for(let R=0;R<T.removed.length;R++){const G=T.removed[R],$=x.indexOf(G);$>=0&&(x[$]=null,_[$].disconnect(G))}for(let R=0;R<T.added.length;R++){const G=T.added[R];let $=x.indexOf(G);if($===-1){for(let j=0;j<_.length;j++)if(j>=x.length){x.push(G),$=j;break}else if(x[j]===null){x[j]=G,$=j;break}if($===-1)break}const nt=_[$];nt&&nt.connect(G)}}const ot=new W,k=new W;function N(T,R,G){ot.setFromMatrixPosition(R.matrixWorld),k.setFromMatrixPosition(G.matrixWorld);const $=ot.distanceTo(k),nt=R.projectionMatrix.elements,j=G.projectionMatrix.elements,st=nt[14]/(nt[10]-1),F=nt[14]/(nt[10]+1),_t=(nt[9]+1)/nt[5],dt=(nt[9]-1)/nt[5],xt=(nt[8]-1)/nt[0],rt=(j[8]+1)/j[0],ut=st*xt,D=st*rt,E=$/(-xt+rt),et=E*-xt;R.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(et),T.translateZ(E),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const Q=st+E,lt=F+E,ht=ut-et,Lt=D+($-et),ft=_t*F/lt*Q,Tt=dt*F/lt*Q;T.projectionMatrix.makePerspective(ht,Lt,ft,Tt,Q,lt),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function J(T,R){R===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(R.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(i===null)return;g.texture!==null&&(T.near=g.depthNear,T.far=g.depthFar),M.near=I.near=L.near=T.near,M.far=I.far=L.far=T.far,(b!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,U=M.far,L.near=b,L.far=U,I.near=b,I.far=U,L.updateProjectionMatrix(),I.updateProjectionMatrix(),T.updateProjectionMatrix());const R=T.parent,G=M.cameras;J(M,R);for(let $=0;$<G.length;$++)J(G[$],R);G.length===2?N(M,L,I):M.projectionMatrix.copy(L.projectionMatrix),K(T,M,R)};function K(T,R,G){G===null?T.matrix.copy(R.matrixWorld):(T.matrix.copy(G.matrixWorld),T.matrix.invert(),T.matrix.multiply(R.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(R.projectionMatrix),T.projectionMatrixInverse.copy(R.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Gi*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(T){l=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)},this.hasDepthSensing=function(){return g.texture!==null};let V=null;function tt(T,R){if(u=R.getViewerPose(h||s),v=R,u!==null){const G=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let $=!1;G.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let j=0;j<G.length;j++){const st=G[j];let F=null;if(f!==null)F=f.getViewport(st);else{const dt=c.getViewSubImage(d,st);F=dt.viewport,j===0&&(t.setRenderTargetTextures(y,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(y))}let _t=S[j];_t===void 0&&(_t=new je,_t.layers.enable(j),_t.viewport=new Me,S[j]=_t),_t.matrix.fromArray(st.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(st.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(F.x,F.y,F.width,F.height),j===0&&(M.matrix.copy(_t.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(_t)}const nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const j=c.getDepthInformation(G[0]);j&&j.isValid&&j.texture&&g.init(t,j,i.renderState)}}for(let G=0;G<_.length;G++){const $=x[G],nt=_[G];$!==null&&nt!==void 0&&nt.update($,R,h||s)}g.render(t,M),V&&V(T,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const H=new cc;H.setAnimationLoop(tt),this.setAnimationLoop=function(T){V=T},this.dispose=function(){}}}const oi=new mn,ov=new ee;function av(o,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,oc(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),c(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),v(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,_):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,x=y.envMapRotation;if(_&&(p.envMap.value=_,oi.copy(x),oi.x*=-1,oi.y*=-1,oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),p.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(oi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const A=o._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*A,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function c(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lv(o,t,e,n){let i={},r={},s=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function h(y,_){let x=i[y.id];x===void 0&&(v(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",p));const A=_.program;n.updateUBOMapping(y,A);const C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function u(y){const _=c();y.__bindingPointIndex=_;const x=o.createBuffer(),A=y.__size,C=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,x),o.bufferData(o.UNIFORM_BUFFER,A,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,_,x),x}function c(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,A=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,_);for(let C=0,L=x.length;C<L;C++){const I=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,M=I.length;S<M;S++){const b=I[S];if(f(b,C,S,A)===!0){const U=b.__offset,P=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let q=0;q<P.length;q++){const ot=P[q],k=g(ot);typeof ot=="number"||typeof ot=="boolean"?(b.__data[0]=ot,o.bufferSubData(o.UNIFORM_BUFFER,U+X,b.__data)):ot.isMatrix3?(b.__data[0]=ot.elements[0],b.__data[1]=ot.elements[1],b.__data[2]=ot.elements[2],b.__data[3]=0,b.__data[4]=ot.elements[3],b.__data[5]=ot.elements[4],b.__data[6]=ot.elements[5],b.__data[7]=0,b.__data[8]=ot.elements[6],b.__data[9]=ot.elements[7],b.__data[10]=ot.elements[8],b.__data[11]=0):(ot.toArray(b.__data,X),X+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,U,b.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(y,_,x,A){const C=y.value,L=_+"_"+x;if(A[L]===void 0)return typeof C=="number"||typeof C=="boolean"?A[L]=C:A[L]=C.clone(),!0;{const I=A[L];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return A[L]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function v(y){const _=y.uniforms;let x=0;const A=16;for(let L=0,I=_.length;L<I;L++){const S=Array.isArray(_[L])?_[L]:[_[L]];for(let M=0,b=S.length;M<b;M++){const U=S[M],P=Array.isArray(U.value)?U.value:[U.value];for(let X=0,q=P.length;X<q;X++){const ot=P[X],k=g(ot),N=x%A;N!==0&&A-N<k.boundary&&(x+=A-N),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=k.storage}}}const C=x%A;return C>0&&(x+=A-C),y.__size=x,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),o.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(const y in i)o.deleteBuffer(i[y]);s=[],i={},r={}}return{bind:l,update:h,dispose:m}}class cv{constructor(t={}){const{canvas:e=tu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=s;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const _=this;let x=!1,A=0,C=0,L=null,I=-1,S=null;const M=new Me,b=new Me;let U=null;const P=new Jt(0);let X=0,q=e.width,ot=e.height,k=1,N=null,J=null;const K=new Me(0,0,q,ot),V=new Me(0,0,q,ot);let tt=!1;const H=new wo;let T=!1,R=!1;const G=new ee,$=new zt,nt=new W,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return L===null?k:1}let F=n;function _t(w,B){const Y=e.getContext(w,B);return Y!==null?Y:null}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),F===null){const B="webgl2";if(F=_t(B,w),F===null)throw _t(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let dt,xt,rt,ut,D,E,et,Q,lt,ht,Lt,ft,Tt,Ft,mt,Ct,Xt,Vt,kt,Qt,$t,te,re,ce;function Gt(){dt=new gp(F),dt.init(),xt=new up(F,dt,t),te=new Qm(F,dt),rt=new Jm(F),ut=new xp(F),D=new Bm,E=new $m(F,dt,rt,D,xt,te,ut),et=new fp(_),Q=new vp(_),lt=new Au(F),re=new cp(F,lt),ht=new _p(F,lt,ut,re),Lt=new Sp(F,ht,lt,ut),kt=new Mp(F,xt,E),Ct=new dp(D),ft=new Fm(_,et,Q,dt,xt,re,Ct),Tt=new av(_,D),Ft=new zm,mt=new Xm(dt),Vt=new lp(_,et,Q,rt,Lt,d,l),Xt=new Zm(_,Lt,xt),ce=new lv(F,ut,xt,rt),Qt=new hp(F,dt,ut),$t=new yp(F,dt,ut),ut.programs=ft.programs,_.capabilities=xt,_.extensions=dt,_.properties=D,_.renderLists=Ft,_.shadowMap=Xt,_.state=rt,_.info=ut}Gt();const O=new sv(_,F);this.xr=O,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(q,ot,!1))},this.getSize=function(w){return w.set(q,ot)},this.setSize=function(w,B,Y=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ot=B,e.width=Math.floor(w*k),e.height=Math.floor(B*k),Y===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(q*k,ot*k).floor()},this.setDrawingBufferSize=function(w,B,Y){q=w,ot=B,k=Y,e.width=Math.floor(w*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,B,Y,Z){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,B,Y,Z),rt.viewport(M.copy(K).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,B,Y,Z){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,B,Y,Z),rt.scissor(b.copy(V).multiplyScalar(k).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(w){rt.setScissorTest(tt=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(w=!0,B=!0,Y=!0){let Z=0;if(w){let z=!1;if(L!==null){const pt=L.texture.format;z=pt===Kl||pt===Yl||pt===ql}if(z){const pt=L.texture.type,yt=pt===Jn||pt===Hi||pt===Hl||pt===yr||pt===Gl||pt===Wl,Bt=Vt.getClearColor(),bt=Vt.getClearAlpha(),Dt=Bt.r,Mt=Bt.g,qt=Bt.b;yt?(f[0]=Dt,f[1]=Mt,f[2]=qt,f[3]=bt,F.clearBufferuiv(F.COLOR,0,f)):(v[0]=Dt,v[1]=Mt,v[2]=qt,v[3]=bt,F.clearBufferiv(F.COLOR,0,v))}else Z|=F.COLOR_BUFFER_BIT}B&&(Z|=F.DEPTH_BUFFER_BIT),Y&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),Ft.dispose(),mt.dispose(),D.dispose(),et.dispose(),Q.dispose(),Lt.dispose(),re.dispose(),ce.dispose(),ft.dispose(),O.dispose(),O.removeEventListener("sessionstart",me),O.removeEventListener("sessionend",at),ct.stop()};function St(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=ut.autoReset,B=Xt.enabled,Y=Xt.autoUpdate,Z=Xt.needsUpdate,z=Xt.type;Gt(),ut.autoReset=w,Xt.enabled=B,Xt.autoUpdate=Y,Xt.needsUpdate=Z,Xt.type=z}function Wt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ht(w){const B=w.target;B.removeEventListener("dispose",Ht),oe(B)}function oe(w){he(w),D.remove(w)}function he(w){const B=D.get(w).programs;B!==void 0&&(B.forEach(function(Y){ft.releaseProgram(Y)}),w.isShaderMaterial&&ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,Y,Z,z,pt){B===null&&(B=j);const yt=z.isMesh&&z.matrixWorld.determinant()<0,Bt=Nt(w,B,Y,Z,z);rt.setMaterial(Z,yt);let bt=Y.index,Dt=1;if(Z.wireframe===!0){if(bt=ht.getWireframeAttribute(Y),bt===void 0)return;Dt=2}const Mt=Y.drawRange,qt=Y.attributes.position;let ae=Mt.start*Dt,_e=(Mt.start+Mt.count)*Dt;pt!==null&&(ae=Math.max(ae,pt.start*Dt),_e=Math.min(_e,(pt.start+pt.count)*Dt)),bt!==null?(ae=Math.max(ae,0),_e=Math.min(_e,bt.count)):qt!=null&&(ae=Math.max(ae,0),_e=Math.min(_e,qt.count));const ye=_e-ae;if(ye<0||ye===1/0)return;re.setup(z,Z,Bt,Y,bt);let we,Kt=Qt;if(bt!==null&&(we=lt.get(bt),Kt=$t,Kt.setIndex(we)),z.isMesh)Z.wireframe===!0?(rt.setLineWidth(Z.wireframeLinewidth*st()),Kt.setMode(F.LINES)):Kt.setMode(F.TRIANGLES);else if(z.isLine){let Zt=Z.linewidth;Zt===void 0&&(Zt=1),rt.setLineWidth(Zt*st()),z.isLineSegments?Kt.setMode(F.LINES):z.isLineLoop?Kt.setMode(F.LINE_LOOP):Kt.setMode(F.LINE_STRIP)}else z.isPoints?Kt.setMode(F.POINTS):z.isSprite&&Kt.setMode(F.TRIANGLES);if(z.isBatchedMesh)Kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Kt.renderInstances(ae,ye,z.count);else if(Y.isInstancedBufferGeometry){const Zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xe=Math.min(Y.instanceCount,Zt);Kt.renderInstances(ae,ye,xe)}else Kt.render(ae,ye)};function de(w,B,Y){w.transparent===!0&&w.side===gn&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,Pt(w,B,Y),w.side=Dn,w.needsUpdate=!0,Pt(w,B,Y),w.side=gn):Pt(w,B,Y)}this.compile=function(w,B,Y=null){Y===null&&(Y=w),p=mt.get(Y),p.init(),y.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==Y&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(_._useLegacyLights);const Z=new Set;return w.traverse(function(z){const pt=z.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){const Bt=pt[yt];de(Bt,Y,z),Z.add(Bt)}else de(pt,Y,z),Z.add(pt)}),y.pop(),p=null,Z},this.compileAsync=function(w,B,Y=null){const Z=this.compile(w,B,Y);return new Promise(z=>{function pt(){if(Z.forEach(function(yt){D.get(yt).currentProgram.isReady()&&Z.delete(yt)}),Z.size===0){z(w);return}setTimeout(pt,10)}dt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Te=null;function ue(w){Te&&Te(w)}function me(){ct.stop()}function at(){ct.start()}const ct=new cc;ct.setAnimationLoop(ue),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(w){Te=w,O.setAnimationLoop(w),w===null?ct.stop():ct.start()},O.addEventListener("sessionstart",me),O.addEventListener("sessionend",at),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(B),B=O.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,B,L),p=mt.get(w,y.length),p.init(),y.push(p),G.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H.setFromProjectionMatrix(G),R=this.localClippingEnabled,T=Ct.init(this.clippingPlanes,R),g=Ft.get(w,m.length),g.init(),m.push(g),vt(w,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(N,J),this.info.render.frame++,T===!0&&Ct.beginShadows();const Y=p.state.shadowsArray;if(Xt.render(Y,w,B),T===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1)&&Vt.render(g,w),p.setupLights(_._useLegacyLights),B.isArrayCamera){const Z=B.cameras;for(let z=0,pt=Z.length;z<pt;z++){const yt=Z[z];gt(g,w,yt,yt.viewport)}}else gt(g,w,B);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,B),re.resetDefaultState(),I=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function vt(w,B,Y,Z){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||H.intersectsSprite(w)){Z&&nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const yt=Lt.update(w),Bt=w.material;Bt.visible&&g.push(w,yt,Bt,Y,nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||H.intersectsObject(w))){const yt=Lt.update(w),Bt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),nt.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),nt.copy(yt.boundingSphere.center)),nt.applyMatrix4(w.matrixWorld).applyMatrix4(G)),Array.isArray(Bt)){const bt=yt.groups;for(let Dt=0,Mt=bt.length;Dt<Mt;Dt++){const qt=bt[Dt],ae=Bt[qt.materialIndex];ae&&ae.visible&&g.push(w,yt,ae,Y,nt.z,qt)}}else Bt.visible&&g.push(w,yt,Bt,Y,nt.z,null)}}const pt=w.children;for(let yt=0,Bt=pt.length;yt<Bt;yt++)vt(pt[yt],B,Y,Z)}function gt(w,B,Y,Z){const z=w.opaque,pt=w.transmissive,yt=w.transparent;p.setupLightsView(Y),T===!0&&Ct.setGlobalState(_.clippingPlanes,Y),pt.length>0&&jt(z,pt,B,Y),Z&&rt.viewport(M.copy(Z)),z.length>0&&It(z,B,Y),pt.length>0&&It(pt,B,Y),yt.length>0&&It(yt,B,Y),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function jt(w,B,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new fi(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?is:Jn,minFilter:In,samples:4,stencilBuffer:r});const Dt=D.get(p.state.transmissionRenderTarget);Dt.__isTransmissionRenderTarget=!0}const pt=p.state.transmissionRenderTarget;_.getDrawingBufferSize($),pt.setSize($.x,$.y);const yt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(P),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear();const Bt=_.toneMapping;_.toneMapping=Zn,It(w,Y,Z),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt);let bt=!1;for(let Dt=0,Mt=B.length;Dt<Mt;Dt++){const qt=B[Dt],ae=qt.object,_e=qt.geometry,ye=qt.material,we=qt.group;if(ye.side===gn&&ae.layers.test(Z.layers)){const Kt=ye.side;ye.side=$e,ye.needsUpdate=!0,wt(ae,Y,Z,_e,ye,we),ye.side=Kt,ye.needsUpdate=!0,bt=!0}}bt===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt)),_.setRenderTarget(yt),_.setClearColor(P,X),_.toneMapping=Bt}function It(w,B,Y){const Z=B.isScene===!0?B.overrideMaterial:null;for(let z=0,pt=w.length;z<pt;z++){const yt=w[z],Bt=yt.object,bt=yt.geometry,Dt=Z===null?yt.material:Z,Mt=yt.group;Bt.layers.test(Y.layers)&&wt(Bt,B,Y,bt,Dt,Mt)}}function wt(w,B,Y,Z,z,pt){w.onBeforeRender(_,B,Y,Z,z,pt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(_,B,Y,Z,w,pt),z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=$e,z.needsUpdate=!0,_.renderBufferDirect(Y,B,Z,z,w,pt),z.side=Dn,z.needsUpdate=!0,_.renderBufferDirect(Y,B,Z,z,w,pt),z.side=gn):_.renderBufferDirect(Y,B,Z,z,w,pt),w.onAfterRender(_,B,Y,Z,z,pt)}function Pt(w,B,Y){B.isScene!==!0&&(B=j);const Z=D.get(w),z=p.state.lights,pt=p.state.shadowsArray,yt=z.state.version,Bt=ft.getParameters(w,z.state,pt,B,Y),bt=ft.getProgramCacheKey(Bt);let Dt=Z.programs;Z.environment=w.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(w.isMeshStandardMaterial?Q:et).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Ht),Dt=new Map,Z.programs=Dt);let Mt=Dt.get(bt);if(Mt!==void 0){if(Z.currentProgram===Mt&&Z.lightsStateVersion===yt)return At(w,Bt),Mt}else Bt.uniforms=ft.getUniforms(w),w.onBuild(Y,Bt,_),w.onBeforeCompile(Bt,_),Mt=ft.acquireProgram(Bt,bt),Dt.set(bt,Mt),Z.uniforms=Bt.uniforms;const qt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=Ct.uniform),At(w,Bt),Z.needsLights=Rt(w),Z.lightsStateVersion=yt,Z.needsLights&&(qt.ambientLightColor.value=z.state.ambient,qt.lightProbe.value=z.state.probe,qt.directionalLights.value=z.state.directional,qt.directionalLightShadows.value=z.state.directionalShadow,qt.spotLights.value=z.state.spot,qt.spotLightShadows.value=z.state.spotShadow,qt.rectAreaLights.value=z.state.rectArea,qt.ltc_1.value=z.state.rectAreaLTC1,qt.ltc_2.value=z.state.rectAreaLTC2,qt.pointLights.value=z.state.point,qt.pointLightShadows.value=z.state.pointShadow,qt.hemisphereLights.value=z.state.hemi,qt.directionalShadowMap.value=z.state.directionalShadowMap,qt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,qt.spotShadowMap.value=z.state.spotShadowMap,qt.spotLightMatrix.value=z.state.spotLightMatrix,qt.spotLightMap.value=z.state.spotLightMap,qt.pointShadowMap.value=z.state.pointShadowMap,qt.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=Mt,Z.uniformsList=null,Mt}function it(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=ts.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function At(w,B){const Y=D.get(w);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Nt(w,B,Y,Z,z){B.isScene!==!0&&(B=j),E.resetTextureUnits();const pt=B.fog,yt=Z.isMeshStandardMaterial?B.environment:null,Bt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ke,bt=(Z.isMeshStandardMaterial?Q:et).get(Z.envMap||yt),Dt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Mt=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qt=!!Y.morphAttributes.position,ae=!!Y.morphAttributes.normal,_e=!!Y.morphAttributes.color;let ye=Zn;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ye=_.toneMapping);const we=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Kt=we!==void 0?we.length:0,Zt=D.get(Z),xe=p.state.lights;if(T===!0&&(R===!0||w!==S)){const fe=w===S&&Z.id===I;Ct.setState(Z,w,fe)}let le=!1;Z.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==xe.state.version||Zt.outputColorSpace!==Bt||z.isBatchedMesh&&Zt.batching===!1||!z.isBatchedMesh&&Zt.batching===!0||z.isInstancedMesh&&Zt.instancing===!1||!z.isInstancedMesh&&Zt.instancing===!0||z.isSkinnedMesh&&Zt.skinning===!1||!z.isSkinnedMesh&&Zt.skinning===!0||z.isInstancedMesh&&Zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Zt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Zt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Zt.instancingMorph===!1&&z.morphTexture!==null||Zt.envMap!==bt||Z.fog===!0&&Zt.fog!==pt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ct.numPlanes||Zt.numIntersection!==Ct.numIntersection)||Zt.vertexAlphas!==Dt||Zt.vertexTangents!==Mt||Zt.morphTargets!==qt||Zt.morphNormals!==ae||Zt.morphColors!==_e||Zt.toneMapping!==ye||Zt.morphTargetsCount!==Kt)&&(le=!0):(le=!0,Zt.__version=Z.version);let Ce=Zt.currentProgram;le===!0&&(Ce=Pt(Z,B,z));let Ie=!1,be=!1,Ge=!1;const Se=Ce.getUniforms(),Yt=Zt.uniforms;if(rt.useProgram(Ce.program)&&(Ie=!0,be=!0,Ge=!0),Z.id!==I&&(I=Z.id,be=!0),Ie||S!==w){Se.setValue(F,"projectionMatrix",w.projectionMatrix),Se.setValue(F,"viewMatrix",w.matrixWorldInverse);const fe=Se.map.cameraPosition;fe!==void 0&&fe.setValue(F,nt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&Se.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Se.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,be=!0,Ge=!0)}if(z.isSkinnedMesh){Se.setOptional(F,z,"bindMatrix"),Se.setOptional(F,z,"bindMatrixInverse");const fe=z.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),Se.setValue(F,"boneTexture",fe.boneTexture,E))}z.isBatchedMesh&&(Se.setOptional(F,z,"batchingTexture"),Se.setValue(F,"batchingTexture",z._matricesTexture,E));const ze=Y.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&kt.update(z,Y,Ce),(be||Zt.receiveShadow!==z.receiveShadow)&&(Zt.receiveShadow=z.receiveShadow,Se.setValue(F,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Yt.envMap.value=bt,Yt.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Yt.envMapIntensity.value=B.environmentIntensity),be&&(Se.setValue(F,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&Ot(Yt,Ge),pt&&Z.fog===!0&&Tt.refreshFogUniforms(Yt,pt),Tt.refreshMaterialUniforms(Yt,Z,k,ot,p.state.transmissionRenderTarget),ts.upload(F,it(Zt),Yt,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ts.upload(F,it(Zt),Yt,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Se.setValue(F,"center",z.center),Se.setValue(F,"modelViewMatrix",z.modelViewMatrix),Se.setValue(F,"normalMatrix",z.normalMatrix),Se.setValue(F,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const fe=Z.uniformsGroups;for(let an=0,wn=fe.length;an<wn;an++){const Er=fe[an];ce.update(Er,Ce),ce.bind(Er,Ce)}}return Ce}function Ot(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Rt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,B,Y){D.get(w.texture).__webglTexture=B,D.get(w.depthTexture).__webglTexture=Y;const Z=D.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const Y=D.get(w);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,Y=0){L=w,A=B,C=Y;let Z=!0,z=null,pt=!1,yt=!1;if(w){const bt=D.get(w);bt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1):bt.__webglFramebuffer===void 0?E.setupRenderTarget(w):bt.__hasExternalTextures&&E.rebindTextures(w,D.get(w.texture).__webglTexture,D.get(w.depthTexture).__webglTexture);const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(yt=!0);const Mt=D.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Mt[B])?z=Mt[B][Y]:z=Mt[B],pt=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?z=D.get(w).__webglMultisampledFramebuffer:Array.isArray(Mt)?z=Mt[Y]:z=Mt,M.copy(w.viewport),b.copy(w.scissor),U=w.scissorTest}else M.copy(K).multiplyScalar(k).floor(),b.copy(V).multiplyScalar(k).floor(),U=tt;if(rt.bindFramebuffer(F.FRAMEBUFFER,z)&&Z&&rt.drawBuffers(w,z),rt.viewport(M),rt.scissor(b),rt.setScissorTest(U),pt){const bt=D.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,Y)}else if(yt){const bt=D.get(w.texture),Dt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.__webglTexture,Y||0,Dt)}I=-1},this.readRenderTargetPixels=function(w,B,Y,Z,z,pt,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=D.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Bt=Bt[yt]),Bt){rt.bindFramebuffer(F.FRAMEBUFFER,Bt);try{const bt=w.texture,Dt=bt.format,Mt=bt.type;if(Dt!==dn&&te.convert(Dt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=Mt===is&&(dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float"));if(Mt!==Jn&&te.convert(Mt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&Mt!==yn&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-Z&&Y>=0&&Y<=w.height-z&&F.readPixels(B,Y,Z,z,te.convert(Dt),te.convert(Mt),pt)}finally{const bt=L!==null?D.get(L).__webglFramebuffer:null;rt.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(w,B,Y=0){const Z=Math.pow(2,-Y),z=Math.floor(B.image.width*Z),pt=Math.floor(B.image.height*Z);E.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,w.x,w.y,z,pt),rt.unbindTexture()},this.copyTextureToTexture=function(w,B,Y,Z=0){const z=B.image.width,pt=B.image.height,yt=te.convert(Y.format),Bt=te.convert(Y.type);E.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Z,w.x,w.y,z,pt,yt,Bt,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Z,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,yt,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,Z,w.x,w.y,yt,Bt,B.image),Z===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,Y,Z,z=0){const pt=Math.round(w.max.x-w.min.x),yt=Math.round(w.max.y-w.min.y),Bt=w.max.z-w.min.z+1,bt=te.convert(Z.format),Dt=te.convert(Z.type);let Mt;if(Z.isData3DTexture)E.setTexture3D(Z,0),Mt=F.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)E.setTexture2DArray(Z,0),Mt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const qt=F.getParameter(F.UNPACK_ROW_LENGTH),ae=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_e=F.getParameter(F.UNPACK_SKIP_PIXELS),ye=F.getParameter(F.UNPACK_SKIP_ROWS),we=F.getParameter(F.UNPACK_SKIP_IMAGES),Kt=Y.isCompressedTexture?Y.mipmaps[z]:Y.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Kt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),Y.isDataTexture||Y.isData3DTexture?F.texSubImage3D(Mt,z,B.x,B.y,B.z,pt,yt,Bt,bt,Dt,Kt.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,z,B.x,B.y,B.z,pt,yt,Bt,bt,Kt.data):F.texSubImage3D(Mt,z,B.x,B.y,B.z,pt,yt,Bt,bt,Dt,Kt),F.pixelStorei(F.UNPACK_ROW_LENGTH,qt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_e),F.pixelStorei(F.UNPACK_SKIP_ROWS,ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,we),z===0&&Z.generateMipmaps&&F.generateMipmap(Mt),rt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),rt.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,rt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===So?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===fs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class hv extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ql("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new W;class bo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new bo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dl=new W,fl=new Me,pl=new Me,dv=new W,ml=new ee,Xr=new W,Ks=new xn,vl=new ee,js=new ps;class fv extends Ve{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yo,this.bindMatrix=new ee,this.bindMatrixInverse=new ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),t.ray.intersectsSphere(Ks)!==!1&&(vl.copy(i).invert(),js.copy(t.ray).applyMatrix4(vl),!(this.boundingBox!==null&&js.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,js)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Yo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;fl.fromBufferAttribute(i.attributes.skinIndex,t),pl.fromBufferAttribute(i.attributes.skinWeight,t),dl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=pl.getComponent(r);if(s!==0){const a=fl.getComponent(r);ml.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(dv.copy(dl).applyMatrix4(ml),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class vc extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gc extends Be{constructor(t=null,e=1,n=1,i,r,s,a,l,h=Ze,u=Ze,c,d){super(null,s,a,l,h,u,i,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gl=new ee,pv=new ee;class Ro{constructor(t=[],e=[]){this.uuid=fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ee)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ee;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const a=t[r]?t[r].matrixWorld:pv;gl.multiplyMatrices(a,e[r]),gl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ro(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new gc(e,t,t,dn,yn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new vc),this.bones.push(s),this.boneInverses.push(new ee().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];t.bones.push(s.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class fo extends Je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ii=new ee,_l=new ee,qr=[],yl=new Un,mv=new ee,sr=new Ve,or=new xn;class vv extends Ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),yl.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(yl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),or.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ii),_l.multiplyMatrices(n,Ii),sr.matrixWorld=_l,sr.raycast(t,qr);for(let s=0,a=qr.length;s<a;s++){const l=qr[s];l.instanceId=r,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gc(new Float32Array(i*this.count),i,this.count,Xl,yn));const r=this.morphTexture.source.data.data;let s=0;for(let h=0;h<n.length;h++)s+=n[h];const a=this.geometry.morphTargetsRelative?1:1-s,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Co extends pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xl=new W,Ml=new W,Sl=new ee,Zs=new ps,Yr=new xn;class Po extends Re{constructor(t=new rn,e=new Co){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)xl.fromBufferAttribute(e,i-1),Ml.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xl.distanceTo(Ml);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Sl.copy(i).invert(),Zs.copy(t.ray).applyMatrix4(Sl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new W,u=new W,c=new W,d=new W,f=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const m=Math.max(0,s.start),y=Math.min(v.count,s.start+s.count);for(let _=m,x=y-1;_<x;_+=f){const A=v.getX(_),C=v.getX(_+1);if(h.fromBufferAttribute(p,A),u.fromBufferAttribute(p,C),Zs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(d);I<t.near||I>t.far||e.push({distance:I,point:c.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,s.start),y=Math.min(p.count,s.start+s.count);for(let _=m,x=y-1;_<x;_+=f){if(h.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),Zs.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:c.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const El=new W,wl=new W;class _c extends Po{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)El.fromBufferAttribute(e,i),wl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+El.distanceTo(wl);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gv extends Po{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class yc extends pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Al=new ee,po=new ps,Kr=new xn,jr=new W;class _v extends Re{constructor(t=new rn,e=new yc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Al.copy(i).invert(),po.copy(t.ray).applyMatrix4(Al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let v=d,g=f;v<g;v++){const p=h.getX(v);jr.fromBufferAttribute(c,p),Tl(jr,p,l,i,t,e,this)}}else{const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let v=d,g=f;v<g;v++)jr.fromBufferAttribute(c,v),Tl(jr,v,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tl(o,t,e,n,i,r,s){const a=po.distanceSqToPoint(o);if(a<e){const l=new W;po.closestPointToPoint(o,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:s})}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;e?s=e:s=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-s,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(s-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),l=e||(s.isVector2?new zt:new W);return l.copy(a).sub(s).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new W,i=[],r=[],s=[],a=new W,l=new ee;for(let f=0;f<=t;f++){const v=f/t;i[f]=this.getTangentAt(v,new W)}r[0]=new W,s[0]=new W;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),c<=h&&(h=c,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Ne(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,v))}s[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(i[v],f*v)),s[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lo extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new zt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*u-f*c+this.aX,h=d*c+f*u+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yv extends Lo{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Io(){let o=0,t=0,e=0,n=0;function i(r,s,a,l){o=r,t=a,e=-3*r+3*s-2*a-l,n=2*r-2*s+a+l}return{initCatmullRom:function(r,s,a,l,h){i(s,a,h*(a-r),h*(l-s))},initNonuniformCatmullRom:function(r,s,a,l,h,u,c){let d=(s-r)/h-(a-r)/(h+u)+(a-s)/u,f=(a-s)/u-(l-s)/(u+c)+(l-a)/c;d*=u,f*=u,i(s,a,d,f)},calc:function(r){const s=r*r,a=s*r;return o+t*r+e*s+n*a}}}const Zr=new W,Js=new Io,$s=new Io,Qs=new Io;class xv extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new W){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,u;this.closed||a>0?h=i[(a-1)%r]:(Zr.subVectors(i[0],i[1]).add(i[0]),h=Zr);const c=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Zr.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(c),f),g=Math.pow(c.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),v<1e-4&&(v=g),p<1e-4&&(p=g),Js.initNonuniformCatmullRom(h.x,c.x,d.x,u.x,v,g,p),$s.initNonuniformCatmullRom(h.y,c.y,d.y,u.y,v,g,p),Qs.initNonuniformCatmullRom(h.z,c.z,d.z,u.z,v,g,p)}else this.curveType==="catmullrom"&&(Js.initCatmullRom(h.x,c.x,d.x,u.x,this.tension),$s.initCatmullRom(h.y,c.y,d.y,u.y,this.tension),Qs.initCatmullRom(h.z,c.z,d.z,u.z,this.tension));return n.set(Js.calc(l),$s.calc(l),Qs.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new W().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bl(o,t,e,n,i){const r=(n-t)*.5,s=(i-e)*.5,a=o*o,l=o*a;return(2*e-2*n+r+s)*l+(-3*e+3*n-2*r-s)*a+r*o+e}function Mv(o,t){const e=1-o;return e*e*t}function Sv(o,t){return 2*(1-o)*o*t}function Ev(o,t){return o*o*t}function fr(o,t,e,n){return Mv(o,t)+Sv(o,e)+Ev(o,n)}function wv(o,t){const e=1-o;return e*e*e*t}function Av(o,t){const e=1-o;return 3*e*e*o*t}function Tv(o,t){return 3*(1-o)*o*o*t}function bv(o,t){return o*o*o*t}function pr(o,t,e,n,i){return wv(o,t)+Av(o,e)+Tv(o,n)+bv(o,i)}class xc extends Mn{constructor(t=new zt,e=new zt,n=new zt,i=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new zt){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(pr(t,i.x,r.x,s.x,a.x),pr(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rv extends Mn{constructor(t=new W,e=new W,n=new W,i=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new W){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(pr(t,i.x,r.x,s.x,a.x),pr(t,i.y,r.y,s.y,a.y),pr(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mc extends Mn{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cv extends Mn{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sc extends Mn{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(fr(t,i.x,r.x,s.x),fr(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pv extends Mn{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(fr(t,i.x,r.x,s.x),fr(t,i.y,r.y,s.y),fr(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ec extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,l=i[s===0?s:s-1],h=i[s],u=i[s>i.length-2?i.length-1:s+1],c=i[s>i.length-3?i.length-1:s+2];return n.set(bl(a,l.x,h.x,u.x,c.x),bl(a,l.y,h.y,u.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new zt().fromArray(i))}return this}}var Rl=Object.freeze({__proto__:null,ArcCurve:yv,CatmullRomCurve3:xv,CubicBezierCurve:xc,CubicBezierCurve3:Rv,EllipseCurve:Lo,LineCurve:Mc,LineCurve3:Cv,QuadraticBezierCurve:Sc,QuadraticBezierCurve3:Pv,SplineCurve:Ec});class Lv extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-s/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s.isEllipseCurve?t*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,l=s.getPoints(a);for(let h=0;h<l.length;h++){const u=l[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Rl[i.type]().fromJSON(i))}return this}}class Iv extends Lv{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mc(this.currentPoint.clone(),new zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Sc(this.currentPoint.clone(),new zt(t,e),new zt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){const a=new xc(this.currentPoint.clone(),new zt(t,e),new zt(n,i),new zt(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ec(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,l){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,i,r,s,a,l),this}absellipse(t,e,n,i,r,s,a,l){const h=new Lo(t,e,n,i,r,s,a,l);if(this.curves.length>0){const c=h.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class No extends rn{constructor(t=[new zt(0,-.5),new zt(.5,0),new zt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ne(i,0,Math.PI*2);const r=[],s=[],a=[],l=[],h=[],u=1/e,c=new W,d=new zt,f=new W,v=new W,g=new W;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(v)}for(let y=0;y<=e;y++){const _=n+y*u*i,x=Math.sin(_),A=Math.cos(_);for(let C=0;C<=t.length-1;C++){c.x=t[C].x*x,c.y=t[C].y,c.z=t[C].x*A,s.push(c.x,c.y,c.z),d.x=y/e,d.y=C/(t.length-1),a.push(d.x,d.y);const L=l[3*C+0]*x,I=l[3*C+1],S=l[3*C+0]*A;h.push(L,I,S)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const x=_+y*t.length,A=x,C=x+t.length,L=x+t.length+1,I=x+1;r.push(A,C,I),r.push(L,I,C)}this.setIndex(r),this.setAttribute("position",new He(s,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.points,t.segments,t.phiStart,t.phiLength)}}class Do extends No{constructor(t=1,e=1,n=4,i=8){const r=new Iv;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Do(t.radius,t.length,t.capSegments,t.radialSegments)}}class ls extends rn{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),r=Math.floor(r);const u=[],c=[],d=[],f=[];let v=0;const g=[],p=n/2;let m=0;y(),s===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function y(){const x=new W,A=new W;let C=0;const L=(e-t)/n;for(let I=0;I<=r;I++){const S=[],M=I/r,b=M*(e-t)+t;for(let U=0;U<=i;U++){const P=U/i,X=P*l+a,q=Math.sin(X),ot=Math.cos(X);A.x=b*q,A.y=-M*n+p,A.z=b*ot,c.push(A.x,A.y,A.z),x.set(q,L,ot).normalize(),d.push(x.x,x.y,x.z),f.push(P,1-M),S.push(v++)}g.push(S)}for(let I=0;I<i;I++)for(let S=0;S<r;S++){const M=g[S][I],b=g[S+1][I],U=g[S+1][I+1],P=g[S][I+1];u.push(M,b,P),u.push(b,U,P),C+=6}h.addGroup(m,C,0),m+=C}function _(x){const A=v,C=new zt,L=new W;let I=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let U=1;U<=i;U++)c.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),v++;const b=v;for(let U=0;U<=i;U++){const X=U/i*l+a,q=Math.cos(X),ot=Math.sin(X);L.x=S*ot,L.y=p*M,L.z=S*q,c.push(L.x,L.y,L.z),d.push(0,M,0),C.x=q*.5+.5,C.y=ot*.5*M+.5,f.push(C.x,C.y),v++}for(let U=0;U<i;U++){const P=A+U,X=b+U;x===!0?u.push(X,X+1,P):u.push(X+1,X,P),I+=3}h.addGroup(m,I,x===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Uo extends pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fn extends Uo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class mo extends pn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Jr(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Nv(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Dv(o){function t(i,r){return o[i]-o[r]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Cl(o,t,e){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[s++]=o[a+l]}return i}function wc(o,t,e,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(t.push(r.time),e.push.apply(e,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(t.push(r.time),s.toArray(e,e.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(t.push(r.time),e.push(s)),r=o[i++];while(r!==void 0)}class Sr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let s;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break e}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Uv extends Sr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ya,endingEnd:ya}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case xa:r=t,a=2*e-n;break;case Ma:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xa:s=t,l=2*n-e;break;case Ma:s=1,l=n+i[1]-i[0];break;default:s=t-1,l=e}const h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-e)/(i-e),g=v*v,p=g*v,m=-d*p+2*d*g-d*v,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*v+1,_=(-1-f)*p+(1.5+f)*g+.5*v,x=f*p-f*g;for(let A=0;A!==a;++A)r[A]=m*s[u+A]+y*s[h+A]+_*s[l+A]+x*s[c+A];return r}}class Fv extends Sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(i-e),c=1-u;for(let d=0;d!==a;++d)r[d]=s[h+d]*c+s[l+d]*u;return r}}class Bv extends Sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Sn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case ki:e=this.InterpolantFactoryMethodLinear;break;case Ss:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return ki;case this.InterpolantFactoryMethodSmooth:return Ss}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(i!==void 0&&Nv(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ss,r=t.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=e[c+v];if(g!==e[d+v]||g!==e[f+v]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];const c=a*n,d=s*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,l=s*n,h=0;h!==n;++h)e[l+h]=e[a+h];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ki;class ji extends Sn{}ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=gr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Ac extends Sn{}Ac.prototype.ValueTypeName="color";class Xi extends Sn{}Xi.prototype.ValueTypeName="number";class Ov extends Sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let h=t*a;for(let u=h+a;h!==u;h+=4)ti.slerpFlat(r,0,s,h-a,s,h,l);return r}}class pi extends Sn{InterpolantFactoryMethodLinear(t){return new Ov(this.times,this.values,this.getValueSize(),t)}}pi.prototype.ValueTypeName="quaternion";pi.prototype.DefaultInterpolation=ki;pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends Sn{}Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=gr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class qi extends Sn{}qi.prototype.ValueTypeName="vector";class zv{constructor(t="",e=-1,n=[],i=Ah){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,a=n.length;s!==a;++s)e.push(Hv(n[s]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,s=[];for(let a=0;a<r;a++){let l=[],h=[];l.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const u=Dv(l);l=Cl(l,1,u),h=Cl(h,1,u),!i&&l[0]===0&&(l.push(r),h.push(h[0])),s.push(new Xi(".morphTargetInfluences["+e[a].name+"]",l,h).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const h=t[a],u=h.name.match(r);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const p=[],m=[];wc(f,p,m,v),p.length!==0&&g.push(new c(d,p,m))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let l=t.length||-1;const h=t.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let y=0;y!==d[v].morphTargets.length;++y){const _=d[v];p.push(_.time),m.push(_.morphTarget===g?1:0)}i.push(new Xi(".morphTargetInfluence["+g+"]",p,m))}l=f.length*s}else{const f=".bones["+e[c].name+"]";n(qi,f+".position",d,"pos",i),n(pi,f+".quaternion",d,"rot",i),n(qi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vv(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return Ac;case"quaternion":return pi;case"bool":case"boolean":return ji;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Hv(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Vv(o.type);if(o.times===void 0){const e=[],n=[];wc(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Kn={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class kv{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],v=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const Gv=new kv;class Ji{constructor(t){this.manager=t!==void 0?t:Gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class Wv extends Error{constructor(t,e){super(t),this.response=e}}class Tc extends Ji{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Kn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Pn[t]!==void 0){Pn[t].push({onLoad:e,onProgress:n,onError:i});return}Pn[t]=[],Pn[t].push({onLoad:e,onProgress:n,onError:i});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Pn[t],c=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){c.read().then(({done:_,value:x})=>{if(_)m.close();else{g+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let C=0,L=u.length;C<L;C++){const I=u[C];I.onProgress&&I.onProgress(A)}m.enqueue(x),y()}})}}});return new Response(p)}else throw new Wv(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(v=>f.decode(v))}}}).then(h=>{Kn.add(t,h);const u=Pn[t];delete Pn[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=Pn[t];if(u===void 0)throw this.manager.itemError(t),h;delete Pn[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Xv extends Ji{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Kn.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const a=_r("img");function l(){u(),Kn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(c){u(),i&&i(c),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Fo extends Ji{constructor(t){super(t)}load(t,e,n,i){const r=new Be,s=new Xv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class vs extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const to=new ee,Pl=new W,Ll=new W;class Bo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pl),Ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ll),e.updateMatrixWorld(),to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qv extends Bo{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Gi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Oo extends vs{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new qv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Il=new ee,ar=new W,eo=new W;class Yv extends Bo{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(ar),eo.copy(n.position),eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(eo),n.updateMatrixWorld(),i.makeTranslation(-ar.x,-ar.y,-ar.z),Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}}class Kv extends vs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jv extends Bo{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zv extends vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new jv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jv extends vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class mr{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class $v extends Ji{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Kn.get(t);if(s!==void 0){if(r.manager.itemStart(t),s.then){s.then(h=>{e&&e(h),r.manager.itemEnd(t)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Kn.add(t,h),e&&e(h),r.manager.itemEnd(t),h}).catch(function(h){i&&i(h),Kn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Kn.add(t,l),r.manager.itemStart(t)}}const zo="\\[\\]\\.:\\/",Qv=new RegExp("["+zo+"]","g"),Vo="[^"+zo+"]",tg="[^"+zo.replace("\\.","")+"]",eg=/((?:WC+[\/:])*)/.source.replace("WC",Vo),ng=/(WCOD+)?/.source.replace("WCOD",tg),ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),sg=new RegExp("^"+eg+ng+ig+rg+"$"),og=["material","materials","bones","map"];class ag{constructor(t,e,n){const i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ge{constructor(t,e,n){this.path=e,this.parsedPath=n||ge.parseTrackName(e),this.node=ge.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ge.Composite(t,e,n):new ge(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qv,"")}static parseTrackName(t){const e=sg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ge.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const s=t[i];if(s===void 0){const h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ge.Composite=ag;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lg extends _c{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new rn;i.setAttribute("position",new He(e,3)),i.setAttribute("color",new He(n,3));const r=new Co({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Jt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);function $r(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var bc={exports:{}};(function(o,t){(function(e){o.exports=e()})(function(){return function e(n,i,r){function s(h,u){if(!i[h]){if(!n[h]){var c=typeof $r=="function"&&$r;if(!u&&c)return c(h,!0);if(a)return a(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var v=n[h][1][f];return s(v||f)},d,d.exports,e,n,i,r)}return i[h].exports}for(var a=typeof $r=="function"&&$r,l=0;l<r.length;l++)s(r[l]);return s}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var a=new r;s.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),v.copy(f);for(var p=1;p<h.length;p++){var m=h[p];g&&(g.vmult(m,a),m=a),m.x>v.x&&(v.x=m.x),m.x<f.x&&(f.x=m.x),m.y>v.y&&(v.y=m.y),m.y<f.y&&(f.y=m.y),m.z>v.z&&(v.z=m.z),m.z<f.z&&(f.z=m.z)}return u&&(u.vadd(f,f),u.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},s.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},s.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},s.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},s.prototype.getCorners=function(h,u,c,d,f,v,g,p){var m=this.lowerBound,y=this.upperBound;h.copy(m),u.set(y.x,m.y,m.z),c.set(y.x,y.y,m.z),d.set(m.x,y.y,y.z),f.set(y.x,m.y,m.z),v.set(m.x,y.y,m.z),g.set(m.x,m.y,y.z),p.copy(y)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],y=c[6],_=c[7];this.getCorners(d,f,v,g,p,m,y,_);for(var x=0;x!==8;x++){var A=c[x];h.pointToLocal(A,A)}return u.setFromPoints(c)},s.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],y=c[6],_=c[7];this.getCorners(d,f,v,g,p,m,y,_);for(var x=0;x!==8;x++){var A=c[x];h.pointToWorld(A,A)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,a){if(s=s.index,a=a.index,a>s){var l=a;a=s,s=l}return this.matrix[(s*(s+1)>>1)+a-1]},r.prototype.set=function(s,a,l){if(s=s.index,a=a.index,a>s){var h=a;a=s,s=h}this.matrix[(s*(s+1)>>1)+a-1]=l?1:0},r.prototype.reset=function(){for(var s=0,a=this.matrix.length;s!==a;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,i){var r=e("../objects/Body"),s=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,p,m){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,p){return!(!(g.collisionFilterGroup&p.collisionFilterMask)||!(p.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===r.SLEEPING)&&(p.type&h||p.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,p,m,y){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,p,m,y):this.doBoundingSphereBroadphase(g,p,m,y)};var u=new s;new s,new a,new s,l.prototype.doBoundingSphereBroadphase=function(g,p,m,y){var _=u;p.position.vsub(g.position,_);var x=Math.pow(g.boundingRadius+p.boundingRadius,2),A=_.norm2();A<x&&(m.push(g),y.push(p))},l.prototype.doBoundingBoxBroadphase=function(g,p,m,y){g.aabbNeedsUpdate&&g.computeAABB(),p.aabbNeedsUpdate&&p.computeAABB(),g.aabb.overlaps(p.aabb)&&(m.push(g),y.push(p))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,p){for(var m=c,y=d,_=f,x=g.length,A=0;A!==x;A++)y[A]=g[A],_[A]=p[A];g.length=0,p.length=0;for(var A=0;A!==x;A++){var C=y[A].id,L=_[A].id,I=C<L?C+","+L:L+","+C;m[I]=A,m.keys.push(I)}for(var A=0;A!==m.keys.length;A++){var I=m.keys.pop(),S=m[I];g.push(y[S]),p.push(_[S]),delete m[I]}},l.prototype.setWorld=function(g){};var v=new s;l.boundingSphereCheck=function(g,p){var m=v;return g.position.vsub(p.position,m),Math.pow(g.shape.boundingSphereRadius+p.shape.boundingSphereRadius,2)>m.norm2()},l.prototype.aabbQuery=function(g,p,m){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=l;var r=e("./Broadphase"),s=e("../math/Vec3"),a=e("../shapes/Shape");function l(u,c,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=c||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var p=0;p<g;p++)this.bins[p]=[],this.binLengths[p]=0}l.prototype=new r,l.prototype.constructor=l;var h=new s;new s,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),v=u.bodies,$=this.aabbMax,G=this.aabbMin,g=this.nx,p=this.ny,m=this.nz,y=p*m,_=m,x=1,A=$.x,C=$.y,L=$.z,I=G.x,S=G.y,M=G.z,b=g/(A-I),U=p/(C-S),P=m/(L-M),X=(A-I)/g,q=(C-S)/p,ot=(L-M)/m,k=Math.sqrt(X*X+q*q+ot*ot)*.5,N=a.types,J=N.SPHERE,K=N.PLANE;N.BOX,N.COMPOUND,N.CONVEXPOLYHEDRON;for(var V=this.bins,tt=this.binLengths,H=this.bins.length,T=0;T!==H;T++)tt[T]=0;var R=Math.ceil,G=Math.min,$=Math.max;function nt(Vt,kt,Qt,$t,te,re,ce){var Gt=(Vt-I)*b|0,O=(kt-S)*U|0,St=(Qt-M)*P|0,Et=R(($t-I)*b),Wt=R((te-S)*U),Ht=R((re-M)*P);Gt<0?Gt=0:Gt>=g&&(Gt=g-1),O<0?O=0:O>=p&&(O=p-1),St<0?St=0:St>=m&&(St=m-1),Et<0?Et=0:Et>=g&&(Et=g-1),Wt<0?Wt=0:Wt>=p&&(Wt=p-1),Ht<0?Ht=0:Ht>=m&&(Ht=m-1),Gt*=y,O*=_,St*=x,Et*=y,Wt*=_,Ht*=x;for(var oe=Gt;oe<=Et;oe+=y)for(var he=O;he<=Wt;he+=_)for(var de=St;de<=Ht;de+=x){var Te=oe+he+de;V[Te][tt[Te]++]=ce}}for(var T=0;T!==f;T++){var j=v[T],st=j.shape;switch(st.type){case J:var F=j.position.x,_t=j.position.y,dt=j.position.z,xt=st.radius;nt(F-xt,_t-xt,dt-xt,F+xt,_t+xt,dt+xt,j);break;case K:st.worldNormalNeedsUpdate&&st.computeWorldNormal(j.quaternion);var rt=st.worldNormal,ut=I+X*.5-j.position.x,D=S+q*.5-j.position.y,E=M+ot*.5-j.position.z,et=h;et.set(ut,D,E);for(var Q=0,lt=0;Q!==g;Q++,lt+=y,et.y=D,et.x+=X)for(var ht=0,Lt=0;ht!==p;ht++,Lt+=_,et.z=E,et.y+=q)for(var ft=0,Tt=0;ft!==m;ft++,Tt+=x,et.z+=ot)if(et.dot(rt)<k){var Ft=lt+Lt+Tt;V[Ft][tt[Ft]++]=j}break;default:j.aabbNeedsUpdate&&j.computeAABB(),nt(j.aabb.lowerBound.x,j.aabb.lowerBound.y,j.aabb.lowerBound.z,j.aabb.upperBound.x,j.aabb.upperBound.y,j.aabb.upperBound.z,j);break}}for(var T=0;T!==H;T++){var mt=tt[T];if(mt>1)for(var Ct=V[T],Q=0;Q!==mt;Q++)for(var j=Ct[Q],ht=0;ht!==Q;ht++){var Xt=Ct[ht];this.needBroadphaseCollision(j,Xt)&&this.intersectionTest(j,Xt,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=a;var r=e("./Broadphase"),s=e("./AABB");function a(){r.apply(this)}a.prototype=new r,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,v,g,p;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],p=c[v],this.needBroadphaseCollision(g,p)&&this.intersectionTest(g,p,h,u)},new s,a.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,a){if(s=s.id,a=a.id,a>s){var l=a;a=s,s=l}return s+"-"+a in this.matrix},r.prototype.set=function(s,a,l){if(s=s.id,a=a.id,a>s){var h=a;a=s,s=h}l?this.matrix[s+"-"+a]=!0:delete this.matrix[s+"-"+a]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,i){n.exports=c;var r=e("../math/Vec3"),s=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),h=e("../shapes/Shape"),u=e("../collision/AABB");function c(H,T){this.from=H?H.clone():new r,this.to=T?T.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(R){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(H,T){return this.mode=T.mode||c.ANY,this.result=T.result||new l,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,H.broadphase.aabbQuery(H,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;c.pointInTriangle=p;function p(H,T,R,G){G.vsub(T,K),R.vsub(T,v),H.vsub(T,g);var $=K.dot(K),nt=K.dot(v),j=K.dot(g),st=v.dot(v),F=v.dot(g),_t,dt;return(_t=st*j-nt*F)>=0&&(dt=$*F-nt*j)>=0&&_t+dt<$*st-nt*nt}var m=new r,y=new s;c.prototype.intersectBody=function(H,T){T&&(this.result=T,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!H.collisionResponse)&&!(!(this.collisionFilterGroup&H.collisionFilterMask)||!(H.collisionFilterGroup&this.collisionFilterMask)))for(var G=m,$=y,nt=0,j=H.shapes.length;nt<j;nt++){var st=H.shapes[nt];if(!(R&&!st.collisionResponse)&&(H.quaternion.mult(H.shapeOrientations[nt],$),H.quaternion.vmult(H.shapeOffsets[nt],G),G.vadd(H.position,G),this.intersectShape(st,$,G,H),this.result._shouldStop))break}},c.prototype.intersectBodies=function(H,T){T&&(this.result=T,this._updateDirection());for(var R=0,G=H.length;!this.result._shouldStop&&R<G;R++)this.intersectBody(H[R])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(H,T,R,G){var $=this.from,nt=tt($,this._direction,R);if(!(nt>H.boundingSphereRadius)){var j=this[H.type];j&&j.call(this,H,T,R,G)}},new r,new r;var _=new r,x=new r,A=new r,C=new r;new r,new l,c.prototype.intersectBox=function(H,T,R,G){return this.intersectConvex(H.convexPolyhedronRepresentation,T,R,G)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(H,T,R,G){var $=this.from,nt=this.to,j=this._direction,st=new r(0,0,1);T.vmult(st,st);var F=new r;$.vsub(R,F);var _t=F.dot(st);nt.vsub(R,F);var dt=F.dot(st);if(!(_t*dt>0)&&!($.distanceTo(nt)<_t)){var xt=st.dot(j);if(!(Math.abs(xt)<this.precision)){var rt=new r,ut=new r,D=new r;$.vsub(R,rt);var E=-st.dot(rt)/xt;j.scale(E,ut),$.vadd(ut,D),this.reportIntersection(st,D,H,G,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(H){var T=this.to,R=this.from;H.lowerBound.x=Math.min(T.x,R.x),H.lowerBound.y=Math.min(T.y,R.y),H.lowerBound.z=Math.min(T.z,R.z),H.upperBound.x=Math.max(T.x,R.x),H.upperBound.y=Math.max(T.y,R.y),H.upperBound.z=Math.max(T.z,R.z)};var L={faceList:[0]};c.prototype.intersectHeightfield=function(H,T,R,G){H.data,H.elementSize;var $=new r,nt=new c(this.from,this.to);a.pointToLocalFrame(R,T,nt.from,nt.from),a.pointToLocalFrame(R,T,nt.to,nt.to);var j=[],st=null,F=null,_t=null,dt=null,xt=H.getIndexOfPosition(nt.from.x,nt.from.y,j,!1);if(xt&&(st=j[0],F=j[1],_t=j[0],dt=j[1]),xt=H.getIndexOfPosition(nt.to.x,nt.to.y,j,!1),xt&&((st===null||j[0]<st)&&(st=j[0]),(_t===null||j[0]>_t)&&(_t=j[0]),(F===null||j[1]<F)&&(F=j[1]),(dt===null||j[1]>dt)&&(dt=j[1])),st!==null){var rt=[];H.getRectMinMax(st,F,_t,dt,rt),rt[0],rt[1];for(var ut=st;ut<=_t;ut++)for(var D=F;D<=dt;D++){if(this.result._shouldStop||(H.getConvexTrianglePillar(ut,D,!1),a.pointToWorldFrame(R,T,H.pillarOffset,$),this.intersectConvex(H.pillarConvex,T,$,G,L),this.result._shouldStop))return;H.getConvexTrianglePillar(ut,D,!0),a.pointToWorldFrame(R,T,H.pillarOffset,$),this.intersectConvex(H.pillarConvex,T,$,G,L)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var I=new r,S=new r;c.prototype.intersectSphere=function(H,T,R,G){var $=this.from,nt=this.to,j=H.radius,st=Math.pow(nt.x-$.x,2)+Math.pow(nt.y-$.y,2)+Math.pow(nt.z-$.z,2),F=2*((nt.x-$.x)*($.x-R.x)+(nt.y-$.y)*($.y-R.y)+(nt.z-$.z)*($.z-R.z)),_t=Math.pow($.x-R.x,2)+Math.pow($.y-R.y,2)+Math.pow($.z-R.z,2)-Math.pow(j,2),dt=Math.pow(F,2)-4*st*_t,xt=I,rt=S;if(!(dt<0))if(dt===0)$.lerp(nt,dt,xt),xt.vsub(R,rt),rt.normalize(),this.reportIntersection(rt,xt,H,G,-1);else{var ut=(-F-Math.sqrt(dt))/(2*st),D=(-F+Math.sqrt(dt))/(2*st);if(ut>=0&&ut<=1&&($.lerp(nt,ut,xt),xt.vsub(R,rt),rt.normalize(),this.reportIntersection(rt,xt,H,G,-1)),this.result._shouldStop)return;D>=0&&D<=1&&($.lerp(nt,D,xt),xt.vsub(R,rt),rt.normalize(),this.reportIntersection(rt,xt,H,G,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var M=new r;new r,new r;var b=new r;c.prototype.intersectConvex=function(T,R,G,$,nt){for(var j=M,st=b,F=nt&&nt.faceList||null,_t=T.faces,dt=T.vertices,xt=T.faceNormals,rt=this._direction,ut=this.from,D=this.to,E=ut.distanceTo(D),et=F?F.length:_t.length,Q=this.result,lt=0;!Q._shouldStop&&lt<et;lt++){var ht=F?F[lt]:lt,Lt=_t[ht],ft=xt[ht],Tt=R,Ft=G;st.copy(dt[Lt[0]]),Tt.vmult(st,st),st.vadd(Ft,st),st.vsub(ut,st),Tt.vmult(ft,j);var mt=rt.dot(j);if(!(Math.abs(mt)<this.precision)){var Ct=j.dot(st)/mt;if(!(Ct<0)){rt.mult(Ct,_),_.vadd(ut,_),x.copy(dt[Lt[0]]),Tt.vmult(x,x),Ft.vadd(x,x);for(var Xt=1;!Q._shouldStop&&Xt<Lt.length-1;Xt++){A.copy(dt[Lt[Xt]]),C.copy(dt[Lt[Xt+1]]),Tt.vmult(A,A),Tt.vmult(C,C),Ft.vadd(A,A),Ft.vadd(C,C);var Vt=_.distanceTo(ut);!(p(_,x,A,C)||p(_,A,x,C))||Vt>E||this.reportIntersection(j,_,T,$,ht)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var U=new r,P=new r,X=new r,q=new r,ot=new r,k=new r;new u;var N=[],J=new a;c.prototype.intersectTrimesh=function(T,R,G,$,nt){var j=U,st=N,F=J,_t=b,dt=P,xt=X,rt=q,ut=k,D=ot;nt&&nt.faceList;var E=T.indices;T.vertices,T.faceNormals;var et=this.from,Q=this.to,lt=this._direction;F.position.copy(G),F.quaternion.copy(R),a.vectorToLocalFrame(G,R,lt,dt),a.pointToLocalFrame(G,R,et,xt),a.pointToLocalFrame(G,R,Q,rt);var ht=xt.distanceSquared(rt);T.tree.rayQuery(this,F,st);for(var Lt=0,ft=st.length;!this.result._shouldStop&&Lt!==ft;Lt++){var Tt=st[Lt];T.getNormal(Tt,j),T.getVertex(E[Tt*3],x),x.vsub(xt,_t);var Ft=dt.dot(j),mt=j.dot(_t)/Ft;if(!(mt<0)){dt.scale(mt,_),_.vadd(xt,_),T.getVertex(E[Tt*3+1],A),T.getVertex(E[Tt*3+2],C);var Ct=_.distanceSquared(xt);!(p(_,A,x,C)||p(_,x,A,C))||Ct>ht||(a.vectorToWorldFrame(R,j,D),a.pointToWorldFrame(G,R,_,ut),this.reportIntersection(D,ut,T,$,Tt))}}st.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(H,T,R,G,$){var nt=this.from,j=this.to,st=nt.distanceTo(T),F=this.result;if(!(this.skipBackfaces&&H.dot(this._direction)>0))switch(F.hitFaceIndex=typeof $<"u"?$:-1,this.mode){case c.ALL:this.hasHit=!0,F.set(nt,j,H,T,R,G,st),F.hasHit=!0,this.callback(F);break;case c.CLOSEST:(st<F.distance||!F.hasHit)&&(this.hasHit=!0,F.hasHit=!0,F.set(nt,j,H,T,R,G,st));break;case c.ANY:this.hasHit=!0,F.hasHit=!0,F.set(nt,j,H,T,R,G,st),F._shouldStop=!0;break}};var K=new r,V=new r;function tt(H,T,R){R.vsub(H,K);var G=K.dot(T);T.mult(G,V),V.vadd(H,V);var $=R.distanceTo(V);return $}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(a,l,h,u,c,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(a){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},a&&this.setWorld(a)}s.prototype=new r,s.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},s.insertionSortX=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=u}return a},s.insertionSortY=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=u}return a},s.insertionSortZ=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=u}return a},s.prototype.collisionPairs=function(a,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(v=f+1;v<c;v++){var p=u[v];if(this.needBroadphaseCollision(g,p)){if(!s.checkBounds(g,p,d))break;this.intersectionTest(g,p,l,h)}}}},s.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,h=a.length,u=0;u!==h;u++){var c=a[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?s.insertionSortX(a):l===1?s.insertionSortY(a):l===2&&s.insertionSortZ(a)},s.checkBounds=function(a,l,h){var u,c;h===0?(u=a.position.x,c=l.position.x):h===1?(u=a.position.y,c=l.position.y):h===2&&(u=a.position.z,c=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,v=u+d,g=c-f;return g<v},s.prototype.autoDetectAxis=function(){for(var a=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,p=0;p!==v;p++){var m=f[p],y=m.position.x;a+=y,l+=y*y;var _=m.position.y;h+=_,u+=_*_;var x=m.position.z;c+=x,d+=x*x}var A=l-a*a*g,C=u-h*h*g,L=d-c*c*g;A>C?A>L?this.axisIndex=0:this.axisIndex=2:C>L?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(a,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,u,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var p=this.coneEquation=new s(u,c,d),m=this.twistEquation=new a(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,p.maxForce=0,p.minForce=-f,m.maxForce=0,m.minForce=-f,this.equations.push(p,m)}h.prototype=new r,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=s;var r=e("../utils/Utils");function s(a,l,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},s.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=a;var r=e("./Constraint"),s=e("../equations/ContactEquation");function a(l,h,u,c){r.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new s(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new r,a.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,p=v.pivotA?v.pivotA.clone():new l,m=v.pivotB?v.pivotB.clone():new l;r.call(this,d,p,f,m,g);var y=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);y.normalize();var _=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);_.normalize();var x=this.rotationalEquation1=new s(d,f,v),A=this.rotationalEquation2=new s(d,f,v),C=this.motorEquation=new a(d,f,g);C.enabled=!1,this.equations.push(x,A,C)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,p=this.rotationalEquation2,m=u,y=c,_=this.axisA,x=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(_,m),f.quaternion.vmult(x,y),m.tangents(g.axisA,p.axisA),g.axisB.copy(y),p.axisB.copy(y),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=l,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new a,v=new a,g=new a;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,f),r.call(this,h,f,u,v,d);var p=this.rotationalEquation1=new s(h,u,c),m=this.rotationalEquation2=new s(h,u,c),y=this.rotationalEquation3=new s(h,u,c);this.equations.push(p,m,y)}l.prototype=new r,l.constructor=l,new a,new a,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(a.UNIT_X,c.axisA),u.vectorToWorldFrame(a.UNIT_Y,c.axisB),h.vectorToWorldFrame(a.UNIT_Y,d.axisA),u.vectorToWorldFrame(a.UNIT_Z,d.axisB),h.vectorToWorldFrame(a.UNIT_Z,f.axisA),u.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=l;var r=e("./Constraint"),s=e("../equations/ContactEquation"),a=e("../math/Vec3");function l(h,u,c,d,f){r.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new a,this.pivotB=d?d.clone():new a;var v=this.equationX=new s(h,c),g=this.equationY=new s(h,c),p=this.equationZ=new s(h,c);this.equations.push(v,g,p),v.minForce=g.minForce=p.minForce=-f,v.maxForce=g.maxForce=p.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),p.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=h,m=this.jacobianElementA,y=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),y.rotational.copy(g);var _=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),A=this.computeGiMf(),C=-_*c-x*d-u*A;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=a;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function a(p,m,y){y=typeof y<"u"?y:1e6,r.call(this,p,m,0,y),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s,u=new s;a.prototype.computeB=function(p){var m=this.a,y=this.b,_=this.bi,x=this.bj,A=this.ri,C=this.rj,L=l,I=h,S=_.velocity,M=_.angularVelocity;_.force,_.torque;var b=x.velocity,U=x.angularVelocity;x.force,x.torque;var P=u,X=this.jacobianElementA,q=this.jacobianElementB,ot=this.ni;A.cross(ot,L),C.cross(ot,I),ot.negate(X.spatial),L.negate(X.rotational),q.spatial.copy(ot),q.rotational.copy(I),P.copy(x.position),P.vadd(C,P),P.vsub(_.position,P),P.vsub(A,P);var k=ot.dot(P),N=this.restitution+1,J=N*b.dot(ot)-N*S.dot(ot)+U.dot(I)-M.dot(L),K=this.computeGiMf(),V=-k*m-J*y-p*K;return V};var c=new s,d=new s,f=new s,v=new s,g=new s;a.prototype.getImpactVelocityAlongNormal=function(){var p=c,m=d,y=f,_=v,x=g;return this.bi.position.vadd(this.ri,y),this.bj.position.vadd(this.rj,_),this.bi.getVelocityAtWorldPoint(y,p),this.bj.getVelocityAtWorldPoint(_,m),p.vsub(m,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=a;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function a(g,p,m,y){this.id=a.id++,this.minForce=typeof m>"u"?-1e6:m,this.maxForce=typeof y>"u"?1e6:y,this.bi=g,this.bj=p,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,p,m){var y=p,_=g,x=m;this.a=4/(x*(1+4*y)),this.b=4*y/(1+4*y),this.eps=4/(x*x*_*(1+4*y))},a.prototype.computeB=function(g,p,m){var y=this.computeGW(),_=this.computeGq(),x=this.computeGiMf();return-_*g-y*p-x*m},a.prototype.computeGq=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,y=this.bj,_=m.position,x=y.position;return g.spatial.dot(_)+p.spatial.dot(x)};var l=new s;a.prototype.computeGW=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,y=this.bj,_=m.velocity,x=y.velocity,A=m.angularVelocity||l,C=y.angularVelocity||l;return g.multiplyVectors(_,A)+p.multiplyVectors(x,C)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,y=this.bj,_=m.vlambda,x=y.vlambda,A=m.wlambda||l,C=y.wlambda||l;return g.multiplyVectors(_,A)+p.multiplyVectors(x,C)};var h=new s,u=new s,c=new s,d=new s;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,y=this.bj,_=m.force,x=m.torque,A=y.force,C=y.torque,L=m.invMassSolve,I=y.invMassSolve;return m.invInertiaWorldSolve?m.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),y.invInertiaWorldSolve?y.invInertiaWorldSolve.vmult(C,d):d.set(0,0,0),_.mult(L,h),A.mult(I,u),g.multiplyVectors(h,c)+p.multiplyVectors(u,d)};var f=new s;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,y=this.bj,_=m.invMassSolve,x=y.invMassSolve,A=m.invInertiaWorldSolve,C=y.invInertiaWorldSolve,L=_+x;return A&&(A.vmult(g.rotational,f),L+=f.dot(g.rotational)),C&&(C.vmult(p.rotational,f),L+=f.dot(p.rotational)),L};var v=new s;new s,new s,new s,new s,new s,a.prototype.addToWlambda=function(g){var p=this.jacobianElementA,m=this.jacobianElementB,y=this.bi,_=this.bj,x=v;p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda)),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=a;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function a(u,c,d){r.call(this,u,c,-d,d),this.ri=new s,this.rj=new s,this.t=new s}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s;a.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=h,p=this.t;d.cross(p,v),f.cross(p,g);var m=this.jacobianElementA,y=this.jacobianElementB;p.negate(m.spatial),v.negate(m.rotational),y.spatial.copy(p),y.rotational.copy(g);var _=this.computeGW(),x=this.computeGiMf(),A=-_*c-u*x;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=h,m=this.jacobianElementA,y=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),y.rotational.copy(g);var _=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),A=this.computeGiMf(),C=-_*c-x*d-u*A;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(l,h,u){u=typeof u<"u"?u:1e6,s.call(this,l,h,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),p=-v*h-l*g;return p}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var r=e("../utils/Utils");n.exports=s;function s(a,l,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[a,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=r;function r(s){var a="";s=s||{},typeof s=="string"?(a=s,s={}):typeof s=="object"&&(a=""),this.name=a,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},s.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},s.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},s.prototype.getTrace=function(l){var l=l||new r,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},s.prototype.vmult=function(a,l){l=l||new r;var h=this.elements,u=a.x,c=a.y,d=a.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},s.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},s.prototype.mmult=function(a,l){for(var h=l||new s,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=a.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},s.prototype.scale=function(a,l){l=l||new s;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=a.x*h[3*c+0],u[3*c+1]=a.y*h[3*c+1],u[3*c+2]=a.z*h[3*c+2];return l},s.prototype.solve=function(a,l){l=l||new r;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=a.x,c[3+4*1]=a.y,c[3+4*2]=a.z;var v=3,g=v,p,m=4,y;do{if(d=g-v,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){p=m;do y=m-p,c[y+u*d]+=c[y+u*f];while(--p);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var _=c[d+u*f]/c[d+u*d];p=m;do y=m-p,c[y+u*f]=y<=d?0:c[y+u*f]-c[y+u*d]*_;while(--p)}}while(--v);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(a,l,h){if(h===void 0)return this.elements[l+3*a];this.elements[l+3*a]=h},s.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},s.prototype.toString=function(){for(var a="",l=",",h=0;h<9;h++)a+=this.elements[h]+l;return a},s.prototype.reverse=function(a){a=a||new s;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,v=f,g,p=h,m;do{if(c=v-f,u[c+h*c]===0){for(d=c+1;d<v;d++)if(u[c+h*d]!==0){g=p;do m=p-g,u[m+h*c]+=u[m+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<v;d++){var y=u[c+h*d]/u[c+h*c];g=p;do m=p-g,u[m+h*d]=m<=c?0:u[m+h*d]-u[m+h*c]*y;while(--g)}}while(--f);c=2;do{d=c-1;do{var y=u[c+h*d]/u[c+h*c];g=h;do m=h-g,u[m+h*d]=u[m+h*d]-u[m+h*c]*y;while(--g)}while(d--)}while(--c);c=2;do{var y=1/u[c+h*c];g=h;do m=h-g,u[m+h*c]=u[m+h*c]*y;while(--g)}while(c--);c=2;do{d=2;do{if(m=u[l+d+h*c],isNaN(m)||m===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,m)}while(d--)}while(c--);return a},s.prototype.setRotationFromQuaternion=function(a){var l=a.x,h=a.y,u=a.z,c=a.w,d=l+l,f=h+h,v=u+u,g=l*d,p=l*f,m=l*v,y=h*f,_=h*v,x=u*v,A=c*d,C=c*f,L=c*v,I=this.elements;return I[3*0+0]=1-(y+x),I[3*0+1]=p-L,I[3*0+2]=m+C,I[3*1+0]=p+L,I[3*1+1]=1-(g+x),I[3*1+2]=_-A,I[3*2+0]=m-C,I[3*2+1]=_+A,I[3*2+2]=1-(g+y),this},s.prototype.transpose=function(a){a=a||new s;for(var l=a.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return a}},{"./Vec3":30}],28:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var a=new r,l=new r;s.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=a,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var p=d.cross(f);this.x=p.x,this.y=p.y,this.z=p.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new r,u=new r,c=new r;s.prototype.mult=function(d,f){f=f||new s;var v=this.w,g=h,p=u,m=c;return g.set(this.x,this.y,this.z),p.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(p),g.cross(p,m),f.x=v*p.x+d.w*g.x+m.x,f.y=v*p.y+d.w*g.y+m.y,f.z=v*p.z+d.w*g.z+m.z,f},s.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,p=this.w;d=d||new s,this.conjugate(d);var m=1/(f*f+v*v+g*g+p*p);return d.x*=m,d.y*=m,d.z*=m,d.w*=m,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,p=d.z,m=this.x,y=this.y,_=this.z,x=this.w,A=x*v+y*p-_*g,C=x*g+_*v-m*p,L=x*p+m*g-y*v,I=-m*v-y*g-_*p;return f.x=A*x+I*-m+C*-_-L*-y,f.y=C*x+I*-y+L*-m-A*-_,f.z=L*x+I*-_+A*-y-C*-m,f},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,p,m=this.x,y=this.y,_=this.z,x=this.w;switch(f){case"YZX":var A=m*y+_*x;if(A>.499&&(v=2*Math.atan2(m,x),g=Math.PI/2,p=0),A<-.499&&(v=-2*Math.atan2(m,x),g=-Math.PI/2,p=0),isNaN(v)){var C=m*m,L=y*y,I=_*_;v=Math.atan2(2*y*x-2*m*_,1-2*L-2*I),g=Math.asin(2*A),p=Math.atan2(2*m*x-2*y*_,1-2*C-2*I)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=p},s.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var p=Math.cos(d/2),m=Math.cos(f/2),y=Math.cos(v/2),_=Math.sin(d/2),x=Math.sin(f/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=_*m*y+p*x*A,this.y=p*x*y-_*m*A,this.z=p*m*A+_*x*y,this.w=p*m*y-_*x*A):g==="YXZ"?(this.x=_*m*y+p*x*A,this.y=p*x*y-_*m*A,this.z=p*m*A-_*x*y,this.w=p*m*y+_*x*A):g==="ZXY"?(this.x=_*m*y-p*x*A,this.y=p*x*y+_*m*A,this.z=p*m*A+_*x*y,this.w=p*m*y-_*x*A):g==="ZYX"?(this.x=_*m*y-p*x*A,this.y=p*x*y+_*m*A,this.z=p*m*A-_*x*y,this.w=p*m*y+_*x*A):g==="YZX"?(this.x=_*m*y+p*x*A,this.y=p*x*y+_*m*A,this.z=p*m*A-_*x*y,this.w=p*m*y-_*x*A):g==="XZY"&&(this.x=_*m*y-p*x*A,this.y=p*x*y-_*m*A,this.z=p*m*A+_*x*y,this.w=p*m*y+_*x*A),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var r=e("./Vec3"),s=e("./Quaternion");n.exports=a;function a(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new s,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new s;a.pointToLocalFrame=function(h,u,c,f){var f=f||new r;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(h,u){return a.pointToLocalFrame(this.position,this.quaternion,h,u)},a.pointToWorldFrame=function(h,u,c,f){var f=f||new r;return u.vmult(c,f),f.vadd(h,f),f},a.prototype.pointToWorld=function(h,u){return a.pointToWorldFrame(this.position,this.quaternion,h,u)},a.prototype.vectorToWorldFrame=function(h,c){var c=c||new r;return this.quaternion.vmult(h,c),c},a.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},a.vectorToLocalFrame=function(h,u,c,f){var f=f||new r;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=s;var r=e("./Mat3");function s(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,c){var d=u.x,f=u.y,v=u.z,g=this.x,p=this.y,m=this.z;return c=c||new s,c.x=p*v-m*f,c.y=m*d-g*v,c.z=g*f-p*d,c},s.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(u){u=u||new s;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,u.x=c*v,u.y=d*v,u.z=f*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,p=u.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f))},s.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,p=u.z;return(v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f)},s.prototype.mult=function(u,c){c=c||new s;var d=this.x,f=this.y,v=this.z;return c.x=u*d,c.y=u*f,c.z=u*v,c},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var a=new s,l=new s;s.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=a,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=v+(u.y-v)*c,d.z=g+(u.z-g)*c},s.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new s;s.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=c;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),a=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),u=e("../shapes/Box");function c(b){b=b||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,b.position&&this.position.copy(b.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new s,this.force=new s;var U=typeof b.mass=="number"?b.mass:0;this.mass=U,this.invMass=U>0?1/U:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=U<=0?c.STATIC:c.DYNAMIC,typeof b.type==typeof c.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new s,b.shape&&this.addShape(b.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(b){if(this.allowSleep){var U=this.sleepState,P=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);U===c.AWAKE&&P<X?(this.sleepState=c.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(c.sleepyEvent)):U===c.SLEEPY&&P>X?this.wakeUp():U===c.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(b,P){var P=P||new s;return b.vsub(this.position,P),this.quaternion.conjugate().vmult(P,P),P},c.prototype.vectorToLocalFrame=function(b,P){var P=P||new s;return this.quaternion.conjugate().vmult(b,P),P},c.prototype.pointToWorldFrame=function(b,P){var P=P||new s;return this.quaternion.vmult(b,P),P.vadd(this.position,P),P},c.prototype.vectorToWorldFrame=function(b,P){var P=P||new s;return this.quaternion.vmult(b,P),P};var d=new s,f=new l;c.prototype.addShape=function(b,U,P){var X=new s,q=new l;return U&&X.copy(U),P&&q.copy(P),this.shapes.push(b),this.shapeOffsets.push(X),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var b=this.shapes,U=this.shapeOffsets,P=b.length,X=0,q=0;q!==P;q++){var ot=b[q];ot.updateBoundingSphereRadius();var k=U[q].norm(),N=ot.boundingSphereRadius;k+N>X&&(X=k+N)}this.boundingRadius=X};var v=new h;c.prototype.computeAABB=function(){for(var b=this.shapes,U=this.shapeOffsets,P=this.shapeOrientations,X=b.length,q=d,ot=f,k=this.quaternion,N=this.aabb,J=v,K=0;K!==X;K++){var V=b[K];P[K].mult(k,ot),ot.vmult(U[K],q),q.vadd(this.position,q),V.calculateWorldAABB(q,ot,J.lowerBound,J.upperBound),K===0?N.copy(J):N.extend(J)}this.aabbNeedsUpdate=!1};var g=new a,p=new a;new a,c.prototype.updateInertiaWorld=function(b){var U=this.invInertia;if(!(U.x===U.y&&U.y===U.z&&!b)){var P=g,X=p;P.setRotationFromQuaternion(this.quaternion),P.transpose(X),P.scale(U,P),P.mmult(X,this.invInertiaWorld)}};var m=new s,y=new s;c.prototype.applyForce=function(b,U){if(this.type===c.DYNAMIC){var P=m;U.vsub(this.position,P);var X=y;P.cross(b,X),this.force.vadd(b,this.force),this.torque.vadd(X,this.torque)}};var _=new s,x=new s;c.prototype.applyLocalForce=function(b,U){if(this.type===c.DYNAMIC){var P=_,X=x;this.vectorToWorldFrame(b,P),this.pointToWorldFrame(U,X),this.applyForce(P,X)}};var A=new s,C=new s,L=new s;c.prototype.applyImpulse=function(b,U){if(this.type===c.DYNAMIC){var P=A;U.vsub(this.position,P);var X=C;X.copy(b),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var q=L;P.cross(b,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var I=new s,S=new s;c.prototype.applyLocalImpulse=function(b,U){if(this.type===c.DYNAMIC){var P=I,X=S;this.vectorToWorldFrame(b,P),this.pointToWorldFrame(U,X),this.applyImpulse(P,X)}};var M=new s;c.prototype.updateMassProperties=function(){var b=M;this.invMass=this.mass>0?1/this.mass:0;var U=this.inertia,P=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(b,this.mass,U),this.invInertia.set(U.x>0&&!P?1/U.x:0,U.y>0&&!P?1/U.y:0,U.z>0&&!P?1/U.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(b,U){var P=new s;return b.vsub(this.position,P),this.angularVelocity.cross(P,U),this.velocity.vadd(U,U),U}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=h;function h(k){this.chassisBody=k.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof k.indexRightAxis<"u"?k.indexRightAxis:1,this.indexForwardAxis=typeof k.indexForwardAxis<"u"?k.indexForwardAxis:0,this.indexUpAxis=typeof k.indexUpAxis<"u"?k.indexUpAxis:2}new r,new r,new r;var u=new r,c=new r,d=new r;new a,h.prototype.addWheel=function(k){k=k||{};var N=new l(k),J=this.wheelInfos.length;return this.wheelInfos.push(N),J},h.prototype.setSteeringValue=function(k,N){var J=this.wheelInfos[N];J.steering=k},new r,h.prototype.applyEngineForce=function(k,N){this.wheelInfos[N].engineForce=k},h.prototype.setBrake=function(k,N){this.wheelInfos[N].brake=k},h.prototype.addToWorld=function(k){this.constraints,k.add(this.chassisBody);var N=this;this.preStepCallback=function(){N.updateVehicle(k.dt)},k.addEventListener("preStep",this.preStepCallback),this.world=k},h.prototype.getVehicleAxisWorld=function(k,N){N.set(k===0?1:0,k===1?1:0,k===2?1:0),this.chassisBody.vectorToWorldFrame(N,N)},h.prototype.updateVehicle=function(k){for(var N=this.wheelInfos,J=N.length,K=this.chassisBody,V=0;V<J;V++)this.updateWheelTransform(V);this.currentVehicleSpeedKmHour=3.6*K.velocity.norm();var tt=new r;this.getVehicleAxisWorld(this.indexForwardAxis,tt),tt.dot(K.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var V=0;V<J;V++)this.castRay(N[V]);this.updateSuspension(k);for(var H=new r,T=new r,V=0;V<J;V++){var R=N[V],G=R.suspensionForce;G>R.maxSuspensionForce&&(G=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(G*k,H),R.raycastResult.hitPointWorld.vsub(K.position,T),K.applyImpulse(H,R.raycastResult.hitPointWorld)}this.updateFriction(k);var $=new r,nt=new r,j=new r;for(V=0;V<J;V++){var R=N[V];K.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,j);var st=1;switch(this.indexUpAxis){case 1:st=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var F=nt.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(F,$),nt.vsub($,nt);var _t=nt.dot(j);R.deltaRotation=st*_t*k/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*k),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},h.prototype.updateSuspension=function(k){for(var N=this.chassisBody,J=N.mass,K=this.wheelInfos,V=K.length,tt=0;tt<V;tt++){var H=K[tt];if(H.isInContact){var T,R=H.suspensionRestLength,G=H.suspensionLength,$=R-G;T=H.suspensionStiffness*$*H.clippedInvContactDotSuspension;var nt=H.suspensionRelativeVelocity,j;nt<0?j=H.dampingCompression:j=H.dampingRelaxation,T-=j*nt,H.suspensionForce=T*J,H.suspensionForce<0&&(H.suspensionForce=0)}else H.suspensionForce=0}},h.prototype.removeFromWorld=function(k){this.constraints,k.remove(this.chassisBody),k.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;h.prototype.castRay=function(k){var N=f,J=v;this.updateWheelTransformWorld(k);var K=this.chassisBody,V=-1,tt=k.suspensionRestLength+k.radius;k.directionWorld.scale(tt,N);var H=k.chassisConnectionPointWorld;H.vadd(N,J);var T=k.raycastResult;T.reset();var R=K.collisionResponse;K.collisionResponse=!1,this.world.rayTest(H,J,T),K.collisionResponse=R;var G=T.body;if(k.raycastResult.groundObject=0,G){V=T.distance,k.raycastResult.hitNormalWorld=T.hitNormalWorld,k.isInContact=!0;var $=T.distance;k.suspensionLength=$-k.radius;var nt=k.suspensionRestLength-k.maxSuspensionTravel,j=k.suspensionRestLength+k.maxSuspensionTravel;k.suspensionLength<nt&&(k.suspensionLength=nt),k.suspensionLength>j&&(k.suspensionLength=j,k.raycastResult.reset());var st=k.raycastResult.hitNormalWorld.dot(k.directionWorld),F=new r;K.getVelocityAtWorldPoint(k.raycastResult.hitPointWorld,F);var _t=k.raycastResult.hitNormalWorld.dot(F);if(st>=-.1)k.suspensionRelativeVelocity=0,k.clippedInvContactDotSuspension=1/.1;else{var dt=-1/st;k.suspensionRelativeVelocity=_t*dt,k.clippedInvContactDotSuspension=dt}}else k.suspensionLength=k.suspensionRestLength+0*k.maxSuspensionTravel,k.suspensionRelativeVelocity=0,k.directionWorld.scale(-1,k.raycastResult.hitNormalWorld),k.clippedInvContactDotSuspension=1;return V},h.prototype.updateWheelTransformWorld=function(k){k.isInContact=!1;var N=this.chassisBody;N.pointToWorldFrame(k.chassisConnectionPointLocal,k.chassisConnectionPointWorld),N.vectorToWorldFrame(k.directionLocal,k.directionWorld),N.vectorToWorldFrame(k.axleLocal,k.axleWorld)},h.prototype.updateWheelTransform=function(k){var N=u,J=c,K=d,V=this.wheelInfos[k];this.updateWheelTransformWorld(V),V.directionLocal.scale(-1,N),J.copy(V.axleLocal),N.cross(J,K),K.normalize(),J.normalize();var tt=V.steering,H=new s;H.setFromAxisAngle(N,tt);var T=new s;T.setFromAxisAngle(J,V.rotation);var R=V.worldTransform.quaternion;this.chassisBody.quaternion.mult(H,R),R.mult(T,R),R.normalize();var G=V.worldTransform.position;G.copy(V.directionWorld),G.scale(V.suspensionLength,G),G.vadd(V.chassisConnectionPointWorld,G)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(k){return this.wheelInfos[k].worldTransform};var p=new r,m=[],y=[],_=1;h.prototype.updateFriction=function(k){for(var N=p,J=this.wheelInfos,K=J.length,V=this.chassisBody,tt=y,H=m,T=0;T<K;T++){var R=J[T],G=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,tt[T]||(tt[T]=new r),H[T]||(H[T]=new r)}for(var T=0;T<K;T++){var R=J[T],G=R.raycastResult.body;if(G){var $=H[T],nt=this.getWheelTransformWorld(T);nt.vectorToWorldFrame(g[this.indexRightAxis],$);var j=R.raycastResult.hitNormalWorld,st=$.dot(j);j.scale(st,N),$.vsub(N,$),$.normalize(),j.cross($,tt[T]),tt[T].normalize(),R.sideImpulse=ot(V,R.raycastResult.hitPointWorld,G,R.raycastResult.hitPointWorld,$),R.sideImpulse*=_}}var F=1,_t=.5;this.sliding=!1;for(var T=0;T<K;T++){var R=J[T],G=R.raycastResult.body,dt=0;if(R.slipInfo=1,G){var xt=0,rt=R.brake?R.brake:xt;dt=L(V,G,R.raycastResult.hitPointWorld,tt[T],rt),dt+=R.engineForce*k;var ut=rt/dt;R.slipInfo*=ut}if(R.forwardImpulse=0,R.skidInfo=1,G){R.skidInfo=1;var D=R.suspensionForce*k*R.frictionSlip,E=D,et=D*E;R.forwardImpulse=dt;var Q=R.forwardImpulse*_t,lt=R.sideImpulse*F,ht=Q*Q+lt*lt;if(R.sliding=!1,ht>et){this.sliding=!0,R.sliding=!0;var ut=D/Math.sqrt(ht);R.skidInfo*=ut}}}if(this.sliding)for(var T=0;T<K;T++){var R=J[T];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var T=0;T<K;T++){var R=J[T],Lt=new r;if(Lt.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var ft=new r;tt[T].scale(R.forwardImpulse,ft),V.applyImpulse(ft,Lt)}if(R.sideImpulse!==0){var G=R.raycastResult.body,Tt=new r;Tt.copy(R.raycastResult.hitPointWorld);var Ft=new r;H[T].scale(R.sideImpulse,Ft),V.pointToLocalFrame(Lt,Lt),Lt["xyz"[this.indexUpAxis]]*=R.rollInfluence,V.pointToWorldFrame(Lt,Lt),V.applyImpulse(Ft,Lt),Ft.scale(-1,Ft),G.applyImpulse(Ft,Tt)}}};var x=new r,A=new r,C=new r;function L(k,N,J,K,V){var tt=0,H=J,T=x,R=A,G=C;k.getVelocityAtWorldPoint(H,T),N.getVelocityAtWorldPoint(H,R),T.vsub(R,G);var $=K.dot(G),nt=U(k,J,K),j=U(N,J,K),st=1,F=st/(nt+j);return tt=-$*F,V<tt&&(tt=V),tt<-V&&(tt=-V),tt}var I=new r,S=new r,M=new r,b=new r;function U(k,N,J){var K=I,V=S,tt=M,H=b;return N.vsub(k.position,K),K.cross(J,V),k.invInertiaWorld.vmult(V,H),H.cross(K,tt),k.invMass+J.dot(tt)}var P=new r,X=new r,q=new r;function ot(k,N,J,K,V,st){var H=V.norm2();if(H>1.1)return 0;var T=P,R=X,G=q;k.getVelocityAtWorldPoint(N,T),J.getVelocityAtWorldPoint(K,R),T.vsub(R,G);var $=V.dot(G),nt=.2,j=1/(k.invMass+J.invMass),st=-nt*$*j;return st}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var r=e("./Body"),s=e("../shapes/Sphere"),a=e("../shapes/Box"),l=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new a(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,p=new l;this.chassisBody.pointToWorldFrame(g,p),v.position.set(p.x,p.y,p.z);var m=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(m);var y=new h(this.chassisBody,v,{pivotA:g,axisA:m,pivotB:l.ZERO,axisB:m,collideConnected:!1});return this.constraints.push(y),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],p=Math.cos(f),m=Math.sin(f),y=g.x,_=g.y;this.constraints[v].axisA.set(p*y-m*_,m*y+p*_,0)},u.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},u.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],p=this.wheelBodies[v],m=p.torque;g.scale(f,c),p.vectorToWorldFrame(c,c),m.vadd(c,m)},u.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.add(g[p]);for(var p=0;p<v.length;p++)f.addConstraint(v[p]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},u.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.remove(g[p]);for(var p=0;p<v.length;p++)f.removeConstraint(v[p])};var d=new l;u.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],p=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),p.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new r;s.prototype.getNeighbors=function(v,g){for(var p=this.particles.length,m=v.id,y=this.smoothingRadius*this.smoothingRadius,_=a,x=0;x!==p;x++){var A=this.particles[x];A.position.vsub(v.position,_),m!==A.id&&_.norm2()<y&&g.push(A)}};var l=new r,h=new r,u=new r,c=new r,d=new r,f=new r;s.prototype.update=function(){for(var v=this.particles.length,g=l,p=this.speedOfSound,m=this.eps,y=0;y!==v;y++){var _=this.particles[y],x=this.neighbors[y];x.length=0,this.getNeighbors(_,x),x.push(this.particles[y]);for(var A=x.length,C=0,L=0;L!==A;L++){_.position.vsub(x[L].position,g);var I=g.norm(),S=this.w(I);C+=x[L].mass*S}this.densities[y]=C,this.pressures[y]=p*p*(this.densities[y]-this.density)}for(var M=h,b=u,U=c,P=d,X=f,y=0;y!==v;y++){var q=this.particles[y];M.set(0,0,0),b.set(0,0,0);for(var ot,k,x=this.neighbors[y],A=x.length,L=0;L!==A;L++){var N=x[L];q.position.vsub(N.position,P);var J=P.norm();ot=-N.mass*(this.pressures[y]/(this.densities[y]*this.densities[y]+m)+this.pressures[L]/(this.densities[L]*this.densities[L]+m)),this.gradw(P,U),U.mult(ot,U),M.vadd(U,M),N.velocity.vsub(q.velocity,X),X.mult(1/(1e-4+this.densities[y]*this.densities[L])*this.viscosity*N.mass,X),k=this.nablaw(J),X.mult(k,X),b.vadd(X,b)}b.mult(q.mass,b),M.mult(q.mass,M),q.force.vadd(b,q.force),q.force.vadd(M,q.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var p=v.norm(),m=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(m,9))*Math.pow(m*m-p*p,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,p=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return p}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(y,_,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=y,this.bodyB=_,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}s.prototype.setWorldAnchorA=function(y){this.bodyA.pointToLocalFrame(y,this.localAnchorA)},s.prototype.setWorldAnchorB=function(y){this.bodyB.pointToLocalFrame(y,this.localAnchorB)},s.prototype.getWorldAnchorA=function(y){this.bodyA.pointToWorldFrame(this.localAnchorA,y)},s.prototype.getWorldAnchorB=function(y){this.bodyB.pointToWorldFrame(this.localAnchorB,y)};var a=new r,l=new r,h=new r,u=new r,c=new r,d=new r,f=new r,v=new r,g=new r,p=new r,m=new r;s.prototype.applyForce=function(){var y=this.stiffness,_=this.damping,x=this.restLength,A=this.bodyA,C=this.bodyB,L=a,I=l,S=h,M=u,b=m,U=c,P=d,X=f,q=v,ot=g,k=p;this.getWorldAnchorA(U),this.getWorldAnchorB(P),U.vsub(A.position,X),P.vsub(C.position,q),P.vsub(U,L);var N=L.norm();I.copy(L),I.normalize(),C.velocity.vsub(A.velocity,S),C.angularVelocity.cross(q,b),S.vadd(b,S),A.angularVelocity.cross(X,b),S.vsub(b,S),I.mult(-y*(N-x)-_*S.dot(I),M),A.force.vsub(M,A.force),C.force.vadd(M,C.force),X.cross(M,ot),q.cross(M,k),A.torque.vsub(ot,A.torque),C.torque.vadd(k,C.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var r=e("../math/Vec3"),s=e("../math/Transform"),a=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new s,this.isInContact=!1}var c=new r,u=new r,c=new r;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var p=-1/v;this.suspensionRelativeVelocity=g*p,this.clippedInvContactDotSuspension=p}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3"),a=e("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=s,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],p=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var m=new a(g,p);this.convexPolyhedronRepresentation=m,m.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new s,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new s;new s,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],p=0;p<g.length;p++)h.set(g[p][0],g[p][1],g[p][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var p=u[0];d.vmult(p,p),c.vadd(p,p),v.copy(p),f.copy(p);for(var m=1;m<8;m++){var p=u[m];d.vmult(p,p),c.vadd(p,p);var y=p.x,_=p.y,x=p.z;y>v.x&&(v.x=y),_>v.y&&(v.y=_),x>v.z&&(v.z=x),y<f.x&&(f.x=y),_<f.y&&(f.y=_),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function l(V,tt,H){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=V||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=tt||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=H?H.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var h=new s;l.prototype.computeEdges=function(){var V=this.faces,tt=this.vertices;tt.length;var H=this.uniqueEdges;H.length=0;for(var T=h,R=0;R!==V.length;R++)for(var G=V[R],$=G.length,nt=0;nt!==$;nt++){var j=(nt+1)%$;tt[G[nt]].vsub(tt[G[j]],T),T.normalize();for(var st=!1,F=0;F!==H.length;F++)if(H[F].almostEquals(T)||H[F].almostEquals(T)){st=!0;break}st||H.push(T.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var V=0;V<this.faces.length;V++){for(var tt=0;tt<this.faces[V].length;tt++)if(!this.vertices[this.faces[V][tt]])throw new Error("Vertex "+this.faces[V][tt]+" not found!");var H=this.faceNormals[V]||new s;this.getFaceNormal(V,H),H.negate(H),this.faceNormals[V]=H;var T=this.vertices[this.faces[V][0]];if(H.dot(T)<0){console.error(".faceNormals["+V+"] = Vec3("+H.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var tt=0;tt<this.faces[V].length;tt++)console.warn(".vertices["+this.faces[V][tt]+"] = Vec3("+this.vertices[this.faces[V][tt]].toString()+")")}}};var u=new s,c=new s;l.computeNormal=function(V,tt,H,T){tt.vsub(V,c),H.vsub(tt,u),u.cross(c,T),T.isZero()||T.normalize()},l.prototype.getFaceNormal=function(V,tt){var H=this.faces[V],T=this.vertices[H[0]],R=this.vertices[H[1]],G=this.vertices[H[2]];return l.computeNormal(T,R,G,tt)};var d=new s;l.prototype.clipAgainstHull=function(V,tt,H,T,R,G,$,nt,j){for(var st=d,F=-1,_t=-Number.MAX_VALUE,dt=0;dt<H.faces.length;dt++){st.copy(H.faceNormals[dt]),R.vmult(st,st);var xt=st.dot(G);xt>_t&&(_t=xt,F=dt)}for(var rt=[],ut=H.faces[F],D=ut.length,E=0;E<D;E++){var et=H.vertices[ut[E]],Q=new s;Q.copy(et),R.vmult(Q,Q),T.vadd(Q,Q),rt.push(Q)}F>=0&&this.clipFaceAgainstHull(G,V,tt,rt,$,nt,j)};var f=new s,v=new s,g=new s,p=new s,m=new s,y=new s;l.prototype.findSeparatingAxis=function(V,tt,H,T,R,G,$,nt){var j=f,st=v,F=g,_t=p,dt=m,xt=y,rt=Number.MAX_VALUE,ut=this;if(ut.uniqueAxes)for(var E=0;E!==ut.uniqueAxes.length;E++){H.vmult(ut.uniqueAxes[E],j);var Q=ut.testSepAxis(j,V,tt,H,T,R);if(Q===!1)return!1;Q<rt&&(rt=Q,G.copy(j))}else for(var D=$?$.length:ut.faces.length,E=0;E<D;E++){var et=$?$[E]:E;j.copy(ut.faceNormals[et]),H.vmult(j,j);var Q=ut.testSepAxis(j,V,tt,H,T,R);if(Q===!1)return!1;Q<rt&&(rt=Q,G.copy(j))}if(V.uniqueAxes)for(var E=0;E!==V.uniqueAxes.length;E++){R.vmult(V.uniqueAxes[E],st);var Q=ut.testSepAxis(st,V,tt,H,T,R);if(Q===!1)return!1;Q<rt&&(rt=Q,G.copy(st))}else for(var lt=nt?nt.length:V.faces.length,E=0;E<lt;E++){var et=nt?nt[E]:E;st.copy(V.faceNormals[et]),R.vmult(st,st);var Q=ut.testSepAxis(st,V,tt,H,T,R);if(Q===!1)return!1;Q<rt&&(rt=Q,G.copy(st))}for(var ht=0;ht!==ut.uniqueEdges.length;ht++){H.vmult(ut.uniqueEdges[ht],_t);for(var Lt=0;Lt!==V.uniqueEdges.length;Lt++)if(R.vmult(V.uniqueEdges[Lt],dt),_t.cross(dt,xt),!xt.almostZero()){xt.normalize();var ft=ut.testSepAxis(xt,V,tt,H,T,R);if(ft===!1)return!1;ft<rt&&(rt=ft,G.copy(xt))}}return T.vsub(tt,F),F.dot(G)>0&&G.negate(G),!0};var _=[],x=[];l.prototype.testSepAxis=function(V,tt,H,T,R,G){var $=this;l.project($,V,H,T,_),l.project(tt,V,R,G,x);var nt=_[0],j=_[1],st=x[0],F=x[1],_t=nt-F,dt=st-j,xt=_t<dt?_t:dt;return xt};var A=new s,C=new s;l.prototype.calculateLocalInertia=function(V,tt){this.computeLocalAABB(A,C);var H=C.x-A.x,T=C.y-A.y,R=C.z-A.z;tt.x=1/12*V*(2*T*2*T+2*R*2*R),tt.y=1/12*V*(2*H*2*H+2*R*2*R),tt.z=1/12*V*(2*T*2*T+2*H*2*H)},l.prototype.getPlaneConstantOfFace=function(V){var tt=this.faces[V],H=this.faceNormals[V],T=this.vertices[tt[0]],R=-H.dot(T);return R};var L=new s,I=new s,S=new s,M=new s,b=new s,U=new s,P=new s,X=new s;l.prototype.clipFaceAgainstHull=function(V,tt,H,T,R,G,$){for(var nt=L,j=I,st=S,F=M,_t=b,dt=U,xt=P,rt=X,ut=this,D=[],E=T,et=D,Q=-1,lt=Number.MAX_VALUE,ht=0;ht<ut.faces.length;ht++){nt.copy(ut.faceNormals[ht]),H.vmult(nt,nt);var Lt=nt.dot(V);Lt<lt&&(lt=Lt,Q=ht)}if(!(Q<0)){var ft=ut.faces[Q];ft.connectedFaces=[];for(var Tt=0;Tt<ut.faces.length;Tt++)for(var Ft=0;Ft<ut.faces[Tt].length;Ft++)ft.indexOf(ut.faces[Tt][Ft])!==-1&&Tt!==Q&&ft.connectedFaces.indexOf(Tt)===-1&&ft.connectedFaces.push(Tt);E.length;for(var mt=ft.length,Ct=0;Ct<mt;Ct++){var Xt=ut.vertices[ft[Ct]],Vt=ut.vertices[ft[(Ct+1)%mt]];Xt.vsub(Vt,j),st.copy(j),H.vmult(st,st),tt.vadd(st,st),F.copy(this.faceNormals[Q]),H.vmult(F,F),tt.vadd(F,F),st.cross(F,_t),_t.negate(_t),dt.copy(Xt),H.vmult(dt,dt),tt.vadd(dt,dt),-dt.dot(_t);var $t;{var kt=ft.connectedFaces[Ct];xt.copy(this.faceNormals[kt]);var Qt=this.getPlaneConstantOfFace(kt);rt.copy(xt),H.vmult(rt,rt);var $t=Qt-rt.dot(tt)}for(this.clipFaceAgainstPlane(E,et,rt,$t);E.length;)E.shift();for(;et.length;)E.push(et.shift())}xt.copy(this.faceNormals[Q]);var Qt=this.getPlaneConstantOfFace(Q);rt.copy(xt),H.vmult(rt,rt);for(var $t=Qt-rt.dot(tt),Tt=0;Tt<E.length;Tt++){var te=rt.dot(E[Tt])+$t;if(te<=R&&(console.log("clamped: depth="+te+" to minDist="+(R+"")),te=R),te<=G){var re=E[Tt];if(te<=0){var ce={point:re,normal:rt,depth:te};$.push(ce)}}}}},l.prototype.clipFaceAgainstPlane=function(V,tt,H,T){var R,G,$=V.length;if($<2)return tt;var nt=V[V.length-1],j=V[0];R=H.dot(nt)+T;for(var st=0;st<$;st++){if(j=V[st],G=H.dot(j)+T,R<0)if(G<0){var F=new s;F.copy(j),tt.push(F)}else{var F=new s;nt.lerp(j,R/(R-G),F),tt.push(F)}else if(G<0){var F=new s;nt.lerp(j,R/(R-G),F),tt.push(F),tt.push(j)}nt=j,R=G}return tt},l.prototype.computeWorldVertices=function(V,tt){for(var H=this.vertices.length;this.worldVertices.length<H;)this.worldVertices.push(new s);for(var T=this.vertices,R=this.worldVertices,G=0;G!==H;G++)tt.vmult(T[G],R[G]),V.vadd(R[G],R[G]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(V,tt){var H=this.vertices.length,T=this.vertices;V.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),tt.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<H;R++){var G=T[R];G.x<V.x?V.x=G.x:G.x>tt.x&&(tt.x=G.x),G.y<V.y?V.y=G.y:G.y>tt.y&&(tt.y=G.y),G.z<V.z?V.z=G.z:G.z>tt.z&&(tt.z=G.z)}},l.prototype.computeWorldFaceNormals=function(V){for(var tt=this.faceNormals.length;this.worldFaceNormals.length<tt;)this.worldFaceNormals.push(new s);for(var H=this.faceNormals,T=this.worldFaceNormals,R=0;R!==tt;R++)V.vmult(H[R],T[R]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var V=0,tt=this.vertices,H=0,T=tt.length;H!==T;H++){var R=tt[H].norm2();R>V&&(V=R)}this.boundingSphereRadius=Math.sqrt(V)};var q=new s;l.prototype.calculateWorldAABB=function(V,tt,H,T){for(var R=this.vertices.length,G=this.vertices,$,nt,j,st,F,_t,dt=0;dt<R;dt++){q.copy(G[dt]),tt.vmult(q,q),V.vadd(q,q);var xt=q;xt.x<$||$===void 0?$=xt.x:(xt.x>st||st===void 0)&&(st=xt.x),xt.y<nt||nt===void 0?nt=xt.y:(xt.y>F||F===void 0)&&(F=xt.y),xt.z<j||j===void 0?j=xt.z:(xt.z>_t||_t===void 0)&&(_t=xt.z)}H.set($,nt,j),T.set(st,F,_t)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(V){V=V||new s;for(var tt=this.vertices.length,H=this.vertices,T=0;T<tt;T++)V.vadd(H[T],V);return V.mult(1/tt,V),V},l.prototype.transformAllPoints=function(V,tt){var H=this.vertices.length,T=this.vertices;if(tt){for(var R=0;R<H;R++){var G=T[R];tt.vmult(G,G)}for(var R=0;R<this.faceNormals.length;R++){var G=this.faceNormals[R];tt.vmult(G,G)}}if(V)for(var R=0;R<H;R++){var G=T[R];G.vadd(V,G)}};var ot=new s,k=new s,N=new s;l.prototype.pointIsInside=function(V){var tt=this.vertices.length,H=this.vertices,T=this.faces,R=this.faceNormals,G=null,$=this.faces.length,nt=ot;this.getAveragePointLocal(nt);for(var j=0;j<$;j++){this.faces[j].length;var tt=R[j],st=H[T[j][0]],F=k;V.vsub(st,F);var _t=tt.dot(F),dt=N;nt.vsub(st,dt);var xt=tt.dot(dt);if(_t<0&&xt>0||_t>0&&xt<0)return!1}return G?1:-1},new s;var J=new s,K=new s;l.project=function(V,tt,H,T,R){var G=V.vertices.length,$=J,nt=0,j=0,st=K,F=V.vertices;st.setZero(),a.vectorToLocalFrame(H,T,tt,$),a.pointToLocalFrame(H,T,st,st);var _t=st.dot($);j=nt=F[0].dot($);for(var dt=1;dt<G;dt++){var xt=F[dt].dot($);xt>nt&&(nt=xt),xt<j&&(j=xt)}if(j-=_t,nt-=_t,j>nt){var rt=j;j=nt,nt=rt}R[0]=nt,R[1]=j}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function l(h,u,c,d){var f=d,v=[],g=[],p=[],m=[],y=[],_=Math.cos,x=Math.sin;v.push(new s(u*_(0),u*x(0),-c*.5)),m.push(0),v.push(new s(h*_(0),h*x(0),c*.5)),y.push(1);for(var A=0;A<f;A++){var C=2*Math.PI/f*(A+1),L=2*Math.PI/f*(A+.5);A<f-1?(v.push(new s(u*_(C),u*x(C),-c*.5)),m.push(2*A+2),v.push(new s(h*_(C),h*x(C),c*.5)),y.push(2*A+3),p.push([2*A+2,2*A+3,2*A+1,2*A])):p.push([0,1,2*A+1,2*A]),(f%2===1||A<f/2)&&g.push(new s(_(L),x(L),0))}p.push(y),g.push(new s(0,0,1));for(var I=[],A=0;A<m.length;A++)I.push(m[m.length-A-1]);p.push(I),this.type=r.types.CONVEXPOLYHEDRON,a.call(this,v,p,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var r=e("./Shape"),s=e("./ConvexPolyhedron"),a=e("../math/Vec3"),l=e("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new a,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v<c&&(c=v)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v>c&&(c=v)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,v){v=v||[];for(var g=this.data,p=this.minValue,m=u;m<=d;m++)for(var y=c;y<=f;y++){var _=g[m][y];_>p&&(p=_)}v[0]=this.minValue,v[1]=p},h.prototype.getIndexOfPosition=function(u,c,d,f){var v=this.elementSize,g=this.data,p=Math.floor(u/v),m=Math.floor(c/v);return d[0]=p,d[1]=m,f&&(p<0&&(p=0),m<0&&(m=0),p>=g.length-1&&(p=g.length-1),m>=g[0].length-1&&(m=g[0].length-1)),!(p<0||m<0||p>=g.length-1||m>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new s,v=new a,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,p=this.elementSize,m=f.faces;f.vertices.length=6;for(var y=0;y<6;y++)f.vertices[y]||(f.vertices[y]=new a);m.length=5;for(var y=0;y<5;y++)m[y]||(m[y]=[]);var _=f.vertices,x=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((u+.75)*p,(c+.75)*p,x),_[0].set(.25*p,.25*p,g[u+1][c+1]-x),_[1].set(-.75*p,.25*p,g[u][c+1]-x),_[2].set(.25*p,-.75*p,g[u+1][c]-x),_[3].set(.25*p,.25*p,-x-1),_[4].set(-.75*p,.25*p,-x-1),_[5].set(.25*p,-.75*p,-x-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=2,m[2][1]=5,m[2][2]=3,m[2][3]=0,m[3][0]=3,m[3][1]=4,m[3][2]=1,m[3][3]=0,m[4][0]=1,m[4][1]=4,m[4][2]=5,m[4][3]=2):(v.set((u+.25)*p,(c+.25)*p,x),_[0].set(-.25*p,-.25*p,g[u][c]-x),_[1].set(.75*p,-.25*p,g[u+1][c]-x),_[2].set(-.25*p,.75*p,g[u][c+1]-x),_[3].set(-.25*p,-.25*p,-x-1),_[4].set(.75*p,-.25*p,-x-1),_[5].set(-.25*p,.75*p,-x-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=0,m[2][1]=2,m[2][2]=5,m[2][3]=3,m[3][0]=1,m[3][1]=0,m[3][2]=3,m[3][3]=4,m[4][0]=4,m[4][1]=5,m[4][2]=2,m[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,v)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new a,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new a(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PARTICLE}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){return h=h||new s,h.set(0,0,0),h},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(h,u){return u=u||new s,u},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;a.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){h=h||new s;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=u;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),l=e("../collision/AABB"),h=e("../utils/Octree");function u(I,S){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(I),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var c=new s;u.prototype.updateTree=function(){var I=this.tree;I.reset(),I.aabb.copy(this.aabb);var S=this.scale;I.aabb.lowerBound.x*=1/S.x,I.aabb.lowerBound.y*=1/S.y,I.aabb.lowerBound.z*=1/S.z,I.aabb.upperBound.x*=1/S.x,I.aabb.upperBound.y*=1/S.y,I.aabb.upperBound.z*=1/S.z;for(var M=new l,b=new s,U=new s,P=new s,X=[b,U,P],q=0;q<this.indices.length/3;q++){var ot=q*3;this._getUnscaledVertex(this.indices[ot],b),this._getUnscaledVertex(this.indices[ot+1],U),this._getUnscaledVertex(this.indices[ot+2],P),M.setFromPoints(X),I.insert(M,q)}I.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(I,S){d.copy(I);var M=this.scale,b=M.x,U=M.y,P=M.z,X=d.lowerBound,q=d.upperBound;return X.x/=b,X.y/=U,X.z/=P,q.x/=b,q.y/=U,q.z/=P,this.tree.aabbQuery(d,S)},u.prototype.setScale=function(I){var S=this.scale.x===this.scale.y===this.scale.z,M=I.x===I.y===I.z;S&&M||this.updateNormals(),this.scale.copy(I),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var I=c,S=this.normals,M=0;M<this.indices.length/3;M++){var b=M*3,U=this.indices[b],P=this.indices[b+1],X=this.indices[b+2];this.getVertex(U,m),this.getVertex(P,y),this.getVertex(X,_),u.computeNormal(y,m,_,I),S[b]=I.x,S[b+1]=I.y,S[b+2]=I.z}},u.prototype.updateEdges=function(){for(var I={},S=function(ot,k){var N=U<P?U+"_"+P:P+"_"+U;I[N]=!0},M=0;M<this.indices.length/3;M++){var b=M*3,U=this.indices[b],P=this.indices[b+1];this.indices[b+2],S(),S(),S()}var X=Object.keys(I);this.edges=new Int16Array(X.length*2);for(var M=0;M<X.length;M++){var q=X[M].split("_");this.edges[2*M]=parseInt(q[0],10),this.edges[2*M+1]=parseInt(q[1],10)}},u.prototype.getEdgeVertex=function(I,S,M){var b=this.edges[I*2+(S?1:0)];this.getVertex(b,M)};var f=new s,v=new s;u.prototype.getEdgeVector=function(I,S){var M=f,b=v;this.getEdgeVertex(I,0,M),this.getEdgeVertex(I,1,b),b.vsub(M,S)};var g=new s,p=new s;u.computeNormal=function(I,S,M,b){S.vsub(I,p),M.vsub(S,g),g.cross(p,b),b.isZero()||b.normalize()};var m=new s,y=new s,_=new s;u.prototype.getVertex=function(I,S){var M=this.scale;return this._getUnscaledVertex(I,S),S.x*=M.x,S.y*=M.y,S.z*=M.z,S},u.prototype._getUnscaledVertex=function(I,S){var M=I*3,b=this.vertices;return S.set(b[M],b[M+1],b[M+2])},u.prototype.getWorldVertex=function(I,S,M,b){return this.getVertex(I,b),a.pointToWorldFrame(S,M,b,b),b},u.prototype.getTriangleVertices=function(I,S,M,b){var U=I*3;this.getVertex(this.indices[U],S),this.getVertex(this.indices[U+1],M),this.getVertex(this.indices[U+2],b)},u.prototype.getNormal=function(I,S){var M=I*3;return S.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var x=new l;u.prototype.calculateLocalInertia=function(I,S){this.computeLocalAABB(x);var M=x.upperBound.x-x.lowerBound.x,b=x.upperBound.y-x.lowerBound.y,U=x.upperBound.z-x.lowerBound.z;return S.set(1/12*I*(2*b*2*b+2*U*2*U),1/12*I*(2*M*2*M+2*U*2*U),1/12*I*(2*b*2*b+2*M*2*M))};var A=new s;u.prototype.computeLocalAABB=function(I){var S=I.lowerBound,M=I.upperBound,b=this.vertices.length;this.vertices;var U=A;this.getVertex(0,U),S.copy(U),M.copy(U);for(var P=0;P!==b;P++)this.getVertex(P,U),U.x<S.x?S.x=U.x:U.x>M.x&&(M.x=U.x),U.y<S.y?S.y=U.y:U.y>M.y&&(M.y=U.y),U.z<S.z?S.z=U.z:U.z>M.z&&(M.z=U.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var I=0,S=this.vertices,M=new s,b=0,U=S.length/3;b!==U;b++){this.getVertex(b,M);var P=M.norm2();P>I&&(I=P)}this.boundingSphereRadius=Math.sqrt(I)},new s;var C=new a,L=new l;u.prototype.calculateWorldAABB=function(I,S,M,b){var U=C,P=L;U.position=I,U.quaternion=S,this.aabb.toWorldFrame(U,P),M.copy(P.lowerBound),b.copy(P.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(I,S,M,b,U){I=I||1,S=S||.5,M=M||8,b=b||6,U=U||Math.PI*2;for(var P=[],X=[],q=0;q<=M;q++)for(var ot=0;ot<=b;ot++){var k=ot/b*U,N=q/M*Math.PI*2,J=(I+S*Math.cos(N))*Math.cos(k),K=(I+S*Math.cos(N))*Math.sin(k),V=S*Math.sin(N);P.push(J,K,V)}for(var q=1;q<=M;q++)for(var ot=1;ot<=b;ot++){var tt=(b+1)*q+ot-1,H=(b+1)*(q-1)+ot-1,T=(b+1)*(q-1)+ot,R=(b+1)*q+ot;X.push(tt,H,R),X.push(H,T,R)}return new u(P,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var a=[],l=[],h=[];s.prototype.solve=function(u,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,p=g.length,m=c.bodies,y=m.length,_=u,x,A,C,L,I,S;if(p!==0)for(var M=0;M!==y;M++)m[M].updateSolveMassProperties();var b=l,U=h,P=a;b.length=p,U.length=p,P.length=p;for(var M=0;M!==p;M++){var X=g[M];P[M]=0,U[M]=X.computeB(_),b[M]=1/X.computeC()}if(p!==0){for(var M=0;M!==y;M++){var q=m[M],ot=q.vlambda,k=q.wlambda;ot.set(0,0,0),k&&k.set(0,0,0)}for(d=0;d!==f;d++){L=0;for(var N=0;N!==p;N++){var X=g[N];x=U[N],A=b[N],S=P[N],I=X.computeGWlambda(),C=A*(x-I-X.eps*S),S+C<X.minForce?C=X.minForce-S:S+C>X.maxForce&&(C=X.maxForce-S),P[N]+=C,L+=C>0?C:-C,X.addToWlambda(C)}if(L*L<v)break}for(var M=0;M!==y;M++){var q=m[M],J=q.velocity,K=q.angularVelocity;J.vadd(q.vlambda,J),K&&K.vadd(q.wlambda,K)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,a){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var a=this.equations,l=a.indexOf(s);l!==-1&&a.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function a(m){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=m,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new r;var l=[],h=[],u={bodies:[]},c=s.STATIC;function d(m){for(var y=m.length,_=0;_!==y;_++){var x=m[_];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function v(m,y,_,x){for(f.push(m),m.visited=!0,y(m,_,x);f.length;)for(var A=f.pop(),C;C=d(A.children);)C.visited=!0,y(C,_,x),f.push(C)}function g(m,y,_){y.push(m.body);for(var x=m.eqs.length,A=0;A!==x;A++){var C=m.eqs[A];_.indexOf(C)===-1&&_.push(C)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(m,y){for(var _=l,x=this.nodePool,A=y.bodies,C=this.equations,L=C.length,I=A.length,S=this.subsolver;x.length<I;)x.push(this.createNode());_.length=I;for(var M=0;M<I;M++)_[M]=x[M];for(var M=0;M!==I;M++){var b=_[M];b.body=A[M],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var U=0;U!==L;U++){var P=C[U],M=A.indexOf(P.bi),X=A.indexOf(P.bj),q=_[M],ot=_[X];q.children.push(ot),q.eqs.push(P),ot.children.push(q),ot.eqs.push(P)}var k,N=0,J=h;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var K=u;k=d(_);){J.length=0,K.bodies.length=0,v(k,g,K.bodies,J);var V=J.length;J=J.sort(p);for(var M=0;M!==V;M++)S.addEquation(J[M]);S.solve(m,K),S.removeAllEquations(),N++}return N};function p(m,y){return y.id-m.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(a)===-1&&l[s].push(a),this},hasEventListener:function(s,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(a)!==-1},removeEventListener:function(s,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var h=l[s].indexOf(a);return h!==-1&&l[s].splice(h,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var a=this._listeners,l=a[s.type];if(l!==void 0){s.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,s)}return this}}},{}],50:[function(e,n,i){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var p=!1;g.length||(this.subdivide(),p=!0);for(var m=0;m!==8;m++)if(g[m].insert(c,d,f+1))return!0;p&&(g.length=0)}return v.push(d),!0};var h=new s;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new a({aabb:new r({lowerBound:new s(0,0,0)})}),new a({aabb:new r({lowerBound:new s(1,0,0)})}),new a({aabb:new r({lowerBound:new s(1,1,0)})}),new a({aabb:new r({lowerBound:new s(1,1,1)})}),new a({aabb:new r({lowerBound:new s(0,1,1)})}),new a({aabb:new r({lowerBound:new s(0,0,1)})}),new a({aabb:new r({lowerBound:new s(1,0,1)})}),new a({aabb:new r({lowerBound:new s(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,p=0;p!==8;p++){var m=v[p];m.root=g;var y=m.aabb.lowerBound;y.x*=h.x,y.y*=h.y,y.z*=h.z,y.vadd(d,y),y.vadd(h,m.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var u=new r;a.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,a=0;a!==s;a++)this.objects.push(arguments[a])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,a){if(s>a){var l=a;a=s,s=l}return this.data[s+"-"+a]},r.prototype.set=function(s,a,l){if(s>a){var h=a;a=s,s=h}var u=s+"-"+a;this.get(s,a)||this.data.keys.push(u),this.data[u]=l},r.prototype.reset=function(){for(var s=this.data,a=s.keys;a.length>0;){var l=a.pop();delete s[l]}}},{}],53:[function(e,n,i){function r(){}n.exports=r,r.defaults=function(s,a){s=s||{};for(var l in a)l in s||(s[l]=a[l]);return s}},{}],54:[function(e,n,i){n.exports=a;var r=e("../math/Vec3"),s=e("./Pool");function a(){s.call(this),this.type=r}a.prototype=new s,a.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),a=e("../collision/Ray"),l=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(at){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=at,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(at,ct,vt,gt,jt,It){var wt;this.contactPointPool.length?(wt=this.contactPointPool.pop(),wt.bi=at,wt.bj=ct):wt=new d(at,ct),wt.enabled=at.collisionResponse&&ct.collisionResponse&&vt.collisionResponse&&gt.collisionResponse;var Pt=this.currentContactMaterial;wt.restitution=Pt.restitution,wt.setSpookParams(Pt.contactEquationStiffness,Pt.contactEquationRelaxation,this.world.dt);var it=vt.material||at.material,At=gt.material||ct.material;return it&&At&&it.restitution>=0&&At.restitution>=0&&(wt.restitution=it.restitution*At.restitution),wt.si=jt||vt,wt.sj=It||gt,wt},v.prototype.createFrictionEquationsFromContact=function(at,ct){var vt=at.bi,gt=at.bj,jt=at.si,It=at.sj,wt=this.world,Pt=this.currentContactMaterial,it=Pt.friction,At=jt.material||vt.material,Nt=It.material||gt.material;if(At&&Nt&&At.friction>=0&&Nt.friction>=0&&(it=At.friction*Nt.friction),it>0){var Ot=it*wt.gravity.length(),Rt=vt.invMass+gt.invMass;Rt>0&&(Rt=1/Rt);var w=this.frictionEquationPool,B=w.length?w.pop():new f(vt,gt,Ot*Rt),Y=w.length?w.pop():new f(vt,gt,Ot*Rt);return B.bi=Y.bi=vt,B.bj=Y.bj=gt,B.minForce=Y.minForce=-Ot*Rt,B.maxForce=Y.maxForce=Ot*Rt,B.ri.copy(at.ri),B.rj.copy(at.rj),Y.ri.copy(at.ri),Y.rj.copy(at.rj),at.ni.tangents(B.t,Y.t),B.setSpookParams(Pt.frictionEquationStiffness,Pt.frictionEquationRelaxation,wt.dt),Y.setSpookParams(Pt.frictionEquationStiffness,Pt.frictionEquationRelaxation,wt.dt),B.enabled=Y.enabled=at.enabled,ct.push(B,Y),!0}return!1};var g=new l,p=new l,m=new l;v.prototype.createFrictionFromAverage=function(at){var ct=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ct,this.frictionResult)||at===1)){var vt=this.frictionResult[this.frictionResult.length-2],gt=this.frictionResult[this.frictionResult.length-1];g.setZero(),p.setZero(),m.setZero();var jt=ct.bi;ct.bj;for(var It=0;It!==at;It++)ct=this.result[this.result.length-1-It],ct.bodyA!==jt?(g.vadd(ct.ni,g),p.vadd(ct.ri,p),m.vadd(ct.rj,m)):(g.vsub(ct.ni,g),p.vadd(ct.rj,p),m.vadd(ct.ri,m));var wt=1/at;p.scale(wt,vt.ri),m.scale(wt,vt.rj),gt.ri.copy(vt.ri),gt.rj.copy(vt.rj),g.normalize(),g.tangents(vt.t,gt.t)}};var y=new l,_=new l,x=new u,A=new u;v.prototype.getContacts=function(at,ct,vt,gt,jt,It,wt){this.contactPointPool=jt,this.frictionEquationPool=wt,this.result=gt,this.frictionResult=It;for(var Pt=x,it=A,At=y,Nt=_,Ot=0,Rt=at.length;Ot!==Rt;Ot++){var w=at[Ot],B=ct[Ot],Y=null;w.material&&B.material&&(Y=vt.getContactMaterial(w.material,B.material)||null);for(var Z=0;Z<w.shapes.length;Z++){w.quaternion.mult(w.shapeOrientations[Z],Pt),w.quaternion.vmult(w.shapeOffsets[Z],At),At.vadd(w.position,At);for(var z=w.shapes[Z],pt=0;pt<B.shapes.length;pt++){B.quaternion.mult(B.shapeOrientations[pt],it),B.quaternion.vmult(B.shapeOffsets[pt],Nt),Nt.vadd(B.position,Nt);var yt=B.shapes[pt];if(!(At.distanceTo(Nt)>z.boundingSphereRadius+yt.boundingSphereRadius)){var Bt=null;z.material&&yt.material&&(Bt=vt.getContactMaterial(z.material,yt.material)||null),this.currentContactMaterial=Bt||Y||vt.defaultContactMaterial;var bt=this[z.type|yt.type];bt&&(z.type<yt.type?bt.call(this,z,yt,At,Nt,Pt,it,w,B,z,yt):bt.call(this,yt,z,Nt,At,it,Pt,B,w,z,yt))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(at,ct,vt,gt,jt,It,wt,Pt){at.convexPolyhedronRepresentation.material=at.material,ct.convexPolyhedronRepresentation.material=ct.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,ct.convexPolyhedronRepresentation,vt,gt,jt,It,wt,Pt,at,ct)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(at,ct,vt,gt,jt,It,wt,Pt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexConvex(at.convexPolyhedronRepresentation,ct,vt,gt,jt,It,wt,Pt,at,ct)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(at,ct,vt,gt,jt,It,wt,Pt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexParticle(at.convexPolyhedronRepresentation,ct,vt,gt,jt,It,wt,Pt,at,ct)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(at,ct,vt,gt,jt,It,wt,Pt){var it=this.createContactEquation(wt,Pt,at,ct);gt.vsub(vt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(at.radius,it.ri),it.rj.mult(-ct.radius,it.rj),it.ri.vadd(vt,it.ri),it.ri.vsub(wt.position,it.ri),it.rj.vadd(gt,it.rj),it.rj.vsub(Pt.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var C=new l,L=new l,I=new l;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(at,ct,vt,gt,jt,It,wt,Pt){var it=new l,At=C;At.set(0,0,1),jt.vmult(At,At);for(var Nt=0;Nt<ct.vertices.length/3;Nt++){ct.getVertex(Nt,it);var Ot=new l;Ot.copy(it),h.pointToWorldFrame(gt,It,Ot,it);var Rt=L;it.vsub(vt,Rt);var w=At.dot(Rt);if(w<=0){var B=this.createContactEquation(wt,Pt,at,ct);B.ni.copy(At);var Y=I;At.scale(Rt.dot(At),Y),it.vsub(Y,Y),B.ri.copy(Y),B.ri.vsub(wt.position,B.ri),B.rj.copy(it),B.rj.vsub(Pt.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}};var S=new l,M=new l;new l;var b=new l,U=new l,P=new l,X=new l,q=new l,ot=new l,k=new l,N=new l,J=new l,K=new l,V=new l,tt=new r,H=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(at,ct,vt,gt,jt,It,wt,Pt){var it=P,At=X,Nt=q,Ot=ot,Rt=k,w=N,B=tt,Y=U,Z=M,z=H;h.pointToLocalFrame(gt,It,vt,Rt);var pt=at.radius;B.lowerBound.set(Rt.x-pt,Rt.y-pt,Rt.z-pt),B.upperBound.set(Rt.x+pt,Rt.y+pt,Rt.z+pt),ct.getTrianglesInAABB(B,z);for(var yt=b,Bt=at.radius*at.radius,bt=0;bt<z.length;bt++)for(var Dt=0;Dt<3;Dt++)if(ct.getVertex(ct.indices[z[bt]*3+Dt],yt),yt.vsub(Rt,Z),Z.norm2()<=Bt){Y.copy(yt),h.pointToWorldFrame(gt,It,Y,yt),yt.vsub(vt,Z);var Mt=this.createContactEquation(wt,Pt,at,ct);Mt.ni.copy(Z),Mt.ni.normalize(),Mt.ri.copy(Mt.ni),Mt.ri.scale(at.radius,Mt.ri),Mt.ri.vadd(vt,Mt.ri),Mt.ri.vsub(wt.position,Mt.ri),Mt.rj.copy(yt),Mt.rj.vsub(Pt.position,Mt.rj),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}for(var bt=0;bt<z.length;bt++)for(var Dt=0;Dt<3;Dt++){ct.getVertex(ct.indices[z[bt]*3+Dt],it),ct.getVertex(ct.indices[z[bt]*3+(Dt+1)%3],At),At.vsub(it,Nt),Rt.vsub(At,w);var qt=w.dot(Nt);Rt.vsub(it,w);var ae=w.dot(Nt);if(ae>0&&qt<0){Rt.vsub(it,w),Ot.copy(Nt),Ot.normalize(),ae=w.dot(Ot),Ot.scale(ae,w),w.vadd(it,w);var _e=w.distanceTo(Rt);if(_e<at.radius){var Mt=this.createContactEquation(wt,Pt,at,ct);w.vsub(Rt,Mt.ni),Mt.ni.normalize(),Mt.ni.scale(at.radius,Mt.ri),h.pointToWorldFrame(gt,It,w,w),w.vsub(Pt.position,Mt.rj),h.vectorToWorldFrame(It,Mt.ni,Mt.ni),h.vectorToWorldFrame(It,Mt.ri,Mt.ri),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}}}for(var ye=J,we=K,Kt=V,Zt=S,bt=0,xe=z.length;bt!==xe;bt++){ct.getTriangleVertices(z[bt],ye,we,Kt),ct.getNormal(z[bt],Zt),Rt.vsub(ye,w);var _e=w.dot(Zt);if(Zt.scale(_e,w),Rt.vsub(w,w),_e=w.distanceTo(Rt),a.pointInTriangle(w,ye,we,Kt)&&_e<at.radius){var Mt=this.createContactEquation(wt,Pt,at,ct);w.vsub(Rt,Mt.ni),Mt.ni.normalize(),Mt.ni.scale(at.radius,Mt.ri),h.pointToWorldFrame(gt,It,w,w),w.vsub(Pt.position,Mt.rj),h.vectorToWorldFrame(It,Mt.ni,Mt.ni),h.vectorToWorldFrame(It,Mt.ri,Mt.ri),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult)}}z.length=0};var T=new l,R=new l;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(at,ct,vt,gt,jt,It,wt,Pt){var it=this.createContactEquation(wt,Pt,at,ct);if(it.ni.set(0,0,1),It.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(at.radius,it.ri),vt.vsub(gt,T),it.ni.mult(it.ni.dot(T),R),T.vsub(R,it.rj),-T.dot(it.ni)<=at.radius){var At=it.ri,Nt=it.rj;At.vadd(vt,At),At.vsub(wt.position,At),Nt.vadd(gt,Nt),Nt.vsub(Pt.position,Nt),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var G=new l,$=new l,nt=new l;function j(at,ct,vt){for(var gt=null,jt=at.length,It=0;It!==jt;It++){var wt=at[It],Pt=G;at[(It+1)%jt].vsub(wt,Pt);var it=$;Pt.cross(ct,it);var At=nt;vt.vsub(wt,At);var Nt=it.dot(At);if(gt===null||Nt>0&&gt===!0||Nt<=0&&gt===!1){gt===null&&(gt=Nt>0);continue}else return!1}return!0}var st=new l,F=new l,_t=new l,dt=new l,xt=[new l,new l,new l,new l,new l,new l],rt=new l,ut=new l,D=new l,E=new l;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(at,ct,vt,gt,jt,It,wt,Pt){var it=this.v3pool,At=xt;vt.vsub(gt,st),ct.getSideNormals(At,It);for(var Nt=at.radius,Ot=!1,Rt=ut,w=D,B=E,Y=null,Z=0,z=0,pt=0,yt=null,Bt=0,bt=At.length;Bt!==bt&&Ot===!1;Bt++){var Dt=F;Dt.copy(At[Bt]);var Mt=Dt.norm();Dt.normalize();var qt=st.dot(Dt);if(qt<Mt+Nt&&qt>0){var ae=_t,_e=dt;ae.copy(At[(Bt+1)%3]),_e.copy(At[(Bt+2)%3]);var ye=ae.norm(),we=_e.norm();ae.normalize(),_e.normalize();var Kt=st.dot(ae),Zt=st.dot(_e);if(Kt<ye&&Kt>-ye&&Zt<we&&Zt>-we){var fe=Math.abs(qt-Mt-Nt);(yt===null||fe<yt)&&(yt=fe,z=Kt,pt=Zt,Y=Mt,Rt.copy(Dt),w.copy(ae),B.copy(_e),Z++)}}}if(Z){Ot=!0;var Yt=this.createContactEquation(wt,Pt,at,ct);Rt.mult(-Nt,Yt.ri),Yt.ni.copy(Rt),Yt.ni.negate(Yt.ni),Rt.mult(Y,Rt),w.mult(z,w),Rt.vadd(w,Rt),B.mult(pt,B),Rt.vadd(B,Yt.rj),Yt.ri.vadd(vt,Yt.ri),Yt.ri.vsub(wt.position,Yt.ri),Yt.rj.vadd(gt,Yt.rj),Yt.rj.vsub(Pt.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}for(var xe=it.get(),le=rt,Ce=0;Ce!==2&&!Ot;Ce++)for(var Ie=0;Ie!==2&&!Ot;Ie++)for(var be=0;be!==2&&!Ot;be++)if(xe.set(0,0,0),Ce?xe.vadd(At[0],xe):xe.vsub(At[0],xe),Ie?xe.vadd(At[1],xe):xe.vsub(At[1],xe),be?xe.vadd(At[2],xe):xe.vsub(At[2],xe),gt.vadd(xe,le),le.vsub(vt,le),le.norm2()<Nt*Nt){Ot=!0;var Yt=this.createContactEquation(wt,Pt,at,ct);Yt.ri.copy(le),Yt.ri.normalize(),Yt.ni.copy(Yt.ri),Yt.ri.mult(Nt,Yt.ri),Yt.rj.copy(xe),Yt.ri.vadd(vt,Yt.ri),Yt.ri.vsub(wt.position,Yt.ri),Yt.rj.vadd(gt,Yt.rj),Yt.rj.vsub(Pt.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}it.release(xe),xe=null;for(var Ge=it.get(),Se=it.get(),Yt=it.get(),ze=it.get(),fe=it.get(),an=At.length,Ce=0;Ce!==an&&!Ot;Ce++)for(var Ie=0;Ie!==an&&!Ot;Ie++)if(Ce%3!==Ie%3){At[Ie].cross(At[Ce],Ge),Ge.normalize(),At[Ce].vadd(At[Ie],Se),Yt.copy(vt),Yt.vsub(Se,Yt),Yt.vsub(gt,Yt);var wn=Yt.dot(Ge);Ge.mult(wn,ze);for(var be=0;be===Ce%3||be===Ie%3;)be++;fe.copy(vt),fe.vsub(ze,fe),fe.vsub(Se,fe),fe.vsub(gt,fe);var Er=Math.abs(wn),Lc=fe.norm();if(Er<At[be].norm()&&Lc<Nt){Ot=!0;var Ae=this.createContactEquation(wt,Pt,at,ct);Se.vadd(ze,Ae.rj),Ae.rj.copy(Ae.rj),fe.negate(Ae.ni),Ae.ni.normalize(),Ae.ri.copy(Ae.rj),Ae.ri.vadd(gt,Ae.ri),Ae.ri.vsub(vt,Ae.ri),Ae.ri.normalize(),Ae.ri.mult(Nt,Ae.ri),Ae.ri.vadd(vt,Ae.ri),Ae.ri.vsub(wt.position,Ae.ri),Ae.rj.vadd(gt,Ae.rj),Ae.rj.vsub(Pt.position,Ae.rj),this.result.push(Ae),this.createFrictionEquationsFromContact(Ae,this.frictionResult)}}it.release(Ge,Se,Yt,ze,fe)};var et=new l,Q=new l,lt=new l,ht=new l,Lt=new l,ft=new l,Tt=new l,Ft=new l,mt=new l,Ct=new l;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(at,ct,vt,gt,jt,It,wt,Pt){var it=this.v3pool;vt.vsub(gt,et);for(var At=ct.faceNormals,Nt=ct.faces,Ot=ct.vertices,Rt=at.radius,w=0;w!==Ot.length;w++){var B=Ot[w],Y=Lt;It.vmult(B,Y),gt.vadd(Y,Y);var Z=ht;if(Y.vsub(vt,Z),Z.norm2()<Rt*Rt){pt=!0;var z=this.createContactEquation(wt,Pt,at,ct);z.ri.copy(Z),z.ri.normalize(),z.ni.copy(z.ri),z.ri.mult(Rt,z.ri),Y.vsub(gt,z.rj),z.ri.vadd(vt,z.ri),z.ri.vsub(wt.position,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Pt.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);return}}for(var pt=!1,w=0,yt=Nt.length;w!==yt&&pt===!1;w++){var Bt=At[w],bt=Nt[w],Dt=ft;It.vmult(Bt,Dt);var Mt=Tt;It.vmult(Ot[bt[0]],Mt),Mt.vadd(gt,Mt);var qt=Ft;Dt.mult(-Rt,qt),vt.vadd(qt,qt);var ae=mt;qt.vsub(Mt,ae);var _e=ae.dot(Dt),ye=Ct;if(vt.vsub(Mt,ye),_e<0&&ye.dot(Dt)>0){for(var we=[],Kt=0,Zt=bt.length;Kt!==Zt;Kt++){var xe=it.get();It.vmult(Ot[bt[Kt]],xe),gt.vadd(xe,xe),we.push(xe)}if(j(we,Dt,vt)){pt=!0;var z=this.createContactEquation(wt,Pt,at,ct);Dt.mult(-Rt,z.ri),Dt.negate(z.ni);var le=it.get();Dt.mult(-_e,le);var Ce=it.get();Dt.mult(-Rt,Ce),vt.vsub(gt,z.rj),z.rj.vadd(Ce,z.rj),z.rj.vadd(le,z.rj),z.rj.vadd(gt,z.rj),z.rj.vsub(Pt.position,z.rj),z.ri.vadd(vt,z.ri),z.ri.vsub(wt.position,z.ri),it.release(le),it.release(Ce),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var Kt=0,Ie=we.length;Kt!==Ie;Kt++)it.release(we[Kt]);return}else for(var Kt=0;Kt!==bt.length;Kt++){var be=it.get(),Ge=it.get();It.vmult(Ot[bt[(Kt+1)%bt.length]],be),It.vmult(Ot[bt[(Kt+2)%bt.length]],Ge),gt.vadd(be,be),gt.vadd(Ge,Ge);var Se=Q;Ge.vsub(be,Se);var Yt=lt;Se.unit(Yt);var ze=it.get(),fe=it.get();vt.vsub(be,fe);var an=fe.dot(Yt);Yt.mult(an,ze),ze.vadd(be,ze);var wn=it.get();if(ze.vsub(vt,wn),an>0&&an*an<Se.norm2()&&wn.norm2()<Rt*Rt){var z=this.createContactEquation(wt,Pt,at,ct);ze.vsub(gt,z.rj),ze.vsub(vt,z.ni),z.ni.normalize(),z.ni.mult(Rt,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Pt.position,z.rj),z.ri.vadd(vt,z.ri),z.ri.vsub(wt.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var Kt=0,Ie=we.length;Kt!==Ie;Kt++)it.release(we[Kt]);it.release(be),it.release(Ge),it.release(ze),it.release(wn),it.release(fe);return}it.release(be),it.release(Ge),it.release(ze),it.release(wn),it.release(fe)}for(var Kt=0,Ie=we.length;Kt!==Ie;Kt++)it.release(we[Kt])}}},new l,new l,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(at,ct,vt,gt,jt,It,wt,Pt){ct.convexPolyhedronRepresentation.material=ct.material,ct.convexPolyhedronRepresentation.collisionResponse=ct.collisionResponse,this.planeConvex(at,ct.convexPolyhedronRepresentation,vt,gt,jt,It,wt,Pt)};var Xt=new l,Vt=new l,kt=new l,Qt=new l;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(at,ct,vt,gt,jt,It,wt,Pt){var it=Xt,At=Vt;At.set(0,0,1),jt.vmult(At,At);for(var Nt=0,Ot=kt,Rt=0;Rt!==ct.vertices.length;Rt++){it.copy(ct.vertices[Rt]),It.vmult(it,it),gt.vadd(it,it),it.vsub(vt,Ot);var w=At.dot(Ot);if(w<=0){var B=this.createContactEquation(wt,Pt,at,ct),Y=Qt;At.mult(At.dot(Ot),Y),it.vsub(Y,Y),Y.vsub(vt,B.ri),B.ni.copy(At),it.vsub(gt,B.rj),B.ri.vadd(vt,B.ri),B.ri.vsub(wt.position,B.ri),B.rj.vadd(gt,B.rj),B.rj.vsub(Pt.position,B.rj),this.result.push(B),Nt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(B,this.frictionResult)}}this.enableFrictionReduction&&Nt&&this.createFrictionFromAverage(Nt)};var $t=new l,te=new l;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(at,ct,vt,gt,jt,It,wt,Pt,it,At,Nt,Ot){var Rt=$t;if(!(vt.distanceTo(gt)>at.boundingSphereRadius+ct.boundingSphereRadius)&&at.findSeparatingAxis(ct,vt,jt,gt,It,Rt,Nt,Ot)){var w=[],B=te;at.clipAgainstHull(vt,jt,ct,gt,It,Rt,-100,100,w);for(var Y=0,Z=0;Z!==w.length;Z++){var z=this.createContactEquation(wt,Pt,at,ct,it,At),pt=z.ri,yt=z.rj;Rt.negate(z.ni),w[Z].normal.negate(B),B.mult(w[Z].depth,B),w[Z].point.vadd(B,pt),yt.copy(w[Z].point),pt.vsub(vt,pt),yt.vsub(gt,yt),pt.vadd(vt,pt),pt.vsub(wt.position,pt),yt.vadd(gt,yt),yt.vsub(Pt.position,yt),this.result.push(z),Y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(z,this.frictionResult)}this.enableFrictionReduction&&Y&&this.createFrictionFromAverage(Y)}};var re=new l,ce=new l,Gt=new l;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(at,ct,vt,gt,jt,It,wt,Pt){var it=re;it.set(0,0,1),wt.quaternion.vmult(it,it);var At=ce;gt.vsub(wt.position,At);var Nt=it.dot(At);if(Nt<=0){var Ot=this.createContactEquation(Pt,wt,ct,at);Ot.ni.copy(it),Ot.ni.negate(Ot.ni),Ot.ri.set(0,0,0);var Rt=Gt;it.mult(it.dot(gt),Rt),gt.vsub(Rt,Rt),Ot.rj.copy(Rt),this.result.push(Ot),this.createFrictionEquationsFromContact(Ot,this.frictionResult)}};var O=new l;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(at,ct,vt,gt,jt,It,wt,Pt){var it=O;it.set(0,0,1),gt.vsub(vt,it);var At=it.norm2();if(At<=at.radius*at.radius){var Nt=this.createContactEquation(Pt,wt,ct,at);it.normalize(),Nt.rj.copy(it),Nt.rj.mult(at.radius,Nt.rj),Nt.ni.copy(it),Nt.ni.negate(Nt.ni),Nt.ri.set(0,0,0),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}};var St=new u,Et=new l;new l;var Wt=new l,Ht=new l,oe=new l;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(at,ct,vt,gt,jt,It,wt,Pt){var it=-1,At=Wt,Nt=oe,Ot=null,Rt=Et;if(Rt.copy(gt),Rt.vsub(vt,Rt),jt.conjugate(St),St.vmult(Rt,Rt),at.pointIsInside(Rt)){at.worldVerticesNeedsUpdate&&at.computeWorldVertices(vt,jt),at.worldFaceNormalsNeedsUpdate&&at.computeWorldFaceNormals(jt);for(var w=0,B=at.faces.length;w!==B;w++){var Y=[at.worldVertices[at.faces[w][0]]],Z=at.worldFaceNormals[w];gt.vsub(Y[0],Ht);var z=-Z.dot(Ht);(Ot===null||Math.abs(z)<Math.abs(Ot))&&(Ot=z,it=w,At.copy(Z))}if(it!==-1){var pt=this.createContactEquation(Pt,wt,ct,at);At.mult(Ot,Nt),Nt.vadd(gt,Nt),Nt.vsub(vt,Nt),pt.rj.copy(Nt),At.negate(pt.ni),pt.ri.set(0,0,0);var yt=pt.ri,Bt=pt.rj;yt.vadd(gt,yt),yt.vsub(Pt.position,yt),Bt.vadd(vt,Bt),Bt.vsub(wt.position,Bt),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(at,ct,vt,gt,jt,It,wt,Pt){at.convexPolyhedronRepresentation.material=at.material,at.convexPolyhedronRepresentation.collisionResponse=at.collisionResponse,this.convexHeightfield(at.convexPolyhedronRepresentation,ct,vt,gt,jt,It,wt,Pt)};var he=new l,de=new l,Te=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(at,ct,vt,gt,jt,It,wt,Pt){var it=ct.data,At=ct.elementSize,Nt=at.boundingSphereRadius,Ot=de,Rt=Te,w=he;h.pointToLocalFrame(gt,It,vt,w);var B=Math.floor((w.x-Nt)/At)-1,Y=Math.ceil((w.x+Nt)/At)+1,Z=Math.floor((w.y-Nt)/At)-1,z=Math.ceil((w.y+Nt)/At)+1;if(!(Y<0||z<0||B>it.length||Z>it[0].length)){B<0&&(B=0),Y<0&&(Y=0),Z<0&&(Z=0),z<0&&(z=0),B>=it.length&&(B=it.length-1),Y>=it.length&&(Y=it.length-1),z>=it[0].length&&(z=it[0].length-1),Z>=it[0].length&&(Z=it[0].length-1);var pt=[];ct.getRectMinMax(B,Z,Y,z,pt);var yt=pt[0],Bt=pt[1];if(!(w.z-Nt>Bt||w.z+Nt<yt))for(var bt=B;bt<Y;bt++)for(var Dt=Z;Dt<z;Dt++)ct.getConvexTrianglePillar(bt,Dt,!1),h.pointToWorldFrame(gt,It,ct.pillarOffset,Ot),vt.distanceTo(Ot)<ct.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,ct.pillarConvex,vt,Ot,jt,It,wt,Pt,null,null,Rt,null),ct.getConvexTrianglePillar(bt,Dt,!0),h.pointToWorldFrame(gt,It,ct.pillarOffset,Ot),vt.distanceTo(Ot)<ct.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.convexConvex(at,ct.pillarConvex,vt,Ot,jt,It,wt,Pt,null,null,Rt,null)}};var ue=new l,me=new l;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(at,ct,vt,gt,jt,It,wt,Pt){var it=ct.data,At=at.radius,Nt=ct.elementSize,Ot=me,Rt=ue;h.pointToLocalFrame(gt,It,vt,Rt);var w=Math.floor((Rt.x-At)/Nt)-1,B=Math.ceil((Rt.x+At)/Nt)+1,Y=Math.floor((Rt.y-At)/Nt)-1,Z=Math.ceil((Rt.y+At)/Nt)+1;if(!(B<0||Z<0||w>it.length||Z>it[0].length)){w<0&&(w=0),B<0&&(B=0),Y<0&&(Y=0),Z<0&&(Z=0),w>=it.length&&(w=it.length-1),B>=it.length&&(B=it.length-1),Z>=it[0].length&&(Z=it[0].length-1),Y>=it[0].length&&(Y=it[0].length-1);var z=[];ct.getRectMinMax(w,Y,B,Z,z);var pt=z[0],yt=z[1];if(!(Rt.z-At>yt||Rt.z+At<pt))for(var Bt=this.result,bt=w;bt<B;bt++)for(var Dt=Y;Dt<Z;Dt++){var Mt=Bt.length;ct.getConvexTrianglePillar(bt,Dt,!1),h.pointToWorldFrame(gt,It,ct.pillarOffset,Ot),vt.distanceTo(Ot)<ct.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,ct.pillarConvex,vt,Ot,jt,It,wt,Pt),ct.getConvexTrianglePillar(bt,Dt,!0),h.pointToWorldFrame(gt,It,ct.pillarOffset,Ot),vt.distanceTo(Ot)<ct.pillarConvex.boundingSphereRadius+at.boundingSphereRadius&&this.sphereConvex(at,ct.pillarConvex,vt,Ot,jt,It,wt,Pt);var qt=Bt.length-Mt;if(qt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=x;var r=e("../shapes/Shape"),s=e("../math/Vec3"),a=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),u=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),p=e("../collision/RaycastResult"),m=e("../collision/AABB"),y=e("../collision/Ray"),_=e("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new _,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new m;var A=new y;if(x.prototype.getContactMaterial=function(N,J){return this.contactMaterialTable.get(N.id,J.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var N=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=N,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(N){this.bodies.indexOf(N)===-1&&(N.index=this.bodies.length,this.bodies.push(N),N.world=this,N.initPosition.copy(N.position),N.initVelocity.copy(N.velocity),N.timeLastSleepy=this.time,N instanceof v&&(N.initAngularVelocity.copy(N.angularVelocity),N.initQuaternion.copy(N.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=N,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(N){this.constraints.push(N)},x.prototype.removeConstraint=function(N){var J=this.constraints.indexOf(N);J!==-1&&this.constraints.splice(J,1)},x.prototype.rayTest=function(N,J,K){K instanceof p?this.raycastClosest(N,J,{skipBackfaces:!0},K):this.raycastAll(N,J,{skipBackfaces:!0},K)},x.prototype.raycastAll=function(N,J,K,V){return K.mode=y.ALL,K.from=N,K.to=J,K.callback=V,A.intersectWorld(this,K)},x.prototype.raycastAny=function(N,J,K,V){return K.mode=y.ANY,K.from=N,K.to=J,K.result=V,A.intersectWorld(this,K)},x.prototype.raycastClosest=function(N,J,K,V){return K.mode=y.CLOSEST,K.from=N,K.to=J,K.result=V,A.intersectWorld(this,K)},x.prototype.remove=function(N){N.world=null;var J=this.bodies.length-1,K=this.bodies,V=K.indexOf(N);if(V!==-1){K.splice(V,1);for(var tt=0;tt!==K.length;tt++)K[tt].index=tt;this.collisionMatrix.setNumObjects(J),this.removeBodyEvent.body=N,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(N){this.materials.push(N)},x.prototype.addContactMaterial=function(N){this.contactmaterials.push(N),this.contactMaterialTable.set(N.materials[0].id,N.materials[1].id,N)},typeof performance>"u"&&(performance={}),!performance.now){var C=Date.now();performance.timing&&performance.timing.navigationStart&&(C=performance.timing.navigationStart),performance.now=function(){return Date.now()-C}}var L=new s;x.prototype.step=function(N,J,K){if(K=K||10,J=J||0,J===0)this.internalStep(N),this.time+=N;else{var V=Math.floor((this.time+J)/N)-Math.floor(this.time/N);V=Math.min(V,K);for(var tt=performance.now(),H=0;H!==V&&(this.internalStep(N),!(performance.now()-tt>N*1e3));H++);this.time+=J;for(var T=this.time%N,R=T/N,G=L,$=this.bodies,nt=0;nt!==$.length;nt++){var j=$[nt];j.type!==v.STATIC&&j.sleepState!==v.SLEEPING?(j.position.vsub(j.previousPosition,G),G.scale(R,G),j.position.vadd(G,j.interpolatedPosition)):(j.interpolatedPosition.copy(j.position),j.interpolatedQuaternion.copy(j.quaternion))}}};var I={type:"postStep"},S={type:"preStep"},M={type:"collide",body:null,contact:null},b=[],U=[],P=[],X=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new a;var q=new a,ot=new a,k=new s;x.prototype.internalStep=function(N){this.dt=N;var J=this.contacts,K=P,V=X,tt=this.numObjects(),H=this.bodies,T=this.solver,R=this.gravity,G=this.doProfiling,$=this.profile,nt=v.DYNAMIC,j,st=this.constraints,F=U;R.norm();var _t=R.x,dt=R.y,xt=R.z,rt=0;for(G&&(j=performance.now()),rt=0;rt!==tt;rt++){var ut=H[rt];if(ut.type&nt){var D=ut.force,E=ut.mass;D.x+=E*_t,D.y+=E*dt,D.z+=E*xt}}for(var rt=0,et=this.subsystems.length;rt!==et;rt++)this.subsystems[rt].update();G&&(j=performance.now()),K.length=0,V.length=0,this.broadphase.collisionPairs(this,K,V),G&&($.broadphase=performance.now()-j);var $t=st.length;for(rt=0;rt!==$t;rt++){var Q=st[rt];if(!Q.collideConnected)for(var lt=K.length-1;lt>=0;lt-=1)(Q.bodyA===K[lt]&&Q.bodyB===V[lt]||Q.bodyB===K[lt]&&Q.bodyA===V[lt])&&(K.splice(lt,1),V.splice(lt,1))}this.collisionMatrixTick(),G&&(j=performance.now());var ht=b,Lt=J.length;for(rt=0;rt!==Lt;rt++)ht.push(J[rt]);J.length=0;var ft=this.frictionEquations.length;for(rt=0;rt!==ft;rt++)F.push(this.frictionEquations[rt]);this.frictionEquations.length=0,this.narrowphase.getContacts(K,V,this,J,ht,this.frictionEquations,F),G&&($.narrowphase=performance.now()-j),G&&(j=performance.now());for(var rt=0;rt<this.frictionEquations.length;rt++)T.addEquation(this.frictionEquations[rt]);for(var Tt=J.length,Ft=0;Ft!==Tt;Ft++){var Q=J[Ft],ut=Q.bi,mt=Q.bj;Q.si,Q.sj;var Ct;if(ut.material&&mt.material?Ct=this.getContactMaterial(ut.material,mt.material)||this.defaultContactMaterial:Ct=this.defaultContactMaterial,Ct.friction,ut.material&&mt.material&&(ut.material.friction>=0&&mt.material.friction>=0&&ut.material.friction*mt.material.friction,ut.material.restitution>=0&&mt.material.restitution>=0&&(Q.restitution=ut.material.restitution*mt.material.restitution)),T.addEquation(Q),ut.allowSleep&&ut.type===v.DYNAMIC&&ut.sleepState===v.SLEEPING&&mt.sleepState===v.AWAKE&&mt.type!==v.STATIC){var Xt=mt.velocity.norm2()+mt.angularVelocity.norm2(),Vt=Math.pow(mt.sleepSpeedLimit,2);Xt>=Vt*2&&(ut._wakeUpAfterNarrowphase=!0)}if(mt.allowSleep&&mt.type===v.DYNAMIC&&mt.sleepState===v.SLEEPING&&ut.sleepState===v.AWAKE&&ut.type!==v.STATIC){var kt=ut.velocity.norm2()+ut.angularVelocity.norm2(),Qt=Math.pow(ut.sleepSpeedLimit,2);kt>=Qt*2&&(mt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ut,mt,!0),this.collisionMatrixPrevious.get(ut,mt)||(M.body=mt,M.contact=Q,ut.dispatchEvent(M),M.body=ut,mt.dispatchEvent(M))}for(G&&($.makeContactConstraints=performance.now()-j,j=performance.now()),rt=0;rt!==tt;rt++){var ut=H[rt];ut._wakeUpAfterNarrowphase&&(ut.wakeUp(),ut._wakeUpAfterNarrowphase=!1)}var $t=st.length;for(rt=0;rt!==$t;rt++){var Q=st[rt];Q.update();for(var lt=0,te=Q.equations.length;lt!==te;lt++){var re=Q.equations[lt];T.addEquation(re)}}T.solve(N,this),G&&($.solve=performance.now()-j),T.removeAllEquations();var ce=Math.pow;for(rt=0;rt!==tt;rt++){var ut=H[rt];if(ut.type&nt){var Gt=ce(1-ut.linearDamping,N),O=ut.velocity;O.mult(Gt,O);var St=ut.angularVelocity;if(St){var Et=ce(1-ut.angularDamping,N);St.mult(Et,St)}}}for(this.dispatchEvent(S),rt=0;rt!==tt;rt++){var ut=H[rt];ut.preStep&&ut.preStep.call(ut)}G&&(j=performance.now());var Wt=q,Ht=ot,oe=this.stepnumber,he=v.DYNAMIC|v.KINEMATIC,de=oe%(this.quatNormalizeSkip+1)===0,Te=this.quatNormalizeFast,ue=N*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,rt=0;rt!==tt;rt++){var me=H[rt],at=me.force,ct=me.torque;if(me.type&he&&me.sleepState!==v.SLEEPING){var vt=me.velocity,gt=me.angularVelocity,jt=me.position,It=me.quaternion,wt=me.invMass,Pt=me.invInertiaWorld;vt.x+=at.x*wt*N,vt.y+=at.y*wt*N,vt.z+=at.z*wt*N,me.angularVelocity&&(Pt.vmult(ct,k),k.mult(N,k),k.vadd(gt,gt)),jt.x+=vt.x*N,jt.y+=vt.y*N,jt.z+=vt.z*N,me.angularVelocity&&(Wt.set(gt.x,gt.y,gt.z,0),Wt.mult(It,Ht),It.x+=ue*Ht.x,It.y+=ue*Ht.y,It.z+=ue*Ht.z,It.w+=ue*Ht.w,de&&(Te?It.normalizeFast():It.normalize())),me.aabb&&(me.aabbNeedsUpdate=!0),me.updateInertiaWorld&&me.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&($.integrate=performance.now()-j),this.time+=N,this.stepnumber+=1,this.dispatchEvent(I),rt=0;rt!==tt;rt++){var ut=H[rt],it=ut.postStep;it&&it.call(ut)}if(this.allowSleep)for(rt=0;rt!==tt;rt++)H[rt].sleepTick(this.time)},x.prototype.clearForces=function(){for(var N=this.bodies,J=N.length,K=0;K!==J;K++){var V=N[K];V.force,V.torque,V.force.set(0,0,0),V.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(bc);var $n=bc.exports;function Nl(o,t){if(t===Th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===co||t===Zl){let e=o.getIndex();if(e===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===co)for(let s=1;s<=n;s++)i.push(e.getX(0)),i.push(e.getX(s)),i.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(e.getX(s)),i.push(e.getX(s+1)),i.push(e.getX(s+2))):(i.push(e.getX(s+2)),i.push(e.getX(s+1)),i.push(e.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class cg extends Ji{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new pg(e)}),this.register(function(e){return new Eg(e)}),this.register(function(e){return new wg(e)}),this.register(function(e){return new Ag(e)}),this.register(function(e){return new vg(e)}),this.register(function(e){return new gg(e)}),this.register(function(e){return new _g(e)}),this.register(function(e){return new yg(e)}),this.register(function(e){return new fg(e)}),this.register(function(e){return new xg(e)}),this.register(function(e){return new mg(e)}),this.register(function(e){return new Sg(e)}),this.register(function(e){return new Mg(e)}),this.register(function(e){return new ug(e)}),this.register(function(e){return new Tg(e)}),this.register(function(e){return new bg(e)})}load(t,e,n,i){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const h=mr.extractUrlBase(t);s=mr.resolveURL(h,this.path)}else s=mr.extractUrlBase(t);this.manager.itemStart(t);const a=function(h){i?i(h):console.error(h),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Tc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{r.parse(h,s,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const s={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Rc){try{s[se.KHR_BINARY_GLTF]=new Rg(t)}catch(c){i&&i(c);return}r=JSON.parse(s[se.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Hg(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,s[c.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const c=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(c){case se.KHR_MATERIALS_UNLIT:s[c]=new dg;break;case se.KHR_DRACO_MESH_COMPRESSION:s[c]=new Cg(r,this.dracoLoader);break;case se.KHR_TEXTURE_TRANSFORM:s[c]=new Pg;break;case se.KHR_MESH_QUANTIZATION:s[c]=new Lg;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(s),h.setPlugins(a),h.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function hg(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const se={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ug{constructor(t){this.parser=t,this.name=se.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let h;const u=new Jt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ke);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Zv(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Kv(u),h.distance=c;break;case"spot":h=new Oo(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Wn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(h),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class dg{constructor(){this.name=se.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(t,e,n){const i=[];t.color=new Jt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],ke),t.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ke))}return Promise.all(i)}}class fg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class pg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(e.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new zt(a,a)}return Promise.all(r)}}class mg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(e.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(e.iridescenceIOR=s.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class vg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Jt(0,0,0),e.sheenRoughness=0,e.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ke)}return s.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,Ke)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class gg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(e.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class _g{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture)),e.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return e.attenuationColor=new Jt().setRGB(a[0],a[1],a[2],ke),Promise.all(r)}}class yg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class xg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return e.specularColor=new Jt().setRGB(a[0],a[1],a[2],ke),s.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,Ke)),Promise.all(r)}}class Mg{constructor(t){this.parser=t,this.name=se.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",s.bumpTexture)),Promise.all(r)}}class Sg{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Fn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(e.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(e.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class Eg{constructor(t){this.parser=t,this.name=se.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,s)}}class wg{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Ag{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Tg{constructor(t){this.name=se.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(a,l,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*c);return s.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class bg{constructor(t){this.name=se.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==on.TRIANGLES&&h.mode!==on.TRIANGLE_STRIP&&h.mode!==on.TRIANGLE_FAN&&h.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const h in s)a.push(this.parser.getDependency("accessor",s[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const v of c){const g=new ee,p=new W,m=new ti,y=new W(1,1,1),_=new vv(v.geometry,v.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,g.compose(p,m,y));for(const x in l)if(x==="_COLOR_0"){const A=l[x];_.instanceColor=new fo(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);Re.prototype.copy.call(_,v),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Rc="glTF",lr=12,Dl={JSON:1313821514,BIN:5130562};class Rg{constructor(t){this.name=se.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,lr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Rc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-lr,r=new DataView(t,lr);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Dl.JSON){const h=new Uint8Array(t,lr+s,a);this.content=n.decode(h)}else if(l===Dl.BIN){const h=lr+s;this.body=t.slice(h,h+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cg{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=se.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},l={},h={};for(const u in s){const c=vo[u]||u.toLowerCase();a[c]=s[u]}for(const u in t.attributes){const c=vo[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[t.attributes[u]],f=Bi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const v in f.attributes){const g=f.attributes[v],p=l[v];p!==void 0&&(g.normalized=p)}c(f)},a,h,ke,d)})})}}class Pg{constructor(){this.name=se.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Lg{constructor(){this.name=se.KHR_MESH_QUANTIZATION}}class Cc extends Sr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let s=0;s!==i;s++)e[s]=n[r+s];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-e,c=(n-e)/u,d=c*c,f=d*c,v=t*h,g=v-h,p=-2*f+3*d,m=f-d,y=1-p,_=m-d+c;for(let x=0;x!==a;x++){const A=s[g+x+a],C=s[g+x+l]*u,L=s[v+x+a],I=s[v+x]*u;r[x]=y*A+_*C+p*L+m*I}return r}}const Ig=new ti;class Ng extends Cc{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Ig.fromArray(r).normalize().toArray(r),r}}const on={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ul={9728:Ze,9729:en,9984:Vl,9985:Qr,9986:cr,9987:In},Fl={33071:qn,33648:ns,10497:Vi},no={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dg={CUBICSPLINE:void 0,LINEAR:ki,STEP:gr},io={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ug(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),o.DefaultMaterial}function ai(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Wn(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Fg(o,t,e){let n=!1,i=!1,r=!1;for(let h=0,u=t.length;h<u;h++){const c=t[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let h=0,u=t.length;h<u;h++){const c=t[h];if(n){const d=c.POSITION!==void 0?e.getDependency("accessor",c.POSITION):o.attributes.position;s.push(d)}if(i){const d=c.NORMAL!==void 0?e.getDependency("accessor",c.NORMAL):o.attributes.normal;a.push(d)}if(r){const d=c.COLOR_0!==void 0?e.getDependency("accessor",c.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=c),r&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Bg(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Og(o){let t;const e=o.extensions&&o.extensions[se.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ro(e.attributes):t=o.indices+":"+ro(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+ro(o.targets[n]);return t}function ro(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function go(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zg(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Vg=new ee;class Hg{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new hg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Fo(this.options.manager):this.textureLoader=new $v(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return ai(r,a,i),Wn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const s=e[i].joints;for(let a=0,l=s.length;a<l;a++)t[s[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const s=t[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[h,u]of s.children.entries())r(u,a.children[h])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[se.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(mr.resolveURL(e.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const s=no[i.type],a=Bi[i.componentType],l=i.normalized===!0,h=new a(i.count*s);return Promise.resolve(new Je(h,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=no[i.type],h=Bi[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,p;if(f&&f!==c){const m=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let _=e.cache.get(y);_||(g=new h(a,m*f,i.count*f/u),_=new uv(g,f/u),e.cache.add(y,_)),p=new bo(_,l,d%f/u,v)}else a===null?g=new h(i.count*l):g=new h(a,d,i.count*l),p=new Je(g,l,v);if(i.sparse!==void 0){const m=no.SCALAR,y=Bi[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new y(s[1],_,i.sparse.count*m),C=new h(s[2],x,i.sparse.count*l);a!==null&&(p=new Je(p.array.slice(),p.itemSize,p.normalized));for(let L=0,I=A.length;L<I;L++){const S=A[L];if(p.setX(S,C[L*l]),l>=2&&p.setY(S,C[L*l+1]),l>=3&&p.setZ(S,C[L*l+2]),l>=4&&p.setW(S,C[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,s=e.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,s=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=Ul[d.magFilter]||en,u.minFilter=Ul[d.minFilter]||In,u.wrapS=Fl[d.wrapS]||Vi,u.wrapT=Fl[d.wrapT]||Vi,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(c=>c.clone());const s=i.images[t],a=self.URL||self.webkitURL;let l=s.uri||"",h=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let v=d;e.isImageBitmapLoader===!0&&(v=function(g){const p=new Be(g);p.needsUpdate=!0,d(p)}),e.load(mr.resolveURL(c,r.path),v,void 0,f)})}).then(function(c){return h===!0&&a.revokeObjectURL(l),c.userData.mimeType=s.mimeType||zg(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[se.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[se.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[se.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.colorSpace=i),t[e]=s,s})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yc,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Co,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Uo}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let s;const a={},l=r.extensions||{},h=[];if(l[se.KHR_MATERIALS_UNLIT]){const c=i[se.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),h.push(c.extendParams(a,r,e))}else{const c=r.pbrMetallicRoughness||{};if(a.color=new Jt(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ke),a.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(e.assignTexture(a,"map",c.baseColorTexture,Ke)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(e.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=gn);const u=r.alphaMode||io.OPAQUE;if(u===io.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===io.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==di&&(h.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new zt(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;a.normalScale.set(c,c)}if(r.occlusionTexture!==void 0&&s!==di&&(h.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==di){const c=r.emissiveFactor;a.emissive=new Jt().setRGB(c[0],c[1],c[2],ke)}return r.emissiveTexture!==void 0&&s!==di&&h.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ke)),Promise.all(h).then(function(){const c=new s(a);return r.name&&(c.name=r.name),Wn(c,r),e.associations.set(c,{materials:t}),r.extensions&&ai(i,c,r),c})}createUniqueName(t){const e=ge.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Bl(l,a,e)})}const s=[];for(let a=0,l=t.length;a<l;a++){const h=t[a],u=Og(h),c=i[u];if(c)s.push(c.promise);else{let d;h.extensions&&h.extensions[se.KHR_DRACO_MESH_COMPRESSION]?d=r(h):d=Bl(new rn,h,e),i[u]={primitive:h,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let l=0,h=s.length;l<h;l++){const u=s[l].material===void 0?Ug(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(e.loadGeometries(s)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,v=u.length;f<v;f++){const g=u[f],p=s[f];let m;const y=h[f];if(p.mode===on.TRIANGLES||p.mode===on.TRIANGLE_STRIP||p.mode===on.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new fv(g,y):new Ve(g,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===on.TRIANGLE_STRIP?m.geometry=Nl(m.geometry,Zl):p.mode===on.TRIANGLE_FAN&&(m.geometry=Nl(m.geometry,co));else if(p.mode===on.LINES)m=new _c(g,y);else if(p.mode===on.LINE_STRIP)m=new Po(g,y);else if(p.mode===on.LINE_LOOP)m=new gv(g,y);else if(p.mode===on.POINTS)m=new _v(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Bg(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),Wn(m,r),p.extensions&&ai(i,m,p),e.assignFinalMaterial(m),c.push(m)}for(let f=0,v=c.length;f<v;f++)e.associations.set(c[f],{meshes:t,primitives:f});if(c.length===1)return r.extensions&&ai(i,c[0],r),c[0];const d=new Yn;r.extensions&&ai(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,v=c.length;f<v;f++)d.add(c[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new je(Qh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ao(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Wn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c){a.push(c);const d=new ee;r!==null&&d.fromArray(r.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new Ro(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,s=[],a=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],v=i.samplers[f.sampler],g=f.target,p=g.node,m=i.parameters!==void 0?i.parameters[v.input]:v.input,y=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(s.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),h.push(v),u.push(g))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=[];for(let y=0,_=d.length;y<_;y++){const x=d[y],A=f[y],C=v[y],L=g[y],I=p[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,A,C,L,I);if(S)for(let M=0;M<S.length;M++)m.push(S[M])}return new zv(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),s=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)s.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vg)});for(let f=0,v=c.length;f<v;f++)u.add(c[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){a.push(h)}),this.nodeCache[t]=Promise.all(a).then(function(h){let u;if(r.isBone===!0?u=new vc:h.length>1?u=new Yn:h.length===1?u=h[0]:u=new Re,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(r.name&&(u.userData.name=r.name,u.name=s),Wn(u,r),r.extensions&&ai(n,u,r),r.matrix!==void 0){const c=new ee;c.fromArray(r.matrix),u.applyMatrix4(c)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Yn;n.name&&(r.name=i.createUniqueName(n.name)),Wn(r,n),n.extensions&&ai(e,r,n);const s=n.nodes||[],a=[];for(let l=0,h=s.length;l<h;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let u=0,c=l.length;u<c;u++)r.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof pn||d instanceof Be)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(r),r})}_createAnimationTracks(t,e,n,i,r){const s=[],a=t.name?t.name:t.uuid,l=[];Gn[r.path]===Gn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let h;switch(Gn[r.path]){case Gn.weights:h=Xi;break;case Gn.rotation:h=pi;break;case Gn.position:case Gn.scale:h=qi;break;default:switch(n.itemSize){case 1:h=Xi;break;case 2:case 3:default:h=qi;break}break}const u=i.interpolation!==void 0?Dg[i.interpolation]:ki,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new h(l[d]+"."+Gn[r.path],e.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),s.push(v)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=go(e.constructor),i=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof pi?Ng:Cc;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kg(o,t,e){const n=t.attributes,i=new Un;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new W(l[0],l[1],l[2]),new W(h[0],h[1],h[2])),a.normalized){const u=go(Bi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new W,l=new W;for(let h=0,u=r.length;h<u;h++){const c=r[h];if(c.POSITION!==void 0){const d=e.json.accessors[c.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=go(Bi[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new xn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function Bl(o,t,e){const n=t.attributes,i=[];function r(s,a){return e.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=vo[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(t.indices!==void 0&&!o.index){const s=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(s)}return pe.workingColorSpace!==ke&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pe.workingColorSpace}" not supported.`),Wn(o,t),kg(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Fg(o,t.targets,e):o})}function En(o,t,e,n,i){const s=new Fo().load("public/textures/pin.png"),a=new Yn,l=new mo({color:16777215}),h=new mo({map:s}),u=new Ve(new ls(.2,.1,.55,32),l),c=new Ve(new ls(.15,.2,.25,32),h),d=new Ve(new Do(.1,.1,5,10),l);c.position.y=.7,d.position.y=.95,u.position.y=.3,a.add(u),a.add(c),a.add(d),a.castShadow=!0,a.receiveShadow=!0,a.scale.set(7,7,7),a.position.set(o,t,e-25),n.add(a);const f=new $n.Box(new $n.Vec3(.1,.275,.1)),v=new $n.Body({mass:1,shape:f});return v.position.set(o,t,e),i.addBody(v),v.userData||(v.userData={}),a.userData.physicsBody=v,v.userData.isPin=!0,a}const Oe=new hv,Gg=new Mr(30,100),Wg=new Fo,Xg=Wg.load("/public/textures/floor.png"),qg=new mo({map:Xg}),$i=new Ve(Gg,qg);$i.rotation.x=-.5*Math.PI;$i.position.x=0;$i.position.y=0;$i.position.z=-10;$i.receiveShadow=!0;Oe.add($i);const Yg=new lg(50);Oe.add(Yg);const nn=new $n.World,Kg=En(0,0,0,Oe,nn);En(1.5,0,-1.5,Oe,nn);En(-1.5,0,-1.5,Oe,nn);En(3,0,-3,Oe,nn);En(0,0,-3,Oe,nn);En(-3,0,-3,Oe,nn);En(4,0,-4.5,Oe,nn);En(1.5,0,-4.5,Oe,nn);En(-1.5,0,-4.5,Oe,nn);En(-4,0,-4.5,Oe,nn);const jg=new cg;let Pe;jg.load("/public/model/ball/scene.gltf",function(o){Pe=o.scene,Pe.scale.set(10,10,10),Pe.position.set(0,2,20),Oe.add(Pe);const t=new $n.Sphere(1),e=new $n.Body({mass:1,shape:t});e.position.set(0,2,20),nn.addBody(e),Pe.userData.physicsBody=e},function(o){console.log(o.loaded/o.total*100+"% loaded")},function(o){console.error(o)});const Qi=new je(45,window.innerWidth/window.innerHeight,.1,1e3);Qi.position.x=0;Qi.position.y=30;Qi.position.z=65;Qi.lookAt(Kg.position);Oe.add(Qi);let cs=!1,_o={x:0,y:0},hs={x:0,y:0},us=!1;document.addEventListener("mousedown",Zg,!1);document.addEventListener("mouseup",Jg,!1);document.addEventListener("mousemove",$g,!1);nn.addEventListener("postStep",function(){for(let o of nn.contacts)if(o.bi===Pe.userData.physicsBody||o.bj===Pe.userData.physicsBody){const t=o.bi===Pe.userData.physicsBody?o.bj:o.bi;t.userData.isPin&&t.applyLocalImpulse(new $n.Vec3(0,-10,0),new $n.Vec3)}});function Zg(o){cs=!0,_o={x:o.clientX,y:o.clientY},hs={x:0,y:0},us=!1,Pe&&Pe.velocity&&Pe.velocity.set(0,0,0)}function Jg(o){if(cs){cs=!1;const t={x:hs.x*.01,y:hs.y*.01};Pe&&(Pe.velocity=new W(-t.x,0,-t.y),us=!0)}}function $g(o){cs&&(hs={x:o.clientX-_o.x,y:o.clientY-_o.y})}function Qg(){us&&Pe&&Pe.velocity&&(Pe.position.x+=Pe.velocity.x,Pe.position.z+=Pe.velocity.z,Pe.velocity.multiplyScalar(.99),Pe.velocity.lengthSq()<.001&&(Pe.velocity=null,us=!1))}const t0=new Jv(16777215,.5);Oe.add(t0);const Ho=new Oo(16777215,1e4);Ho.position.set(10,30,90);Ho.castShadow=!0;Oe.add(Ho);const ko=new Oo(16777215,1e4);ko.position.set(-10,30,90);ko.castShadow=!0;Oe.add(ko);const tr=new cv({antialias:!0});tr.setClearColor(new Jt(16777215));tr.setPixelRatio(window.devicePixelRatio);tr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(tr.domElement);tr.shadowMap.enabled=!0;function Pc(){requestAnimationFrame(Pc),Qg(),tr.render(Oe,Qi)}Pc();
