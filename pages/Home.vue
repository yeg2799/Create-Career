<template>
  <div class="home_page">
        <!-- <Swiper :pictures="pictures"/> -->
    <div class="main_page">
        <HomeFilter />
        <ProjectsCard :popularProjects="popularProjects" />
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
      popularProjects:[
      {id:0,picture:'photo1',userName:'Emre Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'photo9',slug:'dashboard'},
      {id:1,picture:'photo2',userName:'Berat Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'photo7',slug:'dashboard'},
      {id:2,picture:'photo3',userName:'Mediha Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'avatar',slug:'dashboard'},
      {id:3,picture:'photo4',userName:'Ömer Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'avatar',slug:'dashboard'},
      {id:4,picture:'photo5',userName:'Mustafa Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'avatar',slug:'dashboard'},
      {id:5,picture:'photo6',userName:'Zübeyde Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'avatar',slug:'dashboard'},
      {id:6,picture:'photo7',userName:'Mete Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'avatar',slug:'dashboard'},
      {id:7,picture:'photo8',userName:'Hakan Güzel',likeCount:'200',viewsCount:'10003',projectTitle:'DashBoard',userPicture:'avatar',slug:'dashboard'},
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
// .home_page{
//   background: #FFFFFF;
// }

.main_page{
  padding: 20px 0;
  width: 100%;
  margin: 0 auto;
}

</style>