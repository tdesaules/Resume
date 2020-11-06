import Vue from 'vue'
import App from 'Vue/app.vue'

var vm = new Vue({
  el: '#resume',
  render: h => h(App)
})

console.log(vm)
