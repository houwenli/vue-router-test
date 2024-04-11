const test = {
  aaa: 1
}

let Vue
class VueRouter {
  constructor(options) {
    const {
      routes = [],
      mode = 'hash'
    } = options || {}

    this.mode = mode
    this.routes = routes
    // this.current = '/'
    Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')
    Vue.util.defineReactive(test, 'aaa', 1)
    console.log(5555, this)

    this.init()
  }

  init() {
    if (this.mode === 'hash') {
      this.watchHash()
    }
  }

  watchHash() {
    window.addEventListener('load', () => {
      this.current = location.hash.slice(1)
    })

    window.addEventListener('hashchange', () => {
      this.current = location.hash.slice(1)
    })
    
  }
}

VueRouter.install = function (_vue) {
  Vue = _vue
  console.log(Vue, 'vue router 初始化')

  Vue.mixin({
    beforeCreate() {
      // console.log(1111, this, '组件beforeCreate生命周期')
      if (this.$options.router) {
        Vue.prototype.$router =  this.$options.router
      }
    }
  })

  // 创建全局组件
  Vue.component('router-link', {
    render(h) {
      return h('a', {
        attrs: {
          href: '#' + this.to
        },
        onclick: () => {
          console.log(6666)
          test.aaa++
        }
      }, 'aaa')
    },
    props: {
      to: {
        type: String,
        require: true
      }
    }
  })

  Vue.component('router-view', {
    render(h) {
      console.log(this.$router)

      console.log(3333, test.aaa)
      let current = this.$router.current
      let routes = this.$router.routes
      let router = routes.find(item => item.path === current)
      return h(router.component)
    }
  })
}

export default VueRouter