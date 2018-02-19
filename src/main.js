import Vue from 'vue';
import router from './routes';
import App from './App';
import VeeValidate from 'vee-validate';
import VueLocalStorage from 'vue-ls';


Vue.use(VueLocalStorage);
Vue.use(VeeValidate);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
