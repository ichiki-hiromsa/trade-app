<template>
  <v-container>
    <v-row justify="center">
      <v-card-text class="subtitle-1 text-center">
        出品履歴
      </v-card-text>
      <v-data-table class="mt-5" :headers="headers" :items="items" sort-by="date">
        <template v-slot:item="{}">
          <v-btn small class="mx-1" color="orange accent-4" :to="'/'">
            <v-icon>pageview</v-icon>詳細
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
    <v-card-actions class="justify-center">
      <a href="/trade/trade_top">
        <v-btn color="deep-orange lighten-2">
          戻る
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
          { text: '画像', 
            value: 'action'
          } 
        ],
      items:[
        { 
          date : "2020/10/1" , 
          points :100,
          notice : "電気"
        },
        { 
          date : "2020/10/3" , 
          points :120,
          notice : "靴下"
        },
        { 
          date : "2020/10/1" , 
          points :140,
          notice : "水"
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