<template>
      <v-card>
        <v-img :src= "require(`@/assets/${$route.params.brand}.png`)" width="100%"/>
      </v-card>
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
