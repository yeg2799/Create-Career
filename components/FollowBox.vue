<template>
    <div class="following_box">
        <div class="d-flex align-items-center col-6 justify-content-between mb-3"  v-for="a in 20" :key="a">
            <div class="d-flex align-items-center">
                <div class="following_box_image">
                    <img :src="require('@/assets/images/avatar.jpg')" alt="" srcset="">
                </div>
                <div class="following_box_titles">
                    <span class="user_name">Berat Güzel</span>
                    <span class="follower_Count">2523 Takipçi</span>
                </div>
            </div>
            <div class="stop_following_button" v-show="followButton">
                <span>{{followButton}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:{
       followButton:{
           type:String,
           default:''
       }
   }
}
</script>

<style lang="scss" scoped>
    .connections{
        .following_box{
            display: flex;
            flex-wrap: wrap;
            .following_box_image{
                img{
                    width: 75px;
                    height: 75px;
                }
            }
            .stop_following_button{
                background: #CEBE79;
                padding: 10px 20px;
                border: 1px solid #CEBE79;
                border-radius: 20px;
                color: #fff;
                cursor: pointer;
                font-weight: 600;
                &:hover{
                    background: #fff;
                    color: #CEBE79;
                }
            }
            .following_box_titles{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 10px;
                .user_name{
                    font-size: 18px;
                    font-weight: 600px;
                }

            }
        }
    }
</style>