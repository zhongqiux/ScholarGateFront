<template>
  <div class="container" :class="{'container2':isPatent}">
    <!-- 下载 -->
    <div v-if="isPatent == false" class="item" style="margin-top: 13px">
      <div class="title">
        <Link class="icon"/>
        <span>合作资源方下载</span>
      </div>

      <div class="button">
        <el-button>下载链接</el-button>
      </div>
    </div>

    <!-- 操作 -->
    <div class="item" :style="patentStyle">
      <div class="title">
        <Operation class="icon"/>
        <span>常用操作</span>
      </div>

      <div class="actions">
        <div class="action_item">
          <i class="iconfont icon-quote-left"></i>
          <span class="action_text">引用</span>
        </div>
        <div class="action_item">
          <i class="iconfont icon-star"></i>
          <span class="action_text">收藏</span>
        </div>
        <div class="action_item">
          <i class="iconfont icon-heart"> </i>
          <span class="action_text">推荐</span>
        </div>
      </div>
    </div>

    <!-- 统计 -->
    <div class="item">
      <div class="title">
        <Histogram class="icon"/>
        <span>访问统计</span>
      </div>

      <div class="statistic">
        <div class="stat_item">
          <p class="stat_text">浏览数</p>
          <p class="stat_num">{{ viewNum }}</p>
        </div>

        <div class="stat_item">
          <p class="stat_text">推荐数</p>
          <p class="stat_num">{{ recommendNum }}</p>
        </div>
      </div>
    </div>

    <!-- 问题反馈 -->
    <div class="item" style="border-bottom: transparent">
      <div class="title">
        <Edit class="icon"/>
        <span>问题反馈</span>
      </div>

      <div class="actions">
        <div class="action_item2">
          <i class="iconfont icon-cuowuguanbi2"></i>
          <span class="action_text">数据错误</span>
        </div>
        <div class="action_item2">
          <i class="iconfont icon-undo"></i>
          <span class="action_text">撤稿申请</span>
        </div>
        <div class="action_item2">
          <i class="iconfont icon-jinggao2"> </i>
          <span class="action_text">著作权申诉</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Edit, Histogram, Link, Operation} from "@element-plus/icons-vue";
import "@/assets/ResultPageIconfont/iconfont.css"

export default defineComponent({
  name: "RightTab",
  components: {Edit, Histogram, Operation, Link},
  props: ['isPatent'],

  data() {
    return {
      viewNum: 0,
      recommendNum: 0,
    }
  },

  computed:{
    patentStyle(){
      if(this.isPatent){
        return ({
          marginTop: '13px',
        })
      }
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 500px;
  background-color: #f3f5f8;
  margin-top: 30px;
}

.container2 {
  display: flex;
  flex-direction: column;
  height: 400px;
  background-color: #f3f5f8;
  margin-top: 30px;
}

.item {
  padding-bottom: 23px;
  border-bottom: #ececec solid 1px;
}

.title {
  padding: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #444444;
}

.icon {
  height: 20px;
  width: 20px;
  padding-left: 5px;
  padding-right: 5px;
  color: #2f3a91;
}

.iconfont {
  font-size: 18px;
  color: #8590a6;
  margin-left: 5px;
  margin-right: 5px;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.action_text {
  color: #8590a6;
  font-size: 14px;
}

.action_item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 70px;
  margin: 0;
}

.action_item2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 70px;
  margin: 0;
  flex-wrap: wrap;
}

.action_item:hover {
  cursor: pointer;
  color: #75540d;
}

.action_item:hover > .iconfont {
  cursor: pointer;
  color: #75540d;
}

.action_item:hover > .action_text {
  cursor: pointer;
  color: #75540d;
}

.action_item2:hover {
  cursor: pointer;
  color: #b2bed3;
}

.action_item2:hover > .iconfont {
  cursor: pointer;
  color: #b2bed3;
}

.action_item2:hover > .action_text {
  cursor: pointer;
  color: #b2bed3;
}

.button {
  margin: auto;
  margin-top: -5px;
  width: 80%;
}

.statistic {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
}

.stat_item {
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stat_text {
  margin-bottom: 0;
  font-size: 14px;
  color: #8590a6;

}

.stat_num {
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  color: #121212;
}
</style>
