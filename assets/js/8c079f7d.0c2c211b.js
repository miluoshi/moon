"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85880],{24658:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(24246),s=i(71670);const o={title:"init"},l=void 0,c={id:"commands/init",title:"init",description:"The moon init [dest] command will initialize moon into a repository and scaffold config files by",source:"@site/docs/commands/init.mdx",sourceDirName:"commands",slug:"/commands/init",permalink:"/docs/commands/init",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/init.mdx",tags:[],version:"current",frontMatter:{title:"init"},sidebar:"docs",previous:{title:"generate",permalink:"/docs/commands/generate"},next:{title:"migrate",permalink:"/docs/commands/migrate"}},r={},d=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}];function a(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"moon init [dest]"})," command will initialize moon into a repository and scaffold config files by\ncreating a ",(0,t.jsx)(n.code,{children:".moon"})," folder. By default moon will enable the following supported languages when a\ncertain file exists, or we'll prompt you to decide."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node"})," enabled when ",(0,t.jsx)(n.code,{children:"package.json"})," exists."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rust"})," enabled when ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," exists."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"typescript"})," enabled when ",(0,t.jsx)(n.code,{children:"tsconfig.json"})," exists."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Furthermore, we'll also attempt to detect applicable language versions, dependency managers, and\nother ecosystem related settings."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ moon init\n\n# In another directory\n$ moon init ./app\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The command can also be used to initialize a specific tool ",(0,t.jsx)(n.em,{children:"after"})," moon has already been\ninitialized. Perfect for adopting a new language into the workspace."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ moon init --tool typescript\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[dest]"})," - Destination to initialize and scaffold into. Defaults to ",(0,t.jsx)(n.code,{children:"."})," (current working\ndirectory)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--force"})," - Overwrite existing config files if they exist."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--minimal"})," - Generate minimal configurations and sane defaults."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--tool"})," - Individual tool to initialize and configure.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Accepts: ",(0,t.jsx)(n.code,{children:"node"}),", ",(0,t.jsx)(n.code,{children:"rust"}),", ",(0,t.jsx)(n.code,{children:"typescript"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--yes"})," - Skip all prompts and enables tools based on file detection."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>l});var t=i(27378);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);