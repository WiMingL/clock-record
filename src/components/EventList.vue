<template>
  <div class="event-lsit">
    <event-card v-for="(item, idx) in _size" :key="idx"></event-card>
  </div>
</template>

<script>
import EventCard from './EventCard'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: ['_eventList','_size'],
  data () {
    return {
      events: this._eventList,
      size: this._size
    }
  }
}
</script>

<style scoped>
  .event-lsit{
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 10px 10px 0 10px;
    overflow: scroll;
  }
</style>