<template>
  <div class="login_page">
      <div class="login_page_left">
        <img src="@/assets/images/login.png" alt="">
      </div>
      <div class="login_page_right">
          <!-- <div class="login_page_right_header">
              <img src="@/assets/images/login4.png" alt="">
         </div> -->
        <div class="login_page_right_box">
          <div class="login_page_right_box_form">
              <form>
                <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Lütfen E-Posta adresinizi giriniz">
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" placeholder="Lütfen şifrenizi giriniz">
                </div>
                <button type="submit" class="btn">Giriş Yap</button>
                <nuxt-link to="/forget-password">Şifreni mi unuttun</nuxt-link>
                <button type="submit" class="btn create_account_button"> Yeni Hesap Oluştur</button>
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
.login_page{
  display: flex;
  &_left{
    width: 50%;
    flex: 1;
    img{
      width: 100%;
    }
  }
  &_right{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    &_header{

      img{
        width: 500px;
      }
    }
    &_box{
      width: 400px;
      height: 300px;
      background: #EFEFEF;
      border: 1px solid #EFEFEF;
      border-radius: 10px;
      &_form{
        padding: 20px;
        input{
          font-size: 14px;
        }
        button{
          width: 100%;
          background: #CEBE79;
          border-color: #CEBE79;
          color: #fff;
        }
        .create_account_button{
          background: #EFEFEF;
          color: #CEBE79;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>