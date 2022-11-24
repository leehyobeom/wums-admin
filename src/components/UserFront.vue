<template>
      <v-card>
        <v-img :src= "require(`@/assets/${$route.params.brand}.png`)" width="100%" @click="someMethod"/>
      </v-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  name: 'UserBrand',
  data () {
    return {
    }
  },
  created (){
    window.addEventListener('beforeunload', this.someMethod2)
  },
  mounted(){
  },
  methods: {
        someMethod(event: any) {
          this.$apollo.mutate({
          mutation: gql`mutation ($cursorMonitor: [CursorMonitor!]!) {
            create(cursorMonitor: $cursorMonitor)
          }`,
          variables: {
              cursorMonitor: {
                brand: "naver",
                ip: "10.0.0.9991888",
                date: "2022-01-02 10:10:10",
                coordinate: [{x:1, y:3}]
          },
        }
        })
        console.log(event.clientX);
            // // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
            // console.log(event.clientY);

            // // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
            // console.log(event.pageX);
            // console.log(event.pageY);

            // // screenX/Y gives the coordinates relative to the screen in device pixels.
            // console.log(event.screenX);
            // console.log(event.screenY);
        },
        async someMethod2() {
          await this.$apollo.mutate({
          mutation: gql`mutation ($cursorMonitor: [CursorMonitor!]!) {
            create(cursorMonitor: $cursorMonitor)
          }`,
          variables: {
              cursorMonitor: {
                brand: "naver",
                ip: "10.0.0.9991888111",
                date: "2022-01-02 10:10:10",
                coordinate: [{x:1, y:3}]
          },
        }
        })
            // // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
            // console.log(event.clientY);

            // // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
            // console.log(event.pageX);
            // console.log(event.pageY);

            // // screenX/Y gives the coordinates relative to the screen in device pixels.
            // console.log(event.screenX);
            // console.log(event.screenY);
        }
    }
})
</script>
