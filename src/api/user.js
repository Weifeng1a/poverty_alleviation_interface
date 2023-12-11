import httpInstance from "@/utils/http";

export const login = (username,password)=>{
    return httpInstance({
        url:'/login',
        method:'post',
        data:{
            username,
            password
        }
    })
}