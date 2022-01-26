<template>
<div id="home">
    <div class="wrap">
        <headerBar> </headerBar>
        <banner></banner>
        <section class="site-section py-sm">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 style="marginTop:5px" class="mb-4">Tüm İçerikler</h2>
                    </div>
                </div>
                <div class="row blog-entries">
                    <div class="col-md-12 col-lg-8 main-content">
                        <postVbox page="/" v-bind:postData="postData"> </postVbox>
                        <pagination page="/page/" v-bind:query="pagQuery"></pagination>
                    </div>
                    <div class="col-md-12 col-lg-4 sidebar">
                        <searhPost></searhPost>
                        <sidebarWidgets></sidebarWidgets>
                        <populerPost></populerPost>
                        <postCatgories></postCatgories>
                    </div>
                </div>
            </div>
        </section>
        <sfooter></sfooter>
    </div>
</div>
</template>

<script>
import {
    searhPost,
    postCatgories,
    populerPost,
    sidebarWidgets,
    pagination,
    postVbox,
    headerBar,
    banner,
    sfooter
} from "../components"
import {
    mapActions
} from 'vuex';
import PostService from "../service/PostService"
export default {
    name: 'home',
    data() {
        return {
            pagQuery: {
                'type': "posts",
            },
            postData: []
        }
    },
    components: {
        headerBar,
        banner,
        sfooter,
        postVbox,
        postCatgories,
        populerPost,
        sidebarWidgets,
        pagination,
        searhPost
    },
    watch: {
        $route() {
            this.getPostData();
        }
    },
    created: function () {
        this.getPostData();
        this.moment.locale('tr');
    },
    methods: {
        ...mapActions([
            'updateSpinnerShow'
        ]),
        getPostData: function function_name() {
            var params = this.$route.params
            var skip = params.skip ? params.skip : 1;
            var query = {
                'type': "posts",
            }
            this.updateSpinnerShow(true);
            PostService.getMedhod(query, "", "", skip).then(res => {
                this.postData = res.objects
                this.updateSpinnerShow(false);
            })
        }
    }
}
</script>
