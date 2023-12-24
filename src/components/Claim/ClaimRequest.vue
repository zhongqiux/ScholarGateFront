<template>
    <div class="main" v-loading="loading" element-loading-text="请求数据中...">
        <div v-show="loading == false">
    <div class="success_text"><img src="../../assets/success.png" alt=""></div>
    <div class="success_text">恭喜，已成功通过认证！</div>
    <div class="success_text">{{ time.count }} 秒后返回 <a href="/">首页</a></div>
</div>
  </div>
</template>

<script lang="ts">
import { router } from "@/router";
import { reactive, ref } from "vue";
import { verifyCode } from "@/API"
import * as Type from "@/API/type";

export default {
    data(){
        return{
            loading : ref(true),
            time : reactive({count:10}),
        }
    },
    methods: {
        countdown(): void {
        let timer = setInterval(() => {
            if(this.time.count > 0) {
              this.time.count--;
            } else {
                clearInterval(Number(timer));
                router.push("/");
            }
            },1000)
        },

        verify() : void {
            const doi = this.$route.query.doi as string;
            const email = this.$route.query.email as string;
            const code = this.$route.query.code as string;
            verifyCode(doi, email, code).then((res: Type.verifyCodeReturn) => {
                this.loading = false;
                console.log(res);
                this.countdown();
            }).catch(err => {
                console.log(err);
            });
        }
    },
    created() {
        this.verify();
    },
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