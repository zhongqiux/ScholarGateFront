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
            headers: {
                Authorization: useUserStore().token,
            }
        }).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            console.log("111")

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
                name: name,
                password: password,
            },
            headers: {
                Authorization: useUserStore().token,
            }//get请求携带登录凭证
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

export function getUserData(): Promise<Type.GetUserDataReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/portals/getMsg", {
            headers: {
                // Authorization: useUserStore().token,
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ6cGQiLCJ1c2VyTmFtZSI6IuW8oOaci-i-viIsInBhc3N3b3JkIjoiMTIzNCJ9.zIsby8CJlvLXGtY-zbxBKWnCLco6YX4mGjRupaNW03c",

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

export function getAuthorData(doi: string): Promise<Type.GetUserDataReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/portals/getUserMsg", {
            params: {
                doi: doi,
            },
            headers: {
                // Authorization: useUserStore().token,

                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIzNDUiLCJ1c2VyTmFtZSI6ImZ3IiwicGFzc3dvcmQiOiIxMjMifQ.4nS1yyna7b6Yb2c9P4_2yl-wESjQrGtqQTgXKLWIeQ0",
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

export function claim(doi: string, email: string): Promise<Type.ClaimReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/portals/claim", {
            params: {
                doi: doi,
                email: email,
            },
            headers: {
                // Authorization: useUserStore().token,
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ6cGQiLCJ1c2VyTmFtZSI6IuW8oOaci-i-viIsInBhc3N3b3JkIjoiMTIzNCJ9.zIsby8CJlvLXGtY-zbxBKWnCLco6YX4mGjRupaNW03c",

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

export function verifyCode(doi: string, email: string, code: string): Promise<Type.verifyCodeReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/portals/verifyCode", {
            params: {
                doi: doi,
                email: email,
                code: code,
            },
            headers: {
                // Authorization: useUserStore().token,
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ6cGQiLCJ1c2VyTmFtZSI6IuW8oOaci-i-viIsInBhc3N3b3JkIjoiMTIzNCJ9.zIsby8CJlvLXGtY-zbxBKWnCLco6YX4mGjRupaNW03c",

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
        axios.get("/portals/update", {
            params: {
                background: background,
            },
            headers: {
                // Authorization: useUserStore().token,
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ6cGQiLCJ1c2VyTmFtZSI6IuW8oOaci-i-viIsInBhc3N3b3JkIjoiMTIzNCJ9.zIsby8CJlvLXGtY-zbxBKWnCLco6YX4mGjRupaNW03c",

            }
        }
        ).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}