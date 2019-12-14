<template>
  <div>
      {{text}}
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: value +'%' }" >{{value}}%</div>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'progressBar',
    props:["text","value"]
  }
</script>