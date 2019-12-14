<template>
    <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
              <div class="row blog-entries element-animate ">
                <div class="col-md-12 col-lg-8 main-content">
                    <post> </post>
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

    import post from "./content/post.vue"
    import searhPost from "../global/searhPost.vue"
    import postCatgories from "../global/postCatgories.vue"
    import populerPost from "../global/populerPost.vue"
    import sidebarWidgets from "../global/sidebarWidgets.vue"
    export default {
        name: 'content2',
        components: {
          post,
          postCatgories,
          populerPost,
          sidebarWidgets,
          searhPost
        },
  }
</script>