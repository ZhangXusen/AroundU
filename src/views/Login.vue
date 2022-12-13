<template>
    <div class="container">
        <!-- 登录盒子 表单容器-->
        <div class="login-box">
            <div class="signin-signup">
                <el-form :rules="formRules" :model="form" ref="form1" class="loginForm">
                    <el-form-item label="账号" prop="name">
                          <el-input v-model="form.name" placeholder="请输入账号"/>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                          <el-input v-model="form.password" placeholder="请输入密码" type="password"/>
                    </el-form-item>
                    <el-form-item class="btn-box">
                        <el-button type="primary" @click="onLogin"  class="btn-submit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script >
import { reactive } from "vue" 
import router from "../router"


export default{
    name:'Login',
    setup(){
    const form=reactive({
            name:'',
            password:'',
        })
        // 校验规则
    const formRules=reactive({
            name:[{ 
                required: true,
                message: '账号不能为空！',
                trigger:'blur'
            },
             {
                min: 3,
                max: 16,
                message: '长度为3-16',
                trigger: 'blur',
            },
            ],
            password:[{ 
                required: true,
                message: '密码不能为空！',
                trigger:'blur',
            },
             {
                min: 6,
                max: 16,
                message: '密码长度为6-16',
                trigger: 'blur',
            },
            ],
        })
    function onLogin(){
        router.push('/index')
    }

    // 触发登录方法
   
    return {form,formRules,onLogin};
    }
}



</script>

<style scoped>

.container{
    position: relative;
    height: 100%;
    width: 100%;
    background: url(../assets/images/bg-login.png) no-repeat center;
}
.login-box{
    position: absolute;
    background-color: #fff;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
}

.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  box-shadow: 0px 5px 10px #cccc;
    border-radius: 5px;
}

.btn-box {
    padding-left: 20%;
}
.btn-submit{
    width: 100%;
}



</style>