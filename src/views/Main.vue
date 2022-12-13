<template>
  <el-container style="height: 100%">
    <!-- 侧边栏 -->
    <el-aside width="auto">
      <Aside></Aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <Header></Header>
      </el-header>
      <!-- 主要内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../components/Aside.vue";
import Header from "../components/Header.vue";
export default {
  components: { Aside, Header },
};
</script>

<style>
.el-header {
  background-color: #fff;
}
.el-aside {
  background-color: #545c64;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  padding-top: 0;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
</style>
