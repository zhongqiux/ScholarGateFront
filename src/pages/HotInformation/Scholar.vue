<template>
<el-table :data="scholars" :fit="true" :strip="true" class="instable">
	<el-table-column type="index" label="排名" >
		<template #="scope">
			<div>{{ store.page * 10 + scope.$index -9 }}</div>
		</template>
	</el-table-column>
	<el-table-column prop="display_name" label="学者">
		<template #="scope">
			<div class="name">{{ scholars[scope.$index].display_name }}</div>
		</template>
	</el-table-column>
	<el-table-column prop="summary_stats.h_index" label="h_index"></el-table-column>
	<el-table-column prop="works_count" label="作品数量"></el-table-column>
	<el-table-column prop="cited_by_count" label="概念引用数"></el-table-column>
	<el-table-column prop="last_known_institution.display_name" label="所在机构"></el-table-column>
</el-table>
</template>
	
<script lang="ts">
import { defineComponent,watch } from 'vue'
import { getHotScholar,RankedBy,Scholar } from '@/API'
import { useHotInfoStore } from '@/store'

export default defineComponent({
	name:'HotScholar',
	mounted:function(){
		this.store.page = 1;
		this.store.selected = '/scholar'
		this.updateScholar()
		
		watch(() => useHotInfoStore().rankBy, () => {
			this.store.page = 1;
			this.updateScholar()
		})
		watch(() => useHotInfoStore().page, () => {
			this.updateScholar()
		})
	},
	data(){
		return {
			scholars:[] as Scholar[],
			store : useHotInfoStore(),
		}
	},
	methods:{
		getLastUrl(url:string):string{
			return url.substring(url.lastIndexOf('/')+1)
		},
		go(path:string,query:any){
			this.$router.push({path:path,query:query})
		},
		updateScholar(){
			let rankby:RankedBy = RankedBy.cited;
			if(this.store.rankBy == 'works'){
				rankby = RankedBy.works
			}
			getHotScholar(this.store.page,rankby).then(res=>{
				this.scholars = res.data.results
			})
		}
	}
})
</script>
<style scoped>
.instable {
	border: 1px solid rgb(191, 191, 191);
	border-radius: 8px;
}
.name a {
	color: #606266;
}
.name:hover {
	cursor: pointer;
	color: #409eff;
}
</style>