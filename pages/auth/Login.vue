<template>
  <div class="login_page">
      <div class="login_page_left">
        <img src="@/assets/images/login.png" alt="">
      </div>
      <div class="login_page_right">
        <div class="login_page_right_box">

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
    align-items: center;
    justify-content: center;
    &_box{
      width: 500px;
      height: 500px;
      background: #EFEFEF;
      border: 1px solid #EFEFEF;
      border-radius: 10px;
    }
  }
}
</style>