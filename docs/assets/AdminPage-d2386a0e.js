import{H as g,_ as w,ah as t,o as A,c as I,V as e,P as o,u as c,T as P,X as S,az as T,aA as V,a as p}from"./@vue-5e5b7d13.js";import{S as k,T as y,U as B}from"./@element-plus-901cfadf.js";import{_ as N}from"./main-20e961e1.js";import"./vue-router-daaeaf7b.js";import"./pinia-1cec025d.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./element-plus-f98e4839.js";import"./lodash-es-21c98b27.js";import"./@vueuse-6c1c0c2c.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const m=n=>(T("data-v-1c54f003"),n=n(),V(),n),b={class:"layout"},O=m(()=>p("span",null,"收起",-1)),z=m(()=>p("span",null,"主页",-1)),E=g({__name:"AdminPage",setup(n){const s=w({isCollapse:1,show:["收起","展开"]}),r=(a,l)=>{console.log(a,l)},d=(a,l)=>{console.log(a,l)},u=()=>{s.isCollapse=1-s.isCollapse};return(a,l)=>{const i=t("el-icon"),_=t("el-menu-item"),f=t("el-menu"),h=t("el-aside"),v=t("router-view"),C=t("el-main"),x=t("el-container");return A(),I("div",b,[e(x,null,{default:o(()=>[e(h,{width:"auto"},{default:o(()=>[e(f,{"default-active":"1",class:"el-menu-vertical",collapse:s.isCollapse,router:"","popper-effect":"light",onOpen:r,onClose:d},{default:o(()=>[e(_,{onClick:u},{default:o(()=>[e(i,null,{default:o(()=>[e(c(k))]),_:1}),O]),_:1}),e(_,{index:"/admin/board"},{title:o(()=>[z]),default:o(()=>[e(i,null,{default:o(()=>[e(c(y))]),_:1})]),_:1}),e(_,{index:"/admin/issue"},{title:o(()=>[P("审核")]),default:o(()=>[e(i,null,{default:o(()=>[e(c(B))]),_:1})]),_:1})]),_:1},8,["collapse"])]),_:1}),e(C,{class:"el-main-admin"},{default:o(()=>[e(S,{name:"fade",mode:"out-in"},{default:o(()=>[e(v)]),_:1})]),_:1})]),_:1})])}}});const ne=N(E,[["__scopeId","data-v-1c54f003"]]);export{ne as default};