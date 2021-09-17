<template>
  <div class="post_wrapper">
    <div class="post" v-for="post in posts" :key="post.id">
        <div class="post_header">
            <div class="user_profile">
                <img :src="require(`@/assets/images/${post.user.image}.jpg`)" alt="" class="profile_small_image">
            </div>
            <div class="user_titles">
                <nuxt-link :to="{name:'UserProfile', params:{slug:`${post.user.slug}`}}"><span class="user">{{post.user.name}}</span></nuxt-link>
                <span class="username">{{post.user.userName}}</span>
            </div>
        </div>
        <div class="post_center">
            <div class="post_description">
                {{post.post.description}}
            </div>
            <div class="post_image">
                <img :src="require(`@/assets/images/${post.post.image}.jpg`)" alt="" srcset="">
            </div>
            <div class="post_reactions">
                <div class="d-flex">
                    <div class="reaction" @click="likerCounter(post.id)">
                        <SvgSprite icon="like_fill" :style="post.isLiked?{color:'red'}:''"/> 
                        <span class="interaction_count">{{post.post.counter.liker}}</span>
                    </div>       
                    <div class="reaction" @click="openComment(post.id)">
                        <SvgSprite icon="comment"/>
                        <span class="interaction_count">{{post.post.comments.length}}</span>
                    </div>       
                    <div class="reaction">
                        <SvgSprite icon="share"/>
                        <span class="interaction_count">{{post.post.counter.share}}</span>
                    </div>
                </div>
                <div class="liker_peoples">

                </div>
            </div>
                <PostComment v-if="post.isOpenComment" :comments="post.post.comments"/>
        </div>
    </div>
</div>
</template>

<script>
import PostComment from './PostComment.vue'
export default {
  components: { PostComment },
  data(){
      return{
          isComment:false,
          posts:[
              {
                  id:0,
                  isLiked:false,
                  isOpenComment:false,
                  user:{
                      userName:'@emr_gzl',
                      slug:'emr_guzel',
                      name:'Emre Güzel',
                      image:'avatar'
                  },
                  post:{
                      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repellat minus optio velit necessitatibus fugiat itaque in laudantium nemo architecto!',
                      image:'photo6',
                      counter:{
                          liker:20,
                          share:0
                      },
                      comments:[
                          { 
                              id:0,
                              commentUserName:'Bradd Pitt',
                              commentUserPicture:'avatar',
                              commentDescription:'klasmklcmasklcmaskmlcmaslklcalcasmkcnasnjkcnasn',
                              commentDate:'1 Year Ago',
                              commentLiker:2
                          },
                          { 
                              id:1,
                              commentUserName:'Bradd Pitt',
                              commentUserPicture:'avatar',
                              commentDescription:'klasmklcmasklcmaskmlcmaslklcalcasmkcnasnjkcnasn',
                              commentDate:'1 Year Ago',
                              commentLiker:2
                          },
                          
                      ]
                  }
              },
               {
                  id:1,
                  isLiked:false,
                  isOpenComment:false,
                  user:{
                      userName:'@brt_gzl',
                      slug:'brt_guzel',
                      name:'Berat Güzel',
                      image:'photo11'
                  },
                  post:{
                      description:'Varsa şekerin patlayalım şekerim',
                      image:'photo9',
                      counter:{
                          liker:20,
                          share:0
                      },
                      comments:[
                          { 
                              id:0,
                              commentUserName:'Bradd Pitt',
                              commentUserPicture:'avatar',
                              commentDescription:'klasmklcmasklcmaskmlcmaslklcalcasmkcnasnjkcnasn',
                              commentDate:'1 Year Ago',
                              commentLiker:2
                          },
                          { 
                              id:1,
                              commentUserName:'Bradd Pitt',
                              commentUserPicture:'avatar',
                              commentDescription:'klasmklcmasklcmaskmlcmaslklcalcasmkcnasnjkcnasn',
                              commentDate:'1 Year Ago',
                              commentLiker:2
                          },
                          
                      ]
                  }
              },
              ]
      }
  },
  methods:{
      likerCounter(id){
         this.posts.forEach(element => {
            if(element.id===id && !element.isLiked){
                element.post.counter.liker++;
                element.isLiked=true;
            }else if(element.id===id){
                 element.post.counter.liker--;
                 element.isLiked=false;
            }
         });
      },
      openComment(id){
          console.log(id);
            this.posts.forEach(element => {
            if(element.id===id && !element.isOpenComment){
                element.isOpenComment=true;
            }else if(element.id===id && element.isOpenComment){
                 element.isOpenComment=false;
            }
         });
      }
  }
}
</script>

<style lang="scss" scoped>
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
</style>