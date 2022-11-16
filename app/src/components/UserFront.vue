<template>
    <img :src= "require(`@/assets/${$route.params.brand}.png`)"/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserBrand',
  data () {
    return {
    }
  },
  created (){

  }
})
</script>
