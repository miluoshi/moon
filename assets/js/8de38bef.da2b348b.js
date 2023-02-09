"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4197],{5318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9798:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7378),o=t(8944);const i="tabItem_wHwb";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:t},n)}},3337:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(5773),o=t(7378),i=t(8944),r=t(3457),l=t(5595),s=t(6457);const p="tabList_J5MA",c="tabItem_l0OV";function d(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=d.indexOf(n),a=p[t].value;a!==l&&(m(n),s(a))},k=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}null==(n=t)||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>d.push(e),onKeyDown:k,onClick:u},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":l===n})}),t??n)})))}function m(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function u(e){const n=(0,l.Y)(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement(d,(0,a.Z)({},e,n)),o.createElement(m,(0,a.Z)({},e,n)))}function k(e){const n=(0,s.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},5595:(e,n,t)=>{t.d(n,{Y:()=>m});var a=t(7378),o=t(5331),i=t(654),r=t(784),l=t(1819);function s(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??s(t);return function(e){const n=(0,r.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=p(e),[r,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[m,u]=d({queryString:t,groupId:o}),[k,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,l.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),h=(()=>{const e=m??k;return c({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,i]),tabValues:i}}},2189:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7378),o=t(3469),i=t(1792);function r(e){let{to:n}=e;return a.createElement("a",{href:n,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(i.Z,{icon:o.dT$}))}},9785:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7378),o=t(9619);function i(e){let{text:n="Required"}=e;return a.createElement(o.Z,{text:n,variant:"failure",className:"ml-2"})}},9022:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7378),o=t(9619);function i(e){let{header:n,updated:t,version:i}=e;return a.createElement(o.Z,{text:`v${i}`,variant:t?"success":"info",className:n?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7378),o=t(8944),i=t(1792);const r={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:n,icon:t,text:l,variant:s}=e;return a.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?r[s]:"bg-gray-100 text-gray-800",n)},t&&a.createElement(i.Z,{icon:t,className:"mr-1"}),l)}},4685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=t(5773),o=(t(7378),t(5318)),i=(t(3337),t(9798),t(2189)),r=(t(9785),t(9022));const l={title:".moon/toolchain.yml",toc_max_heading_level:6},s=void 0,p={unversionedId:"config/toolchain",id:"config/toolchain",title:".moon/toolchain.yml",description:"The .moon/toolchain.yml file configures the toolchain and the workspace development environment.",source:"@site/docs/config/toolchain.mdx",sourceDirName:"config",slug:"/config/toolchain",permalink:"/docs/config/toolchain",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/toolchain.mdx",tags:[],version:"current",frontMatter:{title:".moon/toolchain.yml",toc_max_heading_level:6},sidebar:"docs",previous:{title:".moon/workspace.yml",permalink:"/docs/config/workspace"},next:{title:".moon/tasks...",permalink:"/docs/config/tasks"}},c={},d=[{value:"<code>extends</code>",id:"extends",level:2},{value:"<code>node</code>",id:"node",level:2},{value:"<code>version</code>",id:"version",level:3},{value:"<code>packageManager</code>",id:"packagemanager",level:3},{value:"<code>npm</code>, <code>pnpm</code>, <code>yarn</code>",id:"npm-pnpm-yarn",level:3},{value:"<code>version</code>",id:"version-1",level:4},{value:"<code>yarn</code>",id:"yarn",level:3},{value:"<code>plugins</code>",id:"plugins",level:4},{value:"<code>addEnginesConstraint</code>",id:"addenginesconstraint",level:3},{value:'<code>aliasPackageNames</code><VersionLabel version="0.10" />',id:"aliaspackagenames",level:3},{value:"<code>binExecArgs</code>",id:"binexecargs",level:3},{value:"<code>dedupeOnLockfileChange</code>",id:"dedupeonlockfilechange",level:3},{value:'<code>dependencyVersionFormat</code><VersionLabel version="0.9" />',id:"dependencyversionformat",level:3},{value:'<code>inferTasksFromScripts</code><VersionLabel version="0.8" />',id:"infertasksfromscripts",level:3},{value:"<code>syncProjectWorkspaceDependencies</code>",id:"syncprojectworkspacedependencies",level:3},{value:"<code>syncVersionManagerConfig</code>",id:"syncversionmanagerconfig",level:3},{value:'<code>typescript</code><VersionLabel updated version="0.12" />',id:"typescript",level:2},{value:'<code>createMissingConfig</code><VersionLabel version="0.6" />',id:"createmissingconfig",level:3},{value:"<code>projectConfigFileName</code>",id:"projectconfigfilename",level:3},{value:"<code>rootConfigFileName</code>",id:"rootconfigfilename",level:3},{value:'<code>rootOptionsConfigFileName</code><VersionLabel version="0.6" />',id:"rootoptionsconfigfilename",level:3},{value:"<code>routeOutDirToCache</code>",id:"routeoutdirtocache",level:3},{value:"<code>syncProjectReferences</code>",id:"syncprojectreferences",level:3},{value:"<code>syncProjectReferencesToPaths</code>",id:"syncprojectreferencestopaths",level:3}],m={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{header:!0,version:"0.20",mdxType:"VersionLabel"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/toolchain.yml")," file configures the toolchain and the workspace development environment.\nThis file is ",(0,o.kt)("em",{parentName:"p"},"optional"),"."),(0,o.kt)("p",null,"Managing tool version's within the toolchain ensures a deterministic environment across any machine\n(whether a developer, CI, or production machine)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"$schema: 'https://moonrepo.dev/schemas/toolchain.json'\n")),(0,o.kt)("h2",{id:"extends"},(0,o.kt)("inlineCode",{parentName:"h2"},"extends")),(0,o.kt)(i.Z,{to:"/api/types/interface/ToolchainConfig#extends",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines an external ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/toolchain.yml")," to extend and inherit settings from. Perfect for\nreusability and sharing configuration across repositories and projects. When defined, this setting\nmust be an HTTPS URL ",(0,o.kt)("em",{parentName:"p"},"or")," relative file system path that points to a valid YAML document!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {1}',title:'".moon/toolchain.yml"',"{1}":!0},"extends: 'https://raw.githubusercontent.com/organization/repository/master/.moon/toolchain.yml'\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Settings will be merged recursively for blocks, with values defined in the local configuration\ntaking precedence over those defined in the extended configuration.")),(0,o.kt)("h2",{id:"node"},(0,o.kt)("inlineCode",{parentName:"h2"},"node")),(0,o.kt)(i.Z,{to:"/api/types/interface/ToolchainConfig#node",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines the Node.js version and package manager to install within the toolchain."),(0,o.kt)("h3",{id:"version"},(0,o.kt)("inlineCode",{parentName:"h3"},"version")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#version",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines the explicit Node.js version to use. We require an explicit and semantic major, minor, and\npatch version, to ensure the same environment is used across every machine. Ranges are ",(0,o.kt)("em",{parentName:"p"},"not"),"\nsupported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  version: '16.13.0'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Version can be overridden with the ",(0,o.kt)("inlineCode",{parentName:"p"},"MOON_NODE_VERSION")," environment variable.")),(0,o.kt)("h3",{id:"packagemanager"},(0,o.kt)("inlineCode",{parentName:"h3"},"packageManager")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#packageManager",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines which package manager to utilize. Supports ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," (default), ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  packageManager: 'yarn'\n")),(0,o.kt)("h3",{id:"npm-pnpm-yarn"},(0,o.kt)("inlineCode",{parentName:"h3"},"npm"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"yarn")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodePackageManagerConfig",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Optional fields for defining package manager specific configuration. The chosen setting is dependent\non the value of ",(0,o.kt)("a",{parentName:"p",href:"#packagemanager"},(0,o.kt)("inlineCode",{parentName:"a"},"node.packageManager")),". If these settings ",(0,o.kt)("em",{parentName:"p"},"are not defined"),", the\nlatest version of the active package manager will be used (when applicable)."),(0,o.kt)("h4",{id:"version-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"version")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodePackageManagerConfig#version",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," setting defines the explicit package manager version to use. We require an explicit\nmajor, minor, and patch version, to ensure the same environment is used across every machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {4}',title:'".moon/toolchain.yml"',"{4}":!0},"node:\n  packageManager: 'yarn'\n  yarn:\n    version: '3.1.0'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Version can be overridden with the ",(0,o.kt)("inlineCode",{parentName:"p"},"MOON_NPM_VERSION"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MOON_PNPM_VERSION"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"MOON_YARN_VERSION"),"\nenvironment variables.")),(0,o.kt)("h3",{id:"yarn"},(0,o.kt)("inlineCode",{parentName:"h3"},"yarn")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#yarn",mdxType:"HeadingApiLink"}),(0,o.kt)("h4",{id:"plugins"},(0,o.kt)("inlineCode",{parentName:"h4"},"plugins")),(0,o.kt)(i.Z,{to:"/api/types/interface/YarnConfig#plugins",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"A list of plugins that will automatically be imported using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn plugin import")," (Yarn 2+ only). For\nperformance reasons, plugins will only be imported when the Yarn version changes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {4}',title:'".moon/toolchain.yml"',"{4}":!0},"node:\n  packageManager: 'yarn'\n  yarn:\n    version: '3.1.0'\n    plugins:\n      - 'interactive-tools'\n      - 'workspace-tools'\n")),(0,o.kt)("h3",{id:"addenginesconstraint"},(0,o.kt)("inlineCode",{parentName:"h3"},"addEnginesConstraint")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#addEnginesConstraint",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Injects the currently configured ",(0,o.kt)("a",{parentName:"p",href:"#version"},"Node.js version")," as an ",(0,o.kt)("inlineCode",{parentName:"p"},"engines")," constraint to the root\n",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," field. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"node:\n  addEnginesConstraint: true\n")),(0,o.kt)("p",null,'For example, say our Node.js version is "16.15.0", and when we execute a run process through the\n',(0,o.kt)("inlineCode",{parentName:"p"},"moon")," binary, it will update the root ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," with the below. We pin a fixed version to\nensure other Node.js processes outside of our toolchain are utilizing the same version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "engines": {\n    "node": "16.15.0"\n  }\n}\n')),(0,o.kt)("h3",{id:"aliaspackagenames"},(0,o.kt)("inlineCode",{parentName:"h3"},"aliasPackageNames"),(0,o.kt)(r.Z,{version:"0.10",mdxType:"VersionLabel"})),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#aliasPackageNames",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"When enabled, will assign ",(0,o.kt)("a",{parentName:"p",href:"../concepts/project#aliases"},"aliases")," to configured ",(0,o.kt)("a",{parentName:"p",href:"#projects"},"projects"),"\nbased on the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field in the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". Aliases can be used as a substitute for\nproject names, allowing for the familiar package name to be used within\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/target"},"targets")," or configuration."),(0,o.kt)("p",null,"This setting accepts one of the following values, which determines how to parse and assign the\nalias."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name-and-scope")," - Will use the package name as-is, including any scope. For example,\n",(0,o.kt)("inlineCode",{parentName:"li"},"@scope/example")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"example"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name-only")," - Will only use the name and disregard any scope. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"@scope/example")," will\nbecome ",(0,o.kt)("inlineCode",{parentName:"li"},"example"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  aliasPackageNames: 'name-only'\n")),(0,o.kt)("h3",{id:"binexecargs"},(0,o.kt)("inlineCode",{parentName:"h3"},"binExecArgs")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#binExecArgs",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Additional ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html"},"command line arguments")," to pass to the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," binary\nwhen it's being executed by running a target. This will apply arguments to ",(0,o.kt)("em",{parentName:"p"},"all Node.js based"),"\ntargets, and cannot be changed on a per target basis."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2-5}',title:'".moon/toolchain.yml"',"{2-5}":!0},"node:\n  binExecArgs:\n    - '--preserve-symlinks'\n    - '--loader'\n    - '@boost/module/loader'\n")),(0,o.kt)("h3",{id:"dedupeonlockfilechange"},(0,o.kt)("inlineCode",{parentName:"h3"},"dedupeOnLockfileChange")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#dedupeOnLockfileChange",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Will dedupe dependencies after they have been installed, added, removing, or changed in any way, in\nan effort to keep the workspace tree as clean and lean as possible. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  dedupeOnLockfileChange: true\n")),(0,o.kt)("h3",{id:"dependencyversionformat"},(0,o.kt)("inlineCode",{parentName:"h3"},"dependencyVersionFormat"),(0,o.kt)(r.Z,{version:"0.9",mdxType:"VersionLabel"})),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#dependencyVersionFormat",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"#syncprojectworkspacedependencies"},"syncing project dependencies"),", customize the format that\nwill be used for the dependency version range. The following formats are supported (but use the one\nmost applicable to your chosen package manager):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"file")," - Uses ",(0,o.kt)("inlineCode",{parentName:"li"},"file:../relative/path")," and copies package contents."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"link")," - Uses ",(0,o.kt)("inlineCode",{parentName:"li"},"link:../relative/path")," and symlinks package contents."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"star")," - Uses an explicit ",(0,o.kt)("inlineCode",{parentName:"li"},"*"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version")," - Uses the explicit version from the dependent project's ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),', e.g., "1.2.3".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version-caret")," - Uses the version from the dependent project's ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),' as a caret range,\ne.g., "^1.2.3".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version-tilde")," - Uses the version from the dependent project's ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),' as a tilde range,\ne.g., "~1.2.3".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workspace")," (default) - Uses ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace:*"),', which resolves to "1.2.3". Requires package\nworkspaces.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workspace-caret")," - Uses ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace:^"),', which resolves to "^1.2.3". Requires package workspaces.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workspace-tilde")," - Uses ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace:~"),', which resolves to "~1.2.3". Requires package workspaces.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  dependencyVersionFormat: 'link'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This setting does not apply to peer dependencies, as they will always use a format of\n",(0,o.kt)("inlineCode",{parentName:"p"},"^<major>.0.0"),".")),(0,o.kt)("h3",{id:"infertasksfromscripts"},(0,o.kt)("inlineCode",{parentName:"h3"},"inferTasksFromScripts"),(0,o.kt)(r.Z,{version:"0.8",mdxType:"VersionLabel"})),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#inferTasksFromScripts",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Will infer and automatically create ",(0,o.kt)("a",{parentName:"p",href:"../concepts/task"},"tasks")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts. Defaults\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"This requires the ",(0,o.kt)("a",{parentName:"p",href:"./project#language"},"project's language"),' to be "javascript" or "typescript", a\n',(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," to exist in the project, and will take the following into account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Script names will be converted to kebab-case, and will become the task ID."),(0,o.kt)("li",{parentName:"ul"},"Pre, post, and life cycle hooks are ignored."),(0,o.kt)("li",{parentName:"ul"},"Tasks defined in ",(0,o.kt)("inlineCode",{parentName:"li"},".moon/tasks.yml")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"moon.yml")," take precedence over scripts of the same name.")),(0,o.kt)("p",null,"To verify inferred tasks, run ",(0,o.kt)("a",{parentName:"p",href:"../commands/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon project <id>"))," (pass ",(0,o.kt)("inlineCode",{parentName:"p"},"--json")," to view raw\nconfig and options). Tasks that are inferred will have their command and args set to\n",(0,o.kt)("inlineCode",{parentName:"p"},"moon node run-script"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  inferTasksFromScripts: true\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This implementation shares functionality with\n",(0,o.kt)("a",{parentName:"p",href:"../commands/migrate/from-package-json"},(0,o.kt)("inlineCode",{parentName:"a"},"moon migrate from-package-json")),", and will attempt to\ndetermine environment variables, outputs, CI options, and more! Be aware of these when utilizing\nthis feature, especially in regards to ",(0,o.kt)("inlineCode",{parentName:"p"},"runInCI"),", as it may be inaccurate!")),(0,o.kt)("h3",{id:"syncprojectworkspacedependencies"},(0,o.kt)("inlineCode",{parentName:"h3"},"syncProjectWorkspaceDependencies")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#syncProjectWorkspaceDependencies",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Will sync a project's ",(0,o.kt)("a",{parentName:"p",href:"./project#dependson"},(0,o.kt)("inlineCode",{parentName:"a"},"dependsOn"))," setting as normal dependencies within the\nproject's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". If a dependent project does not have a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", or if a dependency\nof the same name has an explicit version already defined, the sync will be skipped. Defaults to\n",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  syncProjectWorkspaceDependencies: true\n")),(0,o.kt)("p",null,"A quick example on how this works. Given the following ",(0,o.kt)("inlineCode",{parentName:"p"},"dependsOn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"dependsOn:\n  - 'designSystem'\n  - 'reactHooks'\n")),(0,o.kt)("p",null,"Would result in the following ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," within a project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". The version format\ncan be customized with ",(0,o.kt)("a",{parentName:"p",href:"#dependencyversionformat"},(0,o.kt)("inlineCode",{parentName:"a"},"node.dependencyVersionFormat")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // ...\n  "dependencies": {\n    "@company/design-system": "workspace:*",\n    "@company/react-hooks": "workspace:*"\n    // ...\n  }\n}\n')),(0,o.kt)("h3",{id:"syncversionmanagerconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"syncVersionManagerConfig")),(0,o.kt)(i.Z,{to:"/api/types/interface/NodeConfig#syncVersionManagerConfig",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Will sync the currently configured ",(0,o.kt)("a",{parentName:"p",href:"#version"},"Node.js version"),' to a 3rd-party version manager\'s\nconfig/rc file. Supports "nodenv" (syncs to ',(0,o.kt)("inlineCode",{parentName:"p"},".node-version"),'), "nvm" (syncs to ',(0,o.kt)("inlineCode",{parentName:"p"},".nvmrc"),"), or none\n(default)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"node:\n  syncVersionManagerConfig: 'nvm'\n")),(0,o.kt)("p",null,"This is a special setting that ensure other Node.js processes outside of our toolchain are utilizing\nthe same version, which is a very common practice when managing dependencies."),(0,o.kt)("h2",{id:"typescript"},(0,o.kt)("inlineCode",{parentName:"h2"},"typescript"),(0,o.kt)(r.Z,{updated:!0,version:"0.12",mdxType:"VersionLabel"})),(0,o.kt)(i.Z,{to:"/api/types/interface/ToolchainConfig#typescript",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Dictates how moon interacts with and utilizes TypeScript within the workspace. This field is\noptional and is undefined by default. Define it to enable TypeScript support."),(0,o.kt)("h3",{id:"createmissingconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"createMissingConfig"),(0,o.kt)(r.Z,{version:"0.6",mdxType:"VersionLabel"})),(0,o.kt)(i.Z,{to:"/api/types/interface/TypeScriptConfig#createMissingConfig",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"#syncprojectreferences"},"syncing project references")," and a depended on project ",(0,o.kt)("em",{parentName:"p"},"does not")," have\na ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", automatically create one. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"typescript:\n  createMissingConfig: true\n")),(0,o.kt)("h3",{id:"projectconfigfilename"},(0,o.kt)("inlineCode",{parentName:"h3"},"projectConfigFileName")),(0,o.kt)(i.Z,{to:"/api/types/interface/TypeScriptConfig#projectConfigFileName",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines the file name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," found in the project root. We utilize this setting when\nsyncing project references between projects. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"typescript:\n  projectConfigFileName: 'tsconfig.build.json'\n")),(0,o.kt)("h3",{id:"rootconfigfilename"},(0,o.kt)("inlineCode",{parentName:"h3"},"rootConfigFileName")),(0,o.kt)(i.Z,{to:"/api/types/interface/TypeScriptConfig#rootConfigFileName",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines the file name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," found in the workspace root. We utilize this setting\nwhen syncing projects as references. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"typescript:\n  rootConfigFileName: 'tsconfig.projects.json'\n")),(0,o.kt)("h3",{id:"rootoptionsconfigfilename"},(0,o.kt)("inlineCode",{parentName:"h3"},"rootOptionsConfigFileName"),(0,o.kt)(r.Z,{version:"0.6",mdxType:"VersionLabel"})),(0,o.kt)(i.Z,{to:"/api/types/interface/TypeScriptConfig#rootOptionsConfigFileName",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines the file name of the config file found in the workspace root that houses shared compiler\noptions. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.options.json"),". This setting is used in the following scenarios:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("a",{parentName:"li",href:"#"},"creating a ",(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig.json")," for a project"),", sets the ",(0,o.kt)("inlineCode",{parentName:"li"},"extends")," field to this value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"typescript:\n  rootOptionsConfigFileName: 'tsconfig.base.json'\n")),(0,o.kt)("h3",{id:"routeoutdirtocache"},(0,o.kt)("inlineCode",{parentName:"h3"},"routeOutDirToCache")),(0,o.kt)(i.Z,{to:"/api/types/interface/TypeScriptConfig#routeOutDirToCache",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Updates the ",(0,o.kt)("inlineCode",{parentName:"p"},"outDir")," compiler option in each project's ",(0,o.kt)("a",{parentName:"p",href:"#projectConfigFileName"},(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig.json"))," to\nroute to moon's cache folder. This is useful when using project references and wanting to keep all\nthe compiled ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," files ",(0,o.kt)("em",{parentName:"p"},"out")," of the project folder. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"typescript:\n  routeOutDirToCache: true\n")),(0,o.kt)("p",null,'As a demonstration, if we had an npm package located at "packages/components", the ',(0,o.kt)("inlineCode",{parentName:"p"},"outDir")," compiler\noption will be re-routed to the following when syncing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<project>/tsconfig.json"',title:'"<project>/tsconfig.json"'},'{\n  // ...\n  "compilerOptions": {\n    // ...\n    "outDir": "../../.moon/cache/types/packages/components"\n  }\n}\n')),(0,o.kt)("h3",{id:"syncprojectreferences"},(0,o.kt)("inlineCode",{parentName:"h3"},"syncProjectReferences")),(0,o.kt)(i.Z,{to:"/api/types/interface/TypeScriptConfig#syncProjectReferences",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Will sync a project's ",(0,o.kt)("a",{parentName:"p",href:"../concepts/project#dependencies"},"dependencies")," (when applicable) as project\nreferences within that project's ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", and the workspace root ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". Defaults\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when the parent ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," setting is defined, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"typescript:\n  syncProjectReferences: true\n")),(0,o.kt)("p",null,"A quick example on how this works. Given the following ",(0,o.kt)("inlineCode",{parentName:"p"},"dependsOn"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"dependsOn:\n  - 'designSystem'\n  - 'reactHooks'\n")),(0,o.kt)("p",null,"Would result in the following ",(0,o.kt)("inlineCode",{parentName:"p"},"references")," within both ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"s."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  // ...\n  "references": [\n    // ...\n    { "path": "../../design-system" },\n    { "path": "../../react-hooks" }\n  ]\n}\n')),(0,o.kt)("h3",{id:"syncprojectreferencestopaths"},(0,o.kt)("inlineCode",{parentName:"h3"},"syncProjectReferencesToPaths")),(0,o.kt)(i.Z,{to:"/api/types/interface/TypeScriptConfig#syncProjectReferencesToPaths",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Will sync a project's ",(0,o.kt)("a",{parentName:"p",href:"#projectConfigFileName"},(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig.json"))," project references to the ",(0,o.kt)("inlineCode",{parentName:"p"},"paths"),"\ncompiler option, using the referenced project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," name. This is useful for mapping\nimport aliases to their source code. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml" {2}',title:'".moon/toolchain.yml"',"{2}":!0},"typescript:\n  syncProjectReferencesToPaths: true\n")),(0,o.kt)("p",null,"As a demonstration, if we had a reference to a shared npm package with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"@brand/components"),",\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"paths")," compiler option would be updated to the following when syncing. The index file may exist\nin a ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder, or the root of the package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<project>/tsconfig.json"',title:'"<project>/tsconfig.json"'},'{\n  // ...\n  "compilerOptions": {\n    // ...\n    "paths": {\n      "@brand/components": ["../shared/components/src/index.ts"],\n      "@brand/components/*": ["../shared/components/src/*"]\n    }\n  },\n  "references": [\n    {\n      "path": "../shared/components"\n    }\n  ]\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This setting runs ",(0,o.kt)("em",{parentName:"p"},"after")," ",(0,o.kt)("a",{parentName:"p",href:"#syncprojectreferences"},(0,o.kt)("inlineCode",{parentName:"a"},"syncProjectReferences"))," and will inherit any\nsynced references from that setting.")))}u.isMDXComponent=!0}}]);