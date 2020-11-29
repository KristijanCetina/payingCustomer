import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueGtag from "vue-gtag";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, IconsPlugin)

Vue.use(VueGtag, {
  config: { id: "G-14K37BFQHT" }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
