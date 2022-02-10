import { ref, onMounted } from 'vue'
import { getSchoolMajorList, getMajorChart } from '@/api/schoolDetail'
import CbLineChart from '@/charts/lineCharts'

export default function useNav(schoolId) {
    let gradeChartData = {
        title: '近五年分数变化',
        legendData: [ '平均分', '最低分', '录取分'],
        xAxisData: [],
        seriesData: {}
    }
    let peopleChartData = {
        title: '近五年人数变化',
        legendData: [ '招生人数', '录取人数'],
        xAxisData: [],
        seriesData: {}
    }

    let majorList = ref([])
    let gradeChartRef = ref(null)
    let peopleChartRef = ref(null)
    let currentIndex = ref(0)
    let gradeChartObj = null
    let peopleChartObj = null


    onMounted(async () => {
        gradeChartObj = new CbLineChart(gradeChartRef.value)
        peopleChartObj = new CbLineChart(peopleChartRef.value)

        await getSchoolMajorlistFn()
        getMajorChartFn(majorList.value[0].majorInfo.id)

    })

    const getSchoolMajorlistFn = async () => {
        await getSchoolMajorList({ pageNum: 1, pageSize: 100, schoolId}).then(res => {
            if(res.code === 200) {
                majorList.value = res.data.rows
            }
        })
    }

    const getMajorChartFn = (majorId) => {
        getMajorChart({ schoolId, majorId}).then(res => {
            let rows = res.data.rows
            setChartDataList(gradeChartData, rows, ['averageGrade', 'minGrade', 'passGrade'])
            gradeChartObj.init(gradeChartData)

            setChartDataList(peopleChartData, rows, ['recruitNumberPeople', 'admitNumberPeople'])
            peopleChartObj.init(peopleChartData)
        })
    }

    const setChartDataList = (target, origin, keys) => {
        target.xAxisData = []
        for(let i=0; i<keys.length; i++) {
            target.seriesData[keys[i]] = []
        }
        for(let i=0; i<origin.length; i++) {
            let tmp = origin[i]
            target.xAxisData.push(tmp.year)
            for(let j=0; j<keys.length; j++) {
                let key = keys[j]
                target.seriesData[key].push(tmp[key])
            }
        }
    }

    const selectMajor = (index, major) => {
        if(index === currentIndex.value) return
        currentIndex.value = index
        getMajorChartFn(major.id)
    }

    return {
        gradeChartRef,
        peopleChartRef,
        currentIndex,
        majorList,
        getSchoolMajorlistFn,
        selectMajor
    }
}