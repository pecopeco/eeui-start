<template lang="pug">
  .body
    tabbar.tabbar(tabType="bottom" underlineGravity=1 underlineHeight=1 underlineColor="#f2f2f2")
      tabbar-page.page(statusBarColor="#2c3e50" title="首页" selectedIcon="tb-home-fill")
        home
      tabbar-page.page(statusBarColor="#d73a49" title="我的" message="3" selectedIcon="tb-my-fill")
        my
</template>

<script>
import home from './home'
import my from './my'

export default {
  components: {
    home,
    my
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="stylus">

.body {
}
.tabbar  {
  flex: 1;
  border-bottom: 1px solid #000;
}
.page {
  width: 750px;
}
</style>