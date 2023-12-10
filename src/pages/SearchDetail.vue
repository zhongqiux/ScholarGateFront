<template>
  <el-container>
    <el-aside width="150px" class="AppSearchAggregation">
      <div class="AppSearchAggregation__label">分类浏览</div>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="论文类型" name="1">
            <div>
              <span>期刊论文  </span> <span>10000</span>
            </div>
            <div>
              <span>预印本论文  </span> <span>10000</span>
            </div>
          </el-collapse-item>
          <el-collapse-item title="学科分类" name="2">
            <div>文化、科学、教育、体育</div>
            <div>预防医学、卫生学</div>
            <div>公路运输</div>
            <div>电脑、计算机</div>
          </el-collapse-item>
          <el-collapse-item title="出版年" name="3">
            <div>2023</div>
            <div>2022</div>
            <div>2021</div>
          </el-collapse-item>
          <el-collapse-item title="出版物" name="4">
            <div>劳动保护</div>
            <div>健康生活</div>
            <div>汽车杂志</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-aside>
  

    <el-main>
      <div class="card">
        <el-header>
          <div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
              <el-tab-pane label="论文" name="first">
                <div>
                  <el-select v-model="value" class="" placeholder="时间范围" size="large">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                  <el-select v-model="value" class="" placeholder="时间排序" size="large">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <el-divider/>  

                <!-- 卡片内容 -->
                <SearchCard/>

              </el-tab-pane>
              <el-tab-pane label="专利" name="second">
                Config
              </el-tab-pane>
            </el-tabs>
          </div>
          
        </el-header>
        
      </div>
      
    </el-main>

  </el-container>
</template>


<script setup>
import { onMounted, reactive, ref, shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ElCheckbox, ElCheckboxGroup, ElEmpty, ElNotification, ElPagination } from "element-plus";
import { useSearchStore } from '../store/search.ts';

import SearchInput from '../components/Search/SearchInput/Search.vue';
import WorksResCard from '../components/Search/SearchCard/WorksResCard.vue';
import AuthorsResCard from '../components/Search/SearchCard/AuthorsResCard.vue';
import VenuesResCard from '../components/Search/SearchCard/VenuesResCard.vue';
import InstitutionsResCard from '../components/Search/SearchCard/InstitutionsResCard.vue';
import ConceptsResCard from '../components/Search/SearchCard/ConceptsResCard.vue';
import SearchCard from '@/components/Search/SearchCard/SearchCard.vue'

const searchStore = useSearchStore()
const value = ref('')
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

</script>

<style>
.AppSearchAggregation {
  margin-top: 20px;
  margin-left: 20px;
  padding: 0 10px 10px;
  background-color: #bfc3de;
  border-radius: 4px;
  
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

.el-collapse-item__header {
  height: 42px;
  line-height: 42px;
  color: #3d485d;
  font-weight: 600;
  font-size: 15px;
}

.el-tabs__nav-scroll{
  display: flex;
  border-bottom: 2px solid #bfc3de;
}

.el-tabs__item {
  .is-active {
    border-color: #2f3a91;
    background-color: #2f3a91;
    color: #fff;
  }
  
}
.is-active {
  border-color: #2f3a91;
  background-color: #2f3a91;
  color: #fff;
}

.card {
  text-align: left;
  height: 500px;
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
}
</style>