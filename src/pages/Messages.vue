<template>
	<div class="display center">
		<div>
			<div class="title">消息中心
				<el-button @click="readAllMessages()" style="margin-left: 46vw;">全部已读</el-button>
				<el-button @click="APIrefreshList()">刷新</el-button>
				<span class="w-10 inline-block"></span>
			</div>
			<el-container v-if="!has_message">哎呀，聊天列表为空~</el-container>
			<el-scrollbar v-else style="height: 74vh;">
				<div v-for="message in message_list" :key="message['name']">
					<el-badge :is-dot="message['unread']" class="dot">
						<el-card class="box-card" shadow="hover">
							<div class="card-header">
								<el-avatar :src="message['avatar']" :size="80" style="margin-right: 2vw;" />
								<span style="width: 55vw;">
									<div class="time">{{ message["name"] + " · " + message["time"] }}</div>
									<div><el-button class="mes" text @click="det(message)">
											<el-text class="info" style="text-align: left;" truncated>
												{{ message["content"] }}
											</el-text>
										</el-button></div>
								</span>
							</div>
						</el-card>
					</el-badge>
				</div>
			</el-scrollbar>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getMessageList } from '@/API'
import * as Type from "@/API/type"
import { useUserStore } from '@/store'
export default defineComponent({
	name: "MessagePage",
	created() {
		// this.$store.commit('check_login')
		// this.refreshList()
	},
	data() {
		return {
			message_list: [
				{ messageid: '1', name: '122342343', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '11:40', content: '内容', unread: true, },
				{ messageid: '2', name: '456', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '11:20', content: '内', unread: false, },
				{ messageid: '3', name: '4', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '11:50', content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', unread: false, },
				{ messageid: '4', name: '122342343', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '13:40', content: '内容', unread: true, },
				{ messageid: '6', name: '456', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '12:40', content: '容', unread: true, },
				{ messageid: '5', name: '456', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '15:40', content: '内容', unread: true, },
				{ messageid: '7', name: '122342343', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '17:40', content: '内容', unread: true, },
			],
			has_message: true,
			userId: (Number)(useUserStore().id),
		}
	},
	methods: {
		readAllMessages() {
			console.log('全部已读')
		},

		APIrefreshList(): void {
			getMessageList(this.userId).then((res: Type.GetMessageListReturn) => {
				console.log(res)
				this.message_list = res.data.messages
			}).catch(err => {
				console.log(err)
				ElMessage({
					message: `错误！`,
					type: 'error',
				})
			})
		},

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
			// this.$router.push({
			// 	path: '/messageDetail',
			// 	query: {
			// 		user_name: message["author_name"]
			// 	}
			// })
			console.log(message["content"])
		},
	}
})
</script>

<style scoped>
.dot {
	margin-top: 10px;
	margin-right: 40px;
}

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
	padding-top: 2vh;
	display: flex;
	align-items: center;
}

.title::before {
	border-radius: 5px;
	background-color: #9acff4;
	content: "1";
	margin-right: 1vw;
	color: #9acff4;
}
</style>
