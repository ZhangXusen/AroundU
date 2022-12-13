<template>
  <div class="container">
    <Word style="height: 100%;width: 100%;"/>
    <div class="btn" @click="goback()">
      <el-button type="primary" round>退出</el-button>
    </div>
  </div>
</template>

<script setup>
import Word from "../components/charts/Word";
import router from "../router";
function goback() {
  router.push("/index");
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
.btn {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
}
</style>
