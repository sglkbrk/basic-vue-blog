<template>
  <div id="home">
    <div class="wrap">
      <headercmpn> </headercmpn>
      <tagscontent></tagscontent>
      <sfooter></sfooter>
    </div>
  </div>
</template>
<script>
  import headercmpn from "../components/global/header.vue"
  import tagscontent from "../components/tags/content.vue"
  import sfooter from "../components/global/footer.vue"
  
  export default {
    name: 'tags',
    components: {
      headercmpn,
      tagscontent,
      sfooter
    }
  }
</script>
