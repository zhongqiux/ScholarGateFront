<script setup lang="ts">

import RelationVue from "@/components/RelationGraphic"

</script>

<template>
<!--  左侧漂浮-->
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    <template #footer>Footer content</template>
  </el-card>

  <RelationVue class="relation"></RelationVue>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.relation{
  height: 100%;
  width: 100%;
}

.box-card{
  position: absolute;
  top: 30%;
  left: 30px;
  z-index: 999;
  border-radius: 30px;
}
</style>
