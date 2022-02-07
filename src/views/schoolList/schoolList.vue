<template>
	<div>
		<HeaderCb />
		<div class="fillter container">
			<el-select v-model="page.schoolType" placeholder="选择院校类型" size="large" clearable >
				<el-option 
				v-for="(item, index) in schoolType" 
				:key="index + 'type'"
				:label="item.label" 
				:value="item.value"></el-option>
			</el-select>
			<el-select style="margin-left: 20px;" v-model="page.schoolLevel" placeholder="选择院校等级" size="large" clearable >
				<el-option 
				v-for="(item, index) in schoolLevel" 
				:key="index + 'level'"
				:label="item.label"
				:value="item.value"></el-option>
			</el-select>
		</div>
		<div class="main container">
			<div class="no-data" v-if="page.list.length === 0">
				找不到数据
			</div>
			<div class="school-list">
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
			
		</div>
		<div class="footer"  v-if="page.list.length !== 0">
			<el-pagination layout="prev, pager, next" :total="page.total"></el-pagination>
		</div>
	</div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeaderCb from '@/components/headerCb.vue'
import Tag from '@/components/tag.vue'
import schoolInfoSetup from '@/setup/schoolInfoSetup'
import setImgUrlSetup from '@/setup/setImgUrlSetup'
import { searchSchool } from '@/api/schoolList'

const route = useRoute()
const router = useRouter()
const { setSchoolType, setSchoolLevel, schoolType, schoolLevel } = schoolInfoSetup()
const { setImgUrl } = setImgUrlSetup()
let page = reactive({
	schoolType: '',
	schoolLevel: '',
	list: [],
	pageNum: 1,
	pageSize: 10,
	total: 0
})
let noData = ref(false)

onMounted(() => {
	searchSchool(route.query.schoolName, page.pageNum, page.pageSize).then(res => {
		console.log(res)
		if(res.code === 200) {
			page.list = res.data.rows
			page.total = res.data.count
			noData.value = res.noData
		}
	})
})

const changePage = (schoolId) => {
	router.push({name: 'schoolDetail', query: { schoolId }})
}

</script>
<style lang="scss" scoped>
.fillter {
	padding: 18px 10px;
	border-bottom: 1px solid $border-color;
}
.main {
	padding: 20px 10px 10px;
	.school-list {
		display: flex;
		flex-wrap: wrap;
		.item {
			position: relative;
			// margin: 0 10px 60px;
			margin-right: 60px;
			margin-bottom: 40px;
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
		font-size: 24px;
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