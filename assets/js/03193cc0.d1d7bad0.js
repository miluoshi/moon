"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43363],{77534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(24246),s=t(71670),o=t(36642),a=t(32189);const i={title:"TypeScript example",sidebar_label:"TypeScript"},l=void 0,c={id:"guides/examples/typescript",title:"TypeScript example",description:"In this guide, you'll learn how to integrate TypeScript into moon. We'll be",source:"@site/docs/guides/examples/typescript.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/typescript",permalink:"/docs/guides/examples/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/typescript.mdx",tags:[],version:"current",frontMatter:{title:"TypeScript example",sidebar_label:"TypeScript"},sidebar:"guides",previous:{title:"SvelteKit",permalink:"/docs/guides/examples/sveltekit"},next:{title:"Vite & Vitest",permalink:"/docs/guides/examples/vite"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"Sharing",id:"sharing",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to preserve pretty output?",id:"how-to-preserve-pretty-output",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{to:"https://github.com/moonrepo/examples/blob/master/.moon/tasks/node.yml#L95"}),"\n",(0,r.jsxs)(n.p,{children:["In this guide, you'll learn how to integrate ",(0,r.jsx)(n.a,{href:"https://eslint.org/",children:"TypeScript"})," into moon. We'll be\nusing ",(0,r.jsx)(n.a,{href:"../javascript/typescript-project-refs",children:"project references"}),", as it ensures that only affected\nprojects are built, and not the entire repository."]}),"\n",(0,r.jsxs)(n.p,{children:["Begin by installing ",(0,r.jsx)(n.code,{children:"typescript"})," and any pre-configured tsconfig packages in your root. We suggest\nusing the same version across the entire repository."]}),"\n",(0,r.jsx)(o.Z,{dep:"typescript tsconfig-moon",dev:!0}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Since typechecking is a universal workflow, add a ",(0,r.jsx)(n.code,{children:"typecheck"})," task to\n",(0,r.jsx)(n.a,{href:"../../config/tasks",children:(0,r.jsx)(n.code,{children:".moon/tasks/node.yml"})})," with the following parameters."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks/node.yml"',children:"tasks:\n  typecheck:\n    command:\n      - 'tsc'\n      # Use incremental builds with project references\n      - '--build'\n      # Always use pretty output\n      - '--pretty'\n      # Use verbose logging to see affected projects\n      - '--verbose'\n    inputs:\n      # Source and test files\n      - 'src/**/*'\n      - 'tests/**/*'\n      # Type declarations\n      - 'types/**/*'\n      # Project configs\n      - 'tsconfig.json'\n      - 'tsconfig.*.json'\n      # Root configs (extended from only)\n      - '/tsconfig.options.json'\n    outputs:\n      # Matches `compilerOptions.outDir`\n      - 'lib'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Projects can extend this task and provide additional parameters if need be, for example."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"tasks:\n  typecheck:\n    args:\n      # Force build every time\n      - '--force'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"root-level",children:"Root-level"}),"\n",(0,r.jsxs)(n.p,{children:["Multiple root-level TypeScript configs are ",(0,r.jsx)(n.em,{children:"required"}),", as we need to define compiler options that\nare shared across the repository, and we need to house a list of all project references."]}),"\n",(0,r.jsxs)(n.p,{children:["To start, let's create a ",(0,r.jsx)(n.code,{children:"tsconfig.options.json"})," that will contain our compiler options. In our\nexample, we'll extend ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/tsconfig-moon",children:"tsconfig-moon"})," for convenience.\nSpecifically, the ",(0,r.jsx)(n.code,{children:"tsconfig.workspaces.json"})," config, which enables ECMAScript modules, composite\nmode, declaration emitting, and incremental builds."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.options.json"',children:'{\n  "extends": "tsconfig-moon/tsconfig.projects.json",\n  "compilerOptions": {\n    // Your custom options\n    "moduleResolution": "nodenext",\n    "target": "es2022"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We'll also need the standard ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," to house our project references. This is used by\neditors and tooling for deep integrations."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "extends": "./tsconfig.options.json",\n  "files": [],\n  // All project references in the repo\n  "references": []\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"../../config/toolchain#rootconfigfilename",children:(0,r.jsx)(n.code,{children:"typescript.rootConfigFileName"})})," setting can be\nused to change the root-level config name and the\n",(0,r.jsx)(n.a,{href:"../../config/toolchain#syncprojectreferences",children:(0,r.jsx)(n.code,{children:"typescript.syncProjectReferences"})})," setting will\nautomatically keep project references in sync!"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"project-level",children:"Project-level"}),"\n",(0,r.jsxs)(n.p,{children:["Every project will require a ",(0,r.jsx)(n.code,{children:"tsconfig.json"}),", as TypeScript itself requires it. The following\n",(0,r.jsx)(n.code,{children:"tsconfig.json"})," will typecheck the entire project, including source and test files."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="<project>/tsconfig.json"',children:'{\n  // Extend the root compiler options\n  "extends": "../../tsconfig.options.json",\n  "compilerOptions": {\n    // Declarations are written here\n    "outDir": "lib"\n  },\n  // Include files in the project\n  "include": ["src/**/*", "tests/**/*"],\n  // Depends on other projects\n  "references": []\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"../../config/toolchain#projectconfigfilename",children:(0,r.jsx)(n.code,{children:"typescript.projectConfigFileName"})})," setting can\nbe used to change the project-level config name."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sharing",children:"Sharing"}),"\n",(0,r.jsx)(n.p,{children:"To share configuration across projects, you have 3 options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Define settings in a ",(0,r.jsx)(n.a,{href:"#root-level",children:"root-level config"}),". This only applies to the parent repository."]}),"\n",(0,r.jsxs)(n.li,{children:["Create and publish an\n",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases",children:(0,r.jsx)(n.code,{children:"tsconfig base"})}),"\nnpm package. This can be used in any repository."]}),"\n",(0,r.jsx)(n.li,{children:"A combination of 1 and 2."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For options 2 and 3, if you're utilizing package workspaces, create a local package with the\nfollowing content."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="packages/tsconfig-company/tsconfig.json"',children:'{\n  "compilerOptions": {\n    // ...\n    "lib": ["esnext"]\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Within another ",(0,r.jsx)(n.code,{children:"tsconfig.json"}),", you can extend this package to inherit the settings."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "extends": "tsconfig-company/tsconfig.json"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h3,{id:"how-to-preserve-pretty-output",children:"How to preserve pretty output?"}),"\n",(0,r.jsxs)(n.p,{children:["TypeScript supports a pretty format where it includes codeframes and color highlighting for\nfailures. However, when ",(0,r.jsx)(n.code,{children:"tsc"})," is piped or the terminal is not a TTY, the pretty format is lost. To\npreserve and always display the pretty format, be sure to pass the ",(0,r.jsx)(n.code,{children:"--pretty"})," argument!"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},39798:(e,n,t)=>{t.d(n,{Z:()=>a});t(27378);var r=t(40624);const s={tabItem:"tabItem_wHwb"};var o=t(24246);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},33337:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(27378),s=t(40624),o=t(83457),a=t(35595),i=t(76457);const l={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var c=t(24246);function u(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),s=i[t].value;s!==r&&(d(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:h,onClick:p,...o,className:(0,s.Z)("tabs__item",l.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function d(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function p(e){const n=(0,a.Y)(e);return(0,c.jsxs)("div",{className:(0,s.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(u,{...n,...e}),(0,c.jsx)(d,{...n,...e})]})}function h(e){const n=(0,i.Z)();return(0,c.jsx)(p,{...e,children:(0,a.h)(e.children)},String(n))}},35595:(e,n,t)=>{t.d(n,{Y:()=>h,h:()=>c});var r=t(27378),s=t(3620),o=t(9834),a=t(30654),i=t(70784),l=t(71819);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=u(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[h,f]=p({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,l.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),j=(()=>{const e=h??g;return d({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),f(e),m(e)}),[f,m,a]),tabValues:a}}},36642:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(52807),s=t(39798),o=t(33337),a=t(24246);function i(e,n,t){let r=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?r+="--dev ":e.peer&&(r+="--peer "),t&&n&&!e.package&&(r+="-W "),r+=e.dep,r}function l(e){let n="npm install ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package&&(n+=`--workspace ${e.package} `),n+=e.dep,n}function c(e,n){let t="pnpm add ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package?t+=`--filter ${e.package} `:n&&(t+="-w "),t+=e.dep,t}function u(e){let n="bun install ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),n+=e.dep,n}function d(e){let n=i(e,!1,!0),t=c(e,!1);return e.package||(n+="\n\n# If using workspaces\n",t+="\n\n# If using workspaces\n",n+=i(e,!0,!0),t+=c(e,!0)),(0,a.jsxs)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Bun",value:"bun"}],children:[(0,a.jsx)(s.Z,{value:"yarn",children:(0,a.jsx)(r.default,{language:"shell",children:i(e,!1,!1)})}),(0,a.jsx)(s.Z,{value:"yarn1",children:(0,a.jsx)(r.default,{language:"shell",children:n})}),(0,a.jsx)(s.Z,{value:"npm",children:(0,a.jsx)(r.default,{language:"shell",children:l(e)})}),(0,a.jsx)(s.Z,{value:"pnpm",children:(0,a.jsx)(r.default,{language:"shell",children:t})}),(0,a.jsx)(s.Z,{value:"bun",children:(0,a.jsx)(r.default,{language:"shell",children:u(e)})})]})}},32189:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(83469),s=t(31792),o=t(24246);function a(e){let{to:n}=e;return(0,o.jsx)("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"},children:(0,o.jsx)(s.Z,{icon:r.dT$})})}},71670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(27378);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);