<template>
  <div class="social_media"> 
      <div class="container d-flex social_media_wrapper">
          <div class="social_media_left col-lg-4">
            <ProfileCard />
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
      @include bp(mobile){
        display: none;
      }
    }
  }
</style>