<template>
    <div class="sidebar-box">
        <h3 class="heading">Popular İçerikler</h3>
        <div class="post-entry-sidebar">
          <ul>
            <li v-for="post in popularPostList" v-bind:key="post.slug"  >
              <a v-bind:href="page + post.slug" >
                <img v-bind:src="post.metadata.image.url"  alt="Image placeholder" class="mr-4">
                <div class="text">
                  <h4>{{post.title}}</h4>
                  <div class="post-meta">
                    <span class="mr-2">{{ moment(post.metadata.author.modified_at).format('MMM DD, YYYY') }}</span>
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
  import PostService from "../../service/PostService"
  export default {
    name: 'populerPost',
    data(){
        return {
          page:"/",
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
           var query = {
            'type':"posts", 
            'metadata.popular':true, 
          }
          PostService.getMedhod(query).then(res =>{
              this.popularPostList = res.objects
          })
        }
    }
  }
</script>