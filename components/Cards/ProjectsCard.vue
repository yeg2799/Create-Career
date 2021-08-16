<template>
  <div class="cards_wrapper">
      <h3 class="card_title" v-if="cardTitle">{{cardTitle}}</h3>
      <div class="card_wrapper">
        <div class="card" v-for="picture in pictures" :key="picture.id">
            <div class="card_project_image">
                <img :src="require(`@/assets/images/${picture.title}.jpg`)" />
                <div class="card_project_name">Dashboard</div>
            </div>
             <div class="card_profile">
                 <div class="card_profile_left">
                        <div class="card_profile_img"><img :src="require('@/assets/images/avatar.jpg')" loading="lazy"/></div>
                        <div class="card_profile_title">Emre Güzel</div>
                 </div>
                <div class="card_profile_right">
                    <div class="liker">
                        <svg-sprite icon="like"/>
                        <span>100</span>
                    </div>
                    <div class="views">
                        <svg-sprite icon="eye"/>
                        <span>2000</span>
                    </div>
                </div>
             </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        cardTitle:{
            required:false,
            type:String,
        }
    },
    data(){
        return {
            pictures:[
                {title:'photo1'},
                {title:'photo2'},
                {title:'photo3'},
                {title:'photo4'},
                {title:'photo5'},
                {title:'photo6'},
                {title:'photo7'},
                {title:'photo8'},
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.cards_wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .card_wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .card{
            width: 400px;
            height: 330px;
            border: none;
            margin-top: 30px;
            margin-right: 15px; 
             cursor: pointer;
            &_project_image{
                 position: relative;
                .card_project_name{
                    display: none;
                    }
                 &:hover{
                    .card_project_name{
                        display: block;
                        position: absolute;
                        bottom: 0;
                        color: white;
                        width: 100%;
                        padding: 20px;
                        background: rgba(black, 0.5);
                        font-size: 20px;
                        border-bottom-right-radius: 15px;
                        border-bottom-left-radius: 15px;
                    }
                 }

             }

            &:hover{
               animation: fadein 3s;
            }
            img{
                width: 100%;
                height: 300px;
                // border-top-left-radius: 15px; 
                // border-top-right-radius: 15px;
                border-radius: 15px;
            }   
            .card_profile{
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &_left{
                    display: flex;
                    align-items: center;
                }
                &_img{
                    img{
                        width:25px;
                        height:25px;
                        border-radius: 50%;
                    }
                }
                &_title{
                    padding-left: 5px;
                    font-size: 14px;
                    font-weight: 500;
                }
                &_right{
                    display: flex;
                    align-items: center;
                    .liker{
                        margin-right: 10px;
                            path{
                                fill:red !important;
                            }
                    }
                }
            }
        }
    }

}
@keyframes fadein {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
}
</style>