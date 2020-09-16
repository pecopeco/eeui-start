const eeui = app.requireModule('eeui')
let modal = app.requireModule('modal')

let configUrl = 'https://lnrapp.xianglu-china.com'

Vue.mixin({
	data () {
		return {
		}
  },
  computed: {
    isIOS () {
      const { platform } = weex.config.env
      return platform.toLowerCase() === 'ios'
    },
    isAndroid () {
      const { platform } = weex.config.env
      return platform.toLowerCase() === 'android'
    },
    isIPhoneX () {
      const { deviceHeight } = weex.config.env
      return (
        this.isIOS &&
        (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight === 1792 || deviceHeight === 1624)
      )
    },
    // 页面高度(屏幕高度减去导航栏)
    getPageHeight () {
      const { env } = weex.config;
      const navHeight = this.isIPhoneX ? 176 : 132;
      return (env.deviceHeight / env.deviceWidth) * 750 - navHeight;
    },
    // 屏幕高度
    getScreenHeight () {
      const { env } = weex.config;
      return (env.deviceHeight / env.deviceWidth) * 750;
    }
  },
	methods: {
		go (key, barColor = '#efefef', barStyle = false) {
      let obj = {statusBarColor: barColor, statusBarStyle: barStyle, animatedType: 'push'}
      if (typeof key === 'object') {
        obj.url = 'root://pages' + key.path + '.js'
        obj.params = key.query || {}
        obj = Object.assign(obj, key)
      } else {
        obj.url = 'root://pages' + key + '.js'
        obj.params = {}
      }
			eeui.openPage(obj)
    },
    goBack () {
      eeui.closePage()
    },
		toast (val) {
			modal.toast({message: val, duration: 0.3})
		},
		http (url, form = {}, type) {
      let requestUrl
      // 拦截重复请求
      if (requestUrl === url && this.isObjectValueEqual(requestForm, form)) {
        return
      }
      requestUrl = url
      requestForm = JSON.parse(JSON.stringify(form))
    
      let compleForm = form
      // let presetForm = {
      //   orgName: 123456
      // }
      // Object.assign(compleForm, presetForm)
      let transUrl = url.indexOf("http") !== -1 ? url : configUrl + url
      return new Promise((resolve) => {
        eeui.ajax({
          url: transUrl,
          method: type,
          data: compleForm
        }, (res) => {
          if (res.code === 200) {
            setTimeout(() => {
              requestUrl = ''
              requestForm = {}
            }, 300)
            console.log('请求成功：' + res.result)
            resolve(res.result)
          } else {
            setTimeout(() => {
              requestUrl = ''
              requestForm = {}
            }, 300)
            this.toast('错误请求：' + url + ' ' + res.code)
            console.log('错误请求：' + url + ' ' + res.code)
            resolve(false)
          }
        })
      })
    },
    setHttp () {
      this.http.get = (url, form) => this.http(url, form, 'get')
      this.http.post = (url, form) => this.http(url, form, 'post')
      this.http.delete = (url, form) => this.http(url, form, 'delete')
      this.http.put = (url, form) => this.http(url, form, 'put')
		},
		isObjectValueEqual (objA, objB) {
      let aProps = Object.getOwnPropertyNames(objA)
      let bProps = Object.getOwnPropertyNames(objB)
      if (aProps.length !== bProps.length) {
        return false
      }
      for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i]
        let propA = objA[propName]
        let propB = objB[propName]
        if (typeof (propA) === 'object') {
          if (this.isObjectValueEqual(propA, propB)) {
            return true
          } else {
            return false
          }
        } else if (propA !== propB) {
          return false
        }
      }
      return true
    },
    // 表单验证
    validate (arr) {
      let err = {}
      arr.some((item) => {
        // 数字转换字符串
        if (typeof (item.key) === 'number') {
          item.key = item.key.toString()
        }
        // 验证非空
        if (!item.key || item.key.match(/^[ ]+$/)) {
          err[item.type] = true
          err.msg = '请填写' + item.name
          return true
        }
        // 验证姓名
        if (item.type === 'name' && (!/^[\u4e00-\u9fa5]+$/.test(item.key) || item.key.length < 2)) {
          err[item.type] = true
          err.msg = '请输入正确的' + item.name
          return true
        }
        // 验证手机号
        if (item.type === 'phone' && !(item.key.length === 11 && /^((13|14|15|17|18|19)[0-9]{1}\d{8})$/.test(item.key))) {
          err[item.type] = true
          err.msg = '请输入正确的' + item.name
          return true
        }
        // 验证身份证号
        if (item.type === 'idCard' && !/^\d{6}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(item.key)) {
          err[item.type] = true
          err.msg = '请输入正确的' + item.name
          return true
        }
        // 验证金额
        if (item.type === 'price' && ((!Number.isFinite(Number(item.key)) || Number(item.key) <= 0) || (item.key.split('.')[1] && item.key.split('.')[1].length > 2))) {
          err.msg = '请输入正确的' + item.name
          return true
        }
      })
      return Object.keys(err).length ? err : ''
    }
	},
	mounted () {
    this.setHttp()
	}
})
