<script setup>
import {ref} from 'vue'
import { login } from '@/api/user'
import { useRouter } from 'vue-router';
const router = useRouter()
const loginRules = ref({
   username: [
      { required: true, trigger: "blur", message: "请输入您的账号" }
   ],
   password: [
      { required: true, trigger: "blur", message: "请输入您的密码" }
   ],
})
const loginForm = ref({
   username: "",
   password: "",
   rememberMe: false,
})
const wordAccount="Account"
const wordPassword="Password"
const accountIndex = ref(false)
const passwordIndex = ref(false)

//动态添加类
const accountHandler = ()=>{
   if(!loginForm.value.username) accountIndex.value = !accountIndex.value
}
const passwordHandler = ()=>{
   if(!loginForm.value.password) passwordIndex.value = !passwordIndex.value
}
const addaccountClass = ()=>{
   accountIndex.value = true
}
const addpasswordClass = ()=>{
   passwordIndex.value = true
}

//TODO 登录跳转

const handleLogin =async ()=>{
    const res = await login(loginForm.value.username,loginForm.value.password)
    if(res.code === 200){
      router.push('/main')
    }
    console.log(res);
}
</script>

<template>
   <div class="login">
    <el-form  :model="loginForm" :rules="loginRules" class="login-form">
      <h2 class="title">扶贫信息管理系统</h2>
      <el-form-item prop="username" class="item-form">
        <el-input
          v-model="loginForm.username"
          type="text"
          autoComplete="off"
          prefix-icon="user"
          @blur="accountHandler" 
          @focus="addaccountClass"
          >
        </el-input>
        
        <label :class="{active : accountIndex === true}">
          <span v-for="(letter,index) in wordAccount" :style="`transition-delay: ${index*30}ms`" :key="index">{{letter}}</span>
        </label>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          autoComplete="new-password"
          prefix-icon="lock"
          @keyup.enter.native="handleLogin"
          @focus="addpasswordClass"
          @blur="passwordHandler"
        >
       
        </el-input>
        <label :class="{active : passwordIndex === true}">
          <span v-for="(letter,index) in wordPassword" :style="`transition-delay: ${index*30}ms`" :key="index">{{letter}}</span>
        </label>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2023 tangweifeng All Rights Reserved.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/images/login-background.jpg");
  background-size: cover;
  overflow: hidden;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

h2{
  color: black;
  font-weight: bold;

}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  position: relative;
  .el-input {
    height: 38px;
    input {
      height: 38px;
      /* border: 0; */
      border-bottom: 2px gray solid;
      background-color: transparent;
    }
    +label{
      position: absolute;
      top: 0px;
      left: 30px;
      pointer-events: none;
      span{
          display: inline-block;
          font-size: 14px;
          min-width: 3px;
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          color: #777777;
      }
    }
    +label.active span{
        color:lightblue;
        transform: translateY(-15px);
        opacity: 0;
    }

  }
  }


  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}

</style>
