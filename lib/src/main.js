import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = isDev;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
