"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8095],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,g=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7378),a=n(9619);function o(e){let{header:t,updated:n,version:o}=e;return r.createElement(a.Z,{text:`v${o}`,variant:n?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7378),a=n(8944),o=n(1792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function p(e){let{className:t,icon:n,text:p,variant:i}=e;return r.createElement("span",{className:(0,a.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",i?l[i]:"bg-gray-100 text-gray-800",t)},n&&r.createElement(o.Z,{icon:n,className:"mr-1"}),p)}},6448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(5773),a=(n(7378),n(5318)),o=n(9022);const l={title:"dep-graph"},p=void 0,i={unversionedId:"commands/dep-graph",id:"commands/dep-graph",title:"dep-graph",description:"The moon dep-graph [target] (or moon dg) command will generate and serve a visual dependency",source:"@site/docs/commands/dep-graph.mdx",sourceDirName:"commands",slug:"/commands/dep-graph",permalink:"/docs/commands/dep-graph",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/dep-graph.mdx",tags:[],version:"current",frontMatter:{title:"dep-graph"},sidebar:"docs",previous:{title:"completions",permalink:"/docs/commands/completions"},next:{title:"docker",permalink:"/docs/commands/docker"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Example output",id:"example-output",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{header:!0,version:"0.7",mdxType:"VersionLabel"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"moon dep-graph [target]")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"moon dg"),") command will generate and serve a visual dependency\ngraph of all actions, targets, and tasks within the workspace, and can also output the graph in\n",(0,a.kt)("a",{parentName:"p",href:"https://graphviz.org/doc/info/lang.html"},"Graphviz DOT format"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Run the visualizer locally\n$ moon dep-graph\n\n# Export to DOT format\n$ moon dep-graph --dot > graph.dot\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A target can be passed to focus the graph, including dependencies ",(0,a.kt)("em",{parentName:"p"},"and")," dependents. For example,\n",(0,a.kt)("inlineCode",{parentName:"p"},"moon dep-graph app:build"),".")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[target]")," - Optional target to focus.")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--dot")," - Output the graph in DOT format.")),(0,a.kt)("h2",{id:"example-output"},"Example output"),(0,a.kt)("p",null,"The following output is an example of the graph in DOT format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dot"},'digraph {\n    0 [ label="SetupNodeTool" style=filled, shape=oval, fillcolor=black, fontcolor=white]\n    1 [ label="InstallNodeDeps" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    2 [ label="SyncNodeProject(node)" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    3 [ label="RunTarget(node:standard)" style=filled, shape=oval, fillcolor=gray, fontcolor=black]\n    1 -> 0 [ arrowhead=box, arrowtail=box]\n    2 -> 0 [ arrowhead=box, arrowtail=box]\n    3 -> 1 [ arrowhead=box, arrowtail=box]\n    3 -> 2 [ arrowhead=box, arrowtail=box]\n}\n')))}m.isMDXComponent=!0}}]);