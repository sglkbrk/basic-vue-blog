<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">bsaglik.com <i>Yazılım ve Gezi </i> </p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Kategoriler</h6>
          <ul class="footer-links">
             <li  v-for="ctg in categoryList" v-bind:key="ctg.id"  >
                <a  v-bind:href="page + ctg.slug">{{ctg.title}}<span></span></a>
             </li>
          </ul>
        </div>

         


        <div class="col-xs-6 col-md-3">
          <h6>Hızlı Linkler</h6>
          <ul class="footer-links">
            <li><a @click="onOpenpage('about')">About Us</a></li>
            <li><a @click="onOpenpage('contact')" >Contact Us</a></li>
            <!-- <li><a >Contribute</a></li>
            <li><a >Privacy Policy</a></li>
            <li><a >Sitemap</a></li> -->
          </ul>
        </div>
      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
            <a href="#">Burak Sağlık</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="https://www.facebook.com/brk.sglk1"   ><i class="fa fa-facebook"></i></a></li>
            <li><a class="twitter"  href="https://www.instagram.com/brksglk/"><i class="fa fa-instagram"></i></a></li>
            <li><a class="linkedin" href="https://www.linkedin.com/in/burak-saglik/" ><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import PostService from "../../service/PostService"
  export default {
    name: 'sidebarWidgets',
    data() {
      return {
        user: {},
        categoryList:[],
        page:"/category/"
      }
    },
    created: function () {
      this.getCategoryData();
    },
    methods: {
      onOpenpage: function (page) {
        this.$router.push({
          path: '/' + page + "/"
        });
        window.scrollTo(0, 0);
      },
      getUser: function function_name() {
        var query = {
          'id': "61ee9499d63224000897a045",
        }
        PostService.getMedhod(query).then(res => {
          this.user = res.objects[0]
        })
      },
      getCategoryData:function () {
            var query = {
                'type':"category", 
            }
            var props = "id,slug,title"
            PostService.getMedhod(query,props).then(res =>{
                this.categoryList = res.objects
            })
        }
    },
  }
</script>


<style scoped>
  .site-footer {
    background-color: #26272b;
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
  }

  .site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5
  }

  .site-footer hr.small {
    margin: 20px 0
  }

  .site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px
  }

  .site-footer a {
    color: #737373;
  }

  .site-footer a:hover {
    color: #3366cc;
    text-decoration: none;
  }

  .footer-links {
    padding-left: 0;
    list-style: none
  }

  .footer-links li {
    display: block
  }

  .footer-links a {
    color: #737373
  }

  .footer-links a:active,
  .footer-links a:focus,
  .footer-links a:hover {
    color: #3366cc;
    text-decoration: none;
  }

  .footer-links.inline li {
    display: inline-block
  }

  .site-footer .social-icons {
    text-align: right
  }

  .site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d
  }

  .copyright-text {
    margin: 0
  }

  @media (max-width:991px) {
    .site-footer [class^=col-] {
      margin-bottom: 30px
    }
  }

  @media (max-width:767px) {
    .site-footer {
      padding-bottom: 0
    }

    .site-footer .copyright-text,
    .site-footer .social-icons {
      text-align: center
    }
  }

  .social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
  }

  .social-icons li {
    display: inline-block;
    margin-bottom: 4px
  }

  .social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px
  }

  .social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear
  }

  .social-icons a:active,
  .social-icons a:focus,
  .social-icons a:hover {
    color: #fff;
    background-color: #29aafe
  }

  .social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px
  }

  .social-icons a.facebook:hover {
    background-color: #3b5998
  }

  .social-icons a.twitter:hover {
    background-color: #00aced
  }

  .social-icons a.linkedin:hover {
    background-color: #007bb6
  }

  .social-icons a.dribbble:hover {
    background-color: #ea4c89
  }

  @media (max-width:767px) {
    .social-icons li.title {
      display: block;
      margin-right: 0;
      font-weight: 600
    }
  }
</style>