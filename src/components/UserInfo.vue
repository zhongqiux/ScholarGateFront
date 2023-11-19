<template>
    <div class="background-container" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
        <!-- 内容放在这里 -->
        <div class="Info">
            <div class="left">
                <Avatar></Avatar>
                <div class="info-container">
                    <div class="name">我是原神高手</div>
                    <div class="organization">提瓦特大学</div>
                    <div class="edit"><el-link type="success" :underline="false">编辑个人信息</el-link></div>
                </div>
            </div>
            <el-icon class="is-loading" :size="100">
                <StarFilled />
            </el-icon>
        </div>

    </div>
</template>
  
<script lang="ts">
import Avatar from "@/components/Avatar.vue"

export default {
    components: {
        Avatar
    },
    data() {
        return {
            backgroundImagePath: 'public/assets/Personbgc.jpg'
        };
    }
};
</script>
  
<style>
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
</style>
  