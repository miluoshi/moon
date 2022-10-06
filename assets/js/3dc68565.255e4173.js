"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7566],{5318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9022:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7378),o=t(9619);function r(e){let{header:n,updated:t,version:r}=e;return a.createElement(o.Z,{text:`v${r}`,variant:t?"success":"info",className:n?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7378),o=t(8944),r=t(1792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:n,icon:t,text:l,variant:s}=e;return a.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?i[s]:"bg-gray-100 text-gray-800",n)},t&&a.createElement(r.Z,{icon:t,className:"mr-1"}),l)}},2502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(5773),o=(t(7378),t(5318)),r=t(9022);const i={title:"Tokens"},l=void 0,s={unversionedId:"concepts/token",id:"concepts/token",title:"Tokens",description:"Tokens are variables and functions that can be used by args,",source:"@site/docs/concepts/token.mdx",sourceDirName:"concepts",slug:"/concepts/token",permalink:"/docs/concepts/token",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/token.mdx",tags:[],version:"current",frontMatter:{title:"Tokens"},sidebar:"docs",previous:{title:"Tasks",permalink:"/docs/concepts/task"},next:{title:"Toolchain",permalink:"/docs/concepts/toolchain"}},p={},c=[{value:"Functions",id:"functions",level:2},{value:"File groups",id:"file-groups",level:3},{value:'<code>@group</code><VersionLabel version="0.6" />',id:"group",level:3},{value:"<code>@dirs</code>",id:"dirs",level:3},{value:"<code>@files</code>",id:"files",level:3},{value:"<code>@globs</code>",id:"globs",level:3},{value:"<code>@root</code>",id:"root",level:3},{value:"Inputs &amp; outputs",id:"inputs--outputs",level:3},{value:"<code>@in</code>",id:"in",level:3},{value:"<code>@out</code>",id:"out",level:3},{value:"Variables",id:"variables",level:2},{value:'<code>$language</code><VersionLabel version="0.7" />',id:"language",level:3},{value:"<code>$project</code>",id:"project",level:3},{value:"<code>$projectRoot</code>",id:"projectroot",level:3},{value:"<code>$projectSource</code>",id:"projectsource",level:3},{value:'<code>$projectType</code><VersionLabel version="0.7" />',id:"projecttype",level:3},{value:"<code>$target</code>",id:"target",level:3},{value:"<code>$task</code>",id:"task",level:3},{value:'<code>$taskType</code><VersionLabel version="0.7" />',id:"tasktype",level:3},{value:"<code>$workspaceRoot</code>",id:"workspaceroot",level:3}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tokens are variables and functions that can be used by ",(0,o.kt)("a",{parentName:"p",href:"../config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args")),",\n",(0,o.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs")),", and ",(0,o.kt)("a",{parentName:"p",href:"../config/project#outputs"},(0,o.kt)("inlineCode",{parentName:"a"},"outputs"))," when configuring a\ntask. They provide a way of accessing file group paths, referencing values from other task fields,\nand referencing metadata about the project and task itself."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,"A token function is labeled as such as it takes a single argument, starts with an ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),", and is\nformatted as ",(0,o.kt)("inlineCode",{parentName:"p"},"@name(arg)"),". The following token functions are available, grouped by their\nfunctionality."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Token functions ",(0,o.kt)("em",{parentName:"p"},"must")," be the only content within a list item, as they expand to multiple file\npaths.")),(0,o.kt)("h3",{id:"file-groups"},"File groups"),(0,o.kt)("p",null,"These functions reference file groups by name, where the name is passed as the argument."),(0,o.kt)("h3",{id:"group"},(0,o.kt)("inlineCode",{parentName:"h3"},"@group"),(0,o.kt)(r.Z,{version:"0.6",mdxType:"VersionLabel"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@group(file_group)")," token is a standard token that will be replaced with the file group items\nas-is, for both file paths and globs. This token merely exists for reusability purposes."),(0,o.kt)("p",null,"When used in ",(0,o.kt)("a",{parentName:"p",href:"../config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args")),", it will return relative or absolute paths, depending\non run context, while ",(0,o.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs"))," will return absolute paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"fileGroups:\n  storybook:\n    - '.storybook/**/*'\n    - 'src/**/*'\n    - '**/*.stories.*'\n\n# Configured as\ntasks:\n  build:\n    command: 'build-storybook'\n    inputs:\n      - '@group(storybook)'\n  start:\n    command: 'start-storybook'\n    inputs:\n      - '@group(storybook)'\n\n# Resolves to\ntasks:\n  build:\n    command: 'build-storybook'\n    inputs:\n      - '/path/to/project/.storybook/**/*'\n      - '/path/to/project/src/**/*'\n  start:\n    command: 'start-storybook'\n    inputs:\n      - '/path/to/project/.storybook/**/*'\n      - '/path/to/project/src/**/*'\n")),(0,o.kt)("h3",{id:"dirs"},(0,o.kt)("inlineCode",{parentName:"h3"},"@dirs")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@dirs(file_group)")," token will be replaced with an expanded list of directory paths, derived\nfrom the file group of the same name. If a glob pattern is detected within the file group, it will\nwalk the file system and aggregate all directories found."),(0,o.kt)("p",null,"When used in ",(0,o.kt)("a",{parentName:"p",href:"../config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args")),", it will return relative or absolute paths, depending\non run context, while ",(0,o.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs"))," will return absolute paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"fileGroups:\n  lintable:\n    - 'src'\n    - 'tests'\n    - 'scripts'\n    - '*.config.js'\n\n# Configured as\ntasks:\n  lint:\n    command: 'eslint @dirs(lintable) --color'\n    inputs:\n      - '@dirs(lintable)'\n\n# Resolves to\ntasks:\n  lint:\n    command:\n      - 'eslint'\n      - 'src'\n      - 'tests'\n      - 'scripts'\n      - '--color'\n    inputs:\n      - '/path/to/project/src'\n      - '/path/to/project/tests'\n      - '/path/to/project/scripts'\n")),(0,o.kt)("h3",{id:"files"},(0,o.kt)("inlineCode",{parentName:"h3"},"@files")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@files(file_group)")," token will be replaced with an expanded list of file paths, derived from\nthe file group of the same name. If a glob pattern is detected within the file group, it will walk\nthe file system and aggregate all files found."),(0,o.kt)("p",null,"When used in ",(0,o.kt)("a",{parentName:"p",href:"../config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args")),", it will return relative or absolute paths, depending\non run context, while ",(0,o.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs"))," will return absolute paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"fileGroups:\n  config:\n    - '*.config.js'\n    - 'package.json'\n\n# Configured as\ntasks:\n  build:\n    command: 'webpack build @files(config)'\n    inputs:\n      - '@files(config)'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'webpack'\n      - 'build'\n      - 'babel.config.js'\n      - 'webpack.config.js'\n      - 'package.json'\n    inputs:\n      - '/path/to/project/babel.config.js'\n      - '/path/to/project/webpack.config.js'\n      - '/path/to/project/package.json'\n")),(0,o.kt)("h3",{id:"globs"},(0,o.kt)("inlineCode",{parentName:"h3"},"@globs")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@globs(file_group)")," token will be replaced with an expanded list of glob patterns (as-is),\nderived from the file group of the same name. If a non-glob pattern is detected within the file\ngroup, it will be ignored."),(0,o.kt)("p",null,"When used in ",(0,o.kt)("a",{parentName:"p",href:"../config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args")),", it will return relative or absolute paths, depending\non run context, while ",(0,o.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs"))," will return absolute paths ",(0,o.kt)("em",{parentName:"p"},"and")," also be\nused in affected files detection by matching against the patterns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"fileGroups:\n  tests:\n    - 'tests/**/*'\n    - '**/__tests__/**/*'\n\n# Configured as\ntasks:\n  test:\n    command: 'jest --testMatch @globs(tests)'\n    inputs:\n      - '@globs(tests)'\n\n# Resolves to\ntasks:\n  test:\n    command:\n      - 'jest'\n      - '--testMatch'\n      - 'tests/**/*'\n      - '**/__tests__/**/*'\n    inputs:\n      - '/path/to/project/tests/**/*'\n      - '/path/to/project/**/__tests__/**/*'\n")),(0,o.kt)("h3",{id:"root"},(0,o.kt)("inlineCode",{parentName:"h3"},"@root")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@root(file_group)")," token will be replaced with the lowest common directory, derived from the\nfile group of the same name. If a glob pattern is detected within the file group, it will walk the\nfile system and aggregate all directories found before reducing."),(0,o.kt)("p",null,"When used in ",(0,o.kt)("a",{parentName:"p",href:"../config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args")),", it will return relative paths, while\n",(0,o.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs"))," will return absolute paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"fileGroups:\n  sources:\n    - 'src/app'\n    - 'src/packages'\n    - 'src/scripts'\n\n# Configured as\ntasks:\n  format:\n    command: 'prettier --write @root(sources)'\n    inputs:\n      - '@root(sources)'\n\n# Resolves to\ntasks:\n  format:\n    command:\n      - 'prettier'\n      - '--write'\n      - 'src'\n    inputs:\n      - '/path/to/project/src'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When there's no directies, or too many directories, this function will return the project root\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"."),".")),(0,o.kt)("h3",{id:"inputs--outputs"},"Inputs & outputs"),(0,o.kt)("h3",{id:"in"},(0,o.kt)("inlineCode",{parentName:"h3"},"@in")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," only.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@in(index)")," token will be replaced with a single path, derived from\n",(0,o.kt)("a",{parentName:"p",href:"../config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs"))," by numerical index. If a glob pattern is referenced by index,\nthe glob will be used as-is, instead of returning the expanded list of files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command:\n      - 'babel'\n      - '--copy-files'\n      - '--config-file'\n      - '@in(1)'\n      - '@in(0)'\n    inputs:\n      - 'src'\n      - 'babel.config.js'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'babel'\n      - '--copy-files'\n      - '--config-file'\n      - 'babel.config.js'\n      - 'src'\n    inputs:\n      - '/path/to/project/src'\n      - '/path/to/project/babel.config.js'\n")),(0,o.kt)("h3",{id:"out"},(0,o.kt)("inlineCode",{parentName:"h3"},"@out")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," only.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@out(index)")," token will be replaced with a single path, derived from\n",(0,o.kt)("a",{parentName:"p",href:"../config/project#outputs"},(0,o.kt)("inlineCode",{parentName:"a"},"outputs"))," by numerical index. If a glob pattern is referenced by index,\nthe process will ",(0,o.kt)("strong",{parentName:"p"},"fail"),", as it requires literal folder and file paths."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command:\n      - 'babel'\n      - '.'\n      - '--out-dir'\n      - '@out(0)'\n    outputs:\n      - 'lib'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'babel'\n      - '.'\n      - '--out-dir'\n      - 'lib'\n    outputs:\n      - '/path/to/project/lib'\n")),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Usable in ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," only.")),(0,o.kt)("p",null,"A token variable is a value that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," and is substituted to a value derived from the\ncurrent workspace, project, and task. And unlike token functions, token variables can be placed\n",(0,o.kt)("em",{parentName:"p"},"within")," content when necessary, and supports multiple variables within the same content."),(0,o.kt)("h3",{id:"language"},(0,o.kt)("inlineCode",{parentName:"h3"},"$language"),(0,o.kt)(r.Z,{version:"0.7",mdxType:"VersionLabel"})),(0,o.kt)("p",null,"Programming language the project is written in, as defined in ",(0,o.kt)("a",{parentName:"p",href:"../config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),". If\nthe project has not defined the ",(0,o.kt)("a",{parentName:"p",href:"../config/project#language"},(0,o.kt)("inlineCode",{parentName:"a"},"language")),' setting, or does not have a\nconfig, this defaults to "unknown".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command: 'example debug $language'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - 'debug'\n      - 'node'\n")),(0,o.kt)("h3",{id:"project"},(0,o.kt)("inlineCode",{parentName:"h3"},"$project")),(0,o.kt)("p",null,"ID/name of the project that owns the currently running task, as defined in\n",(0,o.kt)("a",{parentName:"p",href:"../config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command: 'example --project $project'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--project'\n      - 'web'\n")),(0,o.kt)("h3",{id:"projectroot"},(0,o.kt)("inlineCode",{parentName:"h3"},"$projectRoot")),(0,o.kt)("p",null,"Absolute file path to the project root."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command: 'example --cwd $projectRoot'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--cwd'\n      - '/path/to/repo/apps/web'\n")),(0,o.kt)("h3",{id:"projectsource"},(0,o.kt)("inlineCode",{parentName:"h3"},"$projectSource")),(0,o.kt)("p",null,"Relative file path from the workspace root to the project root, as defined in\n",(0,o.kt)("a",{parentName:"p",href:"../config/workspace"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--cache-dir'\n      - '../../.cache/$projectSource'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--cache-dir'\n      - '../../.cache/apps/web'\n")),(0,o.kt)("h3",{id:"projecttype"},(0,o.kt)("inlineCode",{parentName:"h3"},"$projectType"),(0,o.kt)(r.Z,{version:"0.7",mdxType:"VersionLabel"})),(0,o.kt)("p",null,"The type of project, as defined in ",(0,o.kt)("a",{parentName:"p",href:"../config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),". If the project has not defined\nthe ",(0,o.kt)("a",{parentName:"p",href:"../config/project#type"},(0,o.kt)("inlineCode",{parentName:"a"},"type")),' setting, or does not have a config, this defaults to "unknown".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command: 'example debug $projectType'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - 'debug'\n      - 'application'\n")),(0,o.kt)("h3",{id:"target"},(0,o.kt)("inlineCode",{parentName:"h3"},"$target")),(0,o.kt)("p",null,"Target that is currently running. Is a combination of project and task name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command: 'example $target'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - 'web:build'\n")),(0,o.kt)("h3",{id:"task"},(0,o.kt)("inlineCode",{parentName:"h3"},"$task")),(0,o.kt)("p",null,"ID/name of the task that is currently running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command: 'example --task=$task'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--task=build'\n")),(0,o.kt)("h3",{id:"tasktype"},(0,o.kt)("inlineCode",{parentName:"h3"},"$taskType"),(0,o.kt)(r.Z,{version:"0.7",mdxType:"VersionLabel"})),(0,o.kt)("p",null,"The type of task that is currently running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command: 'example --type $taskType'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--type'\n      - 'system'\n")),(0,o.kt)("h3",{id:"workspaceroot"},(0,o.kt)("inlineCode",{parentName:"h3"},"$workspaceRoot")),(0,o.kt)("p",null,"Absolute file path to the workspace root."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Configured as\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--cwd'\n      - '$workspaceRoot'\n\n# Resolves to\ntasks:\n  build:\n    command:\n      - 'example'\n      - '--cwd'\n      - '/path/to/repo'\n")))}u.isMDXComponent=!0}}]);