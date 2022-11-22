<template>
    <v-card>
      <v-img :src="require(`@/assets/naver.png`)" width="100%" />
    </v-card>
    <v-img :src="require(`@/assets/cursor.png`)" width="30px" :style="pointor"/>
    <v-bottom-navigation>
      <v-btn value="recent" @click="stop()">
        <v-icon >mdi-heart</v-icon>
      </v-btn>
      
      <v-btn value="favorites" @click="run()">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      
      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
  </v-bottom-navigation>
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
      variables(): any{
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
      pointor: {
        position: "fixed",
        top: "203px",
        left: "48px",
       " z-index": "15",
      },
      intervalId: 0
    }
  },
  methods: {
    run(){
      let position = 300;
      this.intervalId = setInterval(()=>{
        position += 10;
        this.pointor.top =position + "px";
      }, 100);
    },
    stop(){
      clearInterval(this.intervalId);
    }
  }
  
})
</script>

<style scoped>
</style>