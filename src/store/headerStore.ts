import { defineStore } from 'pinia'
import { completeBy } from '@/API';


export const useHeaderStore = defineStore('header'/*store的唯一标识*/, {
	state: () => ({
		search:true,
		search_active:false,
		inAuthorPage:false,
		display:true,
		suggestions:new Array<{display_name:string}>(),
		serInput:'',
		login:false,
		option:{ value: completeBy.works,label: '关键词',}
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
