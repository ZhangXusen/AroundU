<template>
  <div class="word-container">
    <div id="word"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import "echarts-wordcloud";
import { nextTick, onMounted, onUnmounted } from "vue";

onMounted(() => {
  fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      mydata = data;
      initChart();
    });
});
onUnmounted(() => {
  echarts.dispose;
});
let mydata =ref(null)
function initChart() {
  var chart = echarts.init(document.getElementById("word"));
  //跳转代码
  chart.on("click", function (params) {
    console.log(params.name);
    window.open(data.link);
  });

  var colorList = [
    [
      "#ff7f50",
      "#87cefa",
      "#da70d6",
      "#32cd32",
      "#6495ed",
      "#ff69b4",
      "#ba55d3",
      "#cd5c5c",
      "#ffa500",
      "#40e0d0",
      "#1e90ff",
      "#ff6347",
      "#7b68ee",
      "#d0648a",
      "#ffd700",
      "#6b8e23",
      "#4ea397",
      "#3cb371",
      "#b8860b",
      "#7bd9a5",
    ],
    [
      "#ff7f50",
      "#87cefa",
      "#da70d6",
      "#32cd32",
      "#6495ed",
      "#ff69b4",
      "#ba55d3",
      "#cd5c5c",
      "#ffa500",
      "#40e0d0",
      "#1e90ff",
      "#ff6347",
      "#7b68ee",
      "#00fa9a",
      "#ffd700",
      "#6b8e23",
      "#ff00ff",
      "#3cb371",
      "#b8860b",
      "#30e0e0",
    ],
    [
      "#929fff",
      "#9de0ff",
      "#ffa897",
      "#af87fe",
      "#7dc3fe",
      "#bb60b2",
      "#433e7c",
      "#f47a75",
      "#009db2",
      "#024b51",
      "#0780cf",
      "#765005",
      "#e75840",
      "#26ccd8",
      "#3685fe",
      "#9977ef",
      "#f5616f",
      "#f7b13f",
      "#f9e264",
      "#50c48f",
    ],
  ][2];

  const option = {
    // 图表标题

    backgroundColor: "rgba(0,0,0,0)",
    tooltip: {},
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    animationEasingUpdate: "bounceIn",
    color: ["#fff", "#fff", "#fff"],
    series: [
      {
        type: "graph",
        layout: "force",
        force: {
          repulsion: 70,
          edgeLength: 50,
        },
        roam: false,
        label: {
          normal: {
            show: true,
          },
        },
        symbolSize: 60,

        data: data,
      },
    ],
  };

  chart.setOption(option);
  window.addEventListener("resize", function () {
    chart.resize();
  });
}
// [
//   {
//     name: "1",
//     value: 368912,
//     symbolSize: 60,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[3],
//         color: colorList[3],
//       },
//     },
//   },
//   {
//     name: "1111",
//     value: 368366,
//     symbolSize: 60,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[4],
//         color: colorList[4],
//       },
//     },
//   },
//   {
//     name: "11111",
//     value: 368296,
//     symbolSize: 60,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[5],
//         color: colorList[5],
//       },
//     },
//   },
//   {
//     name: "111111",
//     value: 359468,
//     symbolSize: 59,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[6],
//         color: colorList[6],
//       },
//     },
//   },
//   {
//     name: "222222",
//     value: 295436,
//     symbolSize: 54,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[7],
//         color: colorList[7],
//       },
//     },
//   },
//   {
//     name: "424",
//     value: 284210,
//     symbolSize: 53,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[8],
//         color: colorList[8],
//       },
//     },
//   },
//   {
//     name: "45423545",
//     value: 283813,
//     symbolSize: 53,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[9],
//         color: colorList[9],
//       },
//     },
//   },
//   {
//     name: "46236",
//     value: 283766,
//     symbolSize: 53,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[10],
//         color: colorList[10],
//       },
//     },
//   },
//   {
//     name: "41264646",
//     value: 256506,
//     symbolSize: 50,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[11],
//         color: colorList[11],
//       },
//     },
//   },
//   {
//     name: "2464161464",
//     value: 250184,
//     symbolSize: 50,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[12],
//         color: colorList[12],
//       },
//     },
//   },
//   {
//     name: "624146",
//     value: 247223,
//     symbolSize: 49,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[13],
//         color: colorList[13],
//       },
//     },
//   },
//   {
//     name: "46114641",
//     value: 237377,
//     symbolSize: 48,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[14],
//         color: colorList[14],
//       },
//     },
//   },
//   {
//     name: "46416",
//     value: 220219,
//     symbolSize: 46,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[15],
//         color: colorList[15],
//       },
//     },
//   },
//   {
//     name: "4512542",
//     value: 209512,
//     symbolSize: 45,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[16],
//         color: colorList[16],
//       },
//     },
//   },
//   {
//     name: "421411",
//     value: 192396,
//     symbolSize: 43,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[17],
//         color: colorList[17],
//       },
//     },
//   },
//   {
//     name: "吉245454市启",
//     value: 184315,
//     symbolSize: 42,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[18],
//         color: colorList[18],
//       },
//     },
//   },
//   {
//     name: "5214542",
//     value: 174247,
//     symbolSize: 41,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[19],
//         color: colorList[19],
//       },
//     },
//   },
//   {
//     name: "5245214",
//     value: 171994,
//     symbolSize: 41,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[0],
//         color: colorList[0],
//       },
//     },
//   },
//   {
//     name: "5252415",
//     value: 164751,
//     symbolSize: 40,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[1],
//         color: colorList[1],
//       },
//     },
//   },
//   {
//     name: "25542",
//     value: 155213,
//     symbolSize: 39,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[2],
//         color: colorList[2],
//       },
//     },
//   },
//   {
//     name: "2512415",
//     value: 153323,
//     symbolSize: 39,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[3],
//         color: colorList[3],
//       },
//     },
//   },
//   {
//     name: "322",
//     value: 152564,
//     symbolSize: 39,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[4],
//         color: colorList[4],
//       },
//     },
//   },
//   {
//     name: "张",
//     value: 147858,
//     symbolSize: 38,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[5],
//         color: colorList[5],
//       },
//     },
//   },
//   {
//     name: "25251",
//     value: 138773,
//     symbolSize: 37,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[6],
//         color: colorList[6],
//       },
//     },
//   },
//   {
//     name: "252",
//     value: 134038,
//     symbolSize: 36,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[7],
//         color: colorList[7],
//       },
//     },
//   },
//   {
//     name: "13412",
//     value: 131590,
//     symbolSize: 36,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[8],
//         color: colorList[8],
//       },
//     },
//   },
//   {
//     name: "2542",
//     value: 115787,
//     symbolSize: 34,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[9],
//         color: colorList[9],
//       },
//     },
//   },
//   {
//     name: "233",
//     value: 100309,
//     symbolSize: 31,
//     draggable: true,
//     itemStyle: {
//       normal: {
//         shadowBlur: 10,
//         shadowColor: colorList[10],
//         color: colorList[10],
//       },
//     },
//   },
// ]
</script>

<style scoped>
.word-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#word {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 3px;
}
</style>
