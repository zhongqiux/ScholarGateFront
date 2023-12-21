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

export function getFieldWorks(works_api_url: string, page: number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post('/concept/showWorks', {
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

export function getFields(page: number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get('/concept/showHeatConcept', {
            params: {
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

export function autoComplete(author: string): Promise<Type.autoCompleteReturn> {
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

export function getPatentData(patentId: String): Promise<null> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/patent/showOncePatent/" + patentId, {
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

export function getPaperData(paperId: String): Promise<null> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/works/" + paperId, {
            headers: {
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjM0NSIsInVzZXJOYW1lIjoibXR5IiwicGFzc3dvcmQiOiIxMjMifQ.eUdmT1dOZaZXGVvn9VMoHvRfgTBr8RfZb00_W2iTyg4",
            },
        
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

