<template>
  <v-container>
    {{$route.params.id}}
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserMonitor',
  data () {
    return {
      coordinate: [{x:1, y:2}]
    }
  },
  created (){

  }
})
</script>
