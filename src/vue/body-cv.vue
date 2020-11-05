<!-- HTML PUG -->
<template lang="pug">

.container
  .modal(v-bind:class="{ 'is-active': showModal }")
    .modal-background(v-on:click='closeModal()')
    .modal-card
      header.modal-card-head
        p.modal-card-title.has-text-centered.has-text-subtitle {{ jobName }}
        button.delete(aria-label='close' v-on:click='closeModal()')
      section.modal-card-body
        div(v-for='details in jobDetails')
          p.has-text-base
            i.fas.fa-angle-right.has-right-margin
            | {{ details.p }}
            br
            .has-ext-small-bottom-margin
              span.tag.has-text-weight-medium.has-ext-margin.is-rounded.is-tag1(v-for='hashtag in details.hashtag') # {{ hashtag }}
      footer.modal-card-foot
        p.has-right-margin.has-text-base certifications :
        p.tag.is-rounded.has-text-weight-medium.has-ext-margin.no-margin-bottom.is-tag2(v-for='certification in jobCertifications') {{ certification }}
  .tile.is-ancestor
    .tile.is-vertical.is-parent
      .tile.is-child.box
        p.title.is-3.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'fr'") {{ cv.experience.title.fr.value }}
        p.title.is-3.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'en'") {{ cv.experience.title.en.value }}
        .container.has-separator(v-for="job in cv.experience.jobs")
          .level.is-marginless.has-mid-top-padding
            .level-left
              .level-item
                p.subtitle.is-5.has-text-weight-semibold.has-text-onyx {{ job.name }}
            .level-right
              .level-item
                p.subtitle.is-6.has-text-weight-medium.has-text-base(v-if="language === 'fr'")
                  i {{ job.fr.startdate }}
                  i.fas.fa-angle-double-right.has-right-margin.has-left-margin
                  i {{ job.fr.enddate }}
                p.subtitle.is-6.has-text-weight-medium.has-text-base(v-if="language === 'en'")
                  i {{ job.en.startdate }}
                  i.fas.fa-angle-double-right.has-right-margin.has-left-margin
                  i {{ job.en.enddate }}
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'fr'")
            i.fas.fa-angle-right.has-right-margin
            | {{ job.fr.summary }}
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'en'")
            i.fas.fa-angle-right.has-right-margin
            | {{ job.en.summary }}
          div.has-text-centered.is-30pct.center
            button.button.is-small.is-fullwidth.is-rounded.has-background-color(v-if="language === 'fr'" v-on:click='openModal(job, "fr")')
              span.icon.is-small
                i.fas.fa-chevron-circle-down
              span.is-size-6.has-text-weight-medium plus
            button.button.is-small.is-fullwidth.is-rounded.has-background-color(v-if="language === 'en'" v-on:click='openModal(job, "en")')
              span.is-size-6.has-text-weight-medium.has-text-base more
      .tile.is-child.box
        p.title.is-3.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'fr'") {{ cv.study.title.fr.value }}
        p.title.is-3.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'en'") {{ cv.study.title.en.value }}
        .container.has-separator(v-for="study in cv.study.studies")
          .level.is-marginless.has-mid-top-padding
            .level-left
              .level-item
                p.subtitle.is-5.has-text-weight-semibold.has-text-onyx(v-if="language === 'fr'") {{ study.fr.name }}
                p.subtitle.is-5.has-text-weight-semibold.has-text-onyx(v-if="language === 'en'") {{ study.en.name }}
            .level-right
              .level-item
                p.subtitle.is-6.has-text-weight-medium.has-text-base
                  i {{ study.year }}
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'fr'")
            i.fas.fa-angle-right.has-right-margin
            | {{ study.fr.school }} [ {{ study.fr.degree }} ]
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'en'")
            i.fas.fa-angle-right.has-right-margin
            | {{ study.en.school }} [ {{ study.en.degree }} ]
    .tile.is-vertical.is-parent.is-4
      .card.tile.is-child.box.has-no-padding.is-hidden-touch
        .card-image
          figure.image.is-4by3
            img(v-bind:src="me")
        .card-content
          .media
            .container.is-vertical-center
              .media-content
                p.title.is-4.has-text-title {{ cv.card.name }}
                p.has-text-base {{ cv.card.mail }}
                p.has-text-base {{ cv.card.phone }}
                p.has-text-base {{ cv.card.address }}
      .tile.is-child.box
        p.title.is-4.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'fr'") {{ cv.tongue.title.fr.value }}
        p.title.is-4.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'en'") {{ cv.tongue.title.en.value }}
        .container(v-for="tongue in cv.tongue.tongues")
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'fr'") {{ tongue.fr.value }}
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'en'") {{ tongue.en.value }}
      .tile.is-child.box.is-hidden-touch
        p.title.is-4.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'fr'") {{ cv.conference.title.fr.value }}
        p.title.is-4.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'en'") {{ cv.conference.title.en.value }}
        vue-horizontal-list(:items='conferences' :options='{responsive: [{size: 1}]}')
          template(v-slot:default='{item}')
            .card
              .card-image
                figure.image.is-5by4
                  img(:src='item.image')
              .card-content
                .media
                  .media-left
                    span.icon.has-text-subtitle
                      i(:class='item.icon')
                  .media-content
                    a.has-text-weight-bold.has-text-base(@click='openNewTab(item.link)') {{item.title}}
                    p.has-text-weight-light.has-text-base {{item.hosted}}
                .content
                  .level.is-marginless
                    .level-left
                      .level-item
                        p.has-small-margin.has-text-justified.has-text-base {{item.content}}
                    .level-right
                      .level-item
                        time(:datetime='item.date').has-small-margin.has-text-justified.is-italic.has-text-base {{item.date}}
      .tile.is-child.box
        p.title.is-4.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'fr'") {{ cv.hobbie.title.fr.value }}
        p.title.is-4.is-marginless.has-small-bottom-padding.has-text-title(v-if="language === 'en'") {{ cv.hobbie.title.en.value }}
        .container(v-for="hobbie in cv.hobbie.hobbies")
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'fr'") {{ hobbie.fr.value }}
          p.has-small-margin.has-text-justified.has-text-base(v-if="language === 'en'") {{ hobbie.en.value }}

