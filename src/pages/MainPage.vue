<template>
	<div class="center-back">
		<div class="search center">
			<div class="sort-default" @click="selecting = true">
				<el-dropdown>
					<div class="op outline-none">
						<span>{{ option.label+" " }}</span>
						<i class="sort-icon">▼</i>
					</div>
					<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="item in options" @click="option = item">{{ item.label }}</el-dropdown-item>
					</el-dropdown-menu>
					</template>
				</el-dropdown>
			</div>
			
			<input class="search-input" id="txt_SearchText" name="txt_SearchText" type="text" placeholder="中文文献、外文文献" maxlength="100" style="color: rgb(125, 125, 125);" v-model="serInput" @keyup.enter.native="go('/explore',{key:option.value,value:serInput})">
			<input class="search-btn" type="button" value="">
			<div class="exten">
				<div class="advanced">高级检索<span class="w-2 inline-block"></span><svg t="1700095260301" class="icon w-2 h-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3992" width="200" height="200"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" fill="#999999" p-id="3993"></path></svg></div>
				<div class="scholar">检索学者<span class="w-2 inline-block"></span><svg t="1700095260301" class="icon w-2 h-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3992" width="200" height="200"><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" fill="#999999" p-id="3993"></path></svg></div>
			</div>
		</div>
	</div>
	<div class="links">
		<ul class="link-con">
			<li>学术成果管理</li> 
			<li><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 0px; margin-right: 0px;"><path d="M1 1L6 6.00031L1 11" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></li>
			<li>学术成果查询</li> 
			<li><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 0px; margin-right: 0px;"><path d="M1 1L6 6.00031L1 11" stroke="black" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></li>
			<li>增值服务</li>
		</ul>
	</div>
	
	<div class="display center">
		<div class="papers">
			<div class="title">热门文章<span class="w-10 inline-block"></span><span class="text-sm hover:text-blue-500 hover:cursor-pointer">查看更多</span></div>
			<div class="layout">
				<div class="paper" v-for="item in rpapers">
					<h3 class="article-title">{{ item.title }}</h3>
					<p class="desc">{{ item.abstract }}</p>
					<div class="flex flex-row">
						<div class="keys flex items-center">
							<span class="key-label">关键词</span><div class="key" v-for="key in item.keywords">{{ key }}</div>
						</div>
						<div class="authos flex items-center">
							<span class="key-label">作者</span><span class="author">{{ join(item.authorNames) }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="index">
			<div class="title">热点领域<span class="w-10 inline-block"></span><span class="text-sm hover:text-blue-500 hover:cursor-pointer">查看更多</span></div>
			<table class="table">
				<thead>
				<tr>
					<th></th>
					<th>领域名</th>
					<th>概念引用总数</th>
				</tr>
				</thead>
				<tbody>
					<tr v-for="field,index in fields">
						<th>{{ index+1 }}</th>
						<td class="pt-0 pb-0">{{ field.display_name }}</td>
						<td class="pt-0 pb-0">{{ field.cited_by_count }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name:"MainPages",
	data(){
		return {
			input:'',
			active:1,
			options: [
				{ value: 'topic',label: '主题',},
				{ value: 'key',label: '关键词',},
				{ value: 'title',label: '篇名',}
			],
			value:'123',
			selecting:false,
			option:{ value: '123',label: '主题',},
			rpapers:[{title:"机器学习模型辅助抗菌肽设计",abstract:"抗菌肽是一类具有抗菌活性的小分子多肽，其研究开发具有重要的学术意义和产业前景。与传统从自然界中发现和分离抗菌肽等实验手段相比，基于模型预测和设计的方法具有高效快捷、成本低廉等特点，是今后抗菌肽研发的趋势。但由于抗菌肽序列及其活性之间存在着异常复杂的非线性映射关系，由序列准确预测其活性仍然十分困难。抗菌肽序列是如何决定其抑菌活性的？高活性序列存在哪些关键特征？这是高活性抗菌肽设计需要解决的关键科学问题。为回答这些问题，本项目拟采用BP神经网络、支持向量机、深度学习等非线性映射能力很强的机器学习算法来构建高效的抗菌肽序列-活性定量预测模型，并基于模型的精准预测，实现高效低毒的新抗菌肽设计。本研究建立的模型、方法和工具有望为一类共性科学问题（即序列-活性之间的函数关联）提供新的解决方案，亦能为抗菌肽产品的研发提供理论依据和平台支持。",keywords:["AI","算法"],authorNames:["张三"],publishDate:''},
			],
			serInput:'',
			fields:[
				{
					"cited_by_count": 641305635,
					"id": "https://openalex.org/C71924100",
					"wikidata": "https://www.wikidata.org/wiki/Q11190",
					"display_name": "Medicine",
				},
				{
					"cited_by_count": 641305635,
					"id": "https://openalex.org/C71924100",
					"wikidata": "https://www.wikidata.org/wiki/Q11190",
					"display_name": "Medicine",
				}
			],
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
.keys,
.authors {
	width: 50%;
}
</style>
