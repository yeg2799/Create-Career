<template>
  <div class="profile_card">
              <div class="profile_card_header">
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
        width: 100%;
        border: 1px solid #efefef;
        background: #fff;
        border-radius: 10px;  
        &_header{
          .title{
            border-bottom: 1px solid #e6ecf5;
            color: #515365;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 20px;
            padding: 15px;
            position: relative;
            text-transform: capitalize;
            width: 100%;
          }
        }
        
        &_center{
          padding:  0px 10px 10px;
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