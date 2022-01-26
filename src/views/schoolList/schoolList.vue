<template>
	<div>
		<HeaderCb />
		<div class="main container">
			<div class="item" v-for="index in 10" :key="index">
				<img class="item-img" src="../../assets/img/aa.jpg">
				<div class="item-info">
					<span class="item-name">嘉应学院</span>
					<Tag text="公办院校"></Tag>
					<Tag text="普通院校"></Tag>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import HeaderCb from '@/components/headerCb.vue'
import Tag from '@/components/tag.vue'

</script>
<style lang="scss" scoped>
.main {
	padding: 20px 10px;
	display: flex;
	flex-wrap: wrap;
	.item {
		margin: 0 10px 60px;
		.item-img {
			width: 300px;
			height: 400px;
		}
		.item-info {
			margin-top: 20px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.item-name {
				font-size: 20px;
				color: $theme-color;
				font-weight: bold;
			}
		}
	}
}
</style>