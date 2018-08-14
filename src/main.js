// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// markdown
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// import fontawesome from '@fortawesome/fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import {faCube} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import qs from 'qs'

import './assets/css/gobal.css'
import 'element-ui/lib/theme-chalk/index.css'

// fontawesome.library.add(faCube)

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI, { size: 'small' })

Vue.use(mavonEditor)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
