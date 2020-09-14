<template lang="pug">
  .guide
    image.img(resize="cover" src="root://assets/logo-white.png" @click="checkImg")
    text.time {{time}}
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
      data: '',
      timer: '',
      time: 5
    }
  },
  methods: {
    // async getData () {
    //   let res = await this.http.post('/getGuideList')
    //   if (res && res.data && res.data.length) {
    //     this.data = res.data[0]
    //   }
    //   this.timer = setInterval(() => {
    //     if (this.time === 0) {
    //       clearInterval(this.timer)
    //       if (eeui.getCaches('token')) {
    //         this.go({path: '/index', statusBarType: 'immersion', backPressedClose: false, swipeBack: false})
    //       } else {
    //         this.go({path: '/login', statusBarType: 'immersion', backPressedClose: false, swipeBack: false})
    //       }
    //     } else {
    //       this.time = this.time - 1
    //     }
    //   }, 1000)
    // },
    checkImg () {
      clearInterval(this.timer)
      if (eeui.getCaches('token')) {
        this.go({path: '/index', statusBarType: 'immersion', backPressedClose: false, swipeBack: false})
      } else {
        this.go({path: '/login', statusBarType: 'immersion', backPressedClose: false, swipeBack: false})
      }
    }
  },
  pageResume () {
    // this.getData()
  },
  pagePause () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

.guide {
}
.img {
  flex: 1;
}
.time {
  position: absolute;
  top: 60px;
  right: 50px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 50px;
  text-align: center;
  background-color: #969595;
  color: #fff;
}
</style>