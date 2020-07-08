<template lang="pug">
  .body
    .text 123
    image.logo(src="root://assets/logo-white.png")
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    getTips () {
      this.tips()
    }
  },
  mounted () {
    this.getTips()
  }
}
</script>

<style scoped lang="stylus">

.logo {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>