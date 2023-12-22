<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "@/components/Header.vue"
import { useHeaderStore } from './store';
const store  = useHeaderStore();
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header v-show="store.login"><Header></Header></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.el-header {
  padding: 0;
  min-width: 1061px;
}
.el-main {
  padding: 10px 0 0 0;
}
</style>
