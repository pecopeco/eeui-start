"use strict";

var eeui = app.requireModule('eeui');
Vue.mixin({
  data: function data() {
    return {};
  },
  methods: {
    tips: function tips() {
      eeuiLog.log('tips');
    }
  }
});