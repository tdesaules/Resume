<!-- TEMPLATE -->
<template lang="pug">

div
  vue_categories
  vue_body
  vue_footer

</template>

<!-- SCRIPT -->
<script>

import vue_categories from 'Vue/categories.vue'
import vue_body from 'Vue/body.vue'
import vue_footer from 'Vue/footer.vue'
export default {
  components: {
    vue_categories,
    vue_body,
    vue_footer
  },
  computed: {
    data() {
      var context = "resume"
      this.$root.$on('RESUME', () => {
        this.context = "resume"
      })
      this.$root.$on('CV', () => {
        this.context = "cv"
      })
      this.$root.$on('DASHBOARD', () => {
        this.context = "dashboard"
      })
      return { context: context }
    }
  }
}

</script>

<style lang="sass">

@import "../sass/variable.sass"
@import "../sass/style.sass"

</style>
