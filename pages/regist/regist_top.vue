<template>
  <v-container>
    <v-row justify="center">
      <v-card flat width="90%" max-width="368" color="transparent">
        <v-card-title class="justify-center headline">
          新規会員登録
        </v-card-title>

        <v-form ref="form" v-model="valid">
          <!-- 子が親に知らせて親が値を変更する→.sync -->
          <!-- バインドするキーにsyncをつけると送受信が可能になる -->
          <v-text-field label="姓"/>
          <v-text-field label="名"/>
          <v-text-field label="ID"/>
          <v-text-field label="住所"/>
          <v-text-field label="電話番号"/>
          <v-text-field label="クレカ情報"/>

          <email-form :email.sync="email"/>
          <!-- <v-text-field 
          :email.sync="email" /> -->
          <!-- validation→→org, パスワードコンポーネント内でフラグとして扱う。デフォルトでfalseの値を持ち、プロパティを渡すとtrueになる-->
          <password-form :password.sync="password" validation/>
          <!-- <v-text-field :password.sync="password" validation/> -->
          <v-card-text class="text-center">
            登録することで<a href="/tos"  target="_blank" rel="noopener noreferrer">利用規約</a>と<a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意したものとみなされます。
          </v-card-text>

          <v-card-text class="text-center">
            <a href="/regist/regist_confirm">
              <!-- ※切り替える -->
              <!-- <v-btn :disabled="!valid || loading" :loading="loading" color="primary" @click="signup"> -->
              <v-btn >
                登録内容を確認
              </v-btn>
            </a>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-divider/>
        </v-card-actions>

        <v-card-actions>
          <v-btn to="/signup" class="mx-auto px-4">
            ログイン画面へ
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import EmailForm from '~/components/users/EmailForm.vue'
import PasswordForm from '~/components/users/PasswordForm.vue'

export default {
  components: {
    EmailForm,
    PasswordForm
  },
  data: () => ({
    valid: true,
    email: '',
    password: '',
    loading: false
  })
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>