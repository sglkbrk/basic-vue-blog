<template>
    <div class="row">
        <div v-for="item in postData" v-bind:key="item.slug" class="col-md-6">
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
    export default {
        name: 'post',
        props: ["page","postData"],
        data() {
            return {
                moment: moment,
            }
        },
        created: function () {
            this.moment.locale('tr');
        },
    }
</script>