<!-- TEMPLATE -->
<template lang='pug'>

div
  VueCategories
  VueBody
  VueFooter

</template>

<!-- SCRIPT -->
<script>

import VueCategories from 'Vue/categories.vue'
import VueBody from 'Vue/body.vue'
import VueFooter from 'Vue/footer.vue'
export default {
  components: {
    VueCategories,
    VueBody,
    VueFooter
  },
  computed: {
    data () {
      var context = 'resume'
      this.$root.$on('RESUME', () => {
        this.context = 'resume'
      })
      this.$root.$on('CV', () => {
        this.context = 'cv'
      })
      this.$root.$on('DASHBOARD', () => {
        this.context = 'dashboard'
      })
      return { context: context }
    }
  }
}

</script>

<style lang='sass'>

@import '../sass/variable.sass'
@import '../sass/style.sass'

</style>
