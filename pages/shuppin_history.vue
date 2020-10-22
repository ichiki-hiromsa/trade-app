<template>
  <v-container>
    <v-row justify="center">
      <v-card-text class="subtitle-1 text-center">
        出品履歴
      </v-card-text>
      <v-data-table class="mt-5" :headers="headers" :items="items" sort-by="date">
        <!-- 欲しい表示はできているが、エラーの内容がわからない -->
        <!-- modalとかで画像が表示されるようにする -->
        <template v-slot:item.action="{ item }">
          <v-btn small class="mx-1" color="orange accent-4" @click="dialog=!dialog">
            詳細{{items.value}}
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
    <v-dialog v-model="dialog" width=500>
      <v-card>
        <v-card-title>Modal Title</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-sheet class="pa-3">
            <div class="body-1">Modal Text</div>
          </v-sheet>
        </v-card-text>
        <v-img :src="items.img"/>
      </v-card>
    </v-dialog>
  </v-container>
  
</template>

<script>
import { mdiImageFilterBlackWhite } from '@mdi/js';
export default {
  data () {
    return {
      dialog:false,
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
          notice : "電気",
          img:'/img/img1.jpg'
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