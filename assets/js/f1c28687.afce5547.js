"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67145],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79022:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(27378),r=n(9619);function l(e){let{header:t,inline:n,updated:l,version:a}=e;return o.createElement(r.Z,{text:`v${a}`,variant:l?"success":"info",className:t?"absolute right-0 top-1.5":n?"inline-block":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(27378),r=n(40624),l=n(31792);const a={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:s}=e;return o.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?a[s]:"bg-gray-100 text-gray-800",t)},n&&o.createElement(l.Z,{icon:n,className:"mr-1"}),i)}},16249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(25773),r=(n(27378),n(35318)),l=n(79022);const a={title:"tool list",sidebar_label:"list"},i=void 0,s={unversionedId:"proto/commands/tool/list",id:"proto/commands/tool/list",title:"tool list",description:"The proto tool list command (formerly proto tools) will list all tools that have been installed,",source:"@site/docs/proto/commands/tool/list.mdx",sourceDirName:"proto/commands/tool",slug:"/proto/commands/tool/list",permalink:"/docs/proto/commands/tool/list",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/tool/list.mdx",tags:[],version:"current",frontMatter:{title:"tool list",sidebar_label:"list"},sidebar:"proto",previous:{title:"info",permalink:"/docs/proto/commands/tool/info"},next:{title:"list-plugins",permalink:"/docs/proto/commands/tool/list-plugins"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{version:"0.23.0",header:!0,mdxType:"VersionLabel"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"proto tool list")," command (formerly ",(0,r.kt)("inlineCode",{parentName:"p"},"proto tools"),") will list all tools that have been installed,\nalong with their installed versions, relevant timestamps, available aliases, and store location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ proto tool list\n\ngo - Go\n  Store: ~/.proto/tools/go\n  Versions:\n    1.20.0 - installed 08/24/23, last used 09/18/23\n    1.20.2 - installed 01/01/70, last used 09/18/23, default version\n\nnode - Node.js\n  Store: ~/.proto/tools/node\n  Aliases:\n    ~20 - stable\n  Versions:\n    18.0.0 - installed 09/03/23, last used 09/18/23, default version\n    18.14.0 - installed 09/04/23, last used 09/04/23\n    18.17.1 - installed 09/04/23, last used 09/04/23\n    19.0.0 - installed 09/03/23\n    20.0.0 - installed 09/03/23\n    20.6.0 - installed 09/04/23, last used 09/18/23\n")),(0,r.kt)("p",null,"A list of tool IDs can be provided to filter the output list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto tool list node npm\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[id...]")," - IDs of tools.")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--json")," - Print the list in JSON format.")))}u.isMDXComponent=!0}}]);