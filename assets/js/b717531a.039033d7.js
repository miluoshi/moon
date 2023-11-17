"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80115],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(25773),i=(n(27378),n(35318));const o={slug:"moon-v1.12",title:"moon v1.12 - Task improvements: extending, interactive, and more",authors:["milesj"],tags:["tasks","inheritance"],image:"./img/moon/v1.12.png"},r=void 0,s={permalink:"/blog/moon-v1.12",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-08-21_moon-v1.12.mdx",source:"@site/blog/2023-08-21_moon-v1.12.mdx",title:"moon v1.12 - Task improvements: extending, interactive, and more",description:"In this release, we focused heavily on improving tasks, its configuration, and related systems.",date:"2023-08-21T00:00:00.000Z",formattedDate:"August 21, 2023",tags:[{label:"tasks",permalink:"/blog/tags/tasks"},{label:"inheritance",permalink:"/blog/tags/inheritance"}],readingTime:3.32,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.12",title:"moon v1.12 - Task improvements: extending, interactive, and more",authors:["milesj"],tags:["tasks","inheritance"],image:"./img/moon/v1.12.png"},prevItem:{title:"proto v0.15 - Install and uninstall globals",permalink:"/blog/proto-v0.15"},nextItem:{title:"proto v0.14 - Node.js and Rust now powered by WASM plugins",permalink:"/blog/proto-v0.14"}},l={image:n(86612).Z,authorsImageUrls:[void 0]},p=[{value:"Extending sibling or inherited tasks",id:"extending-sibling-or-inherited-tasks",level:2},{value:"Configure tasks as interactive",id:"configure-tasks-as-interactive",level:2},{value:"Tokens in enviroment variables",id:"tokens-in-enviroment-variables",level:2},{value:"Other changes",id:"other-changes",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this release, we focused heavily on improving tasks, its configuration, and related systems."),(0,i.kt)("h2",{id:"extending-sibling-or-inherited-tasks"},"Extending sibling or inherited tasks"),(0,i.kt)("p",null,"Three months ago, we posted an\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/issues/849"},"RFC on how to support task extending / task variants"),".\nOn paper this doesn't sound like a hard problem to solve, but internally it would of been an uphill\nbattle to implement. Thanks to previous releases from the past few months, and the rewrite of the\nproject graph, task builder, and more, this implementation was a breeze. To finalize the RFC, we\nwent with option 2, by adding a new ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," field to task configurations."),(0,i.kt)("p",null,"With this new addition, we can now rewrite this old configuration, which was needlessly\nrepetitive..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n  lint:\n    command: 'eslint .'\n    inputs:\n      - '@globs(sources)'\n      - '@globs(tests)'\n      - '*.js'\n      - '.eslintrc.js'\n      - 'tsconfig.json'\n      - '/.eslintignore'\n      - '/.eslintrc.js'\n      - '/tsconfig.eslint.json'\n      - '/tsconfig.options.json'\n\n  lint-fix:\n    command: 'eslint . --fix'\n    local: true\n    inputs:\n      - '@globs(sources)'\n      - '@globs(tests)'\n      - '*.js'\n      - '.eslintrc.js'\n      - 'tsconfig.json'\n      - '/.eslintignore'\n      - '/.eslintrc.js'\n      - '/tsconfig.eslint.json'\n      - '/tsconfig.options.json'\n")),(0,i.kt)("p",null,"Into the following configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n  lint:\n    command: 'eslint .'\n    inputs:\n      - '@globs(sources)'\n      - '@globs(tests)'\n      - '*.js'\n      - '.eslintrc.js'\n      - 'tsconfig.json'\n      - '/.eslintignore'\n      - '/.eslintrc.js'\n      - '/tsconfig.eslint.json'\n      - '/tsconfig.options.json'\n\n  lint-fix:\n    extends: 'lint'\n    args: '--fix'\n    local: true\n")),(0,i.kt)("p",null,"We're very happy with this solution, as it's far more readable, maintainable, and doesn't introduce\nyet another paradigm to learn. Our goal was to be as familiar as possible, while providing extensive\nfunctionality behind the scenes, which we believe to have achieved."),(0,i.kt)("p",null,"Some other interesting facts around task extending:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When extending a task, ",(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/task-inheritance#merge-strategies"},"merge strategies")," are\napplied in a similar fashion to inheritance."),(0,i.kt)("li",{parentName:"ul"},"Inherited tasks can be extended from by project-level tasks."),(0,i.kt)("li",{parentName:"ul"},"It's possible to create multiple extended chains.")),(0,i.kt)("h2",{id:"configure-tasks-as-interactive"},"Configure tasks as interactive"),(0,i.kt)("p",null,"Six months ago, we added support for ",(0,i.kt)("a",{parentName:"p",href:"./v0.24#interactive-tasks"},"interactive tasks in v0.24"),", but\nonly if certain conditions were met: if only 1 target is running, they are considered interactive,\nor if the ",(0,i.kt)("inlineCode",{parentName:"p"},"--interactive")," option was passed to ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands/run"},(0,i.kt)("inlineCode",{parentName:"a"},"moon run")),". However, we believe\nit nice to support interactive tasks through task configuration directly, but it required some\nthought into how this would work within the dependency graph and pipeline, as only 1 task can\ninteract with stdin at a time."),(0,i.kt)("p",null,"We solved this problem by reworking our dependency graph so that interactive tasks are isolated from\nother actions in the graph, and are not run in parallel with other actions. This will result in\nlonger dependency chains, but results in a working stdin solution."),(0,i.kt)("p",null,"To mark a task as interactive, enable the ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/project#interactive"},(0,i.kt)("inlineCode",{parentName:"a"},"options.interactive")),"\nsetting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n  init:\n    command: 'init-app'\n    options:\n      interactive: true\n")),(0,i.kt)("h2",{id:"tokens-in-enviroment-variables"},"Tokens in enviroment variables"),(0,i.kt)("p",null,"Up until now, ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/token"},"token functions and variables")," were only supported in task\ncommands, args, inputs, and outputs, but not environment variables... why? Honestly, there was no\nreal reason they weren't supported, it simply never crossed our mind! But thanks to requests from\nthe community, both token functions and variables are now supported in task\n",(0,i.kt)("a",{parentName:"p",href:"/docs/config/project#env-1"},(0,i.kt)("inlineCode",{parentName:"a"},"env")),"."),(0,i.kt)("p",null,"This is great for propagating moon values to other systems. For example, say you want to use moon\nproject names for Sentry, keeping a 1:1 mapping."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n  start:\n    command: 'run-server'\n    env:\n      SENTRY_PROJECT: '$project'\n")),(0,i.kt)("p",null,"If you're familiar with tokens, you may be asking yourself, \"How do token functions work since they\nexpand to a list of paths?\" That's a great question! When token functions are used in an environment\nvariable, like ",(0,i.kt)("inlineCode",{parentName:"p"},"@group(sources)"),", the list of paths will be joined with a comma (",(0,i.kt)("inlineCode",{parentName:"p"},","),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n  build:\n    # ...\n    env:\n      SRCS: '@group(sources)'\n")),(0,i.kt)("p",null,"Since the environment variable is simply a string, you could parse it with your language of choice\nto extract the list of paths."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const paths = process.env.SRCS.split(',');\n")),(0,i.kt)("h2",{id:"other-changes"},"Other changes"),(0,i.kt)("p",null,"View the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/v1.12.0"},"official release")," for a full list\nof changes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added git worktree support."),(0,i.kt)("li",{parentName:"ul"},"Updated task ",(0,i.kt)("inlineCode",{parentName:"li"},"outputs")," to support negated globs."),(0,i.kt)("li",{parentName:"ul"},"Will now log a warning to the console if a configuration file uses the ",(0,i.kt)("inlineCode",{parentName:"li"},".yaml")," extension.")))}c.isMDXComponent=!0},86612:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v1.12-3a89ebd0fa3a2732d0f38951967f4d19.png"}}]);