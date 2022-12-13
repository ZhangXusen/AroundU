<template>
  <div class="container">
    <el-form
      status-icon="true"
      label-width="120px"
      class="my-sign"
      size="large"
    >
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
          prop="password"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="submit-btn" @click="submitForm('form')"
          >重置密码</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const form = reactive({
  password: null,
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
