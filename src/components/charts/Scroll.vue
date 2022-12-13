<template>
  <div id="scroll">
    <dv-scroll-ranking-board
      :rowNum="12"
      :config="config"
      style="width: 100%; height: 100%"
    />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref,isReactive, nextTick } from "vue";
import { GetWordList } from "../../api/search";
let config = reactive({
  data: [
   {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
  ],
  unit: '次',
})
console.log(isReactive(config.data));
const PaperList = () => {
  GetWordList().then((res) => {
    const {config}=config;
    console.log(res);
    res.forEach(element => {
      config.data.push(element);
    });
    config={...config};
    console.log(config.data);
  });
};
PaperList();


// fetch("http://127.0.0.1:4523/mock/1014620/scroll")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.data);

//   });
// console.log(data.value);

// [
//     {
//       name: '周口',
//       value: 55
//     },
//     {
//       name: '南阳',
//       value: 120
//     },
//     {
//       name: '西峡',
//       value: 78
//     },
//     {
//       name: '驻马店',
//       value: 66
//     },
//     {
//       name: '新乡',
//       value: 80
//     },
//     {
//       name: '信阳',
//       value: 45
//     },
//     {
//       name: '漯河',
//       value: 29
//     }
//   ]
</script>

<style>
#scroll {
  height: 100%;
  width: 100%;
}
</style>
