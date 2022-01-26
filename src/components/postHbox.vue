<template>
  <div class="col-md-12">
    <div v-for="post in postData" v-bind:key="post.slug" class="post-entry-horzontal">
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
  export default {
    name: 'categotyPost',
    props: ["postData"],
    data() {
      return {
        moment: moment,
        page: "/",
      }
    },
    created: function () {
      this.moment.locale('tr');
    },
  }
</script>