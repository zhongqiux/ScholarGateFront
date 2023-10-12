import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter'/*store的唯一标识*/, {
	state: () => ({ count: 0 }),
	getters: {
	  double: (state) => state.count * 2,
	},
	actions: {
	  increment() {
		this.count++
	  },
	},
	//数据持久化
	persist: true,
})