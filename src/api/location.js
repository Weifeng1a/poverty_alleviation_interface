import httpInstance from "@/utils/http";


export const getLocation = ()=>{
    return httpInstance({
        url:'/location',
        method:'get',
    })
}