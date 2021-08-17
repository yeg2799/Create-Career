<template>
  <div class="project_detail">
      <div class="container">
          <div class="project_detail_header">
              See Comments
          </div>
          <div class="project_detail_cover">
              <img :src="require('@/assets/images/photo1.jpg')" alt="">
          </div>
         <div class="project_detail_profile">
              <div class="project_detail_profile_header">
                  
              </div>
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
    margin-top: 15px;
    &_cover{
        width: 100%
    }
    img{
        width: 100%;
        border-radius: 10px;
    }
}

</style>-