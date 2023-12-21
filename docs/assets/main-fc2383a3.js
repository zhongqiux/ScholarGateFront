import{o as m,c as v,H,ah as d,a as _,Q as E,W as I,F as D,a8 as V,J as W,U as R,V as c,P as u,O as C,T as P,ak as F,a9 as Z,az as K,aA as j,u as B,at as q}from"./@vue-533c3f3e.js";import{R as Q,c as J,a as X}from"./vue-router-f0ce08cc.js";import{Q as Y,R as x}from"./@element-plus-7946a086.js";import{d as L,c as ee}from"./pinia-01a938bb.js";import{a as p}from"./axios-21b846bc.js";import{I as te}from"./identicon.js-56b04766.js";import{m as oe}from"./blueimp-md5-3e7612d8.js";/* empty css                    */import{s as ne}from"./pinia-plugin-persistedstate-02097300.js";import{i as se}from"./element-plus-6c70e5ee.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();p.defaults.baseURL="http://120.46.148.251:8080";p.defaults.timeout=3e3;function Ze(e){return new Promise((t,a)=>{p.get("/hello",{params:{message:e},headers:{Authorization:g().token}}).then(o=>{console.log(o),t(o.data)}).catch(o=>{console.log(o),a(o)})})}function Ke(){window.alert("hello")}function je(e,t){return new Promise((a,o)=>{p.post("/users/login",{userName:e,password:t}).then(n=>{console.log(n),a(n.data)}).catch(n=>{console.log(n),o(n)})})}function qe(e){return new Promise((t,a)=>{p.get("/users/sendCode",{params:{email:e}}).then(o=>{console.log(o),t(o.data)}).catch(o=>{console.log(o),a(o)})})}function Qe(e,t,a,o){return new Promise((n,s)=>{p.post("/users/register",{username:e,password:t,email:a,code:o},{headers:{Authorization:g().token}}).then(r=>{console.log(r),n(r.data)}).catch(r=>{console.log(r),s(r)})})}function Je(e){return new Promise((t,a)=>{p.get("/getMessageList",{params:{userId:e},headers:{Authorization:g().token}}).then(o=>{console.log(o),t(o.data)}).catch(o=>{console.log(o),a(o)})})}function Xe(e){return new Promise((t,a)=>{p.get(`/concept/showPointConcept/${e}`,{headers:{Authorization:g().token}}).then(o=>{console.log(o),t(o.data)}).catch(o=>{console.log(o),a(o)})})}function Ye(e,t){return new Promise((a,o)=>{p.post("/concept/showWorks",{url:e,page:t,pageSize:10},{headers:{Authorization:g().token}}).then(n=>{console.log(n),a(n.data)}).catch(n=>{console.log(n),o(n)})})}function xe(e){return new Promise((t,a)=>{p.get("/concept/showHeatConcept",{params:{page:e},headers:{Authorization:g().token}}).then(o=>{console.log(o),t(o.data)}).catch(o=>{console.log(o),a(o)})})}var ae=(e=>(e[e.works=0]="works",e[e.cited=1]="cited",e))(ae||{});function et(e,t){let a="";switch(t){case 0:{a="works_count";break}case 1:{a="cited_by_count";break}}return new Promise((o,n)=>{p.get(`/institution/rank/${e}`,{params:{rank:a},headers:{Authorization:g().token}}).then(s=>{console.log(s),o(s.data)}).catch(s=>{console.log(s),n(s)})})}function tt(e,t){let a="";switch(t){case 0:{a="works_count";break}case 1:{a="cited_by_count";break}}return new Promise((o,n)=>{p.get("/scholar/hot",{params:{type:a},headers:{Authorization:g().token}}).then(s=>{console.log(s),o(s.data)}).catch(s=>{console.log(s),n(s)})})}var y=(e=>(e.authors="authors",e.concepts="concepts",e.fields="fields",e.funders="funders",e))(y||{});function re(e,t){return new Promise((a,o)=>{p.get(`/search/autocomplete/${e.toString()}/${t}`).then(n=>{console.log(n),a(n.data)}).catch(n=>{console.log(n),o(n)})})}const f=L("header",{state:()=>({search:!0,search_active:!1,display:!0,suggestions:new Array,serInput:"",login:!1,option:{value:y.concepts,label:"主题"}}),getters:{},actions:{change(){this.research===!0?this.research=!1:this.research=!0}}}),ot=L("hotInfo",{state:()=>({selected:"",rankBy:"works",page:1}),getters:{},actions:{}}),nt=L("counter",{state:()=>({count:0}),getters:{double:e=>e.count*2},actions:{increment(){this.count++}},persist:!0}),g=L("user",{state:()=>({token:"undefined",userName:"undefined",userId:-1,avatar:-1,email:"undefined",Auth:{},outdate:new Date("1919-5-4").getTime()}),getters:{islogin(){return new Date().getTime()<this.outdate}},actions:{},persist:!0});const S=(e,t)=>{const a=e.__vccOpts||e;for(const[o,n]of t)a[o]=n;return a},ie={props:{num:[Number]},name:"GitAvatar",computed:{url(){return"data:image/png;base64,"+new te(oe(this.num||0),420).toString()}}},le=["src"];function ue(e,t,a,o,n,s){return m(),v("img",{class:"avatar",src:s.url},null,8,le)}const ce=S(ie,[["render",ue],["__scopeId","data-v-37f2b8b2"]]),pe={name:"LoginButton",computed:{}};const de={class:"btn btn-ghost no-animation outline-none",style:{color:"aliceblue",padding:"0 25px"}};function _e(e,t,a,o,n,s){return m(),v("button",de,"登录")}const me=S(pe,[["render",_e],["__scopeId","data-v-2bbff506"]]),he=H({name:"Header",components:{GitAvatar:ce,LoginButton:me},data(){return{itemList:[{value:" 首页 ",path:"/"},{value:"网站介绍",path:"/main"},{value:"工作台",path:"/admin/board"}],input:"",active:1,options:[{value:y.concepts,label:"主题"},{value:y.fields,label:"领域"},{value:y.authors,label:"作者"}],value:"123",UserFilled:Y,store:f(),userStore:g(),clock:null}},methods:{go(e){this.$router.push(e)},push(e,t){this.$router.push({path:e,query:t})},getSuggestion(){this.clock&&clearTimeout(this.clock),this.store.serInput!=""&&(this.clock=setTimeout(()=>{re(this.store.option.value,this.store.serInput).then(e=>{console.log(e),this.store.suggestions=e.data.results,console.log(this.store.suggestions),this.store.suggestions.length>0&&this.$refs.dropdown2.handleOpen()})},500))}}}),fe="/ScholarGateFront/assets/icon-80798ee9.png";const T=e=>(K("data-v-08007022"),e=e(),j(),e),ge={class:"header"},ve=T(()=>_("img",{src:fe,class:"w-60 h-17"},null,-1)),we=[ve],Ee={class:"routes"},be=["onClick"],Pe={class:"search"},Ae={class:"ava"},ke=T(()=>_("svg",{width:"18",height:"18",viewBox:"0 0 24 24",class:"ZDI ZDI--BellFill24 css-7dgah8",fill:"white"},[_("path",{"fill-rule":"evenodd",d:"M9.723 21.271c0-.42.34-.76.76-.76h3.043a.76.76 0 0 1 0 1.521h-3.043a.76.76 0 0 1-.76-.76Z","clip-rule":"evenodd"}),_("path",{d:"M11.153 3.115c0-.618.376-1.115.844-1.115.469 0 .845.499.845 1.115v.183c3.997.369 7.012 4.117 7.024 8.515V17.468h.253a.76.76 0 1 1 0 1.521H3.891a.76.76 0 0 1 0-1.521h.253V11.813c.011-4.392 3.02-8.137 7.009-8.514v-.184Z"})],-1)),Ie=T(()=>_("span",{class:"w-5"},null,-1));function ye(e,t,a,o,n,s){const r=d("el-dropdown-item"),k=d("el-dropdown"),O=d("el-dropdown-menu"),h=d("el-icon"),w=d("el-badge"),b=d("el-tooltip"),U=d("LoginButton"),M=d("GitAvatar");return m(),v("div",ge,[_("div",{class:"icon float-left hover:cursor-pointer",onClick:t[0]||(t[0]=i=>e.go("/index"))},we),E(_("div",Ee,[(m(!0),v(D,null,V(e.itemList,(i,$)=>(m(),v("div",{class:W(e.active-1==$?"active header-item":"header-item"),onClick:Te=>[e.go(i.path),e.active=$+1]},R(i.value),11,be))),256))],512),[[I,e.store.display]]),E(_("div",Pe,[c(k,null,{dropdown:u(()=>[(m(!0),v(D,null,V(e.options,i=>(m(),C(r,{onClick:$=>e.store.option=i},{default:u(()=>[P(R(i.label),1)]),_:2},1032,["onClick"]))),256))]),default:u(()=>[E(_("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>e.store.option.label=i),readonly:"",autocomplete:"off",placeholder:"请选择",class:"base-input_inner"},null,512),[[F,e.store.option.label]])]),_:1}),c(k,{ref:"dropdown2",trigger:"contextmenu",placement:"bottom-start"},{dropdown:u(()=>[c(O,null,{default:u(()=>[(m(!0),v(D,null,V(e.store.suggestions,i=>(m(),C(r,{onClick:$=>e.store.serInput=i.display_name},{default:u(()=>[P(R(i.display_name),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),default:u(()=>[E(_("input",{type:"text",autocomplete:"off",onInput:t[2]||(t[2]=i=>e.getSuggestion()),"onUpdate:modelValue":t[3]||(t[3]=i=>e.store.serInput=i),placeholder:"搜索你感兴趣的内容...",class:"top_input",onFocus:t[4]||(t[4]=i=>e.store.search_active=!0),onKeyup:t[5]||(t[5]=Z(i=>e.push("/explorePaper",{key:e.store.option.value,value:e.store.serInput}),["enter","native"]))},null,544),[[F,e.store.serInput]])]),_:1},512)],512),[[I,e.store.search&&e.store.display]]),_("div",Ae,[c(b,{effect:"dark",content:"消息",placement:"bottom"},{default:u(()=>[c(w,{value:1,max:99,class:"item"},{default:u(()=>[c(h,{color:"#777575",class:"no-inherit",size:20,style:{"vertical-align":"middle"}},{default:u(()=>[ke]),_:1})]),_:1})]),_:1}),Ie,E(c(U,{class:"outline-none",onClick:t[6]||(t[6]=i=>e.go("/login"))},null,512),[[I,!e.userStore.islogin]]),E(c(k,{onClick:t[11]||(t[11]=i=>e.go(e.userStore.Auth==0?"/admin/board":"/person"))},{dropdown:u(()=>[c(O,null,{default:u(()=>[c(r,{onClick:t[7]||(t[7]=i=>e.go("/admin/board"))},{default:u(()=>[P("管理员")]),_:1}),c(r,{onClick:t[8]||(t[8]=i=>e.go("/person"))},{default:u(()=>[P("主页")]),_:1}),c(r,{onClick:t[9]||(t[9]=i=>e.go("/result"))},{default:u(()=>[P("学术成果展示")]),_:1}),c(r,{onClick:t[10]||(t[10]=i=>e.go("/login"))},{default:u(()=>[P("登录")]),_:1})]),_:1})]),default:u(()=>[c(M,{num:e.userStore.avatar,class:"outline-none"},null,8,["num"])]),_:1},512),[[I,e.userStore.islogin]])])])}const $e=S(he,[["render",ye],["__scopeId","data-v-08007022"]]),Le={class:"common-layout"},Se=H({__name:"App",setup(e){const t=f();return(a,o)=>{const n=d("el-header"),s=d("el-main"),r=d("el-container");return m(),v("div",Le,[c(r,null,{default:u(()=>[E(c(n,null,{default:u(()=>[c($e)]),_:1},512),[[I,B(t).login]]),c(s,null,{default:u(()=>[c(B(Q))]),_:1})]),_:1})])}}});const Oe=S(Se,[["__scopeId","data-v-a960ba4c"]]),De="modulepreload",Ve=function(e){return"/ScholarGateFront/"+e},z={},l=function(t,a,o){if(!a||a.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(a.map(s=>{if(s=Ve(s),s in z)return;z[s]=!0;const r=s.endsWith(".css"),k=r?'[rel="stylesheet"]':"";if(!!o)for(let w=n.length-1;w>=0;w--){const b=n[w];if(b.href===s&&(!r||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${k}`))return;const h=document.createElement("link");if(h.rel=r?"stylesheet":De,r||(h.as="script",h.crossOrigin=""),h.href=s,document.head.appendChild(h),r)return new Promise((w,b)=>{h.addEventListener("load",w),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s})},Re=[{path:"/admin",name:"admin",title:"管理审核",component:()=>l(()=>import("./AdminPage-a446647b.js"),["assets/AdminPage-a446647b.js","assets/@vue-533c3f3e.js","assets/@element-plus-7946a086.js","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/AdminPage-e488f4e6.css","assets/tailwindcss-b0dc7e34.css"]),children:[{path:"issue",name:"issue",component:()=>l(()=>import("./Issue-abdac55a.js"),["assets/Issue-abdac55a.js","assets/@element-plus-7946a086.js","assets/@vue-533c3f3e.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/blueimp-md5-3e7612d8.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/pinia-plugin-persistedstate-02097300.js","assets/Issue-75419f46.css","assets/tailwindcss-b0dc7e34.css"])},{path:"board",name:"board",component:()=>l(()=>import("./DashBoard-1b71f91f.js"),["assets/DashBoard-1b71f91f.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/DashBoard-9caa26ec.css","assets/tailwindcss-b0dc7e34.css"])}]},{path:"/hotInformation",name:"",title:"热门数据",component:()=>l(()=>import("./index-204bc80d.js"),["assets/index-204bc80d.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/index-58b769ab.css","assets/tailwindcss-b0dc7e34.css"]),children:[{path:"field",name:"",title:"领域热门数据",component:()=>l(()=>import("./Field-1fab6b35.js"),["assets/Field-1fab6b35.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/Field-b3f4d1e0.css","assets/tailwindcss-b0dc7e34.css"])},{path:"institution",name:"",title:"机构热门数据",component:()=>l(()=>import("./Institution-c06320b1.js"),["assets/Institution-c06320b1.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/Institution-1e5965a4.css","assets/tailwindcss-b0dc7e34.css"])},{path:"scholar",name:"",title:"学者热门数据",component:()=>l(()=>import("./Scholar-fed6e072.js"),["assets/Scholar-fed6e072.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/Scholar-d82f859a.css","assets/tailwindcss-b0dc7e34.css"])}]},{path:"/",name:"",title:"首页",component:()=>l(()=>import("./MainPage-bbd30575.js"),["assets/MainPage-bbd30575.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/MainPage-2569ed38.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/index",name:"index",title:"首页",component:()=>l(()=>import("./MainPage-bbd30575.js"),["assets/MainPage-bbd30575.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/MainPage-2569ed38.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/main",name:"",title:"main",component:()=>l(()=>import("./HelloWorld-9727d2df.js"),["assets/HelloWorld-9727d2df.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/HelloWorld-ddae7f69.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/person",name:"",title:"person",component:()=>l(()=>import("./PersonPage-06c0bb69.js"),["assets/PersonPage-06c0bb69.js","assets/Avatar-7c3839f8.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/PersonPage-4c476a94.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/researcher",name:"",title:"researcher",component:()=>l(()=>import("./ResearcherPage-613d2f06.js"),["assets/ResearcherPage-613d2f06.js","assets/Avatar-7c3839f8.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/@element-plus-7946a086.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/ResearcherPage-6ba01d89.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/result",name:"",title:"result",component:()=>l(()=>import("./ResultPage-18e133dc.js"),["assets/ResultPage-18e133dc.js","assets/Result-4c794857.js","assets/@element-plus-7946a086.js","assets/@vue-533c3f3e.js","assets/Result-1ef650d7.css","assets/iconfont-867a12b3.css","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/ResultPage-67e5e56a.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/patent",name:"",title:"patent",component:()=>l(()=>import("./PatentPage-4728640e.js"),["assets/PatentPage-4728640e.js","assets/Result-4c794857.js","assets/@element-plus-7946a086.js","assets/@vue-533c3f3e.js","assets/Result-1ef650d7.css","assets/iconfont-867a12b3.css","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/PatentPage-c394ae59.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/explorePaper",name:"",title:"explorePaper",component:()=>l(()=>import("./SearchDetail-fe38bfa6.js"),["assets/SearchDetail-fe38bfa6.js","assets/search-12aedc13.js","assets/pinia-01a938bb.js","assets/@vue-533c3f3e.js","assets/@vueuse-c44d1aed.js","assets/@element-plus-7946a086.js","assets/SearchDetail-35397064.css","assets/iconfont-867a12b3.css"])},{path:"/exploreAuthor",name:"",title:"exploreAuthor",component:()=>l(()=>import("./SearchAuthor-14b5f2a2.js"),["assets/SearchAuthor-14b5f2a2.js","assets/search-12aedc13.js","assets/pinia-01a938bb.js","assets/@vue-533c3f3e.js","assets/@vueuse-c44d1aed.js","assets/@element-plus-7946a086.js","assets/SearchAuthor-77d24b88.css","assets/iconfont-867a12b3.css"])},{path:"/login",name:"",title:"登录",component:()=>l(()=>import("./NewLogin-fd0fa168.js"),["assets/NewLogin-fd0fa168.js","assets/element-plus-6c70e5ee.js","assets/@vue-533c3f3e.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@element-plus-7946a086.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/blueimp-md5-3e7612d8.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/pinia-plugin-persistedstate-02097300.js","assets/NewLogin-2213a642.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/field",name:"",title:"领域",component:()=>l(()=>import("./FieldPage-2980b911.js"),["assets/FieldPage-2980b911.js","assets/@element-plus-7946a086.js","assets/@vue-533c3f3e.js","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/FieldPage-767feadc.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/messages",name:"Messages",title:"消息中心",component:()=>l(()=>import("./Messages-ac06c29c.js"),["assets/Messages-ac06c29c.js","assets/element-plus-6c70e5ee.js","assets/@vue-533c3f3e.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@element-plus-7946a086.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/blueimp-md5-3e7612d8.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/pinia-plugin-persistedstate-02097300.js","assets/Messages-0e479e11.css","assets/tailwindcss-b0dc7e34.css"])},{path:"/messagedetail",name:"",title:"消息",component:()=>l(()=>import("./MessageDetail-cca75fc7.js"),["assets/MessageDetail-cca75fc7.js","assets/@element-plus-7946a086.js","assets/@vue-533c3f3e.js","assets/moment-fbc5633a.js","assets/vue-router-f0ce08cc.js","assets/pinia-01a938bb.js","assets/axios-21b846bc.js","assets/identicon.js-56b04766.js","assets/blueimp-md5-3e7612d8.js","assets/pinia-plugin-persistedstate-02097300.js","assets/element-plus-6c70e5ee.js","assets/lodash-es-21c98b27.js","assets/@vueuse-c44d1aed.js","assets/@popperjs-c75af06c.js","assets/@ctrl-f8748455.js","assets/dayjs-5c8c3070.js","assets/async-validator-dee29e8b.js","assets/memoize-one-297ddbcb.js","assets/escape-html-9c1ce378.js","assets/normalize-wheel-es-ed76fb12.js","assets/@floating-ui-72671fae.js","assets/element-plus-b456784d.css","assets/MessageDetail-b9bd558b.css","assets/tailwindcss-b0dc7e34.css"])}],N=J({history:X("ScholarGateFront"),routes:Re});N.beforeEach((e,t,a)=>{e.path=="/"||e.path==="/index"?f().search=!1:f().search=!0,e.path=="/admin"?f().display=!1:f().display=!0,e.path=="/login"?f().login=!1:f().login=!0,console.log(t),console.log(e),console.log(f().display),a()});const G=ee();G.use(ne);const A=q(Oe);A.config.globalProperties.$env={VITE_APP:"Scholar",VITE_HOST:"http://120.46.148.251:8080",BASE_URL:"/ScholarGateFront",MODE:"production",DEV:!1,PROD:!0,SSR:!1};for(const[e,t]of Object.entries(x))A.component(e,t);A.use(G);A.use(N);A.use(se);A.mount("#app");export{ae as R,S as _,et as a,tt as b,y as c,f as d,re as e,nt as f,xe as g,Ke as h,g as i,Xe as j,Ye as k,je as l,Je as m,Qe as r,qe as s,Ze as t,ot as u};