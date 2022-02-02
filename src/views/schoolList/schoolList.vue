<template>
	<div>
		<HeaderCb />
		<div class="main container">
			<div class="school-list" v-if="page.list.length !== 0">
				<div class="item" 
				v-for="(item, index) in page.list" 
				:key="index + 'school'"
				@click="changePage(item.schoolId)">
					<img class="item-img" :src="setImgUrl(item.schoolDetailPic)">
					<div class="tip">
						查看详情
						<el-icon><arrow-right-bold /></el-icon>
					</div>
					<div class="item-name">{{ item.schoolName }}</div>
					<div class="tag-list">
						<Tag :text="setSchoolType(item.schoolType)"></Tag>
						<Tag :text="setSchoolLevel(item.schoolLevel)"></Tag>
					</div>
				</div>
			</div>
			<div class="no-data" v-else>
				找不到数据
			</div>
		</div>
		<div class="footer"  v-if="page.list.length !== 0">
			<el-pagination layout="prev, pager, next" :total="page.total"></el-pagination>
		</div>
	</div>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeaderCb from '@/components/headerCb.vue'
import Tag from '@/components/tag.vue'
import schoolInfoSetup from '@/setup/schoolInfoSetup'
import setImgUrlSetup from '@/setup/setImgUrlSetup'
import { searchSchool } from '@/api/schoolList'

const route = useRoute()
const router = useRouter()
const { setSchoolType, setSchoolLevel } = schoolInfoSetup()
const { setImgUrl } = setImgUrlSetup()
let page = reactive({
	list: [],
	pageNum: 1,
	pageSize: 10,
	total: 0
})

onMounted(() => {
	searchSchool(route.query.schoolName).then(res => {
		console.log(res)
		if(res.code === 200) {
			page.list = res.data.rows
			page.total = res.data.count
		}
	})
})

const changePage = (schoolId) => {
	router.push({name: 'schoolDetail', query: { schoolId }})
}

</script>
<style lang="scss" scoped>
.main {
	padding: 20px 10px 10px;
	.school-list {
		display: flex;
		flex-wrap: wrap;
		.item {
			position: relative;
			margin: 0 10px 60px;
			cursor: pointer;
			overflow: hidden;
			&::before {
				content: "";
				position: absolute;
				width: 120%;
				z-index: 2;
				top: -150px;
				height: 140px;
				background-color: #333430;
				transform: rotate(0deg);
				transform-origin: -225% 0;
				transition: all 250ms ease
			}
			&:hover {
				&::before {
					transform: rotate(5deg);
				}
				.tip {
					top: 30px;
				}
			}
			.tip {
				position: absolute;
				top: -100px;
				right: 20px;
				display: flex;
				align-items: center;
				color: #FFF;
				z-index: 3;
				-webkit-transition: all 500ms ease;
				transition: all 500ms ease;
			}
			.item-img {
				width: 300px;
				height: 400px;
			}
			.item-name {
				margin: 20px 0 10px;
				font-size: 20px;
				color: $theme-color;
				font-weight: bold;
			}
		}
	}
	.no-data {
		font-size: 30px;
		font-weight: bold;
		color: $text-color;
		text-align: center;
	}
}
.footer {
	padding-bottom: 30px;
	text-align: center;
}
</style>