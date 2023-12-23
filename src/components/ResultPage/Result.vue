<template>
  <!-- 学术成果标题 -->
  <div>
    <div id="info" class="title">
      <span class="title_name">{{ title }}</span>
    </div>
    <el-divider style="border-color: #d5d8e9; border-width: 2px"></el-divider>

    <!-- 作者信息: 学术成果状态下-->
    <div class="author_row" v-if="!isPatent">
      <Avatar class="icon"/>
      <span class="author_name" @click="toAuthor(index)" v-for="(authors, index) in authorNames"> <!-- 跳转科研人员页面 -->
        {{ authors }}
        <span v-if="index != authorNames.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
      </span><!-- 跳转科研人员页面 -->
    </div>

    <!-- 作者信息: 专利状态下-->
    <div class="author_row" v-if="isPatent">
      <span class="text" style="font-weight: bold; color: #8590a6">发明人:</span> <!-- 跳转科研人员页面 -->
      <span class="author_name2" @click="toAuthor(authors)" v-for="(authors, index) in authorNames">
        {{ authors }}
        <span v-if="index != authorNames.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
      </span> <!-- 跳转科研人员页面 -->
    </div>

    <!-- 专利申请人：专利状态下 -->
    <div class="row" v-if="isPatent">
      <span class="text" style="font-weight: bold; color: #8590a6">申请人:</span> <!-- 跳转科研人员页面 -->
      <span class="author_name2" @click="toAuthor(assignee)" v-for="(assignee, index) in assigneeNames">
        {{ assignee }}
        <span v-if="index != assigneeNames.length - 1" style="color: #8590a6; font-weight: normal"
              @click.stop="">,</span>
      </span>

    </div>

    <!-- 其他信息：学术成果状态下 -->
    <div class="row" v-if="!isPatent">
      <span class="text" style="color: #8590a6">发表日期:</span>
      <span class="text">{{ publicationDate }}</span>
      <span class="text" style="color: #8590a6">引用次数:</span>
      <span class="text">{{ citationNum }}</span>

    </div>
    <div class="row" v-if="!isPatent">
      <span class="text" style="color: #8590a6">相关领域:</span>
      <span class="text2" v-for="(concept, index) in concepts" key="index" @click="toConcepts(index)">
        {{ concept }}
        <span v-if="index != concepts.length - 1" style="color: #8590a6; font-weight: normal" @click.stop>,</span>
      </span>
    </div>

    <!-- 其他信息：专利状态下 -->
    <div class="row" v-if="isPatent">
      <span class="text" style="color: #8590a6">申请日:</span>
      <span class="text">{{ registerDate }}</span>
      <!--      <span class="text" style="color: #8590a6">申请号:</span>-->
      <!--      <span class="text">{{ registerNo }}</span>-->
      <span class="text" style="color: #8590a6">公开日:</span>
      <span class="text">{{ publicationDate }}</span>
      <span class="text" style="color: #8590a6">公开号:</span>
      <span class="text">{{ publicationNo }}</span>
      <span class="text" style="color: #8590a6">IPC分类号:</span>
      <span class="ipc_text" v-for="(IPC, index) in IPCNo" key="index">
        {{ IPC }}
        <span v-if="index != IPCNo.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
      </span>

    </div>

    <!--  简介内容  -->
    <div class="context">
      <div class="context_text">
        <span @click="expandContent(0)" v-if="message">{{ isExpand ? message : filter(message) }}</span>
        <span @click="expandContent(1)" class="expand_button" v-if="longMsg">
          {{ isExpand ? '收起' : '阅读全部' }}
          <ArrowUp class="expand_icon" v-if="isExpand"/>
          <ArrowDown class="expand_icon" v-else/>
        </span>
      </div>
    </div>

    <!--  关键词: 学术成果状态下   -->
    <div class="tag_row" v-if="!isPatent && keyWords.length != 0">
      <span class="text">关键词：</span>
      <el-tag class="tags" v-for="(keyword) in keyWords" effect="plain" @click="toKeyWord(keyword)">
        {{ keyword }}
      </el-tag>
    </div>
  </div>
  <!-- 导航栏监听用 -->
  <div id="tag1"></div>

  <!--  相关推荐    -->
  <div id="recommend">
    <div class="page_divider">
      <p class="divider_title">相关推荐</p>
      <p class="line"></p>
    </div>


    <div v-if="recommendation.length != 0">
      <!-- 导航栏监听用 -->
      <div id="tag4" v-if="!isPatent"></div>

      <div v-for="(recommends, index) in recommendation" key="index" class="recommend_container">
        <div class="recommend_list">
          <span style="color: #2f3a91; font-size: 16px; width: 40px;">{{ index + 1 }}.</span>
          <div class="recommend_item">
            <p class="recommend_title" @click="toResult(recommends.id)">{{ recommends.title }}</p>
            <p class="recommend_info">发表日期：{{ recommends.publishDate }}</p>
            <p class="recommend_info">
              <span class="recommend_info">作者：</span>
              <span class="recommend_info" v-for="(author, index) in recommends.author">
              {{ author }}
             <span v-if="index != recommends.author.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
            </span>
            </p>

            <p class="recommend_info">
              <span class="recommend_info">关键词：</span>
              <span class="recommend_info" v-for="(keyword, index) in recommends.keyword">
              {{ keyword }}
             <span v-if="index != recommends.keyword.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
            </span>
            </p>


          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <el-empty description="无相关推荐"/>
    </div>

    <!-- 导航栏监听用 -->
    <div id="tag2" v-if="isPatent"></div>
  </div>

  <!-- 导航栏监听用 -->
  <div id="tag2" v-if="!isPatent"></div>

  <!--  交流评论    -->
  <div id="comment" class="page_divider">
    <p class="divider_title">交流评论</p>
    <p class="line"></p>
  </div>

  <!-- 导航栏监听用 -->
  <div id="tag3">
    <div style="border: #8590a6 solid 1px; height: 300px; width: 100%">
      <el-input disabled placeholder="评论功能暂缓开放，感谢您的支持"
                style="width: 95%; margin-top: 20px;margin-bottom: 50px"/>
      <div style="display: flex; flex-direction: column;align-items: center; justify-content: center">
        <el-icon style="color: #909399; font-size: 100px">
          <ChatLineSquare/>
        </el-icon>
        <p style="font-size: 16px; color: #909399">还没有评论，发表第一个评论吧</p>
      </div>

    </div>
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
import {defineComponent} from 'vue'
import {Avatar, ArrowDown, ArrowUp,} from '@element-plus/icons-vue'
import {getPatentData, getPaperData, getRelatedWork} from "@/API"
import {ElLoading} from "element-plus"
import {router} from '@/router'
import {adaptSummary} from "@/API";
import {useUserStore} from '@/store'


