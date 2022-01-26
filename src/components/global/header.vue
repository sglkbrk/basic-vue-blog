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
                <li class="nav-item dropdown" @mouseover="hover2 = 'dropdown-menu show'" @mouseleave="hover2 = 'dropdown-menu'">
                  <a class="nav-link dropdown-toggle"   id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Seyahat Ve Gezi</a>
                  <div v-bind:class="hover2"  aria-labelledby="dropdown04">
                    <div v-for="ctg in categoryList" v-bind:key="ctg.id"  >
                      <a v-if="ctg.metadata.masterctgry.slug == 'seyahat-ve-gezi' " v-bind:href="page + ctg.slug"  class="dropdown-item">{{ctg.title}}</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown" @mouseover="hover = 'dropdown-menu show'" @mouseleave="hover = 'dropdown-menu'">
                  <a class="nav-link dropdown-toggle"   id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Yazılım</a>
                  <div v-bind:class="hover"  aria-labelledby="dropdown05">
                    <div v-for="ctg in categoryList" v-bind:key="ctg.id"  >
                      <a v-if="ctg.metadata.masterctgry.slug == 'yazlm'" v-bind:href="page + ctg.slug"  class="dropdown-item">{{ctg.title}}</a>
                    </div>
                  </div>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/about">Galery</a>
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
        hover2: "dropdown-menu",
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
            'type':"subcategorys", 
          }
          PostService.getMedhod(query).then(res =>{
              this.categoryList = res.objects
          })
        }
    },
    created: function () {
        this.getData();
    },
  }
</script>
