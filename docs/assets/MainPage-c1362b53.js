import{H as h,o,c as i,a as t,U as l,Q as v,W as _,F as d,a8 as c,b as m,az as b,aA as f,T as r}from"./@vue-5e5b7d13.js";import{_ as g}from"./main-ebf097bb.js";import"./vue-router-6057d0dd.js";import"./@element-plus-803dc597.js";import"./pinia-1cec025d.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./element-plus-ed20eb0f.js";import"./lodash-es-21c98b27.js";import"./@vueuse-6c1c0c2c.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c34775c.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-64fe8e16.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const w=h({name:"MainPages",data(){return{input:"",active:1,options:[{value:"123",label:"主题"},{value:"456",label:"关键词"}],value:"123",selecting:!1,option:{value:"123",label:"主题"},rpapers:[{title:"Human-like systematic generalization through a meta-learning neural network",desc:"The power of human language and thought arises from systematic compositionality—the algebraic ability to understand and produce novel combinations from known components. ",keys:["AI","算法"],authors:["张三"]}]}},methods:{join(e){let n="";return e.forEach(u=>{n=n+u}),n}}});const s=e=>(b("data-v-d8efe5ab"),e=e(),f(),e),k={class:"center-back"},x={class:"search center"},y=s(()=>t("i",{class:"sort-icon"},"▼",-1)),B=["onClick"],E=s(()=>t("input",{class:"search-input",id:"txt_SearchText",name:"txt_SearchText",type:"text",autocomplete:"off",placeholder:"中文文献、外文文献",value:"",maxlength:"100",style:{color:"rgb(125, 125, 125)"}},null,-1)),A=s(()=>t("input",{class:"search-btn",type:"button",value:""},null,-1)),C=s(()=>t("div",{class:"exten"},[t("div",{class:"advanced"},[r("高级检索"),t("span",{class:"w-2 inline-block"}),t("svg",{t:"1700095260301",class:"icon w-2 h-2",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3992",width:"200",height:"200"},[t("path",{d:"M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z",fill:"#999999","p-id":"3993"})])]),t("div",{class:"scholar"},[r("检索学者"),t("span",{class:"w-2 inline-block"}),t("svg",{t:"1700095260301",class:"icon w-2 h-2",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3992",width:"200",height:"200"},[t("path",{d:"M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z",fill:"#999999","p-id":"3993"})])])],-1)),D={class:"links"},M={class:"link-con"},S=s(()=>t("li",null,"学术成果管理",-1)),L={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{"margin-left":"0px","margin-right":"0px"}},$=s(()=>t("path",{d:"M1 1L6 6.00031L1 11",stroke:"black","stroke-opacity":"0.8","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),F=[$],I=s(()=>t("li",null,"学术成果查询",-1)),T={width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{"margin-left":"0px","margin-right":"0px"}},j=s(()=>t("path",{d:"M1 1L6 6.00031L1 11",stroke:"black","stroke-opacity":"0.8","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),z=[j],N=s(()=>t("li",null,"增值服务",-1)),P={class:"display center"},V={class:"papers"},H=s(()=>t("div",{class:"title"},[r("热门文章"),t("span",{class:"w-10 inline-block"}),t("span",{class:"text-sm hover:text-blue-500 hover:cursor-pointer"},"查看更多")],-1)),G={class:"layout"},Q={class:"paper"},U={class:"article-title"},W={class:"desc"},q={class:"keys flex"},J={class:"key"},K={class:"authos flex"},O={class:"author"},R=m('<div class="index" data-v-d8efe5ab><div class="title" data-v-d8efe5ab>科研机构排名<span class="w-10 inline-block" data-v-d8efe5ab></span><span class="text-sm hover:text-blue-500 hover:cursor-pointer" data-v-d8efe5ab>查看更多</span></div><table class="table" data-v-d8efe5ab><thead data-v-d8efe5ab><tr data-v-d8efe5ab><th data-v-d8efe5ab></th><th data-v-d8efe5ab>Name</th><th data-v-d8efe5ab>论文总数</th></tr></thead><tbody data-v-d8efe5ab><tr data-v-d8efe5ab><th data-v-d8efe5ab>1</th><td data-v-d8efe5ab>Cy Ganderton</td><td data-v-d8efe5ab>100</td></tr></tbody></table></div>',1);function X(e,n,u,Y,Z,tt){return o(),i(d,null,[t("div",k,[t("div",x,[t("div",{class:"sort-default",onClick:n[1]||(n[1]=a=>e.selecting=!0)},[t("span",null,l(e.option.label+" "),1),y,v(t("ul",{class:"pop-options",onMouseleave:n[0]||(n[0]=a=>e.selecting=!1)},[(o(!0),i(d,null,c(e.options,a=>(o(),i("li",{onClick:p=>e.option=a},l(a.label),9,B))),256))],544),[[_,e.selecting]])]),E,A,C])]),t("div",D,[t("ul",M,[S,t("li",null,[(o(),i("svg",L,F))]),I,t("li",null,[(o(),i("svg",T,z))]),N])]),t("div",P,[t("div",V,[H,t("div",G,[(o(!0),i(d,null,c(e.rpapers,a=>(o(),i("div",Q,[t("h3",U,l(a.title),1),t("p",W,l(a.title),1),t("div",q,[(o(!0),i(d,null,c(a.keys,p=>(o(),i("div",J,l(p),1))),256))]),t("div",K,[t("span",O,l(e.join(a.authors)),1)])]))),256))])]),R])],64)}const gt=g(w,[["render",X],["__scopeId","data-v-d8efe5ab"]]);export{gt as default};