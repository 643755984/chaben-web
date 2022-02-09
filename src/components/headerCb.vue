<template>
	<div class="nav-box">
		<div class="container nav-list">
			<div class="logo" @click="goHome"></div>
		</div>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
	router.push({name: 'Home'})
}
</script>
<style lang="scss" scoped>
.nav-box {
	position: sticky;
	top: 0;
	padding: 10px;
	background: #fff;
	box-shadow: 0 2px 4px 0 rgba(85, 85, 85, .1);
	z-index: 100;
	.nav-list {
		display: flex;
		justify-content: space-between;
		.logo {
			width: 132px;
			height: 46px;
			background-image: url('../assets/logo.png');
			background-repeat: no-repeat;
			background-size: 132px 46px;
			cursor: pointer;
		}
	}
}
</style>