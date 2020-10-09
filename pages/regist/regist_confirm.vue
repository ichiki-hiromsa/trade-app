<template>
  <v-container>
    <v-row justify="center">
      <v-card flat width="90%" max-width="368" color="transparent">
        <v-card-title class="justify-center headline">
          登録内容の確認
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
          <v-text-field label="パスワード"/>
          <v-text-field label="メール"/>

          <v-card-text class="text-center">
            登録することで<a href="/tos"  target="_blank" rel="noopener noreferrer">利用規約</a>と<a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意したものとみなされます。
          </v-card-text>

          <v-card-text class="text-center">
            <v-btn :disabled="!valid || loading" :loading="loading" color="primary" @click="signup">
              登録する(無料)
            </v-btn>
          </v-card-text>
          <v-card-text class="text-center">
            <a href="/regist/regist_finish">
              <v-btn >
                登録する(テスト用ボタン)
              </v-btn>
            </a>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-divider/>
        </v-card-actions>

        <v-card-actions>
          <v-btn to="/regist/regist_top" class="mx-auto px-4">
            戻る
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