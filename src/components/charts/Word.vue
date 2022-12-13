<template>
  <div id="word"></div>
</template>

<script setup>
import * as echarts from "echarts";
import "echarts-wordcloud";
import { nextTick, onMounted, onUnmounted, reactive, ref } from "vue";
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
// let data = reactive(null);
// const getPaperList = () => {
//   GetPaperList().then((res) => {
//     // console.log(res);
//     data = res.data;
//     console.log(data);
//     initChart();
//   });
// };
// getPaperList();
let mydata =ref(null)
function initChart() {
  var chart = echarts.init(document.getElementById("word"));
  chart.setOption({
    series: [
      {
        type: "wordCloud",
        shape: "triangle ", //circle cardioid diamond triangle-forward triangle
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        height: "100%",
        gridSize: 0, //值越大，word间的距离越大，单位像素
        sizeRange: [35, 60], //word的字体大小区间，单位像素
        rotationRange: [-90, 90], //word的可旋转角度区间
        textStyle: {
          color: function () {
            return (
              "rgb(" +
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
              ].join(",") +
              ")"
            );
          },
          emphasis: {
            shadowBlur: 2,
            shadowColor: "#000",
          },
        },
        data: mydata,
      },
    ],
  });
  // [
  //         {
  //           name: "数据可视化",
  //           value: 3000,
  //           // textStyle: {
  //           // 	normal: {color: '#f52f55'},
  //           // 	emphasis: {}
  //           // }
  //         },
  //         {
  //           name: "大数据",
  //           value: 2181,
  //         },
  //         {
  //           name: "云计算",
  //           value: 1386,
  //         },
  //         {
  //           name: "物联网",
  //           value: 2055,
  //         },
  //         {
  //           name: "移动互联网",
  //           value: 2467,
  //         },
  //         {
  //           name: "人工智能",
  //           value: 2244,
  //         },
  //         {
  //           name: "深度学习",
  //           value: 1898,
  //         },
  //         {
  //           name: "机器学习",
  //           value: 1484,
  //         },
  //         {
  //           name: "区块链",
  //           value: 3865,
  //         },
  //         {
  //           name: "互联网+",
  //           value: 2222,
  //         },
  //         {
  //           name: "智能合约",
  //           value: 366,
  //         },
  //         {
  //           name: "比特币",
  //           value: 360,
  //         },
  //         {
  //           name: "数据挖掘",
  //           value: 273,
  //         },

  //         {
  //           name: "汽车",
  //           value: 928,
  //         },
  //         {
  //           name: "视频",
  //           value: 906,
  //         },
  //         {
  //           name: "电视",
  //           value: 825,
  //         },
  //         {
  //           name: "Lover Boy 88",
  //           value: 514,
  //         },
  //         {
  //           name: "动漫",
  //           value: 486,
  //         },
  //         {
  //           name: "音乐",
  //           value: 53,
  //         },
  //         {
  //           name: "直播",
  //           value: 163,
  //         },
  //         {
  //           name: "广播电台",
  //           value: 86,
  //         },
  //         {
  //           name: "戏曲曲艺",
  //           value: 17,
  //         },
  //         {
  //           name: "演出票务",
  //           value: 6,
  //         },
  //         {
  //           name: "给陌生的你听",
  //           value: 1,
  //         },
  //         {
  //           name: "资讯",
  //           value: 1437,
  //         },
  //         {
  //           name: "数据可视化",
  //           value: 3000,
  //           // textStyle: {
  //           // 	normal: {color: '#f52f55'},
  //           // 	emphasis: {}
  //           // }
  //         },
  //         {
  //           name: "大数据",
  //           value: 2181,
  //         },
  //         {
  //           name: "云计算",
  //           value: 1386,
  //         },
  //         {
  //           name: "物联网",
  //           value: 2055,
  //         },
  //         {
  //           name: "移动互联网",
  //           value: 2467,
  //         },
  //         {
  //           name: "人工智能",
  //           value: 2244,
  //         },
  //         {
  //           name: "深度学习",
  //           value: 1898,
  //         },
  //         {
  //           name: "机器学习",
  //           value: 1484,
  //         },
  //         {
  //           name: "区块链",
  //           value: 3865,
  //         },
  //         {
  //           name: "互联网+",
  //           value: 2222,
  //         },
  //         {
  //           name: "智能合约",
  //           value: 366,
  //         },
  //         {
  //           name: "比特币",
  //           value: 360,
  //         },
  //         {
  //           name: "数据挖掘",
  //           value: 273,
  //         },

  //         {
  //           name: "汽车",
  //           value: 928,
  //         },
  //         {
  //           name: "视频",
  //           value: 906,
  //         },
  //         {
  //           name: "电视",
  //           value: 825,
  //         },
  //         {
  //           name: "Lover Boy 88",
  //           value: 514,
  //         },
  //         {
  //           name: "动漫",
  //           value: 486,
  //         },
  //         {
  //           name: "音乐",
  //           value: 53,
  //         },
  //         {
  //           name: "直播",
  //           value: 163,
  //         },
  //         {
  //           name: "广播电台",
  //           value: 86,
  //         },
  //         {
  //           name: "戏曲曲艺",
  //           value: 17,
  //         },
  //         {
  //           name: "演出票务",
  //           value: 6,
  //         },
  //         {
  //           name: "给陌生的你听",
  //           value: 1,
  //         },
  //         {
  //           name: "资讯",
  //           value: 1437,
  //         },
  //         {
  //           name: "数据可视化",
  //           value: 3000,
  //           // textStyle: {
  //           // 	normal: {color: '#f52f55'},
  //           // 	emphasis: {}
  //           // }
  //         },
  //         {
  //           name: "大数据",
  //           value: 2181,
  //         },
  //         {
  //           name: "云计算",
  //           value: 1386,
  //         },
  //         {
  //           name: "物联网",
  //           value: 2055,
  //         },
  //         {
  //           name: "移动互联网",
  //           value: 2467,
  //         },
  //         {
  //           name: "人工智能",
  //           value: 2244,
  //         },
  //         {
  //           name: "深度学习",
  //           value: 1898,
  //         },
  //         {
  //           name: "机器学习",
  //           value: 1484,
  //         },
  //         {
  //           name: "区块链",
  //           value: 3865,
  //         },
  //         {
  //           name: "互联网+",
  //           value: 2222,
  //         },
  //         {
  //           name: "智能合约",
  //           value: 366,
  //         },
  //         {
  //           name: "比特币",
  //           value: 360,
  //         },
  //         {
  //           name: "数据挖掘",
  //           value: 273,
  //         },

  //         {
  //           name: "汽车",
  //           value: 928,
  //         },
  //         {
  //           name: "视频",
  //           value: 906,
  //         },
  //         {
  //           name: "电视",
  //           value: 825,
  //         },
  //         {
  //           name: "Lover Boy 88",
  //           value: 514,
  //         },
  //         {
  //           name: "动漫",
  //           value: 486,
  //         },
  //         {
  //           name: "音乐",
  //           value: 53,
  //         },
  //         {
  //           name: "直播",
  //           value: 163,
  //         },
  //         {
  //           name: "广播电台",
  //           value: 86,
  //         },
  //         {
  //           name: "戏曲曲艺",
  //           value: 17,
  //         },
  //         {
  //           name: "演出票务",
  //           value: 6,
  //         },
  //         {
  //           name: "给陌生的你听",
  //           value: 1,
  //         },
  //         {
  //           name: "资讯",
  //           value: 1437,
  //         },
  //         {
  //           name: "数据可视化",
  //           value: 3000,
  //           // textStyle: {
  //           // 	normal: {color: '#f52f55'},
  //           // 	emphasis: {}
  //           // }
  //         },
  //         {
  //           name: "大数据",
  //           value: 2181,
  //         },
  //         {
  //           name: "云计算",
  //           value: 1386,
  //         },
  //         {
  //           name: "物联网",
  //           value: 2055,
  //         },
  //         {
  //           name: "移动互联网",
  //           value: 2467,
  //         },
  //         {
  //           name: "人工智能",
  //           value: 2244,
  //         },
  //         {
  //           name: "深度学习",
  //           value: 1898,
  //         },
  //         {
  //           name: "机器学习",
  //           value: 1484,
  //         },
  //         {
  //           name: "区块链",
  //           value: 3865,
  //         },
  //         {
  //           name: "互联网+",
  //           value: 2222,
  //         },
  //         {
  //           name: "智能合约",
  //           value: 366,
  //         },
  //         {
  //           name: "比特币",
  //           value: 360,
  //         },
  //         {
  //           name: "数据挖掘",
  //           value: 273,
  //         },

  //         {
  //           name: "汽车",
  //           value: 928,
  //         },
  //         {
  //           name: "视频",
  //           value: 906,
  //         },
  //         {
  //           name: "电视",
  //           value: 825,
  //         },
  //         {
  //           name: "Lover Boy 88",
  //           value: 514,
  //         },
  //         {
  //           name: "动漫",
  //           value: 486,
  //         },
  //         {
  //           name: "音乐",
  //           value: 53,
  //         },
  //         {
  //           name: "直播",
  //           value: 163,
  //         },
  //         {
  //           name: "广播电台",
  //           value: 86,
  //         },
  //         {
  //           name: "戏曲曲艺",
  //           value: 17,
  //         },
  //         {
  //           name: "演出票务",
  //           value: 6,
  //         },
  //         {
  //           name: "给陌生的你听",
  //           value: 1,
  //         },
  //         {
  //           name: "资讯",
  //           value: 1437,
  //         },
  //       ]
  window.addEventListener("resize", function () {
    setTimeout(() => {
      chart.resize();
    }, 50);
  });
}
</script>

<style scoped>
#word {
  width: 100%;
  height: 100%;
}
</style>
