<template >
        <form >
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="name">İsim *</label>
                <input type="text" v-model="messageItem.name"  class="form-control ">
              </div>
              <div class="col-md-12 form-group">
                <label for="phone">Telefon No</label>
                <input type="text" v-model="messageItem.telno"  class="form-control ">
              </div>
              <div class="col-md-12 form-group">
                <label for="email">Email</label>
                <input type="email" v-model="messageItem.email"  class="form-control ">
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="message">Mesaj *</label>
                <textarea name="message" v-model="messageItem.message"  class="form-control " cols="30" rows="8"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="button" v-on:click="sendMessage" value="Gönder" class="btn btn-primary">
              </div>
            </div>
        </form>
</template>


<script>
    import * as moment from 'moment'
    export default {
        name: 'sendMail',
        data(){
            return{
                messageItem:{
                  name:"",
                  email:"",
                  telno:"",
                  message:"",
                  datetime:"",
                }
            }
        },
        methods:{
          sendMessage:function () {
              if (this.messageItem.name && this.messageItem.message) {
                this.messageItem.datetime = moment(new Date).format("YYYYMMDDHHmmss"),
                fetch(this.$serviceUrl+'MessageService/sendMessage ', {
                    method: 'POST',
                    headers: {
                        'Content-Type':  'application/json; text/html; charset=utf-8',
                    },
                    body: JSON.stringify(this.messageItem)
                  })
                  .then(response => response.json())
                  .then(json =>{
                    if (json.id) {
                      alert("Mesaj Göderildi")
                      this.messageItem.message = "";
                      this.messageItem.name = "";
                      this.messageItem.email = "";
                      this.messageItem.telno = "";
                    }
                  })
            }else alert("İşaretli Alanları doldurunuz.")
          },
      }
    }
</script>