<!-- TEMPLATE -->
<template lang='pug'>

section.section
  .tabs.is-centered
    ul.has-border-bottom-color
      li(v-for='category in categories')
        a.has-text-weight-medium.has-border-bottom-link-color.has-text-base.has-background-color(v-on:click='handleCategoryClick(category)') {{ category }}

</template>

<!-- SCRIPT -->
<script>

import config from 'Config/config.json';
export default {
  computed: {
    categories () {
      return config.categories.map((category) => {
        return category.name;
      })
    }
  },
  methods: {
    handleCategoryClick (category) {
      this.$root.$emit(category)
    }
  }
}

</script>

<!-- STYLE -->
<style lang='sass' scoped>

.has-border-bottom-color
  border-bottom-color: #404040 !important
.has-border-bottom-link-color
  border-bottom-color: #404040 !important
.has-border-bottom-link-color:hover
  border-bottom-color: hsl(28, 83%, 44%) !important
.has-background-color:hover
  background-color: rgba(206, 105, 19, 0.05) !important

</style>
