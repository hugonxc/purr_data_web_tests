import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import store from './store/store';


Vue.prototype.$myModule = null;
Vue.config.productionTip = false
export const bus = new Vue()

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
