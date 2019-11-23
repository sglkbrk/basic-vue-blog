<template >
    <div class="pt-5">
      <h3 class="mb-5">{{commentLength}} Yorumlar</h3>
      <ul class="comment-list">
        <li  v-for="comment in commentList" v-bind:key="comment.id" class="comment">
          <div class="vcard">
            <img src="../../../assets/images/defaultUser.png">
          </div>
          <div class="comment-body">
            <h3>{{comment.name}}</h3>
            <div class="meta">{{ moment(comment.datetime,"YYYYMMDDHHmm").format('MMM DD, YYYY HH mm') }}</div>
            <p>{{comment.message}}</p>
            <!-- <p><a href="#" class="reply rounded">Reply</a></p> -->
          </div>
        </li>
      </ul>      
      <div class="comment-form-wrap pt-5">
        <h3 class="mb-5">Yorum Yap</h3>
        <form action="#" class="p-5 bg-light">
          <div class="form-group">
            <label for="name">İsim *</label>
            <input v-model="commentItem.name"  type="text" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input  v-model="commentItem.email" type="email" class="form-control" id="email">
          </div>
          <div class="form-group">
            <label for="website">Web Site</label>
            <input  v-model="commentItem.website" type="url" class="form-control" id="website">
          </div>

          <div class="form-group">
            <label for="message">Mesaj * </label>
            <textarea  v-model="commentItem.message" name="" maxlength="1000" id="message" cols="30" rows="10" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <input v-on:click="addComment" value="Gönder" class="btn btn-primary">
          </div>

        </form>
      </div>
    </div>
</template>

<script>
    import * as moment from 'moment'
    export default {
        name: 'comment',
        props:["postid"],
        data(){
           return {
              commentLength:0,
              commentList:[],
              moment:moment,
              commentItem:{
                postid:"",
                subid:"",
                message:"",
                name:"",
                email:"",
                website:"",
                datetime:"",
              }
           }
        },
        watch:{
          $postid (){
              this.getPostComment();
          }
        },
        created: function () {
            this.getPostComment();
            this.moment.locale('tr');
        },
        methods:{
          addComment:function () {
            var params = this.$route.params;
            if (params.id && this.commentItem.name && this.commentItem.message && this.commentItem.email ) {
              this.commentItem.postid = this.postid;
              this.commentItem.datetime = moment(new Date).format("YYYYMMDDHHmmss"),
              fetch(this.$serviceUrl+'CommentService/addComment ', {
                  method: 'POST',
                  headers: {
                      'Content-Type':  'application/json; text/html; charset=utf-8',
                  },
                  body: JSON.stringify(this.commentItem)
                })
                .then(response => response.json())
                .then(json =>{
                  if (json.id) {
                    this.commentList.push(json);
                    this.commentLength = this.commentList.length;
                    this.commentItem.message = "";
                    this.commentItem.name = "";
                    this.commentItem.email = "";
                    this.commentItem.website = "";
                  }
                })
          }else alert("İşaretli Alanları doldurunuz.")
        },
        getPostComment:function () {
          if (!this.postid) return
          fetch(this.$serviceUrl+'CommentService/getPostCommet/' + this.postid, {
              method: 'GET'
          })
            .then(response => response.json())
            .then(json =>{
              this.commentLength = json.length;
              this.commentList = json
            })
        }
      }
    }
</script>