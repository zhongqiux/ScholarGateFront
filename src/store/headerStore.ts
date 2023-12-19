import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header'/*store的唯一标识*/, {
	state: () => ({
		search:true,
		search_active:false,
		display:true,
		suggestions:new Array<{display_name:string}>(),
		serInput:''
	}),
	getters: {
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
})
