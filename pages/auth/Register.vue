<template>
  <div class="register_wrapper">
     <div class="register_left">
        <img src="@/assets/images/login.png" alt="">
     </div>
     <div class="register_right">
       <div class="register_right_box">
          <div class="register_right_box_form">
              <form>
                <Toggle value1="İş Veren" value2="İş Arayan"/>
                <div class="d-flex">
                  <div class="mb-3">
                  <label >Adı</label>
                  <input type="text" class="form-control" placeholder="Lütfen Adınızı Giriniz">
                </div>
                <div class="mb-3 ml-3">
                  <label >Soyadı</label>
                  <input type="text" class="form-control" placeholder="Lütfen Soyadınızı Giriniz">
                </div>
                </div>
                <div class="mb-3">
                  <label >E-Posta</label>
                  <input type="email" class="form-control" placeholder="Lütfen E-posta adresinizi giriniz">
                </div>
                <div class="mb-3">
                  <label >Telefon</label>
                  <input type="tel" class="form-control" placeholder="Bir numara giriniz">
                </div>
                <div class="d-flex">
                  <div class="mb-3">
                  <label >Şifre</label>
                  <input type="password" class="form-control" placeholder="Lütfen parolanızı giriniz">
                </div>
                <div class="mb-3 ml-3">
                  <label>Şifre Tekrar</label>
                  <input type="password" class="form-control" placeholder="Lütfen şifrenizi tekrar giriniz">
                </div>
                </div>

                <button type="submit" class="btn create_account_button">Kayıt Ol</button>
                <div class="is_there_account">
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
    width: 500px;
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
    float: right;
    a{
     padding-left: 5px;
     color: #E367A7;
    }
  }
}
</style>