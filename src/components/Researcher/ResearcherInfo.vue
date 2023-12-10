<template>
    <div class="header-container">
        <div class="left">
            <div class="info-container">
                <div class="name">{{ form.name }}</div>
                <div class="organization">{{ form.organization }}</div>
                <div class="background"><el-text class="background-text" line-clamp="5">
                        {{ form.background }}
                    </el-text>
                </div>
                <div class="data"><strong>总发文量：</strong>{{ form.totalposts }}&nbsp;&nbsp;&nbsp;<strong>总下载量：</strong>{{
                    form.totaldownloads }}</div>

            </div>
        </div>

        <div class="right">
            <el-button type="primary" round>实名认证</el-button>
            <el-divider direction="vertical" border-style="dashed" class="custom-divider" />
            <div class="samename">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>同名作者</span>
                        </div>
                    </template>
                    <div v-for="o in 4" :key="o" class="text item"><strong>{{ '作者 ' + o }}</strong> {{ '机构 ' + o }}</div>
                </el-card>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import Avatar from "@/components/User/Avatar.vue";
import { ref, reactive } from 'vue';

export default {
    components: {
        Avatar,
    },
    setup() {
        const dialogFormVisible = ref(false);
        const formLabelWidth = '80px';

        const form = reactive({
            name: '我是原神高手',
            realname: '',
            organization: '提瓦特大学',
            background: '原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启动！原神,启',
            totalposts: '152',
            totaldownloads: '1312',
        });

        return {
            dialogFormVisible,
            formLabelWidth,
            form,
        };
    },
};
</script>
  
<style scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    /* 使用 space-between 将元素推到两端 */
    align-items: center;
}

.left {
    margin-left: 10%;
    margin-top: 1%;
    width: 20%;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    /* 左对齐 */
}

.right {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    margin-top: 1%;
    margin-right: 10%;
}

.name {
    font-weight: bold;
    font-size: large;
    /* margin-left: 2vw; */
    margin-top: 1.5vh;
}

.organization {
    /* margin-left: 2vw; */
    margin-top: 1vh;
    font-size: small;
}

.background {
    margin-top: 1vh;
    font-size: x-small;
    /* margin-left: 2vw; */
    color: rgb(71, 71, 205);
    /* max-width: 5vw; */
    height: 10vh;
    width: 100%;
    /* background-color: black; */
}

.info-container {
    display: flex;
    flex-direction: column;
}


.box-card {
    width: 20vw;
    height: 20vh;
    text-align: left;

}

.custom-divider {
    height: 20vh;
    /* 设置分割线的高度，根据实际需要调整 */
}

.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}



/* .background-text {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
} */
</style>
  