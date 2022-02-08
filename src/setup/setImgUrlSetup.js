import noImg from '@/assets/img/noImg.jpg'

export default function setImgUrl() {
    const url = import.meta.env.VITE_BASE_API

    const setImgUrl = (str) => {
        return str ? url + str : noImg
    }

    return {
        setImgUrl
    }
}
