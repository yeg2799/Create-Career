<template>
  <div class="home_page">
    <Swiper />

    <div class="main_page">
        <div class="filter">
            <div class="dropdown">
                <span>Popular</span>
                <svg-sprite icon="dropdown" />
            </div>
        </div>
        <ProjectsCard cardTitle="Popüler Projeler"/>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper';
import ProjectsCard from '../components/Cards/ProjectsCard.vue';
export default {
  components:{
    Swiper,
    ProjectsCard
  }
 }
</script>
<style lang="scss" scoped>
.home_page{
  background: #FFFFFF;
}
.filter{
  padding: 10px 50px;
  .dropdown{
    border: 2px solid #e8e8e8;
    display: inline;
    padding: 10px;
    border-radius:20px;
    font-size: 14px;
    cursor: pointer;
    &:hover{
      background-color: #e8e8e8;
      // border-color: #CEBE79;
    }
    span{
      margin-right: 20px;
    }
  }
}
.main_page{
  padding: 20px 0;
  width: 100%;
  margin: 0 auto;
}
</style>