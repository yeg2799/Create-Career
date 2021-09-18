<template>
  <div class="cards_wrapper" v-if="popularProjects.length>0">
      <h3 class="card_title" v-if="cardTitle">{{cardTitle}}</h3>
    <div  class="card_wrapper">
        <div class="card" v-for="project in popularProjects" :key="project.id">
           <nuxt-link :to="{name:'ProjectDetail',params:{slug:`${project.slug}`}}" >
            <div class="card_project_image" v-if="!isMobileDeviceStatus">
                <img :src="require(`@/assets/images/${project.picture}.jpg`)" />
                <div class="card_project_name">{{project.projectTitle}}</div>
            </div>
            <!-- <Swiper :pictures="swiperPictures" v-if="isMobileDeviceStatus"/> -->
            </nuxt-link>
             <div class="card_profile">
                 <div class="card_profile_left">
                        <div class="card_profile_img"><img :src="require(`@/assets/images/${project.userPicture}.jpg`)" loading="lazy"/></div>
                        <div class="card_profile_title">{{project.userName}}</div>
                 </div>
                <div class="card_profile_right">
                    <div class="liker">
                        <svg-sprite icon="like"/>
                        <span>{{project.likeCount}}</span>
                    </div>
                    <div class="views">
                        <svg-sprite icon="eye"/>
                        <span>{{project.viewsCount}}</span>
                    </div>
                </div>
             </div>
        </div>
        <!-- <project-card-swiper :pictures="swiperPictures"/> -->
        </div>
    <div class="more_than_button">Daha fazlasını gör</div>
  </div>
</template>

<script>
import {isMobileControl} from '@/mixins/isMobile'
import Swiper from '@/components/Swiper'
import ProjectCardSwiper from '@/components/ProjectCardSwiper.vue'
export default {
    mixins:[isMobileControl],
    components:{
        Swiper,
        ProjectCardSwiper
    },
    props:{
        cardTitle:{
            type:String,
            default:''
        },
        popularProjects:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            swiperPictures:[],
        }
    },
    mounted(){
        if(this.popularProjects.length>0){
            this.popularProjects.forEach(element => {
                this.swiperPictures.push({id:element.id,title:element.picture})
            });
        }
    }
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
            background: #EDF2F6;
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

.more_than_button{
    margin-top: 30px;
    background: #CEBE79;
    color: #fff;
    padding: 20px 50px;
    border-radius: 40px;
    border: 1px solid #CEBE79;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background: #EDF2F6;
        color: #CEBE79;
        // border: 1px solid #CEBE79;
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