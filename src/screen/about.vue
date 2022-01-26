<template>
  <div id="home">
    <div class="wrap">
      <headerBar> </headerBar>
      <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="mb-4">Merhaba Ben {{user.title}}</h2>
                  <div class="post-content-body" v-html="user.content">
                  </div>
                </div>
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
  import PostService from "../service/PostService"
  import {
    mapActions
  } from 'vuex';
  import {
    headerBar,
    sfooter,
    searhPost,
    postCatgories,
    populerPost,
    sidebarWidgets
  } from "../components"
  export default {
    name: 'about',
    components: {
      headerBar,
      sfooter,
      postCatgories,
      populerPost,
      sidebarWidgets,
      searhPost
    },
    data() {
      return {
        aboutImageUrl: this.$imagesUrl + 'about.jpeg',
        user: {}
      }
    },
    created: function () {
      this.getUser();
    },
    methods: {
      ...mapActions([
        'updateSpinnerShow'
      ]),
      getUser: function function_name() {
        var query = {
          id: "61eece27584e8c0008f4b323"
        }
        this.updateSpinnerShow(true);
        PostService.getMedhod(query, "", false).then(res => {
          this.user = res.objects[0];
          this.updateSpinnerShow(false);
        })
      }
    }
  }
</script>