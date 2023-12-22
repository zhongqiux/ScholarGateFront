<template>
  <div v-for="(item, index) in searchData.data">
    <el-container class="List__item">
      <el-aside width="60px" class="List__itemActions">
        <div class="List__itemAction">
          <!-- <div class="List__itemIndex">{{ item.id }}.</div> -->
        </div>
        <div class="List__itemAction">
          <div class="iconfont icon-quote-left QuoteButton"></div>
          <div class="CircleQuoteButton__label">
            引用
            <span>{{ item.cited_by_count }}</span>  
          </div>
        </div>
        
      </el-aside>
  
      <div class="list-item">
        <!-- 标题 -->
        <h2 class="ContentItem__titleText" @click="handleTitleClick">{{ item.display_name }}</h2>
        <!-- 作者 -->
        <div>
          <el-icon class="author-icon"><UserFilled /></el-icon>
          <span  @click="handleAuthorClick">
            <span v-for="(a, index) in item.authorships" class="Author-info__content">
              {{ a }} &nbsp;
            </span>
          </span>
        </div>

        <!-- 发布时间 -->
        <div class="article-source__content">
          <span>类型：{{ item.type }}</span>
          发布时间 {{ item.publication_date }}</div>

        
        <!-- concepts -->
        <div class="concepts">
          <span class="keywords__label">concepts:&nbsp;</span>
          <span 
            v-for="(value, index) in conceptsData.data.values"
            class="keywords__content"
            @click="handleConceptClick"
          >
            {{ value }} &nbsp;
          </span>
        </div>
        
        <!-- 关键词 -->
        <div class="keywords" >
          <span class="keywords__label">关键词: </span>
          <span 
            v-for="(keyword, index) in item.keywords" 
            class="keywords__content"
            @click="handleKeywordClick"
          >
            {{ keyword }} &nbsp;
          </span>
        </div>

        <!-- 下载PDF -->
        <div>
          <el-button @click="downLoadPdf(item.pdf_url)">下载PDF</el-button>
          <el-button @click="landingPaper(item.landing_page_url)">landingPage</el-button>
        </div>
        
      </div>
    </el-container>
    <el-divider class="item-divider"/>
  </div>
  <div class="paginationStyle">
    <el-pagination 
      background 
      layout="prev, pager, next" 
      :total="1000" 
      v-model:current-page="currentPage"
      @current-change="changeCurrentPage"
    />
  </div>
  
  

</template>

<script setup>
import {reactive, onMounted, ref, watch} from 'vue'
import "@/assets/ResultPageIconfont/iconfont.css"
import axios from 'axios';
import { getSearchResult } from '@/API'
import { useRoute, useRouter } from 'vue-router';


// 可能会删除的代码
const searchData = reactive({})
const route = useRoute()
const router = useRouter()

const conceptsData = reactive({
  data:{
    keys:[],
    values:[],
  }
})

const showFlag = ref(true)

const currentPage = ref(1)
const pageNum = ref()

const changeShowFlag = (item, flag) => {
  item = flag
}
const getSearchData = () => {
  let key = route.query.key
  let value = route.query.value
  let pageNo = currentPage.value
  const params = {
    name: value,
  }
  getSearchResult(params, pageNo).then(data => {
    searchData.data = data.data
    conceptsData.data.keys = Object.keys(data.data[0].concepts)
    conceptsData.data.values = Object.values(data.data[0].concepts)
  }).catch(error => {
    console.error(error);
  });
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

const handleConceptClick = () => {
  alert('搜索该concept相关文章')
}

const downLoadPdf = (pdf_url) => {
  if (pdf_url == null) {
    alert('该论文没有PDF!')
  } else {
    window.open(pdf_url, '_blank')
  }
}

const landingPaper = (landing_page_url) => {
  
  if (landing_page_url == null) {
    alert('该论文没有lading paper!')
  } else {
    window.open(landing_page_url, '_blank')
  }
}

const changeCurrentPage = () => {
  getSearchData()
}

onMounted(() => {
  getSearchData()
})

watch(
  () => route.params, // 监听路由参数的变化
  (newParams, oldParams) => {
    // 在路由参数变化时执行的代码
    console.log('路由参数发生变化');
    getSearchData()
  },
  { immediate: true }
)
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
.concepts {
  margin-top: 10px;
  margin-bottom: 30px;
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
.paginationStyle {
  margin-left: 20px;
}
</style>