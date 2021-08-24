<template>
  <div class="user_profile">
      <div class="container">
        <div class="user_profile_cover">
            <div class="user_profile_banner">
                <img :src="require('@/assets/images/photo10.jpg')" alt="">
            </div>
            <div class="user_profile_picture">
                <img :src="require('@/assets/images/avatar.jpg')" alt="" class="profile_picture">
            </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.user_profile_cover{
    position: relative;
    .user_profile_banner{   
        img{
            width: 100%;
            height: 300px;
        }
}
    .user_profile_picture{
      position: absolute;
      bottom: -50px;
      left: 40%;
      right: 40%;
      width: 200px;
      height: 200px;
      background: #F7F7F7;
      border-radius: 50%;
        img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        padding: 5px;
        border-radius: 50%;
    }
}
}

</style>