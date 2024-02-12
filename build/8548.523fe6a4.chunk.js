"use strict";(self.webpackChunk_67_strapi_cybersec=self.webpackChunk_67_strapi_cybersec||[]).push([[8548,8520],{38548:(z,R,e)=>{e.d(R,{ProtectedCreatePage:()=>k});var s=e(19968),O=e(16048),M=e(85816),L=e(33627),U=e(28520),B=e(54320),K=e(5240),D=e(91892),g=e(36196),o=e(20880),_=e(21424),P=e(62552),W=e(70516),S=e(31812),v=e(18424),b=e(52540),T=e(21968),H=e(12132),se=e(48632),te=e(85676),ne=e(35184),ae=e(99568),G=e(96556),oe=e(13192),re=e(30840),p=e(77784),ie=e(79371),Z=e(67888),F=e(52600),Q=e(95752),de=e(37388),le=e(61840),_e=e(49108),Y=e(44632),Ee=e(50840),J=e(20252),ce=e(86432),he=e(22612),A=e(24808),x=e(24024),I=e(40960),ge=e(33656),N=e(43280),Me=e(79804),me=e(19632),X=e(29576),ue=e(61152),Oe=e(9589),Pe=e(45488),De=e(75516),ve=e(17892),Ce=e(31212),w=e(41712),fe=e(54196);const k=()=>{const q=(0,M.j)(L.s);return(0,s.jsx)(O.rF,{permissions:q.settings?.webhooks.create,children:(0,s.jsx)(U.E,{})})}},28520:(z,R,e)=>{e.r(R),e.d(R,{E:()=>ee,a:()=>k,b:()=>Ke});var s=e(19968),O=e(62552),M=e(48936),L=e(33128),U=e(89296),B=e(532),K=e(93432),D=e(75872),g=e(45412),o=e(35480),_=e(63358),P=e(38296),W=e(32568),S=e(19576),v=e(5e3),b=e(28724),T=e(70996),H=e(62492),se=e(82800),te=e(65092),ne=e(9544),ae=e(28464),G=e(35676),oe=e(42816),re=e(48112),p=e(16048),ie=e(39380),Z=e(49008),F=e(85816),Q=e(41712),de=e(33627),le=e(5540),_e=e(48636),Y=e(39716),Ee=e(24144),J=e(53305),ce=e(64764),he=e(15396),A=e(31812),x=e(14632),I=e(52540),ge=e(43164),N=e(69372),Me=e(54196);const[me,X]=(0,ge.G)("WebhookEvent"),ue=({children:t})=>{const{formatMessage:n}=(0,x.c)(),{collectionTypes:a,isLoading:c}=(0,Q.u)(),r=O.useMemo(()=>a.some(i=>i.options?.draftAndPublish===!0),[a]),E=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,s.jsx)(me,{isDraftAndPublish:r,children:(0,s.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.u,{"aria-hidden":!0,children:E}),c&&(0,s.jsx)(U.c,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,s.jsx)(Oe,{"aria-label":E,children:t})]})})},Oe=(0,N.cp)(B.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:t})=>t.colors.neutral100};
  }

  thead th span {
    color: ${({theme:t})=>t.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:t})=>t.spaces[3]};
    padding-block-end: ${({theme:t})=>t.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:t})=>t.spaces[2]};
  }
