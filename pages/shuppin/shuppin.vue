<template>
  <v-row justify="center" align="center" width="80%">
    <v-card class="mx-auto px-auto" width="800px" tile>
      <v-list dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item :to="item.to" v-for="(item, i) in items" :key="i">
            <v-list-item-content>
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
            トップページに戻る
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
      items: [
        { 
          text: '送る',
          to:'/shuppin/shuppin_send'
        },
        { 
          text: '取りに来てもらう',
          to:'/shuppin/shuppin_pickup'
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
