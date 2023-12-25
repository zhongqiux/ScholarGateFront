<script lang="ts">
import KeywordSearch from "@/components/User/KeywordSearch.vue"
import { RouteLocationRaw } from 'vue-router';
// import * as echarts from 'echarts';


export default {
    // mounted: function () {
    //     // @ts-ignore
    //     this.graphic();
    // },
    components: {
        KeywordSearch
    },
    props: {
        works: Array as () => ({ id: string; workName: string; publicationDate: string }[]),
        stars: Array as () => ({ id: string; name: string }[]),
        countByYears: Array as () => ({ year: number; works_count: number; cited_by_count: number }[]),
    },
    data() {
        return {
            loading: false,
            SearchKeyword: "",
        }
    },

    methods: {
        handleClick(row: { id: any; }) {
            // 在这里处理点击事件，可以使用 item 来获取被点击的行的数据
            console.log("Item Clicked:", row.id);

            const targetRoute: RouteLocationRaw = {
                path: '/result',
                query: { id: row.id },
            };

            // 使用 Vue Router 的 push 方法进行路由跳转
            this.$router.push(targetRoute);
        },
        handleClick2(row: { id: any; }) {
            // 在这里处理点击事件，可以使用 item 来获取被点击的行的数据
            console.log("Item Clicked:", row.id);

            const targetRoute: RouteLocationRaw = {
                path: '/result',
                query: { id: row.id },
            };

            // 使用 Vue Router 的 push 方法进行路由跳转
            this.$router.push(targetRoute);
        },
        // graphic() {
        //     let myChart = echarts.init(this.$refs.gg);
        //     let xdata = [];
        //     let workData = [];
        //     let citiedData = []
        //     this.countByYears!.reverse().forEach(e => {
        //         xdata.push(e.year)
        //         workData.push(e.works_count)
        //         citiedData.push(e.cited_by_count)
        //     })

        //     let option = {
        //         tooltip: {
        //             trigger: 'axis',
        //             valueFormatter: value => value + '个',
        //         },
        //         legend: {
        //             data: ['works_count', 'citied_by_count'],
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '4%',
        //             bottom: '3%',
        //             containLabel: true,
        //         },
        //         xAxis: {
        //             type: 'category',
        //             boundaryGap: false,
        //             data: xdata,
        //         },
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 name: '作品数量',
        //                 splitNumber: 5, //设置坐标轴的分割段数
        //             },
        //             {
        //                 type: 'value',
        //                 name: '引用数量',
        //                 splitNumber: 5, //设置坐标轴的分割段数
        //             }
        //         ],
        //         series: [
        //             {
        //                 name: 'works_count',
        //                 type: 'line',
        //                 stack: 'Total',
        //                 data: workData,
        //             },
        //             {
        //                 name: 'citied_by_count',
        //                 type: 'line',
        //                 stack: 'Total',
        //                 data: citiedData,
        //                 yAxisIndex: 1,
        //             },
        //         ],
        //     };
        //     myChart.resize();
        //     myChart.setOption(option);
        //     //监听，根据视口变化动态从新渲染表格
        //     window.addEventListener("resize", function () {
        //         myChart.resize();
        //     });

        // },
    }
}


</script>

<template>
    <!-- <div class="graph" style="height: 200px;width: 100%;">
        <div ref="gg" id="gg" style="height: 200px;width: 960px;" v-show="!loading"></div>
    </div> -->
    <div class="page_divider flex flex-row items-center mt-4">
        <p class="divider_title">论文&收藏</p>
        <p class="line"></p>
    </div>
    <div class="wrapper">
        <div role="tablist" class="tabs tabs-lifted">
            <el-tabs type="border-card" style="width: calc(60vw - 41px); height: 60vh;">
                <el-tab-pane label="论文">
                    <el-table :data="works" style="width: 100%" height="53vh" class="works">
                        <el-table-column prop="workName" label="workName" width="'40vw'" />
                        <el-table-column prop="publicationDate" label="publicationDate" width="200" />
                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button type="primary" @click="handleClick2(scope.row)">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="收藏">
                    <el-table :data="stars" style="width: 100%" height="53vh" class="works">
                        <el-table-column prop="name" label="name" width="'40vw'" />
                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button type="primary" @click="handleClick(scope.row)">查看</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <!-- <el-empty description="空" class="empty" /> -->
            </el-tabs>
        </div>
    </div>
</template>
  
<style scoped>
.wrapper {
    margin-top: 2.5vh;
    /* margin-left: -20px; */
    padding: 0px;
    /* 调整下移的高度，可以根据实际需要调整 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5vh;

}

.paper-top {
    display: flex;
    justify-content: space-between;
    /* 使用 space-between 将元素推到两端 */
    align-items: center;
}


.empty {
    margin-top: 10vh;
}

.works {
    text-align: left;
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
