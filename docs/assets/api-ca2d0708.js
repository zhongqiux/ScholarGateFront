import{a as l}from"./axios-21b846bc.js";import{a as i}from"./main-fe380ada.js";l.defaults.baseURL="https://mock.apifox.cn/m1/3409708-0-default/";l.defaults.timeout=3e3;function h(e){return new Promise((a,n)=>{l.get("/hello",{params:{message:e},headers:{Authorization:i().token}}).then(o=>{console.log(o),a(o.data)}).catch(o=>{console.log(o),n(o)})})}function u(){window.alert("hello")}function g(e,a){return new Promise((n,o)=>{l.get("/login",{params:{name:e,password:a},headers:{Authorization:i().token}}).then(t=>{console.log(t),n(t.data)}).catch(t=>{console.log(t),o(t)})})}function m(e,a,n){return new Promise((o,t)=>{l.post("/register",{name:e,password:a,email:n},{headers:{Authorization:i().token}}).then(s=>{console.log(s),o(s.data)}).catch(s=>{console.log(s),t(s)})})}export{u as h,g as l,m as r,h as t};
