<template lang="pug">
  .detail
    headnav(title="detail")
    .content
      ripple.wrap
        text.text detail
        text.query get:{{type}}
      htmlParse.html-content(:content="content")
      button.btn(model="blue" text="go back" @click="goBack()")
</template>

<script>
import htmlParse from "../../components/htmlParse.vue"

export default {
  components: {
  },
  data () {
    return {
      type: app.config.params.type,
      content: '<span>good</span>'
    }
  },
  methods: {
  },
  pageResume () {
    console.log('get query: ', app.config.params.type)
  },
  pagePause () {
  }
}
</script>

<style scoped>

.detail {
  background-color: #f6f6f6;
}
.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
}
.html-content {
  flex: 1;
  padding: 25px;
}
.btn {
  width: 200px;
  height: 80px;
  margin-top: 50px;
}
</style>