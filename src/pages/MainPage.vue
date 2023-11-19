<template>
	<div class="center-back">
		<div class="search">
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
				<div class="advanced">高级检索</div>
				<div class="scholar">检索学者</div>
			</div>
		</div>
		<div class="fliter">

		</div>
	</div>
	<div class="display">
		<div class="index bg-pink-300">
			<div class="title">科研机构排名</div>

		</div>
		<div class="hot bg-pink-300">
			<div class="title">科研热点</div>
		</div>
		<div class="spec bg-pink-300">
			<div class="title">领域推荐</div>
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
		}
	}
})
</script>

<style scoped>
.center-back {
	width: 100%;
	height: 50vh;
	background-image: url("https://pubscholar.cn/static/app-banner-light.webp");
}
.search {
	display: flex;
	position: relative;
	flex-direction: row;
	padding-top: 5%;
	width: 70vw;
	left: 20vw;
	/* height: 50px; */
}
.display {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: -8vh;
}
.hot {
	width: 30vw;
	margin: 0px 5px;
	height: 50vh;
	background-color: rgb(173, 218, 250);
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
.index,
.spec {
	width: 25vw;
	height: 50vh;
	background-color: rgb(173, 218, 250);
}
.title {
	height: 8vh;
	border-bottom: 1px dotted black;
	font-size: larger;
	text-align: left;
	padding: 5px 0 0 5px;
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
    background: url(https://piccache.cnki.net/kdn/index/kns8/nimages/icon-jt.png) right 0 no-repeat;
}
.exten div:hover {
	color: blue;
	cursor: pointer;
}
</style>
