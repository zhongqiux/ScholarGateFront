import{j as b,y as k,z as B,A as C,_ as M}from"./main-2c38814c.js";import{a as c,d as w}from"./element-plus-814f1687.js";import{H as x,ah as o,o as r,c as _,a as i,T as l,V as n,P as a,O as p,F as L,a8 as E,U as g,az as F,aA as R}from"./@vue-5e5b7d13.js";import"./vue-router-daaeaf7b.js";import"./@element-plus-901cfadf.js";import"./pinia-1cec025d.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./lodash-es-21c98b27.js";import"./@vueuse-6c1c0c2c.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const S=x({name:"MessagePage",created(){this.APIrefreshList(!1)},data(){return{message_list:[{id:"1",userId:"1",name:"122342343",content:"内容",time:"11:40",isRead:!0},{id:"2",userId:"2",name:"审核中心",content:"您的学术成果“1231231”已经审核通过！",time:"11:20",isRead:!1},{id:"3",userId:"3",name:"4",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",time:"11:50",isRead:!1},{id:"4",userId:"1",name:"122342343",content:"内容",time:"13:40",isRead:!0},{id:"6",userId:"1",name:"456",content:"容",time:"12:40",isRead:!0},{id:"5",userId:"1",name:"456",content:"内容",time:"15:40",isRead:!0},{id:"7",userId:"1",name:"122342343",content:"内容",time:"17:40",isRead:!0}],has_message:!1,userId:String(b().userId)}},methods:{readAllMessages(){console.log("全部已读"),k().then(e=>{console.log(e),e.flag==!0&&this.APIrefreshList(!1)}).catch(e=>{console.log(e),c({message:"错误！",type:"error"})})},APIrefreshList(e){B().then(t=>{console.log(t.data),this.message_list=t.data,this.has_message=this.message_list.length!=0,this.message_list.forEach(function(d){var m=new Date(d.time);d.time=m.toLocaleDateString()+"-"+m.toLocaleTimeString()}),e&&c({message:"刷新成功！",type:"success"})}).catch(t=>{console.log(t),c({message:"错误！",type:"error"})})},det(e){w.alert(e.content,e.name,{confirmButtonText:"确定"}),C(e.id).then(t=>{console.log(e.time),console.log(t.data.time),t.flag==!0&&this.APIrefreshList(!1)}).catch(t=>{console.log(t),c({message:"错误！",type:"error"})})}}});const P=e=>(F("data-v-a1920acd"),e=e(),R(),e),$={class:"display center"},D={class:"title"},T=P(()=>i("span",{class:"w-10 inline-block"},null,-1)),V={class:"card-header"},z={style:{width:"55vw"}},N={class:"time"};function U(e,t,d,m,j,H){const u=o("el-button"),f=o("el-container"),h=o("el-avatar"),v=o("el-text"),I=o("el-card"),y=o("el-badge"),A=o("el-scrollbar");return r(),_("div",$,[i("div",null,[i("div",D,[l("消息中心 "),n(u,{onClick:t[0]||(t[0]=s=>e.readAllMessages()),style:{"margin-left":"46vw"}},{default:a(()=>[l("全部已读")]),_:1}),n(u,{onClick:t[1]||(t[1]=s=>e.APIrefreshList(!0))},{default:a(()=>[l("刷新")]),_:1}),T]),e.has_message?(r(),p(A,{key:1,style:{height:"74vh"}},{default:a(()=>[(r(!0),_(L,null,E(e.message_list,s=>(r(),_("div",{key:s.name},[n(y,{"is-dot":!s.isRead,class:"dot"},{default:a(()=>[n(I,{class:"box-card",shadow:"hover"},{default:a(()=>[i("div",V,[n(h,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",size:80,style:{"margin-right":"2vw"}}),i("span",z,[i("div",N,g(s.name+" · "+s.time),1),i("div",null,[n(u,{class:"mes",text:"",onClick:O=>e.det(s)},{default:a(()=>[n(v,{class:"info",style:{"text-align":"left"},truncated:""},{default:a(()=>[l(g(s.content),1)]),_:2},1024)]),_:2},1032,["onClick"])])])])]),_:2},1024)]),_:2},1032,["is-dot"])]))),128))]),_:1})):(r(),p(f,{key:0},{default:a(()=>[l("哎呀，聊天列表为空~")]),_:1}))])])}const ue=M(S,[["render",U],["__scopeId","data-v-a1920acd"]]);export{ue as default};
