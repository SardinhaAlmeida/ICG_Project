(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function As(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Gl={exports:{}};(function(o,t){(function(e){o.exports=e()})(function(){return function e(n,i,s){function r(h,u){if(!i[h]){if(!n[h]){var c=typeof As=="function"&&As;if(!u&&c)return c(h,!0);if(a)return a(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var g=n[h][1][f];return r(g||f)},d,d.exports,e,n,i,s)}return i[h].exports}for(var a=typeof As=="function"&&As,l=0;l<s.length;l++)r(s[l]);return r}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var s=e("../math/Vec3");e("../utils/Utils"),n.exports=r;function r(h){h=h||{},this.lowerBound=new s,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new s,h.upperBound&&this.upperBound.copy(h.upperBound)}var a=new s;r.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,g=this.upperBound,v=c;f.copy(h[0]),v&&v.vmult(f,f),g.copy(f);for(var m=1;m<h.length;m++){var p=h[m];v&&(v.vmult(p,a),p=a),p.x>g.x&&(g.x=p.x),p.x<f.x&&(f.x=p.x),p.y>g.y&&(g.y=p.y),p.y<f.y&&(f.y=p.y),p.z>g.z&&(g.z=p.z),p.z<f.z&&(f.z=p.z)}return u&&(u.vadd(f,f),u.vadd(g,g)),d&&(f.x-=d,f.y-=d,f.z-=d,g.x+=d,g.y+=d,g.z+=d),this},r.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},r.prototype.clone=function(){return new r().copy(this)},r.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},r.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},r.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},r.prototype.getCorners=function(h,u,c,d,f,g,v,m){var p=this.lowerBound,_=this.upperBound;h.copy(p),u.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),g.set(p.x,_.y,p.z),v.set(p.x,p.y,_.z),m.copy(_)};var l=[new s,new s,new s,new s,new s,new s,new s,new s];r.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],g=c[2],v=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,g,v,m,p,_,y);for(var x=0;x!==8;x++){var w=c[x];h.pointToLocal(w,w)}return u.setFromPoints(c)},r.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],g=c[2],v=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,g,v,m,p,_,y);for(var x=0;x!==8;x++){var w=c[x];h.pointToWorld(w,w)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=s;function s(){this.matrix=[]}s.prototype.get=function(r,a){if(r=r.index,a=a.index,a>r){var l=a;a=r,r=l}return this.matrix[(r*(r+1)>>1)+a-1]},s.prototype.set=function(r,a,l){if(r=r.index,a=a.index,a>r){var h=a;a=r,r=h}this.matrix[(r*(r+1)>>1)+a-1]=l?1:0},s.prototype.reset=function(){for(var r=0,a=this.matrix.length;r!==a;r++)this.matrix[r]=0},s.prototype.setNumObjects=function(r){this.matrix.length=r*(r-1)>>1}},{}],5:[function(e,n,i){var s=e("../objects/Body"),r=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(v,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=s.STATIC|s.KINEMATIC;l.prototype.needBroadphaseCollision=function(v,m){return!(!(v.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&v.collisionFilterMask)||(v.type&h||v.sleepState===s.SLEEPING)&&(m.type&h||m.sleepState===s.SLEEPING))},l.prototype.intersectionTest=function(v,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(v,m,p,_):this.doBoundingSphereBroadphase(v,m,p,_)};var u=new r;new r,new a,new r,l.prototype.doBoundingSphereBroadphase=function(v,m,p,_){var y=u;m.position.vsub(v.position,y);var x=Math.pow(v.boundingRadius+m.boundingRadius,2),w=y.norm2();w<x&&(p.push(v),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(v,m,p,_){v.aabbNeedsUpdate&&v.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),v.aabb.overlaps(m.aabb)&&(p.push(v),_.push(m))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(v,m){for(var p=c,_=d,y=f,x=v.length,w=0;w!==x;w++)_[w]=v[w],y[w]=m[w];v.length=0,m.length=0;for(var w=0;w!==x;w++){var T=_[w].id,I=y[w].id,D=T<I?T+","+I:I+","+T;p[D]=w,p.keys.push(D)}for(var w=0;w!==p.keys.length;w++){var D=p.keys.pop(),E=p[D];v.push(_[E]),m.push(y[E]),delete p[D]}},l.prototype.setWorld=function(v){};var g=new r;l.boundingSphereCheck=function(v,m){var p=g;return v.position.vsub(m.position,p),Math.pow(v.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(v,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=l;var s=e("./Broadphase"),r=e("../math/Vec3"),a=e("../shapes/Shape");function l(u,c,d,f,g){s.apply(this),this.nx=d||10,this.ny=f||10,this.nz=g||10,this.aabbMin=u||new r(100,100,100),this.aabbMax=c||new r(-100,-100,-100);var v=this.nx*this.ny*this.nz;if(v<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=v,this.binLengths.length=v;for(var m=0;m<v;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new s,l.prototype.constructor=l;var h=new r;new r,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),g=u.bodies,J=this.aabbMax,G=this.aabbMin,v=this.nx,m=this.ny,p=this.nz,_=m*p,y=p,x=1,w=J.x,T=J.y,I=J.z,D=G.x,E=G.y,M=G.z,C=v/(w-D),F=m/(T-E),L=p/(I-M),W=(w-D)/v,X=(T-E)/m,ot=(I-M)/p,H=Math.sqrt(W*W+X*X+ot*ot)*.5,N=a.types,K=N.SPHERE,Y=N.PLANE;N.BOX,N.COMPOUND,N.CONVEXPOLYHEDRON;for(var z=this.bins,tt=this.binLengths,k=this.bins.length,R=0;R!==k;R++)tt[R]=0;var P=Math.ceil,G=Math.min,J=Math.max;function nt(Vt,Ht,Qt,Zt,ee,ie,se){var Gt=(Vt-D)*C|0,S=(Ht-E)*F|0,it=(Qt-M)*L|0,dt=P((Zt-D)*C),bt=P((ee-E)*F),Nt=P((ie-M)*L);Gt<0?Gt=0:Gt>=v&&(Gt=v-1),S<0?S=0:S>=m&&(S=m-1),it<0?it=0:it>=p&&(it=p-1),dt<0?dt=0:dt>=v&&(dt=v-1),bt<0?bt=0:bt>=m&&(bt=m-1),Nt<0?Nt=0:Nt>=p&&(Nt=p-1),Gt*=_,S*=y,it*=x,dt*=_,bt*=y,Nt*=x;for(var ne=Gt;ne<=dt;ne+=_)for(var te=S;te<=bt;te+=y)for(var fe=it;fe<=Nt;fe+=x){var Ee=ne+te+fe;z[Ee][tt[Ee]++]=se}}for(var R=0;R!==f;R++){var j=g[R],at=j.shape;switch(at.type){case K:var B=j.position.x,xt=j.position.y,pt=j.position.z,Mt=at.radius;nt(B-Mt,xt-Mt,pt-Mt,B+Mt,xt+Mt,pt+Mt,j);break;case Y:at.worldNormalNeedsUpdate&&at.computeWorldNormal(j.quaternion);var st=at.worldNormal,ft=D+W*.5-j.position.x,U=E+X*.5-j.position.y,b=M+ot*.5-j.position.z,et=h;et.set(ft,U,b);for(var Q=0,ct=0;Q!==v;Q++,ct+=_,et.y=U,et.x+=W)for(var ut=0,Lt=0;ut!==m;ut++,Lt+=y,et.z=b,et.y+=X)for(var mt=0,At=0;mt!==p;mt++,At+=x,et.z+=ot)if(et.dot(st)<H){var Bt=ct+Lt+At;z[Bt][tt[Bt]++]=j}break;default:j.aabbNeedsUpdate&&j.computeAABB(),nt(j.aabb.lowerBound.x,j.aabb.lowerBound.y,j.aabb.lowerBound.z,j.aabb.upperBound.x,j.aabb.upperBound.y,j.aabb.upperBound.z,j);break}}for(var R=0;R!==k;R++){var vt=tt[R];if(vt>1)for(var Rt=z[R],Q=0;Q!==vt;Q++)for(var j=Rt[Q],ut=0;ut!==Q;ut++){var Wt=Rt[ut];this.needBroadphaseCollision(j,Wt)&&this.intersectionTest(j,Wt,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=a;var s=e("./Broadphase"),r=e("./AABB");function a(){s.apply(this)}a.prototype=new s,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,g,v,m;for(f=0;f!==d;f++)for(g=0;g!==f;g++)v=c[f],m=c[g],this.needBroadphaseCollision(v,m)&&this.intersectionTest(v,m,h,u)},new r,a.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=s;function s(){this.matrix={}}s.prototype.get=function(r,a){if(r=r.id,a=a.id,a>r){var l=a;a=r,r=l}return r+"-"+a in this.matrix},s.prototype.set=function(r,a,l){if(r=r.id,a=a.id,a>r){var h=a;a=r,r=h}l?this.matrix[r+"-"+a]=!0:delete this.matrix[r+"-"+a]},s.prototype.reset=function(){this.matrix={}},s.prototype.setNumObjects=function(r){}},{}],9:[function(e,n,i){n.exports=c;var s=e("../math/Vec3"),r=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),h=e("../shapes/Shape"),u=e("../collision/AABB");function c(k,R){this.from=k?k.clone():new s,this.to=R?R.clone():new s,this._direction=new s,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(P){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(k,R){return this.mode=R.mode||c.ANY,this.result=R.result||new l,this.skipBackfaces=!!R.skipBackfaces,this.collisionFilterMask=typeof R.collisionFilterMask<"u"?R.collisionFilterMask:-1,this.collisionFilterGroup=typeof R.collisionFilterGroup<"u"?R.collisionFilterGroup:-1,R.from&&this.from.copy(R.from),R.to&&this.to.copy(R.to),this.callback=R.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,k.broadphase.aabbQuery(k,d,f),this.intersectBodies(f),this.hasHit};var g=new s,v=new s;c.pointInTriangle=m;function m(k,R,P,G){G.vsub(R,Y),P.vsub(R,g),k.vsub(R,v);var J=Y.dot(Y),nt=Y.dot(g),j=Y.dot(v),at=g.dot(g),B=g.dot(v),xt,pt;return(xt=at*j-nt*B)>=0&&(pt=J*B-nt*j)>=0&&xt+pt<J*at-nt*nt}var p=new s,_=new r;c.prototype.intersectBody=function(k,R){R&&(this.result=R,this._updateDirection());var P=this.checkCollisionResponse;if(!(P&&!k.collisionResponse)&&!(!(this.collisionFilterGroup&k.collisionFilterMask)||!(k.collisionFilterGroup&this.collisionFilterMask)))for(var G=p,J=_,nt=0,j=k.shapes.length;nt<j;nt++){var at=k.shapes[nt];if(!(P&&!at.collisionResponse)&&(k.quaternion.mult(k.shapeOrientations[nt],J),k.quaternion.vmult(k.shapeOffsets[nt],G),G.vadd(k.position,G),this.intersectShape(at,J,G,k),this.result._shouldStop))break}},c.prototype.intersectBodies=function(k,R){R&&(this.result=R,this._updateDirection());for(var P=0,G=k.length;!this.result._shouldStop&&P<G;P++)this.intersectBody(k[P])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(k,R,P,G){var J=this.from,nt=tt(J,this._direction,P);if(!(nt>k.boundingSphereRadius)){var j=this[k.type];j&&j.call(this,k,R,P,G)}},new s,new s;var y=new s,x=new s,w=new s,T=new s;new s,new l,c.prototype.intersectBox=function(k,R,P,G){return this.intersectConvex(k.convexPolyhedronRepresentation,R,P,G)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(k,R,P,G){var J=this.from,nt=this.to,j=this._direction,at=new s(0,0,1);R.vmult(at,at);var B=new s;J.vsub(P,B);var xt=B.dot(at);nt.vsub(P,B);var pt=B.dot(at);if(!(xt*pt>0)&&!(J.distanceTo(nt)<xt)){var Mt=at.dot(j);if(!(Math.abs(Mt)<this.precision)){var st=new s,ft=new s,U=new s;J.vsub(P,st);var b=-at.dot(st)/Mt;j.scale(b,ft),J.vadd(ft,U),this.reportIntersection(at,U,k,G,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(k){var R=this.to,P=this.from;k.lowerBound.x=Math.min(R.x,P.x),k.lowerBound.y=Math.min(R.y,P.y),k.lowerBound.z=Math.min(R.z,P.z),k.upperBound.x=Math.max(R.x,P.x),k.upperBound.y=Math.max(R.y,P.y),k.upperBound.z=Math.max(R.z,P.z)};var I={faceList:[0]};c.prototype.intersectHeightfield=function(k,R,P,G){k.data,k.elementSize;var J=new s,nt=new c(this.from,this.to);a.pointToLocalFrame(P,R,nt.from,nt.from),a.pointToLocalFrame(P,R,nt.to,nt.to);var j=[],at=null,B=null,xt=null,pt=null,Mt=k.getIndexOfPosition(nt.from.x,nt.from.y,j,!1);if(Mt&&(at=j[0],B=j[1],xt=j[0],pt=j[1]),Mt=k.getIndexOfPosition(nt.to.x,nt.to.y,j,!1),Mt&&((at===null||j[0]<at)&&(at=j[0]),(xt===null||j[0]>xt)&&(xt=j[0]),(B===null||j[1]<B)&&(B=j[1]),(pt===null||j[1]>pt)&&(pt=j[1])),at!==null){var st=[];k.getRectMinMax(at,B,xt,pt,st),st[0],st[1];for(var ft=at;ft<=xt;ft++)for(var U=B;U<=pt;U++){if(this.result._shouldStop||(k.getConvexTrianglePillar(ft,U,!1),a.pointToWorldFrame(P,R,k.pillarOffset,J),this.intersectConvex(k.pillarConvex,R,J,G,I),this.result._shouldStop))return;k.getConvexTrianglePillar(ft,U,!0),a.pointToWorldFrame(P,R,k.pillarOffset,J),this.intersectConvex(k.pillarConvex,R,J,G,I)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var D=new s,E=new s;c.prototype.intersectSphere=function(k,R,P,G){var J=this.from,nt=this.to,j=k.radius,at=Math.pow(nt.x-J.x,2)+Math.pow(nt.y-J.y,2)+Math.pow(nt.z-J.z,2),B=2*((nt.x-J.x)*(J.x-P.x)+(nt.y-J.y)*(J.y-P.y)+(nt.z-J.z)*(J.z-P.z)),xt=Math.pow(J.x-P.x,2)+Math.pow(J.y-P.y,2)+Math.pow(J.z-P.z,2)-Math.pow(j,2),pt=Math.pow(B,2)-4*at*xt,Mt=D,st=E;if(!(pt<0))if(pt===0)J.lerp(nt,pt,Mt),Mt.vsub(P,st),st.normalize(),this.reportIntersection(st,Mt,k,G,-1);else{var ft=(-B-Math.sqrt(pt))/(2*at),U=(-B+Math.sqrt(pt))/(2*at);if(ft>=0&&ft<=1&&(J.lerp(nt,ft,Mt),Mt.vsub(P,st),st.normalize(),this.reportIntersection(st,Mt,k,G,-1)),this.result._shouldStop)return;U>=0&&U<=1&&(J.lerp(nt,U,Mt),Mt.vsub(P,st),st.normalize(),this.reportIntersection(st,Mt,k,G,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var M=new s;new s,new s;var C=new s;c.prototype.intersectConvex=function(R,P,G,J,nt){for(var j=M,at=C,B=nt&&nt.faceList||null,xt=R.faces,pt=R.vertices,Mt=R.faceNormals,st=this._direction,ft=this.from,U=this.to,b=ft.distanceTo(U),et=B?B.length:xt.length,Q=this.result,ct=0;!Q._shouldStop&&ct<et;ct++){var ut=B?B[ct]:ct,Lt=xt[ut],mt=Mt[ut],At=P,Bt=G;at.copy(pt[Lt[0]]),At.vmult(at,at),at.vadd(Bt,at),at.vsub(ft,at),At.vmult(mt,j);var vt=st.dot(j);if(!(Math.abs(vt)<this.precision)){var Rt=j.dot(at)/vt;if(!(Rt<0)){st.mult(Rt,y),y.vadd(ft,y),x.copy(pt[Lt[0]]),At.vmult(x,x),Bt.vadd(x,x);for(var Wt=1;!Q._shouldStop&&Wt<Lt.length-1;Wt++){w.copy(pt[Lt[Wt]]),T.copy(pt[Lt[Wt+1]]),At.vmult(w,w),At.vmult(T,T),Bt.vadd(w,w),Bt.vadd(T,T);var Vt=y.distanceTo(ft);!(m(y,x,w,T)||m(y,w,x,T))||Vt>b||this.reportIntersection(j,y,R,J,ut)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var F=new s,L=new s,W=new s,X=new s,ot=new s,H=new s;new u;var N=[],K=new a;c.prototype.intersectTrimesh=function(R,P,G,J,nt){var j=F,at=N,B=K,xt=C,pt=L,Mt=W,st=X,ft=H,U=ot;nt&&nt.faceList;var b=R.indices;R.vertices,R.faceNormals;var et=this.from,Q=this.to,ct=this._direction;B.position.copy(G),B.quaternion.copy(P),a.vectorToLocalFrame(G,P,ct,pt),a.pointToLocalFrame(G,P,et,Mt),a.pointToLocalFrame(G,P,Q,st);var ut=Mt.distanceSquared(st);R.tree.rayQuery(this,B,at);for(var Lt=0,mt=at.length;!this.result._shouldStop&&Lt!==mt;Lt++){var At=at[Lt];R.getNormal(At,j),R.getVertex(b[At*3],x),x.vsub(Mt,xt);var Bt=pt.dot(j),vt=j.dot(xt)/Bt;if(!(vt<0)){pt.scale(vt,y),y.vadd(Mt,y),R.getVertex(b[At*3+1],w),R.getVertex(b[At*3+2],T);var Rt=y.distanceSquared(Mt);!(m(y,w,x,T)||m(y,x,w,T))||Rt>ut||(a.vectorToWorldFrame(P,j,U),a.pointToWorldFrame(G,P,y,ft),this.reportIntersection(U,ft,R,J,At))}}at.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(k,R,P,G,J){var nt=this.from,j=this.to,at=nt.distanceTo(R),B=this.result;if(!(this.skipBackfaces&&k.dot(this._direction)>0))switch(B.hitFaceIndex=typeof J<"u"?J:-1,this.mode){case c.ALL:this.hasHit=!0,B.set(nt,j,k,R,P,G,at),B.hasHit=!0,this.callback(B);break;case c.CLOSEST:(at<B.distance||!B.hasHit)&&(this.hasHit=!0,B.hasHit=!0,B.set(nt,j,k,R,P,G,at));break;case c.ANY:this.hasHit=!0,B.hasHit=!0,B.set(nt,j,k,R,P,G,at),B._shouldStop=!0;break}};var Y=new s,z=new s;function tt(k,R,P){P.vsub(k,Y);var G=Y.dot(R);R.mult(G,z),z.vadd(k,z);var J=P.distanceTo(z);return J}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var s=e("../math/Vec3");n.exports=r;function r(){this.rayFromWorld=new s,this.rayToWorld=new s,this.hitNormalWorld=new s,this.hitPointWorld=new s,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}r.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},r.prototype.abort=function(){this._shouldStop=!0},r.prototype.set=function(a,l,h,u,c,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var s=e("../collision/Broadphase");n.exports=r;function r(a){s.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},a&&this.setWorld(a)}r.prototype=new s,r.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},r.insertionSortX=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=u}return a},r.insertionSortY=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=u}return a},r.insertionSortZ=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=u}return a},r.prototype.collisionPairs=function(a,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,g;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var v=u[f];for(g=f+1;g<c;g++){var m=u[g];if(this.needBroadphaseCollision(v,m)){if(!r.checkBounds(v,m,d))break;this.intersectionTest(v,m,l,h)}}}},r.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,h=a.length,u=0;u!==h;u++){var c=a[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?r.insertionSortX(a):l===1?r.insertionSortY(a):l===2&&r.insertionSortZ(a)},r.checkBounds=function(a,l,h){var u,c;h===0?(u=a.position.x,c=l.position.x):h===1?(u=a.position.y,c=l.position.y):h===2&&(u=a.position.z,c=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,g=u+d,v=c-f;return v<g},r.prototype.autoDetectAxis=function(){for(var a=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,g=f.length,v=1/g,m=0;m!==g;m++){var p=f[m],_=p.position.x;a+=_,l+=_*_;var y=p.position.y;h+=y,u+=y*y;var x=p.position.z;c+=x,d+=x*x}var w=l-a*a*v,T=u-h*h*v,I=d-c*c*v;w>T?w>I?this.axisIndex=0:this.axisIndex=2:T>I?this.axisIndex=1:this.axisIndex=2},r.prototype.aabbQuery=function(a,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var g=d[f];g.aabbNeedsUpdate&&g.computeAABB(),g.aabb.overlaps(l)&&h.push(g)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=h,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,g=d.pivotA?d.pivotA.clone():new l,v=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,s.call(this,u,g,c,v,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new r(u,c,d),p=this.twistEquation=new a(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}h.prototype=new s,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;s.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=r;var s=e("../utils/Utils");function r(a,l,h){h=s.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=r.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}r.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},r.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},r.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},r.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=a;var s=e("./Constraint"),r=e("../equations/ContactEquation");function a(l,h,u,c){s.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new r(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new s,a.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=h,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(d,f,g){g=g||{};var v=typeof g.maxForce<"u"?g.maxForce:1e6,m=g.pivotA?g.pivotA.clone():new l,p=g.pivotB?g.pivotB.clone():new l;s.call(this,d,m,f,p,v);var _=this.axisA=g.axisA?g.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=g.axisB?g.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new r(d,f,g),w=this.rotationalEquation2=new r(d,f,g),T=this.motorEquation=new a(d,f,v);T.enabled=!1,this.equations.push(x,w,T)}h.prototype=new s,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,g=this.motorEquation,v=this.rotationalEquation1,m=this.rotationalEquation2,p=u,_=c,y=this.axisA,x=this.axisB;s.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(x,_),p.tangents(v.axisA,m.axisA),v.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,g.axisA),f.quaternion.vmult(this.axisB,g.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=l,e("./Constraint");var s=e("./PointToPointConstraint"),r=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new a,g=new a,v=new a;h.position.vadd(u.position,v),v.scale(.5,v),u.pointToLocalFrame(v,g),h.pointToLocalFrame(v,f),s.call(this,h,f,u,g,d);var m=this.rotationalEquation1=new r(h,u,c),p=this.rotationalEquation2=new r(h,u,c),_=this.rotationalEquation3=new r(h,u,c);this.equations.push(m,p,_)}l.prototype=new s,l.constructor=l,new a,new a,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;s.prototype.update.call(this),h.vectorToWorldFrame(a.UNIT_X,c.axisA),u.vectorToWorldFrame(a.UNIT_Y,c.axisB),h.vectorToWorldFrame(a.UNIT_Y,d.axisA),u.vectorToWorldFrame(a.UNIT_Z,d.axisB),h.vectorToWorldFrame(a.UNIT_Z,f.axisA),u.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=l;var s=e("./Constraint"),r=e("../equations/ContactEquation"),a=e("../math/Vec3");function l(h,u,c,d,f){s.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new a,this.pivotB=d?d.clone():new a;var g=this.equationX=new r(h,c),v=this.equationY=new r(h,c),m=this.equationZ=new r(h,c);this.equations.push(g,v,m),g.minForce=v.minForce=m.minForce=-f,g.maxForce=v.maxForce=m.maxForce=f,g.ni.set(1,0,0),v.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new s,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,g=this.axisB,v=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(g,v),g.cross(f,m),p.rotational.copy(m),_.rotational.copy(v);var y=Math.cos(this.angle)-f.dot(g),x=this.computeGW(),w=this.computeGiMf(),T=-y*c-x*d-u*w;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=a;var s=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function a(m,p,_){_=typeof _<"u"?_:1e6,s.call(this,m,p,0,_),this.restitution=0,this.ri=new r,this.rj=new r,this.ni=new r}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r,u=new r;a.prototype.computeB=function(m){var p=this.a,_=this.b,y=this.bi,x=this.bj,w=this.ri,T=this.rj,I=l,D=h,E=y.velocity,M=y.angularVelocity;y.force,y.torque;var C=x.velocity,F=x.angularVelocity;x.force,x.torque;var L=u,W=this.jacobianElementA,X=this.jacobianElementB,ot=this.ni;w.cross(ot,I),T.cross(ot,D),ot.negate(W.spatial),I.negate(W.rotational),X.spatial.copy(ot),X.rotational.copy(D),L.copy(x.position),L.vadd(T,L),L.vsub(y.position,L),L.vsub(w,L);var H=ot.dot(L),N=this.restitution+1,K=N*C.dot(ot)-N*E.dot(ot)+F.dot(D)-M.dot(I),Y=this.computeGiMf(),z=-H*p-K*_-m*Y;return z};var c=new r,d=new r,f=new r,g=new r,v=new r;a.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=d,_=f,y=g,x=v;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=a;var s=e("../math/JacobianElement"),r=e("../math/Vec3");function a(v,m,p,_){this.id=a.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=v,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s,this.jacobianElementB=new s,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(v,m,p){var _=m,y=v,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},a.prototype.computeB=function(v,m,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*v-_*m-x*p},a.prototype.computeGq=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return v.spatial.dot(y)+m.spatial.dot(x)};var l=new r;a.prototype.computeGW=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,w=p.angularVelocity||l,T=_.angularVelocity||l;return v.multiplyVectors(y,w)+m.multiplyVectors(x,T)},a.prototype.computeGWlambda=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,w=p.wlambda||l,T=_.wlambda||l;return v.multiplyVectors(y,w)+m.multiplyVectors(x,T)};var h=new r,u=new r,c=new r,d=new r;a.prototype.computeGiMf=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,w=_.force,T=_.torque,I=p.invMassSolve,D=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(T,d):d.set(0,0,0),y.mult(I,h),w.mult(D,u),v.multiplyVectors(h,c)+m.multiplyVectors(u,d)};var f=new r;a.prototype.computeGiMGt=function(){var v=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,w=p.invInertiaWorldSolve,T=_.invInertiaWorldSolve,I=y+x;return w&&(w.vmult(v.rotational,f),I+=f.dot(v.rotational)),T&&(T.vmult(m.rotational,f),I+=f.dot(m.rotational)),I};var g=new r;new r,new r,new r,new r,new r,a.prototype.addToWlambda=function(v){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=g;m.spatial.mult(_.invMassSolve*v,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*v,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(v,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(v,x),y.wlambda.vadd(x,y.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=a;var s=e("./Equation"),r=e("../math/Vec3");e("../math/Mat3");function a(u,c,d){s.call(this,u,c,-d,d),this.ri=new r,this.rj=new r,this.t=new r}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,g=l,v=h,m=this.t;d.cross(m,g),f.cross(m,v);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),g.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(v);var y=this.computeGW(),x=this.computeGiMf(),w=-y*c-u*x;return w}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;r.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new s(1,0,0),this.axisB=d.axisB?d.axisB.clone():new s(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,g=this.axisB,v=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(g,v),g.cross(f,m),p.rotational.copy(m),_.rotational.copy(v);var y=Math.cos(this.maxAngle)-f.dot(g),x=this.computeGW(),w=this.computeGiMf(),T=-y*c-x*d-u*w;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=a;var s=e("../math/Vec3");e("../math/Mat3");var r=e("./Equation");function a(l,h,u){u=typeof u<"u"?u:1e6,r.call(this,l,h,-u,u),this.axisA=new s,this.axisB=new s,this.targetVelocity=0}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var g=this.computeGW()-this.targetVelocity,v=this.computeGiMf(),m=-g*h-l*v;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var s=e("../utils/Utils");n.exports=r;function r(a,l,h){h=s.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[a,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}r.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=s;function s(r){var a="";r=r||{},typeof r=="string"?(a=r,r={}):typeof r=="object"&&(a=""),this.name=a,this.id=s.idCounter++,this.friction=typeof r.friction<"u"?r.friction:-1,this.restitution=typeof r.restitution<"u"?r.restitution:-1}s.idCounter=0},{}],26:[function(e,n,i){n.exports=r;var s=e("./Vec3");function r(){this.spatial=new s,this.rotational=new s}r.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},r.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=r;var s=e("./Vec3");function r(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}r.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},r.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},r.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},r.prototype.getTrace=function(l){var l=l||new s,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},r.prototype.vmult=function(a,l){l=l||new s;var h=this.elements,u=a.x,c=a.y,d=a.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},r.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},r.prototype.mmult=function(a,l){for(var h=l||new r,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=a.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},r.prototype.scale=function(a,l){l=l||new r;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=a.x*h[3*c+0],u[3*c+1]=a.y*h[3*c+1],u[3*c+2]=a.z*h[3*c+2];return l},r.prototype.solve=function(a,l){l=l||new s;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=a.x,c[3+4*1]=a.y,c[3+4*2]=a.z;var g=3,v=g,m,p=4,_;do{if(d=v-g,c[d+u*d]===0){for(f=d+1;f<v;f++)if(c[d+u*f]!==0){m=p;do _=p-m,c[_+u*d]+=c[_+u*f];while(--m);break}}if(c[d+u*d]!==0)for(f=d+1;f<v;f++){var y=c[d+u*f]/c[d+u*d];m=p;do _=p-m,c[_+u*f]=_<=d?0:c[_+u*f]-c[_+u*d]*y;while(--m)}}while(--g);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},r.prototype.e=function(a,l,h){if(h===void 0)return this.elements[l+3*a];this.elements[l+3*a]=h},r.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},r.prototype.toString=function(){for(var a="",l=",",h=0;h<9;h++)a+=this.elements[h]+l;return a},r.prototype.reverse=function(a){a=a||new r;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,g=f,v,m=h,p;do{if(c=g-f,u[c+h*c]===0){for(d=c+1;d<g;d++)if(u[c+h*d]!==0){v=m;do p=m-v,u[p+h*c]+=u[p+h*d];while(--v);break}}if(u[c+h*c]!==0)for(d=c+1;d<g;d++){var _=u[c+h*d]/u[c+h*c];v=m;do p=m-v,u[p+h*d]=p<=c?0:u[p+h*d]-u[p+h*c]*_;while(--v)}}while(--f);c=2;do{d=c-1;do{var _=u[c+h*d]/u[c+h*c];v=h;do p=h-v,u[p+h*d]=u[p+h*d]-u[p+h*c]*_;while(--v)}while(d--)}while(--c);c=2;do{var _=1/u[c+h*c];v=h;do p=h-v,u[p+h*c]=u[p+h*c]*_;while(--v)}while(c--);c=2;do{d=2;do{if(p=u[l+d+h*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,p)}while(d--)}while(c--);return a},r.prototype.setRotationFromQuaternion=function(a){var l=a.x,h=a.y,u=a.z,c=a.w,d=l+l,f=h+h,g=u+u,v=l*d,m=l*f,p=l*g,_=h*f,y=h*g,x=u*g,w=c*d,T=c*f,I=c*g,D=this.elements;return D[3*0+0]=1-(_+x),D[3*0+1]=m-I,D[3*0+2]=p+T,D[3*1+0]=m+I,D[3*1+1]=1-(v+x),D[3*1+2]=y-w,D[3*2+0]=p-T,D[3*2+1]=y+w,D[3*2+2]=1-(v+_),this},r.prototype.transpose=function(a){a=a||new r;for(var l=a.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return a}},{"./Vec3":30}],28:[function(e,n,i){n.exports=r;var s=e("./Vec3");function r(d,f,g,v){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=g!==void 0?g:0,this.w=v!==void 0?v:1}r.prototype.set=function(d,f,g,v){this.x=d,this.y=f,this.z=g,this.w=v},r.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},r.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},r.prototype.setFromAxisAngle=function(d,f){var g=Math.sin(f*.5);this.x=d.x*g,this.y=d.y*g,this.z=d.z*g,this.w=Math.cos(f*.5)},r.prototype.toAxisAngle=function(d){d=d||new s,this.normalize();var f=2*Math.acos(this.w),g=Math.sqrt(1-this.w*this.w);return g<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/g,d.y=this.y/g,d.z=this.z/g),[d,f]};var a=new s,l=new s;r.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var g=a,v=l;d.tangents(g,v),this.setFromAxisAngle(g,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new s,u=new s,c=new s;r.prototype.mult=function(d,f){f=f||new r;var g=this.w,v=h,m=u,p=c;return v.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=g*d.w-v.dot(m),v.cross(m,p),f.x=g*m.x+d.w*v.x+p.x,f.y=g*m.y+d.w*v.y+p.y,f.z=g*m.z+d.w*v.z+p.z,f},r.prototype.inverse=function(d){var f=this.x,g=this.y,v=this.z,m=this.w;d=d||new r,this.conjugate(d);var p=1/(f*f+g*g+v*v+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},r.prototype.conjugate=function(d){return d=d||new r,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},r.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},r.prototype.vmult=function(d,f){f=f||new s;var g=d.x,v=d.y,m=d.z,p=this.x,_=this.y,y=this.z,x=this.w,w=x*g+_*m-y*v,T=x*v+y*g-p*m,I=x*m+p*v-_*g,D=-p*g-_*v-y*m;return f.x=w*x+D*-p+T*-y-I*-_,f.y=T*x+D*-_+I*-p-w*-y,f.z=I*x+D*-y+w*-_-T*-p,f},r.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},r.prototype.toEuler=function(d,f){f=f||"YZX";var g,v,m,p=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var w=p*_+y*x;if(w>.499&&(g=2*Math.atan2(p,x),v=Math.PI/2,m=0),w<-.499&&(g=-2*Math.atan2(p,x),v=-Math.PI/2,m=0),isNaN(g)){var T=p*p,I=_*_,D=y*y;g=Math.atan2(2*_*x-2*p*y,1-2*I-2*D),v=Math.asin(2*w),m=Math.atan2(2*p*x-2*_*y,1-2*T-2*D)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=g,d.z=v,d.x=m},r.prototype.setFromEuler=function(d,f,g,v){v=v||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(g/2),y=Math.sin(d/2),x=Math.sin(f/2),w=Math.sin(g/2);return v==="XYZ"?(this.x=y*p*_+m*x*w,this.y=m*x*_-y*p*w,this.z=m*p*w+y*x*_,this.w=m*p*_-y*x*w):v==="YXZ"?(this.x=y*p*_+m*x*w,this.y=m*x*_-y*p*w,this.z=m*p*w-y*x*_,this.w=m*p*_+y*x*w):v==="ZXY"?(this.x=y*p*_-m*x*w,this.y=m*x*_+y*p*w,this.z=m*p*w+y*x*_,this.w=m*p*_-y*x*w):v==="ZYX"?(this.x=y*p*_-m*x*w,this.y=m*x*_+y*p*w,this.z=m*p*w-y*x*_,this.w=m*p*_+y*x*w):v==="YZX"?(this.x=y*p*_+m*x*w,this.y=m*x*_+y*p*w,this.z=m*p*w-y*x*_,this.w=m*p*_-y*x*w):v==="XZY"&&(this.x=y*p*_-m*x*w,this.y=m*x*_-y*p*w,this.z=m*p*w+y*x*_,this.w=m*p*_+y*x*w),this},r.prototype.clone=function(){return new r(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var s=e("./Vec3"),r=e("./Quaternion");n.exports=a;function a(h){h=h||{},this.position=new s,h.position&&this.position.copy(h.position),this.quaternion=new r,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new r;a.pointToLocalFrame=function(h,u,c,f){var f=f||new s;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(h,u){return a.pointToLocalFrame(this.position,this.quaternion,h,u)},a.pointToWorldFrame=function(h,u,c,f){var f=f||new s;return u.vmult(c,f),f.vadd(h,f),f},a.prototype.pointToWorld=function(h,u){return a.pointToWorldFrame(this.position,this.quaternion,h,u)},a.prototype.vectorToWorldFrame=function(h,c){var c=c||new s;return this.quaternion.vmult(h,c),c},a.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},a.vectorToLocalFrame=function(h,u,c,f){var f=f||new s;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=r;var s=e("./Mat3");function r(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}r.ZERO=new r(0,0,0),r.UNIT_X=new r(1,0,0),r.UNIT_Y=new r(0,1,0),r.UNIT_Z=new r(0,0,1),r.prototype.cross=function(u,c){var d=u.x,f=u.y,g=u.z,v=this.x,m=this.y,p=this.z;return c=c||new r,c.x=m*g-p*f,c.y=p*d-v*g,c.z=v*f-m*d,c},r.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},r.prototype.setZero=function(){this.x=this.y=this.z=0},r.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new r(this.x+u.x,this.y+u.y,this.z+u.z)},r.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new r(this.x-u.x,this.y-u.y,this.z-u.z)},r.prototype.crossmat=function(){return new s([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},r.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var g=1/f;this.x*=g,this.y*=g,this.z*=g}else this.x=0,this.y=0,this.z=0;return f},r.prototype.unit=function(u){u=u||new r;var c=this.x,d=this.y,f=this.z,g=Math.sqrt(c*c+d*d+f*f);return g>0?(g=1/g,u.x=c*g,u.y=d*g,u.z=f*g):(u.x=1,u.y=0,u.z=0),u},r.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},r.prototype.length=r.prototype.norm,r.prototype.norm2=function(){return this.dot(this)},r.prototype.lengthSquared=r.prototype.norm2,r.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,g=u.x,v=u.y,m=u.z;return Math.sqrt((g-c)*(g-c)+(v-d)*(v-d)+(m-f)*(m-f))},r.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,g=u.x,v=u.y,m=u.z;return(g-c)*(g-c)+(v-d)*(v-d)+(m-f)*(m-f)},r.prototype.mult=function(u,c){c=c||new r;var d=this.x,f=this.y,g=this.z;return c.x=u*d,c.y=u*f,c.z=u*g,c},r.prototype.scale=r.prototype.mult,r.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},r.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},r.prototype.negate=function(u){return u=u||new r,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var a=new r,l=new r;r.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=a,g=1/d;f.set(this.x*g,this.y*g,this.z*g);var v=l;Math.abs(f.x)<.9?(v.set(1,0,0),f.cross(v,u)):(v.set(0,1,0),f.cross(v,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},r.prototype.toString=function(){return this.x+","+this.y+","+this.z},r.prototype.toArray=function(){return[this.x,this.y,this.z]},r.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},r.prototype.lerp=function(u,c,d){var f=this.x,g=this.y,v=this.z;d.x=f+(u.x-f)*c,d.y=g+(u.y-g)*c,d.z=v+(u.z-v)*c},r.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},r.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new r;r.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},r.prototype.clone=function(){return new r(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=c;var s=e("../utils/EventTarget");e("../shapes/Shape");var r=e("../math/Vec3"),a=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),u=e("../shapes/Box");function c(C){C=C||{},s.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new r,this.collisionFilterGroup=typeof C.collisionFilterGroup=="number"?C.collisionFilterGroup:1,this.collisionFilterMask=typeof C.collisionFilterMask=="number"?C.collisionFilterMask:1,this.collisionResponse=!0,this.position=new r,C.position&&this.position.copy(C.position),this.previousPosition=new r,this.initPosition=new r,this.velocity=new r,C.velocity&&this.velocity.copy(C.velocity),this.initVelocity=new r,this.force=new r;var F=typeof C.mass=="number"?C.mass:0;this.mass=F,this.invMass=F>0?1/F:0,this.material=C.material||null,this.linearDamping=typeof C.linearDamping=="number"?C.linearDamping:.01,this.type=F<=0?c.STATIC:c.DYNAMIC,typeof C.type==typeof c.STATIC&&(this.type=C.type),this.allowSleep=typeof C.allowSleep<"u"?C.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof C.sleepSpeedLimit<"u"?C.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof C.sleepTimeLimit<"u"?C.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new r,this.quaternion=new l,C.quaternion&&this.quaternion.copy(C.quaternion),this.initQuaternion=new l,this.angularVelocity=new r,C.angularVelocity&&this.angularVelocity.copy(C.angularVelocity),this.initAngularVelocity=new r,this.interpolatedPosition=new r,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new r,this.invInertia=new r,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new r,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof C.fixedRotation<"u"?C.fixedRotation:!1,this.angularDamping=typeof C.angularDamping<"u"?C.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new r,C.shape&&this.addShape(C.shape),this.updateMassProperties()}c.prototype=new s,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var C=this.sleepState;this.sleepState=0,C===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(C){if(this.allowSleep){var F=this.sleepState,L=this.velocity.norm2()+this.angularVelocity.norm2(),W=Math.pow(this.sleepSpeedLimit,2);F===c.AWAKE&&L<W?(this.sleepState=c.SLEEPY,this.timeLastSleepy=C,this.dispatchEvent(c.sleepyEvent)):F===c.SLEEPY&&L>W?this.wakeUp():F===c.SLEEPY&&C-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(C,L){var L=L||new r;return C.vsub(this.position,L),this.quaternion.conjugate().vmult(L,L),L},c.prototype.vectorToLocalFrame=function(C,L){var L=L||new r;return this.quaternion.conjugate().vmult(C,L),L},c.prototype.pointToWorldFrame=function(C,L){var L=L||new r;return this.quaternion.vmult(C,L),L.vadd(this.position,L),L},c.prototype.vectorToWorldFrame=function(C,L){var L=L||new r;return this.quaternion.vmult(C,L),L};var d=new r,f=new l;c.prototype.addShape=function(C,F,L){var W=new r,X=new l;return F&&W.copy(F),L&&X.copy(L),this.shapes.push(C),this.shapeOffsets.push(W),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var C=this.shapes,F=this.shapeOffsets,L=C.length,W=0,X=0;X!==L;X++){var ot=C[X];ot.updateBoundingSphereRadius();var H=F[X].norm(),N=ot.boundingSphereRadius;H+N>W&&(W=H+N)}this.boundingRadius=W};var g=new h;c.prototype.computeAABB=function(){for(var C=this.shapes,F=this.shapeOffsets,L=this.shapeOrientations,W=C.length,X=d,ot=f,H=this.quaternion,N=this.aabb,K=g,Y=0;Y!==W;Y++){var z=C[Y];L[Y].mult(H,ot),ot.vmult(F[Y],X),X.vadd(this.position,X),z.calculateWorldAABB(X,ot,K.lowerBound,K.upperBound),Y===0?N.copy(K):N.extend(K)}this.aabbNeedsUpdate=!1};var v=new a,m=new a;new a,c.prototype.updateInertiaWorld=function(C){var F=this.invInertia;if(!(F.x===F.y&&F.y===F.z&&!C)){var L=v,W=m;L.setRotationFromQuaternion(this.quaternion),L.transpose(W),L.scale(F,L),L.mmult(W,this.invInertiaWorld)}};var p=new r,_=new r;c.prototype.applyForce=function(C,F){if(this.type===c.DYNAMIC){var L=p;F.vsub(this.position,L);var W=_;L.cross(C,W),this.force.vadd(C,this.force),this.torque.vadd(W,this.torque)}};var y=new r,x=new r;c.prototype.applyLocalForce=function(C,F){if(this.type===c.DYNAMIC){var L=y,W=x;this.vectorToWorldFrame(C,L),this.pointToWorldFrame(F,W),this.applyForce(L,W)}};var w=new r,T=new r,I=new r;c.prototype.applyImpulse=function(C,F){if(this.type===c.DYNAMIC){var L=w;F.vsub(this.position,L);var W=T;W.copy(C),W.mult(this.invMass,W),this.velocity.vadd(W,this.velocity);var X=I;L.cross(C,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var D=new r,E=new r;c.prototype.applyLocalImpulse=function(C,F){if(this.type===c.DYNAMIC){var L=D,W=E;this.vectorToWorldFrame(C,L),this.pointToWorldFrame(F,W),this.applyImpulse(L,W)}};var M=new r;c.prototype.updateMassProperties=function(){var C=M;this.invMass=this.mass>0?1/this.mass:0;var F=this.inertia,L=this.fixedRotation;this.computeAABB(),C.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(C,this.mass,F),this.invInertia.set(F.x>0&&!L?1/F.x:0,F.y>0&&!L?1/F.y:0,F.z>0&&!L?1/F.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(C,F){var L=new r;return C.vsub(this.position,L),this.angularVelocity.cross(L,F),this.velocity.vadd(F,F),F}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var s=e("../math/Vec3"),r=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=h;function h(H){this.chassisBody=H.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof H.indexRightAxis<"u"?H.indexRightAxis:1,this.indexForwardAxis=typeof H.indexForwardAxis<"u"?H.indexForwardAxis:0,this.indexUpAxis=typeof H.indexUpAxis<"u"?H.indexUpAxis:2}new s,new s,new s;var u=new s,c=new s,d=new s;new a,h.prototype.addWheel=function(H){H=H||{};var N=new l(H),K=this.wheelInfos.length;return this.wheelInfos.push(N),K},h.prototype.setSteeringValue=function(H,N){var K=this.wheelInfos[N];K.steering=H},new s,h.prototype.applyEngineForce=function(H,N){this.wheelInfos[N].engineForce=H},h.prototype.setBrake=function(H,N){this.wheelInfos[N].brake=H},h.prototype.addToWorld=function(H){this.constraints,H.add(this.chassisBody);var N=this;this.preStepCallback=function(){N.updateVehicle(H.dt)},H.addEventListener("preStep",this.preStepCallback),this.world=H},h.prototype.getVehicleAxisWorld=function(H,N){N.set(H===0?1:0,H===1?1:0,H===2?1:0),this.chassisBody.vectorToWorldFrame(N,N)},h.prototype.updateVehicle=function(H){for(var N=this.wheelInfos,K=N.length,Y=this.chassisBody,z=0;z<K;z++)this.updateWheelTransform(z);this.currentVehicleSpeedKmHour=3.6*Y.velocity.norm();var tt=new s;this.getVehicleAxisWorld(this.indexForwardAxis,tt),tt.dot(Y.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var z=0;z<K;z++)this.castRay(N[z]);this.updateSuspension(H);for(var k=new s,R=new s,z=0;z<K;z++){var P=N[z],G=P.suspensionForce;G>P.maxSuspensionForce&&(G=P.maxSuspensionForce),P.raycastResult.hitNormalWorld.scale(G*H,k),P.raycastResult.hitPointWorld.vsub(Y.position,R),Y.applyImpulse(k,P.raycastResult.hitPointWorld)}this.updateFriction(H);var J=new s,nt=new s,j=new s;for(z=0;z<K;z++){var P=N[z];Y.getVelocityAtWorldPoint(P.chassisConnectionPointWorld,j);var at=1;switch(this.indexUpAxis){case 1:at=-1;break}if(P.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,nt);var B=nt.dot(P.raycastResult.hitNormalWorld);P.raycastResult.hitNormalWorld.scale(B,J),nt.vsub(J,nt);var xt=nt.dot(j);P.deltaRotation=at*xt*H/P.radius}(P.sliding||!P.isInContact)&&P.engineForce!==0&&P.useCustomSlidingRotationalSpeed&&(P.deltaRotation=(P.engineForce>0?1:-1)*P.customSlidingRotationalSpeed*H),Math.abs(P.brake)>Math.abs(P.engineForce)&&(P.deltaRotation=0),P.rotation+=P.deltaRotation,P.deltaRotation*=.99}},h.prototype.updateSuspension=function(H){for(var N=this.chassisBody,K=N.mass,Y=this.wheelInfos,z=Y.length,tt=0;tt<z;tt++){var k=Y[tt];if(k.isInContact){var R,P=k.suspensionRestLength,G=k.suspensionLength,J=P-G;R=k.suspensionStiffness*J*k.clippedInvContactDotSuspension;var nt=k.suspensionRelativeVelocity,j;nt<0?j=k.dampingCompression:j=k.dampingRelaxation,R-=j*nt,k.suspensionForce=R*K,k.suspensionForce<0&&(k.suspensionForce=0)}else k.suspensionForce=0}},h.prototype.removeFromWorld=function(H){this.constraints,H.remove(this.chassisBody),H.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new s,g=new s;h.prototype.castRay=function(H){var N=f,K=g;this.updateWheelTransformWorld(H);var Y=this.chassisBody,z=-1,tt=H.suspensionRestLength+H.radius;H.directionWorld.scale(tt,N);var k=H.chassisConnectionPointWorld;k.vadd(N,K);var R=H.raycastResult;R.reset();var P=Y.collisionResponse;Y.collisionResponse=!1,this.world.rayTest(k,K,R),Y.collisionResponse=P;var G=R.body;if(H.raycastResult.groundObject=0,G){z=R.distance,H.raycastResult.hitNormalWorld=R.hitNormalWorld,H.isInContact=!0;var J=R.distance;H.suspensionLength=J-H.radius;var nt=H.suspensionRestLength-H.maxSuspensionTravel,j=H.suspensionRestLength+H.maxSuspensionTravel;H.suspensionLength<nt&&(H.suspensionLength=nt),H.suspensionLength>j&&(H.suspensionLength=j,H.raycastResult.reset());var at=H.raycastResult.hitNormalWorld.dot(H.directionWorld),B=new s;Y.getVelocityAtWorldPoint(H.raycastResult.hitPointWorld,B);var xt=H.raycastResult.hitNormalWorld.dot(B);if(at>=-.1)H.suspensionRelativeVelocity=0,H.clippedInvContactDotSuspension=1/.1;else{var pt=-1/at;H.suspensionRelativeVelocity=xt*pt,H.clippedInvContactDotSuspension=pt}}else H.suspensionLength=H.suspensionRestLength+0*H.maxSuspensionTravel,H.suspensionRelativeVelocity=0,H.directionWorld.scale(-1,H.raycastResult.hitNormalWorld),H.clippedInvContactDotSuspension=1;return z},h.prototype.updateWheelTransformWorld=function(H){H.isInContact=!1;var N=this.chassisBody;N.pointToWorldFrame(H.chassisConnectionPointLocal,H.chassisConnectionPointWorld),N.vectorToWorldFrame(H.directionLocal,H.directionWorld),N.vectorToWorldFrame(H.axleLocal,H.axleWorld)},h.prototype.updateWheelTransform=function(H){var N=u,K=c,Y=d,z=this.wheelInfos[H];this.updateWheelTransformWorld(z),z.directionLocal.scale(-1,N),K.copy(z.axleLocal),N.cross(K,Y),Y.normalize(),K.normalize();var tt=z.steering,k=new r;k.setFromAxisAngle(N,tt);var R=new r;R.setFromAxisAngle(K,z.rotation);var P=z.worldTransform.quaternion;this.chassisBody.quaternion.mult(k,P),P.mult(R,P),P.normalize();var G=z.worldTransform.position;G.copy(z.directionWorld),G.scale(z.suspensionLength,G),G.vadd(z.chassisConnectionPointWorld,G)};var v=[new s(1,0,0),new s(0,1,0),new s(0,0,1)];h.prototype.getWheelTransformWorld=function(H){return this.wheelInfos[H].worldTransform};var m=new s,p=[],_=[],y=1;h.prototype.updateFriction=function(H){for(var N=m,K=this.wheelInfos,Y=K.length,z=this.chassisBody,tt=_,k=p,R=0;R<Y;R++){var P=K[R],G=P.raycastResult.body;P.sideImpulse=0,P.forwardImpulse=0,tt[R]||(tt[R]=new s),k[R]||(k[R]=new s)}for(var R=0;R<Y;R++){var P=K[R],G=P.raycastResult.body;if(G){var J=k[R],nt=this.getWheelTransformWorld(R);nt.vectorToWorldFrame(v[this.indexRightAxis],J);var j=P.raycastResult.hitNormalWorld,at=J.dot(j);j.scale(at,N),J.vsub(N,J),J.normalize(),j.cross(J,tt[R]),tt[R].normalize(),P.sideImpulse=ot(z,P.raycastResult.hitPointWorld,G,P.raycastResult.hitPointWorld,J),P.sideImpulse*=y}}var B=1,xt=.5;this.sliding=!1;for(var R=0;R<Y;R++){var P=K[R],G=P.raycastResult.body,pt=0;if(P.slipInfo=1,G){var Mt=0,st=P.brake?P.brake:Mt;pt=I(z,G,P.raycastResult.hitPointWorld,tt[R],st),pt+=P.engineForce*H;var ft=st/pt;P.slipInfo*=ft}if(P.forwardImpulse=0,P.skidInfo=1,G){P.skidInfo=1;var U=P.suspensionForce*H*P.frictionSlip,b=U,et=U*b;P.forwardImpulse=pt;var Q=P.forwardImpulse*xt,ct=P.sideImpulse*B,ut=Q*Q+ct*ct;if(P.sliding=!1,ut>et){this.sliding=!0,P.sliding=!0;var ft=U/Math.sqrt(ut);P.skidInfo*=ft}}}if(this.sliding)for(var R=0;R<Y;R++){var P=K[R];P.sideImpulse!==0&&P.skidInfo<1&&(P.forwardImpulse*=P.skidInfo,P.sideImpulse*=P.skidInfo)}for(var R=0;R<Y;R++){var P=K[R],Lt=new s;if(Lt.copy(P.raycastResult.hitPointWorld),P.forwardImpulse!==0){var mt=new s;tt[R].scale(P.forwardImpulse,mt),z.applyImpulse(mt,Lt)}if(P.sideImpulse!==0){var G=P.raycastResult.body,At=new s;At.copy(P.raycastResult.hitPointWorld);var Bt=new s;k[R].scale(P.sideImpulse,Bt),z.pointToLocalFrame(Lt,Lt),Lt["xyz"[this.indexUpAxis]]*=P.rollInfluence,z.pointToWorldFrame(Lt,Lt),z.applyImpulse(Bt,Lt),Bt.scale(-1,Bt),G.applyImpulse(Bt,At)}}};var x=new s,w=new s,T=new s;function I(H,N,K,Y,z){var tt=0,k=K,R=x,P=w,G=T;H.getVelocityAtWorldPoint(k,R),N.getVelocityAtWorldPoint(k,P),R.vsub(P,G);var J=Y.dot(G),nt=F(H,K,Y),j=F(N,K,Y),at=1,B=at/(nt+j);return tt=-J*B,z<tt&&(tt=z),tt<-z&&(tt=-z),tt}var D=new s,E=new s,M=new s,C=new s;function F(H,N,K){var Y=D,z=E,tt=M,k=C;return N.vsub(H.position,Y),Y.cross(K,z),H.invInertiaWorld.vmult(z,k),k.cross(Y,tt),H.invMass+K.dot(tt)}var L=new s,W=new s,X=new s;function ot(H,N,K,Y,z,at){var k=z.norm2();if(k>1.1)return 0;var R=L,P=W,G=X;H.getVelocityAtWorldPoint(N,R),K.getVelocityAtWorldPoint(Y,P),R.vsub(P,G);var J=z.dot(G),nt=.2,j=1/(H.invMass+K.invMass),at=-nt*J*j;return at}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var s=e("./Body"),r=e("../shapes/Sphere"),a=e("../shapes/Box"),l=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var g=new a(new l(5,2,.5));this.chassisBody=new s(1,g)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var g=f.body;g||(g=new s(1,new r(1.2))),this.wheelBodies.push(g),this.wheelForces.push(0),new l;var v=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(v,m),g.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new h(this.chassisBody,g,{pivotA:v,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,g){var v=this.wheelAxes[g],m=Math.cos(f),p=Math.sin(f),_=v.x,y=v.y;this.constraints[g].axisA.set(m*_-p*y,p*_+m*y,0)},u.prototype.setMotorSpeed=function(f,g){var v=this.constraints[g];v.enableMotor(),v.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var g=this.constraints[f];g.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,g){this.wheelForces[g]=f},u.prototype.applyWheelForce=function(f,g){var v=this.wheelAxes[g],m=this.wheelBodies[g],p=m.torque;v.scale(f,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},u.prototype.addToWorld=function(f){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)f.add(v[m]);for(var m=0;m<g.length;m++)f.addConstraint(g[m]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,g=0;g<f.length;g++)this.applyWheelForce(f[g],g)},u.prototype.removeFromWorld=function(f){for(var g=this.constraints,v=this.wheelBodies.concat([this.chassisBody]),m=0;m<v.length;m++)f.remove(v[m]);for(var m=0;m<g.length;m++)f.removeConstraint(g[m])};var d=new l;u.prototype.getWheelSpeed=function(f){var g=this.wheelAxes[f],v=this.wheelBodies[f],m=v.angularVelocity;return this.chassisBody.vectorToWorldFrame(g,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=r,e("../shapes/Shape");var s=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function r(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}r.prototype.add=function(g){this.particles.push(g),this.neighbors.length<this.particles.length&&this.neighbors.push([])},r.prototype.remove=function(g){var v=this.particles.indexOf(g);v!==-1&&(this.particles.splice(v,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new s;r.prototype.getNeighbors=function(g,v){for(var m=this.particles.length,p=g.id,_=this.smoothingRadius*this.smoothingRadius,y=a,x=0;x!==m;x++){var w=this.particles[x];w.position.vsub(g.position,y),p!==w.id&&y.norm2()<_&&v.push(w)}};var l=new s,h=new s,u=new s,c=new s,d=new s,f=new s;r.prototype.update=function(){for(var g=this.particles.length,v=l,m=this.speedOfSound,p=this.eps,_=0;_!==g;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var w=x.length,T=0,I=0;I!==w;I++){y.position.vsub(x[I].position,v);var D=v.norm(),E=this.w(D);T+=x[I].mass*E}this.densities[_]=T,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var M=h,C=u,F=c,L=d,W=f,_=0;_!==g;_++){var X=this.particles[_];M.set(0,0,0),C.set(0,0,0);for(var ot,H,x=this.neighbors[_],w=x.length,I=0;I!==w;I++){var N=x[I];X.position.vsub(N.position,L);var K=L.norm();ot=-N.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[I]/(this.densities[I]*this.densities[I]+p)),this.gradw(L,F),F.mult(ot,F),M.vadd(F,M),N.velocity.vsub(X.velocity,W),W.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*N.mass,W),H=this.nablaw(K),W.mult(H,W),C.vadd(W,C)}C.mult(X.mass,C),M.mult(X.mass,M),X.force.vadd(C,X.force),X.force.vadd(M,X.force)}},r.prototype.w=function(g){var v=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(v,9))*Math.pow(v*v-g*g,3)},r.prototype.gradw=function(g,v){var m=g.norm(),p=this.smoothingRadius;g.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),v)},r.prototype.nablaw=function(g){var v=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(v,9))*(v*v-g*g)*(7*g*g-3*v*v);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var s=e("../math/Vec3");n.exports=r;function r(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new s,this.localAnchorB=new s,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}r.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},r.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},r.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},r.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var a=new s,l=new s,h=new s,u=new s,c=new s,d=new s,f=new s,g=new s,v=new s,m=new s,p=new s;r.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,w=this.bodyA,T=this.bodyB,I=a,D=l,E=h,M=u,C=p,F=c,L=d,W=f,X=g,ot=v,H=m;this.getWorldAnchorA(F),this.getWorldAnchorB(L),F.vsub(w.position,W),L.vsub(T.position,X),L.vsub(F,I);var N=I.norm();D.copy(I),D.normalize(),T.velocity.vsub(w.velocity,E),T.angularVelocity.cross(X,C),E.vadd(C,E),w.angularVelocity.cross(W,C),E.vsub(C,E),D.mult(-_*(N-x)-y*E.dot(D),M),w.force.vsub(M,w.force),T.force.vadd(M,T.force),W.cross(M,ot),X.cross(M,H),w.torque.vsub(ot,w.torque),T.torque.vadd(H,T.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var s=e("../math/Vec3"),r=e("../math/Transform"),a=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new s,chassisConnectionPointWorld:new s,directionLocal:new s,directionWorld:new s,axleLocal:new s,axleWorld:new s,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new r,this.isInContact=!1}var c=new s,u=new s,c=new s;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var g=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var v=f.hitNormalWorld.dot(c);if(g>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/g;this.suspensionRelativeVelocity=v*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=l;var s=e("./Shape"),r=e("../math/Vec3"),a=e("./ConvexPolyhedron");function l(c){s.call(this),this.type=s.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,g=r,v=[new g(-c,-d,-f),new g(c,-d,-f),new g(c,d,-f),new g(-c,d,-f),new g(-c,-d,f),new g(c,-d,f),new g(c,d,f),new g(-c,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new g(0,0,1),new g(0,1,0),new g(1,0,0);var p=new a(v,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new r,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var g=c;f.x=1/12*d*(2*g.y*2*g.y+2*g.z*2*g.z),f.y=1/12*d*(2*g.x*2*g.x+2*g.z*2*g.z),f.z=1/12*d*(2*g.y*2*g.y+2*g.x*2*g.x)},l.prototype.getSideNormals=function(c,d){var f=c,g=this.halfExtents;if(f[0].set(g.x,0,0),f[1].set(0,g.y,0),f[2].set(0,0,g.z),f[3].set(-g.x,0,0),f[4].set(0,-g.y,0),f[5].set(0,0,-g.z),d!==void 0)for(var v=0;v!==f.length;v++)d.vmult(f[v],f[v]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new r;new r,l.prototype.forEachWorldCorner=function(c,d,f){for(var g=this.halfExtents,v=[[g.x,g.y,g.z],[-g.x,g.y,g.z],[-g.x,-g.y,g.z],[-g.x,-g.y,-g.z],[g.x,-g.y,-g.z],[g.x,g.y,-g.z],[-g.x,g.y,-g.z],[g.x,-g.y,g.z]],m=0;m<v.length;m++)h.set(v[m][0],v[m][1],v[m][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new r,new r,new r,new r,new r,new r,new r,new r];l.prototype.calculateWorldAABB=function(c,d,f,g){var v=this.halfExtents;u[0].set(v.x,v.y,v.z),u[1].set(-v.x,v.y,v.z),u[2].set(-v.x,-v.y,v.z),u[3].set(-v.x,-v.y,-v.z),u[4].set(v.x,-v.y,-v.z),u[5].set(v.x,v.y,-v.z),u[6].set(-v.x,v.y,-v.z),u[7].set(v.x,-v.y,v.z);var m=u[0];d.vmult(m,m),c.vadd(m,m),g.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=u[p];d.vmult(m,m),c.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>g.x&&(g.x=_),y>g.y&&(g.y=y),x>g.z&&(g.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=l;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function l(z,tt,k){s.call(this),this.type=s.types.CONVEXPOLYHEDRON,this.vertices=z||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=tt||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=k?k.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new s,l.prototype.constructor=l;var h=new r;l.prototype.computeEdges=function(){var z=this.faces,tt=this.vertices;tt.length;var k=this.uniqueEdges;k.length=0;for(var R=h,P=0;P!==z.length;P++)for(var G=z[P],J=G.length,nt=0;nt!==J;nt++){var j=(nt+1)%J;tt[G[nt]].vsub(tt[G[j]],R),R.normalize();for(var at=!1,B=0;B!==k.length;B++)if(k[B].almostEquals(R)||k[B].almostEquals(R)){at=!0;break}at||k.push(R.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var z=0;z<this.faces.length;z++){for(var tt=0;tt<this.faces[z].length;tt++)if(!this.vertices[this.faces[z][tt]])throw new Error("Vertex "+this.faces[z][tt]+" not found!");var k=this.faceNormals[z]||new r;this.getFaceNormal(z,k),k.negate(k),this.faceNormals[z]=k;var R=this.vertices[this.faces[z][0]];if(k.dot(R)<0){console.error(".faceNormals["+z+"] = Vec3("+k.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var tt=0;tt<this.faces[z].length;tt++)console.warn(".vertices["+this.faces[z][tt]+"] = Vec3("+this.vertices[this.faces[z][tt]].toString()+")")}}};var u=new r,c=new r;l.computeNormal=function(z,tt,k,R){tt.vsub(z,c),k.vsub(tt,u),u.cross(c,R),R.isZero()||R.normalize()},l.prototype.getFaceNormal=function(z,tt){var k=this.faces[z],R=this.vertices[k[0]],P=this.vertices[k[1]],G=this.vertices[k[2]];return l.computeNormal(R,P,G,tt)};var d=new r;l.prototype.clipAgainstHull=function(z,tt,k,R,P,G,J,nt,j){for(var at=d,B=-1,xt=-Number.MAX_VALUE,pt=0;pt<k.faces.length;pt++){at.copy(k.faceNormals[pt]),P.vmult(at,at);var Mt=at.dot(G);Mt>xt&&(xt=Mt,B=pt)}for(var st=[],ft=k.faces[B],U=ft.length,b=0;b<U;b++){var et=k.vertices[ft[b]],Q=new r;Q.copy(et),P.vmult(Q,Q),R.vadd(Q,Q),st.push(Q)}B>=0&&this.clipFaceAgainstHull(G,z,tt,st,J,nt,j)};var f=new r,g=new r,v=new r,m=new r,p=new r,_=new r;l.prototype.findSeparatingAxis=function(z,tt,k,R,P,G,J,nt){var j=f,at=g,B=v,xt=m,pt=p,Mt=_,st=Number.MAX_VALUE,ft=this;if(ft.uniqueAxes)for(var b=0;b!==ft.uniqueAxes.length;b++){k.vmult(ft.uniqueAxes[b],j);var Q=ft.testSepAxis(j,z,tt,k,R,P);if(Q===!1)return!1;Q<st&&(st=Q,G.copy(j))}else for(var U=J?J.length:ft.faces.length,b=0;b<U;b++){var et=J?J[b]:b;j.copy(ft.faceNormals[et]),k.vmult(j,j);var Q=ft.testSepAxis(j,z,tt,k,R,P);if(Q===!1)return!1;Q<st&&(st=Q,G.copy(j))}if(z.uniqueAxes)for(var b=0;b!==z.uniqueAxes.length;b++){P.vmult(z.uniqueAxes[b],at);var Q=ft.testSepAxis(at,z,tt,k,R,P);if(Q===!1)return!1;Q<st&&(st=Q,G.copy(at))}else for(var ct=nt?nt.length:z.faces.length,b=0;b<ct;b++){var et=nt?nt[b]:b;at.copy(z.faceNormals[et]),P.vmult(at,at);var Q=ft.testSepAxis(at,z,tt,k,R,P);if(Q===!1)return!1;Q<st&&(st=Q,G.copy(at))}for(var ut=0;ut!==ft.uniqueEdges.length;ut++){k.vmult(ft.uniqueEdges[ut],xt);for(var Lt=0;Lt!==z.uniqueEdges.length;Lt++)if(P.vmult(z.uniqueEdges[Lt],pt),xt.cross(pt,Mt),!Mt.almostZero()){Mt.normalize();var mt=ft.testSepAxis(Mt,z,tt,k,R,P);if(mt===!1)return!1;mt<st&&(st=mt,G.copy(Mt))}}return R.vsub(tt,B),B.dot(G)>0&&G.negate(G),!0};var y=[],x=[];l.prototype.testSepAxis=function(z,tt,k,R,P,G){var J=this;l.project(J,z,k,R,y),l.project(tt,z,P,G,x);var nt=y[0],j=y[1],at=x[0],B=x[1],xt=nt-B,pt=at-j,Mt=xt<pt?xt:pt;return Mt};var w=new r,T=new r;l.prototype.calculateLocalInertia=function(z,tt){this.computeLocalAABB(w,T);var k=T.x-w.x,R=T.y-w.y,P=T.z-w.z;tt.x=1/12*z*(2*R*2*R+2*P*2*P),tt.y=1/12*z*(2*k*2*k+2*P*2*P),tt.z=1/12*z*(2*R*2*R+2*k*2*k)},l.prototype.getPlaneConstantOfFace=function(z){var tt=this.faces[z],k=this.faceNormals[z],R=this.vertices[tt[0]],P=-k.dot(R);return P};var I=new r,D=new r,E=new r,M=new r,C=new r,F=new r,L=new r,W=new r;l.prototype.clipFaceAgainstHull=function(z,tt,k,R,P,G,J){for(var nt=I,j=D,at=E,B=M,xt=C,pt=F,Mt=L,st=W,ft=this,U=[],b=R,et=U,Q=-1,ct=Number.MAX_VALUE,ut=0;ut<ft.faces.length;ut++){nt.copy(ft.faceNormals[ut]),k.vmult(nt,nt);var Lt=nt.dot(z);Lt<ct&&(ct=Lt,Q=ut)}if(!(Q<0)){var mt=ft.faces[Q];mt.connectedFaces=[];for(var At=0;At<ft.faces.length;At++)for(var Bt=0;Bt<ft.faces[At].length;Bt++)mt.indexOf(ft.faces[At][Bt])!==-1&&At!==Q&&mt.connectedFaces.indexOf(At)===-1&&mt.connectedFaces.push(At);b.length;for(var vt=mt.length,Rt=0;Rt<vt;Rt++){var Wt=ft.vertices[mt[Rt]],Vt=ft.vertices[mt[(Rt+1)%vt]];Wt.vsub(Vt,j),at.copy(j),k.vmult(at,at),tt.vadd(at,at),B.copy(this.faceNormals[Q]),k.vmult(B,B),tt.vadd(B,B),at.cross(B,xt),xt.negate(xt),pt.copy(Wt),k.vmult(pt,pt),tt.vadd(pt,pt),-pt.dot(xt);var Zt;{var Ht=mt.connectedFaces[Rt];Mt.copy(this.faceNormals[Ht]);var Qt=this.getPlaneConstantOfFace(Ht);st.copy(Mt),k.vmult(st,st);var Zt=Qt-st.dot(tt)}for(this.clipFaceAgainstPlane(b,et,st,Zt);b.length;)b.shift();for(;et.length;)b.push(et.shift())}Mt.copy(this.faceNormals[Q]);var Qt=this.getPlaneConstantOfFace(Q);st.copy(Mt),k.vmult(st,st);for(var Zt=Qt-st.dot(tt),At=0;At<b.length;At++){var ee=st.dot(b[At])+Zt;if(ee<=P&&(console.log("clamped: depth="+ee+" to minDist="+(P+"")),ee=P),ee<=G){var ie=b[At];if(ee<=0){var se={point:ie,normal:st,depth:ee};J.push(se)}}}}},l.prototype.clipFaceAgainstPlane=function(z,tt,k,R){var P,G,J=z.length;if(J<2)return tt;var nt=z[z.length-1],j=z[0];P=k.dot(nt)+R;for(var at=0;at<J;at++){if(j=z[at],G=k.dot(j)+R,P<0)if(G<0){var B=new r;B.copy(j),tt.push(B)}else{var B=new r;nt.lerp(j,P/(P-G),B),tt.push(B)}else if(G<0){var B=new r;nt.lerp(j,P/(P-G),B),tt.push(B),tt.push(j)}nt=j,P=G}return tt},l.prototype.computeWorldVertices=function(z,tt){for(var k=this.vertices.length;this.worldVertices.length<k;)this.worldVertices.push(new r);for(var R=this.vertices,P=this.worldVertices,G=0;G!==k;G++)tt.vmult(R[G],P[G]),z.vadd(P[G],P[G]);this.worldVerticesNeedsUpdate=!1},new r,l.prototype.computeLocalAABB=function(z,tt){var k=this.vertices.length,R=this.vertices;z.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),tt.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var P=0;P<k;P++){var G=R[P];G.x<z.x?z.x=G.x:G.x>tt.x&&(tt.x=G.x),G.y<z.y?z.y=G.y:G.y>tt.y&&(tt.y=G.y),G.z<z.z?z.z=G.z:G.z>tt.z&&(tt.z=G.z)}},l.prototype.computeWorldFaceNormals=function(z){for(var tt=this.faceNormals.length;this.worldFaceNormals.length<tt;)this.worldFaceNormals.push(new r);for(var k=this.faceNormals,R=this.worldFaceNormals,P=0;P!==tt;P++)z.vmult(k[P],R[P]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var z=0,tt=this.vertices,k=0,R=tt.length;k!==R;k++){var P=tt[k].norm2();P>z&&(z=P)}this.boundingSphereRadius=Math.sqrt(z)};var X=new r;l.prototype.calculateWorldAABB=function(z,tt,k,R){for(var P=this.vertices.length,G=this.vertices,J,nt,j,at,B,xt,pt=0;pt<P;pt++){X.copy(G[pt]),tt.vmult(X,X),z.vadd(X,X);var Mt=X;Mt.x<J||J===void 0?J=Mt.x:(Mt.x>at||at===void 0)&&(at=Mt.x),Mt.y<nt||nt===void 0?nt=Mt.y:(Mt.y>B||B===void 0)&&(B=Mt.y),Mt.z<j||j===void 0?j=Mt.z:(Mt.z>xt||xt===void 0)&&(xt=Mt.z)}k.set(J,nt,j),R.set(at,B,xt)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(z){z=z||new r;for(var tt=this.vertices.length,k=this.vertices,R=0;R<tt;R++)z.vadd(k[R],z);return z.mult(1/tt,z),z},l.prototype.transformAllPoints=function(z,tt){var k=this.vertices.length,R=this.vertices;if(tt){for(var P=0;P<k;P++){var G=R[P];tt.vmult(G,G)}for(var P=0;P<this.faceNormals.length;P++){var G=this.faceNormals[P];tt.vmult(G,G)}}if(z)for(var P=0;P<k;P++){var G=R[P];G.vadd(z,G)}};var ot=new r,H=new r,N=new r;l.prototype.pointIsInside=function(z){var tt=this.vertices.length,k=this.vertices,R=this.faces,P=this.faceNormals,G=null,J=this.faces.length,nt=ot;this.getAveragePointLocal(nt);for(var j=0;j<J;j++){this.faces[j].length;var tt=P[j],at=k[R[j][0]],B=H;z.vsub(at,B);var xt=tt.dot(B),pt=N;nt.vsub(at,pt);var Mt=tt.dot(pt);if(xt<0&&Mt>0||xt>0&&Mt<0)return!1}return G?1:-1},new r;var K=new r,Y=new r;l.project=function(z,tt,k,R,P){var G=z.vertices.length,J=K,nt=0,j=0,at=Y,B=z.vertices;at.setZero(),a.vectorToLocalFrame(k,R,tt,J),a.pointToLocalFrame(k,R,at,at);var xt=at.dot(J);j=nt=B[0].dot(J);for(var pt=1;pt<G;pt++){var Mt=B[pt].dot(J);Mt>nt&&(nt=Mt),Mt<j&&(j=Mt)}if(j-=xt,nt-=xt,j>nt){var st=j;j=nt,nt=st}P[0]=nt,P[1]=j}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=l;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function l(h,u,c,d){var f=d,g=[],v=[],m=[],p=[],_=[],y=Math.cos,x=Math.sin;g.push(new r(u*y(0),u*x(0),-c*.5)),p.push(0),g.push(new r(h*y(0),h*x(0),c*.5)),_.push(1);for(var w=0;w<f;w++){var T=2*Math.PI/f*(w+1),I=2*Math.PI/f*(w+.5);w<f-1?(g.push(new r(u*y(T),u*x(T),-c*.5)),p.push(2*w+2),g.push(new r(h*y(T),h*x(T),c*.5)),_.push(2*w+3),m.push([2*w+2,2*w+3,2*w+1,2*w])):m.push([0,1,2*w+1,2*w]),(f%2===1||w<f/2)&&v.push(new r(y(I),x(I),0))}m.push(_),v.push(new r(0,0,1));for(var D=[],w=0;w<p.length;w++)D.push(p[p.length-w-1]);m.push(D),this.type=s.types.CONVEXPOLYHEDRON,a.call(this,g,m,v)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var s=e("./Shape"),r=e("./ConvexPolyhedron"),a=e("../math/Vec3"),l=e("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,s.call(this),this.pillarConvex=new r,this.pillarOffset=new a,this.type=s.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new s,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var g=u[d][f];g<c&&(c=g)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var g=u[d][f];g>c&&(c=g)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,g){g=g||[];for(var v=this.data,m=this.minValue,p=u;p<=d;p++)for(var _=c;_<=f;_++){var y=v[p][_];y>m&&(m=y)}g[0]=this.minValue,g[1]=m},h.prototype.getIndexOfPosition=function(u,c,d,f){var g=this.elementSize,v=this.data,m=Math.floor(u/g),p=Math.floor(c/g);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=v.length-1&&(m=v.length-1),p>=v[0].length-1&&(p=v[0].length-1)),!(m<0||p<0||m>=v.length-1||p>=v[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var g=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,g),(g[0]+g[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,g){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:g}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,g=this.pillarOffset;if(this.cacheEnabled){var v=this.getCachedConvexTrianglePillar(u,c,d);if(v){this.pillarConvex=v.convex,this.pillarOffset=v.offset;return}f=new r,g=new a,this.pillarConvex=f,this.pillarOffset=g}var v=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new a);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=f.vertices,x=(Math.min(v[u][c],v[u+1][c],v[u][c+1],v[u+1][c+1])-this.minValue)/2+this.minValue;d?(g.set((u+.75)*m,(c+.75)*m,x),y[0].set(.25*m,.25*m,v[u+1][c+1]-x),y[1].set(-.75*m,.25*m,v[u][c+1]-x),y[2].set(.25*m,-.75*m,v[u+1][c]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(g.set((u+.25)*m,(c+.25)*m,x),y[0].set(-.25*m,-.25*m,v[u][c]-x),y[1].set(.75*m,-.25*m,v[u+1][c]-x),y[2].set(-.25*m,.75*m,v[u][c+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,g)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new a,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new a(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=a;var s=e("./Shape"),r=e("../math/Vec3");function a(){s.call(this),this.type=s.types.PARTICLE}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){return h=h||new r,h.set(0,0,0),h},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=a;var s=e("./Shape"),r=e("../math/Vec3");function a(){s.call(this),this.type=s.types.PLANE,this.worldNormal=new r,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(h,u){return u=u||new r,u},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new r;a.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=s;var s=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function s(){this.id=s.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}s.prototype.constructor=s,s.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},s.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},s.prototype.calculateLocalInertia=function(r,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},s.idCounter=0,s.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=a;var s=e("./Shape"),r=e("../math/Vec3");function a(l){if(s.call(this),this.radius=l!==void 0?Number(l):1,this.type=s.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new s,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){h=h||new r;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],g=0;g<f.length;g++){var v=f[g];u[v]=l[v]-d,c[v]=l[v]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=u;var s=e("./Shape"),r=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),l=e("../collision/AABB"),h=e("../utils/Octree");function u(D,E){s.call(this),this.type=s.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new l,this.edges=null,this.scale=new r(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new s,u.prototype.constructor=u;var c=new r;u.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var E=this.scale;D.aabb.lowerBound.x*=1/E.x,D.aabb.lowerBound.y*=1/E.y,D.aabb.lowerBound.z*=1/E.z,D.aabb.upperBound.x*=1/E.x,D.aabb.upperBound.y*=1/E.y,D.aabb.upperBound.z*=1/E.z;for(var M=new l,C=new r,F=new r,L=new r,W=[C,F,L],X=0;X<this.indices.length/3;X++){var ot=X*3;this._getUnscaledVertex(this.indices[ot],C),this._getUnscaledVertex(this.indices[ot+1],F),this._getUnscaledVertex(this.indices[ot+2],L),M.setFromPoints(W),D.insert(M,X)}D.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(D,E){d.copy(D);var M=this.scale,C=M.x,F=M.y,L=M.z,W=d.lowerBound,X=d.upperBound;return W.x/=C,W.y/=F,W.z/=L,X.x/=C,X.y/=F,X.z/=L,this.tree.aabbQuery(d,E)},u.prototype.setScale=function(D){var E=this.scale.x===this.scale.y===this.scale.z,M=D.x===D.y===D.z;E&&M||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var D=c,E=this.normals,M=0;M<this.indices.length/3;M++){var C=M*3,F=this.indices[C],L=this.indices[C+1],W=this.indices[C+2];this.getVertex(F,p),this.getVertex(L,_),this.getVertex(W,y),u.computeNormal(_,p,y,D),E[C]=D.x,E[C+1]=D.y,E[C+2]=D.z}},u.prototype.updateEdges=function(){for(var D={},E=function(ot,H){var N=F<L?F+"_"+L:L+"_"+F;D[N]=!0},M=0;M<this.indices.length/3;M++){var C=M*3,F=this.indices[C],L=this.indices[C+1];this.indices[C+2],E(),E(),E()}var W=Object.keys(D);this.edges=new Int16Array(W.length*2);for(var M=0;M<W.length;M++){var X=W[M].split("_");this.edges[2*M]=parseInt(X[0],10),this.edges[2*M+1]=parseInt(X[1],10)}},u.prototype.getEdgeVertex=function(D,E,M){var C=this.edges[D*2+(E?1:0)];this.getVertex(C,M)};var f=new r,g=new r;u.prototype.getEdgeVector=function(D,E){var M=f,C=g;this.getEdgeVertex(D,0,M),this.getEdgeVertex(D,1,C),C.vsub(M,E)};var v=new r,m=new r;u.computeNormal=function(D,E,M,C){E.vsub(D,m),M.vsub(E,v),v.cross(m,C),C.isZero()||C.normalize()};var p=new r,_=new r,y=new r;u.prototype.getVertex=function(D,E){var M=this.scale;return this._getUnscaledVertex(D,E),E.x*=M.x,E.y*=M.y,E.z*=M.z,E},u.prototype._getUnscaledVertex=function(D,E){var M=D*3,C=this.vertices;return E.set(C[M],C[M+1],C[M+2])},u.prototype.getWorldVertex=function(D,E,M,C){return this.getVertex(D,C),a.pointToWorldFrame(E,M,C,C),C},u.prototype.getTriangleVertices=function(D,E,M,C){var F=D*3;this.getVertex(this.indices[F],E),this.getVertex(this.indices[F+1],M),this.getVertex(this.indices[F+2],C)},u.prototype.getNormal=function(D,E){var M=D*3;return E.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var x=new l;u.prototype.calculateLocalInertia=function(D,E){this.computeLocalAABB(x);var M=x.upperBound.x-x.lowerBound.x,C=x.upperBound.y-x.lowerBound.y,F=x.upperBound.z-x.lowerBound.z;return E.set(1/12*D*(2*C*2*C+2*F*2*F),1/12*D*(2*M*2*M+2*F*2*F),1/12*D*(2*C*2*C+2*M*2*M))};var w=new r;u.prototype.computeLocalAABB=function(D){var E=D.lowerBound,M=D.upperBound,C=this.vertices.length;this.vertices;var F=w;this.getVertex(0,F),E.copy(F),M.copy(F);for(var L=0;L!==C;L++)this.getVertex(L,F),F.x<E.x?E.x=F.x:F.x>M.x&&(M.x=F.x),F.y<E.y?E.y=F.y:F.y>M.y&&(M.y=F.y),F.z<E.z?E.z=F.z:F.z>M.z&&(M.z=F.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var D=0,E=this.vertices,M=new r,C=0,F=E.length/3;C!==F;C++){this.getVertex(C,M);var L=M.norm2();L>D&&(D=L)}this.boundingSphereRadius=Math.sqrt(D)},new r;var T=new a,I=new l;u.prototype.calculateWorldAABB=function(D,E,M,C){var F=T,L=I;F.position=D,F.quaternion=E,this.aabb.toWorldFrame(F,L),M.copy(L.lowerBound),C.copy(L.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(D,E,M,C,F){D=D||1,E=E||.5,M=M||8,C=C||6,F=F||Math.PI*2;for(var L=[],W=[],X=0;X<=M;X++)for(var ot=0;ot<=C;ot++){var H=ot/C*F,N=X/M*Math.PI*2,K=(D+E*Math.cos(N))*Math.cos(H),Y=(D+E*Math.cos(N))*Math.sin(H),z=E*Math.sin(N);L.push(K,Y,z)}for(var X=1;X<=M;X++)for(var ot=1;ot<=C;ot++){var tt=(C+1)*X+ot-1,k=(C+1)*(X-1)+ot-1,R=(C+1)*(X-1)+ot,P=(C+1)*X+ot;W.push(tt,k,P),W.push(k,R,P)}return new u(L,W)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=r,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver");function r(){s.call(this),this.iterations=10,this.tolerance=1e-7}r.prototype=new s;var a=[],l=[],h=[];r.prototype.solve=function(u,c){var d=0,f=this.iterations,g=this.tolerance*this.tolerance,v=this.equations,m=v.length,p=c.bodies,_=p.length,y=u,x,w,T,I,D,E;if(m!==0)for(var M=0;M!==_;M++)p[M].updateSolveMassProperties();var C=l,F=h,L=a;C.length=m,F.length=m,L.length=m;for(var M=0;M!==m;M++){var W=v[M];L[M]=0,F[M]=W.computeB(y),C[M]=1/W.computeC()}if(m!==0){for(var M=0;M!==_;M++){var X=p[M],ot=X.vlambda,H=X.wlambda;ot.set(0,0,0),H&&H.set(0,0,0)}for(d=0;d!==f;d++){I=0;for(var N=0;N!==m;N++){var W=v[N];x=F[N],w=C[N],E=L[N],D=W.computeGWlambda(),T=w*(x-D-W.eps*E),E+T<W.minForce?T=W.minForce-E:E+T>W.maxForce&&(T=W.maxForce-E),L[N]+=T,I+=T>0?T:-T,W.addToWlambda(T)}if(I*I<g)break}for(var M=0;M!==_;M++){var X=p[M],K=X.velocity,Y=X.angularVelocity;K.vadd(X.vlambda,K),Y&&Y.vadd(X.wlambda,Y)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=s;function s(){this.equations=[]}s.prototype.solve=function(r,a){return 0},s.prototype.addEquation=function(r){r.enabled&&this.equations.push(r)},s.prototype.removeEquation=function(r){var a=this.equations,l=a.indexOf(r);l!==-1&&a.splice(l,1)},s.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var s=e("./Solver"),r=e("../objects/Body");function a(p){for(s.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new s;var l=[],h=[],u={bodies:[]},c=r.STATIC;function d(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function g(p,_,y,x){for(f.push(p),p.visited=!0,_(p,y,x);f.length;)for(var w=f.pop(),T;T=d(w.children);)T.visited=!0,_(T,y,x),f.push(T)}function v(p,_,y){_.push(p.body);for(var x=p.eqs.length,w=0;w!==x;w++){var T=p.eqs[w];y.indexOf(T)===-1&&y.push(T)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(p,_){for(var y=l,x=this.nodePool,w=_.bodies,T=this.equations,I=T.length,D=w.length,E=this.subsolver;x.length<D;)x.push(this.createNode());y.length=D;for(var M=0;M<D;M++)y[M]=x[M];for(var M=0;M!==D;M++){var C=y[M];C.body=w[M],C.children.length=0,C.eqs.length=0,C.visited=!1}for(var F=0;F!==I;F++){var L=T[F],M=w.indexOf(L.bi),W=w.indexOf(L.bj),X=y[M],ot=y[W];X.children.push(ot),X.eqs.push(L),ot.children.push(X),ot.eqs.push(L)}var H,N=0,K=h;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var Y=u;H=d(y);){K.length=0,Y.bodies.length=0,g(H,v,Y.bodies,K);var z=K.length;K=K.sort(m);for(var M=0;M!==z;M++)E.addEquation(K[M]);E.solve(p,Y),E.removeAllEquations(),N++}return N};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var s=function(){};n.exports=s,s.prototype={constructor:s,addEventListener:function(r,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[r]===void 0&&(l[r]=[]),l[r].indexOf(a)===-1&&l[r].push(a),this},hasEventListener:function(r,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[r]!==void 0&&l[r].indexOf(a)!==-1},removeEventListener:function(r,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[r]===void 0)return this;var h=l[r].indexOf(a);return h!==-1&&l[r].splice(h,1),this},dispatchEvent:function(r){if(this._listeners===void 0)return this;var a=this._listeners,l=a[r.type];if(l!==void 0){r.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,r)}return this}}},{}],50:[function(e,n,i){var s=e("../collision/AABB"),r=e("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new s,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,f){var g=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var v=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;v.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(v[p].insert(c,d,f+1))return!0;m&&(v.length=0)}return g.push(d),!0};var h=new r;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,g=this.children;g.push(new a({aabb:new s({lowerBound:new r(0,0,0)})}),new a({aabb:new s({lowerBound:new r(1,0,0)})}),new a({aabb:new s({lowerBound:new r(1,1,0)})}),new a({aabb:new s({lowerBound:new r(1,1,1)})}),new a({aabb:new s({lowerBound:new r(0,1,1)})}),new a({aabb:new s({lowerBound:new r(0,0,1)})}),new a({aabb:new s({lowerBound:new r(1,0,1)})}),new a({aabb:new s({lowerBound:new r(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var v=this.root||this,m=0;m!==8;m++){var p=g[m];p.root=v;var _=p.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,p.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var g=f.pop();g.aabb.overlaps(c)&&Array.prototype.push.apply(d,g.data),Array.prototype.push.apply(f,g.children)}return d};var u=new s;a.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=s;function s(){this.objects=[],this.type=Object}s.prototype.release=function(){for(var r=arguments.length,a=0;a!==r;a++)this.objects.push(arguments[a])},s.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},s.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=s;function s(){this.data={keys:[]}}s.prototype.get=function(r,a){if(r>a){var l=a;a=r,r=l}return this.data[r+"-"+a]},s.prototype.set=function(r,a,l){if(r>a){var h=a;a=r,r=h}var u=r+"-"+a;this.get(r,a)||this.data.keys.push(u),this.data[u]=l},s.prototype.reset=function(){for(var r=this.data,a=r.keys;a.length>0;){var l=a.pop();delete r[l]}}},{}],53:[function(e,n,i){function s(){}n.exports=s,s.defaults=function(r,a){r=r||{};for(var l in a)l in r||(r[l]=a[l]);return r}},{}],54:[function(e,n,i){n.exports=a;var s=e("../math/Vec3"),r=e("./Pool");function a(){r.call(this),this.type=s}a.prototype=new r,a.prototype.constructObject=function(){return new s}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=g;var s=e("../collision/AABB"),r=e("../shapes/Shape"),a=e("../collision/Ray"),l=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function g(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}g.prototype.createContactEquation=function(lt,ht,gt,yt,Xt,Pt){var wt;this.contactPointPool.length?(wt=this.contactPointPool.pop(),wt.bi=lt,wt.bj=ht):wt=new d(lt,ht),wt.enabled=lt.collisionResponse&&ht.collisionResponse&&gt.collisionResponse&&yt.collisionResponse;var Dt=this.currentContactMaterial;wt.restitution=Dt.restitution,wt.setSpookParams(Dt.contactEquationStiffness,Dt.contactEquationRelaxation,this.world.dt);var rt=gt.material||lt.material,Tt=yt.material||ht.material;return rt&&Tt&&rt.restitution>=0&&Tt.restitution>=0&&(wt.restitution=rt.restitution*Tt.restitution),wt.si=Xt||gt,wt.sj=Pt||yt,wt},g.prototype.createFrictionEquationsFromContact=function(lt,ht){var gt=lt.bi,yt=lt.bj,Xt=lt.si,Pt=lt.sj,wt=this.world,Dt=this.currentContactMaterial,rt=Dt.friction,Tt=Xt.material||gt.material,Ut=Pt.material||yt.material;if(Tt&&Ut&&Tt.friction>=0&&Ut.friction>=0&&(rt=Tt.friction*Ut.friction),rt>0){var kt=rt*wt.gravity.length(),It=gt.invMass+yt.invMass;It>0&&(It=1/It);var A=this.frictionEquationPool,O=A.length?A.pop():new f(gt,yt,kt*It),$=A.length?A.pop():new f(gt,yt,kt*It);return O.bi=$.bi=gt,O.bj=$.bj=yt,O.minForce=$.minForce=-kt*It,O.maxForce=$.maxForce=kt*It,O.ri.copy(lt.ri),O.rj.copy(lt.rj),$.ri.copy(lt.ri),$.rj.copy(lt.rj),lt.ni.tangents(O.t,$.t),O.setSpookParams(Dt.frictionEquationStiffness,Dt.frictionEquationRelaxation,wt.dt),$.setSpookParams(Dt.frictionEquationStiffness,Dt.frictionEquationRelaxation,wt.dt),O.enabled=$.enabled=lt.enabled,ht.push(O,$),!0}return!1};var v=new l,m=new l,p=new l;g.prototype.createFrictionFromAverage=function(lt){var ht=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ht,this.frictionResult)||lt===1)){var gt=this.frictionResult[this.frictionResult.length-2],yt=this.frictionResult[this.frictionResult.length-1];v.setZero(),m.setZero(),p.setZero();var Xt=ht.bi;ht.bj;for(var Pt=0;Pt!==lt;Pt++)ht=this.result[this.result.length-1-Pt],ht.bodyA!==Xt?(v.vadd(ht.ni,v),m.vadd(ht.ri,m),p.vadd(ht.rj,p)):(v.vsub(ht.ni,v),m.vadd(ht.rj,m),p.vadd(ht.ri,p));var wt=1/lt;m.scale(wt,gt.ri),p.scale(wt,gt.rj),yt.ri.copy(gt.ri),yt.rj.copy(gt.rj),v.normalize(),v.tangents(gt.t,yt.t)}};var _=new l,y=new l,x=new u,w=new u;g.prototype.getContacts=function(lt,ht,gt,yt,Xt,Pt,wt){this.contactPointPool=Xt,this.frictionEquationPool=wt,this.result=yt,this.frictionResult=Pt;for(var Dt=x,rt=w,Tt=_,Ut=y,kt=0,It=lt.length;kt!==It;kt++){var A=lt[kt],O=ht[kt],$=null;A.material&&O.material&&($=gt.getContactMaterial(A.material,O.material)||null);for(var Z=0;Z<A.shapes.length;Z++){A.quaternion.mult(A.shapeOrientations[Z],Dt),A.quaternion.vmult(A.shapeOffsets[Z],Tt),Tt.vadd(A.position,Tt);for(var V=A.shapes[Z],_t=0;_t<O.shapes.length;_t++){O.quaternion.mult(O.shapeOrientations[_t],rt),O.quaternion.vmult(O.shapeOffsets[_t],Ut),Ut.vadd(O.position,Ut);var St=O.shapes[_t];if(!(Tt.distanceTo(Ut)>V.boundingSphereRadius+St.boundingSphereRadius)){var zt=null;V.material&&St.material&&(zt=gt.getContactMaterial(V.material,St.material)||null),this.currentContactMaterial=zt||$||gt.defaultContactMaterial;var Ct=this[V.type|St.type];Ct&&(V.type<St.type?Ct.call(this,V,St,Tt,Ut,Dt,rt,A,O,V,St):Ct.call(this,St,V,Ut,Tt,rt,Dt,O,A,V,St))}}}}},g.prototype[r.types.BOX|r.types.BOX]=g.prototype.boxBox=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){lt.convexPolyhedronRepresentation.material=lt.material,ht.convexPolyhedronRepresentation.material=ht.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ht.convexPolyhedronRepresentation,gt,yt,Xt,Pt,wt,Dt,lt,ht)},g.prototype[r.types.BOX|r.types.CONVEXPOLYHEDRON]=g.prototype.boxConvex=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,ht,gt,yt,Xt,Pt,wt,Dt,lt,ht)},g.prototype[r.types.BOX|r.types.PARTICLE]=g.prototype.boxParticle=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,ht,gt,yt,Xt,Pt,wt,Dt,lt,ht)},g.prototype[r.types.SPHERE]=g.prototype.sphereSphere=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=this.createContactEquation(wt,Dt,lt,ht);yt.vsub(gt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(lt.radius,rt.ri),rt.rj.mult(-ht.radius,rt.rj),rt.ri.vadd(gt,rt.ri),rt.ri.vsub(wt.position,rt.ri),rt.rj.vadd(yt,rt.rj),rt.rj.vsub(Dt.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var T=new l,I=new l,D=new l;g.prototype[r.types.PLANE|r.types.TRIMESH]=g.prototype.planeTrimesh=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=new l,Tt=T;Tt.set(0,0,1),Xt.vmult(Tt,Tt);for(var Ut=0;Ut<ht.vertices.length/3;Ut++){ht.getVertex(Ut,rt);var kt=new l;kt.copy(rt),h.pointToWorldFrame(yt,Pt,kt,rt);var It=I;rt.vsub(gt,It);var A=Tt.dot(It);if(A<=0){var O=this.createContactEquation(wt,Dt,lt,ht);O.ni.copy(Tt);var $=D;Tt.scale(It.dot(Tt),$),rt.vsub($,$),O.ri.copy($),O.ri.vsub(wt.position,O.ri),O.rj.copy(rt),O.rj.vsub(Dt.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}};var E=new l,M=new l;new l;var C=new l,F=new l,L=new l,W=new l,X=new l,ot=new l,H=new l,N=new l,K=new l,Y=new l,z=new l,tt=new s,k=[];g.prototype[r.types.SPHERE|r.types.TRIMESH]=g.prototype.sphereTrimesh=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=L,Tt=W,Ut=X,kt=ot,It=H,A=N,O=tt,$=F,Z=M,V=k;h.pointToLocalFrame(yt,Pt,gt,It);var _t=lt.radius;O.lowerBound.set(It.x-_t,It.y-_t,It.z-_t),O.upperBound.set(It.x+_t,It.y+_t,It.z+_t),ht.getTrianglesInAABB(O,V);for(var St=C,zt=lt.radius*lt.radius,Ct=0;Ct<V.length;Ct++)for(var Ft=0;Ft<3;Ft++)if(ht.getVertex(ht.indices[V[Ct]*3+Ft],St),St.vsub(It,Z),Z.norm2()<=zt){$.copy(St),h.pointToWorldFrame(yt,Pt,$,St),St.vsub(gt,Z);var Et=this.createContactEquation(wt,Dt,lt,ht);Et.ni.copy(Z),Et.ni.normalize(),Et.ri.copy(Et.ni),Et.ri.scale(lt.radius,Et.ri),Et.ri.vadd(gt,Et.ri),Et.ri.vsub(wt.position,Et.ri),Et.rj.copy(St),Et.rj.vsub(Dt.position,Et.rj),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}for(var Ct=0;Ct<V.length;Ct++)for(var Ft=0;Ft<3;Ft++){ht.getVertex(ht.indices[V[Ct]*3+Ft],rt),ht.getVertex(ht.indices[V[Ct]*3+(Ft+1)%3],Tt),Tt.vsub(rt,Ut),It.vsub(Tt,A);var qt=A.dot(Ut);It.vsub(rt,A);var ue=A.dot(Ut);if(ue>0&&qt<0){It.vsub(rt,A),kt.copy(Ut),kt.normalize(),ue=A.dot(kt),kt.scale(ue,A),A.vadd(rt,A);var _e=A.distanceTo(It);if(_e<lt.radius){var Et=this.createContactEquation(wt,Dt,lt,ht);A.vsub(It,Et.ni),Et.ni.normalize(),Et.ni.scale(lt.radius,Et.ri),h.pointToWorldFrame(yt,Pt,A,A),A.vsub(Dt.position,Et.rj),h.vectorToWorldFrame(Pt,Et.ni,Et.ni),h.vectorToWorldFrame(Pt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}}for(var ye=K,Ae=Y,jt=z,Kt=E,Ct=0,xe=V.length;Ct!==xe;Ct++){ht.getTriangleVertices(V[Ct],ye,Ae,jt),ht.getNormal(V[Ct],Kt),It.vsub(ye,A);var _e=A.dot(Kt);if(Kt.scale(_e,A),It.vsub(A,A),_e=A.distanceTo(It),a.pointInTriangle(A,ye,Ae,jt)&&_e<lt.radius){var Et=this.createContactEquation(wt,Dt,lt,ht);A.vsub(It,Et.ni),Et.ni.normalize(),Et.ni.scale(lt.radius,Et.ri),h.pointToWorldFrame(yt,Pt,A,A),A.vsub(Dt.position,Et.rj),h.vectorToWorldFrame(Pt,Et.ni,Et.ni),h.vectorToWorldFrame(Pt,Et.ri,Et.ri),this.result.push(Et),this.createFrictionEquationsFromContact(Et,this.frictionResult)}}V.length=0};var R=new l,P=new l;g.prototype[r.types.SPHERE|r.types.PLANE]=g.prototype.spherePlane=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=this.createContactEquation(wt,Dt,lt,ht);if(rt.ni.set(0,0,1),Pt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(lt.radius,rt.ri),gt.vsub(yt,R),rt.ni.mult(rt.ni.dot(R),P),R.vsub(P,rt.rj),-R.dot(rt.ni)<=lt.radius){var Tt=rt.ri,Ut=rt.rj;Tt.vadd(gt,Tt),Tt.vsub(wt.position,Tt),Ut.vadd(yt,Ut),Ut.vsub(Dt.position,Ut),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var G=new l,J=new l,nt=new l;function j(lt,ht,gt){for(var yt=null,Xt=lt.length,Pt=0;Pt!==Xt;Pt++){var wt=lt[Pt],Dt=G;lt[(Pt+1)%Xt].vsub(wt,Dt);var rt=J;Dt.cross(ht,rt);var Tt=nt;gt.vsub(wt,Tt);var Ut=rt.dot(Tt);if(yt===null||Ut>0&&yt===!0||Ut<=0&&yt===!1){yt===null&&(yt=Ut>0);continue}else return!1}return!0}var at=new l,B=new l,xt=new l,pt=new l,Mt=[new l,new l,new l,new l,new l,new l],st=new l,ft=new l,U=new l,b=new l;g.prototype[r.types.SPHERE|r.types.BOX]=g.prototype.sphereBox=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=this.v3pool,Tt=Mt;gt.vsub(yt,at),ht.getSideNormals(Tt,Pt);for(var Ut=lt.radius,kt=!1,It=ft,A=U,O=b,$=null,Z=0,V=0,_t=0,St=null,zt=0,Ct=Tt.length;zt!==Ct&&kt===!1;zt++){var Ft=B;Ft.copy(Tt[zt]);var Et=Ft.norm();Ft.normalize();var qt=at.dot(Ft);if(qt<Et+Ut&&qt>0){var ue=xt,_e=pt;ue.copy(Tt[(zt+1)%3]),_e.copy(Tt[(zt+2)%3]);var ye=ue.norm(),Ae=_e.norm();ue.normalize(),_e.normalize();var jt=at.dot(ue),Kt=at.dot(_e);if(jt<ye&&jt>-ye&&Kt<Ae&&Kt>-Ae){var pe=Math.abs(qt-Et-Ut);(St===null||pe<St)&&(St=pe,V=jt,_t=Kt,$=Et,It.copy(Ft),A.copy(ue),O.copy(_e),Z++)}}}if(Z){kt=!0;var Yt=this.createContactEquation(wt,Dt,lt,ht);It.mult(-Ut,Yt.ri),Yt.ni.copy(It),Yt.ni.negate(Yt.ni),It.mult($,It),A.mult(V,A),It.vadd(A,It),O.mult(_t,O),It.vadd(O,Yt.rj),Yt.ri.vadd(gt,Yt.ri),Yt.ri.vsub(wt.position,Yt.ri),Yt.rj.vadd(yt,Yt.rj),Yt.rj.vsub(Dt.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}for(var xe=rt.get(),de=st,Ce=0;Ce!==2&&!kt;Ce++)for(var Le=0;Le!==2&&!kt;Le++)for(var Te=0;Te!==2&&!kt;Te++)if(xe.set(0,0,0),Ce?xe.vadd(Tt[0],xe):xe.vsub(Tt[0],xe),Le?xe.vadd(Tt[1],xe):xe.vsub(Tt[1],xe),Te?xe.vadd(Tt[2],xe):xe.vsub(Tt[2],xe),yt.vadd(xe,de),de.vsub(gt,de),de.norm2()<Ut*Ut){kt=!0;var Yt=this.createContactEquation(wt,Dt,lt,ht);Yt.ri.copy(de),Yt.ri.normalize(),Yt.ni.copy(Yt.ri),Yt.ri.mult(Ut,Yt.ri),Yt.rj.copy(xe),Yt.ri.vadd(gt,Yt.ri),Yt.ri.vsub(wt.position,Yt.ri),Yt.rj.vadd(yt,Yt.rj),Yt.rj.vsub(Dt.position,Yt.rj),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}rt.release(xe),xe=null;for(var He=rt.get(),Se=rt.get(),Yt=rt.get(),ze=rt.get(),pe=rt.get(),cn=Tt.length,Ce=0;Ce!==cn&&!kt;Ce++)for(var Le=0;Le!==cn&&!kt;Le++)if(Ce%3!==Le%3){Tt[Le].cross(Tt[Ce],He),He.normalize(),Tt[Ce].vadd(Tt[Le],Se),Yt.copy(gt),Yt.vsub(Se,Yt),Yt.vsub(yt,Yt);var An=Yt.dot(He);He.mult(An,ze);for(var Te=0;Te===Ce%3||Te===Le%3;)Te++;pe.copy(gt),pe.vsub(ze,pe),pe.vsub(Se,pe),pe.vsub(yt,pe);var bs=Math.abs(An),Nc=pe.norm();if(bs<Tt[Te].norm()&&Nc<Ut){kt=!0;var we=this.createContactEquation(wt,Dt,lt,ht);Se.vadd(ze,we.rj),we.rj.copy(we.rj),pe.negate(we.ni),we.ni.normalize(),we.ri.copy(we.rj),we.ri.vadd(yt,we.ri),we.ri.vsub(gt,we.ri),we.ri.normalize(),we.ri.mult(Ut,we.ri),we.ri.vadd(gt,we.ri),we.ri.vsub(wt.position,we.ri),we.rj.vadd(yt,we.rj),we.rj.vsub(Dt.position,we.rj),this.result.push(we),this.createFrictionEquationsFromContact(we,this.frictionResult)}}rt.release(He,Se,Yt,ze,pe)};var et=new l,Q=new l,ct=new l,ut=new l,Lt=new l,mt=new l,At=new l,Bt=new l,vt=new l,Rt=new l;g.prototype[r.types.SPHERE|r.types.CONVEXPOLYHEDRON]=g.prototype.sphereConvex=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=this.v3pool;gt.vsub(yt,et);for(var Tt=ht.faceNormals,Ut=ht.faces,kt=ht.vertices,It=lt.radius,A=0;A!==kt.length;A++){var O=kt[A],$=Lt;Pt.vmult(O,$),yt.vadd($,$);var Z=ut;if($.vsub(gt,Z),Z.norm2()<It*It){_t=!0;var V=this.createContactEquation(wt,Dt,lt,ht);V.ri.copy(Z),V.ri.normalize(),V.ni.copy(V.ri),V.ri.mult(It,V.ri),$.vsub(yt,V.rj),V.ri.vadd(gt,V.ri),V.ri.vsub(wt.position,V.ri),V.rj.vadd(yt,V.rj),V.rj.vsub(Dt.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);return}}for(var _t=!1,A=0,St=Ut.length;A!==St&&_t===!1;A++){var zt=Tt[A],Ct=Ut[A],Ft=mt;Pt.vmult(zt,Ft);var Et=At;Pt.vmult(kt[Ct[0]],Et),Et.vadd(yt,Et);var qt=Bt;Ft.mult(-It,qt),gt.vadd(qt,qt);var ue=vt;qt.vsub(Et,ue);var _e=ue.dot(Ft),ye=Rt;if(gt.vsub(Et,ye),_e<0&&ye.dot(Ft)>0){for(var Ae=[],jt=0,Kt=Ct.length;jt!==Kt;jt++){var xe=rt.get();Pt.vmult(kt[Ct[jt]],xe),yt.vadd(xe,xe),Ae.push(xe)}if(j(Ae,Ft,gt)){_t=!0;var V=this.createContactEquation(wt,Dt,lt,ht);Ft.mult(-It,V.ri),Ft.negate(V.ni);var de=rt.get();Ft.mult(-_e,de);var Ce=rt.get();Ft.mult(-It,Ce),gt.vsub(yt,V.rj),V.rj.vadd(Ce,V.rj),V.rj.vadd(de,V.rj),V.rj.vadd(yt,V.rj),V.rj.vsub(Dt.position,V.rj),V.ri.vadd(gt,V.ri),V.ri.vsub(wt.position,V.ri),rt.release(de),rt.release(Ce),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var jt=0,Le=Ae.length;jt!==Le;jt++)rt.release(Ae[jt]);return}else for(var jt=0;jt!==Ct.length;jt++){var Te=rt.get(),He=rt.get();Pt.vmult(kt[Ct[(jt+1)%Ct.length]],Te),Pt.vmult(kt[Ct[(jt+2)%Ct.length]],He),yt.vadd(Te,Te),yt.vadd(He,He);var Se=Q;He.vsub(Te,Se);var Yt=ct;Se.unit(Yt);var ze=rt.get(),pe=rt.get();gt.vsub(Te,pe);var cn=pe.dot(Yt);Yt.mult(cn,ze),ze.vadd(Te,ze);var An=rt.get();if(ze.vsub(gt,An),cn>0&&cn*cn<Se.norm2()&&An.norm2()<It*It){var V=this.createContactEquation(wt,Dt,lt,ht);ze.vsub(yt,V.rj),ze.vsub(gt,V.ni),V.ni.normalize(),V.ni.mult(It,V.ri),V.rj.vadd(yt,V.rj),V.rj.vsub(Dt.position,V.rj),V.ri.vadd(gt,V.ri),V.ri.vsub(wt.position,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(var jt=0,Le=Ae.length;jt!==Le;jt++)rt.release(Ae[jt]);rt.release(Te),rt.release(He),rt.release(ze),rt.release(An),rt.release(pe);return}rt.release(Te),rt.release(He),rt.release(ze),rt.release(An),rt.release(pe)}for(var jt=0,Le=Ae.length;jt!==Le;jt++)rt.release(Ae[jt])}}},new l,new l,g.prototype[r.types.PLANE|r.types.BOX]=g.prototype.planeBox=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){ht.convexPolyhedronRepresentation.material=ht.material,ht.convexPolyhedronRepresentation.collisionResponse=ht.collisionResponse,this.planeConvex(lt,ht.convexPolyhedronRepresentation,gt,yt,Xt,Pt,wt,Dt)};var Wt=new l,Vt=new l,Ht=new l,Qt=new l;g.prototype[r.types.PLANE|r.types.CONVEXPOLYHEDRON]=g.prototype.planeConvex=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=Wt,Tt=Vt;Tt.set(0,0,1),Xt.vmult(Tt,Tt);for(var Ut=0,kt=Ht,It=0;It!==ht.vertices.length;It++){rt.copy(ht.vertices[It]),Pt.vmult(rt,rt),yt.vadd(rt,rt),rt.vsub(gt,kt);var A=Tt.dot(kt);if(A<=0){var O=this.createContactEquation(wt,Dt,lt,ht),$=Qt;Tt.mult(Tt.dot(kt),$),rt.vsub($,$),$.vsub(gt,O.ri),O.ni.copy(Tt),rt.vsub(yt,O.rj),O.ri.vadd(gt,O.ri),O.ri.vsub(wt.position,O.ri),O.rj.vadd(yt,O.rj),O.rj.vsub(Dt.position,O.rj),this.result.push(O),Ut++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(O,this.frictionResult)}}this.enableFrictionReduction&&Ut&&this.createFrictionFromAverage(Ut)};var Zt=new l,ee=new l;g.prototype[r.types.CONVEXPOLYHEDRON]=g.prototype.convexConvex=function(lt,ht,gt,yt,Xt,Pt,wt,Dt,rt,Tt,Ut,kt){var It=Zt;if(!(gt.distanceTo(yt)>lt.boundingSphereRadius+ht.boundingSphereRadius)&&lt.findSeparatingAxis(ht,gt,Xt,yt,Pt,It,Ut,kt)){var A=[],O=ee;lt.clipAgainstHull(gt,Xt,ht,yt,Pt,It,-100,100,A);for(var $=0,Z=0;Z!==A.length;Z++){var V=this.createContactEquation(wt,Dt,lt,ht,rt,Tt),_t=V.ri,St=V.rj;It.negate(V.ni),A[Z].normal.negate(O),O.mult(A[Z].depth,O),A[Z].point.vadd(O,_t),St.copy(A[Z].point),_t.vsub(gt,_t),St.vsub(yt,St),_t.vadd(gt,_t),_t.vsub(wt.position,_t),St.vadd(yt,St),St.vsub(Dt.position,St),this.result.push(V),$++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(V,this.frictionResult)}this.enableFrictionReduction&&$&&this.createFrictionFromAverage($)}};var ie=new l,se=new l,Gt=new l;g.prototype[r.types.PLANE|r.types.PARTICLE]=g.prototype.planeParticle=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=ie;rt.set(0,0,1),wt.quaternion.vmult(rt,rt);var Tt=se;yt.vsub(wt.position,Tt);var Ut=rt.dot(Tt);if(Ut<=0){var kt=this.createContactEquation(Dt,wt,ht,lt);kt.ni.copy(rt),kt.ni.negate(kt.ni),kt.ri.set(0,0,0);var It=Gt;rt.mult(rt.dot(yt),It),yt.vsub(It,It),kt.rj.copy(It),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}};var S=new l;g.prototype[r.types.PARTICLE|r.types.SPHERE]=g.prototype.sphereParticle=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=S;rt.set(0,0,1),yt.vsub(gt,rt);var Tt=rt.norm2();if(Tt<=lt.radius*lt.radius){var Ut=this.createContactEquation(Dt,wt,ht,lt);rt.normalize(),Ut.rj.copy(rt),Ut.rj.mult(lt.radius,Ut.rj),Ut.ni.copy(rt),Ut.ni.negate(Ut.ni),Ut.ri.set(0,0,0),this.result.push(Ut),this.createFrictionEquationsFromContact(Ut,this.frictionResult)}};var it=new u,dt=new l;new l;var bt=new l,Nt=new l,ne=new l;g.prototype[r.types.PARTICLE|r.types.CONVEXPOLYHEDRON]=g.prototype.convexParticle=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=-1,Tt=bt,Ut=ne,kt=null,It=dt;if(It.copy(yt),It.vsub(gt,It),Xt.conjugate(it),it.vmult(It,It),lt.pointIsInside(It)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(gt,Xt),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(Xt);for(var A=0,O=lt.faces.length;A!==O;A++){var $=[lt.worldVertices[lt.faces[A][0]]],Z=lt.worldFaceNormals[A];yt.vsub($[0],Nt);var V=-Z.dot(Nt);(kt===null||Math.abs(V)<Math.abs(kt))&&(kt=V,rt=A,Tt.copy(Z))}if(rt!==-1){var _t=this.createContactEquation(Dt,wt,ht,lt);Tt.mult(kt,Ut),Ut.vadd(yt,Ut),Ut.vsub(gt,Ut),_t.rj.copy(Ut),Tt.negate(_t.ni),_t.ri.set(0,0,0);var St=_t.ri,zt=_t.rj;St.vadd(yt,St),St.vsub(Dt.position,St),zt.vadd(gt,zt),zt.vsub(wt.position,zt),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},g.prototype[r.types.BOX|r.types.HEIGHTFIELD]=g.prototype.boxHeightfield=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,ht,gt,yt,Xt,Pt,wt,Dt)};var te=new l,fe=new l,Ee=[0];g.prototype[r.types.CONVEXPOLYHEDRON|r.types.HEIGHTFIELD]=g.prototype.convexHeightfield=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=ht.data,Tt=ht.elementSize,Ut=lt.boundingSphereRadius,kt=fe,It=Ee,A=te;h.pointToLocalFrame(yt,Pt,gt,A);var O=Math.floor((A.x-Ut)/Tt)-1,$=Math.ceil((A.x+Ut)/Tt)+1,Z=Math.floor((A.y-Ut)/Tt)-1,V=Math.ceil((A.y+Ut)/Tt)+1;if(!($<0||V<0||O>rt.length||Z>rt[0].length)){O<0&&(O=0),$<0&&($=0),Z<0&&(Z=0),V<0&&(V=0),O>=rt.length&&(O=rt.length-1),$>=rt.length&&($=rt.length-1),V>=rt[0].length&&(V=rt[0].length-1),Z>=rt[0].length&&(Z=rt[0].length-1);var _t=[];ht.getRectMinMax(O,Z,$,V,_t);var St=_t[0],zt=_t[1];if(!(A.z-Ut>zt||A.z+Ut<St))for(var Ct=O;Ct<$;Ct++)for(var Ft=Z;Ft<V;Ft++)ht.getConvexTrianglePillar(Ct,Ft,!1),h.pointToWorldFrame(yt,Pt,ht.pillarOffset,kt),gt.distanceTo(kt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ht.pillarConvex,gt,kt,Xt,Pt,wt,Dt,null,null,It,null),ht.getConvexTrianglePillar(Ct,Ft,!0),h.pointToWorldFrame(yt,Pt,ht.pillarOffset,kt),gt.distanceTo(kt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,ht.pillarConvex,gt,kt,Xt,Pt,wt,Dt,null,null,It,null)}};var he=new l,le=new l;g.prototype[r.types.SPHERE|r.types.HEIGHTFIELD]=g.prototype.sphereHeightfield=function(lt,ht,gt,yt,Xt,Pt,wt,Dt){var rt=ht.data,Tt=lt.radius,Ut=ht.elementSize,kt=le,It=he;h.pointToLocalFrame(yt,Pt,gt,It);var A=Math.floor((It.x-Tt)/Ut)-1,O=Math.ceil((It.x+Tt)/Ut)+1,$=Math.floor((It.y-Tt)/Ut)-1,Z=Math.ceil((It.y+Tt)/Ut)+1;if(!(O<0||Z<0||A>rt.length||Z>rt[0].length)){A<0&&(A=0),O<0&&(O=0),$<0&&($=0),Z<0&&(Z=0),A>=rt.length&&(A=rt.length-1),O>=rt.length&&(O=rt.length-1),Z>=rt[0].length&&(Z=rt[0].length-1),$>=rt[0].length&&($=rt[0].length-1);var V=[];ht.getRectMinMax(A,$,O,Z,V);var _t=V[0],St=V[1];if(!(It.z-Tt>St||It.z+Tt<_t))for(var zt=this.result,Ct=A;Ct<O;Ct++)for(var Ft=$;Ft<Z;Ft++){var Et=zt.length;ht.getConvexTrianglePillar(Ct,Ft,!1),h.pointToWorldFrame(yt,Pt,ht.pillarOffset,kt),gt.distanceTo(kt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ht.pillarConvex,gt,kt,Xt,Pt,wt,Dt),ht.getConvexTrianglePillar(Ct,Ft,!0),h.pointToWorldFrame(yt,Pt,ht.pillarOffset,kt),gt.distanceTo(kt)<ht.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,ht.pillarConvex,gt,kt,Xt,Pt,wt,Dt);var qt=zt.length-Et;if(qt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=x;var s=e("../shapes/Shape"),r=e("../math/Vec3"),a=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),u=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),g=e("../objects/Body"),v=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),_=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new r,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new v,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new p;var w=new _;if(x.prototype.getContactMaterial=function(N,K){return this.contactMaterialTable.get(N.id,K.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var N=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=N,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(N){this.bodies.indexOf(N)===-1&&(N.index=this.bodies.length,this.bodies.push(N),N.world=this,N.initPosition.copy(N.position),N.initVelocity.copy(N.velocity),N.timeLastSleepy=this.time,N instanceof g&&(N.initAngularVelocity.copy(N.angularVelocity),N.initQuaternion.copy(N.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=N,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(N){this.constraints.push(N)},x.prototype.removeConstraint=function(N){var K=this.constraints.indexOf(N);K!==-1&&this.constraints.splice(K,1)},x.prototype.rayTest=function(N,K,Y){Y instanceof m?this.raycastClosest(N,K,{skipBackfaces:!0},Y):this.raycastAll(N,K,{skipBackfaces:!0},Y)},x.prototype.raycastAll=function(N,K,Y,z){return Y.mode=_.ALL,Y.from=N,Y.to=K,Y.callback=z,w.intersectWorld(this,Y)},x.prototype.raycastAny=function(N,K,Y,z){return Y.mode=_.ANY,Y.from=N,Y.to=K,Y.result=z,w.intersectWorld(this,Y)},x.prototype.raycastClosest=function(N,K,Y,z){return Y.mode=_.CLOSEST,Y.from=N,Y.to=K,Y.result=z,w.intersectWorld(this,Y)},x.prototype.remove=function(N){N.world=null;var K=this.bodies.length-1,Y=this.bodies,z=Y.indexOf(N);if(z!==-1){Y.splice(z,1);for(var tt=0;tt!==Y.length;tt++)Y[tt].index=tt;this.collisionMatrix.setNumObjects(K),this.removeBodyEvent.body=N,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(N){this.materials.push(N)},x.prototype.addContactMaterial=function(N){this.contactmaterials.push(N),this.contactMaterialTable.set(N.materials[0].id,N.materials[1].id,N)},typeof performance>"u"&&(performance={}),!performance.now){var T=Date.now();performance.timing&&performance.timing.navigationStart&&(T=performance.timing.navigationStart),performance.now=function(){return Date.now()-T}}var I=new r;x.prototype.step=function(N,K,Y){if(Y=Y||10,K=K||0,K===0)this.internalStep(N),this.time+=N;else{var z=Math.floor((this.time+K)/N)-Math.floor(this.time/N);z=Math.min(z,Y);for(var tt=performance.now(),k=0;k!==z&&(this.internalStep(N),!(performance.now()-tt>N*1e3));k++);this.time+=K;for(var R=this.time%N,P=R/N,G=I,J=this.bodies,nt=0;nt!==J.length;nt++){var j=J[nt];j.type!==g.STATIC&&j.sleepState!==g.SLEEPING?(j.position.vsub(j.previousPosition,G),G.scale(P,G),j.position.vadd(G,j.interpolatedPosition)):(j.interpolatedPosition.copy(j.position),j.interpolatedQuaternion.copy(j.quaternion))}}};var D={type:"postStep"},E={type:"preStep"},M={type:"collide",body:null,contact:null},C=[],F=[],L=[],W=[];new r,new r,new r,new r,new r,new r,new r,new r,new r,new a;var X=new a,ot=new a,H=new r;x.prototype.internalStep=function(N){this.dt=N;var K=this.contacts,Y=L,z=W,tt=this.numObjects(),k=this.bodies,R=this.solver,P=this.gravity,G=this.doProfiling,J=this.profile,nt=g.DYNAMIC,j,at=this.constraints,B=F;P.norm();var xt=P.x,pt=P.y,Mt=P.z,st=0;for(G&&(j=performance.now()),st=0;st!==tt;st++){var ft=k[st];if(ft.type&nt){var U=ft.force,b=ft.mass;U.x+=b*xt,U.y+=b*pt,U.z+=b*Mt}}for(var st=0,et=this.subsystems.length;st!==et;st++)this.subsystems[st].update();G&&(j=performance.now()),Y.length=0,z.length=0,this.broadphase.collisionPairs(this,Y,z),G&&(J.broadphase=performance.now()-j);var Zt=at.length;for(st=0;st!==Zt;st++){var Q=at[st];if(!Q.collideConnected)for(var ct=Y.length-1;ct>=0;ct-=1)(Q.bodyA===Y[ct]&&Q.bodyB===z[ct]||Q.bodyB===Y[ct]&&Q.bodyA===z[ct])&&(Y.splice(ct,1),z.splice(ct,1))}this.collisionMatrixTick(),G&&(j=performance.now());var ut=C,Lt=K.length;for(st=0;st!==Lt;st++)ut.push(K[st]);K.length=0;var mt=this.frictionEquations.length;for(st=0;st!==mt;st++)B.push(this.frictionEquations[st]);this.frictionEquations.length=0,this.narrowphase.getContacts(Y,z,this,K,ut,this.frictionEquations,B),G&&(J.narrowphase=performance.now()-j),G&&(j=performance.now());for(var st=0;st<this.frictionEquations.length;st++)R.addEquation(this.frictionEquations[st]);for(var At=K.length,Bt=0;Bt!==At;Bt++){var Q=K[Bt],ft=Q.bi,vt=Q.bj;Q.si,Q.sj;var Rt;if(ft.material&&vt.material?Rt=this.getContactMaterial(ft.material,vt.material)||this.defaultContactMaterial:Rt=this.defaultContactMaterial,Rt.friction,ft.material&&vt.material&&(ft.material.friction>=0&&vt.material.friction>=0&&ft.material.friction*vt.material.friction,ft.material.restitution>=0&&vt.material.restitution>=0&&(Q.restitution=ft.material.restitution*vt.material.restitution)),R.addEquation(Q),ft.allowSleep&&ft.type===g.DYNAMIC&&ft.sleepState===g.SLEEPING&&vt.sleepState===g.AWAKE&&vt.type!==g.STATIC){var Wt=vt.velocity.norm2()+vt.angularVelocity.norm2(),Vt=Math.pow(vt.sleepSpeedLimit,2);Wt>=Vt*2&&(ft._wakeUpAfterNarrowphase=!0)}if(vt.allowSleep&&vt.type===g.DYNAMIC&&vt.sleepState===g.SLEEPING&&ft.sleepState===g.AWAKE&&ft.type!==g.STATIC){var Ht=ft.velocity.norm2()+ft.angularVelocity.norm2(),Qt=Math.pow(ft.sleepSpeedLimit,2);Ht>=Qt*2&&(vt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ft,vt,!0),this.collisionMatrixPrevious.get(ft,vt)||(M.body=vt,M.contact=Q,ft.dispatchEvent(M),M.body=ft,vt.dispatchEvent(M))}for(G&&(J.makeContactConstraints=performance.now()-j,j=performance.now()),st=0;st!==tt;st++){var ft=k[st];ft._wakeUpAfterNarrowphase&&(ft.wakeUp(),ft._wakeUpAfterNarrowphase=!1)}var Zt=at.length;for(st=0;st!==Zt;st++){var Q=at[st];Q.update();for(var ct=0,ee=Q.equations.length;ct!==ee;ct++){var ie=Q.equations[ct];R.addEquation(ie)}}R.solve(N,this),G&&(J.solve=performance.now()-j),R.removeAllEquations();var se=Math.pow;for(st=0;st!==tt;st++){var ft=k[st];if(ft.type&nt){var Gt=se(1-ft.linearDamping,N),S=ft.velocity;S.mult(Gt,S);var it=ft.angularVelocity;if(it){var dt=se(1-ft.angularDamping,N);it.mult(dt,it)}}}for(this.dispatchEvent(E),st=0;st!==tt;st++){var ft=k[st];ft.preStep&&ft.preStep.call(ft)}G&&(j=performance.now());var bt=X,Nt=ot,ne=this.stepnumber,te=g.DYNAMIC|g.KINEMATIC,fe=ne%(this.quatNormalizeSkip+1)===0,Ee=this.quatNormalizeFast,he=N*.5;for(s.types.PLANE,s.types.CONVEXPOLYHEDRON,st=0;st!==tt;st++){var le=k[st],lt=le.force,ht=le.torque;if(le.type&te&&le.sleepState!==g.SLEEPING){var gt=le.velocity,yt=le.angularVelocity,Xt=le.position,Pt=le.quaternion,wt=le.invMass,Dt=le.invInertiaWorld;gt.x+=lt.x*wt*N,gt.y+=lt.y*wt*N,gt.z+=lt.z*wt*N,le.angularVelocity&&(Dt.vmult(ht,H),H.mult(N,H),H.vadd(yt,yt)),Xt.x+=gt.x*N,Xt.y+=gt.y*N,Xt.z+=gt.z*N,le.angularVelocity&&(bt.set(yt.x,yt.y,yt.z,0),bt.mult(Pt,Nt),Pt.x+=he*Nt.x,Pt.y+=he*Nt.y,Pt.z+=he*Nt.z,Pt.w+=he*Nt.w,fe&&(Ee?Pt.normalizeFast():Pt.normalize())),le.aabb&&(le.aabbNeedsUpdate=!0),le.updateInertiaWorld&&le.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(J.integrate=performance.now()-j),this.time+=N,this.stepnumber+=1,this.dispatchEvent(D),st=0;st!==tt;st++){var ft=k[st],rt=ft.postStep;rt&&rt.call(ft)}if(this.allowSleep)for(st=0;st!==tt;st++)k[st].sleepTick(this.time)},x.prototype.clearForces=function(){for(var N=this.bodies,K=N.length,Y=0;Y!==K;Y++){var z=N[Y];z.force,z.torque,z.force.set(0,0,0),z.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Gl);var Xe=Gl.exports;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="163",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dc=0,Go=1,Uc=2,Wl=1,ro=2,Ln=3,Un=0,Je=1,_n=2,Zn=0,Hi=1,Wo=2,Xo=3,qo=4,Fc=5,hi=100,Bc=101,Oc=102,zc=103,Vc=104,kc=200,Hc=201,Gc=202,Wc=203,oo=204,ao=205,Xc=206,qc=207,Yc=208,jc=209,$c=210,Kc=211,Zc=212,Jc=213,Qc=214,th=0,eh=1,nh=2,sr=3,ih=4,sh=5,rh=6,oh=7,bo=0,ah=1,lh=2,Jn=0,ch=1,hh=2,uh=3,dh=4,fh=5,ph=6,mh=7,Yo="attached",gh="detached",Xl=300,qi=301,Yi=302,lo=303,co=304,dr=306,di=1e3,jn=1001,rr=1002,Ke=1003,ql=1004,us=1005,nn=1006,er=1007,Nn=1008,Qn=1009,vh=1010,_h=1011,Yl=1012,jl=1013,ji=1014,xn=1015,or=1016,$l=1017,Kl=1018,Ms=1020,yh=35902,xh=1021,Mh=1022,pn=1023,Sh=1024,Eh=1025,Gi=1026,vs=1027,Zl=1028,Jl=1029,bh=1030,Ql=1031,tc=1033,vr=33776,_r=33777,yr=33778,xr=33779,jo=35840,$o=35841,Ko=35842,Zo=35843,ec=36196,Jo=37492,Qo=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,Mr=36492,pa=36494,ma=36495,Ah=36283,ga=36284,va=36285,_a=36286,nc=2200,wh=2201,Th=2202,_s=2300,$i=2301,Sr=2302,Oi=2400,zi=2401,ar=2402,Ao=2500,Rh=2501,Ch=0,ic=1,ho=2,Ph=3200,Ih=3201,wo=0,Lh=1,Yn="",je="srgb",ke="srgb-linear",To="display-p3",fr="display-p3-linear",lr="linear",be="srgb",cr="rec709",hr="p3",yi=7680,ya=519,Nh=512,Dh=513,Uh=514,sc=515,Fh=516,Bh=517,Oh=518,zh=519,uo=35044,xa="300 es",Dn=2e3,ur=2001;class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ma=1234567;const fs=Math.PI/180,Ki=180/Math.PI;function mn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[o&255]+Ge[o>>8&255]+Ge[o>>16&255]+Ge[o>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ve(o,t,e){return Math.max(t,Math.min(e,o))}function Ro(o,t){return(o%t+t)%t}function Vh(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function kh(o,t,e){return o!==t?(e-o)/(t-o):0}function ps(o,t,e){return(1-e)*o+e*t}function Hh(o,t,e,n){return ps(o,t,1-Math.exp(-e*n))}function Gh(o,t=1){return t-Math.abs(Ro(o,t*2)-t)}function Wh(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Xh(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function qh(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Yh(o,t){return o+Math.random()*(t-o)}function jh(o){return o*(.5-Math.random())}function $h(o){o!==void 0&&(Ma=o);let t=Ma+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kh(o){return o*fs}function Zh(o){return o*Ki}function Jh(o){return(o&o-1)===0&&o!==0}function Qh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function tu(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function eu(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),h=s((t+n)/2),u=r((t+n)/2),c=s((t-n)/2),d=r((t-n)/2),f=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":o.set(a*u,l*c,l*d,a*h);break;case"YZY":o.set(l*d,a*u,l*c,a*h);break;case"ZXZ":o.set(l*c,l*d,a*u,a*h);break;case"XZX":o.set(a*u,l*g,l*f,a*h);break;case"YXY":o.set(l*f,a*u,l*g,a*h);break;case"ZYZ":o.set(l*g,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const rc={DEG2RAD:fs,RAD2DEG:Ki,generateUUID:mn,clamp:Ve,euclideanModulo:Ro,mapLinear:Vh,inverseLerp:kh,lerp:ps,damp:Hh,pingpong:Gh,smoothstep:Wh,smootherstep:Xh,randInt:qh,randFloat:Yh,randFloatSpread:jh,seededRandom:$h,degToRad:Kh,radToDeg:Zh,isPowerOfTwo:Jh,ceilPowerOfTwo:Qh,floorPowerOfTwo:tu,setQuaternionFromProperEuler:eu,normalize:ve,denormalize:fn};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,i,s,r,a,l,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,h)}set(t,e,n,i,s,r,a,l,h){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],w=i[2],T=i[5],I=i[8];return s[0]=r*v+a*_+l*w,s[3]=r*m+a*y+l*T,s[6]=r*p+a*x+l*I,s[1]=h*v+u*_+c*w,s[4]=h*m+u*y+c*T,s[7]=h*p+u*x+c*I,s[2]=d*v+f*_+g*w,s[5]=d*m+f*y+g*T,s[8]=d*p+f*x+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*r*u-e*a*h-n*s*u+n*a*l+i*s*h-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=u*r-a*h,d=a*l-u*s,f=h*s-r*l,g=e*c+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=c*v,t[1]=(i*h-u*n)*v,t[2]=(a*n-i*r)*v,t[3]=d*v,t[4]=(u*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-h*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),h=Math.sin(s);return this.set(n*l,n*h,-n*(l*r+h*a)+r+t,-i*h,i*l,-i*(-h*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new oe;function oc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ys(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nu(){const o=ys("canvas");return o.style.display="block",o}const Sa={};function ac(o){o in Sa||(Sa[o]=!0,console.warn(o))}const Ea=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[ke]:{transfer:lr,primaries:cr,toReference:o=>o,fromReference:o=>o},[je]:{transfer:be,primaries:cr,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[fr]:{transfer:lr,primaries:hr,toReference:o=>o.applyMatrix3(ba),fromReference:o=>o.applyMatrix3(Ea)},[To]:{transfer:be,primaries:hr,toReference:o=>o.convertSRGBToLinear().applyMatrix3(ba),fromReference:o=>o.applyMatrix3(Ea).convertLinearToSRGB()}},iu=new Set([ke,fr]),ge={enabled:!0,_workingColorSpace:ke,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!iu.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=ws[t].toReference,i=ws[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return ws[o].primaries},getTransfer:function(o){return o===Yn?lr:ws[o].transfer}};function Wi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function br(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xi;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=ys("canvas")),xi.width=t.width,xi.height=t.height;const n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Wi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ru=0;class lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Ar(i[r].image)):s.push(Ar(i[r]))}else s=Ar(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ar(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?su.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ou=0;class Oe extends ei{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=jn,i=jn,s=nn,r=Nn,a=pn,l=Qn,h=Oe.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=mn(),this.name="",this.source=new lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Xl;Oe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,x=(f+1)/2,w=(p+1)/2,T=(u+d)/4,I=(c+v)/4,D=(g+m)/4;return y>x&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=I/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=D/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=I/s,i=D/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(c-v)*(c-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(c-v)/_,this.z=(d-u)/_,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class au extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends au{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cc extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lu extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],v=s[r+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(c!==v||l!==d||h!==f||u!==g){let m=1-a;const p=l*d+h*f+u*g+c*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),T=Math.atan2(w,p*_);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const x=a*_;if(l=l*m+d*x,h=h*m+f*x,u=u*m+g*x,c=c*m+v*x,m===1-a){const w=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=w,h*=w,u*=w,c*=w}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+u*c+l*f-h*d,t[e+1]=l*g+u*d+h*c-a*f,t[e+2]=h*g+u*f+a*d-l*c,t[e+3]=u*g-a*c-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"YXZ":this._x=d*u*c+h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"ZXY":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c-d*f*g;break;case"ZYX":this._x=d*u*c-h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c+d*f*g;break;case"YZX":this._x=d*u*c+h*f*g,this._y=h*f*c+d*u*g,this._z=h*u*g-d*f*c,this._w=h*u*c-d*f*g;break;case"XZY":this._x=d*u*c-h*f*g,this._y=h*f*c-d*u*g,this._z=h*u*g+d*f*c,this._w=h*u*c+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-h)*f,this._z=(r-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(s-h)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(r-i)/f,this._x=(s+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+r*a+i*h-s*l,this._y=i*u+r*l+s*a-n*h,this._z=s*u+r*h+n*l-i*a,this._w=r*u-n*a-i*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=r*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Aa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Aa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,h=2*(r*i-a*n),u=2*(a*e-s*i),c=2*(s*n-r*e);return this.x=e+l*h+r*c-a*u,this.y=n+l*u+a*h-s*c,this.z=i+l*c+s*u-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new q,Aa=new sn;class Fn{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,hn):hn.fromBufferAttribute(s,r),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Rs.subVectors(this.max,is),Mi.subVectors(t.a,is),Si.subVectors(t.b,is),Ei.subVectors(t.c,is),On.subVectors(Si,Mi),zn.subVectors(Ei,Si),ni.subVectors(Mi,Ei);let e=[0,-On.z,On.y,0,-zn.z,zn.y,0,-ni.z,ni.y,On.z,0,-On.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-On.y,On.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!Tr(e,Mi,Si,Ei,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Tr(e,Mi,Si,Ei,Rs))?!1:(Cs.crossVectors(On,zn),e=[Cs.x,Cs.y,Cs.z],Tr(e,Mi,Si,Ei,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new q,new q,new q,new q,new q,new q,new q,new q],hn=new q,Ts=new Fn,Mi=new q,Si=new q,Ei=new q,On=new q,zn=new q,ni=new q,is=new q,Rs=new q,Cs=new q,ii=new q;function Tr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ii.fromArray(o,s);const a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=t.dot(ii),h=e.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const cu=new Fn,ss=new q,Rr=new q;class En{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Rr)),this.expandByPoint(ss.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new q,Cr=new q,Ps=new q,Vn=new q,Pr=new q,Is=new q,Ir=new q;class Ss{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Cr.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Cr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Ps),a=Vn.dot(this.direction),l=-Vn.dot(Ps),h=Vn.lengthSq(),u=Math.abs(1-r*r);let c,d,f,g;if(u>0)if(c=r*l-a,d=r*a-l,g=s*u,c>=0)if(d>=-g)if(d<=g){const v=1/u;c*=v,d*=v,f=c*(c+r*d+2*a)+d*(r*c+d+2*l)+h}else d=s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;else d=-s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-g?(c=Math.max(0,-(-r*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h):d<=g?(c=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(c=Math.max(0,-(r*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h);else d=r>0?-s:s,c=Math.max(0,-(r*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Cr).addScaledVector(Ps,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,s){Pr.subVectors(e,t),Is.subVectors(n,t),Ir.crossVectors(Pr,Is);let r=this.direction.dot(Ir),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(Is.crossVectors(Vn,Is));if(l<0)return null;const h=a*this.direction.dot(Pr.cross(Vn));if(h<0||l+h>r)return null;const u=-a*Vn.dot(Ir);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,s,r,a,l,h,u,c,d,f,g,v,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,h,u,c,d,f,g,v,m)}set(t,e,n,i,s,r,a,l,h,u,c,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),s=1/bi.setFromMatrixColumn(t,1).length(),r=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(s),c=Math.sin(s);if(t.order==="XYZ"){const d=r*u,f=r*c,g=a*u,v=a*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=f+g*h,e[5]=d-v*h,e[9]=-a*l,e[2]=v-d*h,e[6]=g+f*h,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,f=l*c,g=h*u,v=h*c;e[0]=d+v*a,e[4]=g*a-f,e[8]=r*h,e[1]=r*c,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,f=l*c,g=h*u,v=h*c;e[0]=d-v*a,e[4]=-r*c,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=v-d*a,e[2]=-r*h,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,f=r*c,g=a*u,v=a*c;e[0]=l*u,e[4]=g*h-f,e[8]=d*h+v,e[1]=l*c,e[5]=v*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*h,g=a*l,v=a*h;e[0]=l*u,e[4]=v-d*c,e[8]=g*c+f,e[1]=c,e[5]=r*u,e[9]=-a*u,e[2]=-h*u,e[6]=f*c+g,e[10]=d-v*c}else if(t.order==="XZY"){const d=r*l,f=r*h,g=a*l,v=a*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+v,e[5]=r*u,e[9]=f*c-g,e[2]=g*c-f,e[6]=a*u,e[10]=v*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,uu)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),kn.crossVectors(n,tn),kn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),kn.crossVectors(n,tn)),kn.normalize(),Ls.crossVectors(tn,kn),i[0]=kn.x,i[4]=Ls.x,i[8]=tn.x,i[1]=kn.y,i[5]=Ls.y,i[9]=tn.y,i[2]=kn.z,i[6]=Ls.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],w=n[15],T=i[0],I=i[4],D=i[8],E=i[12],M=i[1],C=i[5],F=i[9],L=i[13],W=i[2],X=i[6],ot=i[10],H=i[14],N=i[3],K=i[7],Y=i[11],z=i[15];return s[0]=r*T+a*M+l*W+h*N,s[4]=r*I+a*C+l*X+h*K,s[8]=r*D+a*F+l*ot+h*Y,s[12]=r*E+a*L+l*H+h*z,s[1]=u*T+c*M+d*W+f*N,s[5]=u*I+c*C+d*X+f*K,s[9]=u*D+c*F+d*ot+f*Y,s[13]=u*E+c*L+d*H+f*z,s[2]=g*T+v*M+m*W+p*N,s[6]=g*I+v*C+m*X+p*K,s[10]=g*D+v*F+m*ot+p*Y,s[14]=g*E+v*L+m*H+p*z,s[3]=_*T+y*M+x*W+w*N,s[7]=_*I+y*C+x*X+w*K,s[11]=_*D+y*F+x*ot+w*Y,s[15]=_*E+y*L+x*H+w*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*c-i*h*c-s*a*d+n*h*d+i*a*f-n*l*f)+v*(+e*l*f-e*h*d+s*r*d-i*r*f+i*h*u-s*l*u)+m*(+e*h*c-e*a*f-s*r*c+n*r*f+s*a*u-n*h*u)+p*(-i*a*u-e*l*c+e*a*d+i*r*c-n*r*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=c*m*h-v*d*h+v*l*f-a*m*f-c*l*p+a*d*p,y=g*d*h-u*m*h-g*l*f+r*m*f+u*l*p-r*d*p,x=u*v*h-g*c*h+g*a*f-r*v*f-u*a*p+r*c*p,w=g*c*l-u*v*l-g*a*d+r*v*d+u*a*m-r*c*m,T=e*_+n*y+i*x+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/T;return t[0]=_*I,t[1]=(v*d*s-c*m*s-v*i*f+n*m*f+c*i*p-n*d*p)*I,t[2]=(a*m*s-v*l*s+v*i*h-n*m*h-a*i*p+n*l*p)*I,t[3]=(c*l*s-a*d*s-c*i*h+n*d*h+a*i*f-n*l*f)*I,t[4]=y*I,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*I,t[6]=(g*l*s-r*m*s-g*i*h+e*m*h+r*i*p-e*l*p)*I,t[7]=(r*d*s-u*l*s+u*i*h-e*d*h-r*i*f+e*l*f)*I,t[8]=x*I,t[9]=(g*c*s-u*v*s-g*n*f+e*v*f+u*n*p-e*c*p)*I,t[10]=(r*v*s-g*a*s+g*n*h-e*v*h-r*n*p+e*a*p)*I,t[11]=(u*a*s-r*c*s-u*n*h+e*c*h+r*n*f-e*a*f)*I,t[12]=w*I,t[13]=(u*v*i-g*c*i+g*n*d-e*v*d-u*n*m+e*c*m)*I,t[14]=(g*a*i-r*v*i-g*n*l+e*v*l+r*n*m-e*a*m)*I,t[15]=(r*c*i-u*a*i+u*n*l-e*c*l-r*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,h=s*r,u=s*a;return this.set(h*r+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*r,0,h*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,h=s+s,u=r+r,c=a+a,d=s*h,f=s*u,g=s*c,v=r*u,m=r*c,p=a*c,_=l*h,y=l*u,x=l*c,w=n.x,T=n.y,I=n.z;return i[0]=(1-(v+p))*w,i[1]=(f+x)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+p))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+y)*I,i[9]=(m-_)*I,i[10]=(1-(d+v))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=bi.set(i[0],i[1],i[2]).length();const r=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const h=1/s,u=1/r,c=1/a;return un.elements[0]*=h,un.elements[1]*=h,un.elements[2]*=h,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=c,un.elements[9]*=c,un.elements[10]*=c,e.setFromRotationMatrix(un),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=Dn){const l=this.elements,h=2*s/(e-t),u=2*s/(n-i),c=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Dn)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===ur)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=Dn){const l=this.elements,h=1/(e-t),u=1/(n-i),c=1/(r-s),d=(e+t)*h,f=(n+i)*u;let g,v;if(a===Dn)g=(r+s)*c,v=-2*c;else if(a===ur)g=s*c,v=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new q,un=new ae,hu=new q(0,0,0),uu=new q(1,1,1),kn=new q,Ls=new q,tn=new q,wa=new ae,Ta=new sn;class gn{constructor(t=0,e=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let du=0;const Ra=new q,Ai=new sn,Rn=new ae,Ns=new q,rs=new q,fu=new q,pu=new sn,Ca=new q(1,0,0),Pa=new q(0,1,0),Ia=new q(0,0,1),La={type:"added"},mu={type:"removed"},wi={type:"childadded",child:null},Lr={type:"childremoved",child:null};class Re extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new q,e=new gn,n=new sn,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new oe}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Ca,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(Ia,t)}translateOnAxis(t,e){return Ra.copy(t).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ca,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(Ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(rs,Ns,this.up):Rn.lookAt(Ns,rs,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(La),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(La),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];s(t.shapes,c)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),h=r(t.textures),u=r(t.images),c=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DEFAULT_UP=new q(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new q,Cn=new q,Nr=new q,Pn=new q,Ti=new q,Ri=new q,Na=new q,Dr=new q,Ur=new q,Fr=new q;class yn{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),Cn.subVectors(n,e),Nr.subVectors(t,e);const r=dn.dot(dn),a=dn.dot(Cn),l=dn.dot(Nr),h=Cn.dot(Cn),u=Cn.dot(Nr),c=r*h-a*a;if(c===0)return s.set(0,0,0),null;const d=1/c,f=(h*l-a*u)*d,g=(r*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(r,Pn.y),l.addScaledVector(a,Pn.z),l)}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Cn.subVectors(t,e),dn.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),dn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;Ti.subVectors(i,n),Ri.subVectors(s,n),Dr.subVectors(t,n);const l=Ti.dot(Dr),h=Ri.dot(Dr);if(l<=0&&h<=0)return e.copy(n);Ur.subVectors(t,i);const u=Ti.dot(Ur),c=Ri.dot(Ur);if(u>=0&&c<=u)return e.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Ti,r);Fr.subVectors(t,s);const f=Ti.dot(Fr),g=Ri.dot(Fr);if(g>=0&&f<=g)return e.copy(s);const v=f*h-l*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Ri,a);const m=u*g-f*c;if(m<=0&&c-u>=0&&f-g>=0)return Na.subVectors(s,i),a=(c-u)/(c-u+(f-g)),e.copy(i).addScaledVector(Na,a);const p=1/(m+v+d);return r=v*p,a=d*p,e.copy(n).addScaledVector(Ti,r).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Br(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Ro(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Br(r,s,t+1/3),this.g=Br(r,s,t),this.b=Br(r,s,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ge.fromWorkingColorSpace(We.copy(this),t),Math.round(Ve(We.r*255,0,255))*65536+Math.round(Ve(We.g*255,0,255))*256+Math.round(Ve(We.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(We.copy(this),e);const n=We.r,i=We.g,s=We.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,h;const u=(a+r)/2;if(a===r)l=0,h=0;else{const c=r-a;switch(h=u<=.5?c/(r+a):c/(2-r-a),r){case n:l=(i-s)/c+(i<s?6:0);break;case i:l=(s-n)/c+2;break;case s:l=(n-i)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=je){ge.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,i=We.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Ds);const n=ps(Hn.h,Ds.h,e),i=ps(Hn.s,Ds.s,e),s=ps(Hn.l,Ds.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Jt;Jt.NAMES=uc;let gu=0;class rn extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Hi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=ao,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mn extends rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new q,Us=new $t;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ac("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),t}}class dc extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fc extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vu=0;const on=new ae,Or=new Re,Ci=new q,en=new Fn,os=new Fn,Be=new q;class Qe extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oc(t)?fc:dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new oe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(en.min,os.min),en.expandByPoint(Be),Be.addVectors(en.max,os.max),en.expandByPoint(Be)):(en.expandByPoint(os.min),en.expandByPoint(os.max))}en.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Be.fromBufferAttribute(a,h),l&&(Ci.fromBufferAttribute(t,h),Be.add(Ci)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new q,l[D]=new q;const h=new q,u=new q,c=new q,d=new $t,f=new $t,g=new $t,v=new q,m=new q;function p(D,E,M){h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,M),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),u.sub(h),c.sub(h),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(C),m.copy(c).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[D].add(v),a[E].add(v),a[M].add(v),l[D].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,E=_.length;D<E;++D){const M=_[D],C=M.start,F=M.count;for(let L=C,W=C+F;L<W;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new q,x=new q,w=new q,T=new q;function I(D){w.fromBufferAttribute(i,D),T.copy(w);const E=a[D];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(T,E);const C=x.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,C)}for(let D=0,E=_.length;D<E;++D){const M=_[D],C=M.start,F=M.count;for(let L=C,W=C+F;L<W;L+=3)I(t.getX(L+0)),I(t.getX(L+1)),I(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,r=new q,a=new q,l=new q,h=new q,u=new q,c=new q;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),u.subVectors(r,s),c.subVectors(i,s),u.cross(c),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),a.add(u),l.add(u),h.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,s),c.subVectors(i,s),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=h[f++]}return new Ze(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=t(l,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(e))}const s=t.morphAttributes;for(const h in s){const u=[],c=s[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,u=r.length;h<u;h++){const c=r[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new ae,si=new Ss,Fs=new En,Ua=new q,Pi=new q,Ii=new q,Li=new q,zr=new q,Bs=new q,Os=new $t,zs=new $t,Vs=new $t,Fa=new q,Ba=new q,Oa=new q,ks=new q,Hs=new q;class De extends Re{constructor(t=new Qe,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Bs.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const u=a[l],c=s[l];u!==0&&(zr.fromBufferAttribute(c,t),r?Bs.addScaledVector(zr,u):Bs.addScaledVector(zr.sub(e),u))}e.add(Bs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(Fs.containsPoint(si.origin)===!1&&(si.intersectSphere(Fs,Ua)===null||si.origin.distanceToSquared(Ua)>(t.far-t.near)**2))&&(Da.copy(s).invert(),si.copy(t.ray).applyMatrix4(Da),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const T=a.getX(x),I=a.getX(x+1),D=a.getX(x+2);i=Gs(this,p,t,n,h,u,c,T,I,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Gs(this,r,t,n,h,u,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const T=x,I=x+1,D=x+2;i=Gs(this,p,t,n,h,u,c,T,I,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;i=Gs(this,r,t,n,h,u,c,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function _u(o,t,e,n,i,s,r,a){let l;if(t.side===Je?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Un,a),l===null)return null;Hs.copy(a),Hs.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Hs);return h<e.near||h>e.far?null:{distance:h,point:Hs.clone(),object:o}}function Gs(o,t,e,n,i,s,r,a,l,h){o.getVertexPosition(a,Pi),o.getVertexPosition(l,Ii),o.getVertexPosition(h,Li);const u=_u(o,t,e,n,Pi,Ii,Li,ks);if(u){i&&(Os.fromBufferAttribute(i,a),zs.fromBufferAttribute(i,l),Vs.fromBufferAttribute(i,h),u.uv=yn.getInterpolation(ks,Pi,Ii,Li,Os,zs,Vs,new $t)),s&&(Os.fromBufferAttribute(s,a),zs.fromBufferAttribute(s,l),Vs.fromBufferAttribute(s,h),u.uv1=yn.getInterpolation(ks,Pi,Ii,Li,Os,zs,Vs,new $t)),r&&(Fa.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Oa.fromBufferAttribute(r,h),u.normal=yn.getInterpolation(ks,Pi,Ii,Li,Fa,Ba,Oa,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a,b:l,c:h,normal:new q,materialIndex:0};yn.getNormal(Pi,Ii,Li,c.normal),u.face=c}return u}class pi extends Qe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],h=[],u=[],c=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(c,2));function g(v,m,p,_,y,x,w,T,I,D,E){const M=x/I,C=w/D,F=x/2,L=w/2,W=T/2,X=I+1,ot=D+1;let H=0,N=0;const K=new q;for(let Y=0;Y<ot;Y++){const z=Y*C-L;for(let tt=0;tt<X;tt++){const k=tt*M-F;K[v]=k*_,K[m]=z*y,K[p]=W,h.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=T>0?1:-1,u.push(K.x,K.y,K.z),c.push(tt/I),c.push(1-Y/D),H+=1}}for(let Y=0;Y<D;Y++)for(let z=0;z<I;z++){const tt=d+z+X*Y,k=d+z+X*(Y+1),R=d+(z+1)+X*(Y+1),P=d+(z+1)+X*Y;l.push(tt,k,P),l.push(k,R,P),N+=6}a.addGroup(f,N,E),f+=N,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(o){const t={};for(let e=0;e<o.length;e++){const n=Zi(o[e]);for(const i in n)t[i]=n[i]}return t}function yu(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function pc(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const xu={clone:Zi,merge:Ye};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mc extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new q,za=new $t,Va=new $t;class $e extends mc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,za,Va),e.subVectors(Va,za)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,h=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/h,i*=r.width/l,n*=r.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Di=1;class Eu extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Ni,Di,t,e);i.layers=this.layers,this.add(i);const s=new $e(Ni,Di,t,e);s.layers=this.layers,this.add(s);const r=new $e(Ni,Di,t,e);r.layers=this.layers,this.add(r);const a=new $e(Ni,Di,t,e);a.layers=this.layers,this.add(a);const l=new $e(Ni,Di,t,e);l.layers=this.layers,this.add(l);const h=new $e(Ni,Di,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const h of e)this.remove(h);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,h,u]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(c,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gc extends Oe{constructor(t,e,n,i,s,r,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,i,s,r,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bu extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pi(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Zn});s.uniforms.tEquirect.value=e;const r=new De(i,s),a=e.minFilter;return e.minFilter===Nn&&(e.minFilter=nn),new Eu(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Vr=new q,Au=new q,wu=new oe;class Xn{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vr.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wu.getNormalMatrix(t),i=this.coplanarPoint(Vr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new En,Ws=new q;class Co{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,s=new Xn,r=new Xn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,d-h,m-f,x-p).normalize(),n[1].setComponents(l+s,d+h,m+f,x+p).normalize(),n[2].setComponents(l+r,d+u,m+g,x+_).normalize(),n[3].setComponents(l-r,d-u,m-g,x-_).normalize(),n[4].setComponents(l-a,d-c,m-v,x-y).normalize(),e===Dn)n[5].setComponents(l+a,d+c,m+v,x+y).normalize();else if(e===ur)n[5].setComponents(a,c,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ws.x=i.normal.x>0?t.max.x:t.min.x,Ws.y=i.normal.y>0?t.max.y:t.min.y,Ws.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vc(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Tu(o){const t=new WeakMap;function e(a,l){const h=a.array,u=a.usage,c=h.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=o.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=o.SHORT;else if(h instanceof Uint32Array)f=o.UNSIGNED_INT;else if(h instanceof Int32Array)f=o.INT;else if(h instanceof Int8Array)f=o.BYTE;else if(h instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){const u=l.array,c=l._updateRange,d=l.updateRanges;if(o.bindBuffer(h,a),c.count===-1&&d.length===0&&o.bufferSubData(h,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];o.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}c.count!==-1&&(o.bufferSubData(h,c.offset*u.BYTES_PER_ELEMENT,u,c.offset,c.count),c.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:s,update:r}}class pr extends Qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const _=p*d-r;for(let y=0;y<h;y++){const x=y*c-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+h*p,x=_+h*(p+1),w=_+1+h*(p+1),T=_+1+h*p;f.push(y,x,T),f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
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
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Hu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zu=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`
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
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,gd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#endif`,Td=`struct PhysicalMaterial {
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
}`,Rd=`
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Od=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
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
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
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
#endif`,Zd=`#ifdef USE_NORMALMAP
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
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Ff=`#if DEPTH_PACKING == 3200
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
}`,Bf=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define MATCAP
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
}`,jf=`#define MATCAP
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
}`,$f=`#define NORMAL
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,tp=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,op=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Iu,alphatest_fragment:Lu,alphatest_pars_fragment:Nu,aomap_fragment:Du,aomap_pars_fragment:Uu,batching_pars_vertex:Fu,batching_vertex:Bu,begin_vertex:Ou,beginnormal_vertex:zu,bsdfs:Vu,iridescence_fragment:ku,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:ju,color_pars_vertex:$u,color_vertex:Ku,common:Zu,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:od,envmap_common_pars_fragment:ad,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Md,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_fragment:gd,lightmap_pars_fragment:vd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:yd,lights_pars_begin:xd,lights_toon_fragment:Sd,lights_toon_pars_fragment:Ed,lights_phong_fragment:bd,lights_phong_pars_fragment:Ad,lights_physical_fragment:wd,lights_physical_pars_fragment:Td,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Nd,logdepthbuf_vertex:Dd,map_fragment:Ud,map_pars_fragment:Fd,map_particle_fragment:Bd,map_particle_pars_fragment:Od,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:kd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:jd,normal_pars_vertex:$d,normal_vertex:Kd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:vf,skinnormal_vertex:_f,specularmap_fragment:yf,specularmap_pars_fragment:xf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:Ef,transmission_pars_fragment:bf,uv_pars_fragment:Af,uv_pars_vertex:wf,uv_vertex:Tf,worldpos_vertex:Rf,background_vert:Cf,background_frag:Pf,backgroundCube_vert:If,backgroundCube_frag:Lf,cube_vert:Nf,cube_frag:Df,depth_vert:Uf,depth_frag:Ff,distanceRGBA_vert:Bf,distanceRGBA_frag:Of,equirect_vert:zf,equirect_frag:Vf,linedashed_vert:kf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:jf,meshnormal_vert:$f,meshnormal_frag:Kf,meshphong_vert:Zf,meshphong_frag:Jf,meshphysical_vert:Qf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:op,sprite_vert:ap,sprite_frag:lp},Ot={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},vn={basic:{uniforms:Ye([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Ye([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Ye([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Ye([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Ye([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Jt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Ye([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Ye([Ot.points,Ot.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Ye([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Ye([Ot.common,Ot.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Ye([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Ye([Ot.sprite,Ot.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Ye([Ot.common,Ot.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Ye([Ot.lights,Ot.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};vn.physical={uniforms:Ye([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const Xs={r:0,b:0,g:0},oi=new gn,cp=new ae;function hp(o,t,e,n,i,s,r){const a=new Jt(0);let l=s===!0?0:1,h,u,c=null,d=0,f=null;function g(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),_=!0);const x=o.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===dr)?(u===void 0&&(u=new De(new pi(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Zi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),oi.copy(p.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(oi)),u.material.toneMapped=ge.getTransfer(y.colorSpace)!==be,(c!==y||d!==y.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new De(new pr(2,2),new ti({name:"BackgroundMaterial",uniforms:Zi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ge.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=o.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function v(m,p){m.getRGB(Xs,pc(o)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function up(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function a(M,C,F,L,W){let X=!1;const ot=c(L,F,C);s!==ot&&(s=ot,h(s.object)),X=f(M,L,F,W),X&&g(M,L,F,W),W!==null&&t.update(W,o.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,x(M,C,F,L),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return o.createVertexArray()}function h(M){return o.bindVertexArray(M)}function u(M){return o.deleteVertexArray(M)}function c(M,C,F){const L=F.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let X=W[C.id];X===void 0&&(X={},W[C.id]=X);let ot=X[L];return ot===void 0&&(ot=d(l()),X[L]=ot),ot}function d(M){const C=[],F=[],L=[];for(let W=0;W<e;W++)C[W]=0,F[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,C,F,L){const W=s.attributes,X=C.attributes;let ot=0;const H=F.getAttributes();for(const N in H)if(H[N].location>=0){const Y=W[N];let z=X[N];if(z===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),Y===void 0||Y.attribute!==z||z&&Y.data!==z.data)return!0;ot++}return s.attributesNum!==ot||s.index!==L}function g(M,C,F,L){const W={},X=C.attributes;let ot=0;const H=F.getAttributes();for(const N in H)if(H[N].location>=0){let Y=X[N];Y===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const z={};z.attribute=Y,Y&&Y.data&&(z.data=Y.data),W[N]=z,ot++}s.attributes=W,s.attributesNum=ot,s.index=L}function v(){const M=s.newAttributes;for(let C=0,F=M.length;C<F;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const F=s.newAttributes,L=s.enabledAttributes,W=s.attributeDivisors;F[M]=1,L[M]===0&&(o.enableVertexAttribArray(M),L[M]=1),W[M]!==C&&(o.vertexAttribDivisor(M,C),W[M]=C)}function _(){const M=s.newAttributes,C=s.enabledAttributes;for(let F=0,L=C.length;F<L;F++)C[F]!==M[F]&&(o.disableVertexAttribArray(F),C[F]=0)}function y(M,C,F,L,W,X,ot){ot===!0?o.vertexAttribIPointer(M,C,F,W,X):o.vertexAttribPointer(M,C,F,L,W,X)}function x(M,C,F,L){v();const W=L.attributes,X=F.getAttributes(),ot=C.defaultAttributeValues;for(const H in X){const N=X[H];if(N.location>=0){let K=W[H];if(K===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const Y=K.normalized,z=K.itemSize,tt=t.get(K);if(tt===void 0)continue;const k=tt.buffer,R=tt.type,P=tt.bytesPerElement,G=R===o.INT||R===o.UNSIGNED_INT||K.gpuType===jl;if(K.isInterleavedBufferAttribute){const J=K.data,nt=J.stride,j=K.offset;if(J.isInstancedInterleavedBuffer){for(let at=0;at<N.locationSize;at++)p(N.location+at,J.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let at=0;at<N.locationSize;at++)m(N.location+at);o.bindBuffer(o.ARRAY_BUFFER,k);for(let at=0;at<N.locationSize;at++)y(N.location+at,z/N.locationSize,R,Y,nt*P,(j+z/N.locationSize*at)*P,G)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<N.locationSize;J++)p(N.location+J,K.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<N.locationSize;J++)m(N.location+J);o.bindBuffer(o.ARRAY_BUFFER,k);for(let J=0;J<N.locationSize;J++)y(N.location+J,z/N.locationSize,R,Y,z*P,z/N.locationSize*J*P,G)}}else if(ot!==void 0){const Y=ot[H];if(Y!==void 0)switch(Y.length){case 2:o.vertexAttrib2fv(N.location,Y);break;case 3:o.vertexAttrib3fv(N.location,Y);break;case 4:o.vertexAttrib4fv(N.location,Y);break;default:o.vertexAttrib1fv(N.location,Y)}}}}_()}function w(){D();for(const M in n){const C=n[M];for(const F in C){const L=C[F];for(const W in L)u(L[W].object),delete L[W];delete C[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const F in C){const L=C[F];for(const W in L)u(L[W].object),delete L[W];delete C[F]}delete n[M.id]}function I(M){for(const C in n){const F=n[C];if(F[M.id]===void 0)continue;const L=F[M.id];for(const W in L)u(L[W].object),delete L[W];delete F[M.id]}}function D(){E(),r=!0,s!==i&&(s=i,h(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function dp(o,t,e){let n;function i(l){n=l}function s(l,h){o.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(o.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let d=0;d<u;d++)this.render(l[d],h[d]);else{c.multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let f=0;f<u;f++)d+=h[f];e.update(d,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a}function fp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=e.precision!==void 0?e.precision:"highp";const a=s(r);a!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",a,"instead."),r=a);const l=e.logarithmicDepthBuffer===!0,h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),u=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=o.getParameter(o.MAX_TEXTURE_SIZE),d=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),f=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),m=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,_=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:c,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:p,maxSamples:_}}function pp(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Xn,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){e=u(c,d,0)},this.setState=function(c,d,f){const g=c.clippingPlanes,v=c.clipIntersection,m=c.clipShadows,p=o.get(c);if(!i||g===null||g.length===0||s&&!m)s?u(null):h();else{const _=s?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=u(g,d,y,f);for(let w=0;w!==y;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,d,f,g){const v=c!==null?c.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)r.copy(c[y]).applyMatrix4(_,a),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function mp(o){let t=new WeakMap;function e(r,a){return a===lo?r.mapping=qi:a===co&&(r.mapping=Yi),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===lo||a===co)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const h=new bu(l.height);return h.fromEquirectangularTexture(o,r),t.set(r,h),r.addEventListener("dispose",i),e(h.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Po extends mc{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,r=s+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,ka=[.125,.215,.35,.446,.526,.582],ui=20,kr=new Po,Ha=new Jt;let Hr=null,Gr=0,Wr=0,Xr=!1;const ci=(1+Math.sqrt(5))/2,Ui=1/ci,Ga=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,ci,Ui),new q(0,ci,-Ui),new q(Ui,0,ci),new q(-Ui,0,ci),new q(ci,Ui,0),new q(-ci,Ui,0)];class Wa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hr,Gr,Wr),this._renderer.xr.enabled=Xr,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:or,format:pn,colorSpace:ke,depthBuffer:!1},i=Xa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(s)),this._blurMaterial=vp(s,t,e)}return i}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,i){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Ha),u.toneMapping=Jn,u.autoClear=!1;const f=new Mn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new De(new pi,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ha),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const y=this._cubeSize;qs(i,_*y,p>2?y:0,y,y),u.setRenderTarget(i),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=c,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qi||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new De(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Ga[(i-1)%Ga.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new De(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ui-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const p=[];let _=0;for(let I=0;I<ui;++I){const D=I/v,E=Math.exp(-D*D/2);p.push(E),I===0?_+=E:I<m&&(_+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],w=3*x*(i>y-Vi?i-y+Vi:0),T=4*(this._cubeSize-x);qs(e,w,T,3*x,2*x),l.setRenderTarget(e),l.render(c,kr)}}function gp(o){const t=[],e=[],n=[];let i=o;const s=o-Vi+1+ka.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Vi?l=ka[r-o+Vi-1]:r===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const I=T%3*2/3-1,D=T>2?0:-1,E=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];_.set(E,v*g*T),y.set(d,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const w=new Qe;w.setAttribute("position",new Ze(_,v)),w.setAttribute("uv",new Ze(y,m)),w.setAttribute("faceIndex",new Ze(x,p)),t.push(w),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xa(o,t,e){const n=new fi(o,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function vp(o,t,e){const n=new Float32Array(ui),i=new q(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function qa(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ya(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function _p(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===lo||l===co,u=l===qi||l===Yi;if(h||u){let c=t.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Wa(o)),c=h?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Wa(o)),c=h?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function yp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xp(o,t,e,n){const i={},s=new WeakMap;function r(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const g in d)t.update(d[g],o.ARRAY_BUFFER);const f=c.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],o.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,g=c.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const w=_[y+0],T=_[y+1],I=_[y+2];d.push(w,T,T,I,I,w)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const w=y+0,T=y+1,I=y+2;d.push(w,T,T,I,I,w)}}else return;const m=new(oc(d)?fc:dc)(d,1);m.version=v;const p=s.get(c);p&&t.remove(p),s.set(c,m)}function u(c){const d=s.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function Mp(o,t,e){let n;function i(c){n=c}let s,r;function a(c){s=c.type,r=c.bytesPerElement}function l(c,d){o.drawElements(n,d,s,c*r),e.update(d,n,1)}function h(c,d,f){f!==0&&(o.drawElementsInstanced(n,d,s,c*r,f),e.update(d,n,f))}function u(c,d,f){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(c[v]/r,d[v]);else{g.multiDrawElementsWEBGL(n,d,0,s,c,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];e.update(v,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function Sp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ep(o,t,e){const n=new WeakMap,i=new Me;function s(r,a,l){const h=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==c){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const I=new Float32Array(w*T*4*c),D=new cc(I,w,T,c);D.type=xn,D.needsUpdate=!0;const E=x*4;for(let C=0;C<c;C++){const F=p[C],L=_[C],W=y[C],X=w*T*4*C;for(let ot=0;ot<F.count;ot++){const H=ot*E;g===!0&&(i.fromBufferAttribute(F,ot),I[X+H+0]=i.x,I[X+H+1]=i.y,I[X+H+2]=i.z,I[X+H+3]=0),v===!0&&(i.fromBufferAttribute(L,ot),I[X+H+4]=i.x,I[X+H+5]=i.y,I[X+H+6]=i.z,I[X+H+7]=0),m===!0&&(i.fromBufferAttribute(W,ot),I[X+H+8]=i.x,I[X+H+9]=i.y,I[X+H+10]=i.z,I[X+H+11]=W.itemSize===4?i.w:1)}}d={count:c,texture:D,size:new $t(w,T)},n.set(a,d),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",h)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function bp(o,t,e,n){let i=new WeakMap;function s(l){const h=n.render.frame,u=l.geometry,c=t.get(l,u);if(i.get(c)!==h&&(t.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function r(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:r}}class _c extends Oe{constructor(t,e,n,i,s,r,a,l,h,u){if(u=u!==void 0?u:Gi,u!==Gi&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gi&&(n=ji),n===void 0&&u===vs&&(n=Ms),super(null,i,s,r,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yc=new Oe,xc=new _c(1,1);xc.compareFunction=sc;const Mc=new cc,Sc=new lu,Ec=new gc,ja=[],$a=[],Ka=new Float32Array(16),Za=new Float32Array(9),Ja=new Float32Array(4);function ts(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=ja[i];if(s===void 0&&(s=new Float32Array(i),ja[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function Ue(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Fe(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function mr(o,t){let e=$a[t];e===void 0&&(e=new Int32Array(t),$a[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Ap(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function wp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;o.uniform2fv(this.addr,t),Fe(e,t)}}function Tp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;o.uniform3fv(this.addr,t),Fe(e,t)}}function Rp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;o.uniform4fv(this.addr,t),Fe(e,t)}}function Cp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Ja.set(n),o.uniformMatrix2fv(this.addr,!1,Ja),Fe(e,n)}}function Pp(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Za.set(n),o.uniformMatrix3fv(this.addr,!1,Za),Fe(e,n)}}function Ip(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Ka.set(n),o.uniformMatrix4fv(this.addr,!1,Ka),Fe(e,n)}}function Lp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Np(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;o.uniform2iv(this.addr,t),Fe(e,t)}}function Dp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;o.uniform3iv(this.addr,t),Fe(e,t)}}function Up(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;o.uniform4iv(this.addr,t),Fe(e,t)}}function Fp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Bp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;o.uniform2uiv(this.addr,t),Fe(e,t)}}function Op(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;o.uniform3uiv(this.addr,t),Fe(e,t)}}function zp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;o.uniform4uiv(this.addr,t),Fe(e,t)}}function Vp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?xc:yc;e.setTexture2D(t||s,i)}function kp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sc,i)}function Hp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ec,i)}function Gp(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mc,i)}function Wp(o){switch(o){case 5126:return Ap;case 35664:return wp;case 35665:return Tp;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Ip;case 5124:case 35670:return Lp;case 35667:case 35671:return Np;case 35668:case 35672:return Dp;case 35669:case 35673:return Up;case 5125:return Fp;case 36294:return Bp;case 36295:return Op;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(o,t){o.uniform1fv(this.addr,t)}function qp(o,t){const e=ts(t,this.size,2);o.uniform2fv(this.addr,e)}function Yp(o,t){const e=ts(t,this.size,3);o.uniform3fv(this.addr,e)}function jp(o,t){const e=ts(t,this.size,4);o.uniform4fv(this.addr,e)}function $p(o,t){const e=ts(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Kp(o,t){const e=ts(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Zp(o,t){const e=ts(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Jp(o,t){o.uniform1iv(this.addr,t)}function Qp(o,t){o.uniform2iv(this.addr,t)}function tm(o,t){o.uniform3iv(this.addr,t)}function em(o,t){o.uniform4iv(this.addr,t)}function nm(o,t){o.uniform1uiv(this.addr,t)}function im(o,t){o.uniform2uiv(this.addr,t)}function sm(o,t){o.uniform3uiv(this.addr,t)}function rm(o,t){o.uniform4uiv(this.addr,t)}function om(o,t,e){const n=this.cache,i=t.length,s=mr(e,i);Ue(n,s)||(o.uniform1iv(this.addr,s),Fe(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||yc,s[r])}function am(o,t,e){const n=this.cache,i=t.length,s=mr(e,i);Ue(n,s)||(o.uniform1iv(this.addr,s),Fe(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Sc,s[r])}function lm(o,t,e){const n=this.cache,i=t.length,s=mr(e,i);Ue(n,s)||(o.uniform1iv(this.addr,s),Fe(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Ec,s[r])}function cm(o,t,e){const n=this.cache,i=t.length,s=mr(e,i);Ue(n,s)||(o.uniform1iv(this.addr,s),Fe(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Mc,s[r])}function hm(o){switch(o){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return jp;case 35674:return $p;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wp(e.type)}}class dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hm(e.type)}}class fm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function Qa(o,t){o.seq.push(t),o.map[t.id]=t}function pm(o,t,e){const n=o.name,i=n.length;for(qr.lastIndex=0;;){const s=qr.exec(n),r=qr.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&r+2===i){Qa(e,h===void 0?new um(a,o,t):new dm(a,o,t));break}else{let c=e.map[a];c===void 0&&(c=new fm(a),Qa(e,c)),e=c}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);pm(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function tl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const mm=37297;let gm=0;function vm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function _m(o){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(o);let n;switch(t===e?n="":t===hr&&e===cr?n="LinearDisplayP3ToLinearSRGB":t===cr&&e===hr&&(n="LinearSRGBToLinearDisplayP3"),o){case ke:case fr:return[n,"LinearTransferOETF"];case je:case To:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function el(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+vm(o.getShaderSource(t),r)}else return i}function ym(o,t){const e=_m(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xm(o,t){let e;switch(t){case ch:e="Linear";break;case hh:e="Reinhard";break;case uh:e="OptimizedCineon";break;case dh:e="ACESFilmic";break;case ph:e="AgX";break;case mh:e="Neutral";break;case fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Mm(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Sm(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Em(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function ds(o){return o!==""}function nl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(o){return o.replace(bm,wm)}const Am=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wm(o,t){let e=re[t];if(e===void 0){const n=Am.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fo(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sl(o){return o.replace(Tm,Rm)}function Rm(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rl(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Cm(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ro?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Pm(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Im(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Lm(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case bo:t="ENVMAP_BLENDING_MULTIPLY";break;case ah:t="ENVMAP_BLENDING_MIX";break;case lh:t="ENVMAP_BLENDING_ADD";break}return t}function Nm(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dm(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Cm(e),h=Pm(e),u=Im(e),c=Lm(e),d=Nm(e),f=Mm(e),g=Sm(s),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(m=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?re.tonemapping_pars_fragment:"",e.toneMapping!==Jn?xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,ym("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),r=fo(r),r=nl(r,e),r=il(r,e),a=fo(a),a=nl(a,e),a=il(a,e),r=sl(r),a=sl(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+r,x=_+p+a,w=tl(i,i.VERTEX_SHADER,y),T=tl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,w),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function I(C){if(o.debug.checkShaderErrors){const F=i.getProgramInfoLog(v).trim(),L=i.getShaderInfoLog(w).trim(),W=i.getShaderInfoLog(T).trim();let X=!0,ot=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,v,w,T);else{const H=el(i,w,"vertex"),N=el(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+H+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(L===""||W==="")&&(ot=!1);ot&&(C.diagnostics={runnable:X,programLog:F,vertexShader:{log:L,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(T),D=new nr(i,v),E=Em(i,v)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,mm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let Um=0;class Fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bm(t),e.set(t,n)),n}}class Bm{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}}function Om(o,t,e,n,i,s,r){const a=new hc,l=new Fm,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return h.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,F,L){const W=F.fog,X=L.geometry,ot=E.isMeshStandardMaterial?F.environment:null,H=(E.isMeshStandardMaterial?e:t).get(E.envMap||ot),N=H&&H.mapping===dr?H.image.height:null,K=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Y=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,z=Y!==void 0?Y.length:0;let tt=0;X.morphAttributes.position!==void 0&&(tt=1),X.morphAttributes.normal!==void 0&&(tt=2),X.morphAttributes.color!==void 0&&(tt=3);let k,R,P,G;if(K){const Ee=vn[K];k=Ee.vertexShader,R=Ee.fragmentShader}else k=E.vertexShader,R=E.fragmentShader,l.update(E),P=l.getVertexShaderID(E),G=l.getFragmentShaderID(E);const J=o.getRenderTarget(),nt=L.isInstancedMesh===!0,j=L.isBatchedMesh===!0,at=!!E.map,B=!!E.matcap,xt=!!H,pt=!!E.aoMap,Mt=!!E.lightMap,st=!!E.bumpMap,ft=!!E.normalMap,U=!!E.displacementMap,b=!!E.emissiveMap,et=!!E.metalnessMap,Q=!!E.roughnessMap,ct=E.anisotropy>0,ut=E.clearcoat>0,Lt=E.iridescence>0,mt=E.sheen>0,At=E.transmission>0,Bt=ct&&!!E.anisotropyMap,vt=ut&&!!E.clearcoatMap,Rt=ut&&!!E.clearcoatNormalMap,Wt=ut&&!!E.clearcoatRoughnessMap,Vt=Lt&&!!E.iridescenceMap,Ht=Lt&&!!E.iridescenceThicknessMap,Qt=mt&&!!E.sheenColorMap,Zt=mt&&!!E.sheenRoughnessMap,ee=!!E.specularMap,ie=!!E.specularColorMap,se=!!E.specularIntensityMap,Gt=At&&!!E.transmissionMap,S=At&&!!E.thicknessMap,it=!!E.gradientMap,dt=!!E.alphaMap,bt=E.alphaTest>0,Nt=!!E.alphaHash,ne=!!E.extensions;let te=Jn;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(te=o.toneMapping);const fe={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:k,fragmentShader:R,defines:E.defines,customVertexShaderID:P,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:j,instancing:nt,instancingColor:nt&&L.instanceColor!==null,instancingMorph:nt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?o.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ke,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:B,envMap:xt,envMapMode:xt&&H.mapping,envMapCubeUVHeight:N,aoMap:pt,lightMap:Mt,bumpMap:st,normalMap:ft,displacementMap:d&&U,emissiveMap:b,normalMapObjectSpace:ft&&E.normalMapType===Lh,normalMapTangentSpace:ft&&E.normalMapType===wo,metalnessMap:et,roughnessMap:Q,anisotropy:ct,anisotropyMap:Bt,clearcoat:ut,clearcoatMap:vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,iridescence:Lt,iridescenceMap:Vt,iridescenceThicknessMap:Ht,sheen:mt,sheenColorMap:Qt,sheenRoughnessMap:Zt,specularMap:ee,specularColorMap:ie,specularIntensityMap:se,transmission:At,transmissionMap:Gt,thicknessMap:S,gradientMap:it,opaque:E.transparent===!1&&E.blending===Hi&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:bt,alphaHash:Nt,combine:E.combine,mapUv:at&&v(E.map.channel),aoMapUv:pt&&v(E.aoMap.channel),lightMapUv:Mt&&v(E.lightMap.channel),bumpMapUv:st&&v(E.bumpMap.channel),normalMapUv:ft&&v(E.normalMap.channel),displacementMapUv:U&&v(E.displacementMap.channel),emissiveMapUv:b&&v(E.emissiveMap.channel),metalnessMapUv:et&&v(E.metalnessMap.channel),roughnessMapUv:Q&&v(E.roughnessMap.channel),anisotropyMapUv:Bt&&v(E.anisotropyMap.channel),clearcoatMapUv:vt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&v(E.sheenRoughnessMap.channel),specularMapUv:ee&&v(E.specularMap.channel),specularColorMapUv:ie&&v(E.specularColorMap.channel),specularIntensityMapUv:se&&v(E.specularIntensityMap.channel),transmissionMapUv:Gt&&v(E.transmissionMap.channel),thicknessMapUv:S&&v(E.thicknessMap.channel),alphaMapUv:dt&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ft||ct),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(at||dt),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&C.length>0,shadowMapType:o.shadowMap.type,toneMapping:te,useLegacyLights:o._useLegacyLights,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===be,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===Je,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ne&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=h.has(1),fe.vertexUv2s=h.has(2),fe.vertexUv3s=h.has(3),h.clear(),fe}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(o.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),E.push(a.mask)}function x(E){const M=g[E.type];let C;if(M){const F=vn[M];C=xu.clone(F.uniforms)}else C=E.uniforms;return C}function w(E,M){let C;for(let F=0,L=u.length;F<L;F++){const W=u[F];if(W.cacheKey===M){C=W,++C.usedTimes;break}}return C===void 0&&(C=new Dm(o,M,E,s),u.push(C)),C}function T(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function I(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:I,programs:u,dispose:D}}function zm(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Vm(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ol(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function al(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(c,d,f,g,v,m){let p=o[t];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:g,renderOrder:c.renderOrder,z:v,group:m},o[t]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=v,p.group=m),t++,p}function a(c,d,f,g,v,m){const p=r(c,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(c,d,f,g,v,m){const p=r(c,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(c,d){e.length>1&&e.sort(c||Vm),n.length>1&&n.sort(d||ol),i.length>1&&i.sort(d||ol)}function u(){for(let c=t,d=o.length;c<d;c++){const f=o[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:h}}function km(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new al,o.set(n,[r])):i>=s.length?(r=new al,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function Hm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new Jt};break;case"SpotLight":e={position:new q,direction:new q,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new q,halfWidth:new q,halfHeight:new q};break}return o[t.id]=e,e}}}function Gm(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Wm=0;function Xm(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function qm(o){const t=new Hm,e=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new q);const i=new q,s=new ae,r=new ae;function a(h,u){let c=0,d=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let g=0,v=0,m=0,p=0,_=0,y=0,x=0,w=0,T=0,I=0,D=0;h.sort(Xm);const E=u===!0?Math.PI:1;for(let C=0,F=h.length;C<F;C++){const L=h[C],W=L.color,X=L.intensity,ot=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=W.r*X*E,d+=W.g*X*E,f+=W.b*X*E;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],X);D++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const K=L.shadow,Y=e.get(L);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=L.shadow.matrix,y++}n.directional[g]=N,g++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(W).multiplyScalar(X*E),N.distance=ot,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[m]=N;const K=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,K.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[m]=K.matrix,L.castShadow){const Y=e.get(L);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.spotShadow[m]=Y,n.spotShadowMap[m]=H,w++}m++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(W).multiplyScalar(X),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=N,p++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*E),N.distance=L.distance,N.decay=L.decay,L.castShadow){const K=L.shadow,Y=e.get(L);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=L.shadow.matrix,x++}n.point[v]=N,v++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(X*E),N.groundColor.copy(L.groundColor).multiplyScalar(X*E),n.hemi[_]=N,_++}}p>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==g||M.pointLength!==v||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==_||M.numDirectionalShadows!==y||M.numPointShadows!==x||M.numSpotShadows!==w||M.numSpotMaps!==T||M.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=v,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+T-I,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,M.directionalLength=g,M.pointLength=v,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=_,M.numDirectionalShadows=y,M.numPointShadows=x,M.numSpotShadows=w,M.numSpotMaps=T,M.numLightProbes=D,n.version=Wm++)}function l(h,u){let c=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){const y=h[p];if(y.isDirectionalLight){const x=n.directional[c];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),c++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function ll(o){const t=new qm(o),e=[],n=[];function i(){e.length=0,n.length=0}function s(u){e.push(u)}function r(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:i,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Ym(o){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new ll(o),t.set(i,[a])):s>=r.length?(a=new ll(o),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class jm extends rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $m extends rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`;function Jm(o,t,e){let n=new Co;const i=new $t,s=new $t,r=new Me,a=new jm({depthPacking:Ih}),l=new $m,h={},u=e.maxTextureSize,c={[Un]:Je,[Je]:Un,[_n]:_n},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Km,fragmentShader:Zm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new De(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(T,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=o.getRenderTarget(),M=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),F=o.state;F.setBlending(Zn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=p!==Ln&&this.type===Ln,W=p===Ln&&this.type!==Ln;for(let X=0,ot=T.length;X<ot;X++){const H=T[X],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const K=N.getFrameExtents();if(i.multiply(K),s.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,N.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||L===!0||W===!0){const z=this.type!==Ln?{minFilter:Ke,magFilter:Ke}:{};N.map!==null&&N.map.dispose(),N.map=new fi(i.x,i.y,z),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}o.setRenderTarget(N.map),o.clear();const Y=N.getViewportCount();for(let z=0;z<Y;z++){const tt=N.getViewport(z);r.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),F.viewport(r),N.updateMatrices(H,z),n=N.getFrustum(),x(I,D,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===Ln&&_(N,D),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(E,M,C)};function _(T,I){const D=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fi(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,o.setRenderTarget(T.mapPass),o.clear(),o.renderBufferDirect(I,null,D,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,o.setRenderTarget(T.map),o.clear(),o.renderBufferDirect(I,null,D,f,v,null)}function y(T,I,D,E){let M=null;const C=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?l:a,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const F=M.uuid,L=I.uuid;let W=h[F];W===void 0&&(W={},h[F]=W);let X=W[L];X===void 0&&(X=M.clone(),W[L]=X,I.addEventListener("dispose",w)),M=X}if(M.visible=I.visible,M.wireframe=I.wireframe,E===Ln?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:c[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=o.properties.get(M);F.light=D}return M}function x(T,I,D,E,M){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ln)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const L=t.update(T),W=T.material;if(Array.isArray(W)){const X=L.groups;for(let ot=0,H=X.length;ot<H;ot++){const N=X[ot],K=W[N.materialIndex];if(K&&K.visible){const Y=y(T,K,E,M);T.onBeforeShadow(o,T,I,D,L,Y,N),o.renderBufferDirect(D,null,L,Y,T,N),T.onAfterShadow(o,T,I,D,L,Y,N)}}}else if(W.visible){const X=y(T,W,E,M);T.onBeforeShadow(o,T,I,D,L,X,null),o.renderBufferDirect(D,null,L,X,T,null),T.onAfterShadow(o,T,I,D,L,X,null)}}const F=T.children;for(let L=0,W=F.length;L<W;L++)x(F[L],I,D,E,M)}function w(T){T.target.removeEventListener("dispose",w);for(const D in h){const E=h[D],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Qm(o){function t(){let S=!1;const it=new Me;let dt=null;const bt=new Me(0,0,0,0);return{setMask:function(Nt){dt!==Nt&&!S&&(o.colorMask(Nt,Nt,Nt,Nt),dt=Nt)},setLocked:function(Nt){S=Nt},setClear:function(Nt,ne,te,fe,Ee){Ee===!0&&(Nt*=fe,ne*=fe,te*=fe),it.set(Nt,ne,te,fe),bt.equals(it)===!1&&(o.clearColor(Nt,ne,te,fe),bt.copy(it))},reset:function(){S=!1,dt=null,bt.set(-1,0,0,0)}}}function e(){let S=!1,it=null,dt=null,bt=null;return{setTest:function(Nt){Nt?G(o.DEPTH_TEST):J(o.DEPTH_TEST)},setMask:function(Nt){it!==Nt&&!S&&(o.depthMask(Nt),it=Nt)},setFunc:function(Nt){if(dt!==Nt){switch(Nt){case th:o.depthFunc(o.NEVER);break;case eh:o.depthFunc(o.ALWAYS);break;case nh:o.depthFunc(o.LESS);break;case sr:o.depthFunc(o.LEQUAL);break;case ih:o.depthFunc(o.EQUAL);break;case sh:o.depthFunc(o.GEQUAL);break;case rh:o.depthFunc(o.GREATER);break;case oh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}dt=Nt}},setLocked:function(Nt){S=Nt},setClear:function(Nt){bt!==Nt&&(o.clearDepth(Nt),bt=Nt)},reset:function(){S=!1,it=null,dt=null,bt=null}}}function n(){let S=!1,it=null,dt=null,bt=null,Nt=null,ne=null,te=null,fe=null,Ee=null;return{setTest:function(he){S||(he?G(o.STENCIL_TEST):J(o.STENCIL_TEST))},setMask:function(he){it!==he&&!S&&(o.stencilMask(he),it=he)},setFunc:function(he,le,lt){(dt!==he||bt!==le||Nt!==lt)&&(o.stencilFunc(he,le,lt),dt=he,bt=le,Nt=lt)},setOp:function(he,le,lt){(ne!==he||te!==le||fe!==lt)&&(o.stencilOp(he,le,lt),ne=he,te=le,fe=lt)},setLocked:function(he){S=he},setClear:function(he){Ee!==he&&(o.clearStencil(he),Ee=he)},reset:function(){S=!1,it=null,dt=null,bt=null,Nt=null,ne=null,te=null,fe=null,Ee=null}}}const i=new t,s=new e,r=new n,a=new WeakMap,l=new WeakMap;let h={},u={},c=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,y=null,x=null,w=null,T=new Jt(0,0,0),I=0,D=!1,E=null,M=null,C=null,F=null,L=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ot=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=ot>=1):H.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=ot>=2);let N=null,K={};const Y=o.getParameter(o.SCISSOR_BOX),z=o.getParameter(o.VIEWPORT),tt=new Me().fromArray(Y),k=new Me().fromArray(z);function R(S,it,dt,bt){const Nt=new Uint8Array(4),ne=o.createTexture();o.bindTexture(S,ne),o.texParameteri(S,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(S,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<dt;te++)S===o.TEXTURE_3D||S===o.TEXTURE_2D_ARRAY?o.texImage3D(it,0,o.RGBA,1,1,bt,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(it+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return ne}const P={};P[o.TEXTURE_2D]=R(o.TEXTURE_2D,o.TEXTURE_2D,1),P[o.TEXTURE_CUBE_MAP]=R(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[o.TEXTURE_2D_ARRAY]=R(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),P[o.TEXTURE_3D]=R(o.TEXTURE_3D,o.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),r.setClear(0),G(o.DEPTH_TEST),s.setFunc(sr),st(!1),ft(Go),G(o.CULL_FACE),pt(Zn);function G(S){h[S]!==!0&&(o.enable(S),h[S]=!0)}function J(S){h[S]!==!1&&(o.disable(S),h[S]=!1)}function nt(S,it){return u[S]!==it?(o.bindFramebuffer(S,it),u[S]=it,S===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=it),S===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=it),!0):!1}function j(S,it){let dt=d,bt=!1;if(S){dt=c.get(it),dt===void 0&&(dt=[],c.set(it,dt));const Nt=S.textures;if(dt.length!==Nt.length||dt[0]!==o.COLOR_ATTACHMENT0){for(let ne=0,te=Nt.length;ne<te;ne++)dt[ne]=o.COLOR_ATTACHMENT0+ne;dt.length=Nt.length,bt=!0}}else dt[0]!==o.BACK&&(dt[0]=o.BACK,bt=!0);bt&&o.drawBuffers(dt)}function at(S){return f!==S?(o.useProgram(S),f=S,!0):!1}const B={[hi]:o.FUNC_ADD,[Bc]:o.FUNC_SUBTRACT,[Oc]:o.FUNC_REVERSE_SUBTRACT};B[zc]=o.MIN,B[Vc]=o.MAX;const xt={[kc]:o.ZERO,[Hc]:o.ONE,[Gc]:o.SRC_COLOR,[oo]:o.SRC_ALPHA,[$c]:o.SRC_ALPHA_SATURATE,[Yc]:o.DST_COLOR,[Xc]:o.DST_ALPHA,[Wc]:o.ONE_MINUS_SRC_COLOR,[ao]:o.ONE_MINUS_SRC_ALPHA,[jc]:o.ONE_MINUS_DST_COLOR,[qc]:o.ONE_MINUS_DST_ALPHA,[Kc]:o.CONSTANT_COLOR,[Zc]:o.ONE_MINUS_CONSTANT_COLOR,[Jc]:o.CONSTANT_ALPHA,[Qc]:o.ONE_MINUS_CONSTANT_ALPHA};function pt(S,it,dt,bt,Nt,ne,te,fe,Ee,he){if(S===Zn){g===!0&&(J(o.BLEND),g=!1);return}if(g===!1&&(G(o.BLEND),g=!0),S!==Fc){if(S!==v||he!==D){if((m!==hi||y!==hi)&&(o.blendEquation(o.FUNC_ADD),m=hi,y=hi),he)switch(S){case Hi:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wo:o.blendFunc(o.ONE,o.ONE);break;case Xo:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qo:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Hi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wo:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Xo:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qo:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}p=null,_=null,x=null,w=null,T.set(0,0,0),I=0,v=S,D=he}return}Nt=Nt||it,ne=ne||dt,te=te||bt,(it!==m||Nt!==y)&&(o.blendEquationSeparate(B[it],B[Nt]),m=it,y=Nt),(dt!==p||bt!==_||ne!==x||te!==w)&&(o.blendFuncSeparate(xt[dt],xt[bt],xt[ne],xt[te]),p=dt,_=bt,x=ne,w=te),(fe.equals(T)===!1||Ee!==I)&&(o.blendColor(fe.r,fe.g,fe.b,Ee),T.copy(fe),I=Ee),v=S,D=!1}function Mt(S,it){S.side===_n?J(o.CULL_FACE):G(o.CULL_FACE);let dt=S.side===Je;it&&(dt=!dt),st(dt),S.blending===Hi&&S.transparent===!1?pt(Zn):pt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),i.setMask(S.colorWrite);const bt=S.stencilWrite;r.setTest(bt),bt&&(r.setMask(S.stencilWriteMask),r.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),r.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),b(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?G(o.SAMPLE_ALPHA_TO_COVERAGE):J(o.SAMPLE_ALPHA_TO_COVERAGE)}function st(S){E!==S&&(S?o.frontFace(o.CW):o.frontFace(o.CCW),E=S)}function ft(S){S!==Dc?(G(o.CULL_FACE),S!==M&&(S===Go?o.cullFace(o.BACK):S===Uc?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):J(o.CULL_FACE),M=S}function U(S){S!==C&&(X&&o.lineWidth(S),C=S)}function b(S,it,dt){S?(G(o.POLYGON_OFFSET_FILL),(F!==it||L!==dt)&&(o.polygonOffset(it,dt),F=it,L=dt)):J(o.POLYGON_OFFSET_FILL)}function et(S){S?G(o.SCISSOR_TEST):J(o.SCISSOR_TEST)}function Q(S){S===void 0&&(S=o.TEXTURE0+W-1),N!==S&&(o.activeTexture(S),N=S)}function ct(S,it,dt){dt===void 0&&(N===null?dt=o.TEXTURE0+W-1:dt=N);let bt=K[dt];bt===void 0&&(bt={type:void 0,texture:void 0},K[dt]=bt),(bt.type!==S||bt.texture!==it)&&(N!==dt&&(o.activeTexture(dt),N=dt),o.bindTexture(S,it||P[S]),bt.type=S,bt.texture=it)}function ut(){const S=K[N];S!==void 0&&S.type!==void 0&&(o.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Lt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function At(){try{o.texSubImage2D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Bt(){try{o.texSubImage3D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Rt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Wt(){try{o.texStorage2D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{o.texStorage3D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ht(){try{o.texImage2D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Qt(){try{o.texImage3D.apply(o,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Zt(S){tt.equals(S)===!1&&(o.scissor(S.x,S.y,S.z,S.w),tt.copy(S))}function ee(S){k.equals(S)===!1&&(o.viewport(S.x,S.y,S.z,S.w),k.copy(S))}function ie(S,it){let dt=l.get(it);dt===void 0&&(dt=new WeakMap,l.set(it,dt));let bt=dt.get(S);bt===void 0&&(bt=o.getUniformBlockIndex(it,S.name),dt.set(S,bt))}function se(S,it){const bt=l.get(it).get(S);a.get(it)!==bt&&(o.uniformBlockBinding(it,bt,S.__bindingPointIndex),a.set(it,bt))}function Gt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},N=null,K={},u={},c=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,y=null,x=null,w=null,T=new Jt(0,0,0),I=0,D=!1,E=null,M=null,C=null,F=null,L=null,tt.set(0,0,o.canvas.width,o.canvas.height),k.set(0,0,o.canvas.width,o.canvas.height),i.reset(),s.reset(),r.reset()}return{buffers:{color:i,depth:s,stencil:r},enable:G,disable:J,bindFramebuffer:nt,drawBuffers:j,useProgram:at,setBlending:pt,setMaterial:Mt,setFlipSided:st,setCullFace:ft,setLineWidth:U,setPolygonOffset:b,setScissorTest:et,activeTexture:Q,bindTexture:ct,unbindTexture:ut,compressedTexImage2D:Lt,compressedTexImage3D:mt,texImage2D:Ht,texImage3D:Qt,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:Wt,texStorage3D:Vt,texSubImage2D:At,texSubImage3D:Bt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Rt,scissor:Zt,viewport:ee,reset:Gt}}function tg(o,t,e,n,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,b){return f?new OffscreenCanvas(U,b):ys("canvas")}function v(U,b,et){let Q=1;const ct=ft(U);if((ct.width>et||ct.height>et)&&(Q=et/Math.max(ct.width,ct.height)),Q<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(Q*ct.width),Lt=Math.floor(Q*ct.height);c===void 0&&(c=g(ut,Lt));const mt=b?g(ut,Lt):c;return mt.width=ut,mt.height=Lt,mt.getContext("2d").drawImage(U,0,0,ut,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+ut+"x"+Lt+")."),mt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function m(U){return U.generateMipmaps&&U.minFilter!==Ke&&U.minFilter!==nn}function p(U){o.generateMipmap(U)}function _(U,b,et,Q,ct=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=b;if(b===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),b===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),b===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),b===o.RGBA){const Lt=ct?lr:ge.getTransfer(Q);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Lt===be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function y(U,b){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ke&&U.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function x(U){const b=U.target;b.removeEventListener("dispose",x),T(b),b.isVideoTexture&&u.delete(b)}function w(U){const b=U.target;b.removeEventListener("dispose",w),D(b)}function T(U){const b=n.get(U);if(b.__webglInit===void 0)return;const et=U.source,Q=d.get(et);if(Q){const ct=Q[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&I(U),Object.keys(Q).length===0&&d.delete(et)}n.remove(U)}function I(U){const b=n.get(U);o.deleteTexture(b.__webglTexture);const et=U.source,Q=d.get(et);delete Q[b.__cacheKey],r.memory.textures--}function D(U){const b=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let ct=0;ct<b.__webglFramebuffer[Q].length;ct++)o.deleteFramebuffer(b.__webglFramebuffer[Q][ct]);else o.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)o.deleteFramebuffer(b.__webglFramebuffer[Q]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let Q=0,ct=et.length;Q<ct;Q++){const ut=n.get(et[Q]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),r.memory.textures--),n.remove(et[Q])}n.remove(U)}let E=0;function M(){E=0}function C(){const U=E;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),E+=1,U}function F(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function L(U,b){const et=n.get(U);if(U.isVideoTexture&&Mt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const Q=U.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(et,U,b);return}}e.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function W(U,b){const et=n.get(U);if(U.version>0&&et.__version!==U.version){tt(et,U,b);return}e.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function X(U,b){const et=n.get(U);if(U.version>0&&et.__version!==U.version){tt(et,U,b);return}e.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function ot(U,b){const et=n.get(U);if(U.version>0&&et.__version!==U.version){k(et,U,b);return}e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const H={[di]:o.REPEAT,[jn]:o.CLAMP_TO_EDGE,[rr]:o.MIRRORED_REPEAT},N={[Ke]:o.NEAREST,[ql]:o.NEAREST_MIPMAP_NEAREST,[us]:o.NEAREST_MIPMAP_LINEAR,[nn]:o.LINEAR,[er]:o.LINEAR_MIPMAP_NEAREST,[Nn]:o.LINEAR_MIPMAP_LINEAR},K={[Nh]:o.NEVER,[zh]:o.ALWAYS,[Dh]:o.LESS,[sc]:o.LEQUAL,[Uh]:o.EQUAL,[Oh]:o.GEQUAL,[Fh]:o.GREATER,[Bh]:o.NOTEQUAL};function Y(U,b){if(b.type===xn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===er||b.magFilter===us||b.magFilter===Nn||b.minFilter===nn||b.minFilter===er||b.minFilter===us||b.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,H[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,H[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,H[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,N[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ke||b.minFilter!==us&&b.minFilter!==Nn||b.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function z(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",x));const Q=b.source;let ct=d.get(Q);ct===void 0&&(ct={},d.set(Q,ct));const ut=F(b);if(ut!==U.__cacheKey){ct[ut]===void 0&&(ct[ut]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,et=!0),ct[ut].usedTimes++;const Lt=ct[U.__cacheKey];Lt!==void 0&&(ct[U.__cacheKey].usedTimes--,Lt.usedTimes===0&&I(b)),U.__cacheKey=ut,U.__webglTexture=ct[ut].texture}return et}function tt(U,b,et){let Q=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=o.TEXTURE_3D);const ct=z(U,b),ut=b.source;e.bindTexture(Q,U.__webglTexture,o.TEXTURE0+et);const Lt=n.get(ut);if(ut.version!==Lt.__version||ct===!0){e.activeTexture(o.TEXTURE0+et);const mt=ge.getPrimaries(ge.workingColorSpace),At=b.colorSpace===Yn?null:ge.getPrimaries(b.colorSpace),Bt=b.colorSpace===Yn||mt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let vt=v(b.image,!1,i.maxTextureSize);vt=st(b,vt);const Rt=s.convert(b.format,b.colorSpace),Wt=s.convert(b.type);let Vt=_(b.internalFormat,Rt,Wt,b.colorSpace,b.isVideoTexture);Y(Q,b);let Ht;const Qt=b.mipmaps,Zt=b.isVideoTexture!==!0&&Vt!==ec,ee=Lt.__version===void 0||ct===!0,ie=ut.dataReady,se=y(b,vt);if(b.isDepthTexture)Vt=o.DEPTH_COMPONENT16,b.type===xn?Vt=o.DEPTH_COMPONENT32F:b.type===ji?Vt=o.DEPTH_COMPONENT24:b.type===Ms&&(Vt=o.DEPTH24_STENCIL8),ee&&(Zt?e.texStorage2D(o.TEXTURE_2D,1,Vt,vt.width,vt.height):e.texImage2D(o.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Rt,Wt,null));else if(b.isDataTexture)if(Qt.length>0){Zt&&ee&&e.texStorage2D(o.TEXTURE_2D,se,Vt,Qt[0].width,Qt[0].height);for(let Gt=0,S=Qt.length;Gt<S;Gt++)Ht=Qt[Gt],Zt?ie&&e.texSubImage2D(o.TEXTURE_2D,Gt,0,0,Ht.width,Ht.height,Rt,Wt,Ht.data):e.texImage2D(o.TEXTURE_2D,Gt,Vt,Ht.width,Ht.height,0,Rt,Wt,Ht.data);b.generateMipmaps=!1}else Zt?(ee&&e.texStorage2D(o.TEXTURE_2D,se,Vt,vt.width,vt.height),ie&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,Rt,Wt,vt.data)):e.texImage2D(o.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Rt,Wt,vt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Zt&&ee&&e.texStorage3D(o.TEXTURE_2D_ARRAY,se,Vt,Qt[0].width,Qt[0].height,vt.depth);for(let Gt=0,S=Qt.length;Gt<S;Gt++)Ht=Qt[Gt],b.format!==pn?Rt!==null?Zt?ie&&e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Gt,0,0,0,Ht.width,Ht.height,vt.depth,Rt,Ht.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Gt,Vt,Ht.width,Ht.height,vt.depth,0,Ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?ie&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Gt,0,0,0,Ht.width,Ht.height,vt.depth,Rt,Wt,Ht.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Gt,Vt,Ht.width,Ht.height,vt.depth,0,Rt,Wt,Ht.data)}else{Zt&&ee&&e.texStorage2D(o.TEXTURE_2D,se,Vt,Qt[0].width,Qt[0].height);for(let Gt=0,S=Qt.length;Gt<S;Gt++)Ht=Qt[Gt],b.format!==pn?Rt!==null?Zt?ie&&e.compressedTexSubImage2D(o.TEXTURE_2D,Gt,0,0,Ht.width,Ht.height,Rt,Ht.data):e.compressedTexImage2D(o.TEXTURE_2D,Gt,Vt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?ie&&e.texSubImage2D(o.TEXTURE_2D,Gt,0,0,Ht.width,Ht.height,Rt,Wt,Ht.data):e.texImage2D(o.TEXTURE_2D,Gt,Vt,Ht.width,Ht.height,0,Rt,Wt,Ht.data)}else if(b.isDataArrayTexture)Zt?(ee&&e.texStorage3D(o.TEXTURE_2D_ARRAY,se,Vt,vt.width,vt.height,vt.depth),ie&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Rt,Wt,vt.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,vt.width,vt.height,vt.depth,0,Rt,Wt,vt.data);else if(b.isData3DTexture)Zt?(ee&&e.texStorage3D(o.TEXTURE_3D,se,Vt,vt.width,vt.height,vt.depth),ie&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Rt,Wt,vt.data)):e.texImage3D(o.TEXTURE_3D,0,Vt,vt.width,vt.height,vt.depth,0,Rt,Wt,vt.data);else if(b.isFramebufferTexture){if(ee)if(Zt)e.texStorage2D(o.TEXTURE_2D,se,Vt,vt.width,vt.height);else{let Gt=vt.width,S=vt.height;for(let it=0;it<se;it++)e.texImage2D(o.TEXTURE_2D,it,Vt,Gt,S,0,Rt,Wt,null),Gt>>=1,S>>=1}}else if(Qt.length>0){if(Zt&&ee){const Gt=ft(Qt[0]);e.texStorage2D(o.TEXTURE_2D,se,Vt,Gt.width,Gt.height)}for(let Gt=0,S=Qt.length;Gt<S;Gt++)Ht=Qt[Gt],Zt?ie&&e.texSubImage2D(o.TEXTURE_2D,Gt,0,0,Rt,Wt,Ht):e.texImage2D(o.TEXTURE_2D,Gt,Vt,Rt,Wt,Ht);b.generateMipmaps=!1}else if(Zt){if(ee){const Gt=ft(vt);e.texStorage2D(o.TEXTURE_2D,se,Vt,Gt.width,Gt.height)}ie&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,Wt,vt)}else e.texImage2D(o.TEXTURE_2D,0,Vt,Rt,Wt,vt);m(b)&&p(Q),Lt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function k(U,b,et){if(b.image.length!==6)return;const Q=z(U,b),ct=b.source;e.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const ut=n.get(ct);if(ct.version!==ut.__version||Q===!0){e.activeTexture(o.TEXTURE0+et);const Lt=ge.getPrimaries(ge.workingColorSpace),mt=b.colorSpace===Yn?null:ge.getPrimaries(b.colorSpace),At=b.colorSpace===Yn||Lt===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Bt=b.isCompressedTexture||b.image[0].isCompressedTexture,vt=b.image[0]&&b.image[0].isDataTexture,Rt=[];for(let S=0;S<6;S++)!Bt&&!vt?Rt[S]=v(b.image[S],!0,i.maxCubemapSize):Rt[S]=vt?b.image[S].image:b.image[S],Rt[S]=st(b,Rt[S]);const Wt=Rt[0],Vt=s.convert(b.format,b.colorSpace),Ht=s.convert(b.type),Qt=_(b.internalFormat,Vt,Ht,b.colorSpace),Zt=b.isVideoTexture!==!0,ee=ut.__version===void 0||Q===!0,ie=ct.dataReady;let se=y(b,Wt);Y(o.TEXTURE_CUBE_MAP,b);let Gt;if(Bt){Zt&&ee&&e.texStorage2D(o.TEXTURE_CUBE_MAP,se,Qt,Wt.width,Wt.height);for(let S=0;S<6;S++){Gt=Rt[S].mipmaps;for(let it=0;it<Gt.length;it++){const dt=Gt[it];b.format!==pn?Vt!==null?Zt?ie&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it,0,0,dt.width,dt.height,Vt,dt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it,Qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?ie&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it,0,0,dt.width,dt.height,Vt,Ht,dt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it,Qt,dt.width,dt.height,0,Vt,Ht,dt.data)}}}else{if(Gt=b.mipmaps,Zt&&ee){Gt.length>0&&se++;const S=ft(Rt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,se,Qt,S.width,S.height)}for(let S=0;S<6;S++)if(vt){Zt?ie&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,Rt[S].width,Rt[S].height,Vt,Ht,Rt[S].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,Qt,Rt[S].width,Rt[S].height,0,Vt,Ht,Rt[S].data);for(let it=0;it<Gt.length;it++){const bt=Gt[it].image[S].image;Zt?ie&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it+1,0,0,bt.width,bt.height,Vt,Ht,bt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it+1,Qt,bt.width,bt.height,0,Vt,Ht,bt.data)}}else{Zt?ie&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,Vt,Ht,Rt[S]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,Qt,Vt,Ht,Rt[S]);for(let it=0;it<Gt.length;it++){const dt=Gt[it];Zt?ie&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it+1,0,0,Vt,Ht,dt.image[S]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+S,it+1,Qt,Vt,Ht,dt.image[S])}}}m(b)&&p(o.TEXTURE_CUBE_MAP),ut.__version=ct.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function R(U,b,et,Q,ct,ut){const Lt=s.convert(et.format,et.colorSpace),mt=s.convert(et.type),At=_(et.internalFormat,Lt,mt,et.colorSpace);if(!n.get(b).__hasExternalTextures){const vt=Math.max(1,b.width>>ut),Rt=Math.max(1,b.height>>ut);ct===o.TEXTURE_3D||ct===o.TEXTURE_2D_ARRAY?e.texImage3D(ct,ut,At,vt,Rt,b.depth,0,Lt,mt,null):e.texImage2D(ct,ut,At,vt,Rt,0,Lt,mt,null)}e.bindFramebuffer(o.FRAMEBUFFER,U),pt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Q,ct,n.get(et).__webglTexture,0,xt(b)):(ct===o.TEXTURE_2D||ct>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Q,ct,n.get(et).__webglTexture,ut),e.bindFramebuffer(o.FRAMEBUFFER,null)}function P(U,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer&&!b.stencilBuffer){let Q=o.DEPTH_COMPONENT24;if(et||pt(b)){const ct=b.depthTexture;ct&&ct.isDepthTexture&&(ct.type===xn?Q=o.DEPTH_COMPONENT32F:ct.type===ji&&(Q=o.DEPTH_COMPONENT24));const ut=xt(b);pt(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Q,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Q,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,Q,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(b.depthBuffer&&b.stencilBuffer){const Q=xt(b);et&&pt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Q,o.DEPTH24_STENCIL8,b.width,b.height):pt(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Q,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const Q=b.textures;for(let ct=0;ct<Q.length;ct++){const ut=Q[ct],Lt=s.convert(ut.format,ut.colorSpace),mt=s.convert(ut.type),At=_(ut.internalFormat,Lt,mt,ut.colorSpace),Bt=xt(b);et&&pt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,At,b.width,b.height):pt(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,At,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,At,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function G(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,ct=xt(b);if(b.depthTexture.format===Gi)pt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Q,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Q,0);else if(b.depthTexture.format===vs)pt(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Q,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function J(U){const b=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");G(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=o.createRenderbuffer(),P(b.__webglDepthbuffer[Q],U,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),P(b.__webglDepthbuffer,U,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(U,b,et){const Q=n.get(U);b!==void 0&&R(Q.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&J(U)}function j(U){const b=U.texture,et=n.get(U),Q=n.get(b);U.addEventListener("dispose",w);const ct=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Lt=ct.length>1;if(Lt||(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=b.version,r.memory.textures++),ut){et.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[mt]=[];for(let At=0;At<b.mipmaps.length;At++)et.__webglFramebuffer[mt][At]=o.createFramebuffer()}else et.__webglFramebuffer[mt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)et.__webglFramebuffer[mt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let mt=0,At=ct.length;mt<At;mt++){const Bt=n.get(ct[mt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=o.createTexture(),r.memory.textures++)}if(U.samples>0&&pt(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let mt=0;mt<ct.length;mt++){const At=ct[mt];et.__webglColorRenderbuffer[mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[mt]);const Bt=s.convert(At.format,At.colorSpace),vt=s.convert(At.type),Rt=_(At.internalFormat,Bt,vt,At.colorSpace,U.isXRRenderTarget===!0),Wt=xt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Rt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+mt,o.RENDERBUFFER,et.__webglColorRenderbuffer[mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),P(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){e.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture),Y(o.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)R(et.__webglFramebuffer[mt][At],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At);else R(et.__webglFramebuffer[mt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(b)&&p(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let mt=0,At=ct.length;mt<At;mt++){const Bt=ct[mt],vt=n.get(Bt);e.bindTexture(o.TEXTURE_2D,vt.__webglTexture),Y(o.TEXTURE_2D,Bt),R(et.__webglFramebuffer,U,Bt,o.COLOR_ATTACHMENT0+mt,o.TEXTURE_2D,0),m(Bt)&&p(o.TEXTURE_2D)}e.unbindTexture()}else{let mt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(mt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(mt,Q.__webglTexture),Y(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)R(et.__webglFramebuffer[At],U,b,o.COLOR_ATTACHMENT0,mt,At);else R(et.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,mt,0);m(b)&&p(mt),e.unbindTexture()}U.depthBuffer&&J(U)}function at(U){const b=U.textures;for(let et=0,Q=b.length;et<Q;et++){const ct=b[et];if(m(ct)){const ut=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Lt=n.get(ct).__webglTexture;e.bindTexture(ut,Lt),p(ut),e.unbindTexture()}}}function B(U){if(U.samples>0&&pt(U)===!1){const b=U.textures,et=U.width,Q=U.height;let ct=o.COLOR_BUFFER_BIT;const ut=[],Lt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=n.get(U),At=b.length>1;if(At)for(let Bt=0;Bt<b.length;Bt++)e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Bt=0;Bt<b.length;Bt++){ut.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&ut.push(Lt);const vt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(vt===!1&&(U.depthBuffer&&(ct|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&mt.__isTransmissionRenderTarget!==!0&&(ct|=o.STENCIL_BUFFER_BIT)),At&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,mt.__webglColorRenderbuffer[Bt]),vt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Lt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Lt])),At){const Rt=n.get(b[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,et,Q,0,0,et,Q,ct,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Bt=0;Bt<b.length;Bt++){e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,mt.__webglColorRenderbuffer[Bt]);const vt=n.get(b[Bt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,vt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function xt(U){return Math.min(i.maxSamples,U.samples)}function pt(U){const b=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Mt(U){const b=r.render.frame;u.get(U)!==b&&(u.set(U,b),U.update())}function st(U,b){const et=U.colorSpace,Q=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==ke&&et!==Yn&&(ge.getTransfer(et)===be?(Q!==pn||ct!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function ft(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=C,this.resetTextureUnits=M,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=ot,this.rebindTextures=nt,this.setupRenderTarget=j,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=R,this.useMultisampledRTT=pt}function eg(o,t){function e(n,i=Yn){let s;const r=ge.getTransfer(i);if(n===Qn)return o.UNSIGNED_BYTE;if(n===$l)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return o.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return o.BYTE;if(n===_h)return o.SHORT;if(n===Yl)return o.UNSIGNED_SHORT;if(n===jl)return o.INT;if(n===ji)return o.UNSIGNED_INT;if(n===xn)return o.FLOAT;if(n===or)return o.HALF_FLOAT;if(n===xh)return o.ALPHA;if(n===Mh)return o.RGB;if(n===pn)return o.RGBA;if(n===Sh)return o.LUMINANCE;if(n===Eh)return o.LUMINANCE_ALPHA;if(n===Gi)return o.DEPTH_COMPONENT;if(n===vs)return o.DEPTH_STENCIL;if(n===Zl)return o.RED;if(n===Jl)return o.RED_INTEGER;if(n===bh)return o.RG;if(n===Ql)return o.RG_INTEGER;if(n===tc)return o.RGBA_INTEGER;if(n===vr||n===_r||n===yr||n===xr)if(r===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===$o||n===Ko||n===Zo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ko)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Jo||n===Qo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jo)return r===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qo)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ta)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return r===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===pa||n===ma)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Mr)return r===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===ga||n===va||n===_a)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}class ng extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $n extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Oe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new ti({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new De(new pr(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class ag extends ei{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,g=null;const v=new og,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],w=new $t;let T=null;const I=new $e;I.layers.enable(1),I.viewport=new Me;const D=new $e;D.layers.enable(2),D.viewport=new Me;const E=[I,D],M=new ng;M.layers.enable(1),M.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let P=y[R];return P===void 0&&(P=new Yr,y[R]=P),P.getTargetRaySpace()},this.getControllerGrip=function(R){let P=y[R];return P===void 0&&(P=new Yr,y[R]=P),P.getGripSpace()},this.getHand=function(R){let P=y[R];return P===void 0&&(P=new Yr,y[R]=P),P.getHandSpace()};function L(R){const P=x.indexOf(R.inputSource);if(P===-1)return;const G=y[P];G!==void 0&&(G.update(R.inputSource,R.frame,h||r),G.dispatchEvent({type:R.type,data:R.inputSource}))}function W(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let R=0;R<y.length;R++){const P=x[R];P!==null&&(x[R]=null,y[R].disconnect(P))}C=null,F=null,v.reset(),t.setRenderTarget(p),f=null,d=null,c=null,i=null,_=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(R){h=R},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0){const P={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,P),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new fi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let P=null,G=null,J=null;m.depth&&(J=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=m.stencil?vs:Gi,G=m.stencil?Ms:ji);const nt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:s};c=new XRWebGLBinding(i,e),d=c.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new fi(d.textureWidth,d.textureHeight,{format:pn,type:Qn,depthTexture:new _c(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const j=t.properties.get(_);j.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,r=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(R){for(let P=0;P<R.removed.length;P++){const G=R.removed[P],J=x.indexOf(G);J>=0&&(x[J]=null,y[J].disconnect(G))}for(let P=0;P<R.added.length;P++){const G=R.added[P];let J=x.indexOf(G);if(J===-1){for(let j=0;j<y.length;j++)if(j>=x.length){x.push(G),J=j;break}else if(x[j]===null){x[j]=G,J=j;break}if(J===-1)break}const nt=y[J];nt&&nt.connect(G)}}const ot=new q,H=new q;function N(R,P,G){ot.setFromMatrixPosition(P.matrixWorld),H.setFromMatrixPosition(G.matrixWorld);const J=ot.distanceTo(H),nt=P.projectionMatrix.elements,j=G.projectionMatrix.elements,at=nt[14]/(nt[10]-1),B=nt[14]/(nt[10]+1),xt=(nt[9]+1)/nt[5],pt=(nt[9]-1)/nt[5],Mt=(nt[8]-1)/nt[0],st=(j[8]+1)/j[0],ft=at*Mt,U=at*st,b=J/(-Mt+st),et=b*-Mt;P.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(et),R.translateZ(b),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Q=at+b,ct=B+b,ut=ft-et,Lt=U+(J-et),mt=xt*B/ct*Q,At=pt*B/ct*Q;R.projectionMatrix.makePerspective(ut,Lt,mt,At,Q,ct),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function K(R,P){P===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(P.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;v.texture!==null&&(R.near=v.depthNear,R.far=v.depthFar),M.near=D.near=I.near=R.near,M.far=D.far=I.far=R.far,(C!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,F=M.far,I.near=C,I.far=F,D.near=C,D.far=F,I.updateProjectionMatrix(),D.updateProjectionMatrix(),R.updateProjectionMatrix());const P=R.parent,G=M.cameras;K(M,P);for(let J=0;J<G.length;J++)K(G[J],P);G.length===2?N(M,I,D):M.projectionMatrix.copy(I.projectionMatrix),Y(R,M,P)};function Y(R,P,G){G===null?R.matrix.copy(P.matrixWorld):(R.matrix.copy(G.matrixWorld),R.matrix.invert(),R.matrix.multiply(P.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Ki*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(R){l=R,d!==null&&(d.fixedFoveation=R),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=R)},this.hasDepthSensing=function(){return v.texture!==null};let z=null;function tt(R,P){if(u=P.getViewerPose(h||r),g=P,u!==null){const G=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let J=!1;G.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let j=0;j<G.length;j++){const at=G[j];let B=null;if(f!==null)B=f.getViewport(at);else{const pt=c.getViewSubImage(d,at);B=pt.viewport,j===0&&(t.setRenderTargetTextures(_,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(_))}let xt=E[j];xt===void 0&&(xt=new $e,xt.layers.enable(j),xt.viewport=new Me,E[j]=xt),xt.matrix.fromArray(at.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(at.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(B.x,B.y,B.width,B.height),j===0&&(M.matrix.copy(xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(xt)}const nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const j=c.getDepthInformation(G[0]);j&&j.isValid&&j.texture&&v.init(t,j,i.renderState)}}for(let G=0;G<y.length;G++){const J=x[G],nt=y[G];J!==null&&nt!==void 0&&nt.update(J,P,h||r)}v.render(t,M),z&&z(R,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),g=null}const k=new vc;k.setAnimationLoop(tt),this.setAnimationLoop=function(R){z=R},this.dispose=function(){}}}const ai=new gn,lg=new ae;function cg(o,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pc(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),c(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;if(y&&(m.envMap.value=y,ai.copy(x),ai.x*=-1,ai.y*=-1,ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=o._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hg(o,t,e,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=i[_.id];x===void 0&&(g(_),x=u(_),i[_.id]=x,_.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(_,w);const T=t.render.frame;s[_.id]!==T&&(d(_),s[_.id]=T)}function u(_){const y=c();_.__bindingPointIndex=y;const x=o.createBuffer(),w=_.__size,T=_.usage;return o.bindBuffer(o.UNIFORM_BUFFER,x),o.bufferData(o.UNIFORM_BUFFER,w,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,w=_.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let T=0,I=x.length;T<I;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=D.length;E<M;E++){const C=D[E];if(f(C,T,E,w)===!0){const F=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let X=0;X<L.length;X++){const ot=L[X],H=v(ot);typeof ot=="number"||typeof ot=="boolean"?(C.__data[0]=ot,o.bufferSubData(o.UNIFORM_BUFFER,F+W,C.__data)):ot.isMatrix3?(C.__data[0]=ot.elements[0],C.__data[1]=ot.elements[1],C.__data[2]=ot.elements[2],C.__data[3]=0,C.__data[4]=ot.elements[3],C.__data[5]=ot.elements[4],C.__data[6]=ot.elements[5],C.__data[7]=0,C.__data[8]=ot.elements[6],C.__data[9]=ot.elements[7],C.__data[10]=ot.elements[8],C.__data[11]=0):(ot.toArray(C.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(_,y,x,w){const T=_.value,I=y+"_"+x;if(w[I]===void 0)return typeof T=="number"||typeof T=="boolean"?w[I]=T:w[I]=T.clone(),!0;{const D=w[I];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return w[I]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(_){const y=_.uniforms;let x=0;const w=16;for(let I=0,D=y.length;I<D;I++){const E=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,C=E.length;M<C;M++){const F=E[M],L=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=L.length;W<X;W++){const ot=L[W],H=v(ot),N=x%w;N!==0&&w-N<H.boundary&&(x+=w-N),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=H.storage}}}const T=x%w;return T>0&&(x+=w-T),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)o.deleteBuffer(i[_]);r=[],i={},s={}}return{bind:l,update:h,dispose:p}}class ug{constructor(t={}){const{canvas:e=nu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const y=this;let x=!1,w=0,T=0,I=null,D=-1,E=null;const M=new Me,C=new Me;let F=null;const L=new Jt(0);let W=0,X=e.width,ot=e.height,H=1,N=null,K=null;const Y=new Me(0,0,X,ot),z=new Me(0,0,X,ot);let tt=!1;const k=new Co;let R=!1,P=!1;const G=new ae,J=new $t,nt=new q,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return I===null?H:1}let B=n;function xt(A,O){const $=e.getContext(A,O);return $!==null?$:null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),B===null){const O="webgl2";if(B=xt(O,A),B===null)throw xt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pt,Mt,st,ft,U,b,et,Q,ct,ut,Lt,mt,At,Bt,vt,Rt,Wt,Vt,Ht,Qt,Zt,ee,ie,se;function Gt(){pt=new yp(B),pt.init(),Mt=new fp(B,pt,t),ee=new eg(B,pt),st=new Qm(B),ft=new Sp(B),U=new zm,b=new tg(B,pt,st,U,Mt,ee,ft),et=new mp(y),Q=new _p(y),ct=new Tu(B),ie=new up(B,ct),ut=new xp(B,ct,ft,ie),Lt=new bp(B,ut,ct,ft),Ht=new Ep(B,Mt,b),Rt=new pp(U),mt=new Om(y,et,Q,pt,Mt,ie,Rt),At=new cg(y,U),Bt=new km,vt=new Ym(pt),Vt=new hp(y,et,Q,st,Lt,d,l),Wt=new Jm(y,Lt,Mt),se=new hg(B,ft,Mt,st),Qt=new dp(B,pt,ft),Zt=new Mp(B,pt,ft),ft.programs=mt.programs,y.capabilities=Mt,y.extensions=pt,y.properties=U,y.renderLists=Bt,y.shadowMap=Wt,y.state=st,y.info=ft}Gt();const S=new ag(y,B);this.xr=S,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(X,ot,!1))},this.getSize=function(A){return A.set(X,ot)},this.setSize=function(A,O,$=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,ot=O,e.width=Math.floor(A*H),e.height=Math.floor(O*H),$===!0&&(e.style.width=A+"px",e.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*H,ot*H).floor()},this.setDrawingBufferSize=function(A,O,$){X=A,ot=O,H=$,e.width=Math.floor(A*$),e.height=Math.floor(O*$),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,O,$,Z){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,O,$,Z),st.viewport(M.copy(Y).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(z)},this.setScissor=function(A,O,$,Z){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,O,$,Z),st.scissor(C.copy(z).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(A){st.setScissorTest(tt=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(A=!0,O=!0,$=!0){let Z=0;if(A){let V=!1;if(I!==null){const _t=I.texture.format;V=_t===tc||_t===Ql||_t===Jl}if(V){const _t=I.texture.type,St=_t===Qn||_t===ji||_t===Yl||_t===Ms||_t===$l||_t===Kl,zt=Vt.getClearColor(),Ct=Vt.getClearAlpha(),Ft=zt.r,Et=zt.g,qt=zt.b;St?(f[0]=Ft,f[1]=Et,f[2]=qt,f[3]=Ct,B.clearBufferuiv(B.COLOR,0,f)):(g[0]=Ft,g[1]=Et,g[2]=qt,g[3]=Ct,B.clearBufferiv(B.COLOR,0,g))}else Z|=B.COLOR_BUFFER_BIT}O&&(Z|=B.DEPTH_BUFFER_BIT),$&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Bt.dispose(),vt.dispose(),U.dispose(),et.dispose(),Q.dispose(),Lt.dispose(),ie.dispose(),se.dispose(),mt.dispose(),S.dispose(),S.removeEventListener("sessionstart",le),S.removeEventListener("sessionend",lt),ht.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=ft.autoReset,O=Wt.enabled,$=Wt.autoUpdate,Z=Wt.needsUpdate,V=Wt.type;Gt(),ft.autoReset=A,Wt.enabled=O,Wt.autoUpdate=$,Wt.needsUpdate=Z,Wt.type=V}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nt(A){const O=A.target;O.removeEventListener("dispose",Nt),ne(O)}function ne(A){te(A),U.remove(A)}function te(A){const O=U.get(A).programs;O!==void 0&&(O.forEach(function($){mt.releaseProgram($)}),A.isShaderMaterial&&mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,$,Z,V,_t){O===null&&(O=j);const St=V.isMesh&&V.matrixWorld.determinant()<0,zt=Ut(A,O,$,Z,V);st.setMaterial(Z,St);let Ct=$.index,Ft=1;if(Z.wireframe===!0){if(Ct=ut.getWireframeAttribute($),Ct===void 0)return;Ft=2}const Et=$.drawRange,qt=$.attributes.position;let ue=Et.start*Ft,_e=(Et.start+Et.count)*Ft;_t!==null&&(ue=Math.max(ue,_t.start*Ft),_e=Math.min(_e,(_t.start+_t.count)*Ft)),Ct!==null?(ue=Math.max(ue,0),_e=Math.min(_e,Ct.count)):qt!=null&&(ue=Math.max(ue,0),_e=Math.min(_e,qt.count));const ye=_e-ue;if(ye<0||ye===1/0)return;ie.setup(V,Z,zt,$,Ct);let Ae,jt=Qt;if(Ct!==null&&(Ae=ct.get(Ct),jt=Zt,jt.setIndex(Ae)),V.isMesh)Z.wireframe===!0?(st.setLineWidth(Z.wireframeLinewidth*at()),jt.setMode(B.LINES)):jt.setMode(B.TRIANGLES);else if(V.isLine){let Kt=Z.linewidth;Kt===void 0&&(Kt=1),st.setLineWidth(Kt*at()),V.isLineSegments?jt.setMode(B.LINES):V.isLineLoop?jt.setMode(B.LINE_LOOP):jt.setMode(B.LINE_STRIP)}else V.isPoints?jt.setMode(B.POINTS):V.isSprite&&jt.setMode(B.TRIANGLES);if(V.isBatchedMesh)jt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)jt.renderInstances(ue,ye,V.count);else if($.isInstancedBufferGeometry){const Kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xe=Math.min($.instanceCount,Kt);jt.renderInstances(ue,ye,xe)}else jt.render(ue,ye)};function fe(A,O,$){A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,Dt(A,O,$),A.side=Un,A.needsUpdate=!0,Dt(A,O,$),A.side=_n):Dt(A,O,$)}this.compile=function(A,O,$=null){$===null&&($=A),m=vt.get($),m.init(),_.push(m),$.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==$&&A.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(y._useLegacyLights);const Z=new Set;return A.traverse(function(V){const _t=V.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){const zt=_t[St];fe(zt,$,V),Z.add(zt)}else fe(_t,$,V),Z.add(_t)}),_.pop(),m=null,Z},this.compileAsync=function(A,O,$=null){const Z=this.compile(A,O,$);return new Promise(V=>{function _t(){if(Z.forEach(function(St){U.get(St).currentProgram.isReady()&&Z.delete(St)}),Z.size===0){V(A);return}setTimeout(_t,10)}pt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Ee=null;function he(A){Ee&&Ee(A)}function le(){ht.stop()}function lt(){ht.start()}const ht=new vc;ht.setAnimationLoop(he),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(A){Ee=A,S.setAnimationLoop(A),A===null?ht.stop():ht.start()},S.addEventListener("sessionstart",le),S.addEventListener("sessionend",lt),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(O),O=S.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,O,I),m=vt.get(A,_.length),m.init(),_.push(m),G.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(G),P=this.localClippingEnabled,R=Rt.init(this.clippingPlanes,P),v=Bt.get(A,p.length),v.init(),p.push(v),gt(A,O,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(N,K),this.info.render.frame++,R===!0&&Rt.beginShadows();const $=m.state.shadowsArray;if(Wt.render($,A,O),R===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1)&&Vt.render(v,A),m.setupLights(y._useLegacyLights),O.isArrayCamera){const Z=O.cameras;for(let V=0,_t=Z.length;V<_t;V++){const St=Z[V];yt(v,A,St,St.viewport)}}else yt(v,A,O);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,O),ie.resetDefaultState(),D=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function gt(A,O,$,Z){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||k.intersectsSprite(A)){Z&&nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);const St=Lt.update(A),zt=A.material;zt.visible&&v.push(A,St,zt,$,nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||k.intersectsObject(A))){const St=Lt.update(A),zt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),nt.copy(St.boundingSphere.center)),nt.applyMatrix4(A.matrixWorld).applyMatrix4(G)),Array.isArray(zt)){const Ct=St.groups;for(let Ft=0,Et=Ct.length;Ft<Et;Ft++){const qt=Ct[Ft],ue=zt[qt.materialIndex];ue&&ue.visible&&v.push(A,St,ue,$,nt.z,qt)}}else zt.visible&&v.push(A,St,zt,$,nt.z,null)}}const _t=A.children;for(let St=0,zt=_t.length;St<zt;St++)gt(_t[St],O,$,Z)}function yt(A,O,$,Z){const V=A.opaque,_t=A.transmissive,St=A.transparent;m.setupLightsView($),R===!0&&Rt.setGlobalState(y.clippingPlanes,$),_t.length>0&&Xt(V,_t,O,$),Z&&st.viewport(M.copy(Z)),V.length>0&&Pt(V,O,$),_t.length>0&&Pt(_t,O,$),St.length>0&&Pt(St,O,$),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Xt(A,O,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new fi(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?or:Qn,minFilter:Nn,samples:4,stencilBuffer:s});const Ft=U.get(m.state.transmissionRenderTarget);Ft.__isTransmissionRenderTarget=!0}const _t=m.state.transmissionRenderTarget;y.getDrawingBufferSize(J),_t.setSize(J.x,J.y);const St=y.getRenderTarget();y.setRenderTarget(_t),y.getClearColor(L),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear();const zt=y.toneMapping;y.toneMapping=Jn,Pt(A,$,Z),b.updateMultisampleRenderTarget(_t),b.updateRenderTargetMipmap(_t);let Ct=!1;for(let Ft=0,Et=O.length;Ft<Et;Ft++){const qt=O[Ft],ue=qt.object,_e=qt.geometry,ye=qt.material,Ae=qt.group;if(ye.side===_n&&ue.layers.test(Z.layers)){const jt=ye.side;ye.side=Je,ye.needsUpdate=!0,wt(ue,$,Z,_e,ye,Ae),ye.side=jt,ye.needsUpdate=!0,Ct=!0}}Ct===!0&&(b.updateMultisampleRenderTarget(_t),b.updateRenderTargetMipmap(_t)),y.setRenderTarget(St),y.setClearColor(L,W),y.toneMapping=zt}function Pt(A,O,$){const Z=O.isScene===!0?O.overrideMaterial:null;for(let V=0,_t=A.length;V<_t;V++){const St=A[V],zt=St.object,Ct=St.geometry,Ft=Z===null?St.material:Z,Et=St.group;zt.layers.test($.layers)&&wt(zt,O,$,Ct,Ft,Et)}}function wt(A,O,$,Z,V,_t){A.onBeforeRender(y,O,$,Z,V,_t),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,O,$,Z,A,_t),V.transparent===!0&&V.side===_n&&V.forceSinglePass===!1?(V.side=Je,V.needsUpdate=!0,y.renderBufferDirect($,O,Z,V,A,_t),V.side=Un,V.needsUpdate=!0,y.renderBufferDirect($,O,Z,V,A,_t),V.side=_n):y.renderBufferDirect($,O,Z,V,A,_t),A.onAfterRender(y,O,$,Z,V,_t)}function Dt(A,O,$){O.isScene!==!0&&(O=j);const Z=U.get(A),V=m.state.lights,_t=m.state.shadowsArray,St=V.state.version,zt=mt.getParameters(A,V.state,_t,O,$),Ct=mt.getProgramCacheKey(zt);let Ft=Z.programs;Z.environment=A.isMeshStandardMaterial?O.environment:null,Z.fog=O.fog,Z.envMap=(A.isMeshStandardMaterial?Q:et).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ft===void 0&&(A.addEventListener("dispose",Nt),Ft=new Map,Z.programs=Ft);let Et=Ft.get(Ct);if(Et!==void 0){if(Z.currentProgram===Et&&Z.lightsStateVersion===St)return Tt(A,zt),Et}else zt.uniforms=mt.getUniforms(A),A.onBuild($,zt,y),A.onBeforeCompile(zt,y),Et=mt.acquireProgram(zt,Ct),Ft.set(Ct,Et),Z.uniforms=zt.uniforms;const qt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),Tt(A,zt),Z.needsLights=It(A),Z.lightsStateVersion=St,Z.needsLights&&(qt.ambientLightColor.value=V.state.ambient,qt.lightProbe.value=V.state.probe,qt.directionalLights.value=V.state.directional,qt.directionalLightShadows.value=V.state.directionalShadow,qt.spotLights.value=V.state.spot,qt.spotLightShadows.value=V.state.spotShadow,qt.rectAreaLights.value=V.state.rectArea,qt.ltc_1.value=V.state.rectAreaLTC1,qt.ltc_2.value=V.state.rectAreaLTC2,qt.pointLights.value=V.state.point,qt.pointLightShadows.value=V.state.pointShadow,qt.hemisphereLights.value=V.state.hemi,qt.directionalShadowMap.value=V.state.directionalShadowMap,qt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,qt.spotShadowMap.value=V.state.spotShadowMap,qt.spotLightMatrix.value=V.state.spotLightMatrix,qt.spotLightMap.value=V.state.spotLightMap,qt.pointShadowMap.value=V.state.pointShadowMap,qt.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Et,Z.uniformsList=null,Et}function rt(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=nr.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Tt(A,O){const $=U.get(A);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Ut(A,O,$,Z,V){O.isScene!==!0&&(O=j),b.resetTextureUnits();const _t=O.fog,St=Z.isMeshStandardMaterial?O.environment:null,zt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ke,Ct=(Z.isMeshStandardMaterial?Q:et).get(Z.envMap||St),Ft=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Et=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qt=!!$.morphAttributes.position,ue=!!$.morphAttributes.normal,_e=!!$.morphAttributes.color;let ye=Jn;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=y.toneMapping);const Ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,jt=Ae!==void 0?Ae.length:0,Kt=U.get(Z),xe=m.state.lights;if(R===!0&&(P===!0||A!==E)){const pe=A===E&&Z.id===D;Rt.setState(Z,A,pe)}let de=!1;Z.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==xe.state.version||Kt.outputColorSpace!==zt||V.isBatchedMesh&&Kt.batching===!1||!V.isBatchedMesh&&Kt.batching===!0||V.isInstancedMesh&&Kt.instancing===!1||!V.isInstancedMesh&&Kt.instancing===!0||V.isSkinnedMesh&&Kt.skinning===!1||!V.isSkinnedMesh&&Kt.skinning===!0||V.isInstancedMesh&&Kt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Kt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Kt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Kt.instancingMorph===!1&&V.morphTexture!==null||Kt.envMap!==Ct||Z.fog===!0&&Kt.fog!==_t||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==Ft||Kt.vertexTangents!==Et||Kt.morphTargets!==qt||Kt.morphNormals!==ue||Kt.morphColors!==_e||Kt.toneMapping!==ye||Kt.morphTargetsCount!==jt)&&(de=!0):(de=!0,Kt.__version=Z.version);let Ce=Kt.currentProgram;de===!0&&(Ce=Dt(Z,O,V));let Le=!1,Te=!1,He=!1;const Se=Ce.getUniforms(),Yt=Kt.uniforms;if(st.useProgram(Ce.program)&&(Le=!0,Te=!0,He=!0),Z.id!==D&&(D=Z.id,Te=!0),Le||E!==A){Se.setValue(B,"projectionMatrix",A.projectionMatrix),Se.setValue(B,"viewMatrix",A.matrixWorldInverse);const pe=Se.map.cameraPosition;pe!==void 0&&pe.setValue(B,nt.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Se.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Se.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Te=!0,He=!0)}if(V.isSkinnedMesh){Se.setOptional(B,V,"bindMatrix"),Se.setOptional(B,V,"bindMatrixInverse");const pe=V.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),Se.setValue(B,"boneTexture",pe.boneTexture,b))}V.isBatchedMesh&&(Se.setOptional(B,V,"batchingTexture"),Se.setValue(B,"batchingTexture",V._matricesTexture,b));const ze=$.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&Ht.update(V,$,Ce),(Te||Kt.receiveShadow!==V.receiveShadow)&&(Kt.receiveShadow=V.receiveShadow,Se.setValue(B,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Yt.envMap.value=Ct,Yt.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&O.environment!==null&&(Yt.envMapIntensity.value=O.environmentIntensity),Te&&(Se.setValue(B,"toneMappingExposure",y.toneMappingExposure),Kt.needsLights&&kt(Yt,He),_t&&Z.fog===!0&&At.refreshFogUniforms(Yt,_t),At.refreshMaterialUniforms(Yt,Z,H,ot,m.state.transmissionRenderTarget),nr.upload(B,rt(Kt),Yt,b)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(nr.upload(B,rt(Kt),Yt,b),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Se.setValue(B,"center",V.center),Se.setValue(B,"modelViewMatrix",V.modelViewMatrix),Se.setValue(B,"normalMatrix",V.normalMatrix),Se.setValue(B,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const pe=Z.uniformsGroups;for(let cn=0,An=pe.length;cn<An;cn++){const bs=pe[cn];se.update(bs,Ce),se.bind(bs,Ce)}}return Ce}function kt(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function It(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,O,$){U.get(A.texture).__webglTexture=O,U.get(A.depthTexture).__webglTexture=$;const Z=U.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const $=U.get(A);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,$=0){I=A,w=O,T=$;let Z=!0,V=null,_t=!1,St=!1;if(A){const Ct=U.get(A);Ct.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1):Ct.__webglFramebuffer===void 0?b.setupRenderTarget(A):Ct.__hasExternalTextures&&b.rebindTextures(A,U.get(A.texture).__webglTexture,U.get(A.depthTexture).__webglTexture);const Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(St=!0);const Et=U.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Et[O])?V=Et[O][$]:V=Et[O],_t=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?V=U.get(A).__webglMultisampledFramebuffer:Array.isArray(Et)?V=Et[$]:V=Et,M.copy(A.viewport),C.copy(A.scissor),F=A.scissorTest}else M.copy(Y).multiplyScalar(H).floor(),C.copy(z).multiplyScalar(H).floor(),F=tt;if(st.bindFramebuffer(B.FRAMEBUFFER,V)&&Z&&st.drawBuffers(A,V),st.viewport(M),st.scissor(C),st.setScissorTest(F),_t){const Ct=U.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ct.__webglTexture,$)}else if(St){const Ct=U.get(A.texture),Ft=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,$||0,Ft)}D=-1},this.readRenderTargetPixels=function(A,O,$,Z,V,_t,St){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(zt=zt[St]),zt){st.bindFramebuffer(B.FRAMEBUFFER,zt);try{const Ct=A.texture,Ft=Ct.format,Et=Ct.type;if(Ft!==pn&&ee.convert(Ft)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qt=Et===or&&(pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float"));if(Et!==Qn&&ee.convert(Et)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&Et!==xn&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Z&&$>=0&&$<=A.height-V&&B.readPixels(O,$,Z,V,ee.convert(Ft),ee.convert(Et),_t)}finally{const Ct=I!==null?U.get(I).__webglFramebuffer:null;st.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(A,O,$=0){const Z=Math.pow(2,-$),V=Math.floor(O.image.width*Z),_t=Math.floor(O.image.height*Z);b.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,A.x,A.y,V,_t),st.unbindTexture()},this.copyTextureToTexture=function(A,O,$,Z=0){const V=O.image.width,_t=O.image.height,St=ee.convert($.format),zt=ee.convert($.type);b.setTexture2D($,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Z,A.x,A.y,V,_t,St,zt,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Z,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,St,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,Z,A.x,A.y,St,zt,O.image),Z===0&&$.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(A,O,$,Z,V=0){const _t=Math.round(A.max.x-A.min.x),St=Math.round(A.max.y-A.min.y),zt=A.max.z-A.min.z+1,Ct=ee.convert(Z.format),Ft=ee.convert(Z.type);let Et;if(Z.isData3DTexture)b.setTexture3D(Z,0),Et=B.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)b.setTexture2DArray(Z,0),Et=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);const qt=B.getParameter(B.UNPACK_ROW_LENGTH),ue=B.getParameter(B.UNPACK_IMAGE_HEIGHT),_e=B.getParameter(B.UNPACK_SKIP_PIXELS),ye=B.getParameter(B.UNPACK_SKIP_ROWS),Ae=B.getParameter(B.UNPACK_SKIP_IMAGES),jt=$.isCompressedTexture?$.mipmaps[V]:$.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,jt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,jt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?B.texSubImage3D(Et,V,O.x,O.y,O.z,_t,St,zt,Ct,Ft,jt.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(Et,V,O.x,O.y,O.z,_t,St,zt,Ct,jt.data):B.texSubImage3D(Et,V,O.x,O.y,O.z,_t,St,zt,Ct,Ft,jt),B.pixelStorei(B.UNPACK_ROW_LENGTH,qt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_e),B.pixelStorei(B.UNPACK_SKIP_ROWS,ye),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ae),V===0&&Z.generateMipmaps&&B.generateMipmap(Et),st.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),st.unbindTexture()},this.resetState=function(){w=0,T=0,I=null,st.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===To?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===fr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class dg extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ac("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new q;class Lo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const cl=new q,hl=new Me,ul=new Me,pg=new q,dl=new ae,Ys=new q,jr=new En,fl=new ae,$r=new Ss;class mg extends De{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yo,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ys),this.boundingBox.expandByPoint(Ys)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ys),this.boundingSphere.expandByPoint(Ys)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(i),t.ray.intersectsSphere(jr)!==!1&&(fl.copy(i).invert(),$r.copy(t.ray).applyMatrix4(fl),!(this.boundingBox!==null&&$r.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,$r)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Yo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;hl.fromBufferAttribute(i.attributes.skinIndex,t),ul.fromBufferAttribute(i.attributes.skinWeight,t),cl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=ul.getComponent(s);if(r!==0){const a=hl.getComponent(s);dl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(pg.copy(cl).applyMatrix4(dl),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class bc extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ac extends Oe{constructor(t=null,e=1,n=1,i,s,r,a,l,h=Ke,u=Ke,c,d){super(null,r,a,l,h,u,i,s,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pl=new ae,gg=new ae;class No{constructor(t=[],e=[]){this.uuid=mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ae;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const a=t[s]?t[s].matrixWorld:gg;pl.multiplyMatrices(a,e[s]),pl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new No(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ac(e,t,t,pn,xn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new bc),this.bones.push(r),this.boneInverses.push(new ae().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const r=e[i];t.bones.push(r.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class po extends Ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fi=new ae,ml=new ae,js=[],gl=new Fn,vg=new ae,as=new De,ls=new En;class _g extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),gl.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(gl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),ls.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),t.ray.intersectsSphere(ls)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fi),ml.multiplyMatrices(n,Fi),as.matrixWorld=ml,as.raycast(t,js);for(let r=0,a=js.length;r<a;r++){const l=js[r];l.instanceId=s,l.object=this,e.push(l)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ac(new Float32Array(i*this.count),i,this.count,Zl,xn));const s=this.morphTexture.source.data.data;let r=0;for(let h=0;h<n.length;h++)r+=n[h];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ms extends rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vl=new q,_l=new q,yl=new ae,Kr=new Ss,$s=new En;class Do extends Re{constructor(t=new Qe,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)vl.fromBufferAttribute(e,i-1),_l.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=vl.distanceTo(_l);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,t.ray.intersectsSphere($s)===!1)return;yl.copy(i).invert(),Kr.copy(t.ray).applyMatrix4(yl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new q,u=new q,c=new q,d=new q,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),_=Math.min(g.count,r.start+r.count);for(let y=p,x=_-1;y<x;y+=f){const w=g.getX(y),T=g.getX(y+1);if(h.fromBufferAttribute(m,w),u.fromBufferAttribute(m,T),Kr.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),_=Math.min(m.count,r.start+r.count);for(let y=p,x=_-1;y<x;y+=f){if(h.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Kr.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const xl=new q,Ml=new q;class mo extends Do{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)xl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xl.distanceTo(Ml);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yg extends Do{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ki extends rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sl=new ae,go=new Ss,Ks=new En,Zs=new q;class ir extends Re{constructor(t=new Qe,e=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;Sl.copy(i).invert(),go.copy(t.ray).applyMatrix4(Sl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,v=f;g<v;g++){const m=h.getX(g);Zs.fromBufferAttribute(c,m),El(Zs,m,l,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,v=f;g<v;g++)Zs.fromBufferAttribute(c,g),El(Zs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function El(o,t,e,n,i,s,r){const a=go.distanceSqToPoint(o);if(a<e){const l=new q;go.closestPointToPoint(o,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class Uo extends Qe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),s=Math.floor(s);const u=[],c=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function _(){const x=new q,w=new q;let T=0;const I=(e-t)/n;for(let D=0;D<=s;D++){const E=[],M=D/s,C=M*(e-t)+t;for(let F=0;F<=i;F++){const L=F/i,W=L*l+a,X=Math.sin(W),ot=Math.cos(W);w.x=C*X,w.y=-M*n+m,w.z=C*ot,c.push(w.x,w.y,w.z),x.set(X,I,ot).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-M),E.push(g++)}v.push(E)}for(let D=0;D<i;D++)for(let E=0;E<s;E++){const M=v[E][D],C=v[E+1][D],F=v[E+1][D+1],L=v[E][D+1];u.push(M,C,L),u.push(C,F,L),T+=6}h.addGroup(p,T,0),p+=T}function y(x){const w=g,T=new $t,I=new q;let D=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let F=1;F<=i;F++)c.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const C=g;for(let F=0;F<=i;F++){const W=F/i*l+a,X=Math.cos(W),ot=Math.sin(W);I.x=E*ot,I.y=m*M,I.z=E*X,c.push(I.x,I.y,I.z),d.push(0,M,0),T.x=X*.5+.5,T.y=ot*.5*M+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){const L=w+F,W=C+F;x===!0?u.push(W,W+1,L):u.push(W+1,W,L),D+=3}h.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends Qe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let h=0;const u=[],c=new q,d=new q,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&r===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const T=w/e;c.x=-t*Math.cos(i+T*s)*Math.sin(r+y*a),c.y=t*Math.cos(r+y*a),c.z=t*Math.sin(i+T*s)*Math.sin(r+y*a),g.push(c.x,c.y,c.z),d.copy(c).normalize(),v.push(d.x,d.y,d.z),m.push(T+x,1-y),_.push(h++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=u[p][_+1],x=u[p][_],w=u[p+1][_],T=u[p+1][_+1];(p!==0||r>0)&&f.push(y,x,T),(p!==n-1||l<Math.PI)&&f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bo extends rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bn extends Bo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class wc extends rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Js(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function xg(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Mg(o){function t(i,s){return o[i]-o[s]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function bl(o,t,e){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=o[a+l]}return i}function Tc(o,t,e,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=o[i++];while(s!==void 0)}class Es{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let r;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}r=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}r=n,n=0;break n}break t}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sg extends Es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oi,endingEnd:Oi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case zi:s=t,a=2*e-n;break;case ar:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zi:r=t,l=2*n-e;break;case ar:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let w=0;w!==a;++w)s[w]=p*r[u+w]+_*r[h+w]+y*r[l+w]+x*r[c+w];return s}}class Rc extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(i-e),c=1-u;for(let d=0;d!==a;++d)s[d]=r[h+d]*c+r[l+d]*u;return s}}class Eg extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class bn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Js(e,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Js(t.times,Array),values:Js(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Eg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case $i:e=this.InterpolantFactoryMethodLinear;break;case Sr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return $i;case this.InterpolantFactoryMethodSmooth:return Sr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&xg(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sr,s=t.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let g=0;g!==n;++g){const v=e[c+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const c=a*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,h=0;h!==n;++h)e[l+h]=e[a+h];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=$i;class es extends bn{}es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=_s;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class Cc extends bn{}Cc.prototype.ValueTypeName="color";class Ji extends bn{}Ji.prototype.ValueTypeName="number";class bg extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let h=t*a;for(let u=h+a;h!==u;h+=4)sn.slerpFlat(s,0,r,h-a,r,h,l);return s}}class mi extends bn{InterpolantFactoryMethodLinear(t){return new bg(this.times,this.values,this.getValueSize(),t)}}mi.prototype.ValueTypeName="quaternion";mi.prototype.DefaultInterpolation=$i;mi.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends bn{}ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=_s;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends bn{}Qi.prototype.ValueTypeName="vector";class vo{constructor(t="",e=-1,n=[],i=Ao){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(wg(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let a=0;a<s;a++){let l=[],h=[];l.push((a+s-1)%s,a,(a+1)%s),h.push(0,1,0);const u=Mg(l);l=bl(l,1,u),h=bl(h,1,u),!i&&l[0]===0&&(l.push(s),h.push(h[0])),r.push(new Ji(".morphTargetInfluences["+e[a].name+"]",l,h).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const h=t[a],u=h.name.match(s);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,g,v){if(f.length!==0){const m=[],p=[];Tc(f,m,p,g),m.length!==0&&v.push(new c(d,m,p))}},i=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const h=t.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new Ji(".morphTargetInfluence["+v+"]",m,p))}l=f.length*r}else{const f=".bones["+e[c].name+"]";n(Qi,f+".position",d,"pos",i),n(mi,f+".quaternion",d,"rot",i),n(Qi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ag(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Cc;case"quaternion":return mi;case"bool":case"boolean":return es;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function wg(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ag(o.type);if(o.times===void 0){const e=[],n=[];Tc(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Kn={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Tg{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],g=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Rg=new Tg;class gi{constructor(t){this.manager=t!==void 0?t:Rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}gi.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class Cg extends Error{constructor(t,e){super(t),this.response=e}}class Oo extends gi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Kn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(In[t]!==void 0){In[t].push({onLoad:e,onProgress:n,onError:i});return}In[t]=[],In[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=In[t],c=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){c.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,I=u.length;T<I;T++){const D=u[T];D.onProgress&&D.onProgress(w)}p.enqueue(x),_()}})}}});return new Response(m)}else throw new Cg(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{Kn.add(t,h);const u=In[t];delete In[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=In[t];if(u===void 0)throw this.manager.itemError(t),h;delete In[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Pg extends gi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Kn.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=ys("img");function l(){u(),Kn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(c){u(),i&&i(c),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class _o extends gi{constructor(t){super(t)}load(t,e,n,i){const s=new Oe,r=new Pg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class gr extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Zr=new ae,Al=new q,wl=new q;class zo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wl),e.updateMatrixWorld(),Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ig extends zo{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ki*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Lg extends gr{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Ig}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Tl=new ae,cs=new q,Jr=new q;class Ng extends zo{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(cs),Jr.copy(n.position),Jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jr),n.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl)}}class Dg extends gr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ng}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ug extends zo{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yo extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Ug}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fg extends gr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gs{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Bg extends gi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Kn.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(h=>{e&&e(h),s.manager.itemEnd(t)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return Kn.add(t,h),e&&e(h),s.manager.itemEnd(t),h}).catch(function(h){i&&i(h),Kn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Kn.add(t,l),s.manager.itemStart(t)}}class Og{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Rl(){return(typeof performance>"u"?Date:performance).now()}class zg{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,r;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=e}else{r+=e;const a=e/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,h=e+e;l!==h;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,r=i;s!==r;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)t[e+r]=t[n+r]}_slerp(t,e,n,i){sn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const r=this._workIndex*s;sn.multiplyQuaternionsFlat(t,r,t,e,t,n),sn.slerpFlat(t,e,t,e,t,r,i)}_lerp(t,e,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*r+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let r=0;r!==s;++r){const a=e+r;t[a]=t[a]+t[n+r]*i}}}const Vo="\\[\\]\\.:\\/",Vg=new RegExp("["+Vo+"]","g"),ko="[^"+Vo+"]",kg="[^"+Vo.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",ko),Gg=/(WCOD+)?/.source.replace("WCOD",kg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ko),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ko),qg=new RegExp("^"+Hg+Gg+Wg+Xg+"$"),Yg=["material","materials","bones","map"];class jg{constructor(t,e,n){const i=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class me{constructor(t,e,n){this.path=e,this.parsedPath=n||me.parseTrackName(e),this.node=me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new me.Composite(t,e,n):new me(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){const e=qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Yg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=me.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const r=t[i];if(r===void 0){const h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}me.Composite=jg;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $g{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,r=s.length,a=new Array(r),l={endingStart:Oi,endingEnd:Oi};for(let h=0;h!==r;++h){const u=s[h].createInterpolant(null);a[h]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=wh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,r=s/i,a=i/s;t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,h=a.sampleValues;return l[0]=s,l[1]=s+n,h[0]=t/r,h[1]=e/r,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const r=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Rh:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(r),h[u].accumulateAdditive(a);break;case Ao:default:for(let u=0,c=l.length;u!==c;++u)l[u].evaluate(r),h[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const r=n===Th;if(t===0)return s===-1?i:r&&(s&1)===1?e-i:i;if(n===nc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const h=t<0;this._setEndings(h,!h,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=zi,i.endingEnd=zi):(t?i.endingStart=this.zeroSlopeAtStart?zi:Oi:i.endingStart=ar,e?i.endingEnd=this.zeroSlopeAtEnd?zi:Oi:i.endingEnd=ar)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}const Kg=new Float32Array(1);class Zg extends ei{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,r=t._propertyBindings,a=t._interpolants,l=n.uuid,h=this._bindingsByRootAndName;let u=h[l];u===void 0&&(u={},h[l]=u);for(let c=0;c!==s;++c){const d=i[c],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,r[c]=g;else{if(g=r[c],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=e&&e._propertyBindings[c].binding.parsedPath;g=new zg(me.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[c]=g}a[c].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{const a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),r.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,h=l[l.length-1],u=t._byClipCacheIndex;h._byClipCacheIndex=u,l[u]=h,l.pop(),t._byClipCacheIndex=null;const c=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete c[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[e];r===void 0&&(r={},i[e]=r),r[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=e[e.length-1],h=t._cacheIndex;l._cacheIndex=h,e[h]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Rc(new Float32Array(2),new Float32Array(2),1,Kg),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let r=typeof t=="string"?vo.findByName(i,t):t;const a=r!==null?r.uuid:t,l=this._actionsByClip[a];let h=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Ao),l!==void 0){const c=l.actionByRoot[s];if(c!==void 0&&c.blendMode===n)return c;h=l.knownActions[0],r===null&&(r=h._clip)}if(r===null)return null;const u=new $g(this,r,e,n);return this._bindAction(u,h),this._addInactiveAction(u,a,s),u}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?vo.findByName(n,t):t,r=s?s.uuid:t,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let h=0;h!==n;++h)e[h]._update(i,t,s,r);const a=this._bindings,l=this._nActiveBindings;for(let h=0;h!==l;++h)a[h].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const h=r[a];this._deactivateAction(h);const u=h._cacheIndex,c=e[e.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,c._cacheIndex=u,e[u]=c,e.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Cl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const Jg=/^[og]\s*(.+)?/,Qg=/^mtllib /,tv=/^usemtl /,ev=/^usemap /,Pl=/\s+/,Il=new q,Qr=new q,Ll=new q,Nl=new q,an=new q,Qs=new Jt;function nv(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:r!==void 0?r.smooth:this.smooth,groupStart:r!==void 0?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const h={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;Il.fromArray(i,t),Qr.fromArray(i,e),Ll.fromArray(i,n),an.subVectors(Ll,Qr),Nl.subVectors(Il,Qr),an.cross(Nl),an.normalize(),s.push(an.x,an.y,an.z),s.push(an.x,an.y,an.z),s.push(an.x,an.y,an.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,r,a,l,h){const u=this.vertices.length;let c=this.parseVertexIndex(t,u),d=this.parseVertexIndex(e,u),f=this.parseVertexIndex(n,u);if(this.addVertex(c,d,f),this.addColor(c,d,f),a!==void 0&&a!==""){const g=this.normals.length;c=this.parseNormalIndex(a,g),d=this.parseNormalIndex(l,g),f=this.parseNormalIndex(h,g),this.addNormal(c,d,f)}else this.addFaceNormal(c,d,f);if(i!==void 0&&i!==""){const g=this.uvs.length;c=this.parseUVIndex(i,g),d=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),this.addUV(c,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,r=t.length;s<r;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,r=e.length;s<r;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return o.startObject("",!1),o}class iv extends gi{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,r=new Oo(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new nv;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const h=n[a].trimStart();if(h.length===0)continue;const u=h.charAt(0);if(u!=="#")if(u==="v"){const c=h.split(Pl);switch(c[0]){case"v":e.vertices.push(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])),c.length>=7?(Qs.setRGB(parseFloat(c[4]),parseFloat(c[5]),parseFloat(c[6])).convertSRGBToLinear(),e.colors.push(Qs.r,Qs.g,Qs.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]));break;case"vt":e.uvs.push(parseFloat(c[1]),parseFloat(c[2]));break}}else if(u==="f"){const d=h.slice(1).trim().split(Pl),f=[];for(let v=0,m=d.length;v<m;v++){const p=d[v];if(p.length>0){const _=p.split("/");f.push(_)}}const g=f[0];for(let v=1,m=f.length-1;v<m;v++){const p=f[v],_=f[v+1];e.addFace(g[0],p[0],_[0],g[1],p[1],_[1],g[2],p[2],_[2])}}else if(u==="l"){const c=h.substring(1).trim().split(" ");let d=[];const f=[];if(h.indexOf("/")===-1)d=c;else for(let g=0,v=c.length;g<v;g++){const m=c[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(d,f)}else if(u==="p"){const d=h.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((i=Jg.exec(h))!==null){const c=(" "+i[0].slice(1).trim()).slice(1);e.startObject(c)}else if(tv.test(h))e.object.startMaterial(h.substring(7).trim(),e.materialLibraries);else if(Qg.test(h))e.materialLibraries.push(h.substring(7).trim());else if(ev.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=h.split(" "),i.length>1){const d=i[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;const c=e.object.currentMaterial();c&&(c.smooth=e.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}e.finalize();const s=new $n;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const h=e.objects[a],u=h.geometry,c=h.materials,d=u.type==="Line",f=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const v=new Qe;v.setAttribute("position",new Pe(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new Pe(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new Pe(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new Pe(u.uvs,2));const m=[];for(let _=0,y=c.length;_<y;_++){const x=c[_],w=x.name+"_"+x.smooth+"_"+g;let T=e.materials[w];if(this.materials!==null){if(T=this.materials.create(x.name),d&&T&&!(T instanceof ms)){const I=new ms;rn.prototype.copy.call(I,T),I.color.copy(T.color),T=I}else if(f&&T&&!(T instanceof ki)){const I=new ki({size:10,sizeAttenuation:!1});rn.prototype.copy.call(I,T),I.color.copy(T.color),I.map=T.map,T=I}}T===void 0&&(d?T=new ms:f?T=new ki({size:1,sizeAttenuation:!1}):T=new wc,T.name=x.name,T.flatShading=!x.smooth,T.vertexColors=g,e.materials[w]=T),m.push(T)}let p;if(m.length>1){for(let _=0,y=c.length;_<y;_++){const x=c[_];v.addGroup(x.groupStart,x.groupCount,_)}d?p=new mo(v,m):f?p=new ir(v,m):p=new De(v,m)}else d?p=new mo(v,m[0]):f?p=new ir(v,m[0]):p=new De(v,m[0]);p.name=h.name,s.add(p)}else if(e.vertices.length>0){const a=new ki({size:1,sizeAttenuation:!1}),l=new Qe;l.setAttribute("position",new Pe(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Pe(e.colors,3)),a.vertexColors=!0);const h=new ir(l,a);s.add(h)}return s}}const Dl={type:"change"},to={type:"start"},Ul={type:"end"},tr=new Ss,Fl=new Xn,sv=Math.cos(70*rc.DEG2RAD);class rv extends ei{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Rt),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dl),n.update(),s=i.NONE},this.update=function(){const S=new q,it=new sn().setFromUnitVectors(t.up,new q(0,1,0)),dt=it.clone().invert(),bt=new q,Nt=new sn,ne=new q,te=2*Math.PI;return function(Ee=null){const he=n.object.position;S.copy(he).sub(n.target),S.applyQuaternion(it),a.setFromVector3(S),n.autoRotate&&s===i.NONE&&F(M(Ee)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=n.minAzimuthAngle,lt=n.maxAzimuthAngle;isFinite(le)&&isFinite(lt)&&(le<-Math.PI?le+=te:le>Math.PI&&(le-=te),lt<-Math.PI?lt+=te:lt>Math.PI&&(lt-=te),le<=lt?a.theta=Math.max(le,Math.min(lt,a.theta)):a.theta=a.theta>(le+lt)/2?Math.max(le,a.theta):Math.min(lt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ht=!1;if(n.zoomToCursor&&T||n.object.isOrthographicCamera)a.radius=Y(a.radius);else{const gt=a.radius;a.radius=Y(a.radius*h),ht=gt!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(dt),he.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&T){let gt=null;if(n.object.isPerspectiveCamera){const yt=S.length();gt=Y(yt*h);const Xt=yt-gt;n.object.position.addScaledVector(x,Xt),n.object.updateMatrixWorld(),ht=!!Xt}else if(n.object.isOrthographicCamera){const yt=new q(w.x,w.y,0);yt.unproject(n.object);const Xt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ht=Xt!==n.object.zoom;const Pt=new q(w.x,w.y,0);Pt.unproject(n.object),n.object.position.sub(Pt).add(yt),n.object.updateMatrixWorld(),gt=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;gt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(gt).add(n.object.position):(tr.origin.copy(n.object.position),tr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(tr.direction))<sv?t.lookAt(n.target):(Fl.setFromNormalAndCoplanarPoint(n.object.up,n.target),tr.intersectPlane(Fl,n.target))))}else if(n.object.isOrthographicCamera){const gt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),gt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ht=!0)}return h=1,T=!1,ht||bt.distanceToSquared(n.object.position)>r||8*(1-Nt.dot(n.object.quaternion))>r||ne.distanceToSquared(n.target)>r?(n.dispatchEvent(Dl),bt.copy(n.object.position),Nt.copy(n.object.quaternion),ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ht),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",ct),n.domElement.removeEventListener("wheel",mt),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",ct),n.domElement.getRootNode().removeEventListener("keydown",Bt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new Cl,l=new Cl;let h=1;const u=new q,c=new $t,d=new $t,f=new $t,g=new $t,v=new $t,m=new $t,p=new $t,_=new $t,y=new $t,x=new q,w=new $t;let T=!1;const I=[],D={};let E=!1;function M(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function C(S){const it=Math.abs(S*.01);return Math.pow(.95,n.zoomSpeed*it)}function F(S){l.theta-=S}function L(S){l.phi-=S}const W=function(){const S=new q;return function(dt,bt){S.setFromMatrixColumn(bt,0),S.multiplyScalar(-dt),u.add(S)}}(),X=function(){const S=new q;return function(dt,bt){n.screenSpacePanning===!0?S.setFromMatrixColumn(bt,1):(S.setFromMatrixColumn(bt,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(dt),u.add(S)}}(),ot=function(){const S=new q;return function(dt,bt){const Nt=n.domElement;if(n.object.isPerspectiveCamera){const ne=n.object.position;S.copy(ne).sub(n.target);let te=S.length();te*=Math.tan(n.object.fov/2*Math.PI/180),W(2*dt*te/Nt.clientHeight,n.object.matrix),X(2*bt*te/Nt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(dt*(n.object.right-n.object.left)/n.object.zoom/Nt.clientWidth,n.object.matrix),X(bt*(n.object.top-n.object.bottom)/n.object.zoom/Nt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(S,it){if(!n.zoomToCursor)return;T=!0;const dt=n.domElement.getBoundingClientRect(),bt=S-dt.left,Nt=it-dt.top,ne=dt.width,te=dt.height;w.x=bt/ne*2-1,w.y=-(Nt/te)*2+1,x.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function z(S){c.set(S.clientX,S.clientY)}function tt(S){K(S.clientX,S.clientX),p.set(S.clientX,S.clientY)}function k(S){g.set(S.clientX,S.clientY)}function R(S){d.set(S.clientX,S.clientY),f.subVectors(d,c).multiplyScalar(n.rotateSpeed);const it=n.domElement;F(2*Math.PI*f.x/it.clientHeight),L(2*Math.PI*f.y/it.clientHeight),c.copy(d),n.update()}function P(S){_.set(S.clientX,S.clientY),y.subVectors(_,p),y.y>0?H(C(y.y)):y.y<0&&N(C(y.y)),p.copy(_),n.update()}function G(S){v.set(S.clientX,S.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),ot(m.x,m.y),g.copy(v),n.update()}function J(S){K(S.clientX,S.clientY),S.deltaY<0?N(C(S.deltaY)):S.deltaY>0&&H(C(S.deltaY)),n.update()}function nt(S){let it=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ot(0,n.keyPanSpeed),it=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ot(0,-n.keyPanSpeed),it=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ot(n.keyPanSpeed,0),it=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ot(-n.keyPanSpeed,0),it=!0;break}it&&(S.preventDefault(),n.update())}function j(S){if(I.length===1)c.set(S.pageX,S.pageY);else{const it=se(S),dt=.5*(S.pageX+it.x),bt=.5*(S.pageY+it.y);c.set(dt,bt)}}function at(S){if(I.length===1)g.set(S.pageX,S.pageY);else{const it=se(S),dt=.5*(S.pageX+it.x),bt=.5*(S.pageY+it.y);g.set(dt,bt)}}function B(S){const it=se(S),dt=S.pageX-it.x,bt=S.pageY-it.y,Nt=Math.sqrt(dt*dt+bt*bt);p.set(0,Nt)}function xt(S){n.enableZoom&&B(S),n.enablePan&&at(S)}function pt(S){n.enableZoom&&B(S),n.enableRotate&&j(S)}function Mt(S){if(I.length==1)d.set(S.pageX,S.pageY);else{const dt=se(S),bt=.5*(S.pageX+dt.x),Nt=.5*(S.pageY+dt.y);d.set(bt,Nt)}f.subVectors(d,c).multiplyScalar(n.rotateSpeed);const it=n.domElement;F(2*Math.PI*f.x/it.clientHeight),L(2*Math.PI*f.y/it.clientHeight),c.copy(d)}function st(S){if(I.length===1)v.set(S.pageX,S.pageY);else{const it=se(S),dt=.5*(S.pageX+it.x),bt=.5*(S.pageY+it.y);v.set(dt,bt)}m.subVectors(v,g).multiplyScalar(n.panSpeed),ot(m.x,m.y),g.copy(v)}function ft(S){const it=se(S),dt=S.pageX-it.x,bt=S.pageY-it.y,Nt=Math.sqrt(dt*dt+bt*bt);_.set(0,Nt),y.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),H(y.y),p.copy(_);const ne=(S.pageX+it.x)*.5,te=(S.pageY+it.y)*.5;K(ne,te)}function U(S){n.enableZoom&&ft(S),n.enablePan&&st(S)}function b(S){n.enableZoom&&ft(S),n.enableRotate&&Mt(S)}function et(S){n.enabled!==!1&&(I.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",Q),n.domElement.addEventListener("pointerup",ct)),!ee(S)&&(Qt(S),S.pointerType==="touch"?Wt(S):ut(S)))}function Q(S){n.enabled!==!1&&(S.pointerType==="touch"?Vt(S):Lt(S))}function ct(S){switch(Zt(S),I.length){case 0:n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",Q),n.domElement.removeEventListener("pointerup",ct),n.dispatchEvent(Ul),s=i.NONE;break;case 1:const it=I[0],dt=D[it];Wt({pointerId:it,pageX:dt.x,pageY:dt.y});break}}function ut(S){let it;switch(S.button){case 0:it=n.mouseButtons.LEFT;break;case 1:it=n.mouseButtons.MIDDLE;break;case 2:it=n.mouseButtons.RIGHT;break;default:it=-1}switch(it){case vi.DOLLY:if(n.enableZoom===!1)return;tt(S),s=i.DOLLY;break;case vi.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;k(S),s=i.PAN}else{if(n.enableRotate===!1)return;z(S),s=i.ROTATE}break;case vi.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;z(S),s=i.ROTATE}else{if(n.enablePan===!1)return;k(S),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(to)}function Lt(S){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;R(S);break;case i.DOLLY:if(n.enableZoom===!1)return;P(S);break;case i.PAN:if(n.enablePan===!1)return;G(S);break}}function mt(S){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(S.preventDefault(),n.dispatchEvent(to),J(At(S)),n.dispatchEvent(Ul))}function At(S){const it=S.deltaMode,dt={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(it){case 1:dt.deltaY*=16;break;case 2:dt.deltaY*=100;break}return S.ctrlKey&&!E&&(dt.deltaY*=10),dt}function Bt(S){S.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",vt,{passive:!0,capture:!0}))}function vt(S){S.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",vt,{passive:!0,capture:!0}))}function Rt(S){n.enabled===!1||n.enablePan===!1||nt(S)}function Wt(S){switch(ie(S),I.length){case 1:switch(n.touches.ONE){case _i.ROTATE:if(n.enableRotate===!1)return;j(S),s=i.TOUCH_ROTATE;break;case _i.PAN:if(n.enablePan===!1)return;at(S),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case _i.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xt(S),s=i.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(S),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(to)}function Vt(S){switch(ie(S),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(S),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;st(S),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(S),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;b(S),n.update();break;default:s=i.NONE}}function Ht(S){n.enabled!==!1&&S.preventDefault()}function Qt(S){I.push(S.pointerId)}function Zt(S){delete D[S.pointerId];for(let it=0;it<I.length;it++)if(I[it]==S.pointerId){I.splice(it,1);return}}function ee(S){for(let it=0;it<I.length;it++)if(I[it]==S.pointerId)return!0;return!1}function ie(S){let it=D[S.pointerId];it===void 0&&(it=new $t,D[S.pointerId]=it),it.set(S.pageX,S.pageY)}function se(S){const it=S.pointerId===I[0]?I[1]:I[0];return D[it]}n.domElement.addEventListener("contextmenu",Ht),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",ct),n.domElement.addEventListener("wheel",mt,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Bt,{passive:!0,capture:!0}),this.update()}}function Bl(o,t){if(t===Ch)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===ho||t===ic){let e=o.getIndex();if(e===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===ho)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class ov extends gi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new uv(e)}),this.register(function(e){return new xv(e)}),this.register(function(e){return new Mv(e)}),this.register(function(e){return new Sv(e)}),this.register(function(e){return new fv(e)}),this.register(function(e){return new pv(e)}),this.register(function(e){return new mv(e)}),this.register(function(e){return new gv(e)}),this.register(function(e){return new hv(e)}),this.register(function(e){return new vv(e)}),this.register(function(e){return new dv(e)}),this.register(function(e){return new yv(e)}),this.register(function(e){return new _v(e)}),this.register(function(e){return new lv(e)}),this.register(function(e){return new Ev(e)}),this.register(function(e){return new bv(e)})}load(t,e,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const h=gs.extractUrlBase(t);r=gs.resolveURL(h,this.path)}else r=gs.extractUrlBase(t);this.manager.itemStart(t);const a=function(h){i?i(h):console.error(h),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Oo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{s.parse(h,r,function(u){e(u),s.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Pc){try{r[ce.KHR_BINARY_GLTF]=new Av(t)}catch(c){i&&i(c);return}s=JSON.parse(r[ce.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Ov(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,r[c.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const c=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(c){case ce.KHR_MATERIALS_UNLIT:r[c]=new cv;break;case ce.KHR_DRACO_MESH_COMPRESSION:r[c]=new wv(s,this.dracoLoader);break;case ce.KHR_TEXTURE_TRANSFORM:r[c]=new Tv;break;case ce.KHR_MESH_QUANTIZATION:r[c]=new Rv;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(r),h.setPlugins(a),h.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function av(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lv{constructor(t){this.parser=t,this.name=ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let h;const u=new Jt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ke);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new yo(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Dg(u),h.distance=c;break;case"spot":h=new Lg(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,qn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(h),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class cv{constructor(){this.name=ce.KHR_MATERIALS_UNLIT}getMaterialType(){return Mn}extendParams(t,e,n){const i=[];t.color=new Jt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],ke),t.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,je))}return Promise.all(i)}}class hv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class uv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new $t(a,a)}return Promise.all(s)}}class dv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class fv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Jt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ke)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,je)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class pv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class mv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new Jt().setRGB(a[0],a[1],a[2],ke),Promise.all(s)}}class gv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class vv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new Jt().setRGB(a[0],a[1],a[2],ke),r.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,je)),Promise.all(s)}}class _v{constructor(t){this.parser=t,this.name=ce.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class yv{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class xv{constructor(t){this.parser=t,this.name=ce.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class Mv{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Sv{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Ev{constructor(t){this.name=ce.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(a,l,h);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*c);return r.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class bv{constructor(t){this.name=ce.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==ln.TRIANGLES&&h.mode!==ln.TRIANGLE_STRIP&&h.mode!==ln.TRIANGLE_FAN&&h.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const h in r)a.push(this.parser.getDependency("accessor",r[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const g of c){const v=new ae,m=new q,p=new sn,_=new q(1,1,1),y=new _g(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(m,p,_));for(const x in l)if(x==="_COLOR_0"){const w=l[x];y.instanceColor=new po(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Re.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Pc="glTF",hs=12,Ol={JSON:1313821514,BIN:5130562};class Av{constructor(t){this.name=ce.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Pc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-hs,s=new DataView(t,hs);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Ol.JSON){const h=new Uint8Array(t,hs+r,a);this.content=n.decode(h)}else if(l===Ol.BIN){const h=hs+r;this.body=t.slice(h,h+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ce.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},l={},h={};for(const u in r){const c=xo[u]||u.toLowerCase();a[c]=r[u]}for(const u in t.attributes){const c=xo[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[t.attributes[u]],f=Xi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}c(f)},a,h,ke,d)})})}}class Tv{constructor(){this.name=ce.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Rv{constructor(){this.name=ce.KHR_MESH_QUANTIZATION}}class Ic extends Es{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let r=0;r!==i;r++)e[r]=n[s+r];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-e,c=(n-e)/u,d=c*c,f=d*c,g=t*h,v=g-h,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+c;for(let x=0;x!==a;x++){const w=r[v+x+a],T=r[v+x+l]*u,I=r[g+x+a],D=r[g+x]*u;s[x]=_*w+y*T+m*I+p*D}return s}}const Cv=new sn;class Pv extends Ic{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return Cv.fromArray(s).normalize().toArray(s),s}}const ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zl={9728:Ke,9729:nn,9984:ql,9985:er,9986:us,9987:Nn},Vl={33071:jn,33648:rr,10497:di},eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iv={CUBICSPLINE:void 0,LINEAR:$i,STEP:_s},no={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Bo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),o.DefaultMaterial}function li(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function qn(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Nv(o,t,e){let n=!1,i=!1,s=!1;for(let h=0,u=t.length;h<u;h++){const c=t[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let h=0,u=t.length;h<u;h++){const c=t[h];if(n){const d=c.POSITION!==void 0?e.getDependency("accessor",c.POSITION):o.attributes.position;r.push(d)}if(i){const d=c.NORMAL!==void 0?e.getDependency("accessor",c.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=c.COLOR_0!==void 0?e.getDependency("accessor",c.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=c),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Dv(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uv(o){let t;const e=o.extensions&&o.extensions[ce.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+io(e.attributes):t=o.indices+":"+io(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+io(o.targets[n]);return t}function io(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function Mo(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Bv=new ae;class Ov{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new av,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new _o(this.options.manager):this.textureLoader=new Bg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return li(s,a,i),qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const r=e[i].joints;for(let a=0,l=r.length;a<l;a++)t[r[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const r=t[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[h,u]of r.children.entries())s(u,a.children[h])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ce.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(gs.resolveURL(e.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const r=eo[i.type],a=Xi[i.componentType],l=i.normalized===!0,h=new a(i.count*r);return Promise.resolve(new Ze(h,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=eo[i.type],h=Xi[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==c){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(_);y||(v=new h(a,p*f,i.count*f/u),y=new fg(v,f/u),e.cache.add(_,y)),m=new Lo(y,l,d%f/u,g)}else a===null?v=new h(i.count*l):v=new h(a,d,i.count*l),m=new Ze(v,l,g);if(i.sparse!==void 0){const p=eo.SCALAR,_=Xi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new _(r[1],y,i.sparse.count*p),T=new h(r[2],x,i.sparse.count*l);a!==null&&(m=new Ze(m.array.slice(),m.itemSize,m.normalized));for(let I=0,D=w.length;I<D;I++){const E=w[I];if(m.setX(E,T[I*l]),l>=2&&m.setY(E,T[I*l+1]),l>=3&&m.setZ(E,T[I*l+2]),l>=4&&m.setW(E,T[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,r=e.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,r=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=zl[d.magFilter]||nn,u.minFilter=zl[d.minFilter]||Nn,u.wrapS=Vl[d.wrapS]||di,u.wrapT=Vl[d.wrapT]||di,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(c=>c.clone());const r=i.images[t],a=self.URL||self.webkitURL;let l=r.uri||"",h=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(v){const m=new Oe(v);m.needsUpdate=!0,d(m)}),e.load(gs.resolveURL(c,s.path),g,void 0,f)})}).then(function(c){return h===!0&&a.revokeObjectURL(l),c.userData.mimeType=r.mimeType||Fv(r.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[ce.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ce.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[ce.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ki,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ms,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Bo}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let r;const a={},l=s.extensions||{},h=[];if(l[ce.KHR_MATERIALS_UNLIT]){const c=i[ce.KHR_MATERIALS_UNLIT];r=c.getMaterialType(),h.push(c.extendParams(a,s,e))}else{const c=s.pbrMetallicRoughness||{};if(a.color=new Jt(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ke),a.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(e.assignTexture(a,"map",c.baseColorTexture,je)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(e.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=_n);const u=s.alphaMode||no.OPAQUE;if(u===no.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===no.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Mn&&(h.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $t(1,1),s.normalTexture.scale!==void 0)){const c=s.normalTexture.scale;a.normalScale.set(c,c)}if(s.occlusionTexture!==void 0&&r!==Mn&&(h.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Mn){const c=s.emissiveFactor;a.emissive=new Jt().setRGB(c[0],c[1],c[2],ke)}return s.emissiveTexture!==void 0&&r!==Mn&&h.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,je)),Promise.all(h).then(function(){const c=new r(a);return s.name&&(c.name=s.name),qn(c,s),e.associations.set(c,{materials:t}),s.extensions&&li(i,c,s),c})}createUniqueName(t){const e=me.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return kl(l,a,e)})}const r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a],u=Uv(h),c=i[u];if(c)r.push(c.promise);else{let d;h.extensions&&h.extensions[ce.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=kl(new Qe,h,e),i[u]={primitive:h,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],r=s.primitives,a=[];for(let l=0,h=r.length;l<h;l++){const u=r[l].material===void 0?Lv(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=r[f];let p;const _=h[f];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new mg(v,_):new De(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?p.geometry=Bl(p.geometry,ic):m.mode===ln.TRIANGLE_FAN&&(p.geometry=Bl(p.geometry,ho));else if(m.mode===ln.LINES)p=new mo(v,_);else if(m.mode===ln.LINE_STRIP)p=new Do(v,_);else if(m.mode===ln.LINE_LOOP)p=new yg(v,_);else if(m.mode===ln.POINTS)p=new ir(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dv(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),qn(p,s),m.extensions&&li(i,p,m),e.assignFinalMaterial(p),c.push(p)}for(let f=0,g=c.length;f<g;f++)e.associations.set(c[f],{meshes:t,primitives:f});if(c.length===1)return s.extensions&&li(i,c[0],s),c[0];const d=new $n;s.extensions&&li(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=c.length;f<g;f++)d.add(c[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new $e(rc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Po(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),qn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let h=0,u=r.length;h<u;h++){const c=r[h];if(c){a.push(c);const d=new ae;s!==null&&d.fromArray(s.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new No(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,r=[],a=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),h.push(g),u.push(v))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],g=c[2],v=c[3],m=c[4],p=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],w=f[_],T=g[_],I=v[_],D=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const E=n._createAnimationTracks(x,w,T,I,D);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new vo(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),r=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)r.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Bv)});for(let f=0,g=c.length;f<g;f++)u.add(c[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){a.push(h)}),this.nodeCache[t]=Promise.all(a).then(function(h){let u;if(s.isBone===!0?u=new bc:h.length>1?u=new $n:h.length===1?u=h[0]:u=new Re,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(s.name&&(u.userData.name=s.name,u.name=r),qn(u,s),s.extensions&&li(n,u,s),s.matrix!==void 0){const c=new ae;c.fromArray(s.matrix),u.applyMatrix4(c)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new $n;n.name&&(s.name=i.createUniqueName(n.name)),qn(s,n),n.extensions&&li(e,s,n);const r=n.nodes||[],a=[];for(let l=0,h=r.length;l<h;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,c=l.length;u<c;u++)s.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof rn||d instanceof Oe)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(s),s})}_createAnimationTracks(t,e,n,i,s){const r=[],a=t.name?t.name:t.uuid,l=[];Wn[s.path]===Wn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let h;switch(Wn[s.path]){case Wn.weights:h=Ji;break;case Wn.rotation:h=mi;break;case Wn.position:case Wn.scale:h=Qi;break;default:switch(n.itemSize){case 1:h=Ji;break;case 2:case 3:default:h=Qi;break}break}const u=i.interpolation!==void 0?Iv[i.interpolation]:$i,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new h(l[d]+"."+Wn[s.path],e.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Mo(e.constructor),i=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof mi?Pv:Ic;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zv(o,t,e){const n=t.attributes,i=new Fn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new q(l[0],l[1],l[2]),new q(h[0],h[1],h[2])),a.normalized){const u=Mo(Xi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new q,l=new q;for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c.POSITION!==void 0){const d=e.json.accessors[c.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Mo(Xi[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new En;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function kl(o,t,e){const n=t.attributes,i=[];function s(r,a){return e.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=xo[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(t.indices!==void 0&&!o.index){const r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(r)}return ge.workingColorSpace!==ke&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),qn(o,t),zv(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Nv(o,t.targets,e):o})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Sn{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Sn.nextNameID=Sn.nextNameID||0,this.$name.id=`lil-gui-name-${++Sn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Vv extends Sn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function So(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const kv={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:So,toHexString:So},xs={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Hv={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,t,e=1){const n=xs.fromHexString(o);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([o,t,e],n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return xs.toHexString(i)}},Gv={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const n=xs.fromHexString(o);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:o,g:t,b:e},n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return xs.toHexString(i)}},Wv=[kv,xs,Hv,Gv];function Xv(o){return Wv.find(t=>t.match(o))}class qv extends Sn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Xv(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=So(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class so extends Sn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Yv extends Sn{constructor(t,e,n,i,s,r){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const a=r!==void 0;this.step(a?r:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+_),this.$input.value=this.getValue())},i=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},s=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let r=!1,a,l,h,u,c;const d=5,f=_=>{a=_.clientX,l=h=_.clientY,r=!0,u=this.getValue(),c=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=_=>{if(r){const y=_.clientX-a,x=_.clientY-l;Math.abs(x)>d?(_.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&v()}if(!r){const y=_.clientY-h;c-=y*this._step*this._arrowKeyMultiplier(_),u+c>this._max?c=this._max-u:u+c<this._min&&(c=this._min-u),this._snapClampSetValue(u+c)}h=_.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,_,y,x,w)=>(p-_)/(y-_)*(w-x)+x,e=p=>{const _=this.$slider.getBoundingClientRect();let y=t(p,_.left,_.right,this._min,this._max);this._snapClampSetValue(y)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{e(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,a,l;const h=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),r=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,r=!0):h(p),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",d))},c=p=>{if(r){const _=p.touches[0].clientX-a,y=p.touches[0].clientY-l;Math.abs(_)>Math.abs(y)?h(p):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let v;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class jv extends Sn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class $v extends Sn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Kv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
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
  background: var(--background-color);
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
.lil-gui .controller.boolean {
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
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
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

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
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
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
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
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Zv(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Hl=!1;class Ho{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",closeFolders:r=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Hl&&a&&(Zv(Kv),Hl=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=r}add(t,e,n,i,s){if(Object(n)===n)return new jv(this,t,e,n);const r=t[e];switch(typeof r){case"number":return new Yv(this,t,e,n,i,s);case"boolean":return new Vv(this,t,e);case"string":return new $v(this,t,e);case"function":return new so(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,n=1){return new qv(this,t,e,n)}addFolder(t){const e=new Ho({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof so||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof so)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Bi={width:document.body.clientWidth,height:document.body.clientHeight};class Jv{constructor(){this.world=new Xe.World,this.world.allowSleep=!0,this.timeStep=1/60,this.scene=new dg,this.sceneObjects=[],this.pinOffset=20,this.pinRows=3,this.throwIndex=0,this.maxThrows=2;const t=document.querySelector(".webgl");this.renderer=new ug({canvas:t,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio?window.devicePixelRatio:1),this.renderer.setSize(Bi.width,Bi.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ro,this.loadTexture();const e=new _o;this.ballMaterial=e.load("./textures/bowling_ball.png",n=>n),this.ball=this.createSphere(this.ballMaterial),this.ball.mesh.castShadow=!0,this.ball.mesh.receiveShadow=!0,this.ballThrown=!1,this.ballStrength=-80,this.ballRotation=0,this.waitingThrow,this.chargeShot=!1,this.camera=this.createCamera(),console.log(this.camera),console.log(this.renderer.domElement),this.controls=new rv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.enabled=!0,this.gameOverPopup=document.getElementById("gameOverPopup"),this.throwNumberElement=document.getElementById("throwNumber"),this.message=document.getElementById("message"),document.getElementById("restartButton").addEventListener("click",()=>{location.reload()}),this.initScene()}loadTexture(){return new iv().load("./model/model.obj",e=>{e.scale.multiplyScalar(.2),this.pinTexture=e,this.createPins(this.pinRows)},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened",e)})}createUIHelper(){const t=new pi(.04,.01,1.5),e=new Mn({color:"#288bbd"}),n=new De(t,e);return n.position.set(0,-.3,0),n.geometry.translate(0,0,-1),this.scene.add(n),this.sceneObjects.push({mesh:n,body:n,type:"ui"}),{mesh:n,body:n,type:"ui"}}createPins(){this.createCylinder(0,-.1,0),this.createCylinder(-.16,-.1,-.24),this.createCylinder(.16,-.1,-.24),this.createCylinder(0,-.1,-.24*2),this.createCylinder(-.16*2,-.1,-.24*2),this.createCylinder(.16*2,-.1,-.24*2),this.createCylinder(-.16*1,-.1,-.24*3),this.createCylinder(.16*1,-.1,-.24*3),this.createCylinder(-.16*3,-.1,-.24*3),this.createCylinder(.16*3,-.1,-.24*3)}initControl(t){let e;const n=i=>{if(i.keyCode===82&&location.reload(),this.ballThrown===!1)switch(i.keyCode){case 32:this.chargeShot===!1?(this.chargeShot=!0,this.toggleControls(!1),console.log("Controls disabled for throw"),this.powerStrength()):(clearInterval(this.intervalStrength),e=document.getElementById("barStrength").style.height,e=-e.substring(0,e.length-1),console.log(this.ballStrength+e),t.body.applyImpulse(new Xe.Vec3(0+this.ballRotation,0,this.ballStrength+e),t.body.position),this.ballThrown=!0,console.log("Ball thrown"),this.waitingThrow=setTimeout(()=>{try{this.checkPins(),this.toggleControls(!0),console.log("Controls re-enabled after throw")}catch(s){console.error("Error during throw processing:",s)}},5e3));break;case 37:this.chargeShot===!1&&t.body.position.x>-.5&&(t.body.position.set(t.body.position.x-=.08,t.body.position.y,t.body.position.z),this.UIHelper.body.position.set(this.UIHelper.body.position.x-=.08,this.UIHelper.body.position.y,this.UIHelper.body.position.z));break;case 39:this.chargeShot===!1&&t.body.position.x<.5&&(t.body.position.set(t.body.position.x+=.08,t.body.position.y,t.body.position.z),this.UIHelper.body.position.set(this.UIHelper.body.position.x+=.08,this.UIHelper.body.position.y,this.UIHelper.body.position.z));break;case 38:this.chargeShot===!1&&this.ballRotation<6&&(t.body.quaternion.setFromAxisAngle(new Xe.Vec3(0,.25,0),this.ballRotation+=.75),this.UIHelper.body.rotation.y-=.0075);break;case 40:this.chargeShot===!1&&this.ballRotation>-6&&(t.body.quaternion.setFromAxisAngle(new Xe.Vec3(0,-.25,0),this.ballRotation-=.75),this.UIHelper.body.rotation.y+=.0075);break}};document.addEventListener("keydown",n,!1)}toggleControls(t){this.controls.enabled=t}powerStrength(){var t=1,e=0;function n(){e=e+1*t,(e==100||e==0)&&(t*=-1),document.getElementById("barStrength").style.height=e+"%"}this.intervalStrength=window.setInterval(n,10)}createBox(t,e,n,i,s,r){const a=new Xe.Box(new Xe.Vec3(i/2,s/2,r/2)),l=new Xe.Body({mass:0});l.addShape(a),l.position.set(t,e,n),this.world.addBody(l);const h=new pi(i,s,r);new _o().load("./textures/floor.png",c=>{const d=new Mn({map:c});c.wrapS=c.wrapT=di,c.repeat.set(3,.5);const f=new De(h,d);f.receiveShadow=!0,this.scene.add(f),this.sceneObjects.push({mesh:f,body:l,type:"ground"})},void 0,function(c){console.error("An error happened.")})}createCylinder(t,e,n){const r=new Xe.Cylinder(.02,.055,.38,10),a=new Xe.Body({mass:1.5,sleepSpeedLimit:.2,sleepTimeLimit:.1});a.addShape(r),a.position.set(t,e,n-this.pinOffset),a.sleep();const l=new Xe.Quaternion;l.setFromAxisAngle(new Xe.Vec3(1,0,0),-Math.PI/2);const h=new Xe.Vec3(0,0,0);r.transformAllPoints(h,l),this.world.addBody(a);const u=new Uo(.02,.055,.38,10),c=new wc({color:16777215,wireframe:!0}),d=new De(u,c);d.castShadow=!0,d.receiveShadow=!0;const f=this.pinTexture.clone();return this.scene.add(f),this.sceneObjects.push({mesh:f,body:a,type:"pin"}),{mesh:f,body:a,type:"pin"}}createSphere(t){const e=new Xe.Sphere(.11),n=new Xe.Body({mass:12,allowSleep:!1});n.addShape(e),this.world.addBody(n);const i=new Fo(.11,20,20),s=new Mn({map:t}),r=new De(i,s);return r.castShadow=!0,r.receiveShadow=!0,this.scene.add(r),this.sceneObjects.push({mesh:r,body:n,type:"ball"}),{mesh:r,body:n,type:"ball"}}createDirectionalLight(t,e,n){const i=new yo(16777215,1);return i.position.set(t,e,n),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=500,i.shadow.camera.left=-10,i.shadow.camera.right=10,i.shadow.camera.top=10,i.shadow.camera.bottom=-10,this.scene.add(i),i.target=this.ball.mesh,i}createAmbiantLight(){const t=new Fg(11447982,.5);return this.scene.add(t),t}createDirectionalLightAvatar(t){const e=new yo(16777215,3);return e.position.set(5,5,5),e.castShadow=!0,this.scene.add(e),e.target=t,e}createCamera(){const t=new $e(30,Bi.width/Bi.height,1,100);return t.position.z=5,t.position.x=.2,t.position.y=.5,t.lookAt(this.ball.mesh.position),this.scene.add(t),t}updatePhysics(){this.world.step(this.timeStep),this.camera.position.z=(this.ball.mesh.position.z+4)*.7,this.sceneObjects.forEach(t=>{t.type==="pin"&&t.body.position.y<-.1&&setTimeout(()=>{this.sceneObjects=this.sceneObjects.filter(e=>e!==t),this.scene.remove(t.mesh),this.world.remove(t.body)},1e3)}),this.ball.body.position.y<-2&&(clearTimeout(this.waitingThrow),this.checkPins(),setTimeout(()=>{this.ballThrown=!1;const t=this.countPins();t===10?this.throwIndex=3:this.throwIndex++,this.throwIndex===3&&(this.throwIndex=0,setTimeout(()=>{this.deleteAllPins(),this.createPins(),console.log(t)},8e3))},500)),this.sceneObjects.forEach(t=>{t.mesh.position.copy(t.body.position),t.mesh.quaternion.copy(t.body.quaternion)})}pinsOnScene(){let t=0;return this.sceneObjects.forEach(e=>{e.type==="pin"&&(console.log(e.body.position.y,e.body.quaternion.x,e.body.quaternion.z),e.body.position.y>=-.1&&Math.abs(e.body.quaternion.x)<.1&&Math.abs(e.body.quaternion.z)<.1&&t++)}),t}countPins(){let t=0;return this.sceneObjects.forEach(e=>{e.type==="pin"&&t++}),10-t}deleteAllPins(){this.sceneObjects.forEach(t=>{t.type==="pin"&&(this.sceneObjects=this.sceneObjects.filter(e=>e!==t),this.scene.remove(t.mesh),this.world.remove(t.body))})}checkPins(){this.ball.body.position.set(0,0,0),this.ball.body.velocity.set(0,0,0),this.ball.body.angularVelocity.set(0,0,0),this.ballRotation=0,this.chargeShot=!1,this.UIHelper.body.rotation.y=0,this.UIHelper.body.position.x=0,document.getElementById("barStrength").style.height="0%";const t=this.pinsOnScene();console.log("Remaining pins:",t),this.throwIndex++,this.updateThrowNumberUI(),t===0?(this.changeExpression("Surprised",1),this.fadeToAction("Jump",.2),this.mixer.addEventListener("finished",()=>{this.mixer.removeEventListener("finished",()=>{}),this.fadeToAction("ThumbsUp",.2),this.mixer.addEventListener("finished",()=>{this.mixer.removeEventListener("finished",()=>{}),this.fadeToAction("Dance",.2)})}),this.endGame(!0)):this.throwIndex>=this.maxThrows?(this.changeExpression("Sad",1),this.fadeToAction("No",.2),this.mixer.addEventListener("finished",()=>{this.mixer.removeEventListener("finished",()=>{}),this.fadeToAction("Death",.2)}),this.resetBallPosition(),this.endGame(!1)):(this.changeExpression("Sad",1),this.fadeToAction("No",.2),this.mixer.addEventListener("finished",()=>{this.mixer.removeEventListener("finished",()=>{}),this.fadeToAction("Death",.2)}),this.resetBallPosition())}updateThrowNumberUI(){this.throwNumberElement.innerText=`Throw: ${this.throwIndex+1}`}endGame(t){t?(this.message.innerText="You won!",this.throwNumberElement.innerText=`Throw: ${this.throwIndex}`,this.gameOverPopup.style.display="block"):(this.message.innerText="Game Over!",this.gameOverPopup.style.display="block",this.throwNumberElement.innerText=`Throw: ${this.throwIndex-1}`)}resetBallPosition(){this.ball.body.position.set(0,0,0),this.ball.body.velocity.set(0,0,0),this.ball.body.angularVelocity.set(0,0,0),this.ballRotation=0,this.chargeShot=!1,this.UIHelper.body.rotation.y=0,this.UIHelper.body.position.x=0,document.getElementById("barStrength").style.height="0%"}avatar(){const t=document.createElement("div");document.body.appendChild(t),new ov().load("./model/RobotExpressive.glb",n=>{this.model=n.scene,this.animations=n.animations,console.log(this.model),this.model.scale.set(.08,.08,.08),this.model.position.set(-.68,.05,1),this.model.rotation.y=Math.PI/4,this.model.traverse(function(i){i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)}),this.scene.add(this.model),console.log("Model loaded successfully"),this.createDirectionalLightAvatar(this.model)},n=>{console.log(n.loaded/n.total*100+"% loaded")},n=>{console.error("Failed to load model:",n.message)}),t.appendChild(this.renderer.domElement)}avatar_color(t,e){const n=new Jt(13210170),i=.1;t.traverse(s=>{if(s.isMesh&&s.material&&s.material.color){let r={};s.material.color.getHSL(r);let a={};n.getHSL(a),r.h>=a.h-i&&r.h<=a.h+i&&r.s>.5&&s.material.color.set(e)}})}createGUI(t,e){const n=["Idle","Walking","Running","Dance","Death","Sitting","Standing"],i=["Jump","Yes","No","Wave","Punch","ThumbsUp"];this.gui=new Ho,this.mixer=new Zg(t),this.actions={},this.api={state:"Idle"},console.log("Available animations:",e),e.forEach(h=>{console.log("Processing animation:",h.name);const u=this.mixer.clipAction(h);console.log("Action created:",u),this.actions[h.name]=u,(i.indexOf(h.name)>=0||n.indexOf(h.name)>=4)&&(console.log(h.name),u.clampWhenFinished=!0,u.loop=nc)});const s=this.gui.addFolder("States");s.add(this.api,"state").options(n).onChange((function(){console.log("State changed to:",this.api.state),this.fadeToAction(this.api.state,.2)}).bind(this)),s.open();const a=this.gui.addFolder("Emotes");i.forEach(h=>{this.api[h]=()=>{console.log("Emote triggered:",h),this.fadeToAction(h,.2),this.mixer.addEventListener("finished",()=>{this.mixer.removeEventListener("finished",()=>{}),console.log("Animation finished"),this.fadeToAction(this.api.state,.2)})},a.add(this.api,h)}),a.open();const l=t.getObjectByName("Head_4");if(l&&l.morphTargetDictionary){const h=Object.keys(l.morphTargetDictionary),u=this.gui.addFolder("Expressions");h.forEach((c,d)=>{u.add(l.morphTargetInfluences,d,0,1,.01).name(c)}),u.open()}this.activeAction=this.actions.Idle,this.activeAction.play()}fadeToAction(t,e){const n=this.activeAction,i=this.actions[t];n!==i&&(n.fadeOut(e),i.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(e).play(),this.activeAction=i)}changeExpression(t,e){const n=this.model.getObjectByName("Head_4");if(n&&n.morphTargetDictionary){const i=n.morphTargetDictionary[t];i!==void 0?(n.morphTargetInfluences[i]=e,console.log(`Expression ${t} set to ${e}`)):console.log(`Expression ${t} not found.`)}}initCannon(){this.world.gravity.set(0,-9,0),this.world.broadphase=new Xe.NaiveBroadphase,this.world.solver.iterations=10}initThree(){this.renderer.setSize(Bi.width,Bi.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ro}initScene(){this.clock=new Og,this.loadTexture(),this.UIHelper=this.createUIHelper(),this.createBox(0,-.4,-10,1.28,.2,22),this.light1=this.createDirectionalLight(20,20,-50),this.light2=this.createDirectionalLight(-20,20,-50),this.light3=this.createAmbiantLight(),this.avatar=this.avatar(),this.initControl(this.ball),this.initCannon(),this.initThree()}}const Ne=new Jv;document.getElementById("startButton").addEventListener("click",function(){document.getElementById("startPage").style.display="none",document.getElementById("gamePage").style.display="block",document.getElementById("canvas").style.display="block",document.getElementById("UI").style.display="block";const o=document.getElementById("colorPicker").value;Qv(o)});function Qv(o){Ne.model&&Ne.animations&&!Ne.gui?(Ne.createGUI(Ne.model,Ne.animations),Ne.avatar_color(Ne.model,o)):console.error("Model or animations not ready."),Ne.avatar_color(Ne.model,o),Lc()}function Lc(){requestAnimationFrame(Lc);const o=Ne.clock.getDelta();Ne.mixer&&Ne.mixer.update(o),Ne.controls.enabled&&Ne.controls.update(),Ne.updatePhysics(),Ne.renderer.render(Ne.scene,Ne.camera)}console.log("Animation loop started");
