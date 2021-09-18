<template>
  <div class="profile_card box">
    <div class="profile_card_header box_header">
        <h4 class="title">Profil</h4>
    </div>
    <div class="profile_card_center">
        <div class="profile_card_image">
            <img :src="require('@/assets/images/avatar.jpg')" alt="" class="profile_small_image">
        </div>
        <div class="profile_card_infos">
            <span class="username">Yunus Emre Güzel</span>
            <div class="message d-flex align-items-center">
                <SvgSprite icon="message" class="mr-2" />
                <span>Mesajlar</span>
            </div>
            <div class="notifications d-flex align-items-center">
                <SvgSprite icon="notification" class="mr-2" />
                <span>Bildirimler</span>
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
 .profile_card{
        &_center{
          padding:  0px 20px 10px;
          display: flex;
          align-items: center;
          .profile_card_image{
            margin-right: 10px;
          }
          .profile_card_infos{
            font-size: 12px;
            .username{
              font-size: 14px;
              font-weight: 600;
            }
          }
        }
      }
</style>