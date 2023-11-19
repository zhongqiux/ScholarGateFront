<template>
	<div class="center-back">
		<div class="search center">
			<div class="sort-default" @click="selecting = true">
				<span>{{ option.label+" " }}</span>
				<i class="sort-icon">▼</i>
				<ul class="pop-options" v-show="selecting" @mouseleave="selecting = false">
					<li v-for="item in options" @click="option = item">{{ item.label }}</li>
				</ul>
			</div>
			
			<input class="search-input" id="txt_SearchText" name="txt_SearchText" type="text" autocomplete="off" placeholder="中文文献、外文文献" value="" maxlength="100" style="color: rgb(125, 125, 125);">
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
					<!-- <img src="@/assets/paper.svg" class="w-20"> -->
					<h3 class="article-title">{{ item.title }}</h3>
					<p class="desc">{{ item.title }}</p>
					<div class="keys flex">
						<div class="key" v-for="key in item.keys">{{ key }}</div>
					</div>
					<div class="authos flex">
						<span class="author">{{ join(item.authors) }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="index">
			<div class="title">科研机构排名<span class="w-10 inline-block"></span><span class="text-sm hover:text-blue-500 hover:cursor-pointer">查看更多</span></div>
			<table class="table">
				<!-- head -->
				<thead>
				<tr>
					<th></th>
					<th>Name</th>
					<th>论文总数</th>
				</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>1</th>
						<td>Cy Ganderton</td>
						<td>100</td>
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
				{ value: '123',label: '主题',},
				{ value: '456',label: '关键词',}
			],
			value:'123',
			selecting:false,
			option:{ value: '123',label: '主题',},
			rpapers:[{title:"Human-like systematic generalization through a meta-learning neural network",desc:"The power of human language and thought arises from systematic compositionality—the algebraic ability to understand and produce novel combinations from known components. ",keys:["AI","算法"],authors:["张三"]},
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
	width: 40%;
}
.search {
	display: flex;
	position: relative;
	flex-direction: row;
	justify-content: center;
	padding-top: 5%;
	/* height: 50px; */
}
.pop-options{
	list-style: none;
	position: absolute;
	margin: 0;
	padding: 5px 0;
	background-color: white;
	margin-top: 5px;
}
.pop-options li {
	cursor: pointer;
	height: 25px;
	line-height: 25px;
	padding: 0 10px;
}
.pop-options li:hover {
	background-color: #c4c4c4;
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
	padding-right: 20px;
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
.article-title {
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    max-height: 54px;
    min-height: 54px;
	text-align: left;
}
.desc {
	color: #4b5b76;
    margin-bottom: 10px;
    /* max-height: 25px; */
    min-height: 25px;
	text-align: left;
}
.author {
    font-size: 13px;
	transition: opacity .3s;
}
.paper {
	width: 100%;
	align-items: center;
}
</style>
