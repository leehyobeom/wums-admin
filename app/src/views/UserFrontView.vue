<template>
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