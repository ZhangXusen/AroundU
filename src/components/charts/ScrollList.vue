<template>
  <dv-scroll-board
    :config="list"
    style="width: 100%; height: 100%"
    hoverPause
    carousel='single'
    waitTime="100"
  />
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { GetPaperList } from "../../api/search";
const data=reactive(null);

    const list = reactive({
      list: {
        header: ["author", "title", "time"],
        data: data,
        index: true,
        columnWidth: [50],
        align: ["center"],
        oddRowBGC: "#1a1835",
        evenRowBGC: "#1a1835",
      },
    });
</script>

<style scoped></style>
