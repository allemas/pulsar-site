"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6422],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return t?n.createElement(k,o(o({ref:a},c),{},{components:t})):n.createElement(k,o({ref:a},c))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=u;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86497:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));const l={id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry",original_id:"cookbooks-retention-expiry"},o=void 0,r={unversionedId:"cookbooks-retention-expiry",id:"version-2.6.4/cookbooks-retention-expiry",title:"Message retention and expiry",description:"Pulsar brokers are responsible for handling messages that pass through Pulsar, including persistent storage of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs.",source:"@site/versioned_docs/version-2.6.4/cookbooks-retention-expiry.md",sourceDirName:".",slug:"/cookbooks-retention-expiry",permalink:"/docs/2.6.4/cookbooks-retention-expiry",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/cookbooks-retention-expiry.md",tags:[],version:"2.6.4",frontMatter:{id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry",original_id:"cookbooks-retention-expiry"},sidebar:"version-2.6.4/docsSidebar",previous:{title:"Partitioned Topics",permalink:"/docs/2.6.4/cookbooks-partitioned"},next:{title:"Encryption ",permalink:"/docs/2.6.4/cookbooks-encryption"}},s={},p=[{value:"Retention policies",id:"retention-policies",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Set retention policy",id:"set-retention-policy",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Examples",id:"examples",level:5},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Get retention policy",id:"get-retention-policy",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"Example",id:"example",level:5},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"Backlog quotas",id:"backlog-quotas",level:2},{value:"Set size thresholds and backlog retention policies",id:"set-size-thresholds-and-backlog-retention-policies",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"Example",id:"example-1",level:5},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Get backlog threshold and backlog retention policy",id:"get-backlog-threshold-and-backlog-retention-policy",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4},{value:"Remove backlog quotas",id:"remove-backlog-quotas",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java",id:"java-4",level:4},{value:"Clear backlog",id:"clear-backlog",level:3},{value:"pulsar-admin",id:"pulsar-admin-5",level:4},{value:"Example",id:"example-2",level:5},{value:"Time to live (TTL)",id:"time-to-live-ttl",level:2},{value:"Set the TTL for a namespace",id:"set-the-ttl-for-a-namespace",level:3},{value:"pulsar-admin",id:"pulsar-admin-6",level:4},{value:"Example",id:"example-3",level:5},{value:"REST API",id:"rest-api-5",level:4},{value:"Java",id:"java-5",level:4},{value:"Get the TTL configuration for a namespace",id:"get-the-ttl-configuration-for-a-namespace",level:3},{value:"pulsar-admin",id:"pulsar-admin-7",level:4},{value:"Example",id:"example-4",level:5},{value:"REST API",id:"rest-api-6",level:4},{value:"Java",id:"java-6",level:4},{value:"Remove the TTL configuration for a namespace",id:"remove-the-ttl-configuration-for-a-namespace",level:3},{value:"pulsar-admin",id:"pulsar-admin-8",level:4},{value:"Example",id:"example-5",level:5},{value:"REST API",id:"rest-api-7",level:4},{value:"Java",id:"java-7",level:4},{value:"Delete messages from namespaces",id:"delete-messages-from-namespaces",level:2}],c={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,i.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar brokers are responsible for handling messages that pass through Pulsar, including ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/concepts-architecture-overview#persistent-storage"},"persistent storage")," of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs."),(0,i.kt)("p",null,"As a consequence, no messages are retained (by default) on a topic that has not had any subscriptions created for it."),(0,i.kt)("p",null,"(Note that messages that are no longer being stored are not necessarily immediately deleted, and may in fact still be accessible until the next ledger rollover. Because clients cannot predict when rollovers may happen, it is not wise to rely on a rollover not happening at an inconvenient point in time.)"),(0,i.kt)("p",null,"In Pulsar, you can modify this behavior, with namespace granularity, in two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can persistently store messages that are not within a backlog (because they've been acknowledged by on every existing subscription, or because there are no subscriptions) by setting ",(0,i.kt)("a",{parentName:"li",href:"#retention-policies"},"retention policies"),"."),(0,i.kt)("li",{parentName:"ul"},"Messages that are not acknowledged within a specified timeframe can be automatically acknowledged, by specifying the ",(0,i.kt)("a",{parentName:"li",href:"#time-to-live-ttl"},"time to live")," (TTL).")),(0,i.kt)("p",null,"Pulsar's ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/admin-api-overview"},"admin interface")," enables you to manage both retention policies and TTL with namespace granularity (and thus within a specific tenant and either on a specific cluster or in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/concepts-architecture-overview#global-cluster"},(0,i.kt)("inlineCode",{parentName:"a"},"global"))," cluster)."),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"retention-and-ttl-solve-two-different-problems"},"Retention and TTL solve two different problems"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Message retention: Keep the data for at least X hours (even if acknowledged)"),(0,i.kt)("li",{parentName:"ul"},"Time-to-live: Discard data after some time (by automatically acknowledging)")),(0,i.kt)("p",{parentName:"blockquote"},"Most applications will want to use at most one of these.")),(0,i.kt)("h2",{id:"retention-policies"},"Retention policies"),(0,i.kt)("p",null,"By default, when a Pulsar message arrives at a broker it will be stored until it has been acknowledged on all subscriptions, at which point it will be marked for deletion. You can override this behavior and retain even messages that have already been acknowledged on all subscriptions by setting a ",(0,i.kt)("em",{parentName:"p"},"retention policy")," for all topics in a given namespace. Retention policies are either a ",(0,i.kt)("em",{parentName:"p"},"size limit")," or a ",(0,i.kt)("em",{parentName:"p"},"time limit"),"."),(0,i.kt)("p",null,"Retention policies are particularly useful if you intend to exclusively use the Reader interface. Because the Reader interface does not use acknowledgements, messages will never exist within backlogs. Most realistic Reader-only use cases require that retention be configured."),(0,i.kt)("p",null,"When you set a size limit of, say, 10 gigabytes, then acknowledged messages in all topics in the namespace will be retained until the size limit for the topic is reached; if you set a time limit of, say, 1 day, then acknowledged messages for all topics in the namespace will be retained for 24 hours. The retention settings apply to all messages on topics that do not have any subscriptions, or if there are subscriptions, to messages that have been acked by all subscriptions. The retention policy settings do not affect unacknowledged messages on topics with subscriptions -- these are instead controlled by the backlog quota (see below)."),(0,i.kt)("p",null,"When a retention limit is exceeded, the oldest message is marked for deletion until the set of retained messages falls within the specified limits again."),(0,i.kt)("p",null,"It is also possible to set ",(0,i.kt)("em",{parentName:"p"},"unlimited")," retention time or size by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," for either time or size retention."),(0,i.kt)("h3",{id:"defaults"},"Defaults"),(0,i.kt)("p",null,"There are two configuration parameters that you can use to set ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-terminology#instance"},"instance"),"-wide defaults for message retention: ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-configuration#broker-defaultRetentionTimeInMinutes"},(0,i.kt)("inlineCode",{parentName:"a"},"defaultRetentionTimeInMinutes=0"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-configuration#broker-defaultRetentionSizeInMB"},(0,i.kt)("inlineCode",{parentName:"a"},"defaultRetentionSizeInMB=0")),"."),(0,i.kt)("p",null,"Both of these parameters are in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-configuration#broker"},(0,i.kt)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file."),(0,i.kt)("h3",{id:"set-retention-policy"},"Set retention policy"),(0,i.kt)("p",null,"You can set a retention policy for a namespace by specifying the namespace as well as both a size limit ",(0,i.kt)("em",{parentName:"p"},"and")," a time limit."),(0,i.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#namespaces-set-retention"},(0,i.kt)("inlineCode",{parentName:"a"},"set-retention"))," subcommand and specify a namespace, a size limit using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-s"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--size")," flag, and a time limit using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-t"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--time")," flag."),(0,i.kt)("h5",{id:"examples"},"Examples"),(0,i.kt)("p",null,"To set a size limit of 10 gigabytes and a time limit of 3 hours for the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-tenant/my-ns")," namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 10G \\\n  --time 3h\n\n")),(0,i.kt)("p",null,"To set retention with a size limit but without a time limit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 1T \\\n  --time -1\n\n")),(0,i.kt)("p",null,"Retention can be configured to be unlimited both in size and time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time -1\n\n")),(0,i.kt)("h4",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/setRetention"},"POST /admin/v2/namespaces/:tenant/:namespace/retention")),(0,i.kt)("h4",{id:"java"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nint retentionTime = 10; // 10 minutes\nint retentionSize = 500; // 500 megabytes\nRetentionPolicies policies = new RetentionPolicies(retentionTime, retentionSize);\nadmin.namespaces().setRetention(namespace, policies);\n\n")),(0,i.kt)("h3",{id:"get-retention-policy"},"Get retention policy"),(0,i.kt)("p",null,"You can fetch the retention policy for a namespace by specifying the namespace. The output will be a JSON object with two keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"retentionTimeInMinutes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"retentionSizeInMB"),"."),(0,i.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#namespaces"},(0,i.kt)("inlineCode",{parentName:"a"},"get-retention"))," subcommand and specify the namespace."),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-retention my-tenant/my-ns\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 0\n}\n\n')),(0,i.kt)("h4",{id:"rest-api-1"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/getRetention"},"GET /admin/v2/namespaces/:tenant/:namespace/retention")),(0,i.kt)("h4",{id:"java-1"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getRetention(namespace);\n\n")),(0,i.kt)("h2",{id:"backlog-quotas"},"Backlog quotas"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Backlogs")," are sets of unacknowledged messages for a topic that have been stored by bookies. Pulsar stores all unacknowledged messages in backlogs until they are processed and acknowledged."),(0,i.kt)("p",null,"You can control the allowable size of backlogs, at the namespace level, using ",(0,i.kt)("em",{parentName:"p"},"backlog quotas"),". Setting a backlog quota involves setting:"),(0,i.kt)("p",null,"TODO: Expand on is this per backlog or per topic?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an allowable ",(0,i.kt)("em",{parentName:"li"},"size threshold")," for each topic in the namespace"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"retention policy")," that determines which action the ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.6.4/reference-terminology#broker"},"broker")," takes if the threshold is exceeded.")),(0,i.kt)("p",null,"The following retention policies are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Policy"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Action"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"producer_request_hold")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The broker will hold and not persist produce request payload")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"producer_exception")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The broker will disconnect from the client by throwing an exception")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"consumer_backlog_eviction")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The broker will begin discarding backlog messages")))),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"beware-the-distinction-between-retention-policy-types"},"Beware the distinction between retention policy types"),(0,i.kt)("p",{parentName:"blockquote"},'As you may have noticed, there are two definitions of the term "retention policy" in Pulsar, one that applies to persistent storage of messages not in backlogs, and one that applies to messages within backlogs.')),(0,i.kt)("p",null,"Backlog quotas are handled at the namespace level. They can be managed via:"),(0,i.kt)("h3",{id:"set-size-thresholds-and-backlog-retention-policies"},"Set size thresholds and backlog retention policies"),(0,i.kt)("p",null,"You can set a size threshold and backlog retention policy for all of the topics in a ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-terminology#namespace"},"namespace")," by specifying the namespace, a size limit, and a policy by name."),(0,i.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#namespaces"},(0,i.kt)("inlineCode",{parentName:"a"},"set-backlog-quota"))," subcommand and specify a namespace, a size limit using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-l"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--limit")," flag, and a retention policy using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-p"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--policy")," flag."),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns \\\n  --limit 2G \\\n  --policy producer_request_hold\n\n")),(0,i.kt)("h4",{id:"rest-api-2"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/getBacklogQuotaMap"},"POST /admin/v2/namespaces/:tenant/:namespace/backlogQuota")),(0,i.kt)("h4",{id:"java-2"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setBacklogQuota(namespace, BacklogQuota.builder()\n        .retentionPolicy(RetentionPolicy.producer_request_hold)\n        .limitSize(2147483648L)\n        .limitTime(60 * 60)\n        .build());\n\n")),(0,i.kt)("h3",{id:"get-backlog-threshold-and-backlog-retention-policy"},"Get backlog threshold and backlog retention policy"),(0,i.kt)("p",null,"You can see which size threshold and backlog retention policy has been applied to a namespace."),(0,i.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#pulsar-admin-namespaces-get-backlog-quotas"},(0,i.kt)("inlineCode",{parentName:"a"},"get-backlog-quotas"))," subcommand and specify a namespace. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-backlog-quotas my-tenant/my-ns\n{\n  "destination_storage": {\n    "limit" : 2147483648,\n    "policy" : "producer_request_hold"\n  }\n}\n\n')),(0,i.kt)("h4",{id:"rest-api-3"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/getBacklogQuotaMap"},"GET /admin/v2/namespaces/:tenant/:namespace/backlogQuotaMap")),(0,i.kt)("h4",{id:"java-3"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nMap<BacklogQuota.BacklogQuotaType,BacklogQuota> quotas =\n  admin.namespaces().getBacklogQuotas(namespace);\n\n")),(0,i.kt)("h3",{id:"remove-backlog-quotas"},"Remove backlog quotas"),(0,i.kt)("h4",{id:"pulsar-admin-4"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#pulsar-admin-namespaces-remove-backlog-quota"},(0,i.kt)("inlineCode",{parentName:"a"},"remove-backlog-quota"))," subcommand and specify a namespace. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-backlog-quota my-tenant/my-ns\n\n")),(0,i.kt)("h4",{id:"rest-api-4"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/removeBacklogQuota"},"DELETE /admin/v2/namespaces/:tenant/:namespace/backlogQuota")),(0,i.kt)("h4",{id:"java-4"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeBacklogQuota(namespace);\n\n")),(0,i.kt)("h3",{id:"clear-backlog"},"Clear backlog"),(0,i.kt)("h4",{id:"pulsar-admin-5"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#pulsar-admin-namespaces-clear-backlog"},(0,i.kt)("inlineCode",{parentName:"a"},"clear-backlog"))," subcommand."),(0,i.kt)("h5",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces clear-backlog my-tenant/my-ns\n\n")),(0,i.kt)("p",null,"By default, you will be prompted to ensure that you really want to clear the backlog for the namespace. You can override the prompt using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-f"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--force")," flag."),(0,i.kt)("h2",{id:"time-to-live-ttl"},"Time to live (TTL)"),(0,i.kt)("p",null,"By default, Pulsar stores all unacknowledged messages forever. This can lead to heavy disk space usage in cases where a lot of messages are going unacknowledged. If disk space is a concern, you can set a time to live (TTL) that determines how long unacknowledged messages will be retained."),(0,i.kt)("h3",{id:"set-the-ttl-for-a-namespace"},"Set the TTL for a namespace"),(0,i.kt)("h4",{id:"pulsar-admin-6"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#pulsar-admin-namespaces-set-message-ttl"},(0,i.kt)("inlineCode",{parentName:"a"},"set-message-ttl"))," subcommand and specify a namespace and a TTL (in seconds) using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-ttl"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--messageTTL")," flag."),(0,i.kt)("h5",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-message-ttl my-tenant/my-ns \\\n  --messageTTL 120 # TTL of 2 minutes\n\n")),(0,i.kt)("h4",{id:"rest-api-5"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/setNamespaceMessageTTL"},"POST /admin/v2/namespaces/:tenant/:namespace/messageTTL")),(0,i.kt)("h4",{id:"java-5"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setNamespaceMessageTTL(namespace, ttlInSeconds);\n\n")),(0,i.kt)("h3",{id:"get-the-ttl-configuration-for-a-namespace"},"Get the TTL configuration for a namespace"),(0,i.kt)("h4",{id:"pulsar-admin-7"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#pulsar-admin-namespaces-get-message-ttl"},(0,i.kt)("inlineCode",{parentName:"a"},"get-message-ttl"))," subcommand and specify a namespace."),(0,i.kt)("h5",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces get-message-ttl my-tenant/my-ns\n60\n\n")),(0,i.kt)("h4",{id:"rest-api-6"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/getNamespaceMessageTTL"},"GET /admin/v2/namespaces/:tenant/:namespace/messageTTL")),(0,i.kt)("h4",{id:"java-6"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n")),(0,i.kt)("h3",{id:"remove-the-ttl-configuration-for-a-namespace"},"Remove the TTL configuration for a namespace"),(0,i.kt)("h4",{id:"pulsar-admin-8"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.4/reference-pulsar-admin#pulsar-admin-namespaces-remove-message-ttl"},(0,i.kt)("inlineCode",{parentName:"a"},"remove-message-ttl"))," subcommand and specify a namespace."),(0,i.kt)("h5",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-message-ttl my-tenant/my-ns\n\n")),(0,i.kt)("h4",{id:"rest-api-7"},"REST API"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/removeNamespaceMessageTTL"},"DELETE /admin/v2/namespaces/:tenant/:namespace/messageTTL")),(0,i.kt)("h4",{id:"java-7"},"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeNamespaceMessageTTL(namespace)\n\n")),(0,i.kt)("h2",{id:"delete-messages-from-namespaces"},"Delete messages from namespaces"),(0,i.kt)("p",null,"If you do not have any retention period and that you never have much of a backlog, the upper limit for retaining messages, which are acknowledged, equals to the Pulsar segment rollover period + entry log rollover period + (garbage collection interval * garbage collection ratios)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Segment rollover period"),": basically, the segment rollover period is how often a new segment is created. Once a new segment is created, the old segment will be deleted. By default, this happens either when you have written 50,000 entries (messages) or have waited 240 minutes. You can tune this in your broker.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Entry log rollover period"),": multiple ledgers in BookKeeper are interleaved into an ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/getting-started/concepts/#entry-logs"},"entry log"),". In order for a ledger that has been deleted, the entry log must all be rolled over.\nThe entry log rollover period is configurable, but is purely based on the entry log size. For details, see ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-settings"},"here"),". Once the entry log is rolled over, the entry log can be garbage collected.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Garbage collection interval"),": because entry logs have interleaved ledgers, to free up space, the entry logs need to be rewritten. The garbage collection interval is how often BookKeeper performs garbage collection. which is related to minor compaction and major compaction of entry logs. For details, see ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-compaction-settings"},"here"),"."))))}d.isMDXComponent=!0}}]);