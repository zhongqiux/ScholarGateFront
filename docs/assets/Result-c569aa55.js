import{Y as z,Z as O,_ as j,$ as H,k as K,j as Y,a0 as Z}from"./@element-plus-901cfadf.js";/* empty css                 */import{l as A,m as $,_ as P,r as w,j as E,n as J}from"./main-7a99c085.js";import{a as D,b as N}from"./element-plus-814f1687.js";import{H as I,ah as p,o as s,c as i,a as e,V as _,O as v,P as f,T as m,az as L,aA as S,U as r,F as g,a8 as y,a3 as F,S as u}from"./@vue-5e5b7d13.js";const Q=I({name:"RightTab",components:{Edit:z,Histogram:O,Operation:j,Link:H},props:["isPatent"],data(){return{viewNum:0,recommendNum:0,isCitation:!1,isFavourite:!1,isRecommend:!1,downloadLink:null,data:null}},computed:{patentStyle(){if(this.isPatent)return{marginTop:"13px"}}},methods:{clickAction(t){t==0||(t==1?this.isFavourite?(this.isFavourite=!1,D({message:"取消收藏",duration:1500})):(this.isFavourite=!0,D({message:"收藏成功",type:"success",duration:1500})):t==2&&(this.isRecommend?(this.isRecommend=!1,D({message:"取消推荐",duration:1500})):(this.isRecommend=!0,D({message:"推荐成功",type:"success",duration:1500}))))},async patentDataGet(t){const n=await A(t);console.log(n),n.flag&&n.data.organic_results[0].pdf&&(this.downloadLink=n.data.organic_results[0].pdf)},async paperDataGet(t){const n=await $(t);console.log(n),n.flag&&(this.downloadLink=n.data.primary_location.pdf_url)},toDownload(){this.downloadLink!=null&&window.open(this.downloadLink,"_blank")}},mounted(){this.isPatent?this.patentDataGet("CN101232829B"):this.paperDataGet("W2138270253")}});const X=t=>(L("data-v-d035120a"),t=t(),S(),t),tt={class:"container"},et={class:"item",style:{"margin-top":"13px"}},st={class:"title"},ot=X(()=>e("span",null,"资源下载",-1)),at={class:"button"};function nt(t,n,o,a,c,k){const b=p("Link"),C=p("el-button");return s(),i("div",tt,[e("div",et,[e("div",st,[_(b,{class:"icon"}),ot]),e("div",at,[t.downloadLink==null?(s(),v(C,{key:0,disabled:"true"},{default:f(()=>[m("暂无资源下载")]),_:1})):(s(),v(C,{key:1,onClick:t.toDownload},{default:f(()=>[m("资源下载")]),_:1},8,["onClick"]))])])])}const ie=P(Q,[["render",nt],["__scopeId","data-v-d035120a"]]),it=I({name:"Result",components:{ArrowDown:K,ArrowUp:Y,Avatar:Z},props:["isPatent"],data(){return{isExpand:!1,maxHeight:43,message:"",keyWords:[],recommendation:[],title:"",authorNames:[],assigneeNames:[],registerDate:"",registerNo:" CN202310829800.3",publicationDate:"",publicationNo:"",citationNum:"",IPCNo:[],longMsg:!1,dialogVisible:!1,alignCenter:!0,showClose:!1,conceptId:[],authorId:[]}},methods:{expandContent(t){console.log(t),t==1?this.isExpand=!this.isExpand:this.isExpand||(this.isExpand=!this.isExpand)},filter(t){return t?(t=t.toString(),t.length>300?(this.longMsg=!0,t.substring(0,300)+"..."):(this.longMsg=!1,t)):""},toKeyWord(t){w.push({path:"/explorePaper",query:{key:"works",value:t}})},toAuthor(t){this.isPatent||(console.log(this.authorId[t]),w.push({name:"researcher",params:{doi:this.authorId[t]}}))},toConcepts(t){this.conceptId.length!=0&&w.push({path:"/field",query:{field:this.conceptId[t]}})},toLogin(){w.push({path:"/login"})},async patentDataGet(t){const n=N.service({lock:!0}),o=await A(t);if(console.log(o),o.flag){n.close(),this.title=o.data.organic_results[0].title,this.registerDate=o.data.organic_results[0].filing_date,this.publicationDate=o.data.organic_results[0].publication_date,this.publicationNo=o.data.organic_results[0].publication_number;var a;for(a=0;a<o.data.summary.assignee.length;a++)o.data.summary.assignee[a].key!="Total"&&this.assigneeNames.push(o.data.summary.assignee[a].key);for(a=0;a<o.data.summary.inventor.length;a++)o.data.summary.inventor[a].key!="Total"&&this.authorNames.push(o.data.summary.inventor[a].key);for(a=0;a<o.data.summary.cpc.length;a++)o.data.summary.cpc[a].key!="Total"&&this.IPCNo.push(o.data.summary.cpc[a].key);this.message=o.data.organic_results[0].snippet}else E().token=="undefined"&&alert("请登录")},async paperDataGet(t){const n=N.service({lock:!0}),o=await $(t);if(console.log(o),o.flag){n.close(),this.title=o.data.title,this.publicationDate=o.data.publication_date,this.citationNum=o.data.cited_by_count,this.message=J(o.data.summary);for(var a=0;a<o.data.authorships.length;a++){this.authorNames.push(o.data.authorships[a].author.display_name);var c=o.data.authorships[a].author.id,k=c.lastIndexOf("/");c=c.substring(k+1,c.length),this.authorId.push(c)}for(var a=0;a<o.data.keywords.length;a++)this.keyWords.push(o.data.keywords[a].keyword);for(var a=0;a<o.data.concepts.length;a++){this.recommendation.push(o.data.concepts[a].display_name);var c=o.data.concepts[a].id,k=c.lastIndexOf("/");c=c.substring(k+1,c.length),this.conceptId.push(c)}}else E().token=="undefined"&&(n.close(),this.dialogVisible=!0)}},mounted(){const t=this.$route.query.id;this.isPatent?this.patentDataGet(t):this.paperDataGet(t)}});const d=t=>(L("data-v-28e3c6c2"),t=t(),S(),t),lt={id:"info",class:"title"},rt={class:"title_name"},ut={key:0,class:"author_row"},dt=["onClick"],ct={key:1,class:"author_row"},pt=d(()=>e("span",{class:"text",style:{"font-weight":"bold",color:"#8590a6"}},"发明人:",-1)),ht=["onClick"],_t={key:2,class:"row"},mt=d(()=>e("span",{class:"text",style:{"font-weight":"bold",color:"#8590a6"}},"申请人:",-1)),gt=["onClick"],ft={key:3,class:"row"},yt=d(()=>e("span",{class:"text",style:{color:"#8590a6"}},"发表日期:",-1)),kt={class:"text"},vt=d(()=>e("span",{class:"text",style:{color:"#8590a6"}},"引用次数:",-1)),Ct={class:"text"},wt={key:4,class:"row"},Dt=d(()=>e("span",{class:"text",style:{color:"#8590a6"}},"申请日:",-1)),Ft={class:"text"},bt=d(()=>e("span",{class:"text",style:{color:"#8590a6"}},"公开日:",-1)),Bt={class:"text"},Et=d(()=>e("span",{class:"text",style:{color:"#8590a6"}},"公开号:",-1)),Nt={class:"text"},At=d(()=>e("span",{class:"text",style:{color:"#8590a6"}},"IPC分类号:",-1)),$t={class:"ipc_text",key:"index"},Pt={class:"context"},It={class:"context_text"},Lt={key:5,class:"tag_row"},St=d(()=>e("span",{class:"text"},"关键词：",-1)),Vt=d(()=>e("div",{id:"tag1"},null,-1)),Rt={id:"recommend"},Tt=d(()=>e("div",{class:"page_divider"},[e("p",{class:"divider_title"},"相关领域"),e("p",{class:"line"})],-1)),xt={key:0},Gt={key:"index",class:"recommend_container"},Mt={class:"recommend_list"},Ut={style:{color:"#2f3a91","font-size":"16px",width:"32px"}},Wt={class:"recommend_item"},qt=["onClick"],zt={key:1},Ot={key:2,id:"tag2"},jt={key:0,id:"tag2"},Ht=d(()=>e("div",{id:"comment",class:"page_divider"},[e("p",{class:"divider_title"},"交流评论"),e("p",{class:"line"})],-1)),Kt={id:"tag3"},Yt={style:{border:"#8590a6 solid 1px",height:"300px",width:"100%"}},Zt={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},Jt=d(()=>e("p",{style:{"font-size":"16px",color:"#909399"}},"还没有评论，发表第一个评论吧",-1)),Qt=d(()=>e("span",null,"请先进行登录/注册",-1)),Xt={class:"dialog-footer"};function te(t,n,o,a,c,k){const b=p("el-divider"),C=p("Avatar"),V=p("ArrowUp"),R=p("ArrowDown"),T=p("el-tag"),x=p("el-empty"),G=p("el-input"),M=p("ChatLineSquare"),U=p("el-icon"),W=p("el-button"),q=p("el-dialog");return s(),i(g,null,[e("div",null,[e("div",lt,[e("span",rt,r(t.title),1)]),_(b,{style:{"border-color":"#d5d8e9","border-width":"2px"}}),t.isPatent?u("",!0):(s(),i("div",ut,[_(C,{class:"icon"}),(s(!0),i(g,null,y(t.authorNames,(l,h)=>(s(),i("span",{class:"author_name",onClick:B=>t.toAuthor(h)},[m(r(l)+" ",1),h!=t.authorNames.length-1?(s(),i("span",{key:0,style:{color:"#8590a6","font-weight":"normal"},onClick:n[0]||(n[0]=F(()=>{},["stop"]))},",")):u("",!0)],8,dt))),256))])),t.isPatent?(s(),i("div",ct,[pt,(s(!0),i(g,null,y(t.authorNames,(l,h)=>(s(),i("span",{class:"author_name2",onClick:B=>t.toAuthor(l)},[m(r(l)+" ",1),h!=t.authorNames.length-1?(s(),i("span",{key:0,style:{color:"#8590a6","font-weight":"normal"},onClick:n[1]||(n[1]=F(()=>{},["stop"]))},",")):u("",!0)],8,ht))),256))])):u("",!0),t.isPatent?(s(),i("div",_t,[mt,(s(!0),i(g,null,y(t.assigneeNames,(l,h)=>(s(),i("span",{class:"author_name2",onClick:B=>t.toAuthor(l)},[m(r(l)+" ",1),h!=t.assigneeNames.length-1?(s(),i("span",{key:0,style:{color:"#8590a6","font-weight":"normal"},onClick:n[2]||(n[2]=F(()=>{},["stop"]))},",")):u("",!0)],8,gt))),256))])):u("",!0),t.isPatent?u("",!0):(s(),i("div",ft,[yt,e("span",kt,r(t.publicationDate),1),vt,e("span",Ct,r(t.citationNum),1)])),t.isPatent?(s(),i("div",wt,[Dt,e("span",Ft,r(t.registerDate),1),bt,e("span",Bt,r(t.publicationDate),1),Et,e("span",Nt,r(t.publicationNo),1),At,(s(!0),i(g,null,y(t.IPCNo,(l,h)=>(s(),i("span",$t,[m(r(l)+" ",1),h!=t.IPCNo.length-1?(s(),i("span",{key:0,style:{color:"#8590a6","font-weight":"normal"},onClick:n[3]||(n[3]=F(()=>{},["stop"]))},",")):u("",!0)]))),128))])):u("",!0),e("div",Pt,[e("div",It,[t.message?(s(),i("span",{key:0,onClick:n[4]||(n[4]=l=>t.expandContent(0))},r(t.isExpand?t.message:t.filter(t.message)),1)):u("",!0),t.longMsg?(s(),i("span",{key:1,onClick:n[5]||(n[5]=l=>t.expandContent(1)),class:"expand_button"},[m(r(t.isExpand?"收起":"阅读全部")+" ",1),t.isExpand?(s(),v(V,{key:0,class:"expand_icon"})):(s(),v(R,{key:1,class:"expand_icon"}))])):u("",!0)])]),t.isPatent?u("",!0):(s(),i("div",Lt,[St,(s(!0),i(g,null,y(t.keyWords,l=>(s(),v(T,{class:"tags",effect:"plain",onClick:h=>t.toKeyWord(l)},{default:f(()=>[m(r(l),1)]),_:2},1032,["onClick"]))),256))]))]),Vt,e("div",Rt,[Tt,t.recommendation.length!=0?(s(),i("div",xt,[(s(!0),i(g,null,y(t.recommendation,(l,h)=>(s(),i("div",Gt,[e("div",Mt,[e("span",Ut,r(h+1)+".",1),e("div",Wt,[e("p",{class:"recommend_title",onClick:B=>t.toConcepts(h)},r(l),9,qt)])])]))),128))])):(s(),i("div",zt,[_(x,{description:"无相关领域推荐"})])),t.isPatent?(s(),i("div",Ot)):u("",!0)]),t.isPatent?u("",!0):(s(),i("div",jt)),Ht,e("div",Kt,[e("div",Yt,[_(G,{disabled:"",placeholder:"评论功能暂缓开放，感谢您的支持",style:{width:"95%","margin-top":"20px","margin-bottom":"50px"}}),e("div",Zt,[_(U,{style:{color:"#909399","font-size":"100px"}},{default:f(()=>[_(M)]),_:1}),Jt])])]),_(q,{modelValue:t.dialogVisible,"onUpdate:modelValue":n[6]||(n[6]=l=>t.dialogVisible=l),title:"用户未登录",width:"30%",center:t.alignCenter,"align-center":t.alignCenter,"show-close":t.showClose,"close-on-click-modal":t.showClose,"close-on-press-escape":t.showClose},{footer:f(()=>[e("span",Xt,[_(W,{type:"primary",onClick:t.toLogin},{default:f(()=>[m(" 登录/注册 ")]),_:1},8,["onClick"])])]),default:f(()=>[Qt]),_:1},8,["modelValue","center","align-center","show-close","close-on-click-modal","close-on-press-escape"])],64)}const le=P(it,[["render",te],["__scopeId","data-v-28e3c6c2"]]);export{le as R,ie as a};
