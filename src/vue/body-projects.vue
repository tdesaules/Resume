<!-- HTML PUG -->
<template lang="pug">

.container
  .container(:class="{ 'has-top-margin': index != 0 }" v-for="project in projects")
    .tile.is-ancestor
      .tile.is-parent.is-12.box.top-radius.small-border-bottom
        .tile.is-child.is-1.is-full-centered
          i(:class='project.icon')
        .tile.is-child
          h1.title.has-text-fulvous(v-if="language === 'fr'") {{project.fr.title}}
          h1.title.has-text-fulvous(v-if="language === 'en'") {{project.en.title}}
    .tile.is-ancestor.is-hidden-mobile
      .tile.is-parent.is-12.box.no-radius.no-box-shadow
        .tile.is-child.is-1
        .tile.is-child.is-10
          vue-horizontal-list(:items='project.images' :options='{responsive: [{size: 1}]}')
              template(v-slot:default='{item}')
                figure.image.is-3by1
                  img(:src='item.url')
        .tile.is-child.is-1
    .tile.is-ancestor
      .tile.is-12.box.no-radius.no-box-shadow
        .tile.is-parent.is-1
          .tile.is-child.is-full-centered
            figure.image.is-48x48.is-inline-block
                img.is-rounded(v-bind:src="me")
        .tile.is-parent.is-vertical
          .tile.is-child
            i.fas.fa-feather-alt &nbsp {{ project.author }}
          .tile.is-child
            i.fab.fa-github
            a(@click='openNewTab(project.github.url)').has-text-weight-normal &nbsp {{ project.github.name }}
          .tile.is-child
            p(v-for='(source, index) in project.sources')
              i.fas.fa-link(:class="{ 'is-invisible': index != 0 }")
              a(@click='openNewTab(source.url)').has-text-weight-light &nbsp {{ source.url }}
    .tile.is-ancestor
      .tile.is-12.box.bottom-radius.no-box-shadow
        .content(v-if="language === 'fr'")
          p(v-for="paraph in project.fr.summary" v-html="paraph.p")
        .content(v-if="language === 'en'")
          p(v-for="paraph in project.en.summary" v-html="paraph.p")

</template>

<!-- JAVASCRIPT -->
<script>

import VueHorizontalList from "vue-horizontal-list";
import config from "Config/config.json";
import me from 'Img/9.jpg';
export default {
  components: {VueHorizontalList},
  data () {
    var language = "fr"
    this.$root.$on('FR', () => { this.language = "fr" })
    this.$root.$on('EN', () => { this.language = "en" })
    return {
      language: language,
      me: me,
      projects: config.projects
    }
  },
  methods: {
    openNewTab: function(link) {
      window.open(link, "_blank");
    }
  }
}

</script>

<!-- SASS -->
<style lang="sass" scoped>

.is-full-centered
  display: flex
  justify-content: center
  align-items: center
.bottom-radius
  border-radius: 0px 0px 6px 6px
.top-radius
  border-radius: 6px 6px 0px 0px
.no-radius
  border-radius: 0px 0px 0px 0px
.small-border-bottom
  border-bottom: 1px solid
  border-bottom-color: #dbdbdb
.no-box-shadow
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 0px rgba(10, 10, 10, 0.02)
.tile.is-vertical > .tile.is-child:not(:last-child)
  margin-bottom: 5px !important
.is-red:not(:last-child)
  color: red
.has-top-margin
  margin-top: 25px

</style>
