"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[7],{368:function(t,e,n){var r=n(87),i=n(689),u=n(184);e.Z=function(t){var e=t.movies,n=(0,i.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){var e=t.id,i=t.title;return(0,u.jsx)(r.rU,{state:{from:n},to:"/movies/".concat(e),children:(0,u.jsx)("li",{children:i})},e)}))})}},172:function(t,e,n){n.d(e,{a:function(){return r}});var r=function(t){return t.map((function(t){return{id:t.id,title:t.title}}))}},7:function(t,e,n){n.r(e);var r=n(433),i=n(439),u=n(368),a=n(791),o=n(87),c=n(682),s=n(172),f=n(184),l="movies";e.default=function(){var t,e=(0,o.lr)(),n=(0,i.Z)(e,2),v=n[0],d=n[1],h=null!==(t=v.get("query"))&&void 0!==t?t:"",m=JSON.parse(localStorage.getItem(l)),g=(0,a.useState)((function(){return m&&h?(0,r.Z)(m):[]})),p=(0,i.Z)(g,2),_=p[0],b=p[1];(0,a.useEffect)((function(){localStorage.setItem(l,JSON.stringify(_))}),[_,h]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),(0,c.v)("search/movie?query=".concat(h)).then((function(t){var e=t.data.results;b((0,r.Z)((0,s.a)(e)))})).catch((function(t){console.log(t)}))},children:[(0,f.jsx)("input",{value:h,onChange:function(t){var e=t.target.value;if(""===e)return d({});d({query:e})}}),(0,f.jsx)("button",{children:"Search"})]}),_.length>0&&(0,f.jsx)(u.Z,{movies:_})]})}},682:function(t,e,n){n.d(e,{v:function(){return i}});var r=n(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(t){return(0,r.Z)(t,{params:{api_key:"854bf457e823d26894ff8657add868b2"}})}}}]);
//# sourceMappingURL=7.f6f8f961.chunk.js.map