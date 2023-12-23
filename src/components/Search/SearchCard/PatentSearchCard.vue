<template>
  <div v-for="(item, index) in searchData.data">
    <el-container class="List__item">
      <el-aside width="60px" class="List__itemActions">
        <div class="List__itemAction">
          <div class="List__itemIndex">{{ item.position }}.</div>
        </div>
        <div class="List__itemAction">
          <div class="iconfont icon-quote-left QuoteButton"></div>
        </div>
        
      </el-aside>
  
      <div class="list-item">
        <!-- 标题 -->
        <h2 class="ContentItem__titleText" @click="handleTitleClick">{{ item.title }}</h2>
        <!-- 作者 -->
        <div>
          <el-icon class="author-icon"><UserFilled /></el-icon>
          <span @click="handleAuthorClick">
            <span class="Author-info__content">
              {{ item.inventor }} &nbsp;
            </span>
          </span>
        </div>

        <!-- 发布时间 -->
        <div class="article-source__content">
          <span>申请时间：{{ item.filing_date }}</span>
        </div>

        <!-- snippet摘要 -->
        <div class="article-brief__content">
          <span>摘要：{{ item.snippet }}</span>
        </div>

        <!-- 下载PDF -->
        <div>
          <el-button @click="downLoadPdf(item.pdf)">查看PDF</el-button>
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
import { getPatentResult } from '@/API'
import { useRoute, useRouter } from 'vue-router';
import { useSearchStore } from '@/store'

const searchStore = useSearchStore()

const route = useRoute()
const router = useRouter()

const getSearchData = () => {
  const key = route.query.key
  const value = route.query.value
  const pageNo = currentPage.value.toString()
  const params = {
    patent_name: value,
    page:pageNo,
    num:"15",
  }
  console.log(searchStore.dateValue)

  // 日期查询
  if (searchStore.dateValue !== undefined && searchStore.dateValue !== '') {
    params.filing_after = searchStore.dateValue[0].replace(/-/g, "");
    params.filing_before = searchStore.dateValue[1].replace(/-/g, "");
  }

  // 国家查询
  if (searchStore.countryValue !== '') {
    params.countries = searchStore.countryValue
  }

  // 时间排序
  if (searchStore.sortByTime !== undefined && searchStore.sortByTime !== '') {
    params.sortByTime = searchStore.sortByTime
  }

  // 状态
  if (searchStore.patentStatus !== undefined && searchStore.patentStatus !== '') {
    params.status = searchStore.patentStatus ? "GRANT" : "APPLICATION"
  }

  // 类型
  if (searchStore.patentTypeRatio !== undefined && searchStore.patentTypeRatio !== '') {
    params.type = searchStore.patentTypeRatio
  }

  // TODO
  console.log(params)
  getPatentResult(params).then(result => {
    searchData.data = result.data.organic_results
    
  }).catch(error => {
    console.error(error);
  });
}

const searchData = reactive({})

const showFlag = ref(true)
const currentPage = ref(1)
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

const handleConceptClick = () => {
  alert('搜索该concept相关文章')
}

const changeCurrentPage = () => {
  getSearchData()
}

defineExpose({
  getSearchData,
})

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