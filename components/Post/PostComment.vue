<template>
    <div class="post_comments_wrapper">
        <div class="post_comment" v-for="comment in comments" :key="comment.id">
            <div class="user_image left">
                <img :src="require(`@/assets/images/${comment.commentUserPicture}.jpg`)" alt="" srcset="" class="profile_small_image">
             </div>
            <div class="post_comment_right">
                <div class="username">
                    <span>{{comment.commentUserName}}</span>
                </div>
                <div class="comment">
                    <p>{{comment.commentDescription}}</p>
                </div>
                <div class="d-flex">
                    <div class="comment_date">
                        <span>{{comment.commentDate}}</span>
                    </div>
                    <div class="reply_icon comment_reaction" >
                        <SvgSprite icon="reply_fill" />
                    </div>
                    <div class="like_icon comment_reaction">
                        <SvgSprite icon="like_fill" />
                        <span>{{comment.commentLiker}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        comments:{
            type:Array,
            default:[]
        }
    },
    mounted(){
        console.log(this.comments);
    }
}
</script>

<style lang="scss" scoped>
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
</style>