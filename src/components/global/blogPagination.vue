<template>
  <div class="row mt-5">
    <div class="col-md-12 text-center">
      <nav aria-label="Page navigation" class="text-center">
        <ul class="pagination">
          <li class="page-item "><a class="page-link" v-on:click="backpage"  >&lt;</a></li>
          <li v-for="post in paginationList" v-bind:key="post" v-bind:class="['page-item', getparam == post ? 'page-item active' : '']" >
            <a class="page-link" v-on:click="routering(post)" >{{post}}</a>
          </li>
          <li class="page-item"><a class="page-link" v-on:click="nextpage" >&gt;</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'blogPagination',
    props: ["serviceName","methodName"],
    data(){
        return {
          paginationList: []
        }
    },
    created: function () {
        this.getData();
    },
    computed: {
      getparam:function () {
        return this.$route.params.id ? this.$route.params.id : 1
      },
    },
    methods:{
      routering:function (url) {
        var params = this.$route.params
        if (params.id == url ) return
        this.$router.push('/home' + url );
        window.scrollTo(0,0);
      },
      backpage :function () {
        var params = this.$route.params
        var url = (params.id  && params.id > 1 ) ? (params.id - 1) : 1;
        this.routering(url)
      },
      nextpage :function () {
        var params = this.$route.params
        var url = (params.id  && params.id < this.paginationList.length ) ? (parseInt(params.id) + 1) : this.paginationList.length;
        this.routering(url)        
      },
      getData:function () {
        fetch(this.$serviceUrl+ this.serviceName +'/' + this.methodName, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
          var pp = 1;
          for (var i = 0; i < json; i = i + 6 ) {
              this.paginationList.push(pp);
              pp++;
          }
        })
      }
    }
  }
</script>