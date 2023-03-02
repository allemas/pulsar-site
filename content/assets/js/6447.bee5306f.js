"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6447],{36447:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(63366),o=n(87462),a=n(67294),i=n(86010),s=n(94780),u=n(98216),l=n(90948),c=n(71657);const p=n(99962).Z;const m=n(30067).Z;var h=n(39707),d=n(1588),y=n(27621);function g(e){return(0,y.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(85893);const f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiTypography"}),a=(e=>w[e]||e)(n.color),l=(0,h.Z)((0,o.Z)({},n,{color:a})),{align:p="inherit",className:m,component:d,gutterBottom:y=!1,noWrap:x=!1,paragraph:k=!1,variant:B="body1",variantMapping:S=Z}=l,C=(0,r.Z)(l,f),M=(0,o.Z)({},l,{align:p,color:a,className:m,component:d,gutterBottom:y,noWrap:x,paragraph:k,variant:B,variantMapping:S}),W=d||(k?"p":S[B]||Z[B])||"span",P=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,g,i)})(M);return(0,v.jsx)(b,(0,o.Z)({as:W,ref:t,ownerState:M,className:(0,i.Z)(P.root,m)},C))}));function k(e){return(0,y.Z)("MuiLink",e)}const B=(0,d.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var S=n(54844),C=n(41796);const M={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},W=({theme:e,ownerState:t})=>{const n=(e=>M[e]||e)(t.color),r=(0,S.DW)(e,`palette.${n}`,!1)||t.color,o=(0,S.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,C.Fq)(r,.4)},P=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],R=(0,l.ZP)(x,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,u.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:W({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${B.focusVisible}`]:{outline:"auto"}}))),T=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiLink"}),{className:l,color:h="primary",component:d="a",onBlur:y,onFocus:g,TypographyClasses:f,underline:b="always",variant:Z="inherit",sx:w}=n,x=(0,r.Z)(n,P),{isFocusVisibleRef:B,onBlur:S,onFocus:C,ref:W}=p(),[T,A]=a.useState(!1),E=m(t,W),L=(0,o.Z)({},n,{color:h,component:d,focusVisible:T,underline:b,variant:Z}),N=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,a={root:["root",`underline${(0,u.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(a,k,t)})(L);return(0,v.jsx)(R,(0,o.Z)({color:h,className:(0,i.Z)(N.root,l),classes:f,component:d,onBlur:e=>{S(e),!1===B.current&&A(!1),y&&y(e)},onFocus:e=>{C(e),!0===B.current&&A(!0),g&&g(e)},ref:E,ownerState:L,variant:Z,sx:[...Object.keys(M).includes(h)?[]:[{color:h}],...Array.isArray(w)?w:[w]]},x))}))},39707:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(87462),o=n(63366),a=n(59766),i=n(44920);const s=["sx"],u=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((t=>{o[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function l(e){const{sx:t}=e,n=(0,o.Z)(e,s),{systemProps:i,otherProps:l}=u(n);let c;return c=Array.isArray(t)?[i,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,a.P)(n)?(0,r.Z)({},i,n):i}:(0,r.Z)({},i,t),(0,r.Z)({},l,{sx:c})}},7960:(e,t,n)=>{function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:()=>r})},30067:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(7960);function a(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,o.Z)(e,t)}))}),e)}},99962:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294);let o,a=!0,i=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function l(){a=!1}function c(){"hidden"===this.visibilityState&&i&&(a=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return a||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function m(){const e=r.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("pointerdown",l,!0),t.addEventListener("touchstart",l,!0),t.addEventListener("visibilitychange",c,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,window.clearTimeout(o),o=window.setTimeout((()=>{i=!1}),100),t.current=!1,!0)},ref:e}}}}]);