`,Pe=t=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return t&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},De=({getHeaders:t=Pe})=>{const{isDraftAndPublish:n}=X("Headers"),{formatMessage:a}=(0,x.c)(),c=t(n);return(0,s.jsx)(K.Y,{children:(0,s.jsxs)(D._,{children:[(0,s.jsx)(g.d,{children:(0,s.jsx)(o.K,{children:a({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),c.map(r=>["app.utils.publish","app.utils.unpublish"].includes(r?.id??"")?(0,s.jsx)(g.d,{title:a({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,s.jsx)(_.O,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id):(0,s.jsx)(g.d,{children:(0,s.jsx)(_.O,{variant:"sigma",textColor:"neutral600",children:a(r)})},r.id))]})})},ve=({providedEvents:t})=>{const{isDraftAndPublish:n}=X("Body"),a=t||Ce(n),{values:c,handleChange:r}=(0,A.Sq)(),E="events",i=c.events,u=[],C=i.reduce((d,l)=>{const m=l.split(".")[0];return d[m]||(d[m]=[]),d[m].push(l),d},{}),h=({target:{name:d,value:l}})=>{const m=new Set(i);l?m.add(d):m.delete(d),r({target:{name:E,value:Array.from(m)}})},y=({target:{name:d,value:l}})=>{const m=new Set(i);l?a[d].forEach(j=>{u.includes(j)||m.add(j)}):a[d].forEach(j=>m.delete(j)),r({target:{name:E,value:Array.from(m)}})};return(0,s.jsx)(P.A,{children:Object.entries(a).map(([d,l])=>(0,s.jsx)(w,{disabledEvents:u,name:d,events:l,inputValue:C[d],handleSelect:h,handleSelectAll:y},d))})},Ce=t=>{const n=["entry.create","entry.update","entry.delete"];return t&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},w=({disabledEvents:t=[],name:n,events:a=[],inputValue:c=[],handleSelect:r,handleSelectAll:E})=>{const{formatMessage:i}=(0,x.c)(),u=a.filter(l=>!t.includes(l)),C=c.length>0,h=c.length===u.length,y=({target:{name:l}})=>{E({target:{name:l,value:!h}})},d=5;return(0,s.jsxs)(D._,{children:[(0,s.jsx)(g.w,{children:(0,s.jsx)(W.y,{indeterminate:C&&!h,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:y,value:h,children:fe(n)})}),a.map(l=>(0,s.jsx)(g.w,{children:(0,s.jsx)(S.c,{disabled:t.includes(l),"aria-label":l,name:l,value:c.includes(l),onValueChange:m=>r({target:{name:l,value:m}})})},l)),a.length<d&&(0,s.jsx)(g.w,{colSpan:d-a.length})]})},fe=t=>t.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),k={Root:ue,Headers:De,Body:ve,Row:w},q=()=>(0,s.jsxs)(k.Root,{children:[(0,s.jsx)(k.Headers,{}),(0,s.jsx)(k.Body,{})]}),We=()=>{const{formatMessage:t}=(0,x.c)(),{values:n,errors:a}=(0,A.Sq)();return(0,s.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(L.u,{children:t({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,s.jsx)(v.k,{padding:8,background:"neutral100",hasRadius:!0,children:(0,s.jsx)(A.KE,{validateOnChange:!1,name:"headers",render:({push:c,remove:r})=>(0,s.jsxs)(b.y,{gap:4,children:[n.headers.map((E,i)=>{const u=a.headers?.[i],C=typeof u=="object"?u.key:void 0,h=typeof u=="object"?u.value:void 0;return(0,s.jsxs)(O.Fragment,{children:[(0,s.jsx)(T.C,{col:6,children:(0,s.jsx)(A.IN,{as:Ie,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:t({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:C})}),(0,s.jsx)(T.C,{col:6,children:(0,s.jsxs)(M.C,{alignItems:"flex-end",children:[(0,s.jsx)(v.k,{style:{flex:1},children:(0,s.jsx)(A.IN,{as:H.g,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:t({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:h})}),(0,s.jsx)(M.C,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:h?0:5,children:(0,s.jsx)(p.CA,{disabled:n.headers.length===1,onClick:()=>r(i),label:t({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${E.key}`)}),(0,s.jsx)(T.C,{col:12,children:(0,s.jsx)(se.c,{type:"button",onClick:()=>{c({key:"",value:""})},startIcon:(0,s.jsx)(_e.c,{}),children:t({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},Ie=({name:t,onChange:n,value:a,...c})=>{const{values:{headers:r}}=(0,A.Sq)(),[E,i]=O.useState([...Te]);O.useEffect(()=>{const h=Te.filter(y=>!r?.some(d=>d.key!==a&&d.key===y));i(h)},[r,a]);const u=h=>{n({target:{name:t,value:h}})},C=h=>{i(y=>[...y,h]),u(h)};return(0,s.jsx)(te.cT,{...c,onClear:()=>u(""),onChange:u,onCreateOption:C,placeholder:"",value:a,children:E.map(h=>(0,s.jsx)(ne.m,{value:h,children:h},h))})},Te=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],je=({isPending:t,onCancel:n,response:a})=>{const{statusCode:c,message:r}=a??{},{formatMessage:E}=(0,x.c)();return(0,s.jsx)(v.k,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(b.y,{gap:4,style:{alignItems:"center"},children:[(0,s.jsx)(T.C,{col:3,children:(0,s.jsx)(_.O,{children:E({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,s.jsx)(T.C,{col:3,children:(0,s.jsx)(pe,{isPending:t,statusCode:c})}),(0,s.jsx)(T.C,{col:6,children:t?(0,s.jsx)(M.C,{justifyContent:"flex-end",children:(0,s.jsx)("button",{onClick:n,type:"button",children:(0,s.jsxs)(M.C,{gap:2,alignItems:"center",children:[(0,s.jsx)(_.O,{textColor:"neutral400",children:E({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,s.jsx)(V,{as:Y.c,color:"neutral400"})]})})}):(0,s.jsx)(xe,{statusCode:c,message:r})})]})})},V=N.cp.svg(({theme:t,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,N.gV)`
          path {
            fill: ${t.colors[n]};
          }
        `:""}
`),pe=({isPending:t,statusCode:n})=>{const{formatMessage:a}=(0,x.c)();return t||!n?(0,s.jsxs)(M.C,{gap:2,alignItems:"center",children:[(0,s.jsx)(V,{as:Ee.c}),(0,s.jsx)(_.O,{children:a({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,s.jsxs)(M.C,{gap:2,alignItems:"center",children:[(0,s.jsx)(V,{as:J.c,color:"success700"}),(0,s.jsx)(_.O,{children:a({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,s.jsxs)(M.C,{gap:2,alignItems:"center",children:[(0,s.jsx)(V,{as:Y.c,color:"danger700"}),(0,s.jsxs)(_.O,{children:[a({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},xe=({statusCode:t,message:n})=>{const{formatMessage:a}=(0,x.c)();return t?t>=200&&t<300?(0,s.jsx)(M.C,{justifyContent:"flex-end",children:(0,s.jsx)(_.O,{textColor:"neutral600",ellipsis:!0,children:a({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):t>=300?(0,s.jsx)(M.C,{justifyContent:"flex-end",children:(0,s.jsx)(M.C,{maxWidth:(0,p.W8)(250),justifyContent:"flex-end",title:n,children:(0,s.jsx)(_.O,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Re=({handleSubmit:t,triggerWebhook:n,isCreating:a,isTriggering:c,triggerResponse:r,data:E})=>{const{formatMessage:i}=(0,x.c)(),[u,C]=O.useState(!1),h=(0,F.p)(q,async()=>(await e.e(5424).then(e.bind(e,55424))).EventsTableEE),y=l=>Object.keys(l).length?Object.entries(l).map(([m,j])=>({key:m,value:j})):[{key:"",value:""}],d=(0,A.KO)({initialValues:{name:E?.name||"",url:E?.url||"",headers:y(E?.headers||{}),events:E?.events||[]},async onSubmit(l,m){await t(l,m),m.resetForm({values:l})},validationSchema:Be({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return h?(0,s.jsx)(A.uo,{value:d,children:(0,s.jsxs)(p.QF,{children:[(0,s.jsx)(ae.a,{primaryAction:(0,s.jsxs)(M.C,{gap:2,children:[(0,s.jsx)(G.Z,{onClick:()=>{n(),C(!0)},variant:"tertiary",startIcon:(0,s.jsx)(ce.c,{}),disabled:a||c,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,s.jsx)(G.Z,{startIcon:(0,s.jsx)(J.c,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:a?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):E?.name,navigationAction:(0,s.jsx)(le.c,{as:ie.Af,startIcon:(0,s.jsx)(he.c,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,s.jsx)(oe.S,{children:(0,s.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:4,children:[u&&(0,s.jsx)(je,{isPending:c,response:r,onCancel:()=>C(!1)}),(0,s.jsx)(v.k,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,s.jsxs)(b.y,{gap:6,children:[(0,s.jsx)(T.C,{col:6,children:(0,s.jsx)(A.IN,{as:H.g,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,s.jsx)(T.C,{col:12,children:(0,s.jsx)(A.IN,{as:H.g,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,s.jsx)(We,{}),(0,s.jsx)(h,{})]})})]})})]})}):null},Le=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ue=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Be=({formatMessage:t})=>I.kt().shape({name:I.Qb().required(t({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Le,t({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:I.Qb().required(t({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ue,t({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:I.Wk(n=>{const a=I.M$();if(n.length===1){const{key:c,value:r}=n[0];if(!c&&!r)return a}return a.of(I.kt().shape({key:I.Qb().required(t({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:I.Qb().required(t({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:I.M$()}),Ae=t=>({...t,headers:t.headers.reduce((n,{key:a,value:c})=>(a!==""&&(n[a]=c),n),{})}),ee=()=>{const n=(0,Z.SU)("/settings/webhooks/:id")?.params.id,a=n==="create",{replace:c}=(0,Z.Uz)(),r=(0,p.eo)(),{_unstableFormatAPIError:E,_unstableFormatValidationErrors:i}=(0,p.An)(),{isLoading:u}=(0,Q.u)(),[C,h]=O.useState(!1),[y,d]=O.useState(),{isLoading:l,webhooks:m,error:j,createWebhook:Se,updateWebhook:be,triggerWebhook:ke}=(0,Me.u)({id:n},{skip:a});O.useEffect(()=>{j&&r({type:"warning",message:E(j)})},[j,r,E]);const $e=async()=>{try{h(!0);const $=await ke(n);if("error"in $){r({type:"warning",message:E($.error)});return}d($.data)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{h(!1)}},Fe=async($,ye)=>{try{if(a){const f=await Se(Ae($));if("error"in f){(0,F.x)(f.error)&&f.error.name==="ValidationError"?ye.setErrors(i(f.error)):r({type:"warning",message:E(f.error)});return}r({type:"success",message:{id:"Settings.webhooks.created"}}),c(`/settings/webhooks/${f.data.id}`)}else{const f=await be({id:n,...Ae($)});if("error"in f){(0,F.x)(f.error)&&f.error.name==="ValidationError"?ye.setErrors(i(f.error)):r({type:"warning",message:E(f.error)});return}r({type:"success",message:{id:"notification.form.success.fields"}})}}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(l||u)return(0,s.jsx)(p.Wm,{});const[He]=m??[];return(0,s.jsxs)(re.G,{children:[(0,s.jsx)(p.K8,{name:"Webhooks"}),(0,s.jsx)(Re,{data:He,handleSubmit:Fe,triggerWebhook:$e,isCreating:a,isTriggering:C,triggerResponse:y})]})},Ke=Object.freeze(Object.defineProperty({__proto__:null,EditPage:ee,ProtectedEditPage:()=>{const t=(0,F.j)(de.s);return(0,s.jsx)(p.rF,{permissions:t.settings?.webhooks.update,children:(0,s.jsx)(ee,{})})}},Symbol.toStringTag,{value:"Module"}))},41712:(z,R,e)=>{e.d(R,{u:()=>K});var s=e(62552),O=e(16048),M=e(85816);const L=M.m.injectEndpoints({endpoints:D=>({getComponents:D.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:g=>g.data}),getContentTypes:D.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:g=>g.data})}),overrideExisting:!1}),{useGetComponentsQuery:U,useGetContentTypesQuery:B}=L;function K(){const{_unstableFormatAPIError:D}=(0,O.An)(),g=(0,O.eo)(),o=U(),_=B();s.useEffect(()=>{_.error&&g({type:"warning",message:D(_.error)})},[_.error,D,g]),s.useEffect(()=>{o.error&&g({type:"warning",message:D(o.error)})},[o.error,D,g]);const P=o.isLoading||_.isLoading,W=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind==="collectionType"&&v.isDisplayed),[_?.data]),S=s.useMemo(()=>(_?.data??[]).filter(v=>v.kind!=="collectionType"&&v.isDisplayed),[_?.data]);return{isLoading:P,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:W,singleTypes:S}}},54196:(z,R,e)=>{e.d(R,{u:()=>D});var s=e(85816);const O=s.m.injectEndpoints({endpoints:g=>({getWebhooks:g.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,_,P)=>typeof P=="object"&&"id"in P?[{type:"Webhook",id:P.id}]:[...o?.map(({id:W})=>({type:"Webhook",id:W}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:g.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:g.mutation({query:({id:o,..._})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:_}),transformResponse:o=>o.data,invalidatesTags:(o,_,{id:P})=>[{type:"Webhook",id:P}]}),triggerWebhook:g.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:g.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,_,{ids:P})=>P.map(W=>({type:"Webhook",id:W}))})}),overrideExisting:!1}),{useGetWebhooksQuery:M,useCreateWebhookMutation:L,useUpdateWebhookMutation:U,useTriggerWebhookMutation:B,useDeleteManyWebhooksMutation:K}=O,D=(g=void 0,o)=>{const{data:_,isLoading:P,error:W}=M(g,o),[S]=L(),[v]=U(),[b]=B(),[T]=K();return{webhooks:_,isLoading:P,error:W,createWebhook:S,updateWebhook:v,triggerWebhook:b,deleteManyWebhooks:T}}}}]);
