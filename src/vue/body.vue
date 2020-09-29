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

import vue_body_resume from './body-resume.vue'
import vue_body_cv from './body-cv.vue'
import vue_body_projects from './body-projects.vue'
export default { 
  components: { 
    vue_body_resume,
    vue_body_cv,
    vue_body_projects
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
  },
}

</script>

<!-- STYLE -->
<style lang="sass" scoped>

</style>