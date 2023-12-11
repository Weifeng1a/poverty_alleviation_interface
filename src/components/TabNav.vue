<script setup>
  import { ref } from 'vue'
  import {useRoute} from 'vue-router'

  const route = useRoute()
/* const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
} */
</script>

<template>
  <el-menu
    :default-active="route.path"
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
   
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/news">新闻资讯</el-menu-item>
    <el-menu-item index="/chart">广东贫困县分布</el-menu-item>
    <el-menu-item index="/login">登录</el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>

</style>