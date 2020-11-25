<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
    <!-- 左のプルダウンリスト中身 -->
      <v-list>
        <v-list-item v-if="!$store.state.isLogin" to="/regist/regist_top" nuxt>
          <v-list-item-action>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            新規会員登録
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!$store.state.isLogin" to="/signup" nuxt>
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            ログイン
          </v-list-item-content>
        </v-list-item>
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
      title:'交換アプリ',
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
          to: '/information/information'
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
        },
        {
          icon: 'mdi-help-box',
          title: 'テスト',
          to: '/test'
        }
      ]
    }
  }
}
</script>
