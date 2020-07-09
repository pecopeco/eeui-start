<template lang="pug">
  .home
    .text home
    image.logo(src="root://assets/logo-white.png")
    button.btn(model="blue" text="go detail" @click="go({path: '/home/detail', query: {type: 'home'}})")
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  async mounted () {
    let res = await this.http.post('http://testapi.talkdoo.com:9010/1.0/publicapi/summary/get/055b7b7ba68b4468abc09041edaad3ef/ea0920f6b7b2450e98e9db521403b0d9/')
    console.log(res)
    this.toast('mounted')
  }
}
</script>

<style scoped lang="stylus">

.home {
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