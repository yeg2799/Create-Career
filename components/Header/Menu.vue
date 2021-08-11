<template>
 <div class="menu_wrapper">
        <div  v-for="menu in menus" :key="menu.id" class="menu_item">
            <nuxt-link :to="menu.slug">{{menu.name}}</nuxt-link>
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
                    slug:"/inspiration"
                },
                {
                    id:2,
                    name:"Find Work",
                     slug:"/find-work"
                },                
                {
                    id:3,
                    name:"Learn Design",
                    slug:"/learn-design"
                },
                {
                    id:4,
                    name:"Go Pro",
                    slug:"/go-pro"
                },
                {
                    id:5,
                    name:"Hire Designers",
                    slug:"/hire-designers"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.menu_wrapper{
    display: flex

}
.menu_item{
    margin-right: 10px;
    padding: 2px 10px;
    border-radius: 5px;
    a:hover{
    color: #776ec5;
    }
    &:last-child{
        margin-right: 0;
    }
}
</style>