export default defineComponent({
  name: "Result",
  components: {ArrowDown, ArrowUp, Avatar},
  props: ['isPatent'],
  data() {
    return {
      isExpand: false,
      maxHeight: 43,
      message: "",
      keyWords: [],
      recommendation: [],
      title: "",
      authorNames: [],
      assigneeNames: [],
      registerDate: "",
      registerNo: " CN202310829800.3",
      publicationDate: "",
      publicationNo: "",
      citationNum: "",
      IPCNo: [],
      longMsg: false,
      dialogVisible: false,
      alignCenter: true,
      showClose: false,
      concepts: [],
      conceptId: [],
      authorId: [],
    }
  },

  methods: {
    expandContent(flag: number) {
      console.log(flag);
      if (flag == 1) {
        this.isExpand = !this.isExpand;
      } else {
        if (!this.isExpand) {
          this.isExpand = !this.isExpand;
        }
      }

    },

    filter(msg: String) {
      if (!msg) {
        return '';
      }

      msg = msg.toString();
      if (msg.length > 300) {
        this.longMsg = true
        return msg.substring(0, 300) + "..."
      } else {
        this.longMsg = false
        return msg;
      }
    },

    toKeyWord(keyword: any) {
      router.push({
        path: '/explorePaper',
        query: {
          key: 'works',
          value: keyword
        }
      })
    },


    toAuthor(index: any) {
      if (!this.isPatent) {
        console.log(this.authorId[index])
        router.push({
          name: 'researcher',
          params: {
            doi: this.authorId[index],
          }
        })
      }

    },

    toConcepts(index: any) {
      console.log(index, this.conceptId)
      if (this.conceptId.length != 0) {
        router.push({
          path: '/field',
          query: {
            field: this.conceptId[index],
          }
        })
      }
    },

    toLogin() {
      router.push({
        path: '/login'
      })
    },

    toResult(paperId:any){
      if (!this.isPatent) {
        router.push({
          path: '/result',
          query: {
            id: paperId,
          }
        })
      }
    },


    async patentDataGet(patentId: String) {
      const loading = ElLoading.service({
        lock: true,
      })

      const result = await getPatentData(patentId);
      console.log(result)

      if (result.flag) {
        loading.close()
        this.title = result.data.organic_results[0].title //标题
        this.registerDate = result.data.organic_results[0].filing_date //申请日
        this.publicationDate = result.data.organic_results[0].publication_date //公开日
        this.publicationNo = result.data.organic_results[0].publication_number //公开号

        var i: any
        //申请人
        for (i = 0; i < result.data.summary.assignee.length; i++) {
          if (result.data.summary.assignee[i].key != "Total")
            this.assigneeNames.push(result.data.summary.assignee[i].key)
        }

        //发明人
        for (i = 0; i < result.data.summary.inventor.length; i++) {
          if (result.data.summary.inventor[i].key != "Total")
            this.authorNames.push(result.data.summary.inventor[i].key)
        }

        //IPC分类号
        for (i = 0; i < result.data.summary.cpc.length; i++) {
          if (result.data.summary.cpc[i].key != "Total")
            this.IPCNo.push(result.data.summary.cpc[i].key)
        }

        //摘要
        this.message = result.data.organic_results[0].snippet

      } else {
        if (useUserStore().token == "undefined") {
          alert("请登录")
        }
      }


    },

    async paperDataGet(paperId: String) {
      const loading = ElLoading.service({
        lock: true,
      })

      const result = await getPaperData(paperId);
      console.log(result)

      if (result.flag) {
        loading.close()
        this.title = result.data.title
        this.publicationDate = result.data.publication_date
        this.citationNum = result.data.cited_by_count
        this.message = adaptSummary(result.data.summary)

        //作者
        for (var i = 0; i < result.data.authorships.length; i++) {
          this.authorNames.push(result.data.authorships[i].author.display_name)

          var str: any = result.data.authorships[i].author.id
          var index = str.lastIndexOf("\/")
          str = str.substring(index + 1, str.length)

          this.authorId.push(str)
        }

        //关键词
        for (var i = 0; i < result.data.keywords.length; i++) {
          this.keyWords.push(result.data.keywords[i].keyword)
        }

        //相关领域
        for (var i = 0; i < result.data.concepts.length; i++) {
          this.concepts.push(result.data.concepts[i].display_name)

          var str: any = result.data.concepts[i].id
          var index = str.lastIndexOf("\/")
          str = str.substring(index + 1, str.length)

          this.conceptId.push(str)

        }
      } else {
        if (useUserStore().token == "undefined") {
          loading.close()
          this.dialogVisible = true
        }
      }
    },

    async relatedWorkGet(paperId: any) {
      const result = await getRelatedWork(paperId)
      console.log(result)

      if (result.flag) {
        for (var i = 0; i < result.data.results.length; i++) {
          var str: any = result.data.results[i].id

          var index = str.lastIndexOf("\/")
          str = str.substring(index + 1, str.length)

          let id = str
          let title = result.data.results[i].title
          let publishDate = result.data.results[i].publication_date
          let author = []
          let keyword = []
          for (var j = 0; j < result.data.results[i].authorships.length; j++) {
            author.push(result.data.results[i].authorships[j].author.display_name)
          }

          for (var j = 0; j < result.data.results[i].keywords.length; j++) {
            keyword.push(result.data.results[i].keywords[j].keyword)
          }

          this.recommendation.push({id, title, publishDate, author, keyword})

        }

      }

      console.log(this.recommendation)
    }

  },

  mounted() {
    const id = this.$route.query.id
    if (this.isPatent) {
      this.patentDataGet(id)
    } else {
      this.paperDataGet(id)
      this.relatedWorkGet(id)
    }
  },

  watch:{
    '$route': function (){
      location.reload()
    }
  }
})
</script>

