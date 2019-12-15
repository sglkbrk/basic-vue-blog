<template>
     <header role="banner">
        <div class="container logo-wrap">
          <div class="row pt-5">
            <div class="col-12 text-center">
              <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" v-on:click="onMobilHeader" role="button" aria-expanded="false" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
              <h1 class="site-logo"><a href="/">Burak Saglik123</a></h1>
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
                      <a v-bind:href="page + ctg.url"  v-if="ctg.size > 0" class="dropdown-item">{{ctg.title}}</a>
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
            fetch(this.$serviceUrl+'CategoryService/getAllCategory ', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json =>{
                this.categoryList = json;
            })
        }
    },
    created: function () {
        this.getData();
    },
  }
</script>
