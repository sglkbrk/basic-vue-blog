<template>
    <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
              <div class="row mb-4">
                <div class="col-md-6">
                  <h2 class="mb-4">Aranan Kelime: {{value}}</h2>

                </div>
              </div>
              <div class="row blog-entries">
                <div class="col-md-12 col-lg-8 main-content">
                  <div class="row mb-5 mt-5">
                      <post> </post>
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

    import post from "./content/post.vue"
    import searhPost from "../global/searhPost.vue"
    import postCatgories from "../global/postCatgories.vue"
    import populerPost from "../global/populerPost.vue"
    import sidebarWidgets from "../global/sidebarWidgets.vue"
    export default {
        name: 'searchPostContent',
        components: {
          post,
          postCatgories,
          populerPost,
          sidebarWidgets,
          searhPost
        },
        data(){
            return{
                value:this.$route.params.text
            }
        },
        created: function () {
            this.value = this.$route.params.text
        },
        watch:{
            $route (){
                this.value = this.$route.params.text
            }
        }
  }
</script>