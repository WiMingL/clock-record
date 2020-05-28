<template>
  <div class="forgot">
    <p class="forgot-title">{{ title }}</p>
    <div class="forgot-form">
      <van-field
        v-show="type=='forgot'"
        label-width="70px"
        v-model="phone"
        type="tel"
        label="手机号" />
      <van-field
        v-show="type=='reset'"
        label-width="70px"
        v-model="password"
        type="password"
        label="新密码" />
      <van-field
      v-show="type=='forgot'"
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
      <van-button
        v-show="type=='forgot'"
        style="margin: 20px 0 10px 0;"
        class="forgot-btn"
        type="info"
        @click="resetPassword">重置密码</van-button>
      <van-button
        v-show="type=='reset'"
        style="margin: 20px 0 10px 0;"
        class="forgot-btn"
        type="info"
        @click="modifyPassword">确认修改</van-button>
      <div class="forgot-more">
        <router-link class="more-text" :to="{name:'Login'}">已有账号</router-link>
        <router-link class="more-text" :to="{name:'Register'}">去注册</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'Register',
  data(){
    return{
      type: 'forgot',
      title: '忘记密码',
      vertifyCode: null,
      phone: null,
      password: null
    }
  },
  methods: {
    sendMsg(){
      if(this.phone){
        Toast.loading({
          message: "加载中...",
          forbidClick: true
        })
        setTimeout(()=>{
          Toast.success('发送成功');
        },1000)
      }else{
        Toast('请输入手机号码')
      }
      
    },
    resetPassword(){
      if(this.vertifyCode&&this.phone){
        Toast.loading({
          message: "加载中...",
          forbidClick: true
        })
        setTimeout(()=>{
          Toast.success('验证成功');
          setTimeout(()=>{
            this.type = 'reset'
            this.title = '重置密码'
          },500)
        },1000)
      }else{
        let msg = this.phone ? this.vertifyCode ? null : '请输入验证码' : '请输入手机号'
        Toast(msg)
      }
    },
    modifyPassword(){
      if(this.password){
        Toast.loading({
          message: "加载中...",
          forbidClick: true
        })
        setTimeout(()=>{
          Toast.success('修改成功');
          setTimeout(()=>{
            this.$router.push({name:'Login'})
          },500)
        },1000)
      }else{
        Toast('请输入新密码')
      }
    }
  }
}
</script>

<style scoped>
  .forgot{
    width: 100%;
    height: 100%;
    background-color: fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    box-sizing: border-box;
  }
  .forgot-title{
    font-size: 24px;
    color: #333;
    
  }
  .forgot-form{
    width: 80%;
    margin-top: 20px;
  }
  .input-label{
    font-size: 14px;
    color: #444;
    width: 60px;
  }
  .forgot-more{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .forgot-btn {
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