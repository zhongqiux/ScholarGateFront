<template>
  <!-- 学术成果标题 -->
  <div>
    <div id="info" class="title">
      <span class="title_name">我是标题我是标题我是标题我是标题</span>
      <span class="title_type">[我是类型]</span>
    </div>
    <el-divider style="border-color: #d5d8e9; border-width: 2px"></el-divider>

    <!-- 作者信息 -->
    <div class="author_row">
      <Avatar class="icon"/>
      <span class="author_name" @click="toAuthor()"> 作者姓名</span>  <!-- 跳转科研人员页面 -->
      <p class="text"> 作者其他信息</p>
    </div>

    <!-- 其他信息 -->
    <div class="row">
      <p class="text">其他信息（若有）</p>
    </div>

    <!--  简介内容    -->
    <div class="context">
      <div class="context_text">
        <span @click="expandContent(0)">{{ isExpand ? message : filter(message) }}</span>
        <span @click="expandContent(1)" class="expand_button">
            {{ isExpand ? '收起' : '阅读全部' }}
            <ArrowUp class="expand_icon" v-if="isExpand"/>
            <ArrowDown class="expand_icon" v-else/>
          </span>
      </div>
    </div>

    <!--  关键词    -->
    <div class="tag_row">
      <span class="text">关键词：</span>
      <el-tag class="tags" v-for="(keyword) in keyWords" effect="plain" @click="toKeyWord(keyword)">
        {{ keyword }}
      </el-tag>
    </div>
  </div>

  <!-- 导航栏监听用 -->
  <div id="tag1"></div>

  <!--  相关推荐    -->
  <div>
    <div id="recommend" class="page_divider">
      <p class="divider_title">相关推荐</p>
      <p class="line"></p>
    </div>
    <div v-for="(recommends, index) in recommendation" key="index" class="recommend_container">
      <div class="recommend_list">
        <span style="color: #2f3a91; font-size: 16px; height: 51px; width: 32px">{{ index + 1 }}.</span>
        <div class="recommend_item">
          <p class="recommend_title">{{ recommends.title }}</p>
          <p class="recommend_info">{{ recommends.info }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 导航栏监听用 -->
  <div id="tag2"></div>

  <!--  交流评论    -->
  <div id="comment" class="page_divider">
    <p class="divider_title">交流评论</p>
    <p class="line"></p>
  </div>

  <!-- 导航栏监听用 -->
  <div id="tag3">
    <div style="border: #8590a6 solid 1px; height: 500px; width: 100%"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Avatar, ArrowDown, ArrowUp,} from '@element-plus/icons-vue'

