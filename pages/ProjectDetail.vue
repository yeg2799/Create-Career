<template>
  <div class="project_detail">
      <div class="container">
          <div class="project_detail_header">
            <div class="project_detail_profile">
              <div class="project_detail_profile_header">
                  <div class="project_detail_profile_header_left">
                    <img :src="require('@/assets/images/avatar.jpg')" alt="">
                    <div class="project_detail_profile_titles">
                        <span>Auditor.De - analytic dashboard</span>
                        <div class="project_detail_profile_alt_titles">
                            <span>Emre</span>
                        <span class="follow_title">Follow me</span>
                       </div>   
                   </div>
                  </div>
                  <div class="project_detail_profile_header_right">
                    <div class="favorite_button button">
                        <SvgSprite icon="like" />
                    </div>
                    <div class="save_button button">
                        Kaydet
                    </div>
                  </div>
                   
              </div> 
          </div>
          </div>
          <div class="project_detail_cover">
              <img :src="require('@/assets/images/photo1.jpg')" alt="">
          </div>
          <div class="project_detail_desc"> 
              <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, enim et facilis laboriosam nulla inventore soluta placeat expedita ratione, alias ab obcaecati pariatur quidem sunt harum autem dolor. Totam, consectetur ad recusandae reiciendis animi nostrum incidunt ipsum laudantium repudiandae voluptatem, consequuntur quod aliquid eum itaque deserunt sapiente provident, alias natus autem. Obcaecati exercitationem saepe, reprehenderit repellendus adipisci sint voluptatum a neque itaque, labore magni iusto similique dolor ab quibusdam, libero cum nemo. Voluptas, voluptatem itaque! Dicta vel, delectus iure necessitatibus amet, nobis magnam autem facilis nulla ab, suscipit porro? Cumque a voluptatum dolore! Id earum quisquam deleniti nulla delectus aspernatur?
              </span>
          </div>
          <div class="line">
              <hr>
              <span>Yunus Emre Güzel</span>
              <hr>
          </div>
      </div>
      <!-- <div class="other_projects">
              <projects-card />
      </div> -->
  </div>
</template>

<script>
import ProjectsCard from '../components/Cards/ProjectsCard.vue'
export default {
  components: { ProjectsCard },

}
</script>

<style lang="scss" scoped>
.project_detail{
    &_cover{
        width: 100%
    }
    &_desc{
        margin-top: 10px;
    }
    img{
        width: 100%;
        height: 500px;
        border-radius: 10px;
    }
}

.project_detail_header{
    padding: 30px 100px;
    .project_detail_profile_header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &_left{
        display: flex;
        align-items: center;
        
    }
    &_right{
        display: flex;
        .button{
            border: 1px solid #cebe79;
            padding: 10px 30px;
            margin-right: 10px;
            border-radius: 5px;
            cursor: pointer;
            &:hover{
                background-color: #cebe79;
                color: #fff;
            }
            &:last-child{
                margin-right: 0;
            }
        }
    }
    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 15px;
    }
    .project_detail_profile_titles{
        display: flex;
        flex-direction: column;

        .project_detail_profile_alt_titles{
            display: flex;
            align-items: center;
            .follow_title{
                 
            }
        span{
        font-size: 13px;
        font-weight: 300;
        color: #664d1a;
        &::after{
            content: '>';
            margin: 0 5px;
           
        }
        &:last-child{
            &::after{
                content: '';
            }
        }
    }
    }
    }
}
}
.project_detail_desc{
    margin-top: 20px;
    padding: 0 10px;
    text-align: justify;
}
.line{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    hr{
        width: 40%;
        border-color:#cebe79;
    }
    span{
        width: 20%;
        text-align: center;
        color: #cebe79;
        border-right: 1px solid #cebe79;
        border-left: 1px solid #cebe79;
    }
    }
</style>-