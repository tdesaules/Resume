<!-- TEMPLATE -->
<template lang='pug'>

.container
  section.section(v-if="context === 'resume'")
    VueBodyResume
  section.section(v-else-if="context === 'cv'")
    VueBodyCv
  section.section(v-else-if="context === 'projects'")
    VueBodyProjects

</template>

<!-- SCRIPT -->
<script>

import VueBodyResume from 'Vue/body-resume.vue'
import VueBodyCv from 'Vue/body-cv.vue'
import VueBodyProjects from 'Vue/body-projects.vue'
export default {
  components: {
    VueBodyResume,
    VueBodyCv,
    VueBodyProjects
  },
  data () {
    var context = 'resume'
    this.$root.$on('RESUME', () => {
      this.context = 'resume'
    })
    this.$root.$on('CV', () => {
      this.context = 'cv'
    })
    this.$root.$on('PROJECTS', () => {
      this.context = 'projects'
    })
    return { context: context }
  }
}

</script>

<!-- STYLE -->
<style lang='sass' scoped>

</style>
