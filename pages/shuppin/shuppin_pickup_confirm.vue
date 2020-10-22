<template>
  <v-container>
    <v-row justify="center">
      <v-card flat width="90%" max-width="368" color="transparent">
        <v-card-title class="justify-center headline">
          商品を取りに来てもらう
        </v-card-title>

        <v-form ref="form" v-model="valid">
          <!-- 子が親に知らせて親が値を変更する→.sync -->
          <!-- バインドするキーにsyncをつけると送受信が可能になる -->
          <v-text-field label="ID"/>
          <v-textarea label="内容" outlined>
          </v-textarea>
          <v-text-field label="添付ファイル"/>
          <v-text-field label="住所"/>
          <v-text-field label="電話番号"/>
          <!-- フォームチェック -->
          <v-text-field label="第一希望日時"/>
          <v-text-field label="第二希望日時"/>
          <v-text-field label="第三希望日時"/>

          <v-card-text class="text-center">
            <a href="/shuppin/shuppin_end">
              <v-btn >
                内容を確認
              </v-btn>
            </a>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-divider/>
        </v-card-actions>

        <v-card-actions>
          <v-btn to="/shuppin/shuppin_pickup" class="mx-auto px-4">
            修正する
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return{
      checked:false,
      content:'',
      valid: true,
      loading: false,
      requestDate:''
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>