import axios from 'axios'
import { ElMessage } from "element-plus"

const service = axios.create({
    baseURL: 'api/v1',
    timeout: 5000
});


service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if(response.status === 200) {
            if(response.data.code !== 200) ElMessage.error(response.data.data)
            return response.data
        }
        Promise.reject()
    },
    error => {
        // console.log(error);
        // return Promise.reject();
        const { response } = error
        if(response) {
            // 请求以发出，但不在2xx以内
            errorHandle(response.status, response.data)
        }
    }
);

const errorHandle = (status, other) => {
    switch (status) {
        case 404:
            ElMessage.error('请求资源不存在')
            break
        default:
            ElMessage.error(other.data)
    }
}

export default service;
