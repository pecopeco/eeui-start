<template lang="pug">
  .detail
    headnav(title="detail")
    .text detail
    .query get:{{type}}
    button.btn(model="blue" text="go back" @click="goBack()")
</template>

<script>

export default {
  components: {
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

<style scoped>

.detail {
}
.btn {
  width: 200px;
  height: 80px;
  margin-top: 50px;
}
</style>