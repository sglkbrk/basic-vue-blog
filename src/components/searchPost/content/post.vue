<template >
    <div class="col-md-12">
      <div v-for="post in categoryItemList" v-bind:key="post.id"  class="post-entry-horzontal">
        <a v-bind:href="page + post.url" style="width:100%;" >
          <div class="image element-animate" data-animate-effect="fadeIn" v-bind:style="{ 'background-image': 'url(' + $imagesUrl + post.imgsrc + ')' }"></div>
          <span class="text">
            <div class="post-meta">
              <span class="author mr-2"><img  v-bind:src="$imagesUrl  + post.userData.img"  > {{post.userData.name}}</span>&bullet;
              <span class="mr-2">{{ moment(post.date,"YYYYMMDD").format('MMM DD, YYYY') }}</span> &bullet;
              <span class="mr-2">{{post.category.title}}</span> &bullet;
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
        name: 'contentTop',
        data(){
            return{
                moment: moment,
                page:"/detay/",
                categoryItemList : []
            }
        },
        created: function () {
            this.getAllSearchPost();
            this.moment.locale('tr');
        },
        watch:{
            $route (){
                this.getAllSearchPost();
            }
        },
        methods:{
          getAllSearchPost:function function_name() {
              var params = this.$route.params
              if (!params.text) return;
              fetch(this.$serviceUrl+'PostService/getAllSearchPost/' + params.text, {
                  method: 'GET'
              })
                  .then(response => response.json())
                  .then(json =>{
                  this.categoryItemList = json
              })
          }
      }
    }
</script>