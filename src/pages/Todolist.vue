<template>
  <div class="todolist">
    <div class="todo-header">
      <van-search
        v-model="value"
        shape="round"
        background="transparent"
        placeholder="请输入搜索关键词"/>
      <van-tabs
        title-active-color="#44bba3"
        :animated="true"
        color="#44bba3"
        class="header-tab"
        v-model="active">
        <van-tab
          v-for="item of tabs"
          :key="item.id"
          :title="item.title">
          </van-tab>
      </van-tabs>
    </div>
    <event-list :_size="Number((Math.random()*20).toFixed(0))"></event-list>
  </div>  
</template>

<script>
import EventList from '@/components/EventList'
export default {
  name: 'Todolist',
  components: {
    EventList
  },
  data () {
    return {
      value: null,
      active: 0,
      tabs: [
        {
          id: 0,
          title: '待完成',
        },{
          id: 1,
          title: '已完成',
        },{
          id: 2,
          title: '搁置',
        }
      ]

    }
  }
}
</script>

<style scoped>
  .todolist{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 0;
    flex: 1;
    background-color: #fbfbfb;
  }
  .todo-header{
    background-image: linear-gradient(38deg, #44bba3, #3cc4c4, #1ae6bd);
  }
  .header-tab{
    background-color: #fbfbfb;
    color: #333;
  }
</style>