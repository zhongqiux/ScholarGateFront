<template>
	<div class="center-back">
		<div class="search center">
			<div class="sort-default" @click="selecting = true">
				<el-dropdown>
					<div class="op outline-none">
						<span>{{ store.option.label+" " }}</span>
						<i class="sort-icon">▼</i>
					</div>
					<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="item in options" @click="store.option = item">{{ item.label }}</el-dropdown-item>
					</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			
			<el-dropdown ref="dropdown1" trigger="contextmenu" placement="bottom-start">
				<input class="search-input"  ref="focus1" @input="getSuggestion()" autocomplete="off" id="txt_SearchText" name="txt_SearchText" type="text" placeholder="中文文献、外文文献" maxlength="100" style="color: rgb(125, 125, 125);" v-model="store.serInput" @keyup.space.native="doSomething($event)" @keyup.enter.native="go('/explorePaper',{key:store.option.value,value:store.serInput})">
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="item in store.suggestions" @click="store.serInput = item.display_name"><div style="max-width: 300px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{ item.display_name }}</div></el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
			<input class="search-btn" type="button" @click="go('/explorePaper',{key:store.option.value,value:store.serInput})">
			<div class="exten">
				<div class="advanced" @click="go('/exploreInstituition',{key:'institutions',value:''})">检索机构<span class="w-2 inline-block"></span><svg t="1700095260301" class="icon w-2 h-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3992" width="200" height="200"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" fill="#999999" p-id="3993"></path></svg></div>
				<div class="scholar" @click="go('/exploreAuthor',{key:'authors',value:''})">检索学者<span class="w-2 inline-block"></span><svg t="1700095260301" class="icon w-2 h-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3992" width="200" height="200"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" fill="#999999" p-id="3993"></path></svg></div>
			</div>
		</div>
	</div>
	<div class="links">
		<ul class="link-con">
			<li>学术成果管理</li> 
			<li><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 0px; margin-right: 0px;"><path d="M1 1L6 6.00031L1 11" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></li>
			<li>学术成果查询</li> 
			<li><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 0px; margin-right: 0px;"><path d="M1 1L6 6.00031L1 11" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></li>
			<li>工作台</li>
		</ul>
	</div>
	
	<div class="display center">
		<div class="papers">
			<div class="title">热门文章</div>
			<div class="layout">
				<div class="paper mb-4" v-for="item in rpapers" >
					<h3 class="article-title" @click="go('/result',{id:getLastUrl(item.id)})">{{ item.title }}</h3>
					<div class="keys flex items-center flex-wrap">
						<span class="key-label">关键词</span><div class="author mr-2" v-for="key in item.keywords">{{ key.keyword }}</div>
						<span class="key-label">作者</span><span class="author mr-2" v-for="aut in item.authorships">{{ aut.author.display_name }}</span>
					</div>
					<div class="flex flex-row items-start">
						<span class="key-label">日期</span><span class="author">{{ item.publication_date }}</span>
						<span class="key-label">领域</span>
					</div>
				</div>
			</div>
		</div>
		<div class="index">
			<div class="title">热点领域<span class="w-10 inline-block"></span><span class="text-sm hover:text-blue-500 hover:cursor-pointer" @click="go('/hotInformation/field',{})">查看更多</span></div>
			<el-table :data="fields" :fit="true" :strip="true">
				<el-table-column type="index" width="50" />
				<el-table-column prop="display_name" label="领域">
					<template #="scope">
						<div class="hover:cursor-pointer hover-blue" @click="go('/field',{field:getLastUrl(fields[scope.$index].id)})">{{fields[scope.$index].display_name }}</div>
					</template>
				</el-table-column>
				<el-table-column prop="cited_by_count" label="概念引用数"></el-table-column>
			</el-table>
			<!-- <HotField></HotField> -->
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getFields,autoComplete,completeBy,getHotWorks } from '@/API'
import { useHeaderStore } from "@/store"
import HotField from "@/pages/HotInformation/Field.vue"

