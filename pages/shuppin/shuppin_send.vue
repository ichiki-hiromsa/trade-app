<template>
  <v-container>
    <v-row justify="center">
      <v-card flat width="90%" max-width="368" color="transparent">
        <v-card-title class="justify-center headline">
          商品を送る
        </v-card-title>

        <v-form ref="form" v-model="valid">
          <!-- 子が親に知らせて親が値を変更する→.sync -->
          <!-- バインドするキーにsyncをつけると送受信が可能になる -->
          <v-text-field label="ID"/>
          <v-textarea label="内容" outlined="true">
          </v-textarea>
          <v-file-input label="テキストファイルを選択" @change="getFileContent"/>
           {{ content }}
          <v-checkbox label="価格確認を希望する" v-model="checked">            
          </v-checkbox>
          <v-text-field label="住所" v-if="checked"/>
          <v-text-field label="電話番号"/>
          <!-- フォームチェック -->
          <v-text-field label="発送日時"/>

          <v-card-text class="text-center">
            <a href="/shuppin/shuppin_confirm">
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
          <v-btn to="/shuppin/shuppin" class="mx-auto px-4">
            戻る
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
    }
  },
  methods: {
    //非同期関数の宣言
    async getFileContent (file) {
      try {
        const content = await this.readFileAsync(file)
        this.content = content
      } catch (e) {
        console.log(e)
      }
    },
    readFileAsync (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        //読み込み成功時のイベント
        //ファイルサイズの上限も設定したい
        reader.onload = () => {
          resolve(reader.result)
        }
        //ファイル読み込み失敗時にここに設定したコールバック関数が呼び出される
        reader.onerror = reject
        reader.readAsText(file)
      })
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>