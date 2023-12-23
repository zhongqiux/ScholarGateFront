<template>
    <div class="background-container" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
        <!-- 内容放在这里 -->
        <div class="Info">
            <div class="left">
                <GitAvatar :num="myavatar" class="custom-avatar"></GitAvatar>
                <div class="info-container">
                    <div class="name">{{ displayName }}</div>
                    <div class="organization">{{ institutionDisplayName }}</div>
                    <div class="background"><el-text class="background-text">
                            {{ backGround }}
                        </el-text>
                    </div>
                    <div class="edit"><el-link type="success" :underline="false"
                            @click="dialogFormVisible = true">编辑个人信息</el-link></div>
                </div>
            </div>
            <el-icon class="is-loading" :size="100">
                <StarFilled />
            </el-icon>
        </div>

    </div>

    <el-dialog v-model="dialogFormVisible" title="编辑个人信息" :show-close="false">
        <el-form :model="form" class="form">
            <el-form-item label="昵称" :label-width="formLabelWidth" class="input">
                <el-input v-model="form.displayName" autocomplete="off" disabled />
            </el-form-item>
            <!-- <el-form-item label="真实姓名" :label-width="formLabelWidth" class="input">
                <el-input v-model="form.realname" autocomplete="off" disabled />
            </el-form-item> -->
            <el-form-item label="机构" :label-width="formLabelWidth" class="input">
                <el-input v-model="form.institutionDisplayName" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="个人简介" :label-width="formLabelWidth" class="input bgc-input">
                <el-input v-model="form.backGround" autocomplete="off" :rows="5" type="textarea" maxlength="100"
                    show-word-limit resize="none" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleCancel">Cancel</el-button>
                <el-button type="primary" @click="handleConfirm">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts">
import Avatar from "@/components/User/Avatar.vue";
import GitAvatar from "@/components/small/GitAvatar.vue"
import { ref, reactive, onMounted } from 'vue';
import { ElMessage } from 'element-plus'
import { editUserInfo } from '@/API'
import * as Type from "@/API/type"

export default {
    components: {
        Avatar,
        GitAvatar,
    },
    props: {
        avatar: Number, // 定义 displayName 作为接收的属性
        displayName: String,
        backGround: String,
        institutionDisplayName: String,
    },
    setup(props) {
        const dialogFormVisible = ref(false);
        const formLabelWidth = '80px';
        const myavatar = ref(0)
        const form = reactive({
            displayName: '',
            institutionDisplayName: '',
            backGround: '',
        });
        const originalFormData = reactive({ ...form }); // 增加原始表单数据的副本
        onMounted(() => {
            console.log("displayName:", props.displayName);
            if (props.avatar !== undefined) {
                myavatar.value = props.avatar;
            }
            if (props.displayName !== undefined) {
                form.displayName = props.displayName;
            }
            else {
                form.displayName = "default name";
                console.log("displayName:", props.displayName);

            }
            if (props.institutionDisplayName !== undefined) {
                form.institutionDisplayName = props.institutionDisplayName;
            }
            else {
                form.institutionDisplayName = "default institution";
            }
            if (props.backGround !== undefined) {
                form.backGround = props.backGround;
            }
            else {
                form.backGround = "此用户还没有简介噢~";
            }
            // 初始化时备份表单数据
            originalFormData.displayName = form.displayName;
            originalFormData.institutionDisplayName = form.institutionDisplayName;
            originalFormData.backGround = form.backGround;
        });

        const handleConfirm = () => {
            // 在这里调用你想要执行的功能
            console.log(form.backGround);
            // 这里可以调用其他函数或执行其他逻辑
            // 例如：performCustomAction();
            dialogFormVisible.value = false;
            if (form.backGround != originalFormData.backGround) {
                ElMessage({
                    message: '提交修改请求成功，请耐心等待审核~',
                    type: 'success',
                });
                editUserInfo(form.backGround).then((res: Type.EditUserInfoReturn) => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            }

            form.displayName = originalFormData.displayName;
            form.institutionDisplayName = originalFormData.institutionDisplayName;
            form.backGround = originalFormData.backGround;
        };
        const handleCancel = () => {
            // 取消按钮点击时恢复表单数据
            dialogFormVisible.value = false;
            form.displayName = originalFormData.displayName;
            form.institutionDisplayName = originalFormData.institutionDisplayName;
            form.backGround = originalFormData.backGround;
        };

        return {
            myavatar,
            dialogFormVisible,
            formLabelWidth,
            form,
            backgroundImagePath: 'assets/Personbgc.jpg',
            handleConfirm,
            handleCancel
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

.custom-avatar {
    /* 在这里添加你想要的样式调整 */
    width: 80px;
    height: 80px;
    margin-top: 3.5vh;
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
    justify-content: flex-start;
    text-align: left;
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
    display: flex;
    justify-content: left;
    max-width: 50vw;
}

.edit {
    margin-top: 1vh;
    /* margin-top: 1px; */
    /* margin-left: 0.88vw; */
}

.info-container {
    display: flex;
    flex-direction: column;
    margin-left: 1.5vw;
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
}

.input {
    width: 18.5vw;
}

.background-text {
    display: block;
    white-space: nowrap;
    /* 防止换行 */
    overflow: hidden;
    text-overflow: ellipsis;
    /* 使用省略号表示被省略的文本 */
}

.bgc-input {
    height: 20%;
}
</style>
  