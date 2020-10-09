<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
    <!-- 左のプルダウンリスト中身 -->
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-toolbar-title v-text="title" />
      
      <v-spacer />
      <!-- 状態によってログイン/ログアウト表示変更 -->
      <v-toolbar-items>
        <v-btn v-if="!$store.state.isLogin" to="/regist/regist_top" nuxt>
          新規会員登録
        </v-btn>
        <v-btn v-if="!$store.state.isLogin" to="/signup" nuxt>
          ログイン
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>

</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'トップ',
          to: '/'
        },
        {
          icon: 'mdi-star',
          title: 'マイページ',
          to: '/mypage/mypage_top'
        },
        {
          icon: 'mdi-apps',
          title: 'お知らせ',
          to: '/information'
        },
                {
          icon: 'mdi-apps',
          title: '規約',
          to: '/tos'
        },
        {
          icon: 'mdi-help-box',
          title: 'お問い合わせ',
          to: '/contact/contact_main'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '交換アプリ'
    }
  }
}
</script>
