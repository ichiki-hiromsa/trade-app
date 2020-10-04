<template>
  <div justify="center" align="center">
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />      
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn color="white" class="black--text">
        ログイン
      </v-btn>
    </v-app-bar>

    <v-row justify="center" align="center" class="grey lighten-3">
      <v-col v-for="(icon,index) in icons" :key="index" cols="12" sm="6" md="4">
        <v-card height="150px" width="200px">
          <a href="/item_detail">
          <img :src="icon.img" height="100px" width="150px"/>
          </a>
          <!-- <img src="/img/img1.jpg" height="200"> -->
        </v-card>
      </v-col>



    </v-row>
    <v-card-actions class="justify-center">
      <v-btn>
        トレードに出す
      </v-btn>
    </v-card-actions>

  </div>  
</template>

<script>

export default {
  data () {
    return {
      icons:[
        {
          img:'/img/img1.jpg',
          to:'/item_detail'
        },
        {
          img:'/img/img1.jpg',
          to:'/'
        },
        {
          img:'/img/img1.jpg',
          to:'/'
        },
        {
          img:'/img/img1.jpg',
          to:'/'
        },
        {
          img:'/img/img1.jpg',
          to:'/'
        }
      ]
    }
  }
}
</script>
