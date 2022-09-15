"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9634:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7378),r=n(1884),o=n(5773),i=n(7765),s=n(5268),l=n(8896);const p={discord:i.omb,github:i.zhw,moon:s.Gp0,"new-project":s.g6h,"new-task":s.EQ8,project:s.pL1,"project-config":s.dhu,"project-config-global":s.YdP,"project-graph":s.Bkj,"run-task":s.sl_,task:s.diR,"task-config":s.o$R,token:s.BwA,toolchain:s.AlB,twitter:i.mdU,workspace:s.emM,"workspace-config":s.cRF};function c(e){let{name:t,...n}=e;return a.createElement(l.Z,(0,o.Z)({},n,{icon:p[t]}))}function m(e){let{links:t}=e;return a.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((e=>a.createElement(r.default,{key:e.url,href:e.url,className:"focus:outline-none"},a.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},a.createElement("div",{className:"flex-shrink-0"},a.createElement(c,{size:"lg",name:e.icon})),a.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label))))))}},9151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(5773),r=(n(7378),n(5318)),o=n(9634);const i={title:"Migrate to moon"},s=void 0,l={unversionedId:"migrate-to-moon",id:"migrate-to-moon",title:"Migrate to moon",description:"Now that we've talked about the workspace, projects, tasks, and more, we must talk about something",source:"@site/docs/migrate-to-moon.mdx",sourceDirName:".",slug:"/migrate-to-moon",permalink:"/docs/migrate-to-moon",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/migrate-to-moon.mdx",tags:[],version:"current",frontMatter:{title:"Migrate to moon"},sidebar:"docs",previous:{title:"Run a task",permalink:"/docs/run-task"},next:{title:"Concepts",permalink:"/docs/concepts"}},p={},c=[{value:"Migrate to moon tasks",id:"migrate-to-moon-tasks",level:2},{value:"Keep using <code>package.json</code> scripts",id:"keep-using-packagejson-scripts",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we've talked about the workspace, projects, tasks, and more, we must talk about something\nimportant... Should you embrace moon tasks? Or keep using ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," scripts? Or both\n(incremental adoption)?"),(0,r.kt)("h2",{id:"migrate-to-moon-tasks"},"Migrate to moon tasks"),(0,r.kt)("p",null,"We suggest using moon tasks (of course), as they provide far more granular control and configurable\noptions than scripts, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"moon.yml")," is a better\n",(0,r.kt)("a",{parentName:"p",href:"./faq#what-should-be-considered-the-source-of-truth"},"source of truth"),". Scripts aren't powerful\nenough to scale for large codebases."),(0,r.kt)("p",null,"To ease the migration process, we offer the\n",(0,r.kt)("a",{parentName:"p",href:"./commands/migrate/from-package-json"},(0,r.kt)("inlineCode",{parentName:"a"},"moon migrate from-package-json"))," command, which will convert\na project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," scripts into ",(0,r.kt)("inlineCode",{parentName:"p"},"moon.yml")," tasks, while also determining project\ndependencies (",(0,r.kt)("a",{parentName:"p",href:"./config/project#dependsOn"},(0,r.kt)("inlineCode",{parentName:"a"},"dependsOn")),"). This needs to be ran ",(0,r.kt)("em",{parentName:"p"},"per project"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon migrate from-package-json app\n")),(0,r.kt)("p",null,"This command will do its best to parse and convert scripts, but this isn't always a simple 1:1\nconversion, especially when determining dependency chains. For this reason alone, we suggest\n",(0,r.kt)("em",{parentName:"p"},"manually curating")," tasks, but the migrate command well get you most of the way!"),(0,r.kt)("h2",{id:"keep-using-packagejson-scripts"},"Keep using ",(0,r.kt)("inlineCode",{parentName:"h2"},"package.json")," scripts"),(0,r.kt)("p",null,"As a frontend developer you're already familiar with the Node.js ecosystem, specifically around\ndefining and using ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," scripts, and you may not want to deviate from this. Don't worry,\nsimply enable the ",(0,r.kt)("a",{parentName:"p",href:"./config/workspace#infertasksfromscripts"},(0,r.kt)("inlineCode",{parentName:"a"},"node.inferTasksFromScripts"))," setting\nto automatically create moon tasks from a project's scripts! These can then be ran with\n",(0,r.kt)("a",{parentName:"p",href:"./commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run")),"."),(0,r.kt)("p",null,"This implementation is a simple abstraction that runs ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run <script>")," (or pnpm/yarn) in the\nproject directory as a child process. While this works, relying on ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," scripts incurs the\nfollowing risks and disadvantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./config/project#inputs"},"Inputs")," default to ",(0,r.kt)("inlineCode",{parentName:"li"},"**/*"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A change to every project relative file will mark the task as affected, even those not necessary\nfor the task. Granular input control is lost."),(0,r.kt)("li",{parentName:"ul"},"A change to workspace relative files ",(0,r.kt)("em",{parentName:"li"},"will not")," mark the task as affected. For example, a change\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"/prettier.config.js")," would not be detected for a ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run format")," script."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./config/project#outputs"},"Outputs")," default to an empty list unless:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"moon will attempt to extract outputs from arguments, by looking for variations of ",(0,r.kt)("inlineCode",{parentName:"li"},"--out"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"--outFile"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--dist-dir"),", etc."),(0,r.kt)("li",{parentName:"ul"},"If no output could be determined, builds will not be cached and hydrated."))),(0,r.kt)("li",{parentName:"ul"},"Tasks will always ",(0,r.kt)("a",{parentName:"li",href:"./config/project#runinci"},"run in CI")," unless:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"moon will attempt to determine invalid CI tasks by looking for popular command usage, for\nexample: ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack serve"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"next dev"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--watch")," usage, and more. This ",(0,r.kt)("em",{parentName:"li"},"is not")," an exhaustive\ncheck."),(0,r.kt)("li",{parentName:"ul"},"The script name contains variations of ",(0,r.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"serve"),".")))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"By this point, you should have a better understanding behind moon's fundamentals! Why not adopt\nincrementally next? Jump into ",(0,r.kt)("a",{parentName:"p",href:"./guides/ci"},"guides")," for advanced use cases or ",(0,r.kt)("a",{parentName:"p",href:"./concepts"},"concepts"),"\nfor a deeper understanding."),(0,r.kt)(o.Z,{links:[{icon:"discord",label:"Community help & support",url:"https://discord.gg/qCh9MEynv2"},{icon:"twitter",label:"Releases & updates",url:"https://twitter.com/tothemoonrepo"}],mdxType:"NextSteps"}))}d.isMDXComponent=!0}}]);