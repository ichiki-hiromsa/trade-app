<template>
  <v-row justify="center" align="center" width="80%">
    <v-card class="mx-auto px-auto" width="800px" tile>
      <v-list dense>
        <v-subheader>お知らせ一覧</v-subheader>
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
    </v-card>
  </v-row>
</template>

<script>
export default {
  data(){
    return{
      item: 1,
      items: [
        { 
          text: 'お知らせ1',
          to:'/information/informations/info1'
        },
        { 
          text: 'お知らせ2',
          to:'/'
        },
        { 
          text: 'お知らせ3',
          to:'/'
        },
      ]
    }
  }
}
</script>