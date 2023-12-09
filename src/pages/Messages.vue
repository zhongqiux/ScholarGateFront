<template>
	<div class="display center">
		<div>
			<div class="title">消息中心
				<el-button @click="refreshList()" style="margin-left: 55vw;">刷新</el-button>
				<span class="w-10 inline-block"></span>
			</div>
			<el-container v-if="!has_message">哎呀，聊天列表为空~</el-container>
			<el-scrollbar v-else style="height: 68vh;">
				<div v-for="message in message_list" :key="message['author_name']">
					<el-card class="box-card" shadow="hover" >
						<div class="card-header">
							<el-avatar :src="message['src']" :size="80" style="margin-right: 2vw;"/>
							<span style="width: 55vw;">
								<div  class="time">{{ message["author_name"] +" · "+ message["last_sendtime"] }}</div>
								<div><el-button class="mes" text @click="det(message)">
									<el-text class="info" style="text-align: left;" truncated>
										{{ message["last_message"] }}
									</el-text>
								</el-button></div>
							</span>
						</div>
					</el-card>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
export default defineComponent({
	name: "MessagePage",
	created() {
        // this.$store.commit('check_login')
        // this.refreshList()
    },
	data() {
		return {
			message_list: [
				{ author_name: '122342343', last_message: '内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '456', last_message: '内', last_sendtime: '12:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '4', last_message: '内容内容内容内容内容内容内容内容内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '122342343', last_message: '内容', last_sendtime: '14:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '456', last_message: '内容', last_sendtime: '15:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '456', last_message: '内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '122342343', last_message: '关键词', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '456', last_message: '关键词', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '456', last_message: '内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ author_name: '456', last_message: '关键词', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
			],
			has_message: true,
		}
	},
	methods: {
		refreshList() {
			axios.get('/api/message/get_list', {
				params: {
					token: '111'
				}
			})
			.then(response => {
				let error_no = response.data["error_no"]
				switch (error_no) {
                    // 刷新成功
                    case 1000:
                        this.message_list = response.data["messages"]
                        this.has_message = true
                        // console.log(response.data["friend"])
                        // console.log(this.friends)
                        break;
                    // 请求错误
                    case 1001:
                        ElMessage.error('请求错误')
                        break;
                    // 用户未登录
                    case 1002:
                        ElMessage.error('用户未登录')
                        break;
                    // 无聊天记录
                    case 1003:
                        ElMessage.error('无聊天记录')
                        this.has_message = false
                        break;
                    // 未知错误码
                    default:
                        ElMessage.error('请求返回未知的错误码：' + error_no)
                }
			})
			//处理错误
			.catch(error => {
			ElMessage.error(error)
			console.log(error)
			})
		},
		// 跳转消息详情页
		det(message: { [x: string]: any; }) {
			this.$router.push({
				path: '/messageDetail',
				query: {
					user_name: message["author_name"]
				}
			})
		},
	}
})
</script>

<style scoped>

.card-header {
	display: flex;
	/* justify-content: space-between; */
	align-items: center;
	height: 10vh;
}

.box-card {
	margin-bottom: 2vh;
	text-align: left;
}

.mes {
	width: 55vw;
}

.info {
	font-size: 20px;
	font-weight: bold;
	width: 55vw;
	color: black;
}

.time {
	display: block;
	margin-top: 1vh;
	font-size: 0.85em;
	opacity: 0.5;
}

h3,
p {
	margin: 0;
}

.center {
	position: relative;
	width: 70vw;
	margin: 0 auto;
}

.display {
	/* display: flex; */
	flex-direction: row;
	justify-content: space-between;
}

.title {
	height: 10vh;
	/* border-bottom: 1px dotted black; */
	font-size: 30px;
	font-weight: bold;
	text-align: left;
	padding-top: 8vh;
}

.title::before {
	border-radius: 5px;
	background-color: #9acff4;
	content: "1";
	margin-right: 1vw;
	color: #9acff4;
}
</style>
