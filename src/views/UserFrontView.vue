<template>
      <v-card>
        <v-img :src= "require(`@/assets/${$route.params.brand}.png`)" width="100%"/>
      </v-card>
    <UserFront/>
</template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import UserFront from '../components/UserFront.vue';
  export default defineComponent({
    name: 'UserFrontView',
    components: {
      UserFront,
    },
    data () {
      return {
      }
    }
});
  </script>