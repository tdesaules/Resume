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
                  p.title.is-4.has-text-title {{ resume.name }}
                  p.subtitle.is-5.has-text-weight-semibold.has-text-subtitle(v-if="language === 'fr'") {{ resume.fr.job }}
                  p.subtitle.is-5.has-text-weight-semibold.has-text-subtitle(v-if="language === 'en'") {{ resume.en.job }}
            .container.has-top-margin
              button.button.is-medium.my-card.has-background-color(v-if="language === 'fr'" onclick="window.open('https://fr.wikipedia.org/wiki/Jedi');" target='_blank')
                i.fas.fa-jedi.has-text-jedi
              button.button.is-medium.my-card.has-background-color(v-if="language === 'en'" onclick="window.open('https://en.wikipedia.org/wiki/Jedi');" target='_blank')
                i.fas.fa-jedi.has-text-jedi
              button.button.is-medium.my-card.has-background-color(onclick="window.location.href = 'mailto:tdesaules@outlook.com';")
                i.fas.fa-at.has-text-mail
              button.button.is-medium.my-card.has-background-color(onclick="window.location.href = 'tel:+33699384055';")
                i.fas.fa-mobile-alt.has-text-phone
              button.button.is-medium.my-card.has-background-color(onclick="window.open('https://fr.linkedin.com/in/thibault-desaules-70993375');")
                i.fab.fa-linkedin-in.has-text-linkedin
              button.button.is-medium.my-card.has-background-color(onclick="window.open('https://api.whatsapp.com/send?phone=33699384055');")
                i.fab.fa-whatsapp.has-text-whatsapp
              button.button.is-medium.my-card.has-background-color(onclick="window.location.href = 'skype:tdesaules@outlook.com?add';")
                i.fab.fa-skype.has-text-skype
      .tile.is-child.box.has-no-padding.is-hidden-touch
        figure.image.is-1by1
          img.has-img-radius(v-bind:src="other")
    .tile.is-parent
      .tile.is-child.box
        article.tile.is-child.has-text-justified
          p.title.is-3.has-text-title(v-if="language === 'fr'") {{ resume.fr.title }}
          p.title.is-3.has-text-title(v-if="language === 'en'") {{ resume.en.title }}
          p.subtitle.is-5.has-text-weight-semibold.has-text-subtitle(v-if="language === 'fr'") {{ resume.fr.subtitle }}
          p.subtitle.is-5.has-text-weight-semibold.has-text-subtitle(v-if="language === 'en'") {{ resume.en.subtitle }}
          .content(v-if="language === 'fr'")
            p.has-text-base(v-for="paraph in resume.fr.summary" v-html="paraph.p")
          .content(v-if="language === 'en'")
            p.has-text-base(v-for="paraph in resume.en.summary" v-html="paraph.p")
          .content.has-left-border
            br
            p.i.fas.fa-quote-left.has-text-title
              span.has-text-weight-light.is-family-primary.has-text-subtitle &nbsp;&nbsp; {{ resume.citation.text }}
            p.is-italic.has-text-weight-semibold.has-text-right.has-text-title {{ resume.citation.author }}
          .content.has-text-centered
            p.tag.is-rounded.has-text-weight-semibold.has-ext-margin.is-tag2(v-for="tag in resume.hashtag") # {{ tag.tag }}

</template>

<!-- SCRIPT -->
<script>

import config from "Config/config.json";
import other from 'Img/8.jpg';
import me from 'Img/1.jpg';
export default { 
  data () {
    var language = "fr"
    this.$root.$on('FR', () => { this.language = "fr" })
    this.$root.$on('EN', () => { this.language = "en" })
    return { 
      language: language,
      resume: config.resume,
      other: other,
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
  color: #DB8906
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
.has-background-color:hover
  background-color: rgba(51, 51, 51, 0.08) !important

</style>
