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
              if (!params.id) return;
              fetch("https://api.cosmicjs.com/v2/buckets/aae94e00-7cee-11ec-beab-9dd501a9929f/objects?query=%7B%22slug%22%3A%22" +params.id+ "%22%7D&pretty=true&read_key=yYSE7iOjsZUlAgvtuhAbUAPOFktp0oL8BTqBE1LSBPLkuwqd7k&props=id,slug,title,content,metadata," , {
                  method: 'GET'
              })
                  .then(response => response.json())
                  .then(json =>{
                  this.categoryItem = json.objects[0]
              })
          }
      }
  }
</script>