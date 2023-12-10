<template>
  <div class="page">
    <div class="card-box">
      <div class="box-top">
        <div class="top-card-left">
          <div class="top-card-left-title">{{ nowDate.greeting }}</div>
        </div>
      </div>
      <div class="bg-image">
          <img src="@/assets/dashboard.png"/>
        </div>
    </div>
  </div>
</template>

  
  <script setup lang="ts">
import { reactive } from "vue";
const nowDate = reactive({
  hours: 0,
  greeting: "早安，管理员，请开始一天的工作吧",
});
function getTime() {
  let currentDate = new Date();
  nowDate.hours = currentDate.getHours();
  if (0 <= nowDate.hours && nowDate.hours <= 4) {
    nowDate.greeting = "夜深了，管理员，注意休息";
  } else if (5 <= nowDate.hours && nowDate.hours <= 11) {
    nowDate.greeting = "早安，管理员，请开始一天的工作吧";
  } else if (12 <= nowDate.hours && nowDate.hours <= 18) {
    nowDate.greeting = "下午好，管理员";
  } else {
    nowDate.greeting = "晚上好，管理员";
  }
}
getTime();
</script>
  
  <style lang="scss" scoped>
.page {
  .card-box {
    .box-top {
      .top-card-left {
        .top-card-left-title {
          display: flex;
          padding: 0 5vw;
          font-size: 1.875rem;
          line-height: 2.25rem;
          --tw-text-opacity: 1;
          color: rgb(75 85 99 / var(--tw-text-opacity));
        }
      }
    }
  }
}
</style>