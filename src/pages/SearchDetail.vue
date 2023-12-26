<template>
  <div class="body">
    <el-container class="ContentLayout">
      <!-- 左边栏 -->
      <el-aside width="150px" class="AppSearchAggregation ContentLayout__sideColumn">
        <div class="AppSearchAggregation__label">分类浏览</div>
        <div class="demo-collapse">
          <el-collapse v-model="activeNames"> 
            <!-- 论文的左框 -->
            <el-collapse-item title="论文类型" name="1" v-if="active_tab==1">
              <div>
                <div v-for="(item, index) in tab_contents.item1" class="AggregationListItem">
                  <span class="AggregationListItemKey">
                    <el-checkbox 
                      v-model="item.checkbox"
                      label="" 
                      size=""
                      class="checkbox" 
                    />
                    {{ item.label }}
                  </span>
                </div>
              </div>
            </el-collapse-item>

            <!-- 专利的左框 -->
            <el-collapse-item title="国家" name="4" v-if="active_tab==2">
              <div>
                <div v-for="(item, index) in tab_contents.item4" class="AggregationListItem">
                  <span class="AggregationListItemKey">
                    <el-checkbox 
                      v-model="item.checkbox"
                      label="" 
                      size=""
                      class="checkbox" 
                    />
                    {{ item.name }}
                  </span>
                </div>
              </div>
            </el-collapse-item>

            <el-collapse-item title="专利类型" name="5" v-if="active_tab==2">
              <div>
                <div class="AggregationListItem">
                  <span class="AggregationListItemKey">
                    <el-radio-group v-model="patentTypeRatio" class="ml-4">
                      <el-radio label="PATENT" size="large">专利</el-radio>
                      <el-radio label="DESIGN" size="large">设计</el-radio>
                    </el-radio-group>
                  </span>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-aside>
      
      <!-- 中间栏 -->
      <el-main>
        <div class="card">
          <!-- 搜索标签 -->
          <div class="AppSearchTabs">
            <div class="AppSearchTab" :class="{'is-active': active_tab === 1}" @click="changeActiveTab(1)">论文</div>
            <div class="AppSearchTab" :class="{'is-active': active_tab === 2}" @click="changeActiveTab(2)">专利</div>
          </div>
          <!-- 搜索筛选项 -->
          <el-row class="AppSearchFilter">
            <el-col :span="2">
              <el-button @click="handleSearch">搜索</el-button>
            </el-col>
            <el-col :span="12">
              <el-date-picker
                v-model="dateValue"
                type="daterange"
                start-placeholder="Start date"
                end-placeholder="End date"
                format="YYYY/MM/DD"
                value-format="YYYY-MM-DD"
              />
            </el-col>
            <el-col :span="4">
              <!-- 论文 -->
              <el-select v-model="sortFunc" placeholder="排序方式" size="default" v-if="active_tab==1">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <!-- 专利 -->
              <el-select v-model="sortByTime" placeholder="时间排序" size="default" v-if="active_tab==2">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col :span="4">
              <!-- 论文 -->
              <span class="base-switch__button" v-if="active_tab==1">
                <el-switch v-model="hasFullTextValue" />
                <span class="base-switch__label">可获取全文</span>
              </span>
              
              <!-- 专利 -->
              <span class="base-switch__button" v-if="active_tab==2">
                <el-switch v-model="patentStatus" />
                <span class="base-switch__label" v-if="patentStatus">已授予</span>
                <span class="base-switch__label" v-if="!patentStatus">申请中</span>
              </span>
            </el-col>
          </el-row>
          <div class="AppSearchTabContent">
            <div class="AppSearchFilters">
              <div class="AppFilterMeta">
              </div>
              <div class="AppFilterInput">
              </div>
              <div class="AppFilterSelect">
              </div>
            </div>
          </div>
          <!-- 筛选条件 -->
          <div class="AppSearchRefineItems">
            <div class="AppSearchRefineLabel">筛选条件</div>
            <span class="AppSearchRefineItem">
              <span v-if="filterItems.length===0">空</span>
              <span v-for="(item, index) in filterItems" class="AppSearchRefineItemText">
                <el-icon class="delete" @click="deleteSearchTab(index)"><Close/></el-icon>
                <span class="Highlight">{{ item.label }}:</span>
                {{ item.content }}
                
              </span>
            </span>
          </div>
          <!-- 搜索详情 -->
          <div class="List"></div>
          <!-- 论文 -->
          <div v-if="active_tab == 1">
            <SearchCard ref="SearchCardRef"/>
          </div>
          
          <!-- 专利 -->
          <div v-if="active_tab == 2">
            <PatentSearchCard ref="PantentCardRef"/>
          </div>
        </div>
        
      </el-main>
      
      <!-- 右边栏 -->
      <el-aside width="40px">
        <el-button @click="scrollToTop" class="scroll-top-button">
          回到顶部
        </el-button>
      </el-aside>
    </el-container>
  </div>
  
