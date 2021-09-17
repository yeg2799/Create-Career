<template>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
            height: 100px;
            resize: none;
            border: none;
          }
        }
        &_bottom{
           padding: 0px 10px 10px;
          .share_button{
            background: #DA6447;
            color: #fff;
            text-align: center;
            padding: 5px 0px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 10px;
            border: 1px solid #DA6447;
            cursor: pointer;
            &:hover{
              color: #DA6447;
              background: #fff;
              
            }
          }
        }
      }
</style>