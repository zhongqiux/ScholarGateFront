import{a2 as g,k as w,j as v,a0 as I}from"./@element-plus-901cfadf.js";import{H as k,ah as a,o as i,c as m,a as h,V as r,P as c,F as C,a8 as S,O as T,J as E,T as b,U as B,az as V,aA as L}from"./@vue-5e5b7d13.js";import{_ as y}from"./main-2c38814c.js";const A=k({name:"LeftTab",components:{Promotion:g,ArrowDown:w,ArrowUp:v,Avatar:I},props:["isPatent"],data(){return{activities:[{content:"基本信息",color:"#2f3a91",hrefId:"#info"},{content:"相关领域",color:"#8590a6",hrefId:"#recommend"},{content:"交流评论",color:"#8590a6",hrefId:"#comment"}],nowShowing:0}},methods:{handleClick(e,t){this.nowShowing=e;let o;for(o=0;o<this.activities.length;o++)o==e?this.activities[o].color="#2f3a91":this.activities[o].color="#8590a6";if(t!=null)if(t=="#info")this.scrollTo(document.documentElement.offsetTop);else{let n=document.querySelector(t);n!=null&&this.scrollTo(n.offsetTop)}},scrollTo(e){window.scrollTo({top:e,behavior:"smooth"})},handleIntersection(e){e.forEach(t=>{if(t.isIntersecting){let o=t.target.id;window.scrollY<10?this.handleClick(0,null):o=="tag1"?this.handleClick(0,null):o=="tag2"?this.handleClick(1,null):o=="tag3"&&this.handleClick(2,null)}})},handleScroll(){let e=document.getElementById("tag1"),t=document.getElementById("tag2"),o=document.getElementById("tag3");const n=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:.9});e!=null&&t!=null&&o!=null&&(n.observe(e),n.observe(t),n.observe(o))}},mounted(){window.addEventListener("scroll",this.handleScroll)}});const P=e=>(V("data-v-2075132d"),e=e(),L(),e),$={class:"page_navigation"},F=P(()=>h("span",{class:"page_navigation_title"},"页面导航",-1));function N(e,t,o,n,U,z){const u=a("Promotion"),f=a("el-card"),_=a("el-timeline-item"),p=a("el-timeline");return i(),m("div",null,[h("div",$,[r(u,{class:"icon"}),F]),r(p,null,{default:c(()=>[(i(!0),m(C,null,S(e.activities,(s,l)=>(i(),T(_,{key:l,modelValue:e.nowShowing,"onUpdate:modelValue":t[0]||(t[0]=d=>e.nowShowing=d),hollow:l==e.nowShowing,color:s.color},{default:c(()=>[r(f,{shadow:"none",class:E({choose:e.nowShowing==l}),onClick:d=>e.handleClick(l,s.hrefId)},{default:c(()=>[b(B(s.content),1)]),_:2},1032,["class","onClick"])]),_:2},1032,["modelValue","hollow","color"]))),128))]),_:1})])}const q=y(A,[["render",N],["__scopeId","data-v-2075132d"]]);export{q as L};
