// @ts-ignore
import { defineStore } from 'pinia'

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

export const useHeaderStore = defineStore('header'/*store的唯一标识*/, {
	state: () => ({
		search:true
	}),
	getters: {
	  // @ts-ignore
	  display:(search)=>{return search}
	},
	actions: {
	  change() {
		// @ts-ignore
		if(this.research === true){
			// @ts-ignore
			this.research = false;
		}
		else{
			// @ts-ignore
			this.research = true;
		}
	  },
	},
	//数据持久化
	persist: true,
})