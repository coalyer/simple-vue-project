import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入normalize.css
import 'normalize.css'
// 引入mock
import './mock.js'

// 引入表单验证
import VeeValidate, { Validator } from 'vee-validate'
Vue.use(VeeValidate, { fieldsBagName: 'vee-fields' })
// 汉化表单验证
import zhCN from 'vee-validate/dist/locale/zh_CN'
Validator.localize('zh_CN', zhCN)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
