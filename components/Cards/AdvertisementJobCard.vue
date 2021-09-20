<template>
  <div class="advertisement_job_box box">
    <div class="advertisement_job_header box_header">
      <h4 class="title">İş İlanları</h4>
    </div>
    <div class="advertisement_job_wrapper">
      <nuxt-link to="/find-job/detail" class="advertisement_job" v-for="a in 5" :key="a">
        <div class="advertisement_job_left">
          <div class="advertisement_job_image">
            <img :src="require('@/assets/images/photo6.jpg')" alt="" class="profile_small_image_square">
          </div>  
          <div class="advertisement_job_titles">
            <span class="job_name">FrontEnd Developer</span>
            <span class="workplace_name">OtoKirala</span>
            <div class="d-flex">
              <span class="workplace_name_city">Adana</span>  <span class="release_Date ml-2">1 Gün Önce</span>
            </div>
          </div>
        </div>
        <div class="advertisement_job_right">

        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .advertisement_job{
    // margin-top: 20px;
    display: flex;
    cursor: pointer;
    padding: 10px;
    margin-top: 10px;
    // &:first-child{
    //   margin-top: 0;
    // }
    &_left{
      display: flex;
      // align-items: center;
      .advertisement_job_titles{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .job_name{
          color: #DA6447;
          font-weight: 600;
          font-size: 15px;
        }
      }
    }
  }
</style>