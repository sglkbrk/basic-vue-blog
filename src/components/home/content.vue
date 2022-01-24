<template>
    <section class="site-section py-sm">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 style="marginTop:5px" class="mb-4">Tüm İçerikler</h2>
            </div>
          </div>
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">           
                <post > </post>
               <blogPagination serviceName="PostService" methodName="getAllPostCount" ></blogPagination>
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
    import blogPagination from "../global/blogPagination.vue"
    export default {
        name: 'banner',
        components: {
          post,
          postCatgories,
          populerPost,
          sidebarWidgets,
          blogPagination,
          searhPost
        },
  }
</script>