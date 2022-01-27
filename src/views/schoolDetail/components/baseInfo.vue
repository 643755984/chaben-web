<template>
    <div class="base-info">
        <div class="info-box">
            <CbCard class="info-card" title="基本信息">
                <div class="info-main">
                    <div class="info-line">
                        <span class="label">院校官网:</span>
                        <span class="value">{{ props.schoolInfo.schoolWeb || '暂无信息' }}</span>
                    </div>
                    <div class="info-line">
                        <span class="label">院校电话:</span>
                        <span class="value">{{ props.schoolInfo.schoolTel || '暂无信息' }}</span>
                    </div>
                    <div class="info-line">
                        <span class="label">院校邮箱:</span>
                        <span class="value">{{ props.schoolInfo.schoolEmail || '暂无信息' }}</span>
                    </div>
                    <div class="info-line">
                        <span class="label">院校地址:</span>
                        <span class="value">{{ props.schoolInfo.schoolAddress || '暂无信息' }}</span>
                    </div>
                </div>
            </CbCard>

            <CbCard class="info-card" title="院校公告">
                <div class="notice-main">
                    <div class="notice-list" 
                    v-for="(item, index) in noticeList" 
                    :key="index + 'notice'">
                        <span class="notice-title">{{ item.title }}</span>
                        <span class="notice-time">{{ item.time }}</span>
                    </div>
                </div>
            </CbCard>
        </div>
    </div>
</template>
<script setup>
import CbCard from '@/components/cbCard.vue'

let props = defineProps({
    schoolInfo: {
        type: Object,
        require: true
    },
    noticeList: {
        type: Object,
        require: true
    }
})
</script>
<style lang="scss" scoped>
.base-info {
    .info-box {
        display: flex;
        justify-content: space-between;
        .info-card {
            width: 49%;
        }
        .info-main {
            .info-line {
                margin-bottom: 16px;
                color: $text-color;
                .label {
                    margin-right: 10px;
                }
            }
        }
        .notice-main {
            .notice-list {
                display: flex;
                align-items: center;
                padding: 10px;
                border-bottom: 1px solid $border-color;
                color: $text-color;
                cursor: pointer;
                &:hover {
                    background: #F5F7FA;
                }
                .notice-title {
                    flex: 1;
                }
                .notice-time {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>