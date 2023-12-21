<template>
  <div class="body">
    <el-container class="ContentLayout">
  
      <el-main>
        <div class="card">
          <!-- 搜索标签 -->
          <div class="AppSearchTabs">
            <div class="AppSearchTab" :class="{'is-active': active_tab === 1}" @click="changeActiveTab(1)">作者</div>
            <div class="AppSearchTab" :class="{'is-active': active_tab === 2}" @click="changeActiveTab(2)">机构</div>
          </div>
          <!-- 搜索筛选项 -->
          <div class="AppSearchTabContent">
            <div class="AppSearchFilters">
              <div class="AppFilterMeta">
                <span>0 / </span>
                <span class="total-num">100000条</span>
              </div>
              <div class="AppFilterInput">
                <el-input
                  v-model="SearchValue"
                  placeholder="在结果中检索"
                  :suffix-icon="Search"
                />
              </div>
              <div class="AppFilterSelect">
                <span>
                  <el-select v-model="SelectValue1" placeholder="时间范围" size="default">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </span>
                <span>
                  <el-select v-model="SelectValue2" placeholder="排序方式" size="default">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </span>
                
              </div>
            </div>
          </div>
          <!-- 筛选条件 -->
          <div class="AppSearchRefineItems">
            <div class="AppSearchRefineLabel">筛选条件</div>
            <span class="AppSearchRefineItem">
              <span class="AppSearchRefineItemText">
                <span class="Highlight">主题：</span>
                化学
              </span>
              <el-icon class="delete" @click="deleteSearchTab"><Close/></el-icon>
            </span>
          </div>
          <!-- 搜索详情 -->
          <div class="List"></div>
          <SearchAuthorCard/>
        </div>
        
      </el-main>
  
    </el-container>
  </div>
  
</template>


<script setup>
import { onMounted, reactive, ref, shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ElCheckbox, ElCheckboxGroup, ElEmpty, ElNotification, ElPagination } from "element-plus";
import { useSearchStore } from '../store/search.ts';
import { Calendar, Search } from '@element-plus/icons-vue'

import SearchAuthorCard from '@/components/Search/SearchCard/SearchAuthorCard.vue'


const searchStore = useSearchStore()
const SelectValue1 = ref('')
const SelectValue2 = ref('')

const activeNames = ref(['1','2','3','4'])
const options1 = [
  {value: 'Option1',label: '今年',},
  {value: 'Option2',label: '近三年',},
  {value: 'Option3',label: '近五年',},
  {value: 'Option4',label: '近十年',},
]
const options2 = [
  {value: 'Option1',label: '综合排序',},
  {value: 'Option2',label: '时间排序',},
  {value: 'Option3',label: '相关排序',},
]

const tab_contents = reactive({
  item1:[
    {label: '期刊论文',num: 10000,},
    {label: '学位论文',num: 8755,},
    {label: '预印本论文',num: 230,},
    {label: '会议论文',num: 120,},
  ],
  item2:[
    {label: '文化、科学、教育、体育',num: 10000,},
    {label: '预防医学、卫生学',num: 8755,},
    {label: '公路运输',num: 230,},
    {label: '电脑、计算机',num: 120,},
  ],
  item3:[
    {label: '2023',num: 10000,},
    {label: '2022',num: 8755,},
    {label: '2021',num: 230,},
    {label: '2020',num: 120,},
  ],
  item4:[
    {label: '劳动保护',num: 10000,},
    {label: '健康生活',num: 8755,},
    {label: '汽车杂志',num: 230,},
    {label: '汽车杂志',num: 120,},
  ],  
})


const active_tab = ref(1)

const changeActiveTab = (num) => {
  active_tab.value = num
}

const SearchValue = ref('')
const deleteSearchTab = () => {
  alert('删除搜索项')
}

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
    margin-left: 20px;
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
  .delete {
    margin-left: 5px;
    cursor: pointer;
  }
}
.AppSearchRefineItemText {
  max-width: 140px;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.List {
  
}

</style>