export default defineComponent({
  name: "Result",
  components: {ArrowDown, ArrowUp, Avatar},
  data() {
    return {
      isExpand: false,
      maxHeight: 43,
      message: "学术成果简介/信息 近年来，随着快速充电、数据中心和高能效电机等应用场景的出现，具有高开关速率、低导通电阻和小体积等优势的氮化镓功率器件获得了高速的发展。然而，相较于传统硅基功率器件，氮化镓（Gallium Nitride，GaN）功率器件的开关频率更高、受寄生参数影响更大、驱动电压范围更苛刻且栅极更易击穿，因此传统硅基功率器件的驱动芯片难以安全、有效地驱动GaN功率器件，并且在现有功率转换系统中，GaN功率器件也很难直接替代硅基功率器件。因此，可被现有功率转换电路兼容且内置专用驱动芯片的GaN集成功率器受到了越来越多的关注，成为学术界和工业界的研究热点。本文系统性地研究了应用于650V增强型GaN半桥集成功率器和650V耗尽型GaN集成功率器的专用集成电路，重点突破了栅压自举及保护技术、负压上电及保护技术、充电控制技术以及片上负压产生技术，解决了GaN驱动器在驱动与保护、上电与供电和瞬态抗扰等方面的技术瓶颈。在对驱动器流片后，设计集成功率器的系统级封装（System-in-package，SiP）形式，并对三相直流无刷电机和同步整流反激式电源的应用进行测试。论文的主要创新性研究如下：1. 创新性地提出了一种用于增强型GaN半桥驱动器器的栅压自举及栅极保护技术，通过数字阈值控制且由母线电压直接充电并结合补充电荷泵的方式实现。与传统自举结构相比，扩展了应用频率范围，实现了对GaN功率器件栅极的有效保护，并降低了低压差线性稳压器（Low Dropout Regulator，LDO）的设计难度。采用0.5um 700V BCDMOS工艺流片，测试结果表明，在开关频率5MHz时，高侧自举电压稳定在6V；在极低频甚至0Hz时，相比传统结构由几乎下降到0V提高到2.93V。2. 创新性地提出了一种用于耗尽型GaN驱动器的负压上电及系统保护技术，解决了负压上电过程中逻辑混乱的问题，保证芯片启动时寄生PN结不正向导通，为驱动电路提供了可靠的电源供电系统，并确保在故障（过压、欠压、过温和过流等）条件下芯片良好工作。采用0.25um 60V BCDMOS工艺流片，测试结果表明，电源上电时序正常，电源过压、电源欠压和负压欠压检测的滞回空间分别为0.5625V、0.5V和0.25V，错误标志位可根据芯片工作状况正常输出。3. 创新性地提出了一种用于耗尽型GaN驱动器的充电控制技术。通过大电流充电和可控涓流充电结合的方式，实现对GaN栅源电压的合理分段控制，从而限制开关节点电压摆率，增加瞬态抗扰性；并通过可配置涓流充电电流的策略，适配不同频率；通过可配置放电阵列，实现与开启时间相匹配的关断时间。仿真结果表明，该方案可实现耗尽型GaN的栅极的上升时间和下降时间相互匹配，且上升时间在19.65ns-42.5ns之间，下降时间在21.28ns-45.9ns之间，适用于MHz的工作频率。4. 创新性地提出了一种用于耗尽型GaN驱动器的片上负压产生技术。采用电流模式的降压直流/直流（DCDC）结构，利用轻载脉冲跳跃模式保证低负载情况下的效率，内置过温、欠压、过流等保护电路和软启动策略，产生稳定的片上可调负压输出。仿真结果表明，在100mA的负载电流下，可实现负压输出在-20V至-14V之间，且纹波小于等于3.478mV。",
      keyWords: ["喵喵喵", "软分喵", "我是关键词1", "我是关键词2", "QAQ", "关键词333", "我我有一头小毛驴我从来也不骑 有一天我心血来潮骑着去赶集", "关键词4", "关键词4", "关键词4", "关键词4"],
      recommendation: [
        {title: "推荐1", info: "其他信息"},
        {title: "推荐2", info: "其他信息"},
        {title: "推荐3", info: "其他信息"},
        {title: "推荐4", info: "其他信息"},
        {title: "推荐5", info: "其他信息"},
        {title: "推荐6", info: "其他信息"},
        {title: "推荐7", info: "其他信息"},
        {title: "推荐8", info: "其他信息"},
        {title: "推荐9", info: "其他信息"},
        {title: "推荐10", info: "其他信息"},
      ]
    }
  },

  methods: {
    expandContent(flag: number) {
      console.log(flag);
      if (flag == 1) {
        this.isExpand = !this.isExpand;
      } else {
        if (!this.isExpand) {
          this.isExpand = !this.isExpand;
        }
      }

    },

    filter(msg: String) {
      if (!msg) {
        return '';
      }

      msg = msg.toString();
      if (msg.length > 300) {
        return msg.substring(0, 300) + "...";
      } else {
        return msg;
      }
    },

    toKeyWord(keyword: String) {
      alert("跳转到: " + keyword);
    },

    toAuthor() {
      alert("跳转到作者个人门户")
    }
  },
})
</script>

<style scoped>
.title {
  text-align: left;
  margin-top: 20px;
}

.title_name {
  font-size: 22px;
  color: #2f3a91;
  margin-top: 8px;
  margin-right: 15px;
  font-weight: bold;
}


.title_type {
  font-size: 14px;
  color: #2f3a91;
  margin-top: 10px;
  font-weight: bold;
}

.icon {
  height: 17px;
  width: 17px;
  padding-left: 5px;
  padding-right: 5px;
  color: #8590a6;
}

.author_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  margin-top: -10px;
}

.author_name {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  font-weight: bold;
  color: #121212;
}

.author_name:hover {
  cursor: pointer;
  color: #2f3a91;
  text-decoration: underline;
  text-decoration-style: dotted;
}

.text {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  color: #121212;
}

.context_text {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  color: #646464;
}

.context_text:hover {
  cursor: pointer;
  color: #121212;
}

.row {
  display: flex;
  align-items: center;
  height: 35px;
}

.context {
  display: inline-block;
  align-items: center;
  justify-content: flex-start;
}

.expand_button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #2f3a91;
  font-size: 13px;
  margin-left: 5px;
}

.expand_button:hover {
  cursor: pointer;
  color: #7284fa;
}

.expand_icon {
  height: 15px;
  width: 15px;
  padding-left: 3px;
}

.tag_row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  flex-wrap: wrap;
}

.tags {
  color: #2f3a91;
  border-color: #2f3a91;
  background-color: transparent;
  border-radius: 15px;
  height: 20px;
  padding: 2px 8px;
  margin: 5px
}

.tags:hover {
  color: #7284fa;
  border-color: #7284fa;
  cursor: pointer;
}

.page_divider {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-items: center;
}

.divider_title {
  font-size: 18px;
  color: #2f3a91;
  margin-right: 15px;
  font-weight: bold;
  background-color: transparent;
  width: 100px;
}

.line {
  height: 1.5px;
  background-color: #d5d8e9;
  width: 100%;
}

.recommend_container {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.recommend_list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

.recommend_item {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.recommend_title {
  color: #121212;
  font-size: 16px;
  margin: 0;
  text-align: left;
}

.recommend_info {
  color: #8590a6;
  font-size: 14px;
  margin: 0;
  margin-top: 6px;
  text-align: left;
}
</style>
