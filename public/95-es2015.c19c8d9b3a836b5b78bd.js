(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{MnDo:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=o("tk/3"),r=o("fXoL");let i=(()=>{class t{constructor(t){this._http=t,this.url="https://api-meet-sport.herokuapp.com/api"}addFollow(t,e){let o=JSON.stringify(e),r=(new n.c).set("Content-Type","application/json").set("Authorization",t);return this._http.post(this.url+"/follow",o,{headers:r})}deleteFollow(t,e){let o=(new n.c).set("Content-Type","application/json").set("Authorization",t);return this._http.delete(this.url+"/deleteFollow/"+e,{headers:o})}getFollowing(t,e=null,o=1){let r=(new n.c).set("Content-Type","application/json").set("Authorization",t);return this._http.get(this.url+"/following/"+e+"/"+o,{headers:r})}getMyFollows(t){let e=(new n.c).set("Content-Type","application/json").set("Authorization",t);return this._http.get(this.url+"/get-my-follows/true",{headers:e})}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(n.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac}),t})()},wNkF:function(t,e,o){"use strict";o.r(e),o.d(e,"AddPageModule",(function(){return c}));var n=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),l=o("J+Jj"),a=o("fXoL");const p=[{path:"",component:l.a}];let u=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(p)],s.i]}),t})(),c=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[n.b,r.a,i.J,u]]}),t})()}}]);