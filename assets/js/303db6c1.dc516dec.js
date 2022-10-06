"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6065],{9798:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7378),l=a(8944);const o="tabItem_wHwb";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:a},t)}},3337:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(5773),l=a(7378),o=a(8944),i=a(6457),r=a(784),s=a(9947),p=a(3457);const c="tabList_J5MA",u="tabItem_l0OV";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:m,groupId:k,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,r.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[j,w]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=k){const e=y[k];null!=e&&e!==j&&f.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==j&&(E(t),w(n),null!=k&&N(k,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":j===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},6642:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7378),l=a(4267),o=a(9798),i=a(3337);function r(e,t,a){let n=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),a&&t&&!e.package&&(n+="-W "),n+=e.dep,n}function s(e,t){let a="pnpm add ";return e.dev?a+="--save-dev ":e.peer&&(a+="--save-peer "),e.package?a+=`--filter ${e.package} `:t&&(a+="-w "),a+=e.dep,a}function p(e){let t=r(e,!1,!0),a=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",a+="\n\n# If using workspaces\n",t+=r(e,!0,!0),a+=s(e,!0)),n.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},n.createElement(o.Z,{value:"yarn"},n.createElement(l.Z,{language:"shell"},r(e,!1,!1))),n.createElement(o.Z,{value:"yarn1"},n.createElement(l.Z,{language:"shell"},t)),n.createElement(o.Z,{value:"npm"},n.createElement(l.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),n.createElement(o.Z,{value:"pnpm"},n.createElement(l.Z,{language:"shell"},a)))}},5453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(5773),l=(a(7378),a(5318)),o=a(3337),i=a(9798),r=a(6642);const s={title:"Packemon example",sidebar_label:"Packemon"},p=void 0,c={unversionedId:"guides/examples/packemon",id:"guides/examples/packemon",title:"Packemon example",description:"Packemon has been prototyped in our",source:"@site/docs/guides/examples/packemon.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/packemon",permalink:"/docs/guides/examples/packemon",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/packemon.mdx",tags:[],version:"current",frontMatter:{title:"Packemon example",sidebar_label:"Packemon"},sidebar:"guides",previous:{title:"Next.js",permalink:"/docs/guides/examples/next"},next:{title:"Prettier",permalink:"/docs/guides/examples/prettier"}},u={},d=[{value:"Setup",id:"setup",level:2},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Build targets",id:"build-targets",level:3}],m={toc:d};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Packemon has been prototyped in our\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/examples/blob/master/.moon/project.yml#L22"},"examples repository"),",\ncheck it out!")),(0,l.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,l.kt)("a",{parentName:"p",href:"https://packemon.dev/"},"Packemon")," into moon. Packemon\nis a tool for properly building npm packages for distribution, it does this by providing the\nfollowing functionality:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compiles source code to popular formats: CJS, MJS, ESM, UMD, etc."),(0,l.kt)("li",{parentName:"ul"},"Validates the ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," for incorrect fields or values."),(0,l.kt)("li",{parentName:"ul"},"Generates ",(0,l.kt)("inlineCode",{parentName:"li"},"exports")," mappings for ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," based on the define configuration."),(0,l.kt)("li",{parentName:"ul"},"And many more ",(0,l.kt)("a",{parentName:"li",href:"https://packemon.dev/docs/features"},"optimizations and features"),"!")),(0,l.kt)("p",null,"Begin by installing ",(0,l.kt)("inlineCode",{parentName:"p"},"packemon")," in your root. We suggest using the same version across the entire\nrepository."),(0,l.kt)(r.Z,{dep:"packemon",dev:!0,mdxType:"AddDepsTabs"}),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Package building does not apply to every project, only packages, so where you place the build task\nis up to you. The following patterns are suggested:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"buildPackage")," task in ",(0,l.kt)("a",{parentName:"li",href:"../../config/global-project"},(0,l.kt)("inlineCode",{parentName:"a"},".moon/project.yml")),", which can be\ninherited by package based projects."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"build")," task in each ",(0,l.kt)("a",{parentName:"li",href:"../../config/project"},(0,l.kt)("inlineCode",{parentName:"a"},"moon.yml")),".")),(0,l.kt)(o.Z,{groupId:"config-type",defaultValue:"global",values:[{label:"Globally inherited",value:"global"},{label:"Per project",value:"local"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"global",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"buildPackage:\n    command:\n        - 'packemon'\n        - 'pack'\n        # Add `engines` field to package\n        - '--addEngines'\n        # Add `exports` field to package\n        - '--addExports'\n        # Generate TypeScript declarations\n        - '--declaration'\n        - '--declarationConfig'\n        - 'tsconfig.build.json'\n    inputs:\n        # Source files only\n        - 'src/**/*'\n        - 'package.json'\n        # A build specific tsconfig\n        - 'tsconfig.build.json'\n        - '/tsconfig.options.json'\n    outputs:\n        # Matches `compilerOptions.outDir`\n        - 'dts'\n    env:\n        NODE_ENV: 'production'\n")),(0,l.kt)("p",null,"With this being defined globally, all package-based projects can inherit this task and rename it as\nfollows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<package>/moon.yml"',title:'"<package>/moon.yml"'},"# Rename the `buildPackage` task to `build` for this project\nworkspace:\n    inheritedTasks:\n        rename:\n            buildPackage: 'build'\n\n# Define additional compiled files unique to this project\ntasks:\n    build:\n        outputs:\n            - 'cjs'\n")),(0,l.kt)("p",null,"However, for other project types like applications, this task will need to be ",(0,l.kt)("em",{parentName:"p"},"excluded"),", otherwise\nit will run and fail in CI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<app>/moon.yml"',title:'"<app>/moon.yml"'},"# Exclude the `buildPackage` task for this project\nworkspace:\n    inheritedTasks:\n        exclude: ['buildPackage']\n"))),(0,l.kt)(i.Z,{value:"local",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<package>/moon.yml"',title:'"<package>/moon.yml"'},"build:\n    command:\n        - 'packemon'\n        - 'pack'\n        # Add `engines` field to package\n        - '--addEngines'\n        # Add `exports` field to package\n        - '--addExports'\n        # Generate TypeScript declarations\n        - '--declaration'\n        - '--declarationConfig'\n        - 'tsconfig.build.json'\n    inputs:\n        # Source files only\n        - 'src/**/*'\n        - 'package.json'\n        # A build specific tsconfig\n        - 'tsconfig.build.json'\n        - '/tsconfig.options.json'\n    outputs:\n        # Compiled files: lib, esm, cjs, mjs, etc\n        - 'lib'\n        # Matches `compilerOptions.outDir`\n        - 'dts'\n    env:\n        NODE_ENV: 'production'\n")))),(0,l.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,l.kt)("p",null,"Packemon has built-in support for TypeScript, but to ",(0,l.kt)("em",{parentName:"p"},"not")," conflict with a\n",(0,l.kt)("a",{parentName:"p",href:"./typescript"},"typecheck task"),", a separate ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file is required, which we named\n",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.build.json"),"."),(0,l.kt)("p",null,"This config is necessary to ",(0,l.kt)("em",{parentName:"p"},"only")," compile source files, and to not include unwanted files in the\ndeclaration output directory (",(0,l.kt)("inlineCode",{parentName:"p"},"dts"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.build.json"',title:'"tsconfig.build.json"'},'{\n  "extends": "../../tsconfig.options.json",\n  "compilerOptions": {\n    "outDir": "dts",\n    "rootDir": "src"\n  },\n  "include": ["src/**/*"],\n  "references": []\n}\n')),(0,l.kt)("h3",{id:"build-targets"},"Build targets"),(0,l.kt)("p",null,"To configure the target platform(s) and format(s), you must define a\n",(0,l.kt)("a",{parentName:"p",href:"https://packemon.dev/docs/config"},(0,l.kt)("inlineCode",{parentName:"a"},"packemon")," block")," in the project's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". The chosen\nformats must also be listed as ",(0,l.kt)("inlineCode",{parentName:"p"},"outputs")," in the task."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "package",\n  // ...\n  "packemon": {\n    "format": "esm",\n    "platform": "browser"\n  }\n}\n')))}k.isMDXComponent=!0}}]);