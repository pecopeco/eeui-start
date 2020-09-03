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
    eeui.shareText('text')
    let res = await this.http.post('http://xxx.com:9010')
    if (res) {
      console.log(res)
    }
  }
}
</script>

<style scoped>

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