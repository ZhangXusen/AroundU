<template>
  <div class="header">
    <div class="logo"><img src="../../assets/images/logo.png" alt="" /></div>
    <div class="menu">
      <h1><a href="">首页</a></h1>
      <h1><a href="">分析</a></h1>
    </div>
    <div class="avatar">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            :size="60"
            src="https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/k7/k7jd2q.jpg"
            @error="errorHandler"
          />
          <h3>小国际</h3>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>账号设置</el-dropdown-item>
            <el-dropdown-item divided @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const errorHandler = () => true;
const store = useStore();
const Router = useRouter();
const logout = () => {
  store.commit('user/setUserInfo',{});
  router.push("/login");
};
</script>
<style lang="scss" scoped>
$bgc: #f5f7f9;
$tit-size: 16px;
$bar-c: #e6e6e6;
$font-c: #047df6;
$hover-c: #409eff;
$border-r: 5px;
.header {
  max-width: 1200px;
  min-width: 480px;
  background-color: $bgc;
  height: 100px;
  margin: 0 auto;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  .logo {
    float: left;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100px;
    }
    &:hover {
      background-color: #c0c4cc;
    }
  }
  .menu {
    float: left;
    height: 100%;
    margin-left: 20px;
    // &:hover {
    // box-shadow: inset 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    // }
    h1 {
      display: flex;
      align-items: center;
      font-size: 24px;
      float: left;
      height: 100%;
      margin-left: 10px;
      &:hover {
        background-color: #c0c4cc;
      }
      a {
        color: $font-c;
        vertical-align: middle;
        margin: 0 auto;
        text-decoration: none;
        &:hover {
          color: $hover-c;
        }
      }
    }
  }
  .avatar {
    float: right;
    margin-right: 20px;
    height: 100%;

    &:hover h3 {
      color: $hover-c;
    }
    span {
      margin-top: 10px;
    }
    h3 {
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
