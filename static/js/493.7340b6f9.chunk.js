"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{368:function(t,n,e){var i=e(87),r=e(689),a=e(184);n.Z=function(t){var n=t.movies,e=(0,r.TH)();return(0,a.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.title;return(0,a.jsx)(i.rU,{state:{from:e},to:"/movies/".concat(n),children:(0,a.jsx)("li",{children:r})},n)}))})}},172:function(t,n,e){e.d(n,{a:function(){return i}});var i=function(t){return t.map((function(t){return{id:t.id,title:t.title}}))}},493:function(t,n,e){e.r(n);var i=e(439),r=e(368),a=e(172),u=e(682),o=e(791),c=e(184);n.default=function(){var t=(0,o.useState)([]),n=(0,i.Z)(t,2),e=n[0],s=n[1];return(0,o.useEffect)((function(){(0,u.v)("trending/movie/day").then((function(t){var n=t.data.results;s((0,a.a)(n))})).catch((function(t){console.log(t)}))}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Trending today"}),(0,c.jsx)(r.Z,{movies:e})]})}},682:function(t,n,e){e.d(n,{v:function(){return r}});var i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var r=function(t){return(0,i.Z)(t,{params:{api_key:"854bf457e823d26894ff8657add868b2"}})}}}]);
//# sourceMappingURL=493.7340b6f9.chunk.js.map