<template>
  <el-button @click="getSearchData">
    搜索
  </el-button>
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
        <div>
          concepts
          <div v-for="(value, index) in conceptsData.data.values">
            {{ value }} 
          </div>
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
        
      </div>
    </el-container>
    <el-divider class="item-divider"/>
  </div>
  
  

</template>

<script setup>
import {reactive, onMounted, ref} from 'vue'
import "@/assets/ResultPageIconfont/iconfont.css"
import axios from 'axios';

async function searchWorkByName(name) {
  try {
    const url = 'http://120.46.148.251:8080/search/work/filter/3';
    const response = await axios.post(url, {
      params: {
        name: name
      }
    });    
    // 返回响应数据
    return response.data;
  } catch (error) {
    console.error(error);
    // 处理错误
    throw new Error('请求接口失败');
  }
}


const getSearchData = () => {
  searchWorkByName('ai')
  .then(data => {
    // 在这里处理返回的数据
    searchData.data = data.data
    // console.log(data);
    
    conceptsData.data.keys = Object.keys(data.data[0].concepts)
    conceptsData.data.values = Object.values(data.data[0].concepts)
    console.log(conceptsData.data.keys)
    console.log(conceptsData.data.values)
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
}

const conceptsData = reactive({
  data:{
    keys:[],
    values:[],
  }
})


const searchData = reactive({
  data:[{
    id:1,
    title: '我是标题我是标题我是标题我是标题我是',
    author: ['作者1', '作者2'],
    source: '《招生考试通讯:高考版》 2023 年第 3 期 16 - 18 , 共 3 页',
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    keywords: ['知识脉络', '回归教材', '抓住重点'],
    showFlag: true
  },
  {
    id:2,
    title: '文章22222',
    author: ['作者1', '作者2'],
    source: '《招生考试通讯:高考版》 2023 年第 3 期 16 - 18 , 共 3 页',
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    keywords: ['知识脉络'],
    showFlag: true
  },
  {
    id:3,
    title: '文章22222',
    author: ['作者1', '作者2'],
    source: '《招生考试通讯:高考版》 2023 年第 3 期 16 - 18 , 共 3 页',
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    keywords: ['知识脉络'],
    showFlag: true
  },
  {
    id:4,
    title: '文章22222',
    author: ['作者1', '作者2'],
    source: '《招生考试通讯:高考版》 2023 年第 3 期 16 - 18 , 共 3 页',
    abstract: '攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    keywords: ['知识脉络'],
    showFlag: true
  },
  {
    id:5,
    title: '文章22222',
    author: ['作者1', '作者2'],
    source: '《招生考试通讯:高考版》 2023 年第 3 期 16 - 18 , 共 3 页',
    abstract: '识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记',
    keywords: ['知识脉络'],
    showFlag: true
  }]
})

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