<template>
    <div class="main" v-loading="loading" element-loading-text="请求数据中...">
        <div v-show="loading == false">
    <div class="success_text"><img src="../../assets/success.png" alt=""></div>
    <div class="success_text">恭喜，已成功通过认证！</div>
    <div class="success_text">{{ time.count }} 秒后返回 <a href="/">首页</a></div>
</div>
  </div>
</template>

<script setup lang="ts">
import { router } from "@/router";
import { reactive, ref } from "vue";
import { VerifyClaim } from "@/API"
const loading = ref(true);
const time = reactive({count:10});

function countdown() {
    let timer = setInterval(() => {
        if(time.count > 0) {
            time.count--;
        } else {
            clearInterval(Number(timer));
            router.push("/");
        }
    },1000)
}

function verify() {
    
}

</script>

<style scoped lang="scss">
.main {
    margin-top: 5vh;
    min-height: 40vh;
    .success_text {
        text-align: center;
        margin-bottom: 20px;
        font-size: large;
    }
}
</style>