<template>
    <v-cotainer>
        <img :src= image>
    </v-cotainer>
</template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'UserMonitorView',
    data () {
      return {
        image: require("@/assets/logo.png"),
      }
    }
  });
  </script>