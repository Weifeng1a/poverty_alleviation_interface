<script setup>
import { ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute()
  // 生成数组数据
  const breadcrumbData = ref([])
  let activeIndex = ref(-1)
  const getBreadcrumbData = () => {
    const newRoute = route.matched.filter(
      item => item.meta && item.meta.title
    )
    if(breadcrumbData.value.length === 0 && newRoute.length !==0){
       breadcrumbData.value.push(newRoute[0])
       activeIndex.value = breadcrumbData.value.length - 1
       return 
    }
    if(newRoute.length !== 0 && breadcrumbData.value.length !== 0){
      if(!breadcrumbData.value.some(item=>item.path == newRoute[0].path)){
        breadcrumbData.value.push(newRoute[0])
        activeIndex.value = breadcrumbData.value.length - 1
      }
    }
  }
  // 监听路由变化时触发
  watch(
    route,
    () => {
      getBreadcrumbData()
    },
    {
      immediate: true
    }
  )

  // 处理点击事件
  const router = useRouter()
  const onLinkClick = (value,index) => {
    activeIndex.value = index
    router.push(value.path)
  }

  const handleClose = (tag)=>{
    console.log(tag);
    breadcrumbData.value.splice(breadcrumbData.value.findIndex(item=>item.meta.title === tag),1)
    if(breadcrumbData.value.length === 0){
      activeIndex.value = -1
    }
    if(breadcrumbData.value.length !== 0){
      router.replace(breadcrumbData.value[breadcrumbData.value.length-1].path)
    }
    else{
      router.replace('/main')
    }
  }
  const refresh = ()=>{
    breadcrumbData.value = []
    router.push('/main')
  }
</script>

<template>
  <div class="breadcrumb-container">
    <div class="text-box">
      <div class="text-icon">
        <el-icon size="16px" @click="refresh"><Refresh /></el-icon>
      </div>
      <div class="text-content">
        <span>欢迎使用扶贫信息系统</span>
      </div>
      <div class="user-box">
        <el-icon><Avatar/></el-icon>
        <span>管理员</span>
        <el-icon><ArrowDownBold /></el-icon>
      </div>
    </div>
    <div class="breadcrumb-box">
      <el-icon><Menu/></el-icon>
    <transition-group name="breadcrumb">
      <el-tag 
      closable 
      @close="handleClose(item.meta.title)" 
      @click="onLinkClick(item,index)"
      v-for="(item, index) in breadcrumbData"
      :class="{active : index === activeIndex}"
      :key="item.path"
      >
      {{ item.meta.title }}
    </el-tag>
    </transition-group>
  </div>
  </div>
  
    
  
</template>

<style lang="scss">
@import '../assets/style/transition.css';
    .breadcrumb-container{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-top: 2px solid skyblue;
        border-bottom: 2px solid skyblue;
        background-color: white;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
        .text-box{
           height: 35px;
           padding-left: 8px;
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding-right: 20px;
           .text-content{
            font-size: 20px;
            font-weight: bold;
            span{
              user-select: none;
             }
           }
           .user-box{
             display: flex;
             align-items: center;
             font-size: 15px;
             span{
              user-select: none;
              padding-right:5px;
             }
           }
        }
        .breadcrumb-box{
          border-top: 2px solid skyblue;
          width: 100%;
          height: 30px;
          display: flex;
          align-items: center;
          padding-left: 10px;
          .el-icon{
            size: 18px;
            margin-right: 5px;
          }
          .el-tag{
            &.active{
              background-color: #998e8e !important;
             
            }
          }
        }
    }
</style>