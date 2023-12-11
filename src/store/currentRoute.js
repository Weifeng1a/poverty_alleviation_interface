import { defineStore } from "pinia";
import {ref} from 'vue'

export const useCurrentRoute = defineStore('currentRoute',()=>{
    const currentRoute = ref({})
    const setCurrentRoute = (value)=>{
        console.log(value.path);
        currentRoute.value = value
    }
    const getCurrentRoute = ()=>{
        console.log(currentRoute);
        return currentRoute
    }
    return {
      setCurrentRoute,
      getCurrentRoute
    }
})