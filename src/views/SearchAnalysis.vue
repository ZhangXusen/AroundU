<template>
  <Head />
  <Search />
  <div class="container">
    <el-tabs class="demo-tabs" tabPosition="left" stretch="true">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span>趋势</span>
          </span>
        </template>
        <div class="chart">
          <LineAnt />
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span>关键词</span>
          </span>
        </template>
        <WordAnt />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span>作者</span>
          </span>
        </template>
        <div id="list"></div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span>分布</span>
          </span>
        </template>
        <WorldAnt style="height: 600px; width: 1080px" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import Head from "../components/search/SearchHead";
import Search from "../components/search/Logo";
import LineAnt from "../components/charts/LineAnt";
import WordAnt from "../components/charts/WordAnt";
import WorldAnt from "../components/charts/WorldMap";
// import { PivotSheet } from "@antv/s2";

// fetch(
//   "https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json"
// )
//   .then((res) => res.json())
//   .then((dataCfg) => {
//     const container = document.getElementById("list");

//     const s2Options = {
//       width: 400,
//       height: 480,
//       style: {
//         layoutWidthType: "compact",
//       },
//     };
//     const s2 = new PivotSheet(container, dataCfg, s2Options);

//     s2.render();
//   });
</script>
<style lang="scss">
$bgc: #f5f7f9;
$tit-size: 16px;
$bar-c: #e6e6e6;
$font-c: #047df6;
$hover-c: #409eff;
$border-r: 5px;
.container {
  max-width: 1200px;
  margin: 20px auto;
  .demo-tabs .custom-tabs-label span {
    font-size: 22px;
    vertical-align: middle;
    margin-left: 4px;
  }
  .chart {
    margin: 10px;
  }
}
</style>
