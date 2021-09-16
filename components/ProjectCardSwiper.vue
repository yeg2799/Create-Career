<template>
      <div v-swiper:popularProjects="swiperOption" class="popular-locations__list">
        <div class="swiper-wrapper">
          <div v-for="picture in pictures" :key="picture.id" class="swiper-slide popular-locations-swiper-slide">
            <img :src="require(`@/assets/images/${picture.title}.jpg`)" loading="lazy"/>
          </div>
        </div>
        <div slot="pagination" class="slider-pagination" data-popular-slider-pagination />
      </div>
</template>

<script>
export default {
    props:{
    pictures:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 17,
        autoplay: {
          delay: 5000,
        },
        loop: true,
        pagination: {
          el: '[data-popular-slider-pagination]',
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      },
    };
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables/_breakpoints";
img{
    width: 100%;
    height: 400px;
    @include bp(mobile){
      height: 300px;
    }
    @include bp(mobile-xs){
      height: 250px;
    }
}
.slider-pagination{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  z-index: 9999;
}
</style>