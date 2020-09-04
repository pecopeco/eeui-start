"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var eeui = app.requireModule('eeui');
Vue.mixin({
  data: function data() {
    return {};
  },
  computed: {
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;
      return platform.toLowerCase() === 'ios';
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;
      return platform.toLowerCase() === 'android';
    },
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;
      return this.isIOS && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight === 1792 || deviceHeight === 1624);
    },
    // 页面高度(屏幕高度减去导航栏)
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;
      var navHeight = this.isIPhoneX ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },
    // 屏幕高度
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;
      return env.deviceHeight / env.deviceWidth * 750;
    }
  },
  methods: {
    go: function go(key) {
      var barColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#2c3e50';
      var barStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var obj = {
        statusBarColor: barColor,
        barStyle: true
      };

      if (_typeof(key) === 'object') {
        obj.url = 'root://pages' + key.path + '.js';
        obj.params = key.query || {};
        obj = Object.assign(obj, key);
      } else {
        obj.url = 'root://pages' + key + '.js';
        obj.params = {};
      }

      eeui.openPage(obj);
    },
    goBack: function goBack() {
      eeui.closePage();
    },
    toast: function toast(val) {
      eeui.toast({
        message: val,
        gravity: 'middle'
      });
    },
    http: function http(url) {
      var _this = this;

      var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var type = arguments.length > 2 ? arguments[2] : undefined;
      var requestUrl; // 拦截重复请求

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
      return new Promise(function (resolve) {
        eeui.ajax({
          url: transUrl,
          method: type,
          data: compleForm
        }, function (res) {
          if (res.code === 200) {
            setTimeout(function () {
              requestUrl = '';
              requestForm = {};
            }, 300);
            eeuiLog.log('请求成功：' + res.result);
            resolve(res.result);
          } else {
            setTimeout(function () {
              requestUrl = '';
              requestForm = {};
            }, 300);

            _this.toast('错误请求：' + res.result);

            eeuiLog.log('错误请求：' + res.result);
            resolve(false);
          }
        });
      });
    },
    setHttp: function setHttp() {
      var _this2 = this;

      this.http.get = function (url, form) {
        return _this2.http(url, form, 'get');
      };

      this.http.post = function (url, form) {
        return _this2.http(url, form, 'post');
      };

      this.http["delete"] = function (url, form) {
        return _this2.http(url, form, 'delete');
      };

      this.http.put = function (url, form) {
        return _this2.http(url, form, 'put');
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
    },
    // 表单验证
    validate: function validate(arr) {
      var err = {};
      arr.some(function (item) {
        // 数字转换字符串
        if (typeof item.key === 'number') {
          item.key = item.key.toString();
        } // 验证非空


        if (!item.key || item.key.match(/^[ ]+$/)) {
          err[item.type] = true;
          return err.msg = '请填写' + item.name;
        } // 验证姓名


        if (item.type === 'name' && (!/^[\u4e00-\u9fa5]+$/.test(item.key) || item.key.length < 2)) {
          err[item.type] = true;
          return err.msg = '请输入正确的' + item.name;
        } // 验证手机号


        if (item.type === 'phone' && !(item.key.length === 11 && /^((13|14|15|17|18|19)[0-9]{1}\d{8})$/.test(item.key))) {
          err[item.type] = true;
          return err.msg = '请输入正确的' + item.name;
        } // 验证身份证号


        if (item.type === 'idCard' && !/^\d{6}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(item.key)) {
          err[item.type] = true;
          return err.msg = '请输入正确的' + item.name;
        } // 验证金额


        if (item.type === 'price' && (!Number.isFinite(Number(item.key)) || Number(item.key) <= 0 || item.key.split('.')[1] && item.key.split('.')[1].length > 2)) {
          err = '请输入正确的' + item.name;
        }
      });
      return Object.keys(err).length ? err : '';
    }
  },
  mounted: function mounted() {
    this.setHttp();
  }
});