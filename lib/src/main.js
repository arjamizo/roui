import Vue from 'vue';
import App from './App.vue';

const componentFiles = import.meta.globEager(
  './components/*.vue'
);

const env = import.meta.env.NODE_ENV;
const isDev = env === 'development';

console.log('NODE_ENV', env)

Object.entries(componentFiles).forEach(([path, m]) => {
  const name = path.match(/x-[^.]+/)[0]
  if (env === 'development') {
    console.log('registering', name, 'at', path)
  }
  Vue.component(name, m.default)
})

Vue.config.productionTip = isDev;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
