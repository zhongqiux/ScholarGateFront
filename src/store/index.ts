// @ts-ignore
import { defineStore } from 'pinia'
export * from "./headerStore"
export * from "./hotInfo"

export const useCounterStore = defineStore('counter'/*store的唯一标识*/, {
	state: () => ({ count: 0 }),
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

enum Identity {
	User = 0,
	Scholar = 1,
}
export const useUserStore = defineStore('user'/*store的唯一标识*/, {
	state: () => ({ 
		token: '',
		userName:'',
		userId:-1,
		avatar:-1,
		email:'',
		Auth:{} as Identity,
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

