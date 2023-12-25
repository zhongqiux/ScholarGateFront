<template>
    <div class="header-container">
        <div class="left">
            <div class="info-container">
                <div class="name">{{ displayName }}</div>
                <div class="organization">{{ institutionDisplayName }}</div>
                <div class="background"><el-text class="background-text" line-clamp="5">
                        {{ backGround }}
                    </el-text>
                </div>
            </div>
        </div>

        <div class="right">
            <el-button type="primary" round v-if="isRealNameAuthenticated" @click="dialogVisible = true">认领此门户</el-button>
            <el-divider direction="vertical" border-style="dashed" class="custom-divider" />
            <el-icon class="is-loading" :size="220">
                <Sunny />
            </el-icon>
        </div>
    </div>

    <el-dialog v-model="dialogVisible" title="认领门户" width="30%" class="dialog">
        <span>确定认领此门户？</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="handleConfirm">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts">
import Avatar from "@/components/User/Avatar.vue";
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { claim } from '@/API'
import * as Type from "@/API/type"
import { useUserStore } from '@/store'


export default {
    components: {
        Avatar,
    },
    props: {
        displayName: String,
        backGround: String,
        institutionDisplayName: String,
        doi: String,
        flag: String
    },
    setup(props) {
        const dialogVisible = ref(false);
        const formLabelWidth = '80px';
        const isRealNameAuthenticated = ref(props.flag == '1');


        const handleConfirm = () => {
            const doi = props.doi as string;
            console.log(doi);

            ElMessage({
                message: '提交认领请求成功，请前往邮箱确认喵~',
                type: 'success',
            });
            claim(doi, useUserStore().email).then((res: Type.ClaimReturn) => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
            dialogVisible.value = false;

        };

        return {
            dialogVisible,
            formLabelWidth,
            isRealNameAuthenticated,
            handleConfirm
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
    margin-left: 21%;
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
    margin-right: 18%;
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
  