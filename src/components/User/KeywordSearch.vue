<template>
    <div>
      <div class="search-container">
        <el-input v-model="searchKeyword" placeholder="关键词检索" style="width: 400px;"></el-input>
        <div class="search-icon" @click="handleSearch">
          <Search style="width: 1em; height: 1em;" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        searchKeyword: ''
      }
    },
    methods: {
      handleSearch() {
        // 执行搜索操作
        this.$emit('search', this.searchKeyword);
      }
    }
  }
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    align-items: center;
  }
  
  .search-icon {
    margin-left: 8px;
    margin-top: 6px;
    cursor: pointer;
  }
  </style>
  