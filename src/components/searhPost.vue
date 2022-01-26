<template>
  <div class="sidebar-box search-form-wrap">
    <div class="search-form">
      <div class="form-group">
        <span class="icon fa fa-search"></span>
        <input type="text" v-model="value" class="form-control" v-on:keyup.enter="onOpenSeacrhWindow"
          placeholder="Bi Kelime Ara">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searhPost',
    data() {
      return {
        value: "",
      };
    },
    methods: {
      onOpenSeacrhWindow: function () {
        if (!this.value.trim()) return
        this.$router.push({
          path: `/searchPost/${this.value}`
        });
        this.value = "";
        window.scrollTo(0, 0);
      },
    },
  }
</script>