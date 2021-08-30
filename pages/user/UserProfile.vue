<template>
  <div class="user_profile">
      <div class="container">
        <div class="user_profile_cover">
            <div class="user_profile_banner">
                <img :src="require('@/assets/images/photo10.jpg')" alt="">
            </div>
            <div class="user_profile_picture">
                <img :src="require('@/assets/images/avatar.jpg')" alt="" class="profile_picture">
            </div>
        </div>
        <div class="user_profile_title">
              <hr>
              <span>Yunus Emre Güzel</span>
              <hr>
        </div>
        <div class="user_profile_infos">
            <div class="user_profile_info">
                <span>Şehir:</span>
                <span>Adana</span>
            </div>
            <div class="user_profile_info">
                <span>Şehir:</span>
                <span>Adana</span>
            </div>
            <div class="user_profile_info">
                <span>Şehir:</span>
                <span>Adana</span>
            </div>
            <div class="user_profile_info">
                <span>Şehir:</span>
                <span>Adana</span>
            </div>
            <div class="user_profile_info">
                <span>Şehir:</span>
                <span>Adana</span>
            </div>
            <div class="user_profile_info">
                <span>Şehir:</span>
                <span>Adana</span>
            </div>
        </div>
        <ProjectsCard cardTitle="Projelerim" />
      </div>

  </div>
</template>

<script>
import ProjectsCard from '@/components/Cards/ProjectsCard.vue'
export default {
  components: { ProjectsCard },

}
</script>

<style lang="scss" scoped>
.user_profile{
    background: #fff;
}
.user_profile_cover{
    position: relative;
    .user_profile_banner{   
        img{
            width: 100%;
            height: 300px;
        }
}
    .user_profile_picture{
      position: absolute;
      bottom: -50px;
      left: 41%;
      right: 41%;
      width: 18%;
      height: 200px;
      background: #F7F7F7;
      border-radius: 50%;
        img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        padding: 5px;
        border-radius: 50%;
    }
}
}
    .user_profile_title{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
    hr{
        width: 40%;
        border-color:#cebe79;
        border-width: 2px;
    }
    span{
        width: 20%;
        text-align: center;
        color: #cebe79;
        font-weight: 600;
        font-size:16px;
    }
    }
    .user_projects_wrapper{
        display: flex;
        flex-wrap: wrap;
        .user_project{
            width: 250px;
            height: 300px;
            border: 1px solid black;
             margin-right: 30px;
             margin-top: 20px;
             &:last-child{
                 margin-right: 0;
             }
        }
    }
    .user_profile_infos{
        display: flex;
        border: 1px solid #CEBE79;
        border-width: 0 2px 2px 2px;
        height: 250px;  
        position: relative;
        top: -18px;
    }
</style>