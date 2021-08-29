<template>
  <div class="register_wrapper">
     <div class="register_left">
        <img src="@/assets/images/login.png" alt="">
     </div>
     <div class="register_right">
       <div class="register_right_box">
          <div class="register_right_box_form">
              <form>
                <Toggle value1="İş Arayan" value2="İş Veren" class="col-12 mb-4"/>
                <div class="d-flex justify-content-between">
                <div class="mb-3 col-lg-6">
                  <V-Input type="text" placeholder="Lütfen Adınızı Giriniz." label="Adı"/>
                </div>
                <div class="mb-3 col-lg-6">
                  <V-Input type="text" placeholder="Lütfen Soyadınızı Giriniz" label="Soyadı"/>
                </div>
                </div>
                <div class="mb-3 col-12">
                  <V-Input type="email" placeholder="Lütfen E-Posta Adresinizi Giriniz" label="E-Posta"/>
                </div>
                <div class="mb-3 col-12">
                    <V-Input type="phone" placeholder="Lütfen E-Posta Adresinizi Giriniz" label="Telefon Numarası"/>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="mb-3 col-lg-6">
                  <V-Input type="password" placeholder="Lütfen Şifrenizi Giriniz" label="Şifre" iconRight="eye"/>
                </div>
                <div class="mb-3 col-lg-6">
                  <V-Input type="password" placeholder="Lütfen Şifrenizi Tekrar Giriniz" label="Şifre Tekrar" iconRight="eye"/>
                </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn create_account_button" >Kayıt Ol</button>
                </div>
                <div class="is_there_account col-12">
                  <span>Zaten bir hesabınız var mı?</span><nuxt-link to="/login">Hemen giriş yapın.</nuxt-link>
                </div>
              </form>
          </div>
       </div>
     </div>
  </div>
</template>

<script>
import Toggle from '@/components/Toggle.vue'
export default {
  components:{
    Toggle
  },

}
</script>

<style lang="scss" scoped>
.register_wrapper{
  display: flex;
}
.register_left{
  flex: 1;
  width: 50%;
  img{
    width: 100%;
  }
}
.register_right{
  background: #f5d4d4;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &_box{
    width: 700px;
    // border: 1px solid #efefef;
    // background: #efefef;
    &_form{
      padding: 20px;
    }
  }
  .create_account_button{
    border-color: #CEBE79;
    width: 100%;
    color: #fff;
    background: #CEBE79;
    &:focus{
      border-color: #CEBE79;
    }
  }
  .is_there_account{
    margin: 20px 0px;
    a{
     padding-left: 5px;
     color: #E367A7;
    }
  }
}
</style>