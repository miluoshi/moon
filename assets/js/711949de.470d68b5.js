"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7012],{5318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(t),d=o,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(5773),o=(t(7378),t(5318));const r={slug:"v0.13",title:"moon v0.13 - Hashing and toolchain improvements",authors:["milesj"],tags:["hasher","toolchain"]},i=void 0,s={permalink:"/blog/v0.13",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-01_v0.13.mdx",source:"@site/blog/2022-09-01_v0.13.mdx",title:"moon v0.13 - Hashing and toolchain improvements",description:"With this release, we've landed some improvements to our smart hashing, and paved the road for",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"hasher",permalink:"/blog/tags/hasher"},{label:"toolchain",permalink:"/blog/tags/toolchain"}],readingTime:2.995,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"v0.13",title:"moon v0.13 - Hashing and toolchain improvements",authors:["milesj"],tags:["hasher","toolchain"]},prevItem:{title:"moon v0.14 - Code generation and implicit dependencies",permalink:"/blog/v0.14"}},l={authorsImageUrls:[void 0]},p=[{value:"Node.js is now optional",id:"nodejs-is-now-optional",level:2},{value:"Improved hashing accuracy",id:"improved-hashing-accuracy",level:2},{value:"New <code>moon check</code> command",id:"new-moon-check-command",level:2},{value:"New <code>@moonrepo/types</code> package",id:"new-moonrepotypes-package",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we've landed some improvements to our smart hashing, and paved the road for\nadditional languagues and tooling."),(0,o.kt)("h2",{id:"nodejs-is-now-optional"},"Node.js is now optional"),(0,o.kt)("p",null,"Title may seem confusing at first, but don't worry, everything is fine! For some context, moon has\nbeen designed to be language agnostic as we plan to support more than JavaScript in the future.\nHowever, some aspects of the codebase were hard-coded for JavaScript and made the assumption that\nJavaScript will always be used, with one such aspect being the\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace#node"},(0,o.kt)("inlineCode",{parentName:"a"},"node"))," setting in\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),"."),(0,o.kt)("p",null,"We've reworked this setting to be optional, which allows a repository to opt out of JavaScript.\nRight now, this basically does nothing as we do not support other languages yet, but we felt it\nnecessary to report it anyways! A side-effect of this change is that actions in the runner have been\nrenamed, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"SetupToolchain")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"SetupNodeToolchain"),"."),(0,o.kt)("h2",{id:"improved-hashing-accuracy"},"Improved hashing accuracy"),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"../docs/concepts/cache#hashing"},"smart hashing layer")," is pretty powerful, but was not entirely\naccurate. Up until now, when hashing a Node.js project, we'd include the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," versions located within the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," as\nhash inputs. This was great, because if a dependency was explicitly upgraded in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),",\nit would invalidate the previous hashes as the version number changed."),(0,o.kt)("p",null,"However, what if the dependency was implicitly upgraded by another project, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\nwas not modified? These kind of transitive changes were currently ignored by moon, but no longer, as\nmoon will now resolve all ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," dependencies to the resolved version found in the root\nlockfile (",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn.lock"),", etc)!"),(0,o.kt)("p",null,"At moon, we believe in providing consumers with the ability to configure to their needs, and as\nsuch, have added a new ",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace#hasher"},(0,o.kt)("inlineCode",{parentName:"a"},"hasher"))," setting to\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),". This setting will allow you to choose between the\n2 hashing patterns above!"),(0,o.kt)("h2",{id:"new-moon-check-command"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"moon check")," command"),(0,o.kt)("p",null,"If you're like us, you're constantly testing, linting, typechecking, so on and so forth, a project\nwhile developing. This was rather cumbersome, as you either had to use separate run commands\n(",(0,o.kt)("inlineCode",{parentName:"p"},"moon run project:test"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"moon run project:lint"),", etc), or use the multi-run approach\n(",(0,o.kt)("inlineCode",{parentName:"p"},"moon run project:test project:lint"),"). Both approaches were not ideal for rapid development."),(0,o.kt)("p",null,"To simplify this process, we've added a new ",(0,o.kt)("a",{parentName:"p",href:"../docs/commands/check"},(0,o.kt)("inlineCode",{parentName:"a"},"moon check"))," command, that\nwill automatically run ",(0,o.kt)("em",{parentName:"p"},"all")," build and test tasks for a project (or many projects)! Local and non-CI\ntasks will ",(0,o.kt)("em",{parentName:"p"},"not")," be ran."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Check project at current working directory\n$ moon check\n\n# Check project by name\n$ moon check app\n\n# Check multiple projects by name\n$ moon check client server\n")),(0,o.kt)("h2",{id:"new-moonrepotypes-package"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"@moonrepo/types")," package"),(0,o.kt)("p",null,"We have many ideas for moon specific npm packages that we plan to release, but before we do that, we\nneed to ensure all of them are built with the correct interfaces. To solve this, we are shipping a\nnew package, ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@moonrepo/types"},"@moonrepo/types"),", that simply publishes\nTypeScript declarations. It contains everything from project and task shapes, configuration\nstructures, runner information, and more."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { ProjectConfig } from '@moonrepo/types';\n")),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.13.0"},"official release")," for a\nfull list of changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The runner will now fail with an error if a task has defined ",(0,o.kt)("inlineCode",{parentName:"li"},"outputs")," but an output was not\ncreated after the task is executed. This change was made so that artifacts are deterministic."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"actionRunner")," setting in ",(0,o.kt)("a",{parentName:"li",href:"../docs/config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml"))," was renamed to\n",(0,o.kt)("inlineCode",{parentName:"li"},"runner"),".")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Expect the following in the v0.14 release!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"moon generate")," command to generate new projects, files, scaffolding, and more from pre-defined\ntemplates."),(0,o.kt)("li",{parentName:"ul"},"Implicit dependency discovery. moon will now scan manifest files and determine project\nrelationships.")))}m.isMDXComponent=!0}}]);