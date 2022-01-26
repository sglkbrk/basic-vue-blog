<template>
    <div class="sidebar-box">
        <h3 class="heading">Tüm Kategoriler</h3>
        <ul class="categories">
            <li  v-for="ctg in categoryList" v-bind:key="ctg.id"  >
                <a  v-bind:href="page + ctg.slug">{{ctg.title}}<span></span></a>
            </li>
        </ul>
    </div>
</template>

<script>
    import PostService from "../../service/PostService"
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
            var query = {
                'type':"subcategorys", 
            }
            var props = "id,slug,title"
            PostService.getMedhod(query,props).then(res =>{
                this.categoryList = res.objects
            })
        }
    }
  }
</script>