import { ref, onMounted } from 'vue'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  GridComponent,
  DatasetComponent,
//   DatasetComponentOption,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export default function useCharts() {
    const barChartBox = ref(null)

    onMounted(() => {
        let myChart = echarts.init(barChartBox.value);
        let option = {
            title: {
                text: '近五年来插本人数的变化',
                textStyle: {
                    color: '#11a683',
                    fontSize: '16'
                },
                textAlign: 'middle',
                right: '0%'
            },
            xAxis: {
                type: 'category',
                data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#11a683'
                    }
                }
            },
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#11a683'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                {
                    type: 'value',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#11a683'
                        }
                    },
                    axisLabel: {
                        formatter: '{value} %'
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    data: [90424, 100424, 105424, 115424, 120424, 120250, 130000],
                    type: 'bar',
                    color: '#11a683',
                    barWidth: '50',
                    itemStyle: {        //上方显示数值
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                {
                    data: [20, 30, 25, 10, 12, 10, 40],
                    type: 'line',
                    color: '#11a683',
                    yAxisIndex: 1,
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        color: '#fff',
                        fontSize: 14,
                        formatter: '{c}%'
                    }
                }
            ],
        }
        myChart.setOption(option);
    })

    return {
        barChartBox
    }
}