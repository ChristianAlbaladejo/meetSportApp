(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{N3Et:function(i,e,t){"use strict";t.r(e),t.d(e,"PeoplePageModule",(function(){return U}));var o=t("ofXK"),n=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),l=t("mrSG"),r=t("nAqH"),b=t("qfBg"),u=t("MnDo"),a=t("ncJE"),f=t("fXoL");function d(i,e){if(1&i){const i=f.Nb();f.Mb(0,"img",9),f.Ub("click",(function(){f.fc(i);const e=f.Wb().$implicit;return f.Wb().loadUser(e)})),f.Lb()}if(2&i){const i=f.Wb().$implicit,e=f.Wb();f.cc("src",e.url+"/get-image-user/"+i.image,f.gc)}}function h(i,e){if(1&i){const i=f.Nb();f.Mb(0,"img",10),f.Ub("click",(function(){f.fc(i);const e=f.Wb().$implicit;return f.Wb().loadUser(e)})),f.Lb()}}function g(i,e){if(1&i){const i=f.Nb();f.Mb(0,"ion-button",14),f.Ub("click",(function(){f.fc(i);const e=f.Wb(2).$implicit;return f.Wb().followUser(e._id)})),f.Kb(1,"ion-icon",15),f.kc(2," \xa0 Follow "),f.Lb()}}function m(i,e){1&i&&(f.Mb(0,"span"),f.Kb(1,"ion-icon",19),f.kc(2," \xa0 Unfollow "),f.Lb())}function p(i,e){1&i&&(f.Kb(0,"ion-icon",20),f.kc(1," \xa0 Following "))}function w(i,e){if(1&i){const i=f.Nb();f.Mb(0,"ion-button",16),f.Ub("mouseover",(function(){f.fc(i);const e=f.Wb(2).$implicit;return f.Wb().mouseEnter(e._id)}))("mouseleave",(function(){f.fc(i);const e=f.Wb(2).$implicit;return f.Wb().mouseLeave(e._id)}))("click",(function(){f.fc(i);const e=f.Wb(2).$implicit;return f.Wb().unfollowUser(e._id)})),f.ic(1,m,3,0,"span",17),f.ic(2,p,2,0,"ng-template",null,18,f.jc),f.Lb()}if(2&i){const i=f.ec(3),e=f.Wb(2).$implicit,t=f.Wb();f.bc("color",e._id==t.followUserOver?"primary":"warning"),f.zb(1),f.bc("ngIf",e._id==t.followUserOver)("ngIfElse",i)}}function v(i,e){if(1&i&&(f.Mb(0,"div",11),f.ic(1,g,3,0,"ion-button",12),f.ic(2,w,4,3,"ion-button",13),f.Lb()),2&i){const i=f.Wb().$implicit,e=f.Wb();f.zb(1),f.bc("ngIf",e.follows.indexOf(i._id)<0),f.zb(1),f.bc("ngIf",e.follows.indexOf(i._id)>=0)}}function k(i,e){if(1&i){const i=f.Nb();f.Mb(0,"ion-item"),f.Mb(1,"ion-avatar",1),f.ic(2,d,1,1,"img",5),f.ic(3,h,1,0,"img",6),f.Lb(),f.Mb(4,"ion-label"),f.Mb(5,"h2",7),f.Ub("click",(function(){f.fc(i);const t=e.$implicit;return f.Wb().loadUser(t)})),f.kc(6),f.Lb(),f.Mb(7,"h3",7),f.Ub("click",(function(){f.fc(i);const t=e.$implicit;return f.Wb().loadUser(t)})),f.kc(8),f.Lb(),f.Mb(9,"p",7),f.Ub("click",(function(){f.fc(i);const t=e.$implicit;return f.Wb().loadUser(t)})),f.kc(10),f.Lb(),f.ic(11,v,3,2,"div",8),f.Lb(),f.Lb()}if(2&i){const i=e.$implicit,t=f.Wb();f.zb(2),f.bc("ngIf",i.image),f.zb(1),f.bc("ngIf",!i.image),f.zb(3),f.lc(i.name+" "+i.surname),f.zb(2),f.lc(i.nick),f.zb(2),f.lc(i.email),f.zb(1),f.bc("ngIf",i._id!=t.identity._id)}}const y=[{path:"",component:(()=>{class i{constructor(i,e,t,o,n,s,c,l){this.modal=i,this._route=e,this._router=t,this._userService=o,this.alert=n,this.loading=s,this.navCtrl=c,this._followService=l,this.page=1,this.identity=this._userService.getIdentity(),this.token=this._userService.getToken(),this.url="https://api-meet-sport.herokuapp.com/api"}ngOnInit(){this.getUsers()}getUsers(){return Object(l.a)(this,void 0,void 0,(function*(){let i=this.loading.create({message:"Please wait..."});(yield i).present(),this._userService.getUsers(this.page).subscribe(e=>Object(l.a)(this,void 0,void 0,(function*(){if(e.users)this.users=e.users,this.total=e.total,this.page=e.page,this.follows=e.users_following,console.log(e),this.page>this.pages&&this._router.navigate(["/people"]),(yield i).dismiss();else{const e=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});(yield i).dismiss(),yield e.present()}})),e=>Object(l.a)(this,void 0,void 0,(function*(){var t=e;if(console.log(t),null!=t){const e=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});(yield i).dismiss(),yield e.present()}})))}))}mouseEnter(i){this.followUserOver=i}mouseLeave(i){this.followUserOver=0}followUser(i){var e=new r.a("",this.identity._id,i);this._followService.addFollow(this.token,e).subscribe(e=>Object(l.a)(this,void 0,void 0,(function*(){if(e.follow)this.follows.push(i);else{const i=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});yield i.present()}})),i=>Object(l.a)(this,void 0,void 0,(function*(){const i=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});yield i.present()})))}unfollowUser(i){this._followService.deleteFollow(this.token,i).subscribe(e=>{var t=this.follows.indexOf(i);-1!=t&&this.follows.splice(t,1)},i=>Object(l.a)(this,void 0,void 0,(function*(){const i=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});yield i.present()})))}doInfinite(i){this.page++,this.getUsers().then(e=>i.target.complete())}loadUser(i){return Object(l.a)(this,void 0,void 0,(function*(){const e=yield this.modal.create({component:a.a,componentProps:{user:i}});return yield e.present()}))}}return i.\u0275fac=function(e){return new(e||i)(f.Jb(s.N),f.Jb(c.a),f.Jb(c.g),f.Jb(b.a),f.Jb(s.a),f.Jb(s.L),f.Jb(s.O),f.Jb(u.a))},i.\u0275cmp=f.Db({type:i,selectors:[["app-people"]],features:[f.yb([b.a,u.a])],decls:13,vars:2,consts:[["color","success"],["slot","start"],[3,"fullscreen"],[4,"ngFor","ngForOf"],[3,"ionInfinite"],[3,"src","click",4,"ngIf"],["src","../../assets/no-user.webp",3,"click",4,"ngIf"],[3,"click"],["class","followButton",4,"ngIf"],[3,"src","click"],["src","../../assets/no-user.webp",3,"click"],[1,"followButton"],["color","success",3,"click",4,"ngIf"],["ion-button","",3,"color","mouseover","mouseleave","click",4,"ngIf"],["color","success",3,"click"],["name","add-circle-outline"],["ion-button","",3,"color","mouseover","mouseleave","click"],[4,"ngIf","ngIfElse"],["following",""],["name","close-circle-outline"],["name","checkmark-circle-outline"]],template:function(i,e){1&i&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar",0),f.Mb(2,"ion-buttons",1),f.Kb(3,"ion-menu-button"),f.Lb(),f.Mb(4,"ion-title"),f.kc(5,"People"),f.Lb(),f.Lb(),f.Lb(),f.Mb(6,"ion-content",2),f.Mb(7,"ion-list"),f.Mb(8,"ion-list-header"),f.kc(9," People "),f.Lb(),f.ic(10,k,12,6,"ion-item",3),f.Lb(),f.Mb(11,"ion-infinite-scroll",4),f.Ub("ionInfinite",(function(i){return e.doInfinite(i)})),f.Kb(12,"ion-infinite-scroll-content"),f.Lb(),f.Lb()),2&i&&(f.zb(6),f.bc("fullscreen",!0),f.zb(4),f.bc("ngForOf",e.users))},directives:[s.o,s.I,s.e,s.y,s.H,s.j,s.v,s.w,o.i,s.q,s.r,s.t,s.c,o.j,s.u,s.d,s.p],styles:[""]}),i})()}];let O=(()=>{class i{}return i.\u0275mod=f.Hb({type:i}),i.\u0275inj=f.Gb({factory:function(e){return new(e||i)},imports:[[c.i.forChild(y)],c.i]}),i})(),U=(()=>{class i{}return i.\u0275mod=f.Hb({type:i}),i.\u0275inj=f.Gb({factory:function(e){return new(e||i)},imports:[[o.b,n.a,s.J,O]]}),i})()}}]);