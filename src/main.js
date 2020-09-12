import Vue from 'vue'
import App from './App.vue'
import "normalize.css"
import "./styles/App.css"


Vue.config.productionTip = false

var app = new Vue({
  render: h => h(App),
});

app.$mount('#app');
