import * as Type from './type';
import axios from 'axios';
import { useUserStore } from '@/store';
axios.defaults.baseURL = import.meta.env.VITE_HOST
axios.defaults.timeout = 3000

export function test(msg: String): Promise<Type.CommonReturnType> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/hello", {
            params: {
                message: msg
            },
            headers:{
                Authorization:useUserStore().token,
            }
        }).then(res=>{
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function hello(): void {
    window.alert('hello')
}

export function login(name: string, password: string): Promise<Type.LoginReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/login", {
            params: {
                userName: name,
                password: password,
            }
        }).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function register(name: string, password: string, email: string): Promise<Type.RegisterReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post("/register", {
            name: name,
            password: password,
            email: email,
        }
            , {
                headers: {
                    Authorization: useUserStore().token,
                }
            }//post请求携带登录凭证
        ).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function getUserData(userId: number): Promise<Type.GetUserDataReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/getUserData", {
            params: {
                userId: userId,
            },
            headers: {
                Authorization: useUserStore().token,
            }
        }//get请求携带登录凭证
        ).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function claim(userId: number): Promise<Type.ClaimReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/claim", {
            params: {
                userId: userId,
            },
            headers: {
                Authorization: useUserStore().token,
            }
        }//get请求携带登录凭证
        ).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}


export function editUserInfo(background: string): Promise<Type.EditUserInfoReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post("/editUserInfo", {
            background: background,
        }
            , {
                headers: {
                    Authorization: useUserStore().token,
                }
            }//post请求携带登录凭证
        ).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function getFieldData(fieldId: string): Promise<Type.FieldData> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/concept/showPointConcept/${fieldId}`).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function getFieldWorks(works_api_url: string,page:number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post('/concept/showWorks',{
            "url": works_api_url,
            "page": page,
            "pageSize": 10
        }).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function getFields(page:number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get('/concept/showHeatConcept',{
            params:{
                "page": page,
            }
        }).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function autoComplete(author:string): Promise<Type.autoCompleteReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/search/autocomplete/authors/${author}`).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function getIssues(): Promise<Type.GetIssuesReturn> {
    return new Promise((resolve, reject) => {
        axios.get("/audit/showinfo", {
            params: {
                
            },
            headers:{
                Authorization:useUserStore().token,
            }
        }).then(res =>{
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function approveIssue(id: string): Promise<Type.CommonReturnType> {
    return new Promise((resolve, reject) => {
        axios.post("/audit/approve", {
            id: id,
        },{
            headers:{
                Authorization:useUserStore().token,
            }
        }).then(res =>{
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function rejectIssue(id: string, reason: string): Promise<Type.CommonReturnType> {
    return new Promise((resolve, reject) => {
        axios.post("/reject", {
            id: id,
            reject_reason: reason,
        },{
            headers:{
                Authorization:useUserStore().token,
            }
        }).then(res =>{
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function deleteIssue(id: string): Promise<Type.CommonReturnType> {
    return new Promise((resolve, reject) => {
        axios.delete("/audit/deleteOnceInfo/"+id
        ).then(res =>{
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function deleteAllIssue(): Promise<Type.CommonReturnType> {
    return new Promise((resolve, reject) => {
        axios.delete("/audit/deleteAllFinishInfo/"
        ).then(res =>{
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function VerifyClaim(): Promise<Type.CommonReturnType> {
    return new Promise((resolve, reject) => {
        axios.delete("/portals/verifyCode"
        ).then(res =>{
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    })
}