import { ref } from 'vue'

export default function useNav() {
    let currentIndex = ref(0)
    let navList = ref([ { name: '基本信息', comValue: 'BaseInfo'}, { name: '专业信息', comValue: 'MajorInfo'} ])

    const selectHandle = (index) => {
        currentIndex.value = index
    }

    return {
        currentIndex,
        navList,
        selectHandle
    }
}