"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5537],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(27378),a=n(38944);const o="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(25773),a=n(27378),o=n(38944),l=n(83457),i=n(35595),s=n(76457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:m},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,i.Y)(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement(p,(0,r.Z)({},e,t)),a.createElement(d,(0,r.Z)({},e,t)))}function f(e){const t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>d});var r=n(27378),a=n(35331),o=n(30654),l=n(70784),i=n(71819);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,m]=p({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=d??f;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),g(e)}),[m,g,o]),tabValues:o}}},36642:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(27378),a=n(54267),o=n(39798),l=n(33337);function i(e,t,n){let r=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?r+="--dev ":e.peer&&(r+="--peer "),n&&t&&!e.package&&(r+="-W "),r+=e.dep,r}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function u(e){let t=i(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=i(e,!0,!0),n+=s(e,!0)),r.createElement(l.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},r.createElement(o.Z,{value:"yarn"},r.createElement(a.Z,{language:"shell"},i(e,!1,!1))),r.createElement(o.Z,{value:"yarn1"},r.createElement(a.Z,{language:"shell"},t)),r.createElement(o.Z,{value:"npm"},r.createElement(a.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),r.createElement(o.Z,{value:"pnpm"},r.createElement(a.Z,{language:"shell"},n)))}},32189:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(27378),a=n(83469),o=n(31792);function l(e){let{to:t}=e;return r.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},r.createElement(o.Z,{icon:a.dT$}))}},8401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(25773),a=(n(27378),n(35318)),o=(n(36642),n(32189));const l={title:"Vue example",sidebar_label:"Vue"},i=void 0,s={unversionedId:"guides/examples/vue",id:"guides/examples/vue",title:"Vue example",description:"Vue is an application or library concern, and not a build system one, since the bundling of Vue is",source:"@site/docs/guides/examples/vue.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/vue",permalink:"/docs/guides/examples/vue",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/vue.mdx",tags:[],version:"current",frontMatter:{title:"Vue example",sidebar_label:"Vue"},sidebar:"guides",previous:{title:"Vite & Vitest",permalink:"/docs/guides/examples/vite"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/vue-vite-app",mdxType:"HeadingApiLink"}),(0,a.kt)("p",null,"Vue is an application or library concern, and not a build system one, since the bundling of Vue is\nabstracted away through other tools. Because of this, moon has no guidelines around utilizing Vue\ndirectly. You can use Vue however you wish!"),(0,a.kt)("p",null,"However, with that being said, Vue is typically coupled with ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),". To\nscaffold a new Vue project with Vite, run the following command in a project root."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init vue@latest\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We highly suggest reading our documentation on ",(0,a.kt)("a",{parentName:"p",href:"./vite"},"using Vite (and Vitest) with moon")," for a\nmore holistic view.")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"This section assumes Vue is being used with Vite."),(0,a.kt)("h3",{id:"eslint-integration"},"ESLint integration"),(0,a.kt)("p",null,"When linting with ",(0,a.kt)("a",{parentName:"p",href:"./eslint"},"ESLint")," and the\n",(0,a.kt)("a",{parentName:"p",href:"https://eslint.vuejs.org/user-guide/#installation"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint-plugin-vue"))," library, you'll need to\ninclude the ",(0,a.kt)("inlineCode",{parentName:"p"},".vue")," extension within the ",(0,a.kt)("inlineCode",{parentName:"p"},"lint")," task. This can be done by extending the top-level\ntask within the project (below), or by adding it to the top-level entirely."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n  lint:\n    args:\n      - '--ext'\n      - '.js,.ts,.vue'\n")),(0,a.kt)("p",null,"Furthermore, when using TypeScript within ESLint, we need to make a few additional changes to the\n",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," config found in the root (if the entire repo is Vue), or within the project (if only\nthe project is Vue)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  parser: 'vue-eslint-parser',\n  parserOptions: {\n    extraFileExtensions: ['.vue'],\n    parser: '@typescript-eslint/parser',\n    project: 'tsconfig.json', // Or another config\n    tsconfigRootDir: __dirname,\n  },\n};\n")),(0,a.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,a.kt)("p",null,"Vue does not use ",(0,a.kt)("a",{parentName:"p",href:"./typescript"},"TypeScript"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," binary directly, but instead uses\n",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/typescript/overview.html"},(0,a.kt)("inlineCode",{parentName:"a"},"vue-tsc")),", which is a thin wrapper around ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),"\nto support Vue components. Because of this, we should update the ",(0,a.kt)("inlineCode",{parentName:"p"},"typecheck")," task in the project to\nutilize this command instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"workspace:\n    inheritedTasks:\n        exclude: ['typecheck']\n\ntasks:\n    typecheck:\n        command:\n            - 'vue-tsc'\n            - '--noEmit'\n            # Always use pretty output\n            - '--pretty'\n        inputs:\n            - 'env.d.ts'\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Project configs\n            - 'tsconfig.json'\n            - 'tsconfig.*.json'\n            # Root configs (extended from only)\n            - '/tsconfig.options.json'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Be sure ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," compiler options are based on\n",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/guide/typescript/overview.html#configuring-tsconfig-json"},(0,a.kt)("inlineCode",{parentName:"a"},"@vue/tsconfig")),".")))}d.isMDXComponent=!0}}]);