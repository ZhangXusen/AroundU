<template>
  <header>
    <div class="head-left">
      <el-button type="primary" :icon="Edit"
        ><svg
          class="icon"
          width="15"
          height="15"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-042ca774=""
        >
          <path
            fill="currentColor"
            d="M160 448a32 32 0 01-32-32V160.064a32 32 0 0132-32h256a32 32 0 0132 32V416a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V160.064a32 32 0 0132-32h255.936a32 32 0 0132 32V416a32 32 0 01-32 32H608zM160 896a32 32 0 01-32-32V608a32 32 0 0132-32h256a32 32 0 0132 32v256a32 32 0 01-32 32H160zm448 0a32 32 0 01-32-32V608a32 32 0 0132-32h255.936a32 32 0 0132 32v256a32 32 0 01-32 32H608z"
          ></path></svg
      ></el-button>
      <h3>首页</h3>
    </div>
    <div class="head-right">
      <el-dropdown trigger="click">
        <span>
          <el-badge is-dot class="item">
            <svg
              class="icon"
              width="30"
              height="30"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              data-v-042ca774=""
            >
              <path
                fill="currentColor"
                d="M512 64a64 64 0 0164 64v64H448v-64a64 64 0 0164-64z"
              ></path>
              <path
                fill="currentColor"
                d="M256 768h512V448a256 256 0 10-512 0v320zm256-640a320 320 0 01320 320v384H192V448a320 320 0 01320-320z"
              ></path>
              <path
                fill="currentColor"
                d="M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zM448 896h128a64 64 0 01-128 0z"
              ></path></svg
          ></el-badge>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="CircleCheck"></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown>
        <el-avatar src="../assets/images/-9a74f6b1fa60eab.jpg"></el-avatar>
        <h4>admin</h4>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  display: flex;
  align-items: center;
}
.head-left .el-button {
  margin-right: 20px;
}
.head-right {
  display: flex;
  align-items: center;
}
.head-right .el-dropdown{
  margin-right: 10px;
}
</style>
