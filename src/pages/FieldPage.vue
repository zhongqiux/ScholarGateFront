<template>
	<div class="head">
		<div class="image-box">
			<img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Asklepios.3.jpg" class="image">
		</div>
		<div class="info">
			<div><h3 class="title">文学</h3></div>
			<div>
				<span class="intro"><span class="tex">简介：</span>是一种用口语或文字作为媒介，表达客观世界和主观认识的方式和手段。当文字不单单用来记录（史书、新闻报道、科学论文等），而被赋予其他思想和情感，并具有了艺术之美，才可称为文学艺术，属于语言艺术。</span>
			</div>
			<div>
				<span class="index"><span>指数：</span>100</span>
			</div>
		</div>
    </div>
	
	<div class="list center">
		<el-divider content-position="right">领域成果</el-divider>
		<div class="list-head">

		</div>
		<div class="layout">
			<div class="paper" v-for="item,index in rpapers">
				<h3 class="article-title">{{ (index +1) +"、"+item.title }}</h3>
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
			rpapers:[{title:"机器学习模型辅助抗菌肽设计",abstract:"抗菌肽是一类具有抗菌活性的小分子多肽，其研究开发具有重要的学术意义和产业前景。与传统从自然界中发现和分离抗菌肽等实验手段相比，基于模型预测和设计的方法具有高效快捷、成本低廉等特点，是今后抗菌肽研发的趋势。但由于抗菌肽序列及其活性之间存在着异常复杂的非线性映射关系，由序列准确预测其活性仍然十分困难。抗菌肽序列是如何决定其抑菌活性的？高活性序列存在哪些关键特征？这是高活性抗菌肽设计需要解决的关键科学问题。为回答这些问题，本项目拟采用BP神经网络、支持向量机、深度学习等非线性映射能力很强的机器学习算法来构建高效的抗菌肽序列-活性定量预测模型，并基于模型的精准预测，实现高效低毒的新抗菌肽设计。本研究建立的模型、方法和工具有望为一类共性科学问题（即序列-活性之间的函数关联）提供新的解决方案，亦能为抗菌肽产品的研发提供理论依据和平台支持。",keywords:["AI","算法"],authorNames:["张三"],publishDate:''},
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
	}
})

</script>

<style scoped>
.head {
	height: 40vh;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.center {
	position: relative;
	width: 1024px;
	margin: 0 auto;
}
.list {
	border-top: 1px solid black;
}
.image {
	width: 100px;
	height: 140px;
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
.intro,
.index {
	font-size: 13px;
	text-align: left;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
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