</template>


<script setup>
import { onMounted, reactive, ref, shallowRef, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElCheckbox, ElCheckboxGroup, ElEmpty, ElNotification, ElPagination } from "element-plus";
import { Calendar, Search } from '@element-plus/icons-vue'

import SearchCard from '@/components/Search/SearchCard/SearchCard.vue'
import PatentSearchCard from '@/components/Search/SearchCard/PatentSearchCard.vue'
import { getSearchResult, getPatentResult } from '@/API'
import { useSearchStore } from '@/store'


const searchStore = useSearchStore()
const route = useRoute()
const router = useRouter()

const searchData = reactive({})

// 论文面板的ref
const SearchCardRef = ref(null)
// 专利面板的ref
const PantentCardRef = ref(null)
const activeNames = ref(['1','2','3','4'])
const active_tab = ref(1)
const typeCheckbox = ref()
const conceptsCheckboxs = ref()
const SearchValue = ref('')


// 传递给子组件的对象
const hasFullTextValue = ref(true)
const dateValue = ref()
const typeValue = ref()
const countryValue = ref()
const sortFunc = ref()
const sortByTime = ref()
const patentStatus = ref()
const patentTypeRatio = ref()

const filterItems = ref([
  'nihao','nihaoma'
])

const options1 = [
  {value: 'Option1',label: '今年',},
  {value: 'Option2',label: '近三年',},
  {value: 'Option3',label: '近五年',},
  {value: 'Option4',label: '近十年',},
]
const options2 = [
  {value: 'display_name',label: '名称排序(升序)',},
  {value: 'display_name:desc',label: '名称排序(降序)',},
  {value: 'relevance_score:desc',label: '综合排序',},
  {value: 'publication_date',label: '发布时间(升序)',},
  {value: 'publication_date:desc',label: '发布时间(降序)',},
  {value: 'cited_by_count',label: '引用次数(升序)',},
  {value: 'cited_by_count:desc',label: '引用次数(降序)',},
]
const options3 = [
  {value: 'new',label: '从新到旧',},
  {value: 'old',label: '从旧到新',},
]

const tab_contents = reactive({
  item1:[
    // 论文类型
    {label: 'article', checkbox: false},
    {label: 'book-chapter', checkbox: false},
    {label: 'book', checkbox: false},
    {label: 'dissertation', checkbox: false},
    {label: 'dataset', checkbox: false},
    {label: 'report', checkbox: false},
    {label: 'letter', checkbox: false},
    {label: 'standard', checkbox: false},
    {label: 'editorial', checkbox: false},
    {label: 'paratext', checkbox: false},
    {label: 'other', checkbox: false},
  ],
  // 年份
  item3:[
    {label: '2023',checkbox: false},
    {label: '2022',checkbox: false},
    {label: '2021',checkbox: false},
    {label: '2020',checkbox: false},
  ],
  // 国家
  item4:[
    {label: 'US',checkbox: false, name: '美国'},
    {label: 'WO',checkbox: false, name: '世界知识产权组织'},
    {label: 'CN',checkbox: false, name: '中国'},
    {label: 'JP',checkbox: false, name: '日本'},
    {label: 'DE',checkbox: false, name: '德国'},
    {label: 'FR',checkbox: false, name: '法国'},
    {label: 'GB',checkbox: false, name: '英国'},
    {label: 'CA',checkbox: false, name: '加拿大'},
    {label: 'AU',checkbox: false, name: '澳大利亚'},
    {label: 'IN',checkbox: false, name: '印度'},
  ],
  // litigation
  item7:[
    {label: 'YES',checkbox: false, name: 'yes'},
    {label: 'NO',checkbox: false, name: 'no'},
  ]
})

const conceptsData = reactive({
  data:{
    keys:[],
    values:[],
  }
})

// 搜索按钮
const handleSearch = () => {
  if (active_tab.value === 1) {
    handleType()
    searchStore.hasFullTextValue = hasFullTextValue
    searchStore.dateValue = dateValue
    searchStore.typeValue = typeValue
    searchStore.sortFunc = sortFunc
    SearchCardRef.value.getSearchData()
  } else {
    handleCountry()
    searchStore.dateValue = dateValue
    searchStore.countryValue = countryValue
    searchStore.sortByTime = sortByTime
    searchStore.patentStatus = patentStatus
    searchStore.patentTypeRatio = patentTypeRatio
    PantentCardRef.value.getSearchData()
  }
}

const changeActiveTab = (num) => {
  active_tab.value = num
}

