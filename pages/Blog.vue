<template>
  <div class="container blog_page">
      <div class="blog_page_header">
          <h4 class="">From the Blog</h4>
      </div>
      <div class="blog_items">
          <div class="blog_item_main">
              <div class="blog_item_image">
                  <img :src="require('@/assets/images/photo6.jpg')" alt="" srcset="">
              </div>
          </div>
          <div class="blog_item" v-for="blog in blogs" :key="blog.id" :class="blog.id===0 ? 'first-child':blog.id%3===2? 'last-child':''"  >
              <div class="blog_item_image">
                  <img :src="require(`@/assets/images/${blog.picture}.jpg`)" alt="" srcset="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        blogs:[
            {
                id:0,
                picture:'photo1'
            },
            {
                id:1,
                picture:'photo2'
            },
            {
                id:2,
                picture:'photo3'
            },
            {
                id:3,
                picture:'photo4'
            },
            {
                id:4,
                picture:'photo5'
            },
                        {
                id:5,
                picture:'photo6'
            },
            {
                id:6,
                picture:'photo7'
            },
            {
                id:7,
                picture:'photo8'
            },
            {
                id:8,
                picture:'photo9'
            }
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.blog_page{
    margin-top: 20px;
    &_header{
        display: flex;
        justify-content: center;
    }
}
.blog_items{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    .blog_item_main{
        .blog_item_image{
            margin-right: 10px;
            img{
                width: 720px;
                height: 325px;
                border-radius: 6px;
            }
        }
    }
    .blog_item{
        margin-right: 10px;
        margin-top: 30px;
        &.first-child{
            margin: 0;
        }
        // &.last-child{
        //     margin-right: 20px;
        // }
        .blog_item_image{
            

            img{
                width: 355px;
                height: 325px;
                border-radius: 6px;
            }
        }
    }
}
</style>