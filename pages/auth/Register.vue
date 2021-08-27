<template>
  <div class="register_wrapper">
     <div class="register_left">
        <img src="@/assets/images/login.png" alt="">
     </div>
     <div class="register_right">
       <div class="register_right_box">
          <div class="register_right_box_form">
              <form>
                <div class="mb-3">
                  <label >Adı</label>
                  <input type="text" class="form-control" placeholder="Lütfen Adınızı Giriniz">
                </div>
                <div class="mb-3">
                  <label >Soyadı</label>
                  <input type="text" class="form-control" placeholder="Lütfen Soyadınızı Giriniz">
                </div>
                <div class="mb-3">
                  <label >E-Posta</label>
                  <input type="email" class="form-control" placeholder="Lütfen E-posta adresinizi giriniz">
                </div>
               <div class="mb-3">
                  <label >Şifre</label>
                  <input type="password" class="form-control" placeholder="Lütfen parolanızı giriniz">
                </div>
                <div class="mb-3">
                  <label>Şifre Tekrar</label>
                  <input type="password" class="form-control" placeholder="Lütfen şifrenizi tekrar giriniz">
                </div>
                <button type="submit" class="btn create_account_button">Kayıt Ol</button>
              </form>
          </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.register_wrapper{
  display: flex;
}
.register_left{
  flex: 1;
  width: 50%;
  
}
.register_right{
  flex: 1;
  &_box{
    margin-top: 20px;
    width: 450px;
    height: 600px;
    border: 1px solid #efefef;
    background: #efefef;
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
}
</style>