<template lang="pug">
  .topbar
    navbar.navbar
      navbar-item(type="left" @click="goBack()")
        icon.icon(content="ios-arrow-back" fontSize="46")
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
  background-color: #f6f7f9;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #f1f0f0;
}
.icon {
  width: 100px;
  height: 100px;
}
.title {
  color: #000;
  font-size: 30px;
}
</style>