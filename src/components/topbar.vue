<template lang="pug">
  .topbar
    navbar.navbar
      navbar-item(type="back")
      navbar-item(type="title")
        text.title 标题
</template>

<script>

export default {
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

<style scoped lang="stylus">

.topbar {
  width: 750px;
  height: 100px;
}
.navbar {
  width: 750px;
  height: 100px;
}
.title {
  color: #fff;
  font-size: 26px;
}
</style>