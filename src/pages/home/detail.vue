<template lang="pug">
  .detail
    .text detail
    .query get:{{type}}
</template>

<script>

export default {
  data () {
    return {
      type: app.config.params.type
    }
  },
  methods: {
  },
  mounted () {
    console.log(app.config.params.type)
  }
}
</script>

<style scoped lang="stylus">

.detail {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>