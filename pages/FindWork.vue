<template>
  <div class="container">
      <div class="find-work">
        <div class="find-work-left col-lg-8 col-12">
          <SuggestionOfWork />
          <div class="advertisement_job_box box">
            <div class="advertisement_job_box_header box_header">
              <h4 class="title">İş İlanları</h4>
            </div>
          </div>
        </div>
        <div class="find-work-right col-lg-4">
          <div class="filter-box box">
            <div class="filter-box-header box_header">
              <h4 class="title">Filtrele</h4>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SuggestionOfWork from '../components/Cards/SuggestionOfWork.vue'
export default {
  components: { SuggestionOfWork },

}
</script>

<style lang="scss" scoped>
.find-work{
  display:flex;
  margin-top: 20px;
  .filter-box{

  }
}
</style>