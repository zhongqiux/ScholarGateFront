<template>
	<el-table :data="institutions" :fit="true" :strip="false" class="instable">
		<el-table-column type="index" label="排名" >
			<template #="scope">
				<div>{{ store.page * 10 + scope.$index -9 }}</div>
			</template>
		</el-table-column>
		<el-table-column prop="display_name" label="机构">
			<template #="scope">
				<div class="name"><a :href="institutions[scope.$index].homepage_url">{{ institutions[scope.$index].display_name }}</a></div>
			</template>
		</el-table-column>
		<el-table-column prop="cited_by_count" label="概念引用数"></el-table-column>
		<el-table-column prop="works_count" label="作品数量"></el-table-column>
	</el-table>
	</template>
	
<script lang="ts">
import { defineComponent,watch } from 'vue'
import { getInstitionRank,RankedBy,Institution } from '@/API'
import { useHotInfoStore } from '@/store'

export default defineComponent({
	name:'InstitionRank',
	mounted:function(){
		this.store.page = 1;
		this.store.selected = '/institution'
		this.updateInstution()
		watch(() => useHotInfoStore().rankBy, () => {
			this.store.page = 1;
			this.updateInstution()
		})
		watch(() => useHotInfoStore().page, () => {
			this.updateInstution()
		})
	},
	data(){
		return {
			institutions:[] as Institution[],
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
		updateInstution(){
			let rankby:RankedBy = RankedBy.cited;
			if(this.store.rankBy == 'works'){
				rankby = RankedBy.works
			}
			getInstitionRank(this.store.page,rankby).then(res=>{
				this.institutions = res.data.results;
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
}
.name a:hover {
	color: #409eff;
}
</style>