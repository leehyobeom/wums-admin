<template>
  <UserMonitor/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserMonitor from '../components/UserMonitor.vue';
//import { useRoute } from 'vue-router'
//const route = useRoute();

export default defineComponent({
  name: 'UserMonitorView',
  components: {
    UserMonitor,
  },
  data () {
    return {
    }
  }
});
</script>