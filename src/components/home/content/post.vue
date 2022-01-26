<template>
    <div class="row">
        <div v-for="item in postItems" v-bind:key="item.slug" class="col-md-6">
            <a v-bind:href="page + item.slug" class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img v-bind:src="item.metadata.image.url" style="">
                <div class="blog-content-body">
                    <div class="post-meta">
                        <span v-if="item.metadata.author.metadata && item.metadata.author.metadata.authorimg" class="author mr-2"><img v-bind:src="item.metadata.author.metadata.authorimg.imgix_url"
                                alt="Colorlib"> {{item.metadata.author.title}}</span>&bullet;
                        <span class="mr-2">{{ moment(item.metadata.author.modified_at).format('MMM DD, YYYY') }}</span>
                        &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 10</span>
                    </div>
                    <h2>{{item.title}}</h2>
                    <p>{{item.metadata.description}}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
    import * as moment from 'moment'
    import {mapActions } from 'vuex';
    import PostService from "../../../service/PostService"
    export default {
        name: 'post',
        data() {
            return {
                page: "/detay/",
                moment: moment,
                postItems: []
            }
        },
        watch: {
            $route() {
                this.getData();
            }
        },
        created: function () {
            this.getData();
            this.moment.locale('tr');
        },
        methods: {
            ...mapActions([
                'updateSpinnerShow'
            ]),
            getData: function function_name() {
                var params = this.$route.params
                var skip = params.skip ? params.skip : 1;
                var query = {
                    'type': "posts",
                }
                this.updateSpinnerShow(true);
                PostService.getMedhod(query,"","",skip).then(res => {
                    this.postItems = res.objects
                    this.updateSpinnerShow(false);
                })
            }
        }
    }
</script>