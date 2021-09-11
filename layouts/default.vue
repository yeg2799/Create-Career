<template>
  <div class="default_layout">
        <Header />
      <main>
          <Nuxt />
             <!-- <vue-cobra
      :height="10"
      :zIndex="900"
      color="#4fc08d"
      :opacity="0.5"
      position="left"
    /> -->
      </main>
          <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
// import vueCobra from "vue-cobra";
export default {
components:{
  Header,
  Footer,
  // vueCobra
}
}
</script>

<style>
/* .default_layout{
  overflow: hidden;
} */
</style>