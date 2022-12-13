<template>
  <div id="pie"></div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, onUnmounted, created, onBeforeMount } from "vue";
export default {
  setup() {
    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echarts.dispose;
    });
    function initChart() {
      let myChart = echarts.init(document.getElementById("pie"));
      
      // 绘制图
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      });
      window.addEventListener("load", function () {
        setTimeout(() => {
          myChart.resize();
        }, 50);
      });
      window.onload = function () {
        myChart.resize();
      }
    }
    return { initChart };
  },
};
</script>

<style>
#pie {
  height: 100%;
  width: 100%;
}
</style>
