<template>
    <div class="follow_suggestion box">
        <div class="follow_suggestion_header box_header">
            <h4 class="title">Takip Önerisi</h4>
        </div>
        <div class="follow_suggestion_list">
            <div class="follow_suggestion_user" v-for="list in followList" :key="list.id">
                <div class="d-flex align-items-center">
                    <div class="user_profile_picture mr-3">
                        <img :src="require(`@/assets/images/${list.picture}.jpg`)" alt="" class="profile_small_image">
                    </div>
                    <div class="user_profile_username">
                       <nuxt-link :to="{name:'UserProfile', params:{slug:`${list.slug}`}}"> <span class="title">{{list.userName}}</span></nuxt-link>
                    </div>
                </div>
                <div class="follow_button">
                    <span>Takip Et</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            followList:[
                {
                    id:0,
                    picture:'photo9',
                    userName:'Kelly Bill',
                    slug:'kelly_bill'
                },
                {
                    id:1,
                    picture:'photo8',
                    userName:'Bradd Pitt',
                    slug:'brad_pitt',
                },
                {
                    id:3,
                    picture:'photo7',
                    userName:'John Stone',
                    slug:'john_stone',
                },
                {
                    id:4,
                    picture:'photo4',
                    userName:'Jason ham',
                    slug:'jason_ham',
                },
                {
                    id:5,
                    picture:'photo5',
                    userName:'Les Benjamins',
                    slug:'les_benjamins',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .follow_suggestion{
        margin-top: 20px;
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
</style>