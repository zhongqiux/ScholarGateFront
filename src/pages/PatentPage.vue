<template>
  <el-container @scroll="handleScroll">
    <el-aside width="150px" style="margin-left: 50px">
      <LeftTab class="sticky_element" :class="{is_sticky : isSticky}" :isPatent="true"/>
    </el-aside>

    <el-main>
      <Result :isPatent="true"/>
    </el-main>

    <el-aside width="240px" style="margin-left: 10px; margin-right: 50px">
      <RightTab :isPatent="true"/>
    </el-aside>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import LeftTab from "@/components/ResultPage/LeftTab.vue";
import RightTab from "@/components/ResultPage/RightTab.vue";
import Result from "@/components/ResultPage/Result.vue";

export default defineComponent({
  name: "ResultPages",
  components: {Result, RightTab, LeftTab},

  data() {
    return {
      isSticky: false,
    }
  },

  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      this.isSticky = scrollY > 120;
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);


  },

})
</script>

<style scoped>
.sticky_element {
  margin-top: 30px;
}

.is_sticky {
  width: 150px;
  position: fixed;
  top: 0;
}
</style>