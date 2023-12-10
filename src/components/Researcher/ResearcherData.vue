<template>
    <div class="bodydata">
        <el-tabs class="demo-tabs" v-model="currentTab">
            <el-tab-pane label="论文" name="论文"></el-tab-pane>
            <el-tab-pane label="专利" name="专利"></el-tab-pane>
            <el-empty description="空" class="empty" />
        </el-tabs>
    </div>
</template>
  
<script lang="ts">
// import { ref, reactive } from 'vue';

export default {
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

</style>
  