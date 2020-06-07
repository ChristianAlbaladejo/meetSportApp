function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{x5bZ:function(e,n,t){"use strict";t.r(n),t.d(n,"RegisterPageModule",(function(){return w}));var r=t("ofXK"),o=t("3Pt+"),i=t("TEn/"),a=t("tyNb"),s=t("mrSG"),c=t("2hxB"),u=t("qfBg"),l=t("fXoL");function b(e,n){1&e&&(l.Mb(0,"span"),l.kc(1," Name is required "),l.Lb())}function d(e,n){1&e&&(l.Mb(0,"span"),l.kc(1," Surname is required "),l.Lb())}function g(e,n){1&e&&(l.Mb(0,"span"),l.kc(1," Nick is required "),l.Lb())}function p(e,n){1&e&&(l.Mb(0,"span"),l.kc(1," Email is required "),l.Lb())}function f(e,n){1&e&&(l.Mb(0,"span"),l.kc(1," Password is required "),l.Lb())}var h,m,M,k=[{path:"",component:(h=function(){function e(n,t,r,o,i){_classCallCheck(this,e),this._router=n,this._route_=t,this._userService=r,this.alert=o,this.loading=i,this.user=new c.a("","","","","","","ROLE_USER","")}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.loading.create({message:"Please wait..."}),e.next=3,n;case 3:e.sent.present(),this._userService.register(this.user).subscribe((function(e){return Object(s.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user||!e.user._id){t.next=11;break}return t.next=3,this.alert.create({header:"Success",message:"You have already registered! \ud83e\udd2a",buttons:["OK"]});case 3:return r=t.sent,t.next=6,n;case 6:return t.sent.dismiss(),t.next=9,r.present();case 9:t.next=19;break;case 11:return t.next=13,this.alert.create({message:"Ohh! Something gone wrong. \ud83d\ude25",buttons:["OK"]});case 13:return o=t.sent,t.next=16,n;case 16:return t.sent.dismiss(),t.next=19,o.present();case 19:case"end":return t.stop()}}),t,this)})))}),(function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e,this)})))}}]),e}(),h.\u0275fac=function(e){return new(e||h)(l.Jb(a.g),l.Jb(a.a),l.Jb(u.a),l.Jb(i.a),l.Jb(i.L))},h.\u0275cmp=l.Db({type:h,selectors:[["app-register"]],features:[l.yb([u.a])],decls:33,vars:10,consts:[["color","success"],[1,"login"],["padding","",1,"login-box"],["novalidate","",3,"ngSubmit"],["registerForm","ngForm"],["clearInput","false","name","name","placeholder","Name","type","text","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["name","ngModel","username","ngModel"],[4,"ngIf"],["clearInput","false","name","surname","placeholder","Surname","type","text","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["surname","ngModel"],["clearInput","false","name","nick","placeholder","Nick","type","text","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["nick","ngModel"],["clearInput","false","name","email","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","placeholder","Email","type","email","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["email","ngModel"],["clearInput","false","name","password","placeholder","Password","type","password","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","color","primary","block","",1,"login-register"],["routerLink","../login","color","primary","block","",1,"login-register"]],template:function(e,n){if(1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-title"),l.kc(3,"Register"),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content",1),l.Mb(5,"ion-card",2),l.Mb(6,"form",3,4),l.Ub("ngSubmit",(function(){return n.onSubmit()})),l.Mb(8,"ion-item"),l.Mb(9,"ion-input",5,6),l.Ub("ngModelChange",(function(e){return n.user.name=e})),l.Lb(),l.ic(12,b,2,0,"span",7),l.Lb(),l.Mb(13,"ion-item"),l.Mb(14,"ion-input",8,9),l.Ub("ngModelChange",(function(e){return n.user.surname=e})),l.Lb(),l.ic(16,d,2,0,"span",7),l.Lb(),l.Mb(17,"ion-item"),l.Mb(18,"ion-input",10,11),l.Ub("ngModelChange",(function(e){return n.user.nick=e})),l.Lb(),l.ic(20,g,2,0,"span",7),l.Lb(),l.Mb(21,"ion-item"),l.Mb(22,"ion-input",12,13),l.Ub("ngModelChange",(function(e){return n.user.email=e})),l.Lb(),l.ic(24,p,2,0,"span",7),l.Lb(),l.Mb(25,"ion-item"),l.Mb(26,"ion-input",14,15),l.Ub("ngModelChange",(function(e){return n.user.password=e})),l.Lb(),l.ic(28,f,2,0,"span",7),l.Lb(),l.Mb(29,"ion-button",16),l.kc(30," Register "),l.Lb(),l.Mb(31,"ion-button",17),l.kc(32," Login "),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e){var t=l.ec(10),r=l.ec(15),o=l.ec(19),i=l.ec(23),a=l.ec(27);l.zb(9),l.bc("ngModel",n.user.name),l.zb(3),l.bc("ngIf",!t.valid&&t.touched),l.zb(2),l.bc("ngModel",n.user.surname),l.zb(2),l.bc("ngIf",!r.valid&&r.touched),l.zb(2),l.bc("ngModel",n.user.nick),l.zb(2),l.bc("ngIf",!o.valid&&o.touched),l.zb(2),l.bc("ngModel",n.user.email),l.zb(2),l.bc("ngIf",!i.valid&&i.touched),l.zb(2),l.bc("ngModel",n.user.password),l.zb(2),l.bc("ngIf",!a.valid&&a.touched)}},directives:[i.o,i.I,i.H,i.j,i.f,o.i,o.d,o.e,i.t,i.s,i.T,o.h,o.c,o.f,r.j,o.g,i.d,i.R,a.h],styles:[".login-box[_ngcontent-%COMP%]{max-width:350px;margin:40px auto 0}.logo[_ngcontent-%COMP%]{margin:0 auto;height:30px}.if-logo[_ngcontent-%COMP%]{height:200px}.RP-Icon[_ngcontent-%COMP%]{width:100%;height:66px;bottom:90px;margin:50px auto 0 -2px}.login-button[_ngcontent-%COMP%]{width:90%;margin:20px auto 20px 5%}.login-register[_ngcontent-%COMP%]{width:90%;margin:0 auto 20px 5%}.code[_ngcontent-%COMP%]{margin-top:1vw;border-bottom:1px solid #ddd;padding:10px;color:#888}.app-version[_ngcontent-%COMP%]{color:#fff;font-size:18px;font-weight:300;text-align:center;margin-top:90px}"]}),h)}],x=((M=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:M}),M.\u0275inj=l.Gb({factory:function(e){return new(e||M)},imports:[[a.i.forChild(k)],a.i]}),M),w=((m=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:m}),m.\u0275inj=l.Gb({factory:function(e){return new(e||m)},imports:[[r.b,o.a,i.J,x]]}),m)}}]);