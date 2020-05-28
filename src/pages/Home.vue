<template>
  <div class="home">
    <router-view></router-view>
    <!-- tabBar -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from '../components/Tabbar'
export default {
  name: 'Home',
  components: {
    tabBar
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>