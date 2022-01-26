<template>
  <div class="col-md-12">
    <div v-for="post in categoryItemList" v-bind:key="post.slug" class="post-entry-horzontal">
      <a v-bind:href="page + post.slug" style="width:100%;">
        <div class="image element-animate" data-animate-effect="fadeIn"
          v-bind:style="{ 'background-image': 'url(' + post.metadata.image.url + ')' }"></div>
        <span class="text">
          <div class="post-meta">
            <span v-if="post.metadata.author.metadata && post.metadata.author.metadata.authorimg"
              class="author mr-2"><img v-bind:src="post.metadata.author.metadata.authorimg.imgix_url">
              {{post.metadata.author.title}}</span>&bullet;
            <span class="mr-2">{{ moment(post.metadata.author.modified_at,"YYYYMMDD").format('MMM DD, YYYY') }}</span>
            &bullet;
            <span class="mr-2">{{post.metadata.category.title}}</span> &bullet;
            <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
          </div>
          <h2>{{post.title}}</h2>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  import * as moment from 'moment'
  import {mapActions } from 'vuex';
  import PostService from "../../../service/PostService"
  export default {
    name: 'categotyPost',
    props: ["categoryId"],
    data() {
      return {
        moment: moment,
        page: "/detay/",
        categoryItemList: []
      }
    },
    created: function () {
      this.moment.locale('tr');
    },
    watch: {
      categoryId() {
        this.getCategoryPosts();
      },
      $route() {
        this.getCategoryPosts();
      }
    },
    methods: {
      ...mapActions([
        'updateSpinnerShow'
      ]),
      getCategoryPosts: function function_name() {
        var params = this.$route.params
        if (!this.categoryId) return;
        var query = {
          "$or":[
            {"metadata.subcategory":this.categoryId},
            {"metadata.category":this.categoryId}
          ],
          type: 'posts'
        }
        var props = "id,slug,title,metadata,"
        var skip = params.skip ? params.skip : 1;
        this.updateSpinnerShow(true);
        PostService.getMedhod(query, props, "", skip).then(res => {
          this.categoryItemList = res.objects
          this.updateSpinnerShow(false);
        })
      },
    }
  }
</script>