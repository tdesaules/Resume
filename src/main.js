import Vue from 'vue'
import vue_app from 'Vue/app.vue'

var vm = new Vue({
  el: '#resume',
  render: h => h(vue_app)
})

vm()
