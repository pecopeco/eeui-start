const eeui = app.requireModule('eeui')

Vue.mixin({
	data () {
		return {
		}
	},
	methods: {
		go (key) {
      let obj = {}
      if (typeof key === 'object') {
        obj = JSON.parse(JSON.stringify(key)) 
      } else {
        obj.path = key
        obj.query = {}
      }
			eeui.openPage({url: 'root://pages' + obj.path + '.js', params: obj.query || {}, statusBarType: obj.statusBarType || 'normal'})
    },
    goBack () {
      eeui.closePage()
    },
		toast (val) {
			eeui.toast({message: val, gravity: 'middle'})
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
      let transUrl = url.indexOf("http") !== -1 ? url : config.api_url + url
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
            resolve(res.result)
          } else {
            setTimeout(() => {
              requestUrl = ''
              requestForm = {}
            }, 300)
            this.toast('错误请求:' + res.result)
            console.log('错误请求:' + res.result)
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
    }
	},
	mounted () {
    this.setHttp()
	}
})
