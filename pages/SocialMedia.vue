<template>
  <div class="social_media"> 
      <div class="container d-flex social_media_wrapper">
          <div class="social_media_left col-lg-4">
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
          </div>
          <div class="social_media_right col-lg-8 col-12">
            <div class="create_post">
                <div class="create_post_header">
                    <h4 class="title">Gönderi Oluştur</h4>
                </div>
                <div class="create_post_center">
                    <div class="create_post_image mr-2">
                      <img :src="require('@/assets/images/avatar.jpg')" alt="" class="profile_small_image">
                  </div>
                    <div class="create_post_input">
                        <textarea name="" id="" class="post_area" placeholder="Düşüncelerini bizimle paylaş" rows="2"></textarea>
                    </div>
                </div>
                <div class="create_post_bottom">
                  <div class="share_button">
                    <span>Paylaş</span>
                  </div>
                </div>
            </div>
            <div class="post_wrapper">
                <div class="post" v-for="a in 4" :key="a">
                    <div class="post_header">
                      <div class="user_profile">
                         <img :src="require('@/assets/images/photo7.jpg')" alt="" class="profile_small_image">
                      </div>
                      <div class="user_titles">
                        <span class="user">Berat Güzel</span>
                        <span class="username">@brtgzll</span>
                      </div>
                    </div>
                    <div class="post_center">
                      <div class="post_description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repellat minus optio velit necessitatibus fugiat itaque in laudantium nemo architecto!
                      </div>
                      <div class="post_image">
                        <img :src="require('@/assets/images/photo5.jpg')" alt="" srcset="">
                      </div>
                      <div class="post_reactions">
                        <div class="reaction">
                          <SvgSprite icon="like_fill"/>
                          <span class="interaction_count">20</span>
                        </div>                        
                        <div class="reaction">
                          <SvgSprite icon="comment"/>
                          <span class="interaction_count">1</span>
                        </div>                        
                        <div class="reaction">
                          <SvgSprite icon="share"/>
                          <span class="interaction_count">0</span>
                        </div>
                      </div>
                    </div>
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
@import "@/assets/variables/_breakpoints";
  .social_media{
    background:#EDF2F6;
    color: #515365;
    .social_media_wrapper{
      padding: 25px 0px;
    }
    &_left{
      // position: fixed;
      // display: block;
      
      @include bp(mobile){
        display: none;
      }
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

    }
    &_right{
      // padding: 0 !important;
      .create_post{
        width: 90%;
        border: 1px solid #efefef;
        background: #fff;
        border-radius: 10px; 
         
        &_header{
          .title{
            border-bottom: 1px solid #e6ecf5;
            color: #515365;
            display: inline-block;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 20px;
            padding: 15px;
            position: relative;
            text-transform: capitalize;
            width: 100%;
          }
        }
        &_center{
          display: flex;
          padding: 0px 10px 10px;
          .post_area{
            width: 550px;
            border: none;
          }
        }
        &_bottom{
           padding: 0px 10px 10px;
          .share_button{
            background: #CEBE79;
            color: #fff;
            text-align: center;
            padding: 5px 0px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 10px;
            border: 1px solid #CEBE79;
            cursor: pointer;
            &:hover{
              color: #CEBE79;
              background: #fff;
              
            }
          }
        }
      }
      .post_wrapper{
        .post{
          margin-top: 10px;
          width: 90%;
          background: #fff;
          border-radius: 10px;
          // height: 400px;
          padding: 10px;
          &_header{
            display: flex;
            align-items: center;
            .user_titles{
              display: flex;
              flex-direction: column; 
              font-size: 13px;
              margin-left: 10px;
              .user{
                font-weight: 800;
              }
            }
          }
          &_center{
            margin-top: 20px;
          .post_description{
            margin-bottom: 20px;
            // text-align: justify;
          }
          .post_image{
            width: 100%;
            padding-bottom: 10px;
            border-bottom: 1px solid #e6ecf5;
            img{
              display: block;
              width: 100%;
              height: 400px;
            }
          }
          .post_reactions{
            margin-top: 10px;
            display: flex;
            .reaction{
              margin-left: 20px;
              cursor: pointer;
              &:first-child{
                margin-left: 0;
              }
            }
          }
        }
        }
        
      }

    }
  }
</style>