export default defineComponent({
	name:"MainPages",
	mounted:function(){
		this.getHotFields();
		this.updateHotWorks();
	},
	components:{
		HotField,
	},
	data(){
		return {
			input:'',
			active:1,
			options: [
				{ value: completeBy.works,label: '关键词',},
				{ value: completeBy.concepts,label: '领域',},
				{ value: completeBy.institutions,label: '机构',},
				{ value: completeBy.authors,label: '作者',},
			],
			value:'123',
			selecting:false,
			rpapers:[] as {
				title:string,
				publication_date:string,
				keywords:{keyword:string}[],
				concepts:{display_name:string, id:string}[],
				authorships:{
					author:{display_name:string, id:string},
				}[],
				id:string,
			}[],
			fields:[] as {
				cited_by_count: number,
				id: string,
				display_name: string,
			}[],
			clock:null,
			store:useHeaderStore()
		}
	},
	methods:{
		join(value:Array<string>):string{
			let tem:string = '';
			value.forEach(element => {
				tem = tem+element
			});
			return tem;
		},
		print(message:string):void{
			console.log(message);
		},
		go(path:string,query:any){
			this.$router.push({path:path,query:query})
			// this.$router.push({name:'researcher',params:{doi:'123'}})
		},
		getSuggestion(){
			if(this.clock)
				// @ts-ignore
				clearTimeout(this.clock);
			if(this.store.serInput != ''){
				// @ts-ignore
				this.clock = setTimeout(()=>{
					autoComplete(this.store.option.value,this.store.serInput).then(res=>{
						this.store.suggestions = res.data.results
						console.log(this.store.suggestions)
						if(this.store.suggestions.length > 0)
							// @ts-ignore
							this.$refs.dropdown1.handleOpen()
					})
				},500)
			}
		},
		getLastUrl(url:string):string{
			return url.substring(url.lastIndexOf('/')+1)
		},
		getHotFields(){
			getFields(1).then(res=>{
				// @ts-ignore
				this.fields = res.data.results;
			})
		},
		updateHotWorks(){
			getHotWorks().then(res=>{
				console.log(res)
				this.rpapers = res.data.results
			})
		},
		doSomething(event){
			this.store.serInput+=' ';
			setTimeout(()=>{event.target.focus();},300)
		}
	}
})
</script>

<style scoped>
h3,p {
	margin: 0;
}
.center {
	position: relative;
	width: 1024px;
	margin: 0 auto;
}
.center-back {
	width: 100%;
	height: 60vh;
	background: url("https://pubscholar.cn/static/app-banner-light.webp") no-repeat;
	background-size: cover;
	position: relative;
}
.links {
	width: 100%;
	background-color: rgba(235, 244, 255,1);
	list-style: none;
}
.link-con {
	justify-content: space-around;
	color: black;
	font-size: large;
	display: flex;
	flex-direction: row;
	list-style: none;
	margin: 0;
	height: 80px;
	line-height: 80px;
}
.display {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.index {
	width: 30%;
}
.field-column:hover {
	background-color: #cfcfcf;
}
.hover-blue:hover {
	color: #409eff;
}
.search {
	display: flex;
	position: relative;
	flex-direction: row;
	justify-content: center;
	padding-top: 5%;
	/* height: 50px; */
}

.sort-default {
	height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
	padding: 0 10px;
	background-color: rgb(255,255,255);
	/* border: 1px solid black; */
	/* border-right: 1px solid grey; */
}
.sort-icon {
	display: inline-block;
    vertical-align: middle;
    width: 8px;
    height: 6px;
    text-indent: -9999em;
    background: url(https://piccache.cnki.net/kdn/index/kns8/nimages/icon-sort.png) no-repeat 0 -50px
}
.sort-default .el-dropdown {
	vertical-align: middle;
}

.search-input {
	float: left;
    width: 475px;
    height: 20px;
    padding: 15px 0 15px 20px;
    font-size: 14px;
    color: #7d7d7d;
    line-height: 20px;
    border: none;
    background-color: #fff;
	outline: none ;
	/* border: 1px solid black; */
	/* border-left: 0px solid black; */
}
.search-btn {
	background-image: url(https://piccache.cnki.net/kdn/index/kns8/nimages/btn-search1.png);
	float: right;
    width: 58px;
    height: 50px;
    border: none;
    border-radius: 0 2px 2px 0;
    outline: none;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    cursor: pointer;
}
.exten {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 10px;
}
.exten div {
	display: inline-block;
    padding-right: 20px;
    line-height: 23px;
    font-family: Microsoft Yahei;
	font-size: small;
    /* color: #fff; */
}
.exten div:hover {
	color: blue;
	cursor: pointer;
}
.papers {
	/* background-color: rgb(235, 244, 255); */
	/* height: 250px; */
	/* padding-right: 20px; */
	width: 65%;
}
.title {
	height: 80px;
	/* border-bottom: 1px dotted black; */
	font-size: larger;
	text-align: left;
	padding: 5px 0 0 5px;
	line-height: 80px;
}
.title::before {
	border-radius: 5px;
	background-color: #9acff4;
	content: "1";
	margin-right: 5px;
	color: #9acff4;
}
.layout {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
}
.key {
	font-size: 14px;
	padding: 1px 8px;
	border: 1px solid rgba(75,91,118,.5);
	border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 4px;
	margin-left: 5px;
	color: #5f7292;
}
.key-label {
	font-size: 14px;
	color:#8590a6;
	margin-right: 5px;
}
.article-title {
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
	text-align: left;
	font-weight: 400;
    color: #002076;
    letter-spacing: 1px;
    font-size: 18px;
}
.desc {
	color: #4b5b76;
    margin-bottom: 10px;
	font-size: 14px;
    /* max-height: 25px; */
    min-height: 25px;
	text-align: left;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.author {
    font-size: 13px;
	transition: opacity .3s;
}
.paper {
	width: 100%;
	align-items: center;
	padding: 5px;
}
</style>
