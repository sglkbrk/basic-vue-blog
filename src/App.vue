<template>
  <v-app  id="app">
      <router-view  v-bind:class="getSpinnerShow ? 'bg-image' : '' " />
      <div v-show="getSpinnerShow"  class="bg-text">
           <semipolarSpinner />
      </div>
  </v-app>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import semipolarSpinner from "./components/semipolarSpinner.vue"
    export default {
        name: 'app',
        computed:{
          ...mapState([
            'spinnerShow'
          ]),
          ...mapGetters([
            'getSpinnerShow',
          ])
        },
        components: {
          semipolarSpinner
        },
    }
</script>
