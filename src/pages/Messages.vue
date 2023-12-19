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
					<el-badge :is-dot="!message['ifread']" class="dot">
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
import { ElMessage, ElMessageBox } from 'element-plus'
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
				{ messageid: '1', name: '122342343', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '11:40', content: '内容', ifread: true, },
				{ messageid: '2', name: '审核中心', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '11:20', content: '您的学术成果“1231231”已经审核通过！', ifread: false, },
				{ messageid: '3', name: '4', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '11:50', content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容', unread: false, },
				{ messageid: '4', name: '122342343', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '13:40', content: '内容', ifread: true, },
				{ messageid: '6', name: '456', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '12:40', content: '容', ifread: true, },
				{ messageid: '5', name: '456', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '15:40', content: '内容', ifread: true, },
				{ messageid: '7', name: '122342343', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', time: '17:40', content: '内容', ifread: true, },
			],
			has_message: true,
			userId: (Number)(useUserStore().userId),
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
			// readMessage(message["messageid"]).then((res: Type.ReadMessageReturn) => {
			// 	console.log(res)
			// }).catch(err => {
			// 	console.log(err)
			// 	ElMessage({
			// 		message: `错误！`,
			// 		type: 'error',
			// 	})
			// })
			// this.APIrefreshList()
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
