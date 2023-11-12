<template>
<div class="header">
	<div class="header-item" v-for="item in itemList">{{ item.value }}</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name:"Header",
	data(){
		return {
			itemList:[{value:'首页'},{value:'网站介绍'},{value:'关于我们'}],
		}
	}
})
</script>

<style scoped>
.header {
	background-color: rgb(47, 58, 145);
	height: 10vh;
	min-height: 80px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.header-item {
	color: antiquewhite;
}
</style>