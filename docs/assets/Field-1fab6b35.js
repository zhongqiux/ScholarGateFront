import{u as t,g as m,_}from"./main-fc2383a3.js";import{H as c,w as l,ah as p,o as f,O as h,P as i,V as a,a as d,U as n}from"./@vue-533c3f3e.js";import"./vue-router-f0ce08cc.js";import"./@element-plus-7946a086.js";import"./pinia-01a938bb.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./element-plus-6c70e5ee.js";import"./lodash-es-21c98b27.js";import"./@vueuse-c44d1aed.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const b=c({name:"HotField",mounted:function(){t().page=1,t().selected="/field",this.updateFields(),l(()=>t().rankBy,()=>{t().page=1,this.updateFields()}),l(()=>t().page,()=>{this.updateFields()})},data(){return{fields:[],store:t()}},methods:{getLastUrl(e){return e.substring(e.lastIndexOf("/")+1)},go(e,r){this.$router.push({path:e,query:r})},updateFields(){m(this.store.page).then(e=>{this.fields=e.data.results})}}});const g=["onClick"];function F(e,r,y,$,C,v){const o=p("el-table-column"),u=p("el-table");return f(),h(u,{data:e.fields,fit:!0,strip:!0,class:"instable"},{default:i(()=>[a(o,{type:"index",label:"排名"},{default:i(s=>[d("div",null,n(e.store.page*10+s.$index-9),1)]),_:1}),a(o,{prop:"display_name",label:"领域"},{default:i(s=>[d("div",{class:"name",onClick:k=>e.go("/field",{field:e.getLastUrl(e.fields[s.$index].id)})},n(e.fields[s.$index].display_name),9,g)]),_:1}),a(o,{prop:"summary_stats.h_index",label:"h_index"}),a(o,{prop:"works_count",label:"作品数量"}),a(o,{prop:"cited_by_count",label:"概念引用数"})]),_:1},8,["data"])}const M=_(b,[["render",F],["__scopeId","data-v-e35f7bf3"]]);export{M as default};
