import * as Type from './type';
import axios from 'axios';
import { useUserStore } from '@/store';
axios.defaults.baseURL = import.meta.env.VITE_HOST
axios.defaults.timeout = 3000

export function test(msg:String):Promise< Type.CommonReturnType > {
	return new Promise((resolve,reject)=>{
        // axiso 自带 get 和 post 方法
        axios.get("/hello",{
            params:{
                message:msg
            },
            headers:{
                Authorization:useUserStore().token,
            }
        }).then(res=>{
            console.log(res);
			resolve(res.data);
        }).catch(err=>{
            console.log(err)
			reject(err)
        })
    })
}

export function hello():void{
    window.alert('hello')
}

export function login(name:string,password:string):Promise< Type.LoginReturn >{
    return new Promise((resolve,reject)=>{
        // axiso 自带 get 和 post 方法
        axios.get("/login",{
            params:{
                name:name,
                password:password,
            },
            headers:{
                Authorization:useUserStore().token,
            }//get请求携带登录凭证
        }).then(res=>{
            console.log(res);
			resolve(res.data);
        }).catch(err=>{
            console.log(err)
			reject(err)
        })
    })
}
export function register(name:string,password:string,email:string):Promise< Type.RegisterReturn >{
    return new Promise((resolve,reject)=>{
        // axiso 自带 get 和 post 方法
        axios.post("/register",{
            name:name,
            password:password,
            email:email,
        }
        ,{
            headers:{
                Authorization:useUserStore().token,
            }
        }//post请求携带登录凭证
        ).then(res=>{
            console.log(res);
			resolve(res.data);
        }).catch(err=>{
            console.log(err)
			reject(err)
        })
    })
}
