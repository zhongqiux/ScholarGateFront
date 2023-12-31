// @ts-ignore
import { defineStore } from 'pinia'
export * from "./headerStore"
export * from "./hotInfo"
export * from "./search"

export const useCounterStore = defineStore('counter'/*store的唯一标识*/, {
	state: () => ({ 
		count: 0 ,
		author:{ },
	}),
	getters: {
	  // @ts-ignore
	  double: (state) => state.count * 2,
	},
	actions: {
	  increment() {
		// @ts-ignore
		this.count++
	  },
	},
	//数据持久化
	persist: true,
})

export enum Identity {
	User = '0',
	Scholar = '1',
	ADMINISTRATOR = '2',
}
export const useUserStore = defineStore('user'/*store的唯一标识*/, {
	state: () => ({ 
		token: '',
		userName:'',
		userId:-1,
		avatar:-1,
		email:'',
		Identity: '0' as Identity,
		outdate:new Date('1919-5-4').getTime(),
	}),
	getters: {
		islogin(){
			let now = new Date();
			if(now.getTime() < this.outdate){
				return true;
			}
			return false;
		}
	},
	actions: {

	},
	//数据持久化
	persist: true,
})

