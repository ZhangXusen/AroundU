<template>
  <div class="container">
    <el-form
      status-icon="true"
      label-width="120px"
      class="my-sign"
      size="large"
    >
      <el-form-item label="手机号">
        <el-input v-model="form.username" autocomplete="off" prop="username" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="submit-btn" @click="submitForm('form')"
          >找回账号</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const form = reactive({
  username: null,
});
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../assets/images/bg-login.png) no-repeat center;
}
.el-form {
  width: 30vw;
}
.submit-btn {
  width: 100%;
}
</style>
