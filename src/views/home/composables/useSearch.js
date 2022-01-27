import { ref } from 'vue'
import router from '@/router/index'
import { ElMessage } from 'element-plus'

export default function useSchoolSearch() {
    let searchText = ref('')

    const handleSearch = () => {
        if(searchText.value === '') {
            ElMessage('请输入内容')
            return
        }
        router.push({name: 'schoolList', query: {schoolName: searchText.value}})
    }

    return {
        searchText,
        handleSearch
    }
}