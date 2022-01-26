<template>
  <div id="home">
    <div class="wrap">
      <headerBar> </headerBar>
      <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">
              <div class="row mb-4">
                <div class="col-md-6">
                  <h1>Mesaj Gönder</h1>
                </div>
              </div>
              <div class="row mb-5 mt-5">
                <sendMail> </sendMail>
              </div>
            </div>
            <div class="col-md-12 col-lg-4 sidebar">
              <searhPost></searhPost>
              <sidebarWidgets></sidebarWidgets>
              <populerPost></populerPost>
              <postCatgories></postCatgories>
            </div>
          </div>
        </div>
      </section>
      <sfooter></sfooter>
    </div>
  </div>
</template>

<script>
  import {
    headerBar,
    sfooter,
    sendMail,
    searhPost,
    postCatgories,
    populerPost,
    sidebarWidgets
  } from "../components"
  export default {
    name: 'contact',
    components: {
      headerBar,
      sfooter,
      sendMail,
      postCatgories,
      populerPost,
      sidebarWidgets,
      searhPost
    }
  }
</script>