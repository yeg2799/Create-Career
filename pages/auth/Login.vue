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
                  <div id="emailHelp" class="form-text">Asla bilgilerinizi 3. bir kişiyle paylaşmayız.</div>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" placeholder="Lütfen şifrenizi giriniz">
                </div>
                <div class="d-flex flex-column">
                  <button type="submit" class="btn">Giriş Yap</button>
                  <nuxt-link to="/forget-password" class="forget_password">Şifreni mi unuttun</nuxt-link>
                  <div class="isnot_there_account">
                    <span>Bir Hesabınız yok mu?</span> <nuxt-link to="/register" class="create_account">Hemen ücretsiz kayıt olun.</nuxt-link>
                  </div>
                </div>

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
    background: #f5d4d4;
    &_header{

      img{
        width: 500px;
      }
    }
    &_box{
      width: 400px;
      height: 300px;
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
        .forget_password{
          color: #E367A7;
          padding: 10px 0px;
        }
        .isnot_there_account{
          a{
            color: #E367A7;
          }
        }
      }
    }
  }
}
</style>