// 处理type
const handleType = () => {
  let result = ''
  for (let item of tab_contents.item1) {
    if (item.checkbox) {
      result += item.label;
      result +='|'
    }
  }
  typeValue.value = result
}

// 处理国家
const handleCountry = () => {
  let result = ''
  for (let item of tab_contents.item4) {
    if (item.checkbox) {
      result += item.label
      result += ','
    }
  }
  countryValue.value = result
}

// 添加筛选条件
const addFilterItem = () => {
  filterItems.value.push('')
}

const deleteSearchTab = (index) => {
  filterItems.value.splice(index, 1)
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 可选，平滑滚动效果
  });
}

watch(
  () => searchStore.filterItems,
  (newVal, oldVal) => {
    filterItems.value = newVal
    console.log(newVal)
  }, 
  { immediate: true, deep: true })


</script>

<style>
.body {
  background-color: #f3f5f8;
  padding: 0 0;
  margin: 0 0;
}
.ContentLayout {
  position: relative;
  width: 1200px;
  margin: 10px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.ContentLayout__sideColumn {
  width: 280px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: bottom .3s cubic-bezier(.25,.8,.5,1);
  transition: bottom .3s cubic-bezier(.25,.8,.5,1);
}

.AppSearchAggregation {
  margin-top: 20px;
  margin-left: 20px;
  padding: 0 10px 10px;
  background-color: #bfc3de;
  border-radius: 8px;
  
}

.AppSearchAggregation__label {
  text-align: center;
  color: #2f3a91;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  font-weight: 600;
  letter-spacing: 4px;
}

.base-collapse {

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  width: 100%;
  z-index: 1;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  position: relative;
  max-width: 100%;
  -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
  transition: .3s cubic-bezier(.25,.8,.5,1);
}

.el-collapse-item__header {
  padding-left: 20px;
  height: 42px;
  line-height: 42px;
  color: #3d485d;
  font-weight: 600;
  font-size: 15px;
}
.el-collapse-item__content {
  padding-bottom: 0;
}

.el-tabs__nav-scroll{
  display: flex;
  border-bottom: 2px solid #bfc3de;
}

.card {
  padding-top: 0;
  padding-left: 0;
  text-align: left;
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
}

.AggregationListItem {
  height: auto;
  color: #121212;
  font-size: 15px;
  font-weight: 400;
  padding: 5px 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
  background-color: #f3f5f8;;
  .AggregationListItemKey {
    text-align: left;
    margin-left: 10px;
    width: 154px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    word-break: break-all;
    height: auto;
    line-height: 1.9;
  }
  .AggregationListItemNumber {
    color: #8590a6;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
  }
  .checkbox {
    
  }
}
.AppSearchTabs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 2px solid #bfc3de;
}
.AppSearchTab{
  
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 48px;
  border-right: 2px solid #ebebeb;
  font-size: 16px;
  font-weight: 600;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.AppSearchTab:hover {
  border-color: #2f3a91;
  background-color: #2f3a91;
  color: #fff;
}

.AppSearchTab.is-active {
  border-color: #2f3a91;
  background-color: #2f3a91;
  color: #fff;
}

.AppSearchTabContent {
  .AppSearchFilters {
    padding: 12px 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
.AppFilterMeta {
  color: #8590a6;
  font-size: 15px;
  .total-num {
    color: #050505;
  }
}
.AppFilterInput {
  margin-left: 20px;
  width: 200px;
}
.AppFilterSelect {
  margin-left: 20px;
  
}
.AppSearchRefineItems {
  background-color: #f3f5f8;
  padding: 13px 20px 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  .Highlight {
    color: #8590a6;
    background-color: transparent;
  }
  .AppSearchRefineLabel {
    margin-right: 16px;
    margin-bottom: 13px;
    color: #646464;
    font-size: 13px;
  }
  .AppSearchRefineItem {
    background-color: #fff;
    border: 1px solid transparent;
    -webkit-box-shadow: 2px 2px 5px 0 rgba(55,99,170,.1), -2px -2px 5px 0 #fff, inset 0 1px 5px 0 hsla(0,0%,100%,.5);
    box-shadow: 2px 2px 5px 0 rgba(55,99,170,.1), -2px -2px 5px 0 #fff, inset 0 1px 5px 0 hsla(0,0%,100%,.5);
    padding: 5px 6px 5px 10px;
    margin-right: 13px;
    margin-bottom: 13px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: grid;
    .delete {
      margin-left: 5px;
      cursor: pointer;
    }
    .AppSearchRefineItemText {
      margin-right: 3px;
      font-size: 12px;
      display: flex;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}



.base-switch__button {
  margin-left: 10px;
}
.base-switch__label {
  margin-left: 10px;
  font-size: 12px;
  color: #8590a6;
}
.AppSearchFilter {
  margin-top: 12px;
}
.scroll-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>