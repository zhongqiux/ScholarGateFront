<template>
<div class="header" >
	<div class="icon float-left hover:cursor-pointer" @click="go('/index')">
		<img src="@/assets/icon.png" class="w-60 h-17">
	</div>
	<div class="routes" v-show="store.display">
		<div v-for="item,index in itemList" :class='(active-1 == index)?"active header-item":"header-item"' @click="[go(item.path),active = index+1]" >{{ item.value }}</div>
	</div>
	<div class="search" v-show="store.search && store.display">
		<el-dropdown>
			<input type="text" v-model="store.option.label" readonly autocomplete="off" placeholder="请选择" class="base-input_inner">
			<template #dropdown>
				<el-dropdown-item v-for="item in options" @click="store.option = item">{{ item.label }}</el-dropdown-item>
			</template>
		</el-dropdown>
		<el-dropdown ref="dropdown2" trigger="contextmenu" placement="bottom-start">
			<input type="text" autocomplete="off" @input="getSuggestion()" v-model="store.serInput" placeholder="搜索你感兴趣的内容..." class="top_input" @focus="store.search_active = true" @keyup.enter.native="push('/explorePaper',{key:store.option.value,value:store.serInput})">
			<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="item in store.suggestions" @click="store.serInput = item.display_name">{{ item.display_name }}</el-dropdown-item>
					</el-dropdown-menu>
				</template>
		</el-dropdown>
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
		<LoginButton class="outline-none" v-show="!userStore.islogin" @click="go('/login')"></LoginButton>
		<el-dropdown v-show="userStore.islogin" @click="go((userStore.Auth==0)?'/admin/board': '/person')">
			<GitAvatar :num="userStore.avatar" class="outline-none" ></GitAvatar>
			<template #dropdown>
				<el-dropdown-menu>
				<el-dropdown-item @click="go('/admin/board')">管理员</el-dropdown-item>
				<el-dropdown-item @click="go('/person')">主页</el-dropdown-item>
				<el-dropdown-item @click="go('/result')">学术成果展示</el-dropdown-item>
				<el-dropdown-item @click="go('/login')">登录</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
	
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import { useHeaderStore,useUserStore } from "@/store"
import GitAvatar from "@/components/small/GitAvatar.vue"
import { autoComplete,completeBy } from '@/API'
import LoginButton from '@/components/small/LoginButton.vue'
// let store = useHeaderStore()

export default defineComponent({
	name:"Header",
	components:{
    GitAvatar,
    LoginButton
},
	data(){
		return {
			itemList:[{value:' 首页 ',path:'/'},{value:'网站介绍',path:'/main'},{value:'工作台',path:'/admin/board'}],
			input:'',
			active:1,
			options: [
				{ value: completeBy.concepts,label: '主题',},
				{ value: completeBy.fields,label: '领域',},
				{ value: completeBy.authors,label: '作者',}
			],
			value:'123',
			UserFilled,
			store : useHeaderStore(),
			userStore:useUserStore(),
			clock:null,
		}
	},
	
	methods:{
		go(path:string){
			this.$router.push(path)
		},
		push(path:string,query:any){
			this.$router.push({path:path,query:query})
		},
		getSuggestion(){
			if(this.clock)
				// @ts-ignore
				clearTimeout(this.clock);
			
			if(this.store.serInput != ''){
				// @ts-ignore
				this.clock = setTimeout(()=>{
					autoComplete(this.store.option.value,this.store.serInput).then(res=>{
						console.log(res)
						this.store.suggestions = res.data.results
						console.log(this.store.suggestions)
						if(this.store.suggestions.length > 0)
							// @ts-ignore
							this.$refs.dropdown2.handleOpen()
					})
				},500)
			}
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
.base-input_inner {
	border: 1px solid transparent;
    border-right-color: hsla(0,0%,100%,.2);
    height: 36px;
    line-height: 36px;
    border-radius: 999px 0 0 999px;
    background-color: hsla(0,0%,100%,.2);
    padding: 0 10px 0 0;
    
    text-align: center;
	outline: none;
	cursor: pointer;
	width: 70px;
	color: white;
}
.top_input::-webkit-input-placeholder,
.base-input_inner::-webkit-input-placeholder {
	color: white;
}
.top_input {
	height: 36px;
    line-height: 36px;
    border-radius: 0 999px 999px 0;
    border: 1px solid transparent;
    caret-color: #fff;
    color: #fff;
    background-color: hsla(0,0%,100%,.2);
    padding: 0 16px 0 10px;
	outline: none;
	width: 250px;
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
	
	float: left;
	height: 70px;
	display: flex;
	align-items: center;
	margin-left: 50px;
}
.search .el-select {
	width: 150px;
	
}
.routes {
	display: flex;
	flex-direction: row;
	float: left;
}
.icon {
	float: left;
	/* width: 150px; */
	height: 70px;
}
.icon img {
	height: 100%;
}
.ava {
	float: right;
	height: 70px;
	display: flex;
	align-items: center;
	margin-right: 20px;
}
</style>