<template>
    <div class="container">
        <div class="title"></div>
        <div class="content">
            <div class="search-box">
                <SearchInput v-model="searchText" />
                <div class="btn" @click="handleSearch">搜索</div>
            </div>

            <el-card class="introduce-card">
                <div class="introduce-main">
                    <div class="introduce-title">最新 最全数据展示</div>
                    <div class="introduce-text">你想要的插本信息和数据，这里全都有！</div>
                    <div class="chart-box" ref="barChartBox" style="width: 760px;height: 370px;"></div>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script>
import SearchInput from '@/components/searchInput.vue'
import useSearch from './composables/useSearch'
import useCharts from './composables/useCharts'

export default {
    components: {
        SearchInput
    },
    setup() {
        const { searchText, handleSearch } = useSearch()
        const { barChartBox } = useCharts()

        return {
            searchText,
            handleSearch,
            barChartBox
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;
    .title {
        position: absolute;
        left: 20px;
        top: 20px;
        width: 176px;
        height: 62px;
        background-image: url('../../assets/logo.png');
        background-repeat: no-repeat;
        background-size: 176px 62px;
    }
    .content {
        position: absolute;
        display: flex;
        width: 1280px;
        height: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .search-box {
            margin-top: 120px;
            width: 360px;
            .btn {
                margin-top: 20px;
                padding: 18px 0;
                font-weight: bold;
                background: $theme-color;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                cursor: pointer;
            }
        }       
        .introduce-card {
            margin-left: 120px;
            width: 800px;
            height: 100%;
            .introduce-main {
                overflow: hidden;
                .introduce-title {
                    font-size: 42px;
                    font-weight: bold;
                    color: #4C4C43;
                }
                .introduce-text {
                    margin-top: 30px;
                    margin-bottom: 20px;
                    font-size: 20px;
                    color: #4C4C43;
                }
            }
        }
    }
}
</style>