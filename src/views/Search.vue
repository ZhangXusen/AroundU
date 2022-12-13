<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="" />
    </div>
    <div class="ipt">
      <div class="input">
        <el-autocomplete
          v-model="inputValue"
          :fetch-suggestions="querySearch"
          class="inline-input"
          placeholder="输入内容"
          clearable
          size="large"
          autofocus="true"
          :prefix-icon="Search"
          :trigger-on-focus="false"
          @select="handleSubmit"
          @keyup.enter="handleSubmit"
        />
        <el-button
          type="primary"
          color="#626aef"
          size="large"
          @click="searchAssets"
          >搜 索</el-button
        >
      </div>
    </div>
    <h3>热门搜索:</h3>
    <div class="advises">
      <div class="advise-list" v-for="(item, index) in list" :key="index">
        <a  @click.prevent="search(item.title)">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import router from "../router";
import { Search } from "@element-plus/icons-vue";
let inputValue=ref(null);
const list = reactive([
  { title: "1111111", a: "111" },
  { title: "111111111", a: "111" },
  { title: "1", a: "111" },
  { title: "1", a: "111" },
  { title: "1111111", a: "111" },
  { title: "1", a: "111" },
  { title: "1", a: "111" },
  { title: "1", a: "111" },
  { title: "11111111111111111111111", a: "111" },
  { title: "1", a: "111" },
  { title: "1", a: "111" },
  { title: "1", a: "111" },
]);
function search(title){
  inputValue.value=title;
}

function searchAssets(){
  console.log(inputValue.value);
  router.push('/searchresult');
}
</script>

<style scoped>
.container {
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  height: 100%;
  width: 100%;
}
h3{ 
  float: left;
  color: #7986cb;
  font-weight: bold;
  text-align: left !important;
  margin-left:80px ;
}
.logo {
  width: 100%;

  margin: 30px auto;
}
.logo img {
  width: 200px;
  height: 200px;
}
.ipt {
  width: 100%;
  margin-bottom: 100px;
}
.advises {
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.advise-list {
  margin-top: 10px;
  flex: 0 0 25%;
}
.advise-list a {
  font-size: 16px;
  color: #7986cb;
  text-decoration: none;
}
.advise-list a:hover {
  text-decoration: underline;
}
:deep(.el-input__inner) {
  padding-right: 150px !important;
}
</style>
