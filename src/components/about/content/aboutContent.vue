<template >
  <div class="col-md-12">
    <h2 class="mb-4">Merhaba Ben Burak SAĞLIK</h2>
    <p class="mb-5"><img v-bind:src="aboutImageUrl" alt="Burak Sağlık" class="img-fluid"></p>
    <p>Merhaba Kişisel Web Siteme hoş geldiniz. Blog tutmak her insan için mental açıdan faydalı bir eylemdir. İnsanlar bir şeyler yazarak, paylaşarak kendilerini daha iyi hissederler .Bende blog sayeyinde sizlere bilgi birikimi ve tecrüberimi sizlere aktamya çalışacam . </p>
    <p> Yazılım ile üniversite birinci sınıfta tanıştım karmaşık yapısı ve olduça fazla teknik bilgi içermesi ilgimi  çekti. Üniversite de bir yazılım firmasında çalışmaya başladıktan sonra daha fazla bilgi edinmeye ve kendimi geliştirmeye başladım . Halen bu yazılım firmasında frontEnd takım lideri olarak çalışmaktayım her geçen gün daha fazla şey öğrenmeye ve bunları paylaşmak için başladığım bu blog sayfası umarım hem sizin hemde benim için iyi olur  </p>
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

    export default {
        name: 'aboutContent2',
        components:{
            progressBar
        },
        data(){
            return{
                aboutImageUrl:this.$imagesUrl +'about.jpeg'
            }
        },

    }
</script>