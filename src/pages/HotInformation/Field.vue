<template>
<el-table :data="fields" :fit="true" :strip="true" class="instable">
	<el-table-column type="index" label="排名" >
		<template #="scope">
			<div>{{ store.page * 10 + scope.$index -9 }}</div>
		</template>
	</el-table-column>
	<el-table-column prop="display_name" label="领域">
		<template #="scope">
			<div class="name" @click="go('/field',{field:getLastUrl(fields[scope.$index].id)})">{{fields[scope.$index].display_name }}</div>
		</template>
	</el-table-column>
	<el-table-column prop="summary_stats.h_index" label="h_index"></el-table-column>
	<el-table-column prop="works_count" label="作品数量"></el-table-column>
	<el-table-column prop="cited_by_count" label="概念引用数"></el-table-column>
</el-table>
</template>

<script lang="ts">
import { defineComponent,watch } from 'vue'
import { getFields } from '@/API'
import { useHotInfoStore } from '@/store'

export default defineComponent({
	name:'HotField',
	mounted:function(){
		useHotInfoStore().page = 1;
		useHotInfoStore().selected = '/field';
		this.updateFields()
		watch(() => useHotInfoStore().rankBy, () => {
			useHotInfoStore().page = 1;
			this.updateFields()
		})
		watch(() => useHotInfoStore().page, () => {
			this.updateFields()
		})
	},
	data(){
		return {
			fields:[] as {
				cited_by_count: number,
				id: string,
				display_name: string,
			}[],
			store:useHotInfoStore(),
		}
	},
	methods:{
		getLastUrl(url:string):string{
			return url.substring(url.lastIndexOf('/')+1)
		},
		go(path:string,query:any){
			this.$router.push({path:path,query:query})
		},
		updateFields(){
			getFields(this.store.page).then(res=>{
				this.fields = res.data.results
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