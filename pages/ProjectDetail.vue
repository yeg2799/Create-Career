<template>
  <div class="project_detail">
      <div class="container">
          <div class="project_detail_header">
            <div class="project_detail_profile">
              <div class="project_detail_profile_header">
                   <img :src="require('@/assets/images/avatar.jpg')" alt="">
                   <div class="project_detail_profile_titles">
                       <span>Auditor.De - analytic dashboard</span>
                       <div class="project_detail_profile_alt_titles">
                            <span>Emre</span>
                            <span class="follow_title">Follow me</span>
                       </div>
                      
                   </div>
                   
              </div> 
          </div>
          </div>
          <div class="project_detail_cover">
              <img :src="require('@/assets/images/photo1.jpg')" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.project_detail{
    &_cover{
        width: 100%
    }
    img{
        width: 100%;
        height: 400px;
        border-radius: 10px;
    }
}
.project_detail_header{
    padding: 30px 100px;
    .project_detail_profile_header{
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 5px;
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

</style>-