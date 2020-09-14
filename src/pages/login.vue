<template lang="pug">
  .login
    button.btn(model="green" text="登录" @click="login()")
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.toast('登录成功!')
      eeui.setCaches('token', '123')
      this.go({path: '/index', statusBarType: 'immersion', backPressedClose: false, swipeBack: false})
    }
  },
  pageResume () {
  },
  pagePause () {
  }
}
</script>

<style scoped>

.login {
}
.btn {
  width: 200px;
  height: 80px;
  margin-top: 50px;
}
</style>