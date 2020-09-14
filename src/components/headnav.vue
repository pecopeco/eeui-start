<template lang="pug">
  .topbar
    navbar.navbar(:style="{backgroundColor: bgColor, borderColor: borderColor}")
      navbar-item(type="left" @click="goBack()")
        icon.icon(content="ios-arrow-back" fontSize="46" :style="{color: color}")
      navbar-item(type="title")
        text.title(:style="{color: color}") {{title}}
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: '#efefef'
    },
    borderColor: {
      type: String,
      default: '#efefef'
    },
    color: {
      type: String,
      default: '#000000'
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
  border-bottom-style: solid;
  border-width: 1px;
}
.icon {
  width: 100px;
  height: 100px;
}
.title {
  font-size: 35px;
}
</style>