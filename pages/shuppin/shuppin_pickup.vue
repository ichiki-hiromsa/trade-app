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
          <v-file-input label="ファイルを選択" @change="getFileContent"/>
           {{ content }}
          <v-text-field label="住所"/>
          <v-text-field label="電話番号"/>
          <!-- フォームチェック -->
          <dl>
            <dt>第一希望日時</dt>
            <dd>
              <Datetime
                v-model="requestDate"
                :minute-interval="30"
                :format="'YYYY-MM-DD HH:mm'"
                :disabled-hours="['00', '01', '02', '03', '04', '05', '06', '07', '08', '17', '18', '19', '20', '21', '22', '23']"
                :overlay="true"
                :min-date="start"
                :max-date="end"
              ></Datetime>
            </dd>
          </dl>
          <dl>
            <dt>第二希望日時</dt>
            <dd>
              <Datetime
                v-model="requestDate"
                :minute-interval="30"
                :format="'YYYY-MM-DD HH:mm'"
                :disabled-hours="['00', '01', '02', '03', '04', '05', '06', '07', '08', '17', '18', '19', '20', '21', '22', '23']"
                :overlay="true"
                :min-date="start"
                :max-date="end"
              ></Datetime>
            </dd>
          </dl>
          <dl>
            <dt>第三希望日時</dt>
            <dd>
              <Datetime
                v-model="requestDate"
                :minute-interval="30"
                :format="'YYYY-MM-DD HH:mm'"
                :disabled-hours="['00', '01', '02', '03', '04', '05', '06', '07', '08', '17', '18', '19', '20', '21', '22', '23']"
                :overlay="true"
                :min-date="start"
                :max-date="end"
              ></Datetime>
            </dd>
          </dl>

          <v-card-text class="text-center">
            <a href="/shuppin/shuppin_pickup_confirm">
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
import moment from 'moment'
import Datetime from 'vue-ctk-date-time-picker';
import '@/node_modules/vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  components: {
    Datetime
  },
  data () {
    return{
      content:'',
      valid: true,
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
  },
  computed:{
    start() {
      // min-date に明日の9時を指定
      const start = moment().add(1, 'days').hour(8)
      return start.format('YYYY-MM-DDTHH:mm:ss')
    },
    end() {
      // max-date に min-date から3ヶ月後を指定
      const start = moment(this.start)
      const end = start.add(3, 'months').endOf('day')
      return end.format('YYYY-MM-DDTHH:mm:ss')
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>