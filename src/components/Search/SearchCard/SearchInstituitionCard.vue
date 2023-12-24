<template>
  <div>我是机构页面</div>
  <div v-for="(item, index) in searchData">
    <el-container class="List__item">
      <el-aside width="60px" class="List__itemActions">
        <div class="List__itemAction">
          
          <div class="List__itemIndex">
            {{ item.id }}.</div>
        </div>
        
      </el-aside>
  
      <div class="list-item">
        <!-- 名字 -->
        <h2 class="ContentItem__titleText" @click="handleTitleClick">
          <el-icon class="author-icon"><UserFilled /></el-icon>
          {{ item.name }}</h2>
        <!-- 领域 -->
        <div>
          <span  @click="handleAuthorClick">
            <span v-for="(a, index) in item.fields" class="Author-info__content">
              {{ a }} &nbsp;
            </span>
          </span>
        </div>

        <!-- 简介 -->
        <div class="article-brief__content" v-if="item.showFlag">
          {{ item.abstract.slice(0,100) }}
          <!-- 展开 收回 -->
          <span @click="item.showFlag=false" v-if="item.abstract.length > 100">
            
            ...
            <span class="expand-unexpand" >阅读全部</span>
            <el-icon><ArrowDown /></el-icon>
          </span>
        </div>
        <div class="article-brief__content" v-if="!item.showFlag">
          {{ item.abstract}}
          <!-- 展开 收回 -->
          <span class="expand-unexpand" @click="item.showFlag=true">
            收起
            <el-icon><ArrowUp /></el-icon>
          </span>
        </div>
      </div>
    </el-container>
    <el-divider class="item-divider"/>
  </div>
  
  

</template>

<script setup>
import {reactive, onMounted, ref, watch} from 'vue'
import "@/assets/ResultPageIconfont/iconfont.css"
import { searchAuthorByName, searchInstituitionByName } from '@/API'

const searchData = reactive(
  [{
    id:1,
    name: '王老吉',
    fields: ['化学', '数学'],
    abstract: '我是一个粉刷匠粉刷本领强我是一个粉刷匠粉刷本领强我是一个粉刷匠粉刷本领强我是一个粉刷匠粉刷本领强我是一个粉刷匠粉刷本领强我是一个粉刷匠粉刷本领强我是一个粉刷匠粉刷本领强我是一个粉刷匠粉刷本领强',
    showFlag: true
  },
  {
    id:2,
    name: '李老二',
    fields: ['生物', '物理', '地理', '安全健康'],
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    showFlag: true
  },
  {
    id:3,
    name: '李老二',
    fields: ['生物', '物理', '地理', '安全健康'],
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    showFlag: true
  },
  {
    id:4,
    name: '李老二',
    fields: ['生物', '物理', '地理', '安全健康'],
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    showFlag: true
  },
  {
    id:5,
    name: '李老二',
    fields: ['生物', '物理', '地理', '安全健康'],
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    showFlag: true
  },
]) 

const showFlag = ref(true)

const changeShowFlag = (item, flag) => {
  item = flag
}

const handleTitleClick = () => {
  alert('跳转到该文章')
}

const handleAuthorClick = () => {
  alert('搜索该作者相关文章')
}

const handleKeywordClick = () => {
  alert('搜索该关键词相关文章')
}

</script>

<style>
.list-item {
  padding-right: 24px;
}
.ContentItem__titleText {
  margin-top: 0;
  font-size: 18px;
  color: #2f3a91;
  font-weight: 600;
  font-synthesis: style;
  line-height: 1.6;
  word-break: break-word;
  cursor: pointer;
  -webkit-transition: color .3s;
  transition: color .3s;
}
.ContentItem__titleText:hover {
  color: rgb(114, 123, 195);
}
.author-icon {
  margin: 10px 10px;
  color:#646464;
}
.Author-info__content {
  cursor: pointer;
  -webkit-transition: all .3s;
  transition: all .3s;
  color: #646464;
  font-weight: 700;
}
.Author-info__content:hover {
  color: #2f3a91;
}

.article-source__content {
  margin-top: 8px;
}
.article-brief__content {
  margin-top: 10px;
  color: #8590a6;
  cursor: pointer;
  font-size: 15px;
  overflow: hidden;
}
.expand-unexpand {
  font-size: 13px;
  color: #2f3a91;
}
.keywords {
  margin-top: 10px;
  font-size: 14px;
  color: #646464;
  cursor: pointer;
  margin-right: 10px;
  -webkit-transition: all .3s;
  transition: all .3s;
  word-break: break-word;
  height: 24px;
  .keywords__label {
    color:#aeadad
  }
  .keywords__content:hover {
    color: #2f3a91;
  }
}
.List__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-right: 24px;
  position: relative;
  padding: 16px 20px;
}
.List__itemActions {
  width: 60px;
  min-width: 60px;
  padding-top: 4px;
}
.List__itemAction {
  margin-bottom: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
}
.List__itemIndex {
  font-size: 15px;
  color: #646464;
  margin-left: 2px;
}
.QuoteButton {
  padding-left: 10px;
  color: #2f3a91;
  background: #eaebf4;
  border-color: transparent;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.CircleQuoteButton__label {
  color: #2f3a91;
  font-size: 12px;
  margin-top: 6px;
  margin-left: 5px;
  display: block;
}
.item-divider {
  margin-left: 20px;
}
</style>