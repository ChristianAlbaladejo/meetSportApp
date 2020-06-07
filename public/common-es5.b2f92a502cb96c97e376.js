function asyncGeneratorStep(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){asyncGeneratorStep(s,r,i,o,a,"next",e)}function a(e){asyncGeneratorStep(s,r,i,o,a,"throw",e)}o(void 0)}))}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2hxB":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function e(t,n,r,i,s,o,a,c){_classCallCheck(this,e),this._id=t,this.name=n,this.surname=r,this.nick=i,this.email=s,this.password=o,this.role=a,this.image=c}},"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var r="".concat(e*t/n-e,"ms"),i=2*Math.PI*t/n;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var r=t/n,i="".concat(e*r-e,"ms"),s=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(s),"px"),left:"".concat(9*Math.cos(s),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}}}},AZeD:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("mrSG"),i=n("qfBg"),s=n("MnDo"),o=n("tZre"),a=n("fXoL"),c=n("TEn/"),u=n("tyNb"),l=n("ofXK");function f(e,t){if(1&e&&a.Kb(0,"img",9),2&e){var n=a.Wb().$implicit,r=a.Wb(2);a.cc("src",r.url+"/get-image-user/"+n.emitter.image,a.gc)}}function b(e,t){1&e&&a.Kb(0,"img",10)}function g(e,t){if(1&e&&(a.Mb(0,"ion-item"),a.Mb(1,"ion-avatar",1),a.ic(2,f,1,1,"img",7),a.ic(3,b,1,0,"img",8),a.Lb(),a.Mb(4,"ion-label"),a.Mb(5,"h2"),a.kc(6),a.Xb(7,"date"),a.Lb(),a.Mb(8,"p"),a.kc(9),a.Lb(),a.Lb(),a.Lb()),2&e){var n=t.$implicit;a.zb(2),a.bc("ngIf",n.emitter.image),a.zb(1),a.bc("ngIf",!n.emitter.image),a.zb(3),a.nc("",n.emitter.name+" "+n.emitter.surname,"\xa0",a.Yb(7,5," "+(null==n?null:n.created_at)),""),a.zb(3),a.lc(n.text)}}function m(e,t){if(1&e&&(a.Mb(0,"div"),a.ic(1,g,10,7,"ion-item",6),a.Lb()),2&e){var n=a.Wb();a.zb(1),a.bc("ngForOf",n.messages)}}function h(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-button",2),a.Ub("click",(function(){return a.fc(n),a.Wb().doInfinite()})),a.kc(1," Load more "),a.Lb()}}var d=function(){var e=function(){function e(t,n,r,i,s,o,a,c,u,l){_classCallCheck(this,e),this._messageService=t,this.navParams=n,this.modal=r,this._route=i,this._router=s,this._userService=o,this.alert=a,this.loading=c,this.navCtrl=u,this._followService=l,this.page=1,this.identity=this._userService.getIdentity(),this.token=this._userService.getToken(),this.url="https://api-meet-sport.herokuapp.com/api"}return _createClass(e,[{key:"ngOnInit",value:function(){this.getMessages()}},{key:"goBack",value:function(){this.modal.dismiss()}},{key:"doInfinite",value:function(){this.messages.length==this.total||(this.page++,this.getMessages(!0))}},{key:"getMessages",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.loading.create({message:"Please wait..."}),t.next=3,n;case 3:t.sent.present(),this._messageService.getMyMessages(this.token,this.page).subscribe((function(t){return Object(r.a)(i,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t),t.messages&&(e?this.messages=this.messages.concat(t.messages):(this.messages=t.messages,this.total=t.pages)),r.next=4,n;case 4:r.sent.dismiss();case 5:case"end":return r.stop()}}),r,this)})))}),(function(e){return Object(r.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return t=e.sent,e.next=5,n;case 5:return e.sent.dismiss(),e.next=8,t.present();case 8:case"end":return e.stop()}}),e,this)})))}));case 5:case"end":return t.stop()}}),t,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Jb(o.a),a.Jb(c.P),a.Jb(c.N),a.Jb(u.a),a.Jb(u.g),a.Jb(i.a),a.Jb(c.a),a.Jb(c.L),a.Jb(c.O),a.Jb(s.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-received"]],features:[a.yb([i.a,s.a,o.a])],decls:16,vars:2,consts:[["color","success"],["slot","start"],[3,"click"],["name","chevron-back-outline"],[4,"ngIf"],[3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"src",4,"ngIf"],["src","../../assets/no-user.webp",4,"ngIf"],[3,"src"],["src","../../assets/no-user.webp"]],template:function(e,t){1&e&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar",0),a.Mb(2,"ion-buttons",1),a.Mb(3,"ion-button",2),a.Ub("click",(function(){return t.goBack()})),a.Kb(4,"ion-icon",3),a.kc(5,"Back "),a.Lb(),a.Lb(),a.Mb(6,"ion-title"),a.kc(7,"Received"),a.Lb(),a.Lb(),a.Lb(),a.Mb(8,"ion-content"),a.ic(9,m,2,1,"div",4),a.Mb(10,"ion-grid"),a.Mb(11,"ion-row"),a.Kb(12,"ion-col"),a.Mb(13,"ion-col"),a.ic(14,h,2,0,"ion-button",5),a.Lb(),a.Kb(15,"ion-col"),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.zb(9),a.bc("ngIf",t.messages),a.zb(5),a.bc("ngIf",t.page!=t.total))},directives:[c.o,c.I,c.e,c.d,c.p,c.H,c.j,l.j,c.n,c.D,c.i,l.i,c.t,c.c,c.u],pipes:[l.d],styles:[""]}),e}()},"J+Jj":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("mrSG"),i=function e(t,n,r,i,s,o){_classCallCheck(this,e),this._id=t,this.text=n,this.viewed=r,this.created_at=i,this.emitter=s,this.receiver=o},s=n("qfBg"),o=n("MnDo"),a=n("tZre"),c=n("fXoL"),u=n("TEn/"),l=n("tyNb"),f=n("3Pt+"),b=n("ofXK");function g(e,t){if(1&e&&(c.Mb(0,"ion-select-option",15),c.kc(1),c.Lb()),2&e){var n=t.$implicit;c.cc("value",n.user._id),c.zb(1),c.lc(n.user.name+" "+n.user.surname+" ("+n.user.nick+")")}}function m(e,t){if(1&e){var n=c.Nb();c.Mb(0,"ion-select",12,13),c.Ub("ngModelChange",(function(e){return c.fc(n),c.Wb().message.receiver=e})),c.ic(2,g,2,2,"ion-select-option",14),c.Lb()}if(2&e){var r=c.Wb();c.bc("ngModel",r.message.receiver),c.zb(2),c.bc("ngForOf",r.follows)}}function h(e,t){1&e&&(c.Mb(0,"span"),c.kc(1,"The message is required"),c.Lb())}var d,v=((d=function(){function e(t,n,r,s,o,a,c,u,l,f){_classCallCheck(this,e),this._messageService=t,this.navParams=n,this.modal=r,this._route=s,this._router=o,this._userService=a,this.alert=c,this.loading=u,this.navCtrl=l,this._followService=f,this.identity=this._userService.getIdentity(),this.message=new i("","","","",this.identity._id,""),this.token=this._userService.getToken(),this.url="https://api-meet-sport.herokuapp.com/api"}return _createClass(e,[{key:"ngOnInit",value:function(){this.getMyFollows()}},{key:"goBack",value:function(){this.modal.dismiss()}},{key:"onSubmit",value:function(e){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.loading.create({message:"Please wait..."}),t.next=3,n;case 3:t.sent.present(),this._messageService.addMessage(this.token,this.message).subscribe((function(t){return Object(r.a)(i,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.reset(),t.next=3,this.alert.create({message:"The message has been sent successfully!!. \ud83d\udc4d",buttons:["OK"]});case 3:return r=t.sent,t.next=6,n;case 6:return t.sent.dismiss(),t.next=9,r.present();case 9:this.modal.dismiss();case 10:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(r.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return t=e.sent,e.next=5,n;case 5:return e.sent.dismiss(),e.next=8,t.present();case 8:case"end":return e.stop()}}),e,this)})))}));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"getMyFollows",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.loading.create({message:"Please wait..."}),e.next=3,t;case 3:e.sent.present(),this._followService.getMyFollows(this.token).subscribe((function(e){return Object(r.a)(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e.follows),this.follows=e.follows,n.next=4,t;case 4:n.sent.dismiss();case 5:case"end":return n.stop()}}),n,this)})))}),(function(e){return Object(r.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return n=e.sent,e.next=5,t;case 5:return e.sent.dismiss(),e.next=8,n.present();case 8:case"end":return e.stop()}}),e,this)})))}));case 5:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||d)(c.Jb(a.a),c.Jb(u.P),c.Jb(u.N),c.Jb(l.a),c.Jb(l.g),c.Jb(s.a),c.Jb(u.a),c.Jb(u.L),c.Jb(u.O),c.Jb(o.a))},d.\u0275cmp=c.Db({type:d,selectors:[["app-add"]],features:[c.yb([s.a,o.a,a.a])],decls:23,vars:3,consts:[["color","success"],["slot","start"],[3,"click"],["name","chevron-back-outline"],[3,"ngSubmit"],["formAdd","ngForm"],["name","receiver","class","form-control","required","",3,"ngModel","ngModelChange",4,"ngIf"],["position","floating"],["name","text","required","",3,"ngModel","ngModelChange"],["text","ngModel"],[4,"ngIf"],["type","submit","color","primary"],["name","receiver","required","",1,"form-control",3,"ngModel","ngModelChange"],["receiver","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){if(1&e){var n=c.Nb();c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar",0),c.Mb(2,"ion-buttons",1),c.Mb(3,"ion-button",2),c.Ub("click",(function(){return t.goBack()})),c.Kb(4,"ion-icon",3),c.kc(5,"Back "),c.Lb(),c.Lb(),c.Mb(6,"ion-title"),c.kc(7,"Add"),c.Lb(),c.Lb(),c.Lb(),c.Mb(8,"ion-content"),c.Mb(9,"form",4,5),c.Ub("ngSubmit",(function(){c.fc(n);var e=c.ec(10);return t.onSubmit(e)})),c.Mb(11,"ion-item"),c.Mb(12,"ion-label"),c.kc(13,"For:"),c.Lb(),c.ic(14,m,3,2,"ion-select",6),c.Lb(),c.Mb(15,"ion-item"),c.Mb(16,"ion-label",7),c.kc(17,"Message:"),c.Lb(),c.Mb(18,"ion-textarea",8,9),c.Ub("ngModelChange",(function(e){return t.message.text=e})),c.Lb(),c.ic(20,h,2,0,"span",10),c.Lb(),c.Mb(21,"ion-button",11),c.kc(22," Send "),c.Lb(),c.Lb(),c.Lb()}if(2&e){var r=c.ec(19);c.zb(14),c.bc("ngIf",t.follows),c.zb(4),c.bc("ngModel",t.message.text),c.zb(2),c.bc("ngIf",!r.valid&&r.touched)}},directives:[u.o,u.I,u.e,u.d,u.p,u.H,u.j,f.i,f.d,f.e,u.t,u.u,b.j,u.G,u.T,f.h,f.c,f.f,u.E,u.S,b.i,u.F],styles:[""]}),d)},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a}));var r=function(e,t){return null!==t.closest(e)},i=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},s=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},o=/^[a-z][a-z0-9+\-.]*:/,a=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||o.test(t)){e.next=4;break}if(!(i=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),i.push(t,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r,i,s){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,r,s,i));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return o.classList.add(e)})),s&&Object.assign(o,s),n.appendChild(o),e.t0=o.componentOnReady,!e.t0){e.next=12;break}return e.next=12,o.componentOnReady();case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,i,s){return e.apply(this,arguments)}}(),i=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Uwmq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach((function(e){for(var n=t.querySelectorAll(e),r=n.length-1;r>=0;r--){var o=n[r];o.parentNode?o.parentNode.removeChild(o):t.removeChild(o);for(var a=s(o),c=0;c<a.length;c++)i(a[c])}}));for(var r=s(t),o=0;o<r.length;o++)i(r[o]);var c=document.createElement("div");c.appendChild(t);var u=c.querySelector("div");return null!==u?u.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},i=function e(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var r=t.attributes.item(n),i=r.name;if(o.includes(i.toLowerCase())){var a=r.value;null!=a&&a.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}else t.removeAttribute(i)}for(var c=s(t),u=0;u<c.length;u++)e(c[u])}},s=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},s=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},pyKd:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("mrSG"),i=n("qfBg"),s=n("MnDo"),o=n("tZre"),a=n("fXoL"),c=n("TEn/"),u=n("tyNb"),l=n("ofXK");function f(e,t){if(1&e&&a.Kb(0,"img",9),2&e){var n=a.Wb().$implicit,r=a.Wb(2);a.cc("src",r.url+"/get-image-user/"+n.emitter.image,a.gc)}}function b(e,t){1&e&&a.Kb(0,"img",10)}function g(e,t){if(1&e&&(a.Mb(0,"ion-item"),a.Mb(1,"ion-avatar",1),a.ic(2,f,1,1,"img",7),a.ic(3,b,1,0,"img",8),a.Lb(),a.Mb(4,"ion-label"),a.Mb(5,"h2"),a.kc(6),a.Xb(7,"date"),a.Lb(),a.Mb(8,"h4"),a.kc(9),a.Lb(),a.Mb(10,"p"),a.kc(11),a.Lb(),a.Lb(),a.Lb()),2&e){var n=t.$implicit;a.zb(2),a.bc("ngIf",n.emitter.image),a.zb(1),a.bc("ngIf",!n.emitter.image),a.zb(3),a.nc("",n.emitter.name+" "+n.emitter.surname,"\xa0",a.Yb(7,6," "+(null==n?null:n.created_at)),""),a.zb(3),a.mc("Sended to: ",(null==n?null:n.receiver.name)+" "+n.receiver.surname,""),a.zb(2),a.lc(n.text)}}function m(e,t){if(1&e&&(a.Mb(0,"div"),a.ic(1,g,12,8,"ion-item",6),a.Lb()),2&e){var n=a.Wb();a.zb(1),a.bc("ngForOf",n.messages)}}function h(e,t){if(1&e){var n=a.Nb();a.Mb(0,"ion-button",2),a.Ub("click",(function(){return a.fc(n),a.Wb().doInfinite()})),a.kc(1," Load more "),a.Lb()}}var d=function(){var e=function(){function e(t,n,r,i,s,o,a,c,u,l){_classCallCheck(this,e),this._messageService=t,this.navParams=n,this.modal=r,this._route=i,this._router=s,this._userService=o,this.alert=a,this.loading=c,this.navCtrl=u,this._followService=l,this.page=1,this.identity=this._userService.getIdentity(),this.token=this._userService.getToken(),this.url="https://api-meet-sport.herokuapp.com/api"}return _createClass(e,[{key:"ngOnInit",value:function(){this.getMessages()}},{key:"goBack",value:function(){this.modal.dismiss()}},{key:"doInfinite",value:function(){this.messages.length==this.total||(this.page++,this.getMessages(!0))}},{key:"getMessages",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.loading.create({message:"Please wait..."}),t.next=3,n;case 3:t.sent.present(),this._messageService.getEmmitMessages(this.token,this.page).subscribe((function(t){return Object(r.a)(i,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t),t.messages&&(e?this.messages=this.messages.concat(t.messages):(this.messages=t.messages,this.total=t.pages)),r.next=4,n;case 4:r.sent.dismiss();case 5:case"end":return r.stop()}}),r,this)})))}),(function(e){return Object(r.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 2:return t=e.sent,e.next=5,n;case 5:return e.sent.dismiss(),e.next=8,t.present();case 8:case"end":return e.stop()}}),e,this)})))}));case 5:case"end":return t.stop()}}),t,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Jb(o.a),a.Jb(c.P),a.Jb(c.N),a.Jb(u.a),a.Jb(u.g),a.Jb(i.a),a.Jb(c.a),a.Jb(c.L),a.Jb(c.O),a.Jb(s.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-sended"]],features:[a.yb([i.a,s.a,o.a])],decls:16,vars:2,consts:[["color","success"],["slot","start"],[3,"click"],["name","chevron-back-outline"],[4,"ngIf"],[3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"src",4,"ngIf"],["src","../../assets/no-user.webp",4,"ngIf"],[3,"src"],["src","../../assets/no-user.webp"]],template:function(e,t){1&e&&(a.Mb(0,"ion-header"),a.Mb(1,"ion-toolbar",0),a.Mb(2,"ion-buttons",1),a.Mb(3,"ion-button",2),a.Ub("click",(function(){return t.goBack()})),a.Kb(4,"ion-icon",3),a.kc(5,"Back "),a.Lb(),a.Lb(),a.Mb(6,"ion-title"),a.kc(7,"Received"),a.Lb(),a.Lb(),a.Lb(),a.Mb(8,"ion-content"),a.ic(9,m,2,1,"div",4),a.Mb(10,"ion-grid"),a.Mb(11,"ion-row"),a.Kb(12,"ion-col"),a.Mb(13,"ion-col"),a.ic(14,h,2,0,"ion-button",5),a.Lb(),a.Kb(15,"ion-col"),a.Lb(),a.Lb(),a.Lb()),2&e&&(a.zb(9),a.bc("ngIf",t.messages),a.zb(5),a.bc("ngIf",t.page!=t.total))},directives:[c.o,c.I,c.e,c.d,c.p,c.H,c.j,l.j,c.n,c.D,c.i,l.i,c.t,c.c,c.u],pipes:[l.d],styles:["ion-modal[_ngcontent-%COMP%]{overflow:scroll}"]}),e}()},tZre:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("tk/3"),i=n("fXoL"),s=n("TEn/"),o=function(){var e=function(){function e(t,n,r){_classCallCheck(this,e),this._http=t,this.alert=n,this.loading=r,this.url="https://api-meet-sport.herokuapp.com/api"}return _createClass(e,[{key:"addMessage",value:function(e,t){var n=JSON.stringify(t),i=(new r.c).set("Content-Type","application/json").set("Authorization",e);return this._http.post(this.url+"/message",n,{headers:i})}},{key:"getMyMessages",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=(new r.c).set("Content-Type","application/json").set("Authorization",e);return this._http.get(this.url+"/my-messages/"+t,{headers:n})}},{key:"getEmmitMessages",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=(new r.c).set("Content-Type","application/json").set("Authorization",e);return this._http.get(this.url+"/messages/"+t,{headers:n})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Qb(r.a),i.Qb(s.a),i.Qb(s.L))},e.\u0275prov=i.Fb({token:e,factory:e.\u0275fac}),e}()}}]);