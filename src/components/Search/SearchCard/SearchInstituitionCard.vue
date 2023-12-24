<template>
  <div v-for="(item, index) in searchData.data">
    <el-container class="List__item">
      <el-aside width="60px" class="List__itemActions">
        <div class="List__itemAction">
          <div class="List__itemIndex">
            {{ index + 1 }}.</div>
        </div>
      </el-aside>
      <div class="list-item">
        <!-- display_name -->
        <div class="">
          <h2 class="ContentItem__titleText" @click="handleNameClick(item.id)">
            <el-icon class="author-icon"><UserFilled /></el-icon>
            {{ item.display_name }}
          </h2>
        </div>
        <!-- works_count -->
        <div class="keywords">
          <span class="keywords__label">works_count:</span>
          <span class="keywords__content">
            {{ item.works_count }}
          </span>
        </div>
        <!-- cited_by_count -->
        <div class="keywords">
          <span class="keywords__label">cited_by_count:</span>
          <span class="keywords__content">
            {{ item.cited_by_count }}
          </span>
        </div>
        <!-- institution_name -->
        <div class="keywords">
          <span class="keywords__label">institution_name:</span>
          <span class="keywords__content">
            {{ item.institution_name }}
          </span>
        </div>
        <!-- concept_name_list -->
        <div class="keywords">
          <span class="keywords__label">concept_name_list:</span>
          <span @click="handleAuthorClick" class="keywords__content">
            <span v-for="(a, index) in item.concept_name_list" class="Author-info__content">
              {{ a }} &nbsp;
            </span>
          </span>
        </div>
      </div>
    </el-container>
    <el-divider class="item__divider"/>
  </div>
  <div v-if="searchData.data===undefined">
    <el-empty description="无结果" />
  </div>
  <div class="paginationStyle" v-if="searchData.data!==undefined">
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
import { searchAuthorByName, searchInstituitionByName } from '@/API'
import { useRoute, useRouter } from 'vue-router'
import { useSearchStore } from '@/store'

const searchStore = useSearchStore()
const route = useRoute()
const router = useRouter()
const currentPage = ref(1)
const searchData = reactive({})
const showFlag = ref(true)

const changeShowFlag = (item, flag) => {
  item = flag
}

const handleNameClick = (url) => {
  const extractedString = url.substring(url.lastIndexOf("/") + 1);
  console.log(extractedString)
  router.push(`/researcher/${extractedString}`)
}

const getSearchData = () => {
  let key = route.query.key
  let value = route.query.value
  let pageNo = currentPage.value
  searchInstituitionByName(value, pageNo).then(result => {
      searchData.data = result.data.results
      searchData.meta = result.data.meta
    }).catch(error => {
      console.error(error);
    });
  console.log(searchData.data)
  console.log(searchData.meta)
}

const changeCurrentPage = () => {
  getSearchData()
}

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
.item__divider {
  margin-left: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
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
</style>