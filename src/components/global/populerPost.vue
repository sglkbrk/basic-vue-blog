<template>
    <div class="sidebar-box">
        <h3 class="heading">Popular İçerikler</h3>
        <div class="post-entry-sidebar">
          <ul>
            <li v-for="post in popularPostList" v-bind:key="post.id"  >
              <a v-bind:href="page + post.url" >
                <img v-bind:src="$imagesUrl + post.imgsrc"  alt="Image placeholder" class="mr-4">
                <div class="text">
                  <h4>{{post.title}}</h4>
                  <div class="post-meta">
                    <span class="mr-2">{{ moment(post.date,"YYYYMMDD").format('MMM DD, YYYY') }}</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
  import * as moment from 'moment'
  export default {
    name: 'populerPost',
    data(){
        return {
          page:"/detay/",
          moment:moment,
          popularPostList: [],
        }
    },
    created: function () {
        this.getData();
        this.moment.locale('tr');
    },
    methods:{
        getData:function () {
            fetch(this.$serviceUrl+'PostService/getPopularPost ', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json =>{
                this.popularPostList = json;
            })
        }
    }
  }
</script>