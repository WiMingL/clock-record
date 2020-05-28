<template>
  <span class="icon-logo" :style="{color,fontSize:size}" v-html="iconId"></span>
</template>

<script>
export default {
  name: 'Icon',
  props: ['iconId','color','size'],
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.icon-logo {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>