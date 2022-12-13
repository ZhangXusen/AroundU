<template>
  <div id="table"></div>
</template>
<!-- 图表组件实例页面 -->
<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted, reactive, ref } from "@vue/runtime-core";
import { getChartsData } from "../../api/charts";
import axios from "axios";
onMounted(() => {
  GetChartData();
});
onUnmounted(() => {
  echarts.dispose;
});
let data = reactive(null);
function initChart() {
  let myChart = echarts.init(document.getElementById("table"));

  // 绘制图表
  var options = {
    title: {
      text: "",
    },
    // backgroundColor:'#96e6ff',
    tooltip: {
      trigger: "axis",
    },
    toolbox: {
      show: true,
      feature: {
        magicType: {
          type: ["line", "bar"],
        },
      },
      top: 10,
    },
    legend: {
      data: ["Email", "Direct"],
      textStyle: {
        color: "#96e6ff",
      },
    },
    grid: {
      left: "1%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      axisLine: {
        lineStyle: {
          color: "#96e6ff",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#96e6ff",
        },
      },
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: data.table1,
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: data.table2,
      },
    ],
  };
  window.addEventListener("resize", function () {
    setTimeout(() => {
      myChart.resize();
    }, 50);
  });
  myChart.setOption(options);
}
const GetChartData = () => {
  getChartsData().then((res) => {
    console.log("table响应");
    data = res;

    initChart();
  });
};
</script>

<style scoped>
#table {
  width: 100%;
  height: inherit;
}
</style>
