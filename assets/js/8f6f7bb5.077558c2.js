"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9950],{5318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9022:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7378),o=a(9619);function r(e){let{header:t,updated:a,version:r}=e;return n.createElement(o.Z,{text:`v${r}`,variant:a?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7378),o=a(8944),r=a(1792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:a,text:i,variant:s}=e;return n.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?l[s]:"bg-gray-100 text-gray-800",t)},a&&n.createElement(r.Z,{icon:a,className:"mr-1"}),i)}},8523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(5773),o=a(7378),r=a(5318);function l(e){let{alt:t,src:a}=e;return o.createElement("div",{className:"m-3 text-center"},o.createElement("img",{alt:t,src:a.default,className:"block w-auto max-w-full"}))}var i=a(9022);const s={title:"Task profiling"},p=void 0,c={unversionedId:"guides/profile",id:"guides/profile",title:"Task profiling",description:"Troubleshooting slow or unperformant tasks? Profile and diagnose them with ease!",source:"@site/docs/guides/profile.mdx",sourceDirName:"guides",slug:"/guides/profile",permalink:"/docs/guides/profile",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/profile.mdx",tags:[],version:"current",frontMatter:{title:"Task profiling"},sidebar:"guides",previous:{title:"Open source usage",permalink:"/docs/guides/open-source"},next:{title:"Root-level project",permalink:"/docs/guides/root-project"}},d={},m=[{value:"CPU snapshots",id:"cpu-snapshots",level:2},{value:"Record a profile",id:"record-a-profile",level:3},{value:"Analyze in Chrome",id:"analyze-in-chrome",level:3},{value:"Heap snapshots",id:"heap-snapshots",level:2},{value:"Record a profile",id:"record-a-profile-1",level:3},{value:"Analyze in Chrome",id:"analyze-in-chrome-1",level:3},{value:"Views",id:"views",level:2},{value:"Bottom up",id:"bottom-up",level:3},{value:"Top down",id:"top-down",level:3},{value:"Flame chart",id:"flame-chart",level:3}],u={toc:m};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{header:!0,version:"0.5",mdxType:"VersionLabel"}),(0,r.kt)("p",null,"Troubleshooting slow or unperformant tasks? Profile and diagnose them with ease!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Profiling is only supported by Node.js based tasks, and is not supported by tasks that are created\nthrough ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," inferrence, or for packages that ship non-JavaScript code (like Rust or\nGo).")),(0,r.kt)("h2",{id:"cpu-snapshots"},"CPU snapshots"),(0,r.kt)("p",null,"CPU profiling helps you get a better understanding of which parts of your code require the most CPU\ntime, and how your code is executed and optimized by Node.js. The profiler will measure code\nexecution and activities performed by the engine itself, such as compilation, calls of system\nlibraries, optimization, and garbage collection."),(0,r.kt)("h3",{id:"record-a-profile"},"Record a profile"),(0,r.kt)("p",null,"To record a CPU profile, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile cpu")," to the ",(0,r.kt)("a",{parentName:"p",href:"../commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run"))," command. When\nsuccessful, the profile will be written to\n",(0,r.kt)("inlineCode",{parentName:"p"},".moon/cache/states/<project>/<task>/snapshot.cpuprofile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run --profile cpu app:lint\n")),(0,r.kt)("h3",{id:"analyze-in-chrome"},"Analyze in Chrome"),(0,r.kt)("p",null,"CPU profiles can be reviewed and analyzed with\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"Chrome developer tools")," using the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Chrome and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"chrome://inspect"),"."),(0,r.kt)("li",{parentName:"ol"},'Under "Devices", navigate to "Open dedicated DevTools for Node".'),(0,r.kt)("li",{parentName:"ol"},'The following window will popup. Ensure the "Profiler" tab is selected.')),(0,r.kt)(l,{src:a(3124),alt:"DevTools Profiler - CPU",mdxType:"Image"}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Click "Load" and select the ',(0,r.kt)("inlineCode",{parentName:"li"},"snapshot.cpuprofile")," that was\n",(0,r.kt)("a",{parentName:"li",href:"#record-a-profile"},"previously recorded"),". If successful, the snapshot will appear in the left\ncolumn.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On macOS, press ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"shift")," + ",(0,r.kt)("inlineCode",{parentName:"p"},".")," to display hidden files and folders, to locate the\n",(0,r.kt)("inlineCode",{parentName:"p"},".moon")," folder.")),(0,r.kt)(l,{src:a(1924),alt:"DevTools Profiler - CPU snapshot loaded",mdxType:"Image"}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Select the snapshot in the left column. From here, the snapshot can be analyzed and represented\nwith ",(0,r.kt)("a",{parentName:"li",href:"#bottom-up"},"Bottom up"),", ",(0,r.kt)("a",{parentName:"li",href:"#top-down"},"Top down"),", or ",(0,r.kt)("a",{parentName:"li",href:"#flame-chart"},"Flame chart")," views.")),(0,r.kt)(l,{src:a(3127),alt:"DevTools Profiler - CPU snapshot being analyzed through charts",mdxType:"Image"}),(0,r.kt)("h2",{id:"heap-snapshots"},"Heap snapshots"),(0,r.kt)("p",null,"Heap profiling lets you detect memory leaks, dynamic memory problems, and locate the fragments of\ncode that caused them."),(0,r.kt)("h3",{id:"record-a-profile-1"},"Record a profile"),(0,r.kt)("p",null,"To record a heap profile, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile heap")," to the ",(0,r.kt)("a",{parentName:"p",href:"../commands/run"},(0,r.kt)("inlineCode",{parentName:"a"},"moon run"))," command. When\nsuccessful, the profile will be written to\n",(0,r.kt)("inlineCode",{parentName:"p"},".moon/cache/states/<project>/<task>/snapshot.heapprofile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run --profile heap app:lint\n")),(0,r.kt)("h3",{id:"analyze-in-chrome-1"},"Analyze in Chrome"),(0,r.kt)("p",null,"Heap profiles can be reviewed and analyzed with\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"Chrome developer tools")," using the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Chrome and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"chrome://inspect"),"."),(0,r.kt)("li",{parentName:"ol"},'Under "Devices", navigate to "Open dedicated DevTools for Node".'),(0,r.kt)("li",{parentName:"ol"},'The following window will popup. Ensure the "Memory" tab is selected.')),(0,r.kt)(l,{src:a(2634),alt:"DevTools Profiler - Heap",mdxType:"Image"}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Click "Load" and select the ',(0,r.kt)("inlineCode",{parentName:"li"},"snapshot.heapprofile")," that was\n",(0,r.kt)("a",{parentName:"li",href:"#record-a-profile-1"},"previously recorded"),". If successful, the snapshot will appear in the left\ncolumn.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On macOS, press ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"shift")," + ",(0,r.kt)("inlineCode",{parentName:"p"},".")," to display hidden files and folders, to locate the\n",(0,r.kt)("inlineCode",{parentName:"p"},".moon")," folder.")),(0,r.kt)(l,{src:a(6030),alt:"DevTools Profiler - Heap snapshot loaded",mdxType:"Image"}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Select the snapshot in the left column. From here, the snapshot can be analyzed and represented\nwith ",(0,r.kt)("a",{parentName:"li",href:"#bottom-up"},"Bottom up"),", ",(0,r.kt)("a",{parentName:"li",href:"#top-down"},"Top down"),", or ",(0,r.kt)("a",{parentName:"li",href:"#flame-chart"},"Flame chart")," views.")),(0,r.kt)(l,{src:a(9427),alt:"DevTools Profiler - Heap snapshot being analyzed through charts",mdxType:"Image"}),(0,r.kt)("h2",{id:"views"},"Views"),(0,r.kt)("p",null,"Chrome DevTools provide 3 views for analyzing activities within a snapshot. Each view gives you a\ndifferent perspective on these activities."),(0,r.kt)("h3",{id:"bottom-up"},"Bottom up"),(0,r.kt)("p",null,"The Bottom up view is helpful if you encounter a heavy function and want to find out where it was\ncalled from."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "Self Time" column represents the aggregated time spent directly in that activity, across all\nof its occurrences.'),(0,r.kt)("li",{parentName:"ul"},'The "Total Time" column represents aggregated time spent in that activity or any of its children.'),(0,r.kt)("li",{parentName:"ul"},'The "Function" column is the function that was executed, including source location, and any\nchildren.')),(0,r.kt)(l,{src:a(8455),alt:"Bottom up profiler view",mdxType:"Image"}),(0,r.kt)("h3",{id:"top-down"},"Top down"),(0,r.kt)("p",null,"The Top down view works in a similar fashion to ",(0,r.kt)("a",{parentName:"p",href:"#bottom-up"},"Bottom up"),", but displays functions\nstarting from the top-level entry points. These are also known as root activities."),(0,r.kt)(l,{src:a(1046),alt:"Top down profiler view",mdxType:"Image"}),(0,r.kt)("h3",{id:"flame-chart"},"Flame chart"),(0,r.kt)("p",null,"DevTools represents main thread activity with a flame chart. The x-axis represents the recording\nover time. The y-axis represents the call stack. The events on top cause the events below it."),(0,r.kt)(l,{src:a(3632),alt:"Flame chart profiler view",mdxType:"Image"}))}h.isMDXComponent=!0},8455:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/bottom-up-2e2e925bb1bd78f49bf29e4f6f848f7c.png"},1924:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/cpu-loaded-ff6afad307a77cc32e53364c0cd3a597.png"},3127:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/cpu-selected-febbd2aef4ffaea46979cbeb583bd648.png"},3124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/cpu-deb9e0f9310721da8e3394071dbaa637.png"},3632:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/flame-chart-aa69d1306f8472d449c7d9755e7995e8.png"},6030:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/heap-loaded-4bbbd3b5dd677a0d5bbdce7585ea3286.png"},9427:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/heap-selected-41365c3cb6e1244aa6dd2382e58b5804.png"},2634:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/heap-3451a7088c4f41a89ad4e068d250f6b4.png"},1046:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/top-down-409f6e1447d9875d7013017d0c7f643c.png"}}]);