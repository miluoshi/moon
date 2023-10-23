"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76939],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?o.createElement(b,a(a({ref:t},p),{},{components:r})):o.createElement(b,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=r(25773),n=(r(27378),r(35318));const l={title:"list-global"},a=void 0,i={unversionedId:"proto/commands/list-global",id:"proto/commands/list-global",title:"list-global",description:"The proto list-global  (or proto lsg) command will list installed global dependencies (and",source:"@site/docs/proto/commands/list-global.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/list-global",permalink:"/docs/proto/commands/list-global",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/list-global.mdx",tags:[],version:"current",frontMatter:{title:"list-global"},sidebar:"proto",previous:{title:"list",permalink:"/docs/proto/commands/list"},next:{title:"list-remote",permalink:"/docs/proto/commands/list-remote"}},s={},c=[{value:"Arguments",id:"arguments",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"proto list-global <tool>")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"proto lsg"),") command will list installed global dependencies (and\ntheir canonical file location) by scanning the file system at the tool's global bins directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto list-global go\ngopls - ~/go/bin/gopls\nmockery - ~/go/bin/mockery\nreflex - ~/go/bin/reflex\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<tool>")," - Type of tool.")))}m.isMDXComponent=!0}}]);