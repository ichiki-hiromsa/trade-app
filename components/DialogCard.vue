<template>
  <v-card>
    <v-card-title>ポイント購入画面</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card-text>
              {{purche_yen}}で{{purche_point}}ポイント購入します。
              <br>よろしいですか？
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="success" @click="submit_y()">
        交換する
      </v-btn>
      <v-btn text color="secondary" @click="submit_n()">
        キャンセル
        {{select_flg}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    select_flg: '',
    purche_point:'',
    purche_yen:''
  },
  data() {
    return {
      returnData_y: {
        select_flg: true
      },
      returnData_n: {
        select_flg: false
      }
    }
  },
  methods: {
    // 親のclickに戻る
    submit_y() {
      this.$emit('update:clickSubmit', this.returnData_y.select_flg)
    },
    submit_n() {
      console.log("イケてる");
      this.$emit('update:clickSubmit', this.returnData_n.select_flg)
    }
  }
}
</script>