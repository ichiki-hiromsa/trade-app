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
          <id-form :id.sync="id" validation/>
          <!-- validation→→org, パスワードコンポーネント内でフラグとして扱う。デフォルトでfalseの値を持ち、プロパティを渡すとtrueになる-->
          <password-form :password.sync="password" validation/>
          <v-card-text class="text-center">
            <v-btn :disabled="!valid || loading" :loading="loading" color="primary" @click="signup">
              ログイン
            </v-btn>
          </v-card-text>
          <v-card-text class="justify-center text-center">
            <a href="/regist/forget_regist_info">パスワードを忘れた</a>
          </v-card-text>
        </v-form>

          <v-card-actions>
            <v-divider />
          </v-card-actions>

          <v-card-text class="text-center">
            会員登録はお済みですか？
          </v-card-text>

          <v-card-actions>
            <v-btn to="/regist/regist_top" class="mx-auto px-4">
              新規会員登録
            </v-btn>
          </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<!-- ここから -->

<script>
// methodの理解
import PasswordForm from '~/components/users/PasswordForm.vue'
import IdForm from '~/components/users/IdForm.vue'

export default {
  components: {
    PasswordForm,
    IdForm
  },
  data: () => ({
    valid: true,
    password: '',
    id:'',
    loading: false
  }),
  // 理解する
  methods: {
    signup () {
      if (this.$refs.form.validate()) { 
        this.loading = true
        alert(
          `id: ${this.id}\n` +
          `password: ${this.password}\n` +
          'これらをRailsに送信してuserを作成します'
        )
        setTimeout(() => {
          this.loading = false
          this.$refs.form.reset() // form clear
        }, 2000)
      }
    }
  }
}
</script>