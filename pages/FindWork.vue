<template>
  <div class="container">
      <div class="find-work">
        <div class="find-work-left col-lg-8 col-12">
          <SuggestionOfWork />
          <AdvertisementJobCard />
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
import AdvertisementJobCard from '../components/Cards/AdvertisementJobCard.vue'
import SuggestionOfWork from '../components/Cards/SuggestionOfWork.vue'
export default {
  components: { SuggestionOfWork, AdvertisementJobCard },

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