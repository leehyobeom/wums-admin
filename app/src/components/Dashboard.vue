<template>
  <v-container>
        <v-card
          v-for="t in [1, 2, 3]"
          :key = t
          justify="center" 
          class="d-flex mb-6"
          tyle="max-width: 100%;"
          :href="`monitor/${t}`"
          >
          <v-col
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="flex-grow-0 flex-shrink-0"
            tyle="min-width: 100px; max-width: 100%;"
            target="_blank"
            cols="2"
          >
            <div
            outlined
            >
              {{ eco.text }}
            </div>
          </v-col>
          <v-col
          class="flex-grow-0 flex-shrink-0"
          tyle="min-width: 100px; max-width: 100%;"
          cols="6"
          >
            <div
            outlined
            >
              dd
            </div>
          </v-col >
        </v-card>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'HelloWorld',

  data () {
    return {
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify/tree/next',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
    }
  },
})
</script>
