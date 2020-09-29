<!-- TEMPLATE -->
<template lang="pug">

.container
  .modal(v-bind:class="{ 'is-active': showModal }")
    .modal-background(v-on:click='closeModal()')
    .modal-card
      header.modal-card-head
        p.modal-card-title.has-text-centered.has-text-primary {{ jobName }}
        button.delete(aria-label='close' v-on:click='closeModal()')
      section.modal-card-body
        p(v-for='details in jobDetails') 
          i.fas.fa-angle-right.has-right-margin
          | {{ details.p }} | 
          span.tag.is-rounded.is-link.has-text-weight-medium.has-ext-margin(v-for='hashtag in details.hashtag') # {{ hashtag }} 
      footer.modal-card-foot
        p.has-right-margin certifications :
        p.subtitle.tag.is-rounded.is-info.has-text-weight-medium.has-ext-margin.no-margin-bottom(v-for='certification in jobCertifications') {{ certification }} 
  .tile.is-ancestor
    .tile.is-vertical.is-parent
      .tile.is-child.box
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'fr'") {{ cv.experience.title.fr.value }}
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'en'") {{ cv.experience.title.en.value }}
        .container.has-sepatator(v-for="job in cv.experience.jobs")
          .level.is-marginless.has-mid-top-padding
            .level-left
              .level-item
                p.subtitle.is-5 {{ job.name }}
            .level-right
              .level-item
                p.subtitle.is-6(v-if="language === 'fr'")
                  i {{ job.fr.startdate }}
                  i.fas.fa-angle-double-right.has-right-margin.has-left-margin
                  i {{ job.fr.enddate }}
                p.subtitle.is-6(v-if="language === 'en'")
                  i {{ job.en.startdate }}
                  i.fas.fa-angle-double-right.has-right-margin.has-left-margin
                  i {{ job.en.enddate }}
          p.has-small-margin.has-text-justified(v-if="language === 'fr'") 
            i.fas.fa-angle-right.has-right-margin 
            | {{ job.fr.summary }}
          p.has-small-margin.has-text-justified(v-if="language === 'en'")
            i.fas.fa-angle-right.has-right-margin
            | {{ job.en.summary }}
          button.button.is-light.is-fullwidth.modal-button(v-if="language === 'fr'" v-on:click='openModal(job, "fr")') plus
          button.button.is-light.is-fullwidth.modal-button(v-if="language === 'en'" v-on:click='openModal(job, "en")') more
      .tile.is-child.box
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'fr'") {{ cv.study.title.fr.value }}
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'en'") {{ cv.study.title.en.value }}
        .container.has-sepatator(v-for="study in cv.study.studies")
          .level.is-marginless.has-mid-top-padding
            .level-left
              .level-item
                p.subtitle.is-5(v-if="language === 'fr'") {{ study.fr.name }}
                p.subtitle.is-5(v-if="language === 'en'") {{ study.en.name }}
            .level-right
              .level-item
                p.subtitle.is-6
                  i {{ study.year }}
          p.has-small-margin.has-text-justified(v-if="language === 'fr'")
            i.fas.fa-angle-right.has-right-margin
            | {{ study.fr.school }} [ {{ study.fr.degree }} ]
          p.has-small-margin.has-text-justified(v-if="language === 'en'")
            i.fas.fa-angle-right.has-right-margin
            | {{ study.en.school }} [ {{ study.en.degree }} ]
    .tile.is-vertical.is-parent.is-4
      .card.tile.is-child.box.has-no-padding
        .card-image
          figure.image.is-4by3
            img.has-img-radius(src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image')
        .card-content
          .media
            .container.is-vertical-center
              .media-left
                figure.image.is-48x48.is-inline-block
                  img.is-rounded(v-bind:src="avatar")
              .media-content
                p.title.is-4.has-text-primary {{ cv.card.name }}
          p.has-text-info {{ cv.card.mail }}
          p.has-text-info {{ cv.card.phone }}
          p.has-text-info {{ cv.card.address }}
      .tile.is-child.box
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'fr'") {{ cv.tongue.title.fr.value }}
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'en'") {{ cv.tongue.title.en.value }}
        .container(v-for="tongue in cv.tongue.tongues")
          p.has-small-margin.has-text-justified(v-if="language === 'fr'") {{ tongue.fr.value }}
          p.has-small-margin.has-text-justified(v-if="language === 'en'") {{ tongue.en.value }}
      .tile.is-child.box
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'fr'") {{ cv.conference.title.fr.value }}
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'en'") {{ cv.conference.title.en.value }}
      .tile.is-child.box
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'fr'") {{ cv.hobbie.title.fr.value }}
        h4.title.is-4.is-marginless.has-small-bottom-padding(v-if="language === 'en'") {{ cv.hobbie.title.en.value }}
        .container(v-for="hobbie in cv.hobbie.hobbies")
          p.has-small-margin.has-text-justified(v-if="language === 'fr'") {{ hobbie.fr.value }}
          p.has-small-margin.has-text-justified(v-if="language === 'en'") {{ hobbie.en.value }}

</template>

<!-- SCRIPT -->
<script>

import config from "../config/config.json";
import avatar from '../img/avatar.jpg';
export default { 
  data () {
    var language = "fr"
    this.$root.$on('FR', () => { this.language = "fr" })
    this.$root.$on('EN', () => { this.language = "en" })
    return { 
      language: language,
      cv: config.cv,
      avatar: avatar,
      showModal: false,
      jobName: undefined,
      jobDetails: undefined,
      jobCertifications: undefined,
    }
  },
  methods: {
    openModal: function(job, language) {
      if ( language == "en") { 
        this.jobDetails = job.en.details
        this.jobCertifications = job.en.certifications
      }
      if ( language == "fr") { 
        this.jobDetails = job.fr.details 
        this.jobCertifications = job.fr.certifications
      }
      this.showModal = true
      this.jobName = job.name
    },
    closeModal: function() {
      this.showModal = false
      this.jobName = undefined
      this.jobDetails = undefined
      this.jobCertifications = undefined
    }
  }
}

</script>

<!-- STYLE -->
<style lang="sass" scoped>

.is-vertical-center
  display: flex
  align-items: center
.has-no-padding
  padding: 0
.has-small-bottom-padding
  padding-bottom: 10px
.has-sepatator:not(:last-child)
  border-bottom: 1px dashed
  padding-bottom: 20px
.has-small-padding
  padding: 10px
.has-small-margin
  margin: 10px
.has-mid-top-padding
  padding-top: 20px
.has-img-radius
  border-radius: 1%
.has-ext-margin
  margin: 2px
.has-right-margin
  margin-right: 10px
.has-left-margin
  margin-left: 10px
.no-margin-bottom
  margin-bottom: 0px !important

</style>