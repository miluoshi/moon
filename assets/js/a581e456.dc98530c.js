"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2778],{9798:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7378),o=n(8944);const i="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),o=n(7378),i=n(8944),l=n(6457),r=n(784),s=n(9947),p=n(3457);const u="tabList_J5MA",c="tabItem_l0OV";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:g,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,r.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,j]=(0,o.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&k.some((t=>t.value===e))&&j(e)}const S=e=>{const t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==w&&(E(t),j(a),null!=g&&N(g,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},h)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},6642:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7378),o=n(4267),i=n(9798),l=n(3337);function r(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function p(e){let t=r(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=r(e,!0,!0),n+=s(e,!0)),a.createElement(l.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(i.Z,{value:"yarn"},a.createElement(o.Z,{language:"shell"},r(e,!1,!1))),a.createElement(i.Z,{value:"yarn1"},a.createElement(o.Z,{language:"shell"},t)),a.createElement(i.Z,{value:"npm"},a.createElement(o.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(i.Z,{value:"pnpm"},a.createElement(o.Z,{language:"shell"},n)))}},4496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(5773),o=(n(7378),n(5318)),i=n(6642);const l={title:"ESLint example",sidebar_label:"ESLint"},r=void 0,s={unversionedId:"guides/examples/eslint",id:"guides/examples/eslint",title:"ESLint example",description:"ESLint has been prototyped in our",source:"@site/docs/guides/examples/eslint.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/eslint",permalink:"/docs/guides/examples/eslint",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/eslint.mdx",tags:[],version:"current",frontMatter:{title:"ESLint example",sidebar_label:"ESLint"},sidebar:"guides",previous:{title:"Astro",permalink:"/docs/guides/examples/astro"},next:{title:"Jest",permalink:"/docs/guides/examples/jest"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"Sharing",id:"sharing",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to lint a single file or folder?",id:"how-to-lint-a-single-file-or-folder",level:3},{value:"Should we use <code>overrides</code>?",id:"should-we-use-overrides",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ESLint has been prototyped in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/examples/blob/master/.moon/project.yml#L59"},"examples repository"),",\ncheck it out!")),(0,o.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," into moon."),(0,o.kt)("p",null,"Begin by installing ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint")," and any plugins in your root. We suggest using the same version across\nthe entire repository."),(0,o.kt)(i.Z,{dep:"eslint eslint-config-moon",dev:!0,mdxType:"AddDepsTabs"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Since linting is a universal workflow, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"lint")," task to\n",(0,o.kt)("a",{parentName:"p",href:"../../config/global-project"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," with the following parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    lint:\n        command:\n            - 'eslint'\n            # Support other extensions\n            - '--ext'\n            - '.js,.jsx,.ts,.tsx'\n            # Always fix and run extra checks\n            - '--fix'\n            - '--report-unused-disable-directives'\n            # Dont fail if a project has nothing to lint\n            - '--no-error-on-unmatched-pattern'\n            # Do fail if we encounter a fatal error\n            - '--exit-on-fatal-error'\n            # Only 1 ignore file is supported, so use the root\n            - '--ignore-path'\n            - '@in(4)'\n            # Run in current dir\n            - '.'\n        inputs:\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Other config files\n            - '*.config.*'\n            # Project configs, any format, any depth\n            - '**/.eslintrc.*'\n            # Root configs, any format\n            - '/.eslintignore'\n            - '/.eslintrc.*'\n")),(0,o.kt)("p",null,"Projects can extend this task and provide additional parameters if need be, for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    lint:\n        args:\n            # Enable caching for this project\n            - '--cache'\n")),(0,o.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,o.kt)("p",null,"If you're using the ",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io"},(0,o.kt)("inlineCode",{parentName:"a"},"@typescript-eslint"))," packages, and want to\nenable type-safety based lint rules, we suggest something similar to the official\n",(0,o.kt)("a",{parentName:"p",href:"https://typescript-eslint.io/docs/linting/monorepo"},"monorepo configuration"),"."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.eslint.json")," in your repository root, extend your shared compiler options (we use\n",(0,o.kt)("a",{parentName:"p",href:"./typescript"},(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig.options.json")),"), and include all your project files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.eslint.json"',title:'"tsconfig.eslint.json"'},'{\n  "extends": "./tsconfig.options.json",\n  "compilerOptions": {\n    "emitDeclarationOnly": false,\n    "noEmit": true\n  },\n  "include": ["apps/**/*", "packages/**/*"]\n}\n')),(0,o.kt)("p",null,"Append the following inputs to your ",(0,o.kt)("inlineCode",{parentName:"p"},"lint")," task."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    lint:\n        # ...\n        inputs:\n            # TypeScript support\n            - 'types/**/*'\n            - 'tsconfig.json'\n            - '/tsconfig.eslint.json'\n            - '/tsconfig.options.json'\n")),(0,o.kt)("p",null,"And lastly, add ",(0,o.kt)("inlineCode",{parentName:"p"},"parserOptions")," to your ",(0,o.kt)("a",{parentName:"p",href:"#root-level"},"root-level config"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"root-level"},"Root-level"),(0,o.kt)("p",null,"The root-level ESLint config is ",(0,o.kt)("em",{parentName:"p"},"required"),", as ESLint traverses upwards from each file to find\nconfigurations, and this denotes the stopping point. It's also used to define rules for the ",(0,o.kt)("em",{parentName:"p"},"entire"),"\nrepository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  root: true, // Required!\n  extends: ['moon'],\n  rules: {\n    'no-console': 'error',\n  },\n\n  // TypeScript support\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    project: 'tsconfig.eslint.json',\n    tsconfigRootDir: __dirname,\n  },\n};\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintignore")," file must also be defined at the root, as\n",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file"},"only 1 ignore file"),"\ncan exist in a repository. We ensure this ignore file is used by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-path")," above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".eslintignore"',title:'".eslintignore"'},"node_modules/\n*.min.js\n*.map\n*.snap\n")),(0,o.kt)("h3",{id:"project-level"},"Project-level"),(0,o.kt)("p",null,"A project-level ESLint config can be utilized by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc.<json|js|cjs|yml>")," in the\nproject root. This is optional, but necessary when defining rules and ignore patterns unique to the\nproject."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/.eslintrc.js"',title:'"<project>/.eslintrc.js"'},"module.exports = {\n  // Patterns to ignore (alongside the root .eslintignore)\n  ignorePatterns: ['build', 'lib'],\n  // Project specific rules\n  rules: {\n    'no-console': 'off',\n  },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The\n",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files"},(0,o.kt)("inlineCode",{parentName:"a"},"extends")),"\nsetting should ",(0,o.kt)("strong",{parentName:"p"},"not")," extend the root-level config, as ESLint will automatically merge configs\nwhile traversing upwards!")),(0,o.kt)("h3",{id:"sharing"},"Sharing"),(0,o.kt)("p",null,"To share configuration across projects, you have 3 options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define settings in the ",(0,o.kt)("a",{parentName:"li",href:"#root-level"},"root-level config"),". This only applies to the parent\nrepository."),(0,o.kt)("li",{parentName:"ul"},"Create and publish an\n",(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint-config")),"\nor ",(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/docs/developer-guide/working-with-plugins"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint-plugin"))," npm package.\nThis can be used in any repository."),(0,o.kt)("li",{parentName:"ul"},"A combination of 1 and 2.")),(0,o.kt)("p",null,"For options 2 and 3, if you're utilizing package workspaces, create a local package with the\nfollowing content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="packages/eslint-config-company/index.js"',title:'"packages/eslint-config-company/index.js"'},"module.exports = {\n  extends: ['airbnb'],\n};\n")),(0,o.kt)("p",null,"Within your root-level ESLint config, you can extend this package to inherit the settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  extends: 'eslint-config-company',\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When using this approach, the package must be built and symlinked into ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," ",(0,o.kt)("em",{parentName:"p"},"before")," the\nlinter will run correctly. Take this into account when going down this path!")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-to-lint-a-single-file-or-folder"},"How to lint a single file or folder?"),(0,o.kt)("p",null,"Unfortunately, this isn't currently possible, as the ",(0,o.kt)("inlineCode",{parentName:"p"},"eslint")," binary itself requires a file or\nfolder path to operate on, and in the task above we pass ",(0,o.kt)("inlineCode",{parentName:"p"},".")," (current directory). If this was not\npassed, then nothing would be linted."),(0,o.kt)("p",null,"This has the unintended side-effect of not being able to filter down lintable targets by passing\narbitrary file paths. This is something we hope to resolve in the future."),(0,o.kt)("p",null,"To work around this limitation, you can create another lint task."),(0,o.kt)("h3",{id:"should-we-use-overrides"},"Should we use ",(0,o.kt)("inlineCode",{parentName:"h3"},"overrides"),"?"),(0,o.kt)("p",null,"Projects should define their own rules using an ESLint config in their project root. However, if you\nwant to avoid touching many ESLint configs (think migrations), then\n",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns"},"overrides in the root"),"\nare a viable option. Otherwise, we highly encourage project-level configs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n  // ...\n  overrides: [\n    // Only apply to apps \"foo\" and \"bar\", but not others\n    {\n      files: ['apps/foo/**/*', 'apps/bar/**/*'],\n      rules: {\n        'no-magic-numbers': 'off',\n      },\n    },\n  ],\n};\n")))}d.isMDXComponent=!0}}]);