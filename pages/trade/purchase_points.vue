<template>
  <v-row justify="center" align="center" width="80%">
    <v-card class="mx-auto px-auto" width="800px" tile>
      <v-list dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>100バリュー</v-list-item-title>  
              <v-list-item-subtitle>¥100</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title></v-list-item-title>  
            </v-list-item-content>
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
ul{
  list-style-type: none;
}
li{
  border-bottom:1px solid  chocolate;
}
</style>