import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  cache,
  uri: process.env.VUE_APP_APOLLO_URL,
})
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})
loadFonts()

createApp(App)
  .use(apolloProvider)
  .use(router)
  .use(vuetify)
  .mount('#app')
