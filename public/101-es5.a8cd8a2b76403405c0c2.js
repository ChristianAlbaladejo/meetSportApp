function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageModule",(function(){return L}));var i=n("ofXK"),o=n("TEn/"),r=n("3Pt+"),s=n("tyNb"),c=n("mrSG"),a=n("qfBg"),u=n("MnDo"),l=n("wzbf"),b=n("tBOM"),p=n("dnnk"),h=n("ncJE"),f=n("fXoL");function g(e,t){if(1&e&&f.Kb(0,"img",20),2&e){var n=f.Wb().$implicit,i=f.Wb(2);f.cc("src",i.url+"/get-image-user/"+n.user.image,f.gc)}}function d(e,t){1&e&&f.Kb(0,"img",21)}function m(e,t){if(1&e){var n=f.Nb();f.Mb(0,"ion-button",16),f.Ub("click",(function(){f.fc(n);var e=f.Wb().$implicit;return f.Wb(2).like(e)})),f.kc(1,"Subscribe "),f.Lb()}}function v(e,t){if(1&e){var n=f.Nb();f.Mb(0,"ion-button",22),f.Ub("click",(function(){f.fc(n);var e=f.Wb().$implicit;return f.Wb(2).dislike(e)})),f.kc(1,"Unsubscribe "),f.Lb()}}function k(e,t){if(1&e){var n=f.Nb();f.Mb(0,"div",12),f.Mb(1,"ion-card"),f.Mb(2,"ion-item"),f.Mb(3,"ion-avatar",13),f.Ub("click",(function(){f.fc(n);var e=t.$implicit;return f.Wb(2).openUser(e.user)})),f.ic(4,g,1,1,"img",14),f.ic(5,d,1,0,"img",15),f.Lb(),f.Mb(6,"ion-label"),f.Mb(7,"h3"),f.kc(8),f.Xb(9,"date"),f.Lb(),f.Mb(10,"h3"),f.kc(11),f.Lb(),f.Mb(12,"h3"),f.kc(13),f.Xb(14,"date"),f.Lb(),f.Lb(),f.Lb(),f.Mb(15,"ion-card-content",16),f.Ub("click",(function(){f.fc(n);var e=t.$implicit,i=t.index,o=f.Wb(2);return o.openPublication(e,o.times[i])})),f.Kb(16,"div",17),f.Lb(),f.Mb(17,"ion-grid"),f.Mb(18,"ion-row"),f.Kb(19,"ion-col"),f.Mb(20,"ion-col"),f.ic(21,m,2,0,"ion-button",18),f.ic(22,v,2,0,"ion-button",19),f.Lb(),f.Kb(23,"ion-col"),f.Lb(),f.Lb(),f.Lb(),f.Lb()}if(2&e){var i=t.$implicit,o=t.index,r=f.Wb(2);f.zb(4),f.bc("ngIf",i.user.image),f.zb(1),f.bc("ngIf",!i.user.image),f.zb(3),f.nc("",(null==i?null:i.user.name)+" "+(null==i?null:i.user.surname)+" ","| \xa0",f.Yb(9,10," "+(null==i?null:i.created_at)),""),f.zb(3),f.lc(null==i?null:i.text),f.zb(2),f.nc("Date of exit: ",f.Yb(14,12,null==r.times[o]?null:r.times[o].date)," \xa0 ",null==r.times[o]?null:r.times[o].hour,""),f.zb(3),f.cc("id","map"+o),f.zb(5),f.bc("ngIf",!r.checkIfExists(i)),f.zb(1),f.bc("ngIf",r.checkIfExists(i))}}function x(e,t){1&e&&(f.Mb(0,"div",23),f.Mb(1,"strong"),f.kc(2,"You have no publications"),f.Lb(),f.Mb(3,"p"),f.kc(4,"You can create them or follow people to see them"),f.Lb(),f.Lb())}function w(e,t){if(1&e){var n=f.Nb();f.Mb(0,"div"),f.ic(1,k,24,14,"div",8),f.ic(2,x,5,0,"div",9),f.Mb(3,"ion-infinite-scroll",10),f.Ub("ionInfinite",(function(e){return f.fc(n),f.Wb().doInfinite(e)})),f.Kb(4,"ion-infinite-scroll-content",11),f.Lb(),f.Lb()}if(2&e){var i=f.Wb();f.zb(1),f.bc("ngForOf",i.publications),f.zb(1),f.bc("ngIf",0==i.publications.length)}}var _,M,y,O=[{path:"",component:(_=function(){function e(t,n,i,o,r,s,c,a,u,l,b){_classCallCheck(this,e),this.menuCtrl=t,this.modalController=n,this._publicationService=i,this._route=o,this._router=r,this._userService=s,this.alert=c,this.loading=a,this.navCtrl=u,this._followService=l,this._googleMaps=b,this.page=1,this.coords=[],this.markers=[],this.maps=[],this.times=[],this.identity=this._userService.getIdentity(),this.token=this._userService.getToken(),this.url="https://api-meet-sport.herokuapp.com/api",console.log(this.identity._id)}return _createClass(e,[{key:"ngOnInit",value:function(){this.getPublications(this.page)}},{key:"ionViewWillEnter",value:function(){this.menuCtrl.enable(!0)}},{key:"getPublications",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loading.create();case 2:(i=n.sent).present(),this._publicationService.getPublications(this.token,e).subscribe((function(e){if(e.publications)if(o.coords=[],o.total=e.total_items,o.pages=e.pages,o.items_per_page=e.items_per_page,t){o.publications=o.publications.concat(e.publications),console.log(o.publications);for(var n=0;n<o.publications.length;n++){var r=o.publications[n].location.split(","),s=o.publications[n].date.split(","),c={date:s[0],hour:s[1]};o.coords.push({lat:r[0],lng:r[1],zoom:15}),o.times.push(c)}setTimeout((function(){o.initialize(),i.dismiss()}),3e3)}else{o.publications=e.publications;for(var a=0;a<o.publications.length;a++){var u=o.publications[a].location.split(","),l=o.publications[a].date.split(","),b={date:l[0],hour:l[1].substr(12).slice(0,5)};o.coords.push({lat:u[0],lng:u[1],zoom:15}),o.times.push(b)}setTimeout((function(){o.initialize(),i.dismiss()}),3e3)}else i.dismiss()}),(function(e){return Object(c.a)(o,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return t=e.sent,i.dismiss(),e.next=6,t.present();case 6:case"end":return e.stop()}}),e,this)})))}));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"delete",value:function(e){var t=this;this._publicationService.deletePublication(this.token,e).subscribe((function(e){}),(function(e){return Object(c.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}))}},{key:"initialize",value:function(){for(var e=0,t=this.coords.length;e<t;e++){var n=this.coords[e],i=new google.maps.LatLng(n.lat,n.lng);this.maps[e]=new google.maps.Map(document.getElementById("map"+e),{zoom:n.zoom,center:i,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,gestureHandling:"none"}),this.markers[e]=new google.maps.Marker({position:i,map:this.maps[e]})}}},{key:"addPublication",value:function(){this._router.navigate(["/add-publication"])}},{key:"doInfinite",value:function(e){this.publications.length==this.total?e.target.complete():(this.page++,this.getPublications(this.page,!0).then((function(t){return e.target.complete()})))}},{key:"doRefresh",value:function(e){this.page=1,this.getPublications(this.page,!1).then((function(t){return e.target.complete()}))}},{key:"openPublication",value:function(e,t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:p.a,componentProps:{publication:e,times:t}});case 2:return(i=n.sent).onDidDismiss().then((function(){o.page=1,o.getPublications(o.page)})),n.next=6,i.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"openUser",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:h.a,componentProps:{user:e}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"like",value:function(e){var t=this;this.identity=this._userService.getIdentity(),this._publicationService.like(this.token,e).subscribe((function(n){return Object(c.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}for(i=0;i<this.publications.length;i++)this.publications[i]._id==e._id&&(this.publications[i].like.push(this.identity._id),console.log(this.publications[i].like));console.log(this.identity._id),t.next=10;break;case 5:return t.next=7,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 7:return o=t.sent,t.next=10,o.present();case 10:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(c.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}))}},{key:"dislike",value:function(e){var t=this;this.identity=this._userService.getIdentity(),this._publicationService.dislike(this.token,e).subscribe((function(n){return Object(c.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var i,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=4;break}for(i=0;i<this.publications.length;i++)this.publications[i]._id==e._id&&(o=this.publications[i].like.indexOf(this.identity._id),this.publications[i].like.splice(o,1));t.next=9;break;case 4:return t.next=6,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 6:return r=t.sent,t.next=9,r.present();case 9:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(c.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}))}},{key:"checkIfExists",value:function(e){return!!e.like.includes(this.identity._id)}}]),e}(),_.\u0275fac=function(e){return new(e||_)(f.Jb(o.M),f.Jb(o.N),f.Jb(l.a),f.Jb(s.a),f.Jb(s.g),f.Jb(a.a),f.Jb(o.a),f.Jb(o.L),f.Jb(o.O),f.Jb(u.a),f.Jb(b.a))},_.\u0275cmp=f.Db({type:_,selectors:[["app-home"]],features:[f.yb([a.a,u.a,l.a])],decls:13,vars:2,consts:[["color","success"],["slot","start"],[3,"fullscreen"],["slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],[4,"ngIf"],["horizontal","end","vertical","bottom","slot","fixed",3,"click"],["color","medium"],["name","add"],["id","container",4,"ngFor","ngForOf"],["id","container-no-exits",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."],["id","container"],["slot","start",3,"click"],[3,"src",4,"ngIf"],["src","../../assets/no-user.webp",4,"ngIf"],[3,"click"],[2,"max-width","500px","height","300px",3,"id"],[3,"click",4,"ngIf"],["style","color:white","color","warning",3,"click",4,"ngIf"],[3,"src"],["src","../../assets/no-user.webp"],["color","warning",2,"color","white",3,"click"],["id","container-no-exits"]],template:function(e,t){1&e&&(f.Mb(0,"ion-header"),f.Mb(1,"ion-toolbar",0),f.Mb(2,"ion-buttons",1),f.Kb(3,"ion-menu-button"),f.Lb(),f.Mb(4,"ion-title"),f.kc(5," Home "),f.Lb(),f.Lb(),f.Lb(),f.Mb(6,"ion-content",2),f.Mb(7,"ion-refresher",3),f.Ub("ionRefresh",(function(e){return t.doRefresh(e)})),f.Kb(8,"ion-refresher-content"),f.Lb(),f.ic(9,w,5,2,"div",4),f.Mb(10,"ion-fab",5),f.Ub("click",(function(){return t.addPublication()})),f.Mb(11,"ion-fab-button",6),f.Kb(12,"ion-icon",7),f.Lb(),f.Lb(),f.Lb()),2&e&&(f.zb(6),f.bc("fullscreen",!0),f.zb(3),f.bc("ngIf",t.publications))},directives:[o.o,o.I,o.e,o.y,o.H,o.j,o.A,o.B,i.j,o.l,o.m,o.p,i.i,o.q,o.r,o.f,o.t,o.c,o.u,o.g,o.n,o.D,o.i,o.d],pipes:[i.d],styles:["#container[_ngcontent-%COMP%]{max-width:500px;margin:auto}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#container-no-exits[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container-no-exits[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container-no-exits[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}"]}),_)}],C=((y=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:y}),y.\u0275inj=f.Gb({factory:function(e){return new(e||y)},imports:[[s.i.forChild(O)],s.i]}),y),L=((M=function e(){_classCallCheck(this,e)}).\u0275mod=f.Hb({type:M}),M.\u0275inj=f.Gb({factory:function(e){return new(e||M)},imports:[[i.b,r.a,o.J,C]]}),M)}}]);