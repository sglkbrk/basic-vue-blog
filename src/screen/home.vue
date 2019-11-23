<template>
  <div id="home">
    <div class="wrap">
      <headercmpn> </headercmpn>
      <banner></banner>
      <scontent></scontent>
      <sfooter></sfooter>
    </div>
  </div>
</template>
<script>
  import headercmpn from "../components/global/header.vue"
  import banner from "../components/global/banner.vue"
  import scontent from "../components/home/content.vue"
  import sfooter from "../components/global/footer.vue"
  
  export default {
    name: 'home',
    components: {
      headercmpn,
      banner,
      scontent,
      sfooter
    }
  }
</script>
