"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66552],{4522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(24246),o=t(71670);const a={slug:"moon-v1.24",title:"moon v1.24 - Task mutexes, auto-detect revisions, project dependents, and more!",authors:["milesj"],tags:["task","mutex","ci","base","head","project-graph","dependents","cache","clean"],image:"./img/moon/v1.24.png"},r=void 0,i={permalink:"/blog/moon-v1.24",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2024-04-17_moon-v1.24.mdx",source:"@site/blog/2024-04-17_moon-v1.24.mdx",title:"moon v1.24 - Task mutexes, auto-detect revisions, project dependents, and more!",description:"This is a light release that focused solely on requests and improvements from the community.",date:"2024-04-17T00:00:00.000Z",tags:[{label:"task",permalink:"/blog/tags/task"},{label:"mutex",permalink:"/blog/tags/mutex"},{label:"ci",permalink:"/blog/tags/ci"},{label:"base",permalink:"/blog/tags/base"},{label:"head",permalink:"/blog/tags/head"},{label:"project-graph",permalink:"/blog/tags/project-graph"},{label:"dependents",permalink:"/blog/tags/dependents"},{label:"cache",permalink:"/blog/tags/cache"},{label:"clean",permalink:"/blog/tags/clean"}],readingTime:2.9,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.24",title:"moon v1.24 - Task mutexes, auto-detect revisions, project dependents, and more!",authors:["milesj"],tags:["task","mutex","ci","base","head","project-graph","dependents","cache","clean"],image:"./img/moon/v1.24.png"},unlisted:!1,prevItem:{title:"proto v0.35 - Support for more shells",permalink:"/blog/proto-v0.35"},nextItem:{title:"proto v0.34 - New detection strategy, status command, and outdated improvements",permalink:"/blog/proto-v0.34"}},l={image:t(40235).Z,authorsImageUrls:[void 0]},c=[{value:"Exclusive resources with task mutexes",id:"exclusive-resources-with-task-mutexes",level:2},{value:"Auto-detect base/head for <code>moon ci</code>",id:"auto-detect-basehead-for-moon-ci",level:2},{value:"Include dependents for focused project graph",id:"include-dependents-for-focused-project-graph",level:2},{value:"Other changes",id:"other-changes",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This is a light release that focused solely on requests and improvements from the community."}),"\n",(0,s.jsx)(n.h2,{id:"exclusive-resources-with-task-mutexes",children:"Exclusive resources with task mutexes"}),"\n",(0,s.jsx)(n.p,{children:"Some tasks may require exclusive access to a resource, like a database, file, or network connection,\nbut other parallel running tasks may also require access to the same resource. When both of these\ntasks run, they may conflict with each other, causing one or both to fail. This wasn't an easy\nproblem to solve in moon, until now!"}),"\n",(0,s.jsxs)(n.p,{children:["Thanks to ",(0,s.jsx)(n.a,{href:"https://github.com/castarco",children:"Andr\xe9s Correa Casablanca"})," for the idea and implementation,\ntasks now support a new option called ",(0,s.jsx)(n.a,{href:"/docs/config/project#mutex",children:(0,s.jsx)(n.code,{children:"mutex"})}),". This option allows you\nto specify a unique name (across the entire workspace) for the mutex, which will be used to lock the\ntask from running if another task with the same mutex name is already running."]}),"\n",(0,s.jsx)(n.p,{children:"Take the following for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# server/moon.yml\ntasks:\n  build:\n    command: 'build-server'\n    options:\n      mutex: 'app'\n\n# client/moon.yml\ntasks:\n  build:\n    command: 'build-client'\n    options:\n      mutex: 'app'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.a,{href:"/docs/commands/run",children:(0,s.jsx)(n.code,{children:"moon run :build"})})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/ci",children:(0,s.jsx)(n.code,{children:"moon ci"})})," is ran, both tasks\nwill be parallelized within our pipeline, ",(0,s.jsx)(n.em,{children:"but"})," only one of them will run at a time. If the ",(0,s.jsx)(n.code,{children:"server"}),"\ntask is running, the ",(0,s.jsx)(n.code,{children:"client"})," task will wait until the ",(0,s.jsx)(n.code,{children:"server"})," task is complete. This ensures that\nboth tasks don't conflict with each other."]}),"\n",(0,s.jsxs)(n.p,{children:["This could technically be solved through task ",(0,s.jsx)(n.code,{children:"deps"}),", but with a mutex, it allows you to decouple\nproject and task dependencies, and instead focus on a virtual resource that is being locked."]}),"\n",(0,s.jsxs)(n.h2,{id:"auto-detect-basehead-for-moon-ci",children:["Auto-detect base/head for ",(0,s.jsx)(n.code,{children:"moon ci"})]}),"\n",(0,s.jsxs)(n.p,{children:["We've updated ",(0,s.jsx)(n.a,{href:"/docs/commands/ci",children:(0,s.jsx)(n.code,{children:"moon ci"})})," to try and detect the base and head revisions\nautomatically when running in a popular CI provider, like GitLab and Jenkins. For the base revision,\nwe'll use the base/target commit SHA or target branch, while the head revision will use the source\ncommit SHA or ",(0,s.jsx)(n.code,{children:"HEAD"}),". This is great for pull requests and forks!"]}),"\n",(0,s.jsx)(n.p,{children:"With that said, these values can be overwritten with environment variables, or command line\narguments. Below is the order of precedence:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MOON_BASE"})," / ",(0,s.jsx)(n.code,{children:"MOON_HEAD"})," environment variables"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--base"})," / ",(0,s.jsx)(n.code,{children:"--head"})," command line arguments"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"base_revision"})," / ",(0,s.jsx)(n.code,{children:"head_revision"})," via CI provider"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vcs.defaultBranch"})," setting / ",(0,s.jsx)(n.code,{children:"HEAD"})," literal value"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This functionality is provided by the ",(0,s.jsx)(n.a,{href:"https://github.com/milesj/rust-cicd-env",children:(0,s.jsx)(n.code,{children:"ci_env"})})," Rust\ncrate. Please refer to that crate for supported providers, and which of them support revision\ndetection (primarily the ",(0,s.jsx)(n.code,{children:"base_revision"})," and ",(0,s.jsx)(n.code,{children:"head_revision"})," fields)."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"include-dependents-for-focused-project-graph",children:"Include dependents for focused project graph"}),"\n",(0,s.jsxs)(n.p,{children:["When running ",(0,s.jsx)(n.a,{href:"/docs/commands/project-graph",children:(0,s.jsx)(n.code,{children:"moon project-graph <id>"})}),", we visualize a graph of the\nfocused project and all of its dependencies (other projects it depends on). However, if you wanted\nto also visualize dependents (other projects that depend on the focused project), this was currently\nnot possible."]}),"\n",(0,s.jsxs)(n.p,{children:["We felt this information could be useful, so we've added a ",(0,s.jsx)(n.code,{children:"--dependents"}),"\nflattenDiagnosticMessageText, which will include direct dependents in the graph."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ moon project-graph server --dependents\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We also felt dependent information can be useful when querying projects, so have also added support\nfor the ",(0,s.jsx)(n.code,{children:"--dependents"})," flag to the ",(0,s.jsx)(n.a,{href:"/docs/commands/query/projects",children:(0,s.jsx)(n.code,{children:"moon query projects"})})," command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ moon query projects --affected --dependents\n"})}),"\n",(0,s.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,s.jsxs)(n.p,{children:["View the ",(0,s.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/v1.24.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Added an experimental ",(0,s.jsx)(n.code,{children:"moon templates"})," command, that lists all available codegen templates."]}),"\n",(0,s.jsxs)(n.li,{children:["Added a ",(0,s.jsx)(n.code,{children:"runner.autoCleanCache"})," setting to ",(0,s.jsx)(n.code,{children:".moon/workspace.yml"}),", allowing the post-run clean\nmechanism to be controlled."]}),"\n",(0,s.jsxs)(n.li,{children:["Updated ",(0,s.jsx)(n.code,{children:"moon generate"})," with better argument to variable handling."]}),"\n",(0,s.jsx)(n.li,{children:"Updated action graph and project graph visualization to be more readable."}),"\n",(0,s.jsxs)(n.li,{children:["Updated root-level tasks to have no inputs by default, instead of ",(0,s.jsx)(n.code,{children:"**/*"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},40235:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/v1.24-384db482aaa3b2966bf154362574569d.png"},71670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(27378);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);