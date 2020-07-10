<template lang="pug">
  .my
    .text my
    .text token:{{token}}
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
      this.go('/login')
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">

.my {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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