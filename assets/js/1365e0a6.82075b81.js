"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29917],{94881:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=o(24246),s=o(71670),a=o(76911);const r={slug:"moon-v1.5",title:"moon v1.5 - Rust tier 2 and 3 support",authors:["milesj"],tags:["rust","lang","tier"],image:"./img/moon/v1.5.png"},i=void 0,l={permalink:"/blog/moon-v1.5",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-05-08_moon-v1.5.mdx",source:"@site/blog/2023-05-08_moon-v1.5.mdx",title:"moon v1.5 - Rust tier 2 and 3 support",description:"With this release, we're announcing not just tier 2, but also tier 3 support for the Rust language.",date:"2023-05-08T00:00:00.000Z",tags:[{inline:!0,label:"rust",permalink:"/blog/tags/rust"},{inline:!0,label:"lang",permalink:"/blog/tags/lang"},{inline:!0,label:"tier",permalink:"/blog/tags/tier"}],readingTime:2.765,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.5",title:"moon v1.5 - Rust tier 2 and 3 support",authors:["milesj"],tags:["rust","lang","tier"],image:"./img/moon/v1.5.png"},unlisted:!1,prevItem:{title:"moon v1.6 - Persistent tasks and task extending RFC",permalink:"/blog/moon-v1.6"},nextItem:{title:"moon v1.4 - New tag target scope, MQL support for query commands, and more!",permalink:"/blog/moon-v1.4"}},c={image:o(96360).Z,authorsImageUrls:[void 0]},d=[{value:"New <code>rust</code> configurations",id:"new-rust-configurations",level:2},{value:"New <code>rust</code> task platform",id:"new-rust-task-platform",level:2},{value:"Updated <code>moon init</code> command",id:"updated-moon-init-command",level:2},{value:"Updated <code>moon docker</code> commands",id:"updated-moon-docker-commands",level:2},{value:"Other changes",id:"other-changes",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"With this release, we're announcing not just tier 2, but also tier 3 support for the Rust language."}),"\n",(0,t.jsx)(n.p,{children:"As big fans of Rust (moon is written in it), we're stoked to finally add full language support, and\nto integrate our first non-JavaScript language! This release is rather massive, and required a ton\nof internal work, most of which we'll skip over."}),"\n",(0,t.jsx)(n.p,{children:"Instead we'll only talk about the key features that you, the consumers, will actually care about. To\nstart, we've started working on a Rust handbook, that outlines how to enable Rust, what kind of\nintegrations we support, and a handful of common questions."}),"\n",(0,t.jsx)("div",{class:"flex justify-center",children:(0,t.jsx)(a.Z,{label:"View Rust handbook",href:"/docs/guides/rust/handbook",size:"lg"})}),"\n",(0,t.jsxs)(n.h2,{id:"new-rust-configurations",children:["New ",(0,t.jsx)(n.code,{children:"rust"})," configurations"]}),"\n",(0,t.jsxs)(n.p,{children:["Languages in\n",(0,t.jsx)(n.a,{href:"/docs/how-it-works/languages#enabling-a-language",children:"moon are enabled through configuration"})," blocks in\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain",children:(0,t.jsx)(n.code,{children:".moon/toolchain.yml"})}),", and Rust is no different. We now support a\n",(0,t.jsx)(n.a,{href:"/docs/config/toolchain#rust",children:(0,t.jsx)(n.code,{children:"rust"})})," toolchain setting\n(",(0,t.jsx)(n.a,{href:"/docs/config/toolchain#rust",children:"view all available settings"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/toolchain.yml"',children:"rust:\n  version: '1.69.0'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(n.code,{children:"rust"})," setting is defined, it will enable the language and\n",(0,t.jsx)(n.a,{href:"/docs/how-it-works/languages#tier-2--platform",children:"deep platform integration"}),", and when the ",(0,t.jsx)(n.code,{children:"version"}),"\nfield is defined, it will further enable\n",(0,t.jsx)(n.a,{href:"/docs/how-it-works/languages#tier-3--toolchain",children:"toolchain support"}),". Both of these features provide\nheavy automation, improving the overall developer experience."]}),"\n",(0,t.jsxs)(n.p,{children:["This is fantastic, but what if another Rust project in the monorepo requires a different toolchain\nchannel/version? If so, they can use the new ",(0,t.jsx)(n.a,{href:"/docs/config/project#rust",children:(0,t.jsx)(n.code,{children:"toolchain.rust"})})," setting\nin ",(0,t.jsx)(n.a,{href:"/docs/config/project",children:(0,t.jsx)(n.code,{children:"moon.yml"})})," to define project-level overrides."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"toolchain:\n  rust:\n    version: '1.58.0'\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"new-rust-task-platform",children:["New ",(0,t.jsx)(n.code,{children:"rust"})," task platform"]}),"\n",(0,t.jsxs)(n.p,{children:["The main benefit of Rust language support is that tasks can be ran within the context of our\n",(0,t.jsx)(n.a,{href:"/docs/how-it-works/languages#tier-2--platform",children:"Rust platform integration"}),". This can easily be done\nby setting the project's ",(0,t.jsx)(n.a,{href:"/docs/config/project#language",children:(0,t.jsx)(n.code,{children:"language"})}),' to "rust" in\n',(0,t.jsx)(n.a,{href:"/docs/config/project",children:(0,t.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This will set the ",(0,t.jsx)(n.a,{href:"/docs/config/project#platform-1",children:(0,t.jsx)(n.code,{children:"platform"})}),' of all tasks within the project to\n"rust", unless they have been explicitly configured to something else.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"language: 'rust'\ntype: 'application'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're mixing languages within a single project, and can't use the ",(0,t.jsx)(n.code,{children:"language"})," setting above, you\ncan define ",(0,t.jsx)(n.code,{children:"platform"})," on the task directly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="<project>/moon.yml"',children:"tasks:\n  build:\n    command: 'cargo build'\n    platform: 'rust'\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["We also attempt to detect this automatially by comparing command names and checking for the\nexistence of files like ",(0,t.jsx)(n.code,{children:"Cargo.toml"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"updated-moon-init-command",children:["Updated ",(0,t.jsx)(n.code,{children:"moon init"})," command"]}),"\n",(0,t.jsxs)(n.p,{children:["As part of this release, we've also updated the ",(0,t.jsx)(n.a,{href:"/docs/commands/init",children:(0,t.jsx)(n.code,{children:"moon init"})})," command to\nsupport initializing Rust. By default, the command will prompt you on whether to install Rust or\nnot, otherwise, when ",(0,t.jsx)(n.code,{children:"--yes"})," is passed, the language will be installed if a ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," file is\ndetected in the destination directory."]}),"\n",(0,t.jsxs)(n.p,{children:["If you already have a moon workspace, you can pass ",(0,t.jsx)(n.code,{children:"--tool rust"})," to install Rust into the workspace."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ moon init --tool rust\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"updated-moon-docker-commands",children:["Updated ",(0,t.jsx)(n.code,{children:"moon docker"})," commands"]}),"\n",(0,t.jsxs)(n.p,{children:["And lastly, we also want to provide a great ",(0,t.jsxs)(n.a,{href:"/docs/guides/docker",children:[(0,t.jsx)(n.code,{children:"Dockerfile"})," experience"]})," when\nusing Rust. The ",(0,t.jsx)(n.a,{href:"/docs/commands/docker/scaffold",children:(0,t.jsx)(n.code,{children:"moon docker scaffold"})})," command has been updated to\ncopy ",(0,t.jsx)(n.code,{children:"Cargo.toml"}),", ",(0,t.jsx)(n.code,{children:"Cargo.lock"}),", ",(0,t.jsx)(n.code,{children:"rust-toolchain.toml"}),", and other Rust/Cargo related files. When\nusing Cargo workspaces, nested ",(0,t.jsx)(n.code,{children:"Cargo.toml"})," files are also scaffolded."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-docker",children:"RUN moon docker scaffold rust-app\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Furthermore, we've also updated the ",(0,t.jsx)(n.a,{href:"/docs/commands/docker/scaffold",children:(0,t.jsx)(n.code,{children:"moon docker prune"})})," command to\nremove the entire ",(0,t.jsx)(n.code,{children:"target"})," directory, greatly reducing the size of the image. Pruning makes the\nassumption that it's being ran ",(0,t.jsx)(n.em,{children:"after"})," a release profile has been built."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-docker",children:"RUN moon run rust-app:build-release\nRUN moon docker prune\n"})}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/moon/releases/tag/v1.5.0",children:"official release"})," for a full list of\nchanges."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},96360:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/v1.5-c0d8c4fbb15e8449bad93fa566d3e9cf.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>r});var t=o(27378);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);