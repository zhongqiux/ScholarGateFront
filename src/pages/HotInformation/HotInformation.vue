<template>
<div class="bgc">
<div class="hot" >
	<div class="title flex flex-row justify-between items-center mt-2 mb-2">
		<div class="w-5 h-5 ml-3">
			<svg v-if="store.page != 1" @click="store.page--" class="allo" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
			</svg>
			<svg v-if="store.page == 1" class="forbid" data-slot="icon" fill="none" stroke-width="1.5" stroke="grey" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
			</svg>
		</div>
		<div class="h-12 truncate text-center font-bold dark:text-gray-300" style="line-height: 48px;">{{ convert(store.selected) + "排行榜"}}</div>
		<div class="w-5 h-5 mr-3">
			<svg data-slot="icon" @click="store.page ++" class="allo" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
			</svg>
		</div>
	</div>
	<div class="body">
		<div class="fliter flex flex-row justify-between items-center" style="border-radius: 5px;border: 1px solid rgb(191, 191, 191);">
			<div style="width: 120px; ">
				<el-select v-model="store.selected" class="m-2 border-none outline-none" placeholder="Select" size="large" @change="distribute()">
					<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
					/>
				</el-select>
			</div>
			<div class="">
				{{ store.rankBy }}
			</div>
			<div style="width: 120px; ">
				<el-select v-model="store.rankBy" class="m-2 border-none outline-none" placeholder="Select" size="large">
					<el-option
					v-for="item in rankOptions"
					:key="item.value"
					:label="item.label"
					:value="item.value"
					/>
				</el-select>
			</div>
		</div>
		<div>
			<router-view ref="son" class="mb-3"></router-view>
		</div>
		<div class="foo" style="height: 100px; width: 100%;">

		</div>
	</div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useHotInfoStore } from "@/store"

export default defineComponent({
	name:'HotInformation',
	data(){
		return {
			store:useHotInfoStore(),
			options : [
			{
				value: '/field',
				label: '领域',
			},
			{
				value: '/scholar',
				label: '学者',
			},
			{
				value: '/institution',
				label: '机构',
			},
			],
			rankOptions:[
			{
				value: 'works',
				label: '作品数',
			},
			{
				value: 'cited',
				label: '引用数',
			},
			],
			
		}
	},
	methods:{
		distribute(){
			this.$router.push('/hotInformation'+this.store.selected)
		},
		convert(select:string):string{
			if(select == '/field'){
				return "领域"
			}else if(select == '/scholar'){
				return "学者"
			}else{
				return "机构"
			}
		}
	}
})
</script>

<style scoped>
.allo:hover {
  color: #067acc;
  cursor: pointer;
}
.forbid {
	cursor: not-allowed;
}
.hot {
	width: 800px;
	margin: auto;
	background-color: #fff;
}
.title {
	border: 1px solid rgb(152, 152, 152);
	border-radius: 5px;
}
.bgc {
	background-color: rgb(245, 246, 247);
}
</style>