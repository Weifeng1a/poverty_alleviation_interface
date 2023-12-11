import axios from "axios";

//创建axios实例
const httpInstance = axios.create({
    baseURL:'http://127.0.0.1/api',
    timeout:5000 
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))


// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => { 
    //token失效 401拦截处理
    if(e.response.status === 401){
        //TODO 清空user，返回登录
    }
    return Promise.reject(e)
})

export default httpInstance

