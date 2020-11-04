import Vue from 'vue'
import app from 'Vue/app.vue'

var vm = new Vue({
  el: '#resume',
  render: h => h(app)
})

vm()
