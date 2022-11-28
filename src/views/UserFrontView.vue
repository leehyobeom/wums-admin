<template>
      <v-card>
        <v-img :src= "require(`@/assets/${$route.params.brand}.png`)" width="100%"/>
      </v-card>
    <wums 
    brand="naver"
    ip= "10.10.10.@@@"
    date="2022-02-03 13:13:13"/>
</template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import wums from 'wums';
  export default defineComponent({
    name: 'UserFrontView',
    components: {
      wums,
    },
    data () {
      return {
      }
    }
  });
  </script>