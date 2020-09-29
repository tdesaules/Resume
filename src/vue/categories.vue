<!-- TEMPLATE -->
<template lang="pug">

section.section
  .tabs.is-centered
    ul
      li(v-for='category in categories')
        a.has-text-weight-medium.has-text-primary(v-on:click='handleCategoryClick(category)') {{ category }}

</template>

<!-- SCRIPT -->
<script>

import config from "../config/config.json";
export default {
  computed: {
    categories() {
      return config.categories.map((category) => {
        return category.name;
      })
    }
  },
  methods: {
    handleCategoryClick(category) { 
      this.$root.$emit(category)
    }
  }
}

</script>

<!-- STYLE -->
<style lang="sass" scoped>

</style>