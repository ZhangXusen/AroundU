<template>
  <div class="container">
    <World/>
  </div>
  <div class="btn" @click="goback()">
    <el-button type="primary" round>退出</el-button>
  </div>
</template>

<script setup>
import World from '../components/charts/WorldMap1.vue'
import router from "../router"

function goback(){
  router.push('/index')
}
</script>

<style scoped>
.container{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.btn{
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
}

</style>