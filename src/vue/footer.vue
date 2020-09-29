<!-- TEMPLATE -->
<template lang="pug">

section.section
  .tabs.is-centered
    ul
      li(v-for='language in languages')
        a.has-text-weight-medium.has-text-primary(v-on:click='handleLanguage(language)') {{ language }}

</template>

<!-- SCRIPT -->
<script>

import config from "../config/config.json";
export default {
  computed: {
    languages() {
      return config.languages.map((language) => {
        return language.name;
      })
    }
  },
  methods: {
    handleLanguage: function(language) { 
      this.$root.$emit(language)
    }
  }
}

</script>

<!-- STYLE -->
<style lang="sass" scoped>

</style>