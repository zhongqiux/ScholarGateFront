<template>
<div class="header" >
	<div class="icon float-left hover:cursor-pointer" @click="go('/index')">
		<img src="@/assets/icon.png" class="w-60 h-17">
	</div>
	<div class="routes" v-show="store.display">
		<div :class='(active-1 == 0)?"active header-item":"header-item"' @click="[go(itemList[0].path),active = 0]">{{ itemList[0].value }}</div>
		<div :class='(active-1 == 1)?"active header-item":"header-item"' @click="[go(itemList[1].path),active = 1]">{{ itemList[1].value }}</div>
		<div :class='(active-1 == 2)?"active header-item":"header-item"' v-if="userStore.Identity == '3'" @click="[go(itemList[2].path),active = 3]">{{ itemList[2].value }}</div>
	</div>
	<div class="search" v-show="store.search && store.display">
		<el-dropdown :disabled="store.inAuthorPage || store.inInstitutionPage">
			<div class="flex flex-row items-center outline-none">
				<input type="text" v-model="store.option.label" readonly autocomplete="off" placeholder="请选择" class="base-input_inner">
				<svg t="1703139986629" class="ico" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5147" width="10" height="10"><path fill="#c0c4cc" d="M878.592 250.88q29.696 0 48.128 11.264t24.576 29.696 0 41.472-26.624 45.568q-82.944 92.16-159.744 180.224t-148.48 164.864q-19.456 20.48-45.568 31.744t-53.76 11.776-53.248-8.704-43.008-28.672q-39.936-44.032-82.944-90.112l-88.064-92.16q-43.008-46.08-85.504-90.624t-79.36-86.528q-17.408-19.456-22.528-40.448t1.024-38.4 23.552-28.672 45.056-11.264q35.84 0 98.816-0.512t137.728-0.512l153.6 0 150.528 0 125.952 0 79.872 0z" p-id="5148"></path></svg>
			</div>
			<template #dropdown>
				<el-dropdown-item v-for="item in options" @click="store.option = item">{{ item.label }}</el-dropdown-item>
			</template>
		</el-dropdown>
		<el-dropdown ref="dropdown2" trigger="contextmenu" placement="bottom-start">
			<input type="text" autocomplete="off" @input="getSuggestion()" v-model="store.serInput" placeholder="搜索你感兴趣的内容..." class="top_input" @focus="store.search_active = true" @keyup.space.native="doSomething($event)" @keyup.enter.native="autoPush({key:store.option.value,value:store.serInput})">
			<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="item in store.suggestions" @click="store.serInput = item.display_name"><div style="max-width: 300px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ item.display_name }}</div></el-dropdown-item>
					</el-dropdown-menu>
				</template>
		</el-dropdown>
	</div>
	<div class="ava">
		<div v-show="userStore.islogin" @click="go('/messages')" class="hover:cursor-pointer">
			<el-tooltip effect="dark" content="消息" placement="bottom">
				<el-badge :value="messageCnt" :max="99" :hidden="noMess" class="item">
					<el-icon color="#777575" class="no-inherit" :size="20" style="vertical-align: middle">
						<svg width="18" height="18" viewBox="0 0 24 24" class="ZDI ZDI--BellFill24 css-7dgah8" fill="white"><path fill-rule="evenodd" d="M9.723 21.271c0-.42.34-.76.76-.76h3.043a.76.76 0 0 1 0 1.521h-3.043a.76.76 0 0 1-.76-.76Z" clip-rule="evenodd"></path><path d="M11.153 3.115c0-.618.376-1.115.844-1.115.469 0 .845.499.845 1.115v.183c3.997.369 7.012 4.117 7.024 8.515V17.468h.253a.76.76 0 1 1 0 1.521H3.891a.76.76 0 0 1 0-1.521h.253V11.813c.011-4.392 3.02-8.137 7.009-8.514v-.184Z"></path></svg>
					</el-icon>
				</el-badge>
			</el-tooltip>
		</div>
		<span class="w-5"></span>
		<LoginButton class="outline-none" v-show="!userStore.islogin" @click="go('/login')"></LoginButton>
		<el-dropdown v-show="userStore.islogin" @click="go((userStore.Auth=='3')?'/admin/board': '/person')">
			<GitAvatar :num="userStore.avatar" class="outline-none" ></GitAvatar>
			<template #dropdown>
				<el-dropdown-menu>
				<el-dropdown-item @click="go('/person')">主页</el-dropdown-item>
				<el-dropdown-item v-if="!userStore.islogin" @click="go('/login')">登录</el-dropdown-item>
				<el-dropdown-item v-else @click="logout()">登出</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
	
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { getMessageList } from '@/API'
import { useHeaderStore,useUserStore } from "@/store"
import GitAvatar from "@/components/small/GitAvatar.vue"
import { autoComplete,completeBy } from '@/API'
import LoginButton from '@/components/small/LoginButton.vue'
import * as Type from "@/API/type"
// let store = useHeaderStore()

export default defineComponent({
	name:"Header",
	components:{
		GitAvatar,
		LoginButton
	},
	created() {
		this.APIrefreshList()
	},
	mounted() {
		setInterval(this.APIrefreshList, 1000)
	},
	data(){
		return {
			itemList:[{value:'首页 ',path:'/'},{value:'关系网络',path:'/relation'},{value:'工作台',path:'/admin/board'}],
			input:'',
			active:1,
			options: [
				{ value: completeBy.works,label: '关键词',},
				{ value: completeBy.concepts,label: '领域',},
				{ value: completeBy.institutions,label: '机构',},
				{ value: completeBy.authors,label: '作者',},
			],
			value:'123',
			UserFilled,
			store : useHeaderStore(),
			userStore:useUserStore(),
			clock:null,
			message_list:[{ id: '7', userId: '1', name: '122342343', content: '内容', time: '17:40', isRead: true, },],
			messageCnt:0,
			noMess:true,
		}
	},
	
	methods:{
		APIrefreshList(): void {
			getMessageList().then((res: Type.GetMessageListReturn) => {
				console.log(res.data)
				if (res.flag == true) {
					this.message_list = res.data
					var cnt = 0
					this.message_list.forEach(function (item) {
						if (!item.isRead) {
							cnt += 1
						}
					})
					if (cnt==0) {
						this.noMess=true
					} else {
						this.noMess=false
						this.messageCnt=cnt
					}
				}
				
			}).catch(err => {
				console.log(err)
			})
		},

		logout() {
			this.userStore.outdate = new Date('1919-5-4').getTime(),
			this.userStore.userId = -1
			this.userStore.userName = ''
			this.userStore.token = ''
			this.userStore.email = ''
			this.userStore.avatar = -1
			ElMessage({
				message: `登出成功！`,
				type: 'success',
			})
			this.$router.push('/')
		},

		go(path:string){
			this.$router.push(path)
		},
		push(path:string,query:any){
			this.$router.push({path:path,query:query})
		},
		autoPush(query:any){
			let path:string = '/explorePaper';
			if(this.store.inAuthorPage){
				path = '/exploreAuthor'
			}else if(this.store.inInstitutionPage){
				path = '/exploreInstituition'
			}
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
		},
		doSomething(event){
			this.store.serInput+=' ';
			setTimeout(()=>{event.target.focus();},300)
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
    padding: 0 12px 0 0;
    
    text-align: center;
	outline: none;
	cursor: pointer;
	width: 70px;
	color: white;
}
.ico {
	margin-left: -20px;
	margin-right: 10px;
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