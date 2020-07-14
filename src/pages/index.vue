<template lang="pug">
  .body
    tabbar.tabbar(
      tabType="bottom"
      underlineGravity=1
      underlineHeight=1
      underlineColor="#f2f2f2"
      :tabPages="tabPages"
    )
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      tabPages: [
        {statusBarColor: "#2c3e50", url: "root://pages/home/index.js", title: "首页", selectedIcon: "tb-home-fill"},
        {statusBarColor: "#d73a49", url: "root://pages/my/index.js", title: "我的", message: "3", selectedIcon: "tb-my-fill"}
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>

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