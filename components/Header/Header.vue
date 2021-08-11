<template>
  <div class="header">
    <div class="header_left">
      <div class="header_left_logo">
        <nuxt-link to="/">Anasayfa</nuxt-link>
      </div>
      <div class="header_left_menu">
          <Menu />
      </div>
    </div>
    <div class="header-right">
      <div class="header_right_profile">
        <img :src="require('assets/images/avatar.jpg')" width="30" height="30" alt="profile" class="profile" />
        <span>Emre</span>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Header/Menu.vue';
export default {
    components:{
        Menu
    },  

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
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
    }
}
</style>