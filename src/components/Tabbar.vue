<template>
  <div class="tabbar">
    <van-tabbar
      v-model="active"
      @change="tabBarChange"
      active-color="#44bba3"
      inactive-color="#555555"
    >
      <van-tabbar-item name="todolist" icon="home-o" replace to="todolist">
        <span>事务</span>
        <template #icon="props">
          <icon :color="props.active?iconColor.active:iconColor.inActive" size="18px" iconId="&#xe6ef;" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="personal" icon="search" replace to="personal">
        <span>我的</span>
        <template #icon="props">
          <icon :color="props.active?iconColor.active:iconColor.inActive" size="18px" iconId="&#xe621;" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  name: "Tabbar",
  components:{
    Icon
  },
  data() {
    return {
      active: "todolist",
      iconColor: {
        active:"#44bba3",
        inActive: "#555555"
      }
    };
  },
  methods: {
    tabBarChange(active) {
      console.log(active);
    }
  }
};
</script>

<style scpoed>
.tabbar {
  height: 50px;
}
</style>