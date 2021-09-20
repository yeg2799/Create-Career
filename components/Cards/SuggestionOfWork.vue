<template>
  <div class="suggestion-of-work box">
    <div class="suggestion-of-work-header box_header">
      <h4 class="title">Önerilen iş Aramaları</h4>
    </div>
    <div class="suggestion-of-work-badge_wrapper">
      <div class="badge" v-for="a in 10" :key="a">
        <span>FrontEnd Developer</span>
        <span class="badge-close">x</span></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .suggestion-of-work{
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
</style>