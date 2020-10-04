import Vuex from 'vuex'

export default () => new Vuex.Store({
  state: {
          isLogin: false,
  },
  getters: {
    isLogin: (state) => state.isLogin,
  },
  mutations: {
    setisLogin(state,login){
    state.isLogin = login
    }
  },
  actions: {
    login({commit},login){
      commit('setisLogin',login)
    }
  }
})