<template >
        <div>
          <img  v-bind:src="$imagesUrl + item.imgsrc" alt="Image" class="img-fluid mb-5">
           <div class="post-meta">
              <span class="author mr-2"><img v-bind:src="$imagesUrl + item.userData.img"   alt="Burak" class="mr-2"> {{item.userData.name}}</span>&bullet;
              <span class="mr-2">{{ moment(item.date,"YYYYMMDD").format('MMM DD, YYYY') }}</span> &bullet;
              <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
            </div>
          <h1 class="mb-4">{{item.title}}</h1>
          <a class="category mb-5" v-bind:href="categoryPage + item.category.url"  >{{item.category.title}}</a> 
          <div class="post-content-body" v-html="item.content">
          </div>
          <div class="pt-5">
            <p>Categories:  <a v-bind:href="categoryPage + item.category.url"  >{{item.category.title}}</a></p>
          </div>

        <components v-bind:postid="item.id" ></components>    
      </div>
</template>


<script>
    import * as moment from 'moment'
    import components from "./comments.vue"
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
              fetch(this.$serviceUrl+'PostService/getPost/' + params.id, {
                  method: 'GET'
              })
                  .then(response => response.json())
                  .then(json =>{
                  this.item = json
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