import { ref, onMounted } from 'vue'
import { getNoticeList } from '@/api/schoolDetail'

export default (schoolId) => {
    let noticeList = ref([])

    onMounted(() => {
        getNoticeFn()
    })

    const getNoticeFn = () => {
        getNoticeList({ pageNum: 1, pageSize: 4, schoolId}).then(res => {
            if(res.code === 200) {
                noticeList.value = res.data.rows
            }
        })
    }

    return {
        noticeList,
        getNoticeFn
    }
}