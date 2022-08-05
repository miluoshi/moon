"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8751],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=["components"],l={title:"run"},u=void 0,p={unversionedId:"commands/run",id:"commands/run",title:"run",description:"The moon run (or moon r) command will run a target (a task within a",source:"@site/docs/commands/run.mdx",sourceDirName:"commands",slug:"/commands/run",permalink:"/docs/commands/run",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/run.mdx",tags:[],version:"current",frontMatter:{title:"run"},sidebar:"docs",previous:{title:"touched-files",permalink:"/docs/commands/query/touched-files"},next:{title:"setup",permalink:"/docs/commands/setup"}},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3},{value:"Affected",id:"affected",level:4}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"moon run")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"moon r"),") command will run a ",(0,i.kt)("a",{parentName:"p",href:"../concepts/target"},"target")," (a task within a\nproject) and all of it's dependencies in topological order. Each run will incrementally cache each\ntask, improving speed and development times... over time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Run `lint` in project `app`\n$ moon run app:lint\n\n# Run `lint` in all projects\n$ moon run :lint\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"View the official ",(0,i.kt)("a",{parentName:"p",href:"../run-task"},"Run a task")," article for more information!")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<target>")," - ",(0,i.kt)("a",{parentName:"li",href:"../concepts/target"},"Target")," to run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[-- <args>]")," - Additional arguments to\n",(0,i.kt)("a",{parentName:"li",href:"../run-task#passing-arguments-to-the-underlying-command"},"pass to the underlying command"),".")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--dependents")," - Run downstream dependent targets (of the same task name) as well."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--profile <type>")," - Record and ",(0,i.kt)("a",{parentName:"li",href:"../guides/profile"},"generate a profile")," for ran tasks.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Types: ",(0,i.kt)("inlineCode",{parentName:"li"},"cpu"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"heap"))))),(0,i.kt)("h4",{id:"affected"},"Affected"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--affected")," - Only run target if affected by changed files, ",(0,i.kt)("em",{parentName:"li"},"otherwise")," will always run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--status <type>")," - Filter affected based on a change status.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Types: ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," (default), ",(0,i.kt)("inlineCode",{parentName:"li"},"added"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deleted"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"modified"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"staged"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"unstaged"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"untracked")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--upstream")," - Determine affected against upstream by comparing ",(0,i.kt)("inlineCode",{parentName:"li"},"HEAD")," against a base revision\n(default branch), ",(0,i.kt)("em",{parentName:"li"},"otherwise")," uses local changes.")))}d.isMDXComponent=!0}}]);