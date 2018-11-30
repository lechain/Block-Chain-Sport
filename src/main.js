import Vue from 'vue'
import App from './App.vue'
import AjaxPlugin from 'vux/src/plugins/ajax'
import WechatPlugin from 'vux/src/plugins/wechat'
import ToastPlugin from 'vux/src/plugins/toast'
import ConfigPlugin from 'vux/src/plugins/config'
import querystring from 'vux/src/tools/querystring'
import './assets/app.css'
//import router from './router'

//router.beforeEach((to, from, next) => {
//    if (to.meta.title) {
//        document.title = to.meta.title
//    }
//    next()
//})

// 移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(AjaxPlugin)
Vue.use(WechatPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfigPlugin, {
    $layout: 'VIEW_BOX'
})

Vue.config.productionTip = false
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_URL
Vue.prototype.$http.defaults.timeout = process.env.VUE_HTTP_TIMEOUT
Vue.prototype.$http.defaults.headers = {'Cache-Control': 'max-age=0, min-refresh=0' }
Vue.prototype.$user = querystring.parse(window.location.search.substring(1))

Vue.prototype.$toast = function(msg, cb) {
    this.$vux.toast.show({
        text: msg,
        width: "10em",
        position: 'middle',
        type: 'text',
        onHide() {
            typeof cb == "function" && cb()
        }
    })
}

process.env.NODE_ENV === 'development' ? 
    new Vue({ render: h => h(App) }).$mount('#app') : WechatPlugin.$wechat.miniProgram.getEnv(res => {
        if (res.miniprogram)
            new Vue({ render: h => h(App) }).$mount('#app')
    })
