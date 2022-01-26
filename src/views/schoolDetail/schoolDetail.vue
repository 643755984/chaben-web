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
                        <tag class="tag-item" :text="'985院校'" />
                        <tag class="tag-item" :text="'公办院校'" />
                    </div>
                </div>
            </div>
        </div>
        <div class="main container">
            <base-info />
            <major-info />
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Tag from '@/components/tag.vue'
import BaseInfo from './components/baseInfo.vue'
import MajorInfo from './components/majorInfo.vue'
import HeaderCb from '@/components/headerCb.vue'
import useNav from './composables/useNav'
import { searchSchool } from '@/api/schoolDetail'

const route = useRoute()
let { currentIndex, navList, selectHandle } = useNav()
const searchName = route.query.schoolName || ''
let schoolInfo = reactive({
    schoolName: "",
    schoolType: "",
    schoolLevel: "",
    schoolAddress: '',
    schoolLogo: '',
    schoolEmail: ''
})

onMounted(() => {
    // getSchoolInfo()
})

const getSchoolInfo = () => {
    searchSchool(searchName).then(res => {
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
    }
}
</style>