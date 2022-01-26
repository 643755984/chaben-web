import { ref } from 'vue'
import router from '@/router/index'

export default function useSchoolSearch() {
    let searchText = ref('')

    const handleSearch = () => {
        router.push({name: 'schoolList', query: {schoolName: searchText.value}})
    }

    return {
        searchText,
        handleSearch
    }
}