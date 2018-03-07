import Vue from 'vue'
import 'normalize.css'

import App from '@/components/App/index.vue'
import './style/index.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
