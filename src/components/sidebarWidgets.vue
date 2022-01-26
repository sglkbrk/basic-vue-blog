<template>
  <div  class="sidebar-box">
    <div class="bio text-center">
      <img v-if="user" v-bind:src="user.metadata.authorimg.url" alt="Image Placeholder" class="img-fluid">
      <div class="bio-body">
        <h2>{{user.title}}</h2>
        <p v-if="user">{{user.metadata.resume}}</p>
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
  import PostService from "../service/PostService"
  export default {
    name: 'sidebarWidgets',
    data() {
      return {
        user: "",
      }
    },
    created: function () {
      this.getUser();
    },
    methods: {
      onOpenAbout: function () {
        this.$router.push({
          path: '/about'
        });
      },
      getUser: function function_name() {
        var query = {
          'id': "61eece27584e8c0008f4b323",
        }
        PostService.getMedhod(query,"",false).then(res => {
          this.user = res.objects[0]
        })
      }
    },
  }
</script>