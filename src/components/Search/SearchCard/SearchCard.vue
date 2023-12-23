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
        <h2 class="ContentItem__titleText" @click="handleTitleClick(item.id)" v-html="item.display_name"></h2>
        <!-- 作者 -->
        <div>
          <el-icon class="author-icon"><UserFilled /></el-icon>
          <span  @click="handleAuthorClick">
            <span v-for="(a, index) in item.authorships" class="Author-info__content">
              {{ a }} &nbsp;
            </span>
          </span>
        </div>


        <!-- 类型 -->
        <div class="keywords">
          <span class="keywords__label">类型：&nbsp;</span>
          <span class="keywords__content">{{ item.type }}</span>
        </div>

        <!-- 发布时间 -->
        <div class="keywords">
          <span class="keywords__label">发布时间：&nbsp;</span>
          <span class="keywords__content">{{ item.publication_date }}</span>
        </div>
        
        
        <!-- concepts -->
        <div class="concepts">
          <span class="keywords__label">concepts:&nbsp;</span>
          <span 
            v-for="(value, key, index) in item.concepts"
            class="keywords__content"
            @click="handleConceptClick(key)"
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
            <span v-html="keyword"></span>
            <span>&nbsp;</span>
          </span>
        </div>

        <!-- 下载PDF -->
        <div class="downloadPdf">
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
import { useRoute, useRouter } from 'vue-router'
import { useSearchStore } from '@/store'


const searchStore = useSearchStore()

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

  const params = reactive({
    name: value,
  })

  // 可获取全文
  params.has_fulltext = searchStore.hasFullTextValue ? "true" : "false"

  // 日期查询
  if (searchStore.dateValue !== undefined) {
    params.start_date = searchStore.dateValue[0]
    params.stop_date = searchStore.dateValue[1]
  }

  // 排序方式
  if (searchStore.sortFunc !== undefined) {
    params.sort_func = searchStore.sortFunc
  }
  
  // 类型
  if (searchStore.typeValue !== '') {
    params.type = searchStore.typeValue
  }
  // TODO
  console.log(params)
  getSearchResult(params, pageNo).then(result => {
    searchData.data = result.data
    // 将concepts渲染到左侧栏里
    searchStore.concepts = result.data[0].concepts
  }).catch(error => {
    console.error(error);
  });
}
const handleTitleClick = (url) => {
  const id = url.substring(url.lastIndexOf('/') + 1);
  router.push(`result?id=${id}`)
}

const handleAuthorClick = () => {
  alert('搜索该作者相关文章')
}

const handleKeywordClick = () => {
  alert('搜索该关键词相关文章')
}

const handleConceptClick = (url) => {
  const result = url.substring(url.lastIndexOf('/') + 1);
  console.log(result);
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

// 父组件传给子组件的对象
const props = defineProps([])

// 向父组件暴露的函数
defineExpose({
  getSearchData,
})

onMounted(() => {
  getSearchData()
})

watch(
  () => route.params,
  (new1,new2) => {
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
  display: flex;
  margin-top: 20px;
  margin-right: 10px;
  font-size: 14px;
  color: #646464;
  cursor: pointer;
  
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
  .keywords__content {
    margin-left: 5px;
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
  margin-right: 10px;
  margin-bottom: 0px;
  padding-bottom: 15px;
  font-size: 14px;
  color: #646464;
  cursor: pointer;
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
.downloadPdf {
  margin-top: 20px;
}
</style>