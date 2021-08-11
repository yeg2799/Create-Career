<template>
    <div v-swiper:popularLocationsSlider="swiperOption" class="popular-locations__list">
        <div slot="pagination" class="slider-pagination" data-popular-slider-pagination />
        <div class="swiper-wrapper">
          <div v-for="a in 5" :key="a.id" class="swiper-slide popular-locations-swiper-slide">
            aaaa
          </div>
        </div>
      </div>
</template>

<script>
export default {
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

<style>

</style>