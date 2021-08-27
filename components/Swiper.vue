<template>
    <div v-swiper:popularLocationsSlider="swiperOption" class="popular-locations__list">
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
    data() {
    return {
      pictures:[
        {title:'photo9'},
        {title:'photo10'},
        {title:'photo11'}
      ],
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
      },
    };
  },
}

</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: 400px;
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