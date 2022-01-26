<template>
  <div id="home">
    <div class="wrap">
      <headerBar> </headerBar>
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
                <postHbox v-bind:postData="postItems"></postHbox>
              </div>
              <pagination page="/category/" v-bind:query="pagQuery"></pagination>
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

  import { headerBar, sfooter, postHbox, searhPost, postCatgories, populerPost, sidebarWidgets, pagination } from "../components"
  import PostService from "../service/PostService"
  import {mapActions } from 'vuex';
  export default {
    name: 'category',
    components: {
      headerBar,
      sfooter,
      postHbox,
      postCatgories,
      populerPost,
      sidebarWidgets,
      pagination,
      searhPost,
    },
    data() {
      return {
        categoryItem: {},
        postItems: [],
        pagQuery:{}
      }
    },
    created: function () {
      this.getCategory();
    },
    watch: {
      $route() {
        this.getCategory();
      }
    },
    methods: {
      ...mapActions([
        'updateSpinnerShow'
      ]),
      getCategoryPosts(categoryId) {
         var params = this.$route.params
        var query = {
          "$or": [{
              "metadata.subcategory": categoryId
            },
            {
              "metadata.category": categoryId
            }
          ],
          type: 'posts'
        }
        var props = "id,slug,title,metadata,"
        var skip = params.skip ? params.skip : 1;
        this.updateSpinnerShow(true);
        PostService.getMedhod(query, props, "", skip).then(res => {
          this.postItems = res.objects
          this.updateSpinnerShow(false);
        })
      },
      getCategory() {
        var params = this.$route.params
        var query = {
          slug: params.id
        }
        PostService.getMedhod(query).then(res => {
          this.categoryItem = res.objects[0]
          this.getCategoryPosts(this.categoryItem.id);
          this.pagQuery = {
              'metadata.subcategory':this.categoryItem.id, 
              type:'posts'
          }
        })
      }
    }
  }
</script>