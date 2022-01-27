export default function schoolInfoSetup() {
    const schoolType = [
        { value: 0, label: '民办院校' },
        { value: 1, label: '公办院校' },
        { value: 1, label: '职业本科' }
    ]

    const schoolLevel = [
        { value: 0, label: '普通院校' },
        { value: 1, label: '985院校' },
        { value: 2, label: '211院校' },
        { value: 3, label: '双一流院校' }
    ]

    const setSchoolType = (index) => {
        if(schoolType[index]) return schoolType[index].label
        return ''
    }

    const setSchoolLevel = (index) => {
        if(schoolLevel[index]) return schoolLevel[index].label
        return ''
    }

    return {
        schoolType,
        schoolLevel,
        setSchoolType,
        setSchoolLevel
    }
}