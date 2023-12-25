<template>
  <div class="content-main">
    <el-row :gutter="40" class="panel-group">
      <el-col :span="8" class="card-panel-col">
        <div
          class="card-panel"
          :class="currentSelection.type == 1 ? 'active' : ''"
          @click="changeSelection(1)"
        >
          <div class="card-panel-icon-wrapper">
            <el-icon size="large"><List /></el-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">全部事项</div>
          </div>
        </div>
      </el-col>

      <el-col :span="8" class="card-panel-col">
        <div
          class="card-panel"
          :class="currentSelection.type == 2 ? 'active' : ''"
          @click="changeSelection(2)"
        >
          <div class="card-panel-icon-wrapper">
            <el-icon size="large"><Folder /></el-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">待审核事项</div>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="card-panel-col">
        <div
          class="card-panel"
          :class="currentSelection.type == 3 ? 'active' : ''"
          @click="changeSelection(3)"
        >
          <div class="card-panel-icon-wrapper">
            <el-icon size="large"><FolderChecked /></el-icon>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">已审核事项</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="toptitle">
      <svg style="margin: 0; padding: 0; width: 15; height: 15">
        <rect width="10" height="14" stroke="black" fill="black" />
      </svg>
      <span>&nbsp;&nbsp;</span>
      <span style="color: purple">{{ currentSelection.name }}</span>
      <div style="float: right">
        <span style="font-size: large">筛选日期</span>
        <el-config-provider :locale="locale">
          <el-date-picker
          style="margin-left: 1vw"
          v-model="timeRange"
          type="daterange"
          unlink-panels
          range-separator="To"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="timeFilter"
          :shortcuts="shortcuts"
        />

        </el-config-provider>
        
        <el-popover
          placement="bottom"
          :width="180"
          trigger="hover"
          content="删除全部已审核事项"
        >
          <template #reference>
            <el-button text @click="openDeleteAll">
              <el-button :icon="Delete" />
            </el-button>
          </template>
        </el-popover>
      </div>
    </div>
    <div class="background">
      <el-row
        v-if="requestData.totalApply"
        :gutter="20"
        class="rows"
        v-loading="isLoading.loading"
      >
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
            style="margin: 2vh 0; height: 30vh; min-width: 180px"
            class="card"
          >
            <div style="padding: 0 12px; height: 18vh">
              <span class="card_header">
                <svg style="margin: 0; padding: 0; width: 7; height: 11">
                  <rect width="20" height="8" stroke="black" fill="black" />
                </svg>
                门户修改
              </span>
              <div class="bottom">
                <span class="name"> 申请时间 </span>
                <time class="content"> {{ TimeFormat(form.createTime) }} </time>
              </div>
              <div class="bottom">
                <span class="name"> 申请人 </span>
                <span class="content"> {{ form.userId }} </span>
              </div>
              <div class="bottom">
                <span class="name"> 状态 </span>
                <span class="content"> {{ translation(form.status) }} </span>
              </div>
            </div>
            <div
              style="
                padding: 12px;
                padding-top: 0px;
                padding-bottom: 0px;
                height: 8vh;
              "
            >
              <div class="subtitle">
                <span class="title"> 修改的内容 </span>
              </div>
              <div class="bottom">
                <span class="name"> 背景 </span>
                <span class="content"> {{ form.content }} </span>
              </div>
            </div>
            <div v-if="form.status != 0">
              <el-popover trigger="click" placement="top" :width="200">
                <p>确认删除该申请吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button
                    size="small"
                    type="primary"
                    @click="del(form.id, pages.currentPage * 6 - 6 + index)"
                    >确认</el-button
                  >
                </div>
                <template #reference>
                  <el-button :icon="Delete" round />
                </template>
              </el-popover>
            </div>
            <div class="bottomButton" v-if="form.status == 0">
              <el-popover trigger="click" placement="top" :width="200">
                <p>确认通过该申请吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button
                    size="small"
                    type="primary"
                    @click="approve(form.id, pages.currentPage * 6 - 6 + index)"
                    >确认</el-button
                  >
                </div>
                <template #reference>
                  <el-button
                    type="info"
                    plain
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
              <el-button
                type="info"
                plain
                @click="openReject(form.id, form.userId, pages.currentPage * 6 - 6 + index)"
                style="
                  margin-bottom: 0.5vh;
                  margin-top: 0.5vh;
                  height: 3vh;
                  border-radius: 5px;
                "
                >驳回</el-button
              >
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
import { ElEmpty, ElConfigProvider } from "element-plus";
import {
  List,
  Folder,
  FolderChecked,
  Delete,
  Filter,
} from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { approveIssue, deleteAllIssue, deleteIssue, getIssues, rejectIssue } from "@/API";
import * as Type from "@/API/type";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn
const currentSelection = reactive({
  type: 1,
  name: "全部事项",
});

const isLoading = reactive({
  loading: 0,
});

const changeSelection = (type: any) => {
  if (currentSelection.type != type) {
    currentSelection.type = type;
    if (type === 1) {
      currentSelection.name = "全部事项";
    } else if (type === 2) {
      currentSelection.name = "待审核事项";
    } else {
      currentSelection.name = "已审核事项";
    }
    fillRequestData(type);
  }
};

const pages = reactive({
  currentPage: 1,
});
const allData = reactive({
  msg: "",
  list: [
    {
      id: "1f7a338a3c",
      status: 0,
      userId: 3208,
      content: "o.O?",
      createTime: "2023-11-07 18:34:43",
    },
  ],
  totalApply: 0,
  totalPage: 0,
});

const timeRange = ref();

