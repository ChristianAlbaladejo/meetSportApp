(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{MnDo:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("tk/3"),i=n("fXoL");let a=(()=>{class t{constructor(t){this._http=t,this.url="https://api-meet-sport.herokuapp.com/api"}addFollow(t,e){let n=JSON.stringify(e),i=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.post(this.url+"/follow",n,{headers:i})}deleteFollow(t,e){let n=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.delete(this.url+"/deleteFollow/"+e,{headers:n})}getFollowing(t,e=null,n=1){let i=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.get(this.url+"/following/"+e+"/"+n,{headers:i})}getMyFollows(t){let e=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.get(this.url+"/get-my-follows/true",{headers:e})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac}),t})()},cdOc:function(t,e,n){"use strict";n.r(e),n.d(e,"AddPublicationPageModule",(function(){return v}));var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),r=n("mrSG"),l=n("Bfh1");class c{constructor(t,e,n,o,i,a,s,r){this._id=t,this.text=e,this.file=n,this.date=o,this.created_at=i,this.user=a,this.like=s,this.location=r}}var u=n("qfBg"),h=n("MnDo"),d=n("tBOM"),p=n("wzbf"),b=n("jT/F"),g=n("fXoL");const f=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,a,s,r,l,u,h,d,p){this._uploadService=t,this.toastController=e,this._route=n,this.ngZOne=o,this._router=i,this._userService=a,this.alert=s,this.loading=r,this.navCtrl=l,this._followService=u,this._googleMaps=h,this.geolocation=d,this._publicationService=p,this.mapRef=null,this.identity=this._userService.getIdentity(),this.token=this._userService.getToken(),this.url="https://api-meet-sport.herokuapp.com/api",this.publication=new c("","","","","",this.identity._id,"","")}ngOnInit(){this.loadMap()}loadMap(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.loading.create();t.present();const e=yield this.getLocation();this.latitude=e.lat,this.longitude=e.lng;const n=document.getElementById("map");this.mapRef=new google.maps.Map(n,{center:e,zoom:12}),google.maps.event.addListenerOnce(this.mapRef,"idle",()=>{t.dismiss(),this.addMaker(e.lat,e.lng)})}))}addMaker(t,e){const n=new google.maps.Marker({position:{lat:t,lng:e},draggable:!0,animation:google.maps.Animation.DROP,map:this.mapRef,title:"Hello World!"});this.marker=n,console.log(this.latitude,this.longitude)}getLocation(){return Object(r.a)(this,void 0,void 0,(function*(){const t=yield this.geolocation.getCurrentPosition();return{lat:t.coords.latitude,lng:t.coords.longitude}}))}cancel(){this._router.navigate(["/"])}save(){return Object(r.a)(this,void 0,void 0,(function*(){null==this.date||null==this.time?((yield this.toastController.create({message:"Your publication have not been saved.",duration:3500,color:"danger"})).present(),this._router.navigate(["/"])):(this.publication.location=this.marker.getPosition().lat()+","+this.marker.getPosition().lng(),this.publication.date=this.date+", "+this.time,this._publicationService.addPublication(this.token,this.publication).subscribe(t=>Object(r.a)(this,void 0,void 0,(function*(){t.publication?(yield this.toastController.create({message:"Your publication have been saved.",duration:3500,color:"success"})).present():(yield this.toastController.create({message:"Your publication have not been saved.",duration:3500,color:"danger"})).present()})),t=>Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Your settings have not been saved.",duration:3500,color:"danger"})).present()}))),this._router.navigate(["/"]))}))}fileChangeEvent(t){this.filesToUpload=t.target.files,console.log(this.filesToUpload)}}return t.\u0275fac=function(e){return new(e||t)(g.Jb(b.a),g.Jb(a.U),g.Jb(s.a),g.Jb(g.z),g.Jb(s.g),g.Jb(u.a),g.Jb(a.a),g.Jb(a.L),g.Jb(a.O),g.Jb(h.a),g.Jb(d.a),g.Jb(l.a),g.Jb(p.a))},t.\u0275cmp=g.Db({type:t,selectors:[["app-add-publication"]],features:[g.yb([u.a,h.a,p.a,b.a])],decls:27,vars:3,consts:[["color","success"],["slot","start"],[3,"click"],["name","chevron-back-outline"],["slot","end"],["name","text","type","text-area","required","",3,"ngModel","ngModelChange"],["text","ngModel"],["display-format","h:mm A","picker-format","h:mm A","value","1990-02-19T07:43Z",3,"ngModel","ngModelChange"],["value","1990-02-20","placeholder","Select Date",3,"ngModel","ngModelChange"],["id","map"]],template:function(t,e){1&t&&(g.Mb(0,"ion-header"),g.Mb(1,"ion-toolbar",0),g.Mb(2,"ion-buttons",1),g.Mb(3,"ion-button",2),g.Ub("click",(function(){return e.cancel()})),g.Kb(4,"ion-icon",3),g.kc(5,"Cancel"),g.Lb(),g.Lb(),g.Mb(6,"ion-title"),g.kc(7,"Add Publication"),g.Lb(),g.Mb(8,"ion-buttons",4),g.Mb(9,"ion-button",2),g.Ub("click",(function(){return e.save()})),g.kc(10,"Save"),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(11,"ion-content"),g.Mb(12,"ion-item"),g.Mb(13,"ion-label"),g.kc(14,"What are you going to do?"),g.Lb(),g.Lb(),g.Mb(15,"ion-item"),g.Mb(16,"ion-textarea",5,6),g.Ub("ngModelChange",(function(t){return e.publication.text=t})),g.Lb(),g.Lb(),g.Mb(18,"ion-item"),g.Mb(19,"ion-label"),g.kc(20,"Time of exit"),g.Lb(),g.Mb(21,"ion-datetime",7),g.Ub("ngModelChange",(function(t){return e.time=t})),g.Lb(),g.Lb(),g.Mb(22,"ion-item"),g.Mb(23,"ion-label"),g.kc(24,"Date of the activity"),g.Lb(),g.Mb(25,"ion-datetime",8),g.Ub("ngModelChange",(function(t){return e.date=t})),g.Lb(),g.Lb(),g.Kb(26,"div",9),g.Lb()),2&t&&(g.zb(16),g.bc("ngModel",e.publication.text),g.zb(5),g.bc("ngModel",e.time),g.zb(4),g.bc("ngModel",e.date))},directives:[a.o,a.I,a.e,a.d,a.p,a.H,a.j,a.t,a.u,a.G,a.T,i.h,i.c,i.f,a.k,a.S],styles:['@charset "UTF-8";#map[_ngcontent-%COMP%]{width:100%;height:100%}#current[_ngcontent-%COMP%]{padding-top:25px}.fileInput[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.fileInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#717171;background-color:#fff;display:inline-block;padding:.5em 1em;border:1px solid #ccc;cursor:pointer}.toast-error[_ngcontent-%COMP%]{-\u2013background:red}']}),t})()}];let m=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(f)],s.i]}),t})(),v=(()=>{class t{}return t.\u0275mod=g.Hb({type:t}),t.\u0275inj=g.Gb({factory:function(e){return new(e||t)},imports:[[o.b,i.a,a.J,m]]}),t})()},"jT/F":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("fXoL");let i=(()=>{class t{constructor(){this.url="https://api-meet-sport.herokuapp.com/api"}makeFileRequest(t,e,n,o,i){return new Promise((function(e,a){var s=new FormData,r=new XMLHttpRequest;for(let t=0;t<n.length;t++)s.append(i,n[t],n[t].name);r.onreadystatechange=function(){4==r.readyState&&(200==r.status?e(JSON.parse(r.response)):a(r.response))},r.open("POST",t,!0),r.setRequestHeader("Authorization",o),r.send(s)}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac}),t})()},wzbf:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("tk/3"),i=n("fXoL"),a=n("TEn/");let s=(()=>{class t{constructor(t,e,n){this._http=t,this.alert=e,this.loading=n,this.url="https://api-meet-sport.herokuapp.com/api"}addPublication(t,e){let n=JSON.stringify(e),i=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.post(this.url+"/publication",n,{headers:i})}getPublications(t,e=1){let n=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.get(this.url+"/publications/"+e,{headers:n})}getPublicationsUser(t,e,n=1){console.log(e);let i=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.get(this.url+"/publications-user/"+e+"/"+n,{headers:i})}deletePublication(t,e){let n=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.delete(this.url+"/publication/"+e,{headers:n})}like(t,e){let n=JSON.stringify(e);console.log(e);let i=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.post(this.url+"/like/"+e._id,n,{headers:i})}dislike(t,e){let n=JSON.stringify(e);console.log(e);let i=(new o.c).set("Content-Type","application/json").set("Authorization",t);return this._http.post(this.url+"/dislike/"+e._id,n,{headers:i})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.a),i.Qb(a.a),i.Qb(a.L))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac}),t})()}}]);