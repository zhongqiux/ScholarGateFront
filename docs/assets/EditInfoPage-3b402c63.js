import{H as r,_ as i,ah as m,o as p,c as f,V as e,P as t,T as c}from"./@vue-5e5b7d13.js";const V={class:"container"},v=r({__name:"EditInfoPage",setup(b){const o=i({name:"",org:"",email:""}),_=()=>{console.log("submit!")};return(g,l)=>{const u=m("el-input"),a=m("el-form-item"),d=m("el-button"),s=m("el-form");return p(),f("div",V,[e(s,{model:o,"label-width":"120px"},{default:t(()=>[e(a,{label:"您的姓名"},{default:t(()=>[e(u,{modelValue:o.name,"onUpdate:modelValue":l[0]||(l[0]=n=>o.name=n)},null,8,["modelValue"])]),_:1}),e(a,{label:"您的机构"},{default:t(()=>[e(u,{modelValue:o.org,"onUpdate:modelValue":l[1]||(l[1]=n=>o.org=n)},null,8,["modelValue"])]),_:1}),e(a,{label:"您的邮箱"},{default:t(()=>[e(u,{modelValue:o.email,"onUpdate:modelValue":l[2]||(l[2]=n=>o.email=n)},null,8,["modelValue"])]),_:1}),e(a,null,{default:t(()=>[e(d,{type:"primary",onClick:_},{default:t(()=>[c("保存")]),_:1})]),_:1})]),_:1},8,["model"])])}}});export{v as default};
