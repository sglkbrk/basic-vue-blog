<template >
     <div class="col-md-12">
      <div v-for="post in postItems" v-bind:key="post.slug"  class="post-entry-horzontal">
        <a v-bind:href="page + post.slug" style="width:100%;" >
          <div class="image element-animate" data-animate-effect="fadeIn" v-bind:style="{ 'background-image': 'url(' + post.metadata.image.url + ')' }"></div>
          <span class="text">
            <div class="post-meta">
              <span class="author mr-2"><img  v-bind:src="post.metadata.author.metadata.authorimg.imgix_url"  > {{post.metadata.author.title}}</span>&bullet;
              <span class="mr-2">{{ moment(post.metadata.author.modified_at,"YYYYMMDD").format('MMM DD, YYYY') }}</span> &bullet;
              <span v-if="post.metadata && post.metadata.category" class="mr-2">{{post.metadata.category.title}}</span> &bullet;
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
     import PostService from "../../../service/PostService"
    export default {
        name: 'contentTop',
        data(){
            return{
                moment: moment,
                page:"/detay/",
                postItems : []
            }
        },
        created: function () {
            this.getSearchData();
            this.moment.locale('tr');
        },
        watch:{
            $route (){
              this.getSearchData();
            }
        },
        methods:{
          getSearchData:function function_name() {
            var params = this.$route.params
            var query = {
              'content':{"$regex":params.text,"$options":"i"},
              type:'posts'
            }
            PostService.getMedhod(query).then(res =>{
                this.postItems = res.objects
            })
          }
      }
    }
</script>