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
              <div class="blog_item_desc">
                  <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, similique.</span>
              </div>
          </div>
          <div class="blog_item" v-for="blog in blogs" :key="blog.id" :class="blog.id===0 ? 'first-child':blog.id%3===2? 'last-child':''"  >
              <nuxt-link :to="{name:'BlogDetail',params:{slug:blog.slug}}" class="blog_item_image">
                  <img :src="require(`@/assets/images/${blog.picture}.jpg`)" alt="" srcset="">
              </nuxt-link>
              <div class="blog_item_desc">
                  <span>{{blog.title}}</span>
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
                picture:'photo1',
                slug:'blog-1',
                title:'Blog-1 için açıklama'
            },
            {
                id:1,
                picture:'photo2',
                slug:'blog-2',
                 title:'Blog-2 için açıklama'
            },
            {
                id:2,
                picture:'photo3',
                slug:'blog-3',
                 title:'Blog-3 için açıklama'
            },
            {
                id:3,
                picture:'photo4',
                slug:'blog-4',
                 title:'Blog-4 için açıklama'
            },
            {
                id:4,
                picture:'photo5',
                slug:'blog-5',
                 title:'Blog-5 için açıklama'
            },
                        {
                id:5,
                picture:'photo6',
                slug:'blog-6',
                 title:'Blog-6 için açıklama'
            },
            {
                id:6,
                picture:'photo11',
                slug:'blog-7',
                 title:'Blog-7 için açıklama'
            },
            {
                id:7,
                picture:'photo8',
                slug:'blog-8',
                 title:'Blog-8 için açıklama'
            },
            {
                id:8,
                picture:'photo9',
                slug:'blog-9',
                 title:'Blog-9 için açıklama'
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
.blog_item_desc{
    font-size: 18px;
    position: absolute;
    bottom: 0;
    color: #fff;
    font-weight: 600;
    padding: 20px;
}
.blog_items{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    
    
    .blog_item_main{
         position: relative;
         cursor: pointer;
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
        position: relative;
        cursor: pointer;
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