<template >
    <div class="row">
        <div v-for="item in postItems" v-bind:key="item.id"  class="col-md-6">
          <a  v-bind:href="page + item.url"  class="blog-entry element-animate" data-animate-effect="fadeIn">
            <img v-bind:src="$imagesUrl + item.imgsrc" style="width: 100%;height:100%;" >
            <div class="blog-content-body">
              <div class="post-meta">
                <span class="author mr-2"><img v-bind:src="$imagesUrl  + item.userData.img"  alt="Colorlib"> {{item.userData.name}}</span>&bullet;
                <span class="mr-2">{{ moment(item.date,"YYYYMMDD").format('MMM DD, YYYY') }}</span> &bullet;
                <span class="ml-2"><span class="fa fa-comments"></span> {{item.size}}</span>
              </div>
              <h2>{{item.title}}</h2>
            </div>
          </a>
        </div>
    </div>
</template>


<script>

    import * as moment from 'moment'
    export default {
        name: 'post',
        data(){
            return{
                page:"/detay/",
                moment: moment,
                postItems: []
            }
        },
        watch:{
            $route (){
                this.getData();
            }
        },
        created: function () {
            this.getData();
            this.moment.locale('tr');
        },
        methods:{
            getData:function function_name() {
                var params = this.$route.params
                fetch(this.$serviceUrl+'PostService/getAllPost/' + (params.id ? params.id-1 : "0"), {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json =>{
                    this.postItems = json
                })
            }
        }
    }
</script>