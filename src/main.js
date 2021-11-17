import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/vuex'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
