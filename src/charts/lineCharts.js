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
} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

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

class CbLineChart {
    constructor(dom) {
        this.dom = dom
        // this.chartData = chartData
        this.chartOption = {
            legend: {
                data: []
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
                data: []
            },
            yAxis: {
                type: 'value',
                max: function(value){
                    let max = 0 
                    if(value.max > 100) max = value.max + 0.2 * value.max
                    else max = value.max + 10
                    return max
                },
            },
            series: []
        },
        this.chart = null
        this.bindDom()
    }
    bindDom() {
        this.chart = echarts.init(this.dom)
    }
    init(chartData) {
        // let chart = echarts.init(this.dom)
        // this.chartOption.legend.data = this.chartData.legendData
        // this.chartOption.xAxis.data = this.chartData.xAxisData
        this.chartOption.legend.data = chartData.legendData
        this.chartOption.xAxis.data = chartData.xAxisData
        this.initSeriesData(chartData)
        this.chart.setOption(this.chartOption, true)
    }
    initSeriesData(chartData) {
        let seriesData = chartData.seriesData
        let legendData = chartData.legendData
        let series = []
        let i = 0
        
        for(let key in seriesData) {
            series.push({
                name: legendData[i++],
                type: 'line',
                data: seriesData[key]
            })
        }
        this.chartOption.series = series
    }
    drawChart() {}
}

export default CbLineChart