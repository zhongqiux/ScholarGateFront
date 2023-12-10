<template>
	<div class="nav flex items-center flex-col justify-start">
		<div class="nav-label flex mt-5">
			<div class="icon">
				<svg viewBox="0 0 1024 1024" width="16" height="16" class="Icon"><path d="M641.2 958.5c-20.3 0-40.2-7.1-56.2-20.6L357.8 747c-18.9-15.9-21.4-44.1-5.5-63 15.9-18.9 44.1-21.3 63-5.5l224.9 189 198.6-711.4L191.1 490l105 88.2c18.9 15.9 21.4 44.1 5.5 63-15.9 18.9-44.1 21.3-63 5.5l-107.2-90.1c-22.5-18.9-33.9-47.6-30.7-76.7 3.3-29.2 20.8-54.6 46.9-68l656-338.1c31.1-16 67.3-12.3 94.4 9.8 27.2 22.1 38.2 56.8 28.8 90.5L725.6 894.5c-8 28.8-29.9 51.2-58.4 60.1-8.6 2.6-17.4 3.9-26 3.9z"></path><path data-v-c2d48516="" d="M376.3 958.5c-24.7 0-44.7-20-44.7-44.7v-205c0-10.5 3.7-20.6 10.4-28.6l492.8-591c15.8-19 44-21.5 63-5.7s21.5 44 5.7 63L421.1 725v188.7c0 24.7-20.1 44.8-44.8 44.8z"></path></svg>
			</div>
			<div class="text text-nav-blue ml-2">
				页面导航
			</div>
		</div>
		<div class="nav-pos relative">
			<div class="PageNavigator__item is-active"><div class="PageNavigator__itemTitle">基本信息</div></div>
			<div class="PageNavigator__item is-active"><div class="PageNavigator__itemTitle">基本信息</div></div>
			<div class="PageNavigator__item is-active"><div class="PageNavigator__itemTitle">基本信息</div></div>
		</div>
	</div>
	<div class="con center">
		<div class="head">
			<div class="image-box">
				<img :src="metadata.image_url" class="image">
			</div>
			<div class="info">
				<div class="title">{{ metadata.display_name }}</div>
				<div class="divide"></div>
				<div>
					<span class="intro"><span class="field-description">描述：</span>{{ metadata.description }}</span>
				</div>
				<div>
					<span class="index mr-1.5"><span class="field-description">指数：</span>{{ metadata.summary_stats.h_index }}</span>
					<span class="cite"><span class="field-description">被引用次数：</span>{{ metadata.cited_by_count }}</span>
				</div>
			</div>
		</div>
		
		<div class="list">
			<el-divider content-position="right">论文总数</el-divider>
			<div class="layout">
				<div class="paper flex flex-row align-top" v-for="item,index in works">
					<div class="rank mr-3">
						{{ index+1 }}
					</div>
					<div class="content">
						<div class="article-title">{{ item.display_name }}</div>
						<div class="keys flex start-1 items-center">
							<span class="key-label">关键词：</span><span class="key mr-2" v-for="key in item.keywords">{{ key.keyword }}</span>
						</div>
						<div class="keys flex start-1 items-center">
							<span class="key-label">作者：</span><span class="author mr-2" v-for="author in item.authorships">{{ author.author.display_name }}</span>
							<span class="key-label">发表日期：</span><span class="mr-2">{{ item.publication_date }}</span>
							<span class="key-label">被引次数：</span><span>{{ item.cited_by_count }}</span>
						</div>
					</div>
				</div>
			</div>

			<el-pagination
			:hide-on-single-page="true"
			:total="metadata.works_count"
			:page-size="10"
			v-model:current-page="currentPage"
			@current-page="updateWork(currentPage)"
			layout="prev, pager, next"
			class="pagina"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Picture as IconPicture } from '@element-plus/icons-vue'

export default defineComponent({
	name:"FieldPage",
	components:{
		IconPicture,
	},
	data(){
		return {
			works:[
			{
				"id": "https://openalex.org/W4293247451",
				"doi": "https://doi.org/10.1016/0003-2697(76)90527-3",
				"title": "A rapid and sensitive method for the quantitation of microgram quantities of protein utilizing the principle of protein-dye binding",
				"display_name": "A rapid and sensitive method for the quantitation of microgram quantities of protein utilizing the principle of protein-dye binding",
				"publication_year": 1976,
				"publication_date": "1976-05-01",
				"cited_by_count": 180075,
				"authorships": [
					{
						"author_position": "first",
						"author": {
						"id": "https://openalex.org/A5021181975",
						"display_name": "Marion M. Bradford"
						},
						"countries": [
						"US"
						]
					}
				],
				"keywords": [
					{
						"keyword": "microgram quantities",
						"score": 0.4242
					},
					{
						"keyword": "protein-dye",
						"score": 0.25
					}
				],
			},
			],
			currentPage:1,
			metadata:{
				"id": "https://openalex.org/C71924100",
				"wikidata": "https://www.wikidata.org/wiki/Q11190",
				"display_name": "Medicine",
				"level": 0,
				"description": "field of study for diagnosing, treating and preventing disease",
				"works_count": 60642777,
				"cited_by_count": 641305635,
				"summary_stats": {
					"twoyr_mean_citedness": 1.8344352436383313,
					"h_index": 2752,
					"i10_index": 11276630
				},
				"image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Asklepios.3.jpg",
			}
		}
	},
	methods:{
		join(value:Array<any>):string{
			let tem:string = '';
			value.forEach(element => {
				tem = tem+element.author.display_name
			});
			return tem;
		},
		updateWork(currentPage:number){
			console.log(currentPage)
		}
	}
})

</script>

<style scoped>
.nav {
	height: 100vh;
	position: absolute;
}
.head {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
}
.text {
	font-size: 14px;
}
.center {
	position: relative;
	width: 960px;
	left: 10vw;
}
.divide {
	height: 1px;
    width: 100%;
    background-color: #d5d8e9;
	margin: 20px 0 14px;
}
.field-description {
	color: #8590a6;
    margin-right: 4px;
	font-weight: 500;
    font-size: 15px;
}
.image {
	width: 100px;
	height: 140px;
	margin-top: 20px;
}
.title {
	font-size: 22px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 32px;
    color: #2f3a91;
}
.pagina {
	width: 200px;
	margin: 0 auto;
	margin-top: 20px;
}
.image-box {
	width: 20%;
	height: 100%;
}
.info {
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items:baseline;
}
.intro {
	font-size: 13px;
	text-align: left;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.PageNavigator__item::after {
	content: " ";
    display: block;
    position: absolute;
    left: 19px;
    top: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 2px;
    height: 40px;
    margin-top: 12px;
    background: rgba(133,144,166,.12);
}
.PageNavigator__item::before {
	content: " ";
    position: absolute;
    background-color: #8590a6;
    display: inline-block;
    border-radius: 50%;
    top: 12px;
    margin-right: 12px;
    left: 16px;
    width: 6px;
    height: 6px;
}
.PageNavigator__item {
	box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    padding-left: 30px;
    font-weight: 500;
    position: relative;
    height: 30px;
    line-height: 30px;
}
.PageNavigator__itemTitle {
	padding: 0 10px;
    cursor: pointer;
	font-size: 14px;
}
.layout {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	width: 80%;
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
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.paper {
	width: 100%;
	align-items: center;
	padding: 5px;
}
.keys span {
	color: #8590a6;
    font-size: 14px;
    margin-top: 6px;
}
</style>