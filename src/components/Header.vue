<template>
<div class="header">
	<div class="routes">
		<div v-for="item,index in itemList" :class='(active-1 == index)?"active header-item":"header-item"' @click="[go(item.path),active = index+1]" >{{ item.value }}</div>
	</div>
	<div class="search" v-show="store.search">
		<el-select v-model="value" placeholder="Select">
			<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value"
			/>
		</el-select>
		<el-input v-model="input" placeholder="Please input" />
	</div>
	<div class="ava">
		<el-tooltip effect="dark" content="消息" placement="bottom">
			<el-badge :value="1" :max="99" class="item">
				<el-icon color="#777575" class="no-inherit" :size="20" style="vertical-align: middle">
					<svg width="18" height="18" viewBox="0 0 24 24" class="ZDI ZDI--BellFill24 css-7dgah8" fill="white"><path fill-rule="evenodd" d="M9.723 21.271c0-.42.34-.76.76-.76h3.043a.76.76 0 0 1 0 1.521h-3.043a.76.76 0 0 1-.76-.76Z" clip-rule="evenodd"></path><path d="M11.153 3.115c0-.618.376-1.115.844-1.115.469 0 .845.499.845 1.115v.183c3.997.369 7.012 4.117 7.024 8.515V17.468h.253a.76.76 0 1 1 0 1.521H3.891a.76.76 0 0 1 0-1.521h.253V11.813c.011-4.392 3.02-8.137 7.009-8.514v-.184Z"></path></svg>
				</el-icon>
			</el-badge>
		</el-tooltip>
		<span class="w-5"></span>
		<el-dropdown>
		<el-avatar :icon="UserFilled" />
		<template #dropdown>
			<el-dropdown-menu>
			<el-dropdown-item @click="go('/path')">主页</el-dropdown-item>
			<el-dropdown-item @click="go('/path')">消息</el-dropdown-item>
			<el-dropdown-item @click="go('/path')">收藏</el-dropdown-item>
			</el-dropdown-menu>
		</template>
		</el-dropdown>
	</div>
	
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import { useHeaderStore } from "@/store"
// let store = useHeaderStore()

export default defineComponent({
	name:"Header",
	data(){
		return {
			itemList:[{value:' 首页 ',path:'/'},{value:'网站介绍',path:'/main'},{value:'关于我们',path:'/'}],
			input:'',
			active:1,
			options: [
				{ value: '123',label: '主题',},
				{ value: '456',label: '关键词',}
			],
			value:'123',
			UserFilled,
			store : useHeaderStore(),
		}
	},
	methods:{
		go(path:string){
			this.$router.push(path)
		}
	}
})
</script>

<style scoped>
.header {
	background-color: rgb(47, 58, 145);
	/* height: 10vh; */
	min-height: 70px;
	
	align-items: center;
}
.header-item {
	color: antiquewhite;
	padding: 0 20px;
	height: 100%;
	text-align: center;
	line-height: 70px;
}
.header-item:hover {
	cursor: pointer;
}
.active {
	background-color: rgb(78, 87, 161);
	border-bottom: 5px solid rgb(221, 187, 52);
	height: 65px;
	font-weight: 700;
}
.search {
	display: flex;
	flex-direction: row;
	height: 40px;
	float: left;
}
.search .el-select {
	width: 150px;
}
.routes {
	display: flex;
	flex-direction: row;
	float: left;
	margin-left: 150px;
}
.ava {
	float: right;
	height: 70px;
	display: flex;
	align-items: center;
	margin-right: 20px;
}
</style>