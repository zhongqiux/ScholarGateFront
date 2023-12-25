<template>
    <div class="page_divider flex flex-row items-center mt-4">
        <p class="divider_title">论文</p>
        <p class="line"></p>
    </div>

    <div class="bodydata">
        <el-tabs class="demo-tabs" v-model="currentTab">
            <el-tab-pane label="论文" name="论文">
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
            <!-- <el-tab-pane label="专利" name="专利"></el-tab-pane> -->
        </el-tabs>
    </div>
</template>
  
<script lang="ts">
// import { ref, reactive } from 'vue';
import { RouteLocationRaw } from 'vue-router';

export default {
    props: {
        works: Array as () => ({ id: string; workName: string; publicationDate: string }[]),

    },
    setup() {
        return {
            currentTab: '论文'
        };
    },
    methods: {
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
    }
};
</script>
  
<style scoped>
.bodydata {
    width: 60vw;
    margin-left: 20vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
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
  