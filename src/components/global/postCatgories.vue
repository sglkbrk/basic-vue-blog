<template>
    <div class="sidebar-box">
        <h3 class="heading">Kategoriler</h3>
        <ul class="categories">
            <li  v-for="ctg in categoryList" v-bind:key="ctg.id"  >
                <a v-if="ctg.size > 0"  v-bind:href="page + ctg.url"  >{{ctg.title}}<span>({{ctg.size}})</span></a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'postCatgories',
    data(){
        return {
            page: "/category/",
            categoryList: []
        }
    },
    created: function () {
        this.getData();
    },
    methods:{
        getData:function () {
            fetch(this.$serviceUrl+'CategoryService/getAllCategory ', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json =>{
                this.categoryList = json;
            })
        }
    }
  }
</script>