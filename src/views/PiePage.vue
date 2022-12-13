<template>
  <div class="container">
      <Pie/>
      <div class="btn" @click="goback()">
      <el-button type="primary" round>退出</el-button>
    </div>
  </div>
</template>

<script setup>
import Pie from "../components/charts/pie.vue"
import router from "../router";

function goback() {
  router.push("/index");
}
</script>

<style>
.container{
    height: 100vh;
    width: 100vw;
    background-color: skyblue;
    
}
.btn{
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
}
</style>