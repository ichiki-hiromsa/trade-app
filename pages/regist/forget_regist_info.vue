<template>
  <v-row justify="center">
    <v-card flat width="90%" class="justify-center">
      <v-card-title class="justify-center headline">
        パスワードの再設定
      </v-card-title>
      <v-form ref="form" class="justify-center">
        <v-text-field label="ご登録いただいたメールアドレス"/>
      </v-form>
      <v-card-text class="text-center">
        ご登録されたメールアドレスにパスワード再設定のご案内が送信されます。
      </v-card-text>
      <v-card-actions class="justify-center">
        <a href="/regist/forget_regist_info_end">
          <v-btn >
            送信
          </v-btn>
        </a>
      </v-card-actions>
      <v-card-actions class="justify-center">
        <a href="/regist/regist_top">
          <v-btn >
            戻る
          </v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-row>
</template>