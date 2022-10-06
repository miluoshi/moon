"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6629],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7378),r=n(8944);const i="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(5773),r=n(7378),i=n(8944),l=n(6457),o=n(784),s=n(9947),c=n(3457);const u="tabList_J5MA",p="tabItem_l0OV";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:g,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=g){const e=v[g];null!=e&&e!==w&&k.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==w&&(I(t),T(a),null!=g&&N(g,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:O,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},8109:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7378);function r(e){let{src:t,width:n="90%",alt:r="",title:i}=e;return a.createElement("div",{style:{paddingBottom:"1rem",paddingTop:"1rem",textAlign:"center"}},a.createElement("img",{src:t.default,width:n,alt:r,title:i}))}},1279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(5773),r=(n(7378),n(5318)),i=n(3337),l=n(9798),o=n(8109);const s={title:"Continuous integration (CI)"},c=void 0,u={unversionedId:"guides/ci",id:"guides/ci",title:"Continuous integration (CI)",description:"All companies and projects rely on continuous integration (CI) to ensure high quality code and to",source:"@site/docs/guides/ci.mdx",sourceDirName:"guides",slug:"/guides/ci",permalink:"/docs/guides/ci",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/ci.mdx",tags:[],version:"current",frontMatter:{title:"Continuous integration (CI)"},sidebar:"guides",next:{title:"Code generation",permalink:"/docs/guides/codegen"}},p={},m=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuring tasks",id:"configuring-tasks",level:2},{value:"Integrating",id:"integrating",level:2},{value:"Comparing revisions",id:"comparing-revisions",level:2},{value:"Parallelizing tasks",id:"parallelizing-tasks",level:2},{value:"Reporting run results",id:"reporting-run-results",level:2}],d={toc:m};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All companies and projects rely on continuous integration (CI) to ensure high quality code and to\navoid regressions. Because this is such a critical piece of every developer's workflow, we wanted to\nsupport it as a first-class feature within moon, and we do just that with the\n",(0,r.kt)("a",{parentName:"p",href:"../commands/ci"},(0,r.kt)("inlineCode",{parentName:"a"},"moon ci"))," command."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ci")," command does all the heavy lifting necessary for effectively running jobs. It achieves this\nby automatically running the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Determines touched files by comparing the current HEAD against a base."),(0,r.kt)("li",{parentName:"ul"},"Determines all ",(0,r.kt)("a",{parentName:"li",href:"../concepts/target"},"targets")," that need to run based on touched files."),(0,r.kt)("li",{parentName:"ul"},"Additionally runs affected ",(0,r.kt)("a",{parentName:"li",href:"../concepts/target"},"targets")," dependencies ",(0,r.kt)("em",{parentName:"li"},"and")," dependents."),(0,r.kt)("li",{parentName:"ul"},"Generates an action and dependency graph."),(0,r.kt)("li",{parentName:"ul"},"Installs the toolchain, Node.js, and npm dependencies."),(0,r.kt)("li",{parentName:"ul"},"Runs all actions within the graph using a thread pool."),(0,r.kt)("li",{parentName:"ul"},"Displays stats about all passing, failed, and invalid actions.")),(0,r.kt)("h2",{id:"configuring-tasks"},"Configuring tasks"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("em",{parentName:"p"},"all tasks")," run in CI, as you should always be building, linting, type-checking,\ntesting, so on and so forth. However, this isn't always true, so this can be disabled on a per-task\nbasis through the ",(0,r.kt)("a",{parentName:"p",href:"../config/project#runinci"},(0,r.kt)("inlineCode",{parentName:"a"},"runInCI"))," or ",(0,r.kt)("a",{parentName:"p",href:"../config/project#local"},(0,r.kt)("inlineCode",{parentName:"a"},"local")),"\noptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tasks:\n  dev:\n    command: 'webpack server'\n    options:\n      runInCI: false\n    # Or\n    local: true\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This option ",(0,r.kt)("em",{parentName:"p"},"must")," be set to false for tasks that spawn a long-running or never-ending process, like\nHTTP or development servers. To help mitigate this, tasks named ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," are false\nby default. This can be easily controlled with the ",(0,r.kt)("a",{parentName:"p",href:"../config/project#local"},(0,r.kt)("inlineCode",{parentName:"a"},"local"))," setting.")),(0,r.kt)("h2",{id:"integrating"},"Integrating"),(0,r.kt)("p",null,"Although moon has an ",(0,r.kt)("a",{parentName:"p",href:"../concepts/toolchain"},"integrated toolchain"),", we still require Node.js and\ndependencies to be installed ",(0,r.kt)("em",{parentName:"p"},"beforehand"),", as moon is currently shipped as an\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@moonrepo/cli"},"npm package"),". This is unfortunate and we're looking\ninto other distribution channels."),(0,r.kt)("p",null,"With that being said, the following examples can be referenced for setting up moon and its CI\nworkflow in popular services. The examples assume a\n",(0,r.kt)("a",{parentName:"p",href:"../install#adding-a-package-script"},"package script named ",(0,r.kt)("inlineCode",{parentName:"a"},"moon"))," and are using Yarn 3, but feel\nfree to replace with your chosen setup."),(0,r.kt)(i.Z,{groupId:"ci-env",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"github",label:"GitHub",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"name: 'Pipeline'\non:\n  push:\n    branches:\n      - 'master'\n  pull_request:\njobs:\n  ci:\n    name: 'CI'\n    runs-on: 'ubuntu-latest'\n    steps:\n      - uses: 'actions/checkout@v3'\n        with:\n          fetch-depth: 0\n      - uses: 'actions/setup-node@v3'\n        with:\n          cache: 'yarn'\n      - run: 'yarn install --immutable'\n      - run: 'yarn moon ci'\n"))),(0,r.kt)(l.Z,{value:"buildkite",label:"Buildkite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".buildkite/pipeline.yml"',title:'".buildkite/pipeline.yml"'},"steps:\n  - label: 'CI'\n    commands:\n      - 'yarn install --immutable'\n      - 'yarn moon ci'\n"))),(0,r.kt)(l.Z,{value:"circleci",label:"CircleCI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},"version: 2.1\norbs:\n  node: 'circleci/node@5.0.2'\njobs:\n  ci:\n    docker:\n      - image: 'cimg/base:stable'\n    steps:\n      - checkout\n      - node/install:\n          install-yarn: true\n          node-version: '16.13'\n      - node/install-packages:\n          check-cache: 'always'\n          pkg-manager: 'yarn-berry'\n      - run: 'yarn moon ci'\nworkflows:\n  pipeline:\n    jobs:\n      - 'ci'\n"))),(0,r.kt)(l.Z,{value:"travisci",label:"TravisCI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},"language: node_js\nnode_js:\n  - 16\ncache: yarn\nscript: 'moon ci'\n")))),(0,r.kt)("h2",{id:"comparing-revisions"},"Comparing revisions"),(0,r.kt)("p",null,"By default the command will compare the current HEAD against a base revision, which is typically the\nconfigured ",(0,r.kt)("a",{parentName:"p",href:"../config/workspace#defaultbranch"},(0,r.kt)("inlineCode",{parentName:"a"},"vcs.defaultBranch"))," (master, main, trunk, etc). Both\nof these can be customized with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--base")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--head")," options respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon ci --base <BRANCH> --head <SHA>\n")),(0,r.kt)("h2",{id:"parallelizing-tasks"},"Parallelizing tasks"),(0,r.kt)("p",null,"If your CI environment supports sharding across multiple jobs, then you can utilize moon's built in\nparallelism by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--jobTotal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--job")," options. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--jobTotal")," option is an integer of\nthe total number of jobs available, and ",(0,r.kt)("inlineCode",{parentName:"p"},"--job")," is the current index (0 based) amongst the total."),(0,r.kt)("p",null,"When these options are passed, moon will only run affected ",(0,r.kt)("a",{parentName:"p",href:"../concepts/target"},"targets")," based on\nthe current job slice."),(0,r.kt)(i.Z,{groupId:"ci-env",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"github",label:"GitHub",mdxType:"TabItem"},(0,r.kt)("p",null,"GitHub Actions do not support native parallelism, but it can be emulated using it's matrix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"# ...\njobs:\n  ci:\n    # ...\n    strategy:\n      matrix:\n        index: [0, 1]\n    steps:\n      # ...\n      - run: 'yarn moon ci --job ${{ matrix.index }} --jobTotal 2'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"},"Documentation")))),(0,r.kt)(l.Z,{value:"buildkite",label:"Buildkite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".buildkite/pipeline.yml"',title:'".buildkite/pipeline.yml"'},"# ...\nsteps:\n  - label: 'CI'\n    parallelism: 10\n    commands:\n      # ...\n      - 'yarn moon ci --job $$BUILDKITE_PARALLEL_JOB --jobTotal $$BUILDKITE_PARALLEL_JOB_COUNT'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://buildkite.com/docs/tutorials/parallel-builds#parallel-jobs"},"Documentation")))),(0,r.kt)(l.Z,{value:"circleci",label:"CircleCI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},"# ...\njobs:\n  ci:\n    # ...\n    parallelism: 10\n    steps:\n      # ...\n      - run: 'yarn moon ci --job $CIRCLE_NODE_INDEX --jobTotal $CIRCLE_NODE_TOTAL'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://circleci.com/docs/2.0/parallelism-faster-jobs/"},"Documentation")))),(0,r.kt)(l.Z,{value:"travisci",label:"TravisCI",mdxType:"TabItem"},(0,r.kt)("p",null,"TravisCI does not support native parallelism, but it can be emulated using it's matrix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},"# ...\nenv:\n  global:\n    - TRAVIS_JOB_TOTAL=2\n  jobs:\n    - TRAVIS_JOB_INDEX=0\n    - TRAVIS_JOB_INDEX=1\nscript: 'moon ci --job $TRAVIS_JOB_INDEX --jobTotal $TRAVIS_JOB_TOTAL'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.travis-ci.com/user/speeding-up-the-build/"},"Documentation"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your CI environment may provide environment variables for these 2 values.")),(0,r.kt)("h2",{id:"reporting-run-results"},"Reporting run results"),(0,r.kt)("p",null,"If you're using GitHub Actions as your CI provider, we suggest using our\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/moon-ci-run-reports"},(0,r.kt)("inlineCode",{parentName:"a"},"moonrepo/run-report-action")),". This\naction will report the results of a ",(0,r.kt)("a",{parentName:"p",href:"../commands/ci"},(0,r.kt)("inlineCode",{parentName:"a"},"moon ci"))," run to a pull request as a comment\nand workflow summary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"# ...\njobs:\n  ci:\n    name: 'CI'\n    runs-on: 'ubuntu-latest'\n    steps:\n      # ...\n      - run: 'yarn moon ci'\n      - uses: 'moonrepo/run-report-action@v1'\n        if: success() || failure()\n        with:\n          access-token: ${{ secrets.GITHUB_TOKEN }}\n")),(0,r.kt)("p",null,"The report looks something like the following:"),(0,r.kt)(o.Z,{src:n(3432),width:"60%",mdxType:"Image"}))}g.isMDXComponent=!0},3432:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/run-report-41cffa17cd530ab8cca5cef47b38dcfd.png"}}]);