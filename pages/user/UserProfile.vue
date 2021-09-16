<template>
  <div class="user_profile">
      <!-- <div class="container">
        <div class="user_profile_cover">
            <div class="user_profile_banner">
                <img :src="require('@/assets/images/photo10.jpg')" alt="">
            </div>
            <div class="user_profile_picture">
                <img :src="require('@/assets/images/avatar.jpg')" alt="" class="profile_picture">
            </div>
        </div>
        <div class="user_profile_title">
              <hr>
              <span>Yunus Emre Güzel</span>
              <hr>
        </div>
        <div class="user_profile_infos">
            <div class="box">
              <div class="user_profile_info">
                <h4>Eğitim</h4>
                <div class=""><span>Selçuk Üniversitesi</span>
                </div>
            </div>
            </div>
            <div class="box">
                <div class="user_profile_info">
                    <h4>Eğitim</h4>
                    <div class=""></div>
                </div>
            </div>
            <div class="box">
                <div class="user_profile_info">
                    <h4>Eğitim</h4>
                    <div class=""></div>
                </div>
            </div>
        </div>
        
      </div>
        <ProjectsCard cardTitle="Projelerim" /> -->
        <div class="user_profile_wrapper">
            <div class="col-4 user_profile_left">
                <div class="user_profile_box">
                    <div class="user_profile_box_head">
                        <div class="d-flex align-items-center">
                            <div class="user_image">
                                <img :src="require('@/assets/images/avatar.jpg')" alt="">
                            </div>
                            <div class="user_titles">
                                <span class="user_name">Yunus Emre Güzel</span>
                                <span class="user_job">Frontend Developer</span>
                            </div>  
                        </div>
                        <div class="user_description">
                            <span>Selçuk Üniversitesi 4.sınıf öğrencisi - OtoKirala.com'da Frontend Developer</span>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <div class="follow_button button">
                                Takip Et
                            </div>                  
                             <div class="send_message button">
                                Mesaj At
                            </div>
                        </div>
                        <div class="profile_statistic">
                            <div class="project_count count">
                                <span>210</span>
                                <span class="count_text">Proje Sayısı</span>
                            </div>
                            <div class="follower_count count">
                                <span>2121</span>
                                <span class="count_text">Following</span>
                            </div>
                            <div class="follow_count count">
                                <span>212</span>
                                <span class="count_text">Followers</span>
                            </div>
                        </div>
                    </div>
                    <div class="user_profile_box_menu_wrapper">
                        <div v-for="menu in tabMenu" :key="menu.id" class="user_profile_box_menu_item" :class="menu.active ? 'active':''" @click="changeMenu(menu)">
                            <SvgSprite :icon="menu.icon"/>
                            <span> {{menu.title}} </span>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div class="col-8 user_infos_box_wrapper">
                <div class="user_infos_box">
                    <div class="d-flex p-4" v-if="activeId===0">
                        <div class="left_box">
                            <div class="info_header">
                                <h4>Deneyim</h4>
                            </div>
                            <div class="info_box" v-for="a in 3" :key="a">
                                <div class="d-flex pt-4">
                                    <div class="info_image">
                                        <img :src="require('@/assets/images/avatar.jpg')" alt="" srcset="">
                                    </div>
                                    <div class="info_titles">
                                        <h5>Frontend Developer</h5>
                                        <h6>OtoKirala-Tam Zamanlı</h6>
                                        <span>Mar 2021 - Su Anda 7 ay</span>
                                        <span>Adana Türkiye</span>
                                    </div>
                                </div>
                                <div class="info_config">
                                    <SvgSprite icon="alert" />
                                </div>
                            </div>
                        <div class="info_header mt-5">
                            <h4>Eğitim</h4>
                        </div>
                        <div class="info_box">
                            <div class="d-flex pt-4">
                                <div class="info_image">
                                    <img :src="require('@/assets/images/avatar.jpg')" alt="" srcset="">
                            </div>
                            <div class="info_titles">
                                <h5>Selçuk Üniversitesi</h5>
                                <span>Lisans Derecesi, Bilgisayar Mühendisliği</span>
                                <span>2017 - 2022</span>
                            </div>
                            </div>
                            <div class="info_config">
                                <SvgSprite icon="alert" />
                            </div>
                        </div>
                        </div>
                        <div class="right_box ml-3">
                            Sağ Taraf
                        </div>
                    </div>

                    <div class="connections box" v-if="activeId===1">
                        <b-card no-body>
                            <b-tabs card>
                                <b-tab title="Following" active>
                                    <FollowBox followButton="Takibi Bırak"/>
                                </b-tab>
                                <b-tab title="Follower">
                                   <FollowBox followButton="Takip Et"/>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </div>
                    <div class="box" v-if="activeId===2">
                        Projelerim
                    </div>
                    <div class="box" v-if="activeId===3">
                        Arşiv
                    </div>
                     <div class="box" v-if="activeId===4">
                         Profil Ayarlarım
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import ProjectsCard from '@/components/Cards/ProjectsCard.vue'
import FollowBox from '../../components/FollowBox.vue'

