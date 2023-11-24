<template>
	<div class="display center">
		<div>
			<div class="title">消息中心<span class="w-10 inline-block"></span></div>
			<el-container v-if="!has_message">哎呀，聊天列表为空~</el-container>
			<el-scrollbar v-else style="height: 68vh;">
				<div v-for="message in message_list" :key="message['user_name']">
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
export default defineComponent({
	name: "MessagePage",
	data() {
		return {
			message_list: [
				{ user_name: '122342343', is_author: '主题', author_name: '122342343', last_message: '内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '123', is_author: '主题', author_name: '456', last_message: '内', last_sendtime: '12:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '123', is_author: '主题', author_name: '4', last_message: '内容内容内容内容内容内容内容内容内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '123', is_author: '主题', author_name: '122342343', last_message: '内容', last_sendtime: '14:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '123423423', is_author: '主题', author_name: '456', last_message: '内容', last_sendtime: '15:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '123', is_author: '主题', author_name: '456', last_message: '内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '134423', is_author: '主题', author_name: '122342343', last_message: '关键词', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '3', is_author: '主题', author_name: '456', last_message: '关键词', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '123', is_author: '主题', author_name: '456', last_message: '内容', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
				{ user_name: '123', is_author: '主题', author_name: '456', last_message: '关键词', last_sendtime: '11:40', src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', },
			],
			has_message: true,
		}
	},
	methods: {
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
