<template >
        <div>
          <img  v-bind:src="item.metadata.image.url" alt="Image" class="img-fluid mb-5">
           <div class="post-meta">
              <span class="author mr-2"><img v-bind:src="item.metadata.author.metadata.authorimg.url"   alt="Burak" class="mr-2"> {{item.metadata.author.title}}</span>&bullet;
              <span class="mr-2">{{ moment(item.metadata.author.created).format('MMM DD, YYYY') }}</span> &bullet;
              <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
            </div>
          <h1 class="mb-4">{{item.title}}</h1>
          <a class="category mb-5" v-bind:href="categoryPage + item.metadata.category.slug"  >{{item.metadata.category.title}}</a> 
          <div class="post-content-body" v-html="item.content">
          </div>
          <div class="pt-5">
            <p>Categories:  <a v-bind:href="categoryPage + item.metadata.category.slug"  >{{item.metadata.category.title}}</a></p>
          </div>

        <components v-bind:postid="item.slug" ></components>    
      </div>
</template>


<script>
    import * as moment from 'moment'
    import components from "./comments.vue"
    import PostService from "../../../service/PostService"
    export default {
        name: 'contentTop',
        components: {
          components
        },
        data(){
            return{
                categoryPage: "/category/",
                moment: moment,
                item :{}
            }
        },
        created: function () {
            this.getData();
            this.setSizePost();
            this.moment.locale('tr');
        },
        methods:{
          getData:function function_name() {
              var params = this.$route.params
              if (!params.id) return;
              var query = {
                slug:params.id
              }
              PostService.getMedhod(query).then(res =>{
                  this.item = res.objects[0]
              })
          },
          setSizePost:function () {
            var params = this.$route.params
              if (!params.id) return;
              fetch(this.$serviceUrl+'PostService/setSizePost/' + params.id, {
                  method: 'GET'
              })
          }
      }
    }
</script>