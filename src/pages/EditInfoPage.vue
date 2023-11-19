<template>
    <div class="container"><el-form :model="form" label-width="120px">
            <el-form-item label="您的姓名">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="您的机构">
                <el-input v-model="form.org" />
            </el-form-item>
            <el-form-item label="您的邮箱">
                <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form></div>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    org: '',
    email: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style>

.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* 使用 space-between 将元素推到两端 */
}

el-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>