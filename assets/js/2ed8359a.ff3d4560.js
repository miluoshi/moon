"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42121],{78952:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=o(24246),s=o(71670);const r={title:"Toolchain"},l=void 0,a={id:"concepts/toolchain",title:"Toolchain",description:"The toolchain is an internal layer for downloading, installing, and managing tools (languages,",source:"@site/docs/concepts/toolchain.mdx",sourceDirName:"concepts",slug:"/concepts/toolchain",permalink:"/docs/concepts/toolchain",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/toolchain.mdx",tags:[],version:"current",frontMatter:{title:"Toolchain"},sidebar:"docs",previous:{title:"Tokens",permalink:"/docs/concepts/token"},next:{title:"Workspace",permalink:"/docs/concepts/workspace"}},t={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Force disabling",id:"force-disabling",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Version specification",id:"version-specification",level:3},{value:"Supported tools",id:"supported-tools",level:2},{value:"Bun",id:"bun",level:3},{value:"Deno",id:"deno",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Rust",id:"rust",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'The toolchain is an internal layer for downloading, installing, and managing tools (languages,\ndependency managers, libraries, and binaries) that are required at runtime. We embrace this approach\nover relying on these tools "existing" in the current environment, as it ensures the following\nacross any environment or machine:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The version and enabled features of a tool are identical."}),"\n",(0,i.jsx)(n.li,{children:"Tools are isolated and unaffected by external sources."}),"\n",(0,i.jsxs)(n.li,{children:["Builds are consistent, reproducible, and ",(0,i.jsx)(n.em,{children:"hopefully"})," deterministic."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Furthermore, this avoids a developer, pipeline, machine, etc, having to pre-install all the\nnecessary tools, ",(0,i.jsx)(n.em,{children:"and"})," to keep them in sync as time passes."]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsxs)(n.p,{children:["The toolchain is built around ",(0,i.jsx)(n.a,{href:"/proto",children:"proto"}),", our stand-alone multi-language version manager. moon\nwill piggyback of proto's toolchain found at ",(0,i.jsx)(n.code,{children:"~/.proto"})," and reuse any tools available, or download\nand install them if they're missing."]}),"\n",(0,i.jsx)(n.h3,{id:"force-disabling",children:"Force disabling"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"MOON_TOOLCHAIN_FORCE_GLOBALS"})," environment variable can be set to ",(0,i.jsx)(n.code,{children:"true"})," to force moon to use\ntool binaries available on ",(0,i.jsx)(n.code,{children:"PATH"}),", instead of downloading and installing them. This is useful for\npre-configured environments, like CI and Docker."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The tools that are managed by the toolchain are configured through the\n",(0,i.jsx)(n.a,{href:"../config/toolchain",children:(0,i.jsx)(n.code,{children:".moon/toolchain.yml"})})," file, but can be overridden in each project with\n",(0,i.jsx)(n.a,{href:"../config/project#toolchain",children:(0,i.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"version-specification",children:"Version specification"}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned above, tools within the toolchain are managed ",(0,i.jsx)(n.em,{children:"by version"})," for consistency across\nmachines. These versions are configured on a per-tool basis in\n",(0,i.jsx)(n.a,{href:"../config/toolchain",children:(0,i.jsx)(n.code,{children:".moon/toolchain.yml"})}),". So what kinds of versions are allowed?"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full versions"})," - A full version is a semantic version that is fully specified, such as ",(0,i.jsx)(n.code,{children:"1.2.3"}),"\nor ",(0,i.jsx)(n.code,{children:"2.0.0-rc.1"}),". This is the most common way to specify a version, and is preferred to avoid\nsubtle deviations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Partial versions"})," - A partial version is a version that is either missing a patch number, minor\nnumber, or both, such as ",(0,i.jsx)(n.code,{children:"1.2"})," or ",(0,i.jsx)(n.code,{children:"1"}),". These can also be represented with requirement syntax, such\nas ",(0,i.jsx)(n.code,{children:"^1.2"})," or ",(0,i.jsx)(n.code,{children:"~1"}),". If using partials, we suggest having a major and minor number to reduce the\ndeviation of versions across machines."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Aliases"})," - An alias is a human-readable word that maps to a specific version. For example,\n",(0,i.jsx)(n.code,{children:"latest"})," or ",(0,i.jsx)(n.code,{children:"stable"})," maps to the latest version of a tool, or ",(0,i.jsx)(n.code,{children:"canary"})," which maps to applicable\ncanary release, or even a completely custom alias like ",(0,i.jsx)(n.code,{children:"berry"}),". Aliases are language specific, are\nnot managed by moon, and are not suggested for use since they can change at any time (or even\ndaily!)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This sounds great, but how exactly does this work? For full versions and aliases, it's straight\nforward, as the resolved version is used as-is (assuming it's a legitimate version), and can be\nfound at ",(0,i.jsx)(n.code,{children:"~/.proto/tools/<tool>/<version>"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For partial versions, we first check locally installed versions for a match, by scanning\n",(0,i.jsx)(n.code,{children:"~/.proto/tools/<tool>"}),". For example, if the requested version is ",(0,i.jsx)(n.code,{children:"1.2"})," and we have ",(0,i.jsx)(n.code,{children:"1.2.10"}),"\ninstalled locally, we'll use that version instead of downloading the latest ",(0,i.jsx)(n.code,{children:"1.2.*"})," version.\nOtherwise, we'll download the latest version that matches the partial version, and install it\nlocally."]}),"\n",(0,i.jsx)(n.h2,{id:"supported-tools",children:"Supported tools"}),"\n",(0,i.jsx)(n.p,{children:"The following tools are currently managed by the toolchain."}),"\n",(0,i.jsx)(n.h3,{id:"bun",children:"Bun"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["View the ",(0,i.jsx)(n.a,{href:"../guides/javascript/bun-handbook",children:"Bun handbook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Configured with: ",(0,i.jsx)(n.a,{href:"../config/toolchain#bun",children:(0,i.jsx)(n.code,{children:"bun"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Installed to: ",(0,i.jsx)(n.code,{children:"~/.proto/tools/bun/x.x.x"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deno",children:"Deno"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["View the ",(0,i.jsx)(n.a,{href:"../guides/javascript/deno-handbook",children:"Deno handbook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Configured with: ",(0,i.jsx)(n.a,{href:"../config/toolchain#deno",children:(0,i.jsx)(n.code,{children:"deno"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Installed to: ",(0,i.jsx)(n.code,{children:"~/.proto/tools/deno/x.x.x"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["View the ",(0,i.jsx)(n.a,{href:"../guides/javascript/node-handbook",children:"Node.js handbook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Configured with: ",(0,i.jsx)(n.a,{href:"../config/toolchain#node",children:(0,i.jsx)(n.code,{children:"node"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Installed to: ",(0,i.jsx)(n.code,{children:"~/.proto/tools/node/x.x.x"})]}),"\n",(0,i.jsxs)(n.li,{children:["Dependency managers: ",(0,i.jsx)(n.a,{href:"../config/toolchain#npm-pnpm-yarn-bun",children:(0,i.jsx)(n.code,{children:"npm"})}),", ",(0,i.jsx)(n.a,{href:"../config/toolchain#npm-pnpm-yarn-bun",children:(0,i.jsx)(n.code,{children:"pnpm"})}),", ",(0,i.jsx)(n.a,{href:"../config/toolchain#npm-pnpm-yarn-bun",children:(0,i.jsx)(n.code,{children:"yarn"})}),", ",(0,i.jsx)(n.a,{href:"../config/toolchain#npm-pnpm-yarn-bun",children:(0,i.jsx)(n.code,{children:"bun"})})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rust",children:"Rust"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["View the ",(0,i.jsx)(n.a,{href:"../guides/rust/handbook",children:"Rust handbook"})]}),"\n",(0,i.jsxs)(n.li,{children:["Configured with: ",(0,i.jsx)(n.a,{href:"../config/toolchain#rust",children:(0,i.jsx)(n.code,{children:"rust"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Installed to: ",(0,i.jsx)(n.code,{children:"~/.rustup/toolchains/x.x.x"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>l});var i=o(27378);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);