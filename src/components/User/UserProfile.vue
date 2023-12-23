<script lang="ts">
import KeywordSearch from "@/components/User/KeywordSearch.vue"
import { RouteLocationRaw } from 'vue-router';


export default {
    components: {
        KeywordSearch
    },
    props: {
        works: Array as () => ({ workName: string; publicationDate: string }[]),
        stars: Array as () => ({ id: string; name: string }[]),

    },
    data() {
        return {
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

    }
}


</script>

<template>
    <div class="wrapper">
        <div role="tablist" class="tabs tabs-lifted">
            <el-tabs type="border-card" style="width: calc(60vw - 41px); height: 60vh;">
                <el-tab-pane label="论文">
                    <el-table :data="works" style="width: 100%" height="53vh" class="works">
                        <el-table-column prop="workName" label="workName" width="'40vw'" />
                        <el-table-column prop="publicationDate" label="publicationDate" width="200" />
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
</style>
