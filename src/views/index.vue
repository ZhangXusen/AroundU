<template>
  <!-- 内容 -->
  <div class="container">
    <!-- 头部 -->
    <Header />
    <!-- 主体 -->
    <section class="main-box">
      <!-- 左侧 -->
      <div class="col">
        <div class="panel" :class="[fullstatus.left1 ? 'fullstyle' : '']">
          <dv-decoration-7 style="width: 100%; height: 30px"
            ><h2>变化趋势</h2></dv-decoration-7
          >
          <div class="icon">
            <el-icon :size="25" color="#02a6b5"
              ><full-screen
                v-if="!fullstatus.left1"
                @click="changeSize('left1', '/table')" />
              <close-bold v-else @click="changeSize('left1')"
            /></el-icon>
          </div>
          <div class="charts" ref="charts">
            <Table ref="table" id="table" />
          </div>
          <div class="panel-foot"></div>
        </div>
        <div class="panel" :class="fullstatus.left2 ? 'fullstyle' : ''">
          <dv-decoration-11
            @click="changeSize('left2')"
            style="
              width: 200px;
              height: 60px;
              color: #fff;
              margin: 0 auto;
              cursor: pointer;
            "
            >热词</dv-decoration-11
          >
          <div class="icon">
            <el-icon :size="25" color="#02a6b5"
              ><full-screen
                v-if="!fullstatus.left2"
                @click="changeSize('left2', '/word')"
              />
              <close-bold v-else @click="changeSize('left2')" />
            </el-icon>
          </div>
          <div class="charts">
            <WordAnt style="height: 180px" ref="left2" />
          </div>
          <div class="panel-foot"></div>
        </div>
        <div class="panel" :class="fullstatus.left3 ? 'fullstyle' : ''">
          <dv-decoration-11
            style="width: 200px; height: 60px; color: #fff; margin: 0 auto"
            >热度排行</dv-decoration-11
          >
          <div class="icon">
            <el-icon :size="25" color="#02a6b5"
              ><full-screen
                v-if="!fullstatus.left3"
                @click="changeSize('left3', '/scroll')" />
              <close-bold v-else @click="changeSize('left3')"
            /></el-icon>
          </div>
          <div class="charts">
            <!-- 排行轮播 -->
            <Scroll />
          </div>
          <div class="panel-foot"></div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="col">
        <div>
          <dv-border-box-11 title="已爬取数据">
            <div class="mid-top">
              <ul>
                <li>9278327</li>
                <li>113224</li>
              </ul>
            </div>
            <div class="mid-map"></div>
            <div class="mid-foot"></div>
          </dv-border-box-11>
        </div>
        <div class="map">
          <div>
            <dv-border-box-11
              title="世界地图"
              @click="changeSize('right2', '/world1')"
            >
              <div>
                <WorldMap style="width: 700px; height: 600px" />
              </div>
            </dv-border-box-11>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="col">
        <div
          class="panel"
          style="height: 30rem"
          :class="fullstatus.right2 ? 'fullstyle' : ''"
        >
          <h2>图表</h2>
          <div class="icon">
            <el-icon :size="25" color="#02a6b5"
              ><full-screen
                v-if="!fullstatus.right2"
                @click="changeSize('right2')" />
              <close-bold v-else @click="changeSize('right2')"
            /></el-icon>
          </div>
          <div class="charts">
            <ScrollList />
          </div>
          <div class="panel-foot"></div>
        </div>
        <div class="panel" :class="fullstatus.right3 ? 'fullstyle' : ''">
          <h2>图表</h2>
          <div class="icon">
            <el-icon :size="25" color="#02a6b5"
              ><full-screen
                v-if="!fullstatus.right3"
                @click="changeSize('right3', '/pie')" />
              <close-bold v-else @click="changeSize('right3')"
            /></el-icon>
          </div>
          <div class="charts">
            <Pie />
          </div>
          <div class="panel-foot"></div>
        </div>
      </div>
    </section>
    <!-- Dialog -->
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { reactive, ref } from "@vue/reactivity";
import Header from "../components/head.vue";
import Table from "../components/charts/Table.vue";
import Word from "../components/charts/Word.vue";
import Scroll from "../components/charts/Scroll.vue";
import WorldMap from "../components/charts/WorldMap.vue";
import ScrollList from "../components/charts/ScrollList.vue";
import WordAnt from "../components/charts/WordAnt.vue";
import Pie from "../components/charts/pie.vue";
import { FullScreen, CloseBold } from "@element-plus/icons-vue";
import router from "../router";
import { onMounted } from "vue";
import axios from "axios";
// import {getTable} from '../api/charts'
// 时间显示
let now = ref(dayjs().format("YYYY-MM-DD hh:mm:ss"));
let timer = ref(null);
timer = setInterval(() => {
  now.value = dayjs().format("YYYY年MM月DD日 HH:mm:ss");
}, 1000);
// 定义组件实例
const table = ref();
// 全屏状态
let change = ref("1");
let fullstatus = ref({
  left1: false,
  left2: false,
  left3: false,
  right1: false,
  right2: false,
  right3: false,
});
const tableH = ref(null);
// 全屏点击事件
function changeSize(chartName, page) {
  fullstatus.value[chartName] = !fullstatus.value[chartName];
  router.push(page);
}
// let api = "charts/table";
// axios.get(api).then((res) => {
//   console.log(res.data);
// });

// 搜索联想
//#1f317d
</script>

<style scoped>
@font-face {
  font-family: electronicFont;
  src: url(../assets/font/DS-DIGIT.TTF);
}

.container {
  background-color: #1a1835;

  background-size: 100% 100%;
  line-height: 1.15;
}

header h1 {
  position: relative;
  font-size: 2rem;
  color: #3f96a5;
  text-align: center;
  line-height: 4rem;
}
.my-ipt {
  position: absolute;
  top: 14px;
  left: 10px;
  z-index: 23;
}
.dv-dec-h1 {
  position: absolute;
  left: 50%;
  top: 55px;
  transform: translate(-50%, -50%);
}
.show-time {
  position: absolute;
  right: 20px;
  line-height: 75px;
  color: rgba(225, 225, 225, 0.7);
  font-size: 17px;
  top: 0;
  font-family: electronicFont;
}
.main-box {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 10px 10px 0 10px;
}
.col {
  flex: 3;
}
.col:nth-child(2) {
  flex: 5;
  overflow: hidden;
}
.panel h2 {
  position: relative;
}
.icon {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  cursor: pointer;
}
/* 中间 */
.mid-col {
  margin: 0 10px 15px 10px;
}
.mid-top {
  background-color: rgba(101, 132, 226, 0.1);
  padding: 15px;
}
.mid-top ul {
  display: flex;
}
.mid-top ul li {
  flex: 1;
  position: relative;
  height: 80px;
  line-height: 100px;
  text-align: center;
  font-size: 70px;

  font-family: electronicFont;

  color: #ffeb7b;

  padding: 20px 0 0;
}

.mid-top ul li:first-child::after {
  content: "";
  position: absolute;
  width: 1px;
  background-color: rgba(225, 225, 225, 0.2);
  height: 50%;
  right: 0;
  top: 40%;
}
.map {
  margin-top: 5px;
  padding: 10px;
}
</style>
