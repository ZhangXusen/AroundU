<template>
  <div class="container">
    <el-form
     
      :rules="formRules"
      label-width="60px"
      class="my-sign"
      size="large"
      ref="loginformRef"
      :model="form"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" autocomplete="off"  clearable/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          autocomplete="off"
          show-password
          clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="submit-btn"
          @click="handleLogin"
          :loading="loading"
          >登录</el-button
        >
      </el-form-item>

      <div class="forgetPas">
        <p><el-link :underline="false" type="primary" @click="forgetPas">忘记密码</el-link></p>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import router from "../router"
import { useStore } from 'vuex'

// 表单数据源
const form = reactive({
  username: "zxs@qq.com",
  password: "1111111",
});
// 表单校验规则
const formRules = reactive({
  username: [
    {
      required: true,
      message: "账号不能为空！",
      trigger: "blur",
    },
    {
      min: 3,
      max: 16,
      message: "长度为3-16",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空！",
      trigger: "blur",
    },
    {
      min: 6,
      max: 16,
      message: "密码长度为6-16",
      trigger: "blur",
    },
  ],
});
//忘记密码
function forgetPas(){
  router.push('/forget')
}
// 登录
const loginformRef = ref(null);
const loading = ref(false);
const store = useStore()
const handleLogin = () => {
  // 1.触发表单校验
  // console.log(loginformRef.value);
  loginformRef.value.validate((valid) => {
    if (!valid) return;
    loading.value = true;
    console.log(store);
    store
      .dispatch('user/login', form)
      .then(() => {
        loading.value = false;
      })
      .catch(err => {
        console.log(err);
        loading.value = false;
      });
  });
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../assets/images/bg-login.png) no-repeat center;
  background-size: cover;
}
.el-form {
  width: 30vw;
  background-color: #fff;
  padding: 20px 20px 20px 20px;
  box-shadow: 0px 5px 10px #cccc;
  border-radius: 5px;
}
.submit-btn {
  width: 100%;
}
.forgetPas {
  float: right;
}
</style>
