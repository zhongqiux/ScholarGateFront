import{q as n,K as p,_ as m}from"./main-051cdc8d.js";import{e as d,_ as l,ar as _,Q as a,o as h,c as v,a as e,T as f,U as g,W as F,az as x,aA as y}from"./@vue-5e5b7d13.js";import"./vue-router-daaeaf7b.js";import"./@element-plus-901cfadf.js";import"./pinia-1cec025d.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./element-plus-f98e4839.js";import"./lodash-es-21c98b27.js";import"./@vueuse-6c1c0c2c.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const D={data(){return{loading:d(!0),time:l({count:10})}},methods:{countdown(){let t=setInterval(()=>{this.time.count>0?this.time.count--:(clearInterval(Number(t)),n.push("/"))},1e3)},verify(){const t=this.$route.query.doi,r=this.$route.query.email,c=this.$route.query.code;p(t,r,c).then(o=>{this.loading=!1,console.log(o),this.countdown()}).catch(o=>{console.log(o)})}},created(){this.verify()}},C="/ScholarGateFront/assets/success-a55bfc4f.png";const i=t=>(x("data-v-02b76370"),t=t(),y(),t),q={class:"main","element-loading-text":"请求数据中..."},B=i(()=>e("div",{class:"success_text"},[e("img",{src:C,alt:""})],-1)),I=i(()=>e("div",{class:"success_text"},"恭喜，已成功通过认证！",-1)),S={class:"success_text"},b=i(()=>e("a",{href:"/"},"首页",-1));function w(t,r,c,o,s,E){const u=_("loading");return a((h(),v("div",q,[a(e("div",null,[B,I,e("div",S,[f(g(s.time.count)+" 秒后返回 ",1),b])],512),[[F,s.loading==!1]])])),[[u,s.loading]])}const Y=m(D,[["render",w],["__scopeId","data-v-02b76370"]]);export{Y as default};
