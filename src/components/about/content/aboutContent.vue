<template >
  <div class="col-md-12">
    <h2 class="mb-4">Merhaba Ben {{user.title}}</h2>
    <!-- <p class="mb-5"><img v-bind:src="aboutImageUrl" alt="Burak Sağlık" class="img-fluid"></p> -->
    <div class="post-content-body" v-html="user.content">
    </div>
    <p style="margin-top:25px;">
        <progressBar text="Javascript" value="90"></progressBar>
        <progressBar text="JQuery" value="85"></progressBar>
        <progressBar text="Sap UI5" value="90"></progressBar>
        <progressBar text="Sap Fiori" value="90"></progressBar>
        <progressBar text="Java" value="50"></progressBar>
        <progressBar text="Spring Framework" value="50"></progressBar>
        <progressBar text="Vue" value="60"></progressBar>
        <progressBar text="React Native" value="70"></progressBar>
        <progressBar text="Html" value="90"></progressBar>
        <progressBar text="Css" value="70"></progressBar>
        <progressBar text="Json" value="90"></progressBar>
        <progressBar text="Xml" value="80"></progressBar>
        <progressBar text="Git" value="90"></progressBar>
        <progressBar text="Gulp" value="90"></progressBar>
        <progressBar text="Linux" value="70"></progressBar>
        <progressBar text="Ionic" value="90"></progressBar>
        <progressBar text="Cordova" value="90"></progressBar>
    </p>
  </div>
</template>


<script>

    import progressBar from "../../global/progressBar.vue"
    import PostService from "../../../service/PostService"
    import {mapActions } from 'vuex';
    export default {
        name: 'aboutContent2',
        components:{
            progressBar
        },
        data(){
            return{
                aboutImageUrl:this.$imagesUrl +'about.jpeg',
                user:{}
            }
        },
        created: function () {
            this.getUser();
        },
        methods:{
            ...mapActions([
                'updateSpinnerShow'
            ]),
            getUser:function function_name() {
                var query = {
                    id:"61eece27584e8c0008f4b323"
                }
                this.updateSpinnerShow(true);
                PostService.getMedhod(query,"",false).then(res =>{
                    this.user = res.objects[0];
                    this.updateSpinnerShow(false);
                })
          }
        }

    }
</script>