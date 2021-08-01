<template>
 <div class="d-flex align-items-center menu">
     <div class="d-flex menu-wrapper">
     <div  v-for="menu in menus" :key="menu.id">
         <span>{{menu.name}}</span>
     </div>
     </div>

</div> 
</template>

<script>
export default {
    data(){
        return{
            menus:[
                {
                    id:1,
                    name:"Inspiration",
                },
                {
                    id:2,
                    name:"Find Work",
                },                
                {
                    id:3,
                    name:"Learn Design",
                },
                {
                    id:4,
                    name:"Go Pro",
                },
                {
                    id:5,
                    name:"Hire Designers",
                }
            ]
        }
    }
}
</script>

<style>
.menu{
    width: 100%;
    height: 80px;
    background: gray;
    font-size: 16px;
    font-weight: 400;
}
</style>