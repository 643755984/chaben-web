<template>
	<div class="nav-box">
		<div class="container nav-list">
			<div class="logo" @click="goHome"></div>
			<div class="search-box">
				<search-input :heightText="'46px'" />
				<div class="btn">
					<el-icon :size="20" color="#ffffff">
						<search />
					</el-icon>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import SearchInput from '@/components/searchInput.vue'

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
		.search-box {
			display: flex;
			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 10px;
				width: 46px;
				flex-shrink: 0;
				background: $theme-color;
				border-radius: 8px;
				cursor: pointer;
			}
		}
	}
}
</style>