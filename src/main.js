import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import VuePageTransition from 'vue-page-transition'
 
Vue.use(VuePageTransition)
 */
createApp(App).use(router).mount('#app')
