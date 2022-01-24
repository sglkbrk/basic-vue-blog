<template>
  <div class="row mt-5">
    <div class="col-md-12 text-center">
      <nav aria-label="Page navigation" class="text-center">
        <ul class="pagination">
          <li class="page-item "><a class="page-link" v-on:click="backpage">&lt;</a></li>
          <li v-for="post in paginationList" v-bind:key="post"
            v-bind:class="['page-item', getparam == post ? 'page-item active' : '']">
            <a class="page-link" v-on:click="routering(post)">{{post}}</a>
          </li>
          <li class="page-item"><a class="page-link" v-on:click="nextpage">&gt;</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import PostService from "../../service/PostService"
  export default {
    name: 'blogPagination',
    props: ["serviceName", "methodName"],
    data() {
      return {
        paginationList: []
      }
    },
    created: function () {
      this.getData();
    },
    computed: {
      getparam: function () {
        return this.$route.params.skip ? this.$route.params.skip : 1
      },
    },
    methods: {
      routering: function (url) {
        var params = this.$route.params
        if (params.skip == url) return
        this.$router.push('/home' + url);
        window.scrollTo(0, 0);
      },
      backpage: function () {
        var params = this.$route.params
        var url = (params.skip && params.skip > 1) ? (params.skip - 1) : 1;
        this.routering(url)
      },
      nextpage: function () {
        var params = this.$route.params
        var url = (params.skip && params.skip < this.paginationList.length) ? (parseInt(params.skip) + 1) : this
          .paginationList.length;
        this.routering(url)
      },
      getData: function () {
        var query = {
          'type': "posts",
        }
        var props = "id"
        PostService.getMedhod(query,props).then(res => {
          var pp = 1;
          for (var i = 0; i < res.total; i = i + 6) {
            this.paginationList.push(pp);
            pp++;
          }
        })
      }
    }
  }
</script>