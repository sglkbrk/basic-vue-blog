<template>
  <div class="pt-5">
    <h3 class="mb-5">Yorumlar ({{commentLength}})</h3>
    <ul class="comment-list">
      <li v-for="comment in commentList" v-bind:key="comment.id" class="comment">
        <div class="vcard">
          <img src="../../../assets/images/defaultUser.png">
        </div>
        <div class="comment-body">
          <h3>{{comment.metadata.name}}</h3>
          <div class="meta">{{ moment(comment.metadata.date).format('MMM DD, YYYY HH mm') }}</div>
          <p>{{comment.metadata.message}}</p>
          <!-- <p><a href="#" class="reply rounded">Reply</a></p> -->
        </div>
      </li>
    </ul>
    <div class="comment-form-wrap pt-5">
      <h3 class="mb-5">Yorum Yap</h3>
      <form action="#" class="p-5 bg-light">
        <div class="form-group">
          <label for="name">İsim *</label>
          <input v-model="commentItem.name" type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input v-model="commentItem.email" type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="website">Web Site</label>
          <input v-model="commentItem.website" type="url" class="form-control" id="website">
        </div>

        <div class="form-group">
          <label for="message">Mesaj * </label>
          <textarea v-model="commentItem.message" name="" maxlength="1000" id="message" cols="30" rows="10"
            class="form-control"></textarea>
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
  import PostService from "../../../service/PostService"
  export default {
    name: 'comment',
    props: ["postid"],
    data() {
      return {
        commentLength: 0,
        commentList: [],
        moment: moment,
        commentItem: {
          postid: "",
          subid: "",
          message: "",
          name: "",
          email: "",
          website: "",
          datetime: "",
          trace:{}
        }
      }
    },
    watch: {
      $postid() {
        this.getPostComment();
         this.getIp();
      }
    },
    created: function () {
      this.getPostComment();
      this.moment.locale('tr');
       this.getIp();
    },
    methods: {
      addComment: function () {
        var params = this.$route.params;
        if (params.id && this.commentItem.name && this.commentItem.message && this.commentItem.email) {
          var json = {
            title: "Yorum",
            type: "comments",
            status: "draft",
            metafields: [{
                "type": "text",
                "title": "postid",
                "key": "postid",
                "value": this.postid,
              },
              {
                "type": "date",
                "title": "date",
                "key": "date",
                "value": new Date(),
              },
              {
                "type": "textarea",
                "title": "message",
                "key": "message",
                "value": this.commentItem.message,
              },
              {
                "type": "text",
                "title": "website",
                "key": "website",
                "value": this.commentItem.website
              },
              {
                "type": "text",
                "title": "email",
                "key": "email",
                "value": this.commentItem.email
              },
              {
                "type": "text",
                "title": "name",
                "key": "name",
                "value": this.commentItem.name
              }
            ]
          }
          PostService.postMedhod(json).then(res => {
            if (res && res.object && res.object.id) {
              this.commentItem.message = "";
              this.commentItem.name = "";
              this.commentItem.email = "";
              this.commentItem.website = "";
              alert("Yorumunuz Onaylandıktan Sonra Yayınlanacak")
            }
          })
        } else alert("İşaretli Alanları doldurunuz.")
      },
      getPostComment: function () {
        if (!this.postid) return
        var query = {
          'type': "comments",
          'metadata.postid': this.postid,
        }
        PostService.getMedhod(query).then(res => {
          this.commentList = res.objects
          this.commentLength = res.total
        })
      },
      getIp:function(){
        PostService.getTrace().then(res =>{
            this.commentItem.trace = res
        })
      }
    }
  }
</script>