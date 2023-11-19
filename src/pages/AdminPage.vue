<template>
  <div class="content-main">
    <div class="toptitle">
      <svg style="margin: 0; padding: 0; width: 15; height: 15">
        <rect width="10" height="14" stroke="black" fill="black" />
      </svg>
      <span>&nbsp;&nbsp;</span>
      <span style="color: purple">待审核事项</span>
    </div>
    <div class="background">
      <el-row v-if="requestData.totalApply" :gutter="25" class="rows">
        <el-col
          :span="8"
          v-for.sync="
            (form, index) in
            requestData.list.slice(
              pages.currentPage * 6 - 6,
              pages.currentPage * 6
            )
          "
          :key="form"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
            style="margin: 2.5vh 0; height: 34vh; min-width: 180px"
            class="card"
          >
            <div style="padding: 12px; padding-bottom: 0; height: 17vh">
              <span class="card_header">
                <svg style="margin: 0; padding: 0; width: 7; height: 11">
                  <rect width="20" height="8" stroke="black" fill="black" />
                </svg>
                门户修改
              </span>
              <div class="bottom">
                <span class="name"> 申请时间 </span>
                <time class="content"> {{ form.apply_time }} </time>
              </div>
              <div class="bottom">
                <span class="name"> 申请人 </span>
                <span class="content"> {{ form.user_id }} </span>
              </div>
              <div class="bottom">
                <span class="name"> 备注 </span>
                <span class="content"> {{ form.content }} </span>
              </div>
            </div>
            <div
              style="
                padding: 12px;
                padding-top: 0px;
                padding-bottom: 0px;
                height: 10vh;
              "
            >
              <div class="subtitle">
                <span class="title"> 修改的内容 </span>
              </div>
              <div class="bottom">
                <span class="name"> 机构 </span>
                <span class="content"> xxx </span>
              </div>
              <div class="bottom">
                <span class="name"> 教育经历 </span>
                <span class="content"> xxx </span>
              </div>
            </div>
            <div class="bottomButton">
              <el-popover :visible="form.visible" placement="top" :width="200">
                <p>确认通过该申请吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="small" text @click="form.visible = false"
                    >取消</el-button
                  >
                  <el-button
                    size="small"
                    type="primary"
                    @click="pass(form.id, pages.currentPage*6 - 6 + index)"
                    >确认</el-button
                  >
                </div>
                <template #reference>
                  <el-button
                    type="info"
                    plain
                    @click="form.visible = true"
                    style="
                      margin-bottom: 0.5vh;
                      margin-top: 0.5vh;
                      height: 3vh;
                      border-radius: 5px;
                    "
                    >通过</el-button
                  >
                </template>
              </el-popover>
              <el-popover :visible="form.visibleRefuse" placement="top" :width="200">
                <p>确认驳回该申请吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="small" text @click="form.visibleRefuse = false"
                    >取消</el-button
                  >
                  <el-button
                    size="small"
                    type="primary"
                    @click="refuse(form.id, pages.currentPage*6 - 6 + index)"
                    >确认</el-button
                  >
                </div>
                <template #reference>
                    <el-button
                type="info"
                plain
                @click="form.visibleRefuse = true"
                style="
                  margin-bottom: 0.5vh;
                  margin-top: 0.5vh;
                  height: 3vh;
                  border-radius: 5px;
                "
                >驳回</el-button
              >
                </template>
              </el-popover>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="paginationBox" v-if="requestData.totalApply">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-count="requestData.totalPage"
          @current-change="pageCurrentChange"
          class="pagination"
        ></el-pagination>
      </div>
      <div
        v-if="requestData.totalApply == 0"
        style="color: white; font-size: 1.3em; height: 100%"
      >
        <ElEmpty description="暂无申请" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElEmpty } from "element-plus";
import { ArrowRight } from '@element-plus/icons-vue'
import {  } from '@/API'
import * as Type from "@/API/type"

const pages = reactive({
  currentPage: 1,
});
const requestData = reactive({
  msg: "",
  list: [
    {
      id: 1,
      visible: ref(false),
      visibleRefuse: ref(false),
      user_id: 3208,
      content: "o.O?",
      apply_time: "2023-11-07 18:34:43",
    },
    {
      id: 2,
      user_id: 2200,
      visible: ref(false),
      visibleRefuse: ref(false),
      content: "o.O?",
      apply_time: "2022-11-11 15:14:44",
    },
    {
      id: 3,
      user_id: 2200,
      visible: ref(false),
      visibleRefuse: ref(false),
      content: "o.O?",
      apply_time: "2022-11-11 15:14:44",
    },
    {
      id: 2,
      user_id: 2200,
      visible: ref(false),
      visibleRefuse: ref(false),
      content: "o.O?",
      apply_time: "2022-11-11 15:14:44",
    },
    {
      id: 2,
      user_id: 2200,
      visible: ref(false),
      visibleRefuse: ref(false),
      content: "o.O?",
      apply_time: "2022-11-11 15:14:44",
    },
    {
      id: 2,
      user_id: 2200,
      visible: ref(false),
      visibleRefuse: ref(false),
      content: "o.O?",
      apply_time: "2022-11-11 15:14:44",
    },
    {
      id: 2,
      user_id: 2200,
      content: "o.O?",
      visible: ref(false),
      visibleRefuse: ref(false),
      apply_time: "2022-11-11 15:14:44",
    },
  ],
  totalApply: 7,
  totalPage: 2,
});

function pageCurrentChange(val: any) {
  pages.currentPage = val;
}

const refuse = function(id: any, num: any):void{
    // refuse(id).then((res:Type.CommonReturnType)=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
    requestData.list.splice(num,1);
    requestData.list[num].visibleRefuse = false;
    totalCount();
}

const pass = function(id: any, num: any):void{
    // pass(id).then((res:Type.CommonReturnType)=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
    requestData.list.splice(num,1);
    requestData.list[num].visible = false;
    totalCount();
}

function totalCount() {
    requestData.totalApply = Object.keys(requestData.list).length;
    requestData.totalPage = Math.floor(requestData.totalApply / 6);
    if(requestData.totalApply % 6)  
        requestData.totalPage++;
}
</script>

<style scoped>
.content-main {
  padding: 4vh 5vw;
  padding-top: 1vh;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  text-align: left;
}

.subtitle {
  margin-top: 13px;
  margin-bottom: 13px;
  line-height: 16px;
  text-align: left;
}

.background {
  background-image: url(../assets/card-bg.jpg);
  background-size: contain;
  padding: 15px;
}

.card_header {
  font-size: 1.3em;
  display: block;
  position: relative;
  left: 0;
  text-align: left;
}

.bottomButton {
  margin-bottom: 0vh;
  height: 2vh;
}

.pagination {
  border-radius: 30px;
  padding-right: 3.5vw;
  margin-top: 3vh;
}
.paginationBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
}

.name {
  text-align: left;
}
.content {
  display: inline-block;
  font-size: 12px;
  float: right;
  color: rgb(110, 110, 110);
  width: 11vw;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: auto;
}

.rows {
  padding: 20px;
  padding-bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.title {
  font-size: 1.3em;
  margin-bottom: 8vh;
  text-align: left;
  left: 0;
}

.toptitle {
  margin-top: 2vh;
  margin-bottom: 5vh;
  font-size: 1.7em;
  text-align: left;
  left: 0;
}

.card {
  background-color: rgba(252,252,252,0.6);
  border-color: white;
}
</style>