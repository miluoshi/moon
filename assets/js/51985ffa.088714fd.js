(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6353],{6177:(e,t,n)=>{"use strict";n.d(t,{F:()=>c});var a=n(7378),r=n(1763);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function l(e,t){const[n,l]=(0,a.useState)(),c=(0,a.useCallback)((()=>{var t;l(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,l]);(0,a.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=s);const l=(0,r.zX)(t),c=(0,r.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(l);return e&&t.observe(e,c),()=>t.disconnect()}),[e,l,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function c(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),s=(0,a.useRef)(null),c=(0,a.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),o=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");r(n)}),[s]);return l(s,o),(0,a.useEffect)((()=>{o()}),[e,o]),(0,a.useEffect)((()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)})),[o]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:c}}},6499:(e,t,n)=>{"use strict";n.d(t,{p:()=>s});var a=n(5421),r=n(624);function s(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},433:(e,t,n)=>{"use strict";n.d(t,{QC:()=>f,Vo:()=>d,bc:()=>i,nZ:()=>m,nt:()=>u});var a=n(6324),r=n.n(a);const s=/title=(?<quote>["'])(?<title>.*?)\1/,l=/\{(?<range>[\d,-]+)\}/,c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function o(e,t){const n=e.map((e=>{const{start:n,end:a}=c[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){var t;return(null==e||null==(t=e.match(s))?void 0:t.groups.title)??""}function u(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}function m(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:s,metastring:i}=t;if(i&&l.test(i)){const e=i.match(l).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,a=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return o(["js","jsBlock"],t);case"jsx":case"tsx":return o(["js","jsBlock","jsx"],t);case"html":return o(["js","jsBlock","html"],t);case"python":case"py":case"bash":return o(["bash"],t);case"markdown":case"md":return o(["html","jsx","bash"],t);default:return o(Object.keys(c),t)}}(a,s),d=n.split("\n"),m=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),f=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),p=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<d.length;){const e=d[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));f[t]?m[f[t]].range+=`${r},`:p[t]?m[p[t]].start=r:h[t]&&(m[h[t]].range+=`${m[h[t]].start}-${r-1},`),d.splice(r,1)}n=d.join("\n");const b={};return Object.entries(m).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:n}}function f(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const s=t[a];s&&"string"==typeof r&&(n[s]=r)})),n}},1739:(e,t,n)=>{"use strict";const a=n(7378),r=n(1884),s=n(4801),l=n(2700),c=n(1999),o=n(4137),i=n(6498),u=n(6715),d=e=>e&&e.__esModule?e:{default:e},m=d(a),f=d(r),p=d(c);function h(e,t,n){if(!e.match(/api\/([\d.]+)/)&&!e.includes("api/next")&&n&&n.name!==t.version){const t="current"===n.name?"next":n.name;return e.endsWith("/api")?`${e}/${t}`:e.replace("/api/",`/api/${t}/`)}return e}e.exports=function(e){let{options:t,packages:n,history:r}=e;const c=l.useDocsVersion(),d=s.useDocsPreferredVersion(c.pluginId).preferredVersion;return a.useEffect((()=>{1===n.length?r.replace(h(n[0].entryPoints[0].reflection.permalink,c,d)):d&&r.replace(h(r.location.pathname,c,d))}),[n,r,c,d]),m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col apiItemCol"},t.banner&&m.default.createElement("div",{className:"alert alert--info margin-bottom--md",role:"alert"},m.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.banner}})),m.default.createElement(u.VersionBanner,null),m.default.createElement("div",{className:"apiItemContainer"},m.default.createElement("article",null,m.default.createElement("div",{className:"markdown"},m.default.createElement("header",null,m.default.createElement(p.default,{as:"h1"},"API")),m.default.createElement("section",{className:"tsd-panel"},m.default.createElement("h3",{className:"tsd-panel-header"},"Packages"),m.default.createElement("div",{className:"tsd-panel-content"},m.default.createElement("ul",{className:"tsd-index-list"},n.map((e=>m.default.createElement("li",{key:e.packageName,className:"tsd-truncate"},m.default.createElement(f.default,{className:"tsd-kind-icon",to:e.entryPoints[0].reflection.permalink},m.default.createElement("span",{className:"tsd-signature-symbol"},"v",e.packageVersion)," ",m.default.createElement("span",null,o.removeScopes(e.packageName,t.scopes)))))))))),m.default.createElement(i.Footer,null)))))}},6498:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=(e=>e&&e.__esModule?e:{default:e})(n(7378));t.Footer=function(){return a.default.createElement("footer",{className:"tsd-footer"},"Powered by"," ",a.default.createElement("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api"},"docusaurus-plugin-typedoc-api")," ","and ",a.default.createElement("a",{href:"https://typedoc.org/"},"TypeDoc"))}},6715:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=n(7378),r=n(1884),s=n(2935),l=n(4801),c=n(2700),o=e=>e&&e.__esModule?e:{default:e},i=o(a),u=o(r);t.VersionBanner=function(){const e=c.useDocsVersion(),t=e.banner,n=e.docs,r=e.pluginId,o=e.version,d=s.useDocVersionSuggestions(r).latestVersionSuggestion,m=l.useDocsPreferredVersion(r).savePreferredVersionName,f=a.useCallback((()=>{m(d.name)}),[d.name,m]);if(!t||!d)return null;const p=n[d.label];return i.default.createElement("div",{className:`${l.ThemeClassNames.docs.docVersionBanner} alert alert--warning margin-bottom--md`,role:"alert"},i.default.createElement("div",null,"unreleased"===t&&i.default.createElement(i.default.Fragment,null,"This is documentation for an unreleased version."),"unmaintained"===t&&i.default.createElement(i.default.Fragment,null,"This is documentation for version ",i.default.createElement("b",null,o),".")," ","For the latest API, see version"," ",i.default.createElement("b",null,i.default.createElement(u.default,{to:p.id,onClick:f},p.title)),"."))}},4137:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeScopes=function(e,t){return 0===t.length?e:t.reduce(((e,t)=>e.replace(new RegExp(`^(${t}-|@${t}/)`),"")),e)}},6324:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,s]=t;if(a&&s){a=parseInt(a),s=parseInt(s);const e=a<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=a;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);