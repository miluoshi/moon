"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9754],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,u=k["".concat(l,".").concat(d)]||k[d]||c[d]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},79022:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(9619);function o(e){let{header:t,updated:n,version:o}=e;return a.createElement(r.Z,{text:`v${o}`,variant:n?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(38944),o=n(31792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){let{className:t,icon:n,text:s,variant:l}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?i[l]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(o.Z,{icon:n,className:"mr-1"}),s)}},82718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(25773),r=(n(27378),n(35318)),o=n(79022);const i={title:"Tasks"},s=void 0,l={unversionedId:"concepts/task",id:"concepts/task",title:"Tasks",description:"Tasks are commands that are ran in the context of a project. Underneath the hood, a",source:"@site/docs/concepts/task.mdx",sourceDirName:"concepts",slug:"/concepts/task",permalink:"/docs/concepts/task",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/task.mdx",tags:[],version:"current",frontMatter:{title:"Tasks"},sidebar:"docs",previous:{title:"Targets",permalink:"/docs/concepts/target"},next:{title:"Tokens",permalink:"/docs/concepts/token"}},p={},m=[{value:"Names",id:"names",level:2},{value:"Types",id:"types",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Scope by project metadata",id:"scope-by-project-metadata",level:3},{value:"JavaScript platforms",id:"javascript-platforms",level:4},{value:"Merge strategies",id:"merge-strategies",level:3}],c={toc:m};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tasks are commands that are ran in the context of a ",(0,r.kt)("a",{parentName:"p",href:"./project"},"project"),". Underneath the hood, a\ntask is simply a binary or system command that is ran as a child process."),(0,r.kt)("h2",{id:"names"},"Names"),(0,r.kt)("p",null,"A task name (or identifier) is a unique resource for locating a task ",(0,r.kt)("em",{parentName:"p"},"within")," a project. The name is\nexplicitly configured as a key within the ",(0,r.kt)("a",{parentName:"p",href:"../config/project#tasks"},(0,r.kt)("inlineCode",{parentName:"a"},"tasks"))," setting, and can be\nwritten in camel/kebab/snake case. Names support ",(0,r.kt)("inlineCode",{parentName:"p"},"a-z"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"A-Z"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"0-9"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", and must\nstart with a character."),(0,r.kt)("p",null,"A task name can be paired with a scope to create a ",(0,r.kt)("a",{parentName:"p",href:"./target"},"target"),"."),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"Tasks are categorized into 1 of the following types based on their configured parameters."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Build")," - Task generates one or many artifacts, and is derived from the\n",(0,r.kt)("a",{parentName:"li",href:"../config/project#outputs"},(0,r.kt)("inlineCode",{parentName:"a"},"outputs"))," setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Run")," - Task runs a one-off, long-running, or never-ending process, and is derived from the\n",(0,r.kt)("a",{parentName:"li",href:"../config/project#local"},(0,r.kt)("inlineCode",{parentName:"a"},"local"))," setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test")," - Task asserts code is correct and behaves as expected. This includes linting,\ntypechecking, unit tests, and any other form of testing. Is the default.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Tasks can be configured per project through ",(0,r.kt)("a",{parentName:"p",href:"../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),", or for many projects\nthrough ",(0,r.kt)("a",{parentName:"p",href:"../config/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/tasks.yml")),"."),(0,r.kt)("h2",{id:"inheritance"},"Inheritance"),(0,r.kt)("p",null,"Unlike other task runners that require the same tasks to be repeatedly defined for ",(0,r.kt)("em",{parentName:"p"},"every")," project,\nmoon uses an inheritance model where tasks can be defined once at the workspace-level, and are then\ninherited by ",(0,r.kt)("em",{parentName:"p"},"many or all")," projects."),(0,r.kt)("p",null,"Workspace-level tasks (also known as global tasks) are defined in ",(0,r.kt)("a",{parentName:"p",href:"../config/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/tasks.yml"))," or\n",(0,r.kt)("a",{parentName:"p",href:"../config/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/tasks/*.yml")),", and are inherited by default. However, projects are able to include,\nexclude, or rename inherited tasks using the\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#inheritedtasks"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace.inheritedTasks"))," in ",(0,r.kt)("a",{parentName:"p",href:"../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,r.kt)("h3",{id:"scope-by-project-metadata"},"Scope by project metadata"),(0,r.kt)("p",null,"By default tasks defined in ",(0,r.kt)("a",{parentName:"p",href:"../config/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/tasks.yml"))," will be inherited by ",(0,r.kt)("em",{parentName:"p"},"all")," projects. This\napproach works well when a monorepo is comprised of a single programming language, but breaks down\nquickly in multi-language setups."),(0,r.kt)("p",null,"To support these complex repositories, we support scoped tasks with ",(0,r.kt)("a",{parentName:"p",href:"../config/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/tasks/*.yml")),",\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"*.yml")," maps to a project based on a combination of its ",(0,r.kt)("a",{parentName:"p",href:"../config/project#language"},"language"),", ",(0,r.kt)("a",{parentName:"p",href:"../config/project#type"},"type"),", or\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#tags"},"tags"),'. This enables you to easily declare tasks for "JavaScript projects", "Go applications",\n"Ruby libraries", so on and so forth.'),(0,r.kt)("p",null,"When resolving configuration files, moon will locate and ",(0,r.kt)("em",{parentName:"p"},"shallow")," merge files in the following\norder, from widest scope to narrowest scope:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks.yml")," - All projects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/<language>.yml")," - Projects with a matching ",(0,r.kt)("a",{parentName:"li",href:"../config/project#language"},(0,r.kt)("inlineCode",{parentName:"a"},"language"))," setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/<language>-<type>.yml")," - Projects with matching ",(0,r.kt)("a",{parentName:"li",href:"../config/project#language"},(0,r.kt)("inlineCode",{parentName:"a"},"language"))," and\n",(0,r.kt)("a",{parentName:"li",href:"../config/project#type"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))," settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/tag-<name>.yml")," - Projects with a matching ",(0,r.kt)("a",{parentName:"li",href:"../config/project#tags"},(0,r.kt)("inlineCode",{parentName:"a"},"tag")),".",(0,r.kt)(o.Z,{version:"1.2.0",mdxType:"VersionLabel"}))),(0,r.kt)("p",null,'As mentioned above, all of these files are shallow merged into a single "global tasks" configuration\nthat is unique per-project. Merging ',(0,r.kt)("strong",{parentName:"p"},"does not")," utilize the ",(0,r.kt)("a",{parentName:"p",href:"#merge-strategies"},"merge strategies"),"\nbelow, as those strategies are only utilized when merging global and local tasks."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tags are resolved in the order they are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"moon.yml")," ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," setting.")),(0,r.kt)("h4",{id:"javascript-platforms"},"JavaScript platforms"),(0,r.kt)("p",null,"Unlike most languages that have 1 runtime, JavaScript has 3 (Node.js, Deno, Bun), and we must\nsupport repositories that are comprised of any combination of these 3. As such, JavaScript (and\nTypeScript) based projects have a special lookup order using\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#platform-1"},(0,r.kt)("inlineCode",{parentName:"a"},"platform"))," to account for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/<platform>.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/<language>.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/<platform>-<type>.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/<language>-<type>.yml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".moon/tasks/tag-<name>.yml")," ",(0,r.kt)(o.Z,{version:"1.2.0",mdxType:"VersionLabel"}))),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"node.yml")," would be inherited for Node.js projects, ",(0,r.kt)("inlineCode",{parentName:"p"},"bun-library.yml")," for Bun\nlibraries, and ",(0,r.kt)("inlineCode",{parentName:"p"},"deno-application.yml")," for Deno applications. While ",(0,r.kt)("inlineCode",{parentName:"p"},"javascript.yml"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"typescript-library.yml"),", etc, will be inherited for all platforms."),(0,r.kt)("h3",{id:"merge-strategies"},"Merge strategies"),(0,r.kt)("p",null,"When a ",(0,r.kt)("a",{parentName:"p",href:"../config/tasks#tasks"},"global task")," and ",(0,r.kt)("a",{parentName:"p",href:"../config/project#tasks"},"local task")," of the same\nname exist, they are merged into a single task. To accomplish this, one of many\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#options"},"merge strategies")," can be used."),(0,r.kt)("p",null,"Merging is applied to the parameters ",(0,r.kt)("a",{parentName:"p",href:"../config/project#args"},(0,r.kt)("inlineCode",{parentName:"a"},"args")),",\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#deps"},(0,r.kt)("inlineCode",{parentName:"a"},"deps")),", ",(0,r.kt)("a",{parentName:"p",href:"../config/project#env-1"},(0,r.kt)("inlineCode",{parentName:"a"},"env")),",\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,r.kt)("inlineCode",{parentName:"a"},"inputs")),", and ",(0,r.kt)("a",{parentName:"p",href:"../config/project#outputs"},(0,r.kt)("inlineCode",{parentName:"a"},"outputs")),", using the\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#mergeargs"},(0,r.kt)("inlineCode",{parentName:"a"},"mergeArgs")),", ",(0,r.kt)("a",{parentName:"p",href:"../config/project#mergedeps"},(0,r.kt)("inlineCode",{parentName:"a"},"mergeDeps")),",\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#mergeenv"},(0,r.kt)("inlineCode",{parentName:"a"},"mergeEnv")),", ",(0,r.kt)("a",{parentName:"p",href:"../config/project#mergeinputs"},(0,r.kt)("inlineCode",{parentName:"a"},"mergeInputs"))," and\n",(0,r.kt)("a",{parentName:"p",href:"../config/project#mergeoutputs"},(0,r.kt)("inlineCode",{parentName:"a"},"mergeOutputs"))," options respectively. Each of these options support\none of the following strategy values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"append")," (default) - Values found in the local task are merged ",(0,r.kt)("em",{parentName:"li"},"after")," the values found in the\nglobal task. For example, this strategy is useful for toggling flag arguments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prepend")," - Values found in the local task are merged ",(0,r.kt)("em",{parentName:"li"},"before")," the values found in the global\ntask. For example, this strategy is useful for applying option arguments that must come before\npositional arguments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace")," - Values found in the local task entirely ",(0,r.kt)("em",{parentName:"li"},"replaces")," the values in the global task. This\nstrategy is useful when you need full control.")),(0,r.kt)("p",null,"All 3 of these strategies are demonstrated below, with a somewhat contrived example, but you get the\npoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Global\ntasks:\n  build:\n    command:\n      - 'webpack'\n      - '--mode'\n      - 'production'\n      - '--color'\n    deps:\n      - 'designSystem:build'\n    inputs:\n      - '/webpack.config.js'\n    outputs:\n      - 'build/'\n\n# Local\ntasks:\n  build:\n    args: '--no-color --no-stats'\n    deps:\n      - 'reactHooks:build'\n    inputs:\n      - 'webpack.config.js'\n    options:\n      mergeArgs: 'append'\n      mergeDeps: 'prepend'\n      mergeInputs: 'replace'\n\n# Merged result\ntasks:\n  build:\n    command:\n      - 'webpack'\n      - '--mode'\n      - 'production'\n      - '--color'\n      - '--no-color'\n      - '--no-stats'\n    deps:\n      - 'reactHooks:build'\n      - 'designSystem:build'\n    inputs:\n      - 'webpack.config.js'\n    outputs:\n      - 'build/'\n    options:\n      mergeArgs: 'append'\n      mergeDeps: 'prepend'\n      mergeInputs: 'replace'\n")))}k.isMDXComponent=!0}}]);