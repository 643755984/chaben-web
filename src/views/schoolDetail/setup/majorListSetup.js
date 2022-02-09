import { ref, onMounted } from 'vue'
import { getSchoolMajorList } from '@/api/schoolDetail'

export default function useNav(schoolId) {
    let majorList = ref([])

    onMounted(() => {
        getSchoolMajorlistFn()
    })

    const getSchoolMajorlistFn = () => {
        getSchoolMajorList({ pageNum: 1, pageSize: 100, schoolId}).then(res => {
            if(res.code === 200) {
                majorList.value = res.data.rows
            }
        })
    }

    return {
        majorList,
        getSchoolMajorlistFn
    }
}