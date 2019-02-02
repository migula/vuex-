import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  // 挂载
  store
}).$mount('#app')
