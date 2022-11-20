<template>
  <v-container>
    <img :src="require(`@/assets/${item.brand}.png`)">
    {{item.coordinate}}
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  name: 'UserMonitor',
  apollo: {
    item: {
      query: gql`query ($_id: String!) {
        item: getOne(_id: $_id) {
          brand
          coordinate{
            x
            y
          }
        }
      }`,
      variables (){
        return {
          _id: this.$route.params.id
        }
      }
    },
  },
  data () {
    return {
      item: {
        _id:'',
        ip:'',
        date:'',
        coordinate:[{
          x:'',
          y:''
        }],
        brand: ''
      },
    }
  },
})
</script>
