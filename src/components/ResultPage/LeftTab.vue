<template>
  <div>
    <div class="page_navigation">
      <Promotion class="icon"/>
      <span class="page_navigation_title">页面导航</span>
    </div>
    <el-timeline>
      <el-timeline-item v-for="(activity, index) in activities" :key="index" v-model="nowShowing"
                        :hollow="index == nowShowing" :color="activity.color">
        <el-card shadow="none" :class="{ choose: nowShowing == index }" @click="handleClick(index, activity.hrefId)">
          {{ activity.content }}
        </el-card>

      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {ArrowDown, ArrowUp, Avatar, Promotion} from '@element-plus/icons-vue';

export default defineComponent({
  name: "LeftTab",
  components: {Promotion, ArrowDown, ArrowUp, Avatar},
  props: ['isPatent'],
  data() {
    return {
      activities: [
        {
          content: "基本信息",
          color: "#2f3a91",
          hrefId: "#info"
        },
        {
          content: "相关推荐",
          color: "#8590a6",
          hrefId: "#recommend"
        },
        {
          content: "交流评论",
          color: "#8590a6",
          hrefId: "#comment"
        }
      ],

      nowShowing: 0,
    }
  },

  methods: {
    handleClick(index: number, anchor: any) {
      this.nowShowing = index;
      let i: number;
      for (i = 0; i < this.activities.length; i++) {
        if (i == index) {
          this.activities[i].color = "#2f3a91";
        } else {
          this.activities[i].color = "#8590a6";
        }
      }

      // 处理点击导航后滚动到相应位置
      if (anchor != null) {
        if (anchor == "#info") {
          this.scrollTo(document.documentElement.offsetTop);
        } else {
          let element = document.querySelector(anchor);

          if (element != null) {
            this.scrollTo(element.offsetTop);
          }
        }
      }
    },

    // 滚动
    scrollTo(offsetTop: any) {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    },

    // 监听页面切换导航栏
    handleIntersection(entries: any) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 执行滚动到目标元素时的逻辑
          let targetId = entry.target.id

          if (window.scrollY < 10) {
            this.handleClick(0, null);
          } else {
            if (targetId == "tag1") {
              this.handleClick(0, null);
            } else if (targetId == "tag2") {
              this.handleClick(1, null);
            }else if (targetId == "tag4") {
              this.handleClick(1, null);
            } else if (targetId == "tag3") {
              this.handleClick(2, null);
            }
          }

        }
      });
    },

    // 监听页面
    handleScroll() {
      let targetElement1 = document.getElementById("tag1")
      let targetElement2 = document.getElementById("tag2")
      let targetElement3 = document.getElementById("tag3")
      let targetElement4 = document.getElementById("tag4")

      const observer = new IntersectionObserver(this.handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
      });

      // 将目标元素传递给观察者
      if (targetElement1 != null && targetElement2 != null && targetElement3 != null) {
        observer.observe(targetElement1);
        observer.observe(targetElement2);
        observer.observe(targetElement3);
        observer.observe(targetElement4);
      }
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
})
</script>

<style scoped>
.el-timeline {
  margin: auto;
  margin-top: 20px;
  padding: 10px;

}

.el-timeline-item {
  height: 25px;
  width: 80px;
  --el-timeline-node-color: rgba(212, 212, 212, 0.50);
}


.el-card {
  color: #8590a6;
  background-color: transparent;
  border: none;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: -5px;
}

.el-card:hover {
  cursor: pointer;
  background-color: rgba(212, 212, 212, 0.50);
  border: none;
}

.choose {
  background-color: rgba(212, 212, 212, 0.50);
  border: none;
  color: #2f3a91;
}

.icon {
  height: 17px;
  width: 17px;
  padding-left: 5px;
  padding-right: 5px;
  color: #8590a6;
}

.page_navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 0px;
  width: 80%;
  height: 35px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.page_navigation_title {
  color: #8590a6;
  font-size: 14px;
}
</style>
