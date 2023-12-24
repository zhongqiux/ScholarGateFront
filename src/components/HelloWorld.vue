<script setup lang="ts">

import RelationVue from "@/components/RelationGraphic"

</script>

<template>
<!--  左侧漂浮-->
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>科研人员信息</span>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    <template #footer>Footer content</template>
  </el-card>

  <RelationVue></RelationVue>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.box-card{
  position: absolute;
  width: 250px;
  top: 30%;
  left: 30px;
  z-index: 999;
  border-radius: 30px;
  background-color: #f5f5f5;
  color: #1a1a1a;
}
</style>
