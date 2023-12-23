import { defineStore } from 'pinia'

export const useHotInfoStore = defineStore('hotInfo'/*store的唯一标识*/, {
	state: () => ({
		selected:'',
		rankBy:'works',
		page:1,
	}),
	getters: {
	},
	actions: {
	},
})
