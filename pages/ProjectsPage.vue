<template>
  <div class="projects_wrapper">
      <div class="project_title">
          <h1>İlham Al</h1>
          <projects-card />
      </div>
          
  </div>
</template>

<script>
import ProjectsCard from '../components/Cards/ProjectsCard.vue'
export default {
  components: { ProjectsCard },

}
</script>

<style lang="scss" scoped>
.projects_wrapper{
  margin-top: 20px;
}
.project_title{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .cards_wrapper{
    margin-top: 0;
  }
}
</style>