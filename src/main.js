import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/vuex'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
