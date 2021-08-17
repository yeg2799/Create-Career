<template>
  <div class="home_page">
    <Swiper />
    <div class="main_page">
        <HomeFilter />
        <ProjectsCard cardTitle="Popüler Projeler"/>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper';
import ProjectsCard from '../components/Cards/ProjectsCard.vue';
import HomeFilter from '../components/Filter/HomeFilter.vue';
export default {
  components:{
    Swiper,
    ProjectsCard,
    HomeFilter
  },

 }
</script>
<style lang="scss" scoped>
.home_page{
  background: #FFFFFF;
}

.main_page{
  padding: 20px 0;
  width: 100%;
  margin: 0 auto;
}
</style>