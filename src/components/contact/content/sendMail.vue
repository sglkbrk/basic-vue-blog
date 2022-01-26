<template>
  <form>
    <div class="row">
      <div class="col-md-12 form-group">
        <label for="name">İsim *</label>
        <input type="text" v-model="messageItem.name" class="form-control ">
      </div>
      <div class="col-md-12 form-group">
        <label for="phone">Telefon No</label>
        <input type="text" v-model="messageItem.telno" class="form-control ">
      </div>
      <div class="col-md-12 form-group">
        <label for="email">Email</label>
        <input type="email" v-model="messageItem.email" class="form-control ">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 form-group">
        <label for="message">Mesaj *</label>
        <textarea name="message" v-model="messageItem.message" class="form-control " cols="30" rows="8"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 form-group">
        <dotsSpinner v-if="spinnerShow" style="margin-top:15px"/>
        <input v-if="!spinnerShow" type="button" v-on:click="sendMessage" value="Gönder" class="btn btn-primary">
      </div>
    </div>
  </form>
</template>


<script>
  import PostService from "../../../service/PostService"
  import dotsSpinner from '../../global/dotsSpinner.vue'
  export default {
    name: 'sendMail',
    components:{
      dotsSpinner
    },
    data() {
      return {
        messageItem: {
          name: "",
          email: "",
          telno: "",
          message: "",
        },
        spinnerShow: false,
      }
    },
    methods: {
      sendMessage: function () {
        if (this.messageItem.name && this.messageItem.message) {
          var json = {
            title: "Yorum",
            type: "messages",
            status: "draft",
            metafields: [{
                "type": "date",
                "title": "date",
                "key": "date",
                "value": new Date(),
              },
              {
                "type": "textarea",
                "title": "message",
                "key": "message",
                "value": this.messageItem.message,
              },
              {
                "type": "text",
                "title": "telno",
                "key": "telno",
                "value": this.messageItem.telno
              },
              {
                "type": "text",
                "title": "email",
                "key": "email",
                "value": this.messageItem.email
              },
              {
                "type": "text",
                "title": "name",
                "key": "name",
                "value": this.messageItem.name
              }
            ]
          }
          this.spinnerShow = true;
          PostService.postMedhod(json).then(res => {
            if (res && res.object && res.object.id) {
              alert("Mesaj Göderildi")
              this.messageItem.message = "";
              this.messageItem.name = "";
              this.messageItem.email = "";
              this.messageItem.telno = "";
            }
            this.spinnerShow = false ;
          })
        } else alert("İşaretli Alanları doldurunuz.")
      },
    }
  }
</script>