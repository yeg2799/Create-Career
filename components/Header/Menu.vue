<template>
 <div class="menu_wrapper">
        <div  v-for="menu in menus" :key="menu.id" class="menu_item">
            <nuxt-link :to="`${menu.slug}`">{{menu.name}}</nuxt-link>
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
                    name:"Sosyal",
                    slug:"/social-media"
                },
                {
                    id:2,
                    name:"İş Bul",
                    slug:"/find-job"
                },                
                {
                    id:3,
                    name:"Tasarım Öğren",
                    slug:"/menu/learn-design"
                },
                {
                    id:4,
                    name:"Profesyonel Ol",
                    slug:"/menu/go-pro"
                },
                {
                    id:5,
                    name:"Tasarımcı Bul",
                    slug:"/menu/hire-designers"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables/_breakpoints";
.menu_wrapper{
    display: flex;
    
}
.menu_item{
    margin-right: 10px;
    padding: 2px 10px;
    border-radius: 5px;
    @include bp(tablet){
        display: none;
    }
    a:hover{
    color: #cebe79;
    }
    &:last-child{
        margin-right: 0;
    }
}
</style>