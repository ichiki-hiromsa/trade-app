<template>
  <v-container>
    <v-row justify="center" align-content="center">
      <v-col cols=8>
        <v-card flat color="transparent" class="justify-center">
          <v-card-title class="justify-center headline">
            商品をもらう
          </v-card-title>
          <v-form ref="form" >
            <v-text-field label="ID"/>
            <!-- 前のフォーム次第 -->
            <v-text-field label="住所"/>
            <v-text-field label="電話番号"/>
            <v-img :src="img_src"></v-img>
            <v-card-text>
              必要ポイント{{needed_points}}
            </v-card-text>
            <v-card-text>
              所持ポイント{{avilable_points}}
            </v-card-text>

            <v-card-text class="text-center">
              <v-btn to="/trade/purchase_points" nuxt>
                ポイントを増やす
              </v-btn>
            </v-card-text>
          </v-form>
  
          <v-card-actions>
            <v-divider/>
          </v-card-actions>
        </v-card>        
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290" aline="center">
        <!-- activator="{ on }"でその要素がクリックされると、親のテンプレートの内容を表示する。 -->
        <!-- 計算して所持ポイント＜必要ポイントなら押せないようにする -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            確認
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">
            トレードを確定してよろしいですか？
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              いいえ
            </v-btn>
            <v-btn color="green darken-1" text @click="dialog = false" to="/shuppin/shuppin_end" nuxt>
              はい
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center" class="mt-5">
        <v-card flat color="transparent" class="justify-center">
          <v-card-actions>
            <v-btn to="/item_detail/item_detail" nuxt class="mx-auto px-4">
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
      img_src:'/img/img1.jpg',
      needed_points:'100',
      avilable_points:'200',
      dialog:false,
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>