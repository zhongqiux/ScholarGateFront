import { defineStore } from 'pinia'

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
		hasFullTextValue: '',
    dateValue: '',
    sortFunc:'',
    typeValue: '',
    concepts:[],
    countryValue: '',
    sortByTime:'',
    patentStatus:'',
    patentTypeRatio:'',
    keywords:'',
	}),
  actions: {
    
  }
})