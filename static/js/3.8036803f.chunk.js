(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,8],{169:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(0),n(90);var o=n(1);t.default=function(e){var t=e.title;return Object(o.jsx)("div",{className:"header",children:t})}},93:function(e,t,n){"use strict";n.r(t);var o=n(7),c=n(0),i=n(168),r=n(140),a=n(64),d=n.n(a),l=n(20),s=n(24),u=n(88),h=n(32),j=(n(169),n(1));t.default=function(e){var t=Object(c.useContext)(l.a),n=e.header,a=Object(c.useState)(null),v=Object(o.a)(a,2),b=v[0],f=v[1],w=Object(c.useState)("50vw"),O=Object(o.a)(w,2),m=O[0],p=O[1],C=Object(c.useState)("VERTICAL_ALTERNATING"),x=Object(o.a)(C,2),T=x[0],W=x[1],g="".concat("/portfolio","/").concat(s.a.education);return Object(c.useEffect)((function(){var e,t,n,o,c,i;fetch(g,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return e})),(null===(e=window)||void 0===e?void 0:e.innerWidth)<576&&W("VERTICAL"),(null===(t=window)||void 0===t?void 0:t.innerWidth)<576||(null===(n=window)||void 0===n?void 0:n.innerWidth)>=576&&(null===(o=window)||void 0===o?void 0:o.innerWidth)<768?p("90vw"):(null===(c=window)||void 0===c?void 0:c.innerWidth)>=768&&(null===(i=window)||void 0===i?void 0:i.innerWidth)<1024?p("75vw"):p("50vw")}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.default,{title:n}),b?Object(j.jsx)(d.a,{children:Object(j.jsx)("div",{style:{width:m},className:"section-content-container",children:Object(j.jsx)(r.a,{children:Object(j.jsx)(i.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:b.education,cardHeight:250,mode:T,theme:{primary:t.accentColor,secondary:t.accentColor,cardBgColor:t.chronoTheme.cardBgColor,cardForeColor:t.chronoTheme.cardForeColor,titleColor:t.chronoTheme.titleColor},children:Object(j.jsx)("div",{className:"chrono-icons",children:b.education.map((function(e){return e.icon?Object(j.jsx)("img",{src:e.icon.src,alt:e.icon.alt},e.icon.src):null}))})})})})}):Object(j.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=3.8036803f.chunk.js.map