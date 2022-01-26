<template>
    <div class="base-info">
        <div class="info-box">
            <CbCard class="info-card" title="基本信息">
                <div class="info-main">
                    <div class="info-line">
                        <span class="label">院校官网:</span>
                        <span class="value">www.aaaa.com</span>
                    </div>
                    <div class="info-line">
                        <span class="label">院校电话:</span>
                        <span class="value">1315644513</span>
                    </div>
                    <div class="info-line">
                        <span class="label">院校邮箱:</span>
                        <span class="value">1646465few@163.com</span>
                    </div>
                    <div class="info-line">
                        <span class="label">院校地址:</span>
                        <span class="value">很费劲饿哦无法迥旺飞机沃尔夫计划hi我</span>
                    </div>
                </div>
            </CbCard>

            <CbCard class="info-card" title="院校公告">
                <div class="notice-main">
                    <div class="notice-list">
                        <span class="notice-title">最新消息插本需要交100元报名费</span>
                        <span class="notice-time">2020-07-23</span>
                    </div>
                    <div class="notice-list">
                        <span class="notice-title">最新消息插本需要交100元报名费</span>
                        <span class="notice-time">2020-07-23</span>
                    </div>
                    <div class="notice-list">
                        <span class="notice-title">最新消息插本需要交100元报名费</span>
                        <span class="notice-time">2020-07-23</span>
                    </div>
                    <div class="notice-list">
                        <span class="notice-title">最新消息插本需要交100元报名费</span>
                        <span class="notice-time">2020-07-23</span>
                    </div>
                </div>
            </CbCard>
        </div>
    </div>
</template>
<script setup>
// import { reactive } from 'vue'
import CbCard from '@/components/cbCard.vue'

// let todoList = reactive([
//     {
//         title: "今天要修复100个bug",
//         status: false,
//     },
//     {
//         title: "今天要修复100个bug",
//         status: false,
//     },
//     {
//         title: "今天要写100行代码加几个bug吧",
//         status: false,
//     },
//     {
//         title: "今天要修复100个bug",
//         status: false,
//     }
// ])
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