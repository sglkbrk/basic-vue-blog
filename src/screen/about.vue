<template>
  <div id="home">
    <div class="wrap">
      <headercmpn> </headercmpn>
      <scontent></scontent>
      <sfooter></sfooter>
    </div>
  </div>
</template>
<script>
  import headercmpn from "../components/global/header.vue"
  import scontent from "../components/about/content.vue"
  import sfooter from "../components/global/footer.vue"
  
  export default {
    name: 'about',
    components: {
      headercmpn,
      scontent,
      sfooter
    }
  }
</script>
