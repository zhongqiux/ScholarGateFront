<template>
	<div class="display center">
		<div>
			<div class="title">消息中心
				<el-button @click="readAllMessages()" style="margin-left: 46vw;">全部已读</el-button>
				<el-button @click="APIrefreshList(true)">刷新</el-button>
				<span class="w-10 inline-block"></span>
			</div>
			<el-container v-if="!has_message">哎呀，聊天列表为空~</el-container>
			<el-scrollbar v-else style="height: 74vh;">
				<div v-for="message in message_list" :key="message['name']">
					<el-badge :is-dot="!message['isRead']" class="dot">
						<el-card class="box-card" shadow="hover">
							<div class="card-header">
								<!-- <el-avatar :src="message['avatar']" :size="80" style="margin-right: 2vw;" /> -->
								<el-avatar src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
									:size="80" style="margin-right: 2vw;" />
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
import { ElMessage, ElMessageBox } from 'element-plus'
import { getMessageList, readMessage, readAllMessage } from '@/API'
import * as Type from "@/API/type"
import { useUserStore } from '@/store'
export default defineComponent({
	name: "MessagePage",
	created() {
		// this.$store.commit('check_login')
		this.APIrefreshList(false)
	},
	data() {
		return {
			message_list: [
				{ id: '1', userId: '1', name: '122342343', content: '内容', time: '11:40', isRead: true, },
				{ id: '2', userId: '2', name: '审核中心', content: '您的学术成果“1231231”已经审核通过！', time: '11:20', isRead: false, },
				{ id: '3', userId: '3', name: '4', content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', time: '11:50', isRead: false, },
				{ id: '4', userId: '1', name: '122342343', content: '内容', time: '13:40', isRead: true, },
				{ id: '6', userId: '1', name: '456', content: '容', time: '12:40', isRead: true, },
				{ id: '5', userId: '1', name: '456', content: '内容', time: '15:40', isRead: true, },
				{ id: '7', userId: '1', name: '122342343', content: '内容', time: '17:40', isRead: true, },
			],
			has_message: false,
			userId: (String)(useUserStore().userId),
		}
	},
	methods: {
		readAllMessages() {
			console.log('全部已读')
			readAllMessage().then((res: Type.ReadAllMessageReturn) => {
				console.log(res)
				if (res.flag == true) {
					this.APIrefreshList(false)
					// this.message_list.forEach(function (item) {
					// 	item.isRead = true
					// })
				}
			}).catch(err => {
				console.log(err)
				ElMessage({
					message: `错误！`,
					type: 'error',
				})
			})
		},

		APIrefreshList(cl: boolean): void {
			getMessageList().then((res: Type.GetMessageListReturn) => {
				console.log(res.data)
				this.message_list = res.data
				this.has_message = this.message_list.length == 0 ? false : true
				this.message_list.forEach(function (item) {
					var t = new Date(item.time)
					item.time = t.toLocaleDateString() + "-" + t.toLocaleTimeString()
				})
				if (cl) {
					ElMessage({
						message: `刷新成功！`,
						type: 'success',
					})
				}
			}).catch(err => {
				console.log(err)
				ElMessage({
					message: `错误！`,
					type: 'error',
				})
			})
		},

		// 点击消息详情
		det(message: { [x: string]: any; }) {
			// this.$router.push({
			// 	path: '/messageDetail',
			// 	query: {
			// 		user_name: message["author_name"]
			// 	}
			// })
			ElMessageBox.alert(message["content"], message["name"], {
				confirmButtonText: '确定',
			})
			readMessage(message["id"]).then((res: Type.ReadMessageReturn) => {
				console.log(message["time"])
				console.log(res.data.time)
				if (res.flag == true) {
					this.APIrefreshList(false)
				}
			}).catch(err => {
				console.log(err)
				ElMessage({
					message: `错误！`,
					type: 'error',
				})
			})
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
