<template>
    <div class="background-container" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
        <!-- 内容放在这里 -->
        <div class="Info">
            <div class="left">
                <Avatar></Avatar>
                <div class="info-container">
                    <div class="name">{{ form.name }}</div>
                    <div class="organization">{{ form.organization }}</div>
                    <div class="edit"><el-link type="success" :underline="false"
                            @click="dialogFormVisible = true">编辑个人信息</el-link></div>
                </div>
            </div>
            <el-icon class="is-loading" :size="100">
                <StarFilled />
            </el-icon>
        </div>

    </div>

    <el-dialog v-model="dialogFormVisible" title="编辑个人信息">
        <el-form :model="form" class="form">
            <el-form-item label="昵称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="真实姓名" :label-width="formLabelWidth">
                <el-input v-model="form.realname" autocomplete="off" />
            </el-form-item>
            <el-form-item label="机构" :label-width="formLabelWidth">
                <el-input v-model="form.organization" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts">
import Avatar from "@/components/Avatar.vue";
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
        });

        return {
            dialogFormVisible,
            formLabelWidth,
            form,
            backgroundImagePath: 'public/assets/Personbgc.jpg',
        };
    },
};
</script>
  
<style scoped>
.background-container {
    width: 100%;
    height: 200px;
    /* 设置容器的高度，根据你的需求调整 */
    background-size: cover;
    /* 设置背景图覆盖整个容器 */
    background-position: center;
    /* 设置背景图居中 */
    /* 其他样式可以根据你的需求添加 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.Info {
    width: 60vw;
    display: flex;
    justify-content: space-between;
    /* 使用 space-between 将元素推到两端 */
    align-items: center;
}

.left {
    display: flex;
}

.name {
    font-weight: bold;
    font-size: large;
    margin-left: 2vw;
    margin-top: 30px;
}

.organization {
    /* margin-left: 2vw; */
    margin-top: 10px;
    font-size: small;
}

.edit {
    margin-top: 10px;
    margin-left: 0.88vw;
}

.info-container {
    display: flex;
    flex-direction: column;
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

.form {
    display: flex;
    flex-direction: column;
    /* 将子元素排成垂直列 */
    align-items: center;
    /* 在主轴上居中对齐 */
    width: 30%;
    /* 适当的宽度，可以根据需要调整 */
    margin: 0 auto;
    /* 水平居中 */
}</style>
  