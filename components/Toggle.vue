<template>
  <div class="d-flex">
      <span :class="!isAccount? 'active':''">{{value1}}</span>
        <toggle-button 
           :value="isAccount"
           color="#CEBE79"
           :sync="true"
           :labels="false"
           @change="isAccount=!isAccount"
           class="toggle"
        />
       <span :class="isAccount? 'active':''">{{value2}}</span>
  </div>
</template>

<script>
export default {
    props: {
        value1:String,
        value2:String,
    },
    data(){
    return{
      isAccount:false
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle{
    padding: 0 10px;
}
span{
    font-size: 14px;
    font-weight: 600;
    color:#fff

}
.active{
    color:#730a0a;
}
</style>