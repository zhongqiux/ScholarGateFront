import{H as a,_ as i,o as p,c,a as o,U as _,az as d,aA as n}from"./@vue-533c3f3e.js";import{_ as m}from"./main-fcd63044.js";import"./vue-router-f0ce08cc.js";import"./@element-plus-7946a086.js";import"./pinia-01a938bb.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./element-plus-c741864c.js";import"./lodash-es-21c98b27.js";import"./@vueuse-c44d1aed.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const h="/ScholarGateFront/assets/dashboard-4f273edd.png",g=e=>(d("data-v-b42b9d9a"),e=e(),n(),e),l={class:"page"},u={class:"card-box"},f={class:"box-top"},v={class:"top-card-left"},b={class:"top-card-left-title"},D=g(()=>o("div",{class:"bg-image"},[o("img",{src:h})],-1)),x=a({__name:"DashBoard",setup(e){const t=i({hours:0,greeting:"早安，管理员，请开始一天的工作吧"});function r(){let s=new Date;t.hours=s.getHours(),0<=t.hours&&t.hours<=4?t.greeting="夜深了，管理员，注意休息":5<=t.hours&&t.hours<=11?t.greeting="早安，管理员，请开始一天的工作吧":12<=t.hours&&t.hours<=18?t.greeting="下午好，管理员":t.greeting="晚上好，管理员"}return r(),(s,B)=>(p(),c("div",l,[o("div",u,[o("div",f,[o("div",v,[o("div",b,_(t.greeting),1)])]),D])]))}});const L=m(x,[["__scopeId","data-v-b42b9d9a"]]);export{L as default};
