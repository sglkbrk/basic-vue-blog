<template>
<footer class="site-footer">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-4">
          <h3>Hakkımda</h3>
          <p class="mb-4">
            <img v-bind:src="host" alt="Image placeholder" class="img-fluid">
          </p>

          <p>İş hayatım ve sosyal hayatımdaki tecrübelerim. <a href="/about">Devam</a></p>
        </div>
        <div class="col-md-6 ml-auto">
          <div class="row">
            <div class="col-md-7">
              <h3>Son İçerikler</h3>
              <div class="post-entry-sidebar">
                <ul>
                 <!--  <li>
                    <a href="">
                      <img src="../../assets/images/img_6.jpg" alt="Image placeholder" class="mr-4">
                      <div class="text">
                        <h4>How to Find the Video Games of Your Youth</h4>
                        <div class="post-meta">
                          <span class="mr-2">March 15, 2018 </span> &bullet;
                          <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                      </div>
                    </a>
                  </li> -->
                </ul>
              </div>
            </div>
            <div class="col-md-1"></div>
            
            <div class="col-md-4">

              <div class="mb-5">
                <h3>HIZLI LİNKLER</h3>
                <ul class="list-unstyled">
                  <li><a href="/about">Hakkımda</a></li>
                  <li><a href="/contact">İletişim</a></li>
                  <!-- <li><a href="#">Yazılım</a></li>
                  <li><a href="#">Kamp</a></li>
                  <li><a href="#">Kategoriler</a></li> -->
                </ul>
              </div>
              
              <div class="mb-5">
                <h3>Social</h3>
                <ul class="list-unstyled footer-social">
                  <!-- <li><a href="#"><span class="fa fa-twitter"></span> Twitter</a></li> -->
                  <li><a href="https://www.linkedin.com/in/burak-saglik/"><span class="fa fa-linkedin"></span> Linkedin</a></li>
                  <li><a href="https://www.instagram.com/brksglk/"><span class="fa fa-instagram"></span> Instagram</a></li>
                  <li><a href="https://www.facebook.com/brk.sglk1"><span class="fa fa-facebook"></span> Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
</template>
<script>
  export default {
    name: 'footer',
    data(){
        return{
            host:this.$imagesUrl +'user.jpeg'
        }
    },
  }
</script>