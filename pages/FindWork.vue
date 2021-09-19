<template>
  <div class="container">
      <div class="find-work">
        <div class="find-work-left col-lg-8 col-12">
          <SuggestionOfWork />
          <AdvertisementJobCard />
        </div>
        <div class="find-work-right col-lg-4">
            <WorkFilterBox />
        </div>  
      </div>
  </div>
</template>

<script>
import AdvertisementJobCard from '../components/Cards/AdvertisementJobCard.vue'
import SuggestionOfWork from '../components/Cards/SuggestionOfWork.vue'
import WorkFilterBox from '../components/Filter/WorkFilterBox.vue'
export default {
  components: { SuggestionOfWork, AdvertisementJobCard, WorkFilterBox },

}
</script>

<style lang="scss" scoped>
.find-work{
  display:flex;
  margin-top: 20px;


}
</style>