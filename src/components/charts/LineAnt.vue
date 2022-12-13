<template>
  <div id="LineAnt"></div>
</template>
<script setup>
import { Line } from "@antv/g2plot";
import { onMounted } from "vue-demi";
import { getChartsData } from "../../api/charts";
// fetch("http://127.0.0.1:4523/mock/1014620/table")
//   .then((res) => {
//     res.json();
//   })
//   .then((data) => {
//     const line = new Line("LineAnt", {
//       data,
//       padding: "auto",
//       xField: "Date",
//       yField: "scales",
//       xAxis: {
//         tickCount: 5,
//       },
//       slider: {
//         start: 0,
//         end: 1,
//       },
//     });

//     line.render();
//   });
onMounted(() => {
  initLine();
});
const initLine = () => {
  getChartsData().then((data) => {
    console.log(data);
    const line = new Line("LineAnt", {
      data,
      padding: "auto",
      xField: "Date",
      yField: "scales",
      xAxis: {
        tickCount: 5,
      },
      slider: {
        start: 0,
        end: 1,
      },
    });
  });
};
</script>
<style lang="scss"></style>
