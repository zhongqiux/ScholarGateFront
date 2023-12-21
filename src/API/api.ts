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
        axios.post("/users/login", {
            userName: name,
            password: password,
        }).then(res => {
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function sendCode(email: string): Promise<Type.SendCodeReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/users/sendCode", {
            params: {
                email: email,
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

export function register(name: string, password: string, email: string, code: string): Promise<Type.RegisterReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post("/users/register", {
            username: name,
            password: password,
            email: email,
            code: code,
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

export function getMessageList(): Promise<Type.GetMessageListReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/messages/lookAllMsg", {
            params: {
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

export function readMessage(messageId: string): Promise<Type.ReadMessageReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/messages/lookOneMsg", {
            params: {
                id: messageId,
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

export function readAllMessage(): Promise<Type.ReadAllMessageReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/messages/readAllMsg", {
            params: {
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
        axios.get(`/concept/showPointConcept/${fieldId}`,{
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

export function getFieldWorks(works_api_url: string,page:number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post('/concept/showWorks',{
            "url": works_api_url,
            "page": page,
            "pageSize": 10
        }, {
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

export function getFields(page:number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get('/concept/showHeatConcept',{
            params:{
                "page": page,
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

export enum RankedBy {
    works=0,
    cited=1,
}
export function getInstitionRank(page:number,rank:RankedBy): Promise<Type.InstutionRank> {
    let tem:string='';
    switch(rank){
        case RankedBy.works:{
            tem = 'works_count'
            break;
        }
        case RankedBy.cited:{
            tem = 'cited_by_count'
            break;
        }
    }
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/institution/rank/${page}`,{
            params:{
                rank:tem,
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

export function getHotScholar(page:number,rank:RankedBy): Promise<Type.ScholarHotReturn> {
    let tem:string='';
    switch(rank){
        case RankedBy.works:{
            tem = 'works_count'
            break;
        }
        case RankedBy.cited:{
            tem = 'cited_by_count'
            break;
        }
    }
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/scholar/hot`,{
            params:{
                type:tem,
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

export enum completeBy{
    authors='authors',
    concepts='concepts',
    fields='fields',
    funders='funders'
}
export function autoComplete(key:completeBy,value:string): Promise<Type.autoCompleteReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/search/autocomplete/${key.toString()}/${value}`).then(res => {
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
                // Authorization: useUserStore().token,
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjM0NSIsInVzZXJOYW1lIjoibXR5IiwicGFzc3dvcmQiOiIxMjMifQ.eUdmT1dOZaZXGVvn9VMoHvRfgTBr8RfZb00_W2iTyg4",

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
                // Authorization: useUserStore().token,
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

