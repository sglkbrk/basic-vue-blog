<template>
    <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
              <div class="row mb-4">
                <div class="col-md-6">
                  <h2 class="mb-4">Category: {{categoryItem.title}}</h2>

                </div>
              </div>
              <div class="row blog-entries">
                <div class="col-md-12 col-lg-8 main-content">
                  <div class="post-content-body" v-html="categoryItem.content">
                  </div>
                  <div class="row mb-5 mt-5">
                      <categotyPost v-bind:categoryId="categoryItem.id"> </categotyPost>
                  </div>
                  <postCatgPagination serviceName="PostService" methodName="getAllPostCategoryCount" v-bind:categoryId="categoryItem.id"  ></postCatgPagination>
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

    import categotyPost from "./content/categotyPost.vue"
    import searhPost from "../global/searhPost.vue"
    import postCatgories from "../global/postCatgories.vue"
    import populerPost from "../global/populerPost.vue"
    import sidebarWidgets from "../global/sidebarWidgets.vue"
    import postCatgPagination from "./content/postCatgPagination.vue"
    import PostService from "../../service/PostService"
    export default {
        name: 'content2',
        components: {
          categotyPost,
          postCatgories,
          populerPost,
          sidebarWidgets,
          postCatgPagination,
          searhPost
        },
        data(){
            return{
                categoryItem:{}
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
          getCategoryPosts:function function_name() {
            var params = this.$route.params
            var query = {
                slug: params.id
            }
            PostService.getMedhod(query).then(res => {
                this.categoryItem = res.objects[0]
            })
          }
      }
  }
</script>