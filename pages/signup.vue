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
          <!-- <email-form :email.sync="email"/> -->
          <v-text-field :email.sync="email"/>
          <!-- validation→→org, パスワードコンポーネント内でフラグとして扱う。デフォルトでfalseの値を持ち、プロパティを渡すとtrueになる-->
          <!-- <password-form :password.sync="password" validation/> -->
          <v-text-field :password.sync="password" validation/>
          <v-card-text class="text-center">
            <v-btn :disabled="!valid || loading" :loading="loading" color="primary" @click="signup">
              登録する(無料)
            </v-btn>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-divider />
        </v-card-actions>

        <v-card-text class="text-center">
          会員登録はお済みですか？
        </v-card-text>

        <v-card-actions>
          <v-btn to="/login" class="mx-auto px-4">
            ログインする
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-row>
</v-container>
</template>

<!-- ここから -->

<script>
// methodの理解
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
  }),
  methods: {
    signup () {
      if (this.$refs.form.validate()) { 
        this.loading = true
        alert(
          `email: ${this.email}\n` +
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