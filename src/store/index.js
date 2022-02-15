import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  // 可以认为是 store 的计算属性。就像计算属性一样
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
