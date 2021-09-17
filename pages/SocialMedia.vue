<template>
  <div class="social_media"> 
      <div class="container d-flex social_media_wrapper">
          <div class="social_media_left col-lg-4">
            <ProfileCard />
            <div class="follow_suggestion">
                <div class="follow_suggestion_header">
                  <h4 class="title">Takip Önerisi</h4>
                </div>
                <div class="follow_suggestion_list">
                  <div class="follow_suggestion_user" v-for="a in 5" :key="a">
                    <div class="d-flex align-items-center">
                      <div class="user_profile_picture mr-3">
                        <img :src="require('@/assets/images/avatar.jpg')" alt="" class="profile_small_image">
                      </div>
                      <div class="user_profile_username">
                        <span class="title">Kelly Bil</span>
                      </div>
                    </div>
                    <div class="follow_button">
                      <span>Takip Et</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="social_media_right col-lg-8 col-12">
            <CreatePostCard />
            <PostCard />
          </div>
      </div>
  </div>
</template>

<script>
import CreatePostCard from '@/components/Post/CreatePostCard.vue'
import PostCard from '../components/Post/PostCard.vue'
import ProfileCard from '../components/Cards/ProfileCard.vue'
export default {
  components: { CreatePostCard, PostCard, ProfileCard },

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
      @include bp(tablet){
        display: none;
      }
    }
    .follow_suggestion{
        margin-top: 20px;
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
        &_list{
          padding:0 20px 10px;
          .follow_suggestion_user{
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &:first-child{
              margin-top: 0;
            }
          }
          .user_profile_username{
            font-weight: 500;
          }
          .follow_button{
            color: #DA6447;
            font-weight: 600;
            cursor: pointer;
          }
        }
        
    }
  }
</style>