<template>
     <header role="banner">
        <div class="container logo-wrap">
          <div class="row pt-5">
            <div class="col-12 text-center">
              <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" v-on:click="onMobilHeader" role="button" aria-expanded="false" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
              <h1 class="site-logo"><a href="/">Fivori</a></h1>
            </div>
          </div>
        </div>
        
        <nav class="navbar navbar-expand-md  navbar-light bg-light">
          <div class="container">
            
           
            <div class="collapse navbar-collapse" id="navbarMenu">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="/">AnaSayfa</a>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" href="#">Yazılım</a>
                </li> -->
                <li class="nav-item dropdown" @mouseover="hover = 'dropdown-menu show'" @mouseleave="hover = 'dropdown-menu'">
                  <a class="nav-link dropdown-toggle"   id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kategoriler</a>
                  <div v-bind:class="hover"  aria-labelledby="dropdown05">
                    <div v-for="ctg in categoryList" v-bind:key="ctg.id"  >
                      <a v-bind:href="page + ctg.slug"  class="dropdown-item">{{ctg.title}}</a>
                    </div>
                    
                  </div>

                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">Hakkımda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">İletişim</a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </header>
</template>

<script>
  import PostService from "../../service/PostService"
  export default {
    name: 'header',
    data() {
      return {
        hover: "dropdown-menu",
        page: "/category/",
        categoryList: []
      };
    },
    methods:{
        onMobilHeader:function () {
             var deneme = document.getElementById("navbarMenu");
             if (deneme.className == "collapse navbar-collapse") deneme.className = "navbar-collapse";
             else deneme.className = "collapse navbar-collapse"
        },
        getData:function () {
          var query = {
            'type':"category", 
          }
          var props = "slug,title"
          PostService.getMedhod(query,props).then(res =>{
              this.categoryList = res.objects
          })
        }
    },
    created: function () {
        this.getData();
    },
  }
</script>
