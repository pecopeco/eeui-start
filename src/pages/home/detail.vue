<template lang="pug">
  .detail
    headnav(title="detail")
    .content
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
  pageResume () {
    console.log('get query: ', app.config.params.type)
  },
  pagePause () {
    console.log('detail hide')
  }
}
</script>

<style scoped>

.detail {
}
.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  width: 200px;
  height: 80px;
  margin-top: 50px;
}
</style>