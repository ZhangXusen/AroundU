<template>
  <div class="charts">
    <Scroll/>
  </div>
  <div class="btn" @click="goback()">
    <el-button type="primary" round>退出</el-button>
  </div>
</template>
<!-- 图表组件测试页面 -->
<script setup>
import Scroll from "../components/charts/Scroll.vue";
import router from "../router"

function goback(){
  router.push('/index')
}
</script>

<style scoped>
.charts {
  height: 100%;
  width: 100%;
  background-color: #59b1f0;
}
.btn{
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
}

</style>
