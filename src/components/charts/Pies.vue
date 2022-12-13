<template>
  <div id="pies"></div>
</template>
<!-- 图表组件实例页面 -->
<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted } from "@vue/runtime-core";
onMounted(() => {
  initChart();
});
onUnmounted(() => {
  echarts.dispose;
});

function initChart() {
  let myChart = echarts.init(document.getElementById("pies"));
  let pieData = [
    {
      name: "总数量",
      value: 100,
    },
    {
      name: "在线数量",
      value: 60,
    },
    {
      name: "在线率",
      value: 40,
    },
  ];

  var titleArr = [],
    seriesArr = [];

  pieData.forEach(function (item, index) {
    titleArr.push({
      text: item.name,
      left: index * 35 + 15.5 + "%",
      top: "70%",
      textAlign: "center",
      textStyle: {
        fontWeight: "normal",
        fontSize: "20",
        color: "white",
        textAlign: "center",
      },
    });
    seriesArr.push(
      {
        type: "pie",
        name: "外层细圆环",
        radius: ["36%", "37%"],
        center: [index * 34 + 15.5 + "%", "45%"],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
          normal: {
            color: "#6e7175",
          },
        },
        label: {
          show: false,
        },
        data: [100],
      },
      {
        type: "pie",
        name: "内层层细圆环",
        radius: ["24%", "25%"],
        center: [index * 34 + 15.5 + "%", "45%"],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
          normal: {
            color: "#6e7175",
          },
        },
        label: {
          show: false,
        },
        data: [100],
      },
      {
        type: "pie",
        zlevel: 3,
        silent: true,
        radius: ["20%", "21%"],
        center: [index * 34 + 15.5 + "%", "45%"],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: dotArr(),
      }
    );
  });

  seriesArr.push(
    {
      name: pieData[0].name,
      type: "pie",
      clockWise: false,
      radius: ["28%", "33%"],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0ff",
            },
            {
              offset: 1,
              color: "#5467df",
            },
          ]),
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
      },
      hoverAnimation: false,
      center: [0 * 34 + 15.5 + "%", "45%"],
      data: [
        {
          value: pieData[0].value,
          label: {
            normal: {
              formatter: function (params) {
                return params.value;
              },
              position: "center",
              show: true,
              textStyle: {
                fontSize: "25",
                // fontWeight: 'bold',
                color: "#1cc7ff",
              },
            },
          },
        },
      ],
    },
    {
      name: pieData[1].name,
      type: "pie",
      clockWise: false,
      radius: ["28%", "33%"],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0ff",
            },
            {
              offset: 1,
              color: "#5467df",
            },
          ]),
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
      },
      hoverAnimation: false,
      center: [1 * 34 + 15.5 + "%", "45%"],
      data: [
        {
          value: pieData[1].value,
          label: {
            normal: {
              formatter: function (params) {
                return params.value;
              },
              position: "center",
              show: true,
              textStyle: {
                fontSize: "25",
                // fontWeight: 'bold',
                color: "#1cc7ff",
              },
            },
          },
        },
        {
          value: pieData[0].value - pieData[1].value,
          name: "invisible",
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              color: "rgba(0,0,0,0)",
            },
          },
        },
      ],
    },
    {
      name: pieData[2].name,
      type: "pie",
      clockWise: false,
      radius: ["28%", "33%"],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0ff",
            },
            {
              offset: 1,
              color: "#5467df",
            },
          ]),
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
      },
      hoverAnimation: false,
      center: [2 * 34 + 15.5 + "%", "45%"],
      data: [
        {
          value: pieData[2].value,
          label: {
            normal: {
              formatter: function (params) {
                return params.value + "%";
              },
              position: "center",
              show: true,
              textStyle: {
                fontSize: "25",
                // fontWeight: 'bold',
                color: "#1cc7ff",
              },
            },
          },
        },
        {
          value: 100 - pieData[2].value,
          name: "invisible",
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              color: "rgba(0,0,0,0)",
            },
          },
        },
      ],
    }
  );

  let options = {
    grid: {
      left: "5%",
      right: "2%",
      bottom: "0%",
      top: "0%",
      containLabel: true,
    },
    backgroundColor: "#1a1939",
    title: titleArr,
    series: seriesArr,
  };

  function dotArr() {
    let dataArr = [];
    for (var i = 0; i < 80; i++) {
      if (i % 2 === 0) {
        dataArr.push({
          name: (i + 1).toString(),
          value: 1,
          itemStyle: {
            normal: {
              color: "#676a6c",
              borderWidth: 1,
              borderColor: "#676a6c",
            },
          },
        });
      } else {
        dataArr.push({
          name: (i + 1).toString(),
          value: 2,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)",
            },
          },
        });
      }
    }
    return dataArr;
  }
  // 绘制图表
  
  myChart.setOption(options);
  window.addEventListener("resize", function () {
    setTimeout(() => {
      myChart.resize();
    }, 50);
  });
  window.onload = function () {
    myChart.resize();
  };
}
</script>

<style scoped>
#pies {
  width: 100%;
  height: 100%;
  
}
</style>
