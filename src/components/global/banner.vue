<template>
    <section class="site-section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="owl-carousel owl-theme home-slider" >
                <div>
                  <a v-bind:href="page + bannerItem.url"  class="a-block d-flex align-items-center height-lg" v-bind:style="{ 'background-image': 'url(' + $imagesUrl + bannerItem.imgsrc + ')' }">
                    <div class="text half-to-full">
                      <span class="category mb-5" v-bind:href="page + bannerItem.id"   >{{bannerItem.category.title}}</span>
                      <div class="post-meta">
                        
                        <span class="author mr-2"> <img v-bind:src="$imagesUrl  + bannerItem.userData.img" style="margin-right:15px;" >{{bannerItem.userData.name}}</span>&bullet;
                        <span class="mr-2">{{ moment(bannerItem.date,"YYYYMMDD").format('MMM DD, YYYY') }}</span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        
                      </div>
                      <h3>{{bannerItem.title}}</h3>
                      <p>{{bannerItem.message}}</p>
                    </div>
                  </a>
                </div>
                <!-- <div>
                  <a href="blog-single.html" class="a-block d-flex align-items-center height-lg" style="background-image: url('../assets/images/img_2.jpg'); ">
                    <div class="text half-to-full">
                      <span class="category mb-5">Travel</span>
                      <div class="post-meta">
                        
                        <span class="author mr-2"><img src="http://localhost:8080/FileService/downloadFile/user.jpeg" alt="Colorlib"> Colorlib</span>&bullet;
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        
                      </div>
                      <h3>How to Find the Video Games of Your Youth</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="blog-single.html" class="a-block d-flex align-items-center height-lg" style="background-image: url('../assets/images/img_3.jpg'); ">
                    <div class="text half-to-full">
                      <span class="category mb-5">Sports</span>
                      <div class="post-meta">
                        
                        <span class="author mr-2"><img src="http://localhost:8080/FileService/downloadFile/user.jpeg" alt="Colorlib"> Colorlib</span>&bullet;
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        
                      </div>
                      <h3>How to Find the Video Games of Your Youth</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                    </div>
                  </a>
                </div> -->
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
</template>

<script>
  import * as moment from 'moment'
  export default {
    name: 'banner',
    data(){
        return {
          moment:moment,
          bannerItem: {},
          page:"/detay/",
        }
    },
    created: function () {
        this.getBannerPost();
        this.moment.locale('tr');
    },
    methods:{
        getBannerPost:function () {
            fetch(this.$serviceUrl+'PostService/getBannerPost ', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json =>{
                this.bannerItem = json[0];
            })
        }
    }
  }
</script>
