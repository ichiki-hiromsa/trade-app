<template>
  <v-row justify="center" align="center">
    <v-card class="justify-center" width="500px">
      <v-form ref="form">
          <v-textarea label="内容">
          </v-textarea>
      </v-form>
      <v-card-actions class="justify-center">
        <!-- 問い合わせ内容を問い合わせ窓口にメールを飛ばすような実装 -->
        <a href="/contact/contactfinish">
          <v-btn>
            送信
          </v-btn>
        </a>
      </v-card-actions>
      <v-card-actions class="justify-center">
        <a href="/contact/contact_main">
          <v-btn>
            戻る
          </v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<<style scoped>
a{
  text-decoration: none;
}
</style>