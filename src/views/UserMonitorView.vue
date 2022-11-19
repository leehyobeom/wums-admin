<template>
  {{list.brand}}
  <UserMonitor/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserMonitor from '../components/UserMonitor.vue';
import gql from 'graphql-tag'

export default defineComponent({
  name: 'UserMonitorView',
  components: {
    UserMonitor,
  },
  apollo: {
    list: gql`query {
      list: get {
        brand: brand
        coordinate:coordinate {
          x: x
          y: y
        }
      }
    }`,
  },
  data () {
    return {
      list: {
        coordinate:[{
          x:'',
          y:''
        }],
        brand: ''
      },
    }
  }
});
</script>