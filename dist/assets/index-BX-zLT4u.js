(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="163",Mh=0,ya=1,wh=2,_c=1,Sh=2,Wn=3,Yn=0,on=1,Pn=2,ci=0,Ki=1,xa=2,_a=3,Ma=4,Eh=5,Si=100,Ah=101,Th=102,bh=103,Rh=104,Ch=200,Ph=201,Lh=202,Ih=203,Lo=204,Io=205,Nh=206,Dh=207,Uh=208,Fh=209,Bh=210,Oh=211,zh=212,Vh=213,Hh=214,kh=0,Gh=1,Wh=2,Mr=3,Xh=4,qh=5,Yh=6,Kh=7,qo=0,jh=1,Zh=2,hi=0,$h=1,Jh=2,Qh=3,tu=4,eu=5,nu=6,iu=7,wa="attached",su="detached",Mc=300,Ji=301,Qi=302,No=303,Do=304,Ir=306,ts=1e3,oi=1001,wr=1002,nn=1003,wc=1004,As=1005,cn=1006,xr=1007,Xn=1008,ui=1009,ru=1010,ou=1011,Sc=1012,Ec=1013,es=1014,In=1015,Sr=1016,Ac=1017,Tc=1018,Bs=1020,au=35902,lu=1021,cu=1022,Mn=1023,hu=1024,uu=1025,ji=1026,Ns=1027,bc=1028,Rc=1029,du=1030,Cc=1031,Pc=1033,Or=33776,zr=33777,Vr=33778,Hr=33779,Sa=35840,Ea=35841,Aa=35842,Ta=35843,Lc=36196,ba=37492,Ra=37496,Ca=37808,Pa=37809,La=37810,Ia=37811,Na=37812,Da=37813,Ua=37814,Fa=37815,Ba=37816,Oa=37817,za=37818,Va=37819,Ha=37820,ka=37821,kr=36492,Ga=36494,Wa=36495,fu=36283,Xa=36284,qa=36285,Ya=36286,Ds=2300,ns=2301,Gr=2302,Ka=2400,ja=2401,Za=2402,pu=2500,mu=0,Ic=1,Uo=2,vu=3200,gu=3201,Yo=0,yu=1,ri="",tn="srgb",qe="srgb-linear",Ko="display-p3",Nr="display-p3-linear",Er="linear",Te="srgb",Ar="rec709",Tr="p3",Ci=7680,$a=519,xu=512,_u=513,Mu=514,Nc=515,wu=516,Su=517,Eu=518,Au=519,Fo=35044,Ja="300 es",qn=2e3,br=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qa=1234567;const bs=Math.PI/180,is=180/Math.PI;function Sn(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[a&255]+Ke[a>>8&255]+Ke[a>>16&255]+Ke[a>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Be(a,t,e){return Math.max(t,Math.min(e,a))}function jo(a,t){return(a%t+t)%t}function Tu(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function bu(a,t,e){return a!==t?(e-a)/(t-a):0}function Rs(a,t,e){return(1-e)*a+e*t}function Ru(a,t,e,n){return Rs(a,t,1-Math.exp(-e*n))}function Cu(a,t=1){return t-Math.abs(jo(a,t*2)-t)}function Pu(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function Lu(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function Iu(a,t){return a+Math.floor(Math.random()*(t-a+1))}function Nu(a,t){return a+Math.random()*(t-a)}function Du(a){return a*(.5-Math.random())}function Uu(a){a!==void 0&&(Qa=a);let t=Qa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fu(a){return a*bs}function Bu(a){return a*is}function Ou(a){return(a&a-1)===0&&a!==0}function zu(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Vu(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Hu(a,t,e,n,i){const s=Math.cos,r=Math.sin,o=s(e/2),l=r(e/2),c=s((t+n)/2),u=r((t+n)/2),h=s((t-n)/2),d=r((t-n)/2),f=s((n-t)/2),m=r((n-t)/2);switch(i){case"XYX":a.set(o*u,l*h,l*d,o*c);break;case"YZY":a.set(l*d,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*d,o*u,o*c);break;case"XZX":a.set(o*u,l*m,l*f,o*c);break;case"YXY":a.set(l*f,o*u,l*m,o*c);break;case"ZYZ":a.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function xe(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ku={DEG2RAD:bs,RAD2DEG:is,generateUUID:Sn,clamp:Be,euclideanModulo:jo,mapLinear:Tu,inverseLerp:bu,lerp:Rs,damp:Ru,pingpong:Cu,smoothstep:Pu,smootherstep:Lu,randInt:Iu,randFloat:Nu,randFloatSpread:Du,seededRandom:Uu,degToRad:Fu,radToDeg:Bu,isPowerOfTwo:Ou,ceilPowerOfTwo:zu,floorPowerOfTwo:Vu,setQuaternionFromProperEuler:Hu,normalize:xe,denormalize:_n};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,i,s,r,o,l,c){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,o,l,c)}set(t,e,n,i,s,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],g=i[0],p=i[3],v=i[6],y=i[1],x=i[4],_=i[7],A=i[2],b=i[5],L=i[8];return s[0]=r*g+o*y+l*A,s[3]=r*p+o*x+l*b,s[6]=r*v+o*_+l*L,s[1]=c*g+u*y+h*A,s[4]=c*p+u*x+h*b,s[7]=c*v+u*_+h*L,s[2]=d*g+f*y+m*A,s[5]=d*p+f*x+m*b,s[8]=d*v+f*_+m*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*r-o*c,d=o*l-u*s,f=c*s-r*l,m=e*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*r)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wr.makeScale(t,e)),this}rotate(t){return this.premultiply(Wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new oe;function Dc(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Us(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Gu(){const a=Us("canvas");return a.style.display="block",a}const tl={};function Uc(a){a in tl||(tl[a]=!0,console.warn(a))}const el=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nl=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ks={[qe]:{transfer:Er,primaries:Ar,toReference:a=>a,fromReference:a=>a},[tn]:{transfer:Te,primaries:Ar,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Nr]:{transfer:Er,primaries:Tr,toReference:a=>a.applyMatrix3(nl),fromReference:a=>a.applyMatrix3(el)},[Ko]:{transfer:Te,primaries:Tr,toReference:a=>a.convertSRGBToLinear().applyMatrix3(nl),fromReference:a=>a.applyMatrix3(el).convertLinearToSRGB()}},Wu=new Set([qe,Nr]),ge={enabled:!0,_workingColorSpace:qe,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Wu.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=ks[t].toReference,i=ks[e].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return ks[a].primaries},getTransfer:function(a){return a===ri?Er:ks[a].transfer}};function Zi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Xr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Pi;class Xu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Us("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qu=0;class Fc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(qr(i[r].image)):s.push(qr(i[r]))}else s=qr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function qr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Xu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class He extends as{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=oi,i=oi,s=cn,r=Xn,o=Mn,l=ui,c=He.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Sn(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ts:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ts:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Mc;He.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,i=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],g=l[2],p=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(f+1)/2,A=(v+1)/2,b=(u+d)/4,L=(h+g)/4,N=(m+p)/4;return x>_&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=L/n):_>A?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=b/i,s=N/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=L/s,i=N/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bc extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let fi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],f=s[r+1],m=s[r+2],g=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==m){let p=1-o;const v=l*d+c*f+u*m+h*g,y=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,v*y);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A}const _=o*y;if(l=l*p+d*_,c=c*p+f*_,u=u*p+m*_,h=h*p+g*_,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return t[e]=o*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-o*f,t[e+2]=c*m+u*f+o*d-l*h,t[e+3]=u*m-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),u=2*(o*e-s*i),h=2*(s*n-r*e);return this.x=e+l*c+r*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new Y,il=new fi;class Kn{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vn):vn.fromBufferAttribute(s,r),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(t.matrixWorld),this.union(Gs)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),Ws.subVectors(this.max,ms),Li.subVectors(t.a,ms),Ii.subVectors(t.b,ms),Ni.subVectors(t.c,ms),Zn.subVectors(Ii,Li),$n.subVectors(Ni,Ii),pi.subVectors(Li,Ni);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-pi.y,pi.x,0];return!Kr(e,Li,Ii,Ni,Ws)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,Li,Ii,Ni,Ws))?!1:(Xs.crossVectors(Zn,$n),e=[Xs.x,Xs.y,Xs.z],Kr(e,Li,Ii,Ni,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],vn=new Y,Gs=new Kn,Li=new Y,Ii=new Y,Ni=new Y,Zn=new Y,$n=new Y,pi=new Y,ms=new Y,Ws=new Y,Xs=new Y,mi=new Y;function Kr(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){mi.fromArray(a,s);const o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zu=new Kn,vs=new Y,jr=new Y;class Nn{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(jr)),this.expandByPoint(vs.copy(t.center).sub(jr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new Y,Zr=new Y,qs=new Y,Jn=new Y,$r=new Y,Ys=new Y,Jr=new Y;let Dr=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zr.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Zr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(qs),o=Jn.dot(this.direction),l=-Jn.dot(qs),c=Jn.lengthSq(),u=Math.abs(1-r*r);let h,d,f,m;if(u>0)if(h=r*l-o,d=r*o-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const g=1/u;h*=g,d*=g,f=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-r*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(r*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Zr).addScaledVector(qs,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,s){$r.subVectors(e,t),Ys.subVectors(n,t),Jr.crossVectors($r,Ys);let r=this.direction.dot(Jr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Jn.subVectors(this.origin,t);const l=o*this.direction.dot(Ys.crossVectors(Jn,Ys));if(l<0)return null;const c=o*this.direction.dot($r.cross(Jn));if(c<0||l+c>r)return null;const u=-o*Jn.dot(Jr);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class se{constructor(t,e,n,i,s,r,o,l,c,u,h,d,f,m,g,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,o,l,c,u,h,d,f,m,g,p)}set(t,e,n,i,s,r,o,l,c,u,h,d,f,m,g,p){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=d,v[3]=f,v[7]=m,v[11]=g,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),r=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=r*u,f=r*h,m=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,m=c*u,g=c*h;e[0]=d+g*o,e[4]=m*o-f,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-o,e[2]=f*o-m,e[6]=g+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,m=c*u,g=c*h;e[0]=d-g*o,e[4]=-r*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=r*u,e[9]=g-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,f=r*h,m=o*u,g=o*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,m=o*l,g=o*c;e[0]=l*u,e[4]=g-d*h,e[8]=m*h+f,e[1]=h,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-g*h}else if(t.order==="XZY"){const d=r*l,f=r*c,m=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=r*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($u,t,Ju)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Qn.crossVectors(n,an),Qn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Qn.crossVectors(n,an)),Qn.normalize(),Ks.crossVectors(an,Qn),i[0]=Qn.x,i[4]=Ks.x,i[8]=an.x,i[1]=Qn.y,i[5]=Ks.y,i[9]=an.y,i[2]=Qn.z,i[6]=Ks.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],g=n[6],p=n[10],v=n[14],y=n[3],x=n[7],_=n[11],A=n[15],b=i[0],L=i[4],N=i[8],w=i[12],M=i[1],T=i[5],F=i[9],I=i[13],X=i[2],q=i[6],at=i[10],G=i[14],D=i[3],J=i[7],j=i[11],H=i[15];return s[0]=r*b+o*M+l*X+c*D,s[4]=r*L+o*T+l*q+c*J,s[8]=r*N+o*F+l*at+c*j,s[12]=r*w+o*I+l*G+c*H,s[1]=u*b+h*M+d*X+f*D,s[5]=u*L+h*T+d*q+f*J,s[9]=u*N+h*F+d*at+f*j,s[13]=u*w+h*I+d*G+f*H,s[2]=m*b+g*M+p*X+v*D,s[6]=m*L+g*T+p*q+v*J,s[10]=m*N+g*F+p*at+v*j,s[14]=m*w+g*I+p*G+v*H,s[3]=y*b+x*M+_*X+A*D,s[7]=y*L+x*T+_*q+A*J,s[11]=y*N+x*F+_*at+A*j,s[15]=y*w+x*I+_*G+A*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],g=t[7],p=t[11],v=t[15];return m*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+s*r*d-i*r*f+i*c*u-s*l*u)+p*(+e*c*h-e*o*f-s*r*h+n*r*f+s*o*u-n*c*u)+v*(-i*o*u-e*l*h+e*o*d+i*r*h-n*r*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],g=t[13],p=t[14],v=t[15],y=h*p*c-g*d*c+g*l*f-o*p*f-h*l*v+o*d*v,x=m*d*c-u*p*c-m*l*f+r*p*f+u*l*v-r*d*v,_=u*g*c-m*h*c+m*o*f-r*g*f-u*o*v+r*h*v,A=m*h*l-u*g*l-m*o*d+r*g*d+u*o*p-r*h*p,b=e*y+n*x+i*_+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/b;return t[0]=y*L,t[1]=(g*d*s-h*p*s-g*i*f+n*p*f+h*i*v-n*d*v)*L,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*v+n*l*v)*L,t[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*L,t[4]=x*L,t[5]=(u*p*s-m*d*s+m*i*f-e*p*f-u*i*v+e*d*v)*L,t[6]=(m*l*s-r*p*s-m*i*c+e*p*c+r*i*v-e*l*v)*L,t[7]=(r*d*s-u*l*s+u*i*c-e*d*c-r*i*f+e*l*f)*L,t[8]=_*L,t[9]=(m*h*s-u*g*s-m*n*f+e*g*f+u*n*v-e*h*v)*L,t[10]=(r*g*s-m*o*s+m*n*c-e*g*c-r*n*v+e*o*v)*L,t[11]=(u*o*s-r*h*s-u*n*c+e*h*c+r*n*f-e*o*f)*L,t[12]=A*L,t[13]=(u*g*i-m*h*i+m*n*d-e*g*d-u*n*p+e*h*p)*L,t[14]=(m*o*i-r*g*i-m*n*l+e*g*l+r*n*p-e*o*p)*L,t[15]=(r*h*i-u*o*i+u*n*l-e*h*l-r*n*d+e*o*d)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,u=r+r,h=o+o,d=s*c,f=s*u,m=s*h,g=r*u,p=r*h,v=o*h,y=l*c,x=l*u,_=l*h,A=n.x,b=n.y,L=n.z;return i[0]=(1-(g+v))*A,i[1]=(f+_)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(d+v))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(m+x)*L,i[9]=(p-y)*L,i[10]=(1-(d+g))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Di.set(i[0],i[1],i[2]).length();const r=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);const c=1/s,u=1/r,h=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,e.setFromRotationMatrix(gn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r,o=qn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(o===qn)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(o===br)f=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,o=qn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(r-s),d=(e+t)*c,f=(n+i)*u;let m,g;if(o===qn)m=(r+s)*h,g=-2*h;else if(o===br)m=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new Y,gn=new se,$u=new Y(0,0,0),Ju=new Y(1,1,1),Qn=new Y,Ks=new Y,an=new Y,sl=new se,rl=new fi;class An{constructor(t=0,e=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qu=0;const ol=new Y,Ui=new fi,Vn=new se,js=new Y,gs=new Y,td=new Y,ed=new fi,al=new Y(1,0,0),ll=new Y(0,1,0),cl=new Y(0,0,1),hl={type:"added"},nd={type:"removed"},Fi={type:"childadded",child:null},Qr={type:"childremoved",child:null};class Le extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new Y,e=new An,n=new fi,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new oe}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(gs,js,this.up):Vn.lookAt(js,gs,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Vn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nd),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new Y(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new Y,Hn=new Y,to=new Y,kn=new Y,Bi=new Y,Oi=new Y,ul=new Y,eo=new Y,no=new Y,io=new Y;class Ln{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),Hn.subVectors(n,e),to.subVectors(t,e);const r=yn.dot(yn),o=yn.dot(Hn),l=yn.dot(to),c=Hn.dot(Hn),u=Hn.dot(to),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(r*u-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(r,kn.y),l.addScaledVector(o,kn.z),l)}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Hn.subVectors(t,e),yn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;Bi.subVectors(i,n),Oi.subVectors(s,n),eo.subVectors(t,n);const l=Bi.dot(eo),c=Oi.dot(eo);if(l<=0&&c<=0)return e.copy(n);no.subVectors(t,i);const u=Bi.dot(no),h=Oi.dot(no);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Bi,r);io.subVectors(t,s);const f=Bi.dot(io),m=Oi.dot(io);if(m>=0&&f<=m)return e.copy(s);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Oi,o);const p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return ul.subVectors(s,i),o=(h-u)/(h-u+(f-m)),e.copy(i).addScaledVector(ul,o);const v=1/(p+g+d);return r=g*v,o=d*v,e.copy(n).addScaledVector(Bi,r).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function so(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=jo(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=so(r,s,t+1/3),this.g=so(r,s,t),this.b=so(r,s,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=zc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ge.fromWorkingColorSpace(je.copy(this),t),Math.round(Be(je.r*255,0,255))*65536+Math.round(Be(je.g*255,0,255))*256+Math.round(Be(je.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(je.copy(this),e);const n=je.r,i=je.g,s=je.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=tn){ge.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,i=je.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Zs);const n=Rs(ti.h,Zs.h,e),i=Rs(ti.s,Zs.s,e),s=Rs(ti.l,Zs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Qt;Qt.NAMES=zc;let id=0;class En extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ki,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Io,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ti extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new Y,$s=new Vt;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Uc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fo&&(t.usage=this.usage),t}}class Vc extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hc extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xe extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sd=0;const fn=new se,ro=new Le,zi=new Y,ln=new Kn,ys=new Kn,Ve=new Y;class un extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Hc:Vc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new oe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(ln.min,ys.min),ln.expandByPoint(Ve),Ve.addVectors(ln.max,ys.max),ln.expandByPoint(Ve)):(ln.expandByPoint(ys.min),ln.expandByPoint(ys.max))}ln.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ve.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(t,c),Ve.add(zi)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new Y,l[N]=new Y;const c=new Y,u=new Y,h=new Y,d=new Vt,f=new Vt,m=new Vt,g=new Y,p=new Y;function v(N,w,M){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(T),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(T),o[N].add(g),o[w].add(g),o[M].add(g),l[N].add(p),l[w].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,w=y.length;N<w;++N){const M=y[N],T=M.start,F=M.count;for(let I=T,X=T+F;I<X;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new Y,_=new Y,A=new Y,b=new Y;function L(N){A.fromBufferAttribute(i,N),b.copy(A);const w=o[N];x.copy(w),x.sub(A.multiplyScalar(A.dot(w))).normalize(),_.crossVectors(b,w);const T=_.dot(l[N])<0?-1:1;r.setXYZW(N,x.x,x.y,x.z,T)}for(let N=0,w=y.length;N<w;++N){const M=y[N],T=M.start,F=M.count;for(let I=T,X=T+F;I<X;I+=3)L(t.getX(I+0)),L(t.getX(I+1)),L(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new Y,s=new Y,r=new Y,o=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let v=0;v<u;v++)d[m++]=c[f++]}return new sn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new se,vi=new Dr,Js=new Nn,fl=new Y,Vi=new Y,Hi=new Y,ki=new Y,oo=new Y,Qs=new Y,tr=new Vt,er=new Vt,nr=new Vt,pl=new Y,ml=new Y,vl=new Y,ir=new Y,sr=new Y;class We extends Le{constructor(t=new un,e=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(oo.fromBufferAttribute(h,t),r?Qs.addScaledVector(oo,u):Qs.addScaledVector(oo.sub(e),u))}e.add(Qs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(Js.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Js,fl)===null||vi.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(s).invert(),vi.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const p=d[m],v=r[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){const b=o.getX(_),L=o.getX(_+1),N=o.getX(_+2);i=rr(this,v,t,n,c,u,h,b,L,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=m,v=g;p<v;p+=3){const y=o.getX(p),x=o.getX(p+1),_=o.getX(p+2);i=rr(this,r,t,n,c,u,h,y,x,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const p=d[m],v=r[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){const b=_,L=_+1,N=_+2;i=rr(this,v,t,n,c,u,h,b,L,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=m,v=g;p<v;p+=3){const y=p,x=p+1,_=p+2;i=rr(this,r,t,n,c,u,h,y,x,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function rd(a,t,e,n,i,s,r,o){let l;if(t.side===on?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===Yn,o),l===null)return null;sr.copy(o),sr.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:a}}function rr(a,t,e,n,i,s,r,o,l,c){a.getVertexPosition(o,Vi),a.getVertexPosition(l,Hi),a.getVertexPosition(c,ki);const u=rd(a,t,e,n,Vi,Hi,ki,ir);if(u){i&&(tr.fromBufferAttribute(i,o),er.fromBufferAttribute(i,l),nr.fromBufferAttribute(i,c),u.uv=Ln.getInterpolation(ir,Vi,Hi,ki,tr,er,nr,new Vt)),s&&(tr.fromBufferAttribute(s,o),er.fromBufferAttribute(s,l),nr.fromBufferAttribute(s,c),u.uv1=Ln.getInterpolation(ir,Vi,Hi,ki,tr,er,nr,new Vt)),r&&(pl.fromBufferAttribute(r,o),ml.fromBufferAttribute(r,l),vl.fromBufferAttribute(r,c),u.normal=Ln.getInterpolation(ir,Vi,Hi,ki,pl,ml,vl,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};Ln.getNormal(Vi,Hi,ki,h.normal),u.face=h}return u}class Os extends un{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2));function m(g,p,v,y,x,_,A,b,L,N,w){const M=_/L,T=A/N,F=_/2,I=A/2,X=b/2,q=L+1,at=N+1;let G=0,D=0;const J=new Y;for(let j=0;j<at;j++){const H=j*T-I;for(let et=0;et<q;et++){const k=et*M-F;J[g]=k*y,J[p]=H*x,J[v]=X,c.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[v]=b>0?1:-1,u.push(J.x,J.y,J.z),h.push(et/L),h.push(1-j/N),G+=1}}for(let j=0;j<N;j++)for(let H=0;H<L;H++){const et=d+H+q*j,k=d+H+q*(j+1),C=d+(H+1)+q*(j+1),P=d+(H+1)+q*j;l.push(et,k,P),l.push(k,C,P),D+=6}o.addGroup(f,D,w),f+=D,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(a){const t={};for(let e=0;e<a.length;e++){const n=ss(a[e]);for(const i in n)t[i]=n[i]}return t}function od(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function kc(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const ad={clone:ss,merge:Qe};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gc extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new Y,gl=new Vt,yl=new Vt;class en extends Gc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,gl,yl),e.subVectors(yl,gl)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Wi=1;class hd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(Gi,Wi,t,e);i.layers=this.layers,this.add(i);const s=new en(Gi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new en(Gi,Wi,t,e);r.layers=this.layers,this.add(r);const o=new en(Gi,Wi,t,e);o.layers=this.layers,this.add(o);const l=new en(Gi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new en(Gi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,o,l]=e;for(const c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wc extends He{constructor(t,e,n,i,s,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,i,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ud extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Os(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ci});s.uniforms.tEquirect.value=e;const r=new We(i,s),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=cn),new hd(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const ao=new Y,dd=new Y,fd=new oe;class Mi{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ao.subVectors(n,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fd.getNormalMatrix(t),i=this.coplanarPoint(ao).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Nn,or=new Y;class Zo{constructor(t=new Mi,e=new Mi,n=new Mi,i=new Mi,s=new Mi,r=new Mi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],m=i[9],g=i[10],p=i[11],v=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,p-f,_-v).normalize(),n[1].setComponents(l+s,d+c,p+f,_+v).normalize(),n[2].setComponents(l+r,d+u,p+m,_+y).normalize(),n[3].setComponents(l-r,d-u,p-m,_-y).normalize(),n[4].setComponents(l-o,d-h,p-g,_-x).normalize(),e===qn)n[5].setComponents(l+o,d+h,p+g,_+x).normalize();else if(e===br)n[5].setComponents(o,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(or.x=i.normal.x>0?t.max.x:t.min.x,or.y=i.normal.y>0?t.max.y:t.min.y,or.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xc(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function pd(a){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(a.bindBuffer(c,o),h.count===-1&&d.length===0&&a.bufferSubData(c,0,u),d.length!==0){for(let f=0,m=d.length;f<m;f++){const g=d[f];a.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(a.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(a.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:r}}class zs extends un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],m=[],g=[],p=[];for(let v=0;v<u;v++){const y=v*d-r;for(let x=0;x<c;x++){const _=x*h-s;m.push(_,-y,0),g.push(0,0,1),p.push(x/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<o;y++){const x=y+c*v,_=y+c*(v+1),A=y+1+c*(v+1),b=y+1+c*v;f.push(x,_,b),f.push(_,A,b)}this.setIndex(f),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.widthSegments,t.heightSegments)}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`
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
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
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
}`,sf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,vf=`
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tf=`#if defined( USE_POINTS_UV )
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
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
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
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
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
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ep=`float getShadowMask() {
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`uniform float scale;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,Bp=`#define NORMAL
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
}`,Op=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,kp=`#define TOON
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
}`,Gp=`#define TOON
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
}`,Wp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Yp=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
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
}`,jp=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:md,alphahash_pars_fragment:vd,alphamap_fragment:gd,alphamap_pars_fragment:yd,alphatest_fragment:xd,alphatest_pars_fragment:_d,aomap_fragment:Md,aomap_pars_fragment:wd,batching_pars_vertex:Sd,batching_vertex:Ed,begin_vertex:Ad,beginnormal_vertex:Td,bsdfs:bd,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Nd,color_fragment:Dd,color_pars_fragment:Ud,color_pars_vertex:Fd,color_vertex:Bd,common:Od,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Hd,displacementmap_vertex:kd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:jd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:cf,envmap_vertex:$d,fog_vertex:Jd,fog_pars_vertex:Qd,fog_fragment:tf,fog_pars_fragment:ef,gradientmap_pars_fragment:nf,lightmap_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:of,lights_lambert_pars_fragment:af,lights_pars_begin:lf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:vf,lights_fragment_maps:gf,lights_fragment_end:yf,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:wf,map_fragment:Sf,map_pars_fragment:Ef,map_particle_fragment:Af,map_particle_pars_fragment:Tf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Rf,morphinstance_vertex:Cf,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:If,morphtarget_vertex:Nf,normal_fragment_begin:Df,normal_fragment_maps:Uf,normal_pars_fragment:Ff,normal_pars_vertex:Bf,normal_vertex:Of,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Gf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:qf,project_vertex:Yf,dithering_fragment:Kf,dithering_pars_fragment:jf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:tp,shadowmask_pars_fragment:ep,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:sp,skinnormal_vertex:rp,specularmap_fragment:op,specularmap_pars_fragment:ap,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:hp,transmission_pars_fragment:up,uv_pars_fragment:dp,uv_pars_vertex:fp,uv_vertex:pp,worldpos_vertex:mp,background_vert:vp,background_frag:gp,backgroundCube_vert:yp,backgroundCube_frag:xp,cube_vert:_p,cube_frag:Mp,depth_vert:wp,depth_frag:Sp,distanceRGBA_vert:Ep,distanceRGBA_frag:Ap,equirect_vert:Tp,equirect_frag:bp,linedashed_vert:Rp,linedashed_frag:Cp,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Ip,meshlambert_frag:Np,meshmatcap_vert:Dp,meshmatcap_frag:Up,meshnormal_vert:Fp,meshnormal_frag:Bp,meshphong_vert:Op,meshphong_frag:zp,meshphysical_vert:Vp,meshphysical_frag:Hp,meshtoon_vert:kp,meshtoon_frag:Gp,points_vert:Wp,points_frag:Xp,shadow_vert:qp,shadow_frag:Yp,sprite_vert:Kp,sprite_frag:jp},Ft={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Cn={basic:{uniforms:Qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Qe([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Qe([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Qe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Qe([Ft.points,Ft.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Qe([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Qe([Ft.common,Ft.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Qe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Qe([Ft.sprite,Ft.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Qe([Ft.common,Ft.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Qe([Ft.lights,Ft.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Cn.physical={uniforms:Qe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const ar={r:0,b:0,g:0},yi=new An,Zp=new se;function $p(a,t,e,n,i,s,r){const o=new Qt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(p,v){let y=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),y=!0);const _=a.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ir)?(u===void 0&&(u=new We(new Os(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:ss(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),yi.copy(v.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(yi)),u.material.toneMapped=ge.getTransfer(x.colorSpace)!==Te,(h!==x||d!==x.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new We(new zs(2,2),new di({name:"BackgroundMaterial",uniforms:ss(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ge.getTransfer(x.colorSpace)!==Te,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,v){p.getRGB(ar,kc(a)),n.buffers.color.setClear(ar.r,ar.g,ar.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:m}}function Jp(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function o(M,T,F,I,X){let q=!1;const at=h(I,F,T);s!==at&&(s=at,c(s.object)),q=f(M,I,F,X),q&&m(M,I,F,X),X!==null&&t.update(X,a.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,_(M,T,F,I),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return a.createVertexArray()}function c(M){return a.bindVertexArray(M)}function u(M){return a.deleteVertexArray(M)}function h(M,T,F){const I=F.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let q=X[T.id];q===void 0&&(q={},X[T.id]=q);let at=q[I];return at===void 0&&(at=d(l()),q[I]=at),at}function d(M){const T=[],F=[],I=[];for(let X=0;X<e;X++)T[X]=0,F[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,T,F,I){const X=s.attributes,q=T.attributes;let at=0;const G=F.getAttributes();for(const D in G)if(G[D].location>=0){const j=X[D];let H=q[D];if(H===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),j===void 0||j.attribute!==H||H&&j.data!==H.data)return!0;at++}return s.attributesNum!==at||s.index!==I}function m(M,T,F,I){const X={},q=T.attributes;let at=0;const G=F.getAttributes();for(const D in G)if(G[D].location>=0){let j=q[D];j===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const H={};H.attribute=j,j&&j.data&&(H.data=j.data),X[D]=H,at++}s.attributes=X,s.attributesNum=at,s.index=I}function g(){const M=s.newAttributes;for(let T=0,F=M.length;T<F;T++)M[T]=0}function p(M){v(M,0)}function v(M,T){const F=s.newAttributes,I=s.enabledAttributes,X=s.attributeDivisors;F[M]=1,I[M]===0&&(a.enableVertexAttribArray(M),I[M]=1),X[M]!==T&&(a.vertexAttribDivisor(M,T),X[M]=T)}function y(){const M=s.newAttributes,T=s.enabledAttributes;for(let F=0,I=T.length;F<I;F++)T[F]!==M[F]&&(a.disableVertexAttribArray(F),T[F]=0)}function x(M,T,F,I,X,q,at){at===!0?a.vertexAttribIPointer(M,T,F,X,q):a.vertexAttribPointer(M,T,F,I,X,q)}function _(M,T,F,I){g();const X=I.attributes,q=F.getAttributes(),at=T.defaultAttributeValues;for(const G in q){const D=q[G];if(D.location>=0){let J=X[G];if(J===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const j=J.normalized,H=J.itemSize,et=t.get(J);if(et===void 0)continue;const k=et.buffer,C=et.type,P=et.bytesPerElement,W=C===a.INT||C===a.UNSIGNED_INT||J.gpuType===Ec;if(J.isInterleavedBufferAttribute){const Q=J.data,it=Q.stride,Z=J.offset;if(Q.isInstancedInterleavedBuffer){for(let ot=0;ot<D.locationSize;ot++)v(D.location+ot,Q.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ot=0;ot<D.locationSize;ot++)p(D.location+ot);a.bindBuffer(a.ARRAY_BUFFER,k);for(let ot=0;ot<D.locationSize;ot++)x(D.location+ot,H/D.locationSize,C,j,it*P,(Z+H/D.locationSize*ot)*P,W)}else{if(J.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)v(D.location+Q,J.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<D.locationSize;Q++)p(D.location+Q);a.bindBuffer(a.ARRAY_BUFFER,k);for(let Q=0;Q<D.locationSize;Q++)x(D.location+Q,H/D.locationSize,C,j,H*P,H/D.locationSize*Q*P,W)}}else if(at!==void 0){const j=at[G];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(D.location,j);break;case 3:a.vertexAttrib3fv(D.location,j);break;case 4:a.vertexAttrib4fv(D.location,j);break;default:a.vertexAttrib1fv(D.location,j)}}}}y()}function A(){N();for(const M in n){const T=n[M];for(const F in T){const I=T[F];for(const X in I)u(I[X].object),delete I[X];delete T[F]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const F in T){const I=T[F];for(const X in I)u(I[X].object),delete I[X];delete T[F]}delete n[M.id]}function L(M){for(const T in n){const F=n[T];if(F[M.id]===void 0)continue;const I=F[M.id];for(const X in I)u(I[X].object),delete I[X];delete F[M.id]}}function N(){w(),r=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Qp(a,t,e){let n;function i(l){n=l}function s(l,c){a.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,u){u!==0&&(a.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(l[d],c[d]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function tm(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=e.precision!==void 0?e.precision:"highp";const o=s(r);o!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",o,"instead."),r=o);const l=e.logarithmicDepthBuffer===!0,c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_TEXTURE_SIZE),d=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),f=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),g=a.getParameter(a.MAX_VARYING_VECTORS),p=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,y=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:v,maxSamples:y}}function em(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Mi,o=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,v=a.get(h);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let _=v.clippingState||null;l.value=_,_=u(m,d,x,f);for(let A=0;A!==x;++A)_[A]=e[A];v.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const v=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<v)&&(p=new Float32Array(v));for(let x=0,_=f;x!==g;++x,_+=4)r.copy(h[x]).applyMatrix4(y,o),r.normal.toArray(p,_),p[_+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function nm(a){let t=new WeakMap;function e(r,o){return o===No?r.mapping=Ji:o===Do&&(r.mapping=Qi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===No||o===Do)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ud(l.height);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class $o extends Gc{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,xl=[.125,.215,.35,.446,.526,.582],Ei=20,lo=new $o,_l=new Qt;let co=null,ho=0,uo=0,fo=!1;const wi=(1+Math.sqrt(5))/2,Xi=1/wi,Ml=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,wi,Xi),new Y(0,wi,-Xi),new Y(Xi,0,wi),new Y(-Xi,0,wi),new Y(wi,Xi,0),new Y(-wi,Xi,0)];class wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(co,ho,uo),this._renderer.xr.enabled=fo,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Sr,format:Mn,colorSpace:qe,depthBuffer:!1},i=Sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=sm(s,t,e)}return i}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,i){const o=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_l),u.toneMapping=hi,u.autoClear=!1;const f=new Ti({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new We(new Os,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(_l),g=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):y===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const x=this._cubeSize;lr(i,y*x,v>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ji||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new We(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Ml[(i-1)%Ml.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new We(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),g=s/m,p=isFinite(s)?1+Math.floor(u*g):Ei;p>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const v=[];let y=0;for(let L=0;L<Ei;++L){const N=L/g,w=Math.exp(-N*N/2);v.push(w),L===0?y+=w:L<p&&(y+=2*w)}for(let L=0;L<v.length;L++)v[L]=v[L]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=v,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const _=this._sizeLods[i],A=3*_*(i>x-Yi?i-x+Yi:0),b=4*(this._cubeSize-_);lr(e,A,b,3*_,2*_),l.setRenderTarget(e),l.render(h,lo)}}function im(a){const t=[],e=[],n=[];let i=a;const s=a-Yi+1+xl.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-Yi?l=xl[r-a+Yi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,g=3,p=2,v=1,y=new Float32Array(g*m*f),x=new Float32Array(p*m*f),_=new Float32Array(v*m*f);for(let b=0;b<f;b++){const L=b%3*2/3-1,N=b>2?0:-1,w=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];y.set(w,g*m*b),x.set(d,p*m*b);const M=[b,b,b,b,b,b];_.set(M,v*m*b)}const A=new un;A.setAttribute("position",new sn(y,g)),A.setAttribute("uv",new sn(x,p)),A.setAttribute("faceIndex",new sn(_,v)),t.push(A),i>Yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sl(a,t,e){const n=new bi(a,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function sm(a,t,e){const n=new Float32Array(Ei),i=new Y(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function El(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Al(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function rm(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===No||l===Do,u=l===Ji||l===Qi;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new wl(a)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new wl(a)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function om(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function am(a,t,e,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let p=0,v=g.length;p<v;p++)t.remove(g[p])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)t.update(d[m],a.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const g=f[m];for(let p=0,v=g.length;p<v;p++)t.update(g[p],a.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let x=0,_=y.length;x<_;x+=3){const A=y[x+0],b=y[x+1],L=y[x+2];d.push(A,b,b,L,L,A)}}else if(m!==void 0){const y=m.array;g=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const A=x+0,b=x+1,L=x+2;d.push(A,b,b,L,L,A)}}else return;const p=new(Dc(d)?Hc:Vc)(d,1);p.version=g;const v=s.get(h);v&&t.remove(v),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function lm(a,t,e){let n;function i(h){n=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,d){a.drawElements(n,d,s,h*r),e.update(d,n,1)}function c(h,d,f){f!==0&&(a.drawElementsInstanced(n,d,s,h*r,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g]/r,d[g]);else{m.multiDrawElementsWEBGL(n,d,0,s,h,0,f);let g=0;for(let p=0;p<f;p++)g+=d[p];e.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cm(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hm(a,t,e){const n=new WeakMap,i=new Ee;function s(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),p===!0&&(_=3);let A=o.attributes.position.count*_,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const L=new Float32Array(A*b*4*h),N=new Bc(L,A,b,h);N.type=In,N.needsUpdate=!0;const w=_*4;for(let T=0;T<h;T++){const F=v[T],I=y[T],X=x[T],q=A*b*4*T;for(let at=0;at<F.count;at++){const G=at*w;m===!0&&(i.fromBufferAttribute(F,at),L[q+G+0]=i.x,L[q+G+1]=i.y,L[q+G+2]=i.z,L[q+G+3]=0),g===!0&&(i.fromBufferAttribute(I,at),L[q+G+4]=i.x,L[q+G+5]=i.y,L[q+G+6]=i.z,L[q+G+7]=0),p===!0&&(i.fromBufferAttribute(X,at),L[q+G+8]=i.x,L[q+G+9]=i.y,L[q+G+10]=i.z,L[q+G+11]=X.itemSize===4?i.w:1)}}d={count:h,texture:N,size:new Vt(A,b)},n.set(o,d),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function um(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class qc extends He{constructor(t,e,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:ji,u!==ji&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ji&&(n=es),n===void 0&&u===Ns&&(n=Bs),super(null,i,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yc=new He,Kc=new qc(1,1);Kc.compareFunction=Nc;const jc=new Bc,Zc=new ju,$c=new Wc,Tl=[],bl=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function ls(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Tl[i];if(s===void 0&&(s=new Float32Array(i),Tl[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function Oe(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function ze(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Ur(a,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function dm(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function fm(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;a.uniform2fv(this.addr,t),ze(e,t)}}function pm(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;a.uniform3fv(this.addr,t),ze(e,t)}}function mm(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;a.uniform4fv(this.addr,t),ze(e,t)}}function vm(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Pl.set(n),a.uniformMatrix2fv(this.addr,!1,Pl),ze(e,n)}}function gm(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Cl.set(n),a.uniformMatrix3fv(this.addr,!1,Cl),ze(e,n)}}function ym(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Rl.set(n),a.uniformMatrix4fv(this.addr,!1,Rl),ze(e,n)}}function xm(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function _m(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;a.uniform2iv(this.addr,t),ze(e,t)}}function Mm(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;a.uniform3iv(this.addr,t),ze(e,t)}}function wm(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;a.uniform4iv(this.addr,t),ze(e,t)}}function Sm(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Em(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;a.uniform2uiv(this.addr,t),ze(e,t)}}function Am(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;a.uniform3uiv(this.addr,t),ze(e,t)}}function Tm(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;a.uniform4uiv(this.addr,t),ze(e,t)}}function bm(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);const s=this.type===a.SAMPLER_2D_SHADOW?Kc:Yc;e.setTexture2D(t||s,i)}function Rm(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zc,i)}function Cm(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$c,i)}function Pm(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jc,i)}function Lm(a){switch(a){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return vm;case 35675:return gm;case 35676:return ym;case 5124:case 35670:return xm;case 35667:case 35671:return _m;case 35668:case 35672:return Mm;case 35669:case 35673:return wm;case 5125:return Sm;case 36294:return Em;case 36295:return Am;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Im(a,t){a.uniform1fv(this.addr,t)}function Nm(a,t){const e=ls(t,this.size,2);a.uniform2fv(this.addr,e)}function Dm(a,t){const e=ls(t,this.size,3);a.uniform3fv(this.addr,e)}function Um(a,t){const e=ls(t,this.size,4);a.uniform4fv(this.addr,e)}function Fm(a,t){const e=ls(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Bm(a,t){const e=ls(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Om(a,t){const e=ls(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function zm(a,t){a.uniform1iv(this.addr,t)}function Vm(a,t){a.uniform2iv(this.addr,t)}function Hm(a,t){a.uniform3iv(this.addr,t)}function km(a,t){a.uniform4iv(this.addr,t)}function Gm(a,t){a.uniform1uiv(this.addr,t)}function Wm(a,t){a.uniform2uiv(this.addr,t)}function Xm(a,t){a.uniform3uiv(this.addr,t)}function qm(a,t){a.uniform4uiv(this.addr,t)}function Ym(a,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Oe(n,s)||(a.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Yc,s[r])}function Km(a,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Oe(n,s)||(a.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Zc,s[r])}function jm(a,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Oe(n,s)||(a.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||$c,s[r])}function Zm(a,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Oe(n,s)||(a.uniform1iv(this.addr,s),ze(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||jc,s[r])}function $m(a){switch(a){case 5126:return Im;case 35664:return Nm;case 35665:return Dm;case 35666:return Um;case 35674:return Fm;case 35675:return Bm;case 35676:return Om;case 5124:case 35670:return zm;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return km;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Zm}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}}class tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function Ll(a,t){a.seq.push(t),a.map[t.id]=t}function ev(a,t,e){const n=a.name,i=n.length;for(po.lastIndex=0;;){const s=po.exec(n),r=po.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Ll(e,c===void 0?new Jm(o,a,t):new Qm(o,a,t));break}else{let h=e.map[o];h===void 0&&(h=new tv(o),Ll(e,h)),e=h}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);ev(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Il(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}const nv=37297;let iv=0;function sv(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function rv(a){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(a);let n;switch(t===e?n="":t===Tr&&e===Ar?n="LinearDisplayP3ToLinearSRGB":t===Ar&&e===Tr&&(n="LinearSRGBToLinearDisplayP3"),a){case qe:case Nr:return[n,"LinearTransferOETF"];case tn:case Ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function Nl(a,t,e){const n=a.getShaderParameter(t,a.COMPILE_STATUS),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+sv(a.getShaderSource(t),r)}else return i}function ov(a,t){const e=rv(t);return`vec4 ${a}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function av(a,t){let e;switch(t){case $h:e="Linear";break;case Jh:e="Reinhard";break;case Qh:e="OptimizedCineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lv(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function cv(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hv(a,t){const e={},n=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Ts(a){return a!==""}function Dl(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(a){return a.replace(uv,fv)}const dv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fv(a,t){let e=re[t];if(e===void 0){const n=dv.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bo(e)}const pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(a){return a.replace(pv,mv)}function mv(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bl(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vv(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function gv(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yv(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function xv(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case qo:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case Zh:t="ENVMAP_BLENDING_ADD";break}return t}function _v(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mv(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=vv(e),c=gv(e),u=yv(e),h=xv(e),d=_v(e),f=lv(e),m=cv(s),g=i.createProgram();let p,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),p.length>0&&(p+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ts).join(`
`),v.length>0&&(v+=`
`)):(p=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),v=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?re.tonemapping_pars_fragment:"",e.toneMapping!==hi?av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),r=Bo(r),r=Dl(r,e),r=Ul(r,e),o=Bo(o),o=Dl(o,e),o=Ul(o,e),r=Fl(r),o=Fl(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",e.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=y+p+r,_=y+v+o,A=Il(i,i.VERTEX_SHADER,x),b=Il(i,i.FRAGMENT_SHADER,_);i.attachShader(g,A),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(T){if(a.debug.checkShaderErrors){const F=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(b).trim();let q=!0,at=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,A,b);else{const G=Nl(i,A,"vertex"),D=Nl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+G+`
`+D)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(I===""||X==="")&&(at=!1);at&&(T.diagnostics={runnable:q,programLog:F,vertexShader:{log:I,prefix:p},fragmentShader:{log:X,prefix:v}})}i.deleteShader(A),i.deleteShader(b),N=new _r(i,g),w=hv(i,g)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,nv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let wv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ev(t),e.set(t,n)),n}}class Ev{constructor(t){this.id=wv++,this.code=t,this.usedTimes=0}}function Av(a,t,e,n,i,s,r){const o=new Oc,l=new Sv,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,M,T,F,I){const X=F.fog,q=I.geometry,at=w.isMeshStandardMaterial?F.environment:null,G=(w.isMeshStandardMaterial?e:t).get(w.envMap||at),D=G&&G.mapping===Ir?G.image.height:null,J=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,H=j!==void 0?j.length:0;let et=0;q.morphAttributes.position!==void 0&&(et=1),q.morphAttributes.normal!==void 0&&(et=2),q.morphAttributes.color!==void 0&&(et=3);let k,C,P,W;if(J){const Ce=Cn[J];k=Ce.vertexShader,C=Ce.fragmentShader}else k=w.vertexShader,C=w.fragmentShader,l.update(w),P=l.getVertexShaderID(w),W=l.getFragmentShaderID(w);const Q=a.getRenderTarget(),it=I.isInstancedMesh===!0,Z=I.isBatchedMesh===!0,ot=!!w.map,B=!!w.matcap,xt=!!G,ft=!!w.aoMap,Mt=!!w.lightMap,rt=!!w.bumpMap,dt=!!w.normalMap,U=!!w.displacementMap,S=!!w.emissiveMap,nt=!!w.metalnessMap,tt=!!w.roughnessMap,ct=w.anisotropy>0,ut=w.clearcoat>0,It=w.iridescence>0,pt=w.sheen>0,bt=w.transmission>0,Bt=ct&&!!w.anisotropyMap,vt=ut&&!!w.clearcoatMap,Pt=ut&&!!w.clearcoatNormalMap,Yt=ut&&!!w.clearcoatRoughnessMap,Ht=It&&!!w.iridescenceMap,Gt=It&&!!w.iridescenceThicknessMap,ee=pt&&!!w.sheenColorMap,te=pt&&!!w.sheenRoughnessMap,ne=!!w.specularMap,ae=!!w.specularColorMap,de=!!w.specularIntensityMap,Wt=bt&&!!w.transmissionMap,z=bt&&!!w.thicknessMap,St=!!w.gradientMap,Et=!!w.alphaMap,Xt=w.alphaTest>0,kt=!!w.alphaHash,ce=!!w.extensions;let fe=hi;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(fe=a.toneMapping);const me={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:k,fragmentShader:C,defines:w.defines,customVertexShaderID:P,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Z,instancing:it,instancingColor:it&&I.instanceColor!==null,instancingMorph:it&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?a.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qe,alphaToCoverage:!!w.alphaToCoverage,map:ot,matcap:B,envMap:xt,envMapMode:xt&&G.mapping,envMapCubeUVHeight:D,aoMap:ft,lightMap:Mt,bumpMap:rt,normalMap:dt,displacementMap:d&&U,emissiveMap:S,normalMapObjectSpace:dt&&w.normalMapType===yu,normalMapTangentSpace:dt&&w.normalMapType===Yo,metalnessMap:nt,roughnessMap:tt,anisotropy:ct,anisotropyMap:Bt,clearcoat:ut,clearcoatMap:vt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Yt,iridescence:It,iridescenceMap:Ht,iridescenceThicknessMap:Gt,sheen:pt,sheenColorMap:ee,sheenRoughnessMap:te,specularMap:ne,specularColorMap:ae,specularIntensityMap:de,transmission:bt,transmissionMap:Wt,thicknessMap:z,gradientMap:St,opaque:w.transparent===!1&&w.blending===Ki&&w.alphaToCoverage===!1,alphaMap:Et,alphaTest:Xt,alphaHash:kt,combine:w.combine,mapUv:ot&&g(w.map.channel),aoMapUv:ft&&g(w.aoMap.channel),lightMapUv:Mt&&g(w.lightMap.channel),bumpMapUv:rt&&g(w.bumpMap.channel),normalMapUv:dt&&g(w.normalMap.channel),displacementMapUv:U&&g(w.displacementMap.channel),emissiveMapUv:S&&g(w.emissiveMap.channel),metalnessMapUv:nt&&g(w.metalnessMap.channel),roughnessMapUv:tt&&g(w.roughnessMap.channel),anisotropyMapUv:Bt&&g(w.anisotropyMap.channel),clearcoatMapUv:vt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:te&&g(w.sheenRoughnessMap.channel),specularMapUv:ne&&g(w.specularMap.channel),specularColorMapUv:ae&&g(w.specularColorMap.channel),specularIntensityMapUv:de&&g(w.specularIntensityMap.channel),transmissionMapUv:Wt&&g(w.transmissionMap.channel),thicknessMapUv:z&&g(w.thicknessMap.channel),alphaMapUv:Et&&g(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(dt||ct),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(ot||Et),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&T.length>0,shadowMapType:a.shadowMap.type,toneMapping:fe,useLegacyLights:a._useLegacyLights,decodeVideoTexture:ot&&w.map.isVideoTexture===!0&&ge.getTransfer(w.map.colorSpace)===Te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pn,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ce&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function v(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const T in w.defines)M.push(T),M.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(y(M,w),x(M,w),M.push(a.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),w.push(o.mask)}function _(w){const M=m[w.type];let T;if(M){const F=Cn[M];T=ad.clone(F.uniforms)}else T=w.uniforms;return T}function A(w,M){let T;for(let F=0,I=u.length;F<I;F++){const X=u[F];if(X.cacheKey===M){T=X,++T.usedTimes;break}}return T===void 0&&(T=new Mv(a,M,w,s),u.push(T)),T}function b(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:_,acquireProgram:A,releaseProgram:b,releaseShaderCache:L,programs:u,dispose:N}}function Tv(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function bv(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Ol(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function zl(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(h,d,f,m,g,p){let v=a[t];return v===void 0?(v={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:g,group:p},a[t]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=f,v.groupOrder=m,v.renderOrder=h.renderOrder,v.z=g,v.group=p),t++,v}function o(h,d,f,m,g,p){const v=r(h,d,f,m,g,p);f.transmission>0?n.push(v):f.transparent===!0?i.push(v):e.push(v)}function l(h,d,f,m,g,p){const v=r(h,d,f,m,g,p);f.transmission>0?n.unshift(v):f.transparent===!0?i.unshift(v):e.unshift(v)}function c(h,d){e.length>1&&e.sort(h||bv),n.length>1&&n.sort(d||Ol),i.length>1&&i.sort(d||Ol)}function u(){for(let h=t,d=a.length;h<d;h++){const f=a[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Rv(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new zl,a.set(n,[r])):i>=s.length?(r=new zl,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function Cv(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new Qt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return a[t.id]=e,e}}}function Pv(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Lv=0;function Iv(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Nv(a){const t=new Cv,e=Pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new se,r=new se;function o(c,u){let h=0,d=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,g=0,p=0,v=0,y=0,x=0,_=0,A=0,b=0,L=0,N=0;c.sort(Iv);const w=u===!0?Math.PI:1;for(let T=0,F=c.length;T<F;T++){const I=c[T],X=I.color,q=I.intensity,at=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=X.r*q*w,d+=X.g*q*w,f+=X.b*q*w;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],q);N++}else if(I.isDirectionalLight){const D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const J=I.shadow,j=e.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=I.shadow.matrix,x++}n.directional[m]=D,m++}else if(I.isSpotLight){const D=t.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(X).multiplyScalar(q*w),D.distance=at,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[p]=D;const J=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,J.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[p]=J.matrix,I.castShadow){const j=e.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[p]=j,n.spotShadowMap[p]=G,A++}p++}else if(I.isRectAreaLight){const D=t.get(I);D.color.copy(X).multiplyScalar(q),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[v]=D,v++}else if(I.isPointLight){const D=t.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*w),D.distance=I.distance,D.decay=I.decay,I.castShadow){const J=I.shadow,j=e.get(I);j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=I.shadow.matrix,_++}n.point[g]=D,g++}else if(I.isHemisphereLight){const D=t.get(I);D.skyColor.copy(I.color).multiplyScalar(q*w),D.groundColor.copy(I.groundColor).multiplyScalar(q*w),n.hemi[y]=D,y++}}v>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==m||M.pointLength!==g||M.spotLength!==p||M.rectAreaLength!==v||M.hemiLength!==y||M.numDirectionalShadows!==x||M.numPointShadows!==_||M.numSpotShadows!==A||M.numSpotMaps!==b||M.numLightProbes!==N)&&(n.directional.length=m,n.spot.length=p,n.rectArea.length=v,n.point.length=g,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=A+b-L,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=N,M.directionalLength=m,M.pointLength=g,M.spotLength=p,M.rectAreaLength=v,M.hemiLength=y,M.numDirectionalShadows=x,M.numPointShadows=_,M.numSpotShadows=A,M.numSpotMaps=b,M.numLightProbes=N,n.version=Lv++)}function l(c,u){let h=0,d=0,f=0,m=0,g=0;const p=u.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const x=c[v];if(x.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),h++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),r.identity(),s.copy(x.matrixWorld),s.premultiply(p),r.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Vl(a){const t=new Nv(a),e=[],n=[];function i(){e.length=0,n.length=0}function s(u){e.push(u)}function r(u){n.push(u)}function o(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:i,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function Dv(a){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let o;return r===void 0?(o=new Vl(a),t.set(i,[o])):s>=r.length?(o=new Vl(a),r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Uv extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fv extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`;function zv(a,t,e){let n=new Zo;const i=new Vt,s=new Vt,r=new Ee,o=new Uv({depthPacking:gu}),l=new Fv,c={},u=e.maxTextureSize,h={[Yn]:on,[on]:Yn,[Pn]:Pn},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Bv,fragmentShader:Ov}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new un;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new We(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let v=this.type;this.render=function(b,L,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const w=a.getRenderTarget(),M=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),F=a.state;F.setBlending(ci),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=v!==Wn&&this.type===Wn,X=v===Wn&&this.type!==Wn;for(let q=0,at=b.length;q<at;q++){const G=b[q],D=G.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const J=D.getFrameExtents();if(i.multiply(J),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,D.mapSize.y=s.y)),D.map===null||I===!0||X===!0){const H=this.type!==Wn?{minFilter:nn,magFilter:nn}:{};D.map!==null&&D.map.dispose(),D.map=new bi(i.x,i.y,H),D.map.texture.name=G.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const j=D.getViewportCount();for(let H=0;H<j;H++){const et=D.getViewport(H);r.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),F.viewport(r),D.updateMatrices(G,H),n=D.getFrustum(),_(L,N,D.camera,G,this.type)}D.isPointLightShadow!==!0&&this.type===Wn&&y(D,N),D.needsUpdate=!1}v=this.type,p.needsUpdate=!1,a.setRenderTarget(w,M,T)};function y(b,L){const N=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(L,null,N,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(L,null,N,f,g,null)}function x(b,L,N,w){let M=null;const T=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)M=T;else if(M=N.isPointLight===!0?l:o,a.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const F=M.uuid,I=L.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let q=X[I];q===void 0&&(q=M.clone(),X[I]=q,L.addEventListener("dispose",A)),M=q}if(M.visible=L.visible,M.wireframe=L.wireframe,w===Wn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:h[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=a.properties.get(M);F.light=N}return M}function _(b,L,N,w,M){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const I=t.update(b),X=b.material;if(Array.isArray(X)){const q=I.groups;for(let at=0,G=q.length;at<G;at++){const D=q[at],J=X[D.materialIndex];if(J&&J.visible){const j=x(b,J,w,M);b.onBeforeShadow(a,b,L,N,I,j,D),a.renderBufferDirect(N,null,I,j,b,D),b.onAfterShadow(a,b,L,N,I,j,D)}}}else if(X.visible){const q=x(b,X,w,M);b.onBeforeShadow(a,b,L,N,I,q,null),a.renderBufferDirect(N,null,I,q,b,null),b.onAfterShadow(a,b,L,N,I,q,null)}}const F=b.children;for(let I=0,X=F.length;I<X;I++)_(F[I],L,N,w,M)}function A(b){b.target.removeEventListener("dispose",A);for(const N in c){const w=c[N],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function Vv(a){function t(){let z=!1;const St=new Ee;let Et=null;const Xt=new Ee(0,0,0,0);return{setMask:function(kt){Et!==kt&&!z&&(a.colorMask(kt,kt,kt,kt),Et=kt)},setLocked:function(kt){z=kt},setClear:function(kt,ce,fe,me,Ce){Ce===!0&&(kt*=me,ce*=me,fe*=me),St.set(kt,ce,fe,me),Xt.equals(St)===!1&&(a.clearColor(kt,ce,fe,me),Xt.copy(St))},reset:function(){z=!1,Et=null,Xt.set(-1,0,0,0)}}}function e(){let z=!1,St=null,Et=null,Xt=null;return{setTest:function(kt){kt?W(a.DEPTH_TEST):Q(a.DEPTH_TEST)},setMask:function(kt){St!==kt&&!z&&(a.depthMask(kt),St=kt)},setFunc:function(kt){if(Et!==kt){switch(kt){case kh:a.depthFunc(a.NEVER);break;case Gh:a.depthFunc(a.ALWAYS);break;case Wh:a.depthFunc(a.LESS);break;case Mr:a.depthFunc(a.LEQUAL);break;case Xh:a.depthFunc(a.EQUAL);break;case qh:a.depthFunc(a.GEQUAL);break;case Yh:a.depthFunc(a.GREATER);break;case Kh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Et=kt}},setLocked:function(kt){z=kt},setClear:function(kt){Xt!==kt&&(a.clearDepth(kt),Xt=kt)},reset:function(){z=!1,St=null,Et=null,Xt=null}}}function n(){let z=!1,St=null,Et=null,Xt=null,kt=null,ce=null,fe=null,me=null,Ce=null;return{setTest:function(pe){z||(pe?W(a.STENCIL_TEST):Q(a.STENCIL_TEST))},setMask:function(pe){St!==pe&&!z&&(a.stencilMask(pe),St=pe)},setFunc:function(pe,ye,lt){(Et!==pe||Xt!==ye||kt!==lt)&&(a.stencilFunc(pe,ye,lt),Et=pe,Xt=ye,kt=lt)},setOp:function(pe,ye,lt){(ce!==pe||fe!==ye||me!==lt)&&(a.stencilOp(pe,ye,lt),ce=pe,fe=ye,me=lt)},setLocked:function(pe){z=pe},setClear:function(pe){Ce!==pe&&(a.clearStencil(pe),Ce=pe)},reset:function(){z=!1,St=null,Et=null,Xt=null,kt=null,ce=null,fe=null,me=null,Ce=null}}}const i=new t,s=new e,r=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,m=!1,g=null,p=null,v=null,y=null,x=null,_=null,A=null,b=new Qt(0,0,0),L=0,N=!1,w=null,M=null,T=null,F=null,I=null;const X=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const G=a.getParameter(a.VERSION);G.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=at>=1):G.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=at>=2);let D=null,J={};const j=a.getParameter(a.SCISSOR_BOX),H=a.getParameter(a.VIEWPORT),et=new Ee().fromArray(j),k=new Ee().fromArray(H);function C(z,St,Et,Xt){const kt=new Uint8Array(4),ce=a.createTexture();a.bindTexture(z,ce),a.texParameteri(z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let fe=0;fe<Et;fe++)z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?a.texImage3D(St,0,a.RGBA,1,1,Xt,0,a.RGBA,a.UNSIGNED_BYTE,kt):a.texImage2D(St+fe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,kt);return ce}const P={};P[a.TEXTURE_2D]=C(a.TEXTURE_2D,a.TEXTURE_2D,1),P[a.TEXTURE_CUBE_MAP]=C(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[a.TEXTURE_2D_ARRAY]=C(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),P[a.TEXTURE_3D]=C(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),r.setClear(0),W(a.DEPTH_TEST),s.setFunc(Mr),rt(!1),dt(ya),W(a.CULL_FACE),ft(ci);function W(z){c[z]!==!0&&(a.enable(z),c[z]=!0)}function Q(z){c[z]!==!1&&(a.disable(z),c[z]=!1)}function it(z,St){return u[z]!==St?(a.bindFramebuffer(z,St),u[z]=St,z===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=St),z===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=St),!0):!1}function Z(z,St){let Et=d,Xt=!1;if(z){Et=h.get(St),Et===void 0&&(Et=[],h.set(St,Et));const kt=z.textures;if(Et.length!==kt.length||Et[0]!==a.COLOR_ATTACHMENT0){for(let ce=0,fe=kt.length;ce<fe;ce++)Et[ce]=a.COLOR_ATTACHMENT0+ce;Et.length=kt.length,Xt=!0}}else Et[0]!==a.BACK&&(Et[0]=a.BACK,Xt=!0);Xt&&a.drawBuffers(Et)}function ot(z){return f!==z?(a.useProgram(z),f=z,!0):!1}const B={[Si]:a.FUNC_ADD,[Ah]:a.FUNC_SUBTRACT,[Th]:a.FUNC_REVERSE_SUBTRACT};B[bh]=a.MIN,B[Rh]=a.MAX;const xt={[Ch]:a.ZERO,[Ph]:a.ONE,[Lh]:a.SRC_COLOR,[Lo]:a.SRC_ALPHA,[Bh]:a.SRC_ALPHA_SATURATE,[Uh]:a.DST_COLOR,[Nh]:a.DST_ALPHA,[Ih]:a.ONE_MINUS_SRC_COLOR,[Io]:a.ONE_MINUS_SRC_ALPHA,[Fh]:a.ONE_MINUS_DST_COLOR,[Dh]:a.ONE_MINUS_DST_ALPHA,[Oh]:a.CONSTANT_COLOR,[zh]:a.ONE_MINUS_CONSTANT_COLOR,[Vh]:a.CONSTANT_ALPHA,[Hh]:a.ONE_MINUS_CONSTANT_ALPHA};function ft(z,St,Et,Xt,kt,ce,fe,me,Ce,pe){if(z===ci){m===!0&&(Q(a.BLEND),m=!1);return}if(m===!1&&(W(a.BLEND),m=!0),z!==Eh){if(z!==g||pe!==N){if((p!==Si||x!==Si)&&(a.blendEquation(a.FUNC_ADD),p=Si,x=Si),pe)switch(z){case Ki:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case xa:a.blendFunc(a.ONE,a.ONE);break;case _a:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ma:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ki:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case xa:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case _a:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ma:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,y=null,_=null,A=null,b.set(0,0,0),L=0,g=z,N=pe}return}kt=kt||St,ce=ce||Et,fe=fe||Xt,(St!==p||kt!==x)&&(a.blendEquationSeparate(B[St],B[kt]),p=St,x=kt),(Et!==v||Xt!==y||ce!==_||fe!==A)&&(a.blendFuncSeparate(xt[Et],xt[Xt],xt[ce],xt[fe]),v=Et,y=Xt,_=ce,A=fe),(me.equals(b)===!1||Ce!==L)&&(a.blendColor(me.r,me.g,me.b,Ce),b.copy(me),L=Ce),g=z,N=!1}function Mt(z,St){z.side===Pn?Q(a.CULL_FACE):W(a.CULL_FACE);let Et=z.side===on;St&&(Et=!Et),rt(Et),z.blending===Ki&&z.transparent===!1?ft(ci):ft(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),i.setMask(z.colorWrite);const Xt=z.stencilWrite;r.setTest(Xt),Xt&&(r.setMask(z.stencilWriteMask),r.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),r.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),S(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?W(a.SAMPLE_ALPHA_TO_COVERAGE):Q(a.SAMPLE_ALPHA_TO_COVERAGE)}function rt(z){w!==z&&(z?a.frontFace(a.CW):a.frontFace(a.CCW),w=z)}function dt(z){z!==Mh?(W(a.CULL_FACE),z!==M&&(z===ya?a.cullFace(a.BACK):z===wh?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Q(a.CULL_FACE),M=z}function U(z){z!==T&&(q&&a.lineWidth(z),T=z)}function S(z,St,Et){z?(W(a.POLYGON_OFFSET_FILL),(F!==St||I!==Et)&&(a.polygonOffset(St,Et),F=St,I=Et)):Q(a.POLYGON_OFFSET_FILL)}function nt(z){z?W(a.SCISSOR_TEST):Q(a.SCISSOR_TEST)}function tt(z){z===void 0&&(z=a.TEXTURE0+X-1),D!==z&&(a.activeTexture(z),D=z)}function ct(z,St,Et){Et===void 0&&(D===null?Et=a.TEXTURE0+X-1:Et=D);let Xt=J[Et];Xt===void 0&&(Xt={type:void 0,texture:void 0},J[Et]=Xt),(Xt.type!==z||Xt.texture!==St)&&(D!==Et&&(a.activeTexture(Et),D=Et),a.bindTexture(z,St||P[z]),Xt.type=z,Xt.texture=St)}function ut(){const z=J[D];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function It(){try{a.compressedTexImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{a.texSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(){try{a.texSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(){try{a.texStorage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{a.texStorage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Gt(){try{a.texImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{a.texImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(z){et.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),et.copy(z))}function ne(z){k.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),k.copy(z))}function ae(z,St){let Et=l.get(St);Et===void 0&&(Et=new WeakMap,l.set(St,Et));let Xt=Et.get(z);Xt===void 0&&(Xt=a.getUniformBlockIndex(St,z.name),Et.set(z,Xt))}function de(z,St){const Xt=l.get(St).get(z);o.get(St)!==Xt&&(a.uniformBlockBinding(St,Xt,z.__bindingPointIndex),o.set(St,Xt))}function Wt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),c={},D=null,J={},u={},h=new WeakMap,d=[],f=null,m=!1,g=null,p=null,v=null,y=null,x=null,_=null,A=null,b=new Qt(0,0,0),L=0,N=!1,w=null,M=null,T=null,F=null,I=null,et.set(0,0,a.canvas.width,a.canvas.height),k.set(0,0,a.canvas.width,a.canvas.height),i.reset(),s.reset(),r.reset()}return{buffers:{color:i,depth:s,stencil:r},enable:W,disable:Q,bindFramebuffer:it,drawBuffers:Z,useProgram:ot,setBlending:ft,setMaterial:Mt,setFlipSided:rt,setCullFace:dt,setLineWidth:U,setPolygonOffset:S,setScissorTest:nt,activeTexture:tt,bindTexture:ct,unbindTexture:ut,compressedTexImage2D:It,compressedTexImage3D:pt,texImage2D:Gt,texImage3D:ee,updateUBOMapping:ae,uniformBlockBinding:de,texStorage2D:Yt,texStorage3D:Ht,texSubImage2D:bt,texSubImage3D:Bt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Pt,scissor:te,viewport:ne,reset:Wt}}function Hv(a,t,e,n,i,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(U,S){return f?new OffscreenCanvas(U,S):Us("canvas")}function g(U,S,nt){let tt=1;const ct=dt(U);if((ct.width>nt||ct.height>nt)&&(tt=nt/Math.max(ct.width,ct.height)),tt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(tt*ct.width),It=Math.floor(tt*ct.height);h===void 0&&(h=m(ut,It));const pt=S?m(ut,It):h;return pt.width=ut,pt.height=It,pt.getContext("2d").drawImage(U,0,0,ut,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+ut+"x"+It+")."),pt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function p(U){return U.generateMipmaps&&U.minFilter!==nn&&U.minFilter!==cn}function v(U){a.generateMipmap(U)}function y(U,S,nt,tt,ct=!1){if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=S;if(S===a.RED&&(nt===a.FLOAT&&(ut=a.R32F),nt===a.HALF_FLOAT&&(ut=a.R16F),nt===a.UNSIGNED_BYTE&&(ut=a.R8)),S===a.RED_INTEGER&&(nt===a.UNSIGNED_BYTE&&(ut=a.R8UI),nt===a.UNSIGNED_SHORT&&(ut=a.R16UI),nt===a.UNSIGNED_INT&&(ut=a.R32UI),nt===a.BYTE&&(ut=a.R8I),nt===a.SHORT&&(ut=a.R16I),nt===a.INT&&(ut=a.R32I)),S===a.RG&&(nt===a.FLOAT&&(ut=a.RG32F),nt===a.HALF_FLOAT&&(ut=a.RG16F),nt===a.UNSIGNED_BYTE&&(ut=a.RG8)),S===a.RG_INTEGER&&(nt===a.UNSIGNED_BYTE&&(ut=a.RG8UI),nt===a.UNSIGNED_SHORT&&(ut=a.RG16UI),nt===a.UNSIGNED_INT&&(ut=a.RG32UI),nt===a.BYTE&&(ut=a.RG8I),nt===a.SHORT&&(ut=a.RG16I),nt===a.INT&&(ut=a.RG32I)),S===a.RGB&&nt===a.UNSIGNED_INT_5_9_9_9_REV&&(ut=a.RGB9_E5),S===a.RGBA){const It=ct?Er:ge.getTransfer(tt);nt===a.FLOAT&&(ut=a.RGBA32F),nt===a.HALF_FLOAT&&(ut=a.RGBA16F),nt===a.UNSIGNED_BYTE&&(ut=It===Te?a.SRGB8_ALPHA8:a.RGBA8),nt===a.UNSIGNED_SHORT_4_4_4_4&&(ut=a.RGBA4),nt===a.UNSIGNED_SHORT_5_5_5_1&&(ut=a.RGB5_A1)}return(ut===a.R16F||ut===a.R32F||ut===a.RG16F||ut===a.RG32F||ut===a.RGBA16F||ut===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(U,S){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==nn&&U.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function _(U){const S=U.target;S.removeEventListener("dispose",_),b(S),S.isVideoTexture&&u.delete(S)}function A(U){const S=U.target;S.removeEventListener("dispose",A),N(S)}function b(U){const S=n.get(U);if(S.__webglInit===void 0)return;const nt=U.source,tt=d.get(nt);if(tt){const ct=tt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&L(U),Object.keys(tt).length===0&&d.delete(nt)}n.remove(U)}function L(U){const S=n.get(U);a.deleteTexture(S.__webglTexture);const nt=U.source,tt=d.get(nt);delete tt[S.__cacheKey],r.memory.textures--}function N(U){const S=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(S.__webglFramebuffer[tt]))for(let ct=0;ct<S.__webglFramebuffer[tt].length;ct++)a.deleteFramebuffer(S.__webglFramebuffer[tt][ct]);else a.deleteFramebuffer(S.__webglFramebuffer[tt]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[tt])}else{if(Array.isArray(S.__webglFramebuffer))for(let tt=0;tt<S.__webglFramebuffer.length;tt++)a.deleteFramebuffer(S.__webglFramebuffer[tt]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let tt=0;tt<S.__webglColorRenderbuffer.length;tt++)S.__webglColorRenderbuffer[tt]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[tt]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const nt=U.textures;for(let tt=0,ct=nt.length;tt<ct;tt++){const ut=n.get(nt[tt]);ut.__webglTexture&&(a.deleteTexture(ut.__webglTexture),r.memory.textures--),n.remove(nt[tt])}n.remove(U)}let w=0;function M(){w=0}function T(){const U=w;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),w+=1,U}function F(U){const S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function I(U,S){const nt=n.get(U);if(U.isVideoTexture&&Mt(U),U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){const tt=U.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(nt,U,S);return}}e.bindTexture(a.TEXTURE_2D,nt.__webglTexture,a.TEXTURE0+S)}function X(U,S){const nt=n.get(U);if(U.version>0&&nt.__version!==U.version){et(nt,U,S);return}e.bindTexture(a.TEXTURE_2D_ARRAY,nt.__webglTexture,a.TEXTURE0+S)}function q(U,S){const nt=n.get(U);if(U.version>0&&nt.__version!==U.version){et(nt,U,S);return}e.bindTexture(a.TEXTURE_3D,nt.__webglTexture,a.TEXTURE0+S)}function at(U,S){const nt=n.get(U);if(U.version>0&&nt.__version!==U.version){k(nt,U,S);return}e.bindTexture(a.TEXTURE_CUBE_MAP,nt.__webglTexture,a.TEXTURE0+S)}const G={[ts]:a.REPEAT,[oi]:a.CLAMP_TO_EDGE,[wr]:a.MIRRORED_REPEAT},D={[nn]:a.NEAREST,[wc]:a.NEAREST_MIPMAP_NEAREST,[As]:a.NEAREST_MIPMAP_LINEAR,[cn]:a.LINEAR,[xr]:a.LINEAR_MIPMAP_NEAREST,[Xn]:a.LINEAR_MIPMAP_LINEAR},J={[xu]:a.NEVER,[Au]:a.ALWAYS,[_u]:a.LESS,[Nc]:a.LEQUAL,[Mu]:a.EQUAL,[Eu]:a.GEQUAL,[wu]:a.GREATER,[Su]:a.NOTEQUAL};function j(U,S){if(S.type===In&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===xr||S.magFilter===As||S.magFilter===Xn||S.minFilter===cn||S.minFilter===xr||S.minFilter===As||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,G[S.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,G[S.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,G[S.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,D[S.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,D[S.minFilter]),S.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,J[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==As&&S.minFilter!==Xn||S.type===In&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");a.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function H(U,S){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",_));const tt=S.source;let ct=d.get(tt);ct===void 0&&(ct={},d.set(tt,ct));const ut=F(S);if(ut!==U.__cacheKey){ct[ut]===void 0&&(ct[ut]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,nt=!0),ct[ut].usedTimes++;const It=ct[U.__cacheKey];It!==void 0&&(ct[U.__cacheKey].usedTimes--,It.usedTimes===0&&L(S)),U.__cacheKey=ut,U.__webglTexture=ct[ut].texture}return nt}function et(U,S,nt){let tt=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=a.TEXTURE_3D);const ct=H(U,S),ut=S.source;e.bindTexture(tt,U.__webglTexture,a.TEXTURE0+nt);const It=n.get(ut);if(ut.version!==It.__version||ct===!0){e.activeTexture(a.TEXTURE0+nt);const pt=ge.getPrimaries(ge.workingColorSpace),bt=S.colorSpace===ri?null:ge.getPrimaries(S.colorSpace),Bt=S.colorSpace===ri||pt===bt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let vt=g(S.image,!1,i.maxTextureSize);vt=rt(S,vt);const Pt=s.convert(S.format,S.colorSpace),Yt=s.convert(S.type);let Ht=y(S.internalFormat,Pt,Yt,S.colorSpace,S.isVideoTexture);j(tt,S);let Gt;const ee=S.mipmaps,te=S.isVideoTexture!==!0&&Ht!==Lc,ne=It.__version===void 0||ct===!0,ae=ut.dataReady,de=x(S,vt);if(S.isDepthTexture)Ht=a.DEPTH_COMPONENT16,S.type===In?Ht=a.DEPTH_COMPONENT32F:S.type===es?Ht=a.DEPTH_COMPONENT24:S.type===Bs&&(Ht=a.DEPTH24_STENCIL8),ne&&(te?e.texStorage2D(a.TEXTURE_2D,1,Ht,vt.width,vt.height):e.texImage2D(a.TEXTURE_2D,0,Ht,vt.width,vt.height,0,Pt,Yt,null));else if(S.isDataTexture)if(ee.length>0){te&&ne&&e.texStorage2D(a.TEXTURE_2D,de,Ht,ee[0].width,ee[0].height);for(let Wt=0,z=ee.length;Wt<z;Wt++)Gt=ee[Wt],te?ae&&e.texSubImage2D(a.TEXTURE_2D,Wt,0,0,Gt.width,Gt.height,Pt,Yt,Gt.data):e.texImage2D(a.TEXTURE_2D,Wt,Ht,Gt.width,Gt.height,0,Pt,Yt,Gt.data);S.generateMipmaps=!1}else te?(ne&&e.texStorage2D(a.TEXTURE_2D,de,Ht,vt.width,vt.height),ae&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,vt.width,vt.height,Pt,Yt,vt.data)):e.texImage2D(a.TEXTURE_2D,0,Ht,vt.width,vt.height,0,Pt,Yt,vt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&ne&&e.texStorage3D(a.TEXTURE_2D_ARRAY,de,Ht,ee[0].width,ee[0].height,vt.depth);for(let Wt=0,z=ee.length;Wt<z;Wt++)Gt=ee[Wt],S.format!==Mn?Pt!==null?te?ae&&e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Wt,0,0,0,Gt.width,Gt.height,vt.depth,Pt,Gt.data,0,0):e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Wt,Ht,Gt.width,Gt.height,vt.depth,0,Gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ae&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,Wt,0,0,0,Gt.width,Gt.height,vt.depth,Pt,Yt,Gt.data):e.texImage3D(a.TEXTURE_2D_ARRAY,Wt,Ht,Gt.width,Gt.height,vt.depth,0,Pt,Yt,Gt.data)}else{te&&ne&&e.texStorage2D(a.TEXTURE_2D,de,Ht,ee[0].width,ee[0].height);for(let Wt=0,z=ee.length;Wt<z;Wt++)Gt=ee[Wt],S.format!==Mn?Pt!==null?te?ae&&e.compressedTexSubImage2D(a.TEXTURE_2D,Wt,0,0,Gt.width,Gt.height,Pt,Gt.data):e.compressedTexImage2D(a.TEXTURE_2D,Wt,Ht,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ae&&e.texSubImage2D(a.TEXTURE_2D,Wt,0,0,Gt.width,Gt.height,Pt,Yt,Gt.data):e.texImage2D(a.TEXTURE_2D,Wt,Ht,Gt.width,Gt.height,0,Pt,Yt,Gt.data)}else if(S.isDataArrayTexture)te?(ne&&e.texStorage3D(a.TEXTURE_2D_ARRAY,de,Ht,vt.width,vt.height,vt.depth),ae&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Pt,Yt,vt.data)):e.texImage3D(a.TEXTURE_2D_ARRAY,0,Ht,vt.width,vt.height,vt.depth,0,Pt,Yt,vt.data);else if(S.isData3DTexture)te?(ne&&e.texStorage3D(a.TEXTURE_3D,de,Ht,vt.width,vt.height,vt.depth),ae&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Pt,Yt,vt.data)):e.texImage3D(a.TEXTURE_3D,0,Ht,vt.width,vt.height,vt.depth,0,Pt,Yt,vt.data);else if(S.isFramebufferTexture){if(ne)if(te)e.texStorage2D(a.TEXTURE_2D,de,Ht,vt.width,vt.height);else{let Wt=vt.width,z=vt.height;for(let St=0;St<de;St++)e.texImage2D(a.TEXTURE_2D,St,Ht,Wt,z,0,Pt,Yt,null),Wt>>=1,z>>=1}}else if(ee.length>0){if(te&&ne){const Wt=dt(ee[0]);e.texStorage2D(a.TEXTURE_2D,de,Ht,Wt.width,Wt.height)}for(let Wt=0,z=ee.length;Wt<z;Wt++)Gt=ee[Wt],te?ae&&e.texSubImage2D(a.TEXTURE_2D,Wt,0,0,Pt,Yt,Gt):e.texImage2D(a.TEXTURE_2D,Wt,Ht,Pt,Yt,Gt);S.generateMipmaps=!1}else if(te){if(ne){const Wt=dt(vt);e.texStorage2D(a.TEXTURE_2D,de,Ht,Wt.width,Wt.height)}ae&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,Pt,Yt,vt)}else e.texImage2D(a.TEXTURE_2D,0,Ht,Pt,Yt,vt);p(S)&&v(tt),It.__version=ut.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function k(U,S,nt){if(S.image.length!==6)return;const tt=H(U,S),ct=S.source;e.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+nt);const ut=n.get(ct);if(ct.version!==ut.__version||tt===!0){e.activeTexture(a.TEXTURE0+nt);const It=ge.getPrimaries(ge.workingColorSpace),pt=S.colorSpace===ri?null:ge.getPrimaries(S.colorSpace),bt=S.colorSpace===ri||It===pt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Bt=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,Pt=[];for(let z=0;z<6;z++)!Bt&&!vt?Pt[z]=g(S.image[z],!0,i.maxCubemapSize):Pt[z]=vt?S.image[z].image:S.image[z],Pt[z]=rt(S,Pt[z]);const Yt=Pt[0],Ht=s.convert(S.format,S.colorSpace),Gt=s.convert(S.type),ee=y(S.internalFormat,Ht,Gt,S.colorSpace),te=S.isVideoTexture!==!0,ne=ut.__version===void 0||tt===!0,ae=ct.dataReady;let de=x(S,Yt);j(a.TEXTURE_CUBE_MAP,S);let Wt;if(Bt){te&&ne&&e.texStorage2D(a.TEXTURE_CUBE_MAP,de,ee,Yt.width,Yt.height);for(let z=0;z<6;z++){Wt=Pt[z].mipmaps;for(let St=0;St<Wt.length;St++){const Et=Wt[St];S.format!==Mn?Ht!==null?te?ae&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St,0,0,Et.width,Et.height,Ht,Et.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St,ee,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?ae&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St,0,0,Et.width,Et.height,Ht,Gt,Et.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St,ee,Et.width,Et.height,0,Ht,Gt,Et.data)}}}else{if(Wt=S.mipmaps,te&&ne){Wt.length>0&&de++;const z=dt(Pt[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,de,ee,z.width,z.height)}for(let z=0;z<6;z++)if(vt){te?ae&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Pt[z].width,Pt[z].height,Ht,Gt,Pt[z].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ee,Pt[z].width,Pt[z].height,0,Ht,Gt,Pt[z].data);for(let St=0;St<Wt.length;St++){const Xt=Wt[St].image[z].image;te?ae&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St+1,0,0,Xt.width,Xt.height,Ht,Gt,Xt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St+1,ee,Xt.width,Xt.height,0,Ht,Gt,Xt.data)}}else{te?ae&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ht,Gt,Pt[z]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ee,Ht,Gt,Pt[z]);for(let St=0;St<Wt.length;St++){const Et=Wt[St];te?ae&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St+1,0,0,Ht,Gt,Et.image[z]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+z,St+1,ee,Ht,Gt,Et.image[z])}}}p(S)&&v(a.TEXTURE_CUBE_MAP),ut.__version=ct.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function C(U,S,nt,tt,ct,ut){const It=s.convert(nt.format,nt.colorSpace),pt=s.convert(nt.type),bt=y(nt.internalFormat,It,pt,nt.colorSpace);if(!n.get(S).__hasExternalTextures){const vt=Math.max(1,S.width>>ut),Pt=Math.max(1,S.height>>ut);ct===a.TEXTURE_3D||ct===a.TEXTURE_2D_ARRAY?e.texImage3D(ct,ut,bt,vt,Pt,S.depth,0,It,pt,null):e.texImage2D(ct,ut,bt,vt,Pt,0,It,pt,null)}e.bindFramebuffer(a.FRAMEBUFFER,U),ft(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,tt,ct,n.get(nt).__webglTexture,0,xt(S)):(ct===a.TEXTURE_2D||ct>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,tt,ct,n.get(nt).__webglTexture,ut),e.bindFramebuffer(a.FRAMEBUFFER,null)}function P(U,S,nt){if(a.bindRenderbuffer(a.RENDERBUFFER,U),S.depthBuffer&&!S.stencilBuffer){let tt=a.DEPTH_COMPONENT24;if(nt||ft(S)){const ct=S.depthTexture;ct&&ct.isDepthTexture&&(ct.type===In?tt=a.DEPTH_COMPONENT32F:ct.type===es&&(tt=a.DEPTH_COMPONENT24));const ut=xt(S);ft(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ut,tt,S.width,S.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,ut,tt,S.width,S.height)}else a.renderbufferStorage(a.RENDERBUFFER,tt,S.width,S.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,U)}else if(S.depthBuffer&&S.stencilBuffer){const tt=xt(S);nt&&ft(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,tt,a.DEPTH24_STENCIL8,S.width,S.height):ft(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,tt,a.DEPTH24_STENCIL8,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,U)}else{const tt=S.textures;for(let ct=0;ct<tt.length;ct++){const ut=tt[ct],It=s.convert(ut.format,ut.colorSpace),pt=s.convert(ut.type),bt=y(ut.internalFormat,It,pt,ut.colorSpace),Bt=xt(S);nt&&ft(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Bt,bt,S.width,S.height):ft(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Bt,bt,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,bt,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function W(U,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const tt=n.get(S.depthTexture).__webglTexture,ct=xt(S);if(S.depthTexture.format===ji)ft(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,tt,0,ct):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,tt,0);else if(S.depthTexture.format===Ns)ft(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,tt,0,ct):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Q(U){const S=n.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!S.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");W(S.__webglFramebuffer,U)}else if(nt){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=a.createRenderbuffer(),P(S.__webglDepthbuffer[tt],U,!1)}else e.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),P(S.__webglDepthbuffer,U,!1);e.bindFramebuffer(a.FRAMEBUFFER,null)}function it(U,S,nt){const tt=n.get(U);S!==void 0&&C(tt.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),nt!==void 0&&Q(U)}function Z(U){const S=U.texture,nt=n.get(U),tt=n.get(S);U.addEventListener("dispose",A);const ct=U.textures,ut=U.isWebGLCubeRenderTarget===!0,It=ct.length>1;if(It||(tt.__webglTexture===void 0&&(tt.__webglTexture=a.createTexture()),tt.__version=S.version,r.memory.textures++),ut){nt.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){nt.__webglFramebuffer[pt]=[];for(let bt=0;bt<S.mipmaps.length;bt++)nt.__webglFramebuffer[pt][bt]=a.createFramebuffer()}else nt.__webglFramebuffer[pt]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){nt.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)nt.__webglFramebuffer[pt]=a.createFramebuffer()}else nt.__webglFramebuffer=a.createFramebuffer();if(It)for(let pt=0,bt=ct.length;pt<bt;pt++){const Bt=n.get(ct[pt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=a.createTexture(),r.memory.textures++)}if(U.samples>0&&ft(U)===!1){nt.__webglMultisampledFramebuffer=a.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let pt=0;pt<ct.length;pt++){const bt=ct[pt];nt.__webglColorRenderbuffer[pt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,nt.__webglColorRenderbuffer[pt]);const Bt=s.convert(bt.format,bt.colorSpace),vt=s.convert(bt.type),Pt=y(bt.internalFormat,Bt,vt,bt.colorSpace,U.isXRRenderTarget===!0),Yt=xt(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt,Pt,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pt,a.RENDERBUFFER,nt.__webglColorRenderbuffer[pt])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=a.createRenderbuffer(),P(nt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ut){e.bindTexture(a.TEXTURE_CUBE_MAP,tt.__webglTexture),j(a.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)C(nt.__webglFramebuffer[pt][bt],U,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pt,bt);else C(nt.__webglFramebuffer[pt],U,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(S)&&v(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let pt=0,bt=ct.length;pt<bt;pt++){const Bt=ct[pt],vt=n.get(Bt);e.bindTexture(a.TEXTURE_2D,vt.__webglTexture),j(a.TEXTURE_2D,Bt),C(nt.__webglFramebuffer,U,Bt,a.COLOR_ATTACHMENT0+pt,a.TEXTURE_2D,0),p(Bt)&&v(a.TEXTURE_2D)}e.unbindTexture()}else{let pt=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pt=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(pt,tt.__webglTexture),j(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)C(nt.__webglFramebuffer[bt],U,S,a.COLOR_ATTACHMENT0,pt,bt);else C(nt.__webglFramebuffer,U,S,a.COLOR_ATTACHMENT0,pt,0);p(S)&&v(pt),e.unbindTexture()}U.depthBuffer&&Q(U)}function ot(U){const S=U.textures;for(let nt=0,tt=S.length;nt<tt;nt++){const ct=S[nt];if(p(ct)){const ut=U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,It=n.get(ct).__webglTexture;e.bindTexture(ut,It),v(ut),e.unbindTexture()}}}function B(U){if(U.samples>0&&ft(U)===!1){const S=U.textures,nt=U.width,tt=U.height;let ct=a.COLOR_BUFFER_BIT;const ut=[],It=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,pt=n.get(U),bt=S.length>1;if(bt)for(let Bt=0;Bt<S.length;Bt++)e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Bt=0;Bt<S.length;Bt++){ut.push(a.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&ut.push(It);const vt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(vt===!1&&(U.depthBuffer&&(ct|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&pt.__isTransmissionRenderTarget!==!0&&(ct|=a.STENCIL_BUFFER_BIT)),bt&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,pt.__webglColorRenderbuffer[Bt]),vt===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[It]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[It])),bt){const Pt=n.get(S[Bt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Pt,0)}a.blitFramebuffer(0,0,nt,tt,0,0,nt,tt,ct,a.NEAREST),l&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),bt)for(let Bt=0;Bt<S.length;Bt++){e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.RENDERBUFFER,pt.__webglColorRenderbuffer[Bt]);const vt=n.get(S[Bt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,pt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Bt,a.TEXTURE_2D,vt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function xt(U){return Math.min(i.maxSamples,U.samples)}function ft(U){const S=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(U){const S=r.render.frame;u.get(U)!==S&&(u.set(U,S),U.update())}function rt(U,S){const nt=U.colorSpace,tt=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==qe&&nt!==ri&&(ge.getTransfer(nt)===Te?(tt!==Mn||ct!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),S}function dt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=M,this.setTexture2D=I,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=at,this.rebindTextures=it,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=C,this.useMultisampledRTT=ft}function kv(a,t){function e(n,i=ri){let s;const r=ge.getTransfer(i);if(n===ui)return a.UNSIGNED_BYTE;if(n===Ac)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return a.UNSIGNED_SHORT_5_5_5_1;if(n===au)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return a.BYTE;if(n===ou)return a.SHORT;if(n===Sc)return a.UNSIGNED_SHORT;if(n===Ec)return a.INT;if(n===es)return a.UNSIGNED_INT;if(n===In)return a.FLOAT;if(n===Sr)return a.HALF_FLOAT;if(n===lu)return a.ALPHA;if(n===cu)return a.RGB;if(n===Mn)return a.RGBA;if(n===hu)return a.LUMINANCE;if(n===uu)return a.LUMINANCE_ALPHA;if(n===ji)return a.DEPTH_COMPONENT;if(n===Ns)return a.DEPTH_STENCIL;if(n===bc)return a.RED;if(n===Rc)return a.RED_INTEGER;if(n===du)return a.RG;if(n===Cc)return a.RG_INTEGER;if(n===Pc)return a.RGBA_INTEGER;if(n===Or||n===zr||n===Vr||n===Hr)if(r===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ea||n===Aa||n===Ta)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ba||n===Ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ba)return r===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ra)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Ia||n===Na||n===Da||n===Ua||n===Fa||n===Ba||n===Oa||n===za||n===Va||n===Ha||n===ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return r===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===Ga||n===Wa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===kr)return r===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===Xa||n===qa||n===Ya)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===kr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:e}}class Gv extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ai extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wv={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),v=this._getHandJoint(c,g);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new He,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new di({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new We(new zs(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Kv extends as{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const g=new Yv,p=e.getContextAttributes();let v=null,y=null;const x=[],_=[],A=new Vt;let b=null;const L=new en;L.layers.enable(1),L.viewport=new Ee;const N=new en;N.layers.enable(2),N.viewport=new Ee;const w=[L,N],M=new Gv;M.layers.enable(1),M.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let P=x[C];return P===void 0&&(P=new mo,x[C]=P),P.getTargetRaySpace()},this.getControllerGrip=function(C){let P=x[C];return P===void 0&&(P=new mo,x[C]=P),P.getGripSpace()},this.getHand=function(C){let P=x[C];return P===void 0&&(P=new mo,x[C]=P),P.getHandSpace()};function I(C){const P=_.indexOf(C.inputSource);if(P===-1)return;const W=x[P];W!==void 0&&(W.update(C.inputSource,C.frame,c||r),W.dispatchEvent({type:C.type,data:C.inputSource}))}function X(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",q);for(let C=0;C<x.length;C++){const P=_[C];P!==null&&(_[C]=null,x[C].disconnect(P))}T=null,F=null,g.reset(),t.setRenderTarget(v),f=null,d=null,h=null,i=null,y=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(C){if(i=C,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",X),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const P={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,P),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bi(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let P=null,W=null,Q=null;p.depth&&(Q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=p.stencil?Ns:ji,W=p.stencil?Bs:es);const it={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(it),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new bi(d.textureWidth,d.textureHeight,{format:Mn,type:ui,depthTexture:new qc(d.textureWidth,d.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const Z=t.properties.get(y);Z.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(C){for(let P=0;P<C.removed.length;P++){const W=C.removed[P],Q=_.indexOf(W);Q>=0&&(_[Q]=null,x[Q].disconnect(W))}for(let P=0;P<C.added.length;P++){const W=C.added[P];let Q=_.indexOf(W);if(Q===-1){for(let Z=0;Z<x.length;Z++)if(Z>=_.length){_.push(W),Q=Z;break}else if(_[Z]===null){_[Z]=W,Q=Z;break}if(Q===-1)break}const it=x[Q];it&&it.connect(W)}}const at=new Y,G=new Y;function D(C,P,W){at.setFromMatrixPosition(P.matrixWorld),G.setFromMatrixPosition(W.matrixWorld);const Q=at.distanceTo(G),it=P.projectionMatrix.elements,Z=W.projectionMatrix.elements,ot=it[14]/(it[10]-1),B=it[14]/(it[10]+1),xt=(it[9]+1)/it[5],ft=(it[9]-1)/it[5],Mt=(it[8]-1)/it[0],rt=(Z[8]+1)/Z[0],dt=ot*Mt,U=ot*rt,S=Q/(-Mt+rt),nt=S*-Mt;P.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(nt),C.translateZ(S),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const tt=ot+S,ct=B+S,ut=dt-nt,It=U+(Q-nt),pt=xt*B/ct*tt,bt=ft*B/ct*tt;C.projectionMatrix.makePerspective(ut,It,pt,bt,tt,ct),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}function J(C,P){P===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(P.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(i===null)return;g.texture!==null&&(C.near=g.depthNear,C.far=g.depthFar),M.near=N.near=L.near=C.near,M.far=N.far=L.far=C.far,(T!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,F=M.far,L.near=T,L.far=F,N.near=T,N.far=F,L.updateProjectionMatrix(),N.updateProjectionMatrix(),C.updateProjectionMatrix());const P=C.parent,W=M.cameras;J(M,P);for(let Q=0;Q<W.length;Q++)J(W[Q],P);W.length===2?D(M,L,N):M.projectionMatrix.copy(L.projectionMatrix),j(C,M,P)};function j(C,P,W){W===null?C.matrix.copy(P.matrixWorld):(C.matrix.copy(W.matrixWorld),C.matrix.invert(),C.matrix.multiply(P.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(P.projectionMatrix),C.projectionMatrixInverse.copy(P.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=is*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(C){l=C,d!==null&&(d.fixedFoveation=C),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=C)},this.hasDepthSensing=function(){return g.texture!==null};let H=null;function et(C,P){if(u=P.getViewerPose(c||r),m=P,u!==null){const W=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Q=!1;W.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let Z=0;Z<W.length;Z++){const ot=W[Z];let B=null;if(f!==null)B=f.getViewport(ot);else{const ft=h.getViewSubImage(d,ot);B=ft.viewport,Z===0&&(t.setRenderTargetTextures(y,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(y))}let xt=w[Z];xt===void 0&&(xt=new en,xt.layers.enable(Z),xt.viewport=new Ee,w[Z]=xt),xt.matrix.fromArray(ot.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(ot.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(B.x,B.y,B.width,B.height),Z===0&&(M.matrix.copy(xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(xt)}const it=i.enabledFeatures;if(it&&it.includes("depth-sensing")){const Z=h.getDepthInformation(W[0]);Z&&Z.isValid&&Z.texture&&g.init(t,Z,i.renderState)}}for(let W=0;W<x.length;W++){const Q=_[W],it=x[W];Q!==null&&it!==void 0&&it.update(Q,P,c||r)}g.render(t,M),H&&H(C,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),m=null}const k=new Xc;k.setAnimationLoop(et),this.setAnimationLoop=function(C){H=C},this.dispose=function(){}}}const xi=new An,jv=new se;function Zv(a,t){function e(p,v){p.matrixAutoUpdate===!0&&p.updateMatrix(),v.value.copy(p.matrix)}function n(p,v){v.color.getRGB(p.fogColor.value,kc(a)),v.isFog?(p.fogNear.value=v.near,p.fogFar.value=v.far):v.isFogExp2&&(p.fogDensity.value=v.density)}function i(p,v,y,x,_){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(p,v):v.isMeshToonMaterial?(s(p,v),h(p,v)):v.isMeshPhongMaterial?(s(p,v),u(p,v)):v.isMeshStandardMaterial?(s(p,v),d(p,v),v.isMeshPhysicalMaterial&&f(p,v,_)):v.isMeshMatcapMaterial?(s(p,v),m(p,v)):v.isMeshDepthMaterial?s(p,v):v.isMeshDistanceMaterial?(s(p,v),g(p,v)):v.isMeshNormalMaterial?s(p,v):v.isLineBasicMaterial?(r(p,v),v.isLineDashedMaterial&&o(p,v)):v.isPointsMaterial?l(p,v,y,x):v.isSpriteMaterial?c(p,v):v.isShadowMaterial?(p.color.value.copy(v.color),p.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(p,v){p.opacity.value=v.opacity,v.color&&p.diffuse.value.copy(v.color),v.emissive&&p.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(p.map.value=v.map,e(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.bumpMap&&(p.bumpMap.value=v.bumpMap,e(v.bumpMap,p.bumpMapTransform),p.bumpScale.value=v.bumpScale,v.side===on&&(p.bumpScale.value*=-1)),v.normalMap&&(p.normalMap.value=v.normalMap,e(v.normalMap,p.normalMapTransform),p.normalScale.value.copy(v.normalScale),v.side===on&&p.normalScale.value.negate()),v.displacementMap&&(p.displacementMap.value=v.displacementMap,e(v.displacementMap,p.displacementMapTransform),p.displacementScale.value=v.displacementScale,p.displacementBias.value=v.displacementBias),v.emissiveMap&&(p.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,p.emissiveMapTransform)),v.specularMap&&(p.specularMap.value=v.specularMap,e(v.specularMap,p.specularMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest);const y=t.get(v),x=y.envMap,_=y.envMapRotation;if(x&&(p.envMap.value=x,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(xi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=v.reflectivity,p.ior.value=v.ior,p.refractionRatio.value=v.refractionRatio),v.lightMap){p.lightMap.value=v.lightMap;const A=a._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=v.lightMapIntensity*A,e(v.lightMap,p.lightMapTransform)}v.aoMap&&(p.aoMap.value=v.aoMap,p.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,p.aoMapTransform))}function r(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,v.map&&(p.map.value=v.map,e(v.map,p.mapTransform))}function o(p,v){p.dashSize.value=v.dashSize,p.totalSize.value=v.dashSize+v.gapSize,p.scale.value=v.scale}function l(p,v,y,x){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.size.value=v.size*y,p.scale.value=x*.5,v.map&&(p.map.value=v.map,e(v.map,p.uvTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function c(p,v){p.diffuse.value.copy(v.color),p.opacity.value=v.opacity,p.rotation.value=v.rotation,v.map&&(p.map.value=v.map,e(v.map,p.mapTransform)),v.alphaMap&&(p.alphaMap.value=v.alphaMap,e(v.alphaMap,p.alphaMapTransform)),v.alphaTest>0&&(p.alphaTest.value=v.alphaTest)}function u(p,v){p.specular.value.copy(v.specular),p.shininess.value=Math.max(v.shininess,1e-4)}function h(p,v){v.gradientMap&&(p.gradientMap.value=v.gradientMap)}function d(p,v){p.metalness.value=v.metalness,v.metalnessMap&&(p.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,p.metalnessMapTransform)),p.roughness.value=v.roughness,v.roughnessMap&&(p.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,p.roughnessMapTransform)),v.envMap&&(p.envMapIntensity.value=v.envMapIntensity)}function f(p,v,y){p.ior.value=v.ior,v.sheen>0&&(p.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),p.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(p.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,p.sheenColorMapTransform)),v.sheenRoughnessMap&&(p.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,p.sheenRoughnessMapTransform))),v.clearcoat>0&&(p.clearcoat.value=v.clearcoat,p.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(p.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,p.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(p.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===on&&p.clearcoatNormalScale.value.negate())),v.iridescence>0&&(p.iridescence.value=v.iridescence,p.iridescenceIOR.value=v.iridescenceIOR,p.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(p.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,p.iridescenceMapTransform)),v.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),v.transmission>0&&(p.transmission.value=v.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),v.transmissionMap&&(p.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,p.transmissionMapTransform)),p.thickness.value=v.thickness,v.thicknessMap&&(p.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=v.attenuationDistance,p.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(p.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(p.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=v.specularIntensity,p.specularColor.value.copy(v.specularColor),v.specularColorMap&&(p.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,p.specularColorMapTransform)),v.specularIntensityMap&&(p.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,v){v.matcap&&(p.matcap.value=v.matcap)}function g(p,v){const y=t.get(v).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $v(a,t,e,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=i[y.id];_===void 0&&(m(y),_=u(y),i[y.id]=_,y.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(y,A);const b=t.render.frame;s[y.id]!==b&&(d(y),s[y.id]=b)}function u(y){const x=h();y.__bindingPointIndex=x;const _=a.createBuffer(),A=y.__size,b=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,A,b),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],_=y.uniforms,A=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let b=0,L=_.length;b<L;b++){const N=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,M=N.length;w<M;w++){const T=N[w];if(f(T,b,w,A)===!0){const F=T.__offset,I=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let q=0;q<I.length;q++){const at=I[q],G=g(at);typeof at=="number"||typeof at=="boolean"?(T.__data[0]=at,a.bufferSubData(a.UNIFORM_BUFFER,F+X,T.__data)):at.isMatrix3?(T.__data[0]=at.elements[0],T.__data[1]=at.elements[1],T.__data[2]=at.elements[2],T.__data[3]=0,T.__data[4]=at.elements[3],T.__data[5]=at.elements[4],T.__data[6]=at.elements[5],T.__data[7]=0,T.__data[8]=at.elements[6],T.__data[9]=at.elements[7],T.__data[10]=at.elements[8],T.__data[11]=0):(at.toArray(T.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,F,T.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(y,x,_,A){const b=y.value,L=x+"_"+_;if(A[L]===void 0)return typeof b=="number"||typeof b=="boolean"?A[L]=b:A[L]=b.clone(),!0;{const N=A[L];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return A[L]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function m(y){const x=y.uniforms;let _=0;const A=16;for(let L=0,N=x.length;L<N;L++){const w=Array.isArray(x[L])?x[L]:[x[L]];for(let M=0,T=w.length;M<T;M++){const F=w[M],I=Array.isArray(F.value)?F.value:[F.value];for(let X=0,q=I.length;X<q;X++){const at=I[X],G=g(at),D=_%A;D!==0&&A-D<G.boundary&&(_+=A-D),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=G.storage}}}const b=_%A;return b>0&&(_+=A-b),y.__size=_,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const _=r.indexOf(x.__bindingPointIndex);r.splice(_,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function v(){for(const y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:v}}class Jv{constructor(t={}){const{canvas:e=Gu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const x=this;let _=!1,A=0,b=0,L=null,N=-1,w=null;const M=new Ee,T=new Ee;let F=null;const I=new Qt(0);let X=0,q=e.width,at=e.height,G=1,D=null,J=null;const j=new Ee(0,0,q,at),H=new Ee(0,0,q,at);let et=!1;const k=new Zo;let C=!1,P=!1;const W=new se,Q=new Vt,it=new Y,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return L===null?G:1}let B=n;function xt(E,O){const K=e.getContext(E,O);return K!==null?K:null}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),B===null){const O="webgl2";if(B=xt(O,E),B===null)throw xt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ft,Mt,rt,dt,U,S,nt,tt,ct,ut,It,pt,bt,Bt,vt,Pt,Yt,Ht,Gt,ee,te,ne,ae,de;function Wt(){ft=new om(B),ft.init(),Mt=new tm(B,ft,t),ne=new kv(B,ft),rt=new Vv(B),dt=new cm(B),U=new Tv,S=new Hv(B,ft,rt,U,Mt,ne,dt),nt=new nm(x),tt=new rm(x),ct=new pd(B),ae=new Jp(B,ct),ut=new am(B,ct,dt,ae),It=new um(B,ut,ct,dt),Gt=new hm(B,Mt,S),Pt=new em(U),pt=new Av(x,nt,tt,ft,Mt,ae,Pt),bt=new Zv(x,U),Bt=new Rv,vt=new Dv(ft),Ht=new $p(x,nt,tt,rt,It,d,l),Yt=new zv(x,It,Mt),de=new $v(B,dt,Mt,rt),ee=new Qp(B,ft,dt),te=new lm(B,ft,dt),dt.programs=pt.programs,x.capabilities=Mt,x.extensions=ft,x.properties=U,x.renderLists=Bt,x.shadowMap=Yt,x.state=rt,x.info=dt}Wt();const z=new Kv(x,B);this.xr=z,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(q,at,!1))},this.getSize=function(E){return E.set(q,at)},this.setSize=function(E,O,K=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,at=O,e.width=Math.floor(E*G),e.height=Math.floor(O*G),K===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(q*G,at*G).floor()},this.setDrawingBufferSize=function(E,O,K){q=E,at=O,G=K,e.width=Math.floor(E*K),e.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,O,K,$){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,O,K,$),rt.viewport(M.copy(j).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(H)},this.setScissor=function(E,O,K,$){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,O,K,$),rt.scissor(T.copy(H).multiplyScalar(G).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){rt.setScissorTest(et=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(E=!0,O=!0,K=!0){let $=0;if(E){let V=!1;if(L!==null){const mt=L.texture.format;V=mt===Pc||mt===Cc||mt===Rc}if(V){const mt=L.texture.type,_t=mt===ui||mt===es||mt===Sc||mt===Bs||mt===Ac||mt===Tc,Ot=Ht.getClearColor(),Rt=Ht.getClearAlpha(),Ut=Ot.r,wt=Ot.g,Kt=Ot.b;_t?(f[0]=Ut,f[1]=wt,f[2]=Kt,f[3]=Rt,B.clearBufferuiv(B.COLOR,0,f)):(m[0]=Ut,m[1]=wt,m[2]=Kt,m[3]=Rt,B.clearBufferiv(B.COLOR,0,m))}else $|=B.COLOR_BUFFER_BIT}O&&($|=B.DEPTH_BUFFER_BIT),K&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),Bt.dispose(),vt.dispose(),U.dispose(),nt.dispose(),tt.dispose(),It.dispose(),ae.dispose(),de.dispose(),pt.dispose(),z.dispose(),z.removeEventListener("sessionstart",ye),z.removeEventListener("sessionend",lt),ht.stop()};function St(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const E=dt.autoReset,O=Yt.enabled,K=Yt.autoUpdate,$=Yt.needsUpdate,V=Yt.type;Wt(),dt.autoReset=E,Yt.enabled=O,Yt.autoUpdate=K,Yt.needsUpdate=$,Yt.type=V}function Xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function kt(E){const O=E.target;O.removeEventListener("dispose",kt),ce(O)}function ce(E){fe(E),U.remove(E)}function fe(E){const O=U.get(E).programs;O!==void 0&&(O.forEach(function(K){pt.releaseProgram(K)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,$,V,mt){O===null&&(O=Z);const _t=V.isMesh&&V.matrixWorld.determinant()<0,Ot=Dt(E,O,K,$,V);rt.setMaterial($,_t);let Rt=K.index,Ut=1;if($.wireframe===!0){if(Rt=ut.getWireframeAttribute(K),Rt===void 0)return;Ut=2}const wt=K.drawRange,Kt=K.attributes.position;let he=wt.start*Ut,Me=(wt.start+wt.count)*Ut;mt!==null&&(he=Math.max(he,mt.start*Ut),Me=Math.min(Me,(mt.start+mt.count)*Ut)),Rt!==null?(he=Math.max(he,0),Me=Math.min(Me,Rt.count)):Kt!=null&&(he=Math.max(he,0),Me=Math.min(Me,Kt.count));const we=Me-he;if(we<0||we===1/0)return;ae.setup(V,$,Ot,K,Rt);let be,Zt=ee;if(Rt!==null&&(be=ct.get(Rt),Zt=te,Zt.setIndex(be)),V.isMesh)$.wireframe===!0?(rt.setLineWidth($.wireframeLinewidth*ot()),Zt.setMode(B.LINES)):Zt.setMode(B.TRIANGLES);else if(V.isLine){let Jt=$.linewidth;Jt===void 0&&(Jt=1),rt.setLineWidth(Jt*ot()),V.isLineSegments?Zt.setMode(B.LINES):V.isLineLoop?Zt.setMode(B.LINE_LOOP):Zt.setMode(B.LINE_STRIP)}else V.isPoints?Zt.setMode(B.POINTS):V.isSprite&&Zt.setMode(B.TRIANGLES);if(V.isBatchedMesh)Zt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Zt.renderInstances(he,we,V.count);else if(K.isInstancedBufferGeometry){const Jt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Se=Math.min(K.instanceCount,Jt);Zt.renderInstances(he,we,Se)}else Zt.render(he,we)};function me(E,O,K){E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,Lt(E,O,K),E.side=Yn,E.needsUpdate=!0,Lt(E,O,K),E.side=Pn):Lt(E,O,K)}this.compile=function(E,O,K=null){K===null&&(K=E),p=vt.get(K),p.init(),y.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==K&&E.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);const $=new Set;return E.traverse(function(V){const mt=V.material;if(mt)if(Array.isArray(mt))for(let _t=0;_t<mt.length;_t++){const Ot=mt[_t];me(Ot,K,V),$.add(Ot)}else me(mt,K,V),$.add(mt)}),y.pop(),p=null,$},this.compileAsync=function(E,O,K=null){const $=this.compile(E,O,K);return new Promise(V=>{function mt(){if($.forEach(function(_t){U.get(_t).currentProgram.isReady()&&$.delete(_t)}),$.size===0){V(E);return}setTimeout(mt,10)}ft.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ce=null;function pe(E){Ce&&Ce(E)}function ye(){ht.stop()}function lt(){ht.start()}const ht=new Xc;ht.setAnimationLoop(pe),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(E){Ce=E,z.setAnimationLoop(E),E===null?ht.stop():ht.start()},z.addEventListener("sessionstart",ye),z.addEventListener("sessionend",lt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(O),O=z.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,L),p=vt.get(E,y.length),p.init(),y.push(p),W.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(W),P=this.localClippingEnabled,C=Pt.init(this.clippingPlanes,P),g=Bt.get(E,v.length),g.init(),v.push(g),gt(E,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(D,J),this.info.render.frame++,C===!0&&Pt.beginShadows();const K=p.state.shadowsArray;if(Yt.render(K,E,O),C===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1)&&Ht.render(g,E),p.setupLights(x._useLegacyLights),O.isArrayCamera){const $=O.cameras;for(let V=0,mt=$.length;V<mt;V++){const _t=$[V];yt(g,E,_t,_t.viewport)}}else yt(g,E,O);L!==null&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,O),ae.resetDefaultState(),N=-1,w=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function gt(E,O,K,$){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){$&&it.setFromMatrixPosition(E.matrixWorld).applyMatrix4(W);const _t=It.update(E),Ot=E.material;Ot.visible&&g.push(E,_t,Ot,K,it.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){const _t=It.update(E),Ot=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),it.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),it.copy(_t.boundingSphere.center)),it.applyMatrix4(E.matrixWorld).applyMatrix4(W)),Array.isArray(Ot)){const Rt=_t.groups;for(let Ut=0,wt=Rt.length;Ut<wt;Ut++){const Kt=Rt[Ut],he=Ot[Kt.materialIndex];he&&he.visible&&g.push(E,_t,he,K,it.z,Kt)}}else Ot.visible&&g.push(E,_t,Ot,K,it.z,null)}}const mt=E.children;for(let _t=0,Ot=mt.length;_t<Ot;_t++)gt(mt[_t],O,K,$)}function yt(E,O,K,$){const V=E.opaque,mt=E.transmissive,_t=E.transparent;p.setupLightsView(K),C===!0&&Pt.setGlobalState(x.clippingPlanes,K),mt.length>0&&$t(V,mt,O,K),$&&rt.viewport(M.copy($)),V.length>0&&Nt(V,O,K),mt.length>0&&Nt(mt,O,K),_t.length>0&&Nt(_t,O,K),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function $t(E,O,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new bi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Sr:ui,minFilter:Xn,samples:4,stencilBuffer:s});const Ut=U.get(p.state.transmissionRenderTarget);Ut.__isTransmissionRenderTarget=!0}const mt=p.state.transmissionRenderTarget;x.getDrawingBufferSize(Q),mt.setSize(Q.x,Q.y);const _t=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(I),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear();const Ot=x.toneMapping;x.toneMapping=hi,Nt(E,K,$),S.updateMultisampleRenderTarget(mt),S.updateRenderTargetMipmap(mt);let Rt=!1;for(let Ut=0,wt=O.length;Ut<wt;Ut++){const Kt=O[Ut],he=Kt.object,Me=Kt.geometry,we=Kt.material,be=Kt.group;if(we.side===Pn&&he.layers.test($.layers)){const Zt=we.side;we.side=on,we.needsUpdate=!0,At(he,K,$,Me,we,be),we.side=Zt,we.needsUpdate=!0,Rt=!0}}Rt===!0&&(S.updateMultisampleRenderTarget(mt),S.updateRenderTargetMipmap(mt)),x.setRenderTarget(_t),x.setClearColor(I,X),x.toneMapping=Ot}function Nt(E,O,K){const $=O.isScene===!0?O.overrideMaterial:null;for(let V=0,mt=E.length;V<mt;V++){const _t=E[V],Ot=_t.object,Rt=_t.geometry,Ut=$===null?_t.material:$,wt=_t.group;Ot.layers.test(K.layers)&&At(Ot,O,K,Rt,Ut,wt)}}function At(E,O,K,$,V,mt){E.onBeforeRender(x,O,K,$,V,mt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(x,O,K,$,E,mt),V.transparent===!0&&V.side===Pn&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,x.renderBufferDirect(K,O,$,V,E,mt),V.side=Yn,V.needsUpdate=!0,x.renderBufferDirect(K,O,$,V,E,mt),V.side=Pn):x.renderBufferDirect(K,O,$,V,E,mt),E.onAfterRender(x,O,K,$,V,mt)}function Lt(E,O,K){O.isScene!==!0&&(O=Z);const $=U.get(E),V=p.state.lights,mt=p.state.shadowsArray,_t=V.state.version,Ot=pt.getParameters(E,V.state,mt,O,K),Rt=pt.getProgramCacheKey(Ot);let Ut=$.programs;$.environment=E.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(E.isMeshStandardMaterial?tt:nt).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",kt),Ut=new Map,$.programs=Ut);let wt=Ut.get(Rt);if(wt!==void 0){if($.currentProgram===wt&&$.lightsStateVersion===_t)return Tt(E,Ot),wt}else Ot.uniforms=pt.getUniforms(E),E.onBuild(K,Ot,x),E.onBeforeCompile(Ot,x),wt=pt.acquireProgram(Ot,Rt),Ut.set(Rt,wt),$.uniforms=Ot.uniforms;const Kt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Kt.clippingPlanes=Pt.uniform),Tt(E,Ot),$.needsLights=Ct(E),$.lightsStateVersion=_t,$.needsLights&&(Kt.ambientLightColor.value=V.state.ambient,Kt.lightProbe.value=V.state.probe,Kt.directionalLights.value=V.state.directional,Kt.directionalLightShadows.value=V.state.directionalShadow,Kt.spotLights.value=V.state.spot,Kt.spotLightShadows.value=V.state.spotShadow,Kt.rectAreaLights.value=V.state.rectArea,Kt.ltc_1.value=V.state.rectAreaLTC1,Kt.ltc_2.value=V.state.rectAreaLTC2,Kt.pointLights.value=V.state.point,Kt.pointLightShadows.value=V.state.pointShadow,Kt.hemisphereLights.value=V.state.hemi,Kt.directionalShadowMap.value=V.state.directionalShadowMap,Kt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Kt.spotShadowMap.value=V.state.spotShadowMap,Kt.spotLightMatrix.value=V.state.spotLightMatrix,Kt.spotLightMap.value=V.state.spotLightMap,Kt.pointShadowMap.value=V.state.pointShadowMap,Kt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=wt,$.uniformsList=null,wt}function st(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=_r.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Tt(E,O){const K=U.get(E);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Dt(E,O,K,$,V){O.isScene!==!0&&(O=Z),S.resetTextureUnits();const mt=O.fog,_t=$.isMeshStandardMaterial?O.environment:null,Ot=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qe,Rt=($.isMeshStandardMaterial?tt:nt).get($.envMap||_t),Ut=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,wt=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Kt=!!K.morphAttributes.position,he=!!K.morphAttributes.normal,Me=!!K.morphAttributes.color;let we=hi;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(we=x.toneMapping);const be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Zt=be!==void 0?be.length:0,Jt=U.get($),Se=p.state.lights;if(C===!0&&(P===!0||E!==w)){const ve=E===w&&$.id===N;Pt.setState($,E,ve)}let ue=!1;$.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Se.state.version||Jt.outputColorSpace!==Ot||V.isBatchedMesh&&Jt.batching===!1||!V.isBatchedMesh&&Jt.batching===!0||V.isInstancedMesh&&Jt.instancing===!1||!V.isInstancedMesh&&Jt.instancing===!0||V.isSkinnedMesh&&Jt.skinning===!1||!V.isSkinnedMesh&&Jt.skinning===!0||V.isInstancedMesh&&Jt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Jt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Jt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Jt.instancingMorph===!1&&V.morphTexture!==null||Jt.envMap!==Rt||$.fog===!0&&Jt.fog!==mt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Pt.numPlanes||Jt.numIntersection!==Pt.numIntersection)||Jt.vertexAlphas!==Ut||Jt.vertexTangents!==wt||Jt.morphTargets!==Kt||Jt.morphNormals!==he||Jt.morphColors!==Me||Jt.toneMapping!==we||Jt.morphTargetsCount!==Zt)&&(ue=!0):(ue=!0,Jt.__version=$.version);let Ie=Jt.currentProgram;ue===!0&&(Ie=Lt($,O,V));let Fe=!1,Pe=!1,Ye=!1;const Ae=Ie.getUniforms(),jt=Jt.uniforms;if(rt.useProgram(Ie.program)&&(Fe=!0,Pe=!0,Ye=!0),$.id!==N&&(N=$.id,Pe=!0),Fe||w!==E){Ae.setValue(B,"projectionMatrix",E.projectionMatrix),Ae.setValue(B,"viewMatrix",E.matrixWorldInverse);const ve=Ae.map.cameraPosition;ve!==void 0&&ve.setValue(B,it.setFromMatrixPosition(E.matrixWorld)),Mt.logarithmicDepthBuffer&&Ae.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ae.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Pe=!0,Ye=!0)}if(V.isSkinnedMesh){Ae.setOptional(B,V,"bindMatrix"),Ae.setOptional(B,V,"bindMatrixInverse");const ve=V.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),Ae.setValue(B,"boneTexture",ve.boneTexture,S))}V.isBatchedMesh&&(Ae.setOptional(B,V,"batchingTexture"),Ae.setValue(B,"batchingTexture",V._matricesTexture,S));const Ge=K.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&Gt.update(V,K,Ie),(Pe||Jt.receiveShadow!==V.receiveShadow)&&(Jt.receiveShadow=V.receiveShadow,Ae.setValue(B,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(jt.envMap.value=Rt,jt.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(jt.envMapIntensity.value=O.environmentIntensity),Pe&&(Ae.setValue(B,"toneMappingExposure",x.toneMappingExposure),Jt.needsLights&&zt(jt,Ye),mt&&$.fog===!0&&bt.refreshFogUniforms(jt,mt),bt.refreshMaterialUniforms(jt,$,G,at,p.state.transmissionRenderTarget),_r.upload(B,st(Jt),jt,S)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(_r.upload(B,st(Jt),jt,S),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ae.setValue(B,"center",V.center),Ae.setValue(B,"modelViewMatrix",V.modelViewMatrix),Ae.setValue(B,"normalMatrix",V.normalMatrix),Ae.setValue(B,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ve=$.uniformsGroups;for(let mn=0,Bn=ve.length;mn<Bn;mn++){const Hs=ve[mn];de.update(Hs,Ie),de.bind(Hs,Ie)}}return Ie}function zt(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Ct(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,O,K){U.get(E.texture).__webglTexture=O,U.get(E.depthTexture).__webglTexture=K;const $=U.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const K=U.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){L=E,A=O,b=K;let $=!0,V=null,mt=!1,_t=!1;if(E){const Rt=U.get(E);Rt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(B.FRAMEBUFFER,null),$=!1):Rt.__webglFramebuffer===void 0?S.setupRenderTarget(E):Rt.__hasExternalTextures&&S.rebindTextures(E,U.get(E.texture).__webglTexture,U.get(E.depthTexture).__webglTexture);const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);const wt=U.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[O])?V=wt[O][K]:V=wt[O],mt=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=U.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?V=wt[K]:V=wt,M.copy(E.viewport),T.copy(E.scissor),F=E.scissorTest}else M.copy(j).multiplyScalar(G).floor(),T.copy(H).multiplyScalar(G).floor(),F=et;if(rt.bindFramebuffer(B.FRAMEBUFFER,V)&&$&&rt.drawBuffers(E,V),rt.viewport(M),rt.scissor(T),rt.setScissorTest(F),mt){const Rt=U.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Rt.__webglTexture,K)}else if(_t){const Rt=U.get(E.texture),Ut=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,K||0,Ut)}N=-1},this.readRenderTargetPixels=function(E,O,K,$,V,mt,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=U.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Ot=Ot[_t]),Ot){rt.bindFramebuffer(B.FRAMEBUFFER,Ot);try{const Rt=E.texture,Ut=Rt.format,wt=Rt.type;if(Ut!==Mn&&ne.convert(Ut)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Kt=wt===Sr&&(ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float"));if(wt!==ui&&ne.convert(wt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&wt!==In&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-$&&K>=0&&K<=E.height-V&&B.readPixels(O,K,$,V,ne.convert(Ut),ne.convert(wt),mt)}finally{const Rt=L!==null?U.get(L).__webglFramebuffer:null;rt.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(E,O,K=0){const $=Math.pow(2,-K),V=Math.floor(O.image.width*$),mt=Math.floor(O.image.height*$);S.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,E.x,E.y,V,mt),rt.unbindTexture()},this.copyTextureToTexture=function(E,O,K,$=0){const V=O.image.width,mt=O.image.height,_t=ne.convert(K.format),Ot=ne.convert(K.type);S.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,$,E.x,E.y,V,mt,_t,Ot,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,$,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,_t,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,$,E.x,E.y,_t,Ot,O.image),$===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,K,$,V=0){const mt=Math.round(E.max.x-E.min.x),_t=Math.round(E.max.y-E.min.y),Ot=E.max.z-E.min.z+1,Rt=ne.convert($.format),Ut=ne.convert($.type);let wt;if($.isData3DTexture)S.setTexture3D($,0),wt=B.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)S.setTexture2DArray($,0),wt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);const Kt=B.getParameter(B.UNPACK_ROW_LENGTH),he=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Me=B.getParameter(B.UNPACK_SKIP_PIXELS),we=B.getParameter(B.UNPACK_SKIP_ROWS),be=B.getParameter(B.UNPACK_SKIP_IMAGES),Zt=K.isCompressedTexture?K.mipmaps[V]:K.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Zt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Zt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,E.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,E.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,E.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(wt,V,O.x,O.y,O.z,mt,_t,Ot,Rt,Ut,Zt.data):$.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,V,O.x,O.y,O.z,mt,_t,Ot,Rt,Zt.data):B.texSubImage3D(wt,V,O.x,O.y,O.z,mt,_t,Ot,Rt,Ut,Zt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Kt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Me),B.pixelStorei(B.UNPACK_SKIP_ROWS,we),B.pixelStorei(B.UNPACK_SKIP_IMAGES,be),V===0&&$.generateMipmaps&&B.generateMipmap(wt),rt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),rt.unbindTexture()},this.resetState=function(){A=0,b=0,L=null,rt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ko?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===Nr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Qv extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Uc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new Y;class Qo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hl=new Y,kl=new Ee,Gl=new Ee,eg=new Y,Wl=new se,cr=new Y,vo=new Nn,Xl=new se,go=new Dr;class ng extends We{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wa,this.bindMatrix=new se,this.bindMatrixInverse=new se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,cr),this.boundingBox.expandByPoint(cr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,cr),this.boundingSphere.expandByPoint(cr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(i),t.ray.intersectsSphere(vo)!==!1&&(Xl.copy(i).invert(),go.copy(t.ray).applyMatrix4(Xl),!(this.boundingBox!==null&&go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,go)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===wa?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===su?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;kl.fromBufferAttribute(i.attributes.skinIndex,t),Gl.fromBufferAttribute(i.attributes.skinWeight,t),Hl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=Gl.getComponent(s);if(r!==0){const o=kl.getComponent(s);Wl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(eg.copy(Hl).applyMatrix4(Wl),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Jc extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qc extends He{constructor(t=null,e=1,n=1,i,s,r,o,l,c=nn,u=nn,h,d){super(null,r,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=new se,ig=new se;class ta{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new se)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const o=t[s]?t[s].matrixWorld:ig;ql.multiplyMatrices(o,e[s]),ql.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ta(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Qc(e,t,t,Mn,In);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Jc),this.bones.push(r),this.boneInverses.push(new se().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const r=e[i];t.bones.push(r.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Oo extends sn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new se,Yl=new se,hr=[],Kl=new Kn,sg=new se,xs=new We,_s=new Nn;class rg extends We{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Kl.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Kl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),_s.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qi),Yl.multiplyMatrices(n,qi),xs.matrixWorld=Yl,xs.raycast(t,hr);for(let r=0,o=hr.length;r<o;r++){const l=hr[r];l.instanceId=s,l.object=this,e.push(l)}hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qc(new Float32Array(i*this.count),i,this.count,bc,In));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ea extends En{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jl=new Y,Zl=new Y,$l=new se,yo=new Dr,ur=new Nn;class na extends Le{constructor(t=new un,e=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)jl.fromBufferAttribute(e,i-1),Zl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=jl.distanceTo(Zl);t.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=s,t.ray.intersectsSphere(ur)===!1)return;$l.copy(i).invert(),yo.copy(t.ray).applyMatrix4($l);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new Y,u=new Y,h=new Y,d=new Y,f=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const v=Math.max(0,r.start),y=Math.min(m.count,r.start+r.count);for(let x=v,_=y-1;x<_;x+=f){const A=m.getX(x),b=m.getX(x+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,b),yo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,r.start),y=Math.min(p.count,r.start+r.count);for(let x=v,_=y-1;x<_;x+=f){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),yo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(d);b<t.near||b>t.far||e.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Jl=new Y,Ql=new Y;class th extends na{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Jl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jl.distanceTo(Ql);t.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class og extends na{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class eh extends En{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new se,zo=new Dr,dr=new Nn,fr=new Y;class ag extends Le{constructor(t=new un,e=new eh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=s,t.ray.intersectsSphere(dr)===!1)return;tc.copy(i).invert(),zo.copy(t.ray).applyMatrix4(tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,g=f;m<g;m++){const p=c.getX(m);fr.fromBufferAttribute(h,p),ec(fr,p,l,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let m=d,g=f;m<g;m++)fr.fromBufferAttribute(h,m),ec(fr,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ec(a,t,e,n,i,s,r){const o=zo.distanceSqToPoint(a);if(o<e){const l=new Y;zo.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(r-u)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=e||(r.isVector2?new Vt:new Y);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new Y,i=[],s=[],r=[],o=new Y,l=new se;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new Y)}s[0]=new Y,r[0]=new Y;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Be(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}r[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Be(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ia extends Dn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Vt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lg extends ia{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function sa(){let a=0,t=0,e=0,n=0;function i(s,r,o,l){a=s,t=o,e=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,u,h){let d=(r-s)/c-(o-s)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+h)+(l-o)/h;d*=u,f*=u,i(r,o,d,f)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+n*o}}}const pr=new Y,xo=new sa,_o=new sa,Mo=new sa;class cg extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new Y){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(pr.subVectors(i[0],i[1]).add(i[0]),c=pr);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(pr.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),xo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,g,p),_o.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,g,p),Mo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,g,p)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),_o.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Mo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(xo.calc(l),_o.calc(l),Mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Y().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nc(a,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,o=a*a,l=a*o;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*o+s*a+e}function hg(a,t){const e=1-a;return e*e*t}function ug(a,t){return 2*(1-a)*a*t}function dg(a,t){return a*a*t}function Cs(a,t,e,n){return hg(a,t)+ug(a,e)+dg(a,n)}function fg(a,t){const e=1-a;return e*e*e*t}function pg(a,t){const e=1-a;return 3*e*e*a*t}function mg(a,t){return 3*(1-a)*a*a*t}function vg(a,t){return a*a*a*t}function Ps(a,t,e,n,i){return fg(a,t)+pg(a,e)+mg(a,n)+vg(a,i)}class nh extends Dn{constructor(t=new Vt,e=new Vt,n=new Vt,i=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Vt){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ps(t,i.x,s.x,r.x,o.x),Ps(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends Dn{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ps(t,i.x,s.x,r.x,o.x),Ps(t,i.y,s.y,r.y,o.y),Ps(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ih extends Dn{constructor(t=new Vt,e=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yg extends Dn{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sh extends Dn{constructor(t=new Vt,e=new Vt,n=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Vt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Cs(t,i.x,s.x,r.x),Cs(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xg extends Dn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Cs(t,i.x,s.x,r.x),Cs(t,i.y,s.y,r.y),Cs(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Vt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(nc(o,l.x,c.x,u.x,h.x),nc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Vt().fromArray(i))}return this}}var ic=Object.freeze({__proto__:null,ArcCurve:lg,CatmullRomCurve3:cg,CubicBezierCurve:nh,CubicBezierCurve3:gg,EllipseCurve:ia,LineCurve:ih,LineCurve3:yg,QuadraticBezierCurve:sh,QuadraticBezierCurve3:xg,SplineCurve:rh});class _g extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ic[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ic[i.type]().fromJSON(i))}return this}}class Mg extends _g{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ih(this.currentPoint.clone(),new Vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new sh(this.currentPoint.clone(),new Vt(t,e),new Vt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const o=new nh(this.currentPoint.clone(),new Vt(t,e),new Vt(n,i),new Vt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,r,o,l),this}absellipse(t,e,n,i,s,r,o,l){const c=new ia(t,e,n,i,s,r,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ra extends un{constructor(t=[new Vt(0,-.5),new Vt(.5,0),new Vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Be(i,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],u=1/e,h=new Y,d=new Vt,f=new Y,m=new Y,g=new Y;let p=0,v=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,v=t[y+1].y-t[y].y,f.x=v*1,f.y=-p,f.z=v*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:p=t[y+1].x-t[y].x,v=t[y+1].y-t[y].y,f.x=v*1,f.y=-p,f.z=v*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(m)}for(let y=0;y<=e;y++){const x=n+y*u*i,_=Math.sin(x),A=Math.cos(x);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*_,h.y=t[b].y,h.z=t[b].x*A,r.push(h.x,h.y,h.z),d.x=y/e,d.y=b/(t.length-1),o.push(d.x,d.y);const L=l[3*b+0]*_,N=l[3*b+1],w=l[3*b+0]*A;c.push(L,N,w)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,A=_,b=_+t.length,L=_+t.length+1,N=_+1;s.push(A,b,N),s.push(L,N,b)}this.setIndex(s),this.setAttribute("position",new Xe(r,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.points,t.segments,t.phiStart,t.phiLength)}}class oa extends ra{constructor(t=1,e=1,n=4,i=8){const s=new Mg;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new oa(t.radius,t.length,t.capSegments,t.radialSegments)}}class Rr extends un{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const g=[],p=n/2;let v=0;y(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function y(){const _=new Y,A=new Y;let b=0;const L=(e-t)/n;for(let N=0;N<=s;N++){const w=[],M=N/s,T=M*(e-t)+t;for(let F=0;F<=i;F++){const I=F/i,X=I*l+o,q=Math.sin(X),at=Math.cos(X);A.x=T*q,A.y=-M*n+p,A.z=T*at,h.push(A.x,A.y,A.z),_.set(q,L,at).normalize(),d.push(_.x,_.y,_.z),f.push(I,1-M),w.push(m++)}g.push(w)}for(let N=0;N<i;N++)for(let w=0;w<s;w++){const M=g[w][N],T=g[w+1][N],F=g[w+1][N+1],I=g[w][N+1];u.push(M,T,I),u.push(T,F,I),b+=6}c.addGroup(v,b,0),v+=b}function x(_){const A=m,b=new Vt,L=new Y;let N=0;const w=_===!0?t:e,M=_===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),m++;const T=m;for(let F=0;F<=i;F++){const X=F/i*l+o,q=Math.cos(X),at=Math.sin(X);L.x=w*at,L.y=p*M,L.z=w*q,h.push(L.x,L.y,L.z),d.push(0,M,0),b.x=q*.5+.5,b.y=at*.5*M+.5,f.push(b.x,b.y),m++}for(let F=0;F<i;F++){const I=A+F,X=T+F;_===!0?u.push(X,X+1,I):u.push(X+1,X,I),N+=3}c.addGroup(v,N,_===!0?1:2),v+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class aa extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jn extends aa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Vo extends En{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function mr(a,t,e){return!a||!e&&a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)}function wg(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Sg(a){function t(i,s){return a[i]-a[s]}const e=a.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function sc(a,t,e){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)i[r++]=a[o+l]}return i}function oh(a,t,e,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=a[i++];while(s!==void 0)}class Vs{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){const o=n+r>>>1;t<e[o]?r=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Eg extends Vs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ka,endingEnd:Ka}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case ja:s=t,o=2*e-n;break;case Za:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ja:r=t,l=2*n-e;break;case Za:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),g=m*m,p=g*m,v=-d*p+2*d*g-d*m,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*m+1,x=(-1-f)*p+(1.5+f)*g+.5*m,_=f*p-f*g;for(let A=0;A!==o;++A)s[A]=v*r[u+A]+y*r[c+A]+x*r[l+A]+_*r[h+A];return s}}class Ag extends Vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==o;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}}class Tg extends Vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Un{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ag(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ds:e=this.InterpolantFactoryMethodDiscrete;break;case ns:e=this.InterpolantFactoryMethodLinear;break;case Gr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Gr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(i!==void 0&&wg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gr,s=t.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const g=e[h+m];if(g!==e[d+m]||g!==e[f+m]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];const h=o*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++r}}if(s>0){t[r]=t[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ns;class cs extends Un{}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ds;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ah extends Un{}ah.prototype.ValueTypeName="color";class rs extends Un{}rs.prototype.ValueTypeName="number";class bg extends Vs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let u=c+o;c!==u;c+=4)fi.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Ri extends Un{InterpolantFactoryMethodLinear(t){return new bg(this.times,this.values,this.getValueSize(),t)}}Ri.prototype.ValueTypeName="quaternion";Ri.prototype.DefaultInterpolation=ns;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Un{}hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ds;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Un{}os.prototype.ValueTypeName="vector";class Rg{constructor(t="",e=-1,n=[],i=pu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,o=n.length;r!==o;++r)e.push(Pg(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(Un.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Sg(l);l=sc(l,1,u),c=sc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new rs(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,g){if(f.length!==0){const p=[],v=[];oh(f,p,v,m),p.length!==0&&g.push(new h(d,p,v))}},i=[],s=t.name||"default",r=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const p=[],v=[];for(let y=0;y!==d[m].morphTargets.length;++y){const x=d[m];p.push(x.time),v.push(x.morphTarget===g?1:0)}i.push(new rs(".morphTargetInfluence["+g+"]",p,v))}l=f.length*r}else{const f=".bones["+e[h].name+"]";n(os,f+".position",d,"pos",i),n(Ri,f+".quaternion",d,"rot",i),n(os,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cg(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return ah;case"quaternion":return Ri;case"bool":case"boolean":return cs;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Pg(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Cg(a.type);if(a.times===void 0){const e=[],n=[];oh(a.keys,e,n,"value"),a.times=e,a.values=n}return t.parse!==void 0?t.parse(a):new t(a.name,a.times,a.values,a.interpolation)}const li={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Lg{constructor(t,e,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const Ig=new Lg;class us{constructor(t){this.manager=t!==void 0?t:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class Ng extends Error{constructor(t,e){super(t),this.response=e}}class lh extends us{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=li.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Gn[t]!==void 0){Gn[t].push({onLoad:e,onProgress:n,onError:i});return}Gn[t]=[],Gn[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[t],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const p=new ReadableStream({start(v){y();function y(){h.read().then(({done:x,value:_})=>{if(x)v.close();else{g+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let b=0,L=u.length;b<L;b++){const N=u[b];N.onProgress&&N.onProgress(A)}v.enqueue(_),y()}})}}});return new Response(p)}else throw new Ng(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{li.add(t,c);const u=Gn[t];delete Gn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Gn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Gn[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Dg extends us{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=li.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const o=Us("img");function l(){u(),li.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class la extends us{constructor(t){super(t)}load(t,e,n,i){const s=new He,r=new Dg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Fr extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const wo=new se,rc=new Y,oc=new Y;class ca{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oc),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ug extends ca{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=is*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ha extends Fr{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Ug}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ac=new se,Ms=new Y,So=new Y;class Fg extends ca{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ms),So.copy(n.position),So.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(So),n.updateMatrixWorld(),i.makeTranslation(-Ms.x,-Ms.y,-Ms.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac)}}class Bg extends Fr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Og extends ca{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zg extends Fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Og}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vg extends Fr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ls{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Hg extends us{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=li.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),li.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});li.add(t,l),s.manager.itemStart(t)}}const ua="\\[\\]\\.:\\/",kg=new RegExp("["+ua+"]","g"),da="[^"+ua+"]",Gg="[^"+ua.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",da),Xg=/(WCOD+)?/.source.replace("WCOD",Gg),qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",da),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",da),Kg=new RegExp("^"+Wg+Xg+qg+Yg+"$"),jg=["material","materials","bones","map"];class Zg{constructor(t,e,n){const i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class _e{constructor(t,e,n){this.path=e,this.parsedPath=n||_e.parseTrackName(e),this.node=_e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new _e.Composite(t,e,n):new _e(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(t){const e=Kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);jg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=_e.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_e.Composite=Zg;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $g extends th{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new un;i.setAttribute("position",new Xe(e,3)),i.setAttribute("color",new Xe(n,3));const s=new ea({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Qt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);function vr(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ch={exports:{}};(function(a,t){(function(e){a.exports=e()})(function(){return function e(n,i,s){function r(c,u){if(!i[c]){if(!n[c]){var h=typeof vr=="function"&&vr;if(!u&&h)return h(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}var d=i[c]={exports:{}};n[c][0].call(d.exports,function(f){var m=n[c][1][f];return r(m||f)},d,d.exports,e,n,i,s)}return i[c].exports}for(var o=typeof vr=="function"&&vr,l=0;l<s.length;l++)r(s[l]);return r}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var s=e("../math/Vec3");e("../utils/Utils"),n.exports=r;function r(c){c=c||{},this.lowerBound=new s,c.lowerBound&&this.lowerBound.copy(c.lowerBound),this.upperBound=new s,c.upperBound&&this.upperBound.copy(c.upperBound)}var o=new s;r.prototype.setFromPoints=function(c,u,h,d){var f=this.lowerBound,m=this.upperBound,g=h;f.copy(c[0]),g&&g.vmult(f,f),m.copy(f);for(var p=1;p<c.length;p++){var v=c[p];g&&(g.vmult(v,o),v=o),v.x>m.x&&(m.x=v.x),v.x<f.x&&(f.x=v.x),v.y>m.y&&(m.y=v.y),v.y<f.y&&(f.y=v.y),v.z>m.z&&(m.z=v.z),v.z<f.z&&(f.z=v.z)}return u&&(u.vadd(f,f),u.vadd(m,m)),d&&(f.x-=d,f.y-=d,f.z-=d,m.x+=d,m.y+=d,m.z+=d),this},r.prototype.copy=function(c){return this.lowerBound.copy(c.lowerBound),this.upperBound.copy(c.upperBound),this},r.prototype.clone=function(){return new r().copy(this)},r.prototype.extend=function(c){var u=c.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var h=c.upperBound.x;this.upperBound.x<h&&(this.upperBound.x=h);var u=c.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var h=c.upperBound.y;this.upperBound.y<h&&(this.upperBound.y=h);var u=c.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var h=c.upperBound.z;this.upperBound.z<h&&(this.upperBound.z=h)},r.prototype.overlaps=function(c){var u=this.lowerBound,h=this.upperBound,d=c.lowerBound,f=c.upperBound;return(d.x<=h.x&&h.x<=f.x||u.x<=f.x&&f.x<=h.x)&&(d.y<=h.y&&h.y<=f.y||u.y<=f.y&&f.y<=h.y)&&(d.z<=h.z&&h.z<=f.z||u.z<=f.z&&f.z<=h.z)},r.prototype.contains=function(c){var u=this.lowerBound,h=this.upperBound,d=c.lowerBound,f=c.upperBound;return u.x<=d.x&&h.x>=f.x&&u.y<=d.y&&h.y>=f.y&&u.z<=d.z&&h.z>=f.z},r.prototype.getCorners=function(c,u,h,d,f,m,g,p){var v=this.lowerBound,y=this.upperBound;c.copy(v),u.set(y.x,v.y,v.z),h.set(y.x,y.y,v.z),d.set(v.x,y.y,y.z),f.set(y.x,v.y,v.z),m.set(v.x,y.y,v.z),g.set(v.x,v.y,y.z),p.copy(y)};var l=[new s,new s,new s,new s,new s,new s,new s,new s];r.prototype.toLocalFrame=function(c,u){var h=l,d=h[0],f=h[1],m=h[2],g=h[3],p=h[4],v=h[5],y=h[6],x=h[7];this.getCorners(d,f,m,g,p,v,y,x);for(var _=0;_!==8;_++){var A=h[_];c.pointToLocal(A,A)}return u.setFromPoints(h)},r.prototype.toWorldFrame=function(c,u){var h=l,d=h[0],f=h[1],m=h[2],g=h[3],p=h[4],v=h[5],y=h[6],x=h[7];this.getCorners(d,f,m,g,p,v,y,x);for(var _=0;_!==8;_++){var A=h[_];c.pointToWorld(A,A)}return u.setFromPoints(h)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(r,o){if(r=r.index,o=o.index,o>r){var l=o;o=r,r=l}return this.matrix[(r*(r+1)>>1)+o-1]},s.prototype.set=function(r,o,l){if(r=r.index,o=o.index,o>r){var c=o;o=r,r=c}this.matrix[(r*(r+1)>>1)+o-1]=l?1:0},s.prototype.reset=function(){for(var r=0,o=this.matrix.length;r!==o;r++)this.matrix[r]=0},s.prototype.setNumObjects=function(r){this.matrix.length=r*(r-1)>>1}},{}],5:[function(e,n,i){var s=e("../objects/Body"),r=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,p,v){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var c=s.STATIC|s.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,p){return!(!(g.collisionFilterGroup&p.collisionFilterMask)||!(p.collisionFilterGroup&g.collisionFilterMask)||(g.type&c||g.sleepState===s.SLEEPING)&&(p.type&c||p.sleepState===s.SLEEPING))},l.prototype.intersectionTest=function(g,p,v,y){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,p,v,y):this.doBoundingSphereBroadphase(g,p,v,y)};var u=new r;new r,new o,new r,l.prototype.doBoundingSphereBroadphase=function(g,p,v,y){var x=u;p.position.vsub(g.position,x);var _=Math.pow(g.boundingRadius+p.boundingRadius,2),A=x.norm2();A<_&&(v.push(g),y.push(p))},l.prototype.doBoundingBoxBroadphase=function(g,p,v,y){g.aabbNeedsUpdate&&g.computeAABB(),p.aabbNeedsUpdate&&p.computeAABB(),g.aabb.overlaps(p.aabb)&&(v.push(g),y.push(p))};var h={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,p){for(var v=h,y=d,x=f,_=g.length,A=0;A!==_;A++)y[A]=g[A],x[A]=p[A];g.length=0,p.length=0;for(var A=0;A!==_;A++){var b=y[A].id,L=x[A].id,N=b<L?b+","+L:L+","+b;v[N]=A,v.keys.push(N)}for(var A=0;A!==v.keys.length;A++){var N=v.keys.pop(),w=v[N];g.push(y[w]),p.push(x[w]),delete v[N]}},l.prototype.setWorld=function(g){};var m=new r;l.boundingSphereCheck=function(g,p){var v=m;return g.position.vsub(p.position,v),Math.pow(g.shape.boundingSphereRadius+p.shape.boundingSphereRadius,2)>v.norm2()},l.prototype.aabbQuery=function(g,p,v){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=l;var s=e("./Broadphase"),r=e("../math/Vec3"),o=e("../shapes/Shape");function l(u,h,d,f,m){s.apply(this),this.nx=d||10,this.ny=f||10,this.nz=m||10,this.aabbMin=u||new r(100,100,100),this.aabbMax=h||new r(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var p=0;p<g;p++)this.bins[p]=[],this.binLengths[p]=0}l.prototype=new s,l.prototype.constructor=l;var c=new r;new r,l.prototype.collisionPairs=function(u,h,d){var f=u.numObjects(),m=u.bodies,Q=this.aabbMax,W=this.aabbMin,g=this.nx,p=this.ny,v=this.nz,y=p*v,x=v,_=1,A=Q.x,b=Q.y,L=Q.z,N=W.x,w=W.y,M=W.z,T=g/(A-N),F=p/(b-w),I=v/(L-M),X=(A-N)/g,q=(b-w)/p,at=(L-M)/v,G=Math.sqrt(X*X+q*q+at*at)*.5,D=o.types,J=D.SPHERE,j=D.PLANE;D.BOX,D.COMPOUND,D.CONVEXPOLYHEDRON;for(var H=this.bins,et=this.binLengths,k=this.bins.length,C=0;C!==k;C++)et[C]=0;var P=Math.ceil,W=Math.min,Q=Math.max;function it(Ht,Gt,ee,te,ne,ae,de){var Wt=(Ht-N)*T|0,z=(Gt-w)*F|0,St=(ee-M)*I|0,Et=P((te-N)*T),Xt=P((ne-w)*F),kt=P((ae-M)*I);Wt<0?Wt=0:Wt>=g&&(Wt=g-1),z<0?z=0:z>=p&&(z=p-1),St<0?St=0:St>=v&&(St=v-1),Et<0?Et=0:Et>=g&&(Et=g-1),Xt<0?Xt=0:Xt>=p&&(Xt=p-1),kt<0?kt=0:kt>=v&&(kt=v-1),Wt*=y,z*=x,St*=_,Et*=y,Xt*=x,kt*=_;for(var ce=Wt;ce<=Et;ce+=y)for(var fe=z;fe<=Xt;fe+=x)for(var me=St;me<=kt;me+=_){var Ce=ce+fe+me;H[Ce][et[Ce]++]=de}}for(var C=0;C!==f;C++){var Z=m[C],ot=Z.shape;switch(ot.type){case J:var B=Z.position.x,xt=Z.position.y,ft=Z.position.z,Mt=ot.radius;it(B-Mt,xt-Mt,ft-Mt,B+Mt,xt+Mt,ft+Mt,Z);break;case j:ot.worldNormalNeedsUpdate&&ot.computeWorldNormal(Z.quaternion);var rt=ot.worldNormal,dt=N+X*.5-Z.position.x,U=w+q*.5-Z.position.y,S=M+at*.5-Z.position.z,nt=c;nt.set(dt,U,S);for(var tt=0,ct=0;tt!==g;tt++,ct+=y,nt.y=U,nt.x+=X)for(var ut=0,It=0;ut!==p;ut++,It+=x,nt.z=S,nt.y+=q)for(var pt=0,bt=0;pt!==v;pt++,bt+=_,nt.z+=at)if(nt.dot(rt)<G){var Bt=ct+It+bt;H[Bt][et[Bt]++]=Z}break;default:Z.aabbNeedsUpdate&&Z.computeAABB(),it(Z.aabb.lowerBound.x,Z.aabb.lowerBound.y,Z.aabb.lowerBound.z,Z.aabb.upperBound.x,Z.aabb.upperBound.y,Z.aabb.upperBound.z,Z);break}}for(var C=0;C!==k;C++){var vt=et[C];if(vt>1)for(var Pt=H[C],tt=0;tt!==vt;tt++)for(var Z=Pt[tt],ut=0;ut!==tt;ut++){var Yt=Pt[ut];this.needBroadphaseCollision(Z,Yt)&&this.intersectionTest(Z,Yt,h,d)}}this.makePairsUnique(h,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=o;var s=e("./Broadphase"),r=e("./AABB");function o(){s.apply(this)}o.prototype=new s,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,c,u){var h=l.bodies,d=h.length,f,m,g,p;for(f=0;f!==d;f++)for(m=0;m!==f;m++)g=h[f],p=h[m],this.needBroadphaseCollision(g,p)&&this.intersectionTest(g,p,c,u)},new r,o.prototype.aabbQuery=function(l,c,u){u=u||[];for(var h=0;h<l.bodies.length;h++){var d=l.bodies[h];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(c)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(r,o){if(r=r.id,o=o.id,o>r){var l=o;o=r,r=l}return r+"-"+o in this.matrix},s.prototype.set=function(r,o,l){if(r=r.id,o=o.id,o>r){var c=o;o=r,r=c}l?this.matrix[r+"-"+o]=!0:delete this.matrix[r+"-"+o]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(r){}},{}],9:[function(e,n,i){n.exports=h;var s=e("../math/Vec3"),r=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),c=e("../shapes/Shape"),u=e("../collision/AABB");function h(k,C){this.from=k?k.clone():new s,this.to=C?C.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=h.ANY,this.result=new l,this.hasHit=!1,this.callback=function(P){}}h.prototype.constructor=h,h.CLOSEST=1,h.ANY=2,h.ALL=4;var d=new u,f=[];h.prototype.intersectWorld=function(k,C){return this.mode=C.mode||h.ANY,this.result=C.result||new l,this.skipBackfaces=!!C.skipBackfaces,this.collisionFilterMask=typeof C.collisionFilterMask<"u"?C.collisionFilterMask:-1,this.collisionFilterGroup=typeof C.collisionFilterGroup<"u"?C.collisionFilterGroup:-1,C.from&&this.from.copy(C.from),C.to&&this.to.copy(C.to),this.callback=C.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,k.broadphase.aabbQuery(k,d,f),this.intersectBodies(f),this.hasHit};var m=new s,g=new s;h.pointInTriangle=p;function p(k,C,P,W){W.vsub(C,j),P.vsub(C,m),k.vsub(C,g);var Q=j.dot(j),it=j.dot(m),Z=j.dot(g),ot=m.dot(m),B=m.dot(g),xt,ft;return(xt=ot*Z-it*B)>=0&&(ft=Q*B-it*Z)>=0&&xt+ft<Q*ot-it*it}var v=new s,y=new r;h.prototype.intersectBody=function(k,C){C&&(this.result=C,this._updateDirection());var P=this.checkCollisionResponse;if(!(P&&!k.collisionResponse)&&!(!(this.collisionFilterGroup&k.collisionFilterMask)||!(k.collisionFilterGroup&this.collisionFilterMask)))for(var W=v,Q=y,it=0,Z=k.shapes.length;it<Z;it++){var ot=k.shapes[it];if(!(P&&!ot.collisionResponse)&&(k.quaternion.mult(k.shapeOrientations[it],Q),k.quaternion.vmult(k.shapeOffsets[it],W),W.vadd(k.position,W),this.intersectShape(ot,Q,W,k),this.result._shouldStop))break}},h.prototype.intersectBodies=function(k,C){C&&(this.result=C,this._updateDirection());for(var P=0,W=k.length;!this.result._shouldStop&&P<W;P++)this.intersectBody(k[P])},h.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},h.prototype.intersectShape=function(k,C,P,W){var Q=this.from,it=et(Q,this._direction,P);if(!(it>k.boundingSphereRadius)){var Z=this[k.type];Z&&Z.call(this,k,C,P,W)}},new s,new s;var x=new s,_=new s,A=new s,b=new s;new s,new l,h.prototype.intersectBox=function(k,C,P,W){return this.intersectConvex(k.convexPolyhedronRepresentation,C,P,W)},h.prototype[c.types.BOX]=h.prototype.intersectBox,h.prototype.intersectPlane=function(k,C,P,W){var Q=this.from,it=this.to,Z=this._direction,ot=new s(0,0,1);C.vmult(ot,ot);var B=new s;Q.vsub(P,B);var xt=B.dot(ot);it.vsub(P,B);var ft=B.dot(ot);if(!(xt*ft>0)&&!(Q.distanceTo(it)<xt)){var Mt=ot.dot(Z);if(!(Math.abs(Mt)<this.precision)){var rt=new s,dt=new s,U=new s;Q.vsub(P,rt);var S=-ot.dot(rt)/Mt;Z.scale(S,dt),Q.vadd(dt,U),this.reportIntersection(ot,U,k,W,-1)}}},h.prototype[c.types.PLANE]=h.prototype.intersectPlane,h.prototype.getAABB=function(k){var C=this.to,P=this.from;k.lowerBound.x=Math.min(C.x,P.x),k.lowerBound.y=Math.min(C.y,P.y),k.lowerBound.z=Math.min(C.z,P.z),k.upperBound.x=Math.max(C.x,P.x),k.upperBound.y=Math.max(C.y,P.y),k.upperBound.z=Math.max(C.z,P.z)};var L={faceList:[0]};h.prototype.intersectHeightfield=function(k,C,P,W){k.data,k.elementSize;var Q=new s,it=new h(this.from,this.to);o.pointToLocalFrame(P,C,it.from,it.from),o.pointToLocalFrame(P,C,it.to,it.to);var Z=[],ot=null,B=null,xt=null,ft=null,Mt=k.getIndexOfPosition(it.from.x,it.from.y,Z,!1);if(Mt&&(ot=Z[0],B=Z[1],xt=Z[0],ft=Z[1]),Mt=k.getIndexOfPosition(it.to.x,it.to.y,Z,!1),Mt&&((ot===null||Z[0]<ot)&&(ot=Z[0]),(xt===null||Z[0]>xt)&&(xt=Z[0]),(B===null||Z[1]<B)&&(B=Z[1]),(ft===null||Z[1]>ft)&&(ft=Z[1])),ot!==null){var rt=[];k.getRectMinMax(ot,B,xt,ft,rt),rt[0],rt[1];for(var dt=ot;dt<=xt;dt++)for(var U=B;U<=ft;U++){if(this.result._shouldStop||(k.getConvexTrianglePillar(dt,U,!1),o.pointToWorldFrame(P,C,k.pillarOffset,Q),this.intersectConvex(k.pillarConvex,C,Q,W,L),this.result._shouldStop))return;k.getConvexTrianglePillar(dt,U,!0),o.pointToWorldFrame(P,C,k.pillarOffset,Q),this.intersectConvex(k.pillarConvex,C,Q,W,L)}}},h.prototype[c.types.HEIGHTFIELD]=h.prototype.intersectHeightfield;var N=new s,w=new s;h.prototype.intersectSphere=function(k,C,P,W){var Q=this.from,it=this.to,Z=k.radius,ot=Math.pow(it.x-Q.x,2)+Math.pow(it.y-Q.y,2)+Math.pow(it.z-Q.z,2),B=2*((it.x-Q.x)*(Q.x-P.x)+(it.y-Q.y)*(Q.y-P.y)+(it.z-Q.z)*(Q.z-P.z)),xt=Math.pow(Q.x-P.x,2)+Math.pow(Q.y-P.y,2)+Math.pow(Q.z-P.z,2)-Math.pow(Z,2),ft=Math.pow(B,2)-4*ot*xt,Mt=N,rt=w;if(!(ft<0))if(ft===0)Q.lerp(it,ft,Mt),Mt.vsub(P,rt),rt.normalize(),this.reportIntersection(rt,Mt,k,W,-1);else{var dt=(-B-Math.sqrt(ft))/(2*ot),U=(-B+Math.sqrt(ft))/(2*ot);if(dt>=0&&dt<=1&&(Q.lerp(it,dt,Mt),Mt.vsub(P,rt),rt.normalize(),this.reportIntersection(rt,Mt,k,W,-1)),this.result._shouldStop)return;U>=0&&U<=1&&(Q.lerp(it,U,Mt),Mt.vsub(P,rt),rt.normalize(),this.reportIntersection(rt,Mt,k,W,-1))}},h.prototype[c.types.SPHERE]=h.prototype.intersectSphere;var M=new s;new s,new s;var T=new s;h.prototype.intersectConvex=function(C,P,W,Q,it){for(var Z=M,ot=T,B=it&&it.faceList||null,xt=C.faces,ft=C.vertices,Mt=C.faceNormals,rt=this._direction,dt=this.from,U=this.to,S=dt.distanceTo(U),nt=B?B.length:xt.length,tt=this.result,ct=0;!tt._shouldStop&&ct<nt;ct++){var ut=B?B[ct]:ct,It=xt[ut],pt=Mt[ut],bt=P,Bt=W;ot.copy(ft[It[0]]),bt.vmult(ot,ot),ot.vadd(Bt,ot),ot.vsub(dt,ot),bt.vmult(pt,Z);var vt=rt.dot(Z);if(!(Math.abs(vt)<this.precision)){var Pt=Z.dot(ot)/vt;if(!(Pt<0)){rt.mult(Pt,x),x.vadd(dt,x),_.copy(ft[It[0]]),bt.vmult(_,_),Bt.vadd(_,_);for(var Yt=1;!tt._shouldStop&&Yt<It.length-1;Yt++){A.copy(ft[It[Yt]]),b.copy(ft[It[Yt+1]]),bt.vmult(A,A),bt.vmult(b,b),Bt.vadd(A,A),Bt.vadd(b,b);var Ht=x.distanceTo(dt);!(p(x,_,A,b)||p(x,A,_,b))||Ht>S||this.reportIntersection(Z,x,C,Q,ut)}}}}},h.prototype[c.types.CONVEXPOLYHEDRON]=h.prototype.intersectConvex;var F=new s,I=new s,X=new s,q=new s,at=new s,G=new s;new u;var D=[],J=new o;h.prototype.intersectTrimesh=function(C,P,W,Q,it){var Z=F,ot=D,B=J,xt=T,ft=I,Mt=X,rt=q,dt=G,U=at;it&&it.faceList;var S=C.indices;C.vertices,C.faceNormals;var nt=this.from,tt=this.to,ct=this._direction;B.position.copy(W),B.quaternion.copy(P),o.vectorToLocalFrame(W,P,ct,ft),o.pointToLocalFrame(W,P,nt,Mt),o.pointToLocalFrame(W,P,tt,rt);var ut=Mt.distanceSquared(rt);C.tree.rayQuery(this,B,ot);for(var It=0,pt=ot.length;!this.result._shouldStop&&It!==pt;It++){var bt=ot[It];C.getNormal(bt,Z),C.getVertex(S[bt*3],_),_.vsub(Mt,xt);var Bt=ft.dot(Z),vt=Z.dot(xt)/Bt;if(!(vt<0)){ft.scale(vt,x),x.vadd(Mt,x),C.getVertex(S[bt*3+1],A),C.getVertex(S[bt*3+2],b);var Pt=x.distanceSquared(Mt);!(p(x,A,_,b)||p(x,_,A,b))||Pt>ut||(o.vectorToWorldFrame(P,Z,U),o.pointToWorldFrame(W,P,x,dt),this.reportIntersection(U,dt,C,Q,bt))}}ot.length=0},h.prototype[c.types.TRIMESH]=h.prototype.intersectTrimesh,h.prototype.reportIntersection=function(k,C,P,W,Q){var it=this.from,Z=this.to,ot=it.distanceTo(C),B=this.result;if(!(this.skipBackfaces&&k.dot(this._direction)>0))switch(B.hitFaceIndex=typeof Q<"u"?Q:-1,this.mode){case h.ALL:this.hasHit=!0,B.set(it,Z,k,C,P,W,ot),B.hasHit=!0,this.callback(B);break;case h.CLOSEST:(ot<B.distance||!B.hasHit)&&(this.hasHit=!0,B.hasHit=!0,B.set(it,Z,k,C,P,W,ot));break;case h.ANY:this.hasHit=!0,B.hasHit=!0,B.set(it,Z,k,C,P,W,ot),B._shouldStop=!0;break}};var j=new s,H=new s;function et(k,C,P){P.vsub(k,j);var W=j.dot(C);C.mult(W,H),H.vadd(k,H);var Q=P.distanceTo(H);return Q}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var s=e("../math/Vec3");n.exports=r;function r(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}r.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},r.prototype.abort=function(){this._shouldStop=!0},r.prototype.set=function(o,l,c,u,h,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(c),this.hitPointWorld.copy(u),this.shape=h,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var s=e("../collision/Broadphase");n.exports=r;function r(o){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(c){l.push(c.body)},this._removeBodyHandler=function(c){var u=l.indexOf(c.body);u!==-1&&l.splice(u,1)},o&&this.setWorld(o)}r.prototype=new s,r.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},r.insertionSortX=function(o){for(var l=1,c=o.length;l<c;l++){for(var u=o[l],h=l-1;h>=0&&!(o[h].aabb.lowerBound.x<=u.aabb.lowerBound.x);h--)o[h+1]=o[h];o[h+1]=u}return o},r.insertionSortY=function(o){for(var l=1,c=o.length;l<c;l++){for(var u=o[l],h=l-1;h>=0&&!(o[h].aabb.lowerBound.y<=u.aabb.lowerBound.y);h--)o[h+1]=o[h];o[h+1]=u}return o},r.insertionSortZ=function(o){for(var l=1,c=o.length;l<c;l++){for(var u=o[l],h=l-1;h>=0&&!(o[h].aabb.lowerBound.z<=u.aabb.lowerBound.z);h--)o[h+1]=o[h];o[h+1]=u}return o},r.prototype.collisionPairs=function(o,l,c){var u=this.axisList,h=u.length,d=this.axisIndex,f,m;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==h;f++){var g=u[f];for(m=f+1;m<h;m++){var p=u[m];if(this.needBroadphaseCollision(g,p)){if(!r.checkBounds(g,p,d))break;this.intersectionTest(g,p,l,c)}}}},r.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,c=o.length,u=0;u!==c;u++){var h=o[u];h.aabbNeedsUpdate&&h.computeAABB()}l===0?r.insertionSortX(o):l===1?r.insertionSortY(o):l===2&&r.insertionSortZ(o)},r.checkBounds=function(o,l,c){var u,h;c===0?(u=o.position.x,h=l.position.x):c===1?(u=o.position.y,h=l.position.y):c===2&&(u=o.position.z,h=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,m=u+d,g=h-f;return g<m},r.prototype.autoDetectAxis=function(){for(var o=0,l=0,c=0,u=0,h=0,d=0,f=this.axisList,m=f.length,g=1/m,p=0;p!==m;p++){var v=f[p],y=v.position.x;o+=y,l+=y*y;var x=v.position.y;c+=x,u+=x*x;var _=v.position.z;h+=_,d+=_*_}var A=l-o*o*g,b=u-c*c*g,L=d-h*h*g;A>b?A>L?this.axisIndex=0:this.axisIndex=2:b>L?this.axisIndex=1:this.axisIndex=2},r.prototype.aabbQuery=function(o,l,c){c=c||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,h="x";u===1&&(h="y"),u===2&&(h="z");var d=this.axisList;l.lowerBound[h],l.upperBound[h];for(var f=0;f<d.length;f++){var m=d[f];m.aabbNeedsUpdate&&m.computeAABB(),m.aabb.overlaps(l)&&c.push(m)}return c}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=c,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function c(u,h,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,m=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,s.call(this,u,m,h,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var p=this.coneEquation=new r(u,h,d),v=this.twistEquation=new o(u,h,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,p.maxForce=0,p.minForce=-f,v.maxForce=0,v.minForce=-f,this.equations.push(p,v)}c.prototype=new s,c.constructor=c,new l,new l,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,d=this.coneEquation,f=this.twistEquation;s.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),h.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),h.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=r;var s=e("../utils/Utils");function r(o,l,c){c=s.defaults(c,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=r.idCounter++,this.collideConnected=c.collideConnected,c.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}r.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},r.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},r.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},r.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=o;var s=e("./Constraint"),r=e("../equations/ContactEquation");function o(l,c,u,h){s.call(this,l,c),typeof u>"u"&&(u=l.position.distanceTo(c.position)),typeof h>"u"&&(h=1e6),this.distance=u;var d=this.distanceEquation=new r(l,c);this.equations.push(d),d.minForce=-h,d.maxForce=h}o.prototype=new s,o.prototype.update=function(){var l=this.bodyA,c=this.bodyB,u=this.distanceEquation,h=this.distance*.5,d=u.ni;c.position.vsub(l.position,d),d.normalize(),d.mult(h,u.ri),d.mult(-h,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=c,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function c(d,f,m){m=m||{};var g=typeof m.maxForce<"u"?m.maxForce:1e6,p=m.pivotA?m.pivotA.clone():new l,v=m.pivotB?m.pivotB.clone():new l;s.call(this,d,p,f,v,g);var y=this.axisA=m.axisA?m.axisA.clone():new l(1,0,0);y.normalize();var x=this.axisB=m.axisB?m.axisB.clone():new l(1,0,0);x.normalize();var _=this.rotationalEquation1=new r(d,f,m),A=this.rotationalEquation2=new r(d,f,m),b=this.motorEquation=new o(d,f,g);b.enabled=!1,this.equations.push(_,A,b)}c.prototype=new s,c.constructor=c,c.prototype.enableMotor=function(){this.motorEquation.enabled=!0},c.prototype.disableMotor=function(){this.motorEquation.enabled=!1},c.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},c.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,h=new l;c.prototype.update=function(){var d=this.bodyA,f=this.bodyB,m=this.motorEquation,g=this.rotationalEquation1,p=this.rotationalEquation2,v=u,y=h,x=this.axisA,_=this.axisB;s.prototype.update.call(this),d.quaternion.vmult(x,v),f.quaternion.vmult(_,y),v.tangents(g.axisA,p.axisA),g.axisB.copy(y),p.axisB.copy(y),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,m.axisA),f.quaternion.vmult(this.axisB,m.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=l,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function l(c,u,h){h=h||{};var d=typeof h.maxForce<"u"?h.maxForce:1e6,f=new o,m=new o,g=new o;c.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,m),c.pointToLocalFrame(g,f),s.call(this,c,f,u,m,d);var p=this.rotationalEquation1=new r(c,u,h),v=this.rotationalEquation2=new r(c,u,h),y=this.rotationalEquation3=new r(c,u,h);this.equations.push(p,v,y)}l.prototype=new s,l.constructor=l,new o,new o,l.prototype.update=function(){var c=this.bodyA,u=this.bodyB;this.motorEquation;var h=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;s.prototype.update.call(this),c.vectorToWorldFrame(o.UNIT_X,h.axisA),u.vectorToWorldFrame(o.UNIT_Y,h.axisB),c.vectorToWorldFrame(o.UNIT_Y,d.axisA),u.vectorToWorldFrame(o.UNIT_Z,d.axisB),c.vectorToWorldFrame(o.UNIT_Z,f.axisA),u.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=l;var s=e("./Constraint"),r=e("../equations/ContactEquation"),o=e("../math/Vec3");function l(c,u,h,d,f){s.call(this,c,h),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new o,this.pivotB=d?d.clone():new o;var m=this.equationX=new r(c,h),g=this.equationY=new r(c,h),p=this.equationZ=new r(c,h);this.equations.push(m,g,p),m.minForce=g.minForce=p.minForce=-f,m.maxForce=g.maxForce=p.maxForce=f,m.ni.set(1,0,0),g.ni.set(0,1,0),p.ni.set(0,0,1)}l.prototype=new s,l.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.equationX,d=this.equationY,f=this.equationZ;c.quaternion.vmult(this.pivotA,h.ri),u.quaternion.vmult(this.pivotB,h.rj),d.ri.copy(h.ri),d.rj.copy(h.rj),f.ri.copy(h.ri),f.rj.copy(h.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=o;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function o(u,h,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,u,h,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new r,o.prototype.constructor=o;var l=new s,c=new s;o.prototype.computeB=function(u){var h=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,p=c,v=this.jacobianElementA,y=this.jacobianElementB;f.cross(m,g),m.cross(f,p),v.rotational.copy(p),y.rotational.copy(g);var x=Math.cos(this.angle)-f.dot(m),_=this.computeGW(),A=this.computeGiMf(),b=-x*h-_*d-u*A;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=o;var s=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function o(p,v,y){y=typeof y<"u"?y:1e6,s.call(this,p,v,0,y),this.restitution=0,this.ri=new r,this.rj=new r,this.ni=new r}o.prototype=new s,o.prototype.constructor=o;var l=new r,c=new r,u=new r;o.prototype.computeB=function(p){var v=this.a,y=this.b,x=this.bi,_=this.bj,A=this.ri,b=this.rj,L=l,N=c,w=x.velocity,M=x.angularVelocity;x.force,x.torque;var T=_.velocity,F=_.angularVelocity;_.force,_.torque;var I=u,X=this.jacobianElementA,q=this.jacobianElementB,at=this.ni;A.cross(at,L),b.cross(at,N),at.negate(X.spatial),L.negate(X.rotational),q.spatial.copy(at),q.rotational.copy(N),I.copy(_.position),I.vadd(b,I),I.vsub(x.position,I),I.vsub(A,I);var G=at.dot(I),D=this.restitution+1,J=D*T.dot(at)-D*w.dot(at)+F.dot(N)-M.dot(L),j=this.computeGiMf(),H=-G*v-J*y-p*j;return H};var h=new r,d=new r,f=new r,m=new r,g=new r;o.prototype.getImpactVelocityAlongNormal=function(){var p=h,v=d,y=f,x=m,_=g;return this.bi.position.vadd(this.ri,y),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(y,p),this.bj.getVelocityAtWorldPoint(x,v),p.vsub(v,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=o;var s=e("../math/JacobianElement"),r=e("../math/Vec3");function o(g,p,v,y){this.id=o.id++,this.minForce=typeof v>"u"?-1e6:v,this.maxForce=typeof y>"u"?1e6:y,this.bi=g,this.bj=p,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,p,v){var y=p,x=g,_=v;this.a=4/(_*(1+4*y)),this.b=4*y/(1+4*y),this.eps=4/(_*_*x*(1+4*y))},o.prototype.computeB=function(g,p,v){var y=this.computeGW(),x=this.computeGq(),_=this.computeGiMf();return-x*g-y*p-_*v},o.prototype.computeGq=function(){var g=this.jacobianElementA,p=this.jacobianElementB,v=this.bi,y=this.bj,x=v.position,_=y.position;return g.spatial.dot(x)+p.spatial.dot(_)};var l=new r;o.prototype.computeGW=function(){var g=this.jacobianElementA,p=this.jacobianElementB,v=this.bi,y=this.bj,x=v.velocity,_=y.velocity,A=v.angularVelocity||l,b=y.angularVelocity||l;return g.multiplyVectors(x,A)+p.multiplyVectors(_,b)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,p=this.jacobianElementB,v=this.bi,y=this.bj,x=v.vlambda,_=y.vlambda,A=v.wlambda||l,b=y.wlambda||l;return g.multiplyVectors(x,A)+p.multiplyVectors(_,b)};var c=new r,u=new r,h=new r,d=new r;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,p=this.jacobianElementB,v=this.bi,y=this.bj,x=v.force,_=v.torque,A=y.force,b=y.torque,L=v.invMassSolve,N=y.invMassSolve;return v.invInertiaWorldSolve?v.invInertiaWorldSolve.vmult(_,h):h.set(0,0,0),y.invInertiaWorldSolve?y.invInertiaWorldSolve.vmult(b,d):d.set(0,0,0),x.mult(L,c),A.mult(N,u),g.multiplyVectors(c,h)+p.multiplyVectors(u,d)};var f=new r;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,p=this.jacobianElementB,v=this.bi,y=this.bj,x=v.invMassSolve,_=y.invMassSolve,A=v.invInertiaWorldSolve,b=y.invInertiaWorldSolve,L=x+_;return A&&(A.vmult(g.rotational,f),L+=f.dot(g.rotational)),b&&(b.vmult(p.rotational,f),L+=f.dot(p.rotational)),L};var m=new r;new r,new r,new r,new r,new r,o.prototype.addToWlambda=function(g){var p=this.jacobianElementA,v=this.jacobianElementB,y=this.bi,x=this.bj,_=m;p.spatial.mult(y.invMassSolve*g,_),y.vlambda.vadd(_,y.vlambda),v.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,_),_.mult(g,_),y.wlambda.vadd(_,y.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(v.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=o;var s=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function o(u,h,d){s.call(this,u,h,-d,d),this.ri=new r,this.rj=new r,this.t=new r}o.prototype=new s,o.prototype.constructor=o;var l=new r,c=new r;o.prototype.computeB=function(u){this.a;var h=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,m=l,g=c,p=this.t;d.cross(p,m),f.cross(p,g);var v=this.jacobianElementA,y=this.jacobianElementB;p.negate(v.spatial),m.negate(v.rotational),y.spatial.copy(p),y.rotational.copy(g);var x=this.computeGW(),_=this.computeGiMf(),A=-x*h-u*_;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=o;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function o(u,h,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,u,h,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new r,o.prototype.constructor=o;var l=new s,c=new s;o.prototype.computeB=function(u){var h=this.a,d=this.b,f=this.axisA,m=this.axisB,g=l,p=c,v=this.jacobianElementA,y=this.jacobianElementB;f.cross(m,g),m.cross(f,p),v.rotational.copy(p),y.rotational.copy(g);var x=Math.cos(this.maxAngle)-f.dot(m),_=this.computeGW(),A=this.computeGiMf(),b=-x*h-_*d-u*A;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=o;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function o(l,c,u){u=typeof u<"u"?u:1e6,r.call(this,l,c,-u,u),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var c=this.b;this.bi,this.bj;var u=this.axisA,h=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),h.negate(f.rotational);var m=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),p=-m*c-l*g;return p}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var s=e("../utils/Utils");n.exports=r;function r(o,l,c){c=s.defaults(c,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[o,l],this.friction=c.friction,this.restitution=c.restitution,this.contactEquationStiffness=c.contactEquationStiffness,this.contactEquationRelaxation=c.contactEquationRelaxation,this.frictionEquationStiffness=c.frictionEquationStiffness,this.frictionEquationRelaxation=c.frictionEquationRelaxation}r.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=s;function s(r){var o="";r=r||{},typeof r=="string"?(o=r,r={}):typeof r=="object"&&(o=""),this.name=o,this.id=s.idCounter++,this.friction=typeof r.friction<"u"?r.friction:-1,this.restitution=typeof r.restitution<"u"?r.restitution:-1}s.idCounter=0},{}],26:[function(e,n,i){n.exports=r;var s=e("./Vec3");function r(){this.spatial=new s,this.rotational=new s}r.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},r.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=r;var s=e("./Vec3");function r(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}r.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},r.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},r.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},r.prototype.getTrace=function(l){var l=l||new s,c=this.elements;l.x=c[0],l.y=c[4],l.z=c[8]},r.prototype.vmult=function(o,l){l=l||new s;var c=this.elements,u=o.x,h=o.y,d=o.z;return l.x=c[0]*u+c[1]*h+c[2]*d,l.y=c[3]*u+c[4]*h+c[5]*d,l.z=c[6]*u+c[7]*h+c[8]*d,l},r.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},r.prototype.mmult=function(o,l){for(var c=l||new r,u=0;u<3;u++)for(var h=0;h<3;h++){for(var d=0,f=0;f<3;f++)d+=o.elements[u+f*3]*this.elements[f+h*3];c.elements[u+h*3]=d}return c},r.prototype.scale=function(o,l){l=l||new r;for(var c=this.elements,u=l.elements,h=0;h!==3;h++)u[3*h+0]=o.x*c[3*h+0],u[3*h+1]=o.y*c[3*h+1],u[3*h+2]=o.z*c[3*h+2];return l},r.prototype.solve=function(o,l){l=l||new s;for(var c=3,u=4,h=[],d=0;d<c*u;d++)h.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)h[d+u*f]=this.elements[d+3*f];h[3+4*0]=o.x,h[3+4*1]=o.y,h[3+4*2]=o.z;var m=3,g=m,p,v=4,y;do{if(d=g-m,h[d+u*d]===0){for(f=d+1;f<g;f++)if(h[d+u*f]!==0){p=v;do y=v-p,h[y+u*d]+=h[y+u*f];while(--p);break}}if(h[d+u*d]!==0)for(f=d+1;f<g;f++){var x=h[d+u*f]/h[d+u*d];p=v;do y=v-p,h[y+u*f]=y<=d?0:h[y+u*f]-h[y+u*d]*x;while(--p)}}while(--m);if(l.z=h[2*u+3]/h[2*u+2],l.y=(h[1*u+3]-h[1*u+2]*l.z)/h[1*u+1],l.x=(h[0*u+3]-h[0*u+2]*l.z-h[0*u+1]*l.y)/h[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},r.prototype.e=function(o,l,c){if(c===void 0)return this.elements[l+3*o];this.elements[l+3*o]=c},r.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},r.prototype.toString=function(){for(var o="",l=",",c=0;c<9;c++)o+=this.elements[c]+l;return o},r.prototype.reverse=function(o){o=o||new r;for(var l=3,c=6,u=[],h=0;h<l*c;h++)u.push(0);var h,d;for(h=0;h<3;h++)for(d=0;d<3;d++)u[h+c*d]=this.elements[h+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,m=f,g,p=c,v;do{if(h=m-f,u[h+c*h]===0){for(d=h+1;d<m;d++)if(u[h+c*d]!==0){g=p;do v=p-g,u[v+c*h]+=u[v+c*d];while(--g);break}}if(u[h+c*h]!==0)for(d=h+1;d<m;d++){var y=u[h+c*d]/u[h+c*h];g=p;do v=p-g,u[v+c*d]=v<=h?0:u[v+c*d]-u[v+c*h]*y;while(--g)}}while(--f);h=2;do{d=h-1;do{var y=u[h+c*d]/u[h+c*h];g=c;do v=c-g,u[v+c*d]=u[v+c*d]-u[v+c*h]*y;while(--g)}while(d--)}while(--h);h=2;do{var y=1/u[h+c*h];g=c;do v=c-g,u[v+c*h]=u[v+c*h]*y;while(--g)}while(h--);h=2;do{d=2;do{if(v=u[l+d+c*h],isNaN(v)||v===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(h,d,v)}while(d--)}while(h--);return o},r.prototype.setRotationFromQuaternion=function(o){var l=o.x,c=o.y,u=o.z,h=o.w,d=l+l,f=c+c,m=u+u,g=l*d,p=l*f,v=l*m,y=c*f,x=c*m,_=u*m,A=h*d,b=h*f,L=h*m,N=this.elements;return N[3*0+0]=1-(y+_),N[3*0+1]=p-L,N[3*0+2]=v+b,N[3*1+0]=p+L,N[3*1+1]=1-(g+_),N[3*1+2]=x-A,N[3*2+0]=v-b,N[3*2+1]=x+A,N[3*2+2]=1-(g+y),this},r.prototype.transpose=function(o){o=o||new r;for(var l=o.elements,c=this.elements,u=0;u!==3;u++)for(var h=0;h!==3;h++)l[3*u+h]=c[3*h+u];return o}},{"./Vec3":30}],28:[function(e,n,i){n.exports=r;var s=e("./Vec3");function r(d,f,m,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=m!==void 0?m:0,this.w=g!==void 0?g:1}r.prototype.set=function(d,f,m,g){this.x=d,this.y=f,this.z=m,this.w=g},r.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},r.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},r.prototype.setFromAxisAngle=function(d,f){var m=Math.sin(f*.5);this.x=d.x*m,this.y=d.y*m,this.z=d.z*m,this.w=Math.cos(f*.5)},r.prototype.toAxisAngle=function(d){d=d||new s,this.normalize();var f=2*Math.acos(this.w),m=Math.sqrt(1-this.w*this.w);return m<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/m,d.y=this.y/m,d.z=this.z/m),[d,f]};var o=new s,l=new s;r.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var m=o,g=l;d.tangents(m,g),this.setFromAxisAngle(m,Math.PI)}else{var p=d.cross(f);this.x=p.x,this.y=p.y,this.z=p.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var c=new s,u=new s,h=new s;r.prototype.mult=function(d,f){f=f||new r;var m=this.w,g=c,p=u,v=h;return g.set(this.x,this.y,this.z),p.set(d.x,d.y,d.z),f.w=m*d.w-g.dot(p),g.cross(p,v),f.x=m*p.x+d.w*g.x+v.x,f.y=m*p.y+d.w*g.y+v.y,f.z=m*p.z+d.w*g.z+v.z,f},r.prototype.inverse=function(d){var f=this.x,m=this.y,g=this.z,p=this.w;d=d||new r,this.conjugate(d);var v=1/(f*f+m*m+g*g+p*p);return d.x*=v,d.y*=v,d.z*=v,d.w*=v,d},r.prototype.conjugate=function(d){return d=d||new r,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},r.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.vmult=function(d,f){f=f||new s;var m=d.x,g=d.y,p=d.z,v=this.x,y=this.y,x=this.z,_=this.w,A=_*m+y*p-x*g,b=_*g+x*m-v*p,L=_*p+v*g-y*m,N=-v*m-y*g-x*p;return f.x=A*_+N*-v+b*-x-L*-y,f.y=b*_+N*-y+L*-v-A*-x,f.z=L*_+N*-x+A*-y-b*-v,f},r.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},r.prototype.toEuler=function(d,f){f=f||"YZX";var m,g,p,v=this.x,y=this.y,x=this.z,_=this.w;switch(f){case"YZX":var A=v*y+x*_;if(A>.499&&(m=2*Math.atan2(v,_),g=Math.PI/2,p=0),A<-.499&&(m=-2*Math.atan2(v,_),g=-Math.PI/2,p=0),isNaN(m)){var b=v*v,L=y*y,N=x*x;m=Math.atan2(2*y*_-2*v*x,1-2*L-2*N),g=Math.asin(2*A),p=Math.atan2(2*v*_-2*y*x,1-2*b-2*N)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=m,d.z=g,d.x=p},r.prototype.setFromEuler=function(d,f,m,g){g=g||"XYZ";var p=Math.cos(d/2),v=Math.cos(f/2),y=Math.cos(m/2),x=Math.sin(d/2),_=Math.sin(f/2),A=Math.sin(m/2);return g==="XYZ"?(this.x=x*v*y+p*_*A,this.y=p*_*y-x*v*A,this.z=p*v*A+x*_*y,this.w=p*v*y-x*_*A):g==="YXZ"?(this.x=x*v*y+p*_*A,this.y=p*_*y-x*v*A,this.z=p*v*A-x*_*y,this.w=p*v*y+x*_*A):g==="ZXY"?(this.x=x*v*y-p*_*A,this.y=p*_*y+x*v*A,this.z=p*v*A+x*_*y,this.w=p*v*y-x*_*A):g==="ZYX"?(this.x=x*v*y-p*_*A,this.y=p*_*y+x*v*A,this.z=p*v*A-x*_*y,this.w=p*v*y+x*_*A):g==="YZX"?(this.x=x*v*y+p*_*A,this.y=p*_*y+x*v*A,this.z=p*v*A-x*_*y,this.w=p*v*y-x*_*A):g==="XZY"&&(this.x=x*v*y-p*_*A,this.y=p*_*y-x*v*A,this.z=p*v*A+x*_*y,this.w=p*v*y+x*_*A),this},r.prototype.clone=function(){return new r(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var s=e("./Vec3"),r=e("./Quaternion");n.exports=o;function o(c){c=c||{},this.position=new s,c.position&&this.position.copy(c.position),this.quaternion=new r,c.quaternion&&this.quaternion.copy(c.quaternion)}var l=new r;o.pointToLocalFrame=function(c,u,h,f){var f=f||new s;return h.vsub(c,f),u.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(c,u){return o.pointToLocalFrame(this.position,this.quaternion,c,u)},o.pointToWorldFrame=function(c,u,h,f){var f=f||new s;return u.vmult(h,f),f.vadd(c,f),f},o.prototype.pointToWorld=function(c,u){return o.pointToWorldFrame(this.position,this.quaternion,c,u)},o.prototype.vectorToWorldFrame=function(c,h){var h=h||new s;return this.quaternion.vmult(c,h),h},o.vectorToWorldFrame=function(c,u,h){return c.vmult(u,h),h},o.vectorToLocalFrame=function(c,u,h,f){var f=f||new s;return u.w*=-1,u.vmult(h,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=r;var s=e("./Mat3");function r(u,h,d){this.x=u||0,this.y=h||0,this.z=d||0}r.ZERO=new r(0,0,0),r.UNIT_X=new r(1,0,0),r.UNIT_Y=new r(0,1,0),r.UNIT_Z=new r(0,0,1),r.prototype.cross=function(u,h){var d=u.x,f=u.y,m=u.z,g=this.x,p=this.y,v=this.z;return h=h||new r,h.x=p*m-v*f,h.y=v*d-g*m,h.z=g*f-p*d,h},r.prototype.set=function(u,h,d){return this.x=u,this.y=h,this.z=d,this},r.prototype.setZero=function(){this.x=this.y=this.z=0},r.prototype.vadd=function(u,h){if(h)h.x=u.x+this.x,h.y=u.y+this.y,h.z=u.z+this.z;else return new r(this.x+u.x,this.y+u.y,this.z+u.z)},r.prototype.vsub=function(u,h){if(h)h.x=this.x-u.x,h.y=this.y-u.y,h.z=this.z-u.z;else return new r(this.x-u.x,this.y-u.y,this.z-u.z)},r.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},r.prototype.normalize=function(){var u=this.x,h=this.y,d=this.z,f=Math.sqrt(u*u+h*h+d*d);if(f>0){var m=1/f;this.x*=m,this.y*=m,this.z*=m}else this.x=0,this.y=0,this.z=0;return f},r.prototype.unit=function(u){u=u||new r;var h=this.x,d=this.y,f=this.z,m=Math.sqrt(h*h+d*d+f*f);return m>0?(m=1/m,u.x=h*m,u.y=d*m,u.z=f*m):(u.x=1,u.y=0,u.z=0),u},r.prototype.norm=function(){var u=this.x,h=this.y,d=this.z;return Math.sqrt(u*u+h*h+d*d)},r.prototype.length=r.prototype.norm,r.prototype.norm2=function(){return this.dot(this)},r.prototype.lengthSquared=r.prototype.norm2,r.prototype.distanceTo=function(u){var h=this.x,d=this.y,f=this.z,m=u.x,g=u.y,p=u.z;return Math.sqrt((m-h)*(m-h)+(g-d)*(g-d)+(p-f)*(p-f))},r.prototype.distanceSquared=function(u){var h=this.x,d=this.y,f=this.z,m=u.x,g=u.y,p=u.z;return(m-h)*(m-h)+(g-d)*(g-d)+(p-f)*(p-f)},r.prototype.mult=function(u,h){h=h||new r;var d=this.x,f=this.y,m=this.z;return h.x=u*d,h.y=u*f,h.z=u*m,h},r.prototype.scale=r.prototype.mult,r.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},r.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},r.prototype.negate=function(u){return u=u||new r,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new r,l=new r;r.prototype.tangents=function(u,h){var d=this.norm();if(d>0){var f=o,m=1/d;f.set(this.x*m,this.y*m,this.z*m);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,h)}else u.set(1,0,0),h.set(0,1,0)},r.prototype.toString=function(){return this.x+","+this.y+","+this.z},r.prototype.toArray=function(){return[this.x,this.y,this.z]},r.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},r.prototype.lerp=function(u,h,d){var f=this.x,m=this.y,g=this.z;d.x=f+(u.x-f)*h,d.y=m+(u.y-m)*h,d.z=g+(u.z-g)*h},r.prototype.almostEquals=function(u,h){return h===void 0&&(h=1e-6),!(Math.abs(this.x-u.x)>h||Math.abs(this.y-u.y)>h||Math.abs(this.z-u.z)>h)},r.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var c=new r;r.prototype.isAntiparallelTo=function(u,h){return this.negate(c),c.almostEquals(u,h)},r.prototype.clone=function(){return new r(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=h;var s=e("../utils/EventTarget");e("../shapes/Shape");var r=e("../math/Vec3"),o=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var c=e("../collision/AABB"),u=e("../shapes/Box");function h(T){T=T||{},s.apply(this),this.id=h.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new r,this.collisionFilterGroup=typeof T.collisionFilterGroup=="number"?T.collisionFilterGroup:1,this.collisionFilterMask=typeof T.collisionFilterMask=="number"?T.collisionFilterMask:1,this.collisionResponse=!0,this.position=new r,T.position&&this.position.copy(T.position),this.previousPosition=new r,this.initPosition=new r,this.velocity=new r,T.velocity&&this.velocity.copy(T.velocity),this.initVelocity=new r,this.force=new r;var F=typeof T.mass=="number"?T.mass:0;this.mass=F,this.invMass=F>0?1/F:0,this.material=T.material||null,this.linearDamping=typeof T.linearDamping=="number"?T.linearDamping:.01,this.type=F<=0?h.STATIC:h.DYNAMIC,typeof T.type==typeof h.STATIC&&(this.type=T.type),this.allowSleep=typeof T.allowSleep<"u"?T.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof T.sleepSpeedLimit<"u"?T.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof T.sleepTimeLimit<"u"?T.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new r,this.quaternion=new l,T.quaternion&&this.quaternion.copy(T.quaternion),this.initQuaternion=new l,this.angularVelocity=new r,T.angularVelocity&&this.angularVelocity.copy(T.angularVelocity),this.initAngularVelocity=new r,this.interpolatedPosition=new r,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new r,this.invInertia=new r,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new r,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof T.fixedRotation<"u"?T.fixedRotation:!1,this.angularDamping=typeof T.angularDamping<"u"?T.angularDamping:.01,this.aabb=new c,this.aabbNeedsUpdate=!0,this.wlambda=new r,T.shape&&this.addShape(T.shape),this.updateMassProperties()}h.prototype=new s,h.prototype.constructor=h,h.DYNAMIC=1,h.STATIC=2,h.KINEMATIC=4,h.AWAKE=0,h.SLEEPY=1,h.SLEEPING=2,h.idCounter=0,h.prototype.wakeUp=function(){var T=this.sleepState;this.sleepState=0,T===h.SLEEPING&&this.dispatchEvent({type:"wakeup"})},h.prototype.sleep=function(){this.sleepState=h.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},h.sleepyEvent={type:"sleepy"},h.sleepEvent={type:"sleep"},h.prototype.sleepTick=function(T){if(this.allowSleep){var F=this.sleepState,I=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);F===h.AWAKE&&I<X?(this.sleepState=h.SLEEPY,this.timeLastSleepy=T,this.dispatchEvent(h.sleepyEvent)):F===h.SLEEPY&&I>X?this.wakeUp():F===h.SLEEPY&&T-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(h.sleepEvent))}},h.prototype.updateSolveMassProperties=function(){this.sleepState===h.SLEEPING||this.type===h.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},h.prototype.pointToLocalFrame=function(T,I){var I=I||new r;return T.vsub(this.position,I),this.quaternion.conjugate().vmult(I,I),I},h.prototype.vectorToLocalFrame=function(T,I){var I=I||new r;return this.quaternion.conjugate().vmult(T,I),I},h.prototype.pointToWorldFrame=function(T,I){var I=I||new r;return this.quaternion.vmult(T,I),I.vadd(this.position,I),I},h.prototype.vectorToWorldFrame=function(T,I){var I=I||new r;return this.quaternion.vmult(T,I),I};var d=new r,f=new l;h.prototype.addShape=function(T,F,I){var X=new r,q=new l;return F&&X.copy(F),I&&q.copy(I),this.shapes.push(T),this.shapeOffsets.push(X),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},h.prototype.updateBoundingRadius=function(){for(var T=this.shapes,F=this.shapeOffsets,I=T.length,X=0,q=0;q!==I;q++){var at=T[q];at.updateBoundingSphereRadius();var G=F[q].norm(),D=at.boundingSphereRadius;G+D>X&&(X=G+D)}this.boundingRadius=X};var m=new c;h.prototype.computeAABB=function(){for(var T=this.shapes,F=this.shapeOffsets,I=this.shapeOrientations,X=T.length,q=d,at=f,G=this.quaternion,D=this.aabb,J=m,j=0;j!==X;j++){var H=T[j];I[j].mult(G,at),at.vmult(F[j],q),q.vadd(this.position,q),H.calculateWorldAABB(q,at,J.lowerBound,J.upperBound),j===0?D.copy(J):D.extend(J)}this.aabbNeedsUpdate=!1};var g=new o,p=new o;new o,h.prototype.updateInertiaWorld=function(T){var F=this.invInertia;if(!(F.x===F.y&&F.y===F.z&&!T)){var I=g,X=p;I.setRotationFromQuaternion(this.quaternion),I.transpose(X),I.scale(F,I),I.mmult(X,this.invInertiaWorld)}};var v=new r,y=new r;h.prototype.applyForce=function(T,F){if(this.type===h.DYNAMIC){var I=v;F.vsub(this.position,I);var X=y;I.cross(T,X),this.force.vadd(T,this.force),this.torque.vadd(X,this.torque)}};var x=new r,_=new r;h.prototype.applyLocalForce=function(T,F){if(this.type===h.DYNAMIC){var I=x,X=_;this.vectorToWorldFrame(T,I),this.pointToWorldFrame(F,X),this.applyForce(I,X)}};var A=new r,b=new r,L=new r;h.prototype.applyImpulse=function(T,F){if(this.type===h.DYNAMIC){var I=A;F.vsub(this.position,I);var X=b;X.copy(T),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var q=L;I.cross(T,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var N=new r,w=new r;h.prototype.applyLocalImpulse=function(T,F){if(this.type===h.DYNAMIC){var I=N,X=w;this.vectorToWorldFrame(T,I),this.pointToWorldFrame(F,X),this.applyImpulse(I,X)}};var M=new r;h.prototype.updateMassProperties=function(){var T=M;this.invMass=this.mass>0?1/this.mass:0;var F=this.inertia,I=this.fixedRotation;this.computeAABB(),T.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(T,this.mass,F),this.invInertia.set(F.x>0&&!I?1/F.x:0,F.y>0&&!I?1/F.y:0,F.z>0&&!I?1/F.z:0),this.updateInertiaWorld(!0)},h.prototype.getVelocityAtWorldPoint=function(T,F){var I=new r;return T.vsub(this.position,I),this.angularVelocity.cross(I,F),this.velocity.vadd(F,F),F}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var s=e("../math/Vec3"),r=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=c;function c(G){this.chassisBody=G.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof G.indexRightAxis<"u"?G.indexRightAxis:1,this.indexForwardAxis=typeof G.indexForwardAxis<"u"?G.indexForwardAxis:0,this.indexUpAxis=typeof G.indexUpAxis<"u"?G.indexUpAxis:2}new s,new s,new s;var u=new s,h=new s,d=new s;new o,c.prototype.addWheel=function(G){G=G||{};var D=new l(G),J=this.wheelInfos.length;return this.wheelInfos.push(D),J},c.prototype.setSteeringValue=function(G,D){var J=this.wheelInfos[D];J.steering=G},new s,c.prototype.applyEngineForce=function(G,D){this.wheelInfos[D].engineForce=G},c.prototype.setBrake=function(G,D){this.wheelInfos[D].brake=G},c.prototype.addToWorld=function(G){this.constraints,G.add(this.chassisBody);var D=this;this.preStepCallback=function(){D.updateVehicle(G.dt)},G.addEventListener("preStep",this.preStepCallback),this.world=G},c.prototype.getVehicleAxisWorld=function(G,D){D.set(G===0?1:0,G===1?1:0,G===2?1:0),this.chassisBody.vectorToWorldFrame(D,D)},c.prototype.updateVehicle=function(G){for(var D=this.wheelInfos,J=D.length,j=this.chassisBody,H=0;H<J;H++)this.updateWheelTransform(H);this.currentVehicleSpeedKmHour=3.6*j.velocity.norm();var et=new s;this.getVehicleAxisWorld(this.indexForwardAxis,et),et.dot(j.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var H=0;H<J;H++)this.castRay(D[H]);this.updateSuspension(G);for(var k=new s,C=new s,H=0;H<J;H++){var P=D[H],W=P.suspensionForce;W>P.maxSuspensionForce&&(W=P.maxSuspensionForce),P.raycastResult.hitNormalWorld.scale(W*G,k),P.raycastResult.hitPointWorld.vsub(j.position,C),j.applyImpulse(k,P.raycastResult.hitPointWorld)}this.updateFriction(G);var Q=new s,it=new s,Z=new s;for(H=0;H<J;H++){var P=D[H];j.getVelocityAtWorldPoint(P.chassisConnectionPointWorld,Z);var ot=1;switch(this.indexUpAxis){case 1:ot=-1;break}if(P.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,it);var B=it.dot(P.raycastResult.hitNormalWorld);P.raycastResult.hitNormalWorld.scale(B,Q),it.vsub(Q,it);var xt=it.dot(Z);P.deltaRotation=ot*xt*G/P.radius}(P.sliding||!P.isInContact)&&P.engineForce!==0&&P.useCustomSlidingRotationalSpeed&&(P.deltaRotation=(P.engineForce>0?1:-1)*P.customSlidingRotationalSpeed*G),Math.abs(P.brake)>Math.abs(P.engineForce)&&(P.deltaRotation=0),P.rotation+=P.deltaRotation,P.deltaRotation*=.99}},c.prototype.updateSuspension=function(G){for(var D=this.chassisBody,J=D.mass,j=this.wheelInfos,H=j.length,et=0;et<H;et++){var k=j[et];if(k.isInContact){var C,P=k.suspensionRestLength,W=k.suspensionLength,Q=P-W;C=k.suspensionStiffness*Q*k.clippedInvContactDotSuspension;var it=k.suspensionRelativeVelocity,Z;it<0?Z=k.dampingCompression:Z=k.dampingRelaxation,C-=Z*it,k.suspensionForce=C*J,k.suspensionForce<0&&(k.suspensionForce=0)}else k.suspensionForce=0}},c.prototype.removeFromWorld=function(G){this.constraints,G.remove(this.chassisBody),G.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new s,m=new s;c.prototype.castRay=function(G){var D=f,J=m;this.updateWheelTransformWorld(G);var j=this.chassisBody,H=-1,et=G.suspensionRestLength+G.radius;G.directionWorld.scale(et,D);var k=G.chassisConnectionPointWorld;k.vadd(D,J);var C=G.raycastResult;C.reset();var P=j.collisionResponse;j.collisionResponse=!1,this.world.rayTest(k,J,C),j.collisionResponse=P;var W=C.body;if(G.raycastResult.groundObject=0,W){H=C.distance,G.raycastResult.hitNormalWorld=C.hitNormalWorld,G.isInContact=!0;var Q=C.distance;G.suspensionLength=Q-G.radius;var it=G.suspensionRestLength-G.maxSuspensionTravel,Z=G.suspensionRestLength+G.maxSuspensionTravel;G.suspensionLength<it&&(G.suspensionLength=it),G.suspensionLength>Z&&(G.suspensionLength=Z,G.raycastResult.reset());var ot=G.raycastResult.hitNormalWorld.dot(G.directionWorld),B=new s;j.getVelocityAtWorldPoint(G.raycastResult.hitPointWorld,B);var xt=G.raycastResult.hitNormalWorld.dot(B);if(ot>=-.1)G.suspensionRelativeVelocity=0,G.clippedInvContactDotSuspension=1/.1;else{var ft=-1/ot;G.suspensionRelativeVelocity=xt*ft,G.clippedInvContactDotSuspension=ft}}else G.suspensionLength=G.suspensionRestLength+0*G.maxSuspensionTravel,G.suspensionRelativeVelocity=0,G.directionWorld.scale(-1,G.raycastResult.hitNormalWorld),G.clippedInvContactDotSuspension=1;return H},c.prototype.updateWheelTransformWorld=function(G){G.isInContact=!1;var D=this.chassisBody;D.pointToWorldFrame(G.chassisConnectionPointLocal,G.chassisConnectionPointWorld),D.vectorToWorldFrame(G.directionLocal,G.directionWorld),D.vectorToWorldFrame(G.axleLocal,G.axleWorld)},c.prototype.updateWheelTransform=function(G){var D=u,J=h,j=d,H=this.wheelInfos[G];this.updateWheelTransformWorld(H),H.directionLocal.scale(-1,D),J.copy(H.axleLocal),D.cross(J,j),j.normalize(),J.normalize();var et=H.steering,k=new r;k.setFromAxisAngle(D,et);var C=new r;C.setFromAxisAngle(J,H.rotation);var P=H.worldTransform.quaternion;this.chassisBody.quaternion.mult(k,P),P.mult(C,P),P.normalize();var W=H.worldTransform.position;W.copy(H.directionWorld),W.scale(H.suspensionLength,W),W.vadd(H.chassisConnectionPointWorld,W)};var g=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];c.prototype.getWheelTransformWorld=function(G){return this.wheelInfos[G].worldTransform};var p=new s,v=[],y=[],x=1;c.prototype.updateFriction=function(G){for(var D=p,J=this.wheelInfos,j=J.length,H=this.chassisBody,et=y,k=v,C=0;C<j;C++){var P=J[C],W=P.raycastResult.body;P.sideImpulse=0,P.forwardImpulse=0,et[C]||(et[C]=new s),k[C]||(k[C]=new s)}for(var C=0;C<j;C++){var P=J[C],W=P.raycastResult.body;if(W){var Q=k[C],it=this.getWheelTransformWorld(C);it.vectorToWorldFrame(g[this.indexRightAxis],Q);var Z=P.raycastResult.hitNormalWorld,ot=Q.dot(Z);Z.scale(ot,D),Q.vsub(D,Q),Q.normalize(),Z.cross(Q,et[C]),et[C].normalize(),P.sideImpulse=at(H,P.raycastResult.hitPointWorld,W,P.raycastResult.hitPointWorld,Q),P.sideImpulse*=x}}var B=1,xt=.5;this.sliding=!1;for(var C=0;C<j;C++){var P=J[C],W=P.raycastResult.body,ft=0;if(P.slipInfo=1,W){var Mt=0,rt=P.brake?P.brake:Mt;ft=L(H,W,P.raycastResult.hitPointWorld,et[C],rt),ft+=P.engineForce*G;var dt=rt/ft;P.slipInfo*=dt}if(P.forwardImpulse=0,P.skidInfo=1,W){P.skidInfo=1;var U=P.suspensionForce*G*P.frictionSlip,S=U,nt=U*S;P.forwardImpulse=ft;var tt=P.forwardImpulse*xt,ct=P.sideImpulse*B,ut=tt*tt+ct*ct;if(P.sliding=!1,ut>nt){this.sliding=!0,P.sliding=!0;var dt=U/Math.sqrt(ut);P.skidInfo*=dt}}}if(this.sliding)for(var C=0;C<j;C++){var P=J[C];P.sideImpulse!==0&&P.skidInfo<1&&(P.forwardImpulse*=P.skidInfo,P.sideImpulse*=P.skidInfo)}for(var C=0;C<j;C++){var P=J[C],It=new s;if(It.copy(P.raycastResult.hitPointWorld),P.forwardImpulse!==0){var pt=new s;et[C].scale(P.forwardImpulse,pt),H.applyImpulse(pt,It)}if(P.sideImpulse!==0){var W=P.raycastResult.body,bt=new s;bt.copy(P.raycastResult.hitPointWorld);var Bt=new s;k[C].scale(P.sideImpulse,Bt),H.pointToLocalFrame(It,It),It["xyz"[this.indexUpAxis]]*=P.rollInfluence,H.pointToWorldFrame(It,It),H.applyImpulse(Bt,It),Bt.scale(-1,Bt),W.applyImpulse(Bt,bt)}}};var _=new s,A=new s,b=new s;function L(G,D,J,j,H){var et=0,k=J,C=_,P=A,W=b;G.getVelocityAtWorldPoint(k,C),D.getVelocityAtWorldPoint(k,P),C.vsub(P,W);var Q=j.dot(W),it=F(G,J,j),Z=F(D,J,j),ot=1,B=ot/(it+Z);return et=-Q*B,H<et&&(et=H),et<-H&&(et=-H),et}var N=new s,w=new s,M=new s,T=new s;function F(G,D,J){var j=N,H=w,et=M,k=T;return D.vsub(G.position,j),j.cross(J,H),G.invInertiaWorld.vmult(H,k),k.cross(j,et),G.invMass+J.dot(et)}var I=new s,X=new s,q=new s;function at(G,D,J,j,H,ot){var k=H.norm2();if(k>1.1)return 0;var C=I,P=X,W=q;G.getVelocityAtWorldPoint(D,C),J.getVelocityAtWorldPoint(j,P),C.vsub(P,W);var Q=H.dot(W),it=.2,Z=1/(G.invMass+J.invMass),ot=-it*Q*Z;return ot}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var s=e("./Body"),r=e("../shapes/Sphere"),o=e("../shapes/Box"),l=e("../math/Vec3"),c=e("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var m=new o(new l(5,2,.5));this.chassisBody=new s(1,m)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var m=f.body;m||(m=new s(1,new r(1.2))),this.wheelBodies.push(m),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,p=new l;this.chassisBody.pointToWorldFrame(g,p),m.position.set(p.x,p.y,p.z);var v=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(v);var y=new c(this.chassisBody,m,{pivotA:g,axisA:v,pivotB:l.ZERO,axisB:v,collideConnected:!1});return this.constraints.push(y),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,m){var g=this.wheelAxes[m],p=Math.cos(f),v=Math.sin(f),y=g.x,x=g.y;this.constraints[m].axisA.set(p*y-v*x,v*y+p*x,0)},u.prototype.setMotorSpeed=function(f,m){var g=this.constraints[m];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var m=this.constraints[f];m.disableMotor()};var h=new l;u.prototype.setWheelForce=function(f,m){this.wheelForces[m]=f},u.prototype.applyWheelForce=function(f,m){var g=this.wheelAxes[m],p=this.wheelBodies[m],v=p.torque;g.scale(f,h),p.vectorToWorldFrame(h,h),v.vadd(h,v)},u.prototype.addToWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.add(g[p]);for(var p=0;p<m.length;p++)f.addConstraint(m[p]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,m=0;m<f.length;m++)this.applyWheelForce(f[m],m)},u.prototype.removeFromWorld=function(f){for(var m=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.remove(g[p]);for(var p=0;p<m.length;p++)f.removeConstraint(m[p])};var d=new l;u.prototype.getWheelSpeed=function(f){var m=this.wheelAxes[f],g=this.wheelBodies[f],p=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(m,d),p.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=r,e("../shapes/Shape");var s=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function r(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}r.prototype.add=function(m){this.particles.push(m),this.neighbors.length<this.particles.length&&this.neighbors.push([])},r.prototype.remove=function(m){var g=this.particles.indexOf(m);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new s;r.prototype.getNeighbors=function(m,g){for(var p=this.particles.length,v=m.id,y=this.smoothingRadius*this.smoothingRadius,x=o,_=0;_!==p;_++){var A=this.particles[_];A.position.vsub(m.position,x),v!==A.id&&x.norm2()<y&&g.push(A)}};var l=new s,c=new s,u=new s,h=new s,d=new s,f=new s;r.prototype.update=function(){for(var m=this.particles.length,g=l,p=this.speedOfSound,v=this.eps,y=0;y!==m;y++){var x=this.particles[y],_=this.neighbors[y];_.length=0,this.getNeighbors(x,_),_.push(this.particles[y]);for(var A=_.length,b=0,L=0;L!==A;L++){x.position.vsub(_[L].position,g);var N=g.norm(),w=this.w(N);b+=_[L].mass*w}this.densities[y]=b,this.pressures[y]=p*p*(this.densities[y]-this.density)}for(var M=c,T=u,F=h,I=d,X=f,y=0;y!==m;y++){var q=this.particles[y];M.set(0,0,0),T.set(0,0,0);for(var at,G,_=this.neighbors[y],A=_.length,L=0;L!==A;L++){var D=_[L];q.position.vsub(D.position,I);var J=I.norm();at=-D.mass*(this.pressures[y]/(this.densities[y]*this.densities[y]+v)+this.pressures[L]/(this.densities[L]*this.densities[L]+v)),this.gradw(I,F),F.mult(at,F),M.vadd(F,M),D.velocity.vsub(q.velocity,X),X.mult(1/(1e-4+this.densities[y]*this.densities[L])*this.viscosity*D.mass,X),G=this.nablaw(J),X.mult(G,X),T.vadd(X,T)}T.mult(q.mass,T),M.mult(q.mass,M),q.force.vadd(T,q.force),q.force.vadd(M,q.force)}},r.prototype.w=function(m){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-m*m,3)},r.prototype.gradw=function(m,g){var p=m.norm(),v=this.smoothingRadius;m.mult(945/(32*Math.PI*Math.pow(v,9))*Math.pow(v*v-p*p,2),g)},r.prototype.nablaw=function(m){var g=this.smoothingRadius,p=945/(32*Math.PI*Math.pow(g,9))*(g*g-m*m)*(7*m*m-3*g*g);return p}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var s=e("../math/Vec3");n.exports=r;function r(y,x,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=y,this.bodyB=x,this.localAnchorA=new s,this.localAnchorB=new s,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}r.prototype.setWorldAnchorA=function(y){this.bodyA.pointToLocalFrame(y,this.localAnchorA)},r.prototype.setWorldAnchorB=function(y){this.bodyB.pointToLocalFrame(y,this.localAnchorB)},r.prototype.getWorldAnchorA=function(y){this.bodyA.pointToWorldFrame(this.localAnchorA,y)},r.prototype.getWorldAnchorB=function(y){this.bodyB.pointToWorldFrame(this.localAnchorB,y)};var o=new s,l=new s,c=new s,u=new s,h=new s,d=new s,f=new s,m=new s,g=new s,p=new s,v=new s;r.prototype.applyForce=function(){var y=this.stiffness,x=this.damping,_=this.restLength,A=this.bodyA,b=this.bodyB,L=o,N=l,w=c,M=u,T=v,F=h,I=d,X=f,q=m,at=g,G=p;this.getWorldAnchorA(F),this.getWorldAnchorB(I),F.vsub(A.position,X),I.vsub(b.position,q),I.vsub(F,L);var D=L.norm();N.copy(L),N.normalize(),b.velocity.vsub(A.velocity,w),b.angularVelocity.cross(q,T),w.vadd(T,w),A.angularVelocity.cross(X,T),w.vsub(T,w),N.mult(-y*(D-_)-x*w.dot(N),M),A.force.vsub(M,A.force),b.force.vadd(M,b.force),X.cross(M,at),q.cross(M,G),A.torque.vsub(at,A.torque),b.torque.vadd(G,b.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var s=e("../math/Vec3"),r=e("../math/Transform"),o=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=c;function c(d){d=l.defaults(d,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new r,this.isInContact=!1}var h=new s,u=new s,h=new s;c.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var m=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,h);var g=f.hitNormalWorld.dot(h);if(m>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var p=-1/m;this.suspensionRelativeVelocity=g*p,this.clippedInvContactDotSuspension=p}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=l;var s=e("./Shape"),r=e("../math/Vec3"),o=e("./ConvexPolyhedron");function l(h){s.call(this),this.type=s.types.BOX,this.halfExtents=h,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var h=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,m=r,g=[new m(-h,-d,-f),new m(h,-d,-f),new m(h,d,-f),new m(-h,d,-f),new m(-h,-d,f),new m(h,-d,f),new m(h,d,f),new m(-h,d,f)],p=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new m(0,0,1),new m(0,1,0),new m(1,0,0);var v=new o(g,p);this.convexPolyhedronRepresentation=v,v.material=this.material},l.prototype.calculateLocalInertia=function(h,d){return d=d||new r,l.calculateInertia(this.halfExtents,h,d),d},l.calculateInertia=function(h,d,f){var m=h;f.x=1/12*d*(2*m.y*2*m.y+2*m.z*2*m.z),f.y=1/12*d*(2*m.x*2*m.x+2*m.z*2*m.z),f.z=1/12*d*(2*m.y*2*m.y+2*m.x*2*m.x)},l.prototype.getSideNormals=function(h,d){var f=h,m=this.halfExtents;if(f[0].set(m.x,0,0),f[1].set(0,m.y,0),f[2].set(0,0,m.z),f[3].set(-m.x,0,0),f[4].set(0,-m.y,0),f[5].set(0,0,-m.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var c=new r;new r,l.prototype.forEachWorldCorner=function(h,d,f){for(var m=this.halfExtents,g=[[m.x,m.y,m.z],[-m.x,m.y,m.z],[-m.x,-m.y,m.z],[-m.x,-m.y,-m.z],[m.x,-m.y,-m.z],[m.x,m.y,-m.z],[-m.x,m.y,-m.z],[m.x,-m.y,m.z]],p=0;p<g.length;p++)c.set(g[p][0],g[p][1],g[p][2]),d.vmult(c,c),h.vadd(c,c),f(c.x,c.y,c.z)};var u=[new r,new r,new r,new r,new r,new r,new r,new r];l.prototype.calculateWorldAABB=function(h,d,f,m){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var p=u[0];d.vmult(p,p),h.vadd(p,p),m.copy(p),f.copy(p);for(var v=1;v<8;v++){var p=u[v];d.vmult(p,p),h.vadd(p,p);var y=p.x,x=p.y,_=p.z;y>m.x&&(m.x=y),x>m.y&&(m.y=x),_>m.z&&(m.z=_),y<f.x&&(f.x=y),x<f.y&&(f.y=x),_<f.z&&(f.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=l;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function l(H,et,k){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=H||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=et||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=k?k.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l;var c=new r;l.prototype.computeEdges=function(){var H=this.faces,et=this.vertices;et.length;var k=this.uniqueEdges;k.length=0;for(var C=c,P=0;P!==H.length;P++)for(var W=H[P],Q=W.length,it=0;it!==Q;it++){var Z=(it+1)%Q;et[W[it]].vsub(et[W[Z]],C),C.normalize();for(var ot=!1,B=0;B!==k.length;B++)if(k[B].almostEquals(C)||k[B].almostEquals(C)){ot=!0;break}ot||k.push(C.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var H=0;H<this.faces.length;H++){for(var et=0;et<this.faces[H].length;et++)if(!this.vertices[this.faces[H][et]])throw new Error("Vertex "+this.faces[H][et]+" not found!");var k=this.faceNormals[H]||new r;this.getFaceNormal(H,k),k.negate(k),this.faceNormals[H]=k;var C=this.vertices[this.faces[H][0]];if(k.dot(C)<0){console.error(".faceNormals["+H+"] = Vec3("+k.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var et=0;et<this.faces[H].length;et++)console.warn(".vertices["+this.faces[H][et]+"] = Vec3("+this.vertices[this.faces[H][et]].toString()+")")}}};var u=new r,h=new r;l.computeNormal=function(H,et,k,C){et.vsub(H,h),k.vsub(et,u),u.cross(h,C),C.isZero()||C.normalize()},l.prototype.getFaceNormal=function(H,et){var k=this.faces[H],C=this.vertices[k[0]],P=this.vertices[k[1]],W=this.vertices[k[2]];return l.computeNormal(C,P,W,et)};var d=new r;l.prototype.clipAgainstHull=function(H,et,k,C,P,W,Q,it,Z){for(var ot=d,B=-1,xt=-Number.MAX_VALUE,ft=0;ft<k.faces.length;ft++){ot.copy(k.faceNormals[ft]),P.vmult(ot,ot);var Mt=ot.dot(W);Mt>xt&&(xt=Mt,B=ft)}for(var rt=[],dt=k.faces[B],U=dt.length,S=0;S<U;S++){var nt=k.vertices[dt[S]],tt=new r;tt.copy(nt),P.vmult(tt,tt),C.vadd(tt,tt),rt.push(tt)}B>=0&&this.clipFaceAgainstHull(W,H,et,rt,Q,it,Z)};var f=new r,m=new r,g=new r,p=new r,v=new r,y=new r;l.prototype.findSeparatingAxis=function(H,et,k,C,P,W,Q,it){var Z=f,ot=m,B=g,xt=p,ft=v,Mt=y,rt=Number.MAX_VALUE,dt=this;if(dt.uniqueAxes)for(var S=0;S!==dt.uniqueAxes.length;S++){k.vmult(dt.uniqueAxes[S],Z);var tt=dt.testSepAxis(Z,H,et,k,C,P);if(tt===!1)return!1;tt<rt&&(rt=tt,W.copy(Z))}else for(var U=Q?Q.length:dt.faces.length,S=0;S<U;S++){var nt=Q?Q[S]:S;Z.copy(dt.faceNormals[nt]),k.vmult(Z,Z);var tt=dt.testSepAxis(Z,H,et,k,C,P);if(tt===!1)return!1;tt<rt&&(rt=tt,W.copy(Z))}if(H.uniqueAxes)for(var S=0;S!==H.uniqueAxes.length;S++){P.vmult(H.uniqueAxes[S],ot);var tt=dt.testSepAxis(ot,H,et,k,C,P);if(tt===!1)return!1;tt<rt&&(rt=tt,W.copy(ot))}else for(var ct=it?it.length:H.faces.length,S=0;S<ct;S++){var nt=it?it[S]:S;ot.copy(H.faceNormals[nt]),P.vmult(ot,ot);var tt=dt.testSepAxis(ot,H,et,k,C,P);if(tt===!1)return!1;tt<rt&&(rt=tt,W.copy(ot))}for(var ut=0;ut!==dt.uniqueEdges.length;ut++){k.vmult(dt.uniqueEdges[ut],xt);for(var It=0;It!==H.uniqueEdges.length;It++)if(P.vmult(H.uniqueEdges[It],ft),xt.cross(ft,Mt),!Mt.almostZero()){Mt.normalize();var pt=dt.testSepAxis(Mt,H,et,k,C,P);if(pt===!1)return!1;pt<rt&&(rt=pt,W.copy(Mt))}}return C.vsub(et,B),B.dot(W)>0&&W.negate(W),!0};var x=[],_=[];l.prototype.testSepAxis=function(H,et,k,C,P,W){var Q=this;l.project(Q,H,k,C,x),l.project(et,H,P,W,_);var it=x[0],Z=x[1],ot=_[0],B=_[1],xt=it-B,ft=ot-Z,Mt=xt<ft?xt:ft;return Mt};var A=new r,b=new r;l.prototype.calculateLocalInertia=function(H,et){this.computeLocalAABB(A,b);var k=b.x-A.x,C=b.y-A.y,P=b.z-A.z;et.x=1/12*H*(2*C*2*C+2*P*2*P),et.y=1/12*H*(2*k*2*k+2*P*2*P),et.z=1/12*H*(2*C*2*C+2*k*2*k)},l.prototype.getPlaneConstantOfFace=function(H){var et=this.faces[H],k=this.faceNormals[H],C=this.vertices[et[0]],P=-k.dot(C);return P};var L=new r,N=new r,w=new r,M=new r,T=new r,F=new r,I=new r,X=new r;l.prototype.clipFaceAgainstHull=function(H,et,k,C,P,W,Q){for(var it=L,Z=N,ot=w,B=M,xt=T,ft=F,Mt=I,rt=X,dt=this,U=[],S=C,nt=U,tt=-1,ct=Number.MAX_VALUE,ut=0;ut<dt.faces.length;ut++){it.copy(dt.faceNormals[ut]),k.vmult(it,it);var It=it.dot(H);It<ct&&(ct=It,tt=ut)}if(!(tt<0)){var pt=dt.faces[tt];pt.connectedFaces=[];for(var bt=0;bt<dt.faces.length;bt++)for(var Bt=0;Bt<dt.faces[bt].length;Bt++)pt.indexOf(dt.faces[bt][Bt])!==-1&&bt!==tt&&pt.connectedFaces.indexOf(bt)===-1&&pt.connectedFaces.push(bt);S.length;for(var vt=pt.length,Pt=0;Pt<vt;Pt++){var Yt=dt.vertices[pt[Pt]],Ht=dt.vertices[pt[(Pt+1)%vt]];Yt.vsub(Ht,Z),ot.copy(Z),k.vmult(ot,ot),et.vadd(ot,ot),B.copy(this.faceNormals[tt]),k.vmult(B,B),et.vadd(B,B),ot.cross(B,xt),xt.negate(xt),ft.copy(Yt),k.vmult(ft,ft),et.vadd(ft,ft),-ft.dot(xt);var te;{var Gt=pt.connectedFaces[Pt];Mt.copy(this.faceNormals[Gt]);var ee=this.getPlaneConstantOfFace(Gt);rt.copy(Mt),k.vmult(rt,rt);var te=ee-rt.dot(et)}for(this.clipFaceAgainstPlane(S,nt,rt,te);S.length;)S.shift();for(;nt.length;)S.push(nt.shift())}Mt.copy(this.faceNormals[tt]);var ee=this.getPlaneConstantOfFace(tt);rt.copy(Mt),k.vmult(rt,rt);for(var te=ee-rt.dot(et),bt=0;bt<S.length;bt++){var ne=rt.dot(S[bt])+te;if(ne<=P&&(console.log("clamped: depth="+ne+" to minDist="+(P+"")),ne=P),ne<=W){var ae=S[bt];if(ne<=0){var de={point:ae,normal:rt,depth:ne};Q.push(de)}}}}},l.prototype.clipFaceAgainstPlane=function(H,et,k,C){var P,W,Q=H.length;if(Q<2)return et;var it=H[H.length-1],Z=H[0];P=k.dot(it)+C;for(var ot=0;ot<Q;ot++){if(Z=H[ot],W=k.dot(Z)+C,P<0)if(W<0){var B=new r;B.copy(Z),et.push(B)}else{var B=new r;it.lerp(Z,P/(P-W),B),et.push(B)}else if(W<0){var B=new r;it.lerp(Z,P/(P-W),B),et.push(B),et.push(Z)}it=Z,P=W}return et},l.prototype.computeWorldVertices=function(H,et){for(var k=this.vertices.length;this.worldVertices.length<k;)this.worldVertices.push(new r);for(var C=this.vertices,P=this.worldVertices,W=0;W!==k;W++)et.vmult(C[W],P[W]),H.vadd(P[W],P[W]);this.worldVerticesNeedsUpdate=!1},new r,l.prototype.computeLocalAABB=function(H,et){var k=this.vertices.length,C=this.vertices;H.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),et.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var P=0;P<k;P++){var W=C[P];W.x<H.x?H.x=W.x:W.x>et.x&&(et.x=W.x),W.y<H.y?H.y=W.y:W.y>et.y&&(et.y=W.y),W.z<H.z?H.z=W.z:W.z>et.z&&(et.z=W.z)}},l.prototype.computeWorldFaceNormals=function(H){for(var et=this.faceNormals.length;this.worldFaceNormals.length<et;)this.worldFaceNormals.push(new r);for(var k=this.faceNormals,C=this.worldFaceNormals,P=0;P!==et;P++)H.vmult(k[P],C[P]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var H=0,et=this.vertices,k=0,C=et.length;k!==C;k++){var P=et[k].norm2();P>H&&(H=P)}this.boundingSphereRadius=Math.sqrt(H)};var q=new r;l.prototype.calculateWorldAABB=function(H,et,k,C){for(var P=this.vertices.length,W=this.vertices,Q,it,Z,ot,B,xt,ft=0;ft<P;ft++){q.copy(W[ft]),et.vmult(q,q),H.vadd(q,q);var Mt=q;Mt.x<Q||Q===void 0?Q=Mt.x:(Mt.x>ot||ot===void 0)&&(ot=Mt.x),Mt.y<it||it===void 0?it=Mt.y:(Mt.y>B||B===void 0)&&(B=Mt.y),Mt.z<Z||Z===void 0?Z=Mt.z:(Mt.z>xt||xt===void 0)&&(xt=Mt.z)}k.set(Q,it,Z),C.set(ot,B,xt)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(H){H=H||new r;for(var et=this.vertices.length,k=this.vertices,C=0;C<et;C++)H.vadd(k[C],H);return H.mult(1/et,H),H},l.prototype.transformAllPoints=function(H,et){var k=this.vertices.length,C=this.vertices;if(et){for(var P=0;P<k;P++){var W=C[P];et.vmult(W,W)}for(var P=0;P<this.faceNormals.length;P++){var W=this.faceNormals[P];et.vmult(W,W)}}if(H)for(var P=0;P<k;P++){var W=C[P];W.vadd(H,W)}};var at=new r,G=new r,D=new r;l.prototype.pointIsInside=function(H){var et=this.vertices.length,k=this.vertices,C=this.faces,P=this.faceNormals,W=null,Q=this.faces.length,it=at;this.getAveragePointLocal(it);for(var Z=0;Z<Q;Z++){this.faces[Z].length;var et=P[Z],ot=k[C[Z][0]],B=G;H.vsub(ot,B);var xt=et.dot(B),ft=D;it.vsub(ot,ft);var Mt=et.dot(ft);if(xt<0&&Mt>0||xt>0&&Mt<0)return!1}return W?1:-1},new r;var J=new r,j=new r;l.project=function(H,et,k,C,P){var W=H.vertices.length,Q=J,it=0,Z=0,ot=j,B=H.vertices;ot.setZero(),o.vectorToLocalFrame(k,C,et,Q),o.pointToLocalFrame(k,C,ot,ot);var xt=ot.dot(Q);Z=it=B[0].dot(Q);for(var ft=1;ft<W;ft++){var Mt=B[ft].dot(Q);Mt>it&&(it=Mt),Mt<Z&&(Z=Mt)}if(Z-=xt,it-=xt,Z>it){var rt=Z;Z=it,it=rt}P[0]=it,P[1]=Z}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=l;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function l(c,u,h,d){var f=d,m=[],g=[],p=[],v=[],y=[],x=Math.cos,_=Math.sin;m.push(new r(u*x(0),u*_(0),-h*.5)),v.push(0),m.push(new r(c*x(0),c*_(0),h*.5)),y.push(1);for(var A=0;A<f;A++){var b=2*Math.PI/f*(A+1),L=2*Math.PI/f*(A+.5);A<f-1?(m.push(new r(u*x(b),u*_(b),-h*.5)),v.push(2*A+2),m.push(new r(c*x(b),c*_(b),h*.5)),y.push(2*A+3),p.push([2*A+2,2*A+3,2*A+1,2*A])):p.push([0,1,2*A+1,2*A]),(f%2===1||A<f/2)&&g.push(new r(x(L),_(L),0))}p.push(y),g.push(new r(0,0,1));for(var N=[],A=0;A<v.length;A++)N.push(v[v.length-A-1]);p.push(N),this.type=s.types.CONVEXPOLYHEDRON,o.call(this,m,p,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var s=e("./Shape"),r=e("./ConvexPolyhedron"),o=e("../math/Vec3"),l=e("../utils/Utils");n.exports=c;function c(u,h){h=l.defaults(h,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=h.maxValue,this.minValue=h.minValue,this.elementSize=h.elementSize,h.minValue===null&&this.updateMinValue(),h.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new r,this.pillarOffset=new o,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}c.prototype=new s,c.prototype.update=function(){this._cachedPillars={}},c.prototype.updateMinValue=function(){for(var u=this.data,h=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var m=u[d][f];m<h&&(h=m)}this.minValue=h},c.prototype.updateMaxValue=function(){for(var u=this.data,h=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var m=u[d][f];m>h&&(h=m)}this.maxValue=h},c.prototype.setHeightValueAtIndex=function(u,h,d){var f=this.data;f[u][h]=d,this.clearCachedConvexTrianglePillar(u,h,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,h,!0),this.clearCachedConvexTrianglePillar(u-1,h,!1)),h>0&&(this.clearCachedConvexTrianglePillar(u,h-1,!0),this.clearCachedConvexTrianglePillar(u,h-1,!1)),h>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,h-1,!0)},c.prototype.getRectMinMax=function(u,h,d,f,m){m=m||[];for(var g=this.data,p=this.minValue,v=u;v<=d;v++)for(var y=h;y<=f;y++){var x=g[v][y];x>p&&(p=x)}m[0]=this.minValue,m[1]=p},c.prototype.getIndexOfPosition=function(u,h,d,f){var m=this.elementSize,g=this.data,p=Math.floor(u/m),v=Math.floor(h/m);return d[0]=p,d[1]=v,f&&(p<0&&(p=0),v<0&&(v=0),p>=g.length-1&&(p=g.length-1),v>=g[0].length-1&&(v=g[0].length-1)),!(p<0||v<0||p>=g.length-1||v>=g[0].length-1)},c.prototype.getHeightAt=function(u,h,d){var f=[];this.getIndexOfPosition(u,h,f,d);var m=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,m),(m[0]+m[1])/2},c.prototype.getCacheConvexTrianglePillarKey=function(u,h,d){return u+"_"+h+"_"+(d?1:0)},c.prototype.getCachedConvexTrianglePillar=function(u,h,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,h,d)]},c.prototype.setCachedConvexTrianglePillar=function(u,h,d,f,m){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,h,d)]={convex:f,offset:m}},c.prototype.clearCachedConvexTrianglePillar=function(u,h,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,h,d)]},c.prototype.getConvexTrianglePillar=function(u,h,d){var f=this.pillarConvex,m=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,h,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new r,m=new o,this.pillarConvex=f,this.pillarOffset=m}var g=this.data,p=this.elementSize,v=f.faces;f.vertices.length=6;for(var y=0;y<6;y++)f.vertices[y]||(f.vertices[y]=new o);v.length=5;for(var y=0;y<5;y++)v[y]||(v[y]=[]);var x=f.vertices,_=(Math.min(g[u][h],g[u+1][h],g[u][h+1],g[u+1][h+1])-this.minValue)/2+this.minValue;d?(m.set((u+.75)*p,(h+.75)*p,_),x[0].set(.25*p,.25*p,g[u+1][h+1]-_),x[1].set(-.75*p,.25*p,g[u][h+1]-_),x[2].set(.25*p,-.75*p,g[u+1][h]-_),x[3].set(.25*p,.25*p,-_-1),x[4].set(-.75*p,.25*p,-_-1),x[5].set(.25*p,-.75*p,-_-1),v[0][0]=0,v[0][1]=1,v[0][2]=2,v[1][0]=5,v[1][1]=4,v[1][2]=3,v[2][0]=2,v[2][1]=5,v[2][2]=3,v[2][3]=0,v[3][0]=3,v[3][1]=4,v[3][2]=1,v[3][3]=0,v[4][0]=1,v[4][1]=4,v[4][2]=5,v[4][3]=2):(m.set((u+.25)*p,(h+.25)*p,_),x[0].set(-.25*p,-.25*p,g[u][h]-_),x[1].set(.75*p,-.25*p,g[u+1][h]-_),x[2].set(-.25*p,.75*p,g[u][h+1]-_),x[3].set(-.25*p,-.25*p,-_-1),x[4].set(.75*p,-.25*p,-_-1),x[5].set(-.25*p,.75*p,-_-1),v[0][0]=0,v[0][1]=1,v[0][2]=2,v[1][0]=5,v[1][1]=4,v[1][2]=3,v[2][0]=0,v[2][1]=2,v[2][2]=5,v[2][3]=3,v[3][0]=1,v[3][1]=0,v[3][2]=3,v[3][3]=4,v[4][0]=4,v[4][1]=5,v[4][2]=2,v[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,h,d,f,m)},c.prototype.calculateLocalInertia=function(u,h){return h=h||new o,h.set(0,0,0),h},c.prototype.volume=function(){return Number.MAX_VALUE},c.prototype.calculateWorldAABB=function(u,h,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},c.prototype.updateBoundingSphereRadius=function(){var u=this.data,h=this.elementSize;this.boundingSphereRadius=new o(u.length*h,u[0].length*h,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=o;var s=e("./Shape"),r=e("../math/Vec3");function o(){s.call(this),this.type=s.types.PARTICLE}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,c){return c=c||new r,c.set(0,0,0),c},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,c,u,h){u.copy(l),h.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=o;var s=e("./Shape"),r=e("../math/Vec3");function o(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new r,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(c){var u=this.worldNormal;u.set(0,0,1),c.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(c,u){return u=u||new r,u},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new r;o.prototype.calculateWorldAABB=function(c,u,h,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;h.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=c.x),l.y===1&&(d.y=c.y),l.z===1&&(d.z=c.z),l.x===-1&&(h.x=c.x),l.y===-1&&(h.y=c.y),l.z===-1&&(h.z=c.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=s;var s=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(r,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=o;var s=e("./Shape"),r=e("../math/Vec3");function o(l){if(s.call(this),this.radius=l!==void 0?Number(l):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new s,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,c){c=c||new r;var u=2*l*this.radius*this.radius/5;return c.x=u,c.y=u,c.z=u,c},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,c,u,h){for(var d=this.radius,f=["x","y","z"],m=0;m<f.length;m++){var g=f[m];u[g]=l[g]-d,h[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=u;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),l=e("../collision/AABB"),c=e("../utils/Octree");function u(N,w){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(N),this.indices=new Int16Array(w),this.normals=new Float32Array(w.length),this.aabb=new l,this.edges=null,this.scale=new r(1,1,1),this.tree=new c,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new s,u.prototype.constructor=u;var h=new r;u.prototype.updateTree=function(){var N=this.tree;N.reset(),N.aabb.copy(this.aabb);var w=this.scale;N.aabb.lowerBound.x*=1/w.x,N.aabb.lowerBound.y*=1/w.y,N.aabb.lowerBound.z*=1/w.z,N.aabb.upperBound.x*=1/w.x,N.aabb.upperBound.y*=1/w.y,N.aabb.upperBound.z*=1/w.z;for(var M=new l,T=new r,F=new r,I=new r,X=[T,F,I],q=0;q<this.indices.length/3;q++){var at=q*3;this._getUnscaledVertex(this.indices[at],T),this._getUnscaledVertex(this.indices[at+1],F),this._getUnscaledVertex(this.indices[at+2],I),M.setFromPoints(X),N.insert(M,q)}N.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(N,w){d.copy(N);var M=this.scale,T=M.x,F=M.y,I=M.z,X=d.lowerBound,q=d.upperBound;return X.x/=T,X.y/=F,X.z/=I,q.x/=T,q.y/=F,q.z/=I,this.tree.aabbQuery(d,w)},u.prototype.setScale=function(N){var w=this.scale.x===this.scale.y===this.scale.z,M=N.x===N.y===N.z;w&&M||this.updateNormals(),this.scale.copy(N),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var N=h,w=this.normals,M=0;M<this.indices.length/3;M++){var T=M*3,F=this.indices[T],I=this.indices[T+1],X=this.indices[T+2];this.getVertex(F,v),this.getVertex(I,y),this.getVertex(X,x),u.computeNormal(y,v,x,N),w[T]=N.x,w[T+1]=N.y,w[T+2]=N.z}},u.prototype.updateEdges=function(){for(var N={},w=function(at,G){var D=F<I?F+"_"+I:I+"_"+F;N[D]=!0},M=0;M<this.indices.length/3;M++){var T=M*3,F=this.indices[T],I=this.indices[T+1];this.indices[T+2],w(),w(),w()}var X=Object.keys(N);this.edges=new Int16Array(X.length*2);for(var M=0;M<X.length;M++){var q=X[M].split("_");this.edges[2*M]=parseInt(q[0],10),this.edges[2*M+1]=parseInt(q[1],10)}},u.prototype.getEdgeVertex=function(N,w,M){var T=this.edges[N*2+(w?1:0)];this.getVertex(T,M)};var f=new r,m=new r;u.prototype.getEdgeVector=function(N,w){var M=f,T=m;this.getEdgeVertex(N,0,M),this.getEdgeVertex(N,1,T),T.vsub(M,w)};var g=new r,p=new r;u.computeNormal=function(N,w,M,T){w.vsub(N,p),M.vsub(w,g),g.cross(p,T),T.isZero()||T.normalize()};var v=new r,y=new r,x=new r;u.prototype.getVertex=function(N,w){var M=this.scale;return this._getUnscaledVertex(N,w),w.x*=M.x,w.y*=M.y,w.z*=M.z,w},u.prototype._getUnscaledVertex=function(N,w){var M=N*3,T=this.vertices;return w.set(T[M],T[M+1],T[M+2])},u.prototype.getWorldVertex=function(N,w,M,T){return this.getVertex(N,T),o.pointToWorldFrame(w,M,T,T),T},u.prototype.getTriangleVertices=function(N,w,M,T){var F=N*3;this.getVertex(this.indices[F],w),this.getVertex(this.indices[F+1],M),this.getVertex(this.indices[F+2],T)},u.prototype.getNormal=function(N,w){var M=N*3;return w.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var _=new l;u.prototype.calculateLocalInertia=function(N,w){this.computeLocalAABB(_);var M=_.upperBound.x-_.lowerBound.x,T=_.upperBound.y-_.lowerBound.y,F=_.upperBound.z-_.lowerBound.z;return w.set(1/12*N*(2*T*2*T+2*F*2*F),1/12*N*(2*M*2*M+2*F*2*F),1/12*N*(2*T*2*T+2*M*2*M))};var A=new r;u.prototype.computeLocalAABB=function(N){var w=N.lowerBound,M=N.upperBound,T=this.vertices.length;this.vertices;var F=A;this.getVertex(0,F),w.copy(F),M.copy(F);for(var I=0;I!==T;I++)this.getVertex(I,F),F.x<w.x?w.x=F.x:F.x>M.x&&(M.x=F.x),F.y<w.y?w.y=F.y:F.y>M.y&&(M.y=F.y),F.z<w.z?w.z=F.z:F.z>M.z&&(M.z=F.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var N=0,w=this.vertices,M=new r,T=0,F=w.length/3;T!==F;T++){this.getVertex(T,M);var I=M.norm2();I>N&&(N=I)}this.boundingSphereRadius=Math.sqrt(N)},new r;var b=new o,L=new l;u.prototype.calculateWorldAABB=function(N,w,M,T){var F=b,I=L;F.position=N,F.quaternion=w,this.aabb.toWorldFrame(F,I),M.copy(I.lowerBound),T.copy(I.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(N,w,M,T,F){N=N||1,w=w||.5,M=M||8,T=T||6,F=F||Math.PI*2;for(var I=[],X=[],q=0;q<=M;q++)for(var at=0;at<=T;at++){var G=at/T*F,D=q/M*Math.PI*2,J=(N+w*Math.cos(D))*Math.cos(G),j=(N+w*Math.cos(D))*Math.sin(G),H=w*Math.sin(D);I.push(J,j,H)}for(var q=1;q<=M;q++)for(var at=1;at<=T;at++){var et=(T+1)*q+at-1,k=(T+1)*(q-1)+at-1,C=(T+1)*(q-1)+at,P=(T+1)*q+at;X.push(et,k,P),X.push(k,C,P)}return new u(I,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=r,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver");function r(){s.call(this),this.iterations=10,this.tolerance=1e-7}r.prototype=new s;var o=[],l=[],c=[];r.prototype.solve=function(u,h){var d=0,f=this.iterations,m=this.tolerance*this.tolerance,g=this.equations,p=g.length,v=h.bodies,y=v.length,x=u,_,A,b,L,N,w;if(p!==0)for(var M=0;M!==y;M++)v[M].updateSolveMassProperties();var T=l,F=c,I=o;T.length=p,F.length=p,I.length=p;for(var M=0;M!==p;M++){var X=g[M];I[M]=0,F[M]=X.computeB(x),T[M]=1/X.computeC()}if(p!==0){for(var M=0;M!==y;M++){var q=v[M],at=q.vlambda,G=q.wlambda;at.set(0,0,0),G&&G.set(0,0,0)}for(d=0;d!==f;d++){L=0;for(var D=0;D!==p;D++){var X=g[D];_=F[D],A=T[D],w=I[D],N=X.computeGWlambda(),b=A*(_-N-X.eps*w),w+b<X.minForce?b=X.minForce-w:w+b>X.maxForce&&(b=X.maxForce-w),I[D]+=b,L+=b>0?b:-b,X.addToWlambda(b)}if(L*L<m)break}for(var M=0;M!==y;M++){var q=v[M],J=q.velocity,j=q.angularVelocity;J.vadd(q.vlambda,J),j&&j.vadd(q.wlambda,j)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(r,o){return 0},s.prototype.addEquation=function(r){r.enabled&&this.equations.push(r)},s.prototype.removeEquation=function(r){var o=this.equations,l=o.indexOf(r);l!==-1&&o.splice(l,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver"),r=e("../objects/Body");function o(v){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=v,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new s;var l=[],c=[],u={bodies:[]},h=r.STATIC;function d(v){for(var y=v.length,x=0;x!==y;x++){var _=v[x];if(!_.visited&&!(_.body.type&h))return _}return!1}var f=[];function m(v,y,x,_){for(f.push(v),v.visited=!0,y(v,x,_);f.length;)for(var A=f.pop(),b;b=d(A.children);)b.visited=!0,y(b,x,_),f.push(b)}function g(v,y,x){y.push(v.body);for(var _=v.eqs.length,A=0;A!==_;A++){var b=v.eqs[A];x.indexOf(b)===-1&&x.push(b)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(v,y){for(var x=l,_=this.nodePool,A=y.bodies,b=this.equations,L=b.length,N=A.length,w=this.subsolver;_.length<N;)_.push(this.createNode());x.length=N;for(var M=0;M<N;M++)x[M]=_[M];for(var M=0;M!==N;M++){var T=x[M];T.body=A[M],T.children.length=0,T.eqs.length=0,T.visited=!1}for(var F=0;F!==L;F++){var I=b[F],M=A.indexOf(I.bi),X=A.indexOf(I.bj),q=x[M],at=x[X];q.children.push(at),q.eqs.push(I),at.children.push(q),at.eqs.push(I)}var G,D=0,J=c;w.tolerance=this.tolerance,w.iterations=this.iterations;for(var j=u;G=d(x);){J.length=0,j.bodies.length=0,m(G,g,j.bodies,J);var H=J.length;J=J.sort(p);for(var M=0;M!==H;M++)w.addEquation(J[M]);w.solve(v,j),w.removeAllEquations(),D++}return D};function p(v,y){return y.id-v.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(r,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[r]===void 0&&(l[r]=[]),l[r].indexOf(o)===-1&&l[r].push(o),this},hasEventListener:function(r,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[r]!==void 0&&l[r].indexOf(o)!==-1},removeEventListener:function(r,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[r]===void 0)return this;var c=l[r].indexOf(o);return c!==-1&&l[r].splice(c,1),this},dispatchEvent:function(r){if(this._listeners===void 0)return this;var o=this._listeners,l=o[r.type];if(l!==void 0){r.target=this;for(var c=0,u=l.length;c<u;c++)l[c].call(this,r)}return this}}},{}],50:[function(e,n,i){var s=e("../collision/AABB"),r=e("../math/Vec3");n.exports=l;function o(h){h=h||{},this.root=h.root||null,this.aabb=h.aabb?h.aabb.clone():new s,this.data=[],this.children=[]}function l(h,d){d=d||{},d.root=null,d.aabb=h,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(h,d){this.children.length=this.data.length=0},o.prototype.insert=function(h,d,f){var m=this.data;if(f=f||0,!this.aabb.contains(h))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var p=!1;g.length||(this.subdivide(),p=!0);for(var v=0;v!==8;v++)if(g[v].insert(h,d,f+1))return!0;p&&(g.length=0)}return m.push(d),!0};var c=new r;o.prototype.subdivide=function(){var h=this.aabb,d=h.lowerBound,f=h.upperBound,m=this.children;m.push(new o({aabb:new s({lowerBound:new r(0,0,0)})}),new o({aabb:new s({lowerBound:new r(1,0,0)})}),new o({aabb:new s({lowerBound:new r(1,1,0)})}),new o({aabb:new s({lowerBound:new r(1,1,1)})}),new o({aabb:new s({lowerBound:new r(0,1,1)})}),new o({aabb:new s({lowerBound:new r(0,0,1)})}),new o({aabb:new s({lowerBound:new r(1,0,1)})}),new o({aabb:new s({lowerBound:new r(0,1,0)})})),f.vsub(d,c),c.scale(.5,c);for(var g=this.root||this,p=0;p!==8;p++){var v=m[p];v.root=g;var y=v.aabb.lowerBound;y.x*=c.x,y.y*=c.y,y.z*=c.z,y.vadd(d,y),y.vadd(c,v.aabb.upperBound)}},o.prototype.aabbQuery=function(h,d){this.data,this.children;for(var f=[this];f.length;){var m=f.pop();m.aabb.overlaps(h)&&Array.prototype.push.apply(d,m.data),Array.prototype.push.apply(f,m.children)}return d};var u=new s;o.prototype.rayQuery=function(h,d,f){return h.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},o.prototype.removeEmptyNodes=function(){for(var h=[this];h.length;){for(var d=h.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(h,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var r=arguments.length,o=0;o!==r;o++)this.objects.push(arguments[o])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(r,o){if(r>o){var l=o;o=r,r=l}return this.data[r+"-"+o]},s.prototype.set=function(r,o,l){if(r>o){var c=o;o=r,r=c}var u=r+"-"+o;this.get(r,o)||this.data.keys.push(u),this.data[u]=l},s.prototype.reset=function(){for(var r=this.data,o=r.keys;o.length>0;){var l=o.pop();delete r[l]}}},{}],53:[function(e,n,i){function s(){}n.exports=s,s.defaults=function(r,o){r=r||{};for(var l in o)l in r||(r[l]=o[l]);return r}},{}],54:[function(e,n,i){n.exports=o;var s=e("../math/Vec3"),r=e("./Pool");function o(){r.call(this),this.type=s}o.prototype=new r,o.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=m;var s=e("../collision/AABB"),r=e("../shapes/Shape"),o=e("../collision/Ray"),l=e("../math/Vec3"),c=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var h=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function m(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new h,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}m.prototype.createContactEquation=function(lt,ht,gt,yt,$t,Nt){var At;this.contactPointPool.length?(At=this.contactPointPool.pop(),At.bi=lt,At.bj=ht):At=new d(lt,ht),At.enabled=lt.collisionResponse&&ht.collisionResponse&&gt.collisionResponse&&yt.collisionResponse;var Lt=this.currentContactMaterial;At.restitution=Lt.restitution,At.setSpookParams(Lt.contactEquationStiffness,Lt.contactEquationRelaxation,this.world.dt);var st=gt.material||lt.material,Tt=yt.material||ht.material;return st&&Tt&&st.restitution>=0&&Tt.restitution>=0&&(At.restitution=st.restitution*Tt.restitution),At.si=$t||gt,At.sj=Nt||yt,At},m.prototype.createFrictionEquationsFromContact=function(lt,ht){var gt=lt.bi,yt=lt.bj,$t=lt.si,Nt=lt.sj,At=this.world,Lt=this.currentContactMaterial,st=Lt.friction,Tt=$t.material||gt.material,Dt=Nt.material||yt.material;if(Tt&&Dt&&Tt.friction>=0&&Dt.friction>=0&&(st=Tt.friction*Dt.friction),st>0){var zt=st*At.gravity.length(),Ct=gt.invMass+yt.invMass;Ct>0&&(Ct=1/Ct);var E=this.frictionEquationPool,O=E.length?E.pop():new f(gt,yt,zt*Ct),K=E.length?E.pop():new f(gt,yt,zt*Ct);return O.bi=K.bi=gt,O.bj=K.bj=yt,O.minForce=K.minForce=-zt*Ct,O.maxForce=K.maxForce=zt*Ct,O.ri.copy(lt.ri),O.rj.copy(lt.rj),K.ri.copy(lt.ri),K.rj.copy(lt.rj),lt.ni.tangents(O.t,K.t),O.setSpookParams(Lt.frictionEquationStiffness,Lt.frictionEquationRelaxation,At.dt),K.setSpookParams(Lt.frictionEquationStiffness,Lt.frictionEquationRelaxation,At.dt),O.enabled=K.enabled=lt.enabled,ht.push(O,K),!0}return!1};var g=new l,p=new l,v=new l;m.prototype.createFrictionFromAverage=function(lt){var ht=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ht,this.frictionResult)||lt===1)){var gt=this.frictionResult[this.frictionResult.length-2],yt=this.frictionResult[this.frictionResult.length-1];g.setZero(),p.setZero(),v.setZero();var $t=ht.bi;ht.bj;for(var Nt=0;Nt!==lt;Nt++)ht=this.result[this.result.length-1-Nt],ht.bodyA!==$t?(g.vadd(ht.ni,g),p.vadd(ht.ri,p),v.vadd(ht.rj,v)):(g.vsub(ht.ni,g),p.vadd(ht.rj,p),v.vadd(ht.ri,v));var At=1/lt;p.scale(At,gt.ri),v.scale(At,gt.rj),yt.ri.copy(gt.ri),yt.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,yt.t)}};var y=new l,x=new l,_=new u,A=new u;m.prototype.getContacts=function(lt,ht,gt,yt,$t,Nt,At){this.contactPointPool=$t,this.frictionEquationPool=At,this.result=yt,this.frictionResult=Nt;for(var Lt=_,st=A,Tt=y,Dt=x,zt=0,Ct=lt.length;zt!==Ct;zt++){var E=lt[zt],O=ht[zt],K=null;E.material&&O.material&&(K=gt.getContactMaterial(E.material,O.material)||null);for(var $=0;$<E.shapes.length;$++){E.quaternion.mult(E.shapeOrientations[$],Lt),E.quaternion.vmult(E.shapeOffsets[$],Tt),Tt.vadd(E.position,Tt);for(var V=E.shapes[$],mt=0;mt<O.shapes.length;mt++){O.quaternion.mult(O.shapeOrientations[mt],st),O.quaternion.vmult(O.shapeOffsets[mt],Dt),Dt.vadd(O.position,Dt);var _t=O.shapes[mt];if(!(Tt.distanceTo(Dt)>V.boundingSphereRadius+_t.boundingSphereRadius)){var Ot=null;V.material&&_t.material&&(Ot=gt.getContactMaterial(V.material,_t.material)||null),this.currentContactMaterial=Ot||K||gt.defaultContactMaterial;var Rt=this[V.type|_t.type];Rt&&(V.type<_t.type?Rt.call(this,V,_t,Tt,Dt,Lt,st,E,O,V,_t):Rt.call(this,_t,V,Dt,Tt,st,Lt,O,E,V,_t))}}}}},m.prototype[r.types.BOX|r.types.BOX]=m.prototype.boxBox=function(lt,ht,gt,yt,$t,Nt,At,Lt){lt.convexPolyhedronRepresentation.material=lt.material,ht.convexPolyhedronRepresentation.material=ht.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ht.convexPolyhedronRepresentation,gt,yt,$t,Nt,At,Lt,lt,ht)},m.prototype[r.types.BOX|r.types.CONVEXPOLYHEDRON]=m.prototype.boxConvex=function(lt,ht,gt,yt,$t,Nt,At,Lt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ht,gt,yt,$t,Nt,At,Lt,lt,ht)},m.prototype[r.types.BOX|r.types.PARTICLE]=m.prototype.boxParticle=function(lt,ht,gt,yt,$t,Nt,At,Lt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,ht,gt,yt,$t,Nt,At,Lt,lt,ht)},m.prototype[r.types.SPHERE]=m.prototype.sphereSphere=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=this.createContactEquation(At,Lt,lt,ht);yt.vsub(gt,st.ni),st.ni.normalize(),st.ri.copy(st.ni),st.rj.copy(st.ni),st.ri.mult(lt.radius,st.ri),st.rj.mult(-ht.radius,st.rj),st.ri.vadd(gt,st.ri),st.ri.vsub(At.position,st.ri),st.rj.vadd(yt,st.rj),st.rj.vsub(Lt.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)};var b=new l,L=new l,N=new l;m.prototype[r.types.PLANE|r.types.TRIMESH]=m.prototype.planeTrimesh=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=new l,Tt=b;Tt.set(0,0,1),$t.vmult(Tt,Tt);for(var Dt=0;Dt<ht.vertices.length/3;Dt++){ht.getVertex(Dt,st);var zt=new l;zt.copy(st),c.pointToWorldFrame(yt,Nt,zt,st);var Ct=L;st.vsub(gt,Ct);var E=Tt.dot(Ct);if(E<=0){var O=this.createContactEquation(At,Lt,lt,ht);O.ni.copy(Tt);var K=N;Tt.scale(Ct.dot(Tt),K),st.vsub(K,K),O.ri.copy(K),O.ri.vsub(At.position,O.ri),O.rj.copy(st),O.rj.vsub(Lt.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}};var w=new l,M=new l;new l;var T=new l,F=new l,I=new l,X=new l,q=new l,at=new l,G=new l,D=new l,J=new l,j=new l,H=new l,et=new s,k=[];m.prototype[r.types.SPHERE|r.types.TRIMESH]=m.prototype.sphereTrimesh=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=I,Tt=X,Dt=q,zt=at,Ct=G,E=D,O=et,K=F,$=M,V=k;c.pointToLocalFrame(yt,Nt,gt,Ct);var mt=lt.radius;O.lowerBound.set(Ct.x-mt,Ct.y-mt,Ct.z-mt),O.upperBound.set(Ct.x+mt,Ct.y+mt,Ct.z+mt),ht.getTrianglesInAABB(O,V);for(var _t=T,Ot=lt.radius*lt.radius,Rt=0;Rt<V.length;Rt++)for(var Ut=0;Ut<3;Ut++)if(ht.getVertex(ht.indices[V[Rt]*3+Ut],_t),_t.vsub(Ct,$),$.norm2()<=Ot){K.copy(_t),c.pointToWorldFrame(yt,Nt,K,_t),_t.vsub(gt,$);var wt=this.createContactEquation(At,Lt,lt,ht);wt.ni.copy($),wt.ni.normalize(),wt.ri.copy(wt.ni),wt.ri.scale(lt.radius,wt.ri),wt.ri.vadd(gt,wt.ri),wt.ri.vsub(At.position,wt.ri),wt.rj.copy(_t),wt.rj.vsub(Lt.position,wt.rj),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult)}for(var Rt=0;Rt<V.length;Rt++)for(var Ut=0;Ut<3;Ut++){ht.getVertex(ht.indices[V[Rt]*3+Ut],st),ht.getVertex(ht.indices[V[Rt]*3+(Ut+1)%3],Tt),Tt.vsub(st,Dt),Ct.vsub(Tt,E);var Kt=E.dot(Dt);Ct.vsub(st,E);var he=E.dot(Dt);if(he>0&&Kt<0){Ct.vsub(st,E),zt.copy(Dt),zt.normalize(),he=E.dot(zt),zt.scale(he,E),E.vadd(st,E);var Me=E.distanceTo(Ct);if(Me<lt.radius){var wt=this.createContactEquation(At,Lt,lt,ht);E.vsub(Ct,wt.ni),wt.ni.normalize(),wt.ni.scale(lt.radius,wt.ri),c.pointToWorldFrame(yt,Nt,E,E),E.vsub(Lt.position,wt.rj),c.vectorToWorldFrame(Nt,wt.ni,wt.ni),c.vectorToWorldFrame(Nt,wt.ri,wt.ri),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult)}}}for(var we=J,be=j,Zt=H,Jt=w,Rt=0,Se=V.length;Rt!==Se;Rt++){ht.getTriangleVertices(V[Rt],we,be,Zt),ht.getNormal(V[Rt],Jt),Ct.vsub(we,E);var Me=E.dot(Jt);if(Jt.scale(Me,E),Ct.vsub(E,E),Me=E.distanceTo(Ct),o.pointInTriangle(E,we,be,Zt)&&Me<lt.radius){var wt=this.createContactEquation(At,Lt,lt,ht);E.vsub(Ct,wt.ni),wt.ni.normalize(),wt.ni.scale(lt.radius,wt.ri),c.pointToWorldFrame(yt,Nt,E,E),E.vsub(Lt.position,wt.rj),c.vectorToWorldFrame(Nt,wt.ni,wt.ni),c.vectorToWorldFrame(Nt,wt.ri,wt.ri),this.result.push(wt),this.createFrictionEquationsFromContact(wt,this.frictionResult)}}V.length=0};var C=new l,P=new l;m.prototype[r.types.SPHERE|r.types.PLANE]=m.prototype.spherePlane=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=this.createContactEquation(At,Lt,lt,ht);if(st.ni.set(0,0,1),Nt.vmult(st.ni,st.ni),st.ni.negate(st.ni),st.ni.normalize(),st.ni.mult(lt.radius,st.ri),gt.vsub(yt,C),st.ni.mult(st.ni.dot(C),P),C.vsub(P,st.rj),-C.dot(st.ni)<=lt.radius){var Tt=st.ri,Dt=st.rj;Tt.vadd(gt,Tt),Tt.vsub(At.position,Tt),Dt.vadd(yt,Dt),Dt.vsub(Lt.position,Dt),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}};var W=new l,Q=new l,it=new l;function Z(lt,ht,gt){for(var yt=null,$t=lt.length,Nt=0;Nt!==$t;Nt++){var At=lt[Nt],Lt=W;lt[(Nt+1)%$t].vsub(At,Lt);var st=Q;Lt.cross(ht,st);var Tt=it;gt.vsub(At,Tt);var Dt=st.dot(Tt);if(yt===null||Dt>0&&yt===!0||Dt<=0&&yt===!1){yt===null&&(yt=Dt>0);continue}else return!1}return!0}var ot=new l,B=new l,xt=new l,ft=new l,Mt=[new l,new l,new l,new l,new l,new l],rt=new l,dt=new l,U=new l,S=new l;m.prototype[r.types.SPHERE|r.types.BOX]=m.prototype.sphereBox=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=this.v3pool,Tt=Mt;gt.vsub(yt,ot),ht.getSideNormals(Tt,Nt);for(var Dt=lt.radius,zt=!1,Ct=dt,E=U,O=S,K=null,$=0,V=0,mt=0,_t=null,Ot=0,Rt=Tt.length;Ot!==Rt&&zt===!1;Ot++){var Ut=B;Ut.copy(Tt[Ot]);var wt=Ut.norm();Ut.normalize();var Kt=ot.dot(Ut);if(Kt<wt+Dt&&Kt>0){var he=xt,Me=ft;he.copy(Tt[(Ot+1)%3]),Me.copy(Tt[(Ot+2)%3]);var we=he.norm(),be=Me.norm();he.normalize(),Me.normalize();var Zt=ot.dot(he),Jt=ot.dot(Me);if(Zt<we&&Zt>-we&&Jt<be&&Jt>-be){var ve=Math.abs(Kt-wt-Dt);(_t===null||ve<_t)&&(_t=ve,V=Zt,mt=Jt,K=wt,Ct.copy(Ut),E.copy(he),O.copy(Me),$++)}}}if($){zt=!0;var jt=this.createContactEquation(At,Lt,lt,ht);Ct.mult(-Dt,jt.ri),jt.ni.copy(Ct),jt.ni.negate(jt.ni),Ct.mult(K,Ct),E.mult(V,E),Ct.vadd(E,Ct),O.mult(mt,O),Ct.vadd(O,jt.rj),jt.ri.vadd(gt,jt.ri),jt.ri.vsub(At.position,jt.ri),jt.rj.vadd(yt,jt.rj),jt.rj.vsub(Lt.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}for(var Se=st.get(),ue=rt,Ie=0;Ie!==2&&!zt;Ie++)for(var Fe=0;Fe!==2&&!zt;Fe++)for(var Pe=0;Pe!==2&&!zt;Pe++)if(Se.set(0,0,0),Ie?Se.vadd(Tt[0],Se):Se.vsub(Tt[0],Se),Fe?Se.vadd(Tt[1],Se):Se.vsub(Tt[1],Se),Pe?Se.vadd(Tt[2],Se):Se.vsub(Tt[2],Se),yt.vadd(Se,ue),ue.vsub(gt,ue),ue.norm2()<Dt*Dt){zt=!0;var jt=this.createContactEquation(At,Lt,lt,ht);jt.ri.copy(ue),jt.ri.normalize(),jt.ni.copy(jt.ri),jt.ri.mult(Dt,jt.ri),jt.rj.copy(Se),jt.ri.vadd(gt,jt.ri),jt.ri.vsub(At.position,jt.ri),jt.rj.vadd(yt,jt.rj),jt.rj.vsub(Lt.position,jt.rj),this.result.push(jt),this.createFrictionEquationsFromContact(jt,this.frictionResult)}st.release(Se),Se=null;for(var Ye=st.get(),Ae=st.get(),jt=st.get(),Ge=st.get(),ve=st.get(),mn=Tt.length,Ie=0;Ie!==mn&&!zt;Ie++)for(var Fe=0;Fe!==mn&&!zt;Fe++)if(Ie%3!==Fe%3){Tt[Fe].cross(Tt[Ie],Ye),Ye.normalize(),Tt[Ie].vadd(Tt[Fe],Ae),jt.copy(gt),jt.vsub(Ae,jt),jt.vsub(yt,jt);var Bn=jt.dot(Ye);Ye.mult(Bn,Ge);for(var Pe=0;Pe===Ie%3||Pe===Fe%3;)Pe++;ve.copy(gt),ve.vsub(Ge,ve),ve.vsub(Ae,ve),ve.vsub(yt,ve);var Hs=Math.abs(Bn),_h=ve.norm();if(Hs<Tt[Pe].norm()&&_h<Dt){zt=!0;var Re=this.createContactEquation(At,Lt,lt,ht);Ae.vadd(Ge,Re.rj),Re.rj.copy(Re.rj),ve.negate(Re.ni),Re.ni.normalize(),Re.ri.copy(Re.rj),Re.ri.vadd(yt,Re.ri),Re.ri.vsub(gt,Re.ri),Re.ri.normalize(),Re.ri.mult(Dt,Re.ri),Re.ri.vadd(gt,Re.ri),Re.ri.vsub(At.position,Re.ri),Re.rj.vadd(yt,Re.rj),Re.rj.vsub(Lt.position,Re.rj),this.result.push(Re),this.createFrictionEquationsFromContact(Re,this.frictionResult)}}st.release(Ye,Ae,jt,Ge,ve)};var nt=new l,tt=new l,ct=new l,ut=new l,It=new l,pt=new l,bt=new l,Bt=new l,vt=new l,Pt=new l;m.prototype[r.types.SPHERE|r.types.CONVEXPOLYHEDRON]=m.prototype.sphereConvex=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=this.v3pool;gt.vsub(yt,nt);for(var Tt=ht.faceNormals,Dt=ht.faces,zt=ht.vertices,Ct=lt.radius,E=0;E!==zt.length;E++){var O=zt[E],K=It;Nt.vmult(O,K),yt.vadd(K,K);var $=ut;if(K.vsub(gt,$),$.norm2()<Ct*Ct){mt=!0;var V=this.createContactEquation(At,Lt,lt,ht);V.ri.copy($),V.ri.normalize(),V.ni.copy(V.ri),V.ri.mult(Ct,V.ri),K.vsub(yt,V.rj),V.ri.vadd(gt,V.ri),V.ri.vsub(At.position,V.ri),V.rj.vadd(yt,V.rj),V.rj.vsub(Lt.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);return}}for(var mt=!1,E=0,_t=Dt.length;E!==_t&&mt===!1;E++){var Ot=Tt[E],Rt=Dt[E],Ut=pt;Nt.vmult(Ot,Ut);var wt=bt;Nt.vmult(zt[Rt[0]],wt),wt.vadd(yt,wt);var Kt=Bt;Ut.mult(-Ct,Kt),gt.vadd(Kt,Kt);var he=vt;Kt.vsub(wt,he);var Me=he.dot(Ut),we=Pt;if(gt.vsub(wt,we),Me<0&&we.dot(Ut)>0){for(var be=[],Zt=0,Jt=Rt.length;Zt!==Jt;Zt++){var Se=st.get();Nt.vmult(zt[Rt[Zt]],Se),yt.vadd(Se,Se),be.push(Se)}if(Z(be,Ut,gt)){mt=!0;var V=this.createContactEquation(At,Lt,lt,ht);Ut.mult(-Ct,V.ri),Ut.negate(V.ni);var ue=st.get();Ut.mult(-Me,ue);var Ie=st.get();Ut.mult(-Ct,Ie),gt.vsub(yt,V.rj),V.rj.vadd(Ie,V.rj),V.rj.vadd(ue,V.rj),V.rj.vadd(yt,V.rj),V.rj.vsub(Lt.position,V.rj),V.ri.vadd(gt,V.ri),V.ri.vsub(At.position,V.ri),st.release(ue),st.release(Ie),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var Zt=0,Fe=be.length;Zt!==Fe;Zt++)st.release(be[Zt]);return}else for(var Zt=0;Zt!==Rt.length;Zt++){var Pe=st.get(),Ye=st.get();Nt.vmult(zt[Rt[(Zt+1)%Rt.length]],Pe),Nt.vmult(zt[Rt[(Zt+2)%Rt.length]],Ye),yt.vadd(Pe,Pe),yt.vadd(Ye,Ye);var Ae=tt;Ye.vsub(Pe,Ae);var jt=ct;Ae.unit(jt);var Ge=st.get(),ve=st.get();gt.vsub(Pe,ve);var mn=ve.dot(jt);jt.mult(mn,Ge),Ge.vadd(Pe,Ge);var Bn=st.get();if(Ge.vsub(gt,Bn),mn>0&&mn*mn<Ae.norm2()&&Bn.norm2()<Ct*Ct){var V=this.createContactEquation(At,Lt,lt,ht);Ge.vsub(yt,V.rj),Ge.vsub(gt,V.ni),V.ni.normalize(),V.ni.mult(Ct,V.ri),V.rj.vadd(yt,V.rj),V.rj.vsub(Lt.position,V.rj),V.ri.vadd(gt,V.ri),V.ri.vsub(At.position,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var Zt=0,Fe=be.length;Zt!==Fe;Zt++)st.release(be[Zt]);st.release(Pe),st.release(Ye),st.release(Ge),st.release(Bn),st.release(ve);return}st.release(Pe),st.release(Ye),st.release(Ge),st.release(Bn),st.release(ve)}for(var Zt=0,Fe=be.length;Zt!==Fe;Zt++)st.release(be[Zt])}}},new l,new l,m.prototype[r.types.PLANE|r.types.BOX]=m.prototype.planeBox=function(lt,ht,gt,yt,$t,Nt,At,Lt){ht.convexPolyhedronRepresentation.material=ht.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.planeConvex(lt,ht.convexPolyhedronRepresentation,gt,yt,$t,Nt,At,Lt)};var Yt=new l,Ht=new l,Gt=new l,ee=new l;m.prototype[r.types.PLANE|r.types.CONVEXPOLYHEDRON]=m.prototype.planeConvex=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=Yt,Tt=Ht;Tt.set(0,0,1),$t.vmult(Tt,Tt);for(var Dt=0,zt=Gt,Ct=0;Ct!==ht.vertices.length;Ct++){st.copy(ht.vertices[Ct]),Nt.vmult(st,st),yt.vadd(st,st),st.vsub(gt,zt);var E=Tt.dot(zt);if(E<=0){var O=this.createContactEquation(At,Lt,lt,ht),K=ee;Tt.mult(Tt.dot(zt),K),st.vsub(K,K),K.vsub(gt,O.ri),O.ni.copy(Tt),st.vsub(yt,O.rj),O.ri.vadd(gt,O.ri),O.ri.vsub(At.position,O.ri),O.rj.vadd(yt,O.rj),O.rj.vsub(Lt.position,O.rj),this.result.push(O),Dt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(O,this.frictionResult)}}this.enableFrictionReduction&&Dt&&this.createFrictionFromAverage(Dt)};var te=new l,ne=new l;m.prototype[r.types.CONVEXPOLYHEDRON]=m.prototype.convexConvex=function(lt,ht,gt,yt,$t,Nt,At,Lt,st,Tt,Dt,zt){var Ct=te;if(!(gt.distanceTo(yt)>lt.boundingSphereRadius+ht.boundingSphereRadius)&&lt.findSeparatingAxis(ht,gt,$t,yt,Nt,Ct,Dt,zt)){var E=[],O=ne;lt.clipAgainstHull(gt,$t,ht,yt,Nt,Ct,-100,100,E);for(var K=0,$=0;$!==E.length;$++){var V=this.createContactEquation(At,Lt,lt,ht,st,Tt),mt=V.ri,_t=V.rj;Ct.negate(V.ni),E[$].normal.negate(O),O.mult(E[$].depth,O),E[$].point.vadd(O,mt),_t.copy(E[$].point),mt.vsub(gt,mt),_t.vsub(yt,_t),mt.vadd(gt,mt),mt.vsub(At.position,mt),_t.vadd(yt,_t),_t.vsub(Lt.position,_t),this.result.push(V),K++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(V,this.frictionResult)}this.enableFrictionReduction&&K&&this.createFrictionFromAverage(K)}};var ae=new l,de=new l,Wt=new l;m.prototype[r.types.PLANE|r.types.PARTICLE]=m.prototype.planeParticle=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=ae;st.set(0,0,1),At.quaternion.vmult(st,st);var Tt=de;yt.vsub(At.position,Tt);var Dt=st.dot(Tt);if(Dt<=0){var zt=this.createContactEquation(Lt,At,ht,lt);zt.ni.copy(st),zt.ni.negate(zt.ni),zt.ri.set(0,0,0);var Ct=Wt;st.mult(st.dot(yt),Ct),yt.vsub(Ct,Ct),zt.rj.copy(Ct),this.result.push(zt),this.createFrictionEquationsFromContact(zt,this.frictionResult)}};var z=new l;m.prototype[r.types.PARTICLE|r.types.SPHERE]=m.prototype.sphereParticle=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=z;st.set(0,0,1),yt.vsub(gt,st);var Tt=st.norm2();if(Tt<=lt.radius*lt.radius){var Dt=this.createContactEquation(Lt,At,ht,lt);st.normalize(),Dt.rj.copy(st),Dt.rj.mult(lt.radius,Dt.rj),Dt.ni.copy(st),Dt.ni.negate(Dt.ni),Dt.ri.set(0,0,0),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}};var St=new u,Et=new l;new l;var Xt=new l,kt=new l,ce=new l;m.prototype[r.types.PARTICLE|r.types.CONVEXPOLYHEDRON]=m.prototype.convexParticle=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=-1,Tt=Xt,Dt=ce,zt=null,Ct=Et;if(Ct.copy(yt),Ct.vsub(gt,Ct),$t.conjugate(St),St.vmult(Ct,Ct),lt.pointIsInside(Ct)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(gt,$t),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals($t);for(var E=0,O=lt.faces.length;E!==O;E++){var K=[lt.worldVertices[lt.faces[E][0]]],$=lt.worldFaceNormals[E];yt.vsub(K[0],kt);var V=-$.dot(kt);(zt===null||Math.abs(V)<Math.abs(zt))&&(zt=V,st=E,Tt.copy($))}if(st!==-1){var mt=this.createContactEquation(Lt,At,ht,lt);Tt.mult(zt,Dt),Dt.vadd(yt,Dt),Dt.vsub(gt,Dt),mt.rj.copy(Dt),Tt.negate(mt.ni),mt.ri.set(0,0,0);var _t=mt.ri,Ot=mt.rj;_t.vadd(yt,_t),_t.vsub(Lt.position,_t),Ot.vadd(gt,Ot),Ot.vsub(At.position,Ot),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},m.prototype[r.types.BOX|r.types.HEIGHTFIELD]=m.prototype.boxHeightfield=function(lt,ht,gt,yt,$t,Nt,At,Lt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,ht,gt,yt,$t,Nt,At,Lt)};var fe=new l,me=new l,Ce=[0];m.prototype[r.types.CONVEXPOLYHEDRON|r.types.HEIGHTFIELD]=m.prototype.convexHeightfield=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=ht.data,Tt=ht.elementSize,Dt=lt.boundingSphereRadius,zt=me,Ct=Ce,E=fe;c.pointToLocalFrame(yt,Nt,gt,E);var O=Math.floor((E.x-Dt)/Tt)-1,K=Math.ceil((E.x+Dt)/Tt)+1,$=Math.floor((E.y-Dt)/Tt)-1,V=Math.ceil((E.y+Dt)/Tt)+1;if(!(K<0||V<0||O>st.length||$>st[0].length)){O<0&&(O=0),K<0&&(K=0),$<0&&($=0),V<0&&(V=0),O>=st.length&&(O=st.length-1),K>=st.length&&(K=st.length-1),V>=st[0].length&&(V=st[0].length-1),$>=st[0].length&&($=st[0].length-1);var mt=[];ht.getRectMinMax(O,$,K,V,mt);var _t=mt[0],Ot=mt[1];if(!(E.z-Dt>Ot||E.z+Dt<_t))for(var Rt=O;Rt<K;Rt++)for(var Ut=$;Ut<V;Ut++)ht.getConvexTrianglePillar(Rt,Ut,!1),c.pointToWorldFrame(yt,Nt,ht.pillarOffset,zt),gt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ht.pillarConvex,gt,zt,$t,Nt,At,Lt,null,null,Ct,null),ht.getConvexTrianglePillar(Rt,Ut,!0),c.pointToWorldFrame(yt,Nt,ht.pillarOffset,zt),gt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ht.pillarConvex,gt,zt,$t,Nt,At,Lt,null,null,Ct,null)}};var pe=new l,ye=new l;m.prototype[r.types.SPHERE|r.types.HEIGHTFIELD]=m.prototype.sphereHeightfield=function(lt,ht,gt,yt,$t,Nt,At,Lt){var st=ht.data,Tt=lt.radius,Dt=ht.elementSize,zt=ye,Ct=pe;c.pointToLocalFrame(yt,Nt,gt,Ct);var E=Math.floor((Ct.x-Tt)/Dt)-1,O=Math.ceil((Ct.x+Tt)/Dt)+1,K=Math.floor((Ct.y-Tt)/Dt)-1,$=Math.ceil((Ct.y+Tt)/Dt)+1;if(!(O<0||$<0||E>st.length||$>st[0].length)){E<0&&(E=0),O<0&&(O=0),K<0&&(K=0),$<0&&($=0),E>=st.length&&(E=st.length-1),O>=st.length&&(O=st.length-1),$>=st[0].length&&($=st[0].length-1),K>=st[0].length&&(K=st[0].length-1);var V=[];ht.getRectMinMax(E,K,O,$,V);var mt=V[0],_t=V[1];if(!(Ct.z-Tt>_t||Ct.z+Tt<mt))for(var Ot=this.result,Rt=E;Rt<O;Rt++)for(var Ut=K;Ut<$;Ut++){var wt=Ot.length;ht.getConvexTrianglePillar(Rt,Ut,!1),c.pointToWorldFrame(yt,Nt,ht.pillarOffset,zt),gt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ht.pillarConvex,gt,zt,$t,Nt,At,Lt),ht.getConvexTrianglePillar(Rt,Ut,!0),c.pointToWorldFrame(yt,Nt,ht.pillarOffset,zt),gt.distanceTo(zt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ht.pillarConvex,gt,zt,$t,Nt,At,Lt);var Kt=Ot.length-wt;if(Kt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=_;var s=e("../shapes/Shape"),r=e("../math/Vec3"),o=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var c=e("./Narrowphase"),u=e("../utils/EventTarget"),h=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),m=e("../objects/Body"),g=e("../utils/TupleDictionary"),p=e("../collision/RaycastResult"),v=e("../collision/AABB"),y=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function _(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new r,this.broadphase=new x,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new c(this),this.collisionMatrix=new h,this.collisionMatrixPrevious=new h,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new u,new v;var A=new y;if(_.prototype.getContactMaterial=function(D,J){return this.contactMaterialTable.get(D.id,J.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var D=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=D,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(D){this.bodies.indexOf(D)===-1&&(D.index=this.bodies.length,this.bodies.push(D),D.world=this,D.initPosition.copy(D.position),D.initVelocity.copy(D.velocity),D.timeLastSleepy=this.time,D instanceof m&&(D.initAngularVelocity.copy(D.angularVelocity),D.initQuaternion.copy(D.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=D,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(D){this.constraints.push(D)},_.prototype.removeConstraint=function(D){var J=this.constraints.indexOf(D);J!==-1&&this.constraints.splice(J,1)},_.prototype.rayTest=function(D,J,j){j instanceof p?this.raycastClosest(D,J,{skipBackfaces:!0},j):this.raycastAll(D,J,{skipBackfaces:!0},j)},_.prototype.raycastAll=function(D,J,j,H){return j.mode=y.ALL,j.from=D,j.to=J,j.callback=H,A.intersectWorld(this,j)},_.prototype.raycastAny=function(D,J,j,H){return j.mode=y.ANY,j.from=D,j.to=J,j.result=H,A.intersectWorld(this,j)},_.prototype.raycastClosest=function(D,J,j,H){return j.mode=y.CLOSEST,j.from=D,j.to=J,j.result=H,A.intersectWorld(this,j)},_.prototype.remove=function(D){D.world=null;var J=this.bodies.length-1,j=this.bodies,H=j.indexOf(D);if(H!==-1){j.splice(H,1);for(var et=0;et!==j.length;et++)j[et].index=et;this.collisionMatrix.setNumObjects(J),this.removeBodyEvent.body=D,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(D){this.materials.push(D)},_.prototype.addContactMaterial=function(D){this.contactmaterials.push(D),this.contactMaterialTable.set(D.materials[0].id,D.materials[1].id,D)},typeof performance>"u"&&(performance={}),!performance.now){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),performance.now=function(){return Date.now()-b}}var L=new r;_.prototype.step=function(D,J,j){if(j=j||10,J=J||0,J===0)this.internalStep(D),this.time+=D;else{var H=Math.floor((this.time+J)/D)-Math.floor(this.time/D);H=Math.min(H,j);for(var et=performance.now(),k=0;k!==H&&(this.internalStep(D),!(performance.now()-et>D*1e3));k++);this.time+=J;for(var C=this.time%D,P=C/D,W=L,Q=this.bodies,it=0;it!==Q.length;it++){var Z=Q[it];Z.type!==m.STATIC&&Z.sleepState!==m.SLEEPING?(Z.position.vsub(Z.previousPosition,W),W.scale(P,W),Z.position.vadd(W,Z.interpolatedPosition)):(Z.interpolatedPosition.copy(Z.position),Z.interpolatedQuaternion.copy(Z.quaternion))}}};var N={type:"postStep"},w={type:"preStep"},M={type:"collide",body:null,contact:null},T=[],F=[],I=[],X=[];new r,new r,new r,new r,new r,new r,new r,new r,new r,new o;var q=new o,at=new o,G=new r;_.prototype.internalStep=function(D){this.dt=D;var J=this.contacts,j=I,H=X,et=this.numObjects(),k=this.bodies,C=this.solver,P=this.gravity,W=this.doProfiling,Q=this.profile,it=m.DYNAMIC,Z,ot=this.constraints,B=F;P.norm();var xt=P.x,ft=P.y,Mt=P.z,rt=0;for(W&&(Z=performance.now()),rt=0;rt!==et;rt++){var dt=k[rt];if(dt.type&it){var U=dt.force,S=dt.mass;U.x+=S*xt,U.y+=S*ft,U.z+=S*Mt}}for(var rt=0,nt=this.subsystems.length;rt!==nt;rt++)this.subsystems[rt].update();W&&(Z=performance.now()),j.length=0,H.length=0,this.broadphase.collisionPairs(this,j,H),W&&(Q.broadphase=performance.now()-Z);var te=ot.length;for(rt=0;rt!==te;rt++){var tt=ot[rt];if(!tt.collideConnected)for(var ct=j.length-1;ct>=0;ct-=1)(tt.bodyA===j[ct]&&tt.bodyB===H[ct]||tt.bodyB===j[ct]&&tt.bodyA===H[ct])&&(j.splice(ct,1),H.splice(ct,1))}this.collisionMatrixTick(),W&&(Z=performance.now());var ut=T,It=J.length;for(rt=0;rt!==It;rt++)ut.push(J[rt]);J.length=0;var pt=this.frictionEquations.length;for(rt=0;rt!==pt;rt++)B.push(this.frictionEquations[rt]);this.frictionEquations.length=0,this.narrowphase.getContacts(j,H,this,J,ut,this.frictionEquations,B),W&&(Q.narrowphase=performance.now()-Z),W&&(Z=performance.now());for(var rt=0;rt<this.frictionEquations.length;rt++)C.addEquation(this.frictionEquations[rt]);for(var bt=J.length,Bt=0;Bt!==bt;Bt++){var tt=J[Bt],dt=tt.bi,vt=tt.bj;tt.si,tt.sj;var Pt;if(dt.material&&vt.material?Pt=this.getContactMaterial(dt.material,vt.material)||this.defaultContactMaterial:Pt=this.defaultContactMaterial,Pt.friction,dt.material&&vt.material&&(dt.material.friction>=0&&vt.material.friction>=0&&dt.material.friction*vt.material.friction,dt.material.restitution>=0&&vt.material.restitution>=0&&(tt.restitution=dt.material.restitution*vt.material.restitution)),C.addEquation(tt),dt.allowSleep&&dt.type===m.DYNAMIC&&dt.sleepState===m.SLEEPING&&vt.sleepState===m.AWAKE&&vt.type!==m.STATIC){var Yt=vt.velocity.norm2()+vt.angularVelocity.norm2(),Ht=Math.pow(vt.sleepSpeedLimit,2);Yt>=Ht*2&&(dt._wakeUpAfterNarrowphase=!0)}if(vt.allowSleep&&vt.type===m.DYNAMIC&&vt.sleepState===m.SLEEPING&&dt.sleepState===m.AWAKE&&dt.type!==m.STATIC){var Gt=dt.velocity.norm2()+dt.angularVelocity.norm2(),ee=Math.pow(dt.sleepSpeedLimit,2);Gt>=ee*2&&(vt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(dt,vt,!0),this.collisionMatrixPrevious.get(dt,vt)||(M.body=vt,M.contact=tt,dt.dispatchEvent(M),M.body=dt,vt.dispatchEvent(M))}for(W&&(Q.makeContactConstraints=performance.now()-Z,Z=performance.now()),rt=0;rt!==et;rt++){var dt=k[rt];dt._wakeUpAfterNarrowphase&&(dt.wakeUp(),dt._wakeUpAfterNarrowphase=!1)}var te=ot.length;for(rt=0;rt!==te;rt++){var tt=ot[rt];tt.update();for(var ct=0,ne=tt.equations.length;ct!==ne;ct++){var ae=tt.equations[ct];C.addEquation(ae)}}C.solve(D,this),W&&(Q.solve=performance.now()-Z),C.removeAllEquations();var de=Math.pow;for(rt=0;rt!==et;rt++){var dt=k[rt];if(dt.type&it){var Wt=de(1-dt.linearDamping,D),z=dt.velocity;z.mult(Wt,z);var St=dt.angularVelocity;if(St){var Et=de(1-dt.angularDamping,D);St.mult(Et,St)}}}for(this.dispatchEvent(w),rt=0;rt!==et;rt++){var dt=k[rt];dt.preStep&&dt.preStep.call(dt)}W&&(Z=performance.now());var Xt=q,kt=at,ce=this.stepnumber,fe=m.DYNAMIC|m.KINEMATIC,me=ce%(this.quatNormalizeSkip+1)===0,Ce=this.quatNormalizeFast,pe=D*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,rt=0;rt!==et;rt++){var ye=k[rt],lt=ye.force,ht=ye.torque;if(ye.type&fe&&ye.sleepState!==m.SLEEPING){var gt=ye.velocity,yt=ye.angularVelocity,$t=ye.position,Nt=ye.quaternion,At=ye.invMass,Lt=ye.invInertiaWorld;gt.x+=lt.x*At*D,gt.y+=lt.y*At*D,gt.z+=lt.z*At*D,ye.angularVelocity&&(Lt.vmult(ht,G),G.mult(D,G),G.vadd(yt,yt)),$t.x+=gt.x*D,$t.y+=gt.y*D,$t.z+=gt.z*D,ye.angularVelocity&&(Xt.set(yt.x,yt.y,yt.z,0),Xt.mult(Nt,kt),Nt.x+=pe*kt.x,Nt.y+=pe*kt.y,Nt.z+=pe*kt.z,Nt.w+=pe*kt.w,me&&(Ce?Nt.normalizeFast():Nt.normalize())),ye.aabb&&(ye.aabbNeedsUpdate=!0),ye.updateInertiaWorld&&ye.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,W&&(Q.integrate=performance.now()-Z),this.time+=D,this.stepnumber+=1,this.dispatchEvent(N),rt=0;rt!==et;rt++){var dt=k[rt],st=dt.postStep;st&&st.call(dt)}if(this.allowSleep)for(rt=0;rt!==et;rt++)k[rt].sleepTick(this.time)},_.prototype.clearForces=function(){for(var D=this.bodies,J=D.length,j=0;j!==J;j++){var H=D[j];H.force,H.torque,H.force.set(0,0,0),H.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(ch);var Fs=ch.exports;function lc(a,t){if(t===mu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(t===Uo||t===Ic){let e=a.getIndex();if(e===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),e=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=e.count-2,i=[];if(t===Uo)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),a}class Jg extends us{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new i0(e)}),this.register(function(e){return new d0(e)}),this.register(function(e){return new f0(e)}),this.register(function(e){return new p0(e)}),this.register(function(e){return new r0(e)}),this.register(function(e){return new o0(e)}),this.register(function(e){return new a0(e)}),this.register(function(e){return new l0(e)}),this.register(function(e){return new n0(e)}),this.register(function(e){return new c0(e)}),this.register(function(e){return new s0(e)}),this.register(function(e){return new u0(e)}),this.register(function(e){return new h0(e)}),this.register(function(e){return new t0(e)}),this.register(function(e){return new m0(e)}),this.register(function(e){return new v0(e)})}load(t,e,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Ls.extractUrlBase(t);r=Ls.resolveURL(c,this.path)}else r=Ls.extractUrlBase(t);this.manager.itemStart(t);const o=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new lh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,r,function(u){e(u),s.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const r={},o={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===hh){try{r[le.KHR_BINARY_GLTF]=new g0(t)}catch(h){i&&i(h);return}s=JSON.parse(r[le.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new P0(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case le.KHR_MATERIALS_UNLIT:r[h]=new e0;break;case le.KHR_DRACO_MESH_COMPRESSION:r[h]=new y0(s,this.dracoLoader);break;case le.KHR_TEXTURE_TRANSFORM:r[h]=new x0;break;case le.KHR_MESH_QUANTIZATION:r[h]=new _0;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function Qg(){let a={};return{get:function(t){return a[t]},add:function(t,e){a[t]=e},remove:function(t){delete a[t]},removeAll:function(){a={}}}}const le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t0{constructor(t){this.parser=t,this.name=le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const u=new Qt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],qe);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bg(u),c.distance=h;break;case"spot":c=new ha(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(e.cache,o,l)})}}class e0{constructor(){this.name=le.KHR_MATERIALS_UNLIT}getMaterialType(){return Ti}extendParams(t,e,n){const i=[];t.color=new Qt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],qe),t.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,tn))}return Promise.all(i)}}class n0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class i0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Vt(o,o)}return Promise.all(s)}}class s0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class r0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Qt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],qe)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,tn)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class o0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class a0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return e.attenuationColor=new Qt().setRGB(o[0],o[1],o[2],qe),Promise.all(s)}}class l0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class c0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return e.specularColor=new Qt().setRGB(o[0],o[1],o[2],qe),r.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,tn)),Promise.all(s)}}class h0{constructor(t){this.parser=t,this.name=le.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class u0{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class d0{constructor(t){this.parser=t,this.name=le.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class f0{constructor(t){this.parser=t,this.name=le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class p0{constructor(t){this.parser=t,this.name=le.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class m0{constructor(t){this.name=le.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class v0{constructor(t){this.name=le.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const m of h){const g=new se,p=new Y,v=new fi,y=new Y(1,1,1),x=new rg(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,g.compose(p,v,y));for(const _ in l)if(_==="_COLOR_0"){const A=l[_];x.instanceColor=new Oo(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);Le.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const hh="glTF",ws=12,cc={JSON:1313821514,BIN:5130562};class g0{constructor(t){this.name=le.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ws,s=new DataView(t,ws);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===cc.JSON){const c=new Uint8Array(t,ws+r,o);this.content=n.decode(c)}else if(l===cc.BIN){const c=ws+r;this.body=t.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class y0{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=le.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,o={},l={},c={};for(const u in r){const h=Ho[u]||u.toLowerCase();o[h]=r[u]}for(const u in t.attributes){const h=Ho[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[t.attributes[u]],f=$i[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const m in f.attributes){const g=f.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}h(f)},o,c,qe,d)})})}}class x0{constructor(){this.name=le.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class _0{constructor(){this.name=le.KHR_MESH_QUANTIZATION}}class uh extends Vs{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let r=0;r!==i;r++)e[r]=n[s+r];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,m=t*c,g=m-c,p=-2*f+3*d,v=f-d,y=1-p,x=v-d+h;for(let _=0;_!==o;_++){const A=r[g+_+o],b=r[g+_+l]*u,L=r[m+_+o],N=r[m+_]*u;s[_]=y*A+x*b+p*L+v*N}return s}}const M0=new fi;class w0 extends uh{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return M0.fromArray(s).normalize().toArray(s),s}}const pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$i={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hc={9728:nn,9729:cn,9984:wc,9985:xr,9986:As,9987:Xn},uc={33071:oi,33648:wr,10497:ts},Eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ho={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},S0={CUBICSPLINE:void 0,LINEAR:ns,STEP:Ds},Ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E0(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),a.DefaultMaterial}function _i(a,t,e){for(const n in e.extensions)a[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function si(a,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(a.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function A0(a,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):a.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function T0(a,t){if(a.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)a.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(a.morphTargetInfluences.length===e.length){a.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)a.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b0(a){let t;const e=a.extensions&&a.extensions[le.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+To(e.attributes):t=a.indices+":"+To(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)t+=":"+To(a.targets[n]);return t}function To(a){let t="";const e=Object.keys(a).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+a[e[n]]+";";return t}function ko(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function R0(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const C0=new se;class P0{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Qg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new la(this.options.manager):this.textureLoader=new Hg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return _i(s,o,i),si(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const r=e[i].joints;for(let o=0,l=r.length;o<l;o++)t[r[o]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const r=t[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,u]of r.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[le.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Ls.resolveURL(e.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const r=Eo[i.type],o=$i[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new sn(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Eo[i.type],c=$i[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let g,p;if(f&&f!==h){const v=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let x=e.cache.get(y);x||(g=new c(o,v*f,i.count*f/u),x=new tg(g,f/u),e.cache.add(y,x)),p=new Qo(x,l,d%f/u,m)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),p=new sn(g,l,m);if(i.sparse!==void 0){const v=Eo.SCALAR,y=$i[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,A=new y(r[1],x,i.sparse.count*v),b=new c(r[2],_,i.sparse.count*l);o!==null&&(p=new sn(p.array.slice(),p.itemSize,p.normalized));for(let L=0,N=A.length;L<N;L++){const w=A[L];if(p.setX(w,b[L*l]),l>=2&&p.setY(w,b[L*l+1]),l>=3&&p.setZ(w,b[L*l+2]),l>=4&&p.setW(w,b[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,r=e.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,n){const i=this,s=this.json,r=s.textures[t],o=s.images[e],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=r.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=hc[d.magFilter]||cn,u.minFilter=hc[d.minFilter]||Xn,u.wrapS=uc[d.wrapS]||ts,u.wrapT=uc[d.wrapT]||ts,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const r=i.images[t],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(g){const p=new He(g);p.needsUpdate=!0,d(p)}),e.load(Ls.resolveURL(h,s.path),m,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=r.mimeType||R0(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[le.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[le.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[le.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new eh,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ea,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return aa}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let r;const o={},l=s.extensions||{},c=[];if(l[le.KHR_MATERIALS_UNLIT]){const h=i[le.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(o,s,e))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Qt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qe),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",h.baseColorTexture,tn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Pn);const u=s.alphaMode||Ao.OPAQUE;if(u===Ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ao.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Ti&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Vt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==Ti&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Ti){const h=s.emissiveFactor;o.emissive=new Qt().setRGB(h[0],h[1],h[2],qe)}return s.emissiveTexture!==void 0&&r!==Ti&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,tn)),Promise.all(c).then(function(){const h=new r(o);return s.name&&(h.name=s.name),si(h,s),e.associations.set(h,{materials:t}),s.extensions&&_i(i,h,s),h})}createUniqueName(t){const e=_e.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return dc(l,o,e)})}const r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o],u=b0(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[le.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=dc(new un,c,e),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?E0(this.cache):this.getDependency("material",r[l].material);o.push(u)}return o.push(e.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const g=u[f],p=r[f];let v;const y=c[f];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)v=s.isSkinnedMesh===!0?new ng(g,y):new We(g,y),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?v.geometry=lc(v.geometry,Ic):p.mode===pn.TRIANGLE_FAN&&(v.geometry=lc(v.geometry,Uo));else if(p.mode===pn.LINES)v=new th(g,y);else if(p.mode===pn.LINE_STRIP)v=new na(g,y);else if(p.mode===pn.LINE_LOOP)v=new og(g,y);else if(p.mode===pn.POINTS)v=new ag(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&T0(v,s),v.name=e.createUniqueName(s.name||"mesh_"+t),si(v,s),p.extensions&&_i(i,v,p),e.assignFinalMaterial(v),h.push(v)}for(let f=0,m=h.length;f<m;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&_i(i,h[0],s),h[0];const d=new ai;s.extensions&&_i(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new en(ku.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new $o(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),si(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){o.push(h);const d=new se;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ta(o,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,r=[],o=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],m=i.samplers[f.sampler],g=f.target,p=g.node,v=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;g.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",v)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],g=h[3],p=h[4],v=[];for(let y=0,x=d.length;y<x;y++){const _=d[y],A=f[y],b=m[y],L=g[y],N=p[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const w=n._createAnimationTracks(_,A,b,L,N);if(w)for(let M=0;M<w.length;M++)v.push(w[M])}return new Rg(s,void 0,v)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),r=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)r.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,C0)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Jc:c.length>1?u=new ai:c.length===1?u=c[0]:u=new Le,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=r),si(u,s),s.extensions&&_i(n,u,s),s.matrix!==void 0){const h=new se;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new ai;n.name&&(s.name=i.createUniqueName(n.name)),si(s,n),n.extensions&&_i(e,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof En||d instanceof He)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const r=[],o=t.name?t.name:t.uuid,l=[];ni[s.path]===ni.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ni[s.path]){case ni.weights:c=rs;break;case ni.rotation:c=Ri;break;case ni.position:case ni.scale:c=os;break;default:switch(n.itemSize){case 1:c=rs;break;case 2:case 3:default:c=os;break}break}const u=i.interpolation!==void 0?S0[i.interpolation]:ns,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+ni[s.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),r.push(m)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=ko(e.constructor),i=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Ri?w0:uh;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function L0(a,t,e){const n=t.attributes,i=new Kn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new Y(l[0],l[1],l[2]),new Y(c[0],c[1],c[2])),o.normalized){const u=ko($i[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const o=new Y,l=new Y;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=ko($i[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Nn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function dc(a,t,e){const n=t.attributes,i=[];function s(r,o){return e.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=Ho[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(t.indices!==void 0&&!a.index){const r=e.getDependency("accessor",t.indices).then(function(o){a.setIndex(o)});i.push(r)}return ge.workingColorSpace!==qe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),si(a,t),L0(a,t,e),Promise.all(i).then(function(){return t.targets!==void 0?A0(a,t.targets,e):a})}class wn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new R);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new R);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new wn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],u=n[4],h=n[5],d=n[6],f=n[7],m=n[8],g=i[0],p=i[1],v=i[2],y=i[3],x=i[4],_=i[5],A=i[6],b=i[7],L=i[8];return s[0]=r*g+o*y+l*A,s[1]=r*p+o*x+l*b,s[2]=r*v+o*_+l*L,s[3]=c*g+u*y+h*A,s[4]=c*p+u*x+h*b,s[5]=c*v+u*_+h*L,s[6]=d*g+f*y+m*A,s[7]=d*p+f*x+m*b,s[8]=d*v+f*_+m*L,e}scale(t,e){e===void 0&&(e=new wn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new R);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let u;const h=4;let d;do{if(r=c-l,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){u=h;do d=h-u,s[d+i*r]+=s[d+i*o];while(--u);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const f=s[r+i*o]/s[r+i*r];u=h;do d=h-u,s[d+i*o]=d<=r?0:s[d+i*o]-s[d+i*r]*f;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new wn);const e=3,n=6,i=I0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const u=n;let h;do{if(s=l-o,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=u;do h=u-c,i[h+n*s]+=i[h+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const d=i[s+n*r]/i[s+n*s];c=u;do h=u-c,i[h+n*r]=h<=s?0:i[h+n*r]-i[h+n*s]*d;while(--c)}}while(--o);s=2;do{r=s-1;do{const d=i[s+n*r]/i[s+n*s];c=n;do h=n-c,i[h+n*r]=i[h+n*r]-i[h+n*s]*d;while(--c)}while(r--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do h=n-c,i[h+n*s]=i[h+n*s]*d;while(--c)}while(s--);s=2;do{r=2;do{if(h=i[e+r+n*s],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,h)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,l=i+i,c=e*r,u=e*o,h=e*l,d=n*o,f=n*l,m=i*l,g=s*r,p=s*o,v=s*l,y=this.elements;return y[3*0+0]=1-(d+m),y[3*0+1]=u-v,y[3*0+2]=h+p,y[3*1+0]=u+v,y[3*1+1]=1-(c+m),y[3*1+2]=f-g,y[3*2+0]=h-p,y[3*2+1]=f+g,y[3*2+2]=1-(c+d),this}transpose(t){t===void 0&&(t=new wn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const I0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class R{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new R);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new R(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new R(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new wn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new R);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new R);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new R),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new R),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new R),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=N0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=D0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(fc),fc.almostEquals(t,e)}clone(){return new R(this.x,this.y,this.z)}}R.ZERO=new R(0,0,0);R.UNIT_X=new R(1,0,0);R.UNIT_Y=new R(0,1,0);R.UNIT_Z=new R(0,0,1);const N0=new R,D0=new R,fc=new R;class dn{constructor(t){t===void 0&&(t={}),this.lowerBound=new R,this.upperBound=new R,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,pc),c=pc),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new dn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),o.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=mc,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(i,s,r,o,l,c,u,h);for(let d=0;d!==8;d++){const f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=mc,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7];this.getCorners(i,s,r,o,l,c,u,h);for(let d=0;d!==8;d++){const f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,h=(this.lowerBound.z-n.z)*r,d=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(o,l),Math.min(c,u)),Math.min(h,d)),m=Math.min(Math.min(Math.max(o,l),Math.max(c,u)),Math.max(h,d));return!(m<0||f>m)}}const pc=new R,mc=[new R,new R,new R,new R,new R,new R,new R,new R];class U0{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Ue{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new R),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=F0,i=B0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ue);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+r*o+i*c-s*l,e.y=i*u+r*l+s*o-n*c,e.z=s*u+r*c+n*l-i*o,e.w=r*u-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new Ue);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new Ue),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new R);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z,c=this.w,u=c*n+o*s-l*i,h=c*i+l*n-r*s,d=c*s+r*i-o*n,f=-r*n-o*i-l*s;return e.x=u*c+f*-r+h*-l-d*-o,e.y=h*c+f*-o+d*-r-u*-l,e.z=d*c+f*-l+u*-o-h*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=r*o+l*c;if(u>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const h=r*r,d=o*o,f=l*l;n=Math.atan2(2*o*c-2*r*l,1-2*d-2*f),i=Math.asin(2*u),s=Math.atan2(2*r*c-2*o*l,1-2*h-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*o+s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o-l*c*u):i==="YXZ"?(this.x=l*r*o+s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o+l*c*u):i==="ZXY"?(this.x=l*r*o-s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o-l*c*u):i==="ZYX"?(this.x=l*r*o-s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o+l*c*u):i==="YZX"?(this.x=l*r*o+s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o-l*c*u):i==="XZY"&&(this.x=l*r*o-s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o+l*c*u),this}clone(){return new Ue(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ue);const i=this.x,s=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,u=t.z,h=t.w,d,f,m,g,p;return f=i*l+s*c+r*u+o*h,f<0&&(f=-f,l=-l,c=-c,u=-u,h=-h),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),g=Math.sin((1-e)*d)/m,p=Math.sin(e*d)/m):(g=1-e,p=e),n.x=g*i+p*l,n.y=g*s+p*c,n.z=g*r+p*u,n.w=g*o+p*h,n}integrate(t,e,n,i){i===void 0&&(i=new Ue);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,u=this.z,h=this.w,d=e*.5;return i.x+=d*(s*h+r*u-o*c),i.y+=d*(r*h+o*l-s*u),i.z+=d*(o*h+s*c-r*l),i.w+=d*(-s*l-r*c-o*u),i}}const F0=new R,B0=new R,O0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class qt{constructor(t){t===void 0&&(t={}),this.id=qt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}qt.idCounter=0;qt.types=O0;class Ze{constructor(t){t===void 0&&(t={}),this.position=new R,this.quaternion=new Ue,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ze.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ze.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new R),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new R),n.vsub(t,i),e.conjugate(vc),vc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new R),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new R),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new R),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const vc=new Ue;class Is extends qt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:qt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new R;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],i),i.normalize();let u=!1;for(let h=0;h!==n.length;h++)if(n[h].almostEquals(i)||n[h].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new R;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Is.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new R,r=new R;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,l,c){const u=new R;let h=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){u.copy(n.faceNormals[m]),s.vmult(u,u);const g=u.dot(r);g>d&&(d=g,h=m)}const f=[];for(let m=0;m<n.faces[h].length;m++){const g=n.vertices[n.faces[h][m]],p=new R;p.copy(g),s.vmult(p,p),i.vadd(p,p),f.push(p)}h>=0&&this.clipFaceAgainstHull(r,t,e,f,o,l,c)}findSeparatingAxis(t,e,n,i,s,r,o,l){const c=new R,u=new R,h=new R,d=new R,f=new R,m=new R;let g=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let v=0;v!==p.uniqueAxes.length;v++){n.vmult(p.uniqueAxes[v],c);const y=p.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<g&&(g=y,r.copy(c))}else{const v=o?o.length:p.faces.length;for(let y=0;y<v;y++){const x=o?o[y]:y;c.copy(p.faceNormals[x]),n.vmult(c,c);const _=p.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<g&&(g=_,r.copy(c))}}if(t.uniqueAxes)for(let v=0;v!==t.uniqueAxes.length;v++){s.vmult(t.uniqueAxes[v],u);const y=p.testSepAxis(u,t,e,n,i,s);if(y===!1)return!1;y<g&&(g=y,r.copy(u))}else{const v=l?l.length:t.faces.length;for(let y=0;y<v;y++){const x=l?l[y]:y;u.copy(t.faceNormals[x]),s.vmult(u,u);const _=p.testSepAxis(u,t,e,n,i,s);if(_===!1)return!1;_<g&&(g=_,r.copy(u))}}for(let v=0;v!==p.uniqueEdges.length;v++){n.vmult(p.uniqueEdges[v],d);for(let y=0;y!==t.uniqueEdges.length;y++)if(s.vmult(t.uniqueEdges[y],f),d.cross(f,m),!m.almostZero()){m.normalize();const x=p.testSepAxis(m,t,e,n,i,s);if(x===!1)return!1;x<g&&(g=x,r.copy(m))}}return i.vsub(e,h),h.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;Is.project(o,t,n,i,bo),Is.project(e,t,s,r,Ro);const l=bo[0],c=bo[1],u=Ro[0],h=Ro[1];if(l<h||u<c)return!1;const d=l-h,f=u-c;return d<f?d:f}calculateLocalInertia(t,e){const n=new R,i=new R;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const l=new R,c=new R,u=new R,h=new R,d=new R,f=new R,m=new R,g=new R,p=this,v=[],y=i,x=v;let _=-1,A=Number.MAX_VALUE;for(let M=0;M<p.faces.length;M++){l.copy(p.faceNormals[M]),n.vmult(l,l);const T=l.dot(t);T<A&&(A=T,_=M)}if(_<0)return;const b=p.faces[_];b.connectedFaces=[];for(let M=0;M<p.faces.length;M++)for(let T=0;T<p.faces[M].length;T++)b.indexOf(p.faces[M][T])!==-1&&M!==_&&b.connectedFaces.indexOf(M)===-1&&b.connectedFaces.push(M);const L=b.length;for(let M=0;M<L;M++){const T=p.vertices[b[M]],F=p.vertices[b[(M+1)%L]];T.vsub(F,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),h.copy(this.faceNormals[_]),n.vmult(h,h),e.vadd(h,h),u.cross(h,d),d.negate(d),f.copy(T),n.vmult(f,f),e.vadd(f,f);const I=b.connectedFaces[M];m.copy(this.faceNormals[I]);const X=this.getPlaneConstantOfFace(I);g.copy(m),n.vmult(g,g);const q=X-g.dot(e);for(this.clipFaceAgainstPlane(y,x,g,q);y.length;)y.shift();for(;x.length;)y.push(x.shift())}m.copy(this.faceNormals[_]);const N=this.getPlaneConstantOfFace(_);g.copy(m),n.vmult(g,g);const w=N-g.dot(e);for(let M=0;M<y.length;M++){let T=g.dot(y[M])+w;if(T<=s&&(console.log(`clamped: depth=${T} to minDist=${s}`),T=s),T<=r){const F=y[M];if(T<=1e-6){const I={point:F,normal:g,depth:T};o.push(I)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<o;u++){if(c=t[u],r=n.dot(c)+i,s<0)if(r<0){const h=new R;h.copy(c),e.push(h)}else{const h=new R;l.lerp(c,s/(s-r),h),e.push(h)}else if(r<0){const h=new R;l.lerp(c,s/(s-r),h),e.push(h),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new R);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new R);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,l,c,u,h,d=new R;for(let f=0;f<s.length;f++){d.copy(s[f]),e.vmult(d,d),t.vadd(d,d);const m=d;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(o===void 0||m.y<o)&&(o=m.y),(u===void 0||m.y>u)&&(u=m.y),(l===void 0||m.z<l)&&(l=m.z),(h===void 0||m.z>h)&&(h=m.z)}n.set(r,o,l),i.set(c,u,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new R);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new R;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=e[n[o][0]],u=new R;t.vsub(c,u);const h=l.dot(u),d=new R;r.vsub(c,d);const f=l.dot(d);if(h<0&&f>0||h>0&&f<0)return!1}return s?1:-1}static project(t,e,n,i,s){const r=t.vertices.length,o=z0;let l=0,c=0;const u=V0,h=t.vertices;u.setZero(),Ze.vectorToLocalFrame(n,i,e,o),Ze.pointToLocalFrame(n,i,u,u);const d=u.dot(o);c=l=h[0].dot(o);for(let f=1;f<r;f++){const m=h[f].dot(o);m>l&&(l=m),m<c&&(c=m)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const bo=[],Ro=[];new R;const z0=new R,V0=new R;class Br extends qt{constructor(t){super({type:qt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=R,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Is({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new R),Br.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)ii.set(s[r][0],s[r][1],s[r][2]),e.vmult(ii,ii),t.vadd(ii,ii),n(ii.x,ii.y,ii.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Tn[0].set(s.x,s.y,s.z),Tn[1].set(-s.x,s.y,s.z),Tn[2].set(-s.x,-s.y,s.z),Tn[3].set(-s.x,-s.y,-s.z),Tn[4].set(s.x,-s.y,-s.z),Tn[5].set(s.x,s.y,-s.z),Tn[6].set(-s.x,s.y,-s.z),Tn[7].set(s.x,-s.y,s.z);const r=Tn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const l=Tn[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,h=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),h>i.z&&(i.z=h),c<n.x&&(n.x=c),u<n.y&&(n.y=u),h<n.z&&(n.z=h)}}}const ii=new R,Tn=[new R,new R,new R,new R,new R,new R,new R,new R],fa={DYNAMIC:1,STATIC:2,KINEMATIC:4},pa={AWAKE:0,SLEEPY:1,SLEEPING:2};class ie extends U0{constructor(t){t===void 0&&(t={}),super(),this.id=ie.idCounter++,this.index=-1,this.world=null,this.vlambda=new R,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new R,this.previousPosition=new R,this.interpolatedPosition=new R,this.initPosition=new R,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new R,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new R,this.force=new R;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ie.STATIC:ie.DYNAMIC,typeof t.type==typeof ie.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ie.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new R,this.quaternion=new Ue,this.initQuaternion=new Ue,this.previousQuaternion=new Ue,this.interpolatedQuaternion=new Ue,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new R,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new R,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new R,this.invInertia=new R,this.invInertiaWorld=new wn,this.invMassSolve=0,this.invInertiaSolve=new R,this.invInertiaWorldSolve=new wn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new R(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new R(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new dn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new R,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ie.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ie.SLEEPING&&this.dispatchEvent(ie.wakeupEvent)}sleep(){this.sleepState=ie.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ie.AWAKE&&n<i?(this.sleepState=ie.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ie.sleepyEvent)):e===ie.SLEEPY&&n>i?this.wakeUp():e===ie.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ie.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ie.SLEEPING||this.type===ie.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new R),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new R),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new R),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new R),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new R,s=new Ue;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),l=r.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=H0,r=k0,o=this.quaternion,l=this.aabb,c=G0;for(let u=0;u!==i;u++){const h=t[u];o.vmult(e[u],s),s.vadd(this.position,s),o.mult(n[u],r),h.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=W0,i=X0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new R),this.type!==ie.DYNAMIC)return;this.sleepState===ie.SLEEPING&&this.wakeUp();const n=Y0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new R),this.type!==ie.DYNAMIC)return;const n=K0,i=j0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ie.DYNAMIC&&(this.sleepState===ie.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new R),this.type!==ie.DYNAMIC)return;this.sleepState===ie.SLEEPING&&this.wakeUp();const n=e,i=Z0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=$0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new R),this.type!==ie.DYNAMIC)return;const n=J0,i=Q0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=ty;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Br.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new R;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ie.DYNAMIC||this.type===ie.KINEMATIC)||this.sleepState===ie.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,u=this.invMass,h=this.invInertiaWorld,d=this.linearFactor,f=u*t;i.x+=o.x*f*d.x,i.y+=o.y*f*d.y,i.z+=o.z*f*d.z;const m=h.elements,g=this.angularFactor,p=l.x*g.x,v=l.y*g.y,y=l.z*g.z;s.x+=t*(m[0]*p+m[1]*v+m[2]*y),s.y+=t*(m[3]*p+m[4]*v+m[5]*y),s.z+=t*(m[6]*p+m[7]*v+m[8]*y),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ie.idCounter=0;ie.COLLIDE_EVENT_NAME="collide";ie.DYNAMIC=fa.DYNAMIC;ie.STATIC=fa.STATIC;ie.KINEMATIC=fa.KINEMATIC;ie.AWAKE=pa.AWAKE;ie.SLEEPY=pa.SLEEPY;ie.SLEEPING=pa.SLEEPING;ie.wakeupEvent={type:"wakeup"};ie.sleepyEvent={type:"sleepy"};ie.sleepEvent={type:"sleep"};const H0=new R,k0=new Ue,G0=new dn,W0=new wn,X0=new wn,q0=new wn,Y0=new R,K0=new R,j0=new R,Z0=new R,$0=new R,J0=new R,Q0=new R,ty=new R;new R;new R;new Ue;new R;new R;new R;new R;class Go{constructor(){this.rayFromWorld=new R,this.rayToWorld=new R,this.hitNormalWorld=new R,this.hitPointWorld=new R,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let dh,fh,ph,mh,vh,gh,yh;const ma={CLOSEST:1,ANY:2,ALL:4};dh=qt.types.SPHERE;fh=qt.types.PLANE;ph=qt.types.BOX;mh=qt.types.CYLINDER;vh=qt.types.CONVEXPOLYHEDRON;gh=qt.types.HEIGHTFIELD;yh=qt.types.TRIMESH;class $e{get[dh](){return this._intersectSphere}get[fh](){return this._intersectPlane}get[ph](){return this._intersectBox}get[mh](){return this._intersectConvex}get[vh](){return this._intersectConvex}get[gh](){return this._intersectHeightfield}get[yh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new R),e===void 0&&(e=new R),this.from=t.clone(),this.to=e.clone(),this.direction=new R,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=$e.ANY,this.result=new Go,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||$e.ANY,this.result=e.result||new Go,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(gc),Co.length=0,t.broadphase.aabbQuery(t,gc,Co),this.intersectBodies(Co),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=ey,s=ny;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(vy(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,l=this.direction,c=new R(0,0,1);e.vmult(c,c);const u=new R;r.vsub(n,u);const h=u.dot(c);o.vsub(n,u);const d=u.dot(c);if(h*d>0||r.distanceTo(o)<h)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new R,g=new R,p=new R;r.vsub(n,m);const v=-c.dot(m)/f;l.scale(v,g),r.vadd(g,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=iy;r.from.copy(this.from),r.to.copy(this.to),Ze.pointToLocalFrame(n,e,r.from,r.from),Ze.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=sy;let l,c,u,h;l=c=0,u=h=t.data.length-1;const d=new dn;r.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,o,!0),u=Math.min(u,o[0]+1),h=Math.min(h,o[1]+1);for(let f=l;f<u;f++)for(let m=c;m<h;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,d),!!d.overlapsRay(r)){if(t.getConvexTrianglePillar(f,m,!1),Ze.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,s,yc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),Ze.pointToWorldFrame(n,e,t.pillarOffset,gr),this._intersectConvex(t.pillarConvex,e,gr,i,s,yc)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),h=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,d=u**2-4*c*h,f=ry,m=oy;if(!(d<0))if(d===0)r.lerp(o,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const g=(-u-Math.sqrt(d))/(2*c),p=(-u+Math.sqrt(d))/(2*c);if(g>=0&&g<=1&&(r.lerp(o,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(o,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=ay,l=xc,c=r&&r.faceList||null,u=t.faces,h=t.vertices,d=t.faceNormals,f=this.direction,m=this.from,g=this.to,p=m.distanceTo(g),v=c?c.length:u.length,y=this.result;for(let x=0;!y.shouldStop&&x<v;x++){const _=c?c[x]:x,A=u[_],b=d[_],L=e,N=n;l.copy(h[A[0]]),L.vmult(l,l),l.vadd(N,l),l.vsub(m,l),L.vmult(b,o);const w=f.dot(o);if(Math.abs(w)<this.precision)continue;const M=o.dot(l)/w;if(!(M<0)){f.scale(M,rn),rn.vadd(m,rn),xn.copy(h[A[0]]),L.vmult(xn,xn),N.vadd(xn,xn);for(let T=1;!y.shouldStop&&T<A.length-1;T++){bn.copy(h[A[T]]),Rn.copy(h[A[T+1]]),L.vmult(bn,bn),L.vmult(Rn,Rn),N.vadd(bn,bn),N.vadd(Rn,Rn);const F=rn.distanceTo(m);!($e.pointInTriangle(rn,xn,bn,Rn)||$e.pointInTriangle(rn,bn,xn,Rn))||F>p||this.reportIntersection(o,rn,s,i,_)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=ly,l=py,c=my,u=xc,h=cy,d=hy,f=uy,m=fy,g=dy,p=t.indices;t.vertices;const v=this.from,y=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),Ze.vectorToLocalFrame(n,e,x,h),Ze.pointToLocalFrame(n,e,v,d),Ze.pointToLocalFrame(n,e,y,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,h),h.normalize();const _=d.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let A=0,b=l.length;!this.result.shouldStop&&A!==b;A++){const L=l[A];t.getNormal(L,o),t.getVertex(p[L*3],xn),xn.vsub(d,u);const N=h.dot(o),w=o.dot(u)/N;if(w<0)continue;h.scale(w,rn),rn.vadd(d,rn),t.getVertex(p[L*3+1],bn),t.getVertex(p[L*3+2],Rn);const M=rn.distanceSquared(d);!($e.pointInTriangle(rn,bn,xn,Rn)||$e.pointInTriangle(rn,xn,bn,Rn))||M>_||(Ze.vectorToWorldFrame(e,o,g),Ze.pointToWorldFrame(n,e,rn,m),this.reportIntersection(g,m,s,i,L))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case $e.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case $e.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l));break;case $e.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ai),n.vsub(e,Ss),t.vsub(e,Po);const s=Ai.dot(Ai),r=Ai.dot(Ss),o=Ai.dot(Po),l=Ss.dot(Ss),c=Ss.dot(Po);let u,h;return(u=l*o-r*c)>=0&&(h=s*c-r*o)>=0&&u+h<s*l-r*r}}$e.CLOSEST=ma.CLOSEST;$e.ANY=ma.ANY;$e.ALL=ma.ALL;const gc=new dn,Co=[],Ss=new R,Po=new R,ey=new R,ny=new Ue,rn=new R,xn=new R,bn=new R,Rn=new R;new R;new Go;const yc={faceList:[0]},gr=new R,iy=new $e,sy=[],ry=new R,oy=new R,ay=new R;new R;new R;const xc=new R,ly=new R,cy=new R,hy=new R,uy=new R,dy=new R,fy=new R;new dn;const py=[],my=new Ze,Ai=new R,yr=new R;function vy(a,t,e){e.vsub(a,Ai);const n=Ai.dot(t);return t.scale(n,yr),yr.vadd(a,yr),e.distanceTo(yr)}new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new $e;new R;new R;new R;new R(1,0,0),new R(0,1,0),new R(0,0,1);new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new dn;new R;new dn;new R;new R;new R;new R;new R;new R;new R;new dn;new R;new Ze;new dn;qt.types.SPHERE,qt.types.SPHERE|qt.types.PLANE,qt.types.BOX|qt.types.BOX,qt.types.SPHERE|qt.types.BOX,qt.types.PLANE|qt.types.BOX,qt.types.CONVEXPOLYHEDRON,qt.types.SPHERE|qt.types.CONVEXPOLYHEDRON,qt.types.PLANE|qt.types.CONVEXPOLYHEDRON,qt.types.BOX|qt.types.CONVEXPOLYHEDRON,qt.types.SPHERE|qt.types.HEIGHTFIELD,qt.types.BOX|qt.types.HEIGHTFIELD,qt.types.CONVEXPOLYHEDRON|qt.types.HEIGHTFIELD,qt.types.PARTICLE|qt.types.SPHERE,qt.types.PLANE|qt.types.PARTICLE,qt.types.BOX|qt.types.PARTICLE,qt.types.PARTICLE|qt.types.CONVEXPOLYHEDRON,qt.types.CYLINDER,qt.types.SPHERE|qt.types.CYLINDER,qt.types.PLANE|qt.types.CYLINDER,qt.types.BOX|qt.types.CYLINDER,qt.types.CONVEXPOLYHEDRON|qt.types.CYLINDER,qt.types.HEIGHTFIELD|qt.types.CYLINDER,qt.types.PARTICLE|qt.types.CYLINDER,qt.types.SPHERE|qt.types.TRIMESH,qt.types.PLANE|qt.types.TRIMESH;new R;new R;new R;new R;new R;new Ue;new Ue;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new dn;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R,new R,new R,new R,new R,new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new R;new Ue;new R;new R;new R;new R;new R;new R;new R;new R;new R;new dn;new $e;const Es=globalThis.performance||{};if(!Es.now){let a=Date.now();Es.timing&&Es.timing.navigationStart&&(a=Es.timing.navigationStart),Es.now=()=>Date.now()-a}new R;function Fn(a,t,e,n,i){const r=new la().load("./textures/pin.png"),o=new ai,l=new Vo({color:16777215}),c=new Vo({map:r}),u=new We(new Rr(.2,.1,.55,32),l),h=new We(new Rr(.15,.2,.25,32),c),d=new We(new oa(.1,.1,5,10),l);h.position.y=.7,d.position.y=.95,u.position.y=.3,o.add(u),o.add(h),o.add(d),o.castShadow=!0,o.receiveShadow=!0,o.scale.set(7,7,7),o.position.set(a,t,e-25),n.add(o);const f=new Br(new R(.1,.275,.1)),m=new ie({mass:1,shape:f});return m.position.set(a,t,e),i.addBody(m),m.userData||(m.userData={}),o.userData.physicsBody=m,m.userData.isPin=!0,o}const ke=new Qv,gy=new zs(30,100),yy=new la,xy=yy.load("./textures/floor.png"),_y=new Vo({map:xy}),ds=new We(gy,_y);ds.rotation.x=-.5*Math.PI;ds.position.x=0;ds.position.y=0;ds.position.z=-10;ds.receiveShadow=!0;ke.add(ds);const My=new $g(50);ke.add(My);const hn=new Fs.World,wy=Fn(0,0,0,ke,hn);Fn(1.5,0,-1.5,ke,hn);Fn(-1.5,0,-1.5,ke,hn);Fn(3,0,-3,ke,hn);Fn(0,0,-3,ke,hn);Fn(-3,0,-3,ke,hn);Fn(4,0,-4.5,ke,hn);Fn(1.5,0,-4.5,ke,hn);Fn(-1.5,0,-4.5,ke,hn);Fn(-4,0,-4.5,ke,hn);const Sy=new Jg;let Ne;Sy.load("./model/ball/scene.gltf",function(a){Ne=a.scene,Ne.scale.set(10,10,10),Ne.position.set(0,2,20),ke.add(Ne);const t=new Fs.Sphere(1),e=new Fs.Body({mass:1,shape:t});e.position.set(0,2,20),hn.addBody(e),Ne.userData.physicsBody=e},function(a){console.log(a.loaded/a.total*100+"% loaded")},function(a){console.error(a)});const fs=new en(45,window.innerWidth/window.innerHeight,.1,1e3);fs.position.x=0;fs.position.y=30;fs.position.z=65;fs.lookAt(wy.position);ke.add(fs);let Cr=!1,Wo={x:0,y:0},Pr={x:0,y:0},Lr=!1;document.addEventListener("mousedown",Ey,!1);document.addEventListener("mouseup",Ay,!1);document.addEventListener("mousemove",Ty,!1);hn.addEventListener("postStep",function(){for(let a of hn.contacts)if(a.bi===Ne.userData.physicsBody||a.bj===Ne.userData.physicsBody){const t=a.bi===Ne.userData.physicsBody?a.bj:a.bi;t.userData.isPin&&t.applyLocalImpulse(new Fs.Vec3(0,-10,0),new Fs.Vec3)}});function Ey(a){Cr=!0,Wo={x:a.clientX,y:a.clientY},Pr={x:0,y:0},Lr=!1,Ne&&Ne.velocity&&Ne.velocity.set(0,0,0)}function Ay(a){if(Cr){Cr=!1;const t={x:Pr.x*.01,y:Pr.y*.01};Ne&&(Ne.velocity=new Y(-t.x,0,-t.y),Lr=!0)}}function Ty(a){Cr&&(Pr={x:a.clientX-Wo.x,y:a.clientY-Wo.y})}function by(){Lr&&Ne&&Ne.velocity&&(Ne.position.x+=Ne.velocity.x,Ne.position.z+=Ne.velocity.z,Ne.velocity.multiplyScalar(.99),Ne.velocity.lengthSq()<.001&&(Ne.velocity=null,Lr=!1))}const Ry=new Vg(16777215,.5);ke.add(Ry);const va=new ha(16777215,1e4);va.position.set(10,30,90);va.castShadow=!0;ke.add(va);const ga=new ha(16777215,1e4);ga.position.set(-10,30,90);ga.castShadow=!0;ke.add(ga);const ps=new Jv({antialias:!0});ps.setClearColor(new Qt(16777215));ps.setPixelRatio(window.devicePixelRatio);ps.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(ps.domElement);ps.shadowMap.enabled=!0;function xh(){requestAnimationFrame(xh),by(),ps.render(ke,fs)}xh();
