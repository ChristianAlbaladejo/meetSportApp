(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{X3zk:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginPageModule",(function(){return p}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("mrSG"),l=n("2hxB"),c=n("qfBg"),g=n("fXoL");function b(e,t){1&e&&(g.Mb(0,"span"),g.kc(1,"The email is incorrect"),g.Lb())}function u(e,t){1&e&&(g.Mb(0,"span"),g.kc(1,"Password is required"),g.Lb())}const d=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,s,r){this._router=e,this._route_=t,this._userService=n,this.alert=i,this.loading=o,this.navCtrl=s,this.menuCtrl=r,this.user=new l.a("","","","","","","ROLE_USER","")}ngOnInit(){}ionViewWillEnter(){this.menuCtrl.enable(!1)}onSubmit(){return Object(a.a)(this,void 0,void 0,(function*(){let e=this.loading.create({message:"Please wait..."});(yield e).present(),this._userService.signup(this.user).subscribe(t=>Object(a.a)(this,void 0,void 0,(function*(){if(this.identity=t.user,this.identity&&this.identity._id)localStorage.setItem("identity",JSON.stringify(this.identity)),this.getToken(),(yield e).dismiss();else{const t=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});(yield e).dismiss(),yield t.present()}})),t=>Object(a.a)(this,void 0,void 0,(function*(){if(null!=t){const t=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});(yield e).dismiss(),yield t.present()}})))}))}getToken(){this._userService.signup(this.user,"true").subscribe(e=>Object(a.a)(this,void 0,void 0,(function*(){if(this.token=e.token,this.token.length<=0){const e=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});yield e.present()}else localStorage.setItem("token",this.token),this.navCtrl.pop(),this.getCounters(),this.navCtrl.navigateRoot("/")})),e=>Object(a.a)(this,void 0,void 0,(function*(){if(null!=e){const e=yield this.alert.create({message:"Ohh! Something gone wrong. \u{1f625}",buttons:["OK"]});yield e.present()}})))}getCounters(){this._userService.getCounters().subscribe(e=>{localStorage.setItem("stats",JSON.stringify(e)),console.log(e)},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(g.Jb(r.g),g.Jb(r.a),g.Jb(c.a),g.Jb(s.a),g.Jb(s.L),g.Jb(s.O),g.Jb(s.M))},e.\u0275cmp=g.Db({type:e,selectors:[["app-login"]],features:[g.yb([c.a])],decls:21,vars:4,consts:[["color","success"],["no-bounce","",1,"login"],["padding","",1,"login-box"],["src","../../assets/logo.PNG","alt","",1,"if-logo"],["novalidate","",3,"ngSubmit"],["loginForm","ngForm"],["clearInput","false","placeholder","Email","name","email","type","email","spellcheck","false","autocapitalize","off","required","","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",1,"code",3,"ngModel","ngModelChange"],["email","ngModel"],[4,"ngIf"],["clearInput","false","placeholder","Password","name","password","type","password","spellcheck","false","autocapitalize","off","required","",1,"code",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","color","primary","block","",1,"login-button"],["routerLink","../register","color","primary","block","",1,"login-register"]],template:function(e,t){if(1&e&&(g.Mb(0,"ion-header"),g.Mb(1,"ion-toolbar",0),g.Mb(2,"ion-title"),g.kc(3,"Login"),g.Lb(),g.Lb(),g.Lb(),g.Mb(4,"ion-content",1),g.Mb(5,"ion-card",2),g.Kb(6,"img",3),g.Mb(7,"form",4,5),g.Ub("ngSubmit",(function(){return t.onSubmit()})),g.Mb(9,"ion-item"),g.Mb(10,"ion-input",6,7),g.Ub("ngModelChange",(function(e){return t.user.email=e})),g.Lb(),g.ic(12,b,2,0,"span",8),g.Lb(),g.Mb(13,"ion-item"),g.Mb(14,"ion-input",9,10),g.Ub("ngModelChange",(function(e){return t.user.password=e})),g.Lb(),g.ic(16,u,2,0,"span",8),g.Lb(),g.Mb(17,"ion-button",11),g.kc(18," Login "),g.Lb(),g.Mb(19,"ion-button",12),g.kc(20," Register "),g.Lb(),g.Lb(),g.Lb(),g.Lb()),2&e){const e=g.ec(11);g.zb(10),g.bc("ngModel",t.user.email),g.zb(2),g.bc("ngIf",!e.valid&&e.touched),g.zb(2),g.bc("ngModel",t.user.password),g.zb(2),g.bc("ngIf",!e.valid&&e.touched)}},directives:[s.o,s.I,s.H,s.j,s.f,o.i,o.d,o.e,s.t,s.s,s.T,o.h,o.g,o.c,o.f,i.j,s.d,s.R,r.h],styles:[".login-box[_ngcontent-%COMP%]{max-width:350px;margin:40px auto 0}.logo[_ngcontent-%COMP%]{margin:0 auto;height:30px}.if-logo[_ngcontent-%COMP%]{height:200px;margin-left:22%}.RP-Icon[_ngcontent-%COMP%]{width:100%;height:66px;bottom:90px;margin:50px auto 0 -2px}.login-button[_ngcontent-%COMP%]{width:90%;margin:20px auto 20px 5%}.login-register[_ngcontent-%COMP%]{width:90%;margin:0 auto 20px 5%}.code[_ngcontent-%COMP%]{margin-top:1vw;border-bottom:1px solid #ddd;padding:10px;color:#888}.app-version[_ngcontent-%COMP%]{color:#fff;font-size:18px;font-weight:300;text-align:center;margin-top:90px}"]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(d)],r.i]}),e})(),p=(()=>{class e{}return e.\u0275mod=g.Hb({type:e}),e.\u0275inj=g.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.a,s.J,h]]}),e})()}}]);