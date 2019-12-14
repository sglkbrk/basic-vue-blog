<template>
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
                      <sendMail > </sendMail>
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
</template>

<script>

    import sendMail from "./content/sendMail.vue"
    import searhPost from "../global/searhPost.vue"
    import postCatgories from "../global/postCatgories.vue"
    import populerPost from "../global/populerPost.vue"
    import sidebarWidgets from "../global/sidebarWidgets.vue"
    export default {
        name: 'contactContent',
        components: {
          sendMail,
          postCatgories,
          populerPost,
          sidebarWidgets,
          searhPost
        }
  }
</script>