export default {
  components: { ProjectsCard,FollowBox },
  data(){
      return{
          tabMenu:[
            {
                id:0,
                icon:'alert',
                title:'Bilgilerim',
                active:true,
            },
            {
                id:1,
                icon:'alert',
                title:'Bağlantılarım',
                active:false,
            },
            {
                id:2,
                icon:'alert',
                title:'Projelerim',
                active:false,
            },
            {
                id:3,
                icon:'alert',
                title:'Arşiv',
                active:false,
            },
            {
                id:4,
                icon:'setting',
                title:'Profil Ayarlarım',
                active:false,
            }
          ],
          activeId:0
      }
  },
  methods:{
    changeMenu(element){
        this.tabMenu.forEach(el=>{
            if(el.active===true){
                el.active=false;
            }
            if(el.id===element.id){
                el.active=true;
                this.activeId=element.id;
            }
        })
    }
  }
}
</script>


<style lang="scss" scoped>
.user_profile_wrapper{
    display: flex;
    .user_profile_left{
        display: flex;
        justify-content: flex-end;
        padding: 0 !important;
    }
}

.user_profile_box{
    border: 1px solid #efefef;
    width: 60%;
    height: 650px;
    background: #fff;
    .user_profile_box_head{
        padding: 20px 15px;
        .follow_button{
            background: #CEBE79;
            color: #efefef;
            font-weight: 600;   
        }
        .button{
            border: 1px solid #CEBE79;
            padding: 10px 55px;
            cursor: pointer;
            font-size: 15px;
        }
        .user_titles{
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            .user_name{
                font-size: 18px;
                font-weight: 600;
            }
            .user_job{
                font-weight: 500;
            }
        }
        .user_description{
            margin-top: 15px;
            color: #6d6d6d;
        }
        .profile_statistic{
            display: flex;
            margin-top: 20px;
            justify-content: space-between;
            .count{
                display: flex;
                flex-direction: column;
               
                &:first-child{
                     border-right: 1px solid #CEBE79;
                     
                }   
                padding: 0 20px 0 5px;
                .count_text{
                    font-weight: 600;
                    color: #6d6d6d;
                }
            }
        }
        .user_image{
            img{
             border-radius: 5px;
             width: 60px;
             height: 60px;
            }
        }
    }
    .user_profile_box_menu_wrapper{
        .user_profile_box_menu_item{
            display: flex;
            align-items: center;
            font-size: 17px;
            padding: 10px 20px;
             color: #6d6d6d;
             cursor: pointer;
             margin-bottom:10px;
             &:last-child{
                 margin-bottom: 0;
             }
            svg{
                width: 25px;
                height: 25px;
                margin-right: 20px;
            }
            span{
                font-weight: 600;
            }
            // &:hover{
            //     background: #cebe79;
            //     border-radius: 20px;
            //     color: #fff;
            // }
        }
        .active{
            background: #CEBE79;
            border-radius: 7px;
            color: #fff;
            z-index: 7;
            width: 105%;
            position: relative;
            right: 10px;
            padding: 10px 30px;
        }
    }

}
.user_infos_box_wrapper{
     padding: 0 !important;
    .user_infos_box{
        margin-top: 150px;
        border-top: 1px solid #efefef;
        background: #fff;
        width: 100%;
        height: 100%;
        z-index: 3;
        .left_box{
            width: 50%;
        }
    }
    .info_box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .info_titles{
            display: flex;
            flex-direction: column;
        }
        .info_image{
            margin-right: 15px;
            img{
                width:50px ;
                height: 50px;
            }
        }

    }
}
.user_profile{
    // display: block;
    // position: absolute;
    // top: 150px;
    z-index: 1;
    position: relative;
    top: -280px;
    width: 100%;
    min-height: 1000px;
    // background: #fff;
    // padding: 0 300px;
}
.user_profile_cover{
    position: relative;
    .user_profile_banner{   
        img{
            width: 100%;
            height: 300px;
        }
}
    .user_profile_picture{
      position: absolute;
      bottom: -50px;
      left: 41%;
      right: 41%;
      width: 18%;
      height: 200px;
      background: #F7F7F7;
      border-radius: 50%;
        img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        padding: 5px;
        border-radius: 50%;
    }
}
}
    .user_profile_title{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
    hr{
        width: 40%;
        border-color:#cebe79;
        border-width: 2px;
    }
    span{
        width: 20%;
        text-align: center;
        color: #cebe79;
        font-weight: 600;
        font-size:16px;
    }
    }
    .user_projects_wrapper{
        display: flex;
        flex-wrap: wrap;
        .user_project{
            width: 250px;
            height: 300px;
            border: 1px solid black;
             margin-right: 30px;
             margin-top: 20px;
             &:last-child{
                 margin-right: 0;
             }
        }
    }
    .user_profile_infos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
        border: 1px solid #CEBE79;
        border-width: 0 2px 2px 2px;
        height: 250px;  
        position: relative;
        top: -18px;
        .user_profile_info{
            display: flex;
            flex-direction: column;
            h4{
                float: left;
            }

        }
    }


</style>