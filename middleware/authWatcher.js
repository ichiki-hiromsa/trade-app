import { auth } from '@/plugins/firebase'

export default async ({ store, parms, redirect, route }) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user.uid)
      //ログインできていたらstoreに認証情報を書き込む
      const loginInfo = {
        uid: user.uid,
        isLogin: true
      }
      // ストアの情報書き換え→ミューテーションへ
      store.commit('setLoginInfo', loginInfo)
      //actions呼び出し
      store.dispatch('getUserInfo')
    } else {
      //storeのログイン情報を消す
      //ログイン画面に飛ばす。router.nameはurl
      // if (route.name !== "signup") redirect("/signup")
    }
  })
}