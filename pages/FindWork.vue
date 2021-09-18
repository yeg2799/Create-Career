<template>
  <div class="container">
      <div class="find-work">
        <div class="find-work-left col-lg-8 col-12">
          <div class="suggestion-of-work">
            <div class="suggestion-of-work-header">
                <h4 class="title">Önerilen iş Aramaları</h4>
            </div>
            <div class="suggestion-of-work-badge_wrapper">
              <div class="badge" v-for="a in 10" :key="a">
                <span>FrontEnd Developer</span>
                <span class="badge-close">x</span></div>
            </div>
          </div>
        </div>
        <div class="find-work-right col-lg-4">
          <div class="filter-box">
            Filtrele
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
.find-work{
  display:flex;
  margin-top: 20px;
  .suggestion-of-work{
        width: 100%;
        border: 1px solid #efefef;
        background: #fff;
        border-radius: 10px;  
        &-header{
          .title{
            border-bottom: 1px solid #e6ecf5;
            color: #515365;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 20px;
            padding: 15px;
            position: relative;
            text-transform: capitalize;
            width: 100%;
          }
        }
        .suggestion-of-work-badge_wrapper{
          display: flex;
          flex-wrap: wrap;
          padding: 0 10px 10px;
          .badge{
            margin-top: 5px;
            
            margin-right: 5px;
            background: #efefef;
            padding: 5px 10px;
            &-close{
              margin-left: 2px;
            }
          }
        }
  }
}
</style>