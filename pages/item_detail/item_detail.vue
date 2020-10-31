<template>
  <v-card>
    <v-card-title>
      商品詳細ページ
    </v-card-title>

      <img src='/img/img1.jpg' height='100px'>
    <v-card-text>
      商品について...
    </v-card-text>
    <v-card-text>
      必要に交換なポイント：
    </v-card-text>
    <v-card-actions>
        <v-btn>
          お気に入り
        </v-btn>
    </v-card-actions>
    <!-- ログイン中は表示 -->
    <v-card-actions>
        <v-btn nuxt-link to="/trade/get_item">
          交換する
        </v-btn>
    </v-card-actions>
    <v-card-actions>
        <v-btn nuxt-link to="/">
          トップへ戻る
        </v-btn>
    </v-card-actions>
  </v-card>

</template>