<script setup>
  import MainMenu from '@/components/MainMenu.vue';
  import HeaderNav from '@/components/HeaderNav.vue';
</script>

<template>
    <div class="common-layout">
    <el-container class="common-main">
      <el-aside width="200px">
         <MainMenu/>
      </el-aside>
      <el-container class="common-content">
        <el-header height="70px">
         <HeaderNav/>
        </el-header>
        <el-main>
         <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" >
   .common-layout{
      .common-main{
         height: 100vh;
      }
      .common-content{
         .el-header{
            padding: 0 !important;
         }
         .el-main{
            padding: 0 !important;
         }
      }
   }
</style>
