<template>
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
                          <div class="d-flex">
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
                          <div class="liker_peoples">

                          </div>
                      </div>
                      <div class="post_comments_wrapper">
                          <div class="post_comment" v-for="a in 3" :key="a">
                              <div class="user_image left">
                                  <img :src="require('@/assets/images/avatar.jpg')" alt="" srcset="" class="profile_small_image">
                              </div>
                              <div class="post_comment_right">
                                  <div class="username">
                                      <span>Jason Statham</span>
                                  </div>
                                  <div class="comment">
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero non omnis ipsam consectetur dolorem sunt, tempore odit quaerat magnam?</p>
                                  </div>
                                  <div class="d-flex">
                                    <div class="comment_date">
                                        1 Year Ago
                                    </div>
                                    <div class="reply_icon comment_reaction" >
                                        <SvgSprite icon="reply_fill" />
                                    </div>
                                    <div class="like_icon comment_reaction">
                                        <SvgSprite icon="like_fill" />
                                        <span>5</span>
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
          .post_comments_wrapper{
             
              .post_comment{
                  display: flex;
                   margin-top: 20px;
                  .post_comment_right{
                      margin-left: 10px;
                      .username{
                          font-weight: 600;
                      }
                  }
                  .comment_reaction{
                      margin-left: 10px;
                      cursor: pointer;
                  }
              }
          }
        }
        }
        
      }
</style>