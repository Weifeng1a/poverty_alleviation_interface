<script setup>
   import TabNav from './components/TabNav.vue';
   import { useRoute } from 'vue-router';
   const route = useRoute()
</script>

<template>
  <!-- 一级路由出口组件 -->
  <TabNav v-show="route.meta.showTab"/>
  <RouterView />
</template>

<style scoped>

</style>
