(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85518],{3905:(e,s,a)=>{"use strict";a.d(s,{Zo:()=>v,kt:()=>N});var t=a(67294);function o(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function r(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?r(Object(a),!0).forEach((function(s){o(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function n(e,s){if(null==e)return{};var a,t,o=function(e,s){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||(o[a]=e[a]);return o}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),c=function(e){var s=t.useContext(i),a=s;return e&&(a="function"==typeof e?e(s):l(l({},s),e)),a},v=function(e){var s=c(e.components);return t.createElement(i.Provider,{value:s},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},g=t.forwardRef((function(e,s){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,v=n(e,["components","mdxType","originalType","parentName"]),d=c(a),g=o,N=d["".concat(i,".").concat(g)]||d[g]||p[g]||r;return a?t.createElement(N,l(l({ref:s},v),{},{components:a})):t.createElement(N,l({ref:s},v))}));function N(e,s){var a=arguments,o=s&&s.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=g;var n={};for(var i in s)hasOwnProperty.call(s,i)&&(n[i]=s[i]);n.originalType=e,n[d]="string"==typeof e?e:o,l[1]=n;for(var c=2;c<r;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},53184:(e,s,a)=>{"use strict";a.d(s,{Z:()=>x});var t=a(87462),o=a(63366),r=a(67294),l=a(86010),n=a(94780),i=a(44063),c=a(68010),v=a(90948),d=a(1588),p=a(34867);function g(e){return(0,p.Z)("MuiTableHead",e)}(0,d.Z)("MuiTableHead",["root"]);var N=a(85893);const u=["className","component"],m=(0,v.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"table-header-group"}),b={variant:"head"},h="thead",x=r.forwardRef((function(e,s){const a=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:r,component:v=h}=a,d=(0,o.Z)(a,u),p=(0,t.Z)({},a,{component:v}),x=(e=>{const{classes:s}=e;return(0,n.Z)({root:["root"]},g,s)})(p);return(0,N.jsx)(i.Z.Provider,{value:b,children:(0,N.jsx)(m,(0,t.Z)({as:v,className:(0,l.Z)(x.root,r),ref:s,role:v===h?null:"rowgroup",ownerState:p},d))})}))},76617:(e,s,a)=>{"use strict";a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>u,default:()=>P,frontMatter:()=>N,metadata:()=>m,toc:()=>T});var t=a(87462),o=a(67294),r=a(3905),l=a(7906),n=a(295),i=a(53252),c=a(53184),v=a(53816),d=a(95999);function p(e){return o.createElement(l.Z,{sx:{minWidth:650},size:"small"},o.createElement(c.Z,null,o.createElement(v.Z,null,["Version","Release Note","Release Blog","Documentation","Release Date","Release Manager"].map((e=>o.createElement(i.Z,{className:"font-bold",sx:{color:"inherit"},key:e},o.createElement(d.Z,null,e)))))),o.createElement(n.Z,null,e.data.map(((e,s)=>o.createElement(v.Z,{key:s,sx:{color:"inherit"}},o.createElement(i.Z,{sx:{color:"inherit"}},e.version),o.createElement(i.Z,{sx:{color:"inherit"}},o.createElement("a",{href:e.releaseNotes},e.tagName)),o.createElement(i.Z,{sx:{color:"inherit"}},e.releaseBlog?o.createElement("a",{href:e.releaseBlog},"What's New in Apache Pulsar ",e.tagName):o.createElement(o.Fragment,null)),o.createElement(i.Z,{sx:{color:"inherit"}},o.createElement("a",{href:e.doc},e.vtag," Documentation")),o.createElement(i.Z,{sx:{color:"inherit"}},new Date(e.publishedAt).toDateString().substring(4)),o.createElement(i.Z,{sx:{color:"inherit"}},o.createElement("a",{href:`https://github.com/${e.author}`},e.author)))))))}function g(e){return o.createElement(l.Z,{size:"small"},o.createElement(c.Z,null,o.createElement(v.Z,null,["Version","Release Note","Documentation"].map((e=>o.createElement(i.Z,{className:"font-bold",sx:{color:"inherit"},key:e},o.createElement(d.Z,null,e)))))),o.createElement(n.Z,null,e.data.map(((e,s)=>o.createElement(v.Z,{key:s,sx:{color:"inherit"}},o.createElement(i.Z,{sx:{color:"inherit"}},e.version),o.createElement(i.Z,{sx:{color:"inherit"}},o.createElement("a",{href:e.releaseNotes},e.tagName)),o.createElement(i.Z,{sx:{color:"inherit"}},o.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}const N={id:"all",title:"All Releases",sidebar_label:"All Releases",slug:"/"},u=void 0,m={unversionedId:"all",id:"all",title:"All Releases",description:"Pulsar Release Notes",source:"@site/release-notes/all.md",sourceDirName:".",slug:"/",permalink:"/release-notes/",draft:!1,tags:[],version:"current",frontMatter:{id:"all",title:"All Releases",sidebar_label:"All Releases",slug:"/"},sidebar:"releaseNote"},b={},h=a(82288),x=a(80516),y=a(97926),k=a(12211),f=a(3094),j=a(87440),w=a(52969),Z=a(95549),T=[{value:"Pulsar Release Notes",id:"pulsar-release-notes",level:2},{value:"Previous versions",id:"previous-versions",level:3},{value:"Client Release Notes",id:"client-release-notes",level:2},{value:"Java",id:"java",level:3},{value:"Python",id:"python",level:3},{value:"C++",id:"c",level:3},{value:"WebSocket",id:"websocket",level:3},{value:"Go",id:"go",level:3},{value:"NodeJs",id:"nodejs",level:3},{value:"C#",id:"c-1",level:3}],A={toc:T};function P(e){let{components:s,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},A,a,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pulsar-release-notes"},"Pulsar Release Notes"),(0,r.kt)(p,{data:h,mdxType:"PulsarReleaseTable"}),(0,r.kt)("h3",{id:"previous-versions"},"Previous versions"),(0,r.kt)("p",null,"All release notes of previous versions are available ",(0,r.kt)("a",{parentName:"p",href:"/release-notes/legacy"},"here"),"."),(0,r.kt)("h2",{id:"client-release-notes"},"Client Release Notes"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tip")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The code repos of ",(0,r.kt)("strong",{parentName:"p"},"Java and WebSocket")," clients are hosted in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar main repo"),". These clients are released with Pulsar. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The code repos of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/apache/pulsar-client-cpp"},"C++"),", ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/apache/pulsar-client-python"},"Python"),", ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/apache/pulsar-client-go"},"Go"),", ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/apache/pulsar-client-node"},"Node.js"),", and ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/apache/pulsar-dotpulsar"},"C#"))," clients are hosted outside of the Pulsar main repo. These clients are not released with Pulsar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All clients have ",(0,r.kt)("a",{parentName:"p",href:"release-notes/versioned"},"independent release notes")," and they are automatically synced to this page.")))),(0,r.kt)("h3",{id:"java"},"Java"),(0,r.kt)(g,{data:x,mdxType:"ClientReleaseTable"}),(0,r.kt)("h3",{id:"python"},"Python"),(0,r.kt)(g,{data:y,mdxType:"ClientReleaseTable"}),(0,r.kt)("h3",{id:"c"},"C++"),(0,r.kt)(g,{data:k,mdxType:"ClientReleaseTable"}),(0,r.kt)("h3",{id:"websocket"},"WebSocket"),(0,r.kt)(g,{data:f,mdxType:"ClientReleaseTable"}),(0,r.kt)("h3",{id:"go"},"Go"),(0,r.kt)(g,{data:j,mdxType:"ClientReleaseTable"}),(0,r.kt)("h3",{id:"nodejs"},"NodeJs"),(0,r.kt)(g,{data:w,mdxType:"ClientReleaseTable"}),(0,r.kt)("h3",{id:"c-1"},"C#"),(0,r.kt)(g,{data:Z,mdxType:"ClientReleaseTable"}))}P.isMDXComponent=!0},12211:e=>{e.exports=[{tagName:"v3.0.0",vtag:"3.0.0",releaseNotes:"/release-notes/versioned/client-cpp-3.0.0/",doc:"/docs/client-libraries-cpp",version:"v3.0.x"},{tagName:"v2.10.2",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.2/",doc:"/docs/client-libraries-cpp",version:"v2.10.x"},{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.1/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.0/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-cpp-2.9.3/",doc:"/docs/2.9.x/client-libraries-cpp",version:"v2.9.x"},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-cpp-2.9.2/",doc:"/docs/2.9.x/client-libraries-cpp",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.4/",doc:"/docs/2.8.x/client-libraries-cpp",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.3/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.2/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.1/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.0/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-cpp-2.7.5/",doc:"/docs/2.7.5/client-libraries-cpp",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-cpp-2.7.4/",doc:"/docs/2.7.4/client-libraries-cpp",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-cpp-2.7.3/",doc:"/docs/2.7.3/client-libraries-cpp",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-cpp-2.7.2/",doc:"/docs/2.7.2/client-libraries-cpp",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-cpp-2.7.1/",doc:"/docs/2.7.1/client-libraries-cpp",version:""},{tagName:"v2.7.0",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/client-cpp-2.7.0/",doc:"/docs/2.7.0/client-libraries-cpp",version:""},{tagName:"v2.6.4",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/client-cpp-2.6.4/",doc:"/docs/2.6.4/client-libraries-cpp",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-cpp-2.6.2/",doc:"/docs/2.6.2/client-libraries-cpp",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-cpp-2.5.1/",doc:"/docs/2.5.1/client-libraries-cpp",version:"v2.5.x"}]},95549:e=>{e.exports=[{tagName:"2.4.1",releaseNotes:"/release-notes/versioned/pulsar-cs-2.4.1/",doc:"/docs/client-libraries-dotnet",version:"2.4.x"},{tagName:"2.4.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.4.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"2.3.1",releaseNotes:"/release-notes/versioned/pulsar-cs-2.3.1/",doc:"/docs/client-libraries-dotnet",version:"2.3.x"},{tagName:"2.3.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.3.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"2.2.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.2.0/",doc:"/docs/client-libraries-dotnet",version:"2.2.x"},{tagName:"2.1.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.1.0/",doc:"/docs/client-libraries-dotnet",version:"2.1.x"},{tagName:"2.0.1",releaseNotes:"/release-notes/versioned/pulsar-cs-2.0.1/",doc:"/docs/client-libraries-dotnet",version:"2.0.x"},{tagName:"2.0.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.0.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.1.2",releaseNotes:"/release-notes/versioned/pulsar-cs-1.1.2/",doc:"/docs/client-libraries-dotnet",version:"1.1.x"},{tagName:"1.1.1",releaseNotes:"/release-notes/versioned/pulsar-cs-1.1.1/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.1.0",releaseNotes:"/release-notes/versioned/pulsar-cs-1.1.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.0.2",releaseNotes:"/release-notes/versioned/pulsar-cs-1.0.2/",doc:"/docs/client-libraries-dotnet",version:"1.0.x"},{tagName:"1.0.1",releaseNotes:"/release-notes/versioned/pulsar-cs-1.0.1/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.0.0",releaseNotes:"/release-notes/versioned/pulsar-cs-1.0.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"0.11.0",releaseNotes:"/release-notes/versioned/pulsar-cs-0.11.0/",doc:"/docs/client-libraries-dotnet",version:"0.11.x"},{tagName:"0.10.1",releaseNotes:"/release-notes/versioned/pulsar-cs-0.10.1/",doc:"/docs/client-libraries-dotnet",version:"0.10.x"},{tagName:"0.10.0",releaseNotes:"/release-notes/versioned/pulsar-cs-0.10.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"0.9.7",releaseNotes:"/release-notes/versioned/pulsar-cs-0.9.7/",doc:"/docs/client-libraries-dotnet",version:"0.9.x"},{tagName:"0.9.6",releaseNotes:"/release-notes/versioned/pulsar-cs-0.9.6/",doc:"/docs/client-libraries-dotnet",version:""}]},87440:e=>{e.exports=[{tagName:"v0.9.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.9.0/",doc:"/docs/client-libraries-go",version:"v0.9.x"},{tagName:"v0.8.1",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.8.1/",doc:"/docs/client-libraries-go",version:"v0.8.x"},{tagName:"v0.8.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.8.0/",doc:"/docs/client-libraries-go",version:""},{tagName:"v0.7.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.7.0/",doc:"/docs/client-libraries-go",version:"v0.7.x"},{tagName:"v0.6.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.6.0/",doc:"/docs/client-libraries-go",version:"v0.6.x"},{tagName:"v0.5.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.5.0/",doc:"/docs/client-libraries-go",version:"v0.5.x"},{tagName:"v0.4.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.4.0/",doc:"/docs/client-libraries-go",version:"v0.4.x"},{tagName:"v0.3.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.3.0/",doc:"/docs/client-libraries-go",version:"v0.3.x"},{tagName:"v0.2.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.2.0/",doc:"/docs/client-libraries-go",version:"v0.2.x"},{tagName:"v0.1.1",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.1.1/",doc:"/docs/client-libraries-go",version:"v0.1.x"},{tagName:"v0.1.0",releaseNotes:"/release-notes/versioned/pulsar-client-go-0.1.0/",doc:"/docs/client-libraries-go",version:""}]},80516:e=>{e.exports=[{tagName:"v2.10.2",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.2/",doc:"/docs/client-libraries-java",version:"v2.10.x"},{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.1/",doc:"/docs/client-libraries-java",version:""},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.0/",doc:"/docs/client-libraries-java",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.3/",doc:"/docs/2.9.x/client-libraries-java",version:"v2.9.x"},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.2/",doc:"/docs/2.9.x/client-libraries-java",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.4/",doc:"/docs/2.8.x/client-libraries-java",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.3/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.2/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.1/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.0/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-java-2.7.5/",doc:"/docs/2.7.5/client-libraries-java",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-java-2.7.4/",doc:"/docs/2.7.4/client-libraries-java",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-java-2.7.3/",doc:"/docs/2.7.3/client-libraries-java",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-java-2.7.2/",doc:"/docs/2.7.2/client-libraries-java",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-java-2.7.1/",doc:"/docs/2.7.1/client-libraries-java",version:""},{tagName:"v2.7.0",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/client-java-2.7.0/",doc:"/docs/2.7.0/client-libraries-java",version:""},{tagName:"v2.6.4",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/client-java-2.6.4/",doc:"/docs/2.6.4/client-libraries-java",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-java-2.6.2/",doc:"/docs/2.6.2/client-libraries-java",version:""},{tagName:"v2.6.1",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/client-java-2.6.1/",doc:"/docs/2.6.1/client-libraries-java",version:""},{tagName:"v2.6.0",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/client-java-2.6.0/",doc:"/docs/2.6.0/client-libraries-java",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-java-2.5.1/",doc:"/docs/2.5.1/client-libraries-java",version:"v2.5.x"},{tagName:"v2.5.0",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/client-java-2.5.0/",doc:"/docs/2.5.0/client-libraries-java",version:""}]},52969:e=>{e.exports=[{tagName:"v1.6.2",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.6.2/",doc:"/docs/client-libraries-node",version:"v1.6.x"},{tagName:"v1.5.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.5.0/",doc:"/docs/client-libraries-node",version:"v1.5.x"},{tagName:"v1.4.1",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.4.1/",doc:"/docs/client-libraries-node",version:"v1.4.x"},{tagName:"v1.4.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.4.0/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.3.2",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.3.2/",doc:"/docs/client-libraries-node",version:"v1.3.x"},{tagName:"v1.3.1",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.3.1/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.3.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.3.0/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.2.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.2.0/",doc:"/docs/client-libraries-node",version:"v1.2.x"},{tagName:"v1.1.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.1.0/",doc:"/docs/client-libraries-node",version:"v1.1.x"},{tagName:"v1.0.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.0.0/",doc:"/docs/client-libraries-node",version:"v1.0.x"}]},82288:e=>{e.exports=[{author:"Jason918",tagName:"v2.10.2",publishedAt:"2022-10-28T01:53:34Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.2/",releaseBlog:"",doc:"/docs/",version:"v2.10.x"},{author:"codelipenghui",tagName:"v2.10.1",publishedAt:"2022-07-04T14:45:46Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.1/",releaseBlog:"/blog/2022/07/12/Apache-Pulsar-2-10-1",doc:"/docs/",version:""},{author:"codelipenghui",tagName:"v2.10.0",publishedAt:"2022-04-18T02:08:43Z",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/pulsar-2.10.0/",releaseBlog:"",doc:"/docs/",version:""},{author:"mattisonchao",tagName:"v2.9.3",publishedAt:"2022-07-20T02:04:10Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.3/",releaseBlog:"/blog/2022/07/27/Apache-Pulsar-2-9-3",doc:"/docs/2.9.x",version:"v2.9.x"},{author:"gaoran10",tagName:"v2.9.2",publishedAt:"2022-04-08T03:22:33Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.2/",releaseBlog:"/blog/2022/04/08/Apache-Pulsar-2-9-2",doc:"/docs/2.9.x",version:""},{author:"eolivelli",tagName:"v2.9.1",publishedAt:"2021-12-20T12:34:56Z",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/pulsar-2.9.1/",releaseBlog:"",doc:"/docs/2.9.x",version:""},{author:"BewareMyPower",tagName:"v2.8.4",publishedAt:"2022-10-04T13:38:54Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.4/",releaseBlog:"",doc:"/docs/2.8.x",version:"v2.8.x"},{author:"michaeljmarshall",tagName:"v2.8.3",publishedAt:"2022-04-08T03:27:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.3/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"315157973",tagName:"v2.8.2",publishedAt:"2022-01-12T09:39:25Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.2/",releaseBlog:"",doc:"/docs/2.8.x",version:""},{author:"hangc0276",tagName:"v2.8.1",publishedAt:"2021-09-18T01:39:29Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.1/",releaseBlog:"/blog/2021/09/23/Apache-Pulsar-2-8-1",doc:"/docs/2.8.x",version:""},{author:"codelipenghui",tagName:"v2.8.0",publishedAt:"2021-06-15T10:39:18Z",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/pulsar-2.8.0/",releaseBlog:"/blog/2021/06/12/Apache-Pulsar-2-8-0",doc:"/docs/2.8.x",version:""},{author:"Jason918",tagName:"v2.7.5",publishedAt:"2022-09-06T10:53:32Z",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/pulsar-2.7.5/",releaseBlog:"/blog/2022/09/09/Apache-Pulsar-2-7-5",doc:"/docs/2.7.5",version:"v2.7.x"},{author:"Technoboy-",tagName:"v2.7.4",publishedAt:"2021-12-27T08:24:54Z",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/pulsar-2.7.4/",releaseBlog:"/blog/2021/12/14/Apache-Pulsar-2-7-4",doc:"/docs/2.7.4",version:""},{author:"congbobo184",tagName:"v2.7.3",publishedAt:"2021-08-11T01:45:27Z",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/pulsar-2.7.3/",releaseBlog:"/blog/2021/08/11/Apache-Pulsar-2-7-3",doc:"/docs/2.7.3",version:""},{author:"eolivelli",tagName:"v2.7.2",publishedAt:"2021-05-25T06:30:19Z",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/pulsar-2.7.2/",releaseBlog:"/blog/2021/05/13/Apache-Pulsar-2-7-2",doc:"/docs/2.7.2",version:""},{author:"zymap",tagName:"v2.7.1",publishedAt:"2021-03-22T00:35:17Z",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/pulsar-2.7.1/",releaseBlog:"",doc:"/docs/2.7.1",version:""},{author:"codelipenghui",tagName:"v2.7.0",publishedAt:"2020-12-03T08:29:15Z",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/pulsar-2.7.0/",releaseBlog:"/blog/2020/12/24/Apache-Pulsar-2-7-0",doc:"/docs/2.7.0",version:""},{author:"lhotari",tagName:"v2.6.4",publishedAt:"2021-06-02T18:10:21Z",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/pulsar-2.6.4/",releaseBlog:"",doc:"/docs/2.6.4",version:"v2.6.x"},{author:"codelipenghui",tagName:"v2.6.3",publishedAt:"2021-01-21T12:34:56Z",vtag:"2.6.3",releaseNotes:"/release-notes/versioned/pulsar-2.6.3/",releaseBlog:"",doc:"/docs/2.6.3",version:""},{author:"wolfstudy",tagName:"v2.6.2",publishedAt:"2020-11-09T05:08:25Z",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/pulsar-2.6.2/",releaseBlog:"/blog/2020/11/09/Apache-Pulsar-2-6-2",doc:"/docs/2.6.2",version:""},{author:"wolfstudy",tagName:"v2.6.1",publishedAt:"2020-08-21T01:35:54Z",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/pulsar-2.6.1/",releaseBlog:"/blog/2020/08/21/Apache-Pulsar-2-6-1",doc:"/docs/2.6.1",version:""},{author:"codelipenghui",tagName:"v2.6.0",publishedAt:"2020-06-17T12:57:15Z",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/pulsar-2.6.0/",releaseBlog:"/blog/2020/06/18/Apache-Pulsar-2-6-0",doc:"/docs/2.6.0",version:""},{author:"jiazhai",tagName:"v2.5.2",publishedAt:"2020-05-19T12:25:05Z",vtag:"2.5.2",releaseNotes:"/release-notes/versioned/pulsar-2.5.2/",releaseBlog:"/blog/2020/05/19/Apache-Pulsar-2-5-2",doc:"/docs/2.5.2",version:"v2.5.x"},{author:"tuteng",tagName:"v2.5.1",publishedAt:"2020-05-11T04:22:55Z",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/pulsar-2.5.1/",releaseBlog:"/blog/2020/04/23/Apache-Pulsar-2-5-1",doc:"/docs/2.5.1",version:""},{author:"sijie",tagName:"v2.5.0",publishedAt:"2020-01-15T12:34:56Z",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/pulsar-2.5.0/",releaseBlog:"",doc:"/docs/2.5.0",version:""}]},97926:e=>{e.exports=[{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-python-2.10.1/",doc:"/docs/client-libraries-python",version:"v2.10.x"},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-python-2.10.0/",doc:"/docs/client-libraries-python",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-python-2.9.3/",doc:"/docs/2.9.x/client-libraries-python",version:"v2.9.x"},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-python-2.9.2/",doc:"/docs/2.9.x/client-libraries-python",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.4/",doc:"/docs/2.8.x/client-libraries-python",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.3/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.2/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.1/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-python-2.8.0/",doc:"/docs/2.8.x/client-libraries-python",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-python-2.7.5/",doc:"/docs/2.7.5/client-libraries-python",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-python-2.7.4/",doc:"/docs/2.7.4/client-libraries-python",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-python-2.7.2/",doc:"/docs/2.7.2/client-libraries-python",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-python-2.7.1/",doc:"/docs/2.7.1/client-libraries-python",version:""},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-python-2.6.2/",doc:"/docs/2.6.2/client-libraries-python",version:"v2.6.x"},{tagName:"v2.6.0",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/client-python-2.6.0/",doc:"/docs/2.6.0/client-libraries-python",version:""},{tagName:"v2.5.2",vtag:"2.5.2",releaseNotes:"/release-notes/versioned/client-python-2.5.2/",doc:"/docs/2.5.2/client-libraries-python",version:"v2.5.x"},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-python-2.5.1/",doc:"/docs/2.5.1/client-libraries-python",version:""}]},3094:e=>{e.exports=[{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-websocket-2.10.1/",doc:"/docs/client-libraries-websocket",version:"v2.10.x"},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-websocket-2.10.0/",doc:"/docs/client-libraries-websocket",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-websocket-2.9.3/",doc:"/docs/2.9.x/client-libraries-websocket",version:"v2.9.x"},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-websocket-2.9.2/",doc:"/docs/2.9.x/client-libraries-websocket",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.4/",doc:"/docs/2.8.x/client-libraries-websocket",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.3/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.2/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.1/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-websocket-2.8.0/",doc:"/docs/2.8.x/client-libraries-websocket",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-websocket-2.7.3/",doc:"/docs/2.7.3/client-libraries-websocket",version:"v2.7.x"},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-websocket-2.7.2/",doc:"/docs/2.7.2/client-libraries-websocket",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-websocket-2.7.1/",doc:"/docs/2.7.1/client-libraries-websocket",version:""},{tagName:"v2.6.3",vtag:"2.6.3",releaseNotes:"/release-notes/versioned/client-websocket-2.6.3/",doc:"/docs/2.6.3/client-libraries-websocket",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-websocket-2.6.2/",doc:"/docs/2.6.2/client-libraries-websocket",version:""},{tagName:"v2.6.0",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/client-websocket-2.6.0/",doc:"/docs/2.6.0/client-libraries-websocket",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-websocket-2.5.1/",doc:"/docs/2.5.1/client-libraries-websocket",version:"v2.5.x"}]}}]);