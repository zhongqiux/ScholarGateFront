import{u as n,R as p,c as _,_ as c}from"./main-20e961e1.js";import{H as h,f as u,ah as l,o as f,O as b,P as a,V as i,a as r,U as d}from"./@vue-5e5b7d13.js";import"./vue-router-daaeaf7b.js";import"./@element-plus-901cfadf.js";import"./pinia-1cec025d.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./element-plus-f98e4839.js";import"./lodash-es-21c98b27.js";import"./@vueuse-6c1c0c2c.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const g=h({name:"InstitionRank",mounted:function(){this.store.page=1,this.store.selected="/institution",this.updateInstution(),u(()=>n().rankBy,()=>{this.store.page=1,this.updateInstution()}),u(()=>n().page,()=>{this.updateInstution()})},data(){return{institutions:[],store:n()}},methods:{getLastUrl(t){return t.substring(t.lastIndexOf("/")+1)},go(t,e){this.$router.push({path:t,query:e})},updateInstution(){let t=p.cited;this.store.rankBy=="works"&&(t=p.works),_(this.store.page,t).then(e=>{this.institutions=e.data.results})}}});const k={class:"name"},y=["href"];function I(t,e,$,v,x,B){const o=l("el-table-column"),m=l("el-table");return f(),b(m,{data:t.institutions,fit:!0,strip:!1,class:"instable"},{default:a(()=>[i(o,{type:"index",label:"排名"},{default:a(s=>[r("div",null,d(t.store.page*10+s.$index-9),1)]),_:1}),i(o,{prop:"display_name",label:"机构"},{default:a(s=>[r("div",k,[r("a",{href:t.institutions[s.$index].homepage_url},d(t.institutions[s.$index].display_name),9,y)])]),_:1}),i(o,{prop:"cited_by_count",label:"概念引用数"}),i(o,{prop:"works_count",label:"作品数量"})]),_:1},8,["data"])}const M=c(g,[["render",I],["__scopeId","data-v-592b9eab"]]);export{M as default};