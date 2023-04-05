import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
