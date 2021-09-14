<template>
  <div class="home_page">
        <Swiper :pictures="pictures"/>
    <div class="main_page">
        <HomeFilter />
        <ProjectsCard cardTitle="Popüler Projeler" v-if="!isMobileDeviceStatus"/>
        <PopularUsers v-if="!isMobileDeviceStatus"/>
    </div>
  </div>
</template>

<script>
import { isMobileControl } from '@/mixins/isMobile';
import Swiper from '@/components/Swiper';
import ProjectsCard from '../components/Cards/ProjectsCard.vue';
import HomeFilter from '../components/Filter/HomeFilter.vue';
import PopularUsers from '../components/PopularUsers.vue';
export default {
  data(){
    return{
      pictures:[
        {id:0,title:'photo9'},
        {id:1,title:'photo10'},
        {id:2,title:'photo11'}
      ],
    }
  },
  mixins:[isMobileControl],
  components:{
    Swiper,
    ProjectsCard,
    HomeFilter,
    PopularUsers
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