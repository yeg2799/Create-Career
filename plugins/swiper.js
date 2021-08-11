import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay} from 'swiper/swiper.esm';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass))
const {Swiper, SwiperSlide} = getAwesomeSwiper(SwiperClass);

import 'swiper/swiper-bundle.css';

Vue.use(VueAwesomeSwiper);