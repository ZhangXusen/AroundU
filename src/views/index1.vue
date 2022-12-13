<template>
  <el-container style="height: 100%">
    
    <!-- 头部 -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- 主要内容 -->
    <el-main>
      <router-view></router-view>
    </el-main>
    
  </el-container>
</template>

<script setup>
import Header from "../components/head.vue";
</script>

<style>
@font-face {
  font-family: electronicFont;
  src: url(../assets/font/DS-DIGIT.TTF);
}
.el-container {
 background: #1a1835;
  background-size: 100% 100%;
  line-height: 1.15;
  
}
.el-header {
  padding: 0;
}
.el-main {
  padding-top: 0;
  color: var(--el-text-color-primary);
  text-align: center;
  padding: 10px 0 0 0;
}
</style>
