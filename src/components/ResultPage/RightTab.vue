<template>
  <div class="container" :class="{container2 : isPatent, container : !isPatent}">
    <!-- 下载 -->
    <div class="item" style="margin-top: 13px">
      <div class="title">
        <Link class="icon"/>
        <span>资源下载</span>
      </div>

      <div class="button">
        <el-button v-if="downloadLink == null" disabled="true">暂无资源下载</el-button>
        <el-button v-else @click="toDownload">资源下载</el-button>
      </div>
    </div>

    <!-- 操作 -->
    <div class="item" v-if="!isPatent">
      <div class="title">
        <Operation class="icon"/>
        <span>常用操作</span>
      </div>

      <div class="actions">
        <!--        <el-popover placement="left-start" :width="200" show-after="100" hide-after="100" trigger="click">-->
        <!--          <div>引用格式1</div>-->
        <!--          <div>引用格式2</div>-->
        <!--          <template #reference>-->
        <!--            <div class="action_item" @click="clickAction(0)">-->
        <!--              <i class="iconfont icon-quote-left" :class="{ clickedStyle: isCitation }"></i>-->
        <!--              <span class="action_text" :class="{ clickedStyle: isCitation }">引用</span>-->
        <!--            </div>-->
        <!--          </template>-->
        <!--        </el-popover>-->

        <div class="action_item" @click="clickAction(1)">
          <i class="iconfont icon-star" :class="{ clickedStyle: isFavourite }"></i>
          <span class="action_text" :class="{ clickedStyle: isFavourite }">收藏</span>
        </div>

        <div class="action_item" @click="clickAction(3)">
          <el-icon class="iconfont">
            <DataBoard/>
          </el-icon>
          <span class="action_text">关系图</span>
        </div>


        <!--        <div class="action_item" @click="clickAction(2)">-->
        <!--          <i class="iconfont icon-heart" :class="{ clickedStyle: isRecommend }"> </i>-->
        <!--          <span class="action_text" :class="{ clickedStyle: isRecommend }">推荐</span>-->
        <!--        </div>-->
      </div>
    </div>

    <!-- 统计 -->
    <!--    <div class="item">-->
    <!--      <div class="title">-->
    <!--        <Histogram class="icon"/>-->
    <!--        <span>访问统计</span>-->
    <!--      </div>-->

    <!--      <div class="statistic">-->
    <!--        <div class="stat_item">-->
    <!--          <p class="stat_text">浏览数</p>-->
    <!--          <p class="stat_num">{{ viewNum }}</p>-->
    <!--        </div>-->

    <!--        <div class="stat_item">-->
    <!--          <p class="stat_text">推荐数</p>-->
    <!--          <p class="stat_num">{{ recommendNum }}</p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    &lt;!&ndash; 问题反馈 &ndash;&gt;-->
    <!--    <div class="item" style="border-bottom: transparent">-->
    <!--      <div class="title">-->
    <!--        <Edit class="icon"/>-->
    <!--        <span>问题反馈</span>-->
    <!--      </div>-->

    <!--      <div class="actions">-->
    <!--        <div class="action_item2">-->
    <!--          <i class="iconfont icon-cuowuguanbi2"></i>-->
    <!--          <span class="action_text">数据错误</span>-->
    <!--        </div>-->
    <!--        <div class="action_item2">-->
    <!--          <i class="iconfont icon-undo"></i>-->
    <!--          <span class="action_text">撤稿申请</span>-->
    <!--        </div>-->
    <!--        <div class="action_item2">-->
    <!--          <i class="iconfont icon-jinggao2"> </i>-->
    <!--          <span class="action_text">著作权申诉</span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>

  <el-dialog v-model="dialogVisible" title="用户未登录" width="30%" :center="alignCenter" :align-center="alignCenter"
             :show-close="showClose" :close-on-click-modal="showClose" :close-on-press-escape="showClose">
    <span>请先进行登录/注册</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="toLogin">
          登录/注册
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Edit, Histogram, Link, Operation} from "@element-plus/icons-vue";
import "@/assets/ResultPageIconfont/iconfont.css"
import {ElMessage} from "element-plus";
import {getPatentData, getPaperData, setStar} from "@/API"
import {useUserStore} from "@/store";
import {router} from "@/router";

export default defineComponent({
  name: "RightTab",
  components: {Edit, Histogram, Operation, Link},
  props: ['isPatent'],

  data() {
    return {
      viewNum: 0,
      recommendNum: 0,
      isCitation: false,
      isFavourite: false,
      isRecommend: false,
      downloadLink: null,
      data: null,
      paperId: null,
      paperName: null,
      dialogVisible: false,
      alignCenter: true,
      showClose: false,
    }
  },

  methods: {
    toLogin() {
      router.push({
        path: '/login'
      })
    },

    clickAction(type: number) {
      if (type == 0) {
        // if (this.isCitation) {
        //   this.isCitation = false;
        //   alert("取消引用成功！");
        // } else {
        //   this.isCitation = true;
        //   alert("引用成功！");
        // }
      } else if (type == 1) {
        if (!this.isFavourite) {
          this.isFavourite = true;
          this.starSet()

        }
        // } else if (type == 2) {
        //   if (this.isRecommend) {
        //     this.isRecommend = false;
        //     ElMessage({
        //       message: '取消推荐',
        //       duration: 1500,
        //     })
        //   } else {
        //     this.isRecommend = true;
        //     ElMessage({
        //       message: '推荐成功',
        //       type: 'success',
        //       duration: 1500,
        //     })
        //   }

      }else if(type == 3){
        router.push({
          path: '/relation',
          query: {
            id: this.paperId
          }
        })
      }
    },

    async patentDataGet(patentId: String) {
      const result = await getPatentData(patentId);
      console.log(result);

      if (result.flag) {
        if (result.data.organic_results[0].pdf) {
          this.downloadLink = result.data.organic_results[0].pdf
        }
      }
    },


    async paperDataGet(paperId: String) {
      const result = await getPaperData(paperId);
      console.log(result);

      if (result.flag) {
        this.downloadLink = result.data.open_access.oa_url
        this.paperName = result.data.title
        this.isFavourite = result.data.star

        var str: any = result.data.id
        var index = str.lastIndexOf("\/")
        str = str.substring(index + 1, str.length)

        this.paperId = str
      }

    },

    async starSet() {
      if (this.paperId != null && this.paperName != null) {
        const result = await setStar(this.paperId, this.paperName)
        console.log(result)

        if (result.flag) {
          ElMessage({
            message: '收藏成功',
            type: 'success',
            duration: 1500,
          })
        } else {
          this.dialogVisible = true
        }

      }

    },

    toDownload() {
      if (this.downloadLink != null) {
        window.open(this.downloadLink, "_blank")
      }
    }
  },

  mounted() {
    const id = this.$route.query.id
    if (this.isPatent) {
      this.patentDataGet(id);
    } else {
      this.paperDataGet(id);
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 250px;
  background-color: #f3f5f8;
  margin-top: 30px;
}

.container2 {
  display: flex;
  flex-direction: column;
  height: 150px;
  background-color: #f3f5f8;
  margin-top: 30px;
}

.item {
  padding-bottom: 23px;
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
  margin: 10px;
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

.clickedStyle {
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
