<template>
  <div class="login">
    <span class="icon-logo">&#xe604;</span>
    <p class="logo-name">LOGO</p>
    <van-form class="login-form" @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="账号"
        label-width="50px"
        class="input-box"
        type="number"
        autocomplete="off"
        :rules="[{ required: true}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        label-width="50px"
        class="input-box"
        :rules="[{ required: true}]"
      />
      <div>
        <van-button class="login-btn" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="login-more">
      <router-link
        :to="{name:'Forgot'}"
        class="more-text">忘记密码</router-link>
      <router-link
        :to="{name:'Register'}"
        class="more-text">去注册</router-link>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
Toast.setDefaultOptions({ duration: 500 });
export default {
  name: "Login",
  data() {
    return {
      inputBorder: false,
      username: null,
      password: null
    };
  },
  methods: {
    onSubmit(values) {
      if (values.username && values.password) {
        Toast.loading({
          message: "加载中...",
          forbidClick: true
        })
        setTimeout(()=>{
          Toast.success('登录成功');
          setTimeout(()=>{
            this.$router.push({name:'Home'})
          },500)
        },1000)
      } else {
        let msg = values.username ? values.password ? null :'请输入密码' : '请输入账号'
        Toast(msg);
      }
    }
  }
};
</script>

<style scoprd>
.icon-logo {
  font-family: "iconfont" !important;
  font-size: 80px;
  font-style: normal;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;
  box-sizing: border-box;
  background-image: linear-gradient(38deg, #44bba3, #3cc4c4, #1ae6bd);
}

.logo-name {
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  color: #fff;
}

.login-form {
  margin-top: 20px;
  width: 80%;
}

.input-box {
  color: #fff;
  background-color: transparent;
}

.input-box input {
  color: #fff;
}

.login-btn {
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  background-image: linear-gradient(45deg, #4d2bd5, #563faf);
  margin-top: 20px;
}

.login-more {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 15px;
}

.more-text {
  font-size: 12px;
  color: #fff;
}
</style>