<template>
  <v-row justify="center" align="center" width="80%">
    <v-card class="mx-auto px-auto" width="800px" tile>
      <v-list dense>
        <v-subheader>
          <v-avatar class="mr-5">
            <img :src="iconimg" alt="icon">
          </v-avatar>
          マイページ（ユーザ名）
        </v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item :to="item.to" v-for="(item, i) in items" :key="i">
            <v-list-item-content>
            <!-- <v-list-item-content :to="item.to"> -->
              <v-list-item-title v-text="item.text"></v-list-item-title>  
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>
                mdi-pan-right
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-card-actions class="justify-center">
        <a href="/">
          <v-btn color="black--text" class="grey lighten-3">
            トップに戻る
          </v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data(){
    return{
      iconimg:'/img/whitebair.jpg',
      item: 1,
      items: [
        { 
          text: 'お気に入り一覧',
          to:'/favorites'
        },
        { 
          text: 'ポイント照会',
          to:'/point/point'
        },
        { 
          text: 'トレード履歴',
          to:'/trade/trade_top'
        },
        { 
          text: 'お知らせ',
          to:'/information/information'
        },
        { 
          text: 'プライバシー',
          to:'/privacy'
        },
        { 
          text: '利用規約',
          to:'/tos'
        },
        { 
          text: '登録情報の変更',
          to:'/regist/modify_regist_info_check'
        }

      ]
    }
  }
}
</script>
<style scoped>
  a{
    text-decoration: none;
  }
</style>
