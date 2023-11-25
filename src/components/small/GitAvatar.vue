<template>
	<img class="avatar" :src="url">
</template>

<script>
import Identicon from 'identicon.js'
import md5 from 'blueimp-md5'

export default {
	props: {
		num: [Number]
	},
	name:"GitAvatar",
	computed: {
		url() {
			return 'data:image/png;base64,' + new Identicon(md5(this.num || 0), 420).toString()
		}
	}
}
</script>

<style scoped>
.avatar {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}
</style>