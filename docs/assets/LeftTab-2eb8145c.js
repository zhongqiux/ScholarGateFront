import{a2 as w,k as v,j as I,a0 as k}from"./@element-plus-901cfadf.js";import{H as C,ah as s,o as r,c as h,a as u,V as c,P as d,F as b,a8 as S,O as E,J as T,T as B,U as V,az as y,aA as L}from"./@vue-5e5b7d13.js";import{_ as A}from"./main-051cdc8d.js";const P=C({name:"LeftTab",components:{Promotion:w,ArrowDown:v,ArrowUp:I,Avatar:k},props:["isPatent"],data(){return{activities:[{content:"基本信息",color:"#2f3a91",hrefId:"#info"},{content:"相关推荐",color:"#8590a6",hrefId:"#recommend"},{content:"交流评论",color:"#8590a6",hrefId:"#comment"}],nowShowing:0}},methods:{handleClick(e,t){this.nowShowing=e;let o;for(o=0;o<this.activities.length;o++)o==e?this.activities[o].color="#2f3a91":this.activities[o].color="#8590a6";if(t!=null)if(t=="#info")this.scrollTo(document.documentElement.offsetTop);else{let l=document.querySelector(t);l!=null&&this.scrollTo(l.offsetTop)}},scrollTo(e){window.scrollTo({top:e,behavior:"smooth"})},handleIntersection(e){e.forEach(t=>{if(t.isIntersecting){let o=t.target.id;window.scrollY<10?this.handleClick(0,null):o=="tag1"?this.handleClick(0,null):o=="tag2"?this.handleClick(1,null):o=="tag4"?this.handleClick(1,null):o=="tag3"&&this.handleClick(2,null)}})},handleScroll(){let e=document.getElementById("tag1"),t=document.getElementById("tag2"),o=document.getElementById("tag3"),l=document.getElementById("tag4");const n=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:.9});e!=null&&t!=null&&o!=null&&(n.observe(e),n.observe(t),n.observe(o),n.observe(l))}},mounted(){window.addEventListener("scroll",this.handleScroll)}});const $=e=>(y("data-v-1f9be1dd"),e=e(),L(),e),F={class:"page_navigation"},N=$(()=>u("span",{class:"page_navigation_title"},"页面导航",-1));function U(e,t,o,l,n,z){const f=s("Promotion"),_=s("el-card"),p=s("el-timeline-item"),g=s("el-timeline");return r(),h("div",null,[u("div",F,[c(f,{class:"icon"}),N]),c(g,null,{default:d(()=>[(r(!0),h(b,null,S(e.activities,(i,a)=>(r(),E(p,{key:a,modelValue:e.nowShowing,"onUpdate:modelValue":t[0]||(t[0]=m=>e.nowShowing=m),hollow:a==e.nowShowing,color:i.color},{default:d(()=>[c(_,{shadow:"none",class:T({choose:e.nowShowing==a}),onClick:m=>e.handleClick(a,i.hrefId)},{default:d(()=>[B(V(i.content),1)]),_:2},1032,["class","onClick"])]),_:2},1032,["modelValue","hollow","color"]))),128))]),_:1})])}const q=A(P,[["render",U],["__scopeId","data-v-1f9be1dd"]]);export{q as L};
