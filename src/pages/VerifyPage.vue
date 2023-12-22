<template>
    <div class="container"><el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span style="font-weight: bold; font-size: large;">认领门户</span>
                </div>
            </template>
            <div class="text">您确定认领此门户？</div>
            <el-button type="success" plain class="button" @click="handleConfirm">Confirm</el-button>
            <el-button type="danger" plain class="button">Cancel</el-button>
        </el-card></div>
</template>
  
<script lang="ts" setup>
import { verifyCode } from '@/API'
import * as Type from "@/API/type"
const props = defineProps(['token', 'user', 'mail', 'doi']);

const handleConfirm = () => {
    // 在这里处理 Confirm 按钮点击事件的逻辑
    console.log('Confirm 按钮被点击了！');
    console.log(props.token);
    verifyCode(props.doi, props.mail, props.token).then((res: Type.verifyCodeReturn) => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    // 可以调用其他函数、触发其他操作，或者更新数据等
};
</script>
<style scoped>
.container {
    margin-top: 10vw;
    margin-left: 20vw;
    width: 60vw;
    height: 50vh;
}

.text {
    margin-top: 10vh;
    margin-bottom: 15vh;
}

.box-card {
    height: 90%;
}

.button {
    margin-left: 10vw;
    margin-right: 10vw;
}
</style>
  