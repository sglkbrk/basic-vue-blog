<template>
  <div id="app">
      <router-view v-show="!getSpinnerShow" />
      <semipolarSpinner v-show="getSpinnerShow" />
  </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import semipolarSpinner from "./components/global/semipolarSpinner.vue"
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