</template>

<!-- JAVASCRIPT -->
<script>

import VueHorizontalList from "vue-horizontal-list";
import config from "Config/config.json";
import me from 'Img/3.jpg';
export default {
  components: { VueHorizontalList },
  data () {
    var language = "fr"
    this.$root.$on('FR', () => { this.language = "fr" })
    this.$root.$on('EN', () => { this.language = "en" })
    return {
      language: language,
      cv: config.cv,
      me: me,
      showModal: false,
      jobName: undefined,
      jobDetails: undefined,
      jobCertifications: undefined,
      conferences: config.cv.conference.items
    }
  },
  methods: {
    openModal: function (job, language) {
      if (language === "en") {
        this.jobDetails = job.en.details
        this.jobCertifications = job.en.certifications
      }
      if (language === "fr") {
        this.jobDetails = job.fr.details
        this.jobCertifications = job.fr.certifications
      }
      this.showModal = true
      this.jobName = job.name
    },
    closeModal: function () {
      this.showModal = false
      this.jobName = undefined
      this.jobDetails = undefined
      this.jobCertifications = undefined
    },
    openNewTab: function (link) {
      window.open(link, "_blank");
    }
  }
}

</script>

<!-- SASS -->
<style lang="sass" scoped>

.is-vertical-center
  display: flex
  align-items: center
.has-no-padding
  padding: 0
.has-small-bottom-padding
  padding-bottom: 10px
.has-separator:not(:last-child)
  border-bottom: 0px dashed
  padding-bottom: 25px
.has-small-padding
  padding: 10px
.has-small-margin
  margin: 10px
.has-mid-top-padding
  padding-top: 20px
.has-ext-small-bottom-margin
  margin-bottom: 5px
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
.is-30pct
  width: 30%
.center
  margin: auto
.has-background-color:hover
  background-color: rgba(206, 105, 19, 0.05) !important

</style>
