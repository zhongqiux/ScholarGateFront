<template>
    <div class="info">
        <el-card class="box-card">
            <div class="data"><strong>论文总量：</strong>{{ worksCount }} <strong>被引总量：</strong>{{ citedCount }}</div>
            <div class="concept"><strong>领域：</strong></div>
            <template v-for="(concept, index) in concepts">
                <router-link :to="{ path: '/field', query: { field: concept.id } }" class="concept-link">
                    {{ concept.name }}
                </router-link>

                <!-- 最后一项不显示顿号 -->
                <span v-if="index < concepts!.length - 1">、</span>
            </template>
        </el-card>
    </div>
    <div class="page_divider flex flex-row items-center mt-4" >
        <p class="divider_title">概念引用数</p>
        <p class="line"></p>
    </div>
    <div class="graph" style="height: 200px;width: 100%;">
        <div ref="gg" id="gg" style="margin-left: 20vw;;height: 200px;width: 60vw;"></div>
    </div>
</template>

<script lang="ts">
import * as echarts from 'echarts';

export default {
    mounted: function () {
        // @ts-ignore
        this.graphic();
    },
    components: {
    },
    props: {
        worksCount: Number,
        citedCount: Number,
        concepts: Array as () => ({ id: string; name: string }[]),
        countByYears: Array as () => ({ year: number; works_count: number; cited_by_count: number }[]),
    },
    methods: {
        graphic() {
            let myChart = echarts.init(this.$refs.gg);
            let xdata = [];
            let workData = [];
            let citiedData = []
            this.countByYears!.reverse().forEach(e => {
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
                        name: '作品数量',
                        splitNumber: 5, //设置坐标轴的分割段数
                    },
                    {
                        type: 'value',
                        name: '引用数量',
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
    }
}




</script>

<style scoped>
.info {
    margin-top: 2.5vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.box-card {
    text-align: left;
    width: calc(60vw - 41px)
}

.data {
    color: rgb(106, 74, 135);
}

.concept-link {
    color: rgb(85, 115, 103);
}

.divider_title {
	font-size: 18px;
    color: #2f3a91;
    margin-right: 15px;
    margin-left: 15vw;
    font-weight: bold;
    background-color: transparent;
    width: 100px;
}
.line {
	height: 1.5px;
    background-color: #d5d8e9;
    width: 55vw;
}
</style>