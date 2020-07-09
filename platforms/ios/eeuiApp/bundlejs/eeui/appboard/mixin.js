"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var eeui = app.requireModule('eeui');
Vue.mixin({
  data: function data() {
    return {};
  },
  methods: {
    go: function go(obj) {
      eeui.openPage({
        url: obj.path,
        params: obj.query
      });
    },
    toast: function toast(val) {
      eeui.toast({
        message: val,
        gravity: 'middle'
      });
    },
    http: function http(url) {
      var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var type = arguments.length > 2 ? arguments[2] : undefined;

      // 拦截重复请求
      if (requestUrl === url && this.isObjectValueEqual(requestForm, form)) {
        return;
      }

      requestUrl = url;
      requestForm = JSON.parse(JSON.stringify(form));
      var compleForm = form; // let presetForm = {
      //   orgName: 123456
      // }
      // Object.assign(compleForm, presetForm)

      var transUrl = url.indexOf("http") !== -1 ? url : config.api_url + url;
      return eeui.ajax({
        url: transUrl,
        method: type,
        data: compleForm
      }, function (res) {
        if (res.code === 200) {
          setTimeout(function () {
            requestUrl = '';
            requestForm = {};
          }, 300);
          return res.result;
        } else {
          setTimeout(function () {
            requestUrl = '';
            requestForm = {};
          }, 300);
          eeuiLog.log(res);
        }
      });
    },
    setHttp: function setHttp() {
      var _this = this;

      this.http.get = function (url, form) {
        return _this.http(url, form, 'get');
      };

      this.http.post = function (url, form) {
        return _this.http(url, form, 'post');
      };

      this.http["delete"] = function (url, form) {
        return _this.http(url, form, 'delete');
      };

      this.http.put = function (url, form) {
        return _this.http(url, form, 'put');
      };
    },
    isObjectValueEqual: function isObjectValueEqual(objA, objB) {
      var aProps = Object.getOwnPropertyNames(objA);
      var bProps = Object.getOwnPropertyNames(objB);

      if (aProps.length !== bProps.length) {
        return false;
      }

      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        var propA = objA[propName];
        var propB = objB[propName];

        if (_typeof(propA) === 'object') {
          if (this.isObjectValueEqual(propA, propB)) {
            return true;
          } else {
            return false;
          }
        } else if (propA !== propB) {
          return false;
        }
      }

      return true;
    }
  },
  mounted: function mounted() {}
});