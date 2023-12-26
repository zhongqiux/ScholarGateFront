<template>
  <div class="container">
    <div id="form"></div>
  </div>
</template>

<script lang="ts">
//@ts-nocheck
import * as echarts from "echarts"
import {defineComponent} from 'vue'
import { getReferenceWork,getPaperDataCopy,getAuthorData,type } from "@/API";
import { useCounterStore } from "@/store";

export default defineComponent({
  props:['doi'],
  mounted: function () {
    this.getPaper();
  },
  data(){
    return {
      centerWork: {},
      authors:[] as {author_position:string,author:{display_name:string,id:string}[]}[],
      referenecedWorks:[] as type.referenecedWorks[],
      workAuthors:[],
    }
  },
  methods: {
    async getPaper(){
      let doi = this.doi
      console.log(doi)
      await getReferenceWork(doi).then(res=>{
        this.referenecedWorks = res.data.results;
      })
      let authors = [];
      await getPaperDataCopy(doi).then(res=>{
        this.centerWork = res.data;
        if(res.data.authorships != null){
          authors.push(...res.data.authorships)
          this.workAuthors.push({work:doi,authors:res.data.authorships});
        }
      })
      for(let m = 0; m < this.referenecedWorks.length; m++){
        if(this.referenecedWorks[m].authorships){
          authors.push(...this.referenecedWorks[m].authorships)
          this.workAuthors.push({work:this.getLastUrl(this.referenecedWorks[m].id),authors:this.referenecedWorks[m].authorships});        
        }
      }
      const map = new Map()
      this.authors = authors.filter(item => {
          return !map.has(item.author.id) && map.set(item.author.id, 1)
      })
      console.log(this.workAuthors)
      this.init()
    },
    getLastUrl(url:string):string{
			return url.substring(url.lastIndexOf('/')+1)
		},
    init() {
      let doi = this.doi
      let myChart = echarts.init(document.getElementById("form"));

      let data = [] as {name:string,id:string,category:string}[];
      let links = [] as {source:string,target:string}[];
      console.log(this.centerWork)
      data.push({name:'',category:'论文',id:this.getLastUrl(this.centerWork.id)})
      this.referenecedWorks.forEach(work =>{
        data.push({name:'',category:'论文',id:this.getLastUrl(work.id)})
        links.push({source:doi,target:this.getLastUrl(work.id)})
      })
      this.authors.forEach(author=>{
        data.push({name:author.author.display_name,category:'学者',id:this.getLastUrl(author.author.id)})
      })
      this.workAuthors.forEach(link=>{
        // console.log(link)
        link.authors.forEach(author=>{
          links.push({source:link.work,target:this.getLastUrl(author.author.id)})
        })
      })

      console.log(links)
      console.log(data)

      let option = {
        backgroundColor: '#EEF1F3',
        color: ["#f18e8e", "#b4ef99", "#f3d48a", "#a7baf1", "#72cbef", "#f3c8f0", "#ee926c", "#9a7de7", "#ea7ccc"],
        title: {
          text: "关系图谱",
          textStyle: {
            color: "#1a1a1a",
            fontWeight: 100,
            fontSize: 10,
            left: "center"
          }
        },
        series: [{
          type: "graph",
          legendHoverLink: true,
          layout: "force",
          categories: [
            {name: "论文", symbolSize: 20},
            {name: "学者", symbolSize: 40},

          ],
          force: {
            repulsion: [100, 200], //节点之间的斥力因子,支持设置成数组表达斥力的范围
            layoutAnimation: true,
            friction: 0.1, //节点的移动速度。取值范围 0 到 1。
            edgeLength: [30, 100], //两个节点之间的距离，这个距离也会受 repulsion影响
          },
          // symbolSize: 60,
          itemStyle: {
            shadowColor: "#666",
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
          grid : {
              top : 40,    //距离容器上边界40像素
              bottom: 30   //距离容器下边界30像素
          },
          roam: true, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          draggable: true, //节点是否可拖拽，只在使用力引导布局的时候有用。
          edgeSymbol: ["circle", "arrow"],
          edgeSymbolSize: [4, 8],
          cursor: 'pointer',
          label: {
            show: true, // 图形上的文本标签， 可用于说明图形的一些数据信息， 比如值， 名称等
            fontStyle: "oblique",
            // position: "top",
            fontSize: 12,
            color: '#000', //如果设置为 'inherit'，则为视觉映射得到的颜色，如系列色。
            width: 100,
            overflow: "break", //文字超出宽度是否截断或者换行。配置width时有效
          },
          labelLayout: {
            moveOverlap: 'shiftX', //在标签重叠的时候是否挪动标签位置以防止重叠。
            draggable: true, //标签是否可以允许用户通过拖拽二次调整位置。
          },
          emphasis: {
            scale: true, //是否开启高亮后节点的放大效果。
            focus: 'adjacency'
          },
          lineStyle: {
            color: "#666",
            width: 1,
            curveness: 0, //关系线的曲度，支持从 0 到 1 的值，值越大曲度越大。
          },
          data: data,
          links: links,
        }]
      };

			myChart.setOption(option);
      const _this = this
			myChart.on('click', function (params) {
				if(params.dataType == "node"){
					console.log(params)
          if(params.data.category == '学者'){
            _this.$emit('greet', params.data.id)
          }
				}
			})
		}
	}
})
</script>

<style scoped>
page {
  background-color: red;
}

#form {
  margin: 10px;
  height: 800px;
  width: 1000px;
  background-color: rgb(192, 214, 255);
}


.container {
  min-height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EEF1F3;
}
</style>