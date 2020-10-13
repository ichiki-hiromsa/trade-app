<template>
  <v-container>
    <v-row justify="center">
      <v-card flat width="90%" max-width="368" color="transparent">
        <v-card-title class="justify-center headline">
          登録内容の変更
        </v-card-title>

        <v-form ref="form" v-model="valid">
          <!-- 子が親に知らせて親が値を変更する→.sync -->
          <!-- バインドするキーにsyncをつけると送受信が可能になる -->
          <v-text-field label="パスワード"/>

          <v-card-text class="text-center">
            <v-btn :disabled="!valid || loading" :loading="loading" color="primary" @click="signup">
              登録情報の変更へ
            </v-btn>
          </v-card-text>
          <v-card-actions class="justify-center">
            <a href="/regist/modify_regist_info">
              <v-btn>
                登録情報の変更へ(テスト)              
              </v-btn>
            </a>
          </v-card-actions>
        </v-form>

        <v-card-actions>
          <v-divider/>
        </v-card-actions>

        <v-card-actions>
          <v-btn to="/mypage/mypage_top" class="mx-auto px-4">
            マイページへ戻る
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    valid: true,
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

<style scoped>
a {
  text-decoration: none;
}
</style>