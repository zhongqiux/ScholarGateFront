import{L as m}from"./LeftTab-bc9f19de.js";import{R as p,a as _}from"./Result-c569aa55.js";import{H as d,ah as t,o as f,O as u,P as s,V as e,J as h}from"./@vue-5e5b7d13.js";import{_ as g}from"./main-7a99c085.js";import"./@element-plus-901cfadf.js";/* empty css                 */import"./element-plus-814f1687.js";import"./lodash-es-21c98b27.js";import"./@vueuse-6c1c0c2c.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./blueimp-md5-3e7612d8.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";import"./vue-router-daaeaf7b.js";import"./pinia-1cec025d.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";const R=d({name:"ResultPages",components:{Result:p,RightTab:_,LeftTab:m},data(){return{isSticky:!1}},methods:{handleScroll(){const o=window.scrollY;this.isSticky=o>120}},mounted(){window.addEventListener("scroll",this.handleScroll)}});function y(o,b,x,S,k,w){const a=t("LeftTab"),n=t("el-aside"),i=t("Result"),l=t("el-main"),r=t("RightTab"),c=t("el-container");return f(),u(c,{onScroll:o.handleScroll},{default:s(()=>[e(n,{width:"150px",style:{"margin-left":"50px"}},{default:s(()=>[e(a,{class:h(["sticky_element",{is_sticky:o.isSticky}]),isPatent:!1},null,8,["class"])]),_:1}),e(l,null,{default:s(()=>[e(i,{isPatent:!1})]),_:1}),e(n,{width:"240px",style:{"margin-left":"10px","margin-right":"50px"}},{default:s(()=>[e(r,{isPatent:!1})]),_:1})]),_:1},8,["onScroll"])}const Q=g(R,[["render",y],["__scopeId","data-v-8cc45c9b"]]);export{Q as default};
