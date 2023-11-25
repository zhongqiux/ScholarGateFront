<script lang="ts">
import KeywordSearch from "@/components/KeywordSearch.vue"

export default {
    components: {
        KeywordSearch
    },
    data() {
        return {
            SearchKeyword: "",
        }
    },
    methods: {
        handleSearch(Keyword: string) {
            this.SearchKeyword = Keyword
            console.log(Keyword);

        }
    }
}


</script>

<template>
    <div class="wrapper">
        <div role="tablist" class="tabs tabs-lifted">
            <el-tabs type="border-card" style="width: calc(60vw - 41px); height: 60vh;">
                <el-tab-pane label="论文">
                    <div class="paper-top">
                        <KeywordSearch @search="handleSearch"></KeywordSearch>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="专利">
                    <div class="paper-top">
                        <KeywordSearch @search="handleSearch"></KeywordSearch>
                    </div>
                </el-tab-pane>
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
</style>
