<template>
    <CbCard style="margin-top: 24px;" title="专业信息">
        <div class="charts-main">
            <div class="left-box">
                <div class="left-title">专业列表</div>
                <el-scrollbar height="740px">
                    <div v-for="item in 20" :key="item" class="major-list" :class="item ===  1 ? 'active' : ''">专业{{item}}</div>
                </el-scrollbar>
            </div>
            <div class="right-box">
                <div class="charts-item">
                    <div class="title">近五年人数变化</div>
                    <div class="charts" style="width: 100%;height: 300px;"></div>
                </div>
                <div class="charts-item">
                    <div class="title">近五年分数变化</div>
                    <div class="charts" ref="lineChart" style="width: 100%;height: 300px;"></div>
                </div>
            </div>
        </div>
    </CbCard>
</template>
<script setup>
import CbCard from '@/components/cbCard.vue'
import { ref, onMounted } from 'vue'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    LegendComponent,
    GridComponent,
    DatasetComponent,
    //   DatasetComponentOption,
    TransformComponent,
    TooltipComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
    LegendComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    TooltipComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

let lineChart = ref(null)

onMounted(() => {
    let myChart = echarts.init(lineChart.value);
    let option = {
        legend: {
            data: ['招生人数', '录取人数']
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name: '招生人数',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
            name: '录取人数',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
    myChart.setOption(option);
})

</script>
<style lang="scss" scoped>
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
        padding: 0 60px;
        box-sizing: border-box;
        .charts-item {
            margin-bottom: 16px;
            .title {
                margin-bottom: 16px;
                text-align: center;
                color: $theme-color;
                font-weight: bolder;
            }
        }
    }
}
</style>