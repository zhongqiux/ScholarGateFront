import{u as r,R as p,b as _,_ as m}from"./main-fc2383a3.js";import{H as h,w as n,ah as l,o as f,O as b,P as i,V as o,a as u,U as c}from"./@vue-533c3f3e.js";import"./vue-router-f0ce08cc.js";import"./@element-plus-7946a086.js";import"./pinia-01a938bb.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./element-plus-6c70e5ee.js";import"./lodash-es-21c98b27.js";import"./@vueuse-c44d1aed.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const y=h({name:"HotScholar",mounted:function(){this.store.page=1,this.store.selected="/scholar",this.updateScholar(),n(()=>r().rankBy,()=>{this.store.page=1,this.updateScholar()}),n(()=>r().page,()=>{this.updateScholar()})},data(){return{scholars:[],store:r()}},methods:{getLastUrl(t){return t.substring(t.lastIndexOf("/")+1)},go(t,a){this.$router.push({path:t,query:a})},updateScholar(){let t=p.cited;this.store.rankBy=="works"&&(t=p.works),_(this.store.page,t).then(a=>{this.scholars=a.data.results})}}});const g={class:"name"};function k(t,a,S,x,w,B){const e=l("el-table-column"),d=l("el-table");return f(),b(d,{data:t.scholars,fit:!0,strip:!0,class:"instable"},{default:i(()=>[o(e,{type:"index",label:"排名"},{default:i(s=>[u("div",null,c(t.store.page*10+s.$index-9),1)]),_:1}),o(e,{prop:"display_name",label:"学者"},{default:i(s=>[u("div",g,c(t.scholars[s.$index].display_name),1)]),_:1}),o(e,{prop:"summary_stats.h_index",label:"h_index"}),o(e,{prop:"works_count",label:"作品数量"}),o(e,{prop:"cited_by_count",label:"概念引用数"}),o(e,{prop:"last_known_institution.display_name",label:"所在机构"})]),_:1},8,["data"])}const K=m(y,[["render",k],["__scopeId","data-v-069dc548"]]);export{K as default};