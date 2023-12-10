// @ts-ignore
import { defineStore } from 'pinia'
export * from "./headerStore"

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
export const useUserStore = defineStore('user'/*store的唯一标识*/, {
	state: () => ({ 
		token: undefined,
		name:undefined,
		id:undefined,
	}),
	getters: {
		islogin(){
			if(this.token){
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

export * from "./headerStore.ts"