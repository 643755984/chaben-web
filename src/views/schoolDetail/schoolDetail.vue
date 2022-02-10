<template>
    <div class="detail-page">
        <HeaderCb />
        <div class="header">
            <div class="container header-content">
                <div class="header">
                    <div class="base-main">
                        <img class="school-logo" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.banfu.cn%2Fwp-content%2Fuploads%2F2021%2F01%2F2021011304591169.jpg&refer=http%3A%2F%2Fup.banfu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640678961&t=27b8bf96fad7380ecc1bac59bdba3df1" />
                        <div class="base-info">
                            <div class="school-name">{{ schoolInfo.schoolName }}</div>
                        </div>
                    </div>
                    <div class="tag-list">
                        <tag class="tag-item" :text="setSchoolType(schoolInfo.schoolType)" />
                        <tag class="tag-item" :text="setSchoolLevel(schoolInfo.schoolLevel)" />
                    </div>
                </div>
            </div>
        </div>
        <div class="main container">
            <base-info :schoolInfo="schoolInfo" :noticeList="noticeList" />
            <!-- <major-info :schoolId="schoolId" /> -->
            <CbCard style="margin-top: 24px;" title="专业信息">
                <div class="charts-main">
                    <div class="left-box">
                        <div class="left-title">专业列表</div>
                        <el-scrollbar height="740px">
                            <div 
                            v-for="(item, index) in majorList" 
                            :key="index + 'major'" 
                            class="major-list" 
                            :class="index ===  currentIndex ? 'active' : ''"
                            @click="selectMajor(index, item.majorInfo)"
                            >
                                {{ item.majorInfo.majorName}}
                            </div>
                        </el-scrollbar>
                    </div>
                    <div class="right-box">
                        <div class="charts-item">
                            <div class="title">近五年人数变化</div>
                            <div class="charts" ref="peopleChartRef" style="width: 100%;height: 340px;"></div>
                        </div>
                        <div class="charts-item">
                            <div class="title">近五年分数变化</div>
                            <div class="charts" ref="gradeChartRef" style="width: 100%;height: 340px;"></div>
                        </div>
                    </div>
                </div>
            </CbCard>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Tag from '@/components/tag.vue'
import BaseInfo from './components/baseInfo.vue'
import HeaderCb from '@/components/headerCb.vue'
import schoolInfoSetup from '@/setup/schoolInfoSetup'
import majorInfoSetup from './setup/majorInfoSetup'
import noticeListSetup from './setup/noticeListSetup'
import { getSchoolInfo } from '@/api/schoolDetail'

const route = useRoute()
const schoolId = route.query.schoolId
const { setSchoolType, setSchoolLevel } = schoolInfoSetup()
let { majorList, currentIndex, gradeChartRef, peopleChartRef, selectMajor } = majorInfoSetup(schoolId)
let { noticeList } = noticeListSetup(schoolId)
let schoolInfo = reactive({
    schoolId: "",
    schoolName: "",
    schoolType: "",
    schoolLevel: "",
    schoolAddress: '',
    schoolLogo: '',
    schoolEmail: ''
})

onMounted(() => {
    getSchoolInfoFn()
})

const getSchoolInfoFn = () => {
    getSchoolInfo(schoolId).then(res => {
        if(res.code === 200) {
            Object.assign(schoolInfo, res.data)
        }
    })
}

</script>
<style lang="scss" scoped>
.detail-page {
    background-color: #F1F1F1;
    min-width: 1280px;
    min-height: 100%;
    .header {
        background: $theme-color;
        .header-content {
            height: 300px;
            padding: 20px 0px;
            box-sizing: border-box;
            .base-main {
                display: flex;
                .school-logo {
                    width: 100px;
                    height: 100px;
                    border-radius: 8px;
                }
                .base-info {
                    margin-left: 20px;
                    .school-name {
                        margin-top: 30px;
                        font-size: 32px;
                        font-weight: bolder;
                        color: #fff;
                    }
                }
            }
            .tag-list {
                margin-left: 120px;
                .tag-item {
                    margin-right: 10px;
                }
            }
        }
    }
    .main {
        padding: 20px 0;
        .charts-main {
            display: flex;
            .left-box {
                width: 250px;
                margin-right: 16px;
                overflow: hidden;
                border-right: 1px solid #e5e7eb;
                .left-title {
                    padding-left: 8px;
                    margin-bottom: 18px;
                    color: $text-color;
                    font-size: 18px;
                    font-weight: bold;
                }
                .major-list {
                    padding: 10px 12px;
                    color: $text-color;
                    cursor: pointer;
                    &:hover {
                        background: #fff;
                    }
                }
                .active {
                    color: $theme-color;
                    background: #fff;
                    border-radius: 6px;
                    font-weight: bold;
                }
            }
            .right-box {
                flex: 1;
                box-sizing: border-box;
                .charts-item {
                    // margin-bottom: 40px;
                    .title {
                        margin-bottom: 16px;
                        text-align: center;
                        color: $theme-color;
                        font-weight: bolder;
                    }
                }
            }
        }
    }
}
</style>