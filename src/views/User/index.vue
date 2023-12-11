<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: '男',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: '男',
  },

]
</script>

<template>
   <div class="add">
     <el-button type="primary">添加用户</el-button>
   </div>
    
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="用户名" width="120" />
    <el-table-column prop="date" label="密码" width="150" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="address" label="性别" width="50"/>
    <el-table-column prop="address" label="身份证号" width="200"/>
    <el-table-column prop="address" label="用户权限" width="100"/>
    <el-table-column prop="address" label="创建时间" width="150"/>
    <el-table-column prop="address" label="更新时间" width="150"/>
    <el-table-column prop="address" label="操作"/>
  </el-table>
</template>

<style lang="scss">
   .add{
      margin: 10px 0;
      margin-left: 10px;
   }
</style>