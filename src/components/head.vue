<template>
  <header>
    <h1>环你而来-大数据分析平台</h1>
    <div class="nav-left">
      <a href="javascript:;" @click="router.push('/index')"><div class="nav-btn active">主页</div></a>
      <a href="javascript:;" @click="router.push('/index1')"><div class="nav-btn">分析</div></a>
      <a href="javascript:;" @click="router.push('/index1/search')"><div class="nav-btn">搜索</div></a>
    </div>
    <dv-decoration-10 style="width: 95%; height: 5px; margin-top: 4px" />

    <div class="show-time">更新时间:{{ now }}</div>
  </header>
</template>

<script setup>
import dayjs from "dayjs";
import router from "../router";
import { reactive, ref } from "@vue/reactivity";
// 时间显示
let now = ref(dayjs().format("YYYY-MM-DD hh:mm:ss"));
let timer = ref(null);
timer = setInterval(() => {
  now.value = dayjs().format("YYYY年MM月DD日 HH:mm:ss");
}, 1000);
</script>

<style scoped>
header {
  position: relative;
  height: 4.5rem;
  background: url(../assets/images/top.png) no-repeat top center;
  background-size: 100% 100%;
}

header h1 {
  position: relative;
  font-size: 2rem;
  color: #97d3f9;
  text-align: center;
  line-height: 4rem;
}
.nav-left {
  position: absolute;
  float: left;
  top: 13px;
  left: 60px;
  z-index: 2;
}
.nav-left a {
  float: left;
  width: 131px;
  height: 48px;
  margin: 5px 3px 0;
  background: url(../assets/images/dhbg.png) no-repeat;
  text-decoration: none;
  text-align: center;
  line-height: 48px;
}
.nav-left a div {
  color: rgb(155, 217, 255);
  font-size: 24px;
  display: inline-block;
  background-color: transparent;
  padding-right: 12px;
}
.nav-left a.active {
  background: url(../assets/images/dhbg_active.png) no-repeat;
}
.nav-left a:hover {
  background: url(../assets/images/dhbg_active.png) no-repeat;
}
.nav-left a div:hover{
  color: #c4f2fa;
}
.dv-dec-h1 {
  position: absolute;
  left: 50%;
  top: 55px;
  transform: translate(-50%, -50%);
}

.show-time {
  position: absolute;
  right: 70px;
  line-height: 75px;
  color: #97d3f9;
  font-size: 24px;
  top: 0;
  font-family: electronicFont;
  
}
</style>
