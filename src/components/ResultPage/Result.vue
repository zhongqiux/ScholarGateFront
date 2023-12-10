<template>
  <!-- 学术成果标题 -->
  <div>
    <div id="info" class="title">
      <span class="title_name">我是标题我是标题我是标题我是标题</span>
      <span class="title_type">[我是类型]</span>
    </div>
    <el-divider style="border-color: #d5d8e9; border-width: 2px"></el-divider>

    <div id="tag6"></div>

    <!-- 作者信息: 学术成果状态下-->
    <div class="author_row" v-if="!isPatent">
      <Avatar class="icon"/>
      <span class="author_name" @click="toAuthor(authors)" v-for="(authors, index) in authorNames">
        {{ authors }}
        <span v-if="index != authorNames.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
      </span><!-- 跳转科研人员页面 -->
      <p class="text"> 作者其他信息</p>
    </div>

    <!-- 作者信息: 专利状态下-->
    <div class="author_row" v-if="isPatent">
      <span class="text" style="font-weight: bold; color: #8590a6">发明人:</span>  <!-- 跳转科研人员页面 -->
      <span class="author_name" @click="toAuthor(authors)" v-for="(authors, index) in authorNames">
        {{ authors }}
        <span v-if="index != authorNames.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
      </span> <!-- 跳转科研人员页面 -->
    </div>

    <!-- 专利申请人：专利状态下 -->
    <div class="row" v-if="isPatent">
      <span class="text" style="font-weight: bold; color: #8590a6">申请人:</span>  <!-- 跳转科研人员页面 -->
      <span class="author_name" @click="toAuthor('申请人姓名/单位')">申请人姓名/单位</span>  <!-- 跳转科研人员页面 -->
    </div>

    <!-- 其他信息：学术成果状态下 -->
    <div class="row" v-if="!isPatent">
      <p class="text">其他信息（若有）</p>
    </div>

    <!-- 其他信息：专利状态下 -->
    <div class="row" v-if="isPatent">
      <span class="text" style="color: #8590a6">申请日:</span>
      <span class="text">{{ registerDate }}</span>
      <span class="text" style="color: #8590a6">申请号:</span>
      <span class="text">{{ registerNo }}</span>
      <span class="text" style="color: #8590a6">公开日:</span>
      <span class="text">{{ openDate }}</span>
      <span class="text" style="color: #8590a6">公开号:</span>
      <span class="text">{{ openNo }}</span>
      <span class="text" style="color: #8590a6">IPC分类号:</span>
      <span class="ipc_ext" v-for="(IPC, index) in IPCNo" key="index" @click="toIPC(index, IPC)">
        {{ IPC }}
      <span v-if="index != IPCNo.length - 1" style="color: #8590a6; font-weight: normal" @click.stop="">,</span>
      </span>

    </div>

    <!--  简介内容  -->
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

    <!--  关键词: 学术成果状态下   -->
    <div class="tag_row" v-if="!isPatent">
      <span class="text">关键词：</span>
      <el-tag class="tags" v-for="(keyword) in keyWords" effect="plain" @click="toKeyWord(keyword)">
        {{ keyword }}
      </el-tag>
    </div>
  </div>
  <!-- 导航栏监听用 -->
  <div id="tag1"></div>


  <!--  权利要求：专利状态下    -->
  <div id="power" v-if="isPatent">
    <div class="page_divider">
      <p class="divider_title">权利要求</p>
      <p class="line"></p>
    </div>
    <!-- 导航栏监听用 -->
    <div id="tag4" v-if="isPatent"></div>
    <div class="text" style="white-space: pre-wrap">
      {{ powerRequest }}
    </div>
  </div>


  <!--  相关推荐    -->
  <div id="recommend">
    <div class="page_divider">
      <p class="divider_title">相关推荐</p>
      <p class="line"></p>
    </div>

    <!-- 导航栏监听用 -->
    <div id="tag2" v-if="isPatent"></div>

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
  <div id="tag2" v-if="!isPatent"></div>

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
  props: ['isPatent'],
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
      ],
      authorNames: ["作者1", "作者2"],
      registerDate: "2023-08-14",
      registerNo: " CN202310829800.3",
      openDate: "2023-09-08",
      openNo: "CN116718812A",
      IPCNo: ["G01R1/04", "G01R31/26"],
      powerRequest: "1.一种用于半导体器件的测试装置的电接触端子，其特征在于，所述电接触端子包括：\n" +
          "\n" +
          "对称并排布置的一对接触引脚，连接到所述测试装置；\n" +
          "\n" +
          "可拆卸地安装在每个所述接触引脚上的接触端，所述接触端由高硬度且可承受高电流的材料制成，\n" +
          "\n" +
          "其中，当利用所述测试装置测试所述半导体器件时，所述半导体器件的器件引脚与每个所述接触引脚上的所述接触端电接触。\n" +
          "\n" +
          "2.根据权利要求1所述的电接触端子，其特征在于，所述接触端由合金制成。\n" +
          "\n" +
          "3.根据权利要求1所述的电接触端子，其特征在于，每个所述接触引脚具有沿着纵向延伸的颈部、以及与所述颈部连接并沿着与所述纵向垂直的横向延伸的悬臂部，所述颈部包括上端部，所述接触端可拆卸地安装在所述上端部上。\n" +
          "\n" +
          "4.根据权利要求3所述的电接触端子，其特征在于，所述上端部上设置有至少一个第一导向孔，所述接触端上设置有至少一个第二导向孔，所述至少一个第一导向孔和所述至少一个第二导向孔分别一一对应，\n" +
          "\n" +
          "其中，借助于所述至少一个第一导向孔和所述至少一个第二导向孔，通过附接部件或焊接工艺将所述接触端可拆卸地安装在所述上端部上。\n" +
          "\n" +
          "5.根据权利要求3所述的电接触端子，其特征在于，所述颈部还包括柔性部，所述柔性部包括与所述上端部的下方连接的延伸部、以及与所述悬臂部的一端连接的弯曲部，\n" +
          "\n" +
          "其中，借助于所述柔性部，所述接触引脚能够在所述纵向或所述横向上移动。\n" +
          "\n" +
          "6.根据权利要求3所述的电接触端子，其特征在于，所述上端部与所述接触端由不同的材料制成。\n" +
          "\n" +
          "7.根据权利要求1所述的电接触端子，其特征在于，所述悬臂部的下方设置有导向钩部，借助于所述导向钩部，将所述接触引脚连接到所述测试装置。\n" +
          "\n" +
          "8.根据权利要求5所述的电接触端子，其特征在于，所述悬臂部的另一端设置有连接部，用于使所述接触引脚与所述测试装置的负载板建立电连接。\n" +
          "\n" +
          "9.一种用于半导体器件的测试装置，其特征在于，所述测试装置包括：\n" +
          "\n" +
          "底座；\n" +
          "\n" +
          "根据权利要求1-8中任一项所述的电接触端子，所述电接触端子中的一对接触引脚连接到所述底座；\n" +
          "\n" +
          "夹紧部，所述夹紧部在第一位置和第二位置之间切换，\n" +
          "\n" +
          "其中，当所述夹紧部位于所述第二位置时，将所述半导体器件的器件引脚放入所述测试装置或从所述测试装置移除，当所述夹紧部位于所述第一位置时，使放入所述测试装置的所述半导体器件的所述器件引脚同时电接触每个所述接触引脚上的接触端。\n" +
          "\n" +
          "10.根据权利要求9所述的测试装置，其特征在于，所述夹紧部与弹性装置连接，当所述弹性装置处于压缩状态时，所述夹紧部位于所述第二位置，当所述弹性装置处于伸长状态时，所述夹紧部位于所述第一位置。\n" +
          "\n" +
          "11.根据权利要求10所述的测试装置，其特征在于，当所述夹紧部位于所述第二位置时，带有所述器件引脚的所述半导体器件在竖直方向上放入所述测试装置，使得所述器件引脚被插入一对接触引脚的一对上端部之间，\n" +
          "\n" +
          "当所述夹紧部位于所述第一位置时，使所述半导体器件的器件引脚被一对上端部上的一对接触端夹紧，并同时电接触所述一对接触端。\n" +
          "\n" +
          "12.根据权利要求11所述的测试装置，其特征在于，所述测试装置包含第一器件保持器，用于固定插入的半导体器件，并容纳每个接触引脚的所述上端部。\n" +
          "\n" +
          "13.根据权利要求12所述的电接触端子，其特征在于，所述第一器件保持器中设置有切口，所述半导体器件通过所述切口插入所述第一器件保持器，并且当所述夹紧部位于所述第一位置时，所述夹紧部通过所述切口与所述一对上端部之一接触，以使所述器件引脚被所述一对接触端夹紧。\n" +
          "\n" +
          "14.根据权利要求10所述的测试装置，其特征在于，当所述夹紧部位于所述第二位置时，带有所述器件引脚的所述半导体器件在横向方向上放入所述测试装置，使得所述器件引脚被放置在一对接触引脚的一对上端部上方，\n" +
          "\n" +
          "当所述夹紧部位于所述第一位置时，从所述器件引脚上方施加压力，使所述器件引脚在所述夹紧部和一对上端部上的一对接触端之间被夹紧，并同时电接触所述一对接触端。\n" +
          "\n" +
          "15.根据权利要求14所述的测试装置，其特征在于，所述测试装置包含第二器件保持器，用于支撑在横向方向上放入所述测试装置的所述半导体器件。\n" +
          "\n" +
          "16.根据权利要求9所述的测试装置，其特征在于，所述底座上设置有导向槽，其中，通过将设置在每个所述接触引脚上的导向钩部置于所述导向槽中，使每个所述接触引脚连接到所述底座。\n" +
          "\n" +
          "17.根据权利要求9所述的测试装置，其特征在于，其特征在于，还包括下盖板，所述下盖板安装在所述底座上，用于将所述接触引脚与所述底座固定在一起。"
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

    toAuthor(authors: String) {
      alert("跳转到" + authors + "个人门户");
    },

    toIPC(index: number, IPC: String) {
      alert("跳转到" + IPC);
    }
  },


  // 调用API方法
  // async 方法名() {
  //
  //   let data = {
  //     //传输的数据
  //   }
  //
  //   let result = await 调用的api名字(data)
  //   console.log(result)
  //
  //   this.ret = result.flag //返回值
  //
  //   if (result.flag === 1) { //提示信息
  //     this.$message({
  //       type: 'success',
  //       message: '保存成功'
  //     })
  //   } else {
  //     this.$message({
  //       type: 'error',
  //       message: '保存失败'
  //     })
  //   }
  // },


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
  height: auto;
  flex-wrap: wrap;
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
  margin-top: 20px;
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

.ipc_ext {
  font-size: 15px;
  padding: 5px;
  text-align: start;
  color: #121212;
}

.ipc_ext:hover {
  cursor: pointer;
  color: #2f3a91;
  text-decoration: underline;
  text-decoration-style: dotted;
}

</style>
