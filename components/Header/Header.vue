<template>
  <div class="header" :class="$route.name==='UserProfile' ? 'user-profile-header':''">
    <div class="menu_mobile" v-if="isOpenMenu">
          <div>
            Mobile
          </div>
    </div>
    <div class="header_left">
      <div class="header_left_logo">
        <nuxt-link to="/">Anasayfa</nuxt-link>
      </div>
      <div class="header_left_menu" >
           <Menu />
      </div>
    </div>
    <div class="header_right">
      <div class="header_right_profile" v-if="false">
        <img :src="require('assets/images/avatar.jpg')" width="30" height="30" alt="profile" class="profile" loading="lazy"/>
        <span>Emre</span>
      </div>
      <div class="header_right_sign_in">
        <nuxt-link to="/login">Giriş Yap</nuxt-link>
      </div>
      <div class="header_right_sign_up">
        <nuxt-link to="/register">Kayıt Ol</nuxt-link>
      </div>
    </div>
    <div class="header_right_mobile" @click="isOpenMenu=!isOpenMenu">
       <SvgSprite icon="hamburger" />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Header/Menu.vue';
import { isMobileControl } from '@/mixins/isMobile.js';
export default {
    mixins:[isMobileControl],
    data(){
      return{
        isOpenMenu:false,
      }
    },  
    components:{
        Menu
    },  

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables/_breakpoints";
.header{
    width: 100%;
    // height: 300px;

    background: #efefef;
    font-size: 16px;
    font-weight: 400;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    
    //header_left
    &_left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &_menu{
          margin-left: 30px;
        }
    }
    &_right{
      display: flex;
      align-items: center;
      @include bp(tablet){
        display: none;
      }
      &_mobile{
        display: none;
        cursor: pointer;
        svg{
          width: 25px;
          height: 25px;
        }
        @include bp(tablet){
          display: block;
        }
      }
      &_profile{
        width: 100%;
        padding: 5px 15px 5px 5px;
        border-radius: 18px;
        cursor: pointer;
        &:hover{
           background: rgb(219, 212, 212);
        }
        img{
          border-radius:50%;
          margin-right: 8px;
        }
        span{
          color: #6e6d7a;
        }
      }
      &_sign_in{
          margin-right: 10px;
        cursor: pointer;
      }
      &_sign_up{	
        cursor: pointer;
        background: #cebe79;
        padding: 10px 20px;
        border-radius: 5px;
        a{
          color: white;
        }
      }
    }
}
.user-profile-header{
  position: relative;
  height: 450px;
  background-image: url('@/assets/images/photo11.jpg');
  align-items: flex-start;
}
.menu_mobile{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #8D8D8D;
  z-index: 5;
}
</style>