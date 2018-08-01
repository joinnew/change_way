import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import actions from './actions'
import mutations from './mutations'



Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchWords: [],
    hotRecom: [],
    special: [],
    commentList: [],
    allBooks: [],
    searchHistory: [],
    tempHistory: []
  },
  actions,
  mutations,
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => {}
      }
    })
  ]
})

export default store;