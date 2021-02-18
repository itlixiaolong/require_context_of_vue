<template>
  <div class="about">
    <h1>This is an about page</h1>
    <draggable
      v-model="comArrName"
      group="people"
      @start="drag=true"
      @end="drag=false">
      <component
        v-for="com in comArrName"
        :is="com"
        :key="com"
        style="margin-top:20px;"/>
    </draggable>
  </div>
</template>
<script>
import generateComArr from './task/index'
import draggable from 'vuedraggable'
export default {
  name: 'About',
  components: {
    draggable
  },
  data () {
    let data = sessionStorage.getItem('arr')
    data = data ? JSON.parse(data) : []
    return {
      comArrName: Object.keys(generateComArr(data))
    }
  }
}
</script>
