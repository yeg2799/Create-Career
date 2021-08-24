<template>
    <div class="popular_users_part">
          <h3>Popüler Kullanıcılar</h3>
          <div class="popular_users_wrapper">
            <div class="popular_users"  v-for="a in 7" :key="a">
            <div class="popular_users_header">
                <img :src="require('@/assets/images/photo8.jpg')" alt="">
            </div>
            <div class="popular_users_infos">
                <span>Emre Güzel</span>
                <div class="popular_users_infos_accounts">
                    <SvgSprite icon="linkedin" /> 
                    <SvgSprite icon="facebook" /> 
                    <SvgSprite icon="instagram" /> 
                    <SvgSprite icon="twitter" /> 
                </div>
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
.popular_users_part{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.popular_users_wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.popular_users{
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right:40px ;
  &:last-child{
    margin-right:0;
  }
  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
</style>