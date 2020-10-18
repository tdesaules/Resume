<!-- TEMPLATE -->
<template lang="pug">

.container
  .tile.is-ancestor
    .tile.is-4.is-vertical.is-parent
      .tile.is-child.has-text-centered
        .card.tile.is-child.box.has-no-padding
          .card-image
            figure.image.is-4by3
              img(v-bind:src="me")
          .card-content
            .media
              .container.is-vertical-center
                .media-content
                  p.title.is-4.has-text-primary {{ resume.name }}
                  p.subtitle.is-5.has-text-info(v-if="language === 'fr'") {{ resume.fr.job }}
                  p.subtitle.is-5.has-text-info(v-if="language === 'en'") {{ resume.en.job }}
            .container.has-top-margin
              button.button.is-medium.my-card(v-if="language === 'fr'" onclick="window.open('https://fr.wikipedia.org/wiki/Jedi');" target='_blank')
                i.fas.fa-jedi.has-text-primary
              button.button.is-medium.my-card(v-if="language === 'en'" onclick="window.open('https://en.wikipedia.org/wiki/Jedi');" target='_blank')
                i.fas.fa-jedi.has-text-primary
              button.button.is-medium.my-card(onclick="window.location.href = 'mailto:tdesaules@outlook.com';")
                i.fas.fa-at.has-text-primary
              button.button.is-medium.my-card(onclick="window.location.href = 'tel:+33699384055';")
                i.fas.fa-mobile-alt.has-text-primary
              button.button.is-medium.my-card(onclick="window.open('https://fr.linkedin.com/in/thibault-desaules-70993375');")
                i.fab.fa-linkedin-in.has-text-primary
              button.button.is-medium.my-card(onclick="window.open('https://api.whatsapp.com/send?phone=33699384055');")
                i.fab.fa-whatsapp.has-text-primary
              button.button.is-medium.my-card(onclick="window.location.href = 'skype:tdesaules@outlook.com?add';")
                i.fab.fa-skype.has-text-primary
      .tile.is-child.box.has-no-padding.is-hidden-touch
        figure.image.is-3by4
          img.has-img-radius(v-bind:src="column")
    .tile.is-parent
      .tile.is-child.box
        article.tile.is-child.has-text-justified
          p.title.is-3.has-text-primary(v-if="language === 'fr'") {{ resume.fr.title }}
          p.title.is-3.has-text-primary(v-if="language === 'en'") {{ resume.en.title }}
          p.subtitle.is-5.has-text-info(v-if="language === 'fr'") {{ resume.fr.subtitle }}
          p.subtitle.is-5.has-text-info(v-if="language === 'en'") {{ resume.en.subtitle }}
          .content.has-text-grey(v-if="language === 'fr'")
            p.has-text-grey(v-for="paraph in resume.fr.summary" v-html="paraph.p")
          .content.has-text-grey(v-if="language === 'en'")
            p.has-text-grey(v-for="paraph in resume.en.summary" v-html="paraph.p")
          .content.has-left-border.has-text-primary
            br
            p.i.fas.fa-quote-left
              span.has-text-weight-normal.is-family-primary &nbsp;&nbsp; {{ resume.citation.text }}
            p.is-italic.has-text-weight-normal.has-text-right {{ resume.citation.author }}
          .content.has-text-centered
            p.subtitle.tag.is-rounded.is-link.has-text-weight-medium.has-ext-margin(v-for="tag in resume.hashtag") # {{ tag.tag }}

</template>

<!-- SCRIPT -->
<script>

import config from "../config/config.json";
import column from '../img/column-3by4.jpg';
import me from '../img/1.jpg';
export default { 
  data () {
    var language = "fr"
    this.$root.$on('FR', () => { this.language = "fr" })
    this.$root.$on('EN', () => { this.language = "en" })
    return { 
      language: language,
      resume: config.resume,
      column: column,
      me: me,
    }
  }
}

</script>

<!-- STYLE -->
<style lang="sass" scoped>

.has-ext-margin
  margin: 2px
.has-top-margin
  margin-top: 1em
.has-left-border
  border-left: 3px solid
  padding-left: 25px
  border-radius: 10px
button.my-card
  margin: 1px
  width: 50px
.has-no-padding
  padding: 0
.has-img-radius
  border-radius: 6px
.is-vertical-center
  display: flex
  align-items: center

</style>