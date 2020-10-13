<template>
  <v-container>
    <v-row justify="center" align-content="center">
      <v-card width="600px" class="justify-center aline-center">
        <v-card-title  class="justify-center headline">
          利用可能ポイント
        </v-card-title>
        <v-card-text class="justify-center text-center title">
          {{point}}
        </v-card-text>
      </v-card>
    </v-row>
    <v-row justify="center">
      <v-card-text class="subtitle-1 text-center">
        ポイント履歴
      </v-card-text>
      <v-data-table class="mt-5" :headers="headers" :items="items">
      </v-data-table>
    </v-row>
    <v-card-actions class="justify-center">
      <a href="/mypage/mypage_top">
        <v-btn color="deep-orange lighten-2">
          マイページへ戻る
        </v-btn>
      </a>
    </v-card-actions>    
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      point: 'xxx',
      headers: [
          { 
            text: '日時', 
            value: 'date' 
          },
          {
            text: 'ポイント',
            value: 'points',
          },
          { text: '備考', 
            value: 'notice' 
          },
        ],
      items:[
        { 
          date : "2020/10/1" , 
          points :100,
          notice : "電気"
        },
        { 
          date : "2020/10/1" , 
          points :120,
          notice : "靴下"
        },
        { 
          date : "2020/10/1" , 
          points :140,
          notice : "水"
        },
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