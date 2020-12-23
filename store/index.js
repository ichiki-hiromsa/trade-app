import Vuex from 'vuex'
import {db} from '@/plugins/firebase'

// vuexページまたいで
export default () => new Vuex.Store({
  // 本体
  //メソッドの本体的な。触らない。
  state: {
    loginInfo: {
      // ログインフラグの初期状態
      isLogin: false,
      uid: "",
    },
    userInfo:null
  },
  getters: {
    //関数
    // 値の取得
    loginInfo: state => state.loginInfo,
    // 下記の略
    // loginInfo:function(state){
    //   return state.loginInfo
    userInfo:state=>state.userInfo
    // }
  },
  // 値を変えていい
  // 同期処理
  mutations: {
    // 第一引数は必ずstate
    setLoginInfo(state, loginInfo) {
      state.loginInfo = loginInfo
    },
    setUserInfo(state,userInfo){
      state.userInfo=userInfo
      console.log(userInfo)
    }
  },
  // データ取得など、mutationの前処理
  // 非同期処理
  actions: {
    async getUserInfo({commit,state}){
      // シングルクォーテで弧った文字列＋ダラー以下でもよい
      const doc = await db.doc(`users/${state.loginInfo.uid}`).get()
      const data = doc.data()
      commit('setUserInfo',data)
    }
  }
})