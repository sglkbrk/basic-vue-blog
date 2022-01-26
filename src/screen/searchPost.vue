<template>
  <div id="home">
    <div class="wrap">
      <headerBar> </headerBar>
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
                <postHbox v-bind:postData="postItems"> </postHbox>
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
    postHbox,
    searhPost,
    postCatgories,
    populerPost,
    sidebarWidgets
  } from "../components"
  import {
    mapActions
  } from 'vuex';
  import PostService from "../service/PostService"
  export default {
    name: 'searchPost',
    components: {
      headerBar,
      sfooter,
      postHbox,
      postCatgories,
      populerPost,
      sidebarWidgets,
      searhPost
    },
    data() {
      return {
        value: this.$route.params.text,
        postItems: []
      }
    },
    created: function () {
      this.value = this.$route.params.text
      this.getSearchData();
    },
    watch: {
      $route() {
        this.value = this.$route.params.text
        this.getSearchData();
      }
    },
    methods: {
      ...mapActions([
        'updateSpinnerShow'
      ]),
      getSearchData: function function_name() {
        var params = this.$route.params
        var query = {
          'content': {
            "$regex": params.text,
            "$options": "i"
          },
          type: 'posts'
        }
        this.updateSpinnerShow(true);
        PostService.getMedhod(query).then(res => {
          this.postItems = res.objects
          this.updateSpinnerShow(false);
        })
      }
    }
  }
</script>