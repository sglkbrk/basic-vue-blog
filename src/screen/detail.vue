<template>
  <div id="home">
    <div class="wrap">
      <headerBar> </headerBar>
      <section class="site-section py-sm">
        <div class="container" style="margin-top: 100px;">
          <div class="row blog-entries element-animate ">
            <div class="col-md-12 col-lg-8 main-content">
              <div v-if="item && item.metadata">
                <img v-bind:src="item.metadata.image.url" alt="Image" class="img-fluid mb-5">
                <div class="post-meta">
                  <span class="author mr-2"><img v-bind:src="item.metadata.author.metadata.authorimg.url" alt="Burak"
                      class="mr-2"> {{item.metadata.author.title}}</span>&bullet;
                  <span class="mr-2">{{ moment(item.metadata.author.created).format('MMM DD, YYYY') }}</span> &bullet;
                  <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                </div>
                <h1 class="mb-4">{{item.title}}</h1>
                <a class="category mb-5"
                  v-bind:href="categoryPage + item.metadata.category.slug">{{item.metadata.category.title}}</a>
                <a class="subcategory mb-5"
                  v-bind:href="categoryPage + item.metadata.subcategory.slug">{{item.metadata.subcategory.title}}</a>
                <div class="post-content-body" v-html="item.content">
                </div>
                <div class="pt-5">
                  <p v-if="item.metadata.tags">Tags:
                    <a v-for="tag in item.metadata.tags" v-bind:key="tag.id"
                      v-bind:href="tagsPage + tag.slug">{{tag.title}}</a>
                  </p>
                </div>
                <comments v-bind:postid="item.slug"></comments>
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
  import * as moment from 'moment'
  import PostService from "../service/PostService"
  import { mapActions } from 'vuex';
  import {
    headerBar,
    sfooter,
    searhPost,
    postCatgories,
    populerPost,
    sidebarWidgets,
    comments
  } from "../components"
  export default {
    name: 'postDetay',
    components: {
      headerBar,
      sfooter,
      comments,
      postCatgories,
      populerPost,
      sidebarWidgets,
      searhPost
    },
    data() {
      return {
        categoryPage: "/category/",
        tagsPage: "/tags/",
        moment: moment,
        item: {}
      }
    },
    created: function () {
      this.getData();
      this.setSizePost();
      this.moment.locale('tr');
    },
    methods: {
      ...mapActions([
        'updateSpinnerShow'
      ]),
      getData: function function_name() {
        var params = this.$route.params
        if (!params.id) return;
        var query = {
          slug: params.id
        }
        this.updateSpinnerShow(true);
        PostService.getMedhod(query).then(res => {
          this.item = res.objects[0];
          this.updateSpinnerShow(false);
        })
      },
      setSizePost: function () {
        var params = this.$route.params
        if (!params.id) return;
        fetch(this.$serviceUrl + 'PostService/setSizePost/' + params.id, {
          method: 'GET'
        })
      }
    }
  }
</script>