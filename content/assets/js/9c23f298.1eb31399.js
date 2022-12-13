"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[44865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"develop-semantic-title",title:"Conventional Commits"},i=void 0,o={unversionedId:"develop-semantic-title",id:"develop-semantic-title",title:"Conventional Commits",description:"This guide explains why you need good PR titles and how you do write PR titles in Conventional Commits spec.",source:"@site/contribute/develop-semantic-title.md",sourceDirName:".",slug:"/develop-semantic-title",permalink:"/contribute/develop-semantic-title",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/develop-semantic-title.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1670904633,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{id:"develop-semantic-title",title:"Conventional Commits"},sidebar:"sidebarDevelopment",previous:{title:"Labels",permalink:"/contribute/develop-labels"},next:{title:"Testing and CI",permalink:"/contribute/category/testing-and-ci"}},p={},s=[{value:"Why do commit messages matter?",id:"why-do-commit-messages-matter",level:2},{value:"How to write good PR titles?",id:"how-to-write-good-pr-titles",level:2},{value:"Quick Examples",id:"quick-examples",level:3},{value:"Type",id:"type",level:3},{value:"Scope",id:"scope",level:3},{value:"Summary",id:"summary",level:3},{value:"Full examples",id:"full-examples",level:3}],m={toc:s};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains why you need good PR titles and how you do write PR titles in Conventional Commits spec."),(0,r.kt)("h2",{id:"why-do-commit-messages-matter"},"Why do commit messages matter?"),(0,r.kt)("p",null,'Since the Pulsar community uses "Squash and Merge", the commit message is effectively the same as the PR title.'),(0,r.kt)("p",null,"Engineers and writers submit or review PRs almost every day."),(0,r.kt)("p",null,"A PR title is a summary of your changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vague, boring, and unclear PR titles decrease team efficiency and productivity."),(0,r.kt)("li",{parentName:"ul"},"PR titles should be engaging, easy to understand, and readable.")),(0,r.kt)("p",null,"Good titles often bring many benefits, including but not limited to the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Speed up the review process.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can tell from the title what changes the PR introduces."))),(0,r.kt)("li",{parentName:"ul"},"Facilitate understanding of PR changes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PR titles are shown on Pulsar release notes as items. Concise PR titles make your changes easier to understand."),(0,r.kt)("li",{parentName:"ul"},"Especially when you read commit logs in command-line tools, clear commit messages show PR changes quickly."))),(0,r.kt)("li",{parentName:"ul"},"Increase search efficiency.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can skim through hundreds of commits and locate desired information quickly."))),(0,r.kt)("li",{parentName:"ul"},"Remind you to think about your PR.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you can not write a PR title in a simple way (for example, ",(0,r.kt)("a",{parentName:"li",href:"#type"},"[type]"),", ",(0,r.kt)("a",{parentName:"li",href:"#scope"},"[scope]"),", or ",(0,r.kt)("a",{parentName:"li",href:"#summary"},"[summary]"),"), or you need to use several types/scopes, consider whether your PR contains ",(0,r.kt)("strong",{parentName:"li"},"too many")," changes across various scopes. If so, consider splitting this big PR into several small PRs. In this way, you might get your PRs reviewed faster.")))),(0,r.kt)("h2",{id:"how-to-write-good-pr-titles"},"How to write good PR titles?"),(0,r.kt)("p",null,"A PR title should be structured as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Semantic Pull Request Title",src:a(94111).Z,width:"1166",height:"660"})),(0,r.kt)("p",null,"The rule can be interpreted as: A good title = clear format (",(0,r.kt)("a",{parentName:"p",href:"#type"},"type")," and ",(0,r.kt)("a",{parentName:"p",href:"#scope"},"scope"),") + self-explanatory ",(0,r.kt)("a",{parentName:"p",href:"#summary"},"summary"),"."),(0,r.kt)("h3",{id:"quick-examples"},"Quick Examples"),(0,r.kt)("p",null,"Here are some examples of unclear and good PR titles for your quick reference. Good PR titles are concise and self-explanatory since they tell you the changes in a clear and direct way."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Vague (Bad)"),(0,r.kt)("th",{parentName:"tr",align:null},"Clear (Good)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Producer getting producer busy is removing existing producer from list"),(0,r.kt)("td",{parentName:"tr",align:null},"[fix][broker]"," Active producers with the same name are no longer removed from the topic map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Forbid to read other topic's data in managedLedger layer"),(0,r.kt)("td",{parentName:"tr",align:null},"[improve][broker]"," Consumers are not allowed to read data on topics to which they are not subscribed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fix kinesis sink backoff class not found"),(0,r.kt)("td",{parentName:"tr",align:null},"[improve][connector]"," xx connectors can now use the Kinesis Backoff class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K8s Function Name Length Check Allows Invalid StatefulSet"),(0,r.kt)("td",{parentName:"tr",align:null},"[improve][function]"," Function name length cannot exceed 52 characters when using Kubernetes runtime")))),(0,r.kt)("p",null,"Here are steps to self-review whether the PR title is good:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select a ",(0,r.kt)("a",{parentName:"li",href:"#type"},"type"),"."),(0,r.kt)("li",{parentName:"ol"},"Select a ",(0,r.kt)("a",{parentName:"li",href:"#scope"},"scope"),"."),(0,r.kt)("li",{parentName:"ol"},"Write a ",(0,r.kt)("a",{parentName:"li",href:"#summary"},"summary"),".")),(0,r.kt)("p",null,"For more examples with correct formats, see ",(0,r.kt)("a",{parentName:"p",href:"#full-examples"},"Full examples"),"."),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"type"),' is "what actions do you take".'),(0,r.kt)("p",null,"It must be one of the following."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"What actions do you take?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cleanup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Fcleanup"},"type/cleanup")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove unused code or doc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"improve"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Fimprovement"},"type/improvement")),(0,r.kt)("td",{parentName:"tr",align:null},"Submit enhancements that are neither new features nor bug fixes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Ffeature"},"type/feature")),(0,r.kt)("td",{parentName:"tr",align:null},"Submit new features.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Ffix"},"type/fix")),(0,r.kt)("td",{parentName:"tr",align:null},"Submit bug fixes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refactor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/labels/type%2Frefactor"},"type/refactor")),(0,r.kt)("td",{parentName:"tr",align:null},"Restructure existing code while preserving its external behavior.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revert"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Revert changes")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Choose correct labels for your PR so that your PR will automatically go to the correct chapter in release notes. If you do not specify a type label, the PR might go to the wrong place or not be included in the release notes at all.")),(0,r.kt)("h3",{id:"scope"},"Scope"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scope"),' is "where do you make changes".'),(0,r.kt)("p",null,"Scopes evolves along with development. You can check the latest valid scopes at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/workflows/ci-semantic-pull-request.yml"},"workflow file"),"."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Summary")," is a single line that best sums up the changes made in the commit."),(0,r.kt)("p",null,"Follow the best practice below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep the summary concise and descriptive."),(0,r.kt)("li",{parentName:"ul"},"Use the second person and present tense."),(0,r.kt)("li",{parentName:"ul"},"Write ",(0,r.kt)("a",{parentName:"li",href:"https://www.grammarly.com/blog/sentence-fragment"},"complete sentences")," rather than fragments."),(0,r.kt)("li",{parentName:"ul"},"Capitalize the first letter."),(0,r.kt)("li",{parentName:"ul"},"Limit the length to 50 characters.")),(0,r.kt)("p",null,"Avoid some common bad cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not include back quotes (``)."),(0,r.kt)("li",{parentName:"ul"},"Do not append period at the end."),(0,r.kt)("li",{parentName:"ul"},"Do not use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword"},"GitHub keywords")," followed by an issue number. This information should be provided in PR descriptions or commit messages rather than in PR titles.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you cherry-pick changes to branches, name your PR title the same as the original PR title and label your PR with cherry-pick related labels.")),(0,r.kt)("h3",{id:"full-examples"},"Full examples"),(0,r.kt)("p",null,"As explained in the ",(0,r.kt)("a",{parentName:"p",href:"#how-to-write-good-pr-titles"},"How to write good PR titles")," chapter: A good title = clear format (",(0,r.kt)("a",{parentName:"p",href:"#type"},"type")," and ",(0,r.kt)("a",{parentName:"p",href:"#scope"},"scope"),") + self-explanatory ",(0,r.kt)("a",{parentName:"p",href:"#summary"},"summary"),"."),(0,r.kt)("p",null,"Here are some format examples. For self-explanatory summary examples, see ",(0,r.kt)("a",{parentName:"p",href:"#quick-examples"},"Quick examples"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Changes"),(0,r.kt)("th",{parentName:"tr",align:null},"Unclear format (Bad)"),(0,r.kt)("th",{parentName:"tr",align:null},"Clear format (Good)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit breaking changes"),(0,r.kt)("td",{parentName:"tr",align:null},"[Breaking change]"," xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"[feat][broker]","! Support xx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit PIP changes"),(0,r.kt)("td",{parentName:"tr",align:null},"[PIP-198]"," Support xx"),(0,r.kt)("td",{parentName:"tr",align:null},"[feat][broker]"," PIP-198: Support xx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cherry pick changes"),(0,r.kt)("td",{parentName:"tr",align:null},"[Branch-2.9]"," Fix xxx issue."),(0,r.kt)("td",{parentName:"tr",align:null},"[fix][broker]","[branch-2.9]"," Fix xxx issue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Revert changes"),(0,r.kt)("td",{parentName:"tr",align:null},"Revert xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"[revert][broker]"," Revert changes about xxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add features"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"Adding xx feature"),(0,r.kt)("li",null,"Support delete schema forcefully")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"[feat][java client]"," Add xx feature"),(0,r.kt)("li",null,"[feat][schema]"," Support xx"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fix bugs"),(0,r.kt)("td",{parentName:"tr",align:null},"[Issue 14633][pulsar-broker]"," Fixed xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"[fix][broker]"," Fix xxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Submit improvements"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"Enhances xx"),(0,r.kt)("li",null,"Bump netty version to 4.1.75")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"[improve][sql]"," Improve xx performance"),(0,r.kt)("li",null,"[improve][build]"," Bump Netty version to 4.1.75"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update tests"),(0,r.kt)("td",{parentName:"tr",align:null},"reduce xx test flakiness"),(0,r.kt)("td",{parentName:"tr",align:null},"[improve][test]"," Reduce xxx flaky tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update docs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"[Doc]"," add explanations for xxx"),(0,r.kt)("li",null,"2.8.3 Release Notes"),(0,r.kt)("li",null,"Fix typos in xx")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"[feat][doc]"," Add explanations for xxx"),(0,r.kt)("li",null,"[feat][doc]"," Add 2.8.3 release note"),(0,r.kt)("li",null,"[fix][doc]"," Fix typos in xx"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update website"),(0,r.kt)("td",{parentName:"tr",align:null},"[Website]"," adjust xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"[improve][site]"," Adjust xxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update instructions/guidelines"),(0,r.kt)("td",{parentName:"tr",align:null},"Update xxx guideline"),(0,r.kt)("td",{parentName:"tr",align:null},"[improve][doc]"," Update xx guidelines")))))}u.isMDXComponent=!0},94111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/semantic-pull-request-title-f097356caaf15d1d2a44af6515de8251.png"}}]);