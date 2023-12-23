<template>
	<div class="nav flex items-center flex-col justify-start">
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
				<div>
					<el-skeleton animated :loading="loading">
						<template #default>
							<span class="index mr-1.5"><span class="field-description">相关领域：</span><span class="mr-2 relatedCon" v-for="rank in 3"  @click="go('/field',{field:getLastUrl(metadata.related_concepts[rank].id)}),init(getLastUrl(metadata.related_concepts[rank].id))">{{ metadata.related_concepts[rank].display_name }}</span></span>
						</template>
						<template #template>
							<el-skeleton-item variant="text" style="width: 300px;" />
						</template>
					</el-skeleton>
				</div>
			</div>
		</div>
		<div class="page_divider flex flex-row items-center mt-4" v-show="!loading">
			<p class="divider_title">概念引用数</p>
			<p class="line"></p>
		</div>
		<div class="graph" style="height: 200px;width: 100%;">
			<div ref="gg" id="gg" style="height: 200px;width: 960px;" v-show="!loading"></div>
		</div>
		<div class="page_divider flex flex-row items-center mt-4" v-show="!loading">
			<p class="divider_title">论文</p>
			<p class="line"></p>
		</div>
		<div class="list">
			
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
								<div @click="go('/result',{id:getLastUrl(item.id)})" class="article-title">{{ (currentPage * 10 + index -9)+" 、"+item.display_name }}</div>
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
import * as echarts from 'echarts';


export default defineComponent({
	name:"FieldPage",
	mounted:function(){
		// @ts-ignore
		this.init(this.$route.query.field);
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
				related_concepts:{display_name: string, id:string}[],
				counts_by_year:{cited_by_count: number ,works_count: number ,year: number}[],
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
		graphic(){
			let myChart = echarts.init(this.$refs.gg);
			let xdata = [];
			let workData = [];
			let citiedData = []
			this.metadata.counts_by_year.reverse().forEach(e=>{
				xdata.push(e.year)
				workData.push(e.works_count)
				citiedData.push(e.cited_by_count)
			})

			let option = {
			tooltip: {
				trigger: 'axis',
				valueFormatter: value => value + '个',
			},
			legend: {
				data: ['works_count', 'citied_by_count'],
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true,
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: xdata,
			},
			yAxis: [
				{
					type: 'value',
					name:'作品数量',
					splitNumber: 5, //设置坐标轴的分割段数
				},
				{
					type: 'value',
					name:'引用数量',
					splitNumber: 5, //设置坐标轴的分割段数
				}
			],
			series: [
				{
				name: 'works_count',
				type: 'line',
				stack: 'Total',
				data: workData,
				},
				{
				name: 'citied_by_count',
				type: 'line',
				stack: 'Total',
				data: citiedData,
				yAxisIndex: 1,
				},
			],
			};
			myChart.resize();
			myChart.setOption(option);
			//监听，根据视口变化动态从新渲染表格
			window.addEventListener("resize", function () {
				myChart.resize();
			});

		},
		init(field:string){
			this.loading = true;
			getFieldData(field).then(res=>{
				this.metadata = res.data;
				this.works = res.data.works.results;
				this.loading = false;
				this.metadata.works_count = res.data.works.meta.count;
				this.graphic();
			})
		}
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
.relatedCon:hover {
	color: #76b6e0;
	cursor: pointer;
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
.divider_title {
	font-size: 18px;
    color: #2f3a91;
    margin-right: 15px;
    font-weight: bold;
    background-color: transparent;
    width: 100px;
}
.line {
	height: 1.5px;
    background-color: #d5d8e9;
    width: 100%;
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