<template>
      <div class="sidebar-box">
        <div class="bio text-center">
          <img v-bind:src="host" alt="Image Placeholder" class="img-fluid">
          <div class="bio-body">
            <h2>Burak Sağlık</h2>
            <p> Ünivesite 1. Sınıfta başladığım yazılım sektöründe şuan 4. yılım tecrüberimi ve bilgilerimi paylaşmak için açtığım bu blog sayfamda sizlere aktarmaya çalışacam.</p>
            <p><a v-on:click="onOpenAbout" class="btn btn-primary btn-sm rounded">Biyografimi oku</a></p>
            <p class="social">
              <a href="https://www.linkedin.com/in/burak-saglik/" class="p-2"><span class="fa fa-linkedin"></span></a>
              <a href="https://www.instagram.com/brksglk/" class="p-2"><span class="fa fa-instagram"></span></a>
              <a href="https://www.facebook.com/brk.sglk1" class="p-2"><span class="fa fa-facebook"></span></a>
              
            </p>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    name: 'sidebarWidgets',
    data(){
        return{
            host:this.$imagesUrl +'user.jpeg'
        }
    },
    methods:{
        onOpenAbout:function () {
            this.$router.push({ path: '/about' });
 
        },
    },
  }
</script>