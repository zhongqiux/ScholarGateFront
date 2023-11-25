<template>
  <el-container>
    <el-aside width="60px">
      1
    </el-aside>

    <div class="list-item">
      <!-- 标题 -->
      <h2 class="ContentItem__titleText">我是标题我是标题我是标题我是标题我是标题我是标题</h2>
      <!-- 作者 -->
      <div class="Author-info__content">我是作者</div>
      <!-- 来源 -->
      <div class="article-source__content">《招生考试通讯:高考版》 2023 年第 3 期 16 - 18 , 共 3 页</div>
      <!-- 简介 -->
      <div class="article-brief__content">攻略一回归教材，查缺补漏一、厘清知识脉络，完善知识体系回归教材不是从头到尾读教材，也不是把书后习题个再做一遍。考生需要根据自己的学习情况，精读自己掌握得最薄弱的章节，准备一张白纸，先凭印象画出这部分内容的简略图，再结合教材和课堂笔记，增减内容。结合笔记能更好地抓住重点，在之前学习、复习过程中老师给出的小结和重点知识的示例，对理解、记忆知识点很有帮助，因此，回归教材时别忘了仔细整理之前的笔记</div>
      <!-- 关键词 -->
      <div class="keywords__content">关键词：知识脉络 回归教材 抓住重点</div>
    </div>
    
    
  </el-container>
  

</template>

<script setup>
</script>

<style>
.list-item {
  padding-right: 24px;
  
}
.ContentItem__titleText {
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
.Author-info__content {
  cursor: pointer;
  -webkit-transition: all .3s;
  transition: all .3s;
  color: #646464;
  font-weight: 700;
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
.keywords__content {
  margin-top: 10px;
  font-size: 14px;
  color: #646464;
  cursor: pointer;
  margin-right: 10px;
  -webkit-transition: all .3s;
  transition: all .3s;
  word-break: break-word;
  height: 24px;
}
</style>