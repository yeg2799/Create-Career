<template>
  <div class="vue-input">
      <label class="vue-input-label">{{label}}</label>
      <div class="vue-input-body">
            <SvgSprite :icon="icon" class="icon-left" v-if="icon && type!=='phone'"/>
            <input :type="type" :placeholder="placeholder" class="form-control" v-if="type!=='phone'"/>
            <vue-tel-input v-model="phone" placeholder="Telefon numaranızı giriniz" v-if="type==='phone'"></vue-tel-input>
            <SvgSprite :icon="iconRight" class="icon-right" v-if="iconRight && type!=='phone'"/>
      </div>

  </div>
</template>

<script>
export default {
    props:{
        label:{
            required:false,
            type:String,
            default:''
        },
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
    &-label{
        font-size: 16px;
        color: #fff;
        font-weight: 600;
        margin-left: 30px;
    }
    &-body{
        display: flex;
        align-items: center;
        position: relative;
    .icon-right{
        position: absolute;
        right: 10px;
        cursor: pointer;
    }
    .icon-left{
        position: absolute;
        left: 10px;
    }
    input{
        font-size: 14px;
        padding: 15px 30px;
        border-radius: 5px;
        height: 50px;
    }
    }
    .vue-tel-input{
        width: 100%;
        height: 50px;
        border-radius: 5px;
    }
}
</style>