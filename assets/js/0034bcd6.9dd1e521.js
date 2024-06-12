"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97424],{29178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(24246),s=n(71670),a=(n(36642),n(27457),n(32189));const l={title:"SvelteKit example",sidebar_label:"SvelteKit"},i=void 0,o={id:"guides/examples/sveltekit",title:"SvelteKit example",description:"SvelteKit is built on Svelte, a UI framework that",source:"@site/docs/guides/examples/sveltekit.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/sveltekit",permalink:"/docs/guides/examples/sveltekit",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/sveltekit.mdx",tags:[],version:"current",frontMatter:{title:"SvelteKit example",sidebar_label:"SvelteKit"},sidebar:"guides",previous:{title:"Storybook",permalink:"/docs/guides/examples/storybook"},next:{title:"TypeScript",permalink:"/docs/guides/examples/typescript"}},c={},u=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/sveltekit"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://kit.svelte.dev",children:"SvelteKit"})," is built on ",(0,r.jsx)(t.a,{href:"https://svelte.dev",children:"Svelte"}),", a UI framework that\nuses a compiler to let you write breathtakingly concise components that do minimal work in the\nbrowser, using languages you already know \u2014 HTML, CSS and JavaScript. It's a love letter to web\ndevelopment."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd apps && npm create svelte@latest <project>\n"})}),"\n",(0,r.jsx)(t.p,{children:"You will be prompted to choose between select templates, TypeScript, ESLint, Prettier, Playwright\nand Vitest among other options. moon supports and has guides for many of these tools."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["We highly suggest reading our documentation on ",(0,r.jsx)(t.a,{href:"./vite",children:"using Vite (and Vitest) with moon"}),",\n",(0,r.jsx)(t.a,{href:"./eslint",children:"using ESLint with moon"})," and ",(0,r.jsx)(t.a,{href:"./prettier",children:"using Prettier with moon"})," for a more holistic\nview."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(t.p,{children:["Since SvelteKit is per-project, the associated moon tasks should be defined in each project's\n",(0,r.jsx)(t.a,{href:"../../config/project",children:(0,r.jsx)(t.code,{children:"moon.yml"})})," file."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["We suggest inheriting SvelteKit tasks from the\n",(0,r.jsx)(t.a,{href:"https://github.com/moonrepo/moon-configs/tree/master/javascript/sveltekit",children:"official moon configuration preset"}),"."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"# Inherit tasks from the `sveltekit` preset\n# https://github.com/moonrepo/moon-configs\ntags: ['sveltekit']\n"})}),"\n",(0,r.jsx)(t.h3,{id:"eslint-integration",children:"ESLint integration"}),"\n",(0,r.jsxs)(t.p,{children:["SvelteKit provides an option to setup ESLint along with your project, with moon you can use a\n",(0,r.jsxs)(t.a,{href:"./eslint",children:["global ",(0,r.jsx)(t.code,{children:"lint"})," task"]}),". We encourage using the global ",(0,r.jsx)(t.code,{children:"lint"})," task for consistency across all\nprojects within the repository. With this approach, the ",(0,r.jsx)(t.code,{children:"eslint"})," command itself will be ran and the\n",(0,r.jsx)(t.code,{children:"svelte3"})," rules will still be used."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"tasks:\n  # Extends the top-level lint\n  lint:\n    args:\n      - '--ext'\n      - '.ts,.svelte'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Be sure to enable the Svelte parser and plugin in a project local ESLint configuration file."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title=".eslintrc.cjs"',children:"module.exports = {\n  plugins: ['svelte3'],\n  ignorePatterns: ['*.cjs'],\n  settings: {\n    'svelte3/typescript': () => require('typescript'),\n  },\n  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"typescript-integration",children:"TypeScript integration"}),"\n",(0,r.jsxs)(t.p,{children:["SvelteKit also has built-in support for TypeScript, but has similar caveats to the\n",(0,r.jsx)(t.a,{href:"#eslint-integration",children:"ESLint integration"}),". TypeScript itself is a bit involved, so we suggest\nreading the official ",(0,r.jsx)(t.a,{href:"https://kit.svelte.dev/docs/introduction",children:"SvelteKit documentation"})," before\ncontinuing."]}),"\n",(0,r.jsxs)(t.p,{children:["At this point we'll assume that a ",(0,r.jsx)(t.code,{children:"tsconfig.json"})," has been created in the application, and\ntypechecking works. From here we suggest utilizing a ",(0,r.jsxs)(t.a,{href:"./typescript",children:["global ",(0,r.jsx)(t.code,{children:"typecheck"})," task"]})," for\nconsistency across all projects within the repository. However, because Svelte isn't standard\nJavaScript, it requires the use of the ",(0,r.jsx)(t.code,{children:"svelte-check"})," command for type-checking."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The\n",(0,r.jsx)(t.a,{href:"https://github.com/moonrepo/moon-configs/tree/master/javascript/sveltekit",children:"moon configuration preset"}),"\nprovides the ",(0,r.jsx)(t.code,{children:"check"})," task below."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"workspace:\n  inheritedTasks:\n    exclude: ['typecheck']\n\ntasks:\n  check:\n    command: 'svelte-check --tsconfig ./tsconfig.json'\n    deps:\n      - 'typecheck-sync'\n    inputs:\n      - '@group(svelte)'\n      - 'tsconfig.json'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In case Svelte doesn't automatically create a ",(0,r.jsx)(t.code,{children:"tsconfig.json"}),", you can use the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="<project>/tsconfig.json"',children:'{\n  "extends": "./.svelte-kit/tsconfig.json",\n  "compilerOptions": {\n    "allowJs": true,\n    "checkJs": true,\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,\n    "resolveJsonModule": true,\n    "skipLibCheck": true,\n    "sourceMap": true,\n    "strict": true\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.h3,{id:"root-level",children:"Root-level"}),"\n",(0,r.jsxs)(t.p,{children:["We suggest ",(0,r.jsx)(t.em,{children:"against"})," root-level configuration, as SvelteKit should be installed per-project, and the\n",(0,r.jsx)(t.code,{children:"vite"})," command expects the configuration to live relative to the project root."]}),"\n",(0,r.jsx)(t.h3,{id:"project-level",children:"Project-level"}),"\n",(0,r.jsxs)(t.p,{children:["When creating a new SvelteKit project, a\n",(0,r.jsx)(t.a,{href:"https://kit.svelte.dev/docs/configuration",children:(0,r.jsx)(t.code,{children:"svelte.config.js"})})," is created, and ",(0,r.jsx)(t.em,{children:"must"})," exist in the\nproject root. This allows each project to configure SvelteKit for their needs."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="<project>/svelte.config.js"',children:"import adapter from '@sveltejs/adapter-auto';\nimport { vitePreprocess } from '@sveltejs/kit/vite';\n\n/** @type {import('@sveltejs/kit').Config} */\nconst config = {\n  // Consult https://kit.svelte.dev/docs/integrations#preprocessors\n  // for more information about preprocessors\n  preprocess: vitePreprocess(),\n\n  kit: {\n    adapter: adapter(),\n  },\n};\n\nexport default config;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},39798:(e,t,n)=>{n.d(t,{Z:()=>l});n(27378);var r=n(40624);const s={tabItem:"tabItem_wHwb"};var a=n(24246);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},33337:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(27378),s=n(40624),a=n(83457),l=n(35595),i=n(76457);const o={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var c=n(24246);function u(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),s=i[n].value;s!==r&&(d(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:h,onClick:p,...a,className:(0,s.Z)("tabs__item",o.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function d(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function p(e){const t=(0,l.Y)(e);return(0,c.jsxs)("div",{className:(0,s.Z)("tabs-container",o.tabList),children:[(0,c.jsx)(u,{...t,...e}),(0,c.jsx)(d,{...t,...e})]})}function h(e){const t=(0,i.Z)();return(0,c.jsx)(p,{...e,children:(0,l.h)(e.children)},String(t))}},35595:(e,t,n)=>{n.d(t,{Y:()=>h,h:()=>c});var r=n(27378),s=n(3620),a=n(9834),l=n(30654),i=n(70784),o=n(71819);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=u(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[h,m]=p({queryString:n,groupId:s}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,o.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=h??g;return d({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),v(e)}),[m,v,l]),tabValues:l}}},36642:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(52807),s=n(39798),a=n(33337),l=n(24246);function i(e,t,n){let r=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?r+="--dev ":e.peer&&(r+="--peer "),n&&t&&!e.package&&(r+="-W "),r+=e.dep,r}function o(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}function c(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function u(e){let t="bun install ";return e.dev?t+="--dev ":e.peer&&(t+="--peer "),t+=e.dep,t}function d(e){let t=i(e,!1,!0),n=c(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=i(e,!0,!0),n+=c(e,!0)),(0,l.jsxs)(a.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"Bun",value:"bun"}],children:[(0,l.jsx)(s.Z,{value:"yarn",children:(0,l.jsx)(r.default,{language:"shell",children:i(e,!1,!1)})}),(0,l.jsx)(s.Z,{value:"yarn1",children:(0,l.jsx)(r.default,{language:"shell",children:t})}),(0,l.jsx)(s.Z,{value:"npm",children:(0,l.jsx)(r.default,{language:"shell",children:o(e)})}),(0,l.jsx)(s.Z,{value:"pnpm",children:(0,l.jsx)(r.default,{language:"shell",children:n})}),(0,l.jsx)(s.Z,{value:"bun",children:(0,l.jsx)(r.default,{language:"shell",children:u(e)})})]})}},27457:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(52807),s=n(39798),a=n(33337),l=n(24246);function i(e,t,n){return`${e} create ${t} ${n.join(" ")}`.trim()}function o(e){let{dep:t,args:n=[]}=e;return(0,l.jsxs)(a.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(s.Z,{value:"yarn",children:(0,l.jsx)(r.default,{language:"shell",children:i("yarn",t,n)})}),(0,l.jsx)(s.Z,{value:"yarn1",children:(0,l.jsx)(r.default,{language:"shell",children:i("yarn",t,n)})}),(0,l.jsx)(s.Z,{value:"npm",children:(0,l.jsx)(r.default,{language:"shell",children:i("npm",t,n)})}),(0,l.jsx)(s.Z,{value:"pnpm",children:(0,l.jsx)(r.default,{language:"shell",children:i("pnpm",t,n)})})]})}},32189:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(83469),s=n(31792),a=n(24246);function l(e){let{to:t}=e;return(0,a.jsx)("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"},children:(0,a.jsx)(s.Z,{icon:r.dT$})})}},71670:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(27378);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);