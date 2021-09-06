<template>
    <div class="popular_users_part">
          <h3>Popüler Kullanıcılar</h3>
          <div class="popular_users_wrapper">
            <div class="popular_users"  v-for="user in userInfos" :key="user.id">
            <div class="popular_users_header">
                <img :src="require(`@/assets/images/${user.imageUrl}.jpg`)" alt="">
            </div>
            <div class="popular_users_infos">
                <span class="popular_users_infos_name">{{user.userName}}</span>
                <div class="popular_users_infos_accounts" >
                  <div class="popular_users_infos_accounts" v-for="social in user.socialMediaAccounts" :key="social">
                    <a :href="social.url" class="icon_wrapper" target="_blank">
                      <SvgSprite :icon="social.icon" /> 
                    </a>
                  </div>

                </div>
            </div>
        </div>
          </div>
        </div>
</template>

<script>
export default {
  data(){
    return{
      userInfos:[
        {
          id:0,
          imageUrl:'photo8',
          userName:'Yunus Emre Güzel',
          socialMediaAccounts:[

            {
              url:'https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/',
              icon:'linkedin',
            },
            {
              url:'https://www.facebook.com/emre.guzel.3386/',
              icon:'facebook',
            },
                        {
              url:'https://www.instagram.com/_emrguzel_/',
              icon:'instagram',
            },
            {
              url:'https://twitter.com/emrex99',
              icon:'twitter',
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.popular_users_part{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.popular_users_wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.popular_users{
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right:40px ;
  &_infos{
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &_name{
      font-weight: 500;
    }
    &_accounts{
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .icon_wrapper{
        // border: 1px solid black;
        // padding: 5px;
        // border-radius: 50%;
      //   padding: 10px;
      svg{
        cursor: pointer;
      }
      }

    }
  }
  &:last-child{
    margin-right:0;
  }
  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
</style>