export default function setImgUrl() {
    const url = import.meta.env.VITE_BASE_API

    const setImgUrl = (str) => {
        return url + str
    }

    return {
        setImgUrl
    }
}