<style scoped>
.title {
  text-align: left;
  margin-top: 20px;
}

.title_name {
  font-size: 22px;
  color: #2f3a91;
  margin-top: 8px;
  margin-right: 15px;
  font-weight: bold;
}


.title_type {
  font-size: 14px;
  color: #2f3a91;
  margin-top: 10px;
  font-weight: bold;
}

.icon {
  height: 17px;
  width: 17px;
  padding-left: 5px;
  padding-right: 5px;
  color: #8590a6;
}

.author_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  margin-top: -10px;
}

.author_name {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  font-weight: bold;
  color: #121212;
}

.author_name2 {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  font-weight: bold;
  color: #121212;
}

.author_name:hover {
  cursor: pointer;
  color: #2f3a91;
  text-decoration: underline;
  text-decoration-style: dotted;
}

.text {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  color: #121212;
}

.text2 {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  color: #121212;
}

.text2:hover {
  cursor: pointer;
  color: #2f3a91;
  text-decoration: underline;
  text-decoration-style: dotted;
}

.context_text {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  color: #646464;
}

.context_text:hover {
  cursor: pointer;
  color: #121212;
}

.row {
  display: flex;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
}

.context {
  display: inline-block;
  align-items: center;
  justify-content: flex-start;
}

.expand_button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #2f3a91;
  font-size: 13px;
  margin-left: 5px;
}

.expand_button:hover {
  cursor: pointer;
  color: #7284fa;
}

.expand_icon {
  height: 15px;
  width: 15px;
  padding-left: 3px;
}

.tag_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  flex-wrap: wrap;
}

.tags {
  color: #2f3a91;
  border-color: #2f3a91;
  background-color: transparent;
  border-radius: 15px;
  height: 20px;
  padding: 2px 8px;
  margin: 5px
}

.tags:hover {
  color: #7284fa;
  border-color: #7284fa;
  cursor: pointer;
}

.page_divider {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
}

.divider_title {
  font-size: 18px;
  color: #2f3a91;
  margin-right: 15px;
  font-weight: bold;
  background-color: transparent;
  width: 100px;
}

.line {
  height: 1.5px;
  background-color: #d5d8e9;
  width: 100%;
}

.recommend_container {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.recommend_list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: left;
}

.recommend_item {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.recommend_title {
  color: #121212;
  font-size: 16px;
  margin: 0;
  text-align: left;
}

.recommend_title:hover {
  cursor: pointer;
  color: #2f3a91;
  text-decoration: underline;
  text-decoration-style: dotted;
}

.recommend_info {
  color: #8590a6;
  font-size: 14px;
  margin: 0;
  margin-top: 6px;
  text-align: left;
}

.ipc_text {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  color: #121212;
}
</style>
