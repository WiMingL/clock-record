<template>
  <div class="register">
    <p class="register-title">注册</p>
    <div class="register-form">
      <van-field
        label-width="70px"
        v-model="phone"
        type="tel"
        label="手机号" />
      <van-field
        label-width="70px"
        v-model="password"
        type="password"
        label="密码" />
      <van-field
        label-width="70px"
        v-model="vertifyCode"
        center
        clearable
        label="验证码"
        placeholder="请输入验证码">
        <template #button>
          <van-button size="small" type="primary" @click="sendMsg">发送验证码</van-button>
        </template>
      </van-field>
      <van-button style="margin: 20px 0 10px 0;" class="register-btn" type="info" @click="register">确定</van-button>
      <div class="register-more">
        <router-link class="more-text" :to="{name:'Forgot'}">忘记密码</router-link>
        <router-link class="more-text" :to="{name:'Login'}">已有账号</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "Register",
  data(){
    return{
      vertifyCode: null,
      phone: null,
      password: null
    }
  },
  methods:{
    sendMsg(){
      Toast.loading({
          message: "加载中...",
          forbidClick: true
        })
        setTimeout(()=>{
          Toast.success('发送成功');
        },1000)
    },
    register(){
      if(this.vertifyCode&&this.phone&&this.password){
        Toast.loading({
          message: "加载中...",
          forbidClick: true
        })
        setTimeout(()=>{
          Toast.success('注册成功');
          setTimeout(()=>{
            this.$router.push({name:'Login'})
          },500)
        },1000)
      }else{
        let msg = this.phone ?  this.password ? this.vertifyCode ? null : '请输入验证码' : '请输入密码' : '请输入手机号'
        Toast(msg)
      }
    }
  }
};
</script>

<style scoped>
  .register{
    width: 100%;
    height: 100%;
    background-color: fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    box-sizing: border-box;
  }
  .register-title{
    font-size: 24px;
    color: #333;
    
  }
  .register-form{
    width: 80%;
    margin-top: 20px;
  }
  .input-label{
    font-size: 14px;
    color: #444;
    width: 60px;
  }
  .register-more{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .register-btn {
    border: none;
    width: 100%;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
  }
  .more-text{
    color: #555;
    font-size: 12px;
  }
</style>