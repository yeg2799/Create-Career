<template>
  <div class="container job_detail_box">
    <div class="box job_detail_left col-8">
        <div class="box_header">
            <h4 class="title">GENEL NİTELİKLER VE İŞ TANIMI</h4>
        </div>
        <div class="job_detail_content">
            <div class="content_wrapper">
                <!-- <img :src="require('@/assets/images/photo5.jpg')" alt="" srcset=""> -->
                <p class="content_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut vel officia totam facere provident fuga veritatis enim doloribus molestiae, et labore, est sit ipsum hic quia dolorem blanditiis neque temporibus laborum, maiores nulla eveniet? Ex, quia nisi. Minima vero alias, ea animi molestias veniam quaerat explicabo similique fuga fugit! Eum eveniet tempore in explicabo nesciunt? Reiciendis omnis enim rerum. Deserunt nam praesentium porro hic laboriosam, officia, voluptas vel, magni fugit dolor incidunt eveniet amet harum ab? Ex quam magni optio unde qui, ducimus natus sequi at nemo, distinctio corporis doloribus. Porro saepe consectetur eveniet numquam libero consequatur dolorum repudiandae deserunt quaerat ipsam eos, animi nostrum ipsum odio, optio non quibusdam illum et hic dolore suscipit reiciendis iusto exercitationem. A repellat id placeat porro aut. Commodi facere suscipit sint fugit esse ea, quisquam in, aut eveniet cupiditate omnis, deserunt fuga voluptate. Rem vel numquam, fuga officiis fugiat ad sequi ut odit, enim eveniet minima quisquam magnam quia error alias consequatur beatae doloremque ea. Cupiditate saepe porro, debitis vero ratione sed expedita, ea, sint magnam praesentium eius unde! Inventore, odio. Cumque vel soluta quos! Repellendus non minima ex ipsum ad, nisi ab amet sed similique delectus totam expedita, a nihil animi?</p>
            </div>

        </div>
    </div>
    <div class="job_detail_right col-4">
        <div class="box">
            <div class="box_header">
                <h4 class="title">Firma Bilgileri</h4>
            </div>
            <div class="info_workplace mb-2">
                <img :src="require('@/assets/images/photo5.jpg')" alt="" srcset="">
            </div>
        </div>

        <div class="box mt-3">
        <div class="box_header">
           <h4 class="title">Önerilen İş İlanları</h4>
       </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.job_detail_box{
    margin-top: 10px;
    height: 800px;
    display: flex;
}
.job_detail_content{
    // display: flex;
    .content_wrapper{
    // height: 340px;
    // img{
    //     float: left;
    //     width: 350px;
    //     margin: 0 15px 0 0;
    // }
    }
    .content_desc{
        text-align: justify;
    }
}
.info_workplace{
     width: 90%;
     margin: 0 auto;
    img{
        width: 100%;
        height: 150px;
        border-radius: 3px;
    }
}
</style>