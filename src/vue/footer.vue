<!-- TEMPLATE -->
<template lang="pug">

section.section
  .tabs.is-centered
    ul.has-border-bottom-color
      li(v-for='language in languages')
        a.has-text-weight-medium.has-border-bottom-link-color.has-text-jet(v-on:click='handleLanguage(language)') {{ language }}

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

.has-border-bottom-color
  border-bottom-color: #404040 !important
.has-border-bottom-link-color
  border-bottom-color: #404040 !important
.has-border-bottom-link-color:hover
  border-bottom-color: #DB8906 !important

</style>