import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-14K37BFQHT" }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