const shortcuts = [
  {
    text: "今天",
    value: () => {
      let start = new Date();
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
      let end = start;
      return [start, end];
    },
  },
  {
    text: "三天内",
    value: () => {
      const end = new Date();
      const start = new Date();
      end.setHours(0);
      end.setMinutes(0);
      end.setSeconds(0);
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 3);
      return [start, end];
    },
  },
  {
    text: "七天内",
    value: () => {
      const end = new Date();
      const start = new Date();
      end.setHours(0);
      end.setMinutes(0);
      end.setSeconds(0);
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
];

const openDeleteAll = () => {
  ElMessageBox.confirm("确认要删除全部已审核消息吗？", "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      deleteAllIssue()
        .then((res: Type.CommonReturnType) => {
          console.log(res);
          getAllIssue();
          fillRequestData(currentSelection.type);
          ElMessage({
            type: "success",
            message: "已全部删除",
          });
        })
        .catch(() => {
          ElMessage({
            type: "error",
            message: "删除失败",
          });
        });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled",
      });
    });
};

const openReject = (id: any, user_id: any, num: any) => {
  ElMessageBox.prompt("填写驳回理由", "Tip", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
  })
    .then(({ value }) => {
      refuse(id, user_id, num, value)
        .then((res: Type.CommonReturnType) => {
          console.log(res);
          ElMessage({
            type: "success",
            message: "操作成功",
          });
        })
        .catch(() => {
          ElMessage({
            type: "error",
            message: "驳回失败",
          });
        });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消驳回",
      });
    });
};

const requestData = reactive({
  msg: "",
  list: [
    {
      id: 2,
      userId: 2200,
      status: 0,
      content: "o.O?",
      createTime: "2022-11-11 15:14:44",
    },
  ],
  totalApply: 0,
  totalPage: 0,
});

function pageCurrentChange(val: any) {
  pages.currentPage = val;
}

function selection(type: any) {
  if (type === 1) {
    requestData.list = allData.list;
  } else if (type === 2) {
    requestData.list = allData.list.filter((item) => {
      return item.status == 0;
    });
  } else {
    requestData.list = allData.list.filter((item) => {
      return item.status == 1 || item.status == 2;
    });
  }
}

function fillRequestData(type: any) {
  isLoading.loading = 1;
  selection(type)
  timeFilter();
  totalCount();
  isLoading.loading = 0;
}

const refuse = function (
  id: any,
  user_id: any,
  num: any,
  reason: string
): Promise<Type.CommonReturnType> {
  return new Promise((resolve, reject) => {
    rejectIssue(id, reason, user_id)
      .then((res: Type.CommonReturnType) => {
        console.log(res);
        requestData.list[num].status = 2;
        if (currentSelection.type == 2) requestData.list.splice(num, 1);
        totalCount();
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const approve = function (id: any, num: any): void {
  approveIssue(id).then((res:Type.CommonReturnType)=>{
    console.log(res)
    requestData.list[num].status = 1;
    if(currentSelection.type == 2)
      requestData.list.splice(num,1);
    totalCount();
  }).catch(err=>{
    console.log(err)
  })
};

const del = function (id: any, num: any): void {
  deleteIssue(id).then((res:Type.CommonReturnType)=>{
    console.log(res)
    requestData.list[num].status = 1;
    requestData.list.splice(num,1);
    totalCount();
  }).catch(err=>{
    console.log(err)
  })
};

const timeFilter = function (): void {
  if (timeRange.value == null) {
    selection(currentSelection.type);
    totalCount();
  } else {
    selection(currentSelection.type)
    let s = new Date(timeRange.value[0]);
    let e = new Date(timeRange.value[1]);
    e.setTime(e.getTime() + 3600 * 1000 * 24);
    const stime = s.getTime();
    const etime = e.getTime();
    console.log("stime:" + stime)
    console.log(TimeFormat(stime))
    requestData.list = requestData.list.filter((item) => {
      let date = new Date(item.createTime);
      let time = date.getTime();
      console.log(time)
      return time >= stime && time <= etime;
    });
    totalCount();
  }
};

function totalCount() {
  requestData.totalApply = Object.keys(requestData.list).length;
  requestData.totalPage = Math.floor(requestData.totalApply / 6);
  if (requestData.totalApply % 6) requestData.totalPage++;
}

function translation(type: any) {
  if (type === 0) return "未审核";
  else if (type === 1) return "通过";
  else return "未通过";
}

function TimeFormat(time: any) {
  let T = new Date(time)
  let s = ""
  s += T.getFullYear() + "-"
  s += T.getMonth()+1 + '-'
  s += T.getDate() + ' '
  s += T.toLocaleTimeString()
  return s;
}

function getAllIssue() {
  getIssues()
    .then((res: Type.GetIssuesReturn) => {
      console.log(res);
      allData.list = res.data;
      fillRequestData(currentSelection.type);
    })
    .catch((err) => {
      console.log(err);
    });
}
getAllIssue();
</script>
  
  <style scoped>
.content-main {
  padding: 1vh 3vw;
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
  background-image: url(../../assets/card-bg.jpg);
  background-size: cover;
  padding: 1vh 1vw;
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
  padding: 0 1vw;
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
  margin-bottom: 2vh;
  font-size: 1.5em;
  text-align: left;
  left: 0;
}

.card {
  background-color: rgba(252, 252, 252, 0.8);
  border-color: white;
}
.el-button.is-text:not(.is-disabled):focus, .el-button.is-text:not(.is-disabled):hover {
    background-color: transparent;
}
</style>


<style lang="scss" scoped>
.panel-group {
  margin-top: 1vh;

  .card-panel-col {
    margin-bottom: 1vh;
  }

  .card-panel {
    height: 10vh;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
      .card-panel-icon-wrapper {
        color: #111;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
      background-color: rgba(212, 211, 228, 0.6);
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>