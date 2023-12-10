<template>
  <div class="layout">
    <el-container>
      <el-aside width="auto">
        <el-menu
          default-active="1"
          class="el-menu-vertical"
          :collapse="button.isCollapse"
          router
          popper-effect="light"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item @click="collapse">
            <el-icon><Menu /></el-icon>
            <span>收起</span>
          </el-menu-item>
          <el-menu-item index="/admin/board">
            <el-icon><House /></el-icon>
            <template #title>
              <span>主页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/admin/issue">
            <el-icon><Files /></el-icon>
            <template #title>审核</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="el-main-admin">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { Files, House, Location, Menu } from "@element-plus/icons-vue";

const button = reactive({
  isCollapse : 1,
  show: ['收起', '展开']
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const collapse = () => {
  button.isCollapse = 1 -button.isCollapse
};
</script>

<style scoped>
.el-menu-vertical {
  height: 90vh;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 8vw;
}
.el-main-admin {
  overflow-y: scroll;
  height: 90vh;
}
</style>
