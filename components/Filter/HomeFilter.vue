<template>
  <div>
    <div class="filter">
        <!-- <div class="dropdown">
            <span>Popular</span>
            <svg-sprite icon="dropdown" />
        </div> -->
        <div class="filter_menu">
            <span class="filter_menu_item active">All</span>
            <span class="filter_menu_item">Animation</span>
            <span class="filter_menu_item">Branding</span>
            <span class="filter_menu_item">Illustration</span>
            <span class="filter_menu_item">Mobile</span>
            <span class="filter_menu_item">Print</span>
            <span class="filter_menu_item">Product Design</span>
            <span class="filter_menu_item">Web Design</span>
        </div>
        <!-- <div class="filter_dropdown" :class="isOpenFilterPopup? 'active_dropdown':''" @click="isOpenFilterPopup=!isOpenFilterPopup">
            <span>Filters</span>
        </div> -->
         <!-- <div class="filter_dropdown">
            <span>Filters</span>
        </div> -->
    </div>
    <!-- <transition name="fade" >
        <div class="popup_filter_menu" v-if="isOpenFilterPopup">
            <div class="popup_filter_menu_item">
                <span>Tags</span>
                <input type="text" >
            </div>
            <div class="popup_filter_menu_item">
                <span>Tags</span>
                <input type="text" >
            </div>
            <div class="popup_filter_menu_item">
                <span>Tags</span>
                <input type="text" >
            </div>
            <div class="popup_filter_menu_item">
                <span>Tags</span>
                <input type="text" >
            </div>
        </div>
    </transition> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      isOpenFilterPopup:false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables/_breakpoints";
.filter{
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  padding: 10px 0px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  &_menu{
    display: flex;
    @include bp(mobile){
    overflow: auto;
    }
    &_item{
      cursor: pointer;
      display: inline;
      padding: 5px 20px;
        &:hover{
          color: #CEBE79;
        }
    }
  }
  .filter_dropdown{
    cursor: pointer;
    background: #e8e8e8;
    padding: 10px 20px;
    border-radius: 20px;
  }
  .active_dropdown{
    background: #CEBE79;
  }
  .active{
    background: #CEBE79;
    border-radius: 20px;
    color: #fff;
  }
  .dropdown{
    border: 2px solid #e8e8e8;
    display: inline;
    padding: 10px;
    border-radius:20px;
    font-size: 14px;
    cursor: pointer;
    &:hover{
      background-color: #e8e8e8;
      // border-color: #CEBE79;
    }
    span{
      margin-right: 20px;
    }
  }
}
.popup_filter_menu{
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &_item{
    display: flex;
    flex-direction: column;
    width: 20%;
    span{
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    input{
      border-radius: 10px;
      padding: 10px;
      background: #e8e8e8;
      border: 1px solid #e8e8e8;
    }
  }
}
</style>