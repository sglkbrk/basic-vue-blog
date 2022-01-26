<template>
    <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
              <div class="row mb-4">
                <div class="col-md-6">
                  <h2 class="mb-4">Tag: {{tagItem.title}}</h2>

                </div>
              </div>
              <div class="row blog-entries">
                <div class="col-md-12 col-lg-8 main-content">
                  <div class="row mb-5 mt-5">
                      <tagsPost v-bind:categoryId="tagItem.id"> </tagsPost>
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

    import tagsPost from "./content/tagsPost.vue"
    import searhPost from "../global/searhPost.vue"
    import postCatgories from "../global/postCatgories.vue"
    import populerPost from "../global/populerPost.vue"
    import sidebarWidgets from "../global/sidebarWidgets.vue"
    import PostService from "../../service/PostService"
    export default {
        name: 'content2',
        components: {
          tagsPost,
          postCatgories,
          populerPost,
          sidebarWidgets,
          searhPost
        },
        data(){
            return{
                tagItem:{}
            }
        },
        created: function () {
            this.getCategoryPosts();
        },
        watch:{
            $route (){
               this.getCategoryPosts();
            }
        },
        methods:{
          getCategoryPosts:function () {
            var params = this.$route.params
            var query = {
                slug: params.id
            }
            PostService.getMedhod(query).then(res => {
              debugger
                this.tagItem = res.objects[0]
            })
          }
      }
  }
</script>