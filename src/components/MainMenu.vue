<script setup>

import {
  UserFilled,
  User,
  FolderChecked,
} from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'
const route = useRoute()
</script>


<template>
      <el-menu
        :default-active="route.path"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical"
        :router="true"
        text-color="#fff"
        :unique-opened="true"
      >
      <h1 class="title">扶贫信息系统</h1>
      <el-menu-item index="/main/user">
        <el-icon><user /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><UserFilled/></el-icon>
            <span>档案管理</span>
          </template>
            <el-menu-item index="/main/user">贫困村信息</el-menu-item>
            <el-menu-item index="/main/project">贫困户信息</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><FolderChecked/></el-icon>
            <span>项目管理</span>
          </template>
            <el-menu-item index="/main/user">项目申请</el-menu-item>
            <el-menu-item index="/main/project">项目信息</el-menu-item>
            <el-menu-item index="/main/project">项目审批</el-menu-item>
            <el-menu-item index="/main/project">项目分配</el-menu-item>
            <el-menu-item index="/main/project">项目评价</el-menu-item>
            <el-menu-item index="/main/project">我的项目</el-menu-item>
            <el-menu-item index="/main/project">我的申请</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><UserFilled/></el-icon>
            <span>帮扶管理</span>
          </template>
            <el-menu-item index="/main/user">帮扶结对</el-menu-item>
            <el-menu-item index="/main/project">结对列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><UserFilled/></el-icon>
            <span>日志管理</span>
          </template>
            <el-menu-item index="/main/user">帮扶日志</el-menu-item>
            <el-menu-item index="/main/project">帮扶成效</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><UserFilled/></el-icon>
            <span>历史记录</span>
          </template>
            <el-menu-item index="/main/user">历史日志</el-menu-item>
            <el-menu-item index="/main/project">历史成效</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/main/user">
        <el-icon><user /></el-icon>
        <span>新闻管理</span>
      </el-menu-item>
      <el-menu-item index="/main/user">
        <el-icon><user /></el-icon>
        <span>数据分析</span>
      </el-menu-item>
      </el-menu>
</template>


<style lang="scss" scoped>
.el-menu-vertical{
    height: 100vh;
    overflow: hidden;
    .title{
        margin: 10px 0;
        text-align: center;
        color: white;
    }
}
</style>