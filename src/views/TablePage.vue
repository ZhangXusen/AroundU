<template>
  <div class="charts">
    <Table/>
  </div>
  <div class="btn" @click="goback()">
    <el-button type="primary" round>退出</el-button>
  </div>
</template>
<!-- 图表组件测试页面 -->
<script setup>
import Table from "../components/charts/Table";
import router from "../router"

function goback(){
  router.push('/index')
}
</script>

<style scoped>
.charts {
  height: 100%;
  height: 100%;
}
.btn{
  position: absolute;
  top: 50px;
  right: 10px;
  z-index: 2;
}

</style>
