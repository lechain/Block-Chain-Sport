import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import md5 from 'vux/src/tools/md5/index.js'
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

Vue.use(WechatPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfigPlugin, {
    $layout: 'VIEW_BOX'
})

Vue.config.productionTip = false
Vue.prototype.$user = querystring.parse(window.location.search.substring(1))
Vue.prototype.$http = axios

axios.interceptors.request.use(config => {
    config.baseURL = process.env.VUE_APP_URL
    config.timeout = 3500
    config.headers = {
        'Cache-Control': 'max-age=0',
        'Mobile': Vue.prototype.$user.mobile,
        'Addr': Vue.prototype.$user.addr,
        'Expires': +new Date()
    }

    config.headers.Sign = md5([config.headers.Mobile, config.headers.Addr.substr(6, 11), config.headers.Expires].join('#|#'))
    return config 
}, err => Promise.reject(error))

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
