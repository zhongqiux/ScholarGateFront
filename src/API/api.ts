import * as Type from './type';
import axios from 'axios';
import {useUserStore} from '@/store';

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
                params: {},
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
                params: {},
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

export function getUserData(): Promise<Type.GetUserDataReturn> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/portals/getMsg", {
                headers: {
                    Authorization: useUserStore().token,
                    // Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ6cGQiLCJ1c2VyTmFtZSI6IuW8oOaci-i-viIsInBhc3N3b3JkIjoiMTIzNCJ9.zIsby8CJlvLXGtY-zbxBKWnCLco6YX4mGjRupaNW03c",

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
                    doi: 'A5023888391',
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
        axios.get("/portals/update", {
                params: {
                    background: background,
                },
                headers: {
                    Authorization: useUserStore().token,
                    // Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJ6cGQiLCJ1c2VyTmFtZSI6IuW8oOaci-i-viIsInBhc3N3b3JkIjoiMTIzNCJ9.zIsby8CJlvLXGtY-zbxBKWnCLco6YX4mGjRupaNW03c",

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

export function getSearchResult(
    params: {
        type: string,
        concept: string,
        name: string,
        year: string,
        has_fulltext: string,
        start_date: string,
        stop_date: string,
        sort_func: string,
        key_word: string,
    }, pageNo: number): Promise<Type.GetSearchResultReturn> {
    return new Promise((resolve, reject) => {
        axios.post(`/search/work/filter/${pageNo}`, {
                type: params.type,
                concept: params.concept,
                name: params.name,
                year: params.year,
                has_fulltext: params.has_fulltext,
                start_date: params.start_date,
                stop_date: params.stop_date,
                sort_func: params.sort_func,
                key_word: params.key_word,
            },
            {
                headers: {
                    Authorization: useUserStore().token,
                }
            }
        ).then(res => {
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export function getPatentResult(
    params: {
        publication_number: string,
        theme: string,
        patent_name: string,
        countries: string,
        status: string,
        type: string,
        litigation: string,
        inventor: string,
        sortByTime: string,
        filing_before: string,
        filing_after: string,
        page: string,
        num: string
    }): Promise<Type.GetPatentResultReturn> {
    return new Promise((resolve, reject) => {
        axios.post(`/patent/showPatents`, {
                publication_number: params.publication_number,
                theme: params.theme,
                patent_name: params.patent_name,
                countries: params.countries,
                status: params.status,
                type: params.type,
                litigation: params.litigation,
                inventor: params.inventor,
                sortByTime: params.sortByTime,
                filing_before: params.filing_before,
                filing_after: params.filing_after,
                page: params.page,
                num: params.num
            },
            {
                headers: {
                    Authorization: useUserStore().token,
                }
            }
        ).then(res => {
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
        axios.get(`/concept/showPointConcept/${fieldId}`, {
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

export function getFieldWorks(works_api_url: string, page: number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post('/concept/showWorks', {
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

export function getFields(page: number): Promise<Type.FieldWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get('/concept/showHeatConcept', {
            params: {
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
    works = 0,
    cited = 1,
}

export function getInstitionRank(page: number, rank: RankedBy): Promise<Type.InstutionRank> {
    let tem: string = '';
    switch (rank) {
        case RankedBy.works: {
            tem = 'works_count'
            break;
        }
        case RankedBy.cited: {
            tem = 'cited_by_count'
            break;
        }
    }
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/institution/rank/${page}`, {
            params: {
                rank: tem,
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

export function getHotScholar(page: number, rank: RankedBy): Promise<Type.ScholarHotReturn> {
    let tem: string = '';
    switch (rank) {
        case RankedBy.works: {
            tem = 'works_count'
            break;
        }
        case RankedBy.cited: {
            tem = 'cited_by_count'
            break;
        }
    }
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/scholar/hot`, {
            params: {
                type: tem,
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
export function getHotWorks(): Promise<Type.HotWorks> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(`/works/showHeatWork`,{
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

export enum completeBy {
    authors = 'authors',
    concepts = 'concepts',
    institutions = 'institutions',
    works = 'works',
    funders = 'funders'
}

export function autoComplete(key: completeBy, value: string): Promise<Type.autoCompleteReturn> {
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
                    Authorization: useUserStore().token,
                    // Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjM0NSIsInVzZXJOYW1lIjoibXR5IiwicGFzc3dvcmQiOiIxMjMifQ.eUdmT1dOZaZXGVvn9VMoHvRfgTBr8RfZb00_W2iTyg4",

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
                    Authorization: useUserStore().token,
                    // Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjM0NSIsInVzZXJOYW1lIjoibXR5IiwicGFzc3dvcmQiOiIxMjMifQ.eUdmT1dOZaZXGVvn9VMoHvRfgTBr8RfZb00_W2iTyg4",
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

export function setStar(id: string, name: string): Promise<null> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.post('/users/star', {
                "id": id,
                "name": name,
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


export function getRelatedWork(paperId: String): Promise<null> {
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get("/works/getRelatedWork", {
                params: {
                    id: paperId,
                },
                headers: {
                    Authorization: useUserStore().token,
                    // Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjM0NSIsInVzZXJOYW1lIjoibXR5IiwicGFzc3dvcmQiOiIxMjMifQ.eUdmT1dOZaZXGVvn9VMoHvRfgTBr8RfZb00_W2iTyg4",

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

export function getIssues(): Promise<Type.GetIssuesReturn> {
    return new Promise((resolve, reject) => {
        axios.get("/audit/showInfo", {
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
        axios.post("/audit/approve/"+id, {
            
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

export function rejectIssue(id: string, reason: string, user_id: string): Promise<Type.CommonReturnType> {
    const queryParam = {
        user_id: user_id,
        reject_reason: reason,
    }
    return new Promise((resolve, reject) => {
        axios.post("audit/reject/"+id+'?' + new URLSearchParams(queryParam),{
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
        axios.delete("/audit/deleteOnceInfo/"+id,
        {
            headers:{
                Authorization:useUserStore().token,
            }
        }
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
        axios.delete("/audit/deleteAllFinishInfo",
        {
            headers:{
                Authorization:useUserStore().token,
            }
        }
        ).then(res =>{
            console.log(res);
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    })
}