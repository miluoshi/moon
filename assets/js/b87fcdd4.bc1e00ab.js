"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37514],{12384:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(24246),o=i(71670),l=i(79022);const t={title:"activate",toc_max_heading_level:4},r=void 0,c={id:"proto/commands/activate",title:"activate",description:"This feature is extremely experimental and may change based on feedback! If you run into any issues,",source:"@site/docs/proto/commands/activate.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/activate",permalink:"/docs/proto/commands/activate",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/activate.mdx",tags:[],version:"current",frontMatter:{title:"activate",toc_max_heading_level:4},sidebar:"proto",previous:{title:"WASM",permalink:"/docs/proto/wasm-plugin"},next:{title:"alias",permalink:"/docs/proto/commands/alias"}},a={},d=[{value:"Setup",id:"setup",level:3},{value:"Bash",id:"bash",level:4},{value:"Elvish",id:"elvish",level:4},{value:"Fish",id:"fish",level:4},{value:"Murex",id:"murex",level:4},{value:"Nu",id:"nu",level:4},{value:"Pwsh",id:"pwsh",level:4},{value:"Zsh",id:"zsh",level:4},{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{version:"0.38.0",header:!0}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["This feature is extremely experimental and may change based on feedback! If you run into any issues,\nplease report an issue on ",(0,s.jsx)(n.a,{href:"https://github.com/moonrepo/proto",children:"GitHub"})," or\n",(0,s.jsx)(n.a,{href:"https://discord.gg/qCh9MEynv2",children:"Discord"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"proto activate <shell>"})," command will activate proto for the current shell session, by exporting\nenvironment variables and prepending ",(0,s.jsx)(n.code,{children:"PATH"})," for each tool configured in the current directory.\nActivation is ran each time the current directory changes using a shell hook."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Learn more about\n",(0,s.jsx)(n.a,{href:"../workflows#shell-activation",children:"shell activation in the official workflow documentation"}),"!"]})}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["The following activation steps should be added ",(0,s.jsx)(n.em,{children:"after"})," all environment variable and ",(0,s.jsx)(n.code,{children:"PATH"}),"\nmodifications have happened in your shell, typically at the end of your shell profile."]}),"\n",(0,s.jsx)(n.h4,{id:"bash",children:"Bash"}),"\n",(0,s.jsxs)(n.p,{children:["Add the following line to the end of your ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," or ",(0,s.jsx)(n.code,{children:"~/.bash_profile"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'eval "$(proto activate bash)"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"elvish",children:"Elvish"}),"\n",(0,s.jsx)(n.p,{children:"Generate the hook:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"proto activate elvish > ~/.elvish/lib/proto-hook.elv\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then add the following line to your ",(0,s.jsx)(n.code,{children:"~/.elvish/rc.elv"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"use proto-hook\n"})}),"\n",(0,s.jsx)(n.h4,{id:"fish",children:"Fish"}),"\n",(0,s.jsxs)(n.p,{children:["Add the following line to the end of your ",(0,s.jsx)(n.code,{children:"~/.config/fish/config.fish"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"proto activate fish | source\n"})}),"\n",(0,s.jsx)(n.h4,{id:"murex",children:"Murex"}),"\n",(0,s.jsxs)(n.p,{children:["Add the following line to the end of your ",(0,s.jsx)(n.code,{children:"~/.murex_profile"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"proto activate murex -> source\n"})}),"\n",(0,s.jsx)(n.h4,{id:"nu",children:"Nu"}),"\n",(0,s.jsx)(n.p,{children:"Generate the hook:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"proto activate nu > ~/.config/nushell/proto-hook.nu\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then add the following line to your ",(0,s.jsx)(n.code,{children:"~/.config/nushell/config.nu"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"use proto-hook.nu\n"})}),"\n",(0,s.jsx)(n.h4,{id:"pwsh",children:"Pwsh"}),"\n",(0,s.jsxs)(n.p,{children:["Add the following line to the end of your profile (",(0,s.jsx)(n.code,{children:"$PROFILE"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'Invoke-Expression "$(proto activate pwsh)"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"zsh",children:"Zsh"}),"\n",(0,s.jsxs)(n.p,{children:["Add the following line to the end of your ",(0,s.jsx)(n.code,{children:"~/.zshrc"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'eval "$(proto activate zsh)"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<shell>"})," - The shell to activate for."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--export"})," - Print the activate instructions in shell-specific syntax."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--json"})," - Print the activate instructions in JSON format."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--no-bin"})," - Do not include ",(0,s.jsx)(n.code,{children:"~/.proto/bin"})," when prepending ",(0,s.jsx)(n.code,{children:"PATH"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--no-shim"})," - Do not include ",(0,s.jsx)(n.code,{children:"~/.proto/shims"})," when prepending ",(0,s.jsx)(n.code,{children:"PATH"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79022:(e,n,i)=>{i.d(n,{Z:()=>l});var s=i(9619),o=i(24246);function l(e){let{header:n,inline:i,updated:l,version:t}=e;return(0,o.jsx)(s.Z,{text:`v${t}`,variant:l?"success":"info",className:n?"absolute right-0 top-1.5":i?"inline-block":"ml-2"})}},9619:(e,n,i)=>{i.d(n,{Z:()=>r});var s=i(40624),o=i(31792),l=i(24246);const t={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function r(e){let{className:n,icon:i,text:r,variant:c}=e;return(0,l.jsxs)("span",{className:(0,s.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?t[c]:"bg-gray-100 text-gray-800",n),children:[i&&(0,l.jsx)(o.Z,{icon:i,className:"mr-1"}),r]})}},71670:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var s=i(27378);const o={},l=s.createContext(o);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);