<!-- TEMPLATE -->
<template lang="pug">

.container
  section.section(v-if="context === 'resume'")
    vue_body_resume
  section.section(v-else-if="context === 'cv'")
    vue_body_cv
  section.section(v-else-if="context === 'projects'")
    vue_body_projects

</template>

<!-- SCRIPT -->
<script>

import vueBodyResume from 'Vue/body-resume.vue'
import vueBodyCv from 'Vue/body-cv.vue'
import vueBodyProjects from 'Vue/body-projects.vue'
export default {
  components: {
    vueBodyResume,
    vueBodyCv,
    vueBodyProjects
  },
  data () {
    var context = "resume"
    this.$root.$on('RESUME', () => {
      this.context = "resume"
    })
    this.$root.$on('CV', () => {
      this.context = "cv"
    })
    this.$root.$on('PROJECTS', () => {
      this.context = "projects"
    })
    return { context: context }
  }
}

</script>

<!-- STYLE -->
<style lang="sass" scoped>

</style>
