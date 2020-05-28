<template>
  <div class="wrapper">
    <div class="card">
      <div class="card-header">
        <p class="card-title">这是一个普通的标题，啧啧啧啧</p>
        <p class="card-create-time">2020-4-4 24:22:26</p>
      </div>

      <p class="card-content">随便来一段内容，能超过一行就行，后面你可能看不到，但是没有关系</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard"
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: auto;
  margin-bottom: 8px;
}
.card {
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: #ddd 0 0 4px;
}
.card-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.card-title{
  flex:1;
  margin-right:30px;
  font-size: 15px;
  color: #222;
  text-overflow:ellipsis; 
  white-space: nowrap;  
  overflow: hidden;
}
.card-create-time{
  font-size: 10px;
  color: #666;
}
.card-content{
  font-size: 13px;
  color: #999;
  width: 100%;
  text-overflow:ellipsis; 
  white-space: nowrap;  
  overflow: hidden;
  letter-spacing: 0.5px;
}
</style>