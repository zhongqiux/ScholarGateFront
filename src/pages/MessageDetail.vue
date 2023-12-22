<template>
    <div class="userMessageDetail">
        <el-container>
            <el-header class="btnbox">
                <router-link to="/messages" class="btn"><el-button type="primary">返回</el-button></router-link>
            </el-header>
            <el-main class="det">
                <el-scrollbar id="scroll">
                    <div class="chatBox" v-for="item in form_Detail.message" :key="item.sender">
                        <div v-if="item.sender == '1'" class="message my_message">
                            <p>{{ item.info }}<br><span>{{ item.time }}</span> </p>
                        </div>
                        <div v-else class="message frnd_message">
                            <p>{{ item.info }}<br><span>{{ item.time }}</span> </p>
                        </div>
                    </div>
                </el-scrollbar>
            </el-main>
            <el-footer class="ipt">
                <el-input v-model="form_Detail.ipt" placeholder="Message" class="input-with-select" clearable>
                    <template #append>
                        <el-button :icon="Promotion" @click="send" class="sendbtn">发送</el-button>
                    </template>
                </el-input>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { Promotion } from '@element-plus/icons-vue'
// import { ref } from 'vue'
</script>

<script lang="ts">
import { reactive } from 'vue'
import moment from 'moment'
// import { ElScrollbar } from 'element-plus'

export default {

    data() {
        return {
            form_Detail:
                reactive({
                    ipt: '',
                    message: [{
                        sender: '1',
                        info: '消息1',
                        time: '2023/6/6 10:10'
                    },
                    {
                        sender: '2',
                        info: '消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1。',
                        time: '2023/6/6 10:12'
                    },
                    {
                        sender: '1',
                        info: '消息2',
                        time: '2023/6/6 10:13'
                    },]
                }),
        }
    },

    methods: {
        send() {
            console.log('send');
            this.form_Detail.message.push({
                sender: '1',
                info: this.form_Detail.ipt,
                time: moment().format('YYYY/MM/DD HH:mm')
            });
            this.form_Detail.ipt = '';
            // this.$refs['scroll'].wrap.scrollTop = this.$refs['scroll'].wrap.scrollHeight;
            // const pageInstance = getCurrentInstance();
            // // 获取dom节点对象
            // const tagDomObj = pageInstance.refs.scroll;
            // tagDomObj.wrap.scrollTop = 0;
            // pageInstance.refs.scroll.wrap.scrollTop = 0;
        },
    }
}

</script>

<style scoped>
.btnbox {
    margin: 4vh 16vw;
    padding: 0;
    height: 5vh;
}

.btn {
    float: left;
    background-color: white;
    /* padding: 0; */
    /* height: 1vh; */
    /* width: 1vw; */
}

.det {
    margin: 0 16vw;
    padding: 0px;
    height: 500px;
    /* background-color: rgb(240, 240, 240); */
    background-color: rgb(245, 245, 245);
}

.chatBox {
    position: relative;
    width: 95%;
    height: calc(100%-120px);
    margin: auto;
}

.message {
    position: relative;
    display: flex;
    width: 100%;
    margin: 5px 0;
}

.message p {
    position: relative;
    right: 0;
    text-align: left;
    max-width: 65%;
    padding: 12px;
    background: #dcf8c6;
    border-radius: 10px;
    font-size: 0.9em;
}

.message p::before {
    content: '';
    position: absolute;
    top: 0;
    right: -12px;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #dcf8c6 0%, #dcf8c6 50%, transparent 50%, transparent);
}

.message p span {
    display: block;
    margin-top: 5px;
    font-size: 0.85em;
    opacity: 0.5;
}

.my_message {
    justify-content: flex-end;
}

.frnd_message {
    justify-content: flex-start;
}

.frnd_message p {
    background: #fff;
    text-align: left;
}

.message.frnd_message p::before {
    content: '';
    position: absolute;
    top: 0;
    left: -12px;
    width: 20px;
    height: 20px;
    background: linear-gradient(225deg, #fff 0%, #fff 50%, transparent 50%, transparent);
}

.ipt {
    margin: 3vh 16vw;
}

.input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
}

.sendbtn {
    font-size: 12px;
}
</style>