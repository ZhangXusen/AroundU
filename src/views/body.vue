<template>
  <!-- <el-row :gutter="24">
    <el-col :span="7" class="my-col">
      <div class="my-row">
        <dv-border-box-9>
          <div class="title">
            <span> icon </span>
            <span>图表1</span>
            <dv-decoration-3
              style="width: 80px; float: right; margin-right: 37px"
            />
          </div>
          <div class="body"><Table /></div>
        </dv-border-box-9>
      </div>
      <div class="my-row" style="height: 400px">
        <dv-border-box-8
          ><div class="title">
            <span> icon </span>
            <span>图表1</span>
            <dv-decoration-3
              style="width: 80px; float: right; margin-right: 7px"
            />
          </div>
          <div class="body"><Word /></div>
        </dv-border-box-8>
      </div>
    </el-col>
    <el-col class="mid" :span="10" style="">
      <div class="mid-top">
       
      </div>
      <div class="my-row mid-bottom">
       
      </div>
    </el-col>
    <el-col :span="7" class="my-col">
      <div class="my-row">
        
      </div>
      <div class="my-row" style="height: 400px">
        
      </div>
    </el-col>
  </el-row> -->
  <div class="container">
    <div class="row1">
      <div class="col">
        <dv-border-box-9>
          <div class="title">
            <div class="icon"
              ><el-icon :size="22"><WindPower/></el-icon
            ></div>
            <div>短期预测</div>
            <dv-decoration-3
              style="width: 80px; float: right; margin-right: 37px"
            />
          </div>
          <div class="body"><Table /></div>
        </dv-border-box-9>
      </div>
      <div class="col">
        <dv-border-box-8
          ><div class="title">
            <div><el-icon :size="30"><mostly-cloudy /></el-icon></div>
            <div>热点追踪</div>
            <dv-decoration-3
              style="width: 80px; float: right; margin-right: 7px"
            />
          </div>
          <div class="body"><Word /></div>
        </dv-border-box-8>
      </div>
    </div>
    <div class="row2">
      <div class="col">
        <dv-border-box-1
          ><div class="title">
            <span></span>
          </div>
          <div class="body"><Relation /></div
        ></dv-border-box-1>
      </div>
      <div class="col">
        <dv-border-box-10
          ><div class="title">
            <div class="icon"
              ><el-icon :size="30"><stopwatch /></el-icon
            ></div>
            <div>在线统计</div>
          </div>
          <div class="body" style="padding-bottom: 10px"><Pies /></div
        ></dv-border-box-10>
      </div>
    </div>
    <div class="row3">
      <div class="col">
        <dv-border-box-9
          ><div class="title">
            <span>图表1</span>
          </div>
          <div class="body"></div
        ></dv-border-box-9>
      </div>
      <div class="col">
        <dv-border-box-8
          ><div class="title">
            <div><el-icon :size="25"><Flag/></el-icon></div>
            <div>时间线</div>
          </div>
          <div class="body"><Time /></div
        ></dv-border-box-8>
      </div>
    </div>
  </div>
</template>

<script setup>
import Time from "../components/charts/time.vue";
import Table from "../components/charts/table1.vue";
import Word from "../components/charts/word1.vue";
import Relation from "../components/charts/Relation.vue";
import Pies from "../components/charts/Pies";
import { Stopwatch,WindPower,MostlyCloudy,Flag } from "@element-plus/icons-vue";
</script>

<style scoped>
.container {
  width: 100vw;
  height: 860px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}
.container .row1 {
  flex: 7;
}
.container .row2 {
  flex: 10;
  min-width: 400px;
}
.container .row3 {
  flex: 7;
}
.row1,
.row2,
.row3 {
  display: flex;
  flex-direction: column;
}
.row1 .col:nth-child(1) {
  flex: 4;
  margin-bottom: 10px;
}
.row1 .col:nth-child(2) {
  flex: 6;
  margin-bottom: 10px;
}
.row2 .col:nth-child(1) {
  flex: 8;
  margin-bottom: 10px;
}
.row2 .col:nth-child(2) {
  flex: 4;
  margin-bottom: 10px;
}
.row3 .col:nth-child(1) {
  flex: 4;
  margin-bottom: 10px;
}
.row3 .col:nth-child(2) {
  flex: 6;
  margin-bottom: 10px;
}
.title {
  color: #fff;
  font-weight: 1000;
  font-family: Sans-serif;
  padding-left: 50px;
  text-align: left;
  line-height: 30px;
  height: 32px;
}
.title div{
  display: inline-block;
  text-align: center;
  vertical-align: text-top;
  margin-left: 3px;
}
.body {
  height: 90%;
  padding-left: 15px;
  padding-right: 10px;
  overflow: hidden;
}
</style>
