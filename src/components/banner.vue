<template>
  <section class="site-section pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme home-slider">
            <div>
              <a v-if="bannerItem" v-bind:href="page + bannerItem.slug" class="a-block d-flex align-items-center height-lg"
                  v-bind:style="{ 'background-image': 'url(' + bannerItem.metadata.image.url + ')' }">
                <div class="text half-to-full">
                  <span class="category mb-5" v-bind:href="pageCategory + bannerItem.metadata.category.slug">{{bannerItem.metadata.category.title}}</span>
                  <div class="post-meta">
                    <span v-if="bannerItem.metadata.author.metadata" class="author mr-2"> <img v-bind:src="bannerItem.metadata.author.metadata.authorimg.url"
                        style="margin-right:15px;">{{bannerItem.metadata.author.title}}</span>&bullet;
                    <span class="mr-2">{{ moment(bannerItem.metadata.author.modified_at,).format('MMM DD, YYYY') }}</span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h3>{{bannerItem.title}}</h3>
                  <p>{{bannerItem.metadata.description}}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import * as moment from 'moment'
  import PostService from "../service/PostService"
  export default {
    name: 'banner',
    data() {
      return {
        moment: moment,
        bannerItem: "",
        page: "/",
        pageCategory:"/category/"
      }
    },
    created: function () {
      this.getBannerPost();
      this.moment.locale('tr');
    },
    methods: {
      getBannerPost: function () {
        var query = {
          'type': "posts",
          'metadata.banner': true,
        }
        PostService.getMedhod(query).then(res => {
          this.bannerItem = res.objects[0]
        })
      }
    }
  }
</script>