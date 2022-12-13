<template>
  <div id="relation"></div>
</template>

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
  let myChart = echarts.init(document.getElementById("relation"));
  var options = {
    // backgroundColor: "#1A1835",
    title: {
      textStyle: {
        color: "#fff",
      },
      text: "数据分析",
      subtext: "各学院专业关系",
      top: "top",
      left: "left",
    },
    tooltip: {},
    legend: [
      {
        textStyle: {
          color: "#fff",
        },
        tooltip: {
          show: true,
        },
        selectedMode: "false",
        bottom: 2,
        data: [
          ,
          "物理与电子工程学院",
          "建筑与城市规划学院",
          "美术与设计学院",
          "生命科学学院",
          "体育学院",
        ], //'计算机科学与教育软件学院', '地理科学学院', '机械与电气工程学院', '经济与统计学院', '土木工程学院', '新闻与传播学院', '外国语学院', '人文学院', '数学与信息科学学院', '工商管理学院', '法学院', '公共管理学院', '卫斯理安学院', '政治与公民教育学院', '旅游学院', '教育学院', '环境科学与工程学院', '化学化工学院','音乐舞蹈学院'
      },
    ],
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: true },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    animationDuration: 3000,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        name: "广州大学",
        type: "graph",
        layout: "force",

        force: {
          repulsion: 50,
        },
        data: [
          {
            name: "广州大学",
            // "x": 0,
            // y: 0,
            symbolSize: 20,
            draggable: "true",
            value: 27,
          },
          {
            name: "计算机科学与教育软件学院",
            value: 3,
            symbolSize: 9,
            category: "计算机科学与教育软件学院",
            draggable: "true",
          },
          {
            name: "计算机科学与技术",
            symbolSize: 3,
            category: "计算机科学与教育软件学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "软件工程",
            symbolSize: 3,
            category: "计算机科学与教育软件学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "网络工程",
            symbolSize: 3,
            category: "计算机科学与教育软件学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "地理科学学院",
            value: 6,
            symbolSize: 18,
            category: "地理科学学院",
            draggable: "true",
          },
          {
            name: "地理科学",
            symbolSize: 3,
            category: "地理科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "地理信息科学",
            symbolSize: 3,
            category: "地理科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "人文地理与城乡规划",
            symbolSize: 3,
            category: "地理科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "人文地理与城乡规划(区域物流)",
            symbolSize: 3,
            category: "地理科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "人文地理与城乡规划(不动产)",
            symbolSize: 3,
            category: "地理科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "自然地理与资源环境",
            symbolSize: 3,
            category: "地理科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "机械与电气工程学院",
            value: 5,
            symbolSize: 15,
            category: "机械与电气工程学院",
            draggable: "true",
          },
          {
            name: "电气工程及其自动化",
            symbolSize: 3,
            category: "机械与电气工程学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "机械设计制造及其自动化",
            symbolSize: 3,
            category: "机械与电气工程学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "电子信息工程",
            symbolSize: 3,
            category: "机械与电气工程学院",
            draggable: "true",
            value: 1,
          },
          
          {
            name: "汉语国际教育",
            symbolSize: 3,
            category: "人文学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "汉语言文学(教师教育)",
            symbolSize: 3,
            category: "人文学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "历史学(教师教育)",
            symbolSize: 3,
            category: "人文学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "历史学(文化资源开发与利用)",
            symbolSize: 3,
            category: "人文学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "动画(游戏动画)",
            symbolSize: 3,
            category: "美术与设计学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "绘画",
            symbolSize: 3,
            category: "美术与设计学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "动画(动画音乐与合成)",
            symbolSize: 3,
            category: "美术与设计学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "产品设计",
            symbolSize: 3,
            category: "美术与设计学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "服装与服饰设计(服装设计)",
            symbolSize: 3,
            category: "美术与设计学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "视觉传达设计",
            symbolSize: 3,
            category: "美术与设计学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "生命科学学院",
            value: 3,
            symbolSize: 9,
            category: "生命科学学院",
            draggable: "true",
          },
          {
            name: "生物科学",
            symbolSize: 3,
            category: "生命科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "生物工程",
            symbolSize: 3,
            category: "生命科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "生物技术",
            symbolSize: 3,
            category: "生命科学学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "体育学院",
            value: 2,
            symbolSize: 6,
            category: "体育学院",
            draggable: "true",
          },
          {
            name: "体育教育",
            symbolSize: 3,
            category: "体育学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "社会体育指导与管理",
            symbolSize: 3,
            category: "体育学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "音乐舞蹈学院",
            value: 3,
            symbolSize: 9,
            category: "音乐舞蹈学院",
            draggable: "true",
          },
          {
            name: "音乐学",
            symbolSize: 3,
            category: "音乐舞蹈学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "舞蹈编导(编导)",
            symbolSize: 3,
            category: "音乐舞蹈学院",
            draggable: "true",
            value: 1,
          },
          {
            name: "舞蹈编导(教师教育)",
            symbolSize: 3,
            category: "音乐舞蹈学院",
            draggable: "true",
            value: 1,
          },
        ],
        links: [
          {
            source: "广州大学",
            target: "计算机科学与教育软件学院",
          },
          {
            source: "计算机科学与教育软件学院",
            target: "计算机科学与技术",
          },
          {
            source: "计算机科学与教育软件学院",
            target: "软件工程",
          },
          {
            source: "计算机科学与教育软件学院",
            target: "网络工程",
          },
          {
            source: "广州大学",
            target: "地理科学学院",
          },
          {
            source: "地理科学学院",
            target: "地理科学",
          },
          {
            source: "地理科学学院",
            target: "地理信息科学",
          },
          {
            source: "地理科学学院",
            target: "人文地理与城乡规划",
          },
          {
            source: "地理科学学院",
            target: "人文地理与城乡规划(区域物流)",
          },
          {
            source: "地理科学学院",
            target: "人文地理与城乡规划(不动产)",
          },
          {
            source: "地理科学学院",
            target: "自然地理与资源环境",
          },
          {
            source: "广州大学",
            target: "机械与电气工程学院",
          },
          {
            source: "机械与电气工程学院",
            target: "电气工程及其自动化",
          },
          {
            source: "机械与电气工程学院",
            target: "机械设计制造及其自动化",
          },
          {
            source: "机械与电气工程学院",
            target: "电子信息工程",
          },
          {
            source: "机械与电气工程学院",
            target: "工业设计",
          },
          {
            source: "机械与电气工程学院",
            target: "通信工程",
          },
          {
            source: "广州大学",
            target: "经济与统计学院",
          },
          {
            source: "经济与统计学院",
            target: "统计学",
          },
          {
            source: "经济与统计学院",
            target: "金融工程",
          },
          {
            source: "经济与统计学院",
            target: "经济学",
          },
          {
            source: "经济与统计学院",
            target: "国际经济与贸易",
          },
          {
            source: "经济与统计学院",
            target: "金融学",
          },
          {
            source: "经济与统计学院",
            target: "会计学",
          },
          {
            source: "广州大学",
            target: "土木工程学院",
          },
          {
            source: "土木工程学院",
            target: "给排水科学与工程",
          },
          {
            source: "土木工程学院",
            target: "土木工程(道路与桥梁工程)",
          },
          {
            source: "土木工程学院",
            target: "土木工程(建筑工程)",
          },
          {
            source: "土木工程学院",
            target: "土木工程(综合试点)",
          },
          {
            source: "土木工程学院",
            target: "土木工程(结构分析)",
          },
          {
            source: "土木工程学院",
            target: "土木工程(地下建筑工程)",
          },
          {
            source: "土木工程学院",
            target: "交通工程",
          },
          {
            source: "土木工程学院",
            target: "建筑环境与能源应用工程",
          },
          {
            source: "广州大学",
            target: "新闻与传播学院",
          },
          {
            source: "新闻与传播学院",
            target: "广告学",
          },
          {
            source: "新闻与传播学院",
            target: "广播电视学",
          },
          {
            source: "新闻与传播学院",
            target: "网络与新媒体",
          },
          {
            source: "新闻与传播学院",
            target: "播音与主持艺术",
          },
          {
            source: "新闻与传播学院",
            target: "广播电视编导",
          },
          {
            source: "广州大学",
            target: "外国语学院",
          },
          {
            source: "外国语学院",
            target: "英语(翻译)",
          },
          {
            source: "外国语学院",
            target: "英语(教师教育)",
          },
          {
            source: "外国语学院",
            target: "英语(国际商务)",
          },
          {
            source: "外国语学院",
            target: "日语",
          },
          {
            source: "外国语学院",
            target: "英语",
          },
          {
            source: "外国语学院",
            target: "法语",
          },
          {
            source: "广州大学",
            target: "人文学院",
          },
          {
            source: "人文学院",
            target: "汉语言文学",
          },
          {
            source: "人文学院",
            target: "历史学",
          },
          {
            source: "人文学院",
            target: "汉语国际教育",
          },
          {
            source: "人文学院",
            target: "汉语言文学(戏剧与影视学)",
          },
          {
            source: "人文学院",
            target: "汉语言文学(文学)",
          },
          {
            source: "人文学院",
            target: "汉语言文学(秘书学)",
          },
          {
            source: "人文学院",
            target: "汉语言文学(应用语言学)",
          },
          {
            source: "人文学院",
            target: "汉语言文学(教师教育)",
          },
          {
            source: "人文学院",
            target: "历史学(教师教育)",
          },
          {
            source: "人文学院",
            target: "历史学(文化资源开发与利用)",
          },
          {
            source: "广州大学",
            target: "数学与信息科学学院",
          },
          {
            source: "数学与信息科学学院",
            target: "信息安全",
          },
          {
            source: "数学与信息科学学院",
            target: "数学与应用数学(金融数学)",
          },
          {
            source: "数学与信息科学学院",
            target: "信息与计算科学",
          },
          {
            source: "数学与信息科学学院",
            target: "数学与应用数学(教师教育)",
          },
          {
            source: "数学与信息科学学院",
            target: "数学与应用数学(精算学)",
          },
          {
            source: "数学与信息科学学院",
            target: "数学与应用数学(基础数学)",
          },
          {
            source: "广州大学",
            target: "工商管理学院",
          },
          {
            source: "工商管理学院",
            target: "工程管理",
          },
          {
            source: "工商管理学院",
            target: "物流管理",
          },
          {
            source: "工商管理学院",
            target: "工商管理",
          },
          {
            source: "工商管理学院",
            target: "电子商务",
          },
          {
            source: "工商管理学院",
            target: "市场营销",
          },
          {
            source: "工商管理学院",
            target: "人力资源管理",
          },
          {
            source: "广州大学",
            target: "法学院",
          },
          {
            source: "法学院",
            target: "法学",
          },
          {
            source: "法学院",
            target: "法学（律师）",
          },
          {
            source: "广州大学",
            target: "公共管理学院",
          },
          {
            source: "公共管理学院",
            target: "社会工作",
          },
          {
            source: "公共管理学院",
            target: "行政管理",
          },
          {
            source: "公共管理学院",
            target: "公共事业管理",
          },
          {
            source: "广州大学",
            target: "卫斯理安学院",
          },
          {
            source: "卫斯理安学院",
            target: "经济学(卫斯理安)",
          },
          {
            source: "卫斯理安学院",
            target: "工商管理(卫斯理安)",
          },
          {
            source: "广州大学",
            target: "政治与公民教育学院",
          },
          {
            source: "政治与公民教育学院",
            target: "思想政治教育",
          },
          {
            source: "广州大学",
            target: "旅游学院",
          },
          {
            source: "旅游学院",
            target: "会展经济与管理",
          },
          {
            source: "旅游学院",
            target: "旅游管理(旅游企业管理)",
          },
          {
            source: "旅游学院",
            target: "旅游管理(酒店管理)",
          },
          {
            source: "旅游学院",
            target: "旅游管理[中法]",
          },
          {
            source: "广州大学",
            target: "教育学院",
          },
          {
            source: "教育学院",
            target: "心理学",
          },
          {
            source: "教育学院",
            target: "心理学（特殊儿童心理发展与教育）",
          },
          {
            source: "教育学院",
            target: "应用心理学",
          },
          {
            source: "教育学院",
            target: "教育技术学",
          },
          {
            source: "教育学院",
            target: "学前教育",
          },
          {
            source: "教育学院",
            target: "小学教育",
          },
          {
            source: "广州大学",
            target: "环境科学与工程学院",
          },
          {
            source: "环境科学与工程学院",
            target: "环境工程",
          },
          {
            source: "环境科学与工程学院",
            target: "环境科学",
          },
          {
            source: "广州大学",
            target: "化学化工学院",
          },
          {
            source: "化学化工学院",
            target: "化学工程与工艺",
          },
          {
            source: "化学化工学院",
            target: "化学(教师教育)",
          },
          {
            source: "化学化工学院",
            target: "化学(精细化学品化学与技术)",
          },
          {
            source: "化学化工学院",
            target: "化学",
          },
          {
            source: "化学化工学院",
            target: "食品科学与工程",
          },
          {
            source: "广州大学",
            target: "物理与电子工程学院",
          },
          {
            source: "物理与电子工程学院",
            target: "光电信息科学与工程",
          },
          {
            source: "物理与电子工程学院",
            target: "物联网工程",
          },
          {
            source: "物理与电子工程学院",
            target: "物理学",
          },
          {
            source: "物理与电子工程学院",
            target: "电子信息科学与技术",
          },
          {
            source: "广州大学",
            target: "建筑与城市规划学院",
          },
          {
            source: "建筑与城市规划学院",
            target: "建筑学",
          },
          {
            source: "建筑与城市规划学院",
            target: "城乡规划",
          },
          {
            source: "建筑与城市规划学院",
            target: "风景园林",
          },
          {
            source: "建筑与城市规划学院",
            target: "建筑学（五年制）",
          },
          {
            source: "广州大学",
            target: "美术与设计学院",
          },
          {
            source: "美术与设计学院",
            target: "美术学",
          },
          {
            source: "美术与设计学院",
            target: "美术学(教师教育)",
          },
          {
            source: "美术与设计学院",
            target: "动画",
          },
          {
            source: "美术与设计学院",
            target: "动画(游戏动画)",
          },
          {
            source: "美术与设计学院",
            target: "绘画",
          },
          {
            source: "美术与设计学院",
            target: "动画(动画音乐与合成)",
          },
          {
            source: "美术与设计学院",
            target: "产品设计",
          },
          {
            source: "美术与设计学院",
            target: "服装与服饰设计(服装设计)",
          },
          {
            source: "美术与设计学院",
            target: "视觉传达设计",
          },
          {
            source: "广州大学",
            target: "生命科学学院",
          },
          {
            source: "生命科学学院",
            target: "生物科学",
          },
          {
            source: "生命科学学院",
            target: "生物工程",
          },
          {
            source: "生命科学学院",
            target: "生物技术",
          },
          {
            source: "广州大学",
            target: "体育学院",
          },
          {
            source: "体育学院",
            target: "体育教育",
          },
          {
            source: "体育学院",
            target: "社会体育指导与管理",
          },
          {
            source: "广州大学",
            target: "音乐舞蹈学院",
          },
          {
            source: "音乐舞蹈学院",
            target: "音乐学",
          },
          {
            source: "音乐舞蹈学院",
            target: "舞蹈编导(编导)",
          },
          {
            source: "音乐舞蹈学院",
            target: "舞蹈编导(教师教育)",
          },
        ],
        categories: [
          {
            name: "计算机科学与教育软件学院",
          },
          {
            name: "地理科学学院",
          },
          {
            name: "机械与电气工程学院",
          },
          {
            name: "经济与统计学院",
          },
          {
            name: "土木工程学院",
          },
          {
            name: "新闻与传播学院",
          },
          {
            name: "外国语学院",
          },
          {
            name: "人文学院",
          },
          {
            name: "数学与信息科学学院",
          },
          {
            name: "工商管理学院",
          },
          {
            name: "法学院",
          },
          {
            name: "公共管理学院",
          },
          {
            name: "卫斯理安学院",
          },
          {
            name: "政治与公民教育学院",
          },
          {
            name: "旅游学院",
          },
          {
            name: "教育学院",
          },
          {
            name: "环境科学与工程学院",
          },
          {
            name: "化学化工学院",
          },
          {
            name: "物理与电子工程学院",
          },
          {
            name: "建筑与城市规划学院",
          },
          {
            name: "美术与设计学院",
          },
          {
            name: "生命科学学院",
          },
          {
            name: "体育学院",
          },
          {
            name: "音乐舞蹈学院",
          },
        ],
        focusNodeAdjacency: true,
        roam: true,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        lineStyle: {
          normal: {
            color: "source",
            curveness: 0,
            type: "solid",
          },
        },
      },
    ],
  };
  // 绘制图表

  window.addEventListener("resize", function () {
    setTimeout(() => {
      myChart.resize();
    }, 50);
  });
  myChart.setOption(options);
}
</script>

<style scoped>
#relation {
  width: 100%;
  height: 100%;
}
</style>
