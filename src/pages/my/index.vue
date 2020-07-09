<template lang="pug">
  .my
    .text my
    image.logo(src="root://assets/logo-white.png")
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

.my {
  flex: 1;
}
.logo {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>