<template>
  <div id="map"></div>
</template>

<script setup>
import * as echarts from "echarts";
import world from "../../assets/json/countries.geo.json";
import { onMounted, onUnmounted, reactive } from "vue";
onMounted(() => {
  initChart();
});
onUnmounted(() => {
  echarts.dispose;
});
function initChart() {
  let myChart = echarts.init(document.getElementById("map"));
  echarts.registerMap("world", world);
  // 自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  let data = [
    [
      {
        date: "1960",
        name: "阿根廷",
        value: "2",
      },
      {
        date: "1960",
        name: "阿塞拜疆",
        value: "103",
      },
      {
        date: "1960",
        name: "埃及",
        value: "2",
      },
      {
        date: "1960",
        name: "埃塞俄比亚",
        value: "1",
      },
      {
        date: "1960",
        name: "爱沙尼亚",
        value: "103",
      },
      {
        date: "1960",
        name: "奥地利",
        value: "2",
      },
      {
        date: "1960",
        name: "澳大利亚",
        value: "22",
      },
      {
        date: "1960",
        name: "巴基斯坦",
        value: "2",
      },
      {
        date: "1960",
        name: "巴西",
        value: "2",
      },
      {
        date: "1960",
        name: "白俄罗斯",
        value: "103",
      },
      {
        date: "1960",
        name: "保加利亚",
        value: "7",
      },
      {
        date: "1960",
        name: "比利时",
        value: "4",
      },
      {
        date: "1960",
        name: "波黑",
        value: "2",
      },
      {
        date: "1960",
        name: "波兰",
        value: "21",
      },
      {
        date: "1960",
        name: "丹麦",
        value: "6",
      },
      {
        date: "1960",
        name: "德国",
        value: "42",
      },
      {
        date: "1960",
        name: "俄罗斯",
        value: "103",
      },
      {
        date: "1960",
        name: "法国",
        value: "5",
      },
      {
        date: "1960",
        name: "芬兰",
        value: "5",
      },
      {
        date: "1960",
        name: "格鲁吉亚",
        value: "103",
      },
      {
        date: "1960",
        name: "哈萨克斯坦",
        value: "103",
      },
      {
        date: "1960",
        name: "荷兰",
        value: "3",
      },
      {
        date: "1960",
        name: "黑山",
        value: "2",
      },
      {
        date: "1960",
        name: "吉尔吉斯斯坦",
        value: "103",
      },
      {
        date: "1960",
        name: "加拿大",
        value: "1",
      },
      {
        date: "1960",
        name: "加纳",
        value: "1",
      },
      {
        date: "1960",
        name: "捷克",
        value: "8",
      },
      {
        date: "1960",
        name: "克罗地亚",
        value: "2",
      },
      {
        date: "1960",
        name: "拉脱维亚",
        value: "103",
      },
      {
        date: "1960",
        name: "立陶宛",
        value: "103",
      },
      {
        date: "1960",
        name: "罗马尼亚",
        value: "10",
      },
      {
        date: "1960",
        name: "马其顿",
        value: "2",
      },
      {
        date: "1960",
        name: "美国",
        value: "71",
      },
      {
        date: "1960",
        name: "摩尔多瓦",
        value: "103",
      },
      {
        date: "1960",
        name: "摩洛哥",
        value: "1",
      },
      {
        date: "1960",
        name: "墨西哥",
        value: "1",
      },
      {
        date: "1960",
        name: "南非",
        value: "3",
      },
      {
        date: "1960",
        name: "挪威",
        value: "1",
      },
      {
        date: "1960",
        name: "葡萄牙",
        value: "1",
      },
      {
        date: "1960",
        name: "日本",
        value: "18",
      },
      {
        date: "1960",
        name: "瑞典",
        value: "6",
      },
      {
        date: "1960",
        name: "塞尔维亚",
        value: "2",
      },
      {
        date: "1960",
        name: "斯洛伐克",
        value: "8",
      },
      {
        date: "1960",
        name: "斯洛文尼亚",
        value: "2",
      },
      {
        date: "1960",
        name: "瑞士",
        value: "6",
      },
      {
        date: "1960",
        name: "塔吉克斯坦",
        value: "103",
      },
      {
        date: "1960",
        name: "土耳其",
        value: "9",
      },
      {
        date: "1960",
        name: "土库曼斯坦",
        value: "103",
      },
      {
        date: "1960",
        name: "委内瑞拉",
        value: "1",
      },
      {
        date: "1960",
        name: "乌克兰",
        value: "103",
      },
      {
        date: "1960",
        name: "乌兹别克斯坦",
        value: "103",
      },
      {
        date: "1960",
        name: "西班牙",
        value: "1",
      },
      {
        date: "1960",
        name: "希腊",
        value: "1",
      },
      {
        date: "1960",
        name: "新加坡",
        value: "1",
      },
      {
        date: "1960",
        name: "新西兰",
        value: "3",
      },
      {
        date: "1960",
        name: "匈牙利",
        value: "21",
      },
      {
        date: "1960",
        name: "叙利亚",
        value: "2",
      },
      {
        date: "1960",
        name: "亚美尼亚",
        value: "103",
      },
      {
        date: "1960",
        name: "伊拉克",
        value: "1",
      },
      {
        date: "1960",
        name: "伊朗",
        value: "4",
      },
      {
        date: "1960",
        name: "意大利",
        value: "36",
      },
      {
        date: "1960",
        name: "印度",
        value: "1",
      },
      {
        date: "1960",
        name: "英国",
        value: "20",
      },
      {
        date: "1960",
        name: "中国",
        value: "1",
      },
    ],
    [
      {
        date: "1964",
        name: "阿根廷",
        value: "1",
      },
      {
        date: "1964",
        name: "阿塞拜疆",
        value: "96",
      },
      {
        date: "1964",
        name: "埃塞俄比亚",
        value: "1",
      },
      {
        date: "1964",
        name: "爱尔兰",
        value: "1",
      },
      {
        date: "1964",
        name: "爱沙尼亚",
        value: "96",
      },
      {
        date: "1964",
        name: "澳大利亚",
        value: "18",
      },
      {
        date: "1964",
        name: "巴哈马",
        value: "1",
      },
      {
        date: "1964",
        name: "巴基斯坦",
        value: "1",
      },
      {
        date: "1964",
        name: "巴西",
        value: "1",
      },
      {
        date: "1964",
        name: "白俄罗斯",
        value: "96",
      },
      {
        date: "1964",
        name: "保加利亚",
        value: "10",
      },
      {
        date: "1964",
        name: "比利时",
        value: "3",
      },
      {
        date: "1964",
        name: "波黑",
        value: "5",
      },
      {
        date: "1964",
        name: "波兰",
        value: "23",
      },
      {
        date: "1964",
        name: "丹麦",
        value: "6",
      },
      {
        date: "1964",
        name: "德国",
        value: "50",
      },
      {
        date: "1964",
        name: "俄罗斯",
        value: "96",
      },
      {
        date: "1964",
        name: "法国",
        value: "15",
      },
      {
        date: "1964",
        name: "菲律宾",
        value: "1",
      },
      {
        date: "1964",
        name: "芬兰",
        value: "5",
      },
      {
        date: "1964",
        name: "格鲁吉亚",
        value: "96",
      },
      {
        date: "1964",
        name: "古巴",
        value: "1",
      },
      {
        date: "1964",
        name: "哈萨克斯坦",
        value: "96",
      },
      {
        date: "1964",
        name: "韩国",
        value: "3",
      },
      {
        date: "1964",
        name: "荷兰",
        value: "10",
      },
      {
        date: "1964",
        name: "黑山",
        value: "5",
      },
      {
        date: "1964",
        name: "吉尔吉斯斯坦",
        value: "96",
      },
      {
        date: "1964",
        name: "加拿大",
        value: "4",
      },
      {
        date: "1964",
        name: "加纳",
        value: "1",
      },
      {
        date: "1964",
        name: "捷克",
        value: "14",
      },
      {
        date: "1964",
        name: "克罗地亚",
        value: "5",
      },
      {
        date: "1964",
        name: "肯尼亚",
        value: "1",
      },
      {
        date: "1964",
        name: "拉脱维亚",
        value: "96",
      },
      {
        date: "1964",
        name: "立陶宛",
        value: "96",
      },
      {
        date: "1964",
        name: "罗马尼亚",
        value: "12",
      },
      {
        date: "1964",
        name: "马其顿",
        value: "5",
      },
      {
        date: "1964",
        name: "美国",
        value: "90",
      },
      {
        date: "1964",
        name: "摩尔多瓦",
        value: "96",
      },
      {
        date: "1964",
        name: "墨西哥",
        value: "1",
      },
      {
        date: "1964",
        name: "尼日利亚",
        value: "1",
      },
      {
        date: "1964",
        name: "日本",
        value: "29",
      },
      {
        date: "1964",
        name: "瑞典",
        value: "8",
      },
      {
        date: "1964",
        name: "塞尔维亚",
        value: "5",
      },
      {
        date: "1964",
        name: "斯洛伐克",
        value: "14",
      },
      {
        date: "1964",
        name: "斯洛文尼亚",
        value: "5",
      },
      {
        date: "1964",
        name: "瑞士",
        value: "4",
      },
      {
        date: "1964",
        name: "塔吉克斯坦",
        value: "96",
      },
      {
        date: "1964",
        name: "特里尼",
        value: "3",
      },
      {
        date: "1964",
        name: "突尼斯",
        value: "2",
      },
      {
        date: "1964",
        name: "土耳其",
        value: "6",
      },
      {
        date: "1964",
        name: "土库曼斯坦",
        value: "96",
      },
      {
        date: "1964",
        name: "乌克兰",
        value: "96",
      },
      {
        date: "1964",
        name: "乌拉圭",
        value: "1",
      },
      {
        date: "1964",
        name: "乌兹别克斯坦",
        value: "96",
      },
      {
        date: "1964",
        name: "新西兰",
        value: "5",
      },
      {
        date: "1964",
        name: "匈牙利",
        value: "22",
      },
      {
        date: "1964",
        name: "亚美尼亚",
        value: "96",
      },
      {
        date: "1964",
        name: "伊朗",
        value: "2",
      },
      {
        date: "1964",
        name: "意大利",
        value: "27",
      },
      {
        date: "1964",
        name: "印度",
        value: "1",
      },
      {
        date: "1964",
        name: "英国",
        value: "18",
      },
    ],
    [
      {
        date: "1968",
        name: "阿根廷",
        value: "2",
      },
      {
        date: "1968",
        name: "阿塞拜疆",
        value: "91",
      },
      {
        date: "1968",
        name: "埃塞俄比亚",
        value: "2",
      },
      {
        date: "1968",
        name: "爱沙尼亚",
        value: "91",
      },
      {
        date: "1968",
        name: "奥地利",
        value: "4",
      },
      {
        date: "1968",
        name: "澳大利亚",
        value: "17",
      },
      {
        date: "1968",
        name: "巴基斯坦",
        value: "1",
      },
      {
        date: "1968",
        name: "巴西",
        value: "3",
      },
      {
        date: "1968",
        name: "白俄罗斯",
        value: "91",
      },
      {
        date: "1968",
        name: "保加利亚",
        value: "9",
      },
      {
        date: "1968",
        name: "比利时",
        value: "2",
      },
      {
        date: "1968",
        name: "波黑",
        value: "8",
      },
      {
        date: "1968",
        name: "波兰",
        value: "18",
      },
      {
        date: "1968",
        name: "丹麦",
        value: "8",
      },
      {
        date: "1968",
        name: "德国",
        value: "51",
      },
      {
        date: "1968",
        name: "俄罗斯",
        value: "91",
      },
      {
        date: "1968",
        name: "法国",
        value: "15",
      },
      {
        date: "1968",
        name: "芬兰",
        value: "4",
      },
      {
        date: "1968",
        name: "格鲁吉亚",
        value: "91",
      },
      {
        date: "1968",
        name: "古巴",
        value: "4",
      },
      {
        date: "1968",
        name: "哈萨克斯坦",
        value: "91",
      },
      {
        date: "1968",
        name: "韩国",
        value: "2",
      },
      {
        date: "1968",
        name: "荷兰",
        value: "7",
      },
      {
        date: "1968",
        name: "黑山",
        value: "8",
      },
      {
        date: "1968",
        name: "吉尔吉斯斯坦",
        value: "91",
      },
      {
        date: "1968",
        name: "加拿大",
        value: "5",
      },
      {
        date: "1968",
        name: "捷克",
        value: "13",
      },
      {
        date: "1968",
        name: "喀麦隆",
        value: "1",
      },
      {
        date: "1968",
        name: "克罗地亚",
        value: "8",
      },
      {
        date: "1968",
        name: "肯尼亚",
        value: "9",
      },
      {
        date: "1968",
        name: "拉脱维亚",
        value: "91",
      },
      {
        date: "1968",
        name: "立陶宛",
        value: "91",
      },
      {
        date: "1968",
        name: "罗马尼亚",
        value: "15",
      },
      {
        date: "1968",
        name: "马其顿",
        value: "8",
      },
      {
        date: "1968",
        name: "美国",
        value: "107",
      },
      {
        date: "1968",
        name: "蒙古",
        value: "4",
      },
      {
        date: "1968",
        name: "摩尔多瓦",
        value: "91",
      },
      {
        date: "1968",
        name: "墨西哥",
        value: "9",
      },
      {
        date: "1968",
        name: "挪威",
        value: "2",
      },
      {
        date: "1968",
        name: "日本",
        value: "25",
      },
      {
        date: "1968",
        name: "瑞典",
        value: "4",
      },
      {
        date: "1968",
        name: "塞尔维亚",
        value: "8",
      },
      {
        date: "1968",
        name: "斯洛伐克",
        value: "13",
      },
      {
        date: "1968",
        name: "斯洛文尼亚",
        value: "8",
      },
      {
        date: "1968",
        name: "瑞士",
        value: "5",
      },
      {
        date: "1968",
        name: "塔吉克斯坦",
        value: "91",
      },
      {
        date: "1968",
        name: "突尼斯",
        value: "2",
      },
      {
        date: "1968",
        name: "土耳其",
        value: "2",
      },
      {
        date: "1968",
        name: "土库曼斯坦",
        value: "91",
      },
      {
        date: "1968",
        name: "委内瑞拉",
        value: "1",
      },
      {
        date: "1968",
        name: "乌干达",
        value: "2",
      },
      {
        date: "1968",
        name: "乌克兰",
        value: "91",
      },
      {
        date: "1968",
        name: "乌兹别克斯坦",
        value: "91",
      },
      {
        date: "1968",
        name: "希腊",
        value: "1",
      },
      {
        date: "1968",
        name: "新西兰",
        value: "3",
      },
      {
        date: "1968",
        name: "匈牙利",
        value: "32",
      },
      {
        date: "1968",
        name: "牙买加",
        value: "1",
      },
      {
        date: "1968",
        name: "亚美尼亚",
        value: "91",
      },
      {
        date: "1968",
        name: "伊朗",
        value: "5",
      },
      {
        date: "1968",
        name: "意大利",
        value: "16",
      },
      {
        date: "1968",
        name: "印度",
        value: "1",
      },
      {
        date: "1968",
        name: "英国",
        value: "13",
      },
      {
        date: "1968",
        name: "中国",
        value: "1",
      },
    ],
    [
      {
        date: "1972",
        name: "阿根廷",
        value: "1",
      },
      {
        date: "1972",
        name: "阿塞拜疆",
        value: "99",
      },
      {
        date: "1972",
        name: "埃塞俄比亚",
        value: "2",
      },
      {
        date: "1972",
        name: "爱沙尼亚",
        value: "99",
      },
      {
        date: "1972",
        name: "奥地利",
        value: "3",
      },
      {
        date: "1972",
        name: "澳大利亚",
        value: "17",
      },
      {
        date: "1972",
        name: "巴基斯坦",
        value: "1",
      },
      {
        date: "1972",
        name: "巴西",
        value: "2",
      },
      {
        date: "1972",
        name: "白俄罗斯",
        value: "99",
      },
      {
        date: "1972",
        name: "保加利亚",
        value: "21",
      },
      {
        date: "1972",
        name: "比利时",
        value: "2",
      },
      {
        date: "1972",
        name: "波黑",
        value: "5",
      },
      {
        date: "1972",
        name: "波兰",
        value: "21",
      },
      {
        date: "1972",
        name: "朝鲜",
        value: "5",
      },
      {
        date: "1972",
        name: "丹麦",
        value: "1",
      },
      {
        date: "1972",
        name: "德国",
        value: "106",
      },
      {
        date: "1972",
        name: "俄罗斯",
        value: "99",
      },
      {
        date: "1972",
        name: "法国",
        value: "13",
      },
      {
        date: "1972",
        name: "芬兰",
        value: "8",
      },
      {
        date: "1972",
        name: "格鲁吉亚",
        value: "99",
      },
      {
        date: "1972",
        name: "古巴",
        value: "8",
      },
      {
        date: "1972",
        name: "哈萨克斯坦",
        value: "99",
      },
      {
        date: "1972",
        name: "韩国",
        value: "1",
      },
      {
        date: "1972",
        name: "荷兰",
        value: "5",
      },
      {
        date: "1972",
        name: "黑山",
        value: "5",
      },
      {
        date: "1972",
        name: "吉尔吉斯斯坦",
        value: "99",
      },
      {
        date: "1972",
        name: "加拿大",
        value: "5",
      },
      {
        date: "1972",
        name: "加纳",
        value: "1",
      },
      {
        date: "1972",
        name: "捷克",
        value: "8",
      },
      {
        date: "1972",
        name: "克罗地亚",
        value: "5",
      },
      {
        date: "1972",
        name: "肯尼亚",
        value: "9",
      },
      {
        date: "1972",
        name: "拉脱维亚",
        value: "99",
      },
      {
        date: "1972",
        name: "黎巴嫩",
        value: "1",
      },
      {
        date: "1972",
        name: "立陶宛",
        value: "99",
      },
      {
        date: "1972",
        name: "罗马尼亚",
        value: "16",
      },
      {
        date: "1972",
        name: "马其顿",
        value: "5",
      },
      {
        date: "1972",
        name: "美国",
        value: "94",
      },
      {
        date: "1972",
        name: "蒙古",
        value: "1",
      },
      {
        date: "1972",
        name: "摩尔多瓦",
        value: "99",
      },
      {
        date: "1972",
        name: "墨西哥",
        value: "1",
      },
      {
        date: "1972",
        name: "尼日尔",
        value: "1",
      },
      {
        date: "1972",
        name: "尼日利亚",
        value: "1",
      },
      {
        date: "1972",
        name: "挪威",
        value: "4",
      },
      {
        date: "1972",
        name: "日本",
        value: "29",
      },
      {
        date: "1972",
        name: "瑞典",
        value: "16",
      },
      {
        date: "1972",
        name: "塞尔维亚",
        value: "5",
      },
      {
        date: "1972",
        name: "斯洛伐克",
        value: "8",
      },
      {
        date: "1972",
        name: "斯洛文尼亚",
        value: "5",
      },
      {
        date: "1972",
        name: "瑞士",
        value: "3",
      },
      {
        date: "1972",
        name: "塔吉克斯坦",
        value: "99",
      },
      {
        date: "1972",
        name: "突尼斯",
        value: "1",
      },
      {
        date: "1972",
        name: "土耳其",
        value: "1",
      },
      {
        date: "1972",
        name: "土库曼斯坦",
        value: "99",
      },
      {
        date: "1972",
        name: "乌干达",
        value: "2",
      },
      {
        date: "1972",
        name: "乌克兰",
        value: "99",
      },
      {
        date: "1972",
        name: "乌兹别克斯坦",
        value: "99",
      },
      {
        date: "1972",
        name: "西班牙",
        value: "1",
      },
      {
        date: "1972",
        name: "希腊",
        value: "2",
      },
      {
        date: "1972",
        name: "新西兰",
        value: "3",
      },
      {
        date: "1972",
        name: "匈牙利",
        value: "35",
      },
      {
        date: "1972",
        name: "牙买加",
        value: "1",
      },
      {
        date: "1972",
        name: "亚美尼亚",
        value: "99",
      },
      {
        date: "1972",
        name: "伊朗",
        value: "3",
      },
      {
        date: "1972",
        name: "意大利",
        value: "18",
      },
      {
        date: "1972",
        name: "印度",
        value: "1",
      },
      {
        date: "1972",
        name: "英国",
        value: "18",
      },
    ],
    [
      {
        date: "1976",
        name: "阿塞拜疆",
        value: "125",
      },
      {
        date: "1976",
        name: "爱沙尼亚",
        value: "125",
      },
      {
        date: "1976",
        name: "奥地利",
        value: "1",
      },
      {
        date: "1976",
        name: "澳大利亚",
        value: "5",
      },
      {
        date: "1976",
        name: "巴基斯坦",
        value: "1",
      },
      {
        date: "1976",
        name: "巴西",
        value: "2",
      },
      {
        date: "1976",
        name: "白俄罗斯",
        value: "125",
      },
      {
        date: "1976",
        name: "百慕大",
        value: "1",
      },
      {
        date: "1976",
        name: "保加利亚",
        value: "22",
      },
      {
        date: "1976",
        name: "比利时",
        value: "6",
      },
      {
        date: "1976",
        name: "波多黎各",
        value: "1",
      },
      {
        date: "1976",
        name: "波黑",
        value: "8",
      },
      {
        date: "1976",
        name: "波兰",
        value: "26",
      },
      {
        date: "1976",
        name: "朝鲜",
        value: "2",
      },
      {
        date: "1976",
        name: "丹麦",
        value: "3",
      },
      {
        date: "1976",
        name: "德国",
        value: "129",
      },
      {
        date: "1976",
        name: "俄罗斯",
        value: "125",
      },
      {
        date: "1976",
        name: "法国",
        value: "9",
      },
      {
        date: "1976",
        name: "芬兰",
        value: "6",
      },
      {
        date: "1976",
        name: "格鲁吉亚",
        value: "125",
      },
      {
        date: "1976",
        name: "古巴",
        value: "13",
      },
      {
        date: "1976",
        name: "哈萨克斯坦",
        value: "125",
      },
      {
        date: "1976",
        name: "韩国",
        value: "6",
      },
      {
        date: "1976",
        name: "荷兰",
        value: "5",
      },
      {
        date: "1976",
        name: "黑山",
        value: "8",
      },
      {
        date: "1976",
        name: "吉尔吉斯斯坦",
        value: "125",
      },
      {
        date: "1976",
        name: "加拿大",
        value: "11",
      },
      {
        date: "1976",
        name: "捷克",
        value: "8",
      },
      {
        date: "1976",
        name: "克罗地亚",
        value: "8",
      },
      {
        date: "1976",
        name: "拉脱维亚",
        value: "125",
      },
      {
        date: "1976",
        name: "立陶宛",
        value: "125",
      },
      {
        date: "1976",
        name: "罗马尼亚",
        value: "27",
      },
      {
        date: "1976",
        name: "马其顿",
        value: "8",
      },
      {
        date: "1976",
        name: "美国",
        value: "94",
      },
      {
        date: "1976",
        name: "蒙古",
        value: "1",
      },
      {
        date: "1976",
        name: "摩尔多瓦",
        value: "125",
      },
      {
        date: "1976",
        name: "墨西哥",
        value: "2",
      },
      {
        date: "1976",
        name: "挪威",
        value: "2",
      },
      {
        date: "1976",
        name: "葡萄牙",
        value: "2",
      },
      {
        date: "1976",
        name: "日本",
        value: "25",
      },
      {
        date: "1976",
        name: "瑞典",
        value: "5",
      },
      {
        date: "1976",
        name: "塞尔维亚",
        value: "8",
      },
      {
        date: "1976",
        name: "斯洛伐克",
        value: "8",
      },
      {
        date: "1976",
        name: "斯洛文尼亚",
        value: "8",
      },
      {
        date: "1976",
        name: "瑞士",
        value: "4",
      },
      {
        date: "1976",
        name: "塔吉克斯坦",
        value: "125",
      },
      {
        date: "1976",
        name: "泰国",
        value: "1",
      },
      {
        date: "1976",
        name: "特里尼达和多",
        value: "1",
      },
      {
        date: "1976",
        name: "土库曼斯坦",
        value: "125",
      },
      {
        date: "1976",
        name: "委内瑞拉",
        value: "1",
      },
      {
        date: "1976",
        name: "乌克兰",
        value: "125",
      },
      {
        date: "1976",
        name: "乌兹别克斯坦",
        value: "125",
      },
      {
        date: "1976",
        name: "西班牙",
        value: "2",
      },
      {
        date: "1976",
        name: "新西兰",
        value: "4",
      },
      {
        date: "1976",
        name: "匈牙利",
        value: "22",
      },
      {
        date: "1976",
        name: "牙买加",
        value: "2",
      },
      {
        date: "1976",
        name: "亚美尼亚",
        value: "125",
      },
      {
        date: "1976",
        name: "伊朗",
        value: "2",
      },
      {
        date: "1976",
        name: "意大利",
        value: "13",
      },
      {
        date: "1976",
        name: "英国",
        value: "13",
      },
    ],
    [
      {
        date: "1980",
        name: "阿塞拜疆",
        value: "195",
      },
      {
        date: "1980",
        name: "埃塞俄比亚",
        value: "4",
      },
      {
        date: "1980",
        name: "爱尔兰",
        value: "2",
      },
      {
        date: "1980",
        name: "爱沙尼亚",
        value: "195",
      },
      {
        date: "1980",
        name: "奥地利",
        value: "4",
      },
      {
        date: "1980",
        name: "澳大利亚",
        value: "9",
      },
      {
        date: "1980",
        name: "巴西",
        value: "4",
      },
      {
        date: "1980",
        name: "白俄罗斯",
        value: "195",
      },
      {
        date: "1980",
        name: "保加利亚",
        value: "41",
      },
      {
        date: "1980",
        name: "比利时",
        value: "1",
      },
      {
        date: "1980",
        name: "波黑",
        value: "9",
      },
      {
        date: "1980",
        name: "波兰",
        value: "32",
      },
      {
        date: "1980",
        name: "朝鲜",
        value: "5",
      },
      {
        date: "1980",
        name: "丹麦",
        value: "5",
      },
      {
        date: "1980",
        name: "德国",
        value: "126",
      },
      {
        date: "1980",
        name: "俄罗斯",
        value: "195",
      },
      {
        date: "1980",
        name: "法国",
        value: "14",
      },
      {
        date: "1980",
        name: "芬兰",
        value: "8",
      },
      {
        date: "1980",
        name: "格鲁吉亚",
        value: "195",
      },
      {
        date: "1980",
        name: "古巴",
        value: "20",
      },
      {
        date: "1980",
        name: "圭亚那",
        value: "1",
      },
      {
        date: "1980",
        name: "哈萨克斯坦",
        value: "195",
      },
      {
        date: "1980",
        name: "荷兰",
        value: "3",
      },
      {
        date: "1980",
        name: "黑山",
        value: "9",
      },
      {
        date: "1980",
        name: "吉尔吉斯斯坦",
        value: "195",
      },
      {
        date: "1980",
        name: "捷克",
        value: "14",
      },
      {
        date: "1980",
        name: "津巴布韦",
        value: "1",
      },
      {
        date: "1980",
        name: "克罗地亚",
        value: "9",
      },
      {
        date: "1980",
        name: "拉脱维亚",
        value: "195",
      },
      {
        date: "1980",
        name: "黎巴嫩",
        value: "1",
      },
      {
        date: "1980",
        name: "立陶宛",
        value: "195",
      },
      {
        date: "1980",
        name: "罗马尼亚",
        value: "25",
      },
      {
        date: "1980",
        name: "马其顿",
        value: "9",
      },
      {
        date: "1980",
        name: "蒙古",
        value: "4",
      },
      {
        date: "1980",
        name: "摩尔多瓦",
        value: "195",
      },
      {
        date: "1980",
        name: "墨西哥",
        value: "4",
      },
      {
        date: "1980",
        name: "瑞典",
        value: "12",
      },
      {
        date: "1980",
        name: "塞尔维亚",
        value: "9",
      },
      {
        date: "1980",
        name: "斯洛伐克",
        value: "14",
      },
      {
        date: "1980",
        name: "斯洛文尼亚",
        value: "9",
      },
      {
        date: "1980",
        name: "瑞士",
        value: "2",
      },
      {
        date: "1980",
        name: "塔吉克斯坦",
        value: "195",
      },
      {
        date: "1980",
        name: "坦桑尼亚",
        value: "2",
      },
      {
        date: "1980",
        name: "土库曼斯坦",
        value: "195",
      },
      {
        date: "1980",
        name: "委内瑞拉",
        value: "1",
      },
      {
        date: "1980",
        name: "乌干达",
        value: "1",
      },
      {
        date: "1980",
        name: "乌克兰",
        value: "195",
      },
      {
        date: "1980",
        name: "乌兹别克斯坦",
        value: "195",
      },
      {
        date: "1980",
        name: "西班牙",
        value: "6",
      },
      {
        date: "1980",
        name: "希腊",
        value: "3",
      },
      {
        date: "1980",
        name: "匈牙利",
        value: "32",
      },
      {
        date: "1980",
        name: "牙买加",
        value: "3",
      },
      {
        date: "1980",
        name: "亚美尼亚",
        value: "195",
      },
      {
        date: "1980",
        name: "意大利",
        value: "15",
      },
      {
        date: "1980",
        name: "印度",
        value: "1",
      },
      {
        date: "1980",
        name: "英国",
        value: "21",
      },
    ],
    [
      {
        date: "1984",
        name: "阿尔及利亚",
        value: "2",
      },
      {
        date: "1984",
        name: "埃及",
        value: "1",
      },
      {
        date: "1984",
        name: "爱尔兰",
        value: "1",
      },
      {
        date: "1984",
        name: "奥地利",
        value: "3",
      },
      {
        date: "1984",
        name: "澳大利亚",
        value: "24",
      },
      {
        date: "1984",
        name: "巴基斯坦",
        value: "1",
      },
      {
        date: "1984",
        name: "巴西",
        value: "8",
      },
      {
        date: "1984",
        name: "比利时",
        value: "4",
      },
      {
        date: "1984",
        name: "冰岛",
        value: "1",
      },
      {
        date: "1984",
        name: "波多黎各",
        value: "2",
      },
      {
        date: "1984",
        name: "波黑",
        value: "18",
      },
      {
        date: "1984",
        name: "丹麦",
        value: "6",
      },
      {
        date: "1984",
        name: "德国",
        value: "59",
      },
      {
        date: "1984",
        name: "多明尼加共和",
        value: "1",
      },
      {
        date: "1984",
        name: "法国",
        value: "28",
      },
      {
        date: "1984",
        name: "芬兰",
        value: "12",
      },
      {
        date: "1984",
        name: "韩国",
        value: "19",
      },
      {
        date: "1984",
        name: "荷兰",
        value: "13",
      },
      {
        date: "1984",
        name: "黑山",
        value: "18",
      },
      {
        date: "1984",
        name: "加拿大",
        value: "44",
      },
      {
        date: "1984",
        name: "喀麦隆",
        value: "1",
      },
      {
        date: "1984",
        name: "科特迪瓦",
        value: "1",
      },
      {
        date: "1984",
        name: "克罗地亚",
        value: "18",
      },
      {
        date: "1984",
        name: "肯尼亚",
        value: "3",
      },
      {
        date: "1984",
        name: "罗马尼亚",
        value: "53",
      },
      {
        date: "1984",
        name: "马其顿",
        value: "18",
      },
      {
        date: "1984",
        name: "美国",
        value: "174",
      },
      {
        date: "1984",
        name: "秘鲁",
        value: "1",
      },
      {
        date: "1984",
        name: "摩洛哥",
        value: "2",
      },
      {
        date: "1984",
        name: "墨西哥",
        value: "6",
      },
      {
        date: "1984",
        name: "尼日利亚",
        value: "2",
      },
      {
        date: "1984",
        name: "挪威",
        value: "3",
      },
      {
        date: "1984",
        name: "葡萄牙",
        value: "3",
      },
      {
        date: "1984",
        name: "日本",
        value: "32",
      },
      {
        date: "1984",
        name: "瑞典",
        value: "19",
      },
      {
        date: "1984",
        name: "塞尔维亚",
        value: "18",
      },
      {
        date: "1984",
        name: "斯洛文尼亚",
        value: "18",
      },
      {
        date: "1984",
        name: "瑞士",
        value: "8",
      },
      {
        date: "1984",
        name: "泰国",
        value: "1",
      },
      {
        date: "1984",
        name: "土耳其",
        value: "3",
      },
      {
        date: "1984",
        name: "委内瑞拉",
        value: "3",
      },
      {
        date: "1984",
        name: "西班牙",
        value: "5",
      },
      {
        date: "1984",
        name: "希腊",
        value: "2",
      },
      {
        date: "1984",
        name: "新西兰",
        value: "11",
      },
      {
        date: "1984",
        name: "叙利亚",
        value: "1",
      },
      {
        date: "1984",
        name: "牙买加",
        value: "3",
      },
      {
        date: "1984",
        name: "意大利",
        value: "32",
      },
      {
        date: "1984",
        name: "英国",
        value: "37",
      },
      {
        date: "1984",
        name: "赞比亚",
        value: "1",
      },
      {
        date: "1984",
        name: "中国",
        value: "33",
      },
    ],
    [
      {
        date: "1988",
        name: "阿根廷",
        value: "2",
      },
      {
        date: "1988",
        name: "阿塞拜疆",
        value: "132",
      },
      {
        date: "1988",
        name: "爱沙尼亚",
        value: "132",
      },
      {
        date: "1988",
        name: "奥地利",
        value: "1",
      },
      {
        date: "1988",
        name: "澳大利亚",
        value: "14",
      },
      {
        date: "1988",
        name: "巴基斯坦",
        value: "1",
      },
      {
        date: "1988",
        name: "巴西",
        value: "6",
      },
      {
        date: "1988",
        name: "白俄罗斯",
        value: "132",
      },
      {
        date: "1988",
        name: "保加利亚",
        value: "35",
      },
      {
        date: "1988",
        name: "比利时",
        value: "2",
      },
      {
        date: "1988",
        name: "波黑",
        value: "12",
      },
      {
        date: "1988",
        name: "波兰",
        value: "16",
      },
      {
        date: "1988",
        name: "丹麦",
        value: "4",
      },
      {
        date: "1988",
        name: "德国",
        value: "142",
      },
      {
        date: "1988",
        name: "俄罗斯",
        value: "132",
      },
      {
        date: "1988",
        name: "法国",
        value: "16",
      },
      {
        date: "1988",
        name: "菲律宾",
        value: "1",
      },
      {
        date: "1988",
        name: "芬兰",
        value: "4",
      },
      {
        date: "1988",
        name: "哥斯达黎加",
        value: "1",
      },
      {
        date: "1988",
        name: "格鲁吉亚",
        value: "132",
      },
      {
        date: "1988",
        name: "哈萨克斯坦",
        value: "132",
      },
      {
        date: "1988",
        name: "韩国",
        value: "33",
      },
      {
        date: "1988",
        name: "荷兰",
        value: "9",
      },
      {
        date: "1988",
        name: "黑山",
        value: "12",
      },
      {
        date: "1988",
        name: "吉布提",
        value: "1",
      },
      {
        date: "1988",
        name: "吉尔吉斯斯坦",
        value: "132",
      },
      {
        date: "1988",
        name: "加拿大",
        value: "10",
      },
      {
        date: "1988",
        name: "捷克",
        value: "8",
      },
      {
        date: "1988",
        name: "克罗地亚",
        value: "12",
      },
      {
        date: "1988",
        name: "肯尼亚",
        value: "9",
      },
      {
        date: "1988",
        name: "拉脱维亚",
        value: "132",
      },
      {
        date: "1988",
        name: "立陶宛",
        value: "132",
      },
      {
        date: "1988",
        name: "罗马尼亚",
        value: "24",
      },
      {
        date: "1988",
        name: "马其顿",
        value: "12",
      },
      {
        date: "1988",
        name: "美国",
        value: "94",
      },
      {
        date: "1988",
        name: "蒙古",
        value: "1",
      },
      {
        date: "1988",
        name: "秘鲁",
        value: "1",
      },
      {
        date: "1988",
        name: "摩尔多瓦",
        value: "132",
      },
      {
        date: "1988",
        name: "摩洛哥",
        value: "3",
      },
      {
        date: "1988",
        name: "墨西哥",
        value: "2",
      },
      {
        date: "1988",
        name: "挪威",
        value: "5",
      },
      {
        date: "1988",
        name: "葡萄牙",
        value: "1",
      },
      {
        date: "1988",
        name: "日本",
        value: "14",
      },
      {
        date: "1988",
        name: "瑞典",
        value: "11",
      },
      {
        date: "1988",
        name: "塞尔维亚",
        value: "12",
      },
      {
        date: "1988",
        name: "塞内加尔",
        value: "1",
      },
      {
        date: "1988",
        name: "斯洛伐克",
        value: "8",
      },
      {
        date: "1988",
        name: "斯洛文尼亚",
        value: "12",
      },
      {
        date: "1988",
        name: "瑞士",
        value: "4",
      },
      {
        date: "1988",
        name: "苏里南",
        value: "1",
      },
      {
        date: "1988",
        name: "塔吉克斯坦",
        value: "132",
      },
      {
        date: "1988",
        name: "泰国",
        value: "1",
      },
      {
        date: "1988",
        name: "土耳其",
        value: "2",
      },
      {
        date: "1988",
        name: "土库曼斯坦",
        value: "132",
      },
      {
        date: "1988",
        name: "乌克兰",
        value: "132",
      },
      {
        date: "1988",
        name: "乌兹别克斯坦",
        value: "132",
      },
      {
        date: "1988",
        name: "西班牙",
        value: "4",
      },
      {
        date: "1988",
        name: "希腊",
        value: "1",
      },
      {
        date: "1988",
        name: "新西兰",
        value: "13",
      },
      {
        date: "1988",
        name: "匈牙利",
        value: "23",
      },
      {
        date: "1988",
        name: "牙买加",
        value: "2",
      },
      {
        date: "1988",
        name: "亚美尼亚",
        value: "132",
      },
      {
        date: "1988",
        name: "伊朗",
        value: "1",
      },
      {
        date: "1988",
        name: "意大利",
        value: "14",
      },
      {
        date: "1988",
        name: "印尼",
        value: "1",
      },
      {
        date: "1988",
        name: "英国",
        value: "24",
      },
      {
        date: "1988",
        name: "智利",
        value: "1",
      },
      {
        date: "1988",
        name: "中国",
        value: "28",
      },
    ],
    [
      {
        date: "1992",
        name: "阿尔及利亚",
        value: "2",
      },
      {
        date: "1992",
        name: "阿根廷",
        value: "1",
      },
      {
        date: "1992",
        name: "阿塞拜疆",
        value: "112",
      },
      {
        date: "1992",
        name: "埃塞俄比亚",
        value: "3",
      },
      {
        date: "1992",
        name: "爱尔兰",
        value: "2",
      },
      {
        date: "1992",
        name: "爱沙尼亚",
        value: "2",
      },
      {
        date: "1992",
        name: "奥地利",
        value: "2",
      },
      {
        date: "1992",
        name: "澳大利亚",
        value: "27",
      },
      {
        date: "1992",
        name: "巴哈马",
        value: "1",
      },
      {
        date: "1992",
        name: "巴基斯坦",
        value: "1",
      },
      {
        date: "1992",
        name: "白俄罗斯",
        value: "112",
      },
      {
        date: "1992",
        name: "保加利亚",
        value: "16",
      },
      {
        date: "1992",
        name: "比利时",
        value: "3",
      },
      {
        date: "1992",
        name: "波多黎各",
        value: "1",
      },
      {
        date: "1992",
        name: "波兰",
        value: "19",
      },
      {
        date: "1992",
        name: "朝鲜",
        value: "9",
      },
      {
        date: "1992",
        name: "丹麦",
        value: "6",
      },
      {
        date: "1992",
        name: "德国",
        value: "82",
      },
      {
        date: "1992",
        name: "俄罗斯",
        value: "112",
      },
      {
        date: "1992",
        name: "法国",
        value: "29",
      },
      {
        date: "1992",
        name: "菲律宾",
        value: "1",
      },
      {
        date: "1992",
        name: "芬兰",
        value: "5",
      },
      {
        date: "1992",
        name: "哥伦比亚",
        value: "1",
      },
      {
        date: "1992",
        name: "格鲁吉亚",
        value: "112",
      },
      {
        date: "1992",
        name: "古巴",
        value: "31",
      },
      {
        date: "1992",
        name: "哈萨克斯坦",
        value: "112",
      },
      {
        date: "1992",
        name: "韩国",
        value: "29",
      },
      {
        date: "1992",
        name: "荷兰",
        value: "15",
      },
      {
        date: "1992",
        name: "吉尔吉斯斯坦",
        value: "112",
      },
      {
        date: "1992",
        name: "加拿大",
        value: "18",
      },
      {
        date: "1992",
        name: "加纳",
        value: "1",
      },
      {
        date: "1992",
        name: "捷克",
        value: "7",
      },
      {
        date: "1992",
        name: "卡塔尔",
        value: "1",
      },
      {
        date: "1992",
        name: "克罗地亚",
        value: "3",
      },
      {
        date: "1992",
        name: "肯尼亚",
        value: "8",
      },
      {
        date: "1992",
        name: "拉脱维亚",
        value: "3",
      },
      {
        date: "1992",
        name: "立陶宛",
        value: "2",
      },
      {
        date: "1992",
        name: "罗马尼亚",
        value: "18",
      },
      {
        date: "1992",
        name: "马来西亚",
        value: "1",
      },
      {
        date: "1992",
        name: "美国",
        value: "108",
      },
      {
        date: "1992",
        name: "蒙古",
        value: "2",
      },
      {
        date: "1992",
        name: "秘鲁",
        value: "1",
      },
      {
        date: "1992",
        name: "摩尔多瓦",
        value: "112",
      },
      {
        date: "1992",
        name: "摩洛哥",
        value: "3",
      },
      {
        date: "1992",
        name: "墨西哥",
        value: "1",
      },
      {
        date: "1992",
        name: "纳米比亚",
        value: "2",
      },
      {
        date: "1992",
        name: "南非",
        value: "2",
      },
      {
        date: "1992",
        name: "尼日利亚",
        value: "4",
      },
      {
        date: "1992",
        name: "挪威",
        value: "7",
      },
      {
        date: "1992",
        name: "日本",
        value: "22",
      },
      {
        date: "1992",
        name: "瑞典",
        value: "12",
      },
      {
        date: "1992",
        name: "斯洛伐克",
        value: "7",
      },
      {
        date: "1992",
        name: "斯洛文尼亚",
        value: "2",
      },
      {
        date: "1992",
        name: "瑞士",
        value: "1",
      },
      {
        date: "1992",
        name: "苏里南",
        value: "1",
      },
      {
        date: "1992",
        name: "塔吉克斯坦",
        value: "112",
      },
      {
        date: "1992",
        name: "泰国",
        value: "1",
      },
      {
        date: "1992",
        name: "土耳其",
        value: "6",
      },
      {
        date: "1992",
        name: "土库曼斯坦",
        value: "112",
      },
      {
        date: "1992",
        name: "乌克兰",
        value: "112",
      },
      {
        date: "1992",
        name: "乌兹别克斯坦",
        value: "112",
      },
      {
        date: "1992",
        name: "西班牙",
        value: "22",
      },
      {
        date: "1992",
        name: "希腊",
        value: "2",
      },
      {
        date: "1992",
        name: "新西兰",
        value: "10",
      },
      {
        date: "1992",
        name: "匈牙利",
        value: "30",
      },
      {
        date: "1992",
        name: "牙买加",
        value: "4",
      },
      {
        date: "1992",
        name: "亚美尼亚",
        value: "112",
      },
      {
        date: "1992",
        name: "伊朗",
        value: "3",
      },
      {
        date: "1992",
        name: "以色列",
        value: "2",
      },
      {
        date: "1992",
        name: "意大利",
        value: "19",
      },
      {
        date: "1992",
        name: "印尼",
        value: "5",
      },
      {
        date: "1992",
        name: "英国",
        value: "20",
      },
      {
        date: "1992",
        name: "中国",
        value: "55",
      },
    ],
    [
      {
        date: "1996",
        name: "阿尔及利亚",
        value: "3",
      },
      {
        date: "1996",
        name: "阿根廷",
        value: "3",
      },
      {
        date: "1996",
        name: "阿塞拜疆",
        value: "1",
      },
      {
        date: "1996",
        name: "埃塞俄比亚",
        value: "3",
      },
      {
        date: "1996",
        name: "爱尔兰",
        value: "4",
      },
      {
        date: "1996",
        name: "奥地利",
        value: "3",
      },
      {
        date: "1996",
        name: "澳大利亚",
        value: "41",
      },
      {
        date: "1996",
        name: "巴哈马",
        value: "1",
      },
      {
        date: "1996",
        name: "白俄罗斯",
        value: "15",
      },
      {
        date: "1996",
        name: "保加利亚",
        value: "15",
      },
      {
        date: "1996",
        name: "比利时",
        value: "6",
      },
      {
        date: "1996",
        name: "波多黎各",
        value: "1",
      },
      {
        date: "1996",
        name: "波兰",
        value: "17",
      },
      {
        date: "1996",
        name: "布隆迪",
        value: "1",
      },
      {
        date: "1996",
        name: "朝鲜",
        value: "5",
      },
      {
        date: "1996",
        name: "丹麦",
        value: "6",
      },
      {
        date: "1996",
        name: "德国",
        value: "65",
      },
      {
        date: "1996",
        name: "俄罗斯",
        value: "63",
      },
      {
        date: "1996",
        name: "厄瓜多尔",
        value: "1",
      },
      {
        date: "1996",
        name: "法国",
        value: "37",
      },
      {
        date: "1996",
        name: "菲律宾",
        value: "1",
      },
      {
        date: "1996",
        name: "芬兰",
        value: "4",
      },
      {
        date: "1996",
        name: "哥斯达黎加",
        value: "1",
      },
      {
        date: "1996",
        name: "格鲁吉亚",
        value: "2",
      },
      {
        date: "1996",
        name: "古巴",
        value: "25",
      },
      {
        date: "1996",
        name: "哈萨克斯坦",
        value: "11",
      },
      {
        date: "1996",
        name: "韩国",
        value: "27",
      },
      {
        date: "1996",
        name: "荷兰",
        value: "19",
      },
      {
        date: "1996",
        name: "黑山",
        value: "4",
      },
      {
        date: "1996",
        name: "加拿大",
        value: "22",
      },
      {
        date: "1996",
        name: "捷克",
        value: "11",
      },
      {
        date: "1996",
        name: "克罗地亚",
        value: "2",
      },
      {
        date: "1996",
        name: "肯尼亚",
        value: "8",
      },
      {
        date: "1996",
        name: "拉脱维亚",
        value: "1",
      },
      {
        date: "1996",
        name: "立陶宛",
        value: "1",
      },
      {
        date: "1996",
        name: "罗马尼亚",
        value: "20",
      },
      {
        date: "1996",
        name: "马来西亚",
        value: "2",
      },
      {
        date: "1996",
        name: "美国",
        value: "101",
      },
      {
        date: "1996",
        name: "蒙古",
        value: "1",
      },
      {
        date: "1996",
        name: "摩尔多瓦",
        value: "2",
      },
      {
        date: "1996",
        name: "摩洛哥",
        value: "2",
      },
      {
        date: "1996",
        name: "莫桑比克",
        value: "1",
      },
      {
        date: "1996",
        name: "墨西哥",
        value: "1",
      },
      {
        date: "1996",
        name: "纳米比亚",
        value: "2",
      },
      {
        date: "1996",
        name: "南非",
        value: "5",
      },
      {
        date: "1996",
        name: "尼日利亚",
        value: "6",
      },
      {
        date: "1996",
        name: "挪威",
        value: "7",
      },
      {
        date: "1996",
        name: "葡萄牙",
        value: "2",
      },
      {
        date: "1996",
        name: "日本",
        value: "14",
      },
      {
        date: "1996",
        name: "瑞典",
        value: "8",
      },
      {
        date: "1996",
        name: "塞尔维亚",
        value: "4",
      },
      {
        date: "1996",
        name: "斯洛伐克",
        value: "3",
      },
      {
        date: "1996",
        name: "斯洛文尼亚",
        value: "2",
      },
      {
        date: "1996",
        name: "瑞士",
        value: "7",
      },
      {
        date: "1996",
        name: "泰国",
        value: "2",
      },
      {
        date: "1996",
        name: "特里尼达和多",
        value: "2",
      },
      {
        date: "1996",
        name: "突尼斯",
        value: "1",
      },
      {
        date: "1996",
        name: "土耳其",
        value: "6",
      },
      {
        date: "1996",
        name: "乌干达",
        value: "1",
      },
      {
        date: "1996",
        name: "乌克兰",
        value: "23",
      },
      {
        date: "1996",
        name: "乌兹别克斯坦",
        value: "2",
      },
      {
        date: "1996",
        name: "西班牙",
        value: "17",
      },
      {
        date: "1996",
        name: "希腊",
        value: "8",
      },
      {
        date: "1996",
        name: "新西兰",
        value: "6",
      },
      {
        date: "1996",
        name: "匈牙利",
        value: "21",
      },
      {
        date: "1996",
        name: "叙利亚",
        value: "1",
      },
      {
        date: "1996",
        name: "牙买加",
        value: "6",
      },
      {
        date: "1996",
        name: "亚美尼亚",
        value: "2",
      },
      {
        date: "1996",
        name: "伊朗",
        value: "3",
      },
      {
        date: "1996",
        name: "以色列",
        value: "1",
      },
      {
        date: "1996",
        name: "意大利",
        value: "35",
      },
      {
        date: "1996",
        name: "印度",
        value: "1",
      },
      {
        date: "1996",
        name: "印尼",
        value: "4",
      },
      {
        date: "1996",
        name: "英国",
        value: "15",
      },
      {
        date: "1996",
        name: "赞比亚",
        value: "1",
      },
      {
        date: "1996",
        name: "中国",
        value: "52",
      },
    ],
    [
      {
        date: "2000",
        name: "阿尔及利亚",
        value: "5",
      },
      {
        date: "2000",
        name: "阿根廷",
        value: "4",
      },
      {
        date: "2000",
        name: "阿塞拜疆",
        value: "3",
      },
      {
        date: "2000",
        name: "埃塞俄比亚",
        value: "8",
      },
      {
        date: "2000",
        name: "爱尔兰",
        value: "1",
      },
      {
        date: "2000",
        name: "爱沙尼亚",
        value: "3",
      },
      {
        date: "2000",
        name: "奥地利",
        value: "3",
      },
      {
        date: "2000",
        name: "澳大利亚",
        value: "58",
      },
      {
        date: "2000",
        name: "巴哈马",
        value: "3",
      },
      {
        date: "2000",
        name: "巴西",
        value: "12",
      },
      {
        date: "2000",
        name: "白俄罗斯",
        value: "17",
      },
      {
        date: "2000",
        name: "保加利亚",
        value: "13",
      },
      {
        date: "2000",
        name: "比利时",
        value: "5",
      },
      {
        date: "2000",
        name: "冰岛",
        value: "1",
      },
      {
        date: "2000",
        name: "波兰",
        value: "14",
      },
      {
        date: "2000",
        name: "朝鲜",
        value: "4",
      },
      {
        date: "2000",
        name: "丹麦",
        value: "6",
      },
      {
        date: "2000",
        name: "德国",
        value: "56",
      },
      {
        date: "2000",
        name: "俄罗斯",
        value: "89",
      },
      {
        date: "2000",
        name: "法国",
        value: "38",
      },
      {
        date: "2000",
        name: "芬兰",
        value: "4",
      },
      {
        date: "2000",
        name: "哥斯达黎加",
        value: "2",
      },
      {
        date: "2000",
        name: "格鲁吉亚",
        value: "6",
      },
      {
        date: "2000",
        name: "古巴",
        value: "29",
      },
      {
        date: "2000",
        name: "哈萨克斯坦",
        value: "7",
      },
      {
        date: "2000",
        name: "韩国",
        value: "28",
      },
      {
        date: "2000",
        name: "荷兰",
        value: "25",
      },
      {
        date: "2000",
        name: "黑山",
        value: "3",
      },
      {
        date: "2000",
        name: "吉尔吉斯斯坦",
        value: "1",
      },
      {
        date: "2000",
        name: "加拿大",
        value: "14",
      },
      {
        date: "2000",
        name: "捷克",
        value: "8",
      },
      {
        date: "2000",
        name: "喀麦隆",
        value: "1",
      },
      {
        date: "2000",
        name: "卡塔尔",
        value: "1",
      },
      {
        date: "2000",
        name: "科威特",
        value: "1",
      },
      {
        date: "2000",
        name: "克罗地亚",
        value: "2",
      },
      {
        date: "2000",
        name: "肯尼亚",
        value: "7",
      },
      {
        date: "2000",
        name: "拉脱维亚",
        value: "3",
      },
      {
        date: "2000",
        name: "立陶宛",
        value: "5",
      },
      {
        date: "2000",
        name: "罗马尼亚",
        value: "26",
      },
      {
        date: "2000",
        name: "马其顿",
        value: "1",
      },
      {
        date: "2000",
        name: "美国",
        value: "93",
      },
      {
        date: "2000",
        name: "摩尔多瓦",
        value: "2",
      },
      {
        date: "2000",
        name: "摩洛哥",
        value: "5",
      },
      {
        date: "2000",
        name: "莫桑比克",
        value: "1",
      },
      {
        date: "2000",
        name: "墨西哥",
        value: "6",
      },
      {
        date: "2000",
        name: "南非",
        value: "5",
      },
      {
        date: "2000",
        name: "尼日利亚",
        value: "3",
      },
      {
        date: "2000",
        name: "挪威",
        value: "10",
      },
      {
        date: "2000",
        name: "葡萄牙",
        value: "2",
      },
      {
        date: "2000",
        name: "日本",
        value: "18",
      },
      {
        date: "2000",
        name: "瑞典",
        value: "12",
      },
      {
        date: "2000",
        name: "塞尔维亚",
        value: "3",
      },
      {
        date: "2000",
        name: "沙特阿拉伯",
        value: "2",
      },
      {
        date: "2000",
        name: "斯里兰卡",
        value: "1",
      },
      {
        date: "2000",
        name: "斯洛伐克",
        value: "5",
      },
      {
        date: "2000",
        name: "斯洛文尼亚",
        value: "2",
      },
      {
        date: "2000",
        name: "瑞士",
        value: "9",
      },
      {
        date: "2000",
        name: "泰国",
        value: "3",
      },
      {
        date: "2000",
        name: "特里尼达和多",
        value: "2",
      },
      {
        date: "2000",
        name: "土耳其",
        value: "5",
      },
      {
        date: "2000",
        name: "乌克兰",
        value: "23",
      },
      {
        date: "2000",
        name: "乌拉圭",
        value: "1",
      },
      {
        date: "2000",
        name: "乌兹别克斯坦",
        value: "4",
      },
      {
        date: "2000",
        name: "西班牙",
        value: "11",
      },
      {
        date: "2000",
        name: "希腊",
        value: "13",
      },
      {
        date: "2000",
        name: "新西兰",
        value: "4",
      },
      {
        date: "2000",
        name: "匈牙利",
        value: "17",
      },
      {
        date: "2000",
        name: "牙买加",
        value: "9",
      },
      {
        date: "2000",
        name: "亚美尼亚",
        value: "1",
      },
      {
        date: "2000",
        name: "伊朗",
        value: "4",
      },
      {
        date: "2000",
        name: "以色列",
        value: "1",
      },
      {
        date: "2000",
        name: "意大利",
        value: "34",
      },
      {
        date: "2000",
        name: "印度",
        value: "1",
      },
      {
        date: "2000",
        name: "印尼",
        value: "6",
      },
      {
        date: "2000",
        name: "英国",
        value: "29",
      },
      {
        date: "2000",
        name: "越南",
        value: "1",
      },
      {
        date: "2000",
        name: "智利",
        value: "1",
      },
      {
        date: "2000",
        name: "中国",
        value: "43",
      },
    ],
    [
      {
        date: "2004",
        name: "阿根廷",
        value: "6",
      },
      {
        date: "2004",
        name: "阿联酋",
        value: "1",
      },
      {
        date: "2004",
        name: "阿塞拜疆",
        value: "5",
      },
      {
        date: "2004",
        name: "埃及",
        value: "5",
      },
      {
        date: "2004",
        name: "埃塞俄比亚",
        value: "7",
      },
      {
        date: "2004",
        name: "爱沙尼亚",
        value: "3",
      },
      {
        date: "2004",
        name: "奥地利",
        value: "7",
      },
      {
        date: "2004",
        name: "澳大利亚",
        value: "50",
      },
      {
        date: "2004",
        name: "巴哈马",
        value: "2",
      },
      {
        date: "2004",
        name: "巴拉圭",
        value: "1",
      },
      {
        date: "2004",
        name: "白俄罗斯",
        value: "13",
      },
      {
        date: "2004",
        name: "保加利亚",
        value: "12",
      },
      {
        date: "2004",
        name: "比利时",
        value: "3",
      },
      {
        date: "2004",
        name: "波兰",
        value: "10",
      },
      {
        date: "2004",
        name: "朝鲜",
        value: "5",
      },
      {
        date: "2004",
        name: "丹麦",
        value: "8",
      },
      {
        date: "2004",
        name: "德国",
        value: "49",
      },
      {
        date: "2004",
        name: "多明尼加共和",
        value: "1",
      },
      {
        date: "2004",
        name: "俄罗斯",
        value: "90",
      },
      {
        date: "2004",
        name: "厄立特里亚",
        value: "1",
      },
      {
        date: "2004",
        name: "法国",
        value: "33",
      },
      {
        date: "2004",
        name: "芬兰",
        value: "2",
      },
      {
        date: "2004",
        name: "哥伦比亚",
        value: "2",
      },
      {
        date: "2004",
        name: "格鲁吉亚",
        value: "4",
      },
      {
        date: "2004",
        name: "古巴",
        value: "27",
      },
      {
        date: "2004",
        name: "哈萨克斯坦",
        value: "8",
      },
      {
        date: "2004",
        name: "韩国",
        value: "30",
      },
      {
        date: "2004",
        name: "荷兰",
        value: "22",
      },
      {
        date: "2004",
        name: "黑山",
        value: "2",
      },
      {
        date: "2004",
        name: "加拿大",
        value: "12",
      },
      {
        date: "2004",
        name: "捷克",
        value: "9",
      },
      {
        date: "2004",
        name: "津巴布韦",
        value: "3",
      },
      {
        date: "2004",
        name: "喀麦隆",
        value: "1",
      },
      {
        date: "2004",
        name: "克罗地亚",
        value: "5",
      },
      {
        date: "2004",
        name: "肯尼亚",
        value: "7",
      },
      {
        date: "2004",
        name: "拉脱维亚",
        value: "4",
      },
      {
        date: "2004",
        name: "立陶宛",
        value: "3",
      },
      {
        date: "2004",
        name: "罗马尼亚",
        value: "19",
      },
      {
        date: "2004",
        name: "美国",
        value: "101",
      },
      {
        date: "2004",
        name: "蒙古",
        value: "1",
      },
      {
        date: "2004",
        name: "摩洛哥",
        value: "3",
      },
      {
        date: "2004",
        name: "墨西哥",
        value: "4",
      },
      {
        date: "2004",
        name: "南非",
        value: "6",
      },
      {
        date: "2004",
        name: "尼日利亚",
        value: "2",
      },
      {
        date: "2004",
        name: "挪威",
        value: "6",
      },
      {
        date: "2004",
        name: "葡萄牙",
        value: "3",
      },
      {
        date: "2004",
        name: "日本",
        value: "37",
      },
      {
        date: "2004",
        name: "瑞典",
        value: "7",
      },
      {
        date: "2004",
        name: "塞尔维亚",
        value: "2",
      },
      {
        date: "2004",
        name: "斯洛伐克",
        value: "6",
      },
      {
        date: "2004",
        name: "斯洛文尼亚",
        value: "4",
      },
      {
        date: "2004",
        name: "瑞士",
        value: "5",
      },
      {
        date: "2004",
        name: "泰国",
        value: "8",
      },
      {
        date: "2004",
        name: "特里尼达和多",
        value: "1",
      },
      {
        date: "2004",
        name: "土耳其",
        value: "10",
      },
      {
        date: "2004",
        name: "委内瑞拉",
        value: "2",
      },
      {
        date: "2004",
        name: "乌克兰",
        value: "22",
      },
      {
        date: "2004",
        name: "乌兹别克斯坦",
        value: "5",
      },
      {
        date: "2004",
        name: "西班牙",
        value: "20",
      },
      {
        date: "2004",
        name: "希腊",
        value: "16",
      },
      {
        date: "2004",
        name: "新西兰",
        value: "5",
      },
      {
        date: "2004",
        name: "匈牙利",
        value: "17",
      },
      {
        date: "2004",
        name: "叙利亚",
        value: "1",
      },
      {
        date: "2004",
        name: "牙买加",
        value: "5",
      },
      {
        date: "2004",
        name: "伊朗",
        value: "6",
      },
      {
        date: "2004",
        name: "以色列",
        value: "2",
      },
      {
        date: "2004",
        name: "意大利",
        value: "32",
      },
      {
        date: "2004",
        name: "印度",
        value: "1",
      },
      {
        date: "2004",
        name: "印尼",
        value: "4",
      },
      {
        date: "2004",
        name: "英国",
        value: "30",
      },
      {
        date: "2004",
        name: "智利",
        value: "3",
      },
      {
        date: "2004",
        name: "中国",
        value: "69",
      },
    ],
    [
      {
        date: "2008",
        name: "阿尔及利亚",
        value: "2",
      },
      {
        date: "2008",
        name: "阿富汗",
        value: "1",
      },
      {
        date: "2008",
        name: "阿根廷",
        value: "6",
      },
      {
        date: "2008",
        name: "阿塞拜疆",
        value: "6",
      },
      {
        date: "2008",
        name: "埃及",
        value: "2",
      },
      {
        date: "2008",
        name: "埃塞俄比亚",
        value: "7",
      },
      {
        date: "2008",
        name: "爱尔兰",
        value: "3",
      },
      {
        date: "2008",
        name: "爱沙尼亚",
        value: "2",
      },
      {
        date: "2008",
        name: "奥地利",
        value: "3",
      },
      {
        date: "2008",
        name: "澳大利亚",
        value: "46",
      },
      {
        date: "2008",
        name: "巴哈马",
        value: "2",
      },
      {
        date: "2008",
        name: "巴拿马",
        value: "1",
      },
      {
        date: "2008",
        name: "白俄罗斯",
        value: "14",
      },
      {
        date: "2008",
        name: "保加利亚",
        value: "17",
      },
      {
        date: "2008",
        name: "比利时",
        value: "2",
      },
      {
        date: "2008",
        name: "冰岛",
        value: "1",
      },
      {
        date: "2008",
        name: "波兰",
        value: "11",
      },
      {
        date: "2008",
        name: "布隆迪",
        value: "5",
      },
      {
        date: "2008",
        name: "朝鲜",
        value: "6",
      },
      {
        date: "2008",
        name: "丹麦",
        value: "7",
      },
      {
        date: "2008",
        name: "德国",
        value: "41",
      },
      {
        date: "2008",
        name: "多哥",
        value: "1",
      },
      {
        date: "2008",
        name: "多明尼加共和",
        value: "2",
      },
      {
        date: "2008",
        name: "俄罗斯",
        value: "60",
      },
      {
        date: "2008",
        name: "厄瓜多尔",
        value: "1",
      },
      {
        date: "2008",
        name: "法国",
        value: "43",
      },
      {
        date: "2008",
        name: "芬兰",
        value: "4",
      },
      {
        date: "2008",
        name: "哥伦比亚",
        value: "3",
      },
      {
        date: "2008",
        name: "格鲁吉亚",
        value: "7",
      },
      {
        date: "2008",
        name: "古巴",
        value: "30",
      },
      {
        date: "2008",
        name: "哈萨克斯坦",
        value: "9",
      },
      {
        date: "2008",
        name: "韩国",
        value: "32",
      },
      {
        date: "2008",
        name: "荷兰",
        value: "16",
      },
      {
        date: "2008",
        name: "吉尔吉斯斯坦",
        value: "3",
      },
      {
        date: "2008",
        name: "加拿大",
        value: "20",
      },
      {
        date: "2008",
        name: "捷克",
        value: "7",
      },
      {
        date: "2008",
        name: "津巴布韦",
        value: "4",
      },
      {
        date: "2008",
        name: "喀麦隆",
        value: "1",
      },
      {
        date: "2008",
        name: "克罗地亚",
        value: "5",
      },
      {
        date: "2008",
        name: "肯尼亚",
        value: "16",
      },
      {
        date: "2008",
        name: "拉脱维亚",
        value: "3",
      },
      {
        date: "2008",
        name: "立陶宛",
        value: "5",
      },
      {
        date: "2008",
        name: "罗马尼亚",
        value: "9",
      },
      {
        date: "2008",
        name: "马来西亚",
        value: "1",
      },
      {
        date: "2008",
        name: "毛里塔尼亚",
        value: "1",
      },
      {
        date: "2008",
        name: "美国",
        value: "112",
      },
      {
        date: "2008",
        name: "蒙古",
        value: "4",
      },
      {
        date: "2008",
        name: "摩尔多瓦",
        value: "1",
      },
      {
        date: "2008",
        name: "摩洛哥",
        value: "2",
      },
      {
        date: "2008",
        name: "墨西哥",
        value: "4",
      },
      {
        date: "2008",
        name: "南非",
        value: "1",
      },
      {
        date: "2008",
        name: "尼日利亚",
        value: "5",
      },
      {
        date: "2008",
        name: "挪威",
        value: "9",
      },
      {
        date: "2008",
        name: "葡萄牙",
        value: "2",
      },
      {
        date: "2008",
        name: "日本",
        value: "25",
      },
      {
        date: "2008",
        name: "瑞典",
        value: "5",
      },
      {
        date: "2008",
        name: "塞尔维亚",
        value: "3",
      },
      {
        date: "2008",
        name: "斯洛伐克",
        value: "6",
      },
      {
        date: "2008",
        name: "斯洛文尼亚",
        value: "5",
      },
      {
        date: "2008",
        name: "瑞士",
        value: "7",
      },
      {
        date: "2008",
        name: "苏丹",
        value: "1",
      },
      {
        date: "2008",
        name: "塔吉克斯坦",
        value: "2",
      },
      {
        date: "2008",
        name: "泰国",
        value: "6",
      },
      {
        date: "2008",
        name: "特里尼达和多",
        value: "2",
      },
      {
        date: "2008",
        name: "突尼斯",
        value: "1",
      },
      {
        date: "2008",
        name: "土耳其",
        value: "5",
      },
      {
        date: "2008",
        name: "委内瑞拉",
        value: "1",
      },
      {
        date: "2008",
        name: "乌克兰",
        value: "22",
      },
      {
        date: "2008",
        name: "乌兹别克斯坦",
        value: "4",
      },
      {
        date: "2008",
        name: "西班牙",
        value: "19",
      },
      {
        date: "2008",
        name: "希腊",
        value: "3",
      },
      {
        date: "2008",
        name: "新加坡",
        value: "1",
      },
      {
        date: "2008",
        name: "新西兰",
        value: "9",
      },
      {
        date: "2008",
        name: "匈牙利",
        value: "10",
      },
      {
        date: "2008",
        name: "牙买加",
        value: "10",
      },
      {
        date: "2008",
        name: "亚美尼亚",
        value: "5",
      },
      {
        date: "2008",
        name: "伊朗",
        value: "2",
      },
      {
        date: "2008",
        name: "以色列",
        value: "1",
      },
      {
        date: "2008",
        name: "意大利",
        value: "27",
      },
      {
        date: "2008",
        name: "印度",
        value: "3",
      },
      {
        date: "2008",
        name: "印尼",
        value: "6",
      },
      {
        date: "2008",
        name: "英国",
        value: "51",
      },
      {
        date: "2008",
        name: "越南",
        value: "1",
      },
      {
        date: "2008",
        name: "智利",
        value: "1",
      },
      {
        date: "2008",
        name: "中国",
        value: "104",
      },
    ],
    [
      {
        date: "2012",
        name: "阿尔及利亚",
        value: "1",
      },
      {
        date: "2012",
        name: "阿富汗",
        value: "1",
      },
      {
        date: "2012",
        name: "阿根廷",
        value: "4",
      },
      {
        date: "2012",
        name: "阿塞拜疆",
        value: "10",
      },
      {
        date: "2012",
        name: "埃及",
        value: "4",
      },
      {
        date: "2012",
        name: "埃塞俄比亚",
        value: "7",
      },
      {
        date: "2012",
        name: "爱尔兰",
        value: "6",
      },
      {
        date: "2012",
        name: "爱沙尼亚",
        value: "2",
      },
      {
        date: "2012",
        name: "澳大利亚",
        value: "35",
      },
      {
        date: "2012",
        name: "巴哈马",
        value: "1",
      },
      {
        date: "2012",
        name: "巴西",
        value: "17",
      },
      {
        date: "2012",
        name: "白俄罗斯",
        value: "10",
      },
      {
        date: "2012",
        name: "保加利亚",
        value: "3",
      },
      {
        date: "2012",
        name: "比利时",
        value: "3",
      },
      {
        date: "2012",
        name: "波多黎各",
        value: "2",
      },
      {
        date: "2012",
        name: "波兰",
        value: "11",
      },
      {
        date: "2012",
        name: "博茨瓦纳",
        value: "1",
      },
      {
        date: "2012",
        name: "朝鲜",
        value: "6",
      },
      {
        date: "2012",
        name: "丹麦",
        value: "9",
      },
      {
        date: "2012",
        name: "德国",
        value: "44",
      },
      {
        date: "2012",
        name: "多明尼加共和",
        value: "2",
      },
      {
        date: "2012",
        name: "俄罗斯",
        value: "67",
      },
      {
        date: "2012",
        name: "法国",
        value: "35",
      },
      {
        date: "2012",
        name: "芬兰",
        value: "3",
      },
      {
        date: "2012",
        name: "格林纳达",
        value: "1",
      },
      {
        date: "2012",
        name: "格鲁吉亚",
        value: "6",
      },
      {
        date: "2012",
        name: "古巴",
        value: "15",
      },
      {
        date: "2012",
        name: "哈萨克斯坦",
        value: "11",
      },
      {
        date: "2012",
        name: "韩国",
        value: "30",
      },
      {
        date: "2012",
        name: "荷兰",
        value: "20",
      },
      {
        date: "2012",
        name: "黑山",
        value: "1",
      },
      {
        date: "2012",
        name: "加拿大",
        value: "18",
      },
      {
        date: "2012",
        name: "加蓬",
        value: "1",
      },
      {
        date: "2012",
        name: "捷克",
        value: "11",
      },
      {
        date: "2012",
        name: "喀麦隆",
        value: "1",
      },
      {
        date: "2012",
        name: "卡塔尔",
        value: "2",
      },
      {
        date: "2012",
        name: "科威特",
        value: "1",
      },
      {
        date: "2012",
        name: "克罗地亚",
        value: "6",
      },
      {
        date: "2012",
        name: "肯尼亚",
        value: "12",
      },
      {
        date: "2012",
        name: "拉脱维亚",
        value: "2",
      },
      {
        date: "2012",
        name: "立陶宛",
        value: "5",
      },
      {
        date: "2012",
        name: "罗马尼亚",
        value: "9",
      },
      {
        date: "2012",
        name: "马来西亚",
        value: "2",
      },
      {
        date: "2012",
        name: "美国",
        value: "104",
      },
      {
        date: "2012",
        name: "蒙古",
        value: "5",
      },
      {
        date: "2012",
        name: "摩洛哥",
        value: "1",
      },
      {
        date: "2012",
        name: "墨西哥",
        value: "8",
      },
      {
        date: "2012",
        name: "南非",
        value: "6",
      },
      {
        date: "2012",
        name: "挪威",
        value: "4",
      },
      {
        date: "2012",
        name: "葡萄牙",
        value: "1",
      },
      {
        date: "2012",
        name: "日本",
        value: "38",
      },
      {
        date: "2012",
        name: "瑞典",
        value: "8",
      },
      {
        date: "2012",
        name: "塞尔维亚",
        value: "4",
      },
      {
        date: "2012",
        name: "塞浦路斯",
        value: "1",
      },
      {
        date: "2012",
        name: "沙特阿拉伯",
        value: "1",
      },
      {
        date: "2012",
        name: "斯洛伐克",
        value: "4",
      },
      {
        date: "2012",
        name: "斯洛文尼亚",
        value: "4",
      },
      {
        date: "2012",
        name: "瑞士",
        value: "4",
      },
      {
        date: "2012",
        name: "塔吉克斯坦",
        value: "1",
      },
      {
        date: "2012",
        name: "泰国",
        value: "4",
      },
      {
        date: "2012",
        name: "特里尼达和多",
        value: "4",
      },
      {
        date: "2012",
        name: "突尼斯",
        value: "3",
      },
      {
        date: "2012",
        name: "土耳其",
        value: "3",
      },
      {
        date: "2012",
        name: "危地马拉",
        value: "1",
      },
      {
        date: "2012",
        name: "委内瑞拉",
        value: "1",
      },
      {
        date: "2012",
        name: "乌干达",
        value: "1",
      },
      {
        date: "2012",
        name: "乌克兰",
        value: "19",
      },
      {
        date: "2012",
        name: "乌兹别克斯坦",
        value: "2",
      },
      {
        date: "2012",
        name: "西班牙",
        value: "18",
      },
      {
        date: "2012",
        name: "希腊",
        value: "2",
      },
      {
        date: "2012",
        name: "新加坡",
        value: "2",
      },
      {
        date: "2012",
        name: "新西兰",
        value: "13",
      },
      {
        date: "2012",
        name: "匈牙利",
        value: "18",
      },
      {
        date: "2012",
        name: "牙买加",
        value: "12",
      },
      {
        date: "2012",
        name: "亚美尼亚",
        value: "2",
      },
      {
        date: "2012",
        name: "伊朗",
        value: "13",
      },
      {
        date: "2012",
        name: "意大利",
        value: "28",
      },
      {
        date: "2012",
        name: "印度",
        value: "6",
      },
      {
        date: "2012",
        name: "印尼",
        value: "3",
      },
      {
        date: "2012",
        name: "英国",
        value: "65",
      },
      {
        date: "2012",
        name: "中国",
        value: "94",
      },
    ],
    [
      {
        date: "2016",
        name: "阿尔及利亚",
        value: "2",
      },
      {
        date: "2016",
        name: "阿根廷",
        value: "4",
      },
      {
        date: "2016",
        name: "阿联酋",
        value: "1",
      },
      {
        date: "2016",
        name: "阿塞拜疆",
        value: "18",
      },
      {
        date: "2016",
        name: "埃及",
        value: "3",
      },
      {
        date: "2016",
        name: "埃塞俄比亚",
        value: "8",
      },
      {
        date: "2016",
        name: "爱尔兰",
        value: "2",
      },
      {
        date: "2016",
        name: "爱沙尼亚",
        value: "1",
      },
      {
        date: "2016",
        name: "奥地利",
        value: "1",
      },
      {
        date: "2016",
        name: "澳大利亚",
        value: "29",
      },
      {
        date: "2016",
        name: "巴哈马",
        value: "2",
      },
      {
        date: "2016",
        name: "巴西",
        value: "19",
      },
      {
        date: "2016",
        name: "白俄罗斯",
        value: "9",
      },
      {
        date: "2016",
        name: "保加利亚",
        value: "3",
      },
      {
        date: "2016",
        name: "比利时",
        value: "6",
      },
      {
        date: "2016",
        name: "波多黎各",
        value: "1",
      },
      {
        date: "2016",
        name: "波兰",
        value: "11",
      },
      {
        date: "2016",
        name: "布隆迪",
        value: "1",
      },
      {
        date: "2016",
        name: "朝鲜",
        value: "7",
      },
      {
        date: "2016",
        name: "丹麦",
        value: "15",
      },
      {
        date: "2016",
        name: "德国",
        value: "42",
      },
      {
        date: "2016",
        name: "多明尼加共和",
        value: "1",
      },
      {
        date: "2016",
        name: "俄罗斯",
        value: "56",
      },
      {
        date: "2016",
        name: "法国",
        value: "42",
      },
      {
        date: "2016",
        name: "菲律宾",
        value: "1",
      },
      {
        date: "2016",
        name: "斐济",
        value: "1",
      },
      {
        date: "2016",
        name: "芬兰",
        value: "1",
      },
      {
        date: "2016",
        name: "格林纳达",
        value: "1",
      },
      {
        date: "2016",
        name: "格鲁吉亚",
        value: "7",
      },
      {
        date: "2016",
        name: "古巴",
        value: "11",
      },
      {
        date: "2016",
        name: "哈萨克斯坦",
        value: "18",
      },
      {
        date: "2016",
        name: "韩国",
        value: "21",
      },
      {
        date: "2016",
        name: "荷兰",
        value: "19",
      },
      {
        date: "2016",
        name: "加拿大",
        value: "22",
      },
      {
        date: "2016",
        name: "捷克",
        value: "10",
      },
      {
        date: "2016",
        name: "卡塔尔",
        value: "1",
      },
      {
        date: "2016",
        name: "科索沃",
        value: "1",
      },
      {
        date: "2016",
        name: "科特迪瓦",
        value: "2",
      },
      {
        date: "2016",
        name: "克罗地亚",
        value: "10",
      },
      {
        date: "2016",
        name: "肯尼亚",
        value: "13",
      },
      {
        date: "2016",
        name: "立陶宛",
        value: "4",
      },
      {
        date: "2016",
        name: "罗马尼亚",
        value: "4",
      },
      {
        date: "2016",
        name: "马来西亚",
        value: "5",
      },
      {
        date: "2016",
        name: "美国",
        value: "121",
      },
      {
        date: "2016",
        name: "蒙古",
        value: "2",
      },
      {
        date: "2016",
        name: "摩洛哥",
        value: "1",
      },
      {
        date: "2016",
        name: "墨西哥",
        value: "5",
      },
      {
        date: "2016",
        name: "南非",
        value: "10",
      },
      {
        date: "2016",
        name: "尼日尔",
        value: "1",
      },
      {
        date: "2016",
        name: "尼日利亚",
        value: "1",
      },
      {
        date: "2016",
        name: "挪威",
        value: "4",
      },
      {
        date: "2016",
        name: "葡萄牙",
        value: "1",
      },
      {
        date: "2016",
        name: "日本",
        value: "41",
      },
      {
        date: "2016",
        name: "瑞典",
        value: "11",
      },
      {
        date: "2016",
        name: "塞尔维亚",
        value: "8",
      },
      {
        date: "2016",
        name: "斯洛伐克",
        value: "4",
      },
      {
        date: "2016",
        name: "斯洛文尼亚",
        value: "4",
      },
      {
        date: "2016",
        name: "瑞士",
        value: "7",
      },
      {
        date: "2016",
        name: "塔吉克斯坦",
        value: "1",
      },
      {
        date: "2016",
        name: "泰国",
        value: "6",
      },
      {
        date: "2016",
        name: "特里尼达和多",
        value: "1",
      },
      {
        date: "2016",
        name: "突尼斯",
        value: "3",
      },
      {
        date: "2016",
        name: "土耳其",
        value: "8",
      },
      {
        date: "2016",
        name: "委内瑞拉",
        value: "3",
      },
      {
        date: "2016",
        name: "乌克兰",
        value: "11",
      },
      {
        date: "2016",
        name: "乌兹别克斯坦",
        value: "13",
      },
      {
        date: "2016",
        name: "西班牙",
        value: "17",
      },
      {
        date: "2016",
        name: "希腊",
        value: "6",
      },
      {
        date: "2016",
        name: "新加坡",
        value: "1",
      },
      {
        date: "2016",
        name: "新西兰",
        value: "18",
      },
      {
        date: "2016",
        name: "匈牙利",
        value: "15",
      },
      {
        date: "2016",
        name: "牙买加",
        value: "11",
      },
      {
        date: "2016",
        name: "亚美尼亚",
        value: "4",
      },
      {
        date: "2016",
        name: "伊朗",
        value: "8",
      },
      {
        date: "2016",
        name: "以色列",
        value: "2",
      },
      {
        date: "2016",
        name: "意大利",
        value: "28",
      },
      {
        date: "2016",
        name: "印度",
        value: "2",
      },
      {
        date: "2016",
        name: "印尼",
        value: "3",
      },
      {
        date: "2016",
        name: "英国",
        value: "67",
      },
      {
        date: "2016",
        name: "约旦",
        value: "1",
      },
      {
        date: "2016",
        name: "越南",
        value: "2",
      },
      {
        date: "2016",
        name: "中国",
        value: "72",
      },
    ],
  ];

  const nameMap = {
    Afghanistan: "阿富汗",
    Angola: "安哥拉",
    Albania: "阿尔巴尼亚",
    "United Arab Emirates": "阿联酋",
    Argentina: "阿根廷",
    Armenia: "亚美尼亚",
    "French Southern and Antarctic Lands": "法属南半球和南极领地",
    Australia: "澳大利亚",
    Austria: "奥地利",
    Azerbaijan: "阿塞拜疆",
    Burundi: "布隆迪",
    Bahrain: "巴林",
    Barbados: "巴巴多斯",
    Belgium: "比利时",
    Benin: "贝宁",
    "Burkina Faso": "布基纳法索",
    Bangladesh: "孟加拉国",
    Bulgaria: "保加利亚",
    Bahamas: "巴哈马",
    "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
    Belarus: "白俄罗斯",
    Belize: "伯利兹",
    Bermuda: "百慕大",
    Bolivia: "玻利维亚",
    Brazil: "巴西",
    Brunei: "文莱",
    Bhutan: "不丹",
    Botswana: "博茨瓦纳",
    "Central African Republic": "中非共和国",
    Canada: "加拿大",
    Switzerland: "斯威士兰",
    Chile: "智利",
    China: "中国",
    "Côte d'Ivoire": "Côte d'Ivoire",
    Cameroon: "喀麦隆",
    "Democratic Republic of the Congo": "刚果民主共和国",
    "Republic of the Congo": "刚果共和国",
    Colombia: "哥伦比亚",
    "Costa Rica": "哥斯达黎加",
    Cuba: "古巴",
    "Northern Cyprus": "北塞浦路斯",
    Cyprus: "塞浦路斯",
    "Czech Rep.": "捷克",
    Germany: "德国",
    Djibouti: "吉布提",
    Denmark: "丹麦",
    "Dominican Republic": "多明尼加共和国",
    Algeria: "阿尔及利亚",
    Ecuador: "厄瓜多尔",
    Egypt: "埃及",
    Eritrea: "厄立特里亚",
    Spain: "西班牙",
    Estonia: "爱沙尼亚",
    Ethiopia: "埃塞俄比亚",
    Finland: "芬兰",
    Fiji: "斐",
    "Falkland Islands": "福克兰群岛",
    France: "法国",
    Gabon: "加蓬",
    "United Kingdom": "英国",
    Georgia: "格鲁吉亚",
    Ghana: "加纳",
    Guinea: "几内亚",
    Gambia: "冈比亚",
    "Guinea Bissau": "几内亚比绍",
    "Equatorial Guinea": "赤道几内亚",
    Greece: "希腊",
    Grenada: "格林纳达",
    Greenland: "格陵兰",
    Guatemala: "危地马拉",
    "French Guiana": "法属圭亚那",
    Guyana: "圭亚那",
    Honduras: "洪都拉斯",
    Croatia: "克罗地亚",
    Haiti: "海地",
    Hungary: "匈牙利",
    Indonesia: "印尼",
    India: "印度",
    Ireland: "爱尔兰",
    Iran: "伊朗",
    Iraq: "伊拉克",
    Iceland: "冰岛",
    Israel: "以色列",
    Italy: "意大利",
    Jamaica: "牙买加",
    Jordan: "约旦",
    Japan: "日本",
    Kazakhstan: "哈萨克斯坦",
    Kenya: "肯尼亚",
    Kyrgyzstan: "吉尔吉斯斯坦",
    Cambodia: "柬埔寨",
    "South Korea": "韩国",
    Kosovo: "科索沃",
    Kuwait: "科威特",
    Laos: "老挝",
    Lebanon: "黎巴嫩",
    Liberia: "利比里亚",
    Libya: "利比亚",
    "Sri Lanka": "斯里兰卡",
    Lesotho: "莱索托",
    Lithuania: "立陶宛",
    Luxembourg: "卢森堡",
    Latvia: "拉脱维亚",
    Morocco: "摩洛哥",
    Moldova: "摩尔多瓦",
    Madagascar: "马达加斯加",
    Mexico: "墨西哥",
    Macedonia: "马其顿",
    Mali: "马里",
    Myanmar: "缅甸",
    Montenegro: "黑山",
    Mongolia: "蒙古",
    Mozambique: "莫桑比克",
    Mauritania: "毛里塔尼亚",
    Malawi: "马拉维",
    Malaysia: "马来西亚",
    Namibia: "纳米比亚",
    "New Caledonia": "新喀里多尼亚",
    Niger: "尼日尔",
    Nigeria: "尼日利亚",
    Nicaragua: "尼加拉瓜",
    Netherlands: "荷兰",
    Norway: "挪威",
    Nepal: "尼泊尔",
    "New Zealand": "新西兰",
    Oman: "阿曼",
    Pakistan: "巴基斯坦",
    Panama: "巴拿马",
    Peru: "秘鲁",
    Philippines: "菲律宾",
    "Papua New Guinea": "巴布亚新几内亚",
    Poland: "波兰",
    "Puerto Rico": "波多黎各",
    "North Korea": "北朝鲜",
    Portugal: "葡萄牙",
    Paraguay: "巴拉圭",
    Qatar: "卡塔尔",
    Romania: "罗马尼亚",
    Russia: "俄罗斯",
    Rwanda: "卢旺达",
    "Western Sahara": "西撒哈拉",
    "Saudi Arabia": "沙特阿拉伯",
    Sudan: "苏丹",
    "South Sudan": "南苏丹",
    Senegal: "塞内加尔",
    "Solomon Islands": "所罗门群岛",
    "Sierra Leone": "塞拉利昂",
    "El Salvador": "萨尔瓦多",
    Somaliland: "索马里兰",
    Somalia: "索马里",
    Serbia: "塞尔维亚",
    Suriname: "苏里南",
    Slovakia: "斯洛伐克",
    Slovenia: "斯洛文尼亚",
    Sweden: "瑞典",
    Swaziland: "斯威士兰",
    Syria: "叙利亚",
    Chad: "乍得",
    Togo: "多哥",
    Thailand: "泰国",
    Tajikistan: "塔吉克斯坦",
    Turkmenistan: "土库曼斯坦",
    "East Timor": "东帝汶",
    "Trinidad and Tobago": "特里尼达和多巴哥",
    Tunisia: "突尼斯",
    Turkey: "土耳其",
    "United Republic of Tanzania": "坦桑尼亚联合共和国",
    Uganda: "乌干达",
    Ukraine: "乌克兰",
    Uruguay: "乌拉圭",
    "United States": "美国",
    Uzbekistan: "乌兹别克斯坦",
    Venezuela: "委内瑞拉",
    Vietnam: "越南",
    Vanuatu: "瓦努阿图",
    "West Bank": "西岸",
    Yemen: "也门",
    "South Africa": "南非",
    Zambia: "赞比亚",
    Zimbabwe: "津巴布韦",
  };

  const option = {
    timeline: {
      axisType: "category",
      data: [
        "2011",
        "2011",
        "2011",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
      ],
      autoPlay: true,
      playInterval: 1000,
      left: "10%",
      right: "10%",
    },
    baseOption: {
      visualMap: {
        max: 174, //1984USAmax
        min: 0,
        calculable: true,
        inRange: {
          color: [
            "#313695",
            "#4575b4",
            "#74add1",
            "#abd9e9",
            "#e0f3f8",
            "#ffffbf",
            "#fee090",
            "#fdae61",
            "#f46d43",
            "#d73027",
            "#a50026",
          ],
        },
      },
      tooltip: {},
      series: [
        {
          type: "map",
          name: "总奖牌数",
          map: "world",
          roam: true,
          nameMap: nameMap,
        },
      ],
    },
    options: [
      {
        series: {
          data: data[0],
        },
      },
      {
        series: {
          data: data[1],
        },
      },
      {
        series: {
          data: data[2],
        },
      },
      {
        series: {
          data: data[3],
        },
      },
      {
        series: {
          data: data[4],
        },
      },
      {
        series: {
          data: data[5],
        },
      },
      {
        series: {
          data: data[6],
        },
      },
      {
        series: {
          data: data[7],
        },
      },
      {
        series: {
          data: data[8],
        },
      },
      {
        series: {
          data: data[9],
        },
      },
      {
        series: {
          data: data[10],
        },
      },
      {
        series: {
          data: data[11],
        },
      },
      {
        series: {
          data: data[12],
        },
      },
      {
        series: {
          data: data[13],
        },
      },
      {
        series: {
          data: data[14],
        },
      },
    ],
  };
  myChart.setOption(option);
  console.log(option);
  console.log(data);
  console.log(nameMap);
}
</script>

<style scoped>
#map {
  height: 100%;
}
</style>
