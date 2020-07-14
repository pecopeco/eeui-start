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
      eeui.setCaches('token', '123')
      eeui.setCustomConfig('homePage', 'index.js')
      this.go({path: '/index', statusBarType: 'immersion'})
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

.login {
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