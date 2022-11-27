<template>
      <v-card>
        <v-img :src= "require(`@/assets/${$route.params.brand}.png`)" width="100%"/>
      </v-card>
    <wums/>
</template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import wums from 'wums'
  //import UserFront from '../components/UserFront.vue';
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