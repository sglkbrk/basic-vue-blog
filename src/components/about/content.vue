<template>
    <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
              <div class="row blog-entries">
                <div class="col-md-12 col-lg-8 main-content">
                  <div class="row">
                      <aboutContent > </aboutContent>
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

    import aboutContent from "./content/aboutContent.vue"
    import searhPost from "../global/searhPost.vue"
    import postCatgories from "../global/postCatgories.vue"
    import populerPost from "../global/populerPost.vue"
    import sidebarWidgets from "../global/sidebarWidgets.vue"
    export default {
        name: 'about',
        components: {
          aboutContent,
          postCatgories,
          populerPost,
          sidebarWidgets,
          searhPost
        }
  }
</script>