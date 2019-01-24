import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const searchModule = {
  namespaced: true,
  state: {
    value: ""
  },
  mutations: {
    updateSearch(state, value) {
      state.value = value
    }
  },
  actions: {
    saveSearch ({ commit }, value) {
      // something asynchronous first
      // later commit things
      setTimeout(() => {
        commit('updateSearch', value)
      }, 1000)
    }
  }
}

export default new Vuex.Store({
    modules: {
      search: searchModule
    },
    strict: process.env.NODE_ENV !== 'production'
})
