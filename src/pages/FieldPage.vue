<template>
	<div class="nav flex items-center flex-col justify-start">
		<!-- <div class="nav-label flex mt-5">
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
		</div> -->
		<!-- <LeftTab></LeftTab> -->
	</div>
	<div class="con center">
		<div class="head">
			<div class="image-box">
				<el-skeleton animated :loading="loading">
					<template #default>
						<img :src="metadata.image_url" class="image">
					</template>
					<template #template>
						<el-skeleton-item variant="image" style="width: 100px;height: 140px;margin-top: 20px;" />
					</template>
				</el-skeleton>
			</div>
			<div class="info">
				<el-skeleton animated :loading="loading">
					<template #default>
						<div class="title">{{ metadata.display_name }}</div>
					</template>
					<template #template>
						<el-skeleton-item variant="text" style="width: 100px;height: 30px; float: left" />
					</template>
				</el-skeleton>
				
				<div class="divide"></div>
				<div>
					<el-skeleton animated :loading="loading">
						<template #default>
							<span class="intro"><span class="field-description">描述：</span>{{ metadata.description }}</span>
						</template>
						<template #template>
							<el-skeleton-item variant="text" style="width: 300px;" />
						</template>
					</el-skeleton>
				</div>
				<div>
					<el-skeleton animated :loading="loading">
						<template #default>
							<span class="index mr-1.5"><span class="field-description">指数：</span>{{ metadata.summary_stats.h_index }}</span>
							<span class="cite"><span class="field-description">被引用次数：</span>{{ metadata.cited_by_count }}</span>						</template>
						<template #template>
							<el-skeleton-item variant="text" style="width: 300px;" />
						</template>
					</el-skeleton>
					
				</div>
			</div>
		</div>
		
		<div class="list">
			<el-divider content-position="right">论文</el-divider>
			<div class="layout">
				<el-skeleton :rows="5" animated  style="width: 100%" :loading="loading">
					<template #template>
						<div v-for=" in [0,1,2,3]">
							<el-skeleton-item variant="text" style="height: 25px;" />
							<el-skeleton-item variant="text" style="width: 70%;height: 25px; float: left;" />
							<el-skeleton-item variant="text" class="mt-2" style="width: 60%; float: left;" />
							<el-skeleton-item variant="text" class="mt-2 mb-3" style="width: 60%; float: left;" />
						</div>
					</template>
					<template #default>
						<div class="paper flex flex-row align-top" v-for="item,index in works">
							<div class="content">
								<div @click="go('/result',{doi:getLastUrl(item.id)})" class="article-title">{{ (currentPage * 10 + index -9)+" 、"+item.display_name }}</div>
								<div class="keys flex flex-wrap start-1 items-center">
									<span class="key-label">关键词：</span><span class="key mr-2" v-for="key in item.keywords.slice(0,3)" >{{ key.keyword }}</span>
									<span class="key-label">作者：</span><span class="author mr-2" v-for="author in item.authorships.slice(0,3)">{{ author.author.display_name }}</span>
								</div>
								<div class="keys flex flex-wrap start-1 items-center">
									<span class="key-label">发表日期：</span><span class="mr-2">{{ item.publication_date }}</span>
									<span class="key-label">被引次数：</span><span>{{ item.cited_by_count }}</span>
								</div>
							</div>
						</div>
					</template>
				</el-skeleton>
			</div>

			<el-pagination
			:hide-on-single-page="true"
			:total="metadata.works_count"
			:page-size="10"
			v-model:current-page="currentPage"
			@current-change="updateWork(currentPage)"
			layout="prev, pager, next"
			class="pagina"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { getFieldData,getFieldWorks } from '@/API'
import LeftTab from "@/components/ResultPage/LeftTab.vue"

export default defineComponent({
	name:"FieldPage",
	mounted:function(){
		// @ts-ignore
		getFieldData(this.$route.query.field).then(res=>{
			this.metadata = res.data;
			this.works = res.data.works.results;
			this.loading = false;
			this.metadata.works_count = res.data.works.meta.count;
		})
	},
	components:{
		IconPicture,
		LeftTab,
	},
	data(){
		return {
			loading:true,
			works: [] as {
				"id": string,
				"doi": string,
				title: string,
				display_name: string,
				"publication_year": number,
				"publication_date": string,
				"cited_by_count": number,
				"authorships": [
					{
						"author_position":string,
						"author": {
							"id": string,
							"display_name": string
						},
						"countries": string[]
					}
				],
				"keywords": [
					{
						"keyword": string,
						"score": number
					},
				],
			}[],
			currentPage:1,
			metadata:{} as {
				"id": string,
				"wikidata": string,
				"display_name": string,
				"level": number,
				"description": string,
				"works_count": number,
				"cited_by_count": number,
				"summary_stats": {
					"twoyr_mean_citedness": number,
					"h_index": number,
					"i10_index": number
				},
				"image_url": string,
				"works_api_url": string,
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
		go(path:string,query:any){
			this.$router.push({path:path,query:query})
		},
		updateWork(currentPage:number){
			// console.log("sbdsfhf")
			this.loading = true;
			getFieldWorks(this.metadata.works_api_url,currentPage).then(res=>{
				this.works = res.data.results;
			})
			this.loading = false;
		},
		getLastUrl(url:string):string{
			return url.substring(url.lastIndexOf('/')+1)
		},
	}
})

</script>

<style scoped>
.nav {
	height: 100vh;
	position: absolute;
	width: 200px;
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
	width: 100%;
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