"use strict";(self.webpackChunkmurggar_github_io=self.webpackChunkmurggar_github_io||[]).push([[728],{4837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(4848),s=t(8453);t(1470),t(9365);const l={sidebar_position:7},a="Vela API",i={id:"Vela APIs",title:"Vela API",description:"Data Upload",source:"@site/docs/Vela APIs.md",sourceDirName:".",slug:"/Vela APIs",permalink:"/docs/Vela APIs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Speech-to-Text API",permalink:"/docs/Speech-to-Text API"}},o={},d=[{value:"Data Upload",id:"data-upload",level:2},{value:"Vela Integration",id:"vela-integration",level:2},{value:"Calls",id:"calls",level:3},{value:"Chats",id:"chats",level:3},{value:"Vela Call Upload Endpoint",id:"vela-call-upload-endpoint",level:2},{value:"Contact us",id:"contact-us",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vela-api",children:"Vela API"}),"\n",(0,r.jsx)(n.h2,{id:"data-upload",children:"Data Upload"}),"\n",(0,r.jsx)(n.p,{children:"The Vela platform offers two methods for uploading your call data, depending on your current storage solution:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Automatic Upload via FTP:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Suitable for:"})," Users who store call data on an FTP server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Benefits:"})," Automated updates, no manual intervention required."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"An FTP server where your call data resides."}),"\n",(0,r.jsx)(n.li,{children:"Shared access credentials provided to Botlhale AI during onboarding."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Process:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"During onboarding, share access credentials for your FTP server with Botlhale AI."}),"\n",(0,r.jsx)(n.li,{children:"Botlhale AI establishes a connection and synchronises your call data automatically."}),"\n",(0,r.jsxs)(n.li,{children:["Call data appears in the ",(0,r.jsx)(n.code,{children:"Calls"})," screen on the Vela platform."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Manual Batch Upload"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Suitable for"}),": Users who do not store call data on an FTP server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Benefits"}),": Flexible uploading for various data sources."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Process:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"Calls"})," screen on the Vela platform."]}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.code,{children:"Batch Upload"})," button."]}),"\n",(0,r.jsx)(n.li,{children:"Select and upload a zip file containing your call data."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Upload"})," to initiate the process."]}),"\n",(0,r.jsxs)(n.li,{children:["Upon successful upload, your call data appears in the ",(0,r.jsx)(n.code,{children:"Calls"})," screen table."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"TECHNICAL NOTES:",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Both methods support uploading various call data formats, including CSV, TSV, and JSON."}),"\n",(0,r.jsx)(n.li,{children:"The batch upload function accepts zip files with a maximum size of 3 GB."}),"\n",(0,r.jsx)(n.li,{children:"For larger datasets, consider contacting Botlhale AI support for alternative upload options. Ensure your call data adheres to the specified format and schema requirements for successful processing."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"vela-integration",children:"Vela Integration"}),"\n",(0,r.jsx)(n.h3,{id:"calls",children:"Calls"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"POST Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" https://vela-server.botlhale.xyz/api/call\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer <ProvidedToken>"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Body Params"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Requirement"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orgID"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"Organisation ID provided to you by Botlhale AI"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"call"}),(0,r.jsx)(n.td,{children:"mp3/wav"}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"This will be the call file (mp3/wav)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"metadata"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"Optional"}),(0,r.jsx)(n.td,{children:"Call metadata. See description below."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Metadata object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"agent"})," (string): This is the email address of the agent in the call. If omitted, will infer agent from voice ID if voice ID is enabled for the organisation or leave agent as unspecified otherwise."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"date"})," (string): Format (DD/MM/YYYY, HH",":mm","). Date and time that the call was recorded. If omitted, the last modified date of the call file will be used."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"chats",children:"Chats"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"POST Request"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" https://vela-server.botlhale.xyz/api/chats\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Authorization: Bearer <ProvidedToken>"})}),"\n",(0,r.jsx)(n.p,{children:"Below are the attributes and the formats of each attribute required in the body."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Body Params"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Requirement"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orgID"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"Organisation ID provided to you by Botlhale AI"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"chats"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"Array of message objects"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Message object:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"message"})," (string): Text that was sent."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"time"})," (string): Format (DD/MM/YYYY, HH",":mm",")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sender"})," (string): Agent, user, or bot."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"language"})," (string): Language code (optional)."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example of body"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'chats: [ \n    { "message": "Sawubona, ngithumele imali izolo kodwa ayikafiki. Ngingenzani?", "time": "06/08/2024, 09:15", "sender": "user", "language": "zu-ZA" }, \n    { "message": "Sawubona! Ngingu-bot lokwesekwa. Ngiyaxolisa ukuzwa ukuthi imali ayikafiki. Ake sibheke ndawonye.", "time": "06/08/2024, 09:15", "sender": "bot", "language": "zu-ZA" }, \n    { "message": "Ngicela unginike inombolo yesazisi noma ikhodi yesithenjwa yokuthumela imali.", "time": "06/08/2024, 09:16", "sender": "bot", "language": "zu-ZA" }, \n    { "message": "Nansi inombolo yesazisi: 1234567890.", "time": "06/08/2024, 09:17", "sender": "user", "language": "zu-ZA" }\n]\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"vela-call-upload-endpoint",children:"Vela Call Upload Endpoint"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Endpoint URL:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://api.botlhale.xyz/asr/async/upload/vela\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description:"}),"\nThis API endpoint generates a presigned URL and associated credentials that allow for the secure upload of a call recording. This feature is designed for integration with Vela, enabling organizations to seamlessly upload call data for processing."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Requirement"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"org_id"}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"Identifier for the organization submitting the call."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"metadata"}),(0,r.jsx)(n.td,{children:"Optional"}),(0,r.jsx)(n.td,{children:"A JSON containing the information below."})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"email"}),": Email address of the agent who participated in the call."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"date_of_call"}),": The date when the call took place."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.strong,{children:"Endpoint Behaviour"})}),(0,r.jsxs)(n.p,{children:["Before generating the presigned URL and upload credentials, the endpoint forwards the provided ",(0,r.jsx)(n.code,{children:"org_id"}),", ",(0,r.jsx)(n.code,{children:"email"}),", and ",(0,r.jsx)(n.code,{children:"date_of_call"})," to Vela for logging and processing. Vela responds with ",(0,r.jsx)(n.code,{children:"minute_allocation"})," and ",(0,r.jsx)(n.code,{children:"voice_id"})," statuses. The API performs the following checks:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Minute Allocation Check:"})," The API verifies if the organization (",(0,r.jsx)(n.code,{children:"org_id"}),") is within its ",(0,r.jsx)(n.code,{children:"minute_allocation"}),". If the organization has exceeded its allocation, an error is thrown."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Upload Process: Default Values",type:"note",children:[(0,r.jsx)(n.p,{children:"For the upload process, the following default values are used"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'{\n  "orgID": "BotlhaleAI999",\n  "NotifyUrl": "https://vela-server.botlhale.xyz/api/notifications",\n  "SampleRate": 16000,\n  "Diarization": true,\n  "VelaOrg":  None if voice_id returned by Vela is false\n}\n'})}),(0,r.jsx)(n.p,{children:"These defaults ensure consistent handling of call data during the upload to the server."})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response Format"}),": The response returns a JSON object containing a presigned URL and the necessary fields for secure data upload to an AWS S3 bucket."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Sample Response:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "fields": {\n        "key": "<key>",\n        "policy": "<policy>",\n        "x-amz-algorithm": "<>",\n        "x-amz-credential": "<>",\n        "x-amz-date": "<>",\n        "x-amz-security-token": "<>",\n        "x-amz-signature": "<>"\n    },\n    "url": "upload_url"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Integrate this API into your application to request a presigned URL, which allows you to upload call recordings to the specified ",(0,r.jsx)(n.code,{children:"upload_url"})," securely using the provided credentials and fields. Using the ",(0,r.jsx)(n.code,{children:"upload_url"})," works the same as a normal upload."]}),"\n",(0,r.jsx)(n.h2,{id:"contact-us",children:"Contact us"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["We are here to help! Please ",(0,r.jsx)(n.a,{href:"mailto:support@botlhale.ai",children:"contact us"})," with any questions."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var l=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),s=t(4164),l=t(3104),a=t(6347),i=t(205),o=t(7485),d=t(1682),c=t(9466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=u(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[d,h]=p({queryString:t,groupId:s}),[j,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),m=(()=>{const e=d??j;return x({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,l]),tabValues:l}}var g=t(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(d(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...l,className:(0,s.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const s={},l=r.createContext(s);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);