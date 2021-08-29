<template>
  <div class="vue-input">
      <SvgSprite :icon="icon" v-if="icon"/>
      <input :type="type" :placeholder="placeholder" class="form-control" />
      <SvgSprite :icon="iconRight" v-if="iconRight"/>
  </div>
</template>

<script>
export default {
    props:{
        icon:{
            required:false,
            type:String,
            default:''
        },
        iconRight:{
            required:false,
            type:String,
            default:''
        },
        type:{
            required:true,
            type:String,
            default:'text'
        },
        placeholder:{
            required:false,
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>
.vue-input{
    input{
        font-size: 12px;
        padding: 15px 20px;
    }
}
</style>