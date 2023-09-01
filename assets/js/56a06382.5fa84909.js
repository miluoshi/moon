"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5091],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(38944);const l="tabItem_wHwb";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(25773),r=n(27378),l=n(38944),o=n(83457),i=n(35595),s=n(76457);const u="tabList_J5MA",p="tabItem_l0OV";function c(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(d,(0,a.Z)({},e,t)))}function g(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(27378),r=n(35331),l=n(30654),o=n(70784),i=n(71819);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,m]=c({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=d??g;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),f(e)}),[m,f,l]),tabValues:l}}},36642:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(30780),l=n(39798),o=n(33337);function i(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function u(e){let t=i(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=i(e,!0,!0),n+=s(e,!0)),a.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},i(e,!1,!1))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},t)),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},n)))}},27457:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(30780),l=n(39798),o=n(33337);function i(e,t,n){return`${e} create ${t} ${n.join(" ")}`.trim()}function s(e){let{dep:t,args:n=[]}=e;return a.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},i("yarn",t,n))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},i("yarn",t,n))),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},i("npm",t,n))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},i("pnpm",t,n))))}},32189:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(83469),l=n(31792);function o(e){let{to:t}=e;return a.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(l.Z,{icon:r.dT$}))}},55210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=n(25773),r=(n(27378),n(35318)),l=n(36642),o=(n(27457),n(33337)),i=n(39798),s=n(32189);const u={title:"Next.js example",sidebar_label:"Next.js"},p=void 0,c={unversionedId:"guides/examples/next",id:"guides/examples/next",title:"Next.js example",description:"In this guide, you'll learn how to integrate Next.js into moon.",source:"@site/docs/guides/examples/next.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/next",permalink:"/docs/guides/examples/next",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/next.mdx",tags:[],version:"current",frontMatter:{title:"Next.js example",sidebar_label:"Next.js"},sidebar:"guides",previous:{title:"NestJS",permalink:"/docs/guides/examples/nest"},next:{title:"Nuxt",permalink:"/docs/guides/examples/nuxt"}},d={},m=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}],g={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/nextjs-app",mdxType:"HeadingApiLink"}),(0,r.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org"},"Next.js")," into moon."),(0,r.kt)("p",null,"Begin by creating a new Next.js project at a specified folder path (this should not be created in\nthe workspace root, unless a polyrepo)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd apps && npx create-next-app <project> --typescript\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"View the ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/learn/basics/create-nextjs-app/setup"},"official Next.js docs")," for a\nmore in-depth guide to getting started!")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Since Next.js is per-project, the associated moon tasks should be defined in each project's\n",(0,r.kt)("a",{parentName:"p",href:"../../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"fileGroups:\n    next:\n        - 'pages/**/*'\n        - 'public/**/*'\n        - 'src/**/*'\n        - 'next-env.d.ts'\n        - 'next.config.*'\n\ntasks:\n    # Development server\n    dev:\n        command: 'next dev'\n        local: true\n\n    # Production build (SSR)\n    build:\n        command: 'next build'\n        inputs:\n            - '@group(next)'\n\n    # Production build (SSG)\n    export:\n        command: 'next export -o ./build'\n        deps:\n            - '~:build'\n        inputs:\n            - '@group(next)'\n        outputs:\n            - '.next'\n            - 'build'\n\n    # Serve the build\n    start:\n        command: 'next start'\n        local: true\n")),(0,r.kt)("h3",{id:"eslint-integration"},"ESLint integration"),(0,r.kt)("p",null,"Next.js has ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/eslint"},"built-in support for ESLint"),", which is\ngreat, but complicates things a bit. Because of this, you have two options for moving forward:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use a ",(0,r.kt)("a",{parentName:"li",href:"./eslint"},"global ",(0,r.kt)("inlineCode",{parentName:"a"},"lint")," task")," and bypass Next.js's solution (preferred)."),(0,r.kt)("li",{parentName:"ul"},"Use Next.js's solution only.")),(0,r.kt)("p",null,"Regardless of which option is chosen, the following changes are applicable to all options and should\nbe made. Begin be installing the\n",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/eslint#eslint-config"},(0,r.kt)("inlineCode",{parentName:"a"},"eslint-config-next"))," dependency in\nthe application's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)(l.Z,{dep:"eslint-config-next",package:"<project>",dev:!0,mdxType:"AddDepsTabs"}),(0,r.kt)("p",null,"Since the Next.js app is located within a subfolder, we'll need to tell the ESLint plugin where to\nlocate it. This can be achieved with a project-level ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/.eslintrc.js"',title:'"<project>/.eslintrc.js"'},"module.exports = {\n  extends: 'next', // or 'next/core-web-vitals'\n  settings: {\n    next: {\n      rootDir: __dirname,\n    },\n  },\n};\n")),(0,r.kt)("p",null,"With the basics now setup, choose the option that works best for you."),(0,r.kt)(o.Z,{groupId:"lint-type",defaultValue:"global",values:[{label:"Global lint",value:"global"},{label:"Next.js lint",value:"nextjs"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"global",mdxType:"TabItem"},(0,r.kt)("p",null,"We encourage using the global ",(0,r.kt)("inlineCode",{parentName:"p"},"lint")," task for consistency across all projects within the repository.\nWith this approach, the ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," command itself will be ran and the ",(0,r.kt)("inlineCode",{parentName:"p"},"next lint")," command will be\nignored, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-config-next")," rules will still be used."),(0,r.kt)("p",null,"Additionally, we suggest disabling the linter during the build process, but is not a requirement. As\na potential alternative, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"lint")," task as a dependency for the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," task."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/next.config.js"',title:'"<project>/next.config.js"'},"module.exports = {\n  eslint: {\n    ignoreDuringBuilds: true,\n  },\n};\n"))),(0,r.kt)(i.Z,{value:"nextjs",mdxType:"TabItem"},(0,r.kt)("p",null,"If you'd prefer to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"next lint")," command, add it as a task to the project's\n",(0,r.kt)("a",{parentName:"p",href:"../../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    lint:\n        command: 'next lint'\n        inputs:\n            - '@group(next)'\n")),(0,r.kt)("p",null,"Furthermore, if a global ",(0,r.kt)("inlineCode",{parentName:"p"},"lint")," task exists, be sure to exclude it from being inherited."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"workspace:\n  inheritedTasks:\n    exclude: ['lint']\n")))),(0,r.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,r.kt)("p",null,"Next.js also has\n",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/typescript"},"built-in support for TypeScript"),", but has\nsimilar caveats to the ",(0,r.kt)("a",{parentName:"p",href:"#eslint-integration"},"ESLint integration"),". TypeScript itself is a bit\ninvolved, so we suggest reading the official Next.js documentation before continuing."),(0,r.kt)("p",null,"At this point we'll assume that a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," has been created in the application, and\ntypechecking works. From here we suggest utilizing a ",(0,r.kt)("a",{parentName:"p",href:"./typescript"},"global ",(0,r.kt)("inlineCode",{parentName:"a"},"typecheck")," task")," for\nconsistency across all projects within the repository."),(0,r.kt)("p",null,"Additionally, we suggest disabling the typechecker during the build process, but is not a\nrequirement. As a potential alternative, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"typecheck")," task as a dependency for the ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"\ntask."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/next.config.js"',title:'"<project>/next.config.js"'},"module.exports = {\n  typescript: {\n    ignoreBuildErrors: true,\n  },\n};\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"root-level"},"Root-level"),(0,r.kt)("p",null,"We suggest ",(0,r.kt)("em",{parentName:"p"},"against")," root-level configuration, as Next.js should be installed per-project, and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"next")," command expects the configuration to live relative to the project root."),(0,r.kt)("h3",{id:"project-level"},"Project-level"),(0,r.kt)("p",null,"When creating a new Next.js project, a\n",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next.config.js/introduction"},(0,r.kt)("inlineCode",{parentName:"a"},"next.config.<js|mjs>"))," is\ncreated, and ",(0,r.kt)("em",{parentName:"p"},"must")," exist in the project root. This allows each project to configure Next.js for\ntheir needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/next.config.js"',title:'"<project>/next.config.js"'},"module.exports = {\n  compress: true,\n};\n")))}f.isMDXComponent=!0}}]);