<template lang="pug">
  scroller.my
    text.text my
    text.text token:{{token}}
    image.logo(src="root://assets/logo-white.png")
    button.btn(model="red" text="退出登录" @click="logout()")
</template>

<script>

export default {
  data () {
    return {
      token: eeui.getCaches('token')
    }
  },
  methods: {
    logout () {
      eeui.clearAllCaches()
      eeui.setCustomConfig('homePage', 'login.js')
      this.go({path: '/login', statusBarType: 'immersion', backPressedClose: false, swipeBack: false})
    }
  },
  pageResume () {
    eeui.setStatusBarStyle(true)
  },
  pagePause () {
  }
}
</script>

<style scoped>

.my {
  background-color: #f6f6f6;
}
.logo {
  width: 100px;
  height: 100px;
  background-color: red;
}
.btn {
  width: 200px;
  height: 80px;
  margin-top: 50px;
}
</style>