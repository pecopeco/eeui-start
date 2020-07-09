<template lang="pug">
  .detail
    topbar
    .text detail
    .query get:{{type}}
</template>

<script>
import topbar from '../../components/topbar'

export default {
  components: {
    topbar
  },
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
}
</style>