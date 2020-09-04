<template lang="pug">
  .topbar
    navbar.navbar
      navbar-item(type="back")
      navbar-item(type="title")
        text.title {{title}}
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>

.topbar {
  width: 750px;
  height: 100px;
}
.navbar {
  width: 750px;
  height: 100px;
  background-color: #d73a49;
}
.title {
  color: #fff;
  font-size: 26px;
}
</style>