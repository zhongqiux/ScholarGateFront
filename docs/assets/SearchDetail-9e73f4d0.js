import{u as Q,b as J}from"./vue-router-daaeaf7b.js";/* empty css                 */import{o as W,p as pe,q as he}from"./main-7a99c085.js";import{_ as N,e as d,i as se,f as X,ah as o,o as l,c as n,F as T,a8 as D,V as t,P as c,a as e,T as P,U as V,S as g,O as z,u as ae,J as oe}from"./@vue-5e5b7d13.js";import{c as ne}from"./element-plus-814f1687.js";import"./@element-plus-901cfadf.js";import"./pinia-1cec025d.js";import"./axios-21b846bc.js";import"./identicon.js-56b04766.js";import"./blueimp-md5-3e7612d8.js";/* empty css                    */import"./pinia-plugin-persistedstate-02097300.js";import"./lodash-es-21c98b27.js";import"./@vueuse-6c1c0c2c.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5c8c3070.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9c1ce378.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-72671fae.js";const me=e("div",{class:"List__itemAction"},null,-1),ve={class:"List__itemAction"},be=e("div",{class:"iconfont icon-quote-left QuoteButton"},null,-1),fe={class:"CircleQuoteButton__label"},ke={class:"list-item"},ye=["onClick","innerHTML"],ge={class:"Author-info__content"},xe={class:"keywords"},Ce=e("span",{class:"keywords__label"},"类型： ",-1),Ve={class:"keywords__content"},$e={class:"keywords"},Se=e("span",{class:"keywords__label"},"发布时间： ",-1),we={class:"keywords__content"},Ae={class:"concepts"},Te=e("span",{class:"keywords__label"},"concepts: ",-1),Le=["onClick"],Pe={class:"keywords"},Ie=e("span",{class:"keywords__label"},"关键词: ",-1),Fe=["onClick"],De=["innerHTML"],Ue=e("span",null," ",-1),Re={class:"downloadPdf"},Be={key:0},Ne={class:"paginationStyle"},Me={__name:"SearchCard",props:[],setup(Z,{expose:x}){const s=W(),I=N({}),U=Q(),_=J();N({data:{keys:[],values:[]}}),d(!0);const L=d(1);d();const v=d([]),S=()=>{U.query.key;let u=U.query.value,b=L.value;const p=N({name:u});if(p.has_fulltext=s.hasFullTextValue?"true":"false",s.dateValue!==void 0&&(p.start_date=s.dateValue[0],p.stop_date=s.dateValue[1]),s.sortFunc!==void 0&&(p.sort_func=s.sortFunc),s.typeValue!==""&&(p.type=s.typeValue),v.value.length!==0){const h=v.value.filter(k=>k.label==="concept").map(k=>k.id).join("|"),F=v.value.filter(k=>k.label==="key_word").map(k=>k.content).join("|");console.log(F),h!=""&&(p.concept=h),F!=""&&(p.key_word=F)}console.log(p),pe(p,b).then(h=>{I.data=h.data,s.concepts=h.data[0].concepts}).catch(h=>{console.error(h)})},M=u=>{const b=u.substring(u.lastIndexOf("/")+1);_.push(`result?id=${b}`)},R=()=>{alert("搜索该作者相关文章")},B=(u,b)=>{const p={label:"key_word",content:u,id:""};v.value.some(h=>h.content===p.content),v.value.push(p),s.filterItems=v.value},f=(u,b,p)=>{const h={label:"concept",content:b,id:u};v.value.some(k=>k.id===h.id)||(v.value.push(h),s.filterItems=v.value)},C=u=>{u==null?alert("该论文没有PDF!"):window.open(u,"_blank")},r=u=>{u==null?alert("该论文没有lading paper!"):window.open(u,"_blank")},w=()=>{S()};return x({getSearchData:S}),se(()=>{S()}),X(()=>U.params,(u,b)=>{S()},{immediate:!0}),(u,b)=>{const p=o("el-aside"),h=o("UserFilled"),F=o("el-icon"),k=o("el-button"),$=o("el-container"),E=o("el-divider"),m=o("el-empty"),i=o("el-pagination");return l(),n(T,null,[(l(!0),n(T,null,D(I.data,(y,j)=>(l(),n("div",null,[t($,{class:"List__item"},{default:c(()=>[t(p,{width:"60px",class:"List__itemActions"},{default:c(()=>[me,e("div",ve,[be,e("div",fe,[P(" 引用 "),e("span",null,V(y.cited_by_count),1)])])]),_:2},1024),e("div",ke,[e("h2",{class:"ContentItem__titleText",onClick:A=>M(y.id),innerHTML:y.display_name},null,8,ye),e("div",null,[t(F,{class:"author-icon"},{default:c(()=>[t(h)]),_:1}),e("span",{onClick:R},[(l(!0),n(T,null,D(y.authorships,(A,Y)=>(l(),n("span",ge,V(A)+"   ",1))),256))])]),e("div",xe,[Ce,e("span",Ve,V(y.type),1)]),e("div",$e,[Se,e("span",we,V(y.publication_date),1)]),e("div",Ae,[Te,(l(!0),n(T,null,D(y.concepts,(A,Y,q)=>(l(),n("span",{class:"keywords__content",onClick:K=>f(Y,A,q)},V(A)+"   ",9,Le))),256))]),e("div",Pe,[Ie,(l(!0),n(T,null,D(y.keywords,(A,Y)=>(l(),n("span",{class:"keywords__content",onClick:q=>B(A,Y)},[e("span",{innerHTML:A},null,8,De),Ue],8,Fe))),256))]),e("div",Re,[t(k,{onClick:A=>C(y.pdf_url)},{default:c(()=>[P("下载PDF")]),_:2},1032,["onClick"]),t(k,{onClick:A=>r(y.landing_page_url)},{default:c(()=>[P("landingPage")]),_:2},1032,["onClick"])])])]),_:2},1024),t(E,{class:"item-divider"})]))),256)),I.data==""?(l(),n("div",Be,[t(m,{description:"无结果"})])):g("",!0),e("div",Ne,[t(i,{background:"",layout:"prev, pager, next",total:1e3,"current-page":L.value,"onUpdate:currentPage":b[0]||(b[0]=y=>L.value=y),onCurrentChange:w},null,8,["current-page"])])],64)}}};const Ye={class:"List__itemAction"},qe={class:"List__itemIndex"},ze=e("div",{class:"List__itemAction"},[e("div",{class:"iconfont icon-quote-left QuoteButton"})],-1),Ee={class:"list-item"},Oe=["onClick"],He={class:"Author-info__content"},je={class:"article-source__content"},Ke={class:"article-brief__content"},Ge={key:0},Qe={key:1,class:"paginationStyle"},Je={__name:"PatentSearchCard",setup(Z,{expose:x}){const s=W(),I=Q(),U=J(),_=N({});d(!0);const L=d(1),v=d(0),S=()=>{I.query.key;const f=I.query.value,C=L.value.toString(),r={patent_name:f,page:C,num:"15"};s.dateValue!==void 0&&s.dateValue!==""&&(r.filing_after=s.dateValue[0].replace(/-/g,""),r.filing_before=s.dateValue[1].replace(/-/g,"")),s.countryValue!==""&&(r.countries=s.countryValue),s.sortByTime!==void 0&&s.sortByTime!==""&&(r.sortByTime=s.sortByTime),s.patentStatus!==void 0&&s.patentStatus!==""&&(r.status=s.patentStatus?"GRANT":"APPLICATION"),s.patentTypeRatio!==void 0&&s.patentTypeRatio!==""&&(r.type=s.patentTypeRatio),console.log(r),he(r).then(w=>{_.data=w.data.organic_results,v.value=w.data.search_information.total_results}).catch(w=>{console.error(w)}),console.log(_)},M=f=>{const C=f.indexOf("/")+1,r=f.indexOf("/",C),w=f.substring(C,r);U.push(`patent?id=${w}`)},R=()=>{alert("搜索该作者相关文章")},B=()=>{S()};return x({getSearchData:S}),se(()=>{S()}),X(()=>I.params,(f,C)=>{console.log("路由参数发生变化"),S()},{immediate:!0}),(f,C)=>{const r=o("el-aside"),w=o("UserFilled"),u=o("el-icon"),b=o("el-button"),p=o("el-container"),h=o("el-divider"),F=o("el-empty"),k=o("el-pagination");return l(),n(T,null,[(l(!0),n(T,null,D(_.data,($,E)=>(l(),n("div",null,[t(p,{class:"List__item"},{default:c(()=>[t(r,{width:"60px",class:"List__itemActions"},{default:c(()=>[e("div",Ye,[e("div",qe,V($.position)+".",1)]),ze]),_:2},1024),e("div",Ee,[e("h2",{class:"ContentItem__titleText",onClick:m=>M($.patent_id)},V($.title),9,Oe),e("div",null,[t(u,{class:"author-icon"},{default:c(()=>[t(w)]),_:1}),e("span",{onClick:R},[e("span",He,V($.inventor)+"   ",1)])]),e("div",je,[e("span",null,"申请时间："+V($.filing_date),1)]),e("div",Ke,[e("span",null,"摘要："+V($.snippet),1)]),e("div",null,[t(b,{onClick:m=>f.downLoadPdf($.pdf)},{default:c(()=>[P("查看PDF")]),_:2},1032,["onClick"])])])]),_:2},1024),t(h,{class:"item-divider"})]))),256)),v.value==0?(l(),n("div",Ge,[t(F,{description:"无结果"})])):g("",!0),v.value!=0?(l(),n("div",Qe,[t(k,{background:"",layout:"prev, pager, next",total:1e3,"current-page":L.value,"onUpdate:currentPage":C[0]||(C[0]=$=>L.value=$),onCurrentChange:B},null,8,["current-page"])])):g("",!0)],64)}}};const We={class:"body"},Xe=e("div",{class:"AppSearchAggregation__label"},"分类浏览",-1),Ze={class:"demo-collapse"},et={class:"AggregationListItem"},tt={class:"AggregationListItemKey"},lt={class:"AggregationListItem"},at={class:"AggregationListItemKey"},ot={class:"AggregationListItem"},nt={class:"AggregationListItemKey"},st={class:"card"},ct={class:"AppSearchTabs"},it={key:0,class:"base-switch__button"},dt=e("span",{class:"base-switch__label"},"可获取全文",-1),ut={key:1,class:"base-switch__button"},_t={key:0,class:"base-switch__label"},rt={key:1,class:"base-switch__label"},pt=e("div",{class:"AppSearchTabContent"},[e("div",{class:"AppSearchFilters"},[e("div",{class:"AppFilterMeta"}),e("div",{class:"AppFilterInput"}),e("div",{class:"AppFilterSelect"})])],-1),ht={class:"AppSearchRefineItems"},mt=e("div",{class:"AppSearchRefineLabel"},"筛选条件",-1),vt={class:"AppSearchRefineItem"},bt={key:0},ft={class:"AppSearchRefineItemText"},kt={class:"Highlight"},yt=e("div",{class:"List"},null,-1),gt={key:0},xt={key:1},Ht={__name:"SearchDetail",setup(Z){const x=W();Q(),J(),N({});const s=d(null),I=d(null),U=d(["1","2","3","4"]),_=d(1);d(),d(),d("");const L=d(!0),v=d(),S=d(),M=d(),R=d(),B=d(),f=d(),C=d(),r=d(["nihao","nihaoma"]),w=[{value:"display_name",label:"名称排序(升序)"},{value:"display_name:desc",label:"名称排序(降序)"},{value:"relevance_score:desc",label:"综合排序"},{value:"publication_date",label:"发布时间(升序)"},{value:"publication_date:desc",label:"发布时间(降序)"},{value:"cited_by_count",label:"引用次数(升序)"},{value:"cited_by_count:desc",label:"引用次数(降序)"}],u=[{value:"new",label:"从新到旧"},{value:"old",label:"从旧到新"}],b=N({item1:[{label:"article",checkbox:!1},{label:"book-chapter",checkbox:!1},{label:"book",checkbox:!1},{label:"dissertation",checkbox:!1},{label:"dataset",checkbox:!1},{label:"report",checkbox:!1},{label:"letter",checkbox:!1},{label:"standard",checkbox:!1},{label:"editorial",checkbox:!1},{label:"paratext",checkbox:!1},{label:"other",checkbox:!1}],item3:[{label:"2023",checkbox:!1},{label:"2022",checkbox:!1},{label:"2021",checkbox:!1},{label:"2020",checkbox:!1}],item4:[{label:"US",checkbox:!1,name:"美国"},{label:"WO",checkbox:!1,name:"世界知识产权组织"},{label:"CN",checkbox:!1,name:"中国"},{label:"JP",checkbox:!1,name:"日本"},{label:"DE",checkbox:!1,name:"德国"},{label:"FR",checkbox:!1,name:"法国"},{label:"GB",checkbox:!1,name:"英国"},{label:"CA",checkbox:!1,name:"加拿大"},{label:"AU",checkbox:!1,name:"澳大利亚"},{label:"IN",checkbox:!1,name:"印度"}],item7:[{label:"YES",checkbox:!1,name:"yes"},{label:"NO",checkbox:!1,name:"no"}]});N({data:{keys:[],values:[]}});const p=()=>{_.value===1?(F(),x.hasFullTextValue=L,x.dateValue=v,x.typeValue=S,x.sortFunc=R,s.value.getSearchData()):(k(),x.dateValue=v,x.countryValue=M,x.sortByTime=B,x.patentStatus=f,x.patentTypeRatio=C,I.value.getSearchData())},h=m=>{_.value=m},F=()=>{let m="";for(let i of b.item1)i.checkbox&&(m+=i.label,m+="|");S.value=m},k=()=>{let m="";for(let i of b.item4)i.checkbox&&(m+=i.label,m+=",");M.value=m},$=m=>{r.value.splice(m,1)};function E(){window.scrollTo({top:0,behavior:"smooth"})}return X(()=>x.filterItems,(m,i)=>{r.value=m,console.log(m)},{immediate:!0,deep:!0}),(m,i)=>{const y=o("el-collapse-item"),j=o("el-radio"),A=o("el-radio-group"),Y=o("el-collapse"),q=o("el-aside"),K=o("el-button"),O=o("el-col"),ce=o("el-date-picker"),ee=o("el-option"),te=o("el-select"),le=o("el-switch"),ie=o("el-row"),de=o("Close"),ue=o("el-icon"),_e=o("el-main"),re=o("el-container");return l(),n("div",We,[t(re,{class:"ContentLayout"},{default:c(()=>[t(q,{width:"150px",class:"AppSearchAggregation ContentLayout__sideColumn"},{default:c(()=>[Xe,e("div",Ze,[t(Y,{modelValue:U.value,"onUpdate:modelValue":i[1]||(i[1]=a=>U.value=a)},{default:c(()=>[_.value==1?(l(),z(y,{key:0,title:"论文类型",name:"1"},{default:c(()=>[e("div",null,[(l(!0),n(T,null,D(b.item1,(a,G)=>(l(),n("div",et,[e("span",tt,[t(ae(ne),{modelValue:a.checkbox,"onUpdate:modelValue":H=>a.checkbox=H,label:"",size:"",class:"checkbox"},null,8,["modelValue","onUpdate:modelValue"]),P(" "+V(a.label),1)])]))),256))])]),_:1})):g("",!0),_.value==2?(l(),z(y,{key:1,title:"国家",name:"4"},{default:c(()=>[e("div",null,[(l(!0),n(T,null,D(b.item4,(a,G)=>(l(),n("div",lt,[e("span",at,[t(ae(ne),{modelValue:a.checkbox,"onUpdate:modelValue":H=>a.checkbox=H,label:"",size:"",class:"checkbox"},null,8,["modelValue","onUpdate:modelValue"]),P(" "+V(a.name),1)])]))),256))])]),_:1})):g("",!0),_.value==2?(l(),z(y,{key:2,title:"专利类型",name:"5"},{default:c(()=>[e("div",null,[e("div",ot,[e("span",nt,[t(A,{modelValue:C.value,"onUpdate:modelValue":i[0]||(i[0]=a=>C.value=a),class:"ml-4"},{default:c(()=>[t(j,{label:"PATENT",size:"large"},{default:c(()=>[P("专利")]),_:1}),t(j,{label:"DESIGN",size:"large"},{default:c(()=>[P("设计")]),_:1})]),_:1},8,["modelValue"])])])])]),_:1})):g("",!0)]),_:1},8,["modelValue"])])]),_:1}),t(_e,null,{default:c(()=>[e("div",st,[e("div",ct,[e("div",{class:oe(["AppSearchTab",{"is-active":_.value===1}]),onClick:i[2]||(i[2]=a=>h(1))},"论文",2),e("div",{class:oe(["AppSearchTab",{"is-active":_.value===2}]),onClick:i[3]||(i[3]=a=>h(2))},"专利",2)]),t(ie,{class:"AppSearchFilter"},{default:c(()=>[t(O,{span:2},{default:c(()=>[t(K,{onClick:p},{default:c(()=>[P("搜索")]),_:1})]),_:1}),t(O,{span:12},{default:c(()=>[t(ce,{modelValue:v.value,"onUpdate:modelValue":i[4]||(i[4]=a=>v.value=a),type:"daterange","start-placeholder":"Start date","end-placeholder":"End date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),t(O,{span:4},{default:c(()=>[_.value==1?(l(),z(te,{key:0,modelValue:R.value,"onUpdate:modelValue":i[5]||(i[5]=a=>R.value=a),placeholder:"排序方式",size:"default"},{default:c(()=>[(l(),n(T,null,D(w,a=>t(ee,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])):g("",!0),_.value==2?(l(),z(te,{key:1,modelValue:B.value,"onUpdate:modelValue":i[6]||(i[6]=a=>B.value=a),placeholder:"时间排序",size:"default"},{default:c(()=>[(l(),n(T,null,D(u,a=>t(ee,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])):g("",!0)]),_:1}),t(O,{span:4},{default:c(()=>[_.value==1?(l(),n("span",it,[t(le,{modelValue:L.value,"onUpdate:modelValue":i[7]||(i[7]=a=>L.value=a)},null,8,["modelValue"]),dt])):g("",!0),_.value==2?(l(),n("span",ut,[t(le,{modelValue:f.value,"onUpdate:modelValue":i[8]||(i[8]=a=>f.value=a)},null,8,["modelValue"]),f.value?(l(),n("span",_t,"已授予")):g("",!0),f.value?g("",!0):(l(),n("span",rt,"申请中"))])):g("",!0)]),_:1})]),_:1}),pt,e("div",ht,[mt,e("span",vt,[r.value.length===0?(l(),n("span",bt,"空")):g("",!0),(l(!0),n(T,null,D(r.value,(a,G)=>(l(),n("span",ft,[e("span",kt,V(a.label)+":",1),P(" "+V(a.content)+" ",1),t(ue,{class:"delete",onClick:H=>$(G)},{default:c(()=>[t(de)]),_:2},1032,["onClick"])]))),256))])]),yt,_.value==1?(l(),n("div",gt,[t(Me,{ref_key:"SearchCardRef",ref:s},null,512)])):g("",!0),_.value==2?(l(),n("div",xt,[t(Je,{ref_key:"PantentCardRef",ref:I},null,512)])):g("",!0)])]),_:1}),t(q,{width:"40px"},{default:c(()=>[t(K,{onClick:E,class:"scroll-top-button"},{default:c(()=>[P(" 回到顶部 ")]),_:1})]),_:1})]),_:1})])}}};export{Ht as default};