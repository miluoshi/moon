"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5334],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7378),o=n(8944);const a="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(5773),o=n(7378),a=n(8944),i=n(6457),l=n(784),s=n(9947),p=n(3457);const c="tabList_J5MA",u="tabItem_l0OV";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,l.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[j,N]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==j&&v.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==j&&(O(t),N(r),null!=h&&w(h,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:x,onClick:x},i,{className:(0,a.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":j===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function d(e){const t=(0,i.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},8109:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7378);function o(e){let{src:t,width:n="90%",alt:o="",title:a}=e;return r.createElement("div",{style:{paddingBottom:"1rem",paddingTop:"1rem",textAlign:"center"}},r.createElement("img",{src:t.default,width:n,alt:o,title:a}))}},6963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(5773),o=(n(7378),n(5318));n(3337),n(9798),n(8109);const a={slug:"v0.16",title:"v0.16 - Per-project tool versions and TypeScript impovements",authors:["milesj"],tags:["toolchain","runner","generator","typescript","node"],image:"./img/v0.16.png"},i=void 0,l={permalink:"/blog/v0.16",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-06_v0.16.mdx",source:"@site/blog/2022-10-06_v0.16.mdx",title:"v0.16 - Per-project tool versions and TypeScript impovements",description:"With this release, we've landed a long standing request of supporting project-level overrides for",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"toolchain",permalink:"/blog/tags/toolchain"},{label:"runner",permalink:"/blog/tags/runner"},{label:"generator",permalink:"/blog/tags/generator"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"node",permalink:"/blog/tags/node"}],readingTime:3.325,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.16",title:"v0.16 - Per-project tool versions and TypeScript impovements",authors:["milesj"],tags:["toolchain","runner","generator","typescript","node"],image:"./img/v0.16.png"},nextItem:{title:"v0.15 - Enhanced Docker support and 1,000 stars!",permalink:"/blog/v0.15"}},s={image:n(9050).Z,authorsImageUrls:[void 0]},p=[{value:"Per-project tool version overrides",id:"per-project-tool-version-overrides",level:2},{value:"Per-project dependency installs",id:"per-project-dependency-installs",level:2},{value:"TypeScript improvements",id:"typescript-improvements",level:2},{value:"Routing <code>outDir</code> to the cache",id:"routing-outdir-to-the-cache",level:3},{value:"Mapping project references as <code>paths</code>",id:"mapping-project-references-as-paths",level:3},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we've landed a long standing request of supporting project-level overrides for\ntools configured in the workspace, as well as some quality of life improvements for TypeScript."),(0,o.kt)("h2",{id:"per-project-tool-version-overrides"},"Per-project tool version overrides"),(0,o.kt)("p",null,"Since moons inception, our ",(0,o.kt)("a",{parentName:"p",href:"../docs/concepts/toolchain"},"toolchain")," has only supported a single\nversion of a tool (Node.js), as we wanted to embrace the single version policy and encourage all\nconsumers to keep their tooling version consistent across all projects for reliability. While this\nworks flawlessly, it's not entirely realistic, as many companies have legacy projects that are stuck\non older versions for whatever reason, and integrating them into moon was rather difficult."),(0,o.kt)("p",null,"Well no more! We've refactored our toolchain to support tool overrides on a project-by-project\nbasis. Since we only support Node.js at the moment, this can be achieved with the new\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/project#node"},(0,o.kt)("inlineCode",{parentName:"a"},"workspace.node.version"))," setting in\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,o.kt)("p",null,"For example, if your workspace Node.js version is configured as v18."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"node:\n  version: '18.0.0'\n")),(0,o.kt)("p",null,"You can now override this version at the project-level. Let's go with v14."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"workspace:\n  node:\n    version: '14.0.0'\n")),(0,o.kt)("p",null,"When running a task from a project with overrides, the toolchain will download, install, and\nconfigure the new version behind the scenes. This new version will then be used to install\ndependencies and execute the tasks commands."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Although we now support overriding the tool version, the workspace configured package manager\n(",(0,o.kt)("inlineCode",{parentName:"p"},"node.packageManager"),") and associated version cannot be overridden. This is unlikely to change.")),(0,o.kt)("h2",{id:"per-project-dependency-installs"},"Per-project dependency installs"),(0,o.kt)("p",null,"Because of the toolchain refactor above, we now support per-project dependency installs as a welcome\nside-effect. This is a necessary step in supporting new languages, especially for those that don't\ninstall dependencies in the workspace for all projects, and must install them per project."),(0,o.kt)("p",null,"This also means that moon now supports non-",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," workspaces! If your repository ",(0,o.kt)("em",{parentName:"p"},"is not"),"\nusing npm/pnpm/yarn workspaces, or a project ",(0,o.kt)("em",{parentName:"p"},"is not")," listed within the workspaces glob list,\ndependencies will be installed within the project."),(0,o.kt)("h2",{id:"typescript-improvements"},"TypeScript improvements"),(0,o.kt)("h3",{id:"routing-outdir-to-the-cache"},"Routing ",(0,o.kt)("inlineCode",{parentName:"h3"},"outDir")," to the cache"),(0,o.kt)("p",null,"A requirement for using project references is that each project must compile declarations (",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts"),")\nso that consumers/dependees can resolve type information. While this makes sense, it becomes rather\nunfortunate as each project folder is now littered with the declaration outputs, which are typically\ngitignored."),(0,o.kt)("p",null,"To improve this experience, we're introducing a new setting\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace#routeoutdirtocache"},(0,o.kt)("inlineCode",{parentName:"a"},"typescript.routeOutDirToCache")),", that will update the\n",(0,o.kt)("inlineCode",{parentName:"p"},"outDir")," compiler option of ",(0,o.kt)("em",{parentName:"p"},"all")," projects to route to moon's cache directory (which should already\nbe gitignored). This will standardize the use of project references for the entire repository."),(0,o.kt)("p",null,'For example, a project at "packages/components" will route to the following output directory:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<project>/tsconfig.json"',title:'"<project>/tsconfig.json"'},'{\n  // ...\n  "compilerOptions": {\n    // ...\n    "outDir": "../../.moon/cache/types/packages/components"\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you require declarations to live within the project, for example an npm package that ships\ntypes, you should introduce an additional configuration to handle this, like\n",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.build.json"),".")),(0,o.kt)("h3",{id:"mapping-project-references-as-paths"},"Mapping project references as ",(0,o.kt)("inlineCode",{parentName:"h3"},"paths")),(0,o.kt)("p",null,"moon automatically keeps TypeScript project references in sync with the\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace#syncprojectreferences"},(0,o.kt)("inlineCode",{parentName:"a"},"typescript.syncProjectReferences"))," setting, which\nis great, but we can take it further. With the new\n",(0,o.kt)("a",{parentName:"p",href:"../docs/config/workspace#syncprojectreferencestopaths"},(0,o.kt)("inlineCode",{parentName:"a"},"typescript.syncProjectReferencesToPaths")),"\nsetting, project references (either synced or explicitly defined) will ",(0,o.kt)("em",{parentName:"p"},"also")," be mapped to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"paths")," compiler option, automating the list of import aliases."),(0,o.kt)("p",null,"For example, if a reference has the package name ",(0,o.kt)("inlineCode",{parentName:"p"},"@brand/components"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"paths")," will be mapped\nwith:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<project>/tsconfig.json"',title:'"<project>/tsconfig.json"'},'{\n  // ...\n  "compilerOptions": {\n    // ...\n    "paths": {\n      "@brand/components": ["../shared/components/src/index.ts"],\n      "@brand/components/*": ["../shared/components/src/*"]\n    }\n  },\n  "references": [\n    {\n      "path": "../shared/components"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.16.0"},"official release")," for a\nfull list of changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Template files can now be suffixed with ",(0,o.kt)("inlineCode",{parentName:"li"},".tera")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".twig")," for\n",(0,o.kt)("a",{parentName:"li",href:"../docs/guides/codegen#file-extensions"},"syntax highlighting"),"."),(0,o.kt)("li",{parentName:"ul"},"We now display more commands and information when running tasks."),(0,o.kt)("li",{parentName:"ul"},"Declare implicit task dependencies with a new\n",(0,o.kt)("a",{parentName:"li",href:"../docs/config/workspace.mdx#implicitdeps"},(0,o.kt)("inlineCode",{parentName:"a"},"runner.implicitDeps"))," setting.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Expect the following in the v0.17 release!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Webhooks for important pipeline events (for real this time)!"),(0,o.kt)("li",{parentName:"ul"},"YAML anchors and references in config files."),(0,o.kt)("li",{parentName:"ul"},"And ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/moonrepo/moon/issues/356"},"many more"),"...")))}u.isMDXComponent=!0},9050:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/v0.16-59818abc1e7c124baa536d87936ee00b.png"}}]);