"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[464],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(n),c=r,d=g["".concat(p,".").concat(c)]||g[c]||m[c]||a;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(25773),r=(n(27378),n(35318));const a={slug:"proto-v0.13",title:"proto v0.13 - Bun, Deno, and Go now powered by WASM plugins",authors:["milesj"],tags:["proto","wasm","plugin"]},l=void 0,i={permalink:"/blog/proto-v0.13",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-07-21_proto-v0.13.mdx",source:"@site/blog/2023-07-21_proto-v0.13.mdx",title:"proto v0.13 - Bun, Deno, and Go now powered by WASM plugins",description:"With this release, we're embracing WASM even further.",date:"2023-07-21T00:00:00.000Z",formattedDate:"July 21, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"wasm",permalink:"/blog/tags/wasm"},{label:"plugin",permalink:"/blog/tags/plugin"}],readingTime:2.195,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.13",title:"proto v0.13 - Bun, Deno, and Go now powered by WASM plugins",authors:["milesj"],tags:["proto","wasm","plugin"]},prevItem:{title:"moon v1.11 - Next-generation project graph",permalink:"/blog/moon-v1.11"},nextItem:{title:"moon v1.10 - Mid-year quality of life improvements",permalink:"/blog/moon-v1.10"}},p={authorsImageUrls:[void 0]},s=[{value:"Core migration to WASM",id:"core-migration-to-wasm",level:2},{value:"New <code>github:</code> plugin configuration",id:"new-github-plugin-configuration",level:2},{value:"New <code>proto plugins</code> commands",id:"new-proto-plugins-commands",level:2},{value:"Other changes",id:"other-changes",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this release, we're embracing WASM even further."),(0,r.kt)("h2",{id:"core-migration-to-wasm"},"Core migration to WASM"),(0,r.kt)("p",null,'Now that WASM plugin support is up and running, we\'ve hit a non-ideal situation where we have\nmultiple competing implementations for "tools" in proto. We currently have 3 different approaches:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tools implemented in Rust and built into proto's core."),(0,r.kt)("li",{parentName:"ul"},"TOML based plugins, with a simple Rust based wrapper."),(0,r.kt)("li",{parentName:"ul"},"WASM based plugins.")),(0,r.kt)("p",null,"This is far too many implementations to support, and makes it extremely difficult to add new\nfeatures for tools, as it affects all 3. To remedy this situation, we've decided to migrate all core\ntools to WASM plugins, and remove the Rust based implementations. The core of proto and its CLI will\nstill be Rust, but will be slowly migrated into a truly pluggable architecture."),(0,r.kt)("p",null,"To test drive and experiment with this solution, we've migrated\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/bun-plugin"},"Bun"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/deno-plugin"},"Deno"),", and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/go-plugin"},"Go")," into WASM plugins, and starting with this release, they\nare purely powered by WASM and have been removed entirely from the Rust implementation."),(0,r.kt)("p",null,"In the next release, we hope to migrate Node.js and Rust as well. And in a future release, the TOML\nplugins will be compiled into\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format"},(0,r.kt)("inlineCode",{parentName:"a"},".wat")," files"),"\nand loaded as WASM plugins. From here, we will have a single tool implementation, and can implement\nsome really exciting features!"),(0,r.kt)("h2",{id:"new-github-plugin-configuration"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"github:")," plugin configuration"),(0,r.kt)("p",null,"Alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"source:")," configuration strategy, plugins can now be configured with the ",(0,r.kt)("inlineCode",{parentName:"p"},"github:"),"\nstrategy to locate WASM files from GitHub releases. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"bun_plugin.wasm")," file will be\ndownloaded from our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/bun-plugin/releases"},(0,r.kt)("inlineCode",{parentName:"a"},"bun-plugin"),"'s latest release"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/proto/plugins#github"},"Learn more about this new locator scope!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'[plugins]\nbun = "github:moonrepo/bun-plugin"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Bun support is built into proto, there is merely an example!")),(0,r.kt)("h2",{id:"new-proto-plugins-commands"},"New ",(0,r.kt)("inlineCode",{parentName:"h2"},"proto plugins")," commands"),(0,r.kt)("p",null,"With the advent of plugins, we thought it would be nice to know which plugins are actually\nconfigured and in use, without having to manually search config files across the file system, and as\nsuch, have added a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/proto/commands/plugins"},(0,r.kt)("inlineCode",{parentName:"a"},"proto plugins"))," command."),(0,r.kt)("p",null,"This command is simple. It will list all plugins that are currently configured for the current\nproject, by loading all ",(0,r.kt)("inlineCode",{parentName:"p"},".prototools")," files up the tree, and loading the user\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/config.toml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto plugins\nbun - Bun\n  GitHub: moonrepo/bun-plugin\n  Tag: latest\n\ndeno - Deno\n  GitHub: moonrepo/deno-plugin\n  Tag: latest\n\ngo - Go\n  GitHub: moonrepo/go-plugin\n  Tag: latest\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/proto/commands/plugins"},"Learn more about this new command!")),(0,r.kt)("h2",{id:"other-changes"},"Other changes"),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/proto/releases/tag/v0.13.0"},"official release")," for a full list\nof changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added documentation for writing ",(0,r.kt)("a",{parentName:"li",href:"/docs/proto/wasm-plugin#unit-tests"},"unit tests for WASM plugins"),"."),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("inlineCode",{parentName:"li"},"proto clean")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"proto use")," to load and merge all ",(0,r.kt)("inlineCode",{parentName:"li"},".prototools")," from the current\ndirectory and upwards."),(0,r.kt)("li",{parentName:"ul"},"Many WASM API improvements.")))}m.isMDXComponent=!0}}]);