<template>
  <v-container>
    <v-row justify="center">
      <v-card flat width="90%" max-width="368" color="transparent">
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
            必要ポイント
          </v-card-text>
          <v-card-text>
            所持ポイント
          </v-card-text>
          
          <v-card-text class="text-center">
            <v-btn nuxt-link:to="/shuppin/shuppin_end">
              確認してトレード
            </v-btn>
          </v-card-text>
        </v-form>

        <v-card-actions>
          <v-divider/>
        </v-card-actions>

        <v-card-actions>
          <v-btn to="/shuppin/shuppin_send" class="mx-auto px-4">
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
      img_src:'/img/img1.jpg',
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>