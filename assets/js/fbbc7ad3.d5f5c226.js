"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73573],{8954:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=o(24246),r=o(71670),s=o(79022);const i={title:"unpin"},l=void 0,c={id:"proto/commands/unpin",title:"unpin",description:"The proto unpin  command will unpin a version of a tool. By default it will remove from a",source:"@site/docs/proto/commands/unpin.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/unpin",permalink:"/docs/proto/commands/unpin",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/unpin.mdx",tags:[],version:"current",frontMatter:{title:"unpin"},sidebar:"proto",previous:{title:"uninstall",permalink:"/docs/proto/commands/uninstall"},next:{title:"upgrade",permalink:"/docs/proto/commands/upgrade"}},a={},d=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}];function p(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{version:"0.36.0",header:!0}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"proto unpin <tool>"})," command will unpin a version of a tool. By default it will remove from a\n",(0,t.jsx)(n.code,{children:"./.prototools"})," file in the current directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ proto unpin go\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(n.code,{children:"--global"})," option is passed, the version will be removed globally from\n",(0,t.jsx)(n.code,{children:"~/.proto/.prototools"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ proto unpin go --global\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<tool>"})," - Type of tool."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--global"})," - Unpin from the global ",(0,t.jsx)(n.code,{children:"~/.proto/.prototools"})," instead of the local ",(0,t.jsx)(n.code,{children:"./.prototools"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},79022:(e,n,o)=>{o.d(n,{Z:()=>s});var t=o(9619),r=o(24246);function s(e){let{header:n,inline:o,updated:s,version:i}=e;return(0,r.jsx)(t.Z,{text:`v${i}`,variant:s?"success":"info",className:n?"absolute right-0 top-1.5":o?"inline-block":"ml-2"})}},9619:(e,n,o)=>{o.d(n,{Z:()=>l});var t=o(40624),r=o(31792),s=o(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:n,icon:o,text:l,variant:c}=e;return(0,s.jsxs)("span",{className:(0,t.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?i[c]:"bg-gray-100 text-gray-800",n),children:[o&&(0,s.jsx)(r.Z,{icon:o,className:"mr-1"}),l]})}},71670:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var t=o(27378);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);