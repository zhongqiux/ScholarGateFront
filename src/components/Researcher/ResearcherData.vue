<template>
    <div class="bodydata">
        <el-tabs class="demo-tabs" v-model="currentTab">
            <el-tab-pane label="论文" name="论文">
                <el-table :data="works" style="width: 100%" height="53vh" class="works">
                    <el-table-column prop="workName" label="workName" width="'40vw'" />
                    <el-table-column prop="publicationDate" label="publicationDate" width="200" />
                </el-table>
            </el-tab-pane>
            <!-- <el-tab-pane label="专利" name="专利"></el-tab-pane> -->
        </el-tabs>
    </div>
</template>
  
<script lang="ts">
// import { ref, reactive } from 'vue';

export default {
    props: {
        works: Array as () => ({ workName: string; publicationDate: string }[]),

    },
    setup() {
        return {
            currentTab: '论文'
        };
    },
};
</script>
  
<style scoped>
.bodydata {
    width: 80vw;
    margin-left: 10vw;
    margin-top: 2vh;
}

.works {
    text-align: left;